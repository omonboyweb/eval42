import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/layouts/header";
import Footer from "@/layouts/footer";
import Preloader from "@/components/fx/preloader";
import Cursor from "@/components/fx/cursor";
import Chrome from "@/components/fx/chrome";
import { cn } from "@/lib/utils";
import { GoogleAnalytics } from "@next/third-parties/google";

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
  generator: "Next.js",
  applicationName: "Eval42",
  referrer: "origin-when-cross-origin",

  keywords: [
    "Omonbek Khujamurodov",
    "Eval42",
    "Frontend Engineer",
    "Next.js Expert",
    "React Architect",
    "Multi-tenant SaaS",
    "Web Performance Optimization",
    "Cybersecurity Specialist",
    "Open Source Software",
  ],

  authors: [{ name: "Omonbek Khujamurodov", url: siteUrl }],
  creator: "Omonbek Khujamurodov",
  publisher: "Omonbek Khujamurodov",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  title: {
    default:
      "Omonbek Khujamurodov | Frontend Engineer & Open-Source Maintainer",
    template: "%s | Eval42",
  },
  description:
    "Yuqori samaradorlikka ega Next.js/React ilovalari, ko'p ijarali (multi-tenant) SaaS arxitekturalari va xavfsiz raqamli ekotizimlar yaratuvchi dasturchining shaxsiy portfoliom va open-source loyihalari.",

  openGraph: {
    type: "profile",
    firstName: "Omonbek",
    lastName: "Khujamurodov",
    username: "eval42",
    locale: "uz_UZ",
    url: siteUrl,
    title: "Omonbek Khujamurodov | Frontend Architect",
    description:
      "Murakkab veb-arxitekturalar, 3D veb-yechimlar va ochiq kodli dasturlar platformasi.",
    siteName: "Eval42",
    images: [
      {
        url: "/og-logo.png",
        width: 1200,
        height: 630,
        alt: "Omonbek Khujamurodov - Eval42 Ecosystem",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Omonbek Khujamurodov | Eval42 Ecosystem",
    description: "Next.js, Multi-tenant SaaS va Kiberxavfsizlik yechimlari.",
    images: ["/og-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Omonbek Khujamurodov",
        alternateName: "Eval",
        jobTitle: "Senior Frontend Engineer",
        url: siteUrl,
        image: `${siteUrl}/og-logo.png`,
        sameAs: [
          "https://github.com/omonboyweb",
          "https://www.linkedin.com/in/omonbekxojamurodov/",
        ],
        knowsAbout: [
          "React",
          "Next.js",
          "TypeScript",
          "Software Architecture",
          "Web Performance",
          "Cybersecurity",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Eval42",
        description:
          "Omonbek Khujamurodov'ning shaxsiy portfoliom va open-source ekotizimi.",
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
      },
    ],
  };

  return (
    <html
      lang="uz"
      className={cn(
        "antialiased",
        "scroll-smooth",
        sfPro.variable,
        sfPro.className,
        "font-sans",
      )}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Preloader />
        <Cursor />
        <Chrome />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
