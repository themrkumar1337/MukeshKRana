"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Code, Sparkles, Utensils, ArrowUpRight, ExternalLink } from 'lucide-react'

export default function Ventures() {
  const portfolio = [
    {
      name: "Bharat Security",
      role: "Founder & CEO",
      desc: "India's leading cybersecurity firm specializing in elite penetration testing, red teaming, and digital forensics.",
      icon: <Shield className="text-brand" size={24} />,
      tags: ["Cybersecurity", "Core"],
      link: "https://bharatsec.com"
    },
    {
      name: "Static Nerd",
      role: "Chief Architect",
      desc: "A high-performance web development agency focused on modern stacks like Next.js and secure cloud infrastructure.",
      icon: <Code className="text-brand" size={24} />,
      tags: ["DevOps", "Web Arch"],
      link: "#"
    },
    {
      name: "Lotus Drop",
      role: "Strategic Partner",
      desc: "A premium skincare and beauty brand defined by luxury branding and modern e-commerce experiences.",
      icon: <Sparkles className="text-brand" size={24} />,
      tags: ["E-commerce", "Luxury"],
      link: "#"
    },
    {
      name: "Smart Platter",
      role: "Innovation Lead",
      desc: "A next-generation culinary venture integrating tech-driven hospitality and premium catering services.",
      icon: <Utensils className="text-brand" size={24} />,
      tags: ["Hospitality", "Tech"],
      link: "#"
    }
  ];

  return (
    <section id="ventures" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Decorative Branding Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-brand/50 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.5em] font-black text-brand mb-6 italic"
          >
            Strategic Ecosystem
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white italic leading-tight"
          >
            Building the <span className="text-brand">Future</span> across<br />
            multiple <span className="text-white/40">dimensions.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed"
          >
            From the deep-tech infrastructure of <b>BharatSec</b> to the consumer luxury of <b>Lotus Drop</b>, 
            my ventures are unified by a singular philosophy: uncompromising quality and secure innovation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolio.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-brand/30 transition-all duration-700 relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="p-5 bg-brand/5 rounded-2xl border border-brand/10 group-hover:bg-brand/10 transition-colors duration-500">
                  {item.icon}
                </div>
                <div className="flex gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[8px] font-bold text-gray-500 uppercase tracking-widest border border-white/10 px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white tracking-tight">{item.name}</h3>
                <p className="text-[10px] text-brand font-black uppercase tracking-[0.3em] italic">
                  {item.role}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                  {item.desc}
                </p>
              </div>

              <div className="mt-12 flex items-center justify-between pt-8 border-t border-white/5">
                <div className="flex items-center gap-2 text-[9px] font-black text-white uppercase tracking-widest opacity-40 group-hover:opacity-100 group-hover:text-brand transition-all">
                  Initialize Protocol <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
                <a 
                  href={item.link} 
                  className="p-3 rounded-full bg-white/5 text-gray-500 hover:text-white hover:bg-brand/20 transition-all"
                >
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}