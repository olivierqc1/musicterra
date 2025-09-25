// src/types/supabase-shim.d.ts
declare module "../lib/supabase.js" {
  import type { SupabaseClient } from "@supabase/supabase-js";
    export const supabase: SupabaseClient;
    }
    declare module "../lib/supabase" {
      import type { SupabaseClient } from "@supabase/supabase-js";
        export const supabase: SupabaseClient;
        }