if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/vue-xs-admin/sw.js', { scope: '/vue-xs-admin/' });
  });
}
