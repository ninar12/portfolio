import type { Metadata } from "next"
import ProjectCard from "../components/Card"
import { buildMetadata } from "../lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Black Friday AI Deal Hunter",
  description:
    "A Cloud Run API that scrapes retailer promotions, normalizes and ranks deals through Google AI Studio, and matches items to comparable products so shoppers see the best price instantly.",
  path: "/black-friday-ai-deal-hunter",
  image: "blackfriday.webp",
})

export default function BlackFridayAIDealHunter() {
  return (
    <ProjectCard
      title="Black Friday AI Deal Hunter"
      subtitle="LLM-powered retail data pipeline on Google Cloud Run"
      status="in progress"
      link=""
      problem="Retail promo data is scattered across hundreds of retailer pages with inconsistent formats, making real-time price comparison nearly impossible without manual effort."
      solution="A Cloud Run API that scrapes retailer promotions, passes the copy and metadata through Google AI Studio to normalize and rank deals, and matches items to comparable products so shoppers see the best price instantly."
      description="This in-progress Black Friday scout scrapes retailer promos, pushes the copy + metadata through Google AI Studio APIs, and matches each item to similar brands/products in my catalog so shoppers can see comparable deals instantly. The Cloud Run endpoint exposes the experimental API while I finish the UI and ranking heuristics."
      techStack={[
        { type: "skill", name: "App Building" },
        { type: "tool", name: "Google AI Studio" },
        { type: "hosting", name: "Google Cloud Run" },
      ]}
      year="2025"
      skills="retail data ingestion, promo normalization, LLM prompt engineering for deal chatter, and lightweight workflow automation"
      image="blackfriday.webp"
      githubLink=""
      diagram={`graph LR
  A[Retailer Pages] --> B[Scraper]
  B --> C[Google AI Studio]
  C --> D[Deal Normalizer]
  D --> E[Cloud Run API]
  E --> F[Client / UI]`}
    />
  )
}
