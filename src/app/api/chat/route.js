export async function POST(req) {
  try {
    const { message } = await req.json();

    if (!message) {
      return Response.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return Response.json(
        { error: "GEMINI_API_KEY is missing" },
        { status: 500 }
      );
    }

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },

        body: JSON.stringify({
          systemInstruction: {
            parts: [
              {
                text: `
You are a helpful AI assistant.

Answer questions clearly and simply.

Rules:
- Keep simple questions short.
- Do not give unnecessarily long answers.
- Use simple English.
- Use headings or bullet points only when useful.
- For "What is JS?" explain it in 3 to 5 sentences.
- Do not repeat the question.
- Do not add unnecessary information.
- Give examples only when they are useful.
                `,
              },
            ],
          },

          contents: [
            {
              role: "user",
              parts: [
                {
                  text: message,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    console.log("Gemini Response:", data);

    if (!response.ok) {
      return Response.json(
        {
          error:
            data?.error?.message ||
            "Gemini API error",
        },
        { status: response.status }
      );
    }

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text;

    return Response.json({
      reply: reply || "No response from AI",
    });

  } catch (error) {
    console.error("Server Error:", error);

    return Response.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}