import ProjectCard from "../components/Card"

export default function BlackFridayAIDealHunter() {
  return (
    <ProjectCard
      title="Black Friday AI Deal Hunter"
      subtitle="LLM-powered retail data pipeline on Google Cloud Run"
      status="in progress"
      link="https://black-friday-ai-deal-hunter-820272415386.us-west1.run.app/"
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
      impact="Live Cloud Run endpoint serving normalized deal data across multiple retailers. Ranking heuristics and UI layer in active development."
      image="blackfriday.jpeg"
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
