"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Shield, ChevronRight, MousePointer2, Lock } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#050505]">
      {/* Background Architectural Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand/5 to-transparent opacity-50 -z-10" />
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[120px] -z-10" />
      
      {/* Subtle Carbon Pattern for Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          
          {/* Status Indicator Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-4 px-5 py-2 rounded-full border border-brand/20 bg-brand/5 mb-10"
          >
            <div className="flex -space-x-2">
              <div className="w-5 h-5 rounded-full border-2 border-[#050505] bg-brand flex items-center justify-center">
                <Lock size={10} className="text-black" />
              </div>
            </div>
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-brand">
              Cybersecurity Leader • CEO BharatSec
            </span>
          </motion.div>

          {/* Luxury Typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="text-6xl md:text-[7rem] font-bold text-white leading-[0.9] tracking-tighter italic">
              Mukesh <span className="text-brand">K. Rana.</span>
            </h1>
            <h2 className="mt-4 text-3xl md:text-5xl font-light text-gray-500 tracking-tight italic">
              Architecting Digital <span className="text-white/80">Fortresses.</span>
            </h2>
          </motion.div>

          {/* Core Biography - Optimized for SEO Ranking */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light"
          >
            As the <b>Founder and CEO of Bharat Security</b>, I leverage over <b>8 years of expertise</b> in offensive security and venture building to secure high-stakes digital assets globally.
          </motion.p>

          {/* Action Interface */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 flex flex-wrap items-center gap-10"
          >
            <a 
              href="#book" 
              className="group bg-brand text-black px-10 py-6 rounded-xl font-black text-[10px] uppercase tracking-[0.4em] flex items-center gap-4 hover:bg-white transition-all duration-500 shadow-[0_0_40px_rgba(197,160,89,0.15)]"
            >
              Consult the Office
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex items-center gap-4">
               <div className="h-[1px] w-12 bg-white/10" />
               <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                 eJPT • ISC2 Certified
               </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Branding Side-Text */}
      <div className="absolute right-10 bottom-24 hidden lg:block rotate-90 origin-right">
        <span className="text-[10px] font-black text-white/10 uppercase tracking-[1.5em] select-none whitespace-nowrap">
          BHARAT SECURITY • ESTABLISHED 2018
        </span>
      </div>

      {/* Luxury Scroll Indicator */}
      <motion.div 
        animate={{ opacity: [0.2, 1, 0.2], y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-12 left-6 md:left-auto md:right-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand to-transparent" />
        <MousePointer2 size={14} className="text-brand rotate-180" />
      </motion.div>
    </section>
  )
}