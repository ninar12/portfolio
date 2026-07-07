import { BASE_URL } from "../lib/config"

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nina Rhone",
    jobTitle: "AI Solutions Architect",
    url: BASE_URL,
    image: `${BASE_URL}/portfolio_.webp`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Los Angeles",
      addressRegion: "CA",
      addressCountry: "US",
    },
    sameAs: [
      "https://www.linkedin.com/in/nina-rhone/",
      "https://github.com/ninar12",
      "https://huggingface.co/ninar12",
      "https://x.com/ninar2424",
    ],
    knowsAbout: [
      "AI Solutions Architecture",
      "Large Language Models",
      "Vector Search",
      "Recommendation Systems",
      "LLM Integration",
      "RAG Systems",
      "Machine Learning",
      "Next.js",
      "Full Stack Development",
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
