if(!self.define){let e,d={};const i=(i,c)=>(i=new URL(i+".js",c).href,d[i]||new Promise((d=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=d,document.head.appendChild(e)}else e=i,importScripts(i),d()})).then((()=>{let e=d[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(d[r])return;let b={};const n=e=>i(e,r),s={module:{uri:r},exports:b,require:n};d[r]=Promise.all(c.map((e=>s[e]||n(e)))).then((e=>(a(...e),b)))}}define(["./workbox-460519b3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.46cde3b8.png",revision:"ce93b7951ce7b72ff7b113252dbdd83e"},{url:"barcode-detector.module.08f05a63.js",revision:"e3a59eb8d941f3988e09afb0aa479d07"},{url:"barcode-detector.module.08f05a63.js.map",revision:"4d7eb24f014604cd4a9d36326dbceaf2"},{url:"barcode-detector.module.2b61079d.js",revision:"81f8af5faa283173578624936245a0e6"},{url:"barcode-detector.module.2b61079d.js.map",revision:"6b2a09af570039000fbb91abdc8cf494"},{url:"favicon.a05bdb0a.ico",revision:"ece89efb9e6bf43b4a1a4bddc3e6c0ee"},{url:"icon-large-maskable.efa0d40f.png",revision:"90b10ed172c97b3448628f121ea0aec7"},{url:"icon-large.7024db77.png",revision:"e5d0a8a61bad68e4acec2ef4ad4d8f7d"},{url:"icon-medium.870e37b4.png",revision:"3f7bc412b073051c392adb02a8a13713"},{url:"icon-small.3bde0630.png",revision:"bb3189391827df68dd02a6219f83e6ab"},{url:"index.14eb7412.js",revision:"9733c5a4240cd40a0a3f773773d06299"},{url:"index.14eb7412.js.map",revision:"48bcc5120cb07fa42c316ed6b6068192"},{url:"index.463ef8a1.css",revision:"5972d687e56e007ed2e2a14c7b3fc0a8"},{url:"index.463ef8a1.css.map",revision:"43f3cf37aea697fa08cfac2b599adcb0"},{url:"index.5fa12010.js",revision:"42231dbbcc1ea0328ca28157a2a57195"},{url:"index.5fa12010.js.map",revision:"918dfeec211c012b2f74b842f7946919"},{url:"index.84d098aa.js",revision:"31b3dbcaf6b1ff235919b9a9cd10e3f2"},{url:"index.84d098aa.js.map",revision:"4963b85430cdf416bd1622660b0e781f"},{url:"index.a1dc399e.js",revision:"0d2ac41cb8b1d8569d8685132a6088d2"},{url:"index.a1dc399e.js.map",revision:"b3ec12838d986ea96e01b457f340111f"},{url:"index.becfd11b.css",revision:"55a60313934dc512e544454ba0d0f51d"},{url:"index.becfd11b.css.map",revision:"f0cbc98288e6e686cd64007de6f11206"},{url:"index.html",revision:"8c477437b7478cc6429114cc5f43d763"},{url:"manifest.webmanifest",revision:"22d5fffa962208a7996cb6375c3e5b35"},{url:"screenshot-dark.da3644e7.png",revision:"a185ccb286400b21b0ec12b551892551"},{url:"screenshot-light.97caf2b4.png",revision:"044629d73b67c08307d03b32ed2e1a33"},{url:"spinner-dark.b333552b.svg",revision:"6cfd3a61069a549a059354e0ec0202dc"},{url:"spinner-light.4452ed29.svg",revision:"609c6274c68c19f6badaf5488b6aeef2"}],{})}));
//# sourceMappingURL=service-worker.js.map
