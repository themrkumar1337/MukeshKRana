import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Ventures from '@/components/Ventures'
import Insights from '@/components/Insights'
import BookingSection from '@/components/BookingSection'
import SaumyaaChat from '@/components/SaumyaaChat'

export default function Home() {
  return (
    <main className="bg-[#050505] selection:bg-brand selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Ventures />
      <Insights />
      <BookingSection />
      <SaumyaaChat />
      
      <footer className="py-20 border-t border-white/5 text-center">
        <div className="container mx-auto px-6">
          <div className="text-brand font-black text-[10px] uppercase tracking-[1em] mb-4">Mukesh K. Rana</div>
          <p className="text-gray-600 text-[9px] uppercase tracking-widest italic">
            Founder & CEO, Bharat Security • Established 2018
          </p>
        </div>
      </footer>
    </main>
  )
}