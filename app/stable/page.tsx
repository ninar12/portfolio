import ProjectCard from "../components/Card"

export default function Stable() {
  return (
    <ProjectCard
      title="Stable Diffusion Generator"
      subtitle="The Image Prompt Recipe"
      problem="Creative agencies using AI image generation lacked a systematic, repeatable approach to prompt engineering — results were inconsistent and hard to iterate on."
      solution="A Next.js prompt recipe app with a structured formula for image generation and an auto-generator powered by a HuggingFace model fine-tuned on Midjourney prompts, deployed for Patternbreak."
      description="When working with the creative agency, Patternbreak, we wanted to figure out a way to formulate prompts for image generation in the best way. Since AI generated art and design is the future, I did some research on the best way to generate prompts. I realized there was a theme in the technique in trying to generate what you are envisioning. I also included a feature that generates prompts automatically with a Huggingface model finetuned on stable diffusion prompts scraped from Midjourney."
      year="2024"
      techStack={[
        { type: "library", name: "React" },
        { type: "framework", name: "Next.js" },
        { type: "hosting", name: "Vercel" },
        { type: "library", name: "Material UI" },
        { type: "API", name: "fal.ai" },
        { type: "tool", name: "Huggingface" },
        { type: "skill", name: "design & building" },
        { type: "skill", name: "fullstack" },
      ]}
      link="https://www.patternbreak.ai/"
      image="stablediffusion.png"
      skills="development, collaboration, R&D, idea generation, design, and deployment"
      githubLink=""
      diagram={`graph LR
  A[Agency needs consistent prompts] --> B[Research prompt engineering]
  B --> C[Build recipe UI in Next.js]
  C --> D[HuggingFace auto-generates drafts]
  D --> E[Deployed for Patternbreak]`}
    />
  )
}
