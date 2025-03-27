import ProjectCard from "../components/Card"

export default function Pomodoro() {
  return (
    <ProjectCard
      title="Unreleased Lana Del Rey Pomodoro Timer"
      subtitle="Plays in intervals of productivity timer"
      link="https://lana-pomodoro-timer.netlify.app/"
      description="I love the idea of combining art with virtual spaces and bare-bones, ‘retro’ internet tools. I wanted to reflect the concept of a virtual, calming, and aesthetic study space, as well as the power of the productivity-boosting pomodoro timer. Therefore, for fun I created this pomodoro timer to study with, and every time the timer goes off it plays Lana Del Rey."
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
