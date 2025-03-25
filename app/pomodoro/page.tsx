import ProjectCard from "../components/Card"

export default function Pomodoro() {
  return (
    <ProjectCard
      title="Unreleased Lana Del Rey Pomodoro Timer"
      subtitle="Plays in intervals of productivity timer"
      link="https://lana-pomodoro-timer.netlify.app/"
      description="Built a generator for making lists for the new year!"
      techStack={[
        { type: "library", name: "React" },
        { type: "hosting", name: "Netlify" },
        { type: "other", name: "Illustration By Me" },
      ]}
      year="2024"
      image="pomodoro.png"
      skills="development, design, and deployment"
      githubLink={"https://github.com/ninar12/aestheticpomodoro"}
    />
  )
}
