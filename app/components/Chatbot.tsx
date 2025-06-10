"use client"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"

interface Message {
  id: number
  text: string
  isBot: boolean
  timestamp: Date
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Alex's AI assistant. How can I help you learn more about Alex's experience and skills?",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputText, setInputText] = useState("")

  const handleSendMessage = () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputText("")

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputText),
        isBot: true,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 1000)
  }

  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase()

    if (lowerInput.includes("experience") || lowerInput.includes("work")) {
      return "Alex has 5+ years of experience as a Full-Stack Developer, currently working as a Senior Developer at TechCorp Inc. He's led teams and built scalable applications serving millions of users."
    }

    if (lowerInput.includes("skills") || lowerInput.includes("technology")) {
      return "Alex specializes in React, Next.js, Node.js, TypeScript, and Python. He's also experienced with cloud technologies like AWS and has strong UI/UX design skills."
    }

    if (lowerInput.includes("projects")) {
      return "Alex has built several impressive projects including an e-commerce platform, task management app, weather dashboard, and social media analytics tool. You can see them in the projects section above!"
    }

    if (lowerInput.includes("contact") || lowerInput.includes("hire") || lowerInput.includes("email")) {
      return "You can reach Alex at alex@example.com or download his resume from the section above. He's always open to discussing new opportunities!"
    }

    if (lowerInput.includes("education") || lowerInput.includes("degree")) {
      return "Alex has a strong educational background in Computer Science and continues to stay updated with the latest technologies through continuous learning and certifications."
    }

    return "That's a great question! You can find more detailed information in the sections above, or feel free to ask me about Alex's experience, skills, projects, or how to get in touch with him."
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center z-50"
        aria-label="Open chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col z-50">
          {/* Chat Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg">
            <h3 className="font-semibold">Chat with Alex's AI Assistant</h3>
            <p className="text-sm text-blue-100">Ask me anything about Alex!</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    message.isBot ? "bg-gray-100 text-gray-800" : "bg-blue-600 text-white"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask about Alex's experience..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
