import type { Metadata } from "next"
import ProjectCard from "../components/Card"
import { buildMetadata } from "../lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "BC Group Welcome Site",
  description:
    "A WordPress site using the Uncode template with customized CSS and a Google Scripts-powered contact form, built for global clothing brand BC Group.",
  path: "/bc",
  image: "bc.webp",
})

export default function BC() {
  return (
    <ProjectCard
      title="BC Group Welcome Site"
      subtitle="Global clothing brand welcome presence"
      link="https://bccentralamerica.com/"
      problem="BC Group, a global clothing brand, needed a clean, brand-aligned web presence with a working contact form, built quickly via agency partnership."
      solution="A WordPress site using the Uncode template with customized CSS and a Google Scripts-powered contact form."
      description="In collaboration with Patternbreak and the BC Group, built a sleek and welcoming site for BC Group, a global leader in clothing, using WordPress and an Uncode template. Focused on a clean design and seamless user experience, including a custom contact form for easy customer engagement."
      techStack={[
        { type: "framework", name: "Wordpress" },
        { type: "skill", name: "Customized CSS" },
        { type: "tool", name: "Google Scripts" },
        { type: "tool", name: "Uncode Wordpress Template" },
      ]}
      year="2024"
      image="bc.webp"
      githubLink=""
      skills="wordpress development and customization, collaboration with a team, project management, client communication"
      diagram={`graph LR
  A[Global apparel firm needs site] --> B[Select Uncode WordPress template]
  B --> C[Customize CSS + contact form]
  C --> D[Client review + content handoff]
  D --> E[Live site for BC Group]`}
    />
  )
}
