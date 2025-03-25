import ProjectCard from "../components/Card"

export default function Stable() {
  return (
    <ProjectCard
      title="Stable Diffusion Generator"
      subtitle="The Image Prompt Recipe"
      description="Teamed up with Patternbreak to build a powerful tool that helps users create stunning art with Stable Diffusion."
      year="2024"
      techStack={[
        { type: "library", name: "React" },
        { type: "framework", name: "Next.js" },
        { type: "hosting", name: "Vercel" },
        { type: "library", name: "Material UI" },
        { type: "API", name: "fal.ai" },
        { type: "skill", name: "fullstack" },
      ]}
      link="https://www.patternbreak.ai/"
      image="stablediffusion.png"
      skills="development, collaboration, R&D, idea generation, design, and deployment"
      githubLink={"https://github.com/patternbreak/patternbreak-ai"}
    />
  )
}
