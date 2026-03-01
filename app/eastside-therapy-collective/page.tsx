import ProjectCard from "../components/Card"

export default function EastsideTherapyCollective() {
  return (
    <ProjectCard
      title="Eastside Therapy Collective"
      subtitle="Therapist website + interactive muses page"
      link=""
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
    />
  )
}
