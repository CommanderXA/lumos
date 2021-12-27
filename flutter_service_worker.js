'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "01d546cd86bf8670128e5a2493ec942f",
"icons/Icon-maskable-512.png": "dc5cee0e74e3f9aac5c8f88b8a9751d8",
"icons/Icon-192.png": "afd39ce29aaa40fd26583b9c0200f79f",
"icons/Icon-maskable-192.png": "afd39ce29aaa40fd26583b9c0200f79f",
"icons/Icon-512.png": "dc5cee0e74e3f9aac5c8f88b8a9751d8",
"index.html": "834732f71ea918901dd6da4072b4d94b",
"/": "834732f71ea918901dd6da4072b4d94b",
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
"manifest.json": "89829842732daae1c3a0185d090a16eb",
"favicon.png": "fe1149a2a538781c87fc7d9a263bd7b0",
".git/logs/HEAD": "5e134cc357d9a962c81fda92af4eb486",
".git/logs/refs/remotes/origin/main": "5cc830d1e7dee025c2399cb9a291d5b3",
".git/logs/refs/remotes/origin/HEAD": "5d41764f09c943400aa2a63e32644643",
".git/logs/refs/heads/main": "5e134cc357d9a962c81fda92af4eb486",
".git/index": "5136aa06718b7cee307d7dd64009cbe8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "7c8ae8c8c3c6382b0666268bdedb47cf",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/config": "f9b04c948facb2b89729b04c8ec037c3",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/objects/d0/c549ff49725fc0c3a010913e2705ce74a59d1f": "816da2fb38031f620bcad7ddc4513789",
".git/objects/d7/5db72290fb964f405917da433b6d02f3783464": "c2130fd1b2915ae51543d290e93f27eb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/fcecd88b2eaabce1848749bdb8585e9a599103": "52989098e3e81c05df902e070a032248",
".git/objects/f8/f036261bdc4023a3c47dfa0a2f4c207a97ca04": "fba4251a4d445f3bf313243d2f3fbcb5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/e5/5a4116d1afbe92dbd9a1ccfe7d3212ad8dea97": "133f93cdfa22070f1a88ff810971d068",
".git/objects/bf/3708a279f1b74a3d4e52f90e4da4bcda984919": "d1a405e33f762a6dc6292aaa0d4c3e5a",
".git/objects/0f/2e27bad2dc6e9302dc41cd960087a59341e9e4": "294c3abd6c618aa3d62616bbdf782ae6",
".git/objects/b8/a138b5bf89d22aae10592af76a9a2b5e3b1983": "ae89ba417aaf82b4502ae70576635057",
".git/objects/c8/a7a03621499c6607d8b87243200f4fba53e9a6": "130ddc3986dc4482aef28a2ff3192129",
".git/objects/fd/3a07c9a80406661cccd07dc212dfbecd6d5cc0": "44a1d9287430a3bc133ac7abc63c2674",
".git/objects/24/e5f444a26ab31f24f5555b973b417991d35bf3": "51dae2e78e3056e0a82f6388895183e6",
".git/objects/67/a80c95b6dd575fae51c13a60e7e0d607b7b002": "33ccc2f89e84bdee08adf2b317b4388e",
".git/objects/b1/fefd53cf850d09fb124d49af20b9750ecb5e85": "086e77921daa4929a1f850956817ec7f",
".git/objects/6f/84a936496e8253a4d156cfa4781652577a4563": "ecd6316a4812af9c96f269270313fdb1",
".git/objects/07/905a5792a2bb24c60826675def8270a1a1a677": "934582e7e5b4646d9bbff0302ceddad6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/31/19e0ba6eb08830c8fd7c7328823e55548d195f": "87667aa17a4cfc33ed130f024841a862",
".git/objects/1b/fc44e3802d43bf5938534d3aca3fb22eb12990": "24b4260aec1f7bf79d53667a19f3edc1",
".git/objects/pack/pack-e9758c732aae9d791f811d238730e0498e2dd159.idx": "38bad80ba6171414c89fbd3b4a89c09a",
".git/objects/pack/pack-e9758c732aae9d791f811d238730e0498e2dd159.pack": "7031884661c6f22fa42f12e57dd4df57",
".git/objects/35/b50abd562289f8ae308c5a432cf3fb416f4105": "e71d1d3e481c8dcad57f33033a64574c",
".git/objects/10/78a28e454891e9b3cee61c52aa2a0421f4227a": "83ea097bf38807826854f3fbc89d61f2",
".git/objects/a3/57301085a7bc8aa89f3645048d7131d5fd6ee3": "ebaf640f6332cf369424a2eac1f8159f",
".git/objects/5a/08863ece8a0b5dba76f774b0419055230abcb9": "9c030ccb01e3d356573c6f91e1c48a92",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/18/e1d4dcec5c9c56946c60231ee5d43791d5405d": "02476a75631e923d8c8fd7667472fd4a",
".git/objects/e2/b219c3e7d731ce525f860c6c7ef05ddf6b8c63": "85f597d2bb233fd9662305aa1f50b089",
".git/objects/06/06564445ff678d1dc5a1ddaa09ccfec675ee38": "3e44d1dd0aaa1eaf86e602ec56fc56a0",
".git/objects/14/64a57b9a8303c620bfb9d278a1f4a60c1f001f": "6161786c16a2d3145877e2755cd22591",
".git/objects/cb/ea8b7674695d4149b3f74c387c15e62308553b": "059a4c8f65c675885139c1d6124425f7",
".git/objects/f6/95e99346ae97cffc692e6cc492f385977ddca0": "9ad7fff829bfd8424a191e9dee9abaf9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/refs/remotes/origin/main": "89ac81c3315660f28a65004ca271c2e3",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/heads/main": "89ac81c3315660f28a65004ca271c2e3",
".git/packed-refs": "2e9fa889c3bc39c4671616bed0ade559",
"main.dart.js": "9dd6cfad34c262b4f8ed7add620db33a"
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
