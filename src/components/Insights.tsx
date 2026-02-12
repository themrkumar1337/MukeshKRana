"use client"
import { motion } from 'framer-motion'
import { ArrowUpRight, Trophy, Mic, Newspaper } from 'lucide-react'

export default function Insights() {
  const accolades = [
    { title: "The Decentralized Future", source: "Global Tech Summit 2025", type: "Keynote" },
    { title: "Architecting AI Infrastructure", source: "Forbes Feature", type: "Article" },
    { title: "The Ethics of Digital Defense", source: "TechCrunch Panel", type: "Speaking" }
  ];

  return (
    <section id="insights" className="py-32 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-20 text-center uppercase tracking-widest">Recognition</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {accolades.map((item, i) => (
          <motion.div 
            key={i} 
            whileHover={{ scale: 1.02 }}
            className="glass p-8 rounded-[2.5rem] border-white/5 flex flex-col justify-between h-64"
          >
            <div>
              <p className="text-brand text-xs font-bold uppercase tracking-widest mb-4">{item.type}</p>
              <h3 className="text-2xl font-bold leading-tight">{item.title}</h3>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-gray-500 text-sm italic">{item.source}</span>
              <ArrowUpRight className="text-white/20" size={20} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}