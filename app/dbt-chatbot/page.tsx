import ProjectCard from "../components/Card"

export default function Dbt() {
  return (
    <ProjectCard
      title="DBT Chatbot"
      subtitle="Help to practice your DBT skills"
      link="https://www.coze.com/store/agent/7359282529574060037?bot_id=true"
      description="I created a chatbot to help users brainstorm and apply Dialectical Behavior Therapy (DBT) skills, focusing on mindfulness, emotional regulation, and interpersonal effectiveness. While not a substitute for professional care, it’s designed to make DBT strategies more accessible for everyday challenges."
      techStack={[
        { type: "tool", name: "Cozebot.com" },
        { type: "tool", name: "DBT Skills Book PDF" },
        { type: "skill", name: "Chatbot" },
      ]}
      year="2024"
      image="cozebot.png"
      skills="cozebot, hackathon, DBT, mindfulness & tech, chatbot development"
      githubLink={""}
    />
  )
}
