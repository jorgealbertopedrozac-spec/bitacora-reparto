// Configuracion Supabase unificada - servidor de pruebas 09jun
window.SUPABASE_URL = 'https://whoecasgekueqasatjuh.supabase.co';
window.SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indob2VjYXNnZWt1ZXFhc2F0anVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEwMjAxNzQsImV4cCI6MjA5NjU5NjE3NH0.lZgXLuQFjfdsAMYWmjkScPhMDXrSQvgFfq0ntGP3K_Q';

if (window.supabase && !window._supabase) {
  window._supabase = window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_KEY);
}
