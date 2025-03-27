import ProjectCard from "../components/Card"

export default function Stable() {
  return (
    <ProjectCard
      title="Personal Website for Hilary MacGregor"
      subtitle="Hilary is a practicing therapist based in Los Angeles"
      link="https://www.hilarymacgregor.com/"
      description={
        "I worked with Hilary, who is now an AMFT and practicing therapist, who is focused on incorporating narrative and compassion into her therapeutic practice. I thoroughly enjoyed collaborating with her to develop her unique aesthetic and brand. I helped her with her branding and design."
      }
      techStack={[
        { type: "hosting", name: "Wix" },
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
