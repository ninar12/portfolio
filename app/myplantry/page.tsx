import ProjectCard from "../components/Card"

export default function MyPlantry() {
  return (
    <ProjectCard
      title="Plantry"
      subtitle="AI-powered pantry tracking and meal planning for home cooks"
      problem="Most people lose track of what is actually in their kitchen, which leads to wasted groceries, repeated store runs, and the usual &quot;what should I make?&quot; dead end at dinner time."
      solution="Plantry gives that problem a dedicated dashboard: track ingredients, keep pantry inventory current, sync grocery items into the kitchen, and generate recipes from what is already on hand."
      description="Plantry is positioned as a premium kitchen companion for people who want a more intentional cooking routine. The product centers on a dashboard experience that helps users manage pantry inventory, reduce food waste, and turn available ingredients into useful meal ideas with AI. What makes the product strong is that it focuses on a real household workflow instead of generic recipe browsing: you buy food, track what came home, see what is about to go bad, and get suggestions based on the ingredients you already have. The public product language also emphasizes grocery list sync and AI-filled expiry tracking, which gives the dashboard a practical reason to exist beyond being another recipe app."
      techStack={[
        { type: "framework", name: "Next.js" },
        { type: "library", name: "React" },
        { type: "skill", name: "Product Design" },
        { type: "skill", name: "Dashboard UX" },
        { type: "skill", name: "AI Recipe Generation" },
        { type: "skill", name: "Inventory Logic" },
      ]}
      year="2025"
      link="https://www.myplantry.app/dashboard"
      status="live"
      diagram={`graph LR
  A[User adds groceries or pantry items] --> B[Kitchen inventory stays current]
  B --> C[Dashboard tracks ingredients and freshness]
  C --> D[AI suggests recipes from what is available]
  D --> E[Less waste and easier meal planning]`}
    />
  )
}
