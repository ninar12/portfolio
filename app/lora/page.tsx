import ProjectCard from "../components/Card"

export default function Lora() {
  return (
    <ProjectCard
      title="BLACK HAIRSTYLE LORA"
      subtitle="Stable Diffusion Finetuned"
      description="Teamed up with Patternbreak to train SD-XL with replicate to produce more realistic black hairstyles"
      year="2024"
      techStack={[
        { type: "tool", name: "Replicate" },
        { type: "other", name: "CC Photos of black men hairstyles" },
      ]}
      skills="model generation, ML training on replicate, finetuning SDXL with Lora"
      link="https://replicate.com/ninar12/sdxlblackmalehairstyles"
      image="lora.png"
      githubLink={""}
    />
  )
}
