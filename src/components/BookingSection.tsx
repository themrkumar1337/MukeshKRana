"use client"
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, ShieldCheck, Clock, ArrowRight } from 'lucide-react'
import { toast } from 'react-hot-toast'

export default function BookingSection() {
  useEffect(() => {
    // Access the global Cal instance initialized in layout.tsx
    const cal = (window as any).Cal;
    
    if (cal) {
      // Set UI preferences for the 'mukesh-hq' namespace
      cal("ui", {
        namespace: "mukesh-hq",
        theme: "dark",
        styles: { branding: { brandColor: "#3b82f6" } },
        hideEventTypeDetails: false,
        layout: "month_view"
      });

      // Register the success listener for the 'mukesh-hq' namespace
      cal("on", {
        namespace: "mukesh-hq",
        action: "bookingSuccessful",
        callback: () => {
          toast.success("Consultation request received. Mukesh will review the slot.", {
            duration: 6000,
            icon: '⏳'
          });
        }
      });
    }
  }, []);

  return (
    <section id="booking" className="py-40 px-6 max-w-7xl mx-auto text-center relative">
      <div className="glass p-12 md:p-24 rounded-[4rem] border-brand/10 relative overflow-hidden bg-white/[0.01]">
        <div className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter italic uppercase">
              Secure a <span className="text-brand">Strategy Session</span>
            </h2>
            <p className="text-gray-500 text-lg mb-14 max-w-2xl mx-auto leading-relaxed font-light">
              I limit direct consultations to maintain peak focus on current ventures. 
              All sessions are <b>requests only</b> and subject to strategic approval.
            </p>

            <div className="flex flex-col items-center gap-10">
              {/* CRITICAL: The data-cal-namespace MUST match the 'mukesh-hq' string 
                used in the layout.tsx script and the useEffect above. 
              */}
              <button
                type="button"
                data-cal-namespace="mukesh-hq" 
                data-cal-link="mukeshkrana/consultation"
                className="group bg-white text-black px-16 py-7 rounded-full font-black uppercase tracking-[0.3em] text-xs hover:scale-105 transition-all shadow-[0_30px_60px_rgba(255,255,255,0.15)] flex items-center gap-4"
              >
                <Calendar size={20} className="group-hover:text-brand transition-colors" />
                Launch Secure Scheduler
                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </button>

              <div className="flex flex-wrap items-center justify-center gap-10 text-[10px] text-gray-600 uppercase tracking-[0.4em] font-black">
                <span className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-brand"/> Encrypted Portal
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={16} className="text-brand"/> Approval Required
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Ambient Decorative Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      </div>
    </section>
  );
}