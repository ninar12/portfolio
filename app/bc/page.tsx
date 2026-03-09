import ProjectCard from "../components/Card"

export default function BC() {
  return (
    <ProjectCard
      title="BC Group Welcome Site"
      subtitle="Global clothing brand welcome presence"
      link="https://bccentralamerica.com/"
      problem="BC Group, a global clothing brand, needed a clean, brand-aligned web presence with a working contact form — built quickly via agency partnership."
      solution="A WordPress site using the Uncode template with customized CSS and a Google Scripts-powered contact form, delivered in collaboration with Patternbreak."
      description="In collaboration with Patternbreak and the BC Group, built a sleek and welcoming site for BC Group, a global leader in clothing, using WordPress and an Uncode template. Focused on a clean design and seamless user experience, including a custom contact form for easy customer engagement."
      techStack={[
        { type: "framework", name: "Wordpress" },
        { type: "skill", name: "Customized CSS" },
        { type: "tool", name: "Google Scripts" },
        { type: "tool", name: "Uncode Wordpress Template" },
      ]}
      year="2024"
      image="bc.png"
      githubLink=""
      skills="wordpress development and customization, collaboration with a team, project management, client communication"
      impact="Delivered live site for a global brand via agency collaboration with Patternbreak."
      diagram={`graph LR
  A["Global apparel firm\\nneeds welcome presence"] --> B["Select Uncode\\nWordPress template"]
  B --> C["Customize CSS\\n+ contact form via Google Scripts"]
  C --> D["Client review\\n+ content handoff"]
  D --> E["Live site for\\nBC Group global brand"]`}
    />
  )
}
