import type { Metadata } from "next"
import ProjectCard from "../components/Card"
import { buildMetadata } from "../lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Arc Capital Partners Website Refresh",
  description:
    "A fully audited and modernized WordPress site for an investment firm and commercial real estate strategist — plugin conflicts resolved, legacy code cleaned, templates updated.",
  path: "/arc-capital-partners",
  image: "arccapitalpartners.webp",
})

export default function ArcCapitalPartners() {
  return (
    <ProjectCard
      title="Arc Capital Partners Website Refresh"
      subtitle="Investment firm and commercial real estate strategist"
      link="https://arccapitalpartners.com/"
      problem="Arc Capital Partners' WordPress site needed a refresh. It needed some color changes, responsiveness enhancements, updates to their portfolio, etc. within Wordpress."
      solution="A fully audited and modernized WordPress site on WP Engine. Plugin conflicts resolved, legacy code cleaned, templates updated."
      description="Arc Capital Partners asked me to update and refresh their website so it is responsive, well-designed, and brand-aligned. I audited the existing WordPress site, identified and resolved plugin conflicts, cleaned up legacy code, and modernized templates to create a more polished and user-friendly experience."
      techStack={[
        { type: "framework", name: "WordPress" },
        { type: "skill", name: "Custom Theme Cleanup" },
        { type: "tool", name: "Gravity Forms" },
        { type: "hosting", name: "WP Engine" },
      ]}
      year="2024"
      skills="debugging a legacy WordPress stack, modernizing templates"
      image="arccapitalpartners.webp"
      githubLink=""
      diagram={`graph LR
  A[Investment firm site is broken] --> B[Audit WordPress + plugin conflicts]
  B --> C[Resolve conflicts + modernize]
  C --> D[Optimize caching + security]
  D --> E[Polished responsive site live]`}
    />
  )
}
