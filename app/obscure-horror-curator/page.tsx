import ProjectCard from "../components/Card"

export default function ObscureHorrorCurator() {
  return (
    <ProjectCard
      title="The Obscure Horror Curator"
      subtitle="GPT that recommends niche horror films based on hyper-specific vibes"
      link="https://chatgpt.com/g/g-68e9a96954f88191b37d29425a037ad7-the-obscure-horror-curator"
      description="I’m building a GPT obsessed with VHS-era slashers, analog horror, and festival deep cuts. Users feed in a mood, a trigger list, or a favorite practical-effects scene and the assistant responds with rare titles, streaming links, and why that pick scratches the itch. The prompt includes a curated database I maintain weekly."
      techStack={[
        { type: "skill", name: "Prompt Design" },
        { type: "skill", name: "Knowledge Base Curation" },
        { type: "tool", name: "OpenAI GPTs" },
        { type: "hosting", name: "ChatGPT" },
      ]}
      year="2024"
      skills="genre research, vibe-based recommendation engines, guardrail design for sensitive content, and tooling to keep the horror canon fresh"
      image="horror-gpt.jpeg"
      githubLink=""
    />
  )
}
