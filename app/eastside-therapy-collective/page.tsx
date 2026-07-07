import type { Metadata } from "next"
import ProjectCard from "../components/Card"
import { buildMetadata } from "../lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Eastside Therapy Collective",
  description:
    "A warm, accessible Wix site for a collective of therapists, extended with a custom interactive muses page that gives the therapists' writing its own visual space.",
  path: "/eastside-therapy-collective",
  image: "muses-etc.webp",
})

export default function EastsideTherapyCollective() {
  return (
    <ProjectCard
      title="Eastside Therapy Collective"
      subtitle="Therapist website + interactive muses page"
      link="https://www.eastsidetherapycollective.com/muses-1"
      problem="A therapy collective needed an accessible, warm client-facing site that felt human, welcoming, non-clinical, while also being easy to navigate for people who are most in need of help and care."
      solution="A warm, accessible Wix site focused on clarity and ease of navigation, extended with a custom interactive muses page that gives the therapists' writing its own visual space."
      description="Built a clean, welcoming site for a collective of therapists using Wix, so they can easily edit content and manage their site, focused on accessibility, warmth, and easy navigation for clients seeking care. For fun, I extended the project with an interactive muses page that collects and displays the therapists' musings: a quiet blend of tech and aesthetics where words get their own space to breathe."
      techStack={[
        { type: "tool", name: "Wix" },
        { type: "skill", name: "Web Design" },
        { type: "skill", name: "UX/UI" },
        { type: "skill", name: "Interactive Design" },
      ]}
      year="2024"
      skills="client site build, content design, interactive UI, typography, blending function with aesthetic intent"
      image="muses-etc.webp"
      githubLink=""
      diagram={`graph LR
  A[Collective needs accessible site] --> B[Design warm UX in Wix]
  B --> C[Build interactive muses page]
  C --> D[Test navigation ease of use]
  D --> E[Accessible site live]`}
    />
  )
}
