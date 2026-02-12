"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'react-hot-toast'
import { Send, Briefcase, Globe, Shield, Loader2, CheckCircle, ArrowRight } from 'lucide-react'

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      type: formData.get('type'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitted(true);
        toast.success("Inquiry Transmitted Successfully.");
      } else {
        throw new Error("Transmission Failed");
      }
    } catch (error) {
      toast.error("Transmission failed. Please use Saumyaa AI.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto min-h-[600px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.div 
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            className="glass p-8 md:p-16 rounded-[3.5rem] border-white/5 shadow-2xl relative overflow-hidden w-full"
          >
            <div className="relative z-10">
              <div className="mb-12">
                <h3 className="text-3xl font-bold mb-4 flex items-center gap-3 italic tracking-tighter">
                  <Briefcase className="text-brand" size={28} /> 
                  Strategic Inquiry
                </h3>
                <p className="text-gray-500 text-sm uppercase tracking-widest font-bold">
                  Direct Gateway for Partnerships & Media
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* ... (Existing Form Fields: Name, Email, Subject, Message) ... */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <input name="name" required type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 p-5 rounded-[1.5rem] outline-none focus:border-brand/50 text-sm" />
                  <input name="email" required type="email" placeholder="Corporate Email" className="w-full bg-white/5 border border-white/10 p-5 rounded-[1.5rem] outline-none focus:border-brand/50 text-sm" />
                </div>
                <select name="type" className="w-full bg-white/5 border border-white/10 p-5 rounded-[1.5rem] outline-none focus:border-brand/50 text-sm text-gray-300">
                  <option value="BharatSec Partnership">Cybersecurity Partnership (BharatSec)</option>
                  <option value="Smart Platter Collaboration">Food-Tech Innovation (Smart Platter)</option>
                  <option value="Venture Capital/Investment">Venture Capital & Investing</option>
                </select>
                <textarea name="message" required rows={5} placeholder="Briefly describe your vision..." className="w-full bg-white/5 border border-white/10 p-6 rounded-[1.5rem] outline-none focus:border-brand/50 text-sm"></textarea>

                <button 
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full bg-white text-black py-6 rounded-[1.5rem] font-black uppercase tracking-[0.4em] text-xs hover:bg-brand hover:text-white transition-all flex items-center justify-center gap-4"
                >
                  {isSubmitting ? <Loader2 className="animate-spin" /> : "Dispatch Strategic Inquiry"}
                </button>
              </form>
            </div>
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand/5 rounded-full blur-[100px] pointer-events-none" />
          </motion.div>
        ) : (
          /* --- SUCCESS SCREEN ANIMATION --- */
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="glass p-16 md:p-24 rounded-[4rem] border-brand/20 shadow-[0_0_100px_rgba(59,130,246,0.1)] text-center relative overflow-hidden w-full max-w-2xl"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-24 h-24 bg-brand rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_40px_rgba(59,130,246,0.5)]"
            >
              <CheckCircle size={48} className="text-white" />
            </motion.div>
            
            <h3 className="text-4xl font-black italic tracking-tighter mb-6">Transmission Complete</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 font-light">
              Your inquiry has been successfully encrypted and routed to Mukesh's executive office. 
              A confirmation email is arriving in your inbox now.
            </p>

            <button 
              onClick={() => setSubmitted(false)}
              className="group flex items-center gap-3 mx-auto text-xs font-bold uppercase tracking-[0.3em] text-brand hover:text-white transition-colors"
            >
              Send another message <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </button>

            {/* Ambient Success Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}