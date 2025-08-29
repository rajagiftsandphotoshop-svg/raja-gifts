import { createClient } from "@supabase/supabase-js";

export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!, // URL can be public
  process.env.SUPABASE_SERVICE_ROLE_KEY!, // NEVER expose to the client
  { auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false } }
);
