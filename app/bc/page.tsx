import ProjectCard from "../components/Card"

export default function BC() {
  return (
    <ProjectCard
      title="BC Group Welcome Site"
      subtitle=""
      link="https://bccentralamerica.com/"
      description="Built a sleek and welcoming site for BC Group, a global leader in clothing, using WordPress and an Uncode template. Focused on a clean design and seamless user experience, including a custom contact form for easy customer engagement."
      techStack={[
        { type: "framework", name: "Wordpress" },
        { type: "skill", name: "Customized CSS" },
        { type: "tool", name: "Google Scripts" },
      ]}
      year="2024"
      image="bc.png"
      githubLink={""}
      skills="wordpress development and customization, collaboration with a team, project management, client communication"
    />
  )
}
