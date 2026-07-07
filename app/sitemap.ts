import type { MetadataRoute } from "next"
import { BASE_URL } from "./lib/config"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages = [
    { url: BASE_URL, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/about`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/services`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/resume`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/contact`, priority: 0.7, changeFrequency: "monthly" as const },
  ]

  const projectPages = [
    "/horror-recs",
    "/lora",
    "/stable",
    "/aesthetics-wiki",
    "/obscure-horror-curator",
    "/dbt-chatbot",
    "/myplantry",
    "/arc-capital-partners",
    "/bc",
    "/eastside-therapy-collective",
    "/hilary",
    "/jonathan",
    "/in-out",
    "/the-peoples-princess",
    "/pomodoro",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }))

  return [...staticPages, ...projectPages].map((page) => ({
    ...page,
    lastModified: now,
  }))
}
