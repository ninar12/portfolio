import ProjectCard from "../components/Card"

export default function Jonathan() {
  return (
    <ProjectCard
      title="PERSONAL WEBSITE FOR JONATHAN"
      subtitle=""
      link="https://www.jonathan-fernandez.com/"
      description="Built and designed a personal website and personal website for Jonathan Fernandez, a writer, producer, and director."
      techStack={[
        { type: "hosting", name: "Squarespace" },
        { type: "skill", name: "Customized CSS" },
      ]}
      year="2024"
      skills="squarespace, website design, user experience, and content creation"
      image="jonathan.png"
      githubLink={""}
    />
  )
}
