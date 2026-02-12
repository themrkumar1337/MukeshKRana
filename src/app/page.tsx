"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, Code, Sparkles, ArrowUpRight, Zap, 
  Utensils, TrendingUp, CheckCircle2, Download, 
  FileText, Image as ImageIcon, Briefcase 
} from 'lucide-react'

import Navbar from '@/components/Navbar'
import SaumyaaChat from '@/components/SaumyaaChat'
import Insights from '@/components/Insights'
import BookingSection from '@/components/BookingSection'
import BookingForm from '@/components/BookingForm'

export default function Home() {
  // Diversified Venture Portfolio
  const ventures = [
    { 
      name: "BharatSec", 
      icon: <Shield />, 
      role: "CEO & Founder", 
      desc: "India's premier cybersecurity firm, specializing in elite digital defense and forensics." 
    },
    { 
      name: "StaticNerd", 
      icon: <Code />, 
      role: "Founder", 
      desc: "Boutique engineering agency architecting high-performance, secure digital ecosystems." 
    },
    { 
      name: "Smart Platter", 
      icon: <Utensils />, 
      role: "Founder", 
      desc: "A disruptive food-tech venture focused on innovative culinary solutions." 
    },
    { 
      name: "LotusDrop", 
      icon: <Sparkles />, 
      role: "Founder", 
      desc: "A premium direct-to-consumer brand focused on ethically sourced wellness and beauty." 
    }
  ];

  const mediaAssets = [
    { name: "Brand Assets", icon: <Briefcase size={20}/>, size: "12MB" },
    { name: "Executive Bio", icon: <FileText size={20}/>, size: "2MB" },
    { name: "Press Photos", icon: <ImageIcon size={20}/>, size: "45MB" },
    { name: "Full Media Kit", icon: <Download size={20}/>, size: "58MB" }
  ];

  return (
    <main className="min-h-screen bg-background text-white selection:bg-brand/30 overflow-x-hidden">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section id="home" className="h-screen flex flex-col items-center justify-center text-center px-6 relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="z-10"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-brand text-xs font-bold uppercase tracking-[0.8em] mb-8 block"
          >
            Visionary Entrepreneur & Security Leader
          </motion.span>
          <h1 className="text-7xl md:text-[14rem] font-black italic tracking-tighter text-gradient leading-[0.8] mb-10 uppercase">
            Mukesh K. Rana
          </h1>
          <p className="max-w-3xl mx-auto text-gray-500 text-sm md:text-base leading-relaxed tracking-widest uppercase font-medium">
            8 Years Cybersecurity • 5 Years Entrepreneurship • 5 Years Investing
          </p>
          
          <div className="mt-16 flex justify-center">
            {/* FIX: Added Namespace and Link to enable the Pop-up */}
            <button 
              data-cal-namespace="mukesh-hq"
              data-cal-link="mukeshkrana/consultation"
              className="bg-white text-black px-14 py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:scale-105 transition-all shadow-[0_20px_60px_rgba(255,255,255,0.1)]"
            >
              Request Strategy Session
            </button>
          </div>
        </motion.div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[160px] pointer-events-none" />
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-40 px-6 max-w-7xl mx-auto border-y border-white/5 bg-white/[0.01]">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-5xl md:text-6xl font-bold mb-12 leading-[1.1] tracking-tighter">
              Engineering <span className="text-brand italic underline">Absolute</span> <br /> 
              Digital Resilience.
            </h2>
            <div className="space-y-8 text-gray-400 text-xl font-light leading-relaxed">
              <p>
                Mukesh K. Rana is a multi-faceted Entrepreneur and Cybersecurity Leader with over <span className="text-white font-medium">8 years of leadership experience</span>. As the CEO of **Bharat Security**, he has pioneered digital defense strategies for high-stakes environments.
              </p>
              <p>
                Beyond security, Mukesh has spent the last <span className="text-white font-medium">5 years masterminding a diverse venture ecosystem</span>—from food-tech innovation at **Smart Platter** to elite web engineering at **StaticNerd**.
              </p>
              <p>
                His strategic acumen is further sharpened by <span className="text-white font-medium">5 years of disciplined Investing and Trading</span>, allowing him to bridge the gap between technical risk and financial growth.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
                {['Cybersecurity Strategy', 'Venture Capital', 'Executive Mentorship', 'Asset Trading'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-xs uppercase tracking-widest font-bold text-white">
                    <CheckCircle2 className="text-brand" size={18} /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative group">
            <div className="glass aspect-[4/5] rounded-[4rem] overflow-hidden border-white/10 relative">
               <img 
                 src="/mukesh-k-rana.jpg" 
                 alt="Mukesh K. Rana" 
                 className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                 onError={(e) => { (e.currentTarget.style.display = 'none') }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
               <div className="absolute bottom-10 left-10 z-20">
                  <p className="text-brand font-black text-[10px] uppercase tracking-[0.4em] mb-2">Current Role</p>
                  <h3 className="text-3xl font-bold italic">CEO, Bharat Security</h3>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- VENTURES GRID --- */}
      <section id="ventures" className="py-40 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ventures.map((v, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }} 
              className="glass p-10 rounded-[3rem] border-white/5 hover:border-brand/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-10 text-brand group-hover:bg-brand group-hover:text-white transition-all">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-tighter">{v.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">{v.desc}</p>
              </div>
              <ArrowUpRight className="opacity-10 group-hover:opacity-100 transition-opacity" size={20} />
            </motion.div>
          ))}
        </div>
      </section>

      <Insights />

      {/* --- MEDIA KIT --- */}
      <section id="media-kit" className="py-40 px-6 max-w-7xl mx-auto">
        <div className="glass p-12 md:p-20 rounded-[4rem] border-white/5 relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-16">
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter italic leading-tight">Press & Media Kit</h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                Official high-resolution assets and vetted executive biographies for journalists, event organizers, and partners.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">
              {mediaAssets.map((asset, i) => (
                <button key={i} className="flex items-center justify-between gap-8 bg-white/5 hover:bg-brand/20 border border-white/10 p-6 rounded-3xl transition-all group">
                  <div className="flex items-center gap-4 text-left">
                    <div className="text-brand">{asset.icon}</div>
                    <div>
                      <p className="text-sm font-bold text-white tracking-tight">{asset.name}</p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{asset.size}</p>
                    </div>
                  </div>
                  <Download size={16} className="text-gray-600 group-hover:text-white transition-colors" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BookingSection />
      
      <div className="py-20 px-6 max-w-7xl mx-auto" id="contact">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 italic tracking-tighter">Direct Channels</h2>
          <p className="text-gray-500 uppercase tracking-[0.4em] text-[10px] font-bold">Secure Strategic Inquiry Form</p>
        </div>
        <BookingForm />
      </div>

      <SaumyaaChat />

      {/* --- FOOTER --- */}
      <footer className="py-24 border-t border-white/5 text-center bg-white/[0.01]">
        <h2 className="text-3xl font-black italic tracking-tighter mb-8 uppercase">Mukesh K. Rana</h2>
        <div className="flex justify-center gap-10 mb-12">
          {['LinkedIn', 'X', 'Instagram'].map((s) => (
            <a key={s} href="#" className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600 hover:text-brand transition-colors">{s}</a>
          ))}
        </div>
        <p className="text-gray-800 text-[10px] tracking-[0.5em] uppercase font-bold">
          © 2026 Mukesh K. Rana • All Strategic Rights Reserved
        </p>
      </footer>
    </main>
  );
}