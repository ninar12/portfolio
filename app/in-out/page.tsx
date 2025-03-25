import ProjectCard from "../components/Card"

export default function InOut() {
  return (
    <ProjectCard
      title="IN & OUT GENERATOR"
      subtitle=""
      link="https://in-and-out-generator.vercel.app/"
      description="Built a generator for making in and out lists for the new year! The user can customize their profile emoji, in list items, and out list items for the new year."
      techStack={[
        { type: "framework", name: "React" },
        { type: "hosting", name: "Netlify" },
        { type: "library", name: "React-95 UI Components" },
      ]}
      skills="design, development, and deployment"
      year="2024"
      image="inout.png"
      githubLink={"https://github.com/ninar12/in-and-out"}
    />
  )
}
