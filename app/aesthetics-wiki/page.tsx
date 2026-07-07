import type { Metadata } from "next"
import ProjectCard from "../components/Card"
import { buildMetadata } from "../lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Aesthetics Wiki Data Clean Room",
  description:
    "A clean, queryable HuggingFace dataset of ~400 aesthetic subcultures scraped and normalized with Python and Pandas, enriched with tags, color palettes, and iconography.",
  path: "/aesthetics-wiki",
  image: "aesthetics-wiki.webp",
})

export default function AestheticsWiki() {
  return (
    <ProjectCard
      title="Aesthetics Wiki Data Clean Room"
      subtitle="Structured dataset of online aesthetic subcultures"
      problem="I have an obsession with cataloging and understanding online aesthetic niches. The power of the niche is rooted in culture, internet communities, and shared aesthetics. I wanted to create a structured basis of these various subcultures. I hope to do a creative aesthetic related project with this one day!"
      solution="A clean, queryable HuggingFace dataset of ~400 aesthetic subcultures scraped and normalized with Python and Pandas, enriched with tags, color palettes, and iconography. 239 downloads as of Nov 2025."
      description="The internet's Aesthetics Wiki is a sprawling rabbit hole, so I scraped, normalized, and enriched the canon into a clean dataset that designers and researchers can actually query. The project catalogs ~400 subcultures (from Afro-Futurism to Weirdcore) with tags, palettes, iconography, and canonical references so creative teams can prototype vibes faster. As of Nov. 23, 2025, there have been 239 downloads."
      techStack={[
        { type: "skill", name: "Web Scraping" },
        { type: "skill", name: "Data Cleaning" },
        { type: "tool", name: "Python + Pandas" },
        { type: "tool", name: "Notion" },
        { type: "tool", name: "Hugging Face Datasets" },
      ]}
      year="2024"
      skills="knowledge graph design, deduplicating crowd-sourced lore, taxonomy building, prompt-ready metadata authoring, and publishing reproducible datasets"
      image="aesthetics-wiki.webp"
      githubLink=""
      link="https://huggingface.co/datasets/ninar12/aesthetics-wiki"
      diagram={`graph LR
  A[Aesthetics Wiki] --> B[Scrape 400 subcultures]
  B --> C[Normalize with Pandas]
  C --> D[Publish on HuggingFace]
  D --> E[239 downloads]`}
    />
  )
}
