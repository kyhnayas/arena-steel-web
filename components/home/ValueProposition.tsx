import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export default function ValueProposition() {
  return (
    <section className="section" style={{ background: "var(--white)" }}>
      <div className="container-custom">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "4rem",
          alignItems: "center",
        }}>
          {/* Metin — sol */}
          <div>
            <SectionHeader
              badge="Neden Arena Steel?"
              title="Güven, Hız ve Sıfır Hata Toleransı"
              subtitle="Günümüzün hızla büyüyen inşaat sektöründe hata payına yer yoktur. Ulusal ve uluslararası dev projelerde edindiğimiz tecrübe ile; her sözleşme için alanında uzman, sendikalı ve özverili bir ekip sunuyoruz."
            />

            <AnimatedSection delay={0.3}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
                {[
                  { icon: "🏆", text: "Enerjisa, Yapı Merkezi, OHL, Aksa gibi sektör devleriyle iş ortaklığı" },
                  { icon: "⚙️", text: "2.000 m² kapalı alanda modern CNC makineleri ve kaynak robotları" },
                  { icon: "📋", text: "İş güvenliği standartlarına %100 uyum, sıfır iş kazası hedefi" },
                  { icon: "🚀", text: "Projelerinizi tam zamanında ve eksiksiz teslim etmenin gururu" },
                ].map((item, i) => (
                  <AnimatedSection key={i} delay={0.35 + i * 0.08}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "0.875rem" }}>
                      <span style={{ fontSize: "1.25rem", flexShrink: 0, marginTop: "1px" }}>{item.icon}</span>
                      <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, fontSize: "0.9375rem" }}>{item.text}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <Button href="/hakkimizda" variant="primary" id="value-prop-cta">
                Hikayemizi Okuyun →
              </Button>
            </AnimatedSection>
          </div>

          {/* Görsel — sağ */}
          <AnimatedSection direction="right" delay={0.2}>
            <div style={{ position: "relative" }}>
              <div style={{
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(27,79,114,0.15)",
                aspectRatio: "4/3",
                position: "relative",
              }}>
                <Image
                  src="/images/site/03.jpeg"
                  alt="Arena Steel ekibi çalışırken"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Floating accent kutu */}
              <div style={{
                position: "absolute",
                bottom: "-1.5rem",
                left: "-1.5rem",
                background: "var(--accent-navy)",
                color: "#fff",
                padding: "1.25rem 1.5rem",
                borderRadius: "12px",
                boxShadow: "0 12px 30px rgba(27,79,114,0.35)",
              }}>
                <div style={{ fontSize: "1.75rem", fontWeight: 800, letterSpacing: "-0.02em" }}>50+</div>
                <div style={{ fontSize: "0.8rem", opacity: 0.8, fontWeight: 500, marginTop: "2px" }}>Tamamlanan Proje</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
