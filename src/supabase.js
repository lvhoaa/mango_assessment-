import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ubsvhotpaahpncqqphzs.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVic3Zob3RwYWFocG5jcXFwaHpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQyNjA3MzEsImV4cCI6MjAxOTgzNjczMX0.lFGF5VQk5loe1xb5InyyfISXZ5pSg3TRcQuF1ZLwhH4';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
