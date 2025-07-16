var zd=Object.defineProperty;var qd=(n,e,t)=>e in n?zd(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Kt=(n,e,t)=>qd(n,typeof e!="symbol"?e+"":e,t);import{checkSyncNeed as Vd}from"https://xt8ss.github.io/ff-site-data/data-sync.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function oe(){}const Vr=n=>n;function ln(n,e){for(const t in e)n[t]=e[t];return n}function K0(n){return n()}function Ya(){return Object.create(null)}function Te(n){n.forEach(K0)}function Pn(n){return typeof n=="function"}function Se(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let ri;function An(n,e){return n===e?!0:(ri||(ri=document.createElement("a")),ri.href=e,n===ri.href)}function jd(n){return Object.keys(n).length===0}function Y0(n,...e){if(n==null){for(const r of e)r(void 0);return oe}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Gd(n){let e;return Y0(n,t=>e=t)(),e}function xe(n,e,t){n.$$.on_destroy.push(Y0(e,t))}function pe(n,e,t){return n.set(t),e}function $d(n){return n&&Pn(n.destroy)?n.destroy:oe}const Q0=typeof window<"u";let zi=Q0?()=>window.performance.now():()=>Date.now(),Ho=Q0?n=>requestAnimationFrame(n):oe;const Gn=new Set;function X0(n){Gn.forEach(e=>{e.c(n)||(Gn.delete(e),e.f())}),Gn.size!==0&&Ho(X0)}function qi(n){let e;return Gn.size===0&&Ho(X0),{promise:new Promise(t=>{Gn.add(e={c:n,f:t})}),abort(){Gn.delete(e)}}}const Kd=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function w(n,e){n.appendChild(e)}function J0(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function Yd(n){const e=T("style");return e.textContent="/* empty */",Qd(J0(n),e),e.sheet}function Qd(n,e){return w(n.head||n,e),e.sheet}function B(n,e,t){n.insertBefore(e,t||null)}function R(n){n.parentNode&&n.parentNode.removeChild(n)}function dt(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function T(n){return document.createElement(n)}function Xd(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function K(n){return document.createTextNode(n)}function z(){return K(" ")}function Ct(){return K("")}function le(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function S(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}const Jd=["width","height"];function In(n,e){const t=Object.getOwnPropertyDescriptors(n.__proto__);for(const r in e)e[r]==null?n.removeAttribute(r):r==="style"?n.style.cssText=e[r]:r==="__value"?n.value=n[r]=e[r]:t[r]&&t[r].set&&Jd.indexOf(r)===-1?n[r]=e[r]:S(n,r,e[r])}function Zd(n,e){Object.keys(e).forEach(t=>{ge(n,t,e[t])})}function ge(n,e,t){const r=e.toLowerCase();r in n?n[r]=typeof n[r]=="boolean"&&t===""?!0:t:e in n?n[e]=typeof n[e]=="boolean"&&t===""?!0:t:S(n,e,t)}function Z0(n){return/-/.test(n)?Zd:In}function eh(n){return Array.from(n.childNodes)}function de(n,e){e=""+e,n.data!==e&&(n.data=e)}function ht(n,e){n.value=e??""}function ke(n,e,t,r){t==null?n.style.removeProperty(e):n.style.setProperty(e,t,"")}function ye(n,e,t){n.classList.toggle(e,!!t)}function eu(n,e,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:r})}class Vi{constructor(e=!1){Kt(this,"is_svg",!1);Kt(this,"e");Kt(this,"n");Kt(this,"t");Kt(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,r=null){this.e||(this.is_svg?this.e=Xd(t.nodeName):this.e=T(t.nodeType===11?"TEMPLATE":t.nodeName),this.t=t.tagName!=="TEMPLATE"?t:t.content,this.c(e)),this.i(r)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)B(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(R)}}function Qa(n,e){return new n(e)}const gi=new Map;let xi=0;function th(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function nh(n,e){const t={stylesheet:Yd(e),rules:{}};return gi.set(n,t),t}function kr(n,e,t,r,i,s,o,a=0){const l=16.666/r;let c=`{
`;for(let x=0;x<=1;x+=l){const v=e+(t-e)*s(x);c+=x*100+`%{${o(v,1-v)}}
`}const u=c+`100% {${o(t,1-t)}}
}`,f=`__svelte_${th(u)}_${a}`,d=J0(n),{stylesheet:h,rules:_}=gi.get(d)||nh(d,n);_[f]||(_[f]=!0,h.insertRule(`@keyframes ${f} ${u}`,h.cssRules.length));const p=n.style.animation||"";return n.style.animation=`${p?`${p}, `:""}${f} ${r}ms linear ${i}ms 1 both`,xi+=1,f}function Tr(n,e){const t=(n.style.animation||"").split(", "),r=t.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),i=t.length-r.length;i&&(n.style.animation=r.join(", "),xi-=i,xi||rh())}function rh(){Ho(()=>{xi||(gi.forEach(n=>{const{ownerNode:e}=n.stylesheet;e&&R(e)}),gi.clear())})}function ih(n,e,t,r){if(!e)return oe;const i=n.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return oe;const{delay:s=0,duration:o=300,easing:a=Vr,start:l=zi()+s,end:c=l+o,tick:u=oe,css:f}=t(n,{from:e,to:i},r);let d=!0,h=!1,_;function p(){f&&(_=kr(n,0,1,o,s,a,f)),s||(h=!0)}function x(){f&&Tr(n,_),d=!1}return qi(v=>{if(!h&&v>=l&&(h=!0),h&&v>=c&&(u(1,0),x()),!d)return!1;if(h){const m=v-l,g=0+1*a(m/o);u(g,1-g)}return!0}),p(),u(0,1),x}function sh(n){const e=getComputedStyle(n);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:r}=e,i=n.getBoundingClientRect();n.style.position="absolute",n.style.width=t,n.style.height=r,tu(n,i)}}function tu(n,e){const t=n.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const r=getComputedStyle(n),i=r.transform==="none"?"":r.transform;n.style.transform=`${i} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}let Sr;function vr(n){Sr=n}function nu(){if(!Sr)throw new Error("Function called outside component initialization");return Sr}function oh(n){nu().$$.on_mount.push(n)}function ru(){const n=nu();return(e,t,{cancelable:r=!1}={})=>{const i=n.$$.callbacks[e];if(i){const s=eu(e,t,{cancelable:r});return i.slice().forEach(o=>{o.call(n,s)}),!s.defaultPrevented}return!0}}const Wn=[],yr=[];let $n=[];const Xa=[],ah=Promise.resolve();let uo=!1;function lh(){uo||(uo=!0,ah.then(iu))}function rt(n){$n.push(n)}const ls=new Set;let Un=0;function iu(){if(Un!==0)return;const n=Sr;do{try{for(;Un<Wn.length;){const e=Wn[Un];Un++,vr(e),ch(e.$$)}}catch(e){throw Wn.length=0,Un=0,e}for(vr(null),Wn.length=0,Un=0;yr.length;)yr.pop()();for(let e=0;e<$n.length;e+=1){const t=$n[e];ls.has(t)||(ls.add(t),t())}$n.length=0}while(Wn.length);for(;Xa.length;)Xa.pop()();uo=!1,ls.clear(),vr(n)}function ch(n){if(n.fragment!==null){n.update(),Te(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(rt)}}function uh(n){const e=[],t=[];$n.forEach(r=>n.indexOf(r)===-1?e.push(r):t.push(r)),t.forEach(r=>r()),$n=e}let fr;function Wo(){return fr||(fr=Promise.resolve(),fr.then(()=>{fr=null})),fr}function wn(n,e,t){n.dispatchEvent(eu(`${e?"intro":"outro"}${t}`))}const li=new Set;let bt;function Re(){bt={r:0,c:[],p:bt}}function Fe(){bt.r||Te(bt.c),bt=bt.p}function Y(n,e){n&&n.i&&(li.delete(n),n.i(e))}function ee(n,e,t,r){if(n&&n.o){if(li.has(n))return;li.add(n),bt.c.push(()=>{li.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}else r&&r()}const zo={duration:0};function fh(n,e,t){const r={direction:"in"};let i=e(n,t,r),s=!1,o,a,l=0;function c(){o&&Tr(n,o)}function u(){const{delay:d=0,duration:h=300,easing:_=Vr,tick:p=oe,css:x}=i||zo;x&&(o=kr(n,0,1,h,d,_,x,l++)),p(0,1);const v=zi()+d,m=v+h;a&&a.abort(),s=!0,rt(()=>wn(n,!0,"start")),a=qi(g=>{if(s){if(g>=m)return p(1,0),wn(n,!0,"end"),c(),s=!1;if(g>=v){const y=_((g-v)/h);p(y,1-y)}}return s})}let f=!1;return{start(){f||(f=!0,Tr(n),Pn(i)?(i=i(r),Wo().then(u)):u())},invalidate(){f=!1},end(){s&&(c(),s=!1)}}}function dh(n,e,t){const r={direction:"out"};let i=e(n,t,r),s=!0,o;const a=bt;a.r+=1;let l;function c(){const{delay:u=0,duration:f=300,easing:d=Vr,tick:h=oe,css:_}=i||zo;_&&(o=kr(n,1,0,f,u,d,_));const p=zi()+u,x=p+f;rt(()=>wn(n,!1,"start")),"inert"in n&&(l=n.inert,n.inert=!0),qi(v=>{if(s){if(v>=x)return h(0,1),wn(n,!1,"end"),--a.r||Te(a.c),!1;if(v>=p){const m=d((v-p)/f);h(1-m,m)}}return s})}return Pn(i)?Wo().then(()=>{i=i(r),c()}):c(),{end(u){u&&"inert"in n&&(n.inert=l),u&&i.tick&&i.tick(1,0),s&&(o&&Tr(n,o),s=!1)}}}function ft(n,e,t,r){let s=e(n,t,{direction:"both"}),o=r?0:1,a=null,l=null,c=null,u;function f(){c&&Tr(n,c)}function d(_,p){const x=_.b-o;return p*=Math.abs(x),{a:o,b:_.b,d:x,duration:p,start:_.start,end:_.start+p,group:_.group}}function h(_){const{delay:p=0,duration:x=300,easing:v=Vr,tick:m=oe,css:g}=s||zo,y={start:zi()+p,b:_};_||(y.group=bt,bt.r+=1),"inert"in n&&(_?u!==void 0&&(n.inert=u):(u=n.inert,n.inert=!0)),a||l?l=y:(g&&(f(),c=kr(n,o,_,x,p,v,g)),_&&m(0,1),a=d(y,x),rt(()=>wn(n,_,"start")),qi(E=>{if(l&&E>l.start&&(a=d(l,x),l=null,wn(n,a.b,"start"),g&&(f(),c=kr(n,o,a.b,a.duration,0,v,s.css))),a){if(E>=a.end)m(o=a.b,1-o),wn(n,a.b,"end"),l||(a.b?f():--a.group.r||Te(a.group.c)),a=null;else if(E>=a.start){const b=E-a.start;o=a.a+a.d*v(b/a.duration),m(o,1-o)}}return!!(a||l)}))}return{run(_){Pn(s)?Wo().then(()=>{s=s({direction:_?"in":"out"}),h(_)}):h(_)},end(){f(),a=l=null}}}function be(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function hh(n,e){ee(n,1,1,()=>{e.delete(n.key)})}function ph(n,e){n.f(),hh(n,e)}function _h(n,e,t,r,i,s,o,a,l,c,u,f){let d=n.length,h=s.length,_=d;const p={};for(;_--;)p[n[_].key]=_;const x=[],v=new Map,m=new Map,g=[];for(_=h;_--;){const I=f(i,s,_),C=t(I);let F=o.get(C);F?g.push(()=>F.p(I,e)):(F=c(C,I),F.c()),v.set(C,x[_]=F),C in p&&m.set(C,Math.abs(_-p[C]))}const y=new Set,E=new Set;function b(I){Y(I,1),I.m(a,u),o.set(I.key,I),u=I.first,h--}for(;d&&h;){const I=x[h-1],C=n[d-1],F=I.key,A=C.key;I===C?(u=I.first,d--,h--):v.has(A)?!o.has(F)||y.has(F)?b(I):E.has(A)?d--:m.get(F)>m.get(A)?(E.add(F),b(I)):(y.add(A),d--):(l(C,o),d--)}for(;d--;){const I=n[d];v.has(I.key)||l(I,o)}for(;h;)b(x[h-1]);return Te(g),x}function cn(n,e){const t={},r={},i={$$scope:1};let s=n.length;for(;s--;){const o=n[s],a=e[s];if(a){for(const l in o)l in a||(r[l]=1);for(const l in a)i[l]||(t[l]=a[l],i[l]=1);n[s]=a}else for(const l in o)i[l]=1}for(const o in r)o in t||(t[o]=void 0);return t}function Dr(n){return typeof n=="object"&&n!==null?n:{}}function it(n){n&&n.c()}function Xe(n,e,t){const{fragment:r,after_update:i}=n.$$;r&&r.m(e,t),rt(()=>{const s=n.$$.on_mount.map(K0).filter(Pn);n.$$.on_destroy?n.$$.on_destroy.push(...s):Te(s),n.$$.on_mount=[]}),i.forEach(rt)}function Je(n,e){const t=n.$$;t.fragment!==null&&(uh(t.after_update),Te(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function mh(n,e){n.$$.dirty[0]===-1&&(Wn.push(n),lh(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function We(n,e,t,r,i,s,o=null,a=[-1]){const l=Sr;vr(n);const c=n.$$={fragment:null,ctx:[],props:s,update:oe,not_equal:i,bound:Ya(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Ya(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(f,d,...h)=>{const _=h.length?h[0]:d;return c.ctx&&i(c.ctx[f],c.ctx[f]=_)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](_),u&&mh(n,f)),d}):[],c.update(),u=!0,Te(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){const f=eh(e.target);c.fragment&&c.fragment.l(f),f.forEach(R)}else c.fragment&&c.fragment.c();e.intro&&Y(n.$$.fragment),Xe(n,e.target,e.anchor),iu()}vr(l)}class ze{constructor(){Kt(this,"$$");Kt(this,"$$set")}$destroy(){Je(this,1),this.$destroy=oe}$on(e,t){if(!Pn(t))return oe;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const i=r.indexOf(t);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!jd(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const gh="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(gh);const Hn=[];function pt(n,e=oe){let t;const r=new Set;function i(a){if(Se(n,a)&&(n=a,t)){const l=!Hn.length;for(const c of r)c[1](),Hn.push(c,n);if(l){for(let c=0;c<Hn.length;c+=2)Hn[c][0](Hn[c+1]);Hn.length=0}}}function s(a){i(a(n))}function o(a,l=oe){const c=[a,l];return r.add(c),r.size===1&&(t=e(i,s)||oe),a(n),()=>{r.delete(c),r.size===0&&t&&(t(),t=null)}}return{set:i,update:s,subscribe:o}}var Ja={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V=function(n,e){if(!n)throw rr(e)},rr=function(n){return new Error("Firebase Database ("+su.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},xh=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},qo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,u=s>>2,f=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,h=c&63;l||(h=64,o||(d=64)),r.push(t[u],t[f],t[d],t[h])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ou(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):xh(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const f=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new vh;const d=s<<2|a>>4;if(r.push(d),c!==64){const h=a<<4&240|c>>2;if(r.push(h),f!==64){const _=c<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class vh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const au=function(n){const e=ou(n);return qo.encodeByteArray(e,!0)},vi=function(n){return au(n).replace(/\./g,"")},yi=function(n){try{return qo.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(n){return lu(void 0,n)}function lu(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Eh(t)||(n[t]=lu(n[t],e[t]));return n}function Eh(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh=()=>Ch().__FIREBASE_DEFAULTS__,wh=()=>{if(typeof process>"u"||typeof Ja>"u")return;const n=Ja.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ah=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&yi(n[1]);return e&&JSON.parse(e)},Vo=()=>{try{return bh()||wh()||Ah()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},cu=n=>{var e,t;return(t=(e=Vo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Ih=n=>{const e=cu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},uu=()=>{var n;return(n=Vo())===null||n===void 0?void 0:n.config},fu=n=>{var e;return(e=Vo())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[vi(JSON.stringify(t)),vi(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function Th(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Sh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function du(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dh(){const n=Ze();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Rh(){return su.NODE_ADMIN===!0}function Fh(){try{return typeof indexedDB=="object"}catch{return!1}}function Bh(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph="FirebaseError";class pn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Ph,Object.setPrototypeOf(this,pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jr.prototype.create)}}class jr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Nh(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new pn(i,a,r)}}function Nh(n,e){return n.replace(Oh,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Oh=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(n){return JSON.parse(n)}function Be(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu=function(n){let e={},t={},r={},i="";try{const s=n.split(".");e=Rr(yi(s[0])||""),t=Rr(yi(s[1])||""),i=s[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:i}},Lh=function(n){const e=hu(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Mh=function(n){const e=hu(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Zn(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function fo(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ei(n,e,t){const r={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=e.call(t,n[i],i,n));return r}function Ci(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Za(s)&&Za(o)){if(!Ci(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Za(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function gr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function xr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let f=0;f<16;f++)r[f]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let f=16;f<80;f++){const d=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):f<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+r[f]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<t;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Hh(n,e){const t=new Wh(n,e);return t.subscribe.bind(t)}class Wh{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");zh(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=cs),i.error===void 0&&(i.error=cs),i.complete===void 0&&(i.complete=cs);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zh(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function cs(){}function Go(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,V(r<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Gi=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(n){return n&&n._delegate?n._delegate:n}class kn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new ji;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gh(e))try{this.getOrInitializeService({instanceIdentifier:vn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=vn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vn){return this.instances.has(e)}getOptions(e=vn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jh(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vn){return this.component?this.component.multipleInstances?e:vn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jh(n){return n===vn?void 0:n}function Gh(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Vh(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ve||(ve={}));const Kh={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},Yh=ve.INFO,Qh={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},Xh=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Qh[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $o{constructor(e){this.name=e,this._logLevel=Yh,this._logHandler=Xh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Kh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const Jh=(n,e)=>e.some(t=>n instanceof t);let el,tl;function Zh(){return el||(el=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ep(){return tl||(tl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pu=new WeakMap,ho=new WeakMap,_u=new WeakMap,us=new WeakMap,Ko=new WeakMap;function tp(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(tn(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&pu.set(t,n)}).catch(()=>{}),Ko.set(e,n),e}function np(n){if(ho.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});ho.set(n,e)}let po={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ho.get(n);if(e==="objectStoreNames")return n.objectStoreNames||_u.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return tn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function rp(n){po=n(po)}function ip(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(fs(this),e,...t);return _u.set(r,e.sort?e.sort():[e]),tn(r)}:ep().includes(n)?function(...e){return n.apply(fs(this),e),tn(pu.get(this))}:function(...e){return tn(n.apply(fs(this),e))}}function sp(n){return typeof n=="function"?ip(n):(n instanceof IDBTransaction&&np(n),Jh(n,Zh())?new Proxy(n,po):n)}function tn(n){if(n instanceof IDBRequest)return tp(n);if(us.has(n))return us.get(n);const e=sp(n);return e!==n&&(us.set(n,e),Ko.set(e,n)),e}const fs=n=>Ko.get(n);function op(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=tn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(tn(o.result),l.oldVersion,l.newVersion,tn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const ap=["get","getKey","getAll","getAllKeys","count"],lp=["put","add","delete","clear"],ds=new Map;function nl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ds.get(e))return ds.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=lp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ap.includes(t)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return ds.set(e,s),s}rp(n=>({...n,get:(e,t,r)=>nl(e,t)||n.get(e,t,r),has:(e,t)=>!!nl(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(up(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function up(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _o="@firebase/app",rl="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht=new $o("@firebase/app"),fp="@firebase/app-compat",dp="@firebase/analytics-compat",hp="@firebase/analytics",pp="@firebase/app-check-compat",_p="@firebase/app-check",mp="@firebase/auth",gp="@firebase/auth-compat",xp="@firebase/database",vp="@firebase/data-connect",yp="@firebase/database-compat",Ep="@firebase/functions",Cp="@firebase/functions-compat",bp="@firebase/installations",wp="@firebase/installations-compat",Ap="@firebase/messaging",Ip="@firebase/messaging-compat",kp="@firebase/performance",Tp="@firebase/performance-compat",Sp="@firebase/remote-config",Dp="@firebase/remote-config-compat",Rp="@firebase/storage",Fp="@firebase/storage-compat",Bp="@firebase/firestore",Pp="@firebase/vertexai",Np="@firebase/firestore-compat",Op="firebase",Lp="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo="[DEFAULT]",Mp={[_o]:"fire-core",[fp]:"fire-core-compat",[hp]:"fire-analytics",[dp]:"fire-analytics-compat",[_p]:"fire-app-check",[pp]:"fire-app-check-compat",[mp]:"fire-auth",[gp]:"fire-auth-compat",[xp]:"fire-rtdb",[vp]:"fire-data-connect",[yp]:"fire-rtdb-compat",[Ep]:"fire-fn",[Cp]:"fire-fn-compat",[bp]:"fire-iid",[wp]:"fire-iid-compat",[Ap]:"fire-fcm",[Ip]:"fire-fcm-compat",[kp]:"fire-perf",[Tp]:"fire-perf-compat",[Sp]:"fire-rc",[Dp]:"fire-rc-compat",[Rp]:"fire-gcs",[Fp]:"fire-gcs-compat",[Bp]:"fire-fst",[Np]:"fire-fst-compat",[Pp]:"fire-vertex","fire-js":"fire-js",[Op]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=new Map,Up=new Map,go=new Map;function il(n,e){try{n.container.addComponent(e)}catch(t){Ht.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function er(n){const e=n.name;if(go.has(e))return Ht.debug(`There were multiple attempts to register component ${e}.`),!1;go.set(e,n);for(const t of bi.values())il(t,n);for(const t of Up.values())il(t,n);return!0}function Yo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function wt(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},nn=new jr("app","Firebase",Hp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=Lp;function mu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:mo,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw nn.create("bad-app-name",{appName:String(i)});if(t||(t=uu()),!t)throw nn.create("no-options");const s=bi.get(i);if(s){if(Ci(t,s.options)&&Ci(r,s.config))return s;throw nn.create("duplicate-app",{appName:i})}const o=new $h(i);for(const l of go.values())o.addComponent(l);const a=new Wp(t,r,o);return bi.set(i,a),a}function Qo(n=mo){const e=bi.get(n);if(!e&&n===mo&&uu())return mu();if(!e)throw nn.create("no-app",{appName:n});return e}function rn(n,e,t){var r;let i=(r=Mp[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ht.warn(a.join(" "));return}er(new kn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp="firebase-heartbeat-database",qp=1,Fr="firebase-heartbeat-store";let hs=null;function gu(){return hs||(hs=op(zp,qp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Fr)}catch(t){console.warn(t)}}}}).catch(n=>{throw nn.create("idb-open",{originalErrorMessage:n.message})})),hs}async function Vp(n){try{const t=(await gu()).transaction(Fr),r=await t.objectStore(Fr).get(xu(n));return await t.done,r}catch(e){if(e instanceof pn)Ht.warn(e.message);else{const t=nn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ht.warn(t.message)}}}async function sl(n,e){try{const r=(await gu()).transaction(Fr,"readwrite");await r.objectStore(Fr).put(e,xu(n)),await r.done}catch(t){if(t instanceof pn)Ht.warn(t.message);else{const r=nn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ht.warn(r.message)}}}function xu(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp=1024,Gp=30*24*60*60*1e3;class $p{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Yp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ol();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Gp}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ht.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ol(),{heartbeatsToSend:r,unsentEntries:i}=Kp(this._heartbeatsCache.heartbeats),s=vi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Ht.warn(t),""}}}function ol(){return new Date().toISOString().substring(0,10)}function Kp(n,e=jp){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),al(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),al(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Yp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fh()?Bh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Vp(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return sl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return sl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function al(n){return vi(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(n){er(new kn("platform-logger",e=>new cp(e),"PRIVATE")),er(new kn("heartbeat",e=>new $p(e),"PRIVATE")),rn(_o,rl,n),rn(_o,rl,"esm2017"),rn("fire-js","")}Qp("");var Xp="firebase",Jp="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn(Xp,Jp,"app");function Xo(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function vu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Zp=vu,yu=new jr("auth","Firebase",vu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new $o("@firebase/auth");function e_(n,...e){wi.logLevel<=ve.WARN&&wi.warn(`Auth (${sr}): ${n}`,...e)}function ci(n,...e){wi.logLevel<=ve.ERROR&&wi.error(`Auth (${sr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(n,...e){throw Jo(n,...e)}function It(n,...e){return Jo(n,...e)}function Eu(n,e,t){const r=Object.assign(Object.assign({},Zp()),{[e]:t});return new jr("auth","Firebase",r).create(e,{appName:n.name})}function Mt(n){return Eu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Jo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return yu.create(n,...e)}function se(n,e,...t){if(!n)throw Jo(e,...t)}function Pt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ci(e),new Error(e)}function Wt(n,e){n||Pt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function t_(){return ll()==="http:"||ll()==="https:"}function ll(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(t_()||Sh()||"connection"in navigator)?navigator.onLine:!0}function r_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,t){this.shortDelay=e,this.longDelay=t,Wt(t>e,"Short delay should be less than long delay!"),this.isMobile=jo()||du()}get(){return n_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(n,e){Wt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_=new Gr(3e4,6e4);function _n(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Dt(n,e,t,r,i={}){return bu(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ir(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const c=Object.assign({method:e,headers:l},s);return Th()||(c.referrerPolicy="no-referrer"),Cu.fetch()(wu(n,n.config.apiHost,t,a),c)})}async function bu(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},i_),e);try{const i=new a_(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ii(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ii(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ii(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw ii(n,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Eu(n,u,c);yt(n,u)}}catch(i){if(i instanceof pn)throw i;yt(n,"network-request-failed",{message:String(i)})}}async function $r(n,e,t,r,i={}){const s=await Dt(n,e,t,r,i);return"mfaPendingCredential"in s&&yt(n,"multi-factor-auth-required",{_serverResponse:s}),s}function wu(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Zo(n.config,i):`${n.config.apiScheme}://${i}`}function o_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class a_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(It(this.auth,"network-request-failed")),s_.get())})}}function ii(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=It(n,e,r);return i.customData._tokenResponse=t,i}function cl(n){return n!==void 0&&n.enterprise!==void 0}class l_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return o_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function c_(n,e){return Dt(n,"GET","/v2/recaptchaConfig",_n(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u_(n,e){return Dt(n,"POST","/v1/accounts:delete",e)}async function Au(n,e){return Dt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function f_(n,e=!1){const t=qe(n),r=await t.getIdToken(e),i=ea(r);se(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Er(ps(i.auth_time)),issuedAtTime:Er(ps(i.iat)),expirationTime:Er(ps(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ps(n){return Number(n)*1e3}function ea(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ci("JWT malformed, contained fewer than 3 sections"),null;try{const i=yi(t);return i?JSON.parse(i):(ci("Failed to decode base64 JWT payload"),null)}catch(i){return ci("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ul(n){const e=ea(n);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof pn&&d_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function d_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Er(this.lastLoginAt),this.creationTime=Er(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ai(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Tn(n,Au(t,{idToken:r}));se(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Iu(s.providerUserInfo):[],a=__(n.providerData,o),l=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new vo(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,f)}async function p_(n){const e=qe(n);await Ai(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function __(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Iu(n){return n.map(e=>{var{providerId:t}=e,r=Xo(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m_(n,e){const t=await bu(n,{},async()=>{const r=ir({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=wu(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Cu.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function g_(n,e){return Dt(n,"POST","/v2/accounts:revokeToken",_n(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ul(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){se(e.length!==0,"internal-error");const t=ul(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await m_(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new Kn;return r&&(se(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(se(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(se(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Kn,this.toJSON())}_performRefresh(){return Pt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(n,e){se(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Nt{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Xo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new h_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new vo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Tn(this,this.stsTokenManager.getToken(this.auth,e));return se(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return f_(this,e)}reload(){return p_(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Nt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ai(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wt(this.auth.app))return Promise.reject(Mt(this.auth));const e=await this.getIdToken();return await Tn(this,u_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,l,c,u;const f=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,h=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=t.photoURL)!==null&&o!==void 0?o:void 0,p=(a=t.tenantId)!==null&&a!==void 0?a:void 0,x=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=t.createdAt)!==null&&c!==void 0?c:void 0,m=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:g,emailVerified:y,isAnonymous:E,providerData:b,stsTokenManager:I}=t;se(g&&I,e,"internal-error");const C=Kn.fromJSON(this.name,I);se(typeof g=="string",e,"internal-error"),Yt(f,e.name),Yt(d,e.name),se(typeof y=="boolean",e,"internal-error"),se(typeof E=="boolean",e,"internal-error"),Yt(h,e.name),Yt(_,e.name),Yt(p,e.name),Yt(x,e.name),Yt(v,e.name),Yt(m,e.name);const F=new Nt({uid:g,auth:e,email:d,emailVerified:y,displayName:f,isAnonymous:E,photoURL:_,phoneNumber:h,tenantId:p,stsTokenManager:C,createdAt:v,lastLoginAt:m});return b&&Array.isArray(b)&&(F.providerData=b.map(A=>Object.assign({},A))),x&&(F._redirectEventId=x),F}static async _fromIdTokenResponse(e,t,r=!1){const i=new Kn;i.updateFromServerResponse(t);const s=new Nt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ai(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];se(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Iu(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Kn;a.updateFromIdToken(r);const l=new Nt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new vo(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl=new Map;function Ot(n){Wt(n instanceof Function,"Expected a class definition");let e=fl.get(n);return e?(Wt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,fl.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ku.type="NONE";const dl=ku;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(n,e,t){return`firebase:${n}:${e}:${t}`}class Yn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ui(this.userKey,i.apiKey,s),this.fullPersistenceKey=ui("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Yn(Ot(dl),e,r);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Ot(dl);const o=ui(r,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){const f=Nt._fromJSON(e,u);c!==s&&(a=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Yn(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Yn(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ru(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Tu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bu(e))return"Blackberry";if(Pu(e))return"Webos";if(Su(e))return"Safari";if((e.includes("chrome/")||Du(e))&&!e.includes("edge/"))return"Chrome";if(Fu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Tu(n=Ze()){return/firefox\//i.test(n)}function Su(n=Ze()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Du(n=Ze()){return/crios\//i.test(n)}function Ru(n=Ze()){return/iemobile/i.test(n)}function Fu(n=Ze()){return/android/i.test(n)}function Bu(n=Ze()){return/blackberry/i.test(n)}function Pu(n=Ze()){return/webos/i.test(n)}function ta(n=Ze()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function x_(n=Ze()){var e;return ta(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function v_(){return Dh()&&document.documentMode===10}function Nu(n=Ze()){return ta(n)||Fu(n)||Pu(n)||Bu(n)||/windows phone/i.test(n)||Ru(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(n,e=[]){let t;switch(n){case"Browser":t=hl(Ze());break;case"Worker":t=`${hl(Ze())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${sr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E_(n,e={}){return Dt(n,"GET","/v2/passwordPolicy",_n(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=6;class b_{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:C_,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pl(this),this.idTokenSubscription=new pl(this),this.beforeStateQueue=new y_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ot(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Yn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Au(this,{idToken:e}),r=await Nt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(wt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ai(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=r_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wt(this.app))return Promise.reject(Mt(this));const t=e?qe(e):null;return t&&se(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wt(this.app)?Promise.reject(Mt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wt(this.app)?Promise.reject(Mt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ot(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await E_(this),t=new b_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new jr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await g_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ot(e)||this._popupRedirectResolver;se(t,this,"argument-error"),this.redirectPersistenceManager=await Yn.create(this,[Ot(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ou(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&e_(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Nn(n){return qe(n)}class pl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Hh(t=>this.observer=t)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $i={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function A_(n){$i=n}function Lu(n){return $i.loadJS(n)}function I_(){return $i.recaptchaEnterpriseScript}function k_(){return $i.gapiScript}function T_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class S_{constructor(){this.enterprise=new D_}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class D_{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const R_="recaptcha-enterprise",Mu="NO_RECAPTCHA";class F_{constructor(e){this.type=R_,this.auth=Nn(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{c_(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new l_(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;cl(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Mu)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new S_().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&cl(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=I_();l.length!==0&&(l+=a),Lu(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function _l(n,e,t,r=!1,i=!1){const s=new F_(n);let o;if(i)o=Mu;else try{o=await s.verify(t)}catch{o=await s.verify(t,!0)}const a=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function yo(n,e,t,r,i){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await _l(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await _l(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(n,e){const t=Yo(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Ci(s,e??{}))return i;yt(i,"already-initialized")}return t.initialize({options:e})}function P_(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ot);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function N_(n,e,t){const r=Nn(n);se(r._canInitEmulator,r,"emulator-config-failed"),se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Uu(e),{host:o,port:a}=O_(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),L_()}function Uu(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function O_(n){const e=Uu(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ml(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ml(o)}}}function ml(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function L_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Pt("not implemented")}_getIdTokenResponse(e){return Pt("not implemented")}_linkToIdToken(e,t){return Pt("not implemented")}_getReauthenticationResolver(e){return Pt("not implemented")}}async function M_(n,e){return Dt(n,"POST","/v1/accounts:update",e)}async function U_(n,e){return Dt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H_(n,e){return $r(n,"POST","/v1/accounts:signInWithPassword",_n(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W_(n,e){return $r(n,"POST","/v1/accounts:signInWithEmailLink",_n(n,e))}async function z_(n,e){return $r(n,"POST","/v1/accounts:signInWithEmailLink",_n(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br extends na{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Br(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Br(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yo(e,t,"signInWithPassword",H_);case"emailLink":return W_(e,{email:this._email,oobCode:this._password});default:yt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yo(e,r,"signUpPassword",U_);case"emailLink":return z_(e,{idToken:t,email:this._email,oobCode:this._password});default:yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qn(n,e){return $r(n,"POST","/v1/accounts:signInWithIdp",_n(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_="http://localhost";class Sn extends na{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Sn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):yt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Xo(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Sn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Qn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Qn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qn(e,t)}buildRequest(){const e={requestUri:q_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ir(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function j_(n){const e=gr(xr(n)).link,t=e?gr(xr(e)).deep_link_id:null,r=gr(xr(n)).deep_link_id;return(r?gr(xr(r)).link:null)||r||t||e||n}class ra{constructor(e){var t,r,i,s,o,a;const l=gr(xr(e)),c=(t=l.apiKey)!==null&&t!==void 0?t:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,f=V_((i=l.mode)!==null&&i!==void 0?i:null);se(c&&u&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=j_(e);try{return new ra(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(){this.providerId=or.PROVIDER_ID}static credential(e,t){return Br._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=ra.parseLink(t);return se(r,"argument-error"),Br._fromEmailAndCode(e,r.code,r.tenantId)}}or.PROVIDER_ID="password";or.EMAIL_PASSWORD_SIGN_IN_METHOD="password";or.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr extends Hu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends Kr{constructor(){super("facebook.com")}static credential(e){return Sn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends Kr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Sn._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Xt.credential(t,r)}catch{return null}}}Xt.GOOGLE_SIGN_IN_METHOD="google.com";Xt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends Kr{constructor(){super("github.com")}static credential(e){return Sn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jt.credential(e.oauthAccessToken)}catch{return null}}}Jt.GITHUB_SIGN_IN_METHOD="github.com";Jt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Kr{constructor(){super("twitter.com")}static credential(e,t){return Sn._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Zt.credential(t,r)}catch{return null}}}Zt.TWITTER_SIGN_IN_METHOD="twitter.com";Zt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G_(n,e){return $r(n,"POST","/v1/accounts:signUp",_n(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Nt._fromIdTokenResponse(e,r,i),o=gl(r);return new Dn({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=gl(r);return new Dn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function gl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends pn{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ii.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Ii(e,t,r,i)}}function Wu(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ii._fromErrorAndOperation(n,s,e,r):s})}async function $_(n,e,t=!1){const r=await Tn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Dn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K_(n,e,t=!1){const{auth:r}=n;if(wt(r.app))return Promise.reject(Mt(r));const i="reauthenticate";try{const s=await Tn(n,Wu(r,i,e,n),t);se(s.idToken,r,"internal-error");const o=ea(s.idToken);se(o,r,"internal-error");const{sub:a}=o;return se(n.uid===a,r,"user-mismatch"),Dn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&yt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zu(n,e,t=!1){if(wt(n.app))return Promise.reject(Mt(n));const r="signIn",i=await Wu(n,r,e),s=await Dn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Y_(n,e){return zu(Nn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qu(n){const e=Nn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Q_(n,e,t){if(wt(n.app))return Promise.reject(Mt(n));const r=Nn(n),o=await yo(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",G_).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&qu(n),l}),a=await Dn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function xl(n,e,t){return wt(n.app)?Promise.reject(Mt(n)):Y_(qe(n),or.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&qu(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X_(n,e){return Dt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J_(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=qe(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Tn(r,X_(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Z_(n,e){return em(qe(n),null,e)}async function em(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};t&&(s.password=t);const o=await Tn(n,M_(r,s));await n._updateTokensIfNecessary(o,!0)}function tm(n,e,t,r){return qe(n).onIdTokenChanged(e,t,r)}function nm(n,e,t){return qe(n).beforeAuthStateChanged(e,t)}function rm(n,e,t,r){return qe(n).onAuthStateChanged(e,t,r)}const ki="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ki,"1"),this.storage.removeItem(ki),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im=1e3,sm=10;class ju extends Vu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Nu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);v_()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,sm):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},im)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ju.type="LOCAL";const om=ju;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu extends Vu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Gu.type="SESSION";const $u=Gu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Ki(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(t.origin,s)),l=await am(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ki.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=ia("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){return window}function cm(n){kt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(){return typeof kt().WorkerGlobalScope<"u"&&typeof kt().importScripts=="function"}async function um(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fm(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function dm(){return Ku()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu="firebaseLocalStorageDb",hm=1,Ti="firebaseLocalStorage",Qu="fbase_key";class Yr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Yi(n,e){return n.transaction([Ti],e?"readwrite":"readonly").objectStore(Ti)}function pm(){const n=indexedDB.deleteDatabase(Yu);return new Yr(n).toPromise()}function Eo(){const n=indexedDB.open(Yu,hm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ti,{keyPath:Qu})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ti)?e(r):(r.close(),await pm(),e(await Eo()))})})}async function vl(n,e,t){const r=Yi(n,!0).put({[Qu]:e,value:t});return new Yr(r).toPromise()}async function _m(n,e){const t=Yi(n,!1).get(e),r=await new Yr(t).toPromise();return r===void 0?null:r.value}function yl(n,e){const t=Yi(n,!0).delete(e);return new Yr(t).toPromise()}const mm=800,gm=3;class Xu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Eo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>gm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ku()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ki._getInstance(dm()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await um(),!this.activeServiceWorker)return;this.sender=new lm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Eo();return await vl(e,ki,"1"),await yl(e,ki),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>vl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>_m(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>yl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Yi(i,!1).getAll();return new Yr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xu.type="LOCAL";const xm=Xu;new Gr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(n,e){return e?Ot(e):(se(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa extends na{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Qn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Qn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ym(n){return zu(n.auth,new sa(n),n.bypassAuthState)}function Em(n){const{auth:e,user:t}=n;return se(t,e,"internal-error"),K_(t,new sa(n),n.bypassAuthState)}async function Cm(n){const{auth:e,user:t}=n;return se(t,e,"internal-error"),$_(t,new sa(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ym;case"linkViaPopup":case"linkViaRedirect":return Cm;case"reauthViaPopup":case"reauthViaRedirect":return Em;default:yt(this.auth,"internal-error")}}resolve(e){Wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm=new Gr(2e3,1e4);class zn extends Ju{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,zn.currentPopupAction&&zn.currentPopupAction.cancel(),zn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){Wt(this.filter.length===1,"Popup operations only handle one event");const e=ia();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(It(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(It(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(It(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bm.get())};e()}}zn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm="pendingRedirect",fi=new Map;class Am extends Ju{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=fi.get(this.auth._key());if(!e){try{const r=await Im(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}fi.set(this.auth._key(),e)}return this.bypassAuthState||fi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Im(n,e){const t=Sm(e),r=Tm(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function km(n,e){fi.set(n._key(),e)}function Tm(n){return Ot(n._redirectPersistence)}function Sm(n){return ui(wm,n.config.apiKey,n.name)}async function Dm(n,e,t=!1){if(wt(n.app))return Promise.reject(Mt(n));const r=Nn(n),i=vm(r,e),o=await new Am(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm=10*60*1e3;class Fm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Bm(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Zu(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(It(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Rm&&this.cachedEventUids.clear(),this.cachedEventUids.has(El(e))}saveEventToCache(e){this.cachedEventUids.add(El(e)),this.lastProcessedEventTime=Date.now()}}function El(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Zu({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Bm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zu(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pm(n,e={}){return Dt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Om=/^https?/;async function Lm(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Pm(n);for(const t of e)try{if(Mm(t))return}catch{}yt(n,"unauthorized-domain")}function Mm(n){const e=xo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Om.test(t))return!1;if(Nm.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um=new Gr(3e4,6e4);function Cl(){const n=kt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Hm(n){return new Promise((e,t)=>{var r,i,s;function o(){Cl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cl(),t(It(n,"network-request-failed"))},timeout:Um.get()})}if(!((i=(r=kt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=kt().gapi)===null||s===void 0)&&s.load)o();else{const a=T_("iframefcb");return kt()[a]=()=>{gapi.load?o():t(It(n,"network-request-failed"))},Lu(`${k_()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw di=null,e})}let di=null;function Wm(n){return di=di||Hm(n),di}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm=new Gr(5e3,15e3),qm="__/auth/iframe",Vm="emulator/auth/iframe",jm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Gm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $m(n){const e=n.config;se(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Zo(e,Vm):`https://${n.config.authDomain}/${qm}`,r={apiKey:e.apiKey,appName:n.name,v:sr},i=Gm.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${ir(r).slice(1)}`}async function Km(n){const e=await Wm(n),t=kt().gapi;return se(t,n,"internal-error"),e.open({where:document.body,url:$m(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jm,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=It(n,"network-request-failed"),a=kt().setTimeout(()=>{s(o)},zm.get());function l(){kt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qm=500,Xm=600,Jm="_blank",Zm="http://localhost";class bl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eg(n,e,t,r=Qm,i=Xm){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Ym),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Ze().toLowerCase();t&&(a=Du(c)?Jm:t),Tu(c)&&(e=e||Zm,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[h,_])=>`${d}${h}=${_},`,"");if(x_(c)&&a!=="_self")return tg(e||"",a),new bl(null);const f=window.open(e||"",a,u);se(f,n,"popup-blocked");try{f.focus()}catch{}return new bl(f)}function tg(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng="__/auth/handler",rg="emulator/auth/handler",ig=encodeURIComponent("fac");async function wl(n,e,t,r,i,s){se(n.config.authDomain,n,"auth-domain-config-required"),se(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:sr,eventId:i};if(e instanceof Hu){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",fo(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(e instanceof Kr){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await n._getAppCheckToken(),c=l?`#${ig}=${encodeURIComponent(l)}`:"";return`${sg(n)}?${ir(a).slice(1)}${c}`}function sg({config:n}){return n.emulator?Zo(n,rg):`https://${n.authDomain}/${ng}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s="webStorageSupport";class og{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$u,this._completeRedirectFn=Dm,this._overrideRedirectResult=km}async _openPopup(e,t,r,i){var s;Wt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await wl(e,t,r,xo(),i);return eg(e,o,ia())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await wl(e,t,r,xo(),i);return cm(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Wt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Km(e),r=new Fm(e);return t.register("authEvent",i=>(se(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(_s,{type:_s},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[_s];o!==void 0&&t(!!o),yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Lm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Nu()||Su()||ta()}}const ag=og;var Al="@firebase/auth",Il="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ug(n){er(new kn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;se(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ou(n)},c=new w_(r,i,s,l);return P_(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),er(new kn("auth-internal",e=>{const t=Nn(e.getProvider("auth").getImmediate());return(r=>new lg(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),rn(Al,Il,cg(n)),rn(Al,Il,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg=5*60,dg=fu("authIdTokenMaxAge")||fg;let kl=null;const hg=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>dg)return;const i=t==null?void 0:t.token;kl!==i&&(kl=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function pg(n=Qo()){const e=Yo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=B_(n,{popupRedirectResolver:ag,persistence:[xm,om,$u]}),r=fu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=hg(s.toString());nm(t,o,()=>o(t.currentUser)),tm(t,a=>o(a))}}const i=cu("auth");return i&&N_(t,`http://${i}`),t}function _g(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}A_({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=It("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",_g().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ug("Browser");var Tl={};const Sl="@firebase/database",Dl="1.0.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ef="";function mg(n){ef=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Be(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Rr(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return St(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new gg(e)}}catch{}return new xg},Cn=tf("localStorage"),vg=tf("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=new $o("@firebase/database"),yg=function(){let n=1;return function(){return n++}}(),nf=function(n){const e=qh(n),t=new Uh;t.update(e);const r=t.digest();return qo.encodeByteArray(r)},Qr=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Qr.apply(null,r):typeof r=="object"?e+=Be(r):e+=r,e+=" "}return e};let Cr=null,Rl=!0;const Eg=function(n,e){V(!0,"Can't turn on custom loggers persistently."),Xn.logLevel=ve.VERBOSE,Cr=Xn.log.bind(Xn)},Ge=function(...n){if(Rl===!0&&(Rl=!1,Cr===null&&vg.get("logging_enabled")===!0&&Eg()),Cr){const e=Qr.apply(null,n);Cr(e)}},Xr=function(n){return function(...e){Ge(n,...e)}},Co=function(...n){const e="FIREBASE INTERNAL ERROR: "+Qr(...n);Xn.error(e)},zt=function(...n){const e=`FIREBASE FATAL ERROR: ${Qr(...n)}`;throw Xn.error(e),new Error(e)},nt=function(...n){const e="FIREBASE WARNING: "+Qr(...n);Xn.warn(e)},Cg=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&nt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},oa=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},bg=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Rn="[MIN_NAME]",un="[MAX_NAME]",ar=function(n,e){if(n===e)return 0;if(n===Rn||e===un)return-1;if(e===Rn||n===un)return 1;{const t=Fl(n),r=Fl(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},wg=function(n,e){return n===e?0:n<e?-1:1},dr=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Be(e))},aa=function(n){if(typeof n!="object"||n===null)return Be(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=Be(e[r]),t+=":",t+=aa(n[e[r]]);return t+="}",t},rf=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let i=0;i<t;i+=e)i+e>t?r.push(n.substring(i,t)):r.push(n.substring(i,i+e));return r};function st(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const sf=function(n){V(!oa(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let i,s,o,a,l;n===0?(s=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),r),s=a+r,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(s=0,o=Math.round(n/Math.pow(2,1-r-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const u=c.join("");let f="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),f=f+d}return f.toLowerCase()},Ag=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ig=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function kg(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const Tg=new RegExp("^-?(0*)\\d{1,10}$"),Sg=-2147483648,Dg=2147483647,Fl=function(n){if(Tg.test(n)){const e=Number(n);if(e>=Sg&&e<=Dg)return e}return null},lr=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw nt("Exception was thrown by user callback.",t),e},Math.floor(0))}},Rg=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},br=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){nt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Ge("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',nt(e)}}class hi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}hi.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la="5",of="v",af="s",lf="r",cf="f",uf=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ff="ls",df="p",bo="ac",hf="websocket",pf="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,t,r,i,s=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Cn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Cn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Pg(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function mf(n,e,t){V(typeof e=="string","typeof type must == string"),V(typeof t=="object","typeof params must == object");let r;if(e===hf)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===pf)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Pg(n)&&(t.ns=n.namespace);const i=[];return st(t,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(){this.counters_={}}incrementCounter(e,t=1){St(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return yh(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms={},gs={};function ca(n){const e=n.toString();return ms[e]||(ms[e]=new Ng),ms[e]}function Og(n,e){const t=n.toString();return gs[t]||(gs[t]=e()),gs[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&lr(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl="start",Mg="close",Ug="pLPCommand",Hg="pRTLPCB",gf="id",xf="pw",vf="ser",Wg="cb",zg="seg",qg="ts",Vg="d",jg="dframe",yf=1870,Ef=30,Gg=yf-Ef,$g=25e3,Kg=3e4;class qn{constructor(e,t,r,i,s,o,a){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Xr(e),this.stats_=ca(t),this.urlFn=l=>(this.appCheckToken&&(l[bo]=this.appCheckToken),mf(t,pf,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Lg(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Kg)),bg(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ua((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Bl)this.id=a,this.password=l;else if(o===Mg)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Bl]="t",r[vf]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Wg]=this.scriptTagHolder.uniqueCallbackIdentifier),r[of]=la,this.transportSessionId&&(r[af]=this.transportSessionId),this.lastSessionId&&(r[ff]=this.lastSessionId),this.applicationId&&(r[df]=this.applicationId),this.appCheckToken&&(r[bo]=this.appCheckToken),typeof location<"u"&&location.hostname&&uf.test(location.hostname)&&(r[lf]=cf);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){qn.forceAllow_=!0}static forceDisallow(){qn.forceDisallow_=!0}static isAvailable(){return qn.forceAllow_?!0:!qn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Ag()&&!Ig()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Be(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=au(t),i=rf(r,Gg);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[jg]="t",r[gf]=e,r[xf]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Be(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class ua{constructor(e,t,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=yg(),window[Ug+this.uniqueCallbackIdentifier]=e,window[Hg+this.uniqueCallbackIdentifier]=t,this.myIFrame=ua.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ge("frame writing exception"),a.stack&&Ge(a.stack),Ge(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ge("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[gf]=this.myID,e[xf]=this.myPW,e[vf]=this.currentSerial;let t=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ef+r.length<=yf;){const o=this.pendingSegs.shift();r=r+"&"+zg+i+"="+o.seg+"&"+qg+i+"="+o.ts+"&"+Vg+i+"="+o.d,i++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(r,Math.floor($g)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{Ge("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg=16384,Qg=45e3;let Si=null;typeof MozWebSocket<"u"?Si=MozWebSocket:typeof WebSocket<"u"&&(Si=WebSocket);class At{constructor(e,t,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Xr(this.connId),this.stats_=ca(t),this.connURL=At.connectionURL_(t,o,a,i,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,i,s){const o={};return o[of]=la,typeof location<"u"&&location.hostname&&uf.test(location.hostname)&&(o[lf]=cf),t&&(o[af]=t),r&&(o[ff]=r),i&&(o[bo]=i),s&&(o[df]=s),mf(e,hf,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Cn.set("previous_websocket_failure",!0);try{let r;Rh(),this.mySock=new Si(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){At.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Si!==null&&!At.forceDisallow_}static previouslyFailed(){return Cn.isInMemoryStorage||Cn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Cn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=Rr(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(V(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=Be(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=rf(t,Yg);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Qg))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}At.responsesRequiredToBeHealthy=2;At.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{static get ALL_TRANSPORTS(){return[qn,At]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=At.isAvailable();let r=t&&!At.previouslyFailed();if(e.webSocketOnly&&(t||nt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[At];else{const i=this.transports_=[];for(const s of Pr.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Pr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Pr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=6e4,Jg=5e3,Zg=10*1024,e1=100*1024,xs="t",Pl="d",t1="s",Nl="r",n1="e",Ol="o",Ll="a",Ml="n",Ul="p",r1="h";class i1{constructor(e,t,r,i,s,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Xr("c:"+this.id+":"),this.transportManager_=new Pr(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=br(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>e1?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Zg?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(xs in e){const t=e[xs];t===Ll?this.upgradeIfSecondaryHealthy_():t===Nl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Ol&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=dr("t",e),r=dr("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ul,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ll,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ml,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=dr("t",e),r=dr("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=dr(xs,e);if(Pl in e){const r=e[Pl];if(t===r1){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Ml){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===t1?this.onConnectionShutdown_(r):t===Nl?this.onReset_(r):t===n1?Co("Server Error: "+r):t===Ol?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Co("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),la!==r&&nt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),br(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Xg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):br(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Jg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ul,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Cn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{put(e,t,r,i){}merge(e,t,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e){this.allowedEvents_=e,this.listeners_={},V(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const i=this.getInitialEvent(e);i&&t.apply(r,i)}off(e,t,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===t&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){V(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di extends bf{static getInstance(){return new Di}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!jo()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return V(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=32,Wl=768;class Ee{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function _e(){return new Ee("")}function fe(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function fn(n){return n.pieces_.length-n.pieceNum_}function Ce(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Ee(n.pieces_,e)}function wf(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function s1(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Af(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function If(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Ee(e,0)}function Pe(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof Ee)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&t.push(r[i])}return new Ee(t,0)}function ue(n){return n.pieceNum_>=n.pieces_.length}function Qe(n,e){const t=fe(n),r=fe(e);if(t===null)return e;if(t===r)return Qe(Ce(n),Ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function kf(n,e){if(fn(n)!==fn(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function mt(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(fn(n)>fn(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class o1{constructor(e,t){this.errorPrefix_=t,this.parts_=Af(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Gi(this.parts_[r]);Tf(this)}}function a1(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Gi(e),Tf(n)}function l1(n){const e=n.parts_.pop();n.byteLength_-=Gi(e),n.parts_.length>0&&(n.byteLength_-=1)}function Tf(n){if(n.byteLength_>Wl)throw new Error(n.errorPrefix_+"has a key path longer than "+Wl+" bytes ("+n.byteLength_+").");if(n.parts_.length>Hl)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Hl+") or object contains a cycle "+yn(n))}function yn(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa extends bf{static getInstance(){return new fa}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return V(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=1e3,c1=60*5*1e3,zl=30*1e3,u1=1.3,f1=3e4,d1="server_kill",ql=3;class Ut extends Cf{constructor(e,t,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ut.nextPersistentConnectionId_++,this.log_=Xr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=hr,this.maxReconnectDelay_=c1,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");fa.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Di.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_(Be(s)),V(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const t=new ji,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),V(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Ut.warnOnListenWarnings_(l,t),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&St(e,"w")){const r=Zn(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',s=t._path.toString();nt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Mh(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=zl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Lh(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,t)}sendUnlisten_(e,t,r,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,i){const s={p:t,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,r,i){this.putInternal("p",e,t,r,i)}merge(e,t,r,i){this.putInternal("m",e,t,r,i)}putInternal(e,t,r,i,s){this.initConnection_();const o={p:t,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,s=>{this.log_(t+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Be(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Co("Unrecognized action received from server: "+Be(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){V(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=hr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=hr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>f1&&(this.reconnectDelay_=hr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*u1)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ut.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(f){V(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ge("getToken() completed but was canceled"):(Ge("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=d&&d.token,a=new i1(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,h=>{nt(h+" ("+this.repoInfo_.toString()+")"),this.interrupt(d1)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&nt(f),l())}}}interrupt(e){Ge("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ge("Resuming connection for reason: "+e),delete this.interruptReasons_[e],fo(this.interruptReasons_)&&(this.reconnectDelay_=hr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(s=>aa(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const r=new Ee(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(t),s.delete(t),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,t){Ge("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ql&&(this.reconnectDelay_=zl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ge("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ql&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+ef.replace(/\./g,"-")]=1,jo()?e["framework.cordova"]=1:du()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Di.getInstance().currentlyOnline();return fo(this.interruptReasons_)&&e}}Ut.nextPersistentConnectionId_=0;Ut.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new ce(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new ce(Rn,e),i=new ce(Rn,t);return this.compare(r,i)!==0}minPost(){return ce.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let si;class Sf extends Qi{static get __EMPTY_NODE(){return si}static set __EMPTY_NODE(e){si=e}compare(e,t){return ar(e.name,t.name)}isDefinedOn(e){throw rr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ce.MIN}maxPost(){return new ce(un,si)}makePost(e,t){return V(typeof e=="string","KeyIndex indexValue must always be a string."),new ce(e,si)}toString(){return".key"}}const sn=new Sf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,t,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?r(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Le{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Le.RED,this.left=i??tt.EMPTY_NODE,this.right=s??tt.EMPTY_NODE}copy(e,t,r,i,s){return new Le(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return tt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,i;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return tt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Le.RED=!0;Le.BLACK=!1;class h1{copy(e,t,r,i,s){return this}insert(e,t,r){return new Le(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class tt{constructor(e,t=tt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new tt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Le.BLACK,null,null))}remove(e){return new tt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Le.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,i=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new oi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new oi(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new oi(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new oi(this.root_,null,this.comparator_,!0,e)}}tt.EMPTY_NODE=new h1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p1(n,e){return ar(n.name,e.name)}function da(n,e){return ar(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wo;function _1(n){wo=n}const Df=function(n){return typeof n=="number"?"number:"+sf(n):"string:"+n},Rf=function(n){if(n.isLeafNode()){const e=n.val();V(typeof e=="string"||typeof e=="number"||typeof e=="object"&&St(e,".sv"),"Priority must be a string or number.")}else V(n===wo||n.isEmpty(),"priority of unexpected type.");V(n===wo||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vl;class Oe{static set __childrenNodeConstructor(e){Vl=e}static get __childrenNodeConstructor(){return Vl}constructor(e,t=Oe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,V(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Rf(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Oe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Oe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ue(e)?this:fe(e)===".priority"?this.priorityNode_:Oe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Oe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=fe(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(V(r!==".priority"||fn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Oe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ce(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Df(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=sf(this.value_):e+=this.value_,this.lazyHash_=nf(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Oe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Oe.__childrenNodeConstructor?-1:(V(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,i=Oe.VALUE_TYPE_ORDER.indexOf(t),s=Oe.VALUE_TYPE_ORDER.indexOf(r);return V(i>=0,"Unknown leaf type: "+t),V(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Oe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ff,Bf;function m1(n){Ff=n}function g1(n){Bf=n}class x1 extends Qi{compare(e,t){const r=e.node.getPriority(),i=t.node.getPriority(),s=r.compareTo(i);return s===0?ar(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ce.MIN}maxPost(){return new ce(un,new Oe("[PRIORITY-POST]",Bf))}makePost(e,t){const r=Ff(e);return new ce(t,new Oe("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ae=new x1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1=Math.log(2);class y1{constructor(e){const t=s=>parseInt(Math.log(s)/v1,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ri=function(n,e,t,r){n.sort(e);const i=function(l,c){const u=c-l;let f,d;if(u===0)return null;if(u===1)return f=n[l],d=t?t(f):f,new Le(d,f.node,Le.BLACK,null,null);{const h=parseInt(u/2,10)+l,_=i(l,h),p=i(h+1,c);return f=n[h],d=t?t(f):f,new Le(d,f.node,Le.BLACK,_,p)}},s=function(l){let c=null,u=null,f=n.length;const d=function(_,p){const x=f-_,v=f;f-=_;const m=i(x+1,v),g=n[x],y=t?t(g):g;h(new Le(y,g.node,p,null,m))},h=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const p=l.nextBitIsOne(),x=Math.pow(2,l.count-(_+1));p?d(x,Le.BLACK):(d(x,Le.BLACK),d(x,Le.RED))}return u},o=new y1(n.length),a=s(o);return new tt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vs;const pr={};class Lt{static get Default(){return V(Ae,"ChildrenNode.ts has not been loaded"),vs=vs||new Lt({".priority":pr},{".priority":Ae}),vs}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Zn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof tt?t:null}hasIndex(e){return St(this.indexSet_,e.toString())}addIndex(e,t){V(e!==sn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=t.getIterator(ce.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Ri(r,e.getCompare()):a=pr;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Lt(u,c)}addToIndexes(e,t){const r=Ei(this.indexes_,(i,s)=>{const o=Zn(this.indexSet_,s);if(V(o,"Missing index implementation for "+s),i===pr)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(ce.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ri(a,o.getCompare())}else return pr;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new ce(e.name,a))),l.insert(e,e.node)}});return new Lt(r,this.indexSet_)}removeFromIndexes(e,t){const r=Ei(this.indexes_,i=>{if(i===pr)return i;{const s=t.get(e.name);return s?i.remove(new ce(e.name,s)):i}});return new Lt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _r;class ie{static get EMPTY_NODE(){return _r||(_r=new ie(new tt(da),null,Lt.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Rf(this.priorityNode_),this.children_.isEmpty()&&V(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_r}updatePriority(e){return this.children_.isEmpty()?this:new ie(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?_r:t}}getChild(e){const t=fe(e);return t===null?this:this.getImmediateChild(t).getChild(Ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(V(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new ce(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?_r:this.priorityNode_;return new ie(i,o,s)}}updateChild(e,t){const r=fe(e);if(r===null)return t;{V(fe(e)!==".priority"||fn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ce(e),t);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,i=0,s=!0;if(this.forEachChild(Ae,(o,a)=>{t[o]=a.val(e),r++,s&&ie.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Df(this.getPriority().val())+":"),this.forEachChild(Ae,(t,r)=>{const i=r.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":nf(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new ce(e,t));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ce(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ce(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ce.Wrap);let s=i.peek();for(;s!=null&&t.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ce.Wrap);let s=i.peek();for(;s!=null&&t.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Jr?-1:0}withIndex(e){if(e===sn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ie(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===sn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(Ae),i=t.getIterator(Ae);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===sn?null:this.indexMap_.get(e.toString())}}ie.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class E1 extends ie{constructor(){super(new tt(da),ie.EMPTY_NODE,Lt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ie.EMPTY_NODE}isEmpty(){return!1}}const Jr=new E1;Object.defineProperties(ce,{MIN:{value:new ce(Rn,ie.EMPTY_NODE)},MAX:{value:new ce(un,Jr)}});Sf.__EMPTY_NODE=ie.EMPTY_NODE;Oe.__childrenNodeConstructor=ie;_1(Jr);g1(Jr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1=!0;function Me(n,e=null){if(n===null)return ie.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),V(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Oe(t,Me(e))}if(!(n instanceof Array)&&C1){const t=[];let r=!1;if(st(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=Me(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),t.push(new ce(o,l)))}}),t.length===0)return ie.EMPTY_NODE;const s=Ri(t,p1,o=>o.name,da);if(r){const o=Ri(t,Ae.getCompare());return new ie(s,Me(e),new Lt({".priority":o},{".priority":Ae}))}else return new ie(s,Me(e),Lt.Default)}else{let t=ie.EMPTY_NODE;return st(n,(r,i)=>{if(St(n,r)&&r.substring(0,1)!=="."){const s=Me(i);(s.isLeafNode()||!s.isEmpty())&&(t=t.updateImmediateChild(r,s))}}),t.updatePriority(Me(e))}}m1(Me);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf extends Qi{constructor(e){super(),this.indexPath_=e,V(!ue(e)&&fe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),i=this.extractChild(t.node),s=r.compareTo(i);return s===0?ar(e.name,t.name):s}makePost(e,t){const r=Me(e),i=ie.EMPTY_NODE.updateChild(this.indexPath_,r);return new ce(t,i)}maxPost(){const e=ie.EMPTY_NODE.updateChild(this.indexPath_,Jr);return new ce(un,e)}toString(){return Af(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1 extends Qi{compare(e,t){const r=e.node.compareTo(t.node);return r===0?ar(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ce.MIN}maxPost(){return ce.MAX}makePost(e,t){const r=Me(e);return new ce(t,r)}toString(){return".value"}}const Nf=new b1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(n){return{type:"value",snapshotNode:n}}function tr(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Nr(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Or(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function w1(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e){this.index_=e}updateChild(e,t,r,i,s,o){V(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(t)?o.trackChildChange(Nr(t,a)):V(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(tr(t,r)):o.trackChildChange(Or(t,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Ae,(i,s)=>{t.hasChild(i)||r.trackChildChange(Nr(i,s))}),t.isLeafNode()||t.forEachChild(Ae,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Or(i,s,o))}else r.trackChildChange(tr(i,s))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?ie.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e){this.indexedFilter_=new ha(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Lr.getStartPost_(e),this.endPost_=Lr.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,i,s,o){return this.matches(new ce(t,r))||(r=ie.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,i,s,o)}updateFullNode(e,t,r){t.isLeafNode()&&(t=ie.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(ie.EMPTY_NODE);const s=this;return t.forEachChild(Ae,(o,a)=>{s.matches(new ce(o,a))||(i=i.updateImmediateChild(o,ie.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Lr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,i,s,o){return this.rangedFilter_.matches(new ce(t,r))||(r=ie.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,i,s,o):this.fullLimitUpdateChild_(e,t,r,s,o)}updateFullNode(e,t,r){let i;if(t.isLeafNode()||t.isEmpty())i=ie.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=ie.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(ie.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,ie.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(d,h)=>f(h,d)}else o=this.index_.getCompare();const a=e;V(a.numChildren()===this.limit_,"");const l=new ce(t,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const f=a.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const h=d==null?1:o(d,l);if(u&&!r.isEmpty()&&h>=0)return s!=null&&s.trackChildChange(Or(t,r,f)),a.updateImmediateChild(t,r);{s!=null&&s.trackChildChange(Nr(t,f));const p=a.updateImmediateChild(t,ie.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(tr(d.name,d.node)),p.updateImmediateChild(d.name,d.node)):p}}else return r.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(Nr(c.name,c.node)),s.trackChildChange(tr(t,r))),a.updateImmediateChild(t,r).updateImmediateChild(c.name,ie.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ae}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return V(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return V(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Rn}hasEnd(){return this.endSet_}getIndexEndValue(){return V(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return V(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:un}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return V(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ae}copy(){const e=new pa;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function I1(n){return n.loadsAllData()?new ha(n.getIndex()):n.hasLimit()?new A1(n):new Lr(n)}function k1(n,e){const t=n.copy();return t.index_=e,t}function jl(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Ae?t="$priority":n.index_===Nf?t="$value":n.index_===sn?t="$key":(V(n.index_ instanceof Pf,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Be(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=Be(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+Be(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=Be(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+Be(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Gl(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Ae&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi extends Cf{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(V(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Xr("p:rest:"),this.listens_={}}listen(e,t,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Fi.getListenId_(e,r),a={};this.listens_[o]=a;const l=jl(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let f=u;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),Zn(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,t){const r=Fi.getListenId_(e,t);delete this.listens_[r]}get(e){const t=jl(e._queryParams),r=e._path.toString(),i=new ji;return this.restRequest_(r+".json",t,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(t.auth=i.accessToken),s&&s.token&&(t.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ir(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Rr(a.responseText)}catch{nt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&nt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(){this.rootNode_=ie.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(){return{value:null,children:new Map}}function Lf(n,e,t){if(ue(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=fe(e);n.children.has(r)||n.children.set(r,Bi());const i=n.children.get(r);e=Ce(e),Lf(i,e,t)}}function Ao(n,e,t){n.value!==null?t(e,n.value):S1(n,(r,i)=>{const s=new Ee(e.toString()+"/"+r);Ao(i,s,t)})}function S1(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&st(this.last_,(r,i)=>{t[r]=t[r]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l=10*1e3,R1=30*1e3,F1=5*60*1e3;class B1{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new D1(e);const r=$l+(R1-$l)*Math.random();br(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;st(e,(i,s)=>{s>0&&St(this.statsToReport_,i)&&(t[i]=s,r=!0)}),r&&this.server_.reportStats(t),br(this.reportStats_.bind(this),Math.floor(Math.random()*2*F1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gt;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(gt||(gt={}));function Mf(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function _a(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ma(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=gt.ACK_USER_WRITE,this.source=Mf()}operationForChild(e){if(ue(this.path)){if(this.affectedTree.value!=null)return V(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Ee(e));return new Pi(_e(),t,this.revert)}}else return V(fe(this.path)===e,"operationForChild called for unrelated child."),new Pi(Ce(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,t){this.source=e,this.path=t,this.type=gt.LISTEN_COMPLETE}operationForChild(e){return ue(this.path)?new Mr(this.source,_e()):new Mr(this.source,Ce(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=gt.OVERWRITE}operationForChild(e){return ue(this.path)?new Fn(this.source,_e(),this.snap.getImmediateChild(e)):new Fn(this.source,Ce(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=gt.MERGE}operationForChild(e){if(ue(this.path)){const t=this.children.subtree(new Ee(e));return t.isEmpty()?null:t.value?new Fn(this.source,_e(),t.value):new Ur(this.source,_e(),t)}else return V(fe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ur(this.source,Ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ue(e))return this.isFullyInitialized()&&!this.filtered_;const t=fe(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function N1(n,e,t,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(w1(o.childName,o.snapshotNode))}),mr(n,i,"child_removed",e,r,t),mr(n,i,"child_added",e,r,t),mr(n,i,"child_moved",s,r,t),mr(n,i,"child_changed",e,r,t),mr(n,i,"value",e,r,t),i}function mr(n,e,t,r,i,s){const o=r.filter(a=>a.type===t);o.sort((a,l)=>L1(n,a,l)),o.forEach(a=>{const l=O1(n,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function O1(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function L1(n,e,t){if(e.childName==null||t.childName==null)throw rr("Should only compare child_ events.");const r=new ce(e.childName,e.snapshotNode),i=new ce(t.childName,t.snapshotNode);return n.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(n,e){return{eventCache:n,serverCache:e}}function wr(n,e,t,r){return Xi(new dn(e,t,r),n.serverCache)}function Uf(n,e,t,r){return Xi(n.eventCache,new dn(e,t,r))}function Ni(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Bn(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ys;const M1=()=>(ys||(ys=new tt(wg)),ys);class we{static fromObject(e){let t=new we(null);return st(e,(r,i)=>{t=t.set(new Ee(r),i)}),t}constructor(e,t=M1()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:_e(),value:this.value};if(ue(e))return null;{const r=fe(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ce(e),t);return s!=null?{path:Pe(new Ee(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ue(e))return this;{const t=fe(e),r=this.children.get(t);return r!==null?r.subtree(Ce(e)):new we(null)}}set(e,t){if(ue(e))return new we(t,this.children);{const r=fe(e),s=(this.children.get(r)||new we(null)).set(Ce(e),t),o=this.children.insert(r,s);return new we(this.value,o)}}remove(e){if(ue(e))return this.children.isEmpty()?new we(null):new we(null,this.children);{const t=fe(e),r=this.children.get(t);if(r){const i=r.remove(Ce(e));let s;return i.isEmpty()?s=this.children.remove(t):s=this.children.insert(t,i),this.value===null&&s.isEmpty()?new we(null):new we(this.value,s)}else return this}}get(e){if(ue(e))return this.value;{const t=fe(e),r=this.children.get(t);return r?r.get(Ce(e)):null}}setTree(e,t){if(ue(e))return t;{const r=fe(e),s=(this.children.get(r)||new we(null)).setTree(Ce(e),t);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new we(this.value,o)}}fold(e){return this.fold_(_e(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Pe(e,i),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,_e(),t)}findOnPath_(e,t,r){const i=this.value?r(t,this.value):!1;if(i)return i;if(ue(e))return null;{const s=fe(e),o=this.children.get(s);return o?o.findOnPath_(Ce(e),Pe(t,s),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,_e(),t)}foreachOnPath_(e,t,r){if(ue(e))return this;{this.value&&r(t,this.value);const i=fe(e),s=this.children.get(i);return s?s.foreachOnPath_(Ce(e),Pe(t,i),r):new we(null)}}foreach(e){this.foreach_(_e(),e)}foreach_(e,t){this.children.inorderTraversal((r,i)=>{i.foreach_(Pe(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.writeTree_=e}static empty(){return new vt(new we(null))}}function Ar(n,e,t){if(ue(e))return new vt(new we(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Qe(i,e);return s=s.updateChild(o,t),new vt(n.writeTree_.set(i,s))}else{const i=new we(t),s=n.writeTree_.setTree(e,i);return new vt(s)}}}function Kl(n,e,t){let r=n;return st(t,(i,s)=>{r=Ar(r,Pe(e,i),s)}),r}function Yl(n,e){if(ue(e))return vt.empty();{const t=n.writeTree_.setTree(e,new we(null));return new vt(t)}}function Io(n,e){return On(n,e)!=null}function On(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Qe(t.path,e)):null}function Ql(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Ae,(r,i)=>{e.push(new ce(r,i))}):n.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new ce(r,i.value))}),e}function on(n,e){if(ue(e))return n;{const t=On(n,e);return t!=null?new vt(new we(t)):new vt(n.writeTree_.subtree(e))}}function ko(n){return n.writeTree_.isEmpty()}function nr(n,e){return Hf(_e(),n.writeTree_,e)}function Hf(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(V(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):t=Hf(Pe(n,i),s,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(Pe(n,".priority"),r)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(n,e){return Vf(e,n)}function U1(n,e,t,r,i){V(r>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:i}),i&&(n.visibleWrites=Ar(n.visibleWrites,e,t)),n.lastWriteId=r}function H1(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function W1(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);V(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let i=r.visible,s=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&z1(a,r.path)?i=!1:mt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return q1(n),!0;if(r.snap)n.visibleWrites=Yl(n.visibleWrites,r.path);else{const a=r.children;st(a,l=>{n.visibleWrites=Yl(n.visibleWrites,Pe(r.path,l))})}return!0}else return!1}function z1(n,e){if(n.snap)return mt(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&mt(Pe(n.path,t),e))return!0;return!1}function q1(n){n.visibleWrites=Wf(n.allWrites,V1,_e()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function V1(n){return n.visible}function Wf(n,e,t){let r=vt.empty();for(let i=0;i<n.length;++i){const s=n[i];if(e(s)){const o=s.path;let a;if(s.snap)mt(t,o)?(a=Qe(t,o),r=Ar(r,a,s.snap)):mt(o,t)&&(a=Qe(o,t),r=Ar(r,_e(),s.snap.getChild(a)));else if(s.children){if(mt(t,o))a=Qe(t,o),r=Kl(r,a,s.children);else if(mt(o,t))if(a=Qe(o,t),ue(a))r=Kl(r,_e(),s.children);else{const l=Zn(s.children,fe(a));if(l){const c=l.getChild(Ce(a));r=Ar(r,_e(),c)}}}else throw rr("WriteRecord should have .snap or .children")}}return r}function zf(n,e,t,r,i){if(!r&&!i){const s=On(n.visibleWrites,e);if(s!=null)return s;{const o=on(n.visibleWrites,e);if(ko(o))return t;if(t==null&&!Io(o,_e()))return null;{const a=t||ie.EMPTY_NODE;return nr(o,a)}}}else{const s=on(n.visibleWrites,e);if(!i&&ko(s))return t;if(!i&&t==null&&!Io(s,_e()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(mt(c.path,e)||mt(e,c.path))},a=Wf(n.allWrites,o,e),l=t||ie.EMPTY_NODE;return nr(a,l)}}}function j1(n,e,t){let r=ie.EMPTY_NODE;const i=On(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ae,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(t){const s=on(n.visibleWrites,e);return t.forEachChild(Ae,(o,a)=>{const l=nr(on(s,new Ee(o)),a);r=r.updateImmediateChild(o,l)}),Ql(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=on(n.visibleWrites,e);return Ql(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function G1(n,e,t,r,i){V(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Pe(e,t);if(Io(n.visibleWrites,s))return null;{const o=on(n.visibleWrites,s);return ko(o)?i.getChild(t):nr(o,i.getChild(t))}}function $1(n,e,t,r){const i=Pe(e,t),s=On(n.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(t)){const o=on(n.visibleWrites,i);return nr(o,r.getNode().getImmediateChild(t))}else return null}function K1(n,e){return On(n.visibleWrites,e)}function Y1(n,e,t,r,i,s,o){let a;const l=on(n.visibleWrites,e),c=On(l,_e());if(c!=null)a=c;else if(t!=null)a=nr(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],f=o.getCompare(),d=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let h=d.getNext();for(;h&&u.length<i;)f(h,r)!==0&&u.push(h),h=d.getNext();return u}else return[]}function Q1(){return{visibleWrites:vt.empty(),allWrites:[],lastWriteId:-1}}function Oi(n,e,t,r){return zf(n.writeTree,n.treePath,e,t,r)}function ga(n,e){return j1(n.writeTree,n.treePath,e)}function Xl(n,e,t,r){return G1(n.writeTree,n.treePath,e,t,r)}function Li(n,e){return K1(n.writeTree,Pe(n.treePath,e))}function X1(n,e,t,r,i,s){return Y1(n.writeTree,n.treePath,e,t,r,i,s)}function xa(n,e,t){return $1(n.writeTree,n.treePath,e,t)}function qf(n,e){return Vf(Pe(n.treePath,e),n.writeTree)}function Vf(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;V(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),V(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(t==="child_added"&&s==="child_removed")this.changeMap.set(r,Or(r,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&s==="child_changed")this.changeMap.set(r,Nr(r,i.oldSnap));else if(t==="child_changed"&&s==="child_added")this.changeMap.set(r,tr(r,e.snapshotNode));else if(t==="child_changed"&&s==="child_changed")this.changeMap.set(r,Or(r,e.snapshotNode,i.oldSnap));else throw rr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const jf=new Z1;class va{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new dn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return xa(this.writes_,e,r)}}getChildAfterChild(e,t,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Bn(this.viewCache_),s=X1(this.writes_,i,t,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ex(n){return{filter:n}}function tx(n,e){V(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),V(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function nx(n,e,t,r,i){const s=new J1;let o,a;if(t.type===gt.OVERWRITE){const c=t;c.source.fromUser?o=To(n,e,c.path,c.snap,r,i,s):(V(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ue(c.path),o=Mi(n,e,c.path,c.snap,r,i,a,s))}else if(t.type===gt.MERGE){const c=t;c.source.fromUser?o=ix(n,e,c.path,c.children,r,i,s):(V(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=So(n,e,c.path,c.children,r,i,a,s))}else if(t.type===gt.ACK_USER_WRITE){const c=t;c.revert?o=ax(n,e,c.path,r,i,s):o=sx(n,e,c.path,c.affectedTree,r,i,s)}else if(t.type===gt.LISTEN_COMPLETE)o=ox(n,e,t.path,r,s);else throw rr("Unknown operation type: "+t.type);const l=s.getChanges();return rx(e,o,l),{viewCache:o,changes:l}}function rx(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Ni(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&t.push(Of(Ni(e)))}}function Gf(n,e,t,r,i,s){const o=e.eventCache;if(Li(r,t)!=null)return e;{let a,l;if(ue(t))if(V(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Bn(e),u=c instanceof ie?c:ie.EMPTY_NODE,f=ga(r,u);a=n.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=Oi(r,Bn(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=fe(t);if(c===".priority"){V(fn(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const f=Xl(r,t,u,l);f!=null?a=n.filter.updatePriority(u,f):a=o.getNode()}else{const u=Ce(t);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Xl(r,t,o.getNode(),l);d!=null?f=o.getNode().getImmediateChild(c).updateChild(u,d):f=o.getNode().getImmediateChild(c)}else f=xa(r,c,e.serverCache);f!=null?a=n.filter.updateChild(o.getNode(),c,f,u,i,s):a=o.getNode()}}return wr(e,a,o.isFullyInitialized()||ue(t),n.filter.filtersNodes())}}function Mi(n,e,t,r,i,s,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(ue(t))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const h=l.getNode().updateChild(t,r);c=u.updateFullNode(l.getNode(),h,null)}else{const h=fe(t);if(!l.isCompleteForPath(t)&&fn(t)>1)return e;const _=Ce(t),x=l.getNode().getImmediateChild(h).updateChild(_,r);h===".priority"?c=u.updatePriority(l.getNode(),x):c=u.updateChild(l.getNode(),h,x,_,jf,null)}const f=Uf(e,c,l.isFullyInitialized()||ue(t),u.filtersNodes()),d=new va(i,f,s);return Gf(n,f,t,i,d,a)}function To(n,e,t,r,i,s,o){const a=e.eventCache;let l,c;const u=new va(i,e,s);if(ue(t))c=n.filter.updateFullNode(e.eventCache.getNode(),r,o),l=wr(e,c,!0,n.filter.filtersNodes());else{const f=fe(t);if(f===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),r),l=wr(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=Ce(t),h=a.getNode().getImmediateChild(f);let _;if(ue(d))_=r;else{const p=u.getCompleteChild(f);p!=null?wf(d)===".priority"&&p.getChild(If(d)).isEmpty()?_=p:_=p.updateChild(d,r):_=ie.EMPTY_NODE}if(h.equals(_))l=e;else{const p=n.filter.updateChild(a.getNode(),f,_,d,u,o);l=wr(e,p,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Jl(n,e){return n.eventCache.isCompleteForChild(e)}function ix(n,e,t,r,i,s,o){let a=e;return r.foreach((l,c)=>{const u=Pe(t,l);Jl(e,fe(u))&&(a=To(n,a,u,c,i,s,o))}),r.foreach((l,c)=>{const u=Pe(t,l);Jl(e,fe(u))||(a=To(n,a,u,c,i,s,o))}),a}function Zl(n,e,t){return t.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function So(n,e,t,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ue(t)?c=r:c=new we(null).setTree(t,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((f,d)=>{if(u.hasChild(f)){const h=e.serverCache.getNode().getImmediateChild(f),_=Zl(n,h,d);l=Mi(n,l,new Ee(f),_,i,s,o,a)}}),c.children.inorderTraversal((f,d)=>{const h=!e.serverCache.isCompleteForChild(f)&&d.value===null;if(!u.hasChild(f)&&!h){const _=e.serverCache.getNode().getImmediateChild(f),p=Zl(n,_,d);l=Mi(n,l,new Ee(f),p,i,s,o,a)}}),l}function sx(n,e,t,r,i,s,o){if(Li(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ue(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Mi(n,e,t,l.getNode().getChild(t),i,s,a,o);if(ue(t)){let c=new we(null);return l.getNode().forEachChild(sn,(u,f)=>{c=c.set(new Ee(u),f)}),So(n,e,t,c,i,s,a,o)}else return e}else{let c=new we(null);return r.foreach((u,f)=>{const d=Pe(t,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),So(n,e,t,c,i,s,a,o)}}function ox(n,e,t,r,i){const s=e.serverCache,o=Uf(e,s.getNode(),s.isFullyInitialized()||ue(t),s.isFiltered());return Gf(n,o,t,r,jf,i)}function ax(n,e,t,r,i,s){let o;if(Li(r,t)!=null)return e;{const a=new va(r,e,i),l=e.eventCache.getNode();let c;if(ue(t)||fe(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Oi(r,Bn(e));else{const f=e.serverCache.getNode();V(f instanceof ie,"serverChildren would be complete if leaf node"),u=ga(r,f)}u=u,c=n.filter.updateFullNode(l,u,s)}else{const u=fe(t);let f=xa(r,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=l.getImmediateChild(u)),f!=null?c=n.filter.updateChild(l,u,f,Ce(t),a,s):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,ie.EMPTY_NODE,Ce(t),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Oi(r,Bn(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Li(r,_e())!=null,wr(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new ha(r.getIndex()),s=I1(r);this.processor_=ex(s);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(ie.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(ie.EMPTY_NODE,a.getNode(),null),u=new dn(l,o.isFullyInitialized(),i.filtersNodes()),f=new dn(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Xi(f,u),this.eventGenerator_=new P1(this.query_)}get query(){return this.query_}}function cx(n){return n.viewCache_.serverCache.getNode()}function ux(n){return Ni(n.viewCache_)}function fx(n,e){const t=Bn(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!ue(e)&&!t.getImmediateChild(fe(e)).isEmpty())?t.getChild(e):null}function ec(n){return n.eventRegistrations_.length===0}function dx(n,e){n.eventRegistrations_.push(e)}function tc(n,e,t){const r=[];if(t){V(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(t,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<n.eventRegistrations_.length;++s){const o=n.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(s+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return r}function nc(n,e,t,r){e.type===gt.MERGE&&e.source.queryId!==null&&(V(Bn(n.viewCache_),"We should always have a full cache before handling merges"),V(Ni(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,s=nx(n.processor_,i,e,t,r);return tx(n.processor_,s.viewCache),V(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=s.viewCache,$f(n,s.changes,s.viewCache.eventCache.getNode(),null)}function hx(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Ae,(s,o)=>{r.push(tr(s,o))}),t.isFullyInitialized()&&r.push(Of(t.getNode())),$f(n,r,t.getNode(),e)}function $f(n,e,t,r){const i=r?[r]:n.eventRegistrations_;return N1(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ui;class Kf{constructor(){this.views=new Map}}function px(n){V(!Ui,"__referenceConstructor has already been defined"),Ui=n}function _x(){return V(Ui,"Reference.ts has not been loaded"),Ui}function mx(n){return n.views.size===0}function ya(n,e,t,r){const i=e.source.queryId;if(i!==null){const s=n.views.get(i);return V(s!=null,"SyncTree gave us an op for an invalid query."),nc(s,e,t,r)}else{let s=[];for(const o of n.views.values())s=s.concat(nc(o,e,t,r));return s}}function Yf(n,e,t,r,i){const s=e._queryIdentifier,o=n.views.get(s);if(!o){let a=Oi(t,i?r:null),l=!1;a?l=!0:r instanceof ie?(a=ga(t,r),l=!1):(a=ie.EMPTY_NODE,l=!1);const c=Xi(new dn(a,l,!1),new dn(r,i,!1));return new lx(e,c)}return o}function gx(n,e,t,r,i,s){const o=Yf(n,e,r,i,s);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),dx(o,t),hx(o,t)}function xx(n,e,t,r){const i=e._queryIdentifier,s=[];let o=[];const a=hn(n);if(i==="default")for(const[l,c]of n.views.entries())o=o.concat(tc(c,t,r)),ec(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=n.views.get(i);l&&(o=o.concat(tc(l,t,r)),ec(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!hn(n)&&s.push(new(_x())(e._repo,e._path)),{removed:s,events:o}}function Qf(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function an(n,e){let t=null;for(const r of n.views.values())t=t||fx(r,e);return t}function Xf(n,e){if(e._queryParams.loadsAllData())return Zi(n);{const r=e._queryIdentifier;return n.views.get(r)}}function Jf(n,e){return Xf(n,e)!=null}function hn(n){return Zi(n)!=null}function Zi(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hi;function vx(n){V(!Hi,"__referenceConstructor has already been defined"),Hi=n}function yx(){return V(Hi,"Reference.ts has not been loaded"),Hi}let Ex=1;class rc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new we(null),this.pendingWriteTree_=Q1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Zf(n,e,t,r,i){return U1(n.pendingWriteTree_,e,t,r,i),i?ei(n,new Fn(Mf(),e,t)):[]}function bn(n,e,t=!1){const r=H1(n.pendingWriteTree_,e);if(W1(n.pendingWriteTree_,e)){let s=new we(null);return r.snap!=null?s=s.set(_e(),!0):st(r.children,o=>{s=s.set(new Ee(o),!0)}),ei(n,new Pi(r.path,s,t))}else return[]}function Zr(n,e,t){return ei(n,new Fn(_a(),e,t))}function Cx(n,e,t){const r=we.fromObject(t);return ei(n,new Ur(_a(),e,r))}function bx(n,e){return ei(n,new Mr(_a(),e))}function wx(n,e,t){const r=Ca(n,t);if(r){const i=ba(r),s=i.path,o=i.queryId,a=Qe(s,e),l=new Mr(ma(o),a);return wa(n,s,l)}else return[]}function ed(n,e,t,r,i=!1){const s=e._path,o=n.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Jf(o,e))){const l=xx(o,e,t,r);mx(o)&&(n.syncPointTree_=n.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,f=n.syncPointTree_.findOnPath(s,(d,h)=>hn(h));if(u&&!f){const d=n.syncPointTree_.subtree(s);if(!d.isEmpty()){const h=Tx(d);for(let _=0;_<h.length;++_){const p=h[_],x=p.query,v=id(n,p);n.listenProvider_.startListening(Ir(x),Hr(n,x),v.hashFn,v.onComplete)}}}!f&&c.length>0&&!r&&(u?n.listenProvider_.stopListening(Ir(e),null):c.forEach(d=>{const h=n.queryToTagMap.get(es(d));n.listenProvider_.stopListening(Ir(d),h)}))}Sx(n,c)}return a}function td(n,e,t,r){const i=Ca(n,r);if(i!=null){const s=ba(i),o=s.path,a=s.queryId,l=Qe(o,e),c=new Fn(ma(a),l,t);return wa(n,o,c)}else return[]}function Ax(n,e,t,r){const i=Ca(n,r);if(i){const s=ba(i),o=s.path,a=s.queryId,l=Qe(o,e),c=we.fromObject(t),u=new Ur(ma(a),l,c);return wa(n,o,u)}else return[]}function Ix(n,e,t,r=!1){const i=e._path;let s=null,o=!1;n.syncPointTree_.foreachOnPath(i,(d,h)=>{const _=Qe(d,i);s=s||an(h,_),o=o||hn(h)});let a=n.syncPointTree_.get(i);a?(o=o||hn(a),s=s||an(a,_e())):(a=new Kf,n.syncPointTree_=n.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=ie.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((h,_)=>{const p=an(_,_e());p&&(s=s.updateImmediateChild(h,p))}));const c=Jf(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=es(e);V(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const h=Dx();n.queryToTagMap.set(d,h),n.tagToQueryMap.set(h,d)}const u=Ji(n.pendingWriteTree_,i);let f=gx(a,e,t,u,s,l);if(!c&&!o&&!r){const d=Xf(a,e);f=f.concat(Rx(n,e,d))}return f}function Ea(n,e,t){const i=n.pendingWriteTree_,s=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=Qe(o,e),c=an(a,l);if(c)return c});return zf(i,e,s,t,!0)}function kx(n,e){const t=e._path;let r=null;n.syncPointTree_.foreachOnPath(t,(c,u)=>{const f=Qe(c,t);r=r||an(u,f)});let i=n.syncPointTree_.get(t);i?r=r||an(i,_e()):(i=new Kf,n.syncPointTree_=n.syncPointTree_.set(t,i));const s=r!=null,o=s?new dn(r,!0,!1):null,a=Ji(n.pendingWriteTree_,e._path),l=Yf(i,e,a,s?o.getNode():ie.EMPTY_NODE,s);return ux(l)}function ei(n,e){return nd(e,n.syncPointTree_,null,Ji(n.pendingWriteTree_,_e()))}function nd(n,e,t,r){if(ue(n.path))return rd(n,e,t,r);{const i=e.get(_e());t==null&&i!=null&&(t=an(i,_e()));let s=[];const o=fe(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=qf(r,o);s=s.concat(nd(a,l,c,u))}return i&&(s=s.concat(ya(i,n,r,t))),s}}function rd(n,e,t,r){const i=e.get(_e());t==null&&i!=null&&(t=an(i,_e()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=qf(r,o),u=n.operationForChild(o);u&&(s=s.concat(rd(u,a,l,c)))}),i&&(s=s.concat(ya(i,n,r,t))),s}function id(n,e){const t=e.query,r=Hr(n,t);return{hashFn:()=>(cx(e)||ie.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?wx(n,t._path,r):bx(n,t._path);{const s=kg(i,t);return ed(n,t,null,s)}}}}function Hr(n,e){const t=es(e);return n.queryToTagMap.get(t)}function es(n){return n._path.toString()+"$"+n._queryIdentifier}function Ca(n,e){return n.tagToQueryMap.get(e)}function ba(n){const e=n.indexOf("$");return V(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Ee(n.substr(0,e))}}function wa(n,e,t){const r=n.syncPointTree_.get(e);V(r,"Missing sync point for query tag that we're tracking");const i=Ji(n.pendingWriteTree_,e);return ya(r,t,i,null)}function Tx(n){return n.fold((e,t,r)=>{if(t&&hn(t))return[Zi(t)];{let i=[];return t&&(i=Qf(t)),st(r,(s,o)=>{i=i.concat(o)}),i}})}function Ir(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(yx())(n._repo,n._path):n}function Sx(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const i=es(r),s=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(s)}}}function Dx(){return Ex++}function Rx(n,e,t){const r=e._path,i=Hr(n,e),s=id(n,t),o=n.listenProvider_.startListening(Ir(e),i,s.hashFn,s.onComplete),a=n.syncPointTree_.subtree(r);if(i)V(!hn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,f)=>{if(!ue(c)&&u&&hn(u))return[Zi(u).query];{let d=[];return u&&(d=d.concat(Qf(u).map(h=>h.query))),st(f,(h,_)=>{d=d.concat(_)}),d}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(Ir(u),Hr(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Aa(t)}node(){return this.node_}}class Ia{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Pe(this.path_,e);return new Ia(this.syncTree_,t)}node(){return Ea(this.syncTree_,this.path_)}}const Fx=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},ic=function(n,e,t){if(!n||typeof n!="object")return n;if(V(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Bx(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Px(n[".sv"],e);V(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Bx=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:V(!1,"Unexpected server value: "+n)}},Px=function(n,e,t){n.hasOwnProperty("increment")||V(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&V(!1,"Unexpected increment value: "+r);const i=e.node();if(V(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Nx=function(n,e,t,r){return ka(e,new Ia(t,n),r)},sd=function(n,e,t){return ka(n,new Aa(e),t)};function ka(n,e,t){const r=n.getPriority().val(),i=ic(r,e.getImmediateChild(".priority"),t);let s;if(n.isLeafNode()){const o=n,a=ic(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new Oe(a,Me(i)):n}else{const o=n;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Oe(i))),o.forEachChild(Ae,(a,l)=>{const c=ka(l,e.getImmediateChild(a),t);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function Sa(n,e){let t=e instanceof Ee?e:new Ee(e),r=n,i=fe(t);for(;i!==null;){const s=Zn(r.node.children,i)||{children:{},childCount:0};r=new Ta(i,r,s),t=Ce(t),i=fe(t)}return r}function cr(n){return n.node.value}function od(n,e){n.node.value=e,Do(n)}function ad(n){return n.node.childCount>0}function Ox(n){return cr(n)===void 0&&!ad(n)}function ts(n,e){st(n.node.children,(t,r)=>{e(new Ta(t,n,r))})}function ld(n,e,t,r){t&&e(n),ts(n,i=>{ld(i,e,!0)})}function Lx(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ti(n){return new Ee(n.parent===null?n.name:ti(n.parent)+"/"+n.name)}function Do(n){n.parent!==null&&Mx(n.parent,n.name,n)}function Mx(n,e,t){const r=Ox(t),i=St(n.node.children,e);r&&i?(delete n.node.children[e],n.node.childCount--,Do(n)):!r&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Do(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux=/[\[\].#$\/\u0000-\u001F\u007F]/,Hx=/[\[\].#$\u0000-\u001F\u007F]/,Es=10*1024*1024,cd=function(n){return typeof n=="string"&&n.length!==0&&!Ux.test(n)},ud=function(n){return typeof n=="string"&&n.length!==0&&!Hx.test(n)},Wx=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ud(n)},sc=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!oa(n)||n&&typeof n=="object"&&St(n,".sv")},zx=function(n,e,t,r){Da(Go(n,"value"),e,t)},Da=function(n,e,t){const r=t instanceof Ee?new o1(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+yn(r));if(typeof e=="function")throw new Error(n+"contains a function "+yn(r)+" with contents = "+e.toString());if(oa(e))throw new Error(n+"contains "+e.toString()+" "+yn(r));if(typeof e=="string"&&e.length>Es/3&&Gi(e)>Es)throw new Error(n+"contains a string greater than "+Es+" utf8 bytes "+yn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(st(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!cd(o)))throw new Error(n+" contains an invalid key ("+o+") "+yn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);a1(r,o),Da(n,a,r),l1(r)}),i&&s)throw new Error(n+' contains ".value" child '+yn(r)+" in addition to actual children.")}},fd=function(n,e,t,r){if(!ud(t))throw new Error(Go(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},qx=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),fd(n,e,t)},Vx=function(n,e){if(fe(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},jx=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!cd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Wx(t))throw new Error(Go(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function dd(n,e){let t=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();t!==null&&!kf(s,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:s}),t.events.push(i)}t&&n.eventLists_.push(t)}function Tt(n,e,t){dd(n,t),$x(n,r=>mt(r,e)||mt(e,r))}function $x(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const i=n.eventLists_[r];if(i){const s=i.path;e(s)?(Kx(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Kx(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();Cr&&Ge("event: "+t.toString()),lr(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yx="repo_interrupt",Qx=25;class Xx{constructor(e,t,r,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Gx,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Bi(),this.transactionQueueTree_=new Ta,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Jx(n,e,t){if(n.stats_=ca(n.repoInfo_),n.forceRestClient_||Rg())n.server_=new Fi(n.repoInfo_,(r,i,s,o)=>{oc(n,r,i,s,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>ac(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Be(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new Ut(n.repoInfo_,e,(r,i,s,o)=>{oc(n,r,i,s,o)},r=>{ac(n,r)},r=>{ev(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=Og(n.repoInfo_,()=>new B1(n.stats_,n.server_)),n.infoData_=new T1,n.infoSyncTree_=new rc({startListening:(r,i,s,o)=>{let a=[];const l=n.infoData_.getNode(r._path);return l.isEmpty()||(a=Zr(n.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Fa(n,"connected",!1),n.serverSyncTree_=new rc({startListening:(r,i,s,o)=>(n.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);Tt(n.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{n.server_.unlisten(r,i)}})}function Zx(n){const t=n.infoData_.getNode(new Ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Ra(n){return Fx({timestamp:Zx(n)})}function oc(n,e,t,r,i){n.dataUpdateCount++;const s=new Ee(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(r){const l=Ei(t,c=>Me(c));o=Ax(n.serverSyncTree_,s,l,i)}else{const l=Me(t);o=td(n.serverSyncTree_,s,l,i)}else if(r){const l=Ei(t,c=>Me(c));o=Cx(n.serverSyncTree_,s,l)}else{const l=Me(t);o=Zr(n.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=rs(n,s)),Tt(n.eventQueue_,a,o)}function ac(n,e){Fa(n,"connected",e),e===!1&&rv(n)}function ev(n,e){st(e,(t,r)=>{Fa(n,t,r)})}function Fa(n,e,t){const r=new Ee("/.info/"+e),i=Me(t);n.infoData_.updateSnapshot(r,i);const s=Zr(n.infoSyncTree_,r,i);Tt(n.eventQueue_,r,s)}function hd(n){return n.nextWriteId_++}function tv(n,e,t){const r=kx(n.serverSyncTree_,e);return r!=null?Promise.resolve(r):n.server_.get(e).then(i=>{const s=Me(i).withIndex(e._queryParams.getIndex());Ix(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Zr(n.serverSyncTree_,e._path,s);else{const a=Hr(n.serverSyncTree_,e);o=td(n.serverSyncTree_,e._path,s,a)}return Tt(n.eventQueue_,e._path,o),ed(n.serverSyncTree_,e,t,null,!0),s},i=>(ns(n,"get for query "+Be(e)+" failed: "+i),Promise.reject(new Error(i))))}function nv(n,e,t,r,i){ns(n,"set",{path:e.toString(),value:t,priority:r});const s=Ra(n),o=Me(t,r),a=Ea(n.serverSyncTree_,e),l=sd(o,a,s),c=hd(n),u=Zf(n.serverSyncTree_,e,l,c,!0);dd(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(d,h)=>{const _=d==="ok";_||nt("set at "+e+" failed: "+d);const p=bn(n.serverSyncTree_,c,!_);Tt(n.eventQueue_,e,p),sv(n,i,d,h)});const f=xd(n,e);rs(n,f),Tt(n.eventQueue_,f,[])}function rv(n){ns(n,"onDisconnectEvents");const e=Ra(n),t=Bi();Ao(n.onDisconnect_,_e(),(i,s)=>{const o=Nx(i,s,n.serverSyncTree_,e);Lf(t,i,o)});let r=[];Ao(t,_e(),(i,s)=>{r=r.concat(Zr(n.serverSyncTree_,i,s));const o=xd(n,i);rs(n,o)}),n.onDisconnect_=Bi(),Tt(n.eventQueue_,_e(),r)}function iv(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Yx)}function ns(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Ge(t,...e)}function sv(n,e,t,r){e&&lr(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function pd(n,e,t){return Ea(n.serverSyncTree_,e,t)||ie.EMPTY_NODE}function Ba(n,e=n.transactionQueueTree_){if(e||is(n,e),cr(e)){const t=md(n,e);V(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&ov(n,ti(e),t)}else ad(e)&&ts(e,t=>{Ba(n,t)})}function ov(n,e,t){const r=t.map(c=>c.currentWriteId),i=pd(n,e,r);let s=i;const o=i.hash();for(let c=0;c<t.length;c++){const u=t[c];V(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=Qe(e,u.path);s=s.updateChild(f,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;n.server_.put(l.toString(),a,c=>{ns(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const f=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(bn(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&f.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();is(n,Sa(n.transactionQueueTree_,e)),Ba(n,n.transactionQueueTree_),Tt(n.eventQueue_,e,u);for(let d=0;d<f.length;d++)lr(f[d])}else{if(c==="datastale")for(let f=0;f<t.length;f++)t[f].status===3?t[f].status=4:t[f].status=0;else{nt("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<t.length;f++)t[f].status=4,t[f].abortReason=c}rs(n,e)}},o)}function rs(n,e){const t=_d(n,e),r=ti(t),i=md(n,t);return av(n,i,r),r}function av(n,e,t){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Qe(t,l.path);let u=!1,f;if(V(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,f=l.abortReason,i=i.concat(bn(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Qx)u=!0,f="maxretry",i=i.concat(bn(n.serverSyncTree_,l.currentWriteId,!0));else{const d=pd(n,l.path,o);l.currentInputSnapshot=d;const h=e[a].update(d.val());if(h!==void 0){Da("transaction failed: Data returned ",h,l.path);let _=Me(h);typeof h=="object"&&h!=null&&St(h,".priority")||(_=_.updatePriority(d.getPriority()));const x=l.currentWriteId,v=Ra(n),m=sd(_,d,v);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=m,l.currentWriteId=hd(n),o.splice(o.indexOf(x),1),i=i.concat(Zf(n.serverSyncTree_,l.path,m,l.currentWriteId,l.applyLocally)),i=i.concat(bn(n.serverSyncTree_,x,!0))}else u=!0,f="nodata",i=i.concat(bn(n.serverSyncTree_,l.currentWriteId,!0))}Tt(n.eventQueue_,t,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}is(n,n.transactionQueueTree_);for(let a=0;a<r.length;a++)lr(r[a]);Ba(n,n.transactionQueueTree_)}function _d(n,e){let t,r=n.transactionQueueTree_;for(t=fe(e);t!==null&&cr(r)===void 0;)r=Sa(r,t),e=Ce(e),t=fe(e);return r}function md(n,e){const t=[];return gd(n,e,t),t.sort((r,i)=>r.order-i.order),t}function gd(n,e,t){const r=cr(e);if(r)for(let i=0;i<r.length;i++)t.push(r[i]);ts(e,i=>{gd(n,i,t)})}function is(n,e){const t=cr(e);if(t){let r=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[r]=t[i],r++);t.length=r,od(e,t.length>0?t:void 0)}ts(e,r=>{is(n,r)})}function xd(n,e){const t=ti(_d(n,e)),r=Sa(n.transactionQueueTree_,e);return Lx(r,i=>{Cs(n,i)}),Cs(n,r),ld(r,i=>{Cs(n,i)}),t}function Cs(n,e){const t=cr(e);if(t){const r=[];let i=[],s=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(V(s===o-1,"All SENT items should be at beginning of queue."),s=o,t[o].status=3,t[o].abortReason="set"):(V(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(bn(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&r.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?od(e,void 0):t.length=s+1,Tt(n.eventQueue_,ti(e),i);for(let o=0;o<r.length;o++)lr(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let i=t[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function cv(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):nt(`Invalid query segment '${t}' in query '${n}'`)}return e}const lc=function(n,e){const t=uv(n),r=t.namespace;t.domain==="firebase.com"&&zt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&zt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Cg();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new _f(t.host,t.secure,r,i,e,"",r!==t.subdomain),path:new Ee(t.pathString)}},uv=function(n){let e="",t="",r="",i="",s="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let f=n.indexOf("?");f===-1&&(f=n.length),e=n.substring(0,Math.min(u,f)),u<f&&(i=lv(n.substring(u,f)));const d=cv(n.substring(Math.min(n.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const h=e.slice(0,c);if(h.toLowerCase()==="localhost")t="localhost";else if(h.split(".").length<=2)t=h;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),t=e.substring(_+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:t,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e,t,r,i){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Be(this.snapshot.exportVal())}}class dv{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return V(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,t,r,i){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=i}get key(){return ue(this._path)?null:wf(this._path)}get ref(){return new qt(this._repo,this._path)}get _queryIdentifier(){const e=Gl(this._queryParams),t=aa(e);return t==="{}"?"default":t}get _queryObject(){return Gl(this._queryParams)}isEqual(e){if(e=qe(e),!(e instanceof ss))return!1;const t=this._repo===e._repo,r=kf(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+s1(this._path)}}function pv(n,e){if(n._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function _v(n){let e=null,t=null;if(n.hasStart()&&(e=n.getIndexStartValue()),n.hasEnd()&&(t=n.getIndexEndValue()),n.getIndex()===sn){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(n.hasStart()){if(n.getIndexStartName()!==Rn)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(n.hasEnd()){if(n.getIndexEndName()!==un)throw new Error(r);if(typeof t!="string")throw new Error(i)}}else if(n.getIndex()===Ae){if(e!=null&&!sc(e)||t!=null&&!sc(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(V(n.getIndex()instanceof Pf||n.getIndex()===Nf,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}class qt extends ss{constructor(e,t){super(e,t,new pa,!1)}get parent(){const e=If(this._path);return e===null?null:new qt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Wr{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Ee(e),r=Ro(this.ref,e);return new Wr(this._node.getChild(t),r,Ae)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Wr(i,Ro(this.ref,r),Ae)))}hasChild(e){const t=new Ee(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function bs(n,e){return n=qe(n),n._checkNotDeleted("ref"),e!==void 0?Ro(n._root,e):n._root}function Ro(n,e){return n=qe(n),fe(n._path)===null?qx("child","path",e):fd("child","path",e),new qt(n._repo,Pe(n._path,e))}function cc(n,e){n=qe(n),Vx("set",n._path),zx("set",e,n._path);const t=new ji;return nv(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function mv(n){n=qe(n);const e=new hv(()=>{}),t=new Pa(e);return tv(n._repo,n,t).then(r=>new Wr(r,new qt(n._repo,n._path),n._queryParams.getIndex()))}class Pa{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new fv("value",this,new Wr(e.snapshotNode,new qt(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new dv(this,e,t):null}matches(e){return e instanceof Pa?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class gv{}class xv extends gv{constructor(){super(...arguments),this.type="orderByKey"}_apply(e){pv(e,"orderByKey");const t=k1(e._queryParams,sn);return _v(t),new ss(e._repo,e._path,t,!0)}}function vv(){return new xv}function yv(n,...e){let t=qe(n);for(const r of e)t=r._apply(t);return t}px(qt);vx(qt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev="FIREBASE_DATABASE_EMULATOR_HOST",Fo={};let Cv=!1;function bv(n,e,t,r){n.repoInfo_=new _f(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),r&&(n.authTokenProvider_=r)}function wv(n,e,t,r,i){let s=r||n.options.databaseURL;s===void 0&&(n.options.projectId||zt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ge("Using default host for project ",n.options.projectId),s=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=lc(s,i),a=o.repoInfo,l;typeof process<"u"&&Tl&&(l=Tl[Ev]),l?(s=`http://${l}?ns=${a.namespace}`,o=lc(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new Bg(n.name,n.options,e);jx("Invalid Firebase Database URL",o),ue(o.path)||zt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Iv(a,n,c,new Fg(n.name,t));return new kv(u,n)}function Av(n,e){const t=Fo[e];(!t||t[n.key]!==n)&&zt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),iv(n),delete t[n.key]}function Iv(n,e,t,r){let i=Fo[e.name];i||(i={},Fo[e.name]=i);let s=i[n.toURLString()];return s&&zt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Xx(n,Cv,t,r),i[n.toURLString()]=s,s}class kv{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Jx(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new qt(this._repo,_e())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Av(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&zt("Cannot call "+e+" on a deleted database.")}}function Tv(n=Qo(),e){const t=Yo(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=Ih("database");r&&Sv(t,...r)}return t}function Sv(n,e,t,r={}){n=qe(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&zt("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&zt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new hi(hi.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:kh(r.mockUserToken,n.app.options.projectId);s=new hi(o)}bv(i,e,t,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dv(n){mg(sr),er(new kn("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return wv(r,i,s,t)},"PUBLIC").setMultipleInstances(!0)),rn(Sl,Dl,n),rn(Sl,Dl,"esm2017")}Ut.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ut.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Dv();const Rv={apiKey:"AIzaSyDKnNr9NGleuqY_S5sWlkzj6NeVb-j7eu0",authDomain:"ff-site-user-data.firebaseapp.com",projectId:"ff-site-user-data",storageBucket:"ff-site-user-data.firebasestorage.app",messagingSenderId:"488410681248",appId:"1:488410681248:web:1982ba784b3061940cdec5",measurementId:"G-ZHZM7JVTXY"};mu(Rv,"sud");const vd=Qo("sud"),ni="https://xt8ss.github.io/ff-site-data";let Jn;fetch(ni+"/user-ranks.json").then(async n=>Jn=await n.json());const ut=pg(vd),ws=Tv(vd),Fv={logIn:"material-symbols:login-rounded",logOut:"material-symbols:logout-rounded"},Bv={Arbewhy:{shop:"The Gold Coin",role:"Vendor",realm:"The Frontier",image:"8/80/Arbewhy2.png"},"Awoken Croc Carl":{shop:"Carl's Delicacies*",role:"Vendor",realm:"The Frontier",image:"2/22/Awoken_Croc_Carl.png"},"Benny Oreman":{shop:"Benny's Mining Supply",role:"Vendor",realm:"The Frontier",image:"b/b5/Benny_Oreman.png"},"Clothing Seller":{shop:"Clothing Boutique",role:"Vendor",realm:"The Frontier",image:"d/d4/Clothing_seller-2.png"},Construct:{shop:"Construct",role:"Vendor",realm:"The Frontier",image:"3/39/ConstructNPC.png"},Frog:{shop:"Frog Goods",role:"Vendor",realm:"The Nightmare",image:"d/d2/Frog_%28Vendor%29.png",article:"Frog (Vendor)"},Gargoyle:{role:"Item Dealer",realm:"The Nightmare",image:"4/44/Gargoyle.png"},"Gnome Wizard Master":{shop:"Magical Merchandise",role:"Vendor",realm:"The Frontier",image:"a/a9/Gnome_Wizard_Master-X.png"},"Greedy Wizard":{role:"Transportation",realm:"The Frontier*",image:"b/bd/Greedy_Wizard.png"},"Green Golem":{shop:"Green Golem's Goods",role:"Vendor",realm:"The Nightmare*",image:"f/f1/Green_Golem.png"},"Gunner Gary":{shop:"Garry's Guns",role:"Vendor",realm:"The Frontier",image:"a/a0/Gunner_Gary.png"},"Kind Wizard":{role:"Transportation",realm:"The Frontier*",image:"2/2b/Kind_Wizard.png"},"Knight Antonius":{shop:"Antonius' Armor Reserve",role:"Vendor",realm:"The Frontier",image:"3/35/Knight_Antonius.png"},"Linkman the Junkman":{shop:"Junkman's Junk",role:"Vendor",realm:"The Frontier",image:"/5/5e/Screenshot_594.png"},"Looney Lenny the Hedgeknight":{shop:"Hedge Knight's Tent",role:"Vendor",realm:"The Frontier",image:"6/6d/Looney_Lenny_the_Hedgeknight.png"},Luhr:{shop:"Luhr's Tackle",role:"Vendor",realm:"The Frontier",image:"6/6d/Luhr.png"},"MANAGER SUPREME":{shop:"SUPREME DEALS",role:"Vendor",realm:"The Nightmare",image:"8/84/Manager_Supreme.png"},"Mr. Sims":{shop:"Sim's Seed Supply",role:"Vendor",realm:"The Frontier",image:"7/7b/Mr._Sims.png"},"No-Legs":{shop:"No-Legs",role:"Vendor",realm:"The Nightmare",image:"0/08/No-Legs.png"},"Ollie Ozzwald":{shop:"Ollie's This 'n That",role:"Vendor",realm:"The Frontier",image:"c/ce/Ollie_Ozzwald.png"},"Otherworldly Weaponsmith":{shop:"Otherworld Armory",role:"Vendor",realm:"The Frontier",image:"0/0e/OtherwordlyWeaponsmith.png"},Parasite:{role:"Boss",realm:"The Frontier*",image:"7/7d/Parasite_Card_New_Image.png"},"Rabbit Hole":{role:"Portal",realm:"The Frontier",image:"3/3c/Screen_Shot_2018-06-11_at_6.48.26_PM.png"},"Reus the Smith":{shop:"Smith's Swords",role:"Vendor",realm:"The Frontier",image:"e/ed/Reus_The_Smith.png"},"Rising Waters":{shop:"Rising Waters",role:"Vendor",realm:"The Nightmare",image:"e/ee/Rising_Waters.png"},Slayer:{role:"Task Giver",realm:"The Frontier*",image:"9/90/Slayer_Outside.png"},Stick:{shop:"Stick Stuff",role:"Vendor",realm:"The Frontier",image:"a/aa/Stick.png"},Strangeman:{shop:"Strangeman's Domain",role:"Vendor",realm:"The Frontier",image:"7/70/Strangeman%27sTeleport.png"},"The Great Eyeman":{shop:"The Eye's Wares",role:"Vendor",realm:"The Frontier",image:"8/8b/The_Great_Eyeman.png"},"Toaster Josh":{role:"Quest Giver",realm:"The Nightmare",image:"d/d9/Toaster_Josh.png"},Vhitmire:{shop:"Vhitmire's Mystery Traveling Store",role:"Vendor",realm:"The Frontier",image:"2/23/Vhitmire.png"}},Vn={day:"&#127774",night:"&#127769"},uc="https://fantastic-frontier-roblox.fandom.com/wiki/",fc="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/";var ae=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Pv(n){if(n.__esModule)return n;var e=n.default;if(typeof e=="function"){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(r){var i=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(t,r,i.get?i:{enumerable:!0,get:function(){return n[r]}})}),t}var yd={exports:{}};function Nv(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var As={exports:{}};const Ov={},Lv=Object.freeze(Object.defineProperty({__proto__:null,default:Ov},Symbol.toStringTag,{value:"Module"})),Mv=Pv(Lv);var dc;function he(){return dc||(dc=1,function(n,e){(function(t,r){n.exports=r()})(ae,function(){var t=t||function(r,i){var s;if(typeof window<"u"&&window.crypto&&(s=window.crypto),typeof self<"u"&&self.crypto&&(s=self.crypto),typeof globalThis<"u"&&globalThis.crypto&&(s=globalThis.crypto),!s&&typeof window<"u"&&window.msCrypto&&(s=window.msCrypto),!s&&typeof ae<"u"&&ae.crypto&&(s=ae.crypto),!s&&typeof Nv=="function")try{s=Mv}catch{}var o=function(){if(s){if(typeof s.getRandomValues=="function")try{return s.getRandomValues(new Uint32Array(1))[0]}catch{}if(typeof s.randomBytes=="function")try{return s.randomBytes(4).readInt32LE()}catch{}}throw new Error("Native crypto module could not be used to get secure random number.")},a=Object.create||function(){function m(){}return function(g){var y;return m.prototype=g,y=new m,m.prototype=null,y}}(),l={},c=l.lib={},u=c.Base=function(){return{extend:function(m){var g=a(this);return m&&g.mixIn(m),(!g.hasOwnProperty("init")||this.init===g.init)&&(g.init=function(){g.$super.init.apply(this,arguments)}),g.init.prototype=g,g.$super=this,g},create:function(){var m=this.extend();return m.init.apply(m,arguments),m},init:function(){},mixIn:function(m){for(var g in m)m.hasOwnProperty(g)&&(this[g]=m[g]);m.hasOwnProperty("toString")&&(this.toString=m.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),f=c.WordArray=u.extend({init:function(m,g){m=this.words=m||[],g!=i?this.sigBytes=g:this.sigBytes=m.length*4},toString:function(m){return(m||h).stringify(this)},concat:function(m){var g=this.words,y=m.words,E=this.sigBytes,b=m.sigBytes;if(this.clamp(),E%4)for(var I=0;I<b;I++){var C=y[I>>>2]>>>24-I%4*8&255;g[E+I>>>2]|=C<<24-(E+I)%4*8}else for(var F=0;F<b;F+=4)g[E+F>>>2]=y[F>>>2];return this.sigBytes+=b,this},clamp:function(){var m=this.words,g=this.sigBytes;m[g>>>2]&=4294967295<<32-g%4*8,m.length=r.ceil(g/4)},clone:function(){var m=u.clone.call(this);return m.words=this.words.slice(0),m},random:function(m){for(var g=[],y=0;y<m;y+=4)g.push(o());return new f.init(g,m)}}),d=l.enc={},h=d.Hex={stringify:function(m){for(var g=m.words,y=m.sigBytes,E=[],b=0;b<y;b++){var I=g[b>>>2]>>>24-b%4*8&255;E.push((I>>>4).toString(16)),E.push((I&15).toString(16))}return E.join("")},parse:function(m){for(var g=m.length,y=[],E=0;E<g;E+=2)y[E>>>3]|=parseInt(m.substr(E,2),16)<<24-E%8*4;return new f.init(y,g/2)}},_=d.Latin1={stringify:function(m){for(var g=m.words,y=m.sigBytes,E=[],b=0;b<y;b++){var I=g[b>>>2]>>>24-b%4*8&255;E.push(String.fromCharCode(I))}return E.join("")},parse:function(m){for(var g=m.length,y=[],E=0;E<g;E++)y[E>>>2]|=(m.charCodeAt(E)&255)<<24-E%4*8;return new f.init(y,g)}},p=d.Utf8={stringify:function(m){try{return decodeURIComponent(escape(_.stringify(m)))}catch{throw new Error("Malformed UTF-8 data")}},parse:function(m){return _.parse(unescape(encodeURIComponent(m)))}},x=c.BufferedBlockAlgorithm=u.extend({reset:function(){this._data=new f.init,this._nDataBytes=0},_append:function(m){typeof m=="string"&&(m=p.parse(m)),this._data.concat(m),this._nDataBytes+=m.sigBytes},_process:function(m){var g,y=this._data,E=y.words,b=y.sigBytes,I=this.blockSize,C=I*4,F=b/C;m?F=r.ceil(F):F=r.max((F|0)-this._minBufferSize,0);var A=F*I,k=r.min(A*4,b);if(A){for(var N=0;N<A;N+=I)this._doProcessBlock(E,N);g=E.splice(0,A),y.sigBytes-=k}return new f.init(g,k)},clone:function(){var m=u.clone.call(this);return m._data=this._data.clone(),m},_minBufferSize:0});c.Hasher=x.extend({cfg:u.extend(),init:function(m){this.cfg=this.cfg.extend(m),this.reset()},reset:function(){x.reset.call(this),this._doReset()},update:function(m){return this._append(m),this._process(),this},finalize:function(m){m&&this._append(m);var g=this._doFinalize();return g},blockSize:16,_createHelper:function(m){return function(g,y){return new m.init(y).finalize(g)}},_createHmacHelper:function(m){return function(g,y){return new v.HMAC.init(m,y).finalize(g)}}});var v=l.algo={};return l}(Math);return t})}(As)),As.exports}var Is={exports:{}},hc;function os(){return hc||(hc=1,function(n,e){(function(t,r){n.exports=r(he())})(ae,function(t){return function(r){var i=t,s=i.lib,o=s.Base,a=s.WordArray,l=i.x64={};l.Word=o.extend({init:function(c,u){this.high=c,this.low=u}}),l.WordArray=o.extend({init:function(c,u){c=this.words=c||[],u!=r?this.sigBytes=u:this.sigBytes=c.length*8},toX32:function(){for(var c=this.words,u=c.length,f=[],d=0;d<u;d++){var h=c[d];f.push(h.high),f.push(h.low)}return a.create(f,this.sigBytes)},clone:function(){for(var c=o.clone.call(this),u=c.words=this.words.slice(0),f=u.length,d=0;d<f;d++)u[d]=u[d].clone();return c}})}(),t})}(Is)),Is.exports}var ks={exports:{}},pc;function Uv(){return pc||(pc=1,function(n,e){(function(t,r){n.exports=r(he())})(ae,function(t){return function(){if(typeof ArrayBuffer=="function"){var r=t,i=r.lib,s=i.WordArray,o=s.init,a=s.init=function(l){if(l instanceof ArrayBuffer&&(l=new Uint8Array(l)),(l instanceof Int8Array||typeof Uint8ClampedArray<"u"&&l instanceof Uint8ClampedArray||l instanceof Int16Array||l instanceof Uint16Array||l instanceof Int32Array||l instanceof Uint32Array||l instanceof Float32Array||l instanceof Float64Array)&&(l=new Uint8Array(l.buffer,l.byteOffset,l.byteLength)),l instanceof Uint8Array){for(var c=l.byteLength,u=[],f=0;f<c;f++)u[f>>>2]|=l[f]<<24-f%4*8;o.call(this,u,c)}else o.apply(this,arguments)};a.prototype=s}}(),t.lib.WordArray})}(ks)),ks.exports}var Ts={exports:{}},_c;function Hv(){return _c||(_c=1,function(n,e){(function(t,r){n.exports=r(he())})(ae,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=r.enc;o.Utf16=o.Utf16BE={stringify:function(l){for(var c=l.words,u=l.sigBytes,f=[],d=0;d<u;d+=2){var h=c[d>>>2]>>>16-d%4*8&65535;f.push(String.fromCharCode(h))}return f.join("")},parse:function(l){for(var c=l.length,u=[],f=0;f<c;f++)u[f>>>1]|=l.charCodeAt(f)<<16-f%2*16;return s.create(u,c*2)}},o.Utf16LE={stringify:function(l){for(var c=l.words,u=l.sigBytes,f=[],d=0;d<u;d+=2){var h=a(c[d>>>2]>>>16-d%4*8&65535);f.push(String.fromCharCode(h))}return f.join("")},parse:function(l){for(var c=l.length,u=[],f=0;f<c;f++)u[f>>>1]|=a(l.charCodeAt(f)<<16-f%2*16);return s.create(u,c*2)}};function a(l){return l<<8&4278255360|l>>>8&16711935}}(),t.enc.Utf16})}(Ts)),Ts.exports}var Ss={exports:{}},mc;function Ln(){return mc||(mc=1,function(n,e){(function(t,r){n.exports=r(he())})(ae,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=r.enc;o.Base64={stringify:function(l){var c=l.words,u=l.sigBytes,f=this._map;l.clamp();for(var d=[],h=0;h<u;h+=3)for(var _=c[h>>>2]>>>24-h%4*8&255,p=c[h+1>>>2]>>>24-(h+1)%4*8&255,x=c[h+2>>>2]>>>24-(h+2)%4*8&255,v=_<<16|p<<8|x,m=0;m<4&&h+m*.75<u;m++)d.push(f.charAt(v>>>6*(3-m)&63));var g=f.charAt(64);if(g)for(;d.length%4;)d.push(g);return d.join("")},parse:function(l){var c=l.length,u=this._map,f=this._reverseMap;if(!f){f=this._reverseMap=[];for(var d=0;d<u.length;d++)f[u.charCodeAt(d)]=d}var h=u.charAt(64);if(h){var _=l.indexOf(h);_!==-1&&(c=_)}return a(l,c,f)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};function a(l,c,u){for(var f=[],d=0,h=0;h<c;h++)if(h%4){var _=u[l.charCodeAt(h-1)]<<h%4*2,p=u[l.charCodeAt(h)]>>>6-h%4*2,x=_|p;f[d>>>2]|=x<<24-d%4*8,d++}return s.create(f,d)}}(),t.enc.Base64})}(Ss)),Ss.exports}var Ds={exports:{}},gc;function Wv(){return gc||(gc=1,function(n,e){(function(t,r){n.exports=r(he())})(ae,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=r.enc;o.Base64url={stringify:function(l,c){c===void 0&&(c=!0);var u=l.words,f=l.sigBytes,d=c?this._safe_map:this._map;l.clamp();for(var h=[],_=0;_<f;_+=3)for(var p=u[_>>>2]>>>24-_%4*8&255,x=u[_+1>>>2]>>>24-(_+1)%4*8&255,v=u[_+2>>>2]>>>24-(_+2)%4*8&255,m=p<<16|x<<8|v,g=0;g<4&&_+g*.75<f;g++)h.push(d.charAt(m>>>6*(3-g)&63));var y=d.charAt(64);if(y)for(;h.length%4;)h.push(y);return h.join("")},parse:function(l,c){c===void 0&&(c=!0);var u=l.length,f=c?this._safe_map:this._map,d=this._reverseMap;if(!d){d=this._reverseMap=[];for(var h=0;h<f.length;h++)d[f.charCodeAt(h)]=h}var _=f.charAt(64);if(_){var p=l.indexOf(_);p!==-1&&(u=p)}return a(l,u,d)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",_safe_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"};function a(l,c,u){for(var f=[],d=0,h=0;h<c;h++)if(h%4){var _=u[l.charCodeAt(h-1)]<<h%4*2,p=u[l.charCodeAt(h)]>>>6-h%4*2,x=_|p;f[d>>>2]|=x<<24-d%4*8,d++}return s.create(f,d)}}(),t.enc.Base64url})}(Ds)),Ds.exports}var Rs={exports:{}},xc;function Mn(){return xc||(xc=1,function(n,e){(function(t,r){n.exports=r(he())})(ae,function(t){return function(r){var i=t,s=i.lib,o=s.WordArray,a=s.Hasher,l=i.algo,c=[];(function(){for(var p=0;p<64;p++)c[p]=r.abs(r.sin(p+1))*4294967296|0})();var u=l.MD5=a.extend({_doReset:function(){this._hash=new o.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(p,x){for(var v=0;v<16;v++){var m=x+v,g=p[m];p[m]=(g<<8|g>>>24)&16711935|(g<<24|g>>>8)&4278255360}var y=this._hash.words,E=p[x+0],b=p[x+1],I=p[x+2],C=p[x+3],F=p[x+4],A=p[x+5],k=p[x+6],N=p[x+7],D=p[x+8],L=p[x+9],G=p[x+10],W=p[x+11],$=p[x+12],Q=p[x+13],J=p[x+14],X=p[x+15],P=y[0],H=y[1],O=y[2],U=y[3];P=f(P,H,O,U,E,7,c[0]),U=f(U,P,H,O,b,12,c[1]),O=f(O,U,P,H,I,17,c[2]),H=f(H,O,U,P,C,22,c[3]),P=f(P,H,O,U,F,7,c[4]),U=f(U,P,H,O,A,12,c[5]),O=f(O,U,P,H,k,17,c[6]),H=f(H,O,U,P,N,22,c[7]),P=f(P,H,O,U,D,7,c[8]),U=f(U,P,H,O,L,12,c[9]),O=f(O,U,P,H,G,17,c[10]),H=f(H,O,U,P,W,22,c[11]),P=f(P,H,O,U,$,7,c[12]),U=f(U,P,H,O,Q,12,c[13]),O=f(O,U,P,H,J,17,c[14]),H=f(H,O,U,P,X,22,c[15]),P=d(P,H,O,U,b,5,c[16]),U=d(U,P,H,O,k,9,c[17]),O=d(O,U,P,H,W,14,c[18]),H=d(H,O,U,P,E,20,c[19]),P=d(P,H,O,U,A,5,c[20]),U=d(U,P,H,O,G,9,c[21]),O=d(O,U,P,H,X,14,c[22]),H=d(H,O,U,P,F,20,c[23]),P=d(P,H,O,U,L,5,c[24]),U=d(U,P,H,O,J,9,c[25]),O=d(O,U,P,H,C,14,c[26]),H=d(H,O,U,P,D,20,c[27]),P=d(P,H,O,U,Q,5,c[28]),U=d(U,P,H,O,I,9,c[29]),O=d(O,U,P,H,N,14,c[30]),H=d(H,O,U,P,$,20,c[31]),P=h(P,H,O,U,A,4,c[32]),U=h(U,P,H,O,D,11,c[33]),O=h(O,U,P,H,W,16,c[34]),H=h(H,O,U,P,J,23,c[35]),P=h(P,H,O,U,b,4,c[36]),U=h(U,P,H,O,F,11,c[37]),O=h(O,U,P,H,N,16,c[38]),H=h(H,O,U,P,G,23,c[39]),P=h(P,H,O,U,Q,4,c[40]),U=h(U,P,H,O,E,11,c[41]),O=h(O,U,P,H,C,16,c[42]),H=h(H,O,U,P,k,23,c[43]),P=h(P,H,O,U,L,4,c[44]),U=h(U,P,H,O,$,11,c[45]),O=h(O,U,P,H,X,16,c[46]),H=h(H,O,U,P,I,23,c[47]),P=_(P,H,O,U,E,6,c[48]),U=_(U,P,H,O,N,10,c[49]),O=_(O,U,P,H,J,15,c[50]),H=_(H,O,U,P,A,21,c[51]),P=_(P,H,O,U,$,6,c[52]),U=_(U,P,H,O,C,10,c[53]),O=_(O,U,P,H,G,15,c[54]),H=_(H,O,U,P,b,21,c[55]),P=_(P,H,O,U,D,6,c[56]),U=_(U,P,H,O,X,10,c[57]),O=_(O,U,P,H,k,15,c[58]),H=_(H,O,U,P,Q,21,c[59]),P=_(P,H,O,U,F,6,c[60]),U=_(U,P,H,O,W,10,c[61]),O=_(O,U,P,H,I,15,c[62]),H=_(H,O,U,P,L,21,c[63]),y[0]=y[0]+P|0,y[1]=y[1]+H|0,y[2]=y[2]+O|0,y[3]=y[3]+U|0},_doFinalize:function(){var p=this._data,x=p.words,v=this._nDataBytes*8,m=p.sigBytes*8;x[m>>>5]|=128<<24-m%32;var g=r.floor(v/4294967296),y=v;x[(m+64>>>9<<4)+15]=(g<<8|g>>>24)&16711935|(g<<24|g>>>8)&4278255360,x[(m+64>>>9<<4)+14]=(y<<8|y>>>24)&16711935|(y<<24|y>>>8)&4278255360,p.sigBytes=(x.length+1)*4,this._process();for(var E=this._hash,b=E.words,I=0;I<4;I++){var C=b[I];b[I]=(C<<8|C>>>24)&16711935|(C<<24|C>>>8)&4278255360}return E},clone:function(){var p=a.clone.call(this);return p._hash=this._hash.clone(),p}});function f(p,x,v,m,g,y,E){var b=p+(x&v|~x&m)+g+E;return(b<<y|b>>>32-y)+x}function d(p,x,v,m,g,y,E){var b=p+(x&m|v&~m)+g+E;return(b<<y|b>>>32-y)+x}function h(p,x,v,m,g,y,E){var b=p+(x^v^m)+g+E;return(b<<y|b>>>32-y)+x}function _(p,x,v,m,g,y,E){var b=p+(v^(x|~m))+g+E;return(b<<y|b>>>32-y)+x}i.MD5=a._createHelper(u),i.HmacMD5=a._createHmacHelper(u)}(Math),t.MD5})}(Rs)),Rs.exports}var Fs={exports:{}},vc;function Ed(){return vc||(vc=1,function(n,e){(function(t,r){n.exports=r(he())})(ae,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=i.Hasher,a=r.algo,l=[],c=a.SHA1=o.extend({_doReset:function(){this._hash=new s.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(u,f){for(var d=this._hash.words,h=d[0],_=d[1],p=d[2],x=d[3],v=d[4],m=0;m<80;m++){if(m<16)l[m]=u[f+m]|0;else{var g=l[m-3]^l[m-8]^l[m-14]^l[m-16];l[m]=g<<1|g>>>31}var y=(h<<5|h>>>27)+v+l[m];m<20?y+=(_&p|~_&x)+1518500249:m<40?y+=(_^p^x)+1859775393:m<60?y+=(_&p|_&x|p&x)-1894007588:y+=(_^p^x)-899497514,v=x,x=p,p=_<<30|_>>>2,_=h,h=y}d[0]=d[0]+h|0,d[1]=d[1]+_|0,d[2]=d[2]+p|0,d[3]=d[3]+x|0,d[4]=d[4]+v|0},_doFinalize:function(){var u=this._data,f=u.words,d=this._nDataBytes*8,h=u.sigBytes*8;return f[h>>>5]|=128<<24-h%32,f[(h+64>>>9<<4)+14]=Math.floor(d/4294967296),f[(h+64>>>9<<4)+15]=d,u.sigBytes=f.length*4,this._process(),this._hash},clone:function(){var u=o.clone.call(this);return u._hash=this._hash.clone(),u}});r.SHA1=o._createHelper(c),r.HmacSHA1=o._createHmacHelper(c)}(),t.SHA1})}(Fs)),Fs.exports}var Bs={exports:{}},yc;function Na(){return yc||(yc=1,function(n,e){(function(t,r){n.exports=r(he())})(ae,function(t){return function(r){var i=t,s=i.lib,o=s.WordArray,a=s.Hasher,l=i.algo,c=[],u=[];(function(){function h(v){for(var m=r.sqrt(v),g=2;g<=m;g++)if(!(v%g))return!1;return!0}function _(v){return(v-(v|0))*4294967296|0}for(var p=2,x=0;x<64;)h(p)&&(x<8&&(c[x]=_(r.pow(p,1/2))),u[x]=_(r.pow(p,1/3)),x++),p++})();var f=[],d=l.SHA256=a.extend({_doReset:function(){this._hash=new o.init(c.slice(0))},_doProcessBlock:function(h,_){for(var p=this._hash.words,x=p[0],v=p[1],m=p[2],g=p[3],y=p[4],E=p[5],b=p[6],I=p[7],C=0;C<64;C++){if(C<16)f[C]=h[_+C]|0;else{var F=f[C-15],A=(F<<25|F>>>7)^(F<<14|F>>>18)^F>>>3,k=f[C-2],N=(k<<15|k>>>17)^(k<<13|k>>>19)^k>>>10;f[C]=A+f[C-7]+N+f[C-16]}var D=y&E^~y&b,L=x&v^x&m^v&m,G=(x<<30|x>>>2)^(x<<19|x>>>13)^(x<<10|x>>>22),W=(y<<26|y>>>6)^(y<<21|y>>>11)^(y<<7|y>>>25),$=I+W+D+u[C]+f[C],Q=G+L;I=b,b=E,E=y,y=g+$|0,g=m,m=v,v=x,x=$+Q|0}p[0]=p[0]+x|0,p[1]=p[1]+v|0,p[2]=p[2]+m|0,p[3]=p[3]+g|0,p[4]=p[4]+y|0,p[5]=p[5]+E|0,p[6]=p[6]+b|0,p[7]=p[7]+I|0},_doFinalize:function(){var h=this._data,_=h.words,p=this._nDataBytes*8,x=h.sigBytes*8;return _[x>>>5]|=128<<24-x%32,_[(x+64>>>9<<4)+14]=r.floor(p/4294967296),_[(x+64>>>9<<4)+15]=p,h.sigBytes=_.length*4,this._process(),this._hash},clone:function(){var h=a.clone.call(this);return h._hash=this._hash.clone(),h}});i.SHA256=a._createHelper(d),i.HmacSHA256=a._createHmacHelper(d)}(Math),t.SHA256})}(Bs)),Bs.exports}var Ps={exports:{}},Ec;function zv(){return Ec||(Ec=1,function(n,e){(function(t,r,i){n.exports=r(he(),Na())})(ae,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=r.algo,a=o.SHA256,l=o.SHA224=a.extend({_doReset:function(){this._hash=new s.init([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])},_doFinalize:function(){var c=a._doFinalize.call(this);return c.sigBytes-=4,c}});r.SHA224=a._createHelper(l),r.HmacSHA224=a._createHmacHelper(l)}(),t.SHA224})}(Ps)),Ps.exports}var Ns={exports:{}},Cc;function Cd(){return Cc||(Cc=1,function(n,e){(function(t,r,i){n.exports=r(he(),os())})(ae,function(t){return function(){var r=t,i=r.lib,s=i.Hasher,o=r.x64,a=o.Word,l=o.WordArray,c=r.algo;function u(){return a.create.apply(a,arguments)}var f=[u(1116352408,3609767458),u(1899447441,602891725),u(3049323471,3964484399),u(3921009573,2173295548),u(961987163,4081628472),u(1508970993,3053834265),u(2453635748,2937671579),u(2870763221,3664609560),u(3624381080,2734883394),u(310598401,1164996542),u(607225278,1323610764),u(1426881987,3590304994),u(1925078388,4068182383),u(2162078206,991336113),u(2614888103,633803317),u(3248222580,3479774868),u(3835390401,2666613458),u(4022224774,944711139),u(264347078,2341262773),u(604807628,2007800933),u(770255983,1495990901),u(1249150122,1856431235),u(1555081692,3175218132),u(1996064986,2198950837),u(2554220882,3999719339),u(2821834349,766784016),u(2952996808,2566594879),u(3210313671,3203337956),u(3336571891,1034457026),u(3584528711,2466948901),u(113926993,3758326383),u(338241895,168717936),u(666307205,1188179964),u(773529912,1546045734),u(1294757372,1522805485),u(1396182291,2643833823),u(1695183700,2343527390),u(1986661051,1014477480),u(2177026350,1206759142),u(2456956037,344077627),u(2730485921,1290863460),u(2820302411,3158454273),u(3259730800,3505952657),u(3345764771,106217008),u(3516065817,3606008344),u(3600352804,1432725776),u(4094571909,1467031594),u(275423344,851169720),u(430227734,3100823752),u(506948616,1363258195),u(659060556,3750685593),u(883997877,3785050280),u(958139571,3318307427),u(1322822218,3812723403),u(1537002063,2003034995),u(1747873779,3602036899),u(1955562222,1575990012),u(2024104815,1125592928),u(2227730452,2716904306),u(2361852424,442776044),u(2428436474,593698344),u(2756734187,3733110249),u(3204031479,2999351573),u(3329325298,3815920427),u(3391569614,3928383900),u(3515267271,566280711),u(3940187606,3454069534),u(4118630271,4000239992),u(116418474,1914138554),u(174292421,2731055270),u(289380356,3203993006),u(460393269,320620315),u(685471733,587496836),u(852142971,1086792851),u(1017036298,365543100),u(1126000580,2618297676),u(1288033470,3409855158),u(1501505948,4234509866),u(1607167915,987167468),u(1816402316,1246189591)],d=[];(function(){for(var _=0;_<80;_++)d[_]=u()})();var h=c.SHA512=s.extend({_doReset:function(){this._hash=new l.init([new a.init(1779033703,4089235720),new a.init(3144134277,2227873595),new a.init(1013904242,4271175723),new a.init(2773480762,1595750129),new a.init(1359893119,2917565137),new a.init(2600822924,725511199),new a.init(528734635,4215389547),new a.init(1541459225,327033209)])},_doProcessBlock:function(_,p){for(var x=this._hash.words,v=x[0],m=x[1],g=x[2],y=x[3],E=x[4],b=x[5],I=x[6],C=x[7],F=v.high,A=v.low,k=m.high,N=m.low,D=g.high,L=g.low,G=y.high,W=y.low,$=E.high,Q=E.low,J=b.high,X=b.low,P=I.high,H=I.low,O=C.high,U=C.low,ne=F,Z=A,M=k,j=N,me=D,te=L,He=G,_t=W,Ke=$,Ne=Q,Vt=J,Rt=X,jt=P,Ft=H,gn=O,Bt=U,Ye=0;Ye<80;Ye++){var Ve,lt,Gt=d[Ye];if(Ye<16)lt=Gt.high=_[p+Ye*2]|0,Ve=Gt.low=_[p+Ye*2+1]|0;else{var re=d[Ye-15],je=re.high,ot=re.low,as=(je>>>1|ot<<31)^(je>>>8|ot<<24)^je>>>7,q=(ot>>>1|je<<31)^(ot>>>8|je<<24)^(ot>>>7|je<<25),Ie=d[Ye-2],ct=Ie.high,ur=Ie.low,Dd=(ct>>>19|ur<<13)^(ct<<3|ur>>>29)^ct>>>6,Ha=(ur>>>19|ct<<13)^(ur<<3|ct>>>29)^(ur>>>6|ct<<26),Wa=d[Ye-7],Rd=Wa.high,Fd=Wa.low,za=d[Ye-16],Bd=za.high,qa=za.low;Ve=q+Fd,lt=as+Rd+(Ve>>>0<q>>>0?1:0),Ve=Ve+Ha,lt=lt+Dd+(Ve>>>0<Ha>>>0?1:0),Ve=Ve+qa,lt=lt+Bd+(Ve>>>0<qa>>>0?1:0),Gt.high=lt,Gt.low=Ve}var Pd=Ke&Vt^~Ke&jt,Va=Ne&Rt^~Ne&Ft,Nd=ne&M^ne&me^M&me,Od=Z&j^Z&te^j&te,Ld=(ne>>>28|Z<<4)^(ne<<30|Z>>>2)^(ne<<25|Z>>>7),ja=(Z>>>28|ne<<4)^(Z<<30|ne>>>2)^(Z<<25|ne>>>7),Md=(Ke>>>14|Ne<<18)^(Ke>>>18|Ne<<14)^(Ke<<23|Ne>>>9),Ud=(Ne>>>14|Ke<<18)^(Ne>>>18|Ke<<14)^(Ne<<23|Ke>>>9),Ga=f[Ye],Hd=Ga.high,$a=Ga.low,at=Bt+Ud,$t=gn+Md+(at>>>0<Bt>>>0?1:0),at=at+Va,$t=$t+Pd+(at>>>0<Va>>>0?1:0),at=at+$a,$t=$t+Hd+(at>>>0<$a>>>0?1:0),at=at+Ve,$t=$t+lt+(at>>>0<Ve>>>0?1:0),Ka=ja+Od,Wd=Ld+Nd+(Ka>>>0<ja>>>0?1:0);gn=jt,Bt=Ft,jt=Vt,Ft=Rt,Vt=Ke,Rt=Ne,Ne=_t+at|0,Ke=He+$t+(Ne>>>0<_t>>>0?1:0)|0,He=me,_t=te,me=M,te=j,M=ne,j=Z,Z=at+Ka|0,ne=$t+Wd+(Z>>>0<at>>>0?1:0)|0}A=v.low=A+Z,v.high=F+ne+(A>>>0<Z>>>0?1:0),N=m.low=N+j,m.high=k+M+(N>>>0<j>>>0?1:0),L=g.low=L+te,g.high=D+me+(L>>>0<te>>>0?1:0),W=y.low=W+_t,y.high=G+He+(W>>>0<_t>>>0?1:0),Q=E.low=Q+Ne,E.high=$+Ke+(Q>>>0<Ne>>>0?1:0),X=b.low=X+Rt,b.high=J+Vt+(X>>>0<Rt>>>0?1:0),H=I.low=H+Ft,I.high=P+jt+(H>>>0<Ft>>>0?1:0),U=C.low=U+Bt,C.high=O+gn+(U>>>0<Bt>>>0?1:0)},_doFinalize:function(){var _=this._data,p=_.words,x=this._nDataBytes*8,v=_.sigBytes*8;p[v>>>5]|=128<<24-v%32,p[(v+128>>>10<<5)+30]=Math.floor(x/4294967296),p[(v+128>>>10<<5)+31]=x,_.sigBytes=p.length*4,this._process();var m=this._hash.toX32();return m},clone:function(){var _=s.clone.call(this);return _._hash=this._hash.clone(),_},blockSize:1024/32});r.SHA512=s._createHelper(h),r.HmacSHA512=s._createHmacHelper(h)}(),t.SHA512})}(Ns)),Ns.exports}var Os={exports:{}},bc;function qv(){return bc||(bc=1,function(n,e){(function(t,r,i){n.exports=r(he(),os(),Cd())})(ae,function(t){return function(){var r=t,i=r.x64,s=i.Word,o=i.WordArray,a=r.algo,l=a.SHA512,c=a.SHA384=l.extend({_doReset:function(){this._hash=new o.init([new s.init(3418070365,3238371032),new s.init(1654270250,914150663),new s.init(2438529370,812702999),new s.init(355462360,4144912697),new s.init(1731405415,4290775857),new s.init(2394180231,1750603025),new s.init(3675008525,1694076839),new s.init(1203062813,3204075428)])},_doFinalize:function(){var u=l._doFinalize.call(this);return u.sigBytes-=16,u}});r.SHA384=l._createHelper(c),r.HmacSHA384=l._createHmacHelper(c)}(),t.SHA384})}(Os)),Os.exports}var Ls={exports:{}},wc;function Vv(){return wc||(wc=1,function(n,e){(function(t,r,i){n.exports=r(he(),os())})(ae,function(t){return function(r){var i=t,s=i.lib,o=s.WordArray,a=s.Hasher,l=i.x64,c=l.Word,u=i.algo,f=[],d=[],h=[];(function(){for(var x=1,v=0,m=0;m<24;m++){f[x+5*v]=(m+1)*(m+2)/2%64;var g=v%5,y=(2*x+3*v)%5;x=g,v=y}for(var x=0;x<5;x++)for(var v=0;v<5;v++)d[x+5*v]=v+(2*x+3*v)%5*5;for(var E=1,b=0;b<24;b++){for(var I=0,C=0,F=0;F<7;F++){if(E&1){var A=(1<<F)-1;A<32?C^=1<<A:I^=1<<A-32}E&128?E=E<<1^113:E<<=1}h[b]=c.create(I,C)}})();var _=[];(function(){for(var x=0;x<25;x++)_[x]=c.create()})();var p=u.SHA3=a.extend({cfg:a.cfg.extend({outputLength:512}),_doReset:function(){for(var x=this._state=[],v=0;v<25;v++)x[v]=new c.init;this.blockSize=(1600-2*this.cfg.outputLength)/32},_doProcessBlock:function(x,v){for(var m=this._state,g=this.blockSize/2,y=0;y<g;y++){var E=x[v+2*y],b=x[v+2*y+1];E=(E<<8|E>>>24)&16711935|(E<<24|E>>>8)&4278255360,b=(b<<8|b>>>24)&16711935|(b<<24|b>>>8)&4278255360;var I=m[y];I.high^=b,I.low^=E}for(var C=0;C<24;C++){for(var F=0;F<5;F++){for(var A=0,k=0,N=0;N<5;N++){var I=m[F+5*N];A^=I.high,k^=I.low}var D=_[F];D.high=A,D.low=k}for(var F=0;F<5;F++)for(var L=_[(F+4)%5],G=_[(F+1)%5],W=G.high,$=G.low,A=L.high^(W<<1|$>>>31),k=L.low^($<<1|W>>>31),N=0;N<5;N++){var I=m[F+5*N];I.high^=A,I.low^=k}for(var Q=1;Q<25;Q++){var A,k,I=m[Q],J=I.high,X=I.low,P=f[Q];P<32?(A=J<<P|X>>>32-P,k=X<<P|J>>>32-P):(A=X<<P-32|J>>>64-P,k=J<<P-32|X>>>64-P);var H=_[d[Q]];H.high=A,H.low=k}var O=_[0],U=m[0];O.high=U.high,O.low=U.low;for(var F=0;F<5;F++)for(var N=0;N<5;N++){var Q=F+5*N,I=m[Q],ne=_[Q],Z=_[(F+1)%5+5*N],M=_[(F+2)%5+5*N];I.high=ne.high^~Z.high&M.high,I.low=ne.low^~Z.low&M.low}var I=m[0],j=h[C];I.high^=j.high,I.low^=j.low}},_doFinalize:function(){var x=this._data,v=x.words;this._nDataBytes*8;var m=x.sigBytes*8,g=this.blockSize*32;v[m>>>5]|=1<<24-m%32,v[(r.ceil((m+1)/g)*g>>>5)-1]|=128,x.sigBytes=v.length*4,this._process();for(var y=this._state,E=this.cfg.outputLength/8,b=E/8,I=[],C=0;C<b;C++){var F=y[C],A=F.high,k=F.low;A=(A<<8|A>>>24)&16711935|(A<<24|A>>>8)&4278255360,k=(k<<8|k>>>24)&16711935|(k<<24|k>>>8)&4278255360,I.push(k),I.push(A)}return new o.init(I,E)},clone:function(){for(var x=a.clone.call(this),v=x._state=this._state.slice(0),m=0;m<25;m++)v[m]=v[m].clone();return x}});i.SHA3=a._createHelper(p),i.HmacSHA3=a._createHmacHelper(p)}(Math),t.SHA3})}(Ls)),Ls.exports}var Ms={exports:{}},Ac;function jv(){return Ac||(Ac=1,function(n,e){(function(t,r){n.exports=r(he())})(ae,function(t){/** @preserve
			(c) 2012 by Cédric Mesnil. All rights reserved.

			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
			*/return function(r){var i=t,s=i.lib,o=s.WordArray,a=s.Hasher,l=i.algo,c=o.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),u=o.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),f=o.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),d=o.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),h=o.create([0,1518500249,1859775393,2400959708,2840853838]),_=o.create([1352829926,1548603684,1836072691,2053994217,0]),p=l.RIPEMD160=a.extend({_doReset:function(){this._hash=o.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(b,I){for(var C=0;C<16;C++){var F=I+C,A=b[F];b[F]=(A<<8|A>>>24)&16711935|(A<<24|A>>>8)&4278255360}var k=this._hash.words,N=h.words,D=_.words,L=c.words,G=u.words,W=f.words,$=d.words,Q,J,X,P,H,O,U,ne,Z,M;O=Q=k[0],U=J=k[1],ne=X=k[2],Z=P=k[3],M=H=k[4];for(var j,C=0;C<80;C+=1)j=Q+b[I+L[C]]|0,C<16?j+=x(J,X,P)+N[0]:C<32?j+=v(J,X,P)+N[1]:C<48?j+=m(J,X,P)+N[2]:C<64?j+=g(J,X,P)+N[3]:j+=y(J,X,P)+N[4],j=j|0,j=E(j,W[C]),j=j+H|0,Q=H,H=P,P=E(X,10),X=J,J=j,j=O+b[I+G[C]]|0,C<16?j+=y(U,ne,Z)+D[0]:C<32?j+=g(U,ne,Z)+D[1]:C<48?j+=m(U,ne,Z)+D[2]:C<64?j+=v(U,ne,Z)+D[3]:j+=x(U,ne,Z)+D[4],j=j|0,j=E(j,$[C]),j=j+M|0,O=M,M=Z,Z=E(ne,10),ne=U,U=j;j=k[1]+X+Z|0,k[1]=k[2]+P+M|0,k[2]=k[3]+H+O|0,k[3]=k[4]+Q+U|0,k[4]=k[0]+J+ne|0,k[0]=j},_doFinalize:function(){var b=this._data,I=b.words,C=this._nDataBytes*8,F=b.sigBytes*8;I[F>>>5]|=128<<24-F%32,I[(F+64>>>9<<4)+14]=(C<<8|C>>>24)&16711935|(C<<24|C>>>8)&4278255360,b.sigBytes=(I.length+1)*4,this._process();for(var A=this._hash,k=A.words,N=0;N<5;N++){var D=k[N];k[N]=(D<<8|D>>>24)&16711935|(D<<24|D>>>8)&4278255360}return A},clone:function(){var b=a.clone.call(this);return b._hash=this._hash.clone(),b}});function x(b,I,C){return b^I^C}function v(b,I,C){return b&I|~b&C}function m(b,I,C){return(b|~I)^C}function g(b,I,C){return b&C|I&~C}function y(b,I,C){return b^(I|~C)}function E(b,I){return b<<I|b>>>32-I}i.RIPEMD160=a._createHelper(p),i.HmacRIPEMD160=a._createHmacHelper(p)}(),t.RIPEMD160})}(Ms)),Ms.exports}var Us={exports:{}},Ic;function Oa(){return Ic||(Ic=1,function(n,e){(function(t,r){n.exports=r(he())})(ae,function(t){(function(){var r=t,i=r.lib,s=i.Base,o=r.enc,a=o.Utf8,l=r.algo;l.HMAC=s.extend({init:function(c,u){c=this._hasher=new c.init,typeof u=="string"&&(u=a.parse(u));var f=c.blockSize,d=f*4;u.sigBytes>d&&(u=c.finalize(u)),u.clamp();for(var h=this._oKey=u.clone(),_=this._iKey=u.clone(),p=h.words,x=_.words,v=0;v<f;v++)p[v]^=1549556828,x[v]^=909522486;h.sigBytes=_.sigBytes=d,this.reset()},reset:function(){var c=this._hasher;c.reset(),c.update(this._iKey)},update:function(c){return this._hasher.update(c),this},finalize:function(c){var u=this._hasher,f=u.finalize(c);u.reset();var d=u.finalize(this._oKey.clone().concat(f));return d}})})()})}(Us)),Us.exports}var Hs={exports:{}},kc;function Gv(){return kc||(kc=1,function(n,e){(function(t,r,i){n.exports=r(he(),Na(),Oa())})(ae,function(t){return function(){var r=t,i=r.lib,s=i.Base,o=i.WordArray,a=r.algo,l=a.SHA256,c=a.HMAC,u=a.PBKDF2=s.extend({cfg:s.extend({keySize:128/32,hasher:l,iterations:25e4}),init:function(f){this.cfg=this.cfg.extend(f)},compute:function(f,d){for(var h=this.cfg,_=c.create(h.hasher,f),p=o.create(),x=o.create([1]),v=p.words,m=x.words,g=h.keySize,y=h.iterations;v.length<g;){var E=_.update(d).finalize(x);_.reset();for(var b=E.words,I=b.length,C=E,F=1;F<y;F++){C=_.finalize(C),_.reset();for(var A=C.words,k=0;k<I;k++)b[k]^=A[k]}p.concat(E),m[0]++}return p.sigBytes=g*4,p}});r.PBKDF2=function(f,d,h){return u.create(h).compute(f,d)}}(),t.PBKDF2})}(Hs)),Hs.exports}var Ws={exports:{}},Tc;function mn(){return Tc||(Tc=1,function(n,e){(function(t,r,i){n.exports=r(he(),Ed(),Oa())})(ae,function(t){return function(){var r=t,i=r.lib,s=i.Base,o=i.WordArray,a=r.algo,l=a.MD5,c=a.EvpKDF=s.extend({cfg:s.extend({keySize:128/32,hasher:l,iterations:1}),init:function(u){this.cfg=this.cfg.extend(u)},compute:function(u,f){for(var d,h=this.cfg,_=h.hasher.create(),p=o.create(),x=p.words,v=h.keySize,m=h.iterations;x.length<v;){d&&_.update(d),d=_.update(u).finalize(f),_.reset();for(var g=1;g<m;g++)d=_.finalize(d),_.reset();p.concat(d)}return p.sigBytes=v*4,p}});r.EvpKDF=function(u,f,d){return c.create(d).compute(u,f)}}(),t.EvpKDF})}(Ws)),Ws.exports}var zs={exports:{}},Sc;function Ue(){return Sc||(Sc=1,function(n,e){(function(t,r,i){n.exports=r(he(),mn())})(ae,function(t){t.lib.Cipher||function(r){var i=t,s=i.lib,o=s.Base,a=s.WordArray,l=s.BufferedBlockAlgorithm,c=i.enc;c.Utf8;var u=c.Base64,f=i.algo,d=f.EvpKDF,h=s.Cipher=l.extend({cfg:o.extend(),createEncryptor:function(A,k){return this.create(this._ENC_XFORM_MODE,A,k)},createDecryptor:function(A,k){return this.create(this._DEC_XFORM_MODE,A,k)},init:function(A,k,N){this.cfg=this.cfg.extend(N),this._xformMode=A,this._key=k,this.reset()},reset:function(){l.reset.call(this),this._doReset()},process:function(A){return this._append(A),this._process()},finalize:function(A){A&&this._append(A);var k=this._doFinalize();return k},keySize:128/32,ivSize:128/32,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function A(k){return typeof k=="string"?F:b}return function(k){return{encrypt:function(N,D,L){return A(D).encrypt(k,N,D,L)},decrypt:function(N,D,L){return A(D).decrypt(k,N,D,L)}}}}()});s.StreamCipher=h.extend({_doFinalize:function(){var A=this._process(!0);return A},blockSize:1});var _=i.mode={},p=s.BlockCipherMode=o.extend({createEncryptor:function(A,k){return this.Encryptor.create(A,k)},createDecryptor:function(A,k){return this.Decryptor.create(A,k)},init:function(A,k){this._cipher=A,this._iv=k}}),x=_.CBC=function(){var A=p.extend();A.Encryptor=A.extend({processBlock:function(N,D){var L=this._cipher,G=L.blockSize;k.call(this,N,D,G),L.encryptBlock(N,D),this._prevBlock=N.slice(D,D+G)}}),A.Decryptor=A.extend({processBlock:function(N,D){var L=this._cipher,G=L.blockSize,W=N.slice(D,D+G);L.decryptBlock(N,D),k.call(this,N,D,G),this._prevBlock=W}});function k(N,D,L){var G,W=this._iv;W?(G=W,this._iv=r):G=this._prevBlock;for(var $=0;$<L;$++)N[D+$]^=G[$]}return A}(),v=i.pad={},m=v.Pkcs7={pad:function(A,k){for(var N=k*4,D=N-A.sigBytes%N,L=D<<24|D<<16|D<<8|D,G=[],W=0;W<D;W+=4)G.push(L);var $=a.create(G,D);A.concat($)},unpad:function(A){var k=A.words[A.sigBytes-1>>>2]&255;A.sigBytes-=k}};s.BlockCipher=h.extend({cfg:h.cfg.extend({mode:x,padding:m}),reset:function(){var A;h.reset.call(this);var k=this.cfg,N=k.iv,D=k.mode;this._xformMode==this._ENC_XFORM_MODE?A=D.createEncryptor:(A=D.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==A?this._mode.init(this,N&&N.words):(this._mode=A.call(D,this,N&&N.words),this._mode.__creator=A)},_doProcessBlock:function(A,k){this._mode.processBlock(A,k)},_doFinalize:function(){var A,k=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(k.pad(this._data,this.blockSize),A=this._process(!0)):(A=this._process(!0),k.unpad(A)),A},blockSize:128/32});var g=s.CipherParams=o.extend({init:function(A){this.mixIn(A)},toString:function(A){return(A||this.formatter).stringify(this)}}),y=i.format={},E=y.OpenSSL={stringify:function(A){var k,N=A.ciphertext,D=A.salt;return D?k=a.create([1398893684,1701076831]).concat(D).concat(N):k=N,k.toString(u)},parse:function(A){var k,N=u.parse(A),D=N.words;return D[0]==1398893684&&D[1]==1701076831&&(k=a.create(D.slice(2,4)),D.splice(0,4),N.sigBytes-=16),g.create({ciphertext:N,salt:k})}},b=s.SerializableCipher=o.extend({cfg:o.extend({format:E}),encrypt:function(A,k,N,D){D=this.cfg.extend(D);var L=A.createEncryptor(N,D),G=L.finalize(k),W=L.cfg;return g.create({ciphertext:G,key:N,iv:W.iv,algorithm:A,mode:W.mode,padding:W.padding,blockSize:A.blockSize,formatter:D.format})},decrypt:function(A,k,N,D){D=this.cfg.extend(D),k=this._parse(k,D.format);var L=A.createDecryptor(N,D).finalize(k.ciphertext);return L},_parse:function(A,k){return typeof A=="string"?k.parse(A,this):A}}),I=i.kdf={},C=I.OpenSSL={execute:function(A,k,N,D,L){if(D||(D=a.random(64/8)),L)var G=d.create({keySize:k+N,hasher:L}).compute(A,D);else var G=d.create({keySize:k+N}).compute(A,D);var W=a.create(G.words.slice(k),N*4);return G.sigBytes=k*4,g.create({key:G,iv:W,salt:D})}},F=s.PasswordBasedCipher=b.extend({cfg:b.cfg.extend({kdf:C}),encrypt:function(A,k,N,D){D=this.cfg.extend(D);var L=D.kdf.execute(N,A.keySize,A.ivSize,D.salt,D.hasher);D.iv=L.iv;var G=b.encrypt.call(this,A,k,L.key,D);return G.mixIn(L),G},decrypt:function(A,k,N,D){D=this.cfg.extend(D),k=this._parse(k,D.format);var L=D.kdf.execute(N,A.keySize,A.ivSize,k.salt,D.hasher);D.iv=L.iv;var G=b.decrypt.call(this,A,k,L.key,D);return G}})}()})}(zs)),zs.exports}var qs={exports:{}},Dc;function $v(){return Dc||(Dc=1,function(n,e){(function(t,r,i){n.exports=r(he(),Ue())})(ae,function(t){return t.mode.CFB=function(){var r=t.lib.BlockCipherMode.extend();r.Encryptor=r.extend({processBlock:function(s,o){var a=this._cipher,l=a.blockSize;i.call(this,s,o,l,a),this._prevBlock=s.slice(o,o+l)}}),r.Decryptor=r.extend({processBlock:function(s,o){var a=this._cipher,l=a.blockSize,c=s.slice(o,o+l);i.call(this,s,o,l,a),this._prevBlock=c}});function i(s,o,a,l){var c,u=this._iv;u?(c=u.slice(0),this._iv=void 0):c=this._prevBlock,l.encryptBlock(c,0);for(var f=0;f<a;f++)s[o+f]^=c[f]}return r}(),t.mode.CFB})}(qs)),qs.exports}var Vs={exports:{}},Rc;function Kv(){return Rc||(Rc=1,function(n,e){(function(t,r,i){n.exports=r(he(),Ue())})(ae,function(t){return t.mode.CTR=function(){var r=t.lib.BlockCipherMode.extend(),i=r.Encryptor=r.extend({processBlock:function(s,o){var a=this._cipher,l=a.blockSize,c=this._iv,u=this._counter;c&&(u=this._counter=c.slice(0),this._iv=void 0);var f=u.slice(0);a.encryptBlock(f,0),u[l-1]=u[l-1]+1|0;for(var d=0;d<l;d++)s[o+d]^=f[d]}});return r.Decryptor=i,r}(),t.mode.CTR})}(Vs)),Vs.exports}var js={exports:{}},Fc;function Yv(){return Fc||(Fc=1,function(n,e){(function(t,r,i){n.exports=r(he(),Ue())})(ae,function(t){/** @preserve
 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
 * derived from CryptoJS.mode.CTR
 * Jan Hruby jhruby.web@gmail.com
 */return t.mode.CTRGladman=function(){var r=t.lib.BlockCipherMode.extend();function i(a){if((a>>24&255)===255){var l=a>>16&255,c=a>>8&255,u=a&255;l===255?(l=0,c===255?(c=0,u===255?u=0:++u):++c):++l,a=0,a+=l<<16,a+=c<<8,a+=u}else a+=1<<24;return a}function s(a){return(a[0]=i(a[0]))===0&&(a[1]=i(a[1])),a}var o=r.Encryptor=r.extend({processBlock:function(a,l){var c=this._cipher,u=c.blockSize,f=this._iv,d=this._counter;f&&(d=this._counter=f.slice(0),this._iv=void 0),s(d);var h=d.slice(0);c.encryptBlock(h,0);for(var _=0;_<u;_++)a[l+_]^=h[_]}});return r.Decryptor=o,r}(),t.mode.CTRGladman})}(js)),js.exports}var Gs={exports:{}},Bc;function Qv(){return Bc||(Bc=1,function(n,e){(function(t,r,i){n.exports=r(he(),Ue())})(ae,function(t){return t.mode.OFB=function(){var r=t.lib.BlockCipherMode.extend(),i=r.Encryptor=r.extend({processBlock:function(s,o){var a=this._cipher,l=a.blockSize,c=this._iv,u=this._keystream;c&&(u=this._keystream=c.slice(0),this._iv=void 0),a.encryptBlock(u,0);for(var f=0;f<l;f++)s[o+f]^=u[f]}});return r.Decryptor=i,r}(),t.mode.OFB})}(Gs)),Gs.exports}var $s={exports:{}},Pc;function Xv(){return Pc||(Pc=1,function(n,e){(function(t,r,i){n.exports=r(he(),Ue())})(ae,function(t){return t.mode.ECB=function(){var r=t.lib.BlockCipherMode.extend();return r.Encryptor=r.extend({processBlock:function(i,s){this._cipher.encryptBlock(i,s)}}),r.Decryptor=r.extend({processBlock:function(i,s){this._cipher.decryptBlock(i,s)}}),r}(),t.mode.ECB})}($s)),$s.exports}var Ks={exports:{}},Nc;function Jv(){return Nc||(Nc=1,function(n,e){(function(t,r,i){n.exports=r(he(),Ue())})(ae,function(t){return t.pad.AnsiX923={pad:function(r,i){var s=r.sigBytes,o=i*4,a=o-s%o,l=s+a-1;r.clamp(),r.words[l>>>2]|=a<<24-l%4*8,r.sigBytes+=a},unpad:function(r){var i=r.words[r.sigBytes-1>>>2]&255;r.sigBytes-=i}},t.pad.Ansix923})}(Ks)),Ks.exports}var Ys={exports:{}},Oc;function Zv(){return Oc||(Oc=1,function(n,e){(function(t,r,i){n.exports=r(he(),Ue())})(ae,function(t){return t.pad.Iso10126={pad:function(r,i){var s=i*4,o=s-r.sigBytes%s;r.concat(t.lib.WordArray.random(o-1)).concat(t.lib.WordArray.create([o<<24],1))},unpad:function(r){var i=r.words[r.sigBytes-1>>>2]&255;r.sigBytes-=i}},t.pad.Iso10126})}(Ys)),Ys.exports}var Qs={exports:{}},Lc;function ey(){return Lc||(Lc=1,function(n,e){(function(t,r,i){n.exports=r(he(),Ue())})(ae,function(t){return t.pad.Iso97971={pad:function(r,i){r.concat(t.lib.WordArray.create([2147483648],1)),t.pad.ZeroPadding.pad(r,i)},unpad:function(r){t.pad.ZeroPadding.unpad(r),r.sigBytes--}},t.pad.Iso97971})}(Qs)),Qs.exports}var Xs={exports:{}},Mc;function ty(){return Mc||(Mc=1,function(n,e){(function(t,r,i){n.exports=r(he(),Ue())})(ae,function(t){return t.pad.ZeroPadding={pad:function(r,i){var s=i*4;r.clamp(),r.sigBytes+=s-(r.sigBytes%s||s)},unpad:function(r){for(var i=r.words,s=r.sigBytes-1,s=r.sigBytes-1;s>=0;s--)if(i[s>>>2]>>>24-s%4*8&255){r.sigBytes=s+1;break}}},t.pad.ZeroPadding})}(Xs)),Xs.exports}var Js={exports:{}},Uc;function ny(){return Uc||(Uc=1,function(n,e){(function(t,r,i){n.exports=r(he(),Ue())})(ae,function(t){return t.pad.NoPadding={pad:function(){},unpad:function(){}},t.pad.NoPadding})}(Js)),Js.exports}var Zs={exports:{}},Hc;function ry(){return Hc||(Hc=1,function(n,e){(function(t,r,i){n.exports=r(he(),Ue())})(ae,function(t){return function(r){var i=t,s=i.lib,o=s.CipherParams,a=i.enc,l=a.Hex,c=i.format;c.Hex={stringify:function(u){return u.ciphertext.toString(l)},parse:function(u){var f=l.parse(u);return o.create({ciphertext:f})}}}(),t.format.Hex})}(Zs)),Zs.exports}var eo={exports:{}},Wc;function iy(){return Wc||(Wc=1,function(n,e){(function(t,r,i){n.exports=r(he(),Ln(),Mn(),mn(),Ue())})(ae,function(t){return function(){var r=t,i=r.lib,s=i.BlockCipher,o=r.algo,a=[],l=[],c=[],u=[],f=[],d=[],h=[],_=[],p=[],x=[];(function(){for(var g=[],y=0;y<256;y++)y<128?g[y]=y<<1:g[y]=y<<1^283;for(var E=0,b=0,y=0;y<256;y++){var I=b^b<<1^b<<2^b<<3^b<<4;I=I>>>8^I&255^99,a[E]=I,l[I]=E;var C=g[E],F=g[C],A=g[F],k=g[I]*257^I*16843008;c[E]=k<<24|k>>>8,u[E]=k<<16|k>>>16,f[E]=k<<8|k>>>24,d[E]=k;var k=A*16843009^F*65537^C*257^E*16843008;h[I]=k<<24|k>>>8,_[I]=k<<16|k>>>16,p[I]=k<<8|k>>>24,x[I]=k,E?(E=C^g[g[g[A^C]]],b^=g[g[b]]):E=b=1}})();var v=[0,1,2,4,8,16,32,64,128,27,54],m=o.AES=s.extend({_doReset:function(){var g;if(!(this._nRounds&&this._keyPriorReset===this._key)){for(var y=this._keyPriorReset=this._key,E=y.words,b=y.sigBytes/4,I=this._nRounds=b+6,C=(I+1)*4,F=this._keySchedule=[],A=0;A<C;A++)A<b?F[A]=E[A]:(g=F[A-1],A%b?b>6&&A%b==4&&(g=a[g>>>24]<<24|a[g>>>16&255]<<16|a[g>>>8&255]<<8|a[g&255]):(g=g<<8|g>>>24,g=a[g>>>24]<<24|a[g>>>16&255]<<16|a[g>>>8&255]<<8|a[g&255],g^=v[A/b|0]<<24),F[A]=F[A-b]^g);for(var k=this._invKeySchedule=[],N=0;N<C;N++){var A=C-N;if(N%4)var g=F[A];else var g=F[A-4];N<4||A<=4?k[N]=g:k[N]=h[a[g>>>24]]^_[a[g>>>16&255]]^p[a[g>>>8&255]]^x[a[g&255]]}}},encryptBlock:function(g,y){this._doCryptBlock(g,y,this._keySchedule,c,u,f,d,a)},decryptBlock:function(g,y){var E=g[y+1];g[y+1]=g[y+3],g[y+3]=E,this._doCryptBlock(g,y,this._invKeySchedule,h,_,p,x,l);var E=g[y+1];g[y+1]=g[y+3],g[y+3]=E},_doCryptBlock:function(g,y,E,b,I,C,F,A){for(var k=this._nRounds,N=g[y]^E[0],D=g[y+1]^E[1],L=g[y+2]^E[2],G=g[y+3]^E[3],W=4,$=1;$<k;$++){var Q=b[N>>>24]^I[D>>>16&255]^C[L>>>8&255]^F[G&255]^E[W++],J=b[D>>>24]^I[L>>>16&255]^C[G>>>8&255]^F[N&255]^E[W++],X=b[L>>>24]^I[G>>>16&255]^C[N>>>8&255]^F[D&255]^E[W++],P=b[G>>>24]^I[N>>>16&255]^C[D>>>8&255]^F[L&255]^E[W++];N=Q,D=J,L=X,G=P}var Q=(A[N>>>24]<<24|A[D>>>16&255]<<16|A[L>>>8&255]<<8|A[G&255])^E[W++],J=(A[D>>>24]<<24|A[L>>>16&255]<<16|A[G>>>8&255]<<8|A[N&255])^E[W++],X=(A[L>>>24]<<24|A[G>>>16&255]<<16|A[N>>>8&255]<<8|A[D&255])^E[W++],P=(A[G>>>24]<<24|A[N>>>16&255]<<16|A[D>>>8&255]<<8|A[L&255])^E[W++];g[y]=Q,g[y+1]=J,g[y+2]=X,g[y+3]=P},keySize:256/32});r.AES=s._createHelper(m)}(),t.AES})}(eo)),eo.exports}var to={exports:{}},zc;function sy(){return zc||(zc=1,function(n,e){(function(t,r,i){n.exports=r(he(),Ln(),Mn(),mn(),Ue())})(ae,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=i.BlockCipher,a=r.algo,l=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],c=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],u=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],f=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],d=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],h=a.DES=o.extend({_doReset:function(){for(var v=this._key,m=v.words,g=[],y=0;y<56;y++){var E=l[y]-1;g[y]=m[E>>>5]>>>31-E%32&1}for(var b=this._subKeys=[],I=0;I<16;I++){for(var C=b[I]=[],F=u[I],y=0;y<24;y++)C[y/6|0]|=g[(c[y]-1+F)%28]<<31-y%6,C[4+(y/6|0)]|=g[28+(c[y+24]-1+F)%28]<<31-y%6;C[0]=C[0]<<1|C[0]>>>31;for(var y=1;y<7;y++)C[y]=C[y]>>>(y-1)*4+3;C[7]=C[7]<<5|C[7]>>>27}for(var A=this._invSubKeys=[],y=0;y<16;y++)A[y]=b[15-y]},encryptBlock:function(v,m){this._doCryptBlock(v,m,this._subKeys)},decryptBlock:function(v,m){this._doCryptBlock(v,m,this._invSubKeys)},_doCryptBlock:function(v,m,g){this._lBlock=v[m],this._rBlock=v[m+1],_.call(this,4,252645135),_.call(this,16,65535),p.call(this,2,858993459),p.call(this,8,16711935),_.call(this,1,1431655765);for(var y=0;y<16;y++){for(var E=g[y],b=this._lBlock,I=this._rBlock,C=0,F=0;F<8;F++)C|=f[F][((I^E[F])&d[F])>>>0];this._lBlock=I,this._rBlock=b^C}var A=this._lBlock;this._lBlock=this._rBlock,this._rBlock=A,_.call(this,1,1431655765),p.call(this,8,16711935),p.call(this,2,858993459),_.call(this,16,65535),_.call(this,4,252645135),v[m]=this._lBlock,v[m+1]=this._rBlock},keySize:64/32,ivSize:64/32,blockSize:64/32});function _(v,m){var g=(this._lBlock>>>v^this._rBlock)&m;this._rBlock^=g,this._lBlock^=g<<v}function p(v,m){var g=(this._rBlock>>>v^this._lBlock)&m;this._lBlock^=g,this._rBlock^=g<<v}r.DES=o._createHelper(h);var x=a.TripleDES=o.extend({_doReset:function(){var v=this._key,m=v.words;if(m.length!==2&&m.length!==4&&m.length<6)throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");var g=m.slice(0,2),y=m.length<4?m.slice(0,2):m.slice(2,4),E=m.length<6?m.slice(0,2):m.slice(4,6);this._des1=h.createEncryptor(s.create(g)),this._des2=h.createEncryptor(s.create(y)),this._des3=h.createEncryptor(s.create(E))},encryptBlock:function(v,m){this._des1.encryptBlock(v,m),this._des2.decryptBlock(v,m),this._des3.encryptBlock(v,m)},decryptBlock:function(v,m){this._des3.decryptBlock(v,m),this._des2.encryptBlock(v,m),this._des1.decryptBlock(v,m)},keySize:192/32,ivSize:64/32,blockSize:64/32});r.TripleDES=o._createHelper(x)}(),t.TripleDES})}(to)),to.exports}var no={exports:{}},qc;function oy(){return qc||(qc=1,function(n,e){(function(t,r,i){n.exports=r(he(),Ln(),Mn(),mn(),Ue())})(ae,function(t){return function(){var r=t,i=r.lib,s=i.StreamCipher,o=r.algo,a=o.RC4=s.extend({_doReset:function(){for(var u=this._key,f=u.words,d=u.sigBytes,h=this._S=[],_=0;_<256;_++)h[_]=_;for(var _=0,p=0;_<256;_++){var x=_%d,v=f[x>>>2]>>>24-x%4*8&255;p=(p+h[_]+v)%256;var m=h[_];h[_]=h[p],h[p]=m}this._i=this._j=0},_doProcessBlock:function(u,f){u[f]^=l.call(this)},keySize:256/32,ivSize:0});function l(){for(var u=this._S,f=this._i,d=this._j,h=0,_=0;_<4;_++){f=(f+1)%256,d=(d+u[f])%256;var p=u[f];u[f]=u[d],u[d]=p,h|=u[(u[f]+u[d])%256]<<24-_*8}return this._i=f,this._j=d,h}r.RC4=s._createHelper(a);var c=o.RC4Drop=a.extend({cfg:a.cfg.extend({drop:192}),_doReset:function(){a._doReset.call(this);for(var u=this.cfg.drop;u>0;u--)l.call(this)}});r.RC4Drop=s._createHelper(c)}(),t.RC4})}(no)),no.exports}var ro={exports:{}},Vc;function ay(){return Vc||(Vc=1,function(n,e){(function(t,r,i){n.exports=r(he(),Ln(),Mn(),mn(),Ue())})(ae,function(t){return function(){var r=t,i=r.lib,s=i.StreamCipher,o=r.algo,a=[],l=[],c=[],u=o.Rabbit=s.extend({_doReset:function(){for(var d=this._key.words,h=this.cfg.iv,_=0;_<4;_++)d[_]=(d[_]<<8|d[_]>>>24)&16711935|(d[_]<<24|d[_]>>>8)&4278255360;var p=this._X=[d[0],d[3]<<16|d[2]>>>16,d[1],d[0]<<16|d[3]>>>16,d[2],d[1]<<16|d[0]>>>16,d[3],d[2]<<16|d[1]>>>16],x=this._C=[d[2]<<16|d[2]>>>16,d[0]&4294901760|d[1]&65535,d[3]<<16|d[3]>>>16,d[1]&4294901760|d[2]&65535,d[0]<<16|d[0]>>>16,d[2]&4294901760|d[3]&65535,d[1]<<16|d[1]>>>16,d[3]&4294901760|d[0]&65535];this._b=0;for(var _=0;_<4;_++)f.call(this);for(var _=0;_<8;_++)x[_]^=p[_+4&7];if(h){var v=h.words,m=v[0],g=v[1],y=(m<<8|m>>>24)&16711935|(m<<24|m>>>8)&4278255360,E=(g<<8|g>>>24)&16711935|(g<<24|g>>>8)&4278255360,b=y>>>16|E&4294901760,I=E<<16|y&65535;x[0]^=y,x[1]^=b,x[2]^=E,x[3]^=I,x[4]^=y,x[5]^=b,x[6]^=E,x[7]^=I;for(var _=0;_<4;_++)f.call(this)}},_doProcessBlock:function(d,h){var _=this._X;f.call(this),a[0]=_[0]^_[5]>>>16^_[3]<<16,a[1]=_[2]^_[7]>>>16^_[5]<<16,a[2]=_[4]^_[1]>>>16^_[7]<<16,a[3]=_[6]^_[3]>>>16^_[1]<<16;for(var p=0;p<4;p++)a[p]=(a[p]<<8|a[p]>>>24)&16711935|(a[p]<<24|a[p]>>>8)&4278255360,d[h+p]^=a[p]},blockSize:128/32,ivSize:64/32});function f(){for(var d=this._X,h=this._C,_=0;_<8;_++)l[_]=h[_];h[0]=h[0]+1295307597+this._b|0,h[1]=h[1]+3545052371+(h[0]>>>0<l[0]>>>0?1:0)|0,h[2]=h[2]+886263092+(h[1]>>>0<l[1]>>>0?1:0)|0,h[3]=h[3]+1295307597+(h[2]>>>0<l[2]>>>0?1:0)|0,h[4]=h[4]+3545052371+(h[3]>>>0<l[3]>>>0?1:0)|0,h[5]=h[5]+886263092+(h[4]>>>0<l[4]>>>0?1:0)|0,h[6]=h[6]+1295307597+(h[5]>>>0<l[5]>>>0?1:0)|0,h[7]=h[7]+3545052371+(h[6]>>>0<l[6]>>>0?1:0)|0,this._b=h[7]>>>0<l[7]>>>0?1:0;for(var _=0;_<8;_++){var p=d[_]+h[_],x=p&65535,v=p>>>16,m=((x*x>>>17)+x*v>>>15)+v*v,g=((p&4294901760)*p|0)+((p&65535)*p|0);c[_]=m^g}d[0]=c[0]+(c[7]<<16|c[7]>>>16)+(c[6]<<16|c[6]>>>16)|0,d[1]=c[1]+(c[0]<<8|c[0]>>>24)+c[7]|0,d[2]=c[2]+(c[1]<<16|c[1]>>>16)+(c[0]<<16|c[0]>>>16)|0,d[3]=c[3]+(c[2]<<8|c[2]>>>24)+c[1]|0,d[4]=c[4]+(c[3]<<16|c[3]>>>16)+(c[2]<<16|c[2]>>>16)|0,d[5]=c[5]+(c[4]<<8|c[4]>>>24)+c[3]|0,d[6]=c[6]+(c[5]<<16|c[5]>>>16)+(c[4]<<16|c[4]>>>16)|0,d[7]=c[7]+(c[6]<<8|c[6]>>>24)+c[5]|0}r.Rabbit=s._createHelper(u)}(),t.Rabbit})}(ro)),ro.exports}var io={exports:{}},jc;function ly(){return jc||(jc=1,function(n,e){(function(t,r,i){n.exports=r(he(),Ln(),Mn(),mn(),Ue())})(ae,function(t){return function(){var r=t,i=r.lib,s=i.StreamCipher,o=r.algo,a=[],l=[],c=[],u=o.RabbitLegacy=s.extend({_doReset:function(){var d=this._key.words,h=this.cfg.iv,_=this._X=[d[0],d[3]<<16|d[2]>>>16,d[1],d[0]<<16|d[3]>>>16,d[2],d[1]<<16|d[0]>>>16,d[3],d[2]<<16|d[1]>>>16],p=this._C=[d[2]<<16|d[2]>>>16,d[0]&4294901760|d[1]&65535,d[3]<<16|d[3]>>>16,d[1]&4294901760|d[2]&65535,d[0]<<16|d[0]>>>16,d[2]&4294901760|d[3]&65535,d[1]<<16|d[1]>>>16,d[3]&4294901760|d[0]&65535];this._b=0;for(var x=0;x<4;x++)f.call(this);for(var x=0;x<8;x++)p[x]^=_[x+4&7];if(h){var v=h.words,m=v[0],g=v[1],y=(m<<8|m>>>24)&16711935|(m<<24|m>>>8)&4278255360,E=(g<<8|g>>>24)&16711935|(g<<24|g>>>8)&4278255360,b=y>>>16|E&4294901760,I=E<<16|y&65535;p[0]^=y,p[1]^=b,p[2]^=E,p[3]^=I,p[4]^=y,p[5]^=b,p[6]^=E,p[7]^=I;for(var x=0;x<4;x++)f.call(this)}},_doProcessBlock:function(d,h){var _=this._X;f.call(this),a[0]=_[0]^_[5]>>>16^_[3]<<16,a[1]=_[2]^_[7]>>>16^_[5]<<16,a[2]=_[4]^_[1]>>>16^_[7]<<16,a[3]=_[6]^_[3]>>>16^_[1]<<16;for(var p=0;p<4;p++)a[p]=(a[p]<<8|a[p]>>>24)&16711935|(a[p]<<24|a[p]>>>8)&4278255360,d[h+p]^=a[p]},blockSize:128/32,ivSize:64/32});function f(){for(var d=this._X,h=this._C,_=0;_<8;_++)l[_]=h[_];h[0]=h[0]+1295307597+this._b|0,h[1]=h[1]+3545052371+(h[0]>>>0<l[0]>>>0?1:0)|0,h[2]=h[2]+886263092+(h[1]>>>0<l[1]>>>0?1:0)|0,h[3]=h[3]+1295307597+(h[2]>>>0<l[2]>>>0?1:0)|0,h[4]=h[4]+3545052371+(h[3]>>>0<l[3]>>>0?1:0)|0,h[5]=h[5]+886263092+(h[4]>>>0<l[4]>>>0?1:0)|0,h[6]=h[6]+1295307597+(h[5]>>>0<l[5]>>>0?1:0)|0,h[7]=h[7]+3545052371+(h[6]>>>0<l[6]>>>0?1:0)|0,this._b=h[7]>>>0<l[7]>>>0?1:0;for(var _=0;_<8;_++){var p=d[_]+h[_],x=p&65535,v=p>>>16,m=((x*x>>>17)+x*v>>>15)+v*v,g=((p&4294901760)*p|0)+((p&65535)*p|0);c[_]=m^g}d[0]=c[0]+(c[7]<<16|c[7]>>>16)+(c[6]<<16|c[6]>>>16)|0,d[1]=c[1]+(c[0]<<8|c[0]>>>24)+c[7]|0,d[2]=c[2]+(c[1]<<16|c[1]>>>16)+(c[0]<<16|c[0]>>>16)|0,d[3]=c[3]+(c[2]<<8|c[2]>>>24)+c[1]|0,d[4]=c[4]+(c[3]<<16|c[3]>>>16)+(c[2]<<16|c[2]>>>16)|0,d[5]=c[5]+(c[4]<<8|c[4]>>>24)+c[3]|0,d[6]=c[6]+(c[5]<<16|c[5]>>>16)+(c[4]<<16|c[4]>>>16)|0,d[7]=c[7]+(c[6]<<8|c[6]>>>24)+c[5]|0}r.RabbitLegacy=s._createHelper(u)}(),t.RabbitLegacy})}(io)),io.exports}var so={exports:{}},Gc;function cy(){return Gc||(Gc=1,function(n,e){(function(t,r,i){n.exports=r(he(),Ln(),Mn(),mn(),Ue())})(ae,function(t){return function(){var r=t,i=r.lib,s=i.BlockCipher,o=r.algo;const a=16,l=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],c=[[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946],[1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055],[3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504],[976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462]];var u={pbox:[],sbox:[]};function f(x,v){let m=v>>24&255,g=v>>16&255,y=v>>8&255,E=v&255,b=x.sbox[0][m]+x.sbox[1][g];return b=b^x.sbox[2][y],b=b+x.sbox[3][E],b}function d(x,v,m){let g=v,y=m,E;for(let b=0;b<a;++b)g=g^x.pbox[b],y=f(x,g)^y,E=g,g=y,y=E;return E=g,g=y,y=E,y=y^x.pbox[a],g=g^x.pbox[a+1],{left:g,right:y}}function h(x,v,m){let g=v,y=m,E;for(let b=a+1;b>1;--b)g=g^x.pbox[b],y=f(x,g)^y,E=g,g=y,y=E;return E=g,g=y,y=E,y=y^x.pbox[1],g=g^x.pbox[0],{left:g,right:y}}function _(x,v,m){for(let I=0;I<4;I++){x.sbox[I]=[];for(let C=0;C<256;C++)x.sbox[I][C]=c[I][C]}let g=0;for(let I=0;I<a+2;I++)x.pbox[I]=l[I]^v[g],g++,g>=m&&(g=0);let y=0,E=0,b=0;for(let I=0;I<a+2;I+=2)b=d(x,y,E),y=b.left,E=b.right,x.pbox[I]=y,x.pbox[I+1]=E;for(let I=0;I<4;I++)for(let C=0;C<256;C+=2)b=d(x,y,E),y=b.left,E=b.right,x.sbox[I][C]=y,x.sbox[I][C+1]=E;return!0}var p=o.Blowfish=s.extend({_doReset:function(){if(this._keyPriorReset!==this._key){var x=this._keyPriorReset=this._key,v=x.words,m=x.sigBytes/4;_(u,v,m)}},encryptBlock:function(x,v){var m=d(u,x[v],x[v+1]);x[v]=m.left,x[v+1]=m.right},decryptBlock:function(x,v){var m=h(u,x[v],x[v+1]);x[v]=m.left,x[v+1]=m.right},blockSize:64/32,keySize:128/32,ivSize:64/32});r.Blowfish=s._createHelper(p)}(),t.Blowfish})}(so)),so.exports}(function(n,e){(function(t,r,i){n.exports=r(he(),os(),Uv(),Hv(),Ln(),Wv(),Mn(),Ed(),Na(),zv(),Cd(),qv(),Vv(),jv(),Oa(),Gv(),mn(),Ue(),$v(),Kv(),Yv(),Qv(),Xv(),Jv(),Zv(),ey(),ty(),ny(),ry(),iy(),sy(),oy(),ay(),ly(),cy())})(ae,function(t){return t})})(yd);var Bo=yd.exports;let et=n=>{n.target.closest("button").blur()},bd=(n,e)=>{let t=localStorage.getItem(n);return pt(t?JSON.parse(t):e)},uy=(n,e)=>n.subscribe(t=>localStorage.setItem(e,JSON.stringify(t))),xt=n=>n!=null&&Object.keys(n).length,jn=()=>!Gd(De).preventClosing&&De.set(La(Ma.promptData)),La=n=>JSON.parse(JSON.stringify(n)),$c=(n,e)=>Bo.AES.encrypt(n,ut.currentUser.uid+581827).toString(),oo=(n,e)=>Bo.AES.decrypt(n,(e||ut.currentUser.uid)+581827).toString(Bo.enc.Utf8),fy=n=>{let e;for(let t in Jn)if(Jn[t].userList.includes(n.toLowerCase())){e=t;break}return e||(e="User"),e},wd=(n,e)=>{Lo.update(t=>[...t,{icon:Fv[n],text:e}]),setTimeout(()=>Lo.update(t=>t.slice(1)),3e3)},dy=()=>history.replaceState(history.state,null,location.origin+location.pathname);const Ma={promptData:{component:null,props:{},focus:"",hasWrapper:!1,preventClosing:!1},supportMe:{showAgain:!0,timesDenied:0,totalVisits:0,lastVisits:0}};let pi=pt(!1),Po=pt({}),No=pt(!1),zr=pt(""),Oo=pt(!1),ai=pt({select:new Audio,day:new Audio,night:new Audio,nightWarning:new Audio}),De=pt(La(Ma.promptData)),Lo=pt([]),en=bd("fcl-supportMe",La(Ma.supportMe)),qr=bd("fcl-changelogSeen",!1),Mo=pt(new Date),_i=pt({muted:!1,altHourFormat:!1}),mi=pt({day:!1,night:!1}),Kc={"fcl-supportMe":en,"fcl-changelogSeen":qr};for(let n in Kc)uy(Kc[n],n);function Ad(n){const e=n-1;return e*e*e+1}function Et(n,{delay:e=0,duration:t=400,easing:r=Vr}={}){const i=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:r,css:s=>`opacity: ${s*i}`}}function Wi(n,{delay:e=0,duration:t=400,easing:r=Ad,start:i=0,opacity:s=0}={}){const o=getComputedStyle(n),a=+o.opacity,l=o.transform==="none"?"":o.transform,c=1-i,u=a*(1-s);return{delay:e,duration:t,easing:r,css:(f,d)=>`
			transform: ${l} scale(${1-c*d});
			opacity: ${a-u*d}
		`}}function hy(n){let e,t,r,i,s;return{c(){e=T("span"),e.textContent="Credits",t=z(),r=T("hr"),i=z(),s=T("div"),s.innerHTML=`<div><p class="flex fjc-center fai-center cg-1"><span>This is a personal project. Contact me directly on</span> <iconify-icon id="discord" icon="ic:baseline-discord"></iconify-icon> <bl>Discord</bl> at<hl>xt.ss</hl>,</p> <p class="cg-1"><span>or in the</span> <a class="cg-1" href="https://discord.gg/ff" target="_blank">Fantastic Frontier Discord Server</a> <span>for inquiries or feedback!</span></p></div> <div><p class="flex fjc-center fai-center cg-1"><span>Frontier Clock especially took heavy inspiration from</span> <a class="flex fjc-center fai-center cg-1" href="https://sky-clock.netlify.app/" target="_blank"><iconify-icon icon="charm:clock"></iconify-icon>
                Sky Clock
            </a>,</p> <p class="flex fjc-center fai-center cg-1"><span>and certainly wouldn&#39;t be here without the</span> <a class="flex fjc-center fai-center cg-1" href="https://fantastic-frontier-roblox.fandom.com/wiki/Fantastic_Frontier_-_Roblox_Wiki" target="_blank"><iconify-icon icon="simple-icons:fandom"></iconify-icon> <span>Fantastic Frontier Wiki</span> </a>.</p></div> <div><p class="flex fjc-center"><span class="title">Special Thanks to:</span></p> <p class="flex fjc-center fai-center cg-1"><span>— Spectrabox and Gorbachelli, for creating truly such a</span> <a href="https://www.roblox.com/games/510411669/Fantastic-Frontier" class="flex fjc-center fai-center cg-1"><iconify-icon icon="simple-icons:roblox"></iconify-icon> <span>fantastic game.</span></a></p></div>`,S(e,"class","title"),S(s,"class","credits contents flex fd-col smaller-fs")},m(o,a){B(o,e,a),B(o,t,a),B(o,r,a),B(o,i,a),B(o,s,a)},p:oe,i:oe,o:oe,d(o){o&&(R(e),R(t),R(r),R(i),R(s))}}}class py extends ze{constructor(e){super(),We(this,e,null,hy,Se,{})}}function Yc(n,e,t){const r=n.slice();return r[5]=e[t],r}function _y(n){let e,t=be(n[1]),r=[];for(let i=0;i<t.length;i+=1)r[i]=Qc(Yc(n,t,i));return{c(){for(let i=0;i<r.length;i+=1)r[i].c();e=Ct()},m(i,s){for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(i,s);B(i,e,s)},p(i,s){if(s&2){t=be(i[1]);let o;for(o=0;o<t.length;o+=1){const a=Yc(i,t,o);r[o]?r[o].p(a,s):(r[o]=Qc(a),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=t.length}},d(i){i&&R(e),dt(r,i)}}}function my(n){let e,t,r;return{c(){e=T("span"),t=K("— "),r=K(n[1]),S(e,"id","cliInfo")},m(i,s){B(i,e,s),w(e,t),w(e,r)},p(i,s){s&2&&de(r,i[1])},d(i){i&&R(e)}}}function Qc(n){let e,t,r=n[5]+"",i;return{c(){e=T("span"),t=K("— "),i=K(r),S(e,"id","cliInfo")},m(s,o){B(s,e,o),w(e,t),w(e,i)},p(s,o){o&2&&r!==(r=s[5]+"")&&de(i,r)},d(s){s&&R(e)}}}function gy(n){let e,t,r,i,s,o,a,l,c;function u(h,_){return typeof h[1]=="string"?my:_y}let f=u(n),d=f(n);return{c(){e=T("hr"),t=z(),r=T("li"),i=T("span"),s=K("v"),o=K(n[0]),a=z(),l=T("i"),l.textContent=`${`${n[3][n[2][1]-1]} ${n[2][0]}, 20${n[2][2]}`}`,c=z(),d.c(),S(i,"id","cliVersion"),S(l,"id","cliDate"),S(r,"class","changelogItem flex fw fai-center")},m(h,_){B(h,e,_),B(h,t,_),B(h,r,_),w(r,i),w(i,s),w(i,o),w(r,a),w(r,l),w(r,c),d.m(r,null)},p(h,[_]){_&1&&de(o,h[0]),f===(f=u(h))&&d?d.p(h,_):(d.d(1),d=f(h),d&&(d.c(),d.m(r,null)))},i:oe,o:oe,d(h){h&&(R(e),R(t),R(r)),d.d()}}}function xy(n,e,t){let{version:r,date:i,logs:s}=e,o=i.split("/"),a=["January","February","March","April","May","June","July","August","September","October","November","December"];return n.$$set=l=>{"version"in l&&t(0,r=l.version),"date"in l&&t(4,i=l.date),"logs"in l&&t(1,s=l.logs)},[r,s,o,a,i]}class vy extends ze{constructor(e){super(),We(this,e,xy,gy,Se,{version:0,date:4,logs:1})}}function Xc(n,e,t){const r=n.slice();return r[1]=e[t],r}function Jc(n){let e,t;const r=[n[1]];let i={};for(let s=0;s<r.length;s+=1)i=ln(i,r[s]);return e=new vy({props:i}),{c(){it(e.$$.fragment)},m(s,o){Xe(e,s,o),t=!0},p(s,o){const a=o&1?cn(r,[Dr(s[1])]):{};e.$set(a)},i(s){t||(Y(e.$$.fragment,s),t=!0)},o(s){ee(e.$$.fragment,s),t=!1},d(s){Je(e,s)}}}function yy(n){let e,t,r,i,s,o,a=be(n[0].toReversed()),l=[];for(let u=0;u<a.length;u+=1)l[u]=Jc(Xc(n,a,u));const c=u=>ee(l[u],1,1,()=>{l[u]=null});return{c(){e=T("span"),e.textContent="Changelog",t=z(),r=T("hr"),i=z(),s=T("ul");for(let u=0;u<l.length;u+=1)l[u].c();S(e,"class","title"),S(s,"class","changelog contents flex fd-col smaller-fs")},m(u,f){B(u,e,f),B(u,t,f),B(u,r,f),B(u,i,f),B(u,s,f);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(s,null);o=!0},p(u,[f]){if(f&1){a=be(u[0].toReversed());let d;for(d=0;d<a.length;d+=1){const h=Xc(u,a,d);l[d]?(l[d].p(h,f),Y(l[d],1)):(l[d]=Jc(h),l[d].c(),Y(l[d],1),l[d].m(s,null))}for(Re(),d=a.length;d<l.length;d+=1)c(d);Fe()}},i(u){if(!o){for(let f=0;f<a.length;f+=1)Y(l[f]);o=!0}},o(u){l=l.filter(Boolean);for(let f=0;f<l.length;f+=1)ee(l[f]);o=!1},d(u){u&&(R(e),R(t),R(r),R(i),R(s)),dt(l,u)}}}function Ey(n){return[[{version:"1.0.0",date:"13/6/25",logs:"v1 Release"},{version:"1.0.1",date:"28/6/25",logs:"Corrected Green Golem's note"}]]}class Cy extends ze{constructor(e){super(),We(this,e,Ey,yy,Se,{})}}function by(n){let e,t,r,i,s;return{c(){e=T("span"),e.textContent="Frontier Clock Policy",t=z(),r=T("hr"),i=z(),s=T("div"),s.innerHTML=`<b>About</b> <p>This site is a passion project, one that is independent and is not
        affiliated with or sponsored by the creators of Fantastic Frontier.</p> <b>Privacy Policy</b> <p>This policy explains what information Frontier Clock (&quot;we&quot;, &quot;us&quot; or
        &quot;our&quot;) collects, uses, and shares when you use our website.</p> <b>Information We Collect</b> <p>We collect information about how you use and interact with our website,
        general demographic details, and information about your device or
        browser.</p> <b>How We Use This Information</b> <p>Your information may be utilized to test and improve the site, once the
        aggregated, non-identifying information provided has been collected and
        analyzed.</p> <b>Contact</b> <p>For any questions or inquiries, feel free to contact us at <hl>@xt.ss</hl>.</p>`,S(e,"class","title"),S(s,"class","policy contents flex fd-col smaller-fs")},m(o,a){B(o,e,a),B(o,t,a),B(o,r,a),B(o,i,a),B(o,s,a)},p:oe,i:oe,o:oe,d(o){o&&(R(e),R(t),R(r),R(i),R(s))}}}class wy extends ze{constructor(e){super(),We(this,e,null,by,Se,{})}}function Zc(n,e,t){const r=n.slice();return r[58]=e[t],r}function Ay(n){let e,t,r,i,s,o,a,l,c,u,f,d,h,_,p,x,v,m,g=n[10]?"Hide":"Show",y,E,b,I,C=!n[8]&&e0(n);function F(W,$){return W[8]?Ty:ky}let A=F(n),k=A(n),N=[{type:n[10]?"text":"password"},{minlength:"6"},{maxlength:"20"},{placeholder:d=(n[8]?"New":"")+" Password"},{autocomplete:h=(n[1]||n[8]?"new":"current")+"-password"},{class:"font-ms"}],D={};for(let W=0;W<N.length;W+=1)D=ln(D,N[W]);let L=(n[1]||n[8])&&t0(n),G=!n[1]&&!n[8]&&n0(n);return{c(){C&&C.c(),e=z(),t=T("div"),r=T("div"),i=T("div"),s=T("iconify-icon"),o=z(),k.c(),a=z(),l=T("div"),c=T("iconify-icon"),u=z(),f=T("input"),_=z(),L&&L.c(),p=z(),x=T("div"),G&&G.c(),v=z(),m=T("button"),y=K(g),E=K(" password"),ge(s,"icon","lucide:user-round"),S(i,"class","flex fai-center br-1"),ye(i,"ff-item",n[8]),ye(i,"border-tp",!n[8]),ge(c,"icon","material-symbols:lock-outline"),In(f,D),S(l,"class","flex fai-center pos-rel border-tp br-1"),S(r,"class","formInputs flex fd-col rg-1"),S(m,"class","textBtn smaller-fs no-bg no-bg-change"),S(x,"class","flex"),ke(x,"justify-content",n[1]||n[8]?"flex-end":"space-between")},m(W,$){C&&C.m(W,$),B(W,e,$),B(W,t,$),w(t,r),w(r,i),w(i,s),w(i,o),k.m(i,null),w(r,a),w(r,l),w(l,c),w(l,u),w(l,f),f.autofocus&&f.focus(),ht(f,n[2].password),w(r,_),L&&L.m(r,null),w(t,p),w(t,x),G&&G.m(x,null),w(x,v),w(x,m),w(m,y),w(m,E),b||(I=[le(f,"input",n[33]),le(f,"input",n[34]),le(m,"click",n[38])],b=!0)},p(W,$){W[8]?C&&(C.d(1),C=null):C?C.p(W,$):(C=e0(W),C.c(),C.m(e.parentNode,e)),A===(A=F(W))&&k?k.p(W,$):(k.d(1),k=A(W),k&&(k.c(),k.m(i,null))),$[0]&256&&ye(i,"ff-item",W[8]),$[0]&256&&ye(i,"border-tp",!W[8]),In(f,D=cn(N,[$[0]&1024&&{type:W[10]?"text":"password"},{minlength:"6"},{maxlength:"20"},$[0]&256&&d!==(d=(W[8]?"New":"")+" Password")&&{placeholder:d},$[0]&258&&h!==(h=(W[1]||W[8]?"new":"current")+"-password")&&{autocomplete:h},{class:"font-ms"}])),$[0]&4&&f.value!==W[2].password&&ht(f,W[2].password),W[1]||W[8]?L?L.p(W,$):(L=t0(W),L.c(),L.m(r,null)):L&&(L.d(1),L=null),!W[1]&&!W[8]?G?G.p(W,$):(G=n0(W),G.c(),G.m(x,v)):G&&(G.d(1),G=null),$[0]&1024&&g!==(g=W[10]?"Hide":"Show")&&de(y,g),$[0]&258&&ke(x,"justify-content",W[1]||W[8]?"flex-end":"space-between")},d(W){W&&(R(e),R(t)),C&&C.d(W),k.d(),L&&L.d(),G&&G.d(),b=!1,Te(I)}}}function Iy(n){let e,t,r,i,s,o,a,l,c,u,f,d,h,_,p;function x(C,F){return C[7]?Dy:Sy}let v=x(n),m=v(n);function g(C,F){if(C[7])return Fy;if(C[6]||C[9])return Ry}let y=g(n),E=y&&y(n),b=!n[0]&&r0(n),I=n[0]&&!n[9]&&i0(n);return{c(){e=T("div"),m.c(),t=z(),r=T("div"),i=T("div"),E&&E.c(),s=z(),o=T("div"),a=T("iconify-icon"),l=z(),c=T("input"),f=z(),b&&b.c(),d=z(),I&&I.c(),h=Ct(),S(e,"class","smaller-fs"),ke(e,"letter-spacing","-0.05rem"),ke(e,"line-height","3.75rem"),ge(a,"icon","jam:write"),c.disabled=u=!n[9]&&n[0]&&!!n[2].password,S(c,"type","text"),S(c,"autocomplete","off"),S(c,"minlength","1"),S(c,"maxlength","35"),S(c,"placeholder","Your answer"),S(c,"class","font-ms"),S(o,"class","flex fai-center pos-rel border-tp br-1"),S(i,"class","formInputs flex fd-col rg-1"),S(r,"class","flex fd-col")},m(C,F){B(C,e,F),m.m(e,null),B(C,t,F),B(C,r,F),w(r,i),E&&E.m(i,null),w(i,s),w(i,o),w(o,a),w(o,l),w(o,c),ht(c,n[2].answer),w(r,f),b&&b.m(r,null),B(C,d,F),I&&I.m(C,F),B(C,h,F),_||(p=[le(c,"input",n[24]),le(c,"input",n[25])],_=!0)},p(C,F){v===(v=x(C))&&m?m.p(C,F):(m.d(1),m=v(C),m&&(m.c(),m.m(e,null))),y===(y=g(C))&&E?E.p(C,F):(E&&E.d(1),E=y&&y(C),E&&(E.c(),E.m(i,s))),F[0]&517&&u!==(u=!C[9]&&C[0]&&!!C[2].password)&&(c.disabled=u),F[0]&4&&c.value!==C[2].answer&&ht(c,C[2].answer),C[0]?b&&(b.d(1),b=null):b?b.p(C,F):(b=r0(C),b.c(),b.m(r,null)),C[0]&&!C[9]?I?I.p(C,F):(I=i0(C),I.c(),I.m(h.parentNode,h)):I&&(I.d(1),I=null)},d(C){C&&(R(e),R(t),R(r),R(d),R(h)),m.d(),E&&E.d(),b&&b.d(),I&&I.d(C),_=!1,Te(p)}}}function e0(n){let e,t=n[1]?"Already have":"Don't have",r,i,s,o=n[1]?"Log In":"Sign Up",a,l,c;return{c(){e=T("div"),r=K(t),i=K(` an account?\r
                `),s=T("button"),a=K(o),s.disabled=n[4],S(s,"class","border-tp br-1"),S(s,"id","switchMethod"),S(e,"class","smaller-fs")},m(u,f){B(u,e,f),w(e,r),w(e,i),w(e,s),w(s,a),l||(c=le(s,"click",n[30]),l=!0)},p(u,f){f[0]&2&&t!==(t=u[1]?"Already have":"Don't have")&&de(r,t),f[0]&2&&o!==(o=u[1]?"Log In":"Sign Up")&&de(a,o),f[0]&16&&(s.disabled=u[4])},d(u){u&&R(e),l=!1,c()}}}function ky(n){let e,t,r;return{c(){e=T("input"),S(e,"type","text"),S(e,"minlength","2"),S(e,"maxlength","20"),S(e,"placeholder","Username"),S(e,"autocomplete","username"),S(e,"class","font-ms")},m(i,s){B(i,e,s),ht(e,n[2].username),t||(r=[le(e,"input",n[31]),le(e,"input",n[32])],t=!0)},p(i,s){s[0]&4&&e.value!==i[2].username&&ht(e,i[2].username)},d(i){i&&R(e),t=!1,Te(r)}}}function Ty(n){let e,t=n[11].displayName+"",r;return{c(){e=T("span"),r=K(t),S(e,"class","flex fjc-center"),ke(e,"flex","1")},m(i,s){B(i,e,s),w(e,r)},p(i,s){s[0]&2048&&t!==(t=i[11].displayName+"")&&de(r,t)},d(i){i&&R(e)}}}function t0(n){let e,t,r,i,s,o,a,l=[{type:n[10]?"text":"password"},{minlength:"6"},{maxlength:"20"},{placeholder:s="Confirm "+(n[8]?"New Password":"Password")},{autocomplete:"new-password"},{class:"font-ms"}],c={};for(let u=0;u<l.length;u+=1)c=ln(c,l[u]);return{c(){e=T("div"),t=T("iconify-icon"),r=z(),i=T("input"),ge(t,"icon","material-symbols:lock"),In(i,c),S(e,"class","flex fai-center pos-rel border-tp br-1")},m(u,f){B(u,e,f),w(e,t),w(e,r),w(e,i),i.autofocus&&i.focus(),ht(i,n[2].confirm),o||(a=[le(i,"input",n[35]),le(i,"input",n[36])],o=!0)},p(u,f){In(i,c=cn(l,[f[0]&1024&&{type:u[10]?"text":"password"},{minlength:"6"},{maxlength:"20"},f[0]&256&&s!==(s="Confirm "+(u[8]?"New Password":"Password"))&&{placeholder:s},{autocomplete:"new-password"},{class:"font-ms"}])),f[0]&4&&i.value!==u[2].confirm&&ht(i,u[2].confirm)},d(u){u&&R(e),o=!1,Te(a)}}}function n0(n){let e,t,r,i;return{c(){e=T("button"),t=K("Forgot password?"),e.disabled=n[4],S(e,"class","textBtn smaller-fs no-bg no-bg-change")},m(s,o){B(s,e,o),w(e,t),r||(i=le(e,"click",n[37]),r=!0)},p(s,o){o[0]&16&&(e.disabled=s[4])},d(s){s&&R(e),r=!1,i()}}}function Sy(n){let e,t=n[9]?"another":"a",r,i,s,o,a=n[9]?"again":"",l,c,u,f,d,h,_,p,x,v,m;return{c(){e=K("Before finalizing, we ask you to create "),r=K(t),i=z(),s=T("hl"),s.textContent="security question",o=K(`\r
                to answer in case you ever need to reset your password `),l=K(a),c=K(`.\r
                `),u=T("br"),f=z(),d=T("b"),d.textContent=`The answer should be confidential, easy to recall, and not\r
                    subject to change.`,h=z(),_=T("br"),p=K(`\r
                If you forget the `),x=T("hl"),x.textContent="exact answer",v=K(` (case-sensitive) along\r
                with your password, you may lose access to your account\r
                `),m=T("hl"),m.textContent="permanently!"},m(g,y){B(g,e,y),B(g,r,y),B(g,i,y),B(g,s,y),B(g,o,y),B(g,l,y),B(g,c,y),B(g,u,y),B(g,f,y),B(g,d,y),B(g,h,y),B(g,_,y),B(g,p,y),B(g,x,y),B(g,v,y),B(g,m,y)},p(g,y){y[0]&512&&t!==(t=g[9]?"another":"a")&&de(r,t),y[0]&512&&a!==(a=g[9]?"again":"")&&de(l,a)},d(g){g&&(R(e),R(r),R(i),R(s),R(o),R(l),R(c),R(u),R(f),R(d),R(h),R(_),R(p),R(x),R(v),R(m))}}}function Dy(n){let e,t=n[0]?"security question and password":"password",r,i;return{c(){e=K("Answer the following prompt to reset your "),r=K(t),i=K(":")},m(s,o){B(s,e,o),B(s,r,o),B(s,i,o)},p(s,o){o[0]&1&&t!==(t=s[0]?"security question and password":"password")&&de(r,t)},d(s){s&&(R(e),R(r),R(i))}}}function Ry(n){let e,t,r,i,s,o;return{c(){e=T("div"),t=T("iconify-icon"),r=z(),i=T("input"),ge(t,"icon","f7:question-square"),S(i,"type","text"),S(i,"autocomplete","off"),S(i,"minlength","10"),S(i,"maxlength","35"),S(i,"placeholder","Your question"),S(i,"class","font-ms"),S(e,"class","flex fai-center border-tp br-1")},m(a,l){B(a,e,l),w(e,t),w(e,r),w(e,i),ht(i,n[2].question),s||(o=[le(i,"input",n[22]),le(i,"input",n[23])],s=!0)},p(a,l){l[0]&4&&i.value!==a[2].question&&ht(i,a[2].question)},d(a){a&&R(e),s=!1,Te(o)}}}function Fy(n){let e,t,r,i,s=(xt(n[11])?n[11].security.question:"...")+"",o;return{c(){e=T("div"),t=T("iconify-icon"),r=z(),i=T("span"),o=K(s),ge(t,"icon","f7:question-square"),S(i,"class","flex fjc-center"),ke(i,"flex","1"),S(e,"class","ff-item flex fai-center br-1")},m(a,l){B(a,e,l),w(e,t),w(e,r),w(e,i),w(i,o)},p(a,l){l[0]&2048&&s!==(s=(xt(a[11])?a[11].security.question:"...")+"")&&de(o,s)},d(a){a&&R(e)}}}function r0(n){let e,t,r,i=n[6]?"Sign Up":n[9]?"Password Reset":"Log In",s,o,a;return{c(){e=T("div"),t=T("button"),r=K("Back to "),s=K(i),t.disabled=n[4],S(t,"class","textBtn smaller-fs no-bg no-bg-change"),S(e,"class","flex")},m(l,c){B(l,e,c),w(e,t),w(t,r),w(t,s),o||(a=le(t,"click",n[26]),o=!0)},p(l,c){c[0]&576&&i!==(i=l[6]?"Sign Up":l[9]?"Password Reset":"Log In")&&de(s,i),c[0]&16&&(t.disabled=l[4])},d(l){l&&R(e),o=!1,a()}}}function i0(n){let e,t,r,i,s,o,a,l,c,u,f,d,h,_=n[10]?"Hide":"Show",p,x,v,m,g=[{disabled:c=!!n[2].answer},{type:n[10]?"text":"password"},{minlength:"6"},{maxlength:"20"},{placeholder:u=(n[8]?"New":"")+" Password"},{class:"font-ms"}],y={};for(let E=0;E<g.length;E+=1)y=ln(y,g[E]);return{c(){e=T("span"),e.textContent=`or, alternatively, input your current password in case you know\r
                it:`,t=z(),r=T("div"),i=T("div"),s=T("div"),o=T("iconify-icon"),a=z(),l=T("input"),f=z(),d=T("div"),h=T("button"),p=K(_),x=K(" password"),S(e,"class","smaller-fs"),ge(o,"icon","material-symbols:lock-outline"),In(l,y),S(s,"class","flex fai-center pos-rel border-tp br-1"),S(i,"class","formInputs flex fd-col rg-1"),S(h,"class","textBtn smaller-fs no-bg no-bg-change"),S(d,"class","flex"),ke(d,"justify-content","flex-end")},m(E,b){B(E,e,b),B(E,t,b),B(E,r,b),w(r,i),w(i,s),w(s,o),w(s,a),w(s,l),l.autofocus&&l.focus(),ht(l,n[2].password),w(r,f),w(r,d),w(d,h),w(h,p),w(h,x),v||(m=[le(l,"input",n[27]),le(l,"input",n[28]),le(h,"click",n[29])],v=!0)},p(E,b){In(l,y=cn(g,[b[0]&4&&c!==(c=!!E[2].answer)&&{disabled:c},b[0]&1024&&{type:E[10]?"text":"password"},{minlength:"6"},{maxlength:"20"},b[0]&256&&u!==(u=(E[8]?"New":"")+" Password")&&{placeholder:u},{class:"font-ms"}])),b[0]&4&&l.value!==E[2].password&&ht(l,E[2].password),b[0]&1024&&_!==(_=E[10]?"Hide":"Show")&&de(p,_)},d(E){E&&(R(e),R(t),R(r)),v=!1,Te(m)}}}function s0(n){let e,t=be(n[5]),r=[];for(let i=0;i<t.length;i+=1)r[i]=o0(Zc(n,t,i));return{c(){e=T("div");for(let i=0;i<r.length;i+=1)r[i].c();S(e,"class","flex fd-col smaller-fs"),ke(e,"color","var(--ff-red)")},m(i,s){B(i,e,s);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null)},p(i,s){if(s[0]&40){t=be(i[5]);let o;for(o=0;o<t.length;o+=1){const a=Zc(i,t,o);r[o]?r[o].p(a,s):(r[o]=o0(a),r[o].c(),r[o].m(e,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=t.length}},d(i){i&&R(e),dt(r,i)}}}function o0(n){let e,t,r=n[3][n[58]].message+"",i;return{c(){e=T("span"),t=K("- "),i=K(r)},m(s,o){B(s,e,o),w(e,t),w(e,i)},p(s,o){o[0]&40&&r!==(r=s[3][s[58]].message+"")&&de(i,r)},d(s){s&&R(e)}}}function By(n){let e,t=n[6]||n[9]?`Security ${n[0]?"Reset":"Question"}`:n[1]?"Sign Up":n[7]||n[8]?`${n[0]?"Security":"Password"} Reset`:"Log In",r,i,s,o,a,l,c,u,f=n[6]?"Create Account":n[9]?`Reset ${n[0]?"":"& Log In"}`:n[1]||n[7]||n[8]?"Next":"Log In",d,h,_;function p(g,y){return g[6]||g[9]||g[7]?Iy:Ay}let x=p(n),v=x(n),m=n[5].length&&s0(n);return{c(){e=T("span"),r=K(t),i=z(),s=T("hr"),o=z(),a=T("div"),v.c(),l=z(),m&&m.c(),c=z(),u=T("button"),d=K(f),S(e,"class","title"),u.disabled=n[4],S(u,"class","mainBtn border-tp br-1"),S(a,"class","signupAndLogin contents flex fd-col smaller-fs"),ke(a,"width",n[6]||n[9]||n[7]?"80rem":"")},m(g,y){B(g,e,y),w(e,r),B(g,i,y),B(g,s,y),B(g,o,y),B(g,a,y),v.m(a,null),w(a,l),m&&m.m(a,null),w(a,c),w(a,u),w(u,d),h||(_=le(u,"click",n[39]),h=!0)},p(g,y){y[0]&963&&t!==(t=g[6]||g[9]?`Security ${g[0]?"Reset":"Question"}`:g[1]?"Sign Up":g[7]||g[8]?`${g[0]?"Security":"Password"} Reset`:"Log In")&&de(r,t),x===(x=p(g))&&v?v.p(g,y):(v.d(1),v=x(g),v&&(v.c(),v.m(a,l))),g[5].length?m?m.p(g,y):(m=s0(g),m.c(),m.m(a,c)):m&&(m.d(1),m=null),y[0]&963&&f!==(f=g[6]?"Create Account":g[9]?`Reset ${g[0]?"":"& Log In"}`:g[1]||g[7]||g[8]?"Next":"Log In")&&de(d,f),y[0]&16&&(u.disabled=g[4]),y[0]&704&&ke(a,"width",g[6]||g[9]||g[7]?"80rem":"")},i:oe,o:oe,d(g){g&&(R(e),R(i),R(s),R(o),R(a)),v.d(),m&&m.d(),h=!1,_()}}}let Py=/[^a-zA-Z0-9_]/g,ao="@fantastic.frontier";function Ny(n,e,t){let r,i,s;xe(n,De,re=>t(21,r=re)),xe(n,pi,re=>t(40,i=re)),xe(n,zr,re=>t(41,s=re));let{onlyReset:o=!1,verifyAndSync:a}=e,l=!1,c=!1,u=!!o,f=!1,d=!1,h=!1,_=["admin","administrator","administration","advertiser","affiliate","affiliation","anonymous","bot","contributor","creator","designer","dev","developer","editor","guest","helper","management","manager","member","mod","moderation","moderator","name","operator","owner","service","staff","support","system","tester","user","username","visitor","website","xt8","xt8ss","xtss","xt_ss","you","yourname","yourusername"],p={question:"",answer:"",username:s||"",password:"",confirm:""},x={loginWrong:{active:!1,message:"That's not quite right!"},userNotFound:{active:!1,message:"Please make sure your username is correct!"},usernameUnavailable:{active:!1,message:"That username isn't available!"},usernameDupe:{active:!1,message:"That username is already taken!"},usernameLength:{active:!1,message:"Please make your username between 2-20 characters!"},passwordReset:{active:!1,message:"That's not quite right either!"},passwordLength:{active:!1,message:"Please make your password between 6-20 characters!"},passwordMatch:{active:!1,message:"Please make sure your passwords match!"},questionLength:{active:!1,message:"Please make your question between 10-35 characters!"},answerLength:{active:!1,message:"Please make your answer between 1-35 characters!"},answerWrong:{active:!1,message:"That's not quite right!"}},v=!1,m=[],g,y={},E=[];o&&A();async function b(){c||d?(W(),$(),setTimeout(()=>{m.length||(c?I():d&&F())})):l?(G(),D(),setTimeout(async()=>{if(!m.length){if(await A(),xt(y)){O("usernameDupe");return}t(6,c=!0)}})):f?(D(),setTimeout(()=>{m.length||(t(2,p.answer="",p),t(9,d=!0))})):u?((!o||o&&!p.password)&&$(),o&&!p.answer&&L(),setTimeout(()=>{if(!m.length){if((!o||o&&!p.password)&&oo(y.security.answer.toString(),y.uid)!==p.answer){O("answerWrong");return}if(o&&!p.answer&&oo(y.password,y.uid)!==p.password){O("loginWrong");return}t(2,p.password="",p),t(2,p.confirm="",p),t(7,u=!1),t(8,f=!0)}})):(L(),setTimeout(async()=>{if(!m.length){if(await A(),!xt(y)){O("loginWrong");return}C()}}))}async function I(){pe(pi,i=!0,i),t(4,v=!0),pe(zr,s=p.username,s),await Q_(ut,s+ao,p.password),await J_(ut.currentUser,{displayName:s}),await cc(bs(ws,`${s.toLowerCase()}/userInfo`),k()).then(()=>pe(pi,i=!1,i)),t(4,v=!1),N(),setTimeout(a,200)}async function C(){t(4,v=!0);try{await xl(ut,p.username+ao,p.password)}catch{O("loginWrong"),t(4,v=!1);return}t(4,v=!1),N()}async function F(){t(4,v=!0),o&&(await ut.signOut(),t(2,p.username=y.displayName,p)),await xl(ut,p.username+ao,oo(y.password,y.uid)),await Z_(ut.currentUser,p.password),await cc(bs(ws,`${p.username.toLowerCase()}/userInfo`),k(y.displayName)),t(4,v=!1),N()}async function A(){let re=p.username,je=p.username.toLowerCase();if(!re||re.length<2||E.includes(je)){t(11,y={});return}if(!xt(y)||y.username!==je){t(4,v=!0);let ot=(await mv(yv(bs(ws,`${je}/userInfo`),vv()))).val();ot?t(11,y={username:je,...ot}):(t(11,y={}),E.push(je)),t(4,v=!1)}}function k(re){return{displayName:re||p.username,password:$c(p.password),security:{question:p.question,answer:$c(p.answer)},uid:ut.currentUser.uid}}function N(){t(20,Z=!0),setTimeout(jn)}function D(){(p.password.length<6||p.password.length>20)&&O("passwordLength"),p.password!==p.confirm&&O("passwordMatch")}function L(){(p.password.length<6||p.password.length>20)&&O("loginWrong")}function G(){_.includes(p.username.toLowerCase())?O("usernameUnavailable"):(p.username.length<2||p.username.length>20)&&O("usernameLength")}function W(){(p.question.length<10||p.question.length>35)&&O("questionLength")}function $(){(!p.answer.length||p.answer.length>35)&&O("answerLength")}function Q(re){P(Py,20,re)}function J(re){P(/[^a-zA-Z0-9 \$\.\,\?\"\!\@\#\%\&\/\>\<\'\:\;\~\+\=\-]/g,35,re)}function X(re){P(/[^a-zA-Z0-9\^\$\*\.\[\]\{\}\(\)\?\"\!\@\#\%\&\/\\\,\>\<\'\:\;\|\_\~\`\+\=\-]/g,20,re)}function P(re,je,ot){t(2,p[ot]=p[ot].replace(re,"").slice(0,je),p)}function H(){for(let re in p)t(2,p[re]="",p)}function O(re){t(3,x[re].active=!0,x)}function U(){pe(De,r.preventClosing=!!v,r)}const ne=ru();let Z=!1;function M(){p.question=this.value,t(2,p)}const j=()=>J("question");function me(){p.answer=this.value,t(2,p)}const te=()=>J("answer"),He=re=>{et(re),!v&&(c?t(6,c=!1):d?t(9,d=!1):t(7,u=!1))};function _t(){p.password=this.value,t(2,p)}const Ke=()=>X("password"),Ne=re=>{et(re),t(10,h=!h)},Vt=re=>{et(re),!v&&(t(1,l=!l),t(10,h=!1))};function Rt(){p.username=this.value,t(2,p)}const jt=()=>Q("username");function Ft(){p.password=this.value,t(2,p)}const gn=()=>X("password");function Bt(){p.confirm=this.value,t(2,p)}const Ye=()=>X("confirm"),Ve=async re=>{if(et(re),!v){if(await A(),!xt(y)){O("userNotFound");return}t(7,u=!0)}},lt=re=>{et(re),t(10,h=!h)},Gt=re=>{et(re),!v&&b()};return n.$$set=re=>{"onlyReset"in re&&t(0,o=re.onlyReset),"verifyAndSync"in re&&t(18,a=re.verifyAndSync)},n.$$.update=()=>{n.$$.dirty[0]&2&&(l||!l)&&H(),n.$$.dirty[0]&5&&o&&(p.answer||p.password)&&(t(4,v=!0),setTimeout(()=>{H(),t(4,v=!1)})),n.$$.dirty[0]&524328&&(t(5,m=Object.keys(x).filter(re=>x[re].active)),m.length&&(clearTimeout(g),t(19,g=setTimeout(()=>{t(5,m=[]);for(let re in x)t(3,x[re].active=!1,x)},2500)))),n.$$.dirty[0]&16&&(v||!v)&&U(),n.$$.dirty[0]&3145728&&r.component===null&&!Z&&ne("signupAndLoginClose")},[o,l,p,x,v,m,c,u,f,d,h,y,b,A,Q,J,X,O,a,g,Z,r,M,j,me,te,He,_t,Ke,Ne,Vt,Rt,jt,Ft,gn,Bt,Ye,Ve,lt,Gt]}class Id extends ze{constructor(e){super(),We(this,e,Ny,By,Se,{onlyReset:0,verifyAndSync:18},null,[-1,-1])}}function a0(n){let e,t;return{c(){e=T("span"),t=K(n[2]),S(e,"class","tooltip"),S(e,"id",n[1])},m(r,i){B(r,e,i),w(e,t)},p(r,i){i&4&&de(t,r[2]),i&2&&S(e,"id",r[1])},d(r){r&&R(e)}}}function Oy(n){let e,t,r,i,s,o=n[1]&&a0(n);return{c(){e=T("div"),t=T("iconify-icon"),r=z(),i=K(n[0]),s=z(),o&&o.c(),ge(t,"icon",n[3]),ke(t,"color",n[4]),S(e,"class","username flex fjc-center fai-center cg-1 pos-rel font-ms")},m(a,l){B(a,e,l),w(e,t),w(e,r),w(e,i),w(e,s),o&&o.m(e,null)},p(a,[l]){l&8&&ge(t,"icon",a[3]),l&16&&ke(t,"color",a[4]),l&1&&de(i,a[0]),a[1]?o?o.p(a,l):(o=a0(a),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},i:oe,o:oe,d(a){a&&R(e),o&&o.d()}}}function Ly(n,e,t){let{username:r,tooltipPosition:i=null}=e,s,o="line-md:loading-loop",a="black";return n.$$set=l=>{"username"in l&&t(0,r=l.username),"tooltipPosition"in l&&t(1,i=l.tooltipPosition)},n.$$.update=()=>{n.$$.dirty&5&&xt(Jn)&&(t(2,s=fy(r)),t(3,o=Jn[s].icon.iconifyName),t(4,a=Jn[s].icon.color))},[r,i,s,o,a]}class My extends ze{constructor(e){super(),We(this,e,Ly,Oy,Se,{username:0,tooltipPosition:1})}}function Uy(n){let e,t,r,i,s,o,a,l,c,u,f,d,h,_,p,x;return t=new My({props:{username:n[0],tooltipPosition:"top"}}),{c(){e=T("span"),it(t.$$.fragment),r=z(),i=T("hr"),s=z(),o=T("div"),a=T("span"),l=K(`Created\r
        `),c=T("hl"),c.textContent=`${new Date(parseInt(n[2])).toLocaleDateString(void 0,{dateStyle:"long"})}`,u=z(),f=T("button"),f.textContent="Reset Security Question & Password",d=z(),h=T("button"),h.textContent="Log Out",S(e,"class","title"),S(f,"class","textBtn smaller-fs no-bg no-bg-change"),S(h,"class","mainBtn border-tp br-1"),S(o,"class","contents flex fd-col"),ke(o,"row-gap","2.5rem")},m(v,m){B(v,e,m),Xe(t,e,null),B(v,r,m),B(v,i,m),B(v,s,m),B(v,o,m),w(o,a),w(a,l),w(a,c),w(o,u),w(o,f),w(o,d),w(o,h),_=!0,p||(x=[le(f,"click",n[3]),le(h,"click",n[4])],p=!0)},p(v,[m]){const g={};m&1&&(g.username=v[0]),t.$set(g)},i(v){_||(Y(t.$$.fragment,v),_=!0)},o(v){ee(t.$$.fragment,v),_=!1},d(v){v&&(R(e),R(r),R(i),R(s),R(o)),Je(t),p=!1,Te(x)}}}function Hy(n,e,t){let r,i,s;xe(n,Po,c=>t(5,r=c)),xe(n,zr,c=>t(0,i=c)),xe(n,De,c=>t(1,s=c));let o=r.metadata.createdAt;return[i,s,o,()=>{pe(De,s.props.onlyReset=!0,s),pe(De,s.component=Id,s)},()=>{ut.signOut(),wd("logOut","You logged out"),jn()}]}class Wy extends ze{constructor(e){super(),We(this,e,Hy,Uy,Se,{})}}function l0(n){let e,t,r;return{c(){e=T("iconify-icon"),ge(e,"icon","uil:exclamation"),ge(e,"id","unseen")},m(i,s){B(i,e,s),r=!0},i(i){r||(i&&rt(()=>{r&&(t||(t=ft(e,Et,{duration:150},!0)),t.run(1))}),r=!0)},o(i){i&&(t||(t=ft(e,Et,{duration:150},!1)),t.run(0)),r=!1},d(i){i&&R(e),i&&t&&t.end()}}}function zy(n){let e,t,r,i,s,o,a=n[3]?"Account":"Log In",l,c,u,f,d,h,_,p,x,v,m,g,y,E,b,I,C=!n[4]&&l0();return{c(){e=T("div"),t=T("button"),t.innerHTML='<iconify-icon icon="octicon:people-16"></iconify-icon> <span class="tooltip" id="right">Credits</span>',r=z(),i=T("a"),i.innerHTML=`<img src="${ni+"/ko-fi/icon.png"}" alt="Ko-fi"/> <span class="tooltip" id="right">Support Me</span>`,s=z(),o=T("button"),l=K(a),c=z(),u=T("a"),u.innerHTML='<img src="https://xt8ss.github.io/fantastic-hub/favicon.png" alt="Fantastic Hub"/> <span class="tooltip" id="right">Fantastic Hub</span>',f=z(),d=T("button"),h=T("iconify-icon"),_=z(),p=T("span"),p.textContent="Changelog",x=z(),C&&C.c(),v=z(),m=T("div"),g=K(n[0]),y=z(),E=T("button"),E.innerHTML='<iconify-icon icon="material-symbols:policy-outline-rounded"></iconify-icon> <span class="tooltip" id="left">Policy</span>',S(t,"class","info flex svelte-16bm4r0"),S(t,"id","credits"),S(i,"href","https://ko-fi.com/xt8ss"),S(i,"target","_blank"),S(i,"class","info bg-change svelte-16bm4r0"),S(i,"id","donate"),S(o,"class","info flex pos-rel bs svelte-16bm4r0"),S(o,"id","account"),S(u,"href","https://xt8ss.github.io/fantastic-hub/"),S(u,"target","_blank"),S(u,"class","info svelte-16bm4r0"),S(u,"id","hub"),ge(h,"icon","octicon:log-16"),S(p,"class","tooltip"),S(p,"id","right"),S(d,"class","info svelte-16bm4r0"),S(d,"id","changelog"),S(m,"class","info"),S(m,"id","version"),S(E,"class","info"),S(E,"id","policy")},m(F,A){B(F,e,A),w(e,t),w(e,r),w(e,i),w(e,s),w(e,o),w(o,l),w(e,c),w(e,u),w(e,f),w(e,d),w(d,h),w(d,_),w(d,p),w(d,x),C&&C.m(d,null),w(e,v),w(e,m),w(m,g),w(e,y),w(e,E),b||(I=[le(t,"click",n[5]),le(o,"click",n[6]),le(d,"click",n[7]),le(E,"click",n[8])],b=!0)},p(F,[A]){A&8&&a!==(a=F[3]?"Account":"Log In")&&de(l,a),F[4]?C&&(Re(),ee(C,1,1,()=>{C=null}),Fe()):C?A&16&&Y(C,1):(C=l0(),C.c(),Y(C,1),C.m(d,null)),A&1&&de(g,F[0])},i(F){Y(C)},o(F){ee(C)},d(F){F&&R(e),C&&C.d(),b=!1,Te(I)}}}function qy(n,e,t){let r,i,s;xe(n,De,d=>t(2,r=d)),xe(n,No,d=>t(3,i=d)),xe(n,qr,d=>t(4,s=d));let{version:o,verifyAndSync:a}=e;const l=d=>{et(d),pe(De,r.component=py,r)},c=d=>{et(d),pe(De,r.props={verifyAndSync:a},r),pe(De,r.component=i?Wy:Id,r)},u=d=>{et(d),pe(De,r.component=Cy,r),pe(qr,s=!0,s)},f=d=>{et(d),pe(De,r.component=wy,r)};return n.$$set=d=>{"version"in d&&t(0,o=d.version),"verifyAndSync"in d&&t(1,a=d.verifyAndSync)},[o,a,r,i,s,l,c,u,f]}class Vy extends ze{constructor(e){super(),We(this,e,qy,zy,Se,{version:0,verifyAndSync:1})}}function jy(n,{from:e,to:t},r={}){const i=getComputedStyle(n),s=i.transform==="none"?"":i.transform,[o,a]=i.transformOrigin.split(" ").map(parseFloat),l=e.left+e.width*o/t.width-(t.left+o),c=e.top+e.height*a/t.height-(t.top+a),{delay:u=0,duration:f=h=>Math.sqrt(h)*120,easing:d=Ad}=r;return{delay:u,duration:Pn(f)?f(Math.sqrt(l*l+c*c)):f,easing:d,css:(h,_)=>{const p=_*l,x=_*c,v=h+_*e.width/t.width,m=h+_*e.height/t.height;return`transform: ${s} translate(${p}px, ${x}px) scale(${v}, ${m});`}}}function c0(n,e,t){const r=n.slice();return r[2]=e[t],r}function Gy(n){const e=n.slice(),t=`<span class="font-ms smaller-fs">${kd.exec(e[2].text)}</span>`;return e[5]=t,e}function $y(n){let e=n[2].text+"",t;return{c(){t=K(e)},m(r,i){B(r,t,i)},p(r,i){i&1&&e!==(e=r[2].text+"")&&de(t,e)},d(r){r&&R(t)}}}function u0(n){let e,t=n[2].text.replace(d0,n[5])+"",r;return{c(){e=new Vi(!1),r=Ct(),e.a=r},m(i,s){e.m(t,i,s),B(i,r,s)},p(i,s){s&1&&t!==(t=i[2].text.replace(d0,i[5])+"")&&e.p(t)},d(i){i&&(R(r),e.d())}}}function f0(n,e){let t,r,i,s,o,a,l,c,u,f=oe,d;function h(v,m){return m&1&&(o=null),o==null&&(o=!!kd.test(v[2].text)),o?u0:$y}function _(v,m){return m===u0?Gy(v):v}let p=h(e,-1),x=p(_(e,p));return{key:n,first:null,c(){t=T("div"),r=T("iconify-icon"),s=z(),x.c(),a=z(),ge(r,"icon",i=e[2].icon),S(t,"class","toast flex fai-center cg-1 br-1 bs ta-center"),this.first=t},m(v,m){B(v,t,m),w(t,r),w(t,s),x.m(t,null),w(t,a),d=!0},p(v,m){e=v,(!d||m&1&&i!==(i=e[2].icon))&&ge(r,"icon",i),p===(p=h(e,m))&&x?x.p(_(e,p),m):(x.d(1),x=p(_(e,p)),x&&(x.c(),x.m(t,a)))},r(){u=t.getBoundingClientRect()},f(){sh(t),f(),tu(t,u)},a(){f(),f=ih(t,u,jy,{duration:250})},i(v){d||(v&&rt(()=>{d&&(c&&c.end(1),l=fh(t,Wi,{}),l.start())}),d=!0)},o(v){l&&l.invalidate(),v&&(c=dh(t,e[1],{})),d=!1},d(v){v&&R(t),x.d(),v&&c&&c.end()}}}function Ky(n){let e,t=[],r=new Map,i,s=be(n[0]);const o=a=>a[2];for(let a=0;a<s.length;a+=1){let l=c0(n,s,a),c=o(l);r.set(c,t[a]=f0(c,l))}return{c(){e=T("div");for(let a=0;a<t.length;a+=1)t[a].c();S(e,"class","toasts centered flex fjc-center fai-center fd-col pos-abs")},m(a,l){B(a,e,l);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(e,null);i=!0},p(a,[l]){if(l&1){s=be(a[0]),Re();for(let c=0;c<t.length;c+=1)t[c].r();t=_h(t,l,o,1,a,s,r,e,ph,f0,null,c0);for(let c=0;c<t.length;c+=1)t[c].a();Fe()}},i(a){if(!i){for(let l=0;l<s.length;l+=1)Y(t[l]);i=!0}},o(a){for(let l=0;l<t.length;l+=1)ee(t[l]);i=!1},d(a){a&&R(e);for(let l=0;l<t.length;l+=1)t[l].d()}}}let kd=new RegExp("(?<={).+(?=})"),d0=/{.+} ?/;function Yy(n,e,t){let r;xe(n,Lo,s=>t(0,r=s));function i(s){return r.length?Wi(s):Et(s)}return[r,i]}class Qy extends ze{constructor(e){super(),We(this,e,Yy,Ky,Se,{})}}function Xy(n){let e,t,r,i,s,o,a,l,c,u,f,d,h,_,p,x,v;return{c(){e=T("span"),e.textContent="Support Me",t=z(),r=T("div"),i=T("p"),i.textContent="Thank you for your continuous use of my site!",s=z(),o=T("p"),o.textContent=`If you would like to help improve it, as well as my other projects, you\r
        can do so through my Ko-fi, down below.`,a=z(),l=T("p"),l.textContent=`Hundreds of combined hours go into the making of these - and any\r
        donation, as small as it is, helps me continue creating more cool stuff\r
        for the community. No pressure!`,c=z(),u=T("a"),u.innerHTML=`<img src="${ni}/ko-fi/badge.png" alt="Ko-fi"/>`,f=z(),d=T("div"),h=T("button"),h.textContent="Don't Show Again",_=z(),p=T("button"),p.textContent="Maybe Later",S(e,"class","title"),S(u,"class","flex br-1 bg-change light-hover"),S(u,"href","https://ko-fi.com/xt8ss"),S(u,"target","_blank"),S(h,"class","mainBtn flex fjc-center fai-center border-tp br-1"),S(p,"class","mainBtn flex fjc-center fai-center border-tp br-1"),S(d,"class","optionButtons flex cg-1"),S(r,"class","support contents flex fd-col fai-center smaller-fs")},m(m,g){B(m,e,g),B(m,t,g),B(m,r,g),w(r,i),w(r,s),w(r,o),w(r,a),w(r,l),w(r,c),w(r,u),w(r,f),w(r,d),w(d,h),w(d,_),w(d,p),x||(v=[le(h,"click",n[4]),le(p,"click",n[5])],x=!0)},p:oe,i:oe,o:oe,d(m){m&&(R(e),R(t),R(r)),x=!1,Te(v)}}}function Jy(n,e,t){let r,i;xe(n,en,c=>t(0,r=c)),xe(n,De,c=>t(3,i=c));let s=!1;function o(){t(2,s=!0),pe(De,i.component=null,i)}const a=()=>{o(),pe(en,r.showAgain=!1,r)},l=()=>{o(),pe(en,r.timesDenied++,r)};return n.$$.update=()=>{n.$$.dirty&13&&i.component===null&&!s&&pe(en,r.timesDenied++,r)},[r,o,s,i,a,l]}class Zy extends ze{constructor(e){super(),We(this,e,Jy,Xy,Se,{})}}function eE(n){let e,t;return{c(){e=T("hl"),t=K(n[0])},m(r,i){B(r,e,i),w(e,t)},p(r,[i]){i&1&&de(t,r[0])},i:oe,o:oe,d(r){r&&R(e)}}}function tE(n,e,t){let{startTime:r}=e;const i=ru();let s=Date.now(),o=s+r*1e3,a=r,l=setInterval(()=>{let c=Date.now();t(0,a=r-Math.floor((c-s)/1e3)),c>=o&&(i("end"),clearTimeout(l))},50);return n.$$set=c=>{"startTime"in c&&t(1,r=c.startTime)},[a,r]}class nE extends ze{constructor(e){super(),We(this,e,tE,eE,Se,{startTime:1})}}function h0(n){let e,t;return{c(){e=T("a"),t=K("Couldn't be redirected? Click here"),S(e,"href",Td),S(e,"class","svelte-1gimb7y")},m(r,i){B(r,e,i),w(e,t)},p:oe,d(r){r&&R(e)}}}function rE(n){let e,t,r,i,s,o,a,l,c,u,f,d,h,_,p,x;h=new nE({props:{startTime:10}}),h.$on("end",n[1]);let v=n[0]&&h0();return{c(){e=T("span"),e.textContent="Data Sync Required",t=z(),r=T("hr"),i=z(),s=T("div"),o=T("span"),o.textContent=`It looks like you have data from previous sessions waiting to be synced\r
        to an account.`,a=z(),l=T("span"),l.textContent="You will be redirected to the data synchronization process shortly.",c=z(),u=T("span"),f=T("i"),f.textContent="Attempting redirect in",d=z(),it(h.$$.fragment),_=K("..."),p=z(),v&&v.c(),S(e,"class","title"),S(s,"class","contents flex fd-col rg-1 svelte-1gimb7y")},m(m,g){B(m,e,g),B(m,t,g),B(m,r,g),B(m,i,g),B(m,s,g),w(s,o),w(s,a),w(s,l),w(s,c),w(s,u),w(u,f),w(u,d),Xe(h,u,null),w(u,_),w(s,p),v&&v.m(s,null),x=!0},p(m,[g]){m[0]?v?v.p(m,g):(v=h0(),v.c(),v.m(s,null)):v&&(v.d(1),v=null)},i(m){x||(Y(h.$$.fragment,m),x=!0)},o(m){ee(h.$$.fragment,m),x=!1},d(m){m&&(R(e),R(t),R(r),R(i),R(s)),Je(h),v&&v.d()}}}let Td="https://xt8ss.github.io/fantastic-hub/?dataSync=true";function iE(n,e,t){let r=!1;return[r,()=>{location.href=Td,setTimeout(()=>t(0,r=!0),1e3)}]}class sE extends ze{constructor(e){super(),We(this,e,iE,rE,Se,{})}}function p0(n){let e;return{c(){e=T("span"),e.textContent="Currently...",S(e,"class","title font-rf")},m(t,r){B(t,e,r)},d(t){t&&R(e)}}}function oE(n){let e,t,r,i,s=n[0]?`${Vn.day} DAY`:`${Vn.night} NIGHT`,o,a=`var(--${n[0]?"day-blue":"night-purple"})`,l,c,u,f=(n[1]===1?"<1":n[1])+"",d,h,_=n[1]>1?"s":"",p,x,v,m,g=!n[3]&&p0();return{c(){e=T("div"),g&&g.c(),t=z(),r=T("span"),i=new Vi(!1),o=K("TIME"),l=z(),c=T("i"),u=K("— "),d=K(f),h=K(`\r
        minute`),p=K(_),x=K(" left —"),i.a=o,S(r,"class","timeOfDay flex fjc-center font-rf svelte-1tqwks7"),ye(r,"ff-item",!n[3]),ke(r,"color",a),ye(c,"smaller-fs",n[3]),S(e,"class","currentTime ff-bg flex fd-col border-tp br-1 bs ta-center svelte-1tqwks7"),ye(e,"popup",n[3]),ye(e,"active",n[4]),ye(e,"rg-1",!n[3])},m(y,E){B(y,e,E),g&&g.m(e,null),w(e,t),w(e,r),i.m(s,r),w(r,o),w(e,l),w(e,c),w(c,u),w(c,d),w(c,h),w(c,p),w(c,x),v||(m=$d(n[2].call(null,e)),v=!0)},p(y,[E]){y[3]?g&&(g.d(1),g=null):g||(g=p0(),g.c(),g.m(e,t)),E&1&&s!==(s=y[0]?`${Vn.day} DAY`:`${Vn.night} NIGHT`)&&i.p(s),E&8&&ye(r,"ff-item",!y[3]),E&1&&a!==(a=`var(--${y[0]?"day-blue":"night-purple"})`)&&ke(r,"color",a),E&2&&f!==(f=(y[1]===1?"<1":y[1])+"")&&de(d,f),E&2&&_!==(_=y[1]>1?"s":"")&&de(p,_),E&8&&ye(c,"smaller-fs",y[3]),E&8&&ye(e,"popup",y[3]),E&16&&ye(e,"active",y[4]),E&8&&ye(e,"rg-1",!y[3])},i:oe,o:oe,d(y){y&&R(e),g&&g.d(),v=!1,m()}}}function aE(n,e,t){let{isDaytime:r,untilNextTimeOfDay:i,checkIfInViewport:s=l=>{},isPopup:o=!1,popupActive:a=!1}=e;return n.$$set=l=>{"isDaytime"in l&&t(0,r=l.isDaytime),"untilNextTimeOfDay"in l&&t(1,i=l.untilNextTimeOfDay),"checkIfInViewport"in l&&t(2,s=l.checkIfInViewport),"isPopup"in l&&t(3,o=l.isPopup),"popupActive"in l&&t(4,a=l.popupActive)},[r,i,s,o,a]}class Ua extends ze{constructor(e){super(),We(this,e,aE,oE,Se,{isDaytime:0,untilNextTimeOfDay:1,checkIfInViewport:2,isPopup:3,popupActive:4})}}function _0(n,e,t){const r=n.slice();return r[6]=e[t][0],r[7]=e[t][1],r[9]=t,r}function m0(n){let e,t;const r=[n[0],{checkIfInViewport:n[1]}];let i={};for(let s=0;s<r.length;s+=1)i=ln(i,r[s]);return e=new Ua({props:i}),{c(){it(e.$$.fragment)},m(s,o){Xe(e,s,o),t=!0},p(s,o){const a=o&3?cn(r,[o&1&&Dr(s[0]),o&2&&{checkIfInViewport:s[1]}]):{};e.$set(a)},i(s){t||(Y(e.$$.fragment,s),t=!0)},o(s){ee(e.$$.fragment,s),t=!1},d(s){Je(e,s)}}}function g0(n){let e,t,r,i=n[6]+"",s,o,a,l=n[7]+"",c,u,f=n[9]===1&&!n[3]&&m0(n);return{c(){f&&f.c(),e=z(),t=T("div"),r=T("span"),s=K(i),o=z(),a=T("span"),c=K(l),S(r,"class","title font-rf"),S(a,"class","time ff-item svelte-ipkgkz"),S(t,"class","ff-bg flex fd-col rg-1 border-tp br-1 bs ta-center svelte-ipkgkz")},m(d,h){f&&f.m(d,h),B(d,e,h),B(d,t,h),w(t,r),w(r,s),w(t,o),w(t,a),w(a,c),u=!0},p(d,h){d[9]===1&&!d[3]?f?(f.p(d,h),h&8&&Y(f,1)):(f=m0(d),f.c(),Y(f,1),f.m(e.parentNode,e)):f&&(Re(),ee(f,1,1,()=>{f=null}),Fe()),(!u||h&4)&&i!==(i=d[6]+"")&&de(s,i),(!u||h&4)&&l!==(l=d[7]+"")&&de(c,l)},i(d){u||(Y(f),u=!0)},o(d){ee(f),u=!1},d(d){d&&(R(e),R(t)),f&&f.d(d)}}}function x0(n){let e,t;const r=[n[0],{checkIfInViewport:n[1]}];let i={};for(let s=0;s<r.length;s+=1)i=ln(i,r[s]);return e=new Ua({props:i}),{c(){it(e.$$.fragment)},m(s,o){Xe(e,s,o),t=!0},p(s,o){const a=o&3?cn(r,[o&1&&Dr(s[0]),o&2&&{checkIfInViewport:s[1]}]):{};e.$set(a)},i(s){t||(Y(e.$$.fragment,s),t=!0)},o(s){ee(e.$$.fragment,s),t=!1},d(s){Je(e,s)}}}function lE(n){let e,t,r,i=be(Object.entries(n[2])),s=[];for(let l=0;l<i.length;l+=1)s[l]=g0(_0(n,i,l));const o=l=>ee(s[l],1,1,()=>{s[l]=null});let a=n[3]&&x0(n);return{c(){e=T("div");for(let l=0;l<s.length;l+=1)s[l].c();t=z(),a&&a.c(),S(e,"class","clocks flex fw fjc-center fai-center svelte-ipkgkz")},m(l,c){B(l,e,c);for(let u=0;u<s.length;u+=1)s[u]&&s[u].m(e,null);w(e,t),a&&a.m(e,null),r=!0},p(l,[c]){if(c&15){i=be(Object.entries(l[2]));let u;for(u=0;u<i.length;u+=1){const f=_0(l,i,u);s[u]?(s[u].p(f,c),Y(s[u],1)):(s[u]=g0(f),s[u].c(),Y(s[u],1),s[u].m(e,t))}for(Re(),u=i.length;u<s.length;u+=1)o(u);Fe()}l[3]?a?(a.p(l,c),c&8&&Y(a,1)):(a=x0(l),a.c(),Y(a,1),a.m(e,null)):a&&(Re(),ee(a,1,1,()=>{a=null}),Fe())},i(l){if(!r){for(let c=0;c<i.length;c+=1)Y(s[c]);Y(a),r=!0}},o(l){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)ee(s[c]);ee(a),r=!1},d(l){l&&R(e),dt(s,l),a&&a.d()}}}let cE=/:\d+(?= |$)/;function uE(n,e,t){let r,i,s,o;xe(n,_i,c=>t(4,i=c)),xe(n,Mo,c=>t(5,s=c)),xe(n,Oo,c=>t(3,o=c));let{ffDayInfo:a,checkIfInViewport:l}=e;return n.$$set=c=>{"ffDayInfo"in c&&t(0,a=c.ffDayInfo),"checkIfInViewport"in c&&t(1,l=c.checkIfInViewport)},n.$$.update=()=>{n.$$.dirty&48&&t(2,r={"Local Time":s.toLocaleTimeString(void 0,{hour12:!i.altHourFormat}),"Frontier Time":new Date(new Date((s.getUTCMinutes()%20*60+s.getUTCSeconds())/(60*20)*(60*60*24)*1e3).toUTCString()).toLocaleTimeString(void 0,{timeZone:"UTC",hour12:!i.altHourFormat}).replace(cE,"")})},[a,l,r,o,i,s]}class fE extends ze{constructor(e){super(),We(this,e,uE,lE,Se,{ffDayInfo:0,checkIfInViewport:1})}}function v0(n){let e,t,r,i,s,o,a,l,c,u,f,d=$e(n[4])?"a":"span",h,_=n[3]&&y0(n),p=($e(n[4])?"a":"span")&&lo(n);function x(g,y){return g[1]?hE:dE}let v=x(n),m=v(n);return{c(){e=T("div"),t=T("a"),r=T("img"),o=z(),a=T("iconify-icon"),l=z(),_&&_.c(),u=z(),f=T("div"),p&&p.c(),h=z(),m.c(),An(r.src,i=n[1]?n[5].image:fc+n[2].image)||S(r,"src",i),S(r,"alt",s=n[1]?n[5].title:n[0]),S(r,"class","br-1 svelte-1jgam8f"),ge(a,"icon","tabler:external-link"),ge(a,"class","hoverIcon flex fai-center fjc-center pos-abs br-1"),S(t,"href",c=n[1]?n[5].link:uc+(n[2].article?n[2].article:n[0])),S(t,"target","_blank"),S(t,"class","participantImage pos-rel svelte-1jgam8f"),S(f,"class","participantInfo flex fd-col svelte-1jgam8f"),S(e,"class","eventParticipant ff-item flex cg-1 rg-1 br-1 svelte-1jgam8f"),ye(e,"customEvent",n[1]),ye(e,"fd-col",n[1])},m(g,y){B(g,e,y),w(e,t),w(t,r),w(t,o),w(t,a),w(t,l),_&&_.m(t,null),w(e,u),w(e,f),p&&p.m(f,null),w(f,h),m.m(f,null)},p(g,y){y&38&&!An(r.src,i=g[1]?g[5].image:fc+g[2].image)&&S(r,"src",i),y&35&&s!==(s=g[1]?g[5].title:g[0])&&S(r,"alt",s),g[3]?_?_.p(g,y):(_=y0(g),_.c(),_.m(t,null)):_&&(_.d(1),_=null),y&39&&c!==(c=g[1]?g[5].link:uc+(g[2].article?g[2].article:g[0]))&&S(t,"href",c),$e(g[4]),d?Se(d,$e(g[4])?"a":"span")?(p.d(1),p=lo(g),d=$e(g[4])?"a":"span",p.c(),p.m(f,h)):p.p(g,y):(p=lo(g),d=$e(g[4])?"a":"span",p.c(),p.m(f,h)),v===(v=x(g))&&m?m.p(g,y):(m.d(1),m=v(g),m&&(m.c(),m.m(f,null))),y&2&&ye(e,"customEvent",g[1]),y&2&&ye(e,"fd-col",g[1])},d(g){g&&R(e),_&&_.d(),p&&p.d(g),m.d()}}}function y0(n){let e,t;return{c(){e=T("span"),t=K(n[0]),S(e,"class","tooltip"),S(e,"id","top")},m(r,i){B(r,e,i),w(e,t)},p(r,i){i&1&&de(t,r[0])},d(r){r&&R(e)}}}function lo(n){let e,t=(n[1]?n[5].title:n[3]?n[2].shop:n[0])+"",r;return{c(){e=T($e(n[4])?"a":"span"),r=K(t),Z0($e(n[4])?"a":"span")(e,{href:"#notes",class:"ff-item title font-rf svelte-1jgam8f",id:"title"}),ke(e,"color","var(--light)")},m(i,s){B(i,e,s),w(e,r)},p(i,s){s&47&&t!==(t=(i[1]?i[5].title:i[3]?i[2].shop:i[0])+"")&&de(r,t)},d(i){i&&R(e)}}}function dE(n){let e,t,r=(n[3]?"Shop":n[2].role)+"",i,s,o,a=$e(n[2].realm)?"a":"i",l,c=($e(n[2].realm)?"a":"i")&&co(n);return{c(){e=T("i"),t=K("— "),i=K(r),s=K(" —"),o=z(),c&&c.c(),l=Ct(),S(e,"class","svelte-1jgam8f")},m(u,f){B(u,e,f),w(e,t),w(e,i),w(e,s),B(u,o,f),c&&c.m(u,f),B(u,l,f)},p(u,f){f&12&&r!==(r=(u[3]?"Shop":u[2].role)+"")&&de(i,r),$e(u[2].realm),a?Se(a,$e(u[2].realm)?"a":"i")?(c.d(1),c=co(u),a=$e(u[2].realm)?"a":"i",c.c(),c.m(l.parentNode,l)):c.p(u,f):(c=co(u),a=$e(u[2].realm)?"a":"i",c.c(),c.m(l.parentNode,l))},d(u){u&&(R(e),R(o),R(l)),c&&c.d(u)}}}function hE(n){let e,t=n[5].text+"",r,i,s,o,a=n[5].flavor+"",l,c;return{c(){e=T("i"),r=K(t),i=z(),s=T("span"),o=K("— "),l=K(a),c=K(" —"),S(e,"class","smaller-fs svelte-1jgam8f"),ke(e,"padding","1.5rem"),S(s,"class","svelte-1jgam8f"),ke(s,"color","var(--dark)")},m(u,f){B(u,e,f),w(e,r),B(u,i,f),B(u,s,f),w(s,o),w(s,l),w(s,c)},p(u,f){f&32&&t!==(t=u[5].text+"")&&de(r,t),f&32&&a!==(a=u[5].flavor+"")&&de(l,a)},d(u){u&&(R(e),R(i),R(s))}}}function co(n){let e,t=n[2].realm+"",r;return{c(){e=T($e(n[2].realm)?"a":"i"),r=K(t),Z0($e(n[2].realm)?"a":"i")(e,{href:"#notes",class:"title svelte-1jgam8f",id:"realm"})},m(i,s){B(i,e,s),w(e,r)},p(i,s){s&4&&t!==(t=i[2].realm+"")&&de(r,t)},d(i){i&&R(e)}}}function pE(n){let e=xt(n[2]),t,r=e&&v0(n);return{c(){r&&r.c(),t=Ct()},m(i,s){r&&r.m(i,s),B(i,t,s)},p(i,[s]){s&4&&(e=xt(i[2])),e?r?r.p(i,s):(r=v0(i),r.c(),r.m(t.parentNode,t)):r&&(r.d(1),r=null)},i:oe,o:oe,d(i){i&&R(t),r&&r.d(i)}}}function $e(n){return n.endsWith("*")}function _E(n,e,t){let r,i,s,o,{eventType:a,participant:l="Green Golem",isCustomEvent:c=!1}=e,u={"???":{title:"Fantastic Frontier Forever",text:`"I have traveled for many days... The sky was higher than I thought. I've seen creatures both great and small, and a world unlike any I have seen before. Although there is still much ahead of me, I feel as though my journey's end is drawing near. Almost there... Almost there..."`,flavor:"Almost there.",image:"https://pbs.twimg.com/media/E1NKMC4XEAQ81SH?format=jpg&name=large",link:"https://www.roblox.com/games/510411669/Fantastic-Frontier"}};return n.$$set=f=>{"eventType"in f&&t(6,a=f.eventType),"participant"in f&&t(0,l=f.participant),"isCustomEvent"in f&&t(1,c=f.isCustomEvent)},n.$$.update=()=>{n.$$.dirty&66&&t(5,r=c?u[a]:null),n.$$.dirty&1&&t(2,i=Bv[l]),n.$$.dirty&64&&t(3,s=a==="Shop Restocks"),n.$$.dirty&13&&t(4,o=s?i.shop:l)},[l,c,i,s,o,r,a]}class Sd extends ze{constructor(e){super(),We(this,e,_E,pE,Se,{eventType:6,participant:0,isCustomEvent:1})}}function E0(n,e,t){const r=n.slice();return r[8]=e[t][0],r[9]=e[t][1],r}function C0(n,e,t){const r=n.slice();r[12]=e[t][0],r[13]=e[t][1];const i=xt(r[13])>1;r[14]=i;const s=r[12]==="???";return r[15]=s,r}function b0(n,e,t){const r=n.slice();return r[18]=e[t][0],r[19]=e[t][1],r}function w0(n,e,t){const r=n.slice();return r[22]=e[t],r}function A0(n){let e,t,r;return{c(){e=T("iconify-icon"),ge(e,"icon","tabler:refresh"),ge(e,"flip","horizontal"),ge(e,"class","refreshAnimation pos-abs svelte-eal0js")},m(i,s){B(i,e,s),r=!0},i(i){r||(i&&rt(()=>{r&&(t||(t=ft(e,Et,{duration:150},!0)),t.run(1))}),r=!0)},o(i){i&&(t||(t=ft(e,Et,{duration:150},!1)),t.run(0)),r=!1},d(i){i&&R(e),i&&t&&t.end()}}}function I0(n){let e,t,r=be(Object.entries(n[13])),i=[];for(let o=0;o<r.length;o+=1)i[o]=D0(b0(n,r,o));const s=o=>ee(i[o],1,1,()=>{i[o]=null});return{c(){e=T("div");for(let o=0;o<i.length;o+=1)i[o].c();S(e,"class","flex fd-col")},m(o,a){B(o,e,a);for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(e,null);t=!0},p(o,a){if(a&14){r=be(Object.entries(o[13]));let l;for(l=0;l<r.length;l+=1){const c=b0(o,r,l);i[l]?(i[l].p(c,a),Y(i[l],1)):(i[l]=D0(c),i[l].c(),Y(i[l],1),i[l].m(e,null))}for(Re(),l=r.length;l<i.length;l+=1)s(l);Fe()}},i(o){if(!t){for(let a=0;a<r.length;a+=1)Y(i[a]);t=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)ee(i[a]);t=!1},d(o){o&&R(e),dt(i,o)}}}function mE(n){let e,t,r=`${Vn[n[18]]} ${n[18].toUpperCase()}TIME`,i,s,o,a=`var(--${n[18]==="day"?"day-blue":"night-purple"})`,l,c;function u(...f){return n[7](n[12],n[18],...f)}return{c(){e=T("button"),t=new Vi(!1),i=z(),s=T("iconify-icon"),t.a=i,ge(s,"icon",o="ep:arrow-"+(n[1][n[12]][n[18]]?"down":"left")+"-bold"),ge(s,"class","collapseIcon pos-abs svelte-eal0js"),S(e,"class","flex fjc-center fai-center pos-rel font-rf light-hover svelte-eal0js"),ke(e,"color",a)},m(f,d){B(f,e,d),t.m(r,e),w(e,i),w(e,s),l||(c=le(e,"click",u),l=!0)},p(f,d){n=f,d&2&&o!==(o="ep:arrow-"+(n[1][n[12]][n[18]]?"down":"left")+"-bold")&&ge(s,"icon",o)},d(f){f&&R(e),l=!1,c()}}}function k0(n){let e,t,r,i,s;const o=[xE,gE],a=[];function l(u,f){return u[15]?0:1}t=l(n),r=a[t]=o[t](n);let c=n[2][n[18]]&&S0();return{c(){e=T("div"),r.c(),i=z(),c&&c.c(),S(e,"class","eventParticipantsGrid flex fw fjc-center pos-rel svelte-eal0js")},m(u,f){B(u,e,f),a[t].m(e,null),w(e,i),c&&c.m(e,null),s=!0},p(u,f){r.p(u,f),u[2][u[18]]?c?f&4&&Y(c,1):(c=S0(),c.c(),Y(c,1),c.m(e,null)):c&&(Re(),ee(c,1,1,()=>{c=null}),Fe())},i(u){s||(Y(r),Y(c),s=!0)},o(u){ee(r),ee(c),s=!1},d(u){u&&R(e),a[t].d(),c&&c.d()}}}function gE(n){let e,t,r=be(n[19]),i=[];for(let o=0;o<r.length;o+=1)i[o]=T0(w0(n,r,o));const s=o=>ee(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=Ct()},m(o,a){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(o,a);B(o,e,a),t=!0},p(o,a){if(a&8){r=be(o[19]);let l;for(l=0;l<r.length;l+=1){const c=w0(o,r,l);i[l]?(i[l].p(c,a),Y(i[l],1)):(i[l]=T0(c),i[l].c(),Y(i[l],1),i[l].m(e.parentNode,e))}for(Re(),l=r.length;l<i.length;l+=1)s(l);Fe()}},i(o){if(!t){for(let a=0;a<r.length;a+=1)Y(i[a]);t=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)ee(i[a]);t=!1},d(o){o&&R(e),dt(i,o)}}}function xE(n){let e,t;return e=new Sd({props:{eventType:n[12],isCustomEvent:!0}}),{c(){it(e.$$.fragment)},m(r,i){Xe(e,r,i),t=!0},p:oe,i(r){t||(Y(e.$$.fragment,r),t=!0)},o(r){ee(e.$$.fragment,r),t=!1},d(r){Je(e,r)}}}function T0(n){let e,t;return e=new Sd({props:{eventType:n[12],participant:n[22]}}),{c(){it(e.$$.fragment)},m(r,i){Xe(e,r,i),t=!0},p:oe,i(r){t||(Y(e.$$.fragment,r),t=!0)},o(r){ee(e.$$.fragment,r),t=!1},d(r){Je(e,r)}}}function S0(n){let e,t,r;return{c(){e=T("div"),e.innerHTML='<iconify-icon icon="tabler:refresh" flip="horizontal" class="refreshAnimation svelte-eal0js"></iconify-icon>',S(e,"class","refreshAlert flex fjc-center fai-center pos-abs svelte-eal0js")},m(i,s){B(i,e,s),r=!0},i(i){r||(i&&rt(()=>{r&&(t||(t=ft(e,Et,{duration:150},!0)),t.run(1))}),r=!0)},o(i){i&&(t||(t=ft(e,Et,{duration:150},!1)),t.run(0)),r=!1},d(i){i&&R(e),i&&t&&t.end()}}}function D0(n){let e,t,r,i,s=n[14]&&mE(n),o=n[1][n[12]][n[18]]!==!1&&k0(n);return{c(){e=T("div"),s&&s.c(),t=z(),o&&o.c(),r=z(),S(e,"class","eventTypeTime flex fd-col svelte-eal0js")},m(a,l){B(a,e,l),s&&s.m(e,null),w(e,t),o&&o.m(e,null),w(e,r),i=!0},p(a,l){a[14]&&s.p(a,l),a[1][a[12]][a[18]]!==!1?o?(o.p(a,l),l&2&&Y(o,1)):(o=k0(a),o.c(),Y(o,1),o.m(e,r)):o&&(Re(),ee(o,1,1,()=>{o=null}),Fe())},i(a){i||(Y(o),i=!0)},o(a){ee(o),i=!1},d(a){a&&R(e),s&&s.d(),o&&o.d()}}}function R0(n){let e,t,r=!n[0][n[12]]&&Object.keys(n[13]).includes(Object.keys(n[2]).filter(n[5])[0]),i,s,o=(!n[14]&&!n[15]?Vn[Object.keys(n[13])[0]]:"")+"",a,l=n[12]+"",c,u,f,d,h,_,p,x,v,m=r&&A0();function g(...E){return n[6](n[12],...E)}let y=n[0][n[12]]&&I0(n);return{c(){e=T("div"),t=T("button"),m&&m.c(),i=z(),s=new Vi(!1),a=z(),c=K(l),u=z(),f=T("iconify-icon"),h=z(),y&&y.c(),_=z(),s.a=a,ge(f,"icon",d="ep:arrow-"+(n[0][n[12]]?"down":"left")+"-bold"),ge(f,"class","collapseIcon pos-abs svelte-eal0js"),S(t,"class","title flex fjc-center fai-center pos-rel bs font-rf svelte-eal0js"),S(e,"class","eventType border-tp br-1 svelte-eal0js")},m(E,b){B(E,e,b),w(e,t),m&&m.m(t,null),w(t,i),s.m(o,t),w(t,a),w(t,c),w(t,u),w(t,f),w(e,h),y&&y.m(e,null),w(e,_),p=!0,x||(v=le(t,"click",g),x=!0)},p(E,b){n=E,b&5&&(r=!n[0][n[12]]&&Object.keys(n[13]).includes(Object.keys(n[2]).filter(n[5])[0])),r?m?b&5&&Y(m,1):(m=A0(),m.c(),Y(m,1),m.m(t,i)):m&&(Re(),ee(m,1,1,()=>{m=null}),Fe()),(!p||b&1&&d!==(d="ep:arrow-"+(n[0][n[12]]?"down":"left")+"-bold"))&&ge(f,"icon",d),n[0][n[12]]?y?(y.p(n,b),b&1&&Y(y,1)):(y=I0(n),y.c(),Y(y,1),y.m(e,_)):y&&(Re(),ee(y,1,1,()=>{y=null}),Fe())},i(E){p||(Y(m),Y(y),p=!0)},o(E){ee(m),ee(y),p=!1},d(E){E&&R(e),m&&m.d(),y&&y.d(),x=!1,v()}}}function F0(n){let e,t,r,i,s=n[9]+"",o;return{c(){e=T("span"),t=K("* "),r=T("b"),r.textContent=`${n[8]}`,i=K(": "),o=K(s)},m(a,l){B(a,e,l),w(e,t),w(e,r),w(e,i),w(e,o)},p:oe,d(a){a&&R(e)}}}function vE(n){let e,t,r,i,s,o,a,l,c,u=be(Object.entries(n[3])),f=[];for(let p=0;p<u.length;p+=1)f[p]=R0(C0(n,u,p));const d=p=>ee(f[p],1,1,()=>{f[p]=null});let h=be(Object.entries(n[4])),_=[];for(let p=0;p<h.length;p+=1)_[p]=F0(E0(n,h,p));return{c(){e=T("div"),t=T("span"),t.textContent="Events",r=z(),i=T("div");for(let p=0;p<f.length;p+=1)f[p].c();s=z(),o=T("hl"),o.textContent="Notes",a=z(),l=T("div");for(let p=0;p<_.length;p+=1)_[p].c();S(t,"class","title ff-item br-1 font-rf svelte-eal0js"),S(i,"class","flex fd-col rg-3 fjc-center"),S(o,"class","font-rf svelte-eal0js"),S(o,"id","notes"),S(l,"class","notes flex fd-col rg-3 svelte-eal0js"),S(e,"class","events ff-bg flex fd-col rg-3 border-tp br-1 bs ta-center svelte-eal0js")},m(p,x){B(p,e,x),w(e,t),w(e,r),w(e,i);for(let v=0;v<f.length;v+=1)f[v]&&f[v].m(i,null);w(e,s),w(e,o),w(e,a),w(e,l);for(let v=0;v<_.length;v+=1)_[v]&&_[v].m(l,null);c=!0},p(p,[x]){if(x&15){u=be(Object.entries(p[3]));let v;for(v=0;v<u.length;v+=1){const m=C0(p,u,v);f[v]?(f[v].p(m,x),Y(f[v],1)):(f[v]=R0(m),f[v].c(),Y(f[v],1),f[v].m(i,null))}for(Re(),v=u.length;v<f.length;v+=1)d(v);Fe()}if(x&16){h=be(Object.entries(p[4]));let v;for(v=0;v<h.length;v+=1){const m=E0(p,h,v);_[v]?_[v].p(m,x):(_[v]=F0(m),_[v].c(),_[v].m(l,null))}for(;v<_.length;v+=1)_[v].d(1);_.length=h.length}},i(p){if(!c){for(let x=0;x<u.length;x+=1)Y(f[x]);c=!0}},o(p){f=f.filter(Boolean);for(let x=0;x<f.length;x+=1)ee(f[x]);c=!1},d(p){p&&R(e),dt(f,p),dt(_,p)}}}function yE(n,e,t){let r;xe(n,mi,f=>t(2,r=f));let i={"Shop Restocks":{day:["Arbewhy","Awoken Croc Carl","Benny Oreman","Clothing Seller","Construct","Frog","Gnome Wizard Master","Green Golem","Gunner Gary","Knight Antonius","Looney Lenny the Hedgeknight","Luhr","MANAGER SUPREME","No-Legs","Ollie Ozzwald","Otherworldly Weaponsmith","Reus the Smith","Rising Waters","The Great Eyeman"],night:["Linkman the Junkman","Mr. Sims","Stick","Strangeman","Vhitmire"]},"Location Changes":{night:["Construct","Green Golem","Linkman the Junkman","Stick","Strangeman","Vhitmire","Rabbit Hole","Toaster Josh","Gargoyle","Slayer","Greedy Wizard","Kind Wizard"]},"Monster Spawns":{night:["Parasite"]},"???":{placeholder:[]}},s={"Shop Restocks":!0,"Location Changes":!0,"Monster Spawns":!0,"???":!1},o={"Shop Restocks":{day:!0,night:!0},"Location Changes":{},"Monster Spawns":{},"???":{}};return[s,o,r,i,{"Awoken Croc Carl's Delicacies":"Carl's stock itself doesn't change; only his prices.","Greedy Wizard & Kind Wizard":"The wizards only have 2 locations each, as they always swap with each other's locations.","Green Golem":"Green Golem has 3 possible locations based in the Frontier, in Topple Hill's market.",Slayer:"Slayer only has 2 locations; either inside or outside his designated building in Topple Town's shopping district.",Parasite:"Parasite spawns inside the Rabbit Hole area."},f=>r[f],(f,d)=>{et(d),t(0,s[f]=!s[f],s)},(f,d,h)=>{et(h),t(1,o[f][d]=!o[f][d],o)}]}class EE extends ze{constructor(e){super(),We(this,e,yE,vE,Se,{})}}const{document:xn,window:En}=Kd;function B0(n,e,t){const r=n.slice();return r[63]=e[t],r}function P0(n,e,t){const r=n.slice();return r[66]=e[t],r}function N0(n,e,t){const r=n.slice();return r[63]=e[t],r[69]=e,r[70]=t,r}function O0(n,e,t){const r=n.slice();return r[66]=e[t],r}function L0(n){let e;return{c(){e=T("link"),S(e,"rel","preload"),S(e,"as","image"),S(e,"href",n[66])},m(t,r){B(t,e,r)},p:oe,d(t){t&&R(e)}}}function M0(n){let e;return{c(){e=T("style"),e.textContent=`body > :not(.promptCont) {
                pointer-events: none;
            }
        `},m(t,r){B(t,e,r)},d(t){t&&R(e)}}}function U0(n){let e;return{c(){e=T("style"),e.innerHTML=""},m(t,r){B(t,e,r)},d(t){t&&R(e)}}}function H0(n){let e,t,r,i=n[63];const s=()=>n[33](e,i),o=()=>n[33](null,i);return{c(){e=T("audio"),An(e.src,t="audios/"+n[63]+".mp3")||S(e,"src",t),e.muted=r=n[16].muted},m(a,l){B(a,e,l),s()},p(a,l){n=a,l[0]&65536&&r!==(r=n[16].muted)&&(e.muted=r),i!==n[63]&&(o(),i=n[63],s())},d(a){a&&R(e),o()}}}function W0(n){let e,t;return{c(){e=T("img"),An(e.src,t=n[66])||S(e,"src",t),S(e,"alt",""),S(e,"class","background"),ye(e,"active",n[21].indexOf(n[66])==n[10])},m(r,i){B(r,e,i)},p(r,i){i[0]&2098176&&ye(e,"active",r[21].indexOf(r[66])==r[10])},d(r){r&&R(e)}}}function z0(n){let e,t,r=Math.floor(n[18][n[2]]*100)+"",i,s,o,a;return{c(){e=T("span"),t=K("Zoom: "),i=K(r),s=T("b"),s.textContent="%",S(e,"class","info"),S(e,"id","zoomLevel")},m(l,c){B(l,e,c),w(e,t),w(e,i),w(e,s),a=!0},p(l,c){(!a||c[0]&4)&&r!==(r=Math.floor(l[18][l[2]]*100)+"")&&de(i,r)},i(l){a||(l&&rt(()=>{a&&(o||(o=ft(e,Et,{duration:150},!0)),o.run(1))}),a=!0)},o(l){l&&(o||(o=ft(e,Et,{duration:150},!1)),o.run(0)),a=!1},d(l){l&&R(e),l&&o&&o.end()}}}function q0(n){let e,t;return e=new Vy({props:{version:Uo,verifyAndSync:n[17]}}),{c(){it(e.$$.fragment)},m(r,i){Xe(e,r,i),t=!0},p:oe,i(r){t||(Y(e.$$.fragment,r),t=!0)},o(r){ee(e.$$.fragment,r),t=!1},d(r){Je(e,r)}}}function V0(n){let e,t=be(n[22]),r=[];for(let i=0;i<t.length;i+=1)r[i]=j0(B0(n,t,i));return{c(){e=T("div");for(let i=0;i<r.length;i+=1)r[i].c();S(e,"class","popups")},m(i,s){B(i,e,s);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null)},p(i,s){if(s[0]&4196352){t=be(i[22]);let o;for(o=0;o<t.length;o+=1){const a=B0(i,t,o);r[o]?r[o].p(a,s):(r[o]=j0(a),r[o].c(),r[o].m(e,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=t.length}},d(i){i&&R(e),dt(r,i)}}}function j0(n){let e,t;return{c(){e=T("img"),An(e.src,t="timePopups/"+n[63]+".png")||S(e,"src",t),S(e,"alt",n[63]),S(e,"class","timePopup svelte-4ctur1"),ye(e,"active",n[63]===n[11])},m(r,i){B(r,e,i)},p(r,i){i[0]&4196352&&ye(e,"active",r[63]===r[11])},d(r){r&&R(e)}}}function CE(n){let e,t,r,i,s,o,a,l=n[16].muted?"Muted":"Unmuted",c,u,f,d,h,_,p,x,v,m,g,y,E=(n[16].altHourFormat?24:12)+"",b,I,C,F,A,k,N,D,L,G,W;return k=new fE({props:{ffDayInfo:n[13],checkIfInViewport:n[23]}}),D=new EE({}),{c(){e=T("div"),t=T("div"),r=T("button"),i=T("iconify-icon"),o=z(),a=T("span"),c=K(l),u=z(),f=T("img"),h=z(),_=T("div"),p=T("button"),x=T("iconify-icon"),m=z(),g=T("span"),y=T("nobr"),b=K(E),I=K("-hour"),C=K(" Format"),F=z(),A=T("div"),it(k.$$.fragment),N=z(),it(D.$$.fragment),ge(i,"icon",s="f7:speaker-"+(n[16].muted?"slash":"2")+"-fill"),S(a,"class","tooltip"),S(a,"id","left"),S(r,"class","flex pos-rel no-bg light-hover svelte-4ctur1"),S(t,"class","headerBtnWrapper ff-bg flex pos-rel border-tp br-1 bs svelte-4ctur1"),An(f.src,d="misc/logo.svg")||S(f,"src",d),S(f,"alt","Frontier Clock"),S(f,"id","logo"),S(f,"class","svelte-4ctur1"),ge(x,"icon",v="tabler:clock-"+(n[16].altHourFormat?24:12)),S(g,"class","tooltip"),S(g,"id","right"),S(p,"class","flex pos-rel no-bg light-hover svelte-4ctur1"),S(_,"class","headerBtnWrapper ff-bg flex pos-rel border-tp br-1 bs svelte-4ctur1"),S(e,"class","header flex fai-center svelte-4ctur1"),S(A,"class","generalTimes flex fd-col fai-center svelte-4ctur1")},m($,Q){B($,e,Q),w(e,t),w(t,r),w(r,i),w(r,o),w(r,a),w(a,c),w(e,u),w(e,f),w(e,h),w(e,_),w(_,p),w(p,x),w(p,m),w(p,g),w(g,y),w(y,b),w(y,I),w(g,C),B($,F,Q),B($,A,Q),Xe(k,A,null),B($,N,Q),Xe(D,$,Q),L=!0,G||(W=[le(r,"click",n[35]),le(p,"click",n[36])],G=!0)},p($,Q){(!L||Q[0]&65536&&s!==(s="f7:speaker-"+($[16].muted?"slash":"2")+"-fill"))&&ge(i,"icon",s),(!L||Q[0]&65536)&&l!==(l=$[16].muted?"Muted":"Unmuted")&&de(c,l),(!L||Q[0]&65536&&v!==(v="tabler:clock-"+($[16].altHourFormat?24:12)))&&ge(x,"icon",v),(!L||Q[0]&65536)&&E!==(E=($[16].altHourFormat?24:12)+"")&&de(b,E);const J={};Q[0]&8192&&(J.ffDayInfo=$[13]),k.$set(J)},i($){L||(Y(k.$$.fragment,$),Y(D.$$.fragment,$),L=!0)},o($){ee(k.$$.fragment,$),ee(D.$$.fragment,$),L=!1},d($){$&&(R(e),R(F),R(A),R(N)),Je(k),Je(D,$),G=!1,Te(W)}}}function bE(n){let e;return{c(){e=T("div"),e.textContent=`Looks like you've already got Frontier Clock opened in another tab!
            Please close this tab and return to the original.`,S(e,"class","pageWarning ff-bg bg-sand border-tp br-1 bs ta-center")},m(t,r){B(t,e,r)},p:oe,i:oe,o:oe,d(t){t&&R(e)}}}function G0(n){let e,t;return e=new Ua({props:{isDaytime:n[3],untilNextTimeOfDay:n[4],isPopup:!0,popupActive:!n[12]}}),{c(){it(e.$$.fragment)},m(r,i){Xe(e,r,i),t=!0},p(r,i){const s={};i[0]&8&&(s.isDaytime=r[3]),i[0]&16&&(s.untilNextTimeOfDay=r[4]),i[0]&4096&&(s.popupActive=!r[12]),e.$set(s)},i(r){t||(Y(e.$$.fragment,r),t=!0)},o(r){ee(e.$$.fragment,r),t=!1},d(r){Je(e,r)}}}function $0(n){let e,t,r,i,s,o,a,l,c;const u=[n[5].props];var f=n[5].component;function d(h,_){let p={};for(let x=0;x<u.length;x+=1)p=ln(p,u[x]);return _!==void 0&&_[0]&32&&(p=ln(p,cn(u,[Dr(h[5].props)]))),{props:p}}return f&&(r=Qa(f,d(n))),{c(){e=T("div"),t=T("div"),r&&it(r.$$.fragment),S(t,"class",i=n[5].hasWrapper?"":"flex fd-col border-tp br-1 bs"),ye(t,"ignoreWrapper",n[5].hasWrapper),ye(t,"portrait",n[15]),S(e,"class","promptCont")},m(h,_){B(h,e,_),w(e,t),r&&Xe(r,t,null),n[38](e),a=!0,l||(c=[le(t,"introstart",n[37]),le(e,"click",n[39])],l=!0)},p(h,_){if(_[0]&32&&f!==(f=h[5].component)){if(r){Re();const p=r;ee(p.$$.fragment,1,0,()=>{Je(p,1)}),Fe()}f?(r=Qa(f,d(h,_)),it(r.$$.fragment),Y(r.$$.fragment,1),Xe(r,t,null)):r=null}else if(f){const p=_[0]&32?cn(u,[Dr(h[5].props)]):{};r.$set(p)}(!a||_[0]&32&&i!==(i=h[5].hasWrapper?"":"flex fd-col border-tp br-1 bs"))&&S(t,"class",i),(!a||_[0]&32)&&ye(t,"ignoreWrapper",h[5].hasWrapper),(!a||_[0]&32800)&&ye(t,"portrait",h[15])},i(h){a||(r&&Y(r.$$.fragment,h),h&&rt(()=>{a&&(s||(s=ft(t,Wi,{duration:200},!0)),s.run(1))}),h&&rt(()=>{a&&(o||(o=ft(e,Et,{duration:100},!0)),o.run(1))}),a=!0)},o(h){r&&ee(r.$$.fragment,h),h&&(s||(s=ft(t,Wi,{duration:200},!1)),s.run(0)),h&&(o||(o=ft(e,Et,{duration:100},!1)),o.run(0)),a=!1},d(h){h&&R(e),r&&Je(r),h&&s&&s.end(),n[38](null),h&&o&&o.end(),l=!1,Te(c)}}}function wE(n){let e,t,r,i,s,o,a,l,c,u,f,d,h,_,p,x,v,m,g,y,E,b,I,C,F,A;rt(n[31]);let k=be(n[21]),N=[];for(let M=0;M<k.length;M+=1)N[M]=L0(O0(n,k,M));let D=(n[5].component||n[8])&&M0(),L=n[15]&&U0(),G=be(n[22]),W=[];for(let M=0;M<G.length;M+=1)W[M]=H0(N0(n,G,M));let $=be(n[21]),Q=[];for(let M=0;M<$.length;M+=1)Q[M]=W0(P0(n,$,M));let J=n[9]&&z0(n),X=!n[6]&&q0(n),P=!n[6]&&V0(n);const H=[bE,CE],O=[];function U(M,j){return M[6]?0:1}v=U(n),m=O[v]=H[v](n);let ne=!n[6]&&G0(n);E=new Qy({});let Z=n[5].component&&$0(n);return{c(){e=z();for(let M=0;M<N.length;M+=1)N[M].c();t=Ct(),D&&D.c(),r=Ct(),L&&L.c(),i=Ct(),s=z(),o=T("div");for(let M=0;M<W.length;M+=1)W[M].c();a=z(),l=T("audio"),u=z(),f=T("div");for(let M=0;M<Q.length;M+=1)Q[M].c();d=z(),J&&J.c(),h=z(),X&&X.c(),_=z(),P&&P.c(),p=z(),x=T("main"),m.c(),g=z(),ne&&ne.c(),y=z(),it(E.$$.fragment),b=z(),Z&&Z.c(),I=Ct(),An(l.src,c=ni+"/audios/select.mp3")||S(l,"src",c),S(x,"class","flex fd-col fai-center svelte-4ctur1"),ye(x,"portrait",n[15]),ke(x,"height",n[6]?"100vh":"")},m(M,j){B(M,e,j);for(let me=0;me<N.length;me+=1)N[me]&&N[me].m(xn.head,null);w(xn.head,t),D&&D.m(xn.head,null),w(xn.head,r),L&&L.m(xn.head,null),w(xn.head,i),B(M,s,j),B(M,o,j);for(let me=0;me<W.length;me+=1)W[me]&&W[me].m(o,null);w(o,a),w(o,l),n[34](l),B(M,u,j),B(M,f,j);for(let me=0;me<Q.length;me+=1)Q[me]&&Q[me].m(f,null);B(M,d,j),J&&J.m(M,j),B(M,h,j),X&&X.m(M,j),B(M,_,j),P&&P.m(M,j),B(M,p,j),B(M,x,j),O[v].m(x,null),w(x,g),ne&&ne.m(x,null),B(M,y,j),Xe(E,M,j),B(M,b,j),Z&&Z.m(M,j),B(M,I,j),C=!0,F||(A=[le(En,"storage",n[27]),le(En,"wheel",n[28],{passive:!1}),le(En,"click",n[29]),le(En,"keydown",n[30]),le(En,"resize",n[31]),le(xn,"visibilitychange",n[32])],F=!0)},p(M,j){if(j[0]&2097152){k=be(M[21]);let te;for(te=0;te<k.length;te+=1){const He=O0(M,k,te);N[te]?N[te].p(He,j):(N[te]=L0(He),N[te].c(),N[te].m(t.parentNode,t))}for(;te<N.length;te+=1)N[te].d(1);N.length=k.length}if(M[5].component||M[8]?D||(D=M0(),D.c(),D.m(r.parentNode,r)):D&&(D.d(1),D=null),M[15]?L||(L=U0(),L.c(),L.m(i.parentNode,i)):L&&(L.d(1),L=null),j[0]&4276224){G=be(M[22]);let te;for(te=0;te<G.length;te+=1){const He=N0(M,G,te);W[te]?W[te].p(He,j):(W[te]=H0(He),W[te].c(),W[te].m(o,a))}for(;te<W.length;te+=1)W[te].d(1);W.length=G.length}if(j[0]&2098176){$=be(M[21]);let te;for(te=0;te<$.length;te+=1){const He=P0(M,$,te);Q[te]?Q[te].p(He,j):(Q[te]=W0(He),Q[te].c(),Q[te].m(f,null))}for(;te<Q.length;te+=1)Q[te].d(1);Q.length=$.length}M[9]?J?(J.p(M,j),j[0]&512&&Y(J,1)):(J=z0(M),J.c(),Y(J,1),J.m(h.parentNode,h)):J&&(Re(),ee(J,1,1,()=>{J=null}),Fe()),M[6]?X&&(Re(),ee(X,1,1,()=>{X=null}),Fe()):X?(X.p(M,j),j[0]&64&&Y(X,1)):(X=q0(M),X.c(),Y(X,1),X.m(_.parentNode,_)),M[6]?P&&(P.d(1),P=null):P?P.p(M,j):(P=V0(M),P.c(),P.m(p.parentNode,p));let me=v;v=U(M),v===me?O[v].p(M,j):(Re(),ee(O[me],1,1,()=>{O[me]=null}),Fe(),m=O[v],m?m.p(M,j):(m=O[v]=H[v](M),m.c()),Y(m,1),m.m(x,g)),M[6]?ne&&(Re(),ee(ne,1,1,()=>{ne=null}),Fe()):ne?(ne.p(M,j),j[0]&64&&Y(ne,1)):(ne=G0(M),ne.c(),Y(ne,1),ne.m(x,null)),(!C||j[0]&32768)&&ye(x,"portrait",M[15]),j[0]&64&&ke(x,"height",M[6]?"100vh":""),M[5].component?Z?(Z.p(M,j),j[0]&32&&Y(Z,1)):(Z=$0(M),Z.c(),Y(Z,1),Z.m(I.parentNode,I)):Z&&(Re(),ee(Z,1,1,()=>{Z=null}),Fe())},i(M){C||(Y(J),Y(X),Y(m),Y(ne),Y(E.$$.fragment,M),Y(Z),C=!0)},o(M){ee(J),ee(X),ee(m),ee(ne),ee(E.$$.fragment,M),ee(Z),C=!1},d(M){M&&(R(e),R(s),R(o),R(u),R(f),R(d),R(h),R(_),R(p),R(x),R(y),R(b),R(I)),dt(N,M),R(t),D&&D.d(M),R(r),L&&L.d(M),R(i),dt(W,M),n[34](null),dt(Q,M),J&&J.d(M),X&&X.d(M),P&&P.d(M),O[v].d(),ne&&ne.d(),Je(E,M),Z&&Z.d(M),F=!1,Te(A)}}}let Uo="v1.0.1";function AE(n,e,t){let r,i,s,o,a,l,c,u,f,d,h,_,p,x,v,m,g;xe(n,Mo,q=>t(26,l=q)),xe(n,De,q=>t(5,c=q)),xe(n,mi,q=>t(47,u=q)),xe(n,ai,q=>t(14,f=q)),xe(n,Oo,q=>t(15,d=q)),xe(n,qr,q=>t(48,h=q)),xe(n,pi,q=>t(49,_=q)),xe(n,zr,q=>t(50,p=q)),xe(n,No,q=>t(51,x=q)),xe(n,Po,q=>t(52,v=q)),xe(n,en,q=>t(53,m=q)),xe(n,_i,q=>t(16,g=q));let y=!1,E=!0,b=Vd();function I(){if(b)return setTimeout(()=>{pe(De,c.preventClosing=!0,c),pe(De,c.component=sE,c)},200),!0}{const q=new BroadcastChannel("tab");q.postMessage("fcl-anotherTab"),q.addEventListener("message",Ie=>{Ie.data==="fcl-anotherTab"&&E&&q.postMessage("fcl-alreadyOpen"),Ie.data==="fcl-alreadyOpen"&&(E=!1,t(6,y=!0),dy())})}let C=CSS.supports("height: 100lvh"),F,A,k,N=!1;oh(()=>{if(y)return;let q=setInterval(()=>pe(Mo,l=new Date,l),100);if(!b&&(pe(en,m.totalVisits++,m),m.showAgain)){let Ie=Math.floor((m.totalVisits-m.lastVisits)/3);Ie&&Ie>=m.timesDenied&&(pe(en,m.lastVisits=m.totalVisits,m),pe(De,c.component=Zy,c))}return rm(ut,async()=>{b&&jn(),pe(Po,v=ut.currentUser,v),pe(No,x=!!xt(v),x),pe(zr,p=x?v.displayName||p:"",p),x&&(y||(wd("logIn",`Succesfully logged in as {${p}}`),!_&&I()))}),localStorage.getItem("fcl-version")!=Uo&&(pe(qr,h=!1,h),localStorage.setItem("fcl-version",Uo)),()=>clearInterval(q)});let D=[.45,.6,.75,.85,.95,1,1.1,1.25,1.5],L=D.indexOf(1),G=!1,W;function $(){W=setTimeout(()=>{t(9,G=!1)},750)}function Q(){clearTimeout(W),t(9,G=!0),$()}function J(){pe(Oo,d=F>A,d),document.documentElement.style.fontSize=`${(d?A/F/1.2:.75)*D[L]}${C?"l":""}vh`}let X=[],P=[],H,O,U=11;for(let q=0;q<U;q++)X.push(`${ni}/backgrounds/BG${q}.jpg`);function ne(q){O=Math.floor(Math.random()*q.length)}ne(X);function Z(){t(10,H=O),P.push(O)}Z(),function q(){setTimeout(()=>{if(ne(X),!P.length)Z();else if(P.length>3&&(P=P.slice(1)),!P.includes(O))Z();else{let Ie=[...Array(U).keys()].filter(ct=>!P.includes(ct));ne(Ie),Z()}document.visibilityState=="visible"&&q()},45e3)}();let M=["day","night","nightWarning"],j=!1,me="";function te(q){t(11,me=q),f[q].play(),setTimeout(()=>{t(11,me="")},2500)}function He(q){j?(te(q),pe(mi,u[q]=!0,u),setTimeout(()=>{pe(mi,u[q]=!1,u)},4e3)):j=!0}let _t=!0;function Ke(q){new IntersectionObserver(ct=>{ct[0].isIntersecting?t(12,_t=!0):t(12,_t=!1)}).observe(q)}let Ne=!1;function Vt(){if(!Ne){Ne=!0;return}t(8,N=!0),setTimeout(()=>t(8,N=!1),150)}const Rt=q=>{/^f[a-z]{1,2}-/.test(q.key)&&localStorage.setItem(q.key,q.oldValue)},jt=q=>{let Ie=q.deltaY;if(q.ctrlKey){if(q.preventDefault(),D[L]==D[0]&&Ie>0||D[L]==D[D.length-1]&&Ie<0)return;Ie<0?t(2,L++,L):t(2,L--,L),Q()}},Ft=q=>{if(q.target instanceof HTMLElement){let Ie=q.target.closest("button");Ie&&!Ie.classList.contains("no-sound")&&(pe(ai,f.select.currentTime=0,f),f.select.play())}},gn=q=>{let Ie=["Enter"," "],ct=["BUTTON","INPUT","A"];q.ctrlKey&&(q.key=="-"||q.key=="+"||q.code=="Equal"||q.key=="0")&&(q.preventDefault(),(q.key=="+"||q.code=="Equal")&&D[L]!=D[D.length-1]?t(2,L++,L):q.key=="-"&&D[L]!=D[0]?t(2,L--,L):q.key=="0"&&D[L]!=1&&t(2,L=D.indexOf(1)),Q()),c.component&&k&&(!q.ctrlKey&&!q.shiftKey&&!q.altKey&&(q.key=="Escape"||Ie.includes(q.key)&&!ct.includes(document.activeElement.tagName))?jn():setTimeout(()=>{q.key=="Tab"&&!k.contains(document.activeElement)&&jn()}))};function Bt(){t(0,F=En.outerHeight),t(1,A=En.outerWidth)}const Ye=()=>{document.visibilityState=="visible"&&setTimeout(()=>{t(0,F=window.outerHeight),t(1,A=window.outerWidth),J()})};function Ve(q,Ie){yr[q?"unshift":"push"](()=>{f[Ie]=q,ai.set(f)})}function lt(q){yr[q?"unshift":"push"](()=>{f.select=q,ai.set(f)})}const Gt=q=>{et(q),pe(_i,g.muted=!g.muted,g)},re=q=>{et(q),pe(_i,g.altHourFormat=!g.altHourFormat,g)},je=()=>{let q=c.focus?k.querySelector(`#${c.focus}`):k.querySelector("a, button, input");q&&q.focus()};function ot(q){yr[q?"unshift":"push"](()=>{k=q,t(7,k)})}const as=q=>{q.composedPath()[0]===k&&jn()};return n.$$.update=()=>{n.$$.dirty[0]&7&&(F||A||L)&&J(),n.$$.dirty[0]&32&&c.component===null&&Vt(),n.$$.dirty[0]&67108864&&t(25,r=l.getUTCMinutes()%20),n.$$.dirty[0]&33554432&&t(3,i=r-15<0),n.$$.dirty[0]&33554440&&t(4,s=(i?15:20)-r),n.$$.dirty[0]&33554456&&t(13,o={dayMinsElapsed:r,isDaytime:i,untilNextTimeOfDay:s}),n.$$.dirty[0]&67108864&&t(24,a=l.getUTCSeconds()),n.$$.dirty[0]&8&&He(i?"day":"night"),n.$$.dirty[0]&50331648&&r===13&&a===30&&te("nightWarning")},[F,A,L,i,s,c,y,k,N,G,H,me,_t,o,f,d,g,I,D,Q,J,X,M,Ke,a,r,l,Rt,jt,Ft,gn,Bt,Ye,Ve,lt,Gt,re,je,ot,as]}class IE extends ze{constructor(e){super(),We(this,e,AE,wE,Se,{},null,[-1,-1,-1])}}new IE({target:document.body});
