export type ProjectCategory = "AI + ML" | "PRODUCT" | "CONSULTING" | "EXPERIMENTS"

export interface ProjectEntry {
  href: string
  src: string
  alt: string
  label: string
  category: ProjectCategory
}

export const projects: ProjectEntry[] = [
  // AI + ML
  {
    href: "/lora",
    src: "/lora.webp",
    alt: "Black Male Hair Style Lora",
    label: "Black Male Hair Style Lora",
    category: "AI + ML",
  },
  {
    href: "/stable",
    src: "/stablediffusion.webp",
    alt: "Stable Diffusion Recipe",
    label: "Stable Diffusion Recipe",
    category: "AI + ML",
  },
  {
    href: "/aesthetics-wiki",
    src: "/aesthetics-wiki.webp",
    alt: "Aesthetics Wiki Dataset",
    label: "Aesthetics Wiki Dataset",
    category: "AI + ML",
  },
  {
    href: "/obscure-horror-curator",
    src: "/horror-gpt.webp",
    alt: "Obscure Horror Curator",
    label: "Obscure Horror Curator",
    category: "AI + ML",
  },
  {
    href: "/horror-recs",
    src: "/horror-recs.webp",
    alt: "Obscure Horror Curator 2.0",
    label: "Obscure Horror Curator 2.0",
    category: "AI + ML",
  },
  {
    href: "/dbt-chatbot",
    src: "/cozebot.webp",
    alt: "DBT Chatbot",
    label: "DBT Chatbot",
    category: "AI + ML",
  },
  // Product
  {
    href: "/myplantry",
    src: "/myplantry.webp",
    alt: "Plantry",
    label: "Plantry",
    category: "PRODUCT",
  },
  {
    href: "/the-peoples-princess",
    src: "/peoples-princess.webp",
    alt: "The People's Princess",
    label: "The People's Princess",
    category: "PRODUCT",
  },
  // Consulting
  {
    href: "/arc-capital-partners",
    src: "/arccapitalpartners.webp",
    alt: "Arc Capital Partners",
    label: "Arc Capital Partners",
    category: "CONSULTING",
  },
  {
    href: "/bc",
    src: "/bc.webp",
    alt: "BC Central America",
    label: "BC Central America",
    category: "CONSULTING",
  },
  {
    href: "/eastside-therapy-collective",
    src: "/muses-etc.webp",
    alt: "Eastside Therapy Collective",
    label: "Eastside Therapy Collective",
    category: "CONSULTING",
  },
  {
    href: "/hilary",
    src: "/hilary.webp",
    alt: "Hilary",
    label: "Hilary",
    category: "CONSULTING",
  },
  {
    href: "/jonathan",
    src: "/jonathan.webp",
    alt: "Jonathan",
    label: "Jonathan",
    category: "CONSULTING",
  },
  // Experiments
  {
    href: "/in-out",
    src: "/inout.webp",
    alt: "In & Out",
    label: "In & Out",
    category: "EXPERIMENTS",
  },
  {
    href: "/pomodoro",
    src: "/pomodoro.webp",
    alt: "Pomodoro",
    label: "Pomodoro",
    category: "EXPERIMENTS",
  },
] as const
