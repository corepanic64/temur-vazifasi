import { google } from "@ai-sdk/google";
import { streamText } from "ai";

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (!messages || messages.length === 0) {
      return Response.json({ error: "No messages provided" }, { status: 400 });
    }

    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
    if (!apiKey) {
      return Response.json(
        { error: "Google API key not configured" },
        { status: 500 },
      );
    }

    // Format messages for the AI model
    const formattedMessages = messages.map((msg: any) => ({
      role: msg.role === "user" ? "user" : "assistant",
      content: msg.content,
    }));

    const result = await streamText({
      model: google("gemini-2.5-flash", { apiKey }), // Updated model from gemini-2.0-flash to gemini-2.5-flash which is confirmed working
      system:
        "Siz tarmoq haqidagi savollarga javob beradigan yordamchi. Javoblar qisqa, sodda va tushunarli bo'lishi kerak. Uzbek tilida javob bering.",
      messages: formattedMessages,
      temperature: 0.7,
      maxOutputTokens: 500,
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("[v0] Chat API Error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Failed to generate response";
    return Response.json({ error: errorMessage }, { status: 500 });
  }
}
