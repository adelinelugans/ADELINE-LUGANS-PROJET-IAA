import 'expo-sqlite/localStorage/install';

import { createClient, processLock } from '@supabase/supabase-js';
import { Platform } from 'react-native';

const url = process.env.EXPO_PUBLIC_SUPABASE_URL;
const publishableKey = process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!url || !publishableKey) {
  throw new Error('Configure EXPO_PUBLIC_SUPABASE_URL et EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY dans .env.local.');
}

export const supabase = createClient(url, publishableKey, {
  auth: {
    storage: typeof window !== 'undefined' ? globalThis.localStorage : undefined,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: Platform.OS === 'web',
    lock: processLock,
  },
});
