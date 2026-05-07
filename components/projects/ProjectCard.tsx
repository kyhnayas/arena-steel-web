"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ProjectFrontmatter } from "@/lib/projects";

interface ProjectCardProps {
  project: ProjectFrontmatter;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      id={`project-card-${project.slug}`}
      className="card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      style={{ overflow: "hidden", height: "100%", display: "flex", flexDirection: "column" }}
    >
      {/* Image */}
      <div style={{ position: "relative", height: "240px", overflow: "hidden", flexShrink: 0 }}>
        <motion.div
          style={{ position: "absolute", inset: 0 }}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </motion.div>
        {/* Gradient */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "60%",
          background: "linear-gradient(to top, rgba(26,37,47,0.7), transparent)",
        }} />
        {/* Featured badge */}
        {project.featured && (
          <div style={{
            position: "absolute", top: "1rem", left: "1rem",
            background: "var(--accent-blue)", color: "#fff",
            padding: "0.25rem 0.625rem",
            borderRadius: "999px",
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.04em",
          }}>
            ★ ÖNCÜ PROJE
          </div>
        )}
        {/* Year */}
        <div style={{
          position: "absolute", bottom: "0.875rem", right: "1rem",
          color: "rgba(255,255,255,0.85)",
          fontSize: "0.8125rem",
          fontWeight: 600,
        }}>
          {project.year}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
        {/* Client */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "0.375rem",
          marginBottom: "0.625rem",
          color: "var(--accent-blue)",
          fontWeight: 700,
          fontSize: "0.8125rem",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
          {project.client}
        </div>

        <h3 className="heading-md" style={{ marginBottom: "0.75rem", fontSize: "1.0625rem" }}>
          {project.title}
        </h3>

        <p className="body-md" style={{ fontSize: "0.875rem", flex: 1, marginBottom: "1.25rem" }}>
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
          {project.tags.map((tag) => (
            <span key={tag} className="badge" style={{ fontSize: "0.7rem" }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
