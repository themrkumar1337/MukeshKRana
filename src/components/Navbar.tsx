"use client"
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Shield } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Toggle body scroll
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { name: 'Philosophy', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Ventures', href: '#ventures' },
    { name: 'Insights', href: '#insights' },
  ]

  return (
    <nav className="fixed top-0 w-full z-[100] px-4 md:px-6 py-4 md:py-8 transition-all duration-500">
      <div className={`max-w-7xl mx-auto rounded-2xl border transition-all duration-500 ${
        isScrolled || isMobileMenuOpen ? 'bg-black/90 backdrop-blur-xl border-white/10 py-4 px-6' : 'bg-transparent border-transparent py-4 px-8'
      }`}>
        <div className="flex justify-between items-center">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-brand rounded-lg md:rounded-xl flex items-center justify-center">
              <Shield size={16} className="text-black" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black text-[10px] md:text-xs uppercase tracking-tighter italic">Mukesh K. Rana</span>
              <span className="text-[7px] text-brand font-bold uppercase tracking-[0.3em]">Secure Channel</span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.3em] hover:text-brand transition-colors">
                {link.name}
              </a>
            ))}
            <a href="#book" className="bg-brand text-black text-[9px] font-black uppercase tracking-[0.3em] px-6 py-3 rounded-lg hover:bg-white transition-all">
              Initialize
            </a>
          </div>

          {/* Mobile Toggle - Ensure z-index is high */}
          <button className="md:hidden text-brand p-2 z-[110]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black z-[105] flex flex-col justify-center items-center p-8 md:hidden"
          >
            <div className="flex flex-col items-center gap-10">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold text-white uppercase tracking-[0.3em] italic hover:text-brand transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#book" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 bg-brand text-black text-xs font-black uppercase tracking-[0.4em] px-12 py-5 rounded-xl shadow-xl shadow-brand/10"
              >
                Initialize Access
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}