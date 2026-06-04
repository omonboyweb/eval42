# Eval42

Eval42 - Omonbek Khujamurodov uchun yaratilgan shaxsiy portfolio va xizmatlar
sayti. Loyiha frontend injiniring, SaaS/dashboard arxitekturasi, performance
optimallashtirish, client-side security va real product case'larni ko'rsatish
uchun ishlab chiqilgan.

Sayt Next.js App Router asosida qurilgan. Unda responsive landing page, xizmatlar
bento grid'i, loyihalar accordioni, CV havolasi, SEO metadata, sitemap/robots va
Telegram orqali loyiha so'rovlarini yuboradigan ko'p bosqichli kontakt formasi
mavjud.

## Asosiy imkoniyatlar

- Responsive portfolio sahifa: hero, services, projects va contacts bo'limlari.
- Projects accordion: HalalHub, Infodeck va Homex case'lari uchun preview.
- Ko'p bosqichli kontakt forma: contact, company va project ma'lumotlari.
- Telegram integratsiyasi: forma yuborilganda bot orqali xabar jo'natadi.
- SEO tayyorgarligi: metadata, Open Graph, Twitter card, JSON-LD, sitemap va
  robots konfiguratsiyasi.
- Local SF Pro Display fontlari va optimallashtirilgan `next/image` assetlari.
- Tailwind CSS 4, shadcn UI tokenlari va lucide-react iconlari.

## Texnologiyalar

- Next.js 16.2.4
- React 19.2.4
- TypeScript
- Tailwind CSS 4
- shadcn UI va Radix UI
- lucide-react
- Next Third Parties Google Analytics

## Talablar

Next.js 16 uchun kamida Node.js `20.9` talab qilinadi. Loyihada `package-lock.json`
bor, shuning uchun lokal ishda `npm` ishlatish tavsiya qilinadi.

## O'rnatish

```bash
npm install
```

## Environment sozlamalari

Lokal muhit uchun `.env.local` fayl yarating:

```env
NEXT_PUBLIC_SITE_URL=https://eval42.uz
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=your-telegram-bot-token
NEXT_PUBLIC_TELEGRAM_CHAT_ID=your-telegram-chat-id
```

Eslatma: `NEXT_PUBLIC_` prefiksli qiymatlar Next.js build vaqtida client bundle
ichiga kiritilishi mumkin. Telegram bot tokeni production muhitida maxfiy
saqlanishi kerak; hozirgi kod aynan yuqoridagi env nomlarini kutadi.

## Lokal ishga tushirish

```bash
npm run dev
```

Dev server odatda quyidagi manzilda ochiladi:

```text
http://localhost:3000
```

## Production build

```bash
npm run build
npm run start
```

## Lint

```bash
npm run lint
```

## Loyiha tuzilmasi

```text
app/
  layout.tsx        Global layout, metadata, JSON-LD, font va analytics
  page.tsx          Asosiy landing page
  robots.ts         Robots konfiguratsiyasi
  sitemap.ts        Sitemap konfiguratsiyasi

features/
  contacts/         Ko'p bosqichli kontakt formasi
  services/         Xizmatlar bento grid'i
  progects/         Project accordion bo'limi

actions/
  telegram.ts       Telegram bot orqali forma xabarini yuborish

layouts/
  header.tsx        Desktop/mobile navigation va CV havolasi
  footer.tsx        Social linklar va aloqa ma'lumotlari

components/
  ui/               Reusable UI komponentlar
  crm.tsx           CRM/dashboard preview widget
  lms.tsx           LMS preview widget

public/
  fonts/            SF Pro Display font fayllari
  *.png, *.webp     Portfolio va project preview assetlari
```

## Deployment

Loyiha Vercel yoki Node.js serverda ishlatish uchun tayyor. Deploy qilishdan
oldin production env qiymatlarini platformada sozlang va `npm run build` orqali
build xatolarsiz o'tishini tekshiring.

## Kontakt

- Website: https://eval42.uz
- Telegram: https://t.me/eval42
- GitHub: https://github.com/omonboyweb
- LinkedIn: https://www.linkedin.com/in/omonbekxojamurodov/
