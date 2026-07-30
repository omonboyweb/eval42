"use client";

import { Reveal, SplitTitle, useMagnet } from "@/lib/fx";

export default function Outro() {
  const btnRef = useMagnet<HTMLAnchorElement>();

  return (
    <section className="outro">
      <SplitTitle lines={["LET'S", "BUILD."]} />
      <Reveal>
        <a
          ref={btnRef}
          className="btn"
          href="mailto:omonbek001@gmail.com"
          data-hover
          style={{ fontSize: 16, padding: "22px 44px" }}
        >
          omonbek001@gmail.com <span className="arr">→</span>
        </a>
      </Reveal>
      <Reveal className="assure">
        <span>
          OR MESSAGE ME ON{" "}
          <a
            href="https://t.me/eval42"
            target="_blank"
            rel="noopener noreferrer"
            data-hover
          >
            TELEGRAM ↗
          </a>
        </span>
        <span>
          USUALLY REPLIES WITHIN <b>24H</b> · TASHKENT (GMT+5)
        </span>
      </Reveal>
    </section>
  );
}
