import ProjectCard from "../components/Card"

export default function AestheticsWiki() {
  return (
    <ProjectCard
      title="Aesthetics Wiki Data Clean Room"
      subtitle="Structured dataset of online aesthetic subcultures"
      link="https://huggingface.co/datasets/ninar12/aesthetics-wiki"
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
      githubLink=""
    />
  )
}
