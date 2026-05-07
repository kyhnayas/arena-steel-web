"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";

const services = [
  {
    id: "celik-konstruksiyon",
    image: "/images/projects/zorlu-center/01.jpeg",
    title: "Çelik Konstrüksiyon İşleri",
    desc: "Endüstriyel tesisler, otel, iş merkezi ve AVM projeleri için yüksek taşıma kapasiteli ağır ve hafif çelik yapı çözümleri.",
    icon: "🏗️",
  },
  {
    id: "endustriyel-imalat",
    image: "/images/site/05.jpeg",
    title: "Endüstriyel & Özel İmalatlar",
    desc: "Termik santral baypas hatları, su arıtma sistemleri, sismik deprem kutuları ve tünel sekment imalatları.",
    icon: "⚙️",
  },
  {
    id: "cephe-kaplama",
    image: "/images/site/07.jpeg",
    title: "Cephe & Bina Kaplamaları",
    desc: "Estetik ve dayanıklılığın buluştuğu nokta; dış cephe giydirme, çelik karkas imalatı ve boya işleri.",
    icon: "🏢",
  },
  {
    id: "bakim-destek",
    image: "/images/site/06.jpeg",
    title: "7/24 Bakım & İmalat Desteği",
    desc: "Üretiminizin hiç durmaması için günün her saati müdahaleye hazır genel imalat ve şantiye destek ekibi.",
    icon: "🔧",
  },
];

export default function ServicesGrid() {
  return (
    <section id="hizmetler" className="section" style={{ background: "var(--bg-primary)" }}>
      <div className="container-custom">
        <SectionHeader
          badge="Hizmetlerimiz"
          title="Çelikle Şekillendirdiğimiz Çözümler"
          subtitle="Her proje için özel mühendislik çözümleri ve profesyonel ekip."
          centered
        />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
          gap: "1.5rem",
        }}>
          {services.map((service, i) => (
            <AnimatedSection key={service.id} delay={i * 0.12}>
              <Link
                href="/hizmetlerimiz"
                id={`service-card-${service.id}`}
                style={{ textDecoration: "none", display: "block", height: "100%" }}
              >
                <motion.div
                  className="card"
                  style={{ height: "100%", cursor: "pointer" }}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Image */}
                  <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
                    <motion.div
                      style={{ position: "absolute", inset: 0 }}
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </motion.div>
                    {/* Gradient overlay */}
                    <div style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "50%",
                      background: "linear-gradient(to top, rgba(27,79,114,0.6), transparent)",
                    }} />
                    {/* Icon badge */}
                    <div style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      width: "40px",
                      height: "40px",
                      background: "rgba(248,249,250,0.95)",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
                    }}>
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: "1.5rem" }}>
                    <h3 className="heading-md" style={{ color: "var(--text-primary)", marginBottom: "0.625rem" }}>
                      {service.title}
                    </h3>
                    <p className="body-md" style={{ fontSize: "0.9rem" }}>
                      {service.desc}
                    </p>
                    <div style={{ marginTop: "1.25rem", display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--accent-blue)", fontWeight: 600, fontSize: "0.875rem" }}>
                      Detayları Gör
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
