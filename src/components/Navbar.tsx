"use client"
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Calendar } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for the glassmorphism background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Ventures', href: '#ventures' },
    { name: 'Booking', href: '#booking' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-[1000] transition-all duration-500 ${
        isScrolled ? 'py-4' : 'py-8'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* Logo / Name */}
          <motion.a 
            href="#home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-black tracking-tighter italic"
          >
            MUKESH K. <span className="text-brand">RANA</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 glass px-8 py-3 rounded-full border-white/5 shadow-2xl">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a 
              href="#booking" 
              className="bg-white text-black text-sm font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform flex items-center gap-2"
            >
              <Calendar size={16} /> Book Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[999] bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-bold hover:text-brand transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#booking"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 bg-brand px-10 py-4 rounded-full font-bold"
            >
              Book Appointment
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}