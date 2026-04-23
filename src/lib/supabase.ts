import { createClient } from "@supabase/supabase-js";


const supabaseUrl = 'credentials'
const supabaseAnonKey = 'credentials'

export const supabase = createClient(supabaseUrl, supabaseAnonKey);