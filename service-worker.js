if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"48a53665e9a5b7c3b812d5d6ba82ad13","url":"2607bfc30afc84ea4e21.worker.js"},{"revision":"109d7074b59d074960647c1d3a352584","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"109d7074b59d074960647c1d3a352584","url":"index.html"},{"revision":"9c86735e7dd67984f40a9d6607a8a9a5","url":"precache-manifest.9c86735e7dd67984f40a9d6607a8a9a5.js"},{"revision":"659fcbdcf1070cd596a9ed8ef5f80710","url":"static/css/15.aa9ef476.chunk.css"},{"revision":"d821572059e39b842a8ca128be7e6a5e","url":"static/js/0.7742e829.chunk.js"},{"revision":"d81ce1410bfad1ac24c347d8be373b9c","url":"static/js/1.0b419e02.chunk.js"},{"revision":"cd1d6da681e1d892fb7a552b7d42d7bd","url":"static/js/10.8707cdea.chunk.js"},{"revision":"59608f8e62c68b9e1a28f552c2a00544","url":"static/js/11.b408a968.chunk.js"},{"revision":"f810817ea2890e4d572c83dc19c3c178","url":"static/js/12.a3763889.chunk.js"},{"revision":"e31999987d9b07b2bac01d698b5be75f","url":"static/js/13.b37925d5.chunk.js"},{"revision":"52cb8e6d335611d22f8145a885f9b4fe","url":"static/js/14.1dedb3c3.chunk.js"},{"revision":"fb25803bdda6aaee92b9238c853dfe99","url":"static/js/15.7ba3dcc5.chunk.js"},{"revision":"e034898e20b1dbf27103c61dbd9fd105","url":"static/js/16.ad02159a.chunk.js"},{"revision":"b8239f0a7f530369c08395c5762c74ca","url":"static/js/17.f080e359.chunk.js"},{"revision":"70bd1ba2a53b793d2e9aaa876351b785","url":"static/js/18.82492edd.chunk.js"},{"revision":"01431f83ed56d6ae70f0ae4850802a62","url":"static/js/19.38a87f6c.chunk.js"},{"revision":"b1b16163e9892cf63112fc5de9b2d4e9","url":"static/js/2.50df0a76.chunk.js"},{"revision":"9bf7d1435aae89e59fe333b883a46246","url":"static/js/20.136c89f5.chunk.js"},{"revision":"8d7a466bb7160db25d56e74f159d333f","url":"static/js/21.b9198d41.chunk.js"},{"revision":"d4ba704abd8b1895eea50950ee672bd7","url":"static/js/22.368f52ef.chunk.js"},{"revision":"2758d907ccd31ae949ea0868a398e8dd","url":"static/js/23.464748c7.chunk.js"},{"revision":"f08596c03678c300e9c132975927bb0c","url":"static/js/24.1d3508c4.chunk.js"},{"revision":"1364d1a731704b5f9267e0e9020952dd","url":"static/js/25.302bbce2.chunk.js"},{"revision":"f4f239dca4265d918258250c7adea7b5","url":"static/js/26.08131a3e.chunk.js"},{"revision":"2eb825bae03ed439da99ceafbe797186","url":"static/js/27.3a482d44.chunk.js"},{"revision":"30cd4359b2432e1bf921855f6f1f4fae","url":"static/js/28.bce5f157.chunk.js"},{"revision":"8a9ca173400f19495230712882c9f482","url":"static/js/29.3a3ce018.chunk.js"},{"revision":"27b4db684c521f9a659ff6095bcfb271","url":"static/js/3.1a55f62c.chunk.js"},{"revision":"eb2b3ce26e10a7f5a4aecbdae36a7517","url":"static/js/30.f0506c87.chunk.js"},{"revision":"7ac56fcbd470e406ed4f1eb2f4ceaf34","url":"static/js/31.c22086b2.chunk.js"},{"revision":"85c4222163137a0ebfef2b4bd994ddb6","url":"static/js/32.f0a8f468.chunk.js"},{"revision":"d6630cb167d33bfc0b82ab1acb5653ac","url":"static/js/33.a74128a7.chunk.js"},{"revision":"51606518b6abbf0c637787a82190e39e","url":"static/js/34.a03ebe6e.chunk.js"},{"revision":"90b340e07faa72487784aa941f74d95b","url":"static/js/35.854c8608.chunk.js"},{"revision":"17fa14ee5e3410d84d8401a7b83e8aa7","url":"static/js/36.cb98354d.chunk.js"},{"revision":"4d0a502e05c2d3598401d45ffcd91d22","url":"static/js/37.1df2839e.chunk.js"},{"revision":"45a7a867113c14232056792f58af5d3c","url":"static/js/4.e73f9b04.chunk.js"},{"revision":"e3fa7f67ebc18b0b4477d12890a9a056","url":"static/js/5.ad370cba.chunk.js"},{"revision":"6745e7b8594101a5a8a68f1d4ffe4c65","url":"static/js/6.b8983222.chunk.js"},{"revision":"db8f9b8dc09199dbb151866104e5617c","url":"static/js/9.767838b5.chunk.js"},{"revision":"ac44a490942282c6e25ba874b617ea90","url":"static/js/main.940eeabe.chunk.js"},{"revision":"b5b91af7838604791676ea2cac7e349b","url":"static/js/runtime-main.77ab77ea.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://api\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
