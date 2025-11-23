import ProjectCard from "../components/Card"

export default function ThePeoplesPrincess() {
  return (
    <ProjectCard
      title="The People's Princess"
      subtitle="Mutual aid bulletin concept for neighbors helping neighbors"
      link="https://the-peoples-princess.vercel.app/"
      description="Me and Fai, another MIT grad, coined The People's Princess as a playful brand for a serious tool: a hyper-local bulletin born in the wake of the SoCal wildfires and the overturn of Roe v. Wade, when neighbors needed rapid ways to connect with legal, housing, and care resources. The pilot is still a proof of concept, but I mapped content rules, designed a simple submission funnel, and prototyped post cards so organizers can amplify urgent requests in seconds. Coming soon: a version on lovable.com."
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
    />
  )
}
