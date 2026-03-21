export const isProd = process.env.NODE_ENV === "production";
export const isDev = process.env.NODE_ENV !== "production";

export const publicSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
export const publicSupabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "";
