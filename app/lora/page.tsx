import ProjectCard from "../components/Card"

export default function Lora() {
  return (
    <ProjectCard
      title="BLACK HAIRSTYLE LORA"
      subtitle="Stable Diffusion Finetuned"
      description="I used an open source trainer in replicate to train a SDXL Lora (Stable Diffusion is an image generation model), trained on black male hairstyles. As the images that Stable Diffusion was trained are racially skewed, there are not enough data sources about the names and cultural significance of all black male hairstyles. The biggest challenge was collecting the training data, because I wanted to follow the Creative Commons rules about using images on the internet for people’s privacy. I collected quite a few male black hairstyles, and labeled them with their names."
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
