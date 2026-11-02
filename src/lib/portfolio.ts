export const portfolioCategories = ["Alle", "Web", "Editorial", "Marken", "Corporate", "Gastro"] as const;
export type PortfolioCategory = (typeof portfolioCategories)[number];
export interface PortfolioProject {
  slug: string;
  title: string;
  category: Exclude<PortfolioCategory, "Alle">;
  image: string;
  images: readonly string[];
  text: string;
  features: readonly string[];
}
export function parsePortfolioCategory(value: unknown): PortfolioCategory {
  return portfolioCategories.find((category) => category === value) ?? "Alle";
}
export function filterProjects(projects: readonly PortfolioProject[], category: PortfolioCategory) {
  return category === "Alle" ? projects : projects.filter((project) => project.category === category);
}
export function findProject(projects: readonly PortfolioProject[], slug: string) {
  return projects.find((project) => project.slug === slug);
}
export function adjacentProjects(projects: readonly PortfolioProject[], slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index < 0) return { previous: undefined, next: undefined };
  return { previous: projects[index - 1], next: projects[index + 1] };
}