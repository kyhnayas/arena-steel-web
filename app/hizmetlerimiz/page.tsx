import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description:
    "Çelik konstrüksiyon, endüstriyel özel imalatlar, cephe kaplamaları ve 7/24 bakım desteği hizmetleri.",
};

const services = [
  {
    id: "celik-konstruksiyon",
    icon: "🏗️",
    title: "Çelik Konstrüksiyon İşleri",
    image: "/images/projects/zorlu-center/02.jpeg",
    desc: "Endüstriyel tesisler, otel, iş merkezi ve AVM projeleri için yüksek taşıma kapasiteli ağır ve hafif çelik yapı çözümleri sunuyoruz. Her proje, kendine özgü mühendislik hesaplamaları ve malzeme seçimleriyle hayata geçirilir.",
    points: [
      "Ağır ve hafif çelik strüktür tasarımı",
      "Fabrika, depo ve endüstriyel tesis çelik iskelet",
      "AVM, otel, iş merkezi çelik konstrüksiyon",
      "Çelik merdiven, rampa ve platform imalatı",
      "Montaj ve kaynak işleri sahada gerçekleştirilir",
    ],
  },
  {
    id: "endustriyel-imalat",
    icon: "⚙️",
    title: "Endüstriyel & Özel İmalatlar",
    image: "/images/site/05.jpeg",
    desc: "Termik santral baypas hatları, su arıtma sistemleri, sismik deprem kutuları ve tünel sekment imalatları gibi yüksek mühendislik gerektiren çözümler. Enerjisa ve Yapı Merkezi gibi dev firmalarla bu alanda referanslarımız mevcuttur.",
    points: [
      "Termik santral baypas hattı tasarım ve imalatı",
      "Tünel sekment imalatı (Avrasya Tüneli referansı)",
      "Sismik deprem kutusu üretimi",
      "Kömür karıştırıcı ve endüstriyel ekipman imalatı",
      "Su arıtma sistemi boru ve yapı imalatları",
    ],
  },
  {
    id: "cephe-kaplama",
    icon: "🏢",
    title: "Cephe & Bina Kaplamaları",
    image: "/images/site/07.jpeg",
    desc: "Estetik ve dayanıklılığın buluştuğu nokta. Zorlu Center, Akmerkez gibi prestijli projelerde elde ettiğimiz tecrübe ile modern bina cephe çözümleri sunuyoruz.",
    points: [
      "Dış cephe giydirme ve panel sistemi uygulamaları",
      "Çelik karkas imalatı ve montajı",
      "Endüstriyel boya ve yüzey işlemleri",
      "Çatı kaplama ve yalıtım uygulamaları",
      "Prestijli AVM ve iş merkezi referansları",
    ],
  },
  {
    id: "bakim-destek",
    icon: "🔧",
    title: "7/24 Bakım & İmalat Desteği",
    image: "/images/site/06.jpeg",
    desc: "Üretiminizin hiç durmaması için günün her saati müdahaleye hazır genel imalat ve şantiye destek ekibimizle yanınızdayız. Acil onarımdan periyodik bakıma kadar tam destek.",
    points: [
      "7/24 acil çelik onarım ve müdahale hizmeti",
      "Şantiye destek ve genel imalat ekibi",
      "Periyodik bakım anlaşmaları",
      "Yedek parça imalatı ve tedariki",
      "Uzaktan teknik danışmanlık",
    ],
  },
];

export default function HizmetlerimizPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", height: "50vh", minHeight: "380px", overflow: "hidden" }}>
        <Image src="/images/site/08.jpeg" alt="Hizmetlerimiz" fill priority style={{ objectFit: "cover" }} sizes="100vw" />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(26,37,47,0.88) 0%, rgba(27,79,114,0.75) 100%)" }} />
        <div className="container-custom" style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: "4rem", paddingTop: "8rem" }}>
          <AnimatedSection direction="left">
            <span className="badge" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", marginBottom: "1rem" }}>Hizmetlerimiz</span>
          </AnimatedSection>
          <AnimatedSection direction="left" delay={0.15}>
            <h1 className="heading-display" style={{ color: "#fff" }}>
              Çelikle Şekillendirdiğimiz<br />Çözümler
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Hizmet Detayları */}
      <section className="section" style={{ background: "var(--bg-primary)" }}>
        <div className="container-custom">
          <div style={{ display: "flex", flexDirection: "column", gap: "6rem" }}>
            {services.map((service, i) => (
              <div
                key={service.id}
                id={service.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "3.5rem",
                  alignItems: "center",
                  direction: i % 2 === 1 ? "rtl" : "ltr",
                }}
              >
                {/* Image */}
                <AnimatedSection direction={i % 2 === 0 ? "left" : "right"} delay={0.1}>
                  <div style={{ direction: "ltr" }}>
                    <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "var(--card-shadow-hover)", aspectRatio: "4/3", position: "relative" }}>
                      <Image src={service.image} alt={service.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 50vw" />
                    </div>
                  </div>
                </AnimatedSection>

                {/* Content */}
                <div style={{ direction: "ltr" }}>
                  <AnimatedSection direction={i % 2 === 0 ? "right" : "left"} delay={0.15}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                      <span style={{ fontSize: "2rem" }}>{service.icon}</span>
                      <span className="badge">{`0${i + 1}`}</span>
                    </div>
                    <h2 className="heading-lg" style={{ marginBottom: "1rem" }}>{service.title}</h2>
                    <div className="divider" />
                    <p className="body-lg" style={{ marginBottom: "1.5rem" }}>{service.desc}</p>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "2rem" }}>
                      {service.points.map((pt) => (
                        <li key={pt} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", color: "var(--text-secondary)", fontSize: "0.9375rem" }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: "3px" }}>
                            <path d="M20 6L9 17l-5-5"/>
                          </svg>
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <Button href="/iletisim" variant="primary" id={`service-cta-${service.id}`}>
                      Bu Hizmet İçin Teklif Alın →
                    </Button>
                  </AnimatedSection>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
