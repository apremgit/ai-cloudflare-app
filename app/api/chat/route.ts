import { streamText } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';

export const runtime = 'edge';

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: google('gemini-1.5-flash'),
    messages,
  });

  return result.toDataStreamResponse();
}
