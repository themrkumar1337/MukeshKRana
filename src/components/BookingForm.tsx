"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Mail, Send, CheckCircle2, Loader2, X, ShieldCheck } from 'lucide-react'

export default function BookingForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="group relative w-full md:w-auto px-8 md:px-12 py-5 md:py-6 bg-brand text-black font-black text-[10px] md:text-xs uppercase tracking-[0.4em] rounded-xl hover:bg-white transition-all duration-500 shadow-xl"
      >
        Initialize Strategic Access
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md" 
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-slate-950 border border-brand/20 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl scrollbar-hide"
            >
              <div className="p-6 md:p-12">
                <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-gray-500 hover:text-brand transition-colors">
                  <X size={24} />
                </button>

                <div className="mb-8 text-center">
                  <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-brand/20 bg-brand/5">
                    <ShieldCheck size={12} className="text-brand" />
                    <span className="text-[8px] font-black uppercase tracking-[0.3em] text-brand">Vetted Channel</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white italic">Inquire with the <span className="text-brand">Founder.</span></h3>
                </div>

                <form className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 gap-4 md:gap-6">
                    <input required className="w-full bg-white/[0.02] border border-white/5 p-4 rounded-xl text-white text-xs outline-none focus:border-brand/40" placeholder="Full Name" />
                    <input required type="email" className="w-full bg-white/[0.02] border border-white/5 p-4 rounded-xl text-white text-xs outline-none focus:border-brand/40" placeholder="Email Address" />
                  </div>
                  <select className="w-full bg-[#0a0a0a] border border-white/5 p-4 rounded-xl text-white text-xs outline-none focus:border-brand/40 appearance-none">
                    <option>Strategic Consultation</option>
                    <option>General Correspondence</option>
                  </select>
                  <textarea required rows={4} className="w-full bg-white/[0.02] border border-white/5 p-4 rounded-xl text-white text-xs outline-none focus:border-brand/40 resize-none" placeholder="Provide context..." />
                  
                  <button type="submit" className="w-full py-4 bg-brand text-black font-black text-[10px] uppercase tracking-[0.4em] rounded-xl flex items-center justify-center gap-3">
                    <Send size={14} /> Send Briefing
                  </button>
                </form>
              </div>

              {/* Success state overlay logic remains the same */}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}