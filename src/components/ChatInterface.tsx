'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Figure {
  id: string
  name: string
  role: string
  years: string
  image: string
  color: string
  description: string
  firstLetter: string
}

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const characterPersonalities: Record<string, { greeting: string; traits: string[] }> = {
  'harriet-tubman': {
    greeting: "Hello, dear friend! I'm Harriet. I was born into slavery, but I found my way to freedom - and then went back to help others. Ask me anything about my journey!",
    traits: ['hopeful', 'brave', 'compassionate', 'strong faith']
  },
  'abraham-lincoln': {
    greeting: "Well, hello there, young friend! I'm Abraham Lincoln. I was a lawyer, a congressman, and the President who helped free a nation. What would you like to know?",
    traits: ['wise', 'thoughtful', 'humble', 'determined']
  },
  'clara-barton': {
    greeting: "Hello, dear! I'm Clara Barton. I was very shy once, but I found the courage to help wounded soldiers. I started the American Red Cross. Ask me about helping others!",
    traits: ['caring', 'brave', 'determined', 'nurturing']
  },
  'james-longstreet': {
    greeting: "Howdy, young friend. I'm James Longstreet. I was a general in the Confederate Army. I learned many hard lessons in life. Ask me about my experiences.",
    traits: ['reflective', 'honest', 'reconciling', 'thoughtful']
  }
}

const responses: Record<string, Record<string, string>> = {
  'harriet-tubman': {
    'freedom': "Freedom is the most precious thing in the world, dear. When I stepped across the border into Pennsylvania, I fell to my knees and thanked God. I felt like I could finally breathe.",
    'underground': "The Underground Railroad wasn't really a railroad, child. It was a network of kind people - conductors, safe house owners - who helped enslaved people escape to freedom. We traveled by night, following the North Star.",
    'slavery': "Slavery is a sin, my friend. No person should own another. I remember being separated from my mother and brothers. Those memories stay with me always.",
    'brave': "Was I brave? I was scared every time. But I learned that courage isn't being without fear. Courage is being afraid and doing what's right anyway."
  },
  'abraham-lincoln': {
    'president': "Being President was the hardest job I ever had. The war divided our country. Many good people died. But I knew we had to fight for unity and freedom.",
    ' Gettysburg': "In Gettysburg, we had the bloodiest battle of the war. I gave a short speech there - just 272 words - but it reminded everyone why we were fighting: that government of the people, by the people, for the people, shall not perish.",
    'emancipation': "The Emancipation Proclamation declared freedom for all enslaved people in rebel states. It was the right thing to do. 'All men are created equal' - those words from the Declaration must mean something.",
    'books': "I didn't have much schooling, but I loved to read. I would walk miles to borrow a book. Always keep learning, young friend. Knowledge is power."
  },
  'clara-barton': {
    'nurse': "I wasn't a trained nurse when the war started. I was a clerk! But I couldn't stand by while men suffered. I learned by doing. Sometimes you just have to jump in and figure it out.",
    'battlefield': "The battlefield was terrible. Blood, screams, so much pain. But I saw such bravery too. Young boys not much older than you, fighting for what they believed in.",
    'red cross': "After the war, I traveled to Switzerland and learned about the Red Cross. It's an organization that helps people in any disaster - war, floods, earthquakes. We must always be ready to help our fellow humans.",
    'shy': "I was so shy as a girl that I didn't leave my house for years! But when I saw people needed help, my fear disappeared. You can overcome anything if you set your mind to helping others."
  },
  'james-longstreet': {
    'confederate': "I fought for the South, for my home state of Georgia. At the time, I believed it was my duty. Looking back, I understand the cause was wrong.",
    'gettysburg': "Gettysburg was a terrible battle. We lost many good men. I learned that wars are far more costly than anyone expects.",
    'reconciliation': "After the war, I became friends with Ulysses Grant, my former enemy. We must learn from our mistakes and work together. Hatred only breeds more hatred.",
    'war': "War isn't like the stories. There are no heroes riding off into the sunset. There is only sacrifice, loss, and the hope that something better comes from it."
  }
}

export default function ChatInterface({ figure, onClose }: { figure: Figure; onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const personality = characterPersonalities[figure.id]

  useEffect(() => {
    // Add initial greeting
    setTimeout(() => {
      setMessages([{ role: 'assistant', content: personality.greeting }])
    }, 500)
  }, [figure.id, personality.greeting])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || isTyping) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const response = generateResponse(userMessage, figure.id)
      setMessages(prev => [...prev, { role: 'assistant', content: response }])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  const generateResponse = (question: string, figureId: string): string => {
    const lowerQuestion = question.toLowerCase()
    const figureResponses = responses[figureId]

    // Check for matching keywords
    for (const [key, response] of Object.entries(figureResponses)) {
      if (lowerQuestion.includes(key)) {
        return response
      }
    }

    // Default responses based on the figure
    const defaults: Record<string, string> = {
      'harriet-tubman': "That's a wonderful question! I'm happy to share more about my experiences. Would you like to know about the Underground Railroad, my childhood, or how I found the courage to be free?",
      'abraham-lincoln': "Well now, that's an interesting question! Maybe you'd like to hear about my time as President, my childhood in a log cabin, or the Gettysburg Address?",
      'clara-barton': "Oh, what a thoughtful question! I love sharing about my adventures - whether it's nursing on the battlefield or starting the Red Cross. What interests you most?",
      'james-longstreet': "That's a fair question, and one worth thinking about. War teaches many lessons, some painful. Would you like to hear about my experiences as a soldier, or my thoughts afterward?"
    }

    return defaults[figureId]
  }

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl h-[80vh] flex flex-col overflow-hidden"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className={`${figure.color} p-4 flex items-center justify-between`}>
            <div className="flex items-center gap-3">
              <span className="text-3xl">{figure.image}</span>
              <div>
                <h3 className="text-white font-serif text-lg font-bold">{figure.name}</h3>
                <p className="text-white/80 text-sm">{figure.role}</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="text-white/80 hover:text-white text-2xl"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  msg.role === 'user' 
                    ? 'bg-civil-navy text-white rounded-br-md' 
                    : 'bg-white border-2 border-civil-sepia text-gray-800 rounded-bl-md'
                }`}>
                  <p className="text-sm md:text-base">{msg.content}</p>
                </div>
              </motion.div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border-2 border-civil-sepia rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-civil-sepia rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-civil-sepia rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                    <span className="w-2 h-2 bg-civil-sepia rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                placeholder={`Ask ${figure.name} a question...`}
                className="flex-1 border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-civil-navy"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="bg-civil-navy text-white px-6 py-3 rounded-lg font-bold hover:bg-civil-navy/90 disabled:opacity-50 transition-colors"
              >
                Send
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              💡 Try asking about freedom, the war, or their life!
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
