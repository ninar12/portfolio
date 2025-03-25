import ProjectCard from "../components/Card"

export default function Stable() {
  return (
    <ProjectCard
      title="Personal Website for Hilary MacGregor"
      subtitle="Hilary is a practicing therapist based in Los Angeles"
      link="https://www.hilarymacgregor.com/"
      description="Built and designed a personal website and personal website for Hilary MacGregor, AMFT."
      techStack={[
        { type: "hosting", name: "Webflow" },
        { type: "skill", name: "Customized CSS" },
        { type: "tool", name: "Figma" },
      ]}
      year="2024"
      skills="web development, website design, user experience, and content creation"
      image="hilary.png"
      githubLink={""}
    />
  )
}
