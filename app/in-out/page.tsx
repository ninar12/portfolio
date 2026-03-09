import ProjectCard from "../components/Card"

export default function InOut() {
  return (
    <ProjectCard
      title="IN & OUT GENERATOR"
      subtitle="Make your own in & out list for 2025"
      link="https://in-and-out-generator.vercel.app/"
      problem="Exploring how a retro UI aesthetic (Windows 95 components) can make a simple web tool feel playful and shareable — proving that design taste is itself a skill."
      solution="A React app using the React-95 component library to render a Windows 95-style list builder, letting users create and share their own annual in/out lists with Y2K nostalgia."
      description="Before the year of 2023, I made a lot of 'in for 2023' and 'out for 2023' lists. The concept: that some fads will be left in 2022, and other forms of media, aesthetics, etc. will thrive next year. I guess it could be considered Gen Z New Years Resolutions. I also came across this amazing retro react-95 UI library, a collection of components that could be found in Windows 95. Because Y2K is never out, at least for me. Make your own in and out list for 2025 while we're still in 2025…"
      techStack={[
        { type: "framework", name: "React" },
        { type: "hosting", name: "Netlify" },
        { type: "library", name: "React-95 UI Components" },
      ]}
      skills="design, development, and deployment"
      year="2024"
      image="inout.png"
      githubLink="https://github.com/ninar12/in-and-out"
      diagram={`graph LR
  A["Gen Z makes\\nannual in-out lists"] --> B["Discover React-95\\nretro component library"]
  B --> C["Build list generator\\nwith Y2K aesthetic"]
  C --> D["Deploy to Netlify"]
  D --> E["Shareable retro\\n2025 in-out list tool"]`}
    />
  )
}
