import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const routes = [
    "",
    "/about",
    "/experience",
    "/projects",
    "/skills",
    "/contact",
  ];

  const now = new Date().toISOString();

  return routes.map((route) => ({
    url: `${baseUrl}${route.startsWith("/") ? route : `/${route}`}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}


