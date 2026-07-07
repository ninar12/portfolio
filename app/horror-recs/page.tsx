import type { Metadata } from "next"
import ProjectCard from "../components/Card"
import { buildMetadata } from "../lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Niche Horror Recs — Semantic Movie Recommendations",
  description:
    "A horror recommendation app using embeddings and Pinecone vector search to match movies by vibe, tone, and feel instead of relying on basic genre metadata.",
  path: "/horror-recs",
  image: "horror-recs.webp",
})

export default function HorrorRecs() {
  return (
    <ProjectCard
      title="Niche Horror Recs"
      subtitle="Vibe-based horror recommendations powered by semantic search"
      problem="I sometimes feel like I spend more time looking for different horror movies (it is my main genre), adding them to my letterboxd lists, and deciding what mood I am in than actually watching movies. Most recommendation tools are too generic and don't help me find the specific kind of horror movie I want to watch based on mood and atmosphere."
      solution="A recommendation app that uses embeddings and Pinecone vector search to match horror movies by vibe, tone, and feel instead of relying on basic metadata."
      description="Niche Horror Recs came from a very specific problem: sometimes I do not want a popular horror movie, I want the weirdest, most specific thing that fits a certain mood. Most recommendation tools are too generic for that. This app is built around the way horror fans actually search, which is usually by feeling more than category. A user describes the kind of movie they want, that input gets embedded, and Pinecone returns films based on semantic similarity rather than just surface-level tags. The result is a horror recommendation experience that feels much more personal, niche, and useful when you want something specific."
      techStack={[
        { type: "tool", name: "Pinecone" },
        { type: "skill", name: "Vector Search" },
        { type: "skill", name: "Embeddings" },
        { type: "skill", name: "Semantic Similarity" },
        { type: "hosting", name: "Vercel" },
      ]}
      year="2025"
      skills="vector database design, embedding pipelines, semantic search, and vibe-based recommendation UX"
      image="horror-recs.webp"
      githubLink=""
      link="https://horror-recs.vercel.app/"
      status="in progress"
      diagram={`graph LR
  A[User describes horror vibe] --> B[Input converted to embeddings]
  B --> C[Pinecone vector search]
  C --> D[Semantic similarity matching]
  D --> E[Horror recommendations by feel]`}>
      <div className="space-y-8">
        <div className="relative overflow-hidden rounded-3xl border border-pink-500/20 bg-neutral-50 dark:bg-neutral-950/90 p-6 sm:p-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(236,72,153,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.14),_transparent_35%)]" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.35em] text-pink-600 dark:text-pink-300/80">
              Case Study Snapshot
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {[
                {
                  label: "Search Ranking",
                  value: "70 / 30",
                  detail:
                    "Vector similarity blended with niche score to favor deeper cuts over safer mainstream titles.",
                },
                {
                  label: "Theme System",
                  value: "5 Modes",
                  detail:
                    "Amber, green, red, cyan, and white themes built around a CRT-style interface.",
                },
                {
                  label: "User Flow",
                  value: "Saved + Random",
                  detail:
                    "Search, save to named watchlists, then pull a random pick from mood or list.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                    {item.label}
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-pink-700 dark:text-pink-100">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-pink-500/15 bg-neutral-50 dark:bg-neutral-900/60 p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
              Why It Works
            </p>
            <div className="mt-5 space-y-5 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
              <p>
                The core product decision was to treat horror discovery as a
                semantic taste problem instead of a genre-filter problem. People
                are often searching for something emotionally specific, not just
                "horror."
              </p>
              <p>
                That shaped both retrieval and ranking. Natural-language search
                handles detailed prompts directly, while Gemini expands shorter
                mood phrases into fuller semantic queries before Pinecone
                retrieval. The ranking blend then biases the results toward
                cult, obscure, and less obvious titles.
              </p>
              <p>
                The interface reinforces that niche identity instead of hiding
                it. The CRT styling, obscurity slider, theme system, and random
                discovery tools all make the app feel like a purpose-built
                recommendation machine rather than a generic movie database.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-400/15 bg-neutral-50 dark:bg-neutral-950/80 p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300/80">
              Search System
            </p>
            <ul className="mt-5 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
              {[
                "Natural-language search for prompts like slow-burn atmospheric grief film.",
                "Pinecone integrated llama-text-embed-v2 model for query embeddings.",
                "Gemini expands short mood prompts into richer semantic search queries.",
                "Results ranked by 70% vector similarity and 30% niche score.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500 dark:bg-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/50 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
              Film Card Experience
            </p>
            <ul className="mt-5 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
              {[
                "Poster art pulled from TMDb.",
                "AI-generated one-sentence explanation for why each film matches the query.",
                "Niche tier badge such as Deep Cut, Cult Pick, or Hidden Gem.",
                "Expandable details with director, streaming providers, and external links.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-500 dark:bg-pink-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/50 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
              Retention + Personalization
            </p>
            <ul className="mt-5 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
              {[
                "Named watchlists with add, remove, and random-pick behavior.",
                "Random film discovery from a mood query or a saved list.",
                "Email and password auth with a seven-day JWT session.",
                "Logged-in behavior uses watch history as reranking context.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-500 dark:bg-fuchsia-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border border-pink-500/15 bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-pink-600 dark:text-pink-300/80">
                Interface Direction
              </p>
              <p className="mt-4 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                The UI leans into a terminal and CRT-inspired visual system with
                scanlines, strong color themes, and a responsive drawer-based
                mobile layout. That aesthetic choice is not just style. It helps
                the product feel specific, memorable, and aligned with the kind
                of niche exploration the recommendation engine is built for.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "5 color themes: Amber, Green, Red, Cyan, White",
                "Responsive sidebar that collapses into a mobile drawer",
                "Obscurity slider to control how niche the results should get",
                "Deliberate bias toward cult and underseen horror titles",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/5 p-4 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ProjectCard>
  )
}
