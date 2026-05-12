"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
  { href: "/referanslar", label: "Referanslar" },
  { href: "/tesis", label: "Tesis" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      id="navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(248, 249, 250, 0.97)"
          : "rgba(248, 249, 250, 0.92)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(27,79,114,0.06)" : "none",
      }}
    >
      <div className="container-custom" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
        {/* Logo */}
        <Link
          href="/"
          id="navbar-logo"
          style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}
        >
          <div style={{
            width: "36px",
            height: "36px",
            background: "linear-gradient(135deg, var(--accent-navy), var(--accent-blue))",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}>
            <img
              src="/images/logos/logo.svg"
              alt="Logo"
              style={{ width: "20px", height: "20px" }}
            />
          </div>
          <div>
            <span style={{ fontWeight: 800, fontSize: "1.125rem", color: "var(--accent-navy)", letterSpacing: "-0.01em", display: "block", lineHeight: 1.1 }}>
              Arena Steel
            </span>
            <span style={{ fontSize: "0.65rem", color: "var(--text-muted)", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Çelik Konstrüksiyon
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden-mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/iletisim" className="btn-primary" style={{ padding: "0.625rem 1.375rem", fontSize: "0.875rem" }}>
            Teklif İste
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          id="navbar-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menüyü aç/kapat"
          className="show-mobile"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            color: "var(--text-primary)",
          }}
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          id="navbar-mobile-menu"
          style={{
            background: "rgba(248,249,250,0.98)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid var(--border)",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                padding: "0.875rem 1rem",
                borderRadius: "8px",
                fontWeight: 500,
                color: pathname === link.href ? "var(--accent-navy)" : "var(--text-primary)",
                background: pathname === link.href ? "rgba(27,79,114,0.06)" : "transparent",
                textDecoration: "none",
                fontSize: "1rem",
                transition: "all 0.2s ease",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/iletisim" className="btn-primary" style={{ marginTop: "0.75rem", justifyContent: "center" }}>
            Teklif İste
          </Link>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
