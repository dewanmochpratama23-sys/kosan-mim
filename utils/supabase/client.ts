import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://bvibqplnbjthrddbggzg.supabase.co";
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  "sb_publishable_M2Wn82MZHXfFw3Ri_K9xCQ_0txpzPaD";

export const createClient = () =>
  createBrowserClient(supabaseUrl, supabaseKey);
