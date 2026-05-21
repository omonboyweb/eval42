src/
├── app/                           # Routing va Next.js sozlamalari (SEO markazi)
│   ├── (marketing)/               # Landing page sahifalari (Group routing)
│   │   ├── page.tsx               # Home sahifasi
│   │   ├── projects/              # Loyihalar sahifasi
│   │   └── layout.tsx             # Marketing uchun maxsus header/footer
│   ├── (dashboard)/               # ERP/LMS boshqaruv paneli (Protected)
│   │   ├── admin/
│   │   └── layout.tsx
│   ├── api/                       # API route-lar (Webhook, Auth)
│   ├── layout.tsx                 # Global Root Layout (Global Metadata shu yerda)
│   ├── sitemap.ts                 # Dinamik Sitemap (SEO uchun muhim)
│   └── robots.ts                  # Robots.txt sozlamalari
├── components/                    # Kichik, takrorlanuvchi komponentlar
│   ├── ui/                        # Button, Input, Card (Shadcn-style)
│   └── icons/                     # SVG ikonkalarni optimallashgan komponentlari
├── features/                      # Foydalanuvchi amal bajaradigan modullar
│   ├── auth-by-apple/             # Apple orqali kirish logikasi
│   ├── contact-form/              # Biz boya qilgan aloqa formasi (logic + view)
│   └── toggle-faq/                # FAQ interaktivligi
├── entities/                      # Biznes mantiqi (Ma'lumotlar modeli)
│   ├── project/                   # Loyihalar (HalalHub va boshqalar) ma'lumotlari
│   ├── service/                   # Xizmatlar (ERP, LMS) tavsiflari
│   └── user/                      # Foydalanuvchi/Admin modeli
├── shared/                        # Loyihaning barcha joyida ishlatiladigan resurslar
│   ├── api/                       # Axios/Fetch instansiyalari
│   ├── hooks/                     # Custom react hooks
│   ├── utils/                     # Formatlash, SEO yordamchi funksiyalari
│   └── types/                     # Global TypeScript interfeyslari
├── styles/                        # Global CSS va Tailwind konfiguratsiyasi
└── public/                        # Static assets (Rasmlar, favicon, fonts)