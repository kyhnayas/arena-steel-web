import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

const clients = [
  "ENERJİSA", "YAPI MERKEZİ", "AKSA", "OHL CONSTRUCTION",
  "ZORLU CENTER", "SOMA TERMİK", "AVRASYA TÜNELİ", "AKMERKEZ",
];

export default function CtaBanner() {
  return (
    <section style={{ position: "relative", overflow: "hidden" }}>
      {/* Background image with dark overlay */}
      <div style={{ position: "absolute", inset: 0 }}>
        <Image
          src="/images/site/08.jpeg"
          alt="Arena Steel fabrika"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(26,37,47,0.93) 0%, rgba(27,79,114,0.88) 100%)",
        }} />
        {/* Metal doku çizgileri */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.015) 40px, rgba(255,255,255,0.015) 41px)",
        }} />
      </div>

      <div className="container-custom section" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
          <div>
            <AnimatedSection direction="left">
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.375rem 0.875rem",
                background: "rgba(46,134,193,0.25)",
                border: "1px solid rgba(46,134,193,0.4)",
                borderRadius: "999px",
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "#90caf9",
                letterSpacing: "0.04em",
                marginBottom: "1.25rem",
              }}>
                ✦ REFERANSLARIMIZ
              </span>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.1}>
              <h2 className="heading-xl" style={{ color: "#fff", marginBottom: "1rem" }}>
                Devlerin Tercihi ile Projenize Güç Katın
              </h2>
            </AnimatedSection>
            <AnimatedSection direction="left" delay={0.2}>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.0625rem", lineHeight: 1.75, marginBottom: "2rem" }}>
                Metro istasyonlarından termik santrallere, havalimanı projelerinden dev tünellere kadar
                imzamızın olduğu işler, kalitemizin teminatıdır.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem" }}>
                <Link href="/iletisim" className="btn-primary" id="cta-banner-contact"
                  style={{ background: "var(--accent-blue)", borderColor: "var(--accent-blue)" }}>
                  Uzman Ekibimizle Görüşün →
                </Link>
                <Link href="/referanslar" className="btn-outline" id="cta-banner-projects">
                  Tüm Projeler
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Client logos grid */}
          <AnimatedSection direction="right" delay={0.2}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1rem",
            }}>
              {clients.map((client, i) => (
                <div key={i} style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "10px",
                  padding: "1.125rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backdropFilter: "blur(8px)",
                  transition: "all 0.25s ease",
                }}>
                  <span style={{
                    color: "rgba(255,255,255,0.75)",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    letterSpacing: "0.06em",
                    textAlign: "center",
                  }}>
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
