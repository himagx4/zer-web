const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/page-CmhcrPof.js","assets/with-props-C0eJ7TCF.js","assets/chunk-D4RADZKF-D37Lt8lI.js","assets/not-found-gRwbPWML.js"])))=>i.map(i=>d[i]);
import{r as y,R,e as _,j as P}from"./chunk-D4RADZKF-D37Lt8lI.js";import{r as w,a as S}from"./index-DgRhieeu.js";var i={},m;function C(){if(m)return i;m=1;var r=w();return i.createRoot=r.createRoot,i.hydrateRoot=r.hydrateRoot,i}var x=C();/**
 * react-router v7.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function g(r){return y.createElement(R,{flushSync:S.flushSync,...r})}const j="modulepreload",q=function(r){return"/"+r},f={},h=function(p,c,k){let l=Promise.resolve();if(c&&c.length>0){let n=function(t){return Promise.all(t.map(s=>Promise.resolve(s).then(a=>({status:"fulfilled",value:a}),a=>({status:"rejected",reason:a}))))};document.getElementsByTagName("link");const e=document.querySelector("meta[property=csp-nonce]"),d=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));l=n(c.map(t=>{if(t=q(t),t in f)return;f[t]=!0;const s=t.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${a}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":j,s||(o.as="script"),o.crossOrigin="",o.href=t,d&&o.setAttribute("nonce",d),document.head.appendChild(o),s)return new Promise((E,v)=>{o.addEventListener("load",E),o.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${t}`)))})}))}function u(n){const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=n,window.dispatchEvent(e),!e.defaultPrevented)throw n}return l.then(n=>{for(const e of n||[])e.status==="rejected"&&u(e.reason);return p().catch(u)})},L=[{path:"/",lazy:async()=>({Component:(await h(()=>import("./page-CmhcrPof.js"),__vite__mapDeps([0,1,2]))).default})},{path:"*",lazy:async()=>({Component:(await h(()=>import("./not-found-gRwbPWML.js"),__vite__mapDeps([3,1,2]))).default})}],b=_(L);x.hydrateRoot(document,P.jsx(g,{router:b}));
