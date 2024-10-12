import { createClient } from '@/utils/supabase/client';
import type { User } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

export function useAuthStatus() {
  const [user, setUser] = useState<User | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    // Run initial check
    getUser();

    // Listen for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    // Cleanup on unmount
    return () => {
      subscription.unsubscribe();
    };
  }, [supabase]);

  return user;
}
