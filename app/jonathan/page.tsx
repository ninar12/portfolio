import ProjectCard from "../components/Card"

export default function Jonathan() {
  return (
    <ProjectCard
      title="Personal Website for Jonathan Fernandez"
      subtitle="Writer, producer, and director"
      link="https://www.jonathan-fernandez.com/"
      problem="Jonathan needed a personal brand site to display his creative work, teaching experience, and contact info in one cohesive place as personal branding becomes increasingly essential."
      solution="A Squarespace site with custom CSS built around Jonathan's work reel, teaching history, and contact info — designed to serve as a cohesive professional brand presence."
      description="I worked with Jonathan Fernandez, a writer, producer, and director, to create his website and personal brand. In an age where personal branding and a personal website is getting more and more important, I collaborated with him to design and display his work, teaching experience, and ways to contact him."
      techStack={[
        { type: "hosting", name: "Squarespace" },
        { type: "skill", name: "Customized CSS" },
      ]}
      year="2024"
      skills="squarespace, website design, user experience, and content creation"
      impact="Personal brand site live at jonathan-fernandez.com displaying his full body of creative work."
      image="jonathan.png"
      githubLink=""
      diagram={`graph LR
  A["Writer-director needs\\npersonal brand site"] --> B["Scope content\\n+ navigation structure"]
  B --> C["Build on Squarespace\\nwith custom CSS"]
  C --> D["Display work reel\\nteaching + contact"]
  D --> E["Personal brand site\\nlive for Jonathan"]`}
    />
  )
}
