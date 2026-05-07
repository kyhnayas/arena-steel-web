import nodemailer from "nodemailer";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, phone, subject, message } = body;

    // Zorunlu alan kontrolü
    if (!name || !phone || !subject || !message) {
      return Response.json(
        { error: "Zorunlu alanlar eksik." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // TLS için false (STARTTLS)
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const htmlBody = `
      <div style="font-family: Inter, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa; padding: 0; border-radius: 12px; overflow: hidden;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #1B4F72, #2E86C1); padding: 2rem; text-align: center;">
          <h1 style="color: #fff; margin: 0; font-size: 1.5rem; font-weight: 800; letter-spacing: -0.01em;">Arena Steel</h1>
          <p style="color: rgba(255,255,255,0.75); margin: 0.5rem 0 0; font-size: 0.875rem;">Yeni İletişim Formu Mesajı</p>
        </div>
        <!-- Body -->
        <div style="padding: 2rem; background: #fff;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 0.75rem 0; border-bottom: 1px solid #e9ecef; font-weight: 600; color: #495057; width: 140px; font-size: 0.875rem;">Ad Soyad</td>
              <td style="padding: 0.75rem 0; border-bottom: 1px solid #e9ecef; color: #212529; font-size: 0.9375rem;">${name}</td>
            </tr>
            ${company ? `<tr>
              <td style="padding: 0.75rem 0; border-bottom: 1px solid #e9ecef; font-weight: 600; color: #495057; font-size: 0.875rem;">Firma</td>
              <td style="padding: 0.75rem 0; border-bottom: 1px solid #e9ecef; color: #212529; font-size: 0.9375rem;">${company}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 0.75rem 0; border-bottom: 1px solid #e9ecef; font-weight: 600; color: #495057; font-size: 0.875rem;">Telefon</td>
              <td style="padding: 0.75rem 0; border-bottom: 1px solid #e9ecef; color: #212529; font-size: 0.9375rem;"><a href="tel:${phone}" style="color: #2E86C1;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 0.75rem 0; border-bottom: 1px solid #e9ecef; font-weight: 600; color: #495057; font-size: 0.875rem;">Konu</td>
              <td style="padding: 0.75rem 0; border-bottom: 1px solid #e9ecef;"><span style="background: rgba(27,79,114,0.08); color: #1B4F72; padding: 0.2rem 0.6rem; border-radius: 999px; font-size: 0.8rem; font-weight: 600;">${subject}</span></td>
            </tr>
          </table>
          <div style="margin-top: 1.5rem;">
            <p style="font-weight: 600; color: #495057; font-size: 0.875rem; margin-bottom: 0.5rem;">Mesaj:</p>
            <div style="background: #f8f9fa; border-radius: 8px; padding: 1.25rem; color: #212529; line-height: 1.7; font-size: 0.9375rem; border-left: 3px solid #2E86C1;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
        </div>
        <!-- Footer -->
        <div style="background: #f8f9fa; padding: 1.25rem 2rem; text-align: center; border-top: 1px solid #e9ecef;">
          <p style="color: #6c757d; font-size: 0.75rem; margin: 0;">Arena Steel — Kozluk Mah. Sanayi Cad. No:6 Erenler / Sakarya</p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Arena Steel Web Sitesi" <${process.env.GMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL ?? process.env.GMAIL_USER,
      replyTo: undefined,
      subject: `[Arena Steel] ${subject} — ${name}${company ? ` (${company})` : ""}`,
      html: htmlBody,
      text: `Ad: ${name}\nFirma: ${company || "-"}\nTelefon: ${phone}\nKonu: ${subject}\n\nMesaj:\n${message}`,
    });

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Mail gönderme hatası:", error);
    return Response.json(
      { error: "Mail gönderilemedi." },
      { status: 500 }
    );
  }
}
