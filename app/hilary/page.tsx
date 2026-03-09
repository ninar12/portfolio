import ProjectCard from "../components/Card"

export default function Hilary() {
  return (
    <ProjectCard
      title="Personal Website for Hilary MacGregor"
      subtitle="Hilary is a practicing therapist based in Los Angeles"
      link="https://www.hilarymacgregor.com/"
      problem="Hilary needed a personal brand and web presence that conveyed the warmth and narrative focus of her therapeutic approach — not just a generic therapist directory listing."
      solution="A personal brand identity developed in Figma and translated into a Wix site with custom CSS, centered on the narrative and compassion at the core of her practice."
      description="I worked with Hilary, who is now an AMFT and practicing therapist, who is focused on incorporating narrative and compassion into her therapeutic practice. I thoroughly enjoyed collaborating with her to develop her unique aesthetic and brand. I helped her with her branding and design."
      techStack={[
        { type: "hosting", name: "Wix" },
        { type: "skill", name: "Customized CSS" },
        { type: "tool", name: "Figma" },
      ]}
      year="2024"
      skills="web development, website design, user experience, and content creation"
      impact="Personal brand site live at hilarymacgregor.com — brand identity developed in Figma and translated to Wix."
      image="hilary.png"
      githubLink=""
      diagram={`graph LR
  A["Therapist needs\\nbrand + web presence"] --> B["Develop brand identity\\nin Figma"]
  B --> C["Build Wix site\\nwith custom CSS"]
  C --> D["Iterate on aesthetic\\n+ tone with client"]
  D --> E["Personal therapist site\\nlive with brand coherence"]`}
    />
  )
}
