import ProjectCard from "../components/Card"

export default function BlackFridayAIDealHunter() {
  return (
    <ProjectCard
      title="Black Friday AI Deal Hunter"
      subtitle="Scrapes retailer promo pages → LLM normalizes messy deal copy → ranked deals served via Cloud Run REST API"
      status="in progress"
      link="https://black-friday-ai-deal-hunter-820272415386.us-west1.run.app/"
      problem="Retailer promo pages are inconsistent by design — different HTML structures, marketing copy mixed with actual discount percentages, no standard format. Before you can rank deals, you have to solve a normalization problem."
      solution="A two-stage pipeline. Stage 1: a scraper ingests retailer promo pages and extracts raw HTML deal copy. Stage 2: a Gemini-powered prompt normalizes each deal into a structured object — name, original price, discounted price, discount %, and category. Results are ranked and served via a Cloud Run REST endpoint."
      description="The core engineering challenge was prompt design: getting Gemini to reliably extract structured fields from unstructured marketing copy like '40% off sitewide — ends tonight!' The prompt uses a JSON schema to enforce output shape and handles edge cases like missing prices or vague percentage ranges. The ranking heuristic weights discount percentage, product category popularity, and recency. Cloud Run gives cold-start-tolerant, zero-maintenance hosting for the API layer while the UI is in development."
      techStack={[
        { type: "language", name: "Python" },
        { type: "tool", name: "Gemini (Google AI Studio)" },
        { type: "tool", name: "Google Cloud Run" },
        { type: "tool", name: "BeautifulSoup" },
        { type: "API", name: "REST API" },
        { type: "skill", name: "LLM Prompt Engineering" },
        { type: "skill", name: "Structured Output" },
      ]}
      year="2025"
      skills="web scraping, LLM prompt engineering, structured output extraction, REST API design, Cloud Run deployment, deal ranking heuristics"
      impact="REST API deployed on Cloud Run. LLM prompt reliably extracts structured deal fields from unstructured marketing copy across multiple retailers. Ranking engine and UI layer in active development."
      image="blackfriday.jpeg"
      githubLink=""
      diagram={`graph LR
  A["Retailer Promo Pages"] --> B["Web Scraper<br/>Python + BeautifulSoup"]
  B --> C["Raw Deal Copy<br/>+ HTML metadata"]
  C --> D["Gemini via AI Studio<br/>Structured output prompt"]
  D --> E["Normalized Deal Object<br/>name · price · discount% · category"]
  E --> F["Ranking Engine<br/>discount% + recency score"]
  F --> G["Cloud Run REST API<br/>/deals endpoint"]
  G --> H["Client UI<br/>in development"]`}
    />
  )
}
