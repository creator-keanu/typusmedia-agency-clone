import { describe, expect, it } from "vitest";
import { adjacentProjects, filterProjects, findProject, parsePortfolioCategory, type PortfolioProject } from "./portfolio";

const projects: PortfolioProject[] = [
  { slug: "webprojekt", title: "Webprojekt", category: "Web", image: "web", images: ["web"], text: "", features: [] },
  { slug: "marke", title: "Marke", category: "Marken", image: "brand", images: ["brand"], text: "", features: [] },
];
describe("Portfolio browsing", () => {
  it("filters by the original category", () => {
    expect(filterProjects(projects, "Web").map((project) => project.slug)).toEqual(["webprojekt"]);
    expect(filterProjects(projects, "Marken").map((project) => project.slug)).toEqual(["marke"]);
    expect(filterProjects(projects, "Alle")).toHaveLength(2);
    expect(filterProjects(projects, "Gastro")).toEqual([]);
  });
  it("normalizes unsupported category input", () => {
    expect(parsePortfolioCategory("Corporate")).toBe("Corporate");
    expect(parsePortfolioCategory("invalid")).toBe("Alle");
  });
  it("resolves exact slugs and rejects missing projects", () => {
    expect(findProject(projects, "marke")?.title).toBe("Marke");
    expect(findProject(projects, "missing")).toBeUndefined();
  });
  it("keeps previous and next navigation within project bounds", () => {
    expect(adjacentProjects(projects, "webprojekt").previous).toBeUndefined();
    expect(adjacentProjects(projects, "webprojekt").next?.slug).toBe("marke");
    expect(adjacentProjects(projects, "marke").previous?.slug).toBe("webprojekt");
    expect(adjacentProjects(projects, "marke").next).toBeUndefined();
    expect(adjacentProjects(projects, "missing")).toEqual({ previous: undefined, next: undefined });
  });
});