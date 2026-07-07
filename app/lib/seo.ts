import type { Metadata } from "next"
import { BASE_URL } from "./config"

export function buildMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string
  description: string
  path: string
  image?: string
}): Metadata {
  const url = `${BASE_URL}${path}`
  const ogImage = image
    ? `${BASE_URL}/${image.replace(/^\//, "")}`
    : `${BASE_URL}/portfolio_.webp`
  const fullTitle = `${title} | Nina Rhone`

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "Nina Rhone",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  }
}
