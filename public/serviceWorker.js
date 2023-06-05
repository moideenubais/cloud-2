const addResourcesToCache = async (resources) => {
    const cache = await caches.open("v1");
    await cache.addAll(resources);
};

this.addEventListener("install", (event) => {
    event.waitUntil(
        addResourcesToCache([
            "/",
            "/index.html",
            "/index.css",
            "/app.tsx",
        ])
    );
});

this.addEventListener("fetch", (event) => {
    console.log(`Handling fetch event for ${event.request.url}`);

    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                console.log("Found response in cache:", response);
                return response;
            }
            console.log("No response found in cache. About to fetch from network…");

            return fetch(event.request)
                .then((response) => {
                    console.log("Response from network is:", response);

                    return response;
                })
                .catch((error) => {
                    console.error(`Fetching failed: ${error}`);
                    throw error;
                });
        })
    );
});

this.addEventListener("activate", (event) => {
    const cacheAllowlist = ["v2"];

    event.waitUntil(
        caches.forEach((cache, cacheName) => {
            if (!cacheAllowlist.includes(cacheName)) {
                return caches.delete(cacheName);
            }
        })
    );
});


