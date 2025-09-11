import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://harshal0x01.vercel.app";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/contact"],
        disallow: [
          "/experience",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}


