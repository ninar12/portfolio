import ProjectCard from "../components/Card"

export default function AestheticsWiki() {
  return (
    <ProjectCard
      title="Aesthetics Wiki Data Clean Room"
      subtitle="Structured dataset of online aesthetic subcultures"
      problem="The internet's Aesthetics Wiki catalogs hundreds of subcultures but is unstructured, inconsistent, and unqueryable — unusable for researchers and designers who need clean, prompt-ready data."
      solution="A clean, queryable HuggingFace dataset of ~400 aesthetic subcultures scraped and normalized with Python and Pandas, enriched with tags, color palettes, and iconography."
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
      impact="239 downloads on HuggingFace by designers, researchers, and AI practitioners."
      image="aesthetics-wiki.png"
      githubLink=""
      link="https://huggingface.co/datasets/ninar12/aesthetics-wiki"
      diagram={`graph LR
  A["Aesthetics Wiki is\\nunstructured & unqueryable"] --> B["Scrape ~400 subculture\\npages with Python"]
  B --> C["Normalize with Pandas\\nadd tags + palettes"]
  C --> D["Publish dataset\\non HuggingFace"]
  D --> E["239 downloads\\nby designers & researchers"]`}
    />
  )
}
