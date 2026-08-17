import { streamText } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';

export const runtime = 'edge';

const google = createGoogleGenerativeAI({
  apiKey: process.env.AQ.Ab8RN6Jp_20KN7dWFFfAubcWSFjrJ5smixe7SS8ViQ5Q1nX4bg,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: google('gemini-1.5-flash'),
    messages,
  });

  return result.toDataStreamResponse();
}
