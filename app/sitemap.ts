import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://nennehcheyassin.com", lastModified: new Date() }];
}
