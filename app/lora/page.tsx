import ProjectCard from "../components/Card"

export default function Stable() {
  return (
    <ProjectCard
      title="BLACK HAIRSTYLE LORA"
      subtitle="Stable Diffusion Finetuned"
      description="Teamed up with Patternbreak to train SD-XL with replicate to produce more realistic black hairstyles"
      year="2024"
      techStack={["Replicate", "CC Photos of black men hairstyles"]}
      link="https://replicate.com/ninar12/sdxlblackmalehairstyles"
      image="lora.png"
      githubLink={""}
    />
  )
}
