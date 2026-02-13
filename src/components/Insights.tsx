"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Shield, Globe, Lightbulb } from 'lucide-react'

export default function Insights() {
  const logs = [
    { title: "Defensive Architecture in 2026", cat: "Cybersecurity", icon: <Shield size={16} /> },
    { title: "The CEO's Blueprint for Scaling", cat: "Leadership", icon: <Globe size={16} /> },
    { title: "Transparency in Modern Ventures", cat: "Unfiltered", icon: <Lightbulb size={16} /> }
  ];

  return (
    <section id="insights" className="py-32 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-[10px] uppercase tracking-[0.4em] font-black text-brand mb-4 italic">Executive Journals</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white italic">Strategic <span className="text-brand">Intelligence.</span></h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {logs.map((log, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-brand/20 transition-all group cursor-pointer">
              <div className="mb-12 p-3 w-fit bg-brand/5 rounded-xl text-brand">{log.icon}</div>
              <span className="text-[9px] font-black text-brand uppercase tracking-[0.3em] mb-3 block">{log.cat}</span>
              <h3 className="text-lg font-bold text-white mb-6 leading-tight group-hover:text-brand transition-colors">{log.title}</h3>
              <div className="flex items-center gap-2 text-[9px] font-bold text-gray-500 uppercase tracking-widest">
                Access Log <ArrowUpRight size={12} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}