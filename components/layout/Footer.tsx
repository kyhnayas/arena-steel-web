import Link from "next/link";

const footerLinks = [
  {
    title: "Sayfalar",
    links: [
      { href: "/", label: "Ana Sayfa" },
      { href: "/hakkimizda", label: "Hakkımızda" },
      { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
      { href: "/referanslar", label: "Referans Projeler" },
      { href: "/tesis", label: "Makine Parkuru" },
      { href: "/iletisim", label: "İletişim" },
    ],
  },
  {
    title: "Hizmetler",
    links: [
      { href: "/hizmetlerimiz", label: "Çelik Konstrüksiyon" },
      { href: "/hizmetlerimiz", label: "Endüstriyel İmalatlar" },
      { href: "/hizmetlerimiz", label: "Cephe Kaplamaları" },
      { href: "/hizmetlerimiz", label: "7/24 Bakım Desteği" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--accent-steel)", color: "rgba(255,255,255,0.85)" }}>
      <div className="container-custom" style={{ padding: "5rem 1.5rem 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem", paddingBottom: "4rem" }}>
          {/* Brand */}
          <div style={{ gridColumn: "span 1" }}>
            <Link href="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.625rem", marginBottom: "1.25rem" }}>
              <div style={{
                width: "40px",
                height: "40px",
                background: "linear-gradient(135deg, var(--accent-blue), #5dade2)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <img
                  src="/images/logos/logo.svg"
                  alt="Logo"
                  style={{ width: "20px", height: "20px" }}
                />
              </div>
              <div>
                <span style={{ fontWeight: 800, fontSize: "1.125rem", color: "#fff", letterSpacing: "-0.01em", display: "block", lineHeight: 1.1 }}>
                  Arena Steel
                </span>
                <span style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.5)", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  Çelik Konstrüksiyon
                </span>
              </div>
            </Link>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(255,255,255,0.6)", maxWidth: "280px" }}>
              Sakarya merkezli, Türkiye genelinde faaliyet gösteren çelik konstrüksiyon ve demir işleme uzmanı.
            </p>
            <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              <a href="tel:+905350135486" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.875rem", display: "flex", alignItems: "center", gap: "0.5rem", transition: "color 0.2s" }}>
                <span>📞</span> 0535 013 54 86 — Yiğithan Bozdemir
              </a>
              <a href="tel:+905369170785" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.875rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span>📞</span> 0536 917 07 85 — Mertcan Koç
              </a>
              <a href="mailto:bilgi@arenasteel.com.tr" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.875rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span>✉️</span> bilgi@arenasteel.com.tr
              </a>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.875rem", display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                <span>📍</span> Kozluk Mah. Sanayi Cad. No:6 Erenler / Sakarya
              </p>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h3 style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "1.25rem" }}>
                {col.title}
              </h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/65 hover:text-white transition-colors duration-200 no-underline text-[0.9375rem]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA */}
          <div>
            <h3 style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "1.25rem" }}>
              Projeniz İçin
            </h3>
            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
              Yeni projeniz için detaylı teklif almak ister misiniz?
            </p>
            <Link href="/iletisim" className="btn-primary" style={{ display: "inline-flex", fontSize: "0.875rem", padding: "0.75rem 1.5rem" }}>
              Teklif İste →
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "1.5rem 0",
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.35)" }}>
            © {new Date().getFullYear()} Arena Steel. Tüm hakları saklıdır. Design by Kayhan Ayas
          </p>
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.25)" }}>
            Kozluk Mah. Sanayi Cad. No:6 Erenler / Sakarya
          </p>
        </div>
      </div>
    </footer>
  );
}
