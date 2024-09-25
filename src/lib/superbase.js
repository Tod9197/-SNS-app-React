import { createClient } from "@supabase/supabase-js";

export const superbase = createClient(
  process.env.REACT_APP_SUPERBASE_URL,
  process.env.REACT_APP_SUPERBASE_API
);
