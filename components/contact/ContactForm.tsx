"use client";

import { useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

const konuSecenekleri = [
  "Çelik Konstrüksiyon",
  "Endüstriyel & Özel İmalat",
  "Cephe & Bina Kaplama",
  "7/24 Bakım & Destek",
  "Tesis Ziyareti",
  "Genel Bilgi",
];

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", company: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      {/* Ad Soyad */}
      <div className="floating-group">
        <input
          id="contact-name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          required
          placeholder=" "
          className="floating-input"
          autoComplete="name"
        />
        <label htmlFor="contact-name" className="floating-label">Adınız Soyadınız *</label>
      </div>

      {/* Firma */}
      <div className="floating-group">
        <input
          id="contact-company"
          name="company"
          type="text"
          value={form.company}
          onChange={handleChange}
          placeholder=" "
          className="floating-input"
          autoComplete="organization"
        />
        <label htmlFor="contact-company" className="floating-label">Firma Adı (Opsiyonel)</label>
      </div>

      {/* Telefon */}
      <div className="floating-group">
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          required
          placeholder=" "
          className="floating-input"
          autoComplete="tel"
        />
        <label htmlFor="contact-phone" className="floating-label">Telefon Numaranız *</label>
      </div>

      {/* Konu seçimi */}
      <div className="floating-group">
        <select
          id="contact-subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
          className="floating-input"
          style={{ cursor: "pointer", paddingTop: "1.25rem", paddingBottom: "0.5rem", appearance: "none", WebkitAppearance: "none" }}
        >
          <option value="" disabled hidden></option>
          {konuSecenekleri.map((k) => (
            <option key={k} value={k}>{k}</option>
          ))}
        </select>
        <label
          htmlFor="contact-subject"
          className="floating-label"
          style={{ top: form.subject ? "0.35rem" : "0.9rem", fontSize: form.subject ? "0.72rem" : "1rem", color: form.subject ? "var(--accent-blue)" : undefined }}
        >
          İlgilendiğiniz Konu *
        </label>
        {/* Arrow icon */}
        <div style={{ position: "absolute", right: "1rem", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "var(--text-muted)" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </div>
      </div>

      {/* Mesaj */}
      <div className="floating-group">
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          placeholder=" "
          rows={5}
          className="floating-input"
          style={{ resize: "vertical", minHeight: "120px" }}
        />
        <label htmlFor="contact-message" className="floating-label">Mesajınız *</label>
      </div>

      {/* Submit */}
      <button
        id="contact-submit"
        type="submit"
        disabled={status === "loading"}
        className="btn-primary"
        style={{
          justifyContent: "center",
          opacity: status === "loading" ? 0.7 : 1,
          cursor: status === "loading" ? "not-allowed" : "pointer",
        }}
      >
        {status === "loading" ? (
          <>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: "spin 1s linear infinite" }}>
              <path d="M21 12a9 9 0 11-18 0"/>
            </svg>
            Gönderiliyor...
          </>
        ) : (
          <>
            Gönder ve Teklif Al
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
            </svg>
          </>
        )}
      </button>

      {/* Success / Error messages */}
      {status === "success" && (
        <div style={{
          padding: "1rem 1.25rem",
          background: "rgba(39, 174, 96, 0.08)",
          border: "1px solid rgba(39, 174, 96, 0.3)",
          borderRadius: "8px",
          color: "#1e8449",
          fontSize: "0.9rem",
          fontWeight: 500,
        }}>
          ✅ Mesajınız başarıyla iletildi. En kısa sürede size döneceğiz!
        </div>
      )}

      {status === "error" && (
        <div style={{
          padding: "1rem 1.25rem",
          background: "rgba(231, 76, 60, 0.08)",
          border: "1px solid rgba(231, 76, 60, 0.3)",
          borderRadius: "8px",
          color: "#c0392b",
          fontSize: "0.9rem",
          fontWeight: 500,
        }}>
          ❌ Bir hata oluştu. Lütfen tekrar deneyin veya bizi doğrudan arayın.
        </div>
      )}

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </form>
  );
}
