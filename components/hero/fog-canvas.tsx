"use client";

import { useEffect, useRef } from "react";
import { lerp, prefersReducedMotion } from "@/lib/fx";

const VS = "attribute vec2 p; void main(){ gl_Position = vec4(p, 0., 1.); }";
const FS = `
precision highp float;
uniform vec2 u_res; uniform float u_t; uniform vec2 u_m;
float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float n(vec2 p){
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3. - 2. * f);
  return mix(mix(h(i), h(i + vec2(1., 0.)), f.x),
             mix(h(i + vec2(0., 1.)), h(i + vec2(1., 1.)), f.x), f.y);
}
float fbm(vec2 p){
  float v = 0., a = .5;
  for (int i = 0; i < 5; i++){ v += a * n(p); p *= 2.03; a *= .5; }
  return v;
}
void main(){
  vec2 uv = gl_FragCoord.xy / u_res;
  vec2 p = uv * vec2(u_res.x / u_res.y, 1.);
  float t = u_t * .05;
  float q = fbm(p * 1.6 + vec2(t, -t * .7));
  float r = fbm(p * 2.4 - q + vec2(-t * .6, t * .4));
  vec3 ink  = vec3(.024, .031, .059);
  vec3 deep = vec3(.05, .07, .19);
  vec3 acc  = vec3(.325, .227, .992);
  vec3 vio  = vec3(.486, .361, 1.);
  vec3 col = mix(ink, deep, smoothstep(.2, .85, q));
  col = mix(col, acc * .8, smoothstep(.55, .95, r) * .5);
  col = mix(col, vio * .85, smoothstep(.72, 1., q * r * 1.7) * .35);
  float d = distance(uv, u_m);
  col += acc * exp(-d * 4.5) * .22;
  col *= 1. - .45 * length(uv - .5);
  gl_FragColor = vec4(col, 1.);
}`;

export default function FogCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || prefersReducedMotion()) return;

    const gl = canvas.getContext("webgl", { antialias: false, alpha: false });
    if (!gl) return;

    const sh = (type: number, src: string) => {
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null;
    };
    const vs = sh(gl.VERTEX_SHADER, VS);
    const fs = sh(gl.FRAGMENT_SHADER, FS);
    if (!vs || !fs) return;
    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );
    const loc = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const uT = gl.getUniformLocation(prog, "u_t");
    const uRes = gl.getUniformLocation(prog, "u_res");
    const uM = gl.getUniformLocation(prog, "u_m");

    const size = () => {
      canvas.width = Math.max(2, canvas.offsetWidth * 0.5);
      canvas.height = Math.max(2, canvas.offsetHeight * 0.5);
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    size();

    let mx = 0.5,
      my = 0.5,
      tx = 0.5,
      ty = 0.5,
      raf = 0,
      visible = true;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX / innerWidth;
      ty = 1 - e.clientY / innerHeight;
    };

    const t0 = performance.now();
    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      if (!visible) return;
      mx = lerp(mx, tx, 0.05);
      my = lerp(my, ty, 0.05);
      gl.uniform1f(uT, (now - t0) / 1000);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform2f(uM, mx, my);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0].isIntersecting;
      },
      { threshold: 0 },
    );
    io.observe(canvas);

    addEventListener("resize", size);
    addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      removeEventListener("resize", size);
      removeEventListener("mousemove", onMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="fogbg" aria-hidden="true" />;
}
