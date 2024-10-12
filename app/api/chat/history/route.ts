import { getChatsByUserId } from '@/db/queries';
import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const chats = await getChatsByUserId(user.id);

    return NextResponse.json(chats);
  } catch (error) {
    console.error('Error in GET /api/chat/history:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
