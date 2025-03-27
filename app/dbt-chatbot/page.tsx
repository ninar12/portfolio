import ProjectCard from "../components/Card"

export default function Dbt() {
  return (
    <ProjectCard
      title="DBT Chatbot"
      subtitle="Help to practice your DBT skills"
      link="https://www.coze.com/store/agent/7359282529574060037?bot_id=true"
      description="I came across a cozebot hackathon where you can generate your own chatbot, that can be trained with information gathered from any unstructured data, e.g. PDFs, csvs, etc.. I thought about how in DBT, how helpful the tools and skills I learned were, but how they were hard to remember which to apply in daily life. So, I found a free PDF of a DBT workbook and added that as an information source, along with other related information, like a list of helpful affirmations. Unfortunately Cozebot is now paywalled, but I had fun creating the chatbot."
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
