import { MetadataRoute } from "next";
import { SITE_INFO, SERVICES_DATA, BLOG_POSTS_DATA } from "@/data/siteData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_INFO.url;

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/cctv-packages",
    "/projects",
    "/areas-we-cover",
    "/testimonials",
    "/faq",
    "/blog",
    "/quote",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/cookie-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const serviceRoutes = SERVICES_DATA.map((srv) => ({
    url: `${baseUrl}/services/${srv.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const blogRoutes = BLOG_POSTS_DATA.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
