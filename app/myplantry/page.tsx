import type { Metadata } from "next"
import ProjectCard from "../components/Card"
import { buildMetadata } from "../lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Plantry — AI Pantry & Meal Planning",
  description:
    "Plantry turns pantry management into a usable product system: track ingredients, sync groceries into inventory, monitor freshness, and generate recipe ideas from what's on hand.",
  path: "/myplantry",
  image: "myplantry.webp",
})

export default function MyPlantry() {
  return (
    <ProjectCard
      title="Plantry"
      subtitle="An AI pantry and meal-planning product built around real kitchen workflow"
      problem="Most people do not have a reliable system for tracking what is actually in their kitchen. That leads to wasted groceries, duplicate purchases, and the daily friction of figuring out what to make with what is already at home."
      solution="Plantry turns pantry management into a usable product system: track ingredients, sync groceries into inventory, monitor freshness, and generate recipe ideas from what is already on hand."
      description="Plantry is a Next.js App Router app backed by Supabase Postgres. Inventory gets populated four ways — manual entry, a receipt photo (Gemini vision parses line items and decodes abbreviations like 'CHKN BRST'), a fridge or pantry photo (Gemini identifies what's visible), a handwritten list photo (transcribed), or a recipe imported from a URL or pasted text — there's no barcode scanning or grocery-API integration. Freshness runs on a self-reinforcing three-tier lookup: a pg_trgm fuzzy match against a seeded 433-row USDA FoodKeeper table first, a Gemini estimate when an item isn't found, then that estimate gets cached back into the table so it's a plain rule-based lookup for every user after that. Recipe generation is a single Gemini call, not an agent loop: the prompt bundles the full current pantry, dietary restrictions and cuisine preferences, and the titles of the user's last 10 saved recipes (for variety), plus hardcoded guardrails against inventing dishes, and forces strict JSON output."
      techStack={[
        { type: "framework", name: "Next.js" },
        { type: "library", name: "React" },
        { type: "other", name: "Supabase Postgres" },
        { type: "other", name: "pgvector" },
        { type: "other", name: "pg_trgm" },
        { type: "API", name: "Google Gemini" },
        { type: "tool", name: "NextAuth" },
        { type: "hosting", name: "Vercel" },
      ]}
      year="2025"
      link="https://www.myplantry.app/dashboard"
      status="in progress"
      diagram={`graph TD
  A[Manual entry, receipt photo, fridge photo, handwritten list, or recipe URL] --> B[Gemini vision and text parsing]
  B --> C[Supabase Postgres inventory with RLS]
  C --> D{Item found in FoodKeeper table}
  D -->|Yes| E[pg_trgm fuzzy match returns shelf life]
  D -->|No| F[Gemini estimates shelf life]
  F --> G[Result cached into FoodKeeper table]
  G --> E
  E --> H[Freshness ranked pantry]
  H --> I[Single Gemini call combining pantry, preferences, and recent recipes]
  I --> J[Strict JSON recipe returned to dashboard]`}
    >
      <div className="space-y-8">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-neutral-50 dark:bg-neutral-950/90 p-6 sm:p-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.16),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.12),_transparent_35%)]" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-700 dark:text-emerald-200/80">
              Case Study Snapshot
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {[
                {
                  label: "Ingestion",
                  value: "4 Capture Paths",
                  detail: "Manual entry, receipt photo, fridge/pantry photo, and handwritten list, all parsed by Gemini vision, plus recipe import from URL or pasted text.",
                },
                {
                  label: "Freshness Engine",
                  value: "3-Tier Lookup",
                  detail: "pg_trgm fuzzy match against a seeded 433-row USDA FoodKeeper table first. Unmatched items get a Gemini estimate that's cached back for next time.",
                },
                {
                  label: "Recipe Generation",
                  value: "Single Gemini Call",
                  detail: "One guardrailed prompt bundles pantry, preferences, and recent recipe titles, then forces strict JSON output. No agent loop.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                    {item.label}
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-emerald-700 dark:text-emerald-100">
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

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-emerald-400/15 bg-neutral-50 dark:bg-neutral-900/60 p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
              Data &amp; API Layer
            </p>
            <ul className="mt-5 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
              {[
                "Supabase Postgres with pg_trgm and pgvector enabled.",
                "Real API layer: Next.js App Router route handlers under src/app/api/*, not client-side logic.",
                "Row-level security enabled on tables; server-side session checks via getServerSession.",
                "Service-role key used inside API routes for privileged writes that need to bypass RLS.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500 dark:bg-emerald-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-pink-400/15 bg-neutral-50 dark:bg-neutral-950/80 p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-pink-700 dark:text-pink-200/80">
              Ingestion Pipeline
            </p>
            <ul className="mt-5 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
              {[
                "Receipt photo scan: Gemini parses line items and decodes abbreviations like \"CHKN BRST\".",
                "Fridge/pantry photo scan: Gemini identifies items visible in the shot.",
                "Handwritten list photo: transcribed directly into inventory.",
                "Recipe import from a pasted URL or raw text, plus plain manual entry.",
                "No barcode scanning or grocery-delivery API integration.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-500 dark:bg-pink-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/50 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
              Freshness System
            </p>
            <ol className="mt-5 space-y-3 text-sm text-neutral-700 dark:text-neutral-300 list-decimal list-inside">
              <li>pg_trgm fuzzy match against a seeded 433-row USDA FoodKeeper table.</li>
              <li>If no match, a Gemini call estimates shelf life for that item.</li>
              <li>The Gemini result is cached back into the FoodKeeper table, so it's a plain rule-based lookup for every user after that. Self-reinforcing, not a live AI call on every check.</li>
            </ol>
          </div>

          <div className="rounded-3xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/50 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
              Recipe Generation Prompt
            </p>
            <ul className="mt-5 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
              {[
                "Full current pantry: name, category, expiration date.",
                "Dietary restrictions and cuisine preferences from user_preferences.",
                "Titles of the user's last 10 saved recipes, for variety, not repeats.",
                "Optional free-text request, plus hardcoded guardrails against invented combos (e.g. vinegar pasta) that force a recognizable dish and prioritize soonest-expiring ingredients.",
                "Single Gemini call (gemini-3.1-pro-preview via @google/genai), not agentic. Output is forced strict JSON.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500 dark:bg-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border border-emerald-400/15 bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-200/80">
            Auth &amp; Hosting
          </p>
          <p className="mt-4 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            NextAuth handles both Google OAuth and email/password credentials
            through the same session, checked server-side in every API route.
            The app runs on the Next.js App Router, deployed on Vercel.
          </p>
        </div>
      </div>
    </ProjectCard>
  )
}
