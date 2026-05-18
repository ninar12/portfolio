import ProjectCard from "../components/Card"

export default function MyPlantry() {
  return (
    <ProjectCard
      title="Plantry"
      subtitle="An AI pantry and meal-planning product built around real kitchen workflow"
      problem="Most people do not have a reliable system for tracking what is actually in their kitchen. That leads to wasted groceries, duplicate purchases, and the daily friction of figuring out what to make with what is already at home."
      solution="Plantry turns pantry management into a usable product system: track ingredients, sync groceries into inventory, monitor freshness, and generate recipe ideas from what is already on hand."
      description="Plantry is a consumer product built around a very practical problem: people buy groceries with good intentions, then lose visibility into what they have, what needs to be used soon, and what meals are actually possible without another store run. Most tools in this space focus on recipes first. Plantry focuses on inventory, decision-making, and reducing waste. The product centers on a pantry dashboard that gives users a clearer view of their kitchen as an active system rather than a static list. Grocery items can be brought into inventory, ingredients can be tracked over time, and AI can generate recipes based on what is currently available. That makes the product useful at the exact moment users need it: when they are trying to decide what to cook without starting from scratch. What makes Plantry strong as a product concept is that it connects convenience with behavior change. It is not just about recipe generation. It is about reducing food waste, lowering decision fatigue, and making the kitchen feel more organized and usable day to day."
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
      status="in progress"
      diagram={`graph LR
  A[User adds groceries or pantry items] --> B[Kitchen inventory stays current]
  B --> C[Dashboard tracks ingredients and freshness]
  C --> D[AI suggests recipes from what is available]
  D --> E[Less waste and easier meal planning]`}
    >
      <div className="space-y-8">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-neutral-950/90 p-6 sm:p-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.16),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.12),_transparent_35%)]" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-200/80">
              Case Study Snapshot
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {[
                {
                  label: "Core Use Case",
                  value: "Pantry + Meals",
                  detail: "Built around inventory visibility first, then recipe generation from what is already available.",
                },
                {
                  label: "User Benefit",
                  value: "Less Waste",
                  detail: "Helps reduce duplicate buying, forgotten ingredients, and day-to-day decision fatigue.",
                },
                {
                  label: "Product Angle",
                  value: "Household System",
                  detail: "Turns the kitchen into an organized workflow instead of a scattered set of lists.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-widest text-neutral-400">
                    {item.label}
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-emerald-100">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-emerald-400/15 bg-neutral-900/60 p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              Why It Works
            </p>
            <div className="mt-5 space-y-5 text-sm leading-relaxed text-neutral-300">
              <p>
                Most products in this category start with recipes, but the real
                breakdown happens earlier. People lose track of ingredients,
                forget what needs to be used, and end up making decisions
                without a clear view of their kitchen.
              </p>
              <p>
                Plantry addresses that by treating pantry visibility as the
                foundation. Once the inventory is accurate and current, AI can
                actually become useful because it is generating ideas from what
                the user really has, not from a generic list of preferences.
              </p>
              <p>
                That makes the product feel practical instead of novelty-based.
                It supports better habits, lowers friction, and gives people a
                clearer system for everyday cooking rather than just another
                recipe destination.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-pink-400/15 bg-neutral-950/80 p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-pink-200/80">
              Product System
            </p>
            <ul className="mt-5 space-y-3 text-sm text-neutral-300">
              {[
                "Pantry inventory tracking as the core dashboard behavior.",
                "Grocery sync that turns shopping activity into kitchen state.",
                "Freshness and expiry awareness to reduce waste.",
                "AI recipe generation grounded in available ingredients.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-neutral-700 bg-neutral-900/50 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              User Experience
            </p>
            <ul className="mt-5 space-y-3 text-sm text-neutral-300">
              {[
                "Dashboard-centered design instead of a recipe-first experience.",
                "Built for daily decision-making at the exact moment users need help.",
                "Reduces duplicate purchases and forgotten ingredients.",
                "Makes the kitchen feel more manageable and organized over time.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-neutral-700 bg-neutral-900/50 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              Product Decisions
            </p>
            <ul className="mt-5 space-y-3 text-sm text-neutral-300">
              {[
                "Starts from household workflow, not just content discovery.",
                "Uses AI where it adds utility, not as a gimmick.",
                "Connects convenience with long-term behavior change.",
                "Frames food waste and planning friction as solvable system problems.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border border-emerald-400/15 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-200/80">
                Interface Direction
              </p>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                The interface is positioned more like a premium consumer product
                than a simple utility app. The goal is to make kitchen
                management feel calm, useful, and repeatable so the product can
                fit naturally into real household routines.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Clean dashboard UX built around repeat use",
                "Household-oriented workflow rather than one-off novelty",
                "Inventory visibility before recipe suggestion",
                "Practical daily utility instead of gimmicky AI",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-relaxed text-neutral-300">
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
