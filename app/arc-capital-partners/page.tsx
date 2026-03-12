import ProjectCard from "../components/Card"

export default function ArcCapitalPartners() {
  return (
    <ProjectCard
      title="Arc Capital Partners Website Refresh"
      subtitle="Investment firm and commercial real estate strategist"
      link="https://arccapitalpartners.com/"
      problem="Arc Capital Partners' WordPress site needed a refresh — it needed some color changes, responsiveness enhancements, updates to their portfolio, etc."
      solution="A fully audited and modernized WordPress site on WP Engine — plugin conflicts resolved, legacy code cleaned, templates updated."
      description="Arc Capital Partners asked me to update and refresh their website so it is responsive, well-designed, and brand-aligned. I audited the existing WordPress site, identified and resolved plugin conflicts, cleaned up legacy code, and modernized templates to create a more polished and user-friendly experience."
      techStack={[
        { type: "framework", name: "WordPress" },
        { type: "skill", name: "Custom Theme Cleanup" },
        { type: "tool", name: "Gravity Forms" },
        { type: "hosting", name: "WP Engine" },
      ]}
      year="2024"
      skills="debugging a legacy WordPress stack, modernizing templates"
      impact="Fully responsive, brand-aligned site live on WP Engine with resolved plugin conflicts and coaching on content workflows."
      image="arccapitalpartners.png"
      githubLink=""
      diagram={`graph LR
  A["Investment firm site\\nis unresponsive + broken"] --> B["Audit WordPress stack\\nmap plugin conflicts"]
  B --> C["Resolve conflicts\\nmodernize templates"]
  C --> D["Optimize caching\\ntighten security rules"]
  D --> E["Polished responsive\\nsite on WP Engine"]`}
    />
  )
}
