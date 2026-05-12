import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactForm from "@/components/contact/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Yeni projeniz için güçlü bir başlangıç yapmak veya detaylı fiyat teklifi almak için bizimle iletişime geçin.",
};

const contactInfo = [
  {
    icon: "📍",
    label: "Adres",
    value: "Kozluk Mah. Sanayi Cad. No:6 Erenler / Sakarya",
    href: "https://maps.google.com/?q=Kozluk+Mah+Sanayi+Cad+No:6+Erenler+Sakarya",
  },
  {
    icon: "📞",
    label: "Yiğithan Bozdemir",
    value: "0535 013 54 86",
    href: "tel:+905350135486",
  },
  {
    icon: "📞",
    label: "Mertcan Koç",
    value: "0536 917 07 85",
    href: "tel:+905369170785",
  },
  {
    icon: "✉️",
    label: "E-posta",
    value: "bilgi@arenasteel.com.tr",
    href: "mailto:bilgi@arenasteel.com.tr",
  },
];

export default function IletisimPage() {
  return (
    <>
      {/* Hero — kısa */}
      <section style={{ position: "relative", height: "42vh", minHeight: "320px", overflow: "hidden" }}>
        <Image src="/images/site/02.jpeg" alt="Arena Steel İletişim" fill priority style={{ objectFit: "cover", objectPosition: "center 60%" }} sizes="100vw" />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(26,37,47,0.88) 0%, rgba(27,79,114,0.75) 100%)" }} />
        <div className="container-custom" style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: "4rem", paddingTop: "8rem" }}>
          <AnimatedSection direction="left">
            <span className="badge" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", marginBottom: "1rem" }}>İletişim</span>
          </AnimatedSection>
          <AnimatedSection direction="left" delay={0.15}>
            <h1 className="heading-display" style={{ color: "#fff" }}>
              Temelleri Birlikte Atalım
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Split-Screen Content */}
      <section className="section" style={{ background: "var(--bg-primary)" }}>
        <div className="container-custom">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "start" }}>

            {/* Sol — Harita + Bilgiler */}
            <div>
              <SectionHeader
                badge="Bize Ulaşın"
                title="İletişim Bilgileri"
                subtitle="Yeni projeniz için güçlü bir başlangıç yapmak, makine parkurumuz hakkında bilgi almak veya detaylı fiyat teklifi için bize ulaşın."
              />

              {/* Contact Info Cards */}
              <AnimatedSection delay={0.2}>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "2.5rem" }}>
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-start gap-4 p-4 lg:p-5 bg-white border border-[var(--border)] rounded-lg no-underline transition-all duration-250 hover:border-[var(--accent-blue)] hover:shadow-[0_12px_40px_rgba(27,79,114,0.18)]"
                      style={{
                        boxShadow: "var(--card-shadow)",
                      }}
                    >
                      <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{info.icon}</span>
                      <div>
                        <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "2px" }}>
                          {info.label}
                        </div>
                        <div style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: "0.9375rem" }}>
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </AnimatedSection>

              {/* Google Maps embed */}
              <AnimatedSection delay={0.35}>
                <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--card-shadow)" }}>
                  <iframe
                    id="contact-map"
                    title="Arena Steel Konum"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.0!2d30.3960!3d40.7300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQzJzQ4LjAiTiAzMMKwMjMnNDUuNiJF!5e0!3m2!1str!2str!4v1620000000000!5m2!1str!2str"
                    width="100%"
                    height="260"
                    style={{ border: 0, display: "block" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <p style={{ marginTop: "0.75rem", fontSize: "0.8rem", color: "var(--text-muted)", textAlign: "center" }}>
                  Kozluk Mah. Sanayi Cad. No:6, Erenler / Sakarya
                </p>
              </AnimatedSection>
            </div>

            {/* Sağ — Form */}
            <AnimatedSection direction="right" delay={0.2}>
              <div style={{
                background: "var(--white)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "2.5rem",
                boxShadow: "var(--card-shadow-hover)",
              }}>
                <div style={{ marginBottom: "2rem" }}>
                  <h2 className="heading-md" style={{ marginBottom: "0.5rem" }}>Mesaj Gönderin</h2>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                    Formu doldurun, ekibimiz en kısa sürede size dönsün.
                  </p>
                </div>
                <ContactForm />
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>
    </>
  );
}
