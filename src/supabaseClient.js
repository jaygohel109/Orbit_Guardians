// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gyuuddabomwvfhbghhdf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5dXVkZGFib213dmZoYmdoaGRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkwOTY3MzQsImV4cCI6MjAzNDY3MjczNH0.0AFf4CBIRf007AKYM-cAKJ3fUJqyxDaHDh_p3DSs89k';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
