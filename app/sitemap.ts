import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.mulliganrecoveryct.org";
  const routes = [
    "",
    "/about",
    "/programs",
    "/admissions",
    "/insurance-payment",
    "/families",
    "/resources",
    "/contact",
    "/careers",
    "/privacy-policy",
    "/terms"
  ];

  const staticRoutes = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7
  }));

  const resourceRoutes = getAllPosts().map((post) => ({
    url: `${baseUrl}/resources/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6
  }));

  return [...staticRoutes, ...resourceRoutes];
}
