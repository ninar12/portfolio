import ProjectCard from "../components/Card"

export default function ObscureHorrorCurator() {
  return (
    <ProjectCard
      title="The Obscure Horror Curator"
      subtitle="GPT that recommends niche horror films based on hyper-specific vibes"
      problem="Horror fans face choice paralysis across thousands of titles — existing recommendation engines rely on genre tags, not the nuanced vibes that actually drive film selection."
      solution="A custom GPT trained on a curated knowledge base of obscure horror films, with a vibe-based prompt system and guardrails for sensitive content — deployable directly in ChatGPT."
      description="I am not immune to decision paralysis + overwhelm from so many options when doing one of my favorite things, watching horror movies. I built The Obscure Horror Curator to satisfy my love of niche horror movies and my curiosity about how far I could push the capabilities of GPTs. The Curator is designed to recommend movies based on hyper-specific vibes, like 'a 70s Italian horror movie with a synth score and a twist ending.' I trained it on a custom knowledge base of obscure horror films, and designed prompts to help it understand and match the vibe-based asks."
      techStack={[
        { type: "skill", name: "Prompt Design" },
        { type: "skill", name: "Knowledge Base Curation" },
        { type: "tool", name: "OpenAI GPTs" },
        { type: "hosting", name: "ChatGPT" },
      ]}
      year="2024"
      skills="genre research, vibe-based recommendation engines, guardrail design for sensitive content, and tooling to keep the horror canon fresh"
      impact="Publicly available custom GPT on the ChatGPT store — demonstrates knowledge base curation and prompt architecture at scale."
      image="horror-gpt.jpeg"
      githubLink=""
      link="https://chatgpt.com/g/g-68e9a96954f88191b37d29425a037ad7-the-obscure-horror-curator"
      diagram={`graph LR
  A["Horror fans face\\nchoice paralysis"] --> B["Curate knowledge base\\nof obscure horror films"]
  B --> C["Design vibe-based\\nprompt system in GPT"]
  C --> D["Guardrails handle\\nsensitive content edges"]
  D --> E["Custom GPT recommends\\nfilms by hyper-specific vibe"]`}
    />
  )
}
