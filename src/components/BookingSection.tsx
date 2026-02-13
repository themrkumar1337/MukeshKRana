"use client"
import React from 'react'
import { motion } from 'framer-motion'
import BookingForm from './BookingForm'
import { ShieldCheck } from 'lucide-react'

export default function BookingSection() {
  return (
    <section id="book" className="py-40 bg-[#050505] relative overflow-hidden text-center">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="mb-10 flex justify-center">
             <div className="p-4 rounded-3xl bg-brand/5 border border-brand/10">
                <ShieldCheck className="text-brand" size={32} />
             </div>
          </div>
          <h2 className="text-4xl md:text-7xl font-bold text-white italic mb-8 leading-tight">
            Ready to <span className="text-brand">Secure</span> Your Vision?
          </h2>
          <p className="text-gray-500 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Professional access is strictly curated. Initialize a secure transmission to discuss <b>Cybersecurity Strategy</b> or <b>Strategic Ventures</b> directly.
          </p>
          
          <BookingForm />
          
          <div className="mt-16 flex justify-center items-center gap-12 opacity-20">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white">Confidential</span>
            <div className="w-1 h-1 bg-white rounded-full" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white">End-to-End</span>
            <div className="w-1 h-1 bg-white rounded-full" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white">Global Access</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}