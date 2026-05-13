import ProjectCard from "../components/Card"

export default function HorrorRecs() {
  return (
    <ProjectCard
      title="Obscure Horror Curator 2.0"
      subtitle="Vector search-powered horror movie recommendations using Pinecone"
      problem="Generic recommendation engines match on genres and ratings — they can't capture the specific dread, atmosphere, or texture that makes a horror film feel right for the moment."
      solution="A web app that converts user input into vector embeddings and queries a Pinecone index to surface horror films by semantic similarity — matching vibe, tone, and feel rather than surface-level tags."
      description="This started as a personal problem. I'm addicted to horror movies and being scared, but finding the right one is its own kind of nightmare. Sometimes I want something totally random. I always want the nichest option possible. And I've never trusted a single rating system enough to rely on it — so why not combine them all? Horror GPT 2.0 is built around how I actually search: by vibe, by mood, by a feeling I can't quite name. It uses Pinecone's vector database to perform semantic search across a horror film index — input gets embedded, and Pinecone surfaces the closest matches by meaning, not metadata. The result is recommendations that actually feel right, with a scoring system that pulls from multiple rating sources so no single platform's bias wins."
      techStack={[
        { type: "tool", name: "Pinecone" },
        { type: "skill", name: "Vector Search" },
        { type: "skill", name: "Embeddings" },
        { type: "skill", name: "Semantic Similarity" },
        { type: "hosting", name: "Vercel" },
      ]}
      year="2025"
      skills="vector database design, embedding pipelines, semantic search, and vibe-based recommendation UX"
      image="horror-recs.png"
      githubLink=""
      link="https://horror-recs.vercel.app/"
      diagram={`graph LR
  A[User describes horror vibe] --> B[Input converted to embeddings]
  B --> C[Pinecone vector search]
  C --> D[Semantic similarity matching]
  D --> E[Horror recommendations by feel]`}
    />
  )
}
