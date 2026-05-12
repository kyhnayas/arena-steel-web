import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/projects/ProjectCard";
import { getAllProjects } from "@/lib/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referans Projeler",
  description:
    "Türkiye'nin dört bir yanında ve uluslararası arenada başarıyla tamamladığımız dev projelerimiz.",
};

export default function ReferanslarPage() {
  const projects = getAllProjects();

  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", height: "50vh", minHeight: "380px", overflow: "hidden" }}>
        <Image src="/images/projects/zorlu-center/02.jpeg" alt="Referans Projeler" fill priority style={{ objectFit: "cover" }} sizes="100vw" />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(26,37,47,0.9) 0%, rgba(27,79,114,0.75) 100%)" }} />
        <div className="container-custom" style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: "4rem", paddingTop: "8rem" }}>
          <AnimatedSection direction="left">
            <span className="badge" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", marginBottom: "1rem" }}>Referans Projeler</span>
          </AnimatedSection>
          <AnimatedSection direction="left" delay={0.15}>
            <h1 className="heading-display" style={{ color: "#fff" }}>
              Çelikle Yükselen İmzamız
            </h1>
          </AnimatedSection>
          <AnimatedSection direction="left" delay={0.25}>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.0625rem", maxWidth: "600px", marginTop: "1rem" }}>
              Türkiye&apos;nin dört bir yanında ve uluslararası arenada başarıyla tamamladığımız,
              sektörün önde gelen firmalarına ait dev projelerimiz.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Projeler Grid */}
      <section className="section" style={{ background: "var(--bg-primary)" }}>
        <div className="container-custom">
          <SectionHeader
            badge={`${projects.length} Proje`}
            title="Tamamlanan Projelerimiz"
            subtitle="Her proje, sıfır hata toleransı ve zamanında teslimat anlayışımızın somut bir kanıtıdır."
            centered
          />

          {projects.length === 0 ? (
            <div style={{ textAlign: "center", padding: "4rem", color: "var(--text-muted)" }}>
              <p>Henüz proje eklenmemiş. <code>content/projects/</code> klasörüne .md dosyası ekleyin.</p>
            </div>
          ) : (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "1.75rem",
            }}>
              {projects.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} />
              ))}
            </div>
          )}

          {/* Yeni proje ekleme notu 
          <AnimatedSection delay={0.4}>
            <div style={{
              marginTop: "4rem",
              padding: "2rem",
              background: "linear-gradient(135deg, rgba(27,79,114,0.05), rgba(46,134,193,0.05))",
              border: "1px dashed var(--accent-blue)",
              borderRadius: "12px",
              textAlign: "center",
            }}>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                💡 <strong>Yeni proje eklemek için:</strong> <code>content/projects/_template.md</code> dosyasını kopyalayın,
                yeniden adlandırın ve frontmatter bilgilerini doldurun. Değişiklikler otomatik olarak bu sayfada görünür.
              </p>
            </div>
          </AnimatedSection>*/}
        </div>
      </section>
    </>
  );
}
