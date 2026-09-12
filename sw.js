const CACHE = 'ruoxi-v1';
const SHELL = [
    './manifest.json',
    './locations.html',
    './index.html',
    './style.css',
    './script.js',
    './icons/icon-192.png',
    './icons/icon-512.png',
    './icons/maskable-512.png',
    './icons/apple-touch-icon.png',
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches
            .open(CACHE)
            .then((c) => c.addAll(SHELL))
            .then(() => self.skipWaiting()),
    );
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches
            .keys()
            .then((keys) =>
                Promise.all(
                    keys
                        .filter((k) => k !== CACHE)
                        .map((k) => caches.delete(k)),
                ),
            )
            .then(() => self.clients.claim()),
    );
});

self.addEventListener('fetch', (e) => {
    const req = e.request;
    if (req.method !== 'GET') return;

    const url = new URL(req.url);

    // 外部素材（图片/视频 CDN）：先走网络，失败时回退缓存
    if (url.origin !== self.location.origin) {
        e.respondWith(
            fetch(req)
                .then((res) => {
                    const copy = res.clone();
                    caches.open(CACHE).then((c) => c.put(req, copy));
                    return res;
                })
                .catch(() => caches.match(req)),
        );
        return;
    }

    // 同源页面与资源：缓存优先，后台更新（保证离线可玩）
    e.respondWith(
        caches.match(req).then((cached) => {
            const fresh = fetch(req)
                .then((res) => {
                    if (res && res.status === 200) {
                        const copy = res.clone();
                        caches.open(CACHE).then((c) => c.put(req, copy));
                    }
                    return res;
                })
                .catch(() => cached);
            return cached || fresh;
        }),
    );
});
