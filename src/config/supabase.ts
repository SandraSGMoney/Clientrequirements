import { createClient } from '@supabase/supabase-js';

// Replace these with your actual Supabase project credentials
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://zdkpicdjltypskmylfvh.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpka3BpY2RqbHR5cHNrbXlsZnZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEzMTI4NzUsImV4cCI6MjA3Njg4ODg3NX0.ANmzVw0LxG_8Zyg8IaSeHsmkspaaNXJCqyyV_sBljR8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
