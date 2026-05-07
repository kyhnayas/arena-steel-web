import AnimatedSection from "./AnimatedSection";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center" : ""} style={{ marginBottom: "3rem" }}>
      {badge && (
        <AnimatedSection delay={0}>
          <span className="badge" style={light ? { background: "rgba(255,255,255,0.15)", color: "#fff" } : {}}>
            {badge}
          </span>
        </AnimatedSection>
      )}
      <AnimatedSection delay={0.1}>
        <h2
          className="heading-xl"
          style={{
            marginTop: badge ? "0.75rem" : 0,
            color: light ? "#ffffff" : "var(--text-primary)",
          }}
        >
          {title}
        </h2>
        <div
          className="divider"
          style={{
            margin: centered ? "1rem auto 1.5rem" : "1rem 0 1.5rem",
            background: light
              ? "linear-gradient(90deg, rgba(255,255,255,0.8), rgba(255,255,255,0.4))"
              : "linear-gradient(90deg, var(--accent-navy), var(--accent-blue))",
          }}
        />
      </AnimatedSection>
      {subtitle && (
        <AnimatedSection delay={0.2}>
          <p
            className="body-lg"
            style={{
              maxWidth: centered ? "680px" : "100%",
              margin: centered ? "0 auto" : 0,
              color: light ? "rgba(255,255,255,0.82)" : "var(--text-secondary)",
            }}
          >
            {subtitle}
          </p>
        </AnimatedSection>
      )}
    </div>
  );
}
