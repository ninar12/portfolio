import ProjectCard from "../components/Card"

export default function Stable() {
  return (
    <ProjectCard
      title="STABLE DIFFUSION GENERATOR"
      subtitle="The Image Prompt Recipe"
      description="Teamed up with Patternbreak to build a powerful tool that helps users create stunning art with Stable Diffusion."
      year="2024"
      techStack={["React", "Next.js", "Vercel", "Material UI", "TailwindCSS"]}
      link="https://www.patternbreak.ai/"
      image="stablediffusion.png"
      githubLink={"https://github.com/patternbreak/patternbreak-ai"}
    />
  )
}
