import ProjectCard from "../components/Card"

export default function Stable() {
  return (
    <ProjectCard
      title="Unreleased Lana Del Rey Pomodoro Timer"
      subtitle="Plays in intervals of productivity timer"
      link="https://lana-pomodoro-timer.netlify.app/"
      description="Built a generator for making lists for the new year!"
      techStack={["React", "Netlify", "Illustration By Me"]}
      year="2024"
      image="pomodoro.png"
      githubLink={"https://github.com/ninar12/aestheticpomodoro"}
    />
  )
}
