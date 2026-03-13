import ProjectCard from "../components/Card"

export default function AestheticsWiki() {
  return (
    <ProjectCard
      title="Aesthetics Wiki Data Clean Room"
      subtitle="Structured dataset of online aesthetic subcultures"
      problem="The internet's Aesthetics Wiki catalogs hundreds of subcultures but is unstructured, inconsistent, and unqueryable — unusable for researchers and designers who need clean, prompt-ready data."
      solution="A clean, queryable HuggingFace dataset of ~400 aesthetic subcultures scraped and normalized with Python and Pandas, enriched with tags, color palettes, and iconography. 239 downloads as of Nov 2025 by designers, researchers, and AI practitioners."
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
      image="aesthetics-wiki.png"
      video="aesthetics_wiki.mov"
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
