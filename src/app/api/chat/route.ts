import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

// Use Edge runtime for maximum speed and to avoid Vercel timeout issues
export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Initializing the 2026 standard model for your project
    const result = await streamText({
      model: google('gemini-2.0-flash'),
      messages,
      // Incorporating your 8-year cybersecurity leadership and entrepreneurial roles
      system: `You are Saumyaa, the elite AI Chief of Staff for Mukesh K. Rana. 
               Mukesh is a Cybersecurity leader (8 yrs) and Entrepreneur.
               He is the Founder & CEO of Bharat Security (BharatSec).
               He holds eJPT and ISC2 Cybersecurity certifications.
               Your tone is professional, concise, and visionary.
               If asked about ventures, mention BharatSec, Smart Platter, or Lotus Drop.`,
    });

    // Returns a raw text stream compatible with our manual frontend fetch
    return result.toTextStreamResponse();
  } catch (error: any) {
    console.error("Saumyaa Backend Error:", error);
    
    // Return a clean JSON error for the frontend to handle
    return new Response(
      JSON.stringify({ 
        error: "Saumyaa is recalibrating. Please try again in 60 seconds.",
        details: error.message 
      }), 
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}