import ProjectCard from "../components/Card"

export default function Jonathan() {
  return (
    <ProjectCard
      title="PERSONAL WEBSITE FOR JONATHAN"
      subtitle=""
      link="https://www.jonathan-fernandez.com/"
      description="I worked with Jonathan Fernandez, a writer, producer, and director, to create his website and personal brand. In an age where personal branding and a personal website is getting more and more important, I collaborated with him to design and display his work, teaching experience, and ways to contact him."
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
