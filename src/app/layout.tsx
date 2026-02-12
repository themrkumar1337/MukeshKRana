import type { Metadata } from "next";
import { Toaster } from "react-hot-toast"; // Sitewide feedback
import "./globals.css";

// World-Class SEO Metadata
export const metadata: Metadata = {
  title: "Mukesh K. RANA | CEO & Founder of Bharat Security, Entrepreneur, Cybersecurity Leader",
  description: "Official digital headquarters of Mukesh K. Rana. CEO of Bharat Security, Serial Entrepreneur (StaticNerd, LotusDrop, Smart Platter), and Cybersecurity Architect with 8+ years of leadership.",
  keywords: ["Mukesh K. Rana", "CEO Bharat Security", "BharatSec Founder", "Cybersecurity Leader India", "Smart Platter Founder"],
  metadataBase: new URL("https://mukeshkrana.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Global Entity Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mukesh K. Rana",
    "url": "https://mukeshkrana.com",
    "jobTitle": ["CEO", "Founder", "Cybersecurity Leader"],
    "worksFor": { "@type": "Organization", "name": "Bharat Security" },
    "owns": [
      { "@type": "Organization", "name": "Bharat Security" },
      { "@type": "Organization", "name": "Static Nerd" },
      { "@type": "Organization", "name": "Lotus Drop" },
      { "@type": "Organization", "name": "Smart Platter" }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* 1. JSON-LD for Google Authority */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* 2. Global Cal.com Embed - Fixes 404 Namespace Issue */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function (C, A, L) {
                let p = function (a, ar) { a.q.push(ar); };
                let d = C.document;
                C.Cal = C.Cal || function () {
                  let s = C.Cal;
                  if (s.q) { s.q.push(arguments); } else { s.q = [arguments]; }
                };
                if (!d.getElementById(L)) {
                  let s = d.createElement("script");
                  s.id = L;
                  s.src = "https://app.cal.com/embed/embed.js";
                  d.head.appendChild(s);
                }
                // Pre-initialize the 'mukesh-hq' namespace immediately
                C.Cal("init", "mukesh-hq", {origin: "https://cal.com"});
              })(window, "Cal", "cal-embed");
            `,
          }}
        />
      </head>
      <body className="antialiased bg-background text-white selection:bg-brand/30">
        {/* Global Toast Notifications */}
        <Toaster 
          position="bottom-center"
          toastOptions={{
            style: {
              background: '#0a0a0a',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '1.5rem',
              backdropFilter: 'blur(10px)',
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}