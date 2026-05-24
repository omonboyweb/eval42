import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/layouts/header";
import Footer from "@/layouts/footer";
import { cn } from "@/lib/utils";

const sfPro = localFont({
  src: [
    {
      path: "../public/fonts/SF-Pro-Display-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/SF-Pro-Display-Ultralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/SF-Pro-Display-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/SF-Pro-Display-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/SF-Pro-Display-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/SF-Pro-Display-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/SF-Pro-Display-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sfpro",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://eval42.uz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
    languages: {
      "uz-UZ": "/uz",
      "en-US": "/en",
      "ru-RU": "/ru",
    },
  },
  generator: "Omonbek",
  applicationName: "Eval42 Ecosystem",
  referrer: "origin-when-cross-origin",
  keywords: [
    "ERP tizimlari",
    "CRM yaratish",
    "LMS platforma",
    "Kiberxavfsizlik",
    "Raqamli biznes",
    "SaaS arxitektura",
  ],
  authors: [
    { name: "Omonbek" },
    { name: "Omonbek Khujamurodov", url: siteUrl },
  ],
  creator: "Omonbek",
  publisher: "Omonbek",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  title: {
    default: "Omonbek | Raqamli Ekotizimlar va Xavfsiz Yechimlar",
    template: "%s | Eval42",
  },
  description:
    "Biznesingizni avtomatlashtirish uchun ERP, LMS va murakkab SaaS tizimlarini qurish bo'yicha ekspertlar.",

  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: siteUrl,
    title: "Eval42 | Raqamli Ekotizimlar",
    description:
      "ERP, LMS va murakkab biznes tizimlarini qurish bo'yicha ekspertlar.",
    siteName: "Eval42",
    images: [
      {
        url: "/og-logo.png",
        width: 1200,
        height: 630,
        alt: "Eval42 - Digital Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Eval42 | Raqamli Ekotizimlar",
    description:
      "ERP, LMS va murakkab biznes tizimlarini qurish bo'yicha ekspertlar.",
    images: ["/og-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uz"
      className={cn(
        "antialiased",
        "scroll-smooth",
        sfPro.className,
        "font-sans",
      )}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-blue-primary/20 selection:text-blue-primary">
        <Header />
        <main className="flex-1">{children}</main>
        <div className="mt-auto">
          <Footer />
        </div>
      </body>
    </html>
  );
}
