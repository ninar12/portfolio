import type { Metadata } from "next"
import ResumeContent from "../components/ResumeContent"
import { buildMetadata } from "../lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Resume",
  description:
    "Nina Rhone's resume — AI Solutions Architect at GUESS Inc., MIT graduate in Computation & Cognition, building production AI systems and full-stack products.",
  path: "/resume",
})

export default function ResumePage() {
  return <ResumeContent />
}
