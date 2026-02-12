import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = await streamText({
      // Switching to the 2026 standard model to resolve the 404
      model: google('gemini-2.0-flash'), 
      messages,
      system: `You are Saumyaa, the elite AI Chief of Staff for Mukesh K. Rana. 
               Mukesh is a Cybersecurity leader (8 yrs) and Entrepreneur.
               Be concise, professional, and fast.`,
    });

    // Clean text stream for our manual frontend
    return result.toTextStreamResponse();
  } catch (error: any) {
    console.error("Saumyaa Backend Error:", error);
    return new Response(JSON.stringify({ error: "Saumyaa is currently unreachable." }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}