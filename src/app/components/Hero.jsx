"use client";

import { useState } from "react";

export default function AIChat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim() || loading) return;

    const userMessage = message;

    // User message show
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await res.json();

      console.log("API STATUS:", res.status);
      console.log("API DATA:", data);

      // Agar API error de
      if (!res.ok) {
        throw new Error(data.error || "API request failed");
      }

      // AI response
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: data.reply || "AI ne response nahi diya.",
        },
      ]);
    } catch (error) {
      console.error("CHAT ERROR:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: `Error: ${error.message}`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">

      {/* Messages */}
      <div className="space-y-4 mb-4 max-h-[400px] overflow-y-auto">

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.role === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`px-5 py-3 rounded-2xl max-w-[80%] ${
                msg.role === "user"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-100 text-black"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 px-5 py-3 rounded-2xl">
              AI is thinking...
            </div>
          </div>
        )}

      </div>

      {/* Input */}
      <div className="flex items-center gap-2 border border-black rounded-2xl p-2">

        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          placeholder="Ask AI anything..."
          className="flex-1 px-4 py-3 outline-none"
        />

        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-purple-600 text-white px-7 py-3 rounded-xl hover:bg-purple-700 disabled:opacity-50"
        >
          {loading ? "..." : "Send"}
        </button>

      </div>

    </div>
  );
}