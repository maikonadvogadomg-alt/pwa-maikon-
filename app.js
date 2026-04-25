// ─── PWA Install Prompt ───────────────────────
let deferredPrompt;
const installBtn = document.getElementById('install-btn');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.classList.remove('hidden');
});

installBtn?.addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  console.log('Instalação:', outcome);
  deferredPrompt = null;
  installBtn.classList.add('hidden');
});

window.addEventListener('appinstalled', () => {
  console.log('App instalado com sucesso!');
  installBtn.classList.add('hidden');
});

// ─── Offline / Online detection ───────────────
const offlineBar = document.getElementById('offline-bar');
const statusDot  = document.getElementById('status-dot');

function updateStatus() {
  const online = navigator.onLine;
  offlineBar.classList.toggle('hidden', online);
  statusDot.className = 'status-dot ' + (online ? 'online' : 'offline');
  statusDot.title = online ? 'Online' : 'Offline';
}
window.addEventListener('online', updateStatus);
window.addEventListener('offline', updateStatus);
updateStatus();

// ─── Service Worker ───────────────────────────
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(r => console.log('[SW] Registrado:', r.scope))
    .catch(e => console.warn('[SW] Erro:', e));
}

// ─── Contador com localStorage ────────────────
let count = parseInt(localStorage.getItem('pwa-count') || '0');
const display = document.getElementById('count');

function updateCount(n) {
  count = n;
  display.textContent = count;
  localStorage.setItem('pwa-count', count);
}

document.getElementById('inc')?.addEventListener('click', () => updateCount(count + 1));
document.getElementById('dec')?.addEventListener('click', () => updateCount(count - 1));
document.getElementById('reset')?.addEventListener('click', () => updateCount(0));
document.getElementById('refresh-btn')?.addEventListener('click', () => location.reload());

updateCount(count);