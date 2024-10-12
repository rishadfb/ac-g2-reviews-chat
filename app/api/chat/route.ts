import { openai } from '@ai-sdk/openai';
import { convertToCoreMessages, streamText } from 'ai';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY is not set');
    }

    const response = await streamText({
      model: openai('gpt-4o-mini'),
      system:
        'You are an AI assistant for ActiveCampaign, answering questions based on G2 reviews.',
      messages: convertToCoreMessages(messages),
    });

    return response.toDataStreamResponse();
  } catch (error) {
    console.error('Error in chat API:', error);
    return new Response(JSON.stringify({ error: 'An error occurred' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
