import type { Metadata } from "next"
import ProjectCard from "../components/Card"
import { buildMetadata } from "../lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "GUESS AI Stylist — Enterprise RAG Styling System",
  description:
    "An enterprise AI styling assistant at GUESS Inc. using LLMs and retrieval-augmented generation over product catalog embeddings to generate personalized outfit recommendations at scale.",
  path: "/guess-ai-stylist",
  image: "portfolio_.webp",
})

export default function GuessAIStylist() {
  return (
    <ProjectCard
      title="GUESS AI Stylist"
      subtitle="Enterprise AI styling system for GUESS Inc."
      status="live"
      problem="GUESS's merchandising team spent significant manual hours curating outfit recommendations and styling guides for their digital platforms, creating a bottleneck in content production and limiting personalization at scale."
      solution="An internal AI styling assistant that uses LLMs and product catalog vector embeddings to generate personalized outfit recommendations — dramatically reducing curation time while improving the relevance of styling suggestions across GUESS's digital touchpoints."
      description="Built as an enterprise internal tool at GUESS Inc., this system combines product catalog data with large language models to power AI-driven outfit recommendations. The architecture uses retrieval-augmented generation (RAG) over product embeddings, allowing the model to ground styling suggestions in actual available inventory. Deployed across GUESS's enterprise retail workflows."
      techStack={[
        { type: "skill", name: "LLM Integration" },
        { type: "skill", name: "RAG Architecture" },
        { type: "tool", name: "Vector Search" },
        { type: "framework", name: "Next.js" },
        { type: "language", name: "TypeScript" },
        { type: "hosting", name: "Enterprise Cloud" },
      ]}
      year="2024–2025"
      diagram={`graph LR
  A[Product Catalog] --> B[Vector Embeddings]
  B --> C[RAG Retrieval]
  D[User Style Preferences] --> C
  C --> E[LLM]
  E --> F[Outfit Recommendations]
  F --> G[GUESS Digital Platform]`}
    />
  )
}
