import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Sakarya Erenler merkezli Arena Steel; Yiğithan Bozdemir ve Mertcan Koç yönetiminde Türkiye'nin en büyük çelik konstrüksiyon projelerine imza atan profesyonel bir firmadır.",
};

const milestones = [
  { year: "2014", text: "Arena Steel, Sakarya Erenler'de kuruldu." },
  { year: "2016", text: "OHL Construction ile Gebze-Pendik Metro projesi tamamlandı." },
  { year: "2018", text: "Avrasya Tüneli sekment imalatı ve sismik deprem kutuları projesi." },
  { year: "2020", text: "Enerjisa Tufanbeyli Safe Guard yapımı ve baypas hattı projesi." },
  { year: "2022", text: "Zorlu Center ve Meydan54 çatı imalat projeleri." },
  { year: "2024", text: "4.000 m² üretim alanına ulaşıldı, kapasite genişletildi." },
];

export default function HakkimizdaPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", height: "60vh", minHeight: "420px", overflow: "hidden" }}>
        <Image
          src="/images/site/01.jpeg"
          alt="Arena Steel fabrika ve şantiye"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
          sizes="100vw"
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(27,79,114,0.7) 0%, rgba(26,37,47,0.85) 100%)",
        }} />
        <div className="container-custom" style={{
          position: "relative", zIndex: 1, height: "100%",
          display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: "4rem", paddingTop: "8rem",
        }}>
          <AnimatedSection direction="left">
            <span className="badge" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", marginBottom: "1rem" }}>
              Hakkımızda
            </span>
          </AnimatedSection>
          <AnimatedSection direction="left" delay={0.15}>
            <h1 className="heading-display" style={{ color: "#fff" }}>
              Arena Steel:<br />Çeliğe Şekil Veren Güç
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Ana İçerik */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container-custom">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "5rem", alignItems: "start" }}>
            {/* Metin */}
            <div>
              <SectionHeader
                badge="Kimiz?"
                title="Sakarya'dan Türkiye'ye"
              />
              <AnimatedSection delay={0.2}>
                <p className="body-lg" style={{ marginBottom: "1.5rem" }}>
                  Sakarya Erenler merkezli Kozluk Mahallesi Sanayi Caddesi&apos;nde temelleri atılan Arena Steel,
                  <strong> Yiğithan Bozdemir</strong> ve <strong>Mertcan Koç</strong> yönetiminde faaliyet gösteren
                  profesyonel bir çelik konstrüksiyon ve demir işleme şirketidir.
                </p>
                <p className="body-md" style={{ marginBottom: "1.5rem" }}>
                  Kurulduğumuz günden bu yana; çelik konstrüksiyon işleri, endüstriyel tesis kurulumları, özel sekment
                  imalatları ve yapısal çelik uygulamalarında Türkiye&apos;nin en büyük projelerine imza atıyoruz.
                </p>
                <p className="body-md" style={{ marginBottom: "2rem" }}>
                  <strong>Enerjisa, Yapı Merkezi, Aksa, OHL Construction</strong> gibi sektör devleriyle yürüttüğümüz
                  projeler, mühendislik kapasitemizin ve üretim kalitemizin en büyük kanıtıdır.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.35}>
                <Button href="/iletisim" variant="primary" id="about-cta">
                  Bizimle Çalışın →
                </Button>
              </AnimatedSection>

              {/* Değerler */}
              <AnimatedSection delay={0.4}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "3rem" }}>
                  {[
                    { icon: "🎯", label: "Sıfır Hata", desc: "Toleranssız üretim kalitesi" },
                    { icon: "⚡", label: "Hız", desc: "Zamanında teslimat garantisi" },
                    { icon: "🛡️", label: "Güvenlik", desc: "İş güvenliği önceliğimiz" },
                    { icon: "🤝", label: "Ortaklık", desc: "Uzun vadeli iş ilişkileri" },
                  ].map((v) => (
                    <div key={v.label} style={{
                      padding: "1.25rem",
                      background: "var(--bg-primary)",
                      borderRadius: "10px",
                      border: "1px solid var(--border)",
                    }}>
                      <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{v.icon}</div>
                      <div style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "0.9375rem" }}>{v.label}</div>
                      <div style={{ color: "var(--text-muted)", fontSize: "0.8125rem", marginTop: "2px" }}>{v.desc}</div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Sağ kolon: Portreler + Zaman çizelgesi */}
            <div>
              {/* Yöneticiler */}
              <AnimatedSection direction="right" delay={0.2}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "3rem" }}>
                  {[
                    { name: "Yiğithan Bozdemir", role: "Kurucu Ortak", img: "/images/site/04.jpeg" },
                    { name: "Mertcan Koç", role: "Kurucu Ortak", img: "/images/site/02.jpeg" },
                  ].map((person) => (
                    <div key={person.name} className="card" style={{ overflow: "hidden", textAlign: "center" }}>
                      <div style={{ position: "relative", height: "200px" }}>
                        <Image
                          src={person.img}
                          alt={person.name}
                          fill
                          style={{ objectFit: "cover", objectPosition: "center top" }}
                          sizes="200px"
                        />
                      </div>
                      <div style={{ padding: "1rem" }}>
                        <div style={{ fontWeight: 700, fontSize: "0.9375rem", color: "var(--text-primary)" }}>{person.name}</div>
                        <div style={{ fontSize: "0.8125rem", color: "var(--accent-blue)", fontWeight: 500, marginTop: "2px" }}>{person.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Timeline */}
              <AnimatedSection delay={0.35}>
                <h3 className="heading-md" style={{ marginBottom: "1.5rem", color: "var(--text-primary)" }}>
                  Kilometre Taşlarımız
                </h3>
                <div style={{ position: "relative", paddingLeft: "2rem" }}>
                  <div style={{
                    position: "absolute", left: "6px", top: 0, bottom: 0,
                    width: "2px", background: "var(--border)",
                  }} />
                  {milestones.map((m, i) => (
                    <AnimatedSection key={m.year} delay={0.4 + i * 0.08}>
                      <div style={{ position: "relative", marginBottom: "1.5rem" }}>
                        <div style={{
                          position: "absolute", left: "-1.875rem", top: "3px",
                          width: "12px", height: "12px",
                          borderRadius: "50%",
                          background: "var(--accent-blue)",
                          border: "2px solid var(--white)",
                          boxShadow: "0 0 0 2px var(--accent-blue)",
                        }} />
                        <span style={{ fontWeight: 700, color: "var(--accent-navy)", fontSize: "0.8125rem", letterSpacing: "0.04em" }}>
                          {m.year}
                        </span>
                        <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginTop: "2px", lineHeight: 1.55 }}>
                          {m.text}
                        </p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
