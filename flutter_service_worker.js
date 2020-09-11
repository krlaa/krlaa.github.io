'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b3bc47de7a8375680ba3272baaa5bc12",
".git/config": "06aaee34193be791af7d7da6e51a4576",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "5af390a64cabff3ffa8a6654341b40b2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "75569984702a0f5babf601b0aa941dfe",
".git/logs/refs/heads/master": "75569984702a0f5babf601b0aa941dfe",
".git/objects/02/5f58041f716629ae65fa0745c0a00add3a08e0": "ecbf5f5d858a228bc5ca20fcc0d865ba",
".git/objects/0c/e9e1caae38bcbbbde322cf37b9940333d0bebc": "4ef9d7707ffed7991befddfc79d20818",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/11/eee871934c260ff558f2ae2fea814e111f1064": "3bc1897fa97b3996d2c894ad7f5560d3",
".git/objects/12/45c1ca5eccee496ca54c75265eb640d756a5fb": "652477e74148d8bc9b00174bdc322cad",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1d/2f9d6f482297b7cb4108552e422c8cd7ba2b81": "4bf8c3031dbe6426d4ba93dc58437cff",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/31/5357a36e6d5db3e408590c57f113497141349f": "cb86e74f12d4e9e2177d7e6e684b7637",
".git/objects/38/247c6a237449ba14cf51822a9344e475213faa": "cd1e1acea7ce3bd01b07b287810c7492",
".git/objects/3f/30d3ab8188a5bc082afc134841c5bca408c71f": "f5c9483d6da95fe20166aae3dbff81bf",
".git/objects/40/e697e4703ea438d5a9f1864904e69321eade3b": "107004cf69ba71062d23b968a7efb691",
".git/objects/4a/8cb452f91718343c4c78ed2689df66d183d6e7": "bceabbe32d279bb96475c26b2d1ca9e8",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/62/b2e0c70b1e673388860f99ede2b92f91d8b037": "0e13bbc51ec66e6423cc8ec84ccfe35d",
".git/objects/67/f620bc1acfef90fa0fad9c3915db8f8b70b707": "580d4af8eea9505eb4a51fe027719f2e",
".git/objects/69/c2b45397f35eb3b2b1f988e39c58de4883c063": "1cc33ccc39b7f60864392c2df4d499ab",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/b7269aa8e2d88184f66e70d7fa7b916dc33b62": "572f2d07c6bd9c4f3eccdc18a1ed436d",
".git/objects/9f/1d7bb59c0cc78fb8c391c97e22c7dd61eb6c4f": "fd6431c228b1c7b4c3b6732cdf87ffbb",
".git/objects/9f/27fba8881312545c8e11ac8c03ceca40cfe687": "982a773ede3cb121217a08a24d5fc07d",
".git/objects/a5/21ad0dcd13a7336d902ad1f9a6c67c506a36eb": "aecbdc2179279839ef6e6d7344086588",
".git/objects/ad/19909073751f18f4d82aab304c2ce554a5d515": "39840e398d6868d6367177bba1a8ca1b",
".git/objects/b6/cb8fc2345b4ba57a4d00827591e46fdd5b0c99": "0d015297ebc547b1d4e6e58b12822786",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c3/bcd29f712353d9d051c83159e5831eec970286": "51efaa3679a0cf9c9ebd64f2b05ebb2c",
".git/objects/e5/97b2e6e23d59fcc096be4c3a6c01c8e90aff79": "73bbc479c34daae1144da2a39853fdc5",
".git/objects/e5/b16dd3417d9481b740006259907da1e1264851": "5afe85c5e9be2cf7d5ba86593ed12757",
".git/objects/ef/7bd1f2d45a2c32b31d75f1c27d03e503d00070": "e57490bf31210bbb50ea1a24d8869367",
".git/objects/f9/309988aeab3868040d3b322658902098eba27f": "56cc8f7a760e4c1e2ef57c994b973d0f",
".git/objects/fc/b3daf1254a988f80bb8be2b6b5dd7cd84502b5": "b0b48b14d75b2b848c72ef974ef3aeef",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/master": "5a9cd49f3a9c88f5facd8d0e196ed1e7",
"assets/AssetManifest.json": "3c43895a343f670f774394f9616a2f95",
"assets/assets/fonts/googleFonts/Noto-Sans/Noto-Sans-400.ttf": "bd2d9f9933bcb72b40332679c5986cde",
"assets/assets/fonts/googleFonts/Noto-Sans/Noto-Sans-400i.ttf": "5514c14b6d17e9e04694c23943c2dc13",
"assets/assets/fonts/googleFonts/Noto-Sans/Noto-Sans-700.ttf": "ccd628f5306acb680b4c67878005a54f",
"assets/assets/fonts/googleFonts/Noto-Sans/Noto-Sans-700i.ttf": "89da07b08a63a77442541cd75580e551",
"assets/FontManifest.json": "ec4f0501c3de50cf6a5b67da95498d7a",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/NOTICES": "6aeef9e54dfff9c22d43deab8fe61653",
"assets/packages/open_iconic_flutter/assets/open-iconic.woff": "3cf97837524dd7445e9d1462e3c4afe2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "20f5f887a19d1cfdafe9b7eb645c5ea1",
"/": "20f5f887a19d1cfdafe9b7eb645c5ea1",
"main.dart.js": "01e94ae3bf7a7b04a726ea82bc2ad151",
"manifest.json": "f9ed78ba6d026d4e2350da260df5f41c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a 'reload' param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'reload'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
