// Maakt de app installeerbaar. Er wordt niets bewaard: elke keer de nieuwste versie van internet.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  if (e.request.mode !== "navigate") return;
  e.respondWith(fetch(e.request).catch(() => new Response("<meta charset=utf-8><p style='font-family:sans-serif;padding:24px'>Geen internetverbinding. Probeer het opnieuw zodra je online bent.</p>", {headers: {"content-type": "text/html; charset=utf-8"}})));
});
