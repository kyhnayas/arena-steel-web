import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Makine Parkuru ve Tesisimiz",
  description:
    "4.000 m² toplam alan üzerine kurulu modern fabrikamızda CNC tezgahları, kaynak robotları ve lazer kesim sistemleri.",
};

const machines = [
  {
    id: "talasli-imalat",
    icon: "🔩",
    category: "Talaşlı İmalat Hattı",
    image: "/images/site/06.jpeg",
    items: [
      { name: "CNC Dikey İşleme Tezgahı", qty: "3 Adet" },
      { name: "CNC Torna Tezgahı", qty: "4 Adet" },
      { name: "Konvansiyonel Torna", qty: "2 Adet" },
      { name: "Freze Tezgahı", qty: "2 Adet" },
    ],
  },
  {
    id: "kaynakli-imalat",
    icon: "🔥",
    category: "Kaynaklı İmalat",
    image: "/images/site/07.jpeg",
    items: [
      { name: "İleri Teknoloji Kaynak Robotu", qty: "3 Adet" },
      { name: "Profesyonel MIG/MAG Kaynak Makinesi", qty: "12 Adet" },
      { name: "TIG Kaynak Ünitesi", qty: "4 Adet" },
      { name: "Saplama Kaynak Makinesi", qty: "2 Adet" },
    ],
  },
  {
    id: "kesim-sekillendirme",
    icon: "⚡",
    category: "Kesim & Şekillendirme",
    image: "/images/site/08.jpeg",
    items: [
      { name: "CNC Lazer Kesim Sistemi", qty: "1 Adet" },
      { name: "CNC Plazma Kesim", qty: "2 Adet" },
      { name: "CNC Abkant Pres", qty: "2 Adet" },
      { name: "Giyotin Makas", qty: "2 Adet" },
    ],
  },
];

const stats = [
  { num: "4.000 m²", label: "Toplam Alan" },
  { num: "2.000 m²", label: "Kapalı Üretim Alanı" },
  { num: "30+", label: "CNC & İleri Teknoloji Makine" },
  { num: "50+", label: "Uzman Çalışan" },
];

export default function TesisPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", height: "55vh", minHeight: "420px", overflow: "hidden" }}>
        <Image src="/images/site/01.jpeg" alt="Arena Steel Fabrika İç Görünümü" fill priority style={{ objectFit: "cover", objectPosition: "center 40%" }} sizes="100vw" />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(26,37,47,0.75) 0%, rgba(27,79,114,0.85) 100%)" }} />
        <div className="container-custom" style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: "4rem", paddingTop: "8rem" }}>
          <AnimatedSection direction="left">
            <span className="badge" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", marginBottom: "1rem" }}>Makine Parkuru & Tesis</span>
          </AnimatedSection>
          <AnimatedSection direction="left" delay={0.15}>
            <h1 className="heading-display" style={{ color: "#fff" }}>
              Yüksek Kapasite,<br />Kusursuz Teknoloji
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Band */}
      <div style={{ background: "var(--accent-navy)", padding: "2.5rem 0" }}>
        <div className="container-custom">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "2rem", textAlign: "center" }}>
            {stats.map((s) => (
              <AnimatedSection key={s.label} direction="up" delay={0.1}>
                <div style={{ color: "#fff" }}>
                  <div style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#90caf9" }}>{s.num}</div>
                  <div style={{ fontSize: "0.85rem", opacity: 0.75, marginTop: "4px", fontWeight: 500 }}>{s.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* Genel Açıklama */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container-custom">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div>
              <SectionHeader
                badge="Tesisimiz"
                title="Modern Fabrikamız"
                subtitle="Arena Steel olarak, projelerinizde sıfır hata ve maksimum hız sağlamak için devasa üretim hattımızla hizmetinizdeyiz. 4.000 m² toplam alan üzerine kurulu, 2.000 m² kapalı alana sahip modern fabrikamızda yüksek tonajlı çelik imalatlarını rekor sürelerde tamamlıyoruz."
              />
              <AnimatedSection delay={0.3}>
                <Button href="/iletisim" variant="primary" id="tesis-cta">
                  Tesis Ziyareti Talep Edin →
                </Button>
              </AnimatedSection>
            </div>
            <AnimatedSection direction="right" delay={0.2}>
              <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "var(--card-shadow-hover)", aspectRatio: "4/3", position: "relative" }}>
                <Image src="/images/site/02.jpeg" alt="Fabrika iç görünümü" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Makine Kategorileri */}
      <section className="section" style={{ background: "var(--bg-primary)" }}>
        <div className="container-custom">
          <SectionHeader
            badge="Makine Parkuru"
            title="İleri Teknoloji Üretim Altyapısı"
            centered
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {machines.map((machine, i) => (
              <AnimatedSection key={machine.id} delay={i * 0.15}>
                <div className="card" id={machine.id} style={{ overflow: "hidden" }}>
                  {/* Image */}
                  <div style={{ position: "relative", height: "200px" }}>
                    <Image src={machine.image} alt={machine.category} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 33vw" />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,37,47,0.85) 0%, transparent 50%)" }} />
                    <div style={{ position: "absolute", bottom: "1rem", left: "1.25rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ fontSize: "1.5rem" }}>{machine.icon}</span>
                      <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1rem" }}>{machine.category}</h3>
                    </div>
                  </div>
                  {/* Machine list */}
                  <div style={{ padding: "1.5rem" }}>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                      {machine.items.map((item) => (
                        <li key={item.name} style={{
                          display: "flex", justifyContent: "space-between", alignItems: "center",
                          padding: "0.625rem 0",
                          borderBottom: "1px solid var(--border)",
                          fontSize: "0.9rem",
                        }}>
                          <span style={{ color: "var(--text-secondary)" }}>{item.name}</span>
                          <span style={{ fontWeight: 700, color: "var(--accent-navy)", fontSize: "0.85rem", flexShrink: 0, marginLeft: "1rem" }}>{item.qty}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
