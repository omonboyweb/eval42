import ManuIcons from "@/icons/manuIcons";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Bosh sahifa" },
  { href: "/", label: "Loyihalar" },
  { href: "/", label: "Xizmatlar" },
  { href: "/", label: "Haqimizda" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-line backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 md:h-19 items-center justify-between">
          <div className="hidden md:flex items-center w-full">
            <Link
              href="/"
              className="font-medium text-[24px] tracking-[-0.07em] mr-12 cursor-pointer text-logo hover:opacity-80 transition-opacity"
            >
              Infonex
            </Link>

            <nav>
              <ul className="flex items-center gap-2 text-sm text-menu">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="px-3 py-2 rounded-md hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <button className="cursor-pointer rounded-sm font-medium text-sm px-6 py-2.5 ml-auto bg-blue-primary text-white hover:shadow-lg hover:shadow-blue-primary/20 transition-all active:scale-95">
              Biz bilan bog’lanish
            </button>
          </div>

          <div className="flex w-full justify-between items-center md:hidden">
            <Link
              href="/"
              className="font-medium text-[24px] tracking-[-0.07em] text-logo"
            >
              Infonex
            </Link>
            <button
              className="p-2 hover:bg-slate-100 rounded-md transition-colors"
              aria-label="Menu"
            >
              <ManuIcons />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
