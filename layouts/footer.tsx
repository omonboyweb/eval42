import Link from "next/link";

export default function Footer() {
  const data = [
    { title: "Telegram", link: "https://t.me/eval42" },
    {
      title: "Instagram",
      link: "https://www.instagram.com/omonbek_khojamurodov/",
    },
    { title: "GitHub", link: "https://github.com/omonboyweb" },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/omonbekxojamurodov/",
    },
    {
      title: "+99850 72777 45",
      link: "tel:+998507277745",
    },
  ];
  return (
    <footer className="bg-[#0B1221] text-slate-300 border-t border-blue-border">
      <div className="container border-blue-border!">
        <div className="flex py-5 md:items-center justify-between px-4 flex-col items-center gap-5 min-[600px]:flex-row min-[500px]:items-center">
          <div className="lg:col-span-2 flex flex-col items-start">
            <Link href="/">
              <span className="text-[32px]">Eval42</span>
            </Link>
          </div>

          <div>
            <ul className="flex text-[14px] text-slate-400 flex-col  min-[500px]:flex-row gap-3 items-center">
              {data.map((item) => (
                <li key={item.link}>
                  <a
                    href={item.link}
                    target="_blank"
                    className="group flex items-center gap-1.5 hover:text-white transition-colors w-fit"
                  >
                    {item.title}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 mt-0.5"
                    >
                      <path d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="py-5 px-4 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-slate-500">
          <p>2026 Copyright© Eval42.</p>
          <a
            href="mailto:omonbek001@gmail.com"
            className="hover:text-slate-300 transition-colors"
          >
            info@eval42.uz
          </a>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
