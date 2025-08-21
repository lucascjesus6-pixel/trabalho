import React, { useState } from "react";
import { chatResponses } from "../data/chatResponses";

export default function Chat({ chatHistory, setChatHistory }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input) return;
    const userMessage = { text: input, sender: "user" };
    const botMessage = {
      text:
        chatResponses[input.toLowerCase()] ||
        "Não entendi, posso te indicar delegacias e ONGs próximas.",
      sender: "bot",
    };
    setChatHistory([...chatHistory, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 h-[400px] flex flex-col">
      <div className="flex-1 overflow-y-auto space-y-2">
        {chatHistory.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg ${
              msg.sender === "user" ? "bg-blue-100 text-right" : "bg-gray-100"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex mt-2">
        <input
          type="text"
          className="flex-1 p-2 border rounded-l-lg"
          placeholder="Digite aqui..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white p-2 rounded-r-lg"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
