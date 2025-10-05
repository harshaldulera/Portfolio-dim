"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function Head() {
  const pathname = usePathname() || "/";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://harshal0x01.vercel.app";
  const canonicalUrl = `${siteUrl}${pathname === "/" ? "" : pathname}`;
  const title = "Harshal Dulera — Portfolio";
  const description = "Full‑stack developer portfolio: projects, experience, skills, and contact.";
  const ogImage = `${siteUrl}/og-image.png`;
  const twitterHandle = "@harshal0x01";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Harshal Dulera",
    url: siteUrl,
    sameAs: [
      "https://github.com/harshal0x01",
      "https://www.linkedin.com/in/harshal0x01/",
    ],
    jobTitle: "Full‑stack Developer",
    description,
  };

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Favicon / PWA basics */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.webmanifest" />
      <meta name="theme-color" content="#000000" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index,follow" />

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}


