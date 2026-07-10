import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";
import { MODELOS } from "@/data/modelos";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    {
      url: `${SITE.url}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE.url}/obrigado`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.1,
    },
  ];

  for (const m of MODELOS) {
    routes.push({
      url: `${SITE.url}/modelos/${m.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  return routes;
}
