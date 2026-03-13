import ProjectCard from "../components/Card"

export default function ThePeoplesPrincess() {
  return (
    <ProjectCard
      title="The People's Princess"
      subtitle="Mutual aid bulletin concept for neighbors helping neighbors"
      link="https://the-peoples-princess.vercel.app/"
      problem="During the SoCal wildfires and post-Roe fallout, neighbors needed rapid ways to connect with legal, housing, and care resources — existing platforms were too slow or too broad."
      solution="A hyper-local mutual aid bulletin built in Next.js with a content submission funnel, moderation rules, and shareable postcard templates so organizers can amplify urgent requests in seconds."
      description="Fai, another MIT grad, and I coined The People's Princess as a playful brand for a serious tool: a hyper-local bulletin born in the wake of the SoCal wildfires and the overturn of Roe v. Wade, when neighbors needed rapid ways to connect with legal, housing, and care resources. The pilot is still a proof of concept, but I mapped content rules, designed a simple submission funnel, and prototyped post cards so organizers can amplify urgent requests in seconds. Coming soon: a version on lovable.com."
      techStack={[
        { type: "framework", name: "Next.js" },
        { type: "skill", name: "Feature development" },
        { type: "skill", name: "UI/UX" },
        { type: "hosting", name: "Vercel" },
      ]}
      year="2024"
      skills="coordinating disaster relief asks, connecting reproductive care support, mutual aid storytelling, lightweight CMS architecture, and mobile-first posting flows"
      image="peoples-princess.png"
      githubLink=""
      diagram={`graph LR
  A[Wildfires expose mutual aid gap] --> B[Define content rules + funnel]
  B --> C[Build bulletin board in Next.js]
  C --> D[Prototype postcards for sharing]
  D --> E[Civic tech proof-of-concept live]`}
    />
  )
}
