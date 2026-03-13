import ProjectCard from "../components/Card"

export default function EastsideTherapyCollective() {
  return (
    <ProjectCard
      title="Eastside Therapy Collective"
      subtitle="Therapist website + interactive muses page"
      link=""
      problem="A therapy collective needed an accessible, warm client-facing site that felt human — not clinical — while being easy to navigate for people already in distress."
      solution="A warm, accessible Wix site focused on clarity and ease of navigation, extended with a custom interactive muses page that gives the therapists' writing its own visual space."
      description="Built a clean, welcoming site for a collective of therapists using Wix — focused on accessibility, warmth, and easy navigation for clients seeking care. For fun, I extended the project with an interactive muses page that collects and displays the therapists' musings: a quiet blend of tech and aesthetics where words get their own space to breathe."
      techStack={[
        { type: "tool", name: "Wix" },
        { type: "skill", name: "Web Design" },
        { type: "skill", name: "UX/UI" },
        { type: "skill", name: "Interactive Design" },
      ]}
      year="2024"
      skills="client site build, content design, interactive UI, typography, blending function with aesthetic intent"
      image="muses-etc.png"
      githubLink=""
      diagram={`graph LR
  A[Collective needs accessible site] --> B[Design warm UX in Wix]
  B --> C[Build interactive muses page]
  C --> D[Test navigation ease of use]
  D --> E[Accessible site live]`}
    />
  )
}
