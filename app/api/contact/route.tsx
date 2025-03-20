import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      )
    }

    // Example: Log the data (you can replace this with your email service or database logic)
    console.log("Contact Form Submission:", { name, email, message })

    return NextResponse.json(
      { success: "Your message has been sent successfully!" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error handling contact form submission:", error)
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    )
  }
}
