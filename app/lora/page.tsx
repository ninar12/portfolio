import ProjectCard from "../components/Card"

export default function Lora() {
  return (
    <ProjectCard
      title="BLACK HAIRSTYLE LORA"
      subtitle="Stable Diffusion Finetuned"
      problem="Stable Diffusion's training data is racially skewed — the model lacks accurate representation of Black male hairstyles and their cultural context."
      solution="A fine-tuned SDXL LoRA model (407 runs) trained on CC-licensed images of Black male hairstyles, labeled with culturally accurate names, and published publicly on Replicate."
      description="I used an open source trainer in replicate to train a SDXL Lora (Stable Diffusion is an image generation model), trained on black male hairstyles. As the images that Stable Diffusion was trained are racially skewed, there are not enough data sources about the names and cultural significance of all black male hairstyles. The biggest challenge was collecting the training data, because I wanted to follow the Creative Commons rules about using images on the internet for people's privacy. I collected quite a few male black hairstyles, and labeled them with their names."
      year="2024"
      techStack={[
        { type: "tool", name: "Replicate" },
        { type: "other", name: "CC Photos of black men hairstyles" },
      ]}
      skills="model generation, ML training on replicate, Stable Diffusion, Lora, data collection and labeling, and navigating the ethics of training data"
      impact="Fine-tuned model published publicly on Replicate, improving representation of Black hairstyles in AI-generated imagery."
      link="https://replicate.com/ninar12/sdxlblackmalehairstyles"
      image="lora.png"
      githubLink=""
      diagram={`graph LR
  A["SDXL underrepresents\\nBlack hairstyle data"] --> B["Curate CC-licensed\\nimages + cultural labels"]
  B --> C["SDXL LoRA training\\non Replicate"]
  C --> D["Fine-tuned model\\npublished on Replicate"]
  D --> E["Accurate, culturally\\naware image generation"]`}
    />
  )
}
