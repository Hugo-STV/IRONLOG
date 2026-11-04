// Peak offline cache: network first (bypassing the browser's HTTP cache so updates show right away), cache fallback.
const CACHE='ironlog-v10';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS.map(a=>new Request(a,{cache:'reload'})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const req=e.request;if(req.method!=='GET')return;const u=new URL(req.url);
  const same=u.origin===location.origin;const keep=same||u.href.includes('fonts.g')||u.href.includes('free-exercise-db');
  const fresh=same&&(req.mode==='navigate'||/\/$|\.(html|js|webmanifest)$/.test(u.pathname));
  e.respondWith((fresh?fetch(u.href,{cache:'no-store',credentials:'same-origin'}):fetch(req)).then(res=>{if(keep&&(res.ok||res.type==='opaque')){const copy=res.clone();caches.open(CACHE).then(c=>c.put(req,copy))}return res}).catch(()=>caches.match(req,{ignoreSearch:true}).then(r=>r||(req.mode==='navigate'?caches.match('./index.html'):undefined))));
});
