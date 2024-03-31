import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ummrcakwdaeufujhnvrv.supabase.co';
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
