"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Award, Target, Landmark } from 'lucide-react'

export default function About() {
  const accolades = [
    { icon: <ShieldCheck size={20} />, title: "CEO & Founder", detail: "Bharat Security (BharatSec)" },
    { icon: <Award size={20} />, title: "Certified Expert", detail: "eJPT • ISC2 Credentials" },
    { icon: <Target size={20} />, title: "8+ Years", detail: "Cybersecurity Leadership" },
    { icon: <Landmark size={20} />, title: "Entrepreneur", detail: "Multidisciplinary Ventures" }
  ];

  return (
    <section id="about" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Visual Prestige Element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-brand/5 rounded-[3rem] blur-3xl group-hover:bg-brand/10 transition-all duration-700" />
            <div className="relative aspect-square rounded-[3rem] border border-brand/20 bg-slate-950 overflow-hidden flex items-center justify-center p-12">
               <div className="absolute top-8 left-8">
                  <span className="text-[10px] font-black text-brand uppercase tracking-[0.5em] italic">Vetted Personnel</span>
               </div>
               
               <div className="text-center space-y-4">
                  <h3 className="text-white/10 text-8xl font-black leading-none select-none tracking-tighter">
                    MKR<br />2026
                  </h3>
                  <div className="h-[1px] w-12 bg-brand mx-auto" />
               </div>

               <div className="absolute bottom-8 right-8 rotate-90 origin-right">
                  <span className="text-[8px] font-medium text-gray-500 uppercase tracking-[1em]">Restricted Access</span>
               </div>
            </div>
          </motion.div>

          {/* Professional Narrative (SEO Target) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-black text-brand mb-6 italic">Personnel Briefing</h2>
            <h2 className="text-4xl md:text-5xl font-bold text-white italic mb-10 leading-tight">
              A Legacy of <span className="text-brand">Defense</span> and Innovation.
            </h2>
            
            <div className="space-y-6 text-gray-400 text-sm leading-relaxed font-light">
              <p>
                As the <b>Founder and CEO of Bharat Security</b>, I have spent nearly a decade architecting the security frameworks that protect modern enterprises. My career is defined by <b>8 years of leadership</b> in offensive security, where I’ve led elite teams through complex penetration testing and red-teaming operations.
              </p>
              <p>
                Beyond cybersecurity, my entrepreneurial drive has led to the successful launch of ventures across diverse industries—from the luxury branding of <b>Lotus Drop</b> to the premium hospitality experience of <b>Brew Haven Café</b>.
              </p>
              <p>
                My methodology is rooted in the belief that true innovation requires a foundation of absolute security. Whether I am consulting for a Fortune 500 company or scaling a new venture, the objective remains the same: <b>excellence without compromise.</b>
              </p>
            </div>

            {/* Accolade Grid */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {accolades.map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-4 hover:border-brand/20 transition-all group">
                  <div className="text-brand group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white text-xs font-bold uppercase tracking-widest">{item.title}</h4>
                    <p className="text-gray-500 text-[10px] uppercase tracking-wider mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}