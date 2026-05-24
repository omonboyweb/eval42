"use server";

type ContactFormData = {
  name: string;
  company: string;
  role: string;
  phone: string;
  email: string;
  message: string;
};

export async function sendTelegramMessage(data: ContactFormData) {
  const BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

  if (!BOT_TOKEN || !CHAT_ID) {
    throw new Error("Telegram konfiguratsiyasi topilmadi");
  }

  const text = `
📬 *Yangi loyiha so'rovi!*

👤 *Ism:* ${data.name}
🏢 *Kompaniya:* ${data.company || "Ko'rsatilmagan"}
💼 *Rol:* ${data.role}
📞 *Telefon:* ${data.phone}
📧 *Email:* ${data.email}
📝 *Xabar:* ${data.message}
  `.trim();

  const res = await fetch(
    `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: "Markdown",
      }),
    },
  );

  if (!res.ok) {
    throw new Error("Telegram serveriga ulanishda xatolik yuz berdi");
  }

  return { success: true };
}
