"use client"
import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, BotMessageSquare, X, MessageCircle, User, Loader2 } from 'lucide-react'

export default function SaumyaaChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    { id: '1', role: 'assistant', content: "Hello, I am Saumyaa. How can I assist you with Mukesh's ventures today?" }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logic
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = { id: Date.now().toString(), role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });

      if (!response.ok) throw new Error('Failed to connect');

      // Setup for streaming
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let assistantMsg = { id: (Date.now() + 1).toString(), role: 'assistant', content: '' };
      
      setMessages(prev => [...prev, assistantMsg]);

      while (true) {
        const { done, value } = await reader!.read();
        if (done) break;
        const chunk = decoder.decode(value);
        
        // Update the last message in state with the new chunk
        assistantMsg.content += chunk;
        setMessages(prev => [
          ...prev.slice(0, -1),
          { ...assistantMsg }
        ]);
      }
    } catch (error) {
      console.error("Saumyaa Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-sans text-white">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="glass mb-6 w-80 md:w-96 h-[550px] rounded-[2.5rem] flex flex-col overflow-hidden border-white/10 shadow-2xl origin-bottom-right"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 bg-white/5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <BotMessageSquare size={18} className="text-brand" />
                <span className="text-xs font-black uppercase tracking-widest">Saumyaa AI</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Chat Body */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide bg-black/20">
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`p-4 rounded-2xl text-[13px] leading-relaxed ${
                    m.role === 'user' ? 'bg-brand text-white' : 'bg-white/5 text-gray-300 border border-white/5'
                  }`}>
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-2 items-center px-2">
                  <Loader2 size={12} className="animate-spin text-brand" />
                  <span className="text-[10px] text-gray-500 font-bold italic">Processing...</span>
                </div>
              )}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="p-4 bg-white/5 border-t border-white/5">
              <div className="relative flex items-center">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Inquire with Saumyaa..."
                  className="w-full bg-white/5 border border-white/10 p-4 pr-14 rounded-2xl outline-none text-xs text-white"
                />
                <button 
                  type="submit" 
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 p-2.5 bg-white text-black rounded-xl hover:bg-brand hover:text-white transition-all disabled:opacity-20"
                >
                  <Send size={16} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-brand rounded-full flex items-center justify-center text-white shadow-xl shadow-brand/20"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </motion.button>
    </div>
  )
}