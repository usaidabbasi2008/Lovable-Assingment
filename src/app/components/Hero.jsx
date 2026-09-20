
"use client";

import { useState } from "react";

export default function AIChat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim() || loading) return;

    const userMessage = message;

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

      if (!res.ok) {
        throw new Error(data.error || "API request failed");
      }

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
    <div className="w-full px-4   sm:px-6 md:px-8">

    
      <div className="w-full  max-w-4xl mx-auto">

        
        <div className="space-y-4  min-h-[250px] mb-6 max-h-[350px] overflow-y-auto px-1 sm:px-2">

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
                className={`
                  px-4 sm:px-5
                  py-3
                  rounded-2xl
                  max-w-[90%]
                  sm:max-w-[80%]
                  break-words
                  text-sm sm:text-base
                  ${
                    msg.role === "user"
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 text-black"
                  }
                `}
              >
                {msg.text}
              </div>
            </div>
          ))}

          
          {loading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-700 px-5 py-3 rounded-2xl text-sm sm:text-base">
                AI is thinking...
              </div>
            </div>
          )}

        </div>


      

        <div className="w-full max-w-3xl mx-auto">

          {/* Label */}
          <label
            htmlFor="ai-message"
            className="
              block
              text-sm
              sm:text-base
              font-semibold
              text-gray-800
              mb-2
              ml-1
            "
          >
            Ask AI
          </label>

          
          <div
            className="
              w-full
              flex
              items-center
              gap-2
              p-2
              bg-white
              border
              border-gray-300
              rounded-2xl
              shadow-sm
              transition-all
              duration-300
              focus-within:border-purple-500
              focus-within:ring-2
              focus-within:ring-purple-100
            "
          >

            <input
              id="ai-message"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              placeholder="Ask AI anything..."
              className="
                flex-1
                min-w-0
                px-3
                sm:px-4
                py-3
                text-sm
                sm:text-base
                text-gray-800
                placeholder:text-gray-400
                outline-none
                bg-transparent
              "
            />

          
            <button
              onClick={sendMessage}
              disabled={loading}
              className="
                shrink-0
                bg-purple-600
                text-white
                font-semibold
                px-4
                sm:px-7
                py-3
                rounded-xl
                text-sm
                sm:text-base
                transition-all
                duration-300
                hover:bg-purple-700
                hover:scale-[1.02]
                active:scale-95
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              {loading ? "..." : "Send"}
            </button>

          </div>

          <p className="text-center text-xs sm:text-sm text-gray-400 mt-3">
            Press Enter to send your message
          </p>

        </div>

      </div>

    </div>
  );
}
