window.APP_VERSION = 'v2026.05.16.1';
window.SUPABASE_URL = 'https://xjckzbegtvianurfvubp.supabase.co';
window.SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqY2t6YmVndHZpYW51cmZ2dWJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcxOTYzMzUsImV4cCI6MjA4Mjc3MjMzNX0.64zrKi0p1KiDwtBODLRf8O4sRvnn0o9QyoQUYHvVFd0';

if (window.supabase && typeof window.supabase.createClient === 'function') {
  window._supabase = window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_KEY);
}

(function renderVersionBadge() {
  function applyBadge() {
    if (document.getElementById('app-version-badge')) return;

    const badge = document.createElement('div');
    badge.id = 'app-version-badge';
    badge.textContent = window.APP_VERSION || '';

    badge.style.position = 'fixed';
    badge.style.top = 'auto';
    badge.style.bottom = '10px';
    badge.style.right = '10px';
    badge.style.zIndex = '900';
    badge.style.fontFamily = 'Segoe UI, sans-serif';
    badge.style.fontSize = '10px';
    badge.style.lineHeight = '1';
    badge.style.padding = '4px 8px';
    badge.style.borderRadius = '999px';
    badge.style.background = 'rgba(44, 62, 80, 0.08)';
    badge.style.color = 'rgba(44, 62, 80, 0.75)';
    badge.style.border = '1px solid rgba(44, 62, 80, 0.12)';
    badge.style.backdropFilter = 'blur(4px)';
    badge.style.pointerEvents = 'none';
    badge.style.userSelect = 'none';

    const path = (window.location.pathname || '').toLowerCase();
    const isEvaluacion = path.includes('evaluacion.html');

    if (isEvaluacion) {
      badge.style.bottom = '95px';
    }

    document.body.appendChild(badge);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyBadge);
  } else {
    applyBadge();
  }
})();
