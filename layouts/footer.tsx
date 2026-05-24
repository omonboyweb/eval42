import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const data = [
    { title: "Telegram", link: "https://t.me/Tech_Newsuz" },
    { title: "Instagram", link: "https://www.instagram.com/infonex.uz/" },
    { title: "GitHub", link: "https://github.com/infonex-dotcom" },
    { title: "LinkedIn", link: "https://www.linkedin.com/company/infonex-uz/" },
    {
      title: "+998 88 942 5000",
      link: "tel:+998889425000",
    },
  ];
  return (
    <footer className="bg-[#0B1221] text-slate-300 border-t border-blue-border">
      <div className="container border-blue-border! mx-auto px-4 pt-20 pb-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
          <div className="lg:col-span-2 flex flex-col items-start">
            <Link href="/#hero">
              <Image
                src="/logo.png"
                alt="Infonex logo"
                width={60}
                height={60}
                className="object-cover"
              />
            </Link>
            <p className="mt-6 text-[15px] leading-relaxed text-white max-w-70">
              Biznesingizni raqamli ekotizimga aylantiruvchi zamonaviy
              yechimlar.
            </p>
          </div>

          <div>
            <a
              href="#services"
              className="text-white font-medium mb-6 text-[16px] tracking-wide"
            >
              Xizmatlar
            </a>
            <ul className="flex flex-col gap-4 text-[14px] text-slate-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  ERP & CRM
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  LMS Platformalar
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Custom Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Cybersecurity
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 text-[16px] tracking-wide">
              Kompaniya
            </h4>
            <ul className="flex flex-col gap-4 text-[14px] text-slate-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Biz haqimizda
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Loyihalar
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Ekspertlarimiz
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Vakansiyalar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 text-[16px] tracking-wide">
              Resurslar
            </h4>
            <ul className="flex flex-col gap-4 text-[14px] text-slate-400">
              <li>
                <Link
                  href="/#faq"
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="hover:text-white transition-colors"
                >
                  Bog&apos;lanish
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Xizmat ko&apos;rsatish shartlari
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Maxfiylik siyosati
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 text-[16px] tracking-wide">
              Ijtimoiy tarmoqlar
            </h4>
            <ul className="flex flex-col gap-4 text-[14px] text-slate-400">
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

        <div className="mt-20 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-slate-500">
          <p>2026 Copyright© Infonex.</p>
          <a
            href="mailto:omonbek001@gmail.com"
            className="hover:text-slate-300 transition-colors"
          >
            omonbek001@gmail.com
          </a>
          <p>Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
}
