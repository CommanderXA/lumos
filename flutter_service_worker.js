'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"version.json": "6e6ba4db0620a7c10b7a2defa7894b5f",
"icons/Icon-maskable-512.png": "dc5cee0e74e3f9aac5c8f88b8a9751d8",
"icons/Icon-192.png": "afd39ce29aaa40fd26583b9c0200f79f",
"icons/Icon-maskable-192.png": "afd39ce29aaa40fd26583b9c0200f79f",
"icons/Icon-512.png": "dc5cee0e74e3f9aac5c8f88b8a9751d8",
"index.html": "eed6f1e5c447f04ca1a570099c168c69",
"/": "eed6f1e5c447f04ca1a570099c168c69",
"assets/icons/instagram.svg": "940c845d2d0cf5bbe22c6524e61ae80f",
"assets/icons/logo.svg": "b95eba74ffc62c978c057a214731e909",
"assets/icons/logo.png": "65ce3baade2e6876fa14ab930a8ce02e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/pictures/date_picker.svg": "51d42299322818aa83bb007126d3a244",
"assets/pictures/lessons_students_group.png": "0420d6e07382c461c6af9d026216c134",
"assets/pictures/phone.svg": "fa578ae8fcd93f6284967f7ef9b1dd17",
"assets/pictures/phone.png": "d9e040eb6391744dc01bc97f7b1ff0ca",
"assets/pictures/discuss.svg": "20005e01c0d5a36b6a2fb2e96007e2ee",
"assets/pictures/lessons_adults_group.png": "c0268047fb76372e7709f80fd0df6f73",
"assets/pictures/teacher_1.png": "bfea6349e6363d4c9834cb76f0d6c68f",
"assets/pictures/ielts_individual.png": "5468bdc245684baafeef1ead27c00fa0",
"assets/pictures/adults.svg": "82f1d5d728717f87d2990cb76b7b0f18",
"assets/pictures/date_picker.png": "3887189945bd154f52ea44ee87262aea",
"assets/pictures/5_number.png": "e1bfcdfa96ae17852ed99469ba372130",
"assets/pictures/student_group.svg": "ee8e5e19d9a5bf7ebea3bc7f7c715251",
"assets/pictures/1_number.png": "d686763bc4849fd0bd3917b854552085",
"assets/pictures/contact_us.svg": "6c1dd3fd5fa63bca0ed1e0a95cdfdbc4",
"assets/pictures/instagram.svg": "f3f61d4887e7c38c5748ee45e4df9ee5",
"assets/pictures/teacher.svg": "44928d549536fe4c1d64afcbee49d579",
"assets/pictures/ielts_group.png": "cfd03604202b1ac7ba402c0eb0e9e6ec",
"assets/pictures/students.svg": "efbc7f9b3f6465ed61cdc1ca90e35fa0",
"assets/pictures/teacher_2.png": "64f1df48b7dcbb7ca4ea2c822af61b3f",
"assets/pictures/speak.png": "5bb9bd249bba121c0e5ff44656819ab4",
"assets/pictures/home.svg": "b0f3fac54f9e32117ff26ecbf45a36e2",
"assets/pictures/tests.svg": "d36ef40b4b925bb1d3451c71c335174e",
"assets/pictures/lessons_individual.png": "4c03efad1e9775d16e0ab24edd357622",
"assets/pictures/home.png": "6cc9e0c16b30b1c09dadee32247da7d7",
"assets/pictures/teacher.png": "e47b44b754aac6a3e7861068d7bd4177",
"assets/pictures/20_number.png": "3a1c6dbf74b0d1a1c1c43af63fa14618",
"assets/pictures/individual.svg": "b434de4a63c753396b1b6e67dd975938",
"assets/pictures/discuss.png": "c3c0fd1d47294af80146679bbb3d477a",
"assets/pictures/instagram.png": "f687ffc61cb591728651a1d3d35d92e4",
"assets/pictures/positive_energy.png": "4f952a58a47c0872a52c0ebfceccf2dc",
"assets/pictures/positive_energy.svg": "0bb3ff591246498115fc24b547c02a7c",
"assets/pictures/classroom.jpg": "01b95e5db1a5d712877723558a7e95d0",
"assets/pictures/5_number_white.png": "3fbf5f6217f1c10b25e037014735ef3c",
"assets/NOTICES": "1fa822a4c0b9d66e23087f2e344029a5",
"assets/fonts/Montserrat/Montserrat-Black.ttf": "27e3649bab7c62fa21b8837c4842e40e",
"assets/fonts/Montserrat/Montserrat-ExtraBoldItalic.ttf": "52a50ca037f2f96fa567404dc3c5bdfb",
"assets/fonts/Montserrat/Montserrat-ExtraBold.ttf": "19ba7aa52a78c3896558ac1c0a5fb4c7",
"assets/fonts/Montserrat/Montserrat-Light.ttf": "409c7f79a42e56c785f50ed37535f0be",
"assets/fonts/Montserrat/Montserrat-BoldItalic.ttf": "1b38414956c666bd1df78fe5b9c84756",
"assets/fonts/Montserrat/Montserrat-SemiBoldItalic.ttf": "83c1ec1f1db9a6416791f7d9d29536f2",
"assets/fonts/Montserrat/Montserrat-ExtraLightItalic.ttf": "1170df5548b7e238df5fa14b6f1a753e",
"assets/fonts/Montserrat/Montserrat-ThinItalic.ttf": "3c2b290f95cd5b33c3ead2911064a2ab",
"assets/fonts/Montserrat/Montserrat-BlackItalic.ttf": "d9b6ba595b059fc5d48e8f52c30f73b3",
"assets/fonts/Montserrat/Montserrat-SemiBold.ttf": "c641dbee1d75892e4d88bdc31560c91b",
"assets/fonts/Montserrat/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/Montserrat/Montserrat-Medium.ttf": "c8b6e083af3f94009801989c3739425e",
"assets/fonts/Montserrat/Montserrat-ExtraLight.ttf": "570a244cacd3d78b8c75ac5dd622f537",
"assets/fonts/Montserrat/Montserrat-LightItalic.ttf": "01c4560c9c15069b6700ce7ad2e49a9c",
"assets/fonts/Montserrat/Montserrat-MediumItalic.ttf": "40a74702035bf9ef19053c84ce9a58b9",
"assets/fonts/Montserrat/Montserrat-Thin.ttf": "43dd5b7a3d277362d5e801e5353e3a01",
"assets/fonts/Montserrat/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/fonts/Montserrat/Montserrat-Italic.ttf": "a7063e0c0f0cb546ad45e9e24b27bd3b",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/AssetManifest.json": "fb1843b5588160996217566bd1566d3f",
"assets/FontManifest.json": "06a27f0f6457851df2d3638282dbea23",
"manifest.json": "82dee533b05c61fe7ffbb10de7877740",
"favicon.png": "fe1149a2a538781c87fc7d9a263bd7b0",
"main.dart.js": "f76fe168964d60553dd5dd92a7a7bb0e"
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
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
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
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
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
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
