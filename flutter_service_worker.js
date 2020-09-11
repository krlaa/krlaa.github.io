'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "678e5e019a79526d0fcca5e29f6e5f78",
".git/config": "f56a08038fbe7570b66b48dbb8d5a240",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "7b43f154cb85bf9ba79ca693b9b28c2d",
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
".git/index": "5c8f32e1921dfbc9328eb5585f5c2ea4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "67de99bd8ccddc077de6e8e436604c01",
".git/logs/refs/heads/master": "cde6acb971ebbbe294aac3c4a3da81d0",
".git/logs/refs/remotes/origin/master": "4e65aeccf2e40bd562dcd63a014dfc35",
".git/objects/02/5f58041f716629ae65fa0745c0a00add3a08e0": "ecbf5f5d858a228bc5ca20fcc0d865ba",
".git/objects/08/0ef6d5f78d4a51105c0216c2b4b384cb8daba9": "cc5960ae2b1b5f0509a3c2be06544098",
".git/objects/09/93a3ba7b6646a4fab0e81b80e895d0dc8f4118": "22885aa773cca7734f695e4745084a70",
".git/objects/0c/e9e1caae38bcbbbde322cf37b9940333d0bebc": "4ef9d7707ffed7991befddfc79d20818",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/11/eee871934c260ff558f2ae2fea814e111f1064": "3bc1897fa97b3996d2c894ad7f5560d3",
".git/objects/12/45c1ca5eccee496ca54c75265eb640d756a5fb": "652477e74148d8bc9b00174bdc322cad",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/16/9cadeb32aef6187113a37bb031336bc087b30f": "7522dbf9a3d9d97ccaa22047c9c2b87f",
".git/objects/18/6009116ac42b7aef5ec2ef57bb41ebc2673939": "4fb7fbeb12439cab9d27026a1bd79264",
".git/objects/1d/2f9d6f482297b7cb4108552e422c8cd7ba2b81": "4bf8c3031dbe6426d4ba93dc58437cff",
".git/objects/1f/038e34fa12cf3d1f0706d3495e5f10fa45b6dc": "8690ef0e83a28abf3d27da152ea28f27",
".git/objects/1f/ac8f2317a25b162c702acb5c407677a16a5872": "9cebd76e1417eb46a7cac3d0989b285d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/e8367b8e0be45b077ef64d147c1d878a8bc90d": "1a58bcebe82211a299e0aa0fb36c17f7",
".git/objects/2d/e7ec805a7d5fed503c7fce740b515946b31ee0": "dff74b84b1d351de64dc722af5412169",
".git/objects/2f/12017f6762026863b8a26f2c1737217362a5e8": "dbb9ed3bc53bd24e2610640561ca0ba8",
".git/objects/31/5357a36e6d5db3e408590c57f113497141349f": "cb86e74f12d4e9e2177d7e6e684b7637",
".git/objects/32/f58e5694881e34b012464e548d89fa5dc8cc60": "aeda691949e44f4c70655a1d01931f47",
".git/objects/38/247c6a237449ba14cf51822a9344e475213faa": "cd1e1acea7ce3bd01b07b287810c7492",
".git/objects/3b/46e5c3fd5d1fe0e1892f40617913bd1d0c6c5a": "a14ab88c885ed6261146c3e85ed7319d",
".git/objects/3f/30d3ab8188a5bc082afc134841c5bca408c71f": "f5c9483d6da95fe20166aae3dbff81bf",
".git/objects/40/e697e4703ea438d5a9f1864904e69321eade3b": "107004cf69ba71062d23b968a7efb691",
".git/objects/45/ceeb1eba0130d345db6287babe89dc860d4bda": "6614e88813f0d328fef0af0cbc4201b7",
".git/objects/4a/8cb452f91718343c4c78ed2689df66d183d6e7": "bceabbe32d279bb96475c26b2d1ca9e8",
".git/objects/4b/5015e3e8227d49bd5094ca2d0ea9fe6b29d56c": "937780eca8a02594ff6dfcab16f09573",
".git/objects/4f/e99ff66431b2be6d37084664e5495dc0ec6c7b": "30690b6f6d536a0751809b1d6cf48d87",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/57/0ad5d26f1c2f4a5e2b1a385b5828baaab4573d": "7a7ec1bc2368ab19c73d9eeb190361bd",
".git/objects/5c/edbdc05ef1eb02198d9d99fee1170d16df3f3f": "99416dbc45f79cacb43ef8db1166d20a",
".git/objects/62/69959616bac1911cb3e42ba19c04423eaec99e": "1e2b421293788ef106f1dc25fac15f32",
".git/objects/62/b2e0c70b1e673388860f99ede2b92f91d8b037": "0e13bbc51ec66e6423cc8ec84ccfe35d",
".git/objects/67/f620bc1acfef90fa0fad9c3915db8f8b70b707": "580d4af8eea9505eb4a51fe027719f2e",
".git/objects/68/838133975959af94fc9b7f953273f53f9ba3b1": "418b82ae1c201244f7e5953ba215b67f",
".git/objects/69/c2b45397f35eb3b2b1f988e39c58de4883c063": "1cc33ccc39b7f60864392c2df4d499ab",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/87/9959ca0da37e42a5634564a8286c2be5ffa61f": "ce8658c57683e462fa1641be52a3f66e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/73f7ef8f74dcd13fc85331cdec930448b1bb80": "2adf9e003a39b1568c968dc6efdcc333",
".git/objects/8c/de32bc7de8189a80f264d384ba049b0e03b319": "9612b8f749e46145b2a3c65b10edd779",
".git/objects/93/b7269aa8e2d88184f66e70d7fa7b916dc33b62": "572f2d07c6bd9c4f3eccdc18a1ed436d",
".git/objects/9f/1d7bb59c0cc78fb8c391c97e22c7dd61eb6c4f": "fd6431c228b1c7b4c3b6732cdf87ffbb",
".git/objects/9f/27fba8881312545c8e11ac8c03ceca40cfe687": "982a773ede3cb121217a08a24d5fc07d",
".git/objects/a5/21ad0dcd13a7336d902ad1f9a6c67c506a36eb": "aecbdc2179279839ef6e6d7344086588",
".git/objects/ab/920aee3fc102ff51e752e9151dec28844f1577": "6ce5c0a706fcd6dd5cea55c381098a49",
".git/objects/ad/19909073751f18f4d82aab304c2ce554a5d515": "39840e398d6868d6367177bba1a8ca1b",
".git/objects/b6/cb8fc2345b4ba57a4d00827591e46fdd5b0c99": "0d015297ebc547b1d4e6e58b12822786",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bc/5b5fcfdd366a10c62bfc332c0724f1b2b37fae": "c954259f439d79c9548c9ae5bfd4d690",
".git/objects/bd/4961134bd011012e0383c9891b75306d96556d": "03ab39bbd3411cf873181e2fda6e540c",
".git/objects/be/1747797d8531a6b84b5150653a5c8dc28825a2": "19745af16299c4af678f59975bcc5faf",
".git/objects/c0/2196459b36b659d444a7f2582bb9b760a6d555": "f3c442ee01c6f02c5b374c50bf6c90b8",
".git/objects/c0/363e21d257e4b404c835abb5b1049bf47e6fd9": "93c395bfa2cb879a6cbd0570d6cbc0a9",
".git/objects/c3/bcd29f712353d9d051c83159e5831eec970286": "51efaa3679a0cf9c9ebd64f2b05ebb2c",
".git/objects/c3/f266aba53a689207b63c7aec3843d10b6f9c07": "4ee37b42869869666eb1ea5efe3e95b4",
".git/objects/c4/35116125cdb15bd485eede3f45c517da2df862": "13d6bbb9db3ab1ec00fda6082256f661",
".git/objects/ca/34c11e195ace7dad0aa4984d056191bad85ee0": "776b09f450e9e0aea16fc37e063cc931",
".git/objects/cd/a13974c237b45ea61dba35dd99c5755f9a4efd": "cc59815211505b9827659294309f319c",
".git/objects/d6/17a06e39131dd5309ff2c0fa562814d4451095": "40a0eeaa6f34b30a5b4c4ebca0e92896",
".git/objects/d7/8b222afbf9bb9cb240075d8d99d03c20b3e476": "f4a03e46146512e0c102adb98fcf101a",
".git/objects/de/6f69aadd7a46305e9a740cf10105e9028a1823": "5dd42dd560fd4363335b23c5c8c86922",
".git/objects/de/95784e18ab074fc9ceb178b017c3589b27aa87": "20c9b72db17eeecc87cdb53dd4c40567",
".git/objects/e2/79e804bc9810c4a8422ec49ff287e43e730ecd": "3e1301dbe0ce5db663ce73ea27c0c842",
".git/objects/e2/b266c3ca32b6d62de441cbf1c798a42841d707": "faad37cc9b56d80d93f2acdb4119e0f7",
".git/objects/e5/97b2e6e23d59fcc096be4c3a6c01c8e90aff79": "73bbc479c34daae1144da2a39853fdc5",
".git/objects/e5/b16dd3417d9481b740006259907da1e1264851": "5afe85c5e9be2cf7d5ba86593ed12757",
".git/objects/e9/e2719cadc1e653160af5572bc29872c7f73952": "be3ade5c3954b26b714c908c8287c4db",
".git/objects/ec/dbf66a94ff9f48be2bd58b00b01ebf6c4cb1be": "ef5c6e263b082964af4ce3316cc05a22",
".git/objects/ee/0f90a52354930c3a4a29c2317c72c3e66c8fa0": "7933aa6f476d2b6053c8904d959ea7ad",
".git/objects/ef/7bd1f2d45a2c32b31d75f1c27d03e503d00070": "e57490bf31210bbb50ea1a24d8869367",
".git/objects/f1/2678444b72c314b04958a6ebffc7f2d08ef195": "ed485c5b499b40970ab428f2d0e3f00d",
".git/objects/f8/b1f903f2b2bf42693b6da3ca920d480e9034a5": "52576b6f0480e32d704d541513267d32",
".git/objects/f9/309988aeab3868040d3b322658902098eba27f": "56cc8f7a760e4c1e2ef57c994b973d0f",
".git/objects/fa/91fa6fe6c25b456b7c68ee31cc4bff378ce9b7": "88d5b85f5a15bc84a8321f88b9128e8a",
".git/objects/fc/b3daf1254a988f80bb8be2b6b5dd7cd84502b5": "b0b48b14d75b2b848c72ef974ef3aeef",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/master": "6e9aab14447532cb3c5fd16b32573950",
".git/refs/remotes/origin/master": "6e9aab14447532cb3c5fd16b32573950",
"assets/AssetManifest.json": "961f1e4e974edd975d27070042f4e4f4",
"assets/assets/fonts/googleFonts/Noto-Sans/Noto-Sans-400.ttf": "bd2d9f9933bcb72b40332679c5986cde",
"assets/assets/fonts/googleFonts/Noto-Sans/Noto-Sans-400i.ttf": "5514c14b6d17e9e04694c23943c2dc13",
"assets/assets/fonts/googleFonts/Noto-Sans/Noto-Sans-700.ttf": "ccd628f5306acb680b4c67878005a54f",
"assets/assets/fonts/googleFonts/Noto-Sans/Noto-Sans-700i.ttf": "89da07b08a63a77442541cd75580e551",
"assets/FontManifest.json": "db29f48447917dedccba0770e7bb5650",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/NOTICES": "8899e86c12590303abbd5c352d2ab4be",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "43c76d615a700e71fb82d0e9ae3d28de",
"/": "43c76d615a700e71fb82d0e9ae3d28de",
"main.dart.js": "7896abef5d92d6af0d91822982531af3",
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
