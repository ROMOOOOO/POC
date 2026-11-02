self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("message", (event) => {
  if (event.data === "CLAIM") {
    event.waitUntil(clients.claim());
  }
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
