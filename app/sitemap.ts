import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sfmta.dev",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://sfmta.dev/about",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://sfmta.dev/visualizations",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://sfmta.dev/apis",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
        url: "https://sfmta.dev/visualizations/fare-evasion",
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
  ];
}
