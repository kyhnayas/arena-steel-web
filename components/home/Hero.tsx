"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/images/projects/soma/01.jpeg"
          alt="Arena Steel — Çelik Konstrüksiyon Projesi"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100vw"
        />
        {/* Light overlay — açık gri/beyaz gradient, metinleri okunabilir kılar */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(105deg, rgba(248,249,250,0.92) 0%, rgba(233,236,239,0.82) 45%, rgba(233,236,239,0.45) 100%)",
        }} />
      </div>

      {/* Dekoratif metal doku çizgisi */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "6px",
        background: "linear-gradient(90deg, var(--accent-navy), var(--accent-blue), var(--accent-navy))",
        zIndex: 1,
      }} />

      <div className="container-custom" style={{ position: "relative", zIndex: 1, paddingTop: "7rem", paddingBottom: "5rem" }}>
        <div style={{ maxWidth: "780px" }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="badge" style={{ marginBottom: "1.5rem", display: "inline-flex" }}>
              <span style={{ marginRight: "0.4rem" }}>🏭</span>
              Sakarya&apos;nın Lider Çelik Konstrüksiyon Firması
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            className="heading-display"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
            style={{ marginBottom: "1.5rem" }}
          >
            Dev Projelerin{" "}
            <span className="gradient-text">Çelik İskeleti:</span>
            {" "}Arena Steel
          </motion.h1>

          {/* H2 */}
          <motion.p
            className="body-lg"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.37, ease: "easeOut" }}
            style={{ marginBottom: "2.5rem", fontSize: "1.2rem", maxWidth: "660px" }}
          >
            Enerjisa&apos;dan Avrasya Tüneli&apos;ne kadar Türkiye&apos;nin dev projelerinde çeliğe hayat veriyoruz.
            Sakarya&apos;nın lider çelik konstrüksiyon ve demir işleme uzmanı ile projeleriniz sıfır hatayla yükseliyor.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.52 }}
            style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}
          >
            <Link href="/referanslar" className="btn-primary" id="hero-cta-projects">
              Projelerimizi İnceleyin →
            </Link>
            <Link href="/iletisim" className="btn-outline-dark" id="hero-cta-contact">
              Teklif İste
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.72 }}
            style={{ display: "flex", flexWrap: "wrap", gap: "2.5rem", marginTop: "4rem" }}
          >
            {[
              { num: "50+", label: "Tamamlanan Proje" },
              { num: "10+", label: "Yıl Tecrübe" },
              { num: "4.000m²", label: "Üretim Alanı" },
              { num: "7/24", label: "Teknik Destek" },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ fontWeight: 800, fontSize: "1.875rem", color: "var(--accent-navy)", letterSpacing: "-0.02em" }}>
                  {stat.num}
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 500, marginTop: "2px" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: "absolute",
          bottom: "2.5rem",
          right: "2.5rem",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span style={{ fontSize: "0.7rem", letterSpacing: "0.1em", color: "var(--text-muted)", textTransform: "uppercase", writingMode: "vertical-rl" }}>
          Kaydır
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          style={{ color: "var(--accent-navy)" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
