import ProjectCard from "../components/Card"

export default function ArcCapitalPartners() {
  return (
    <ProjectCard
      title="Arc Capital Partners Website Refresh"
      subtitle="Investment firm and commercial real estate strategist"
      link="https://arccapitalpartners.com/"
      description="Arc Capital Partners asked me to step in when a series of dated plugins and a bloated theme left their WordPress marketing site broken and unstable. I audited the entire stack, rebuilt the home page and investor resources with consistent block patterns, and hardened the site so the team could easily publish updates again."
      techStack={[
        { type: "framework", name: "WordPress" },
        { type: "skill", name: "Custom Theme Cleanup" },
        { type: "skill", name: "Plugin Conflict Resolution" },
        { type: "tool", name: "Gravity Forms" },
        { type: "hosting", name: "WP Engine" },
      ]}
      year="2024"
      skills="debugging a legacy WordPress stack, modernizing templates, tightening security rules, optimizing caching, and coaching the Arc team on content workflows"
      image="arccapitalpartners.png"
      githubLink=""
    />
  )
}
