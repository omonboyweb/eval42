"use client";

import { Reveal, SplitTitle, useMagnet } from "@/lib/fx";

export default function Outro() {
  const btnRef = useMagnet<HTMLAnchorElement>();

  return (
    <section className="outro" id="contact">
      <Reveal>
        <span className="sec-tag">03 / CONTACT</span>
      </Reveal>
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
    </section>
  );
}
