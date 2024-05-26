import { createClient } from '@supabase/supabase-js'

const db = createClient(
   'https://cywqucxcqlnevglvjvtb.supabase.co',
   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5d3F1Y3hjcWxuZXZnbHZqdnRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU0NDQ2ODcsImV4cCI6MjAzMTAyMDY4N30.aU8syUvmUd_CYjNZ3ZBoNe5N77aBglunvK_8ZWap1DM',
)

export default db
