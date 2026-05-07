import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ProjectFrontmatter {
  title: string;
  client: string;
  year: number;
  image: string;
  tags: string[];
  description: string;
  featured?: boolean;
  slug: string;
}

const projectsDir = path.join(process.cwd(), "content", "projects");

export function getAllProjects(): ProjectFrontmatter[] {
  if (!fs.existsSync(projectsDir)) return [];

  const files = fs.readdirSync(projectsDir).filter(
    (f) => f.endsWith(".md") && !f.startsWith("_")
  );

  const projects = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fullPath = path.join(projectsDir, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title ?? "",
      client: data.client ?? "",
      year: data.year ?? 0,
      image: data.image ?? "",
      tags: data.tags ?? [],
      description: data.description ?? "",
      featured: data.featured ?? false,
    } as ProjectFrontmatter;
  });

  // Önce öne çıkanlar, sonra yıla göre azalan sıra
  return projects.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return b.year - a.year;
  });
}
