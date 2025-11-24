import ProjectCard from "../components/Card"

export default function BlackFridayAIDealHunter() {
  return (
    <ProjectCard
      title="Black Friday AI Deal Hunter"
      subtitle="In-progress AI assistant that surfaces the lowest live prices"
      link="https://black-friday-ai-deal-hunter-820272415386.us-west1.run.app/"
      description="This in-progress Black Friday scout scrapes retailer promos, pushes the copy + metadata through Google AI Studio APIs, and matches each item to similar brands/products in my catalog so shoppers can see comparable deals instantly. The Cloud Run endpoint exposes the experimental API while I finish the UI and ranking heuristics."
      techStack={[
        { type: "skill", name: "App Building" },
        { type: "tool", name: "Google AI Studio" },
        { type: "hosting", name: "Google Cloud Run" },
      ]}
      year="2025"
      skills="retail data ingestion, promo normalization, LLM prompt engineering for deal chatter, and lightweight workflow automation"
      image="blackfriday.jpeg"
      githubLink=""
    />
  )
}
