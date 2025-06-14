var $m=Object.defineProperty;var Hm=(n,e,t)=>e in n?$m(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var wn=(n,e,t)=>Hm(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function le(){}const vs=n=>n;function Un(n,e){for(const t in e)n[t]=e[t];return n}function f_(n){return n()}function Uu(){return Object.create(null)}function je(n){n.forEach(f_)}function yr(n){return typeof n=="function"}function Ke(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let $s;function ar(n,e){return n===e?!0:($s||($s=document.createElement("a")),$s.href=e,n===$s.href)}function Um(n){return Object.keys(n).length===0}function d_(n,...e){if(n==null){for(const r of e)r(void 0);return le}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Wm(n){let e;return d_(n,t=>e=t)(),e}function Se(n,e,t){n.$$.on_destroy.push(d_(e,t))}function be(n,e,t){return n.set(t),e}function zm(n){return n&&yr(n.destroy)?n.destroy:le}const p_=typeof window<"u";let Uo=p_?()=>window.performance.now():()=>Date.now(),mc=p_?n=>requestAnimationFrame(n):le;const Hr=new Set;function __(n){Hr.forEach(e=>{e.c(n)||(Hr.delete(e),e.f())}),Hr.size!==0&&mc(__)}function Wo(n){let e;return Hr.size===0&&mc(__),{promise:new Promise(t=>{Hr.add(e={c:n,f:t})}),abort(){Hr.delete(e)}}}const qm=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function R(n,e){n.appendChild(e)}function x_(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function Vm(n){const e=P("style");return e.textContent="/* empty */",Gm(x_(n),e),e.sheet}function Gm(n,e){return R(n.head||n,e),e.sheet}function $(n,e,t){n.insertBefore(e,t||null)}function M(n){n.parentNode&&n.parentNode.removeChild(n)}function Mt(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function P(n){return document.createElement(n)}function jm(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function te(n){return document.createTextNode(n)}function q(){return te(" ")}function tn(){return te("")}function he(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function L(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}const Km=["width","height"];function lr(n,e){const t=Object.getOwnPropertyDescriptors(n.__proto__);for(const r in e)e[r]==null?n.removeAttribute(r):r==="style"?n.style.cssText=e[r]:r==="__value"?n.value=n[r]=e[r]:t[r]&&t[r].set&&Km.indexOf(r)===-1?n[r]=e[r]:L(n,r,e[r])}function Ym(n,e){Object.keys(e).forEach(t=>{De(n,t,e[t])})}function De(n,e,t){const r=e.toLowerCase();r in n?n[r]=typeof n[r]=="boolean"&&t===""?!0:t:e in n?n[e]=typeof n[e]=="boolean"&&t===""?!0:t:L(n,e,t)}function g_(n){return/-/.test(n)?Ym:lr}function Qm(n){return Array.from(n.childNodes)}function me(n,e){e=""+e,n.data!==e&&(n.data=e)}function Ut(n,e){n.value=e??""}function Ge(n,e,t,r){t==null?n.style.removeProperty(e):n.style.setProperty(e,t,"")}function Be(n,e,t){n.classList.toggle(e,!!t)}function m_(n,e,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:r})}class zo{constructor(e=!1){wn(this,"is_svg",!1);wn(this,"e");wn(this,"n");wn(this,"t");wn(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,r=null){this.e||(this.is_svg?this.e=jm(t.nodeName):this.e=P(t.nodeType===11?"TEMPLATE":t.nodeName),this.t=t.tagName!=="TEMPLATE"?t:t.content,this.c(e)),this.i(r)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)$(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(M)}}function Wu(n,e){return new n(e)}const so=new Map;let oo=0;function Xm(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function Zm(n,e){const t={stylesheet:Vm(e),rules:{}};return so.set(n,t),t}function Ji(n,e,t,r,i,s,o,a=0){const c=16.666/r;let l=`{
`;for(let m=0;m<=1;m+=c){const y=e+(t-e)*s(m);l+=m*100+`%{${o(y,1-y)}}
`}const u=l+`100% {${o(t,1-t)}}
}`,f=`__svelte_${Xm(u)}_${a}`,h=x_(n),{stylesheet:d,rules:p}=so.get(h)||Zm(h,n);p[f]||(p[f]=!0,d.insertRule(`@keyframes ${f} ${u}`,d.cssRules.length));const g=n.style.animation||"";return n.style.animation=`${g?`${g}, `:""}${f} ${r}ms linear ${i}ms 1 both`,oo+=1,f}function es(n,e){const t=(n.style.animation||"").split(", "),r=t.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),i=t.length-r.length;i&&(n.style.animation=r.join(", "),oo-=i,oo||Jm())}function Jm(){mc(()=>{oo||(so.forEach(n=>{const{ownerNode:e}=n.stylesheet;e&&M(e)}),so.clear())})}function ev(n,e,t,r){if(!e)return le;const i=n.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return le;const{delay:s=0,duration:o=300,easing:a=vs,start:c=Uo()+s,end:l=c+o,tick:u=le,css:f}=t(n,{from:e,to:i},r);let h=!0,d=!1,p;function g(){f&&(p=Ji(n,0,1,o,s,a,f)),s||(d=!0)}function m(){f&&es(n,p),h=!1}return Wo(y=>{if(!d&&y>=c&&(d=!0),d&&y>=l&&(u(1,0),m()),!h)return!1;if(d){const _=y-c,x=0+1*a(_/o);u(x,1-x)}return!0}),g(),u(0,1),m}function tv(n){const e=getComputedStyle(n);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:r}=e,i=n.getBoundingClientRect();n.style.position="absolute",n.style.width=t,n.style.height=r,v_(n,i)}}function v_(n,e){const t=n.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const r=getComputedStyle(n),i=r.transform==="none"?"":r.transform;n.style.transform=`${i} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}let ts;function Ui(n){ts=n}function y_(){if(!ts)throw new Error("Function called outside component initialization");return ts}function nv(n){y_().$$.on_mount.push(n)}function C_(){const n=y_();return(e,t,{cancelable:r=!1}={})=>{const i=n.$$.callbacks[e];if(i){const s=m_(e,t,{cancelable:r});return i.slice().forEach(o=>{o.call(n,s)}),!s.defaultPrevented}return!0}}const Fr=[],Wi=[];let Ur=[];const zu=[],rv=Promise.resolve();let vl=!1;function iv(){vl||(vl=!0,rv.then(E_))}function St(n){Ur.push(n)}const wa=new Set;let Br=0;function E_(){if(Br!==0)return;const n=ts;do{try{for(;Br<Fr.length;){const e=Fr[Br];Br++,Ui(e),sv(e.$$)}}catch(e){throw Fr.length=0,Br=0,e}for(Ui(null),Fr.length=0,Br=0;Wi.length;)Wi.pop()();for(let e=0;e<Ur.length;e+=1){const t=Ur[e];wa.has(t)||(wa.add(t),t())}Ur.length=0}while(Fr.length);for(;zu.length;)zu.pop()();vl=!1,wa.clear(),Ui(n)}function sv(n){if(n.fragment!==null){n.update(),je(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(St)}}function ov(n){const e=[],t=[];Ur.forEach(r=>n.indexOf(r)===-1?e.push(r):t.push(r)),t.forEach(r=>r()),Ur=e}let wi;function vc(){return wi||(wi=Promise.resolve(),wi.then(()=>{wi=null})),wi}function or(n,e,t){n.dispatchEvent(m_(`${e?"intro":"outro"}${t}`))}const Gs=new Set;let nn;function it(){nn={r:0,c:[],p:nn}}function st(){nn.r||je(nn.c),nn=nn.p}function ne(n,e){n&&n.i&&(Gs.delete(n),n.i(e))}function oe(n,e,t,r){if(n&&n.o){if(Gs.has(n))return;Gs.add(n),nn.c.push(()=>{Gs.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}else r&&r()}const yc={duration:0};function av(n,e,t){const r={direction:"in"};let i=e(n,t,r),s=!1,o,a,c=0;function l(){o&&es(n,o)}function u(){const{delay:h=0,duration:d=300,easing:p=vs,tick:g=le,css:m}=i||yc;m&&(o=Ji(n,0,1,d,h,p,m,c++)),g(0,1);const y=Uo()+h,_=y+d;a&&a.abort(),s=!0,St(()=>or(n,!0,"start")),a=Wo(x=>{if(s){if(x>=_)return g(1,0),or(n,!0,"end"),l(),s=!1;if(x>=y){const v=p((x-y)/d);g(v,1-v)}}return s})}let f=!1;return{start(){f||(f=!0,es(n),yr(i)?(i=i(r),vc().then(u)):u())},invalidate(){f=!1},end(){s&&(l(),s=!1)}}}function lv(n,e,t){const r={direction:"out"};let i=e(n,t,r),s=!0,o;const a=nn;a.r+=1;let c;function l(){const{delay:u=0,duration:f=300,easing:h=vs,tick:d=le,css:p}=i||yc;p&&(o=Ji(n,1,0,f,u,h,p));const g=Uo()+u,m=g+f;St(()=>or(n,!1,"start")),"inert"in n&&(c=n.inert,n.inert=!0),Wo(y=>{if(s){if(y>=m)return d(0,1),or(n,!1,"end"),--a.r||je(a.c),!1;if(y>=g){const _=h((y-g)/f);d(1-_,_)}}return s})}return yr(i)?vc().then(()=>{i=i(r),l()}):l(),{end(u){u&&"inert"in n&&(n.inert=c),u&&i.tick&&i.tick(1,0),s&&(o&&es(n,o),s=!1)}}}function $t(n,e,t,r){let s=e(n,t,{direction:"both"}),o=r?0:1,a=null,c=null,l=null,u;function f(){l&&es(n,l)}function h(p,g){const m=p.b-o;return g*=Math.abs(m),{a:o,b:p.b,d:m,duration:g,start:p.start,end:p.start+g,group:p.group}}function d(p){const{delay:g=0,duration:m=300,easing:y=vs,tick:_=le,css:x}=s||yc,v={start:Uo()+g,b:p};p||(v.group=nn,nn.r+=1),"inert"in n&&(p?u!==void 0&&(n.inert=u):(u=n.inert,n.inert=!0)),a||c?c=v:(x&&(f(),l=Ji(n,o,p,m,g,y,x)),p&&_(0,1),a=h(v,m),St(()=>or(n,p,"start")),Wo(C=>{if(c&&C>c.start&&(a=h(c,m),c=null,or(n,a.b,"start"),x&&(f(),l=Ji(n,o,a.b,a.duration,0,y,s.css))),a){if(C>=a.end)_(o=a.b,1-o),or(n,a.b,"end"),c||(a.b?f():--a.group.r||je(a.group.c)),a=null;else if(C>=a.start){const b=C-a.start;o=a.a+a.d*y(b/a.duration),_(o,1-o)}}return!!(a||c)}))}return{run(p){yr(s)?vc().then(()=>{s=s({direction:p?"in":"out"}),d(p)}):d(p)},end(){f(),a=c=null}}}function Oe(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function cv(n,e){oe(n,1,1,()=>{e.delete(n.key)})}function uv(n,e){n.f(),cv(n,e)}function hv(n,e,t,r,i,s,o,a,c,l,u,f){let h=n.length,d=s.length,p=h;const g={};for(;p--;)g[n[p].key]=p;const m=[],y=new Map,_=new Map,x=[];for(p=d;p--;){const A=f(i,s,p),w=t(A);let T=o.get(w);T?x.push(()=>T.p(A,e)):(T=l(w,A),T.c()),y.set(w,m[p]=T),w in g&&_.set(w,Math.abs(p-g[w]))}const v=new Set,C=new Set;function b(A){ne(A,1),A.m(a,u),o.set(A.key,A),u=A.first,d--}for(;h&&d;){const A=m[d-1],w=n[h-1],T=A.key,E=w.key;A===w?(u=A.first,h--,d--):y.has(E)?!o.has(T)||v.has(T)?b(A):C.has(E)?h--:_.get(T)>_.get(E)?(C.add(T),b(A)):(v.add(E),h--):(c(w,o),h--)}for(;h--;){const A=n[h];y.has(A.key)||c(A,o)}for(;d;)b(m[d-1]);return je(x),m}function Wn(n,e){const t={},r={},i={$$scope:1};let s=n.length;for(;s--;){const o=n[s],a=e[s];if(a){for(const c in o)c in a||(r[c]=1);for(const c in a)i[c]||(t[c]=a[c],i[c]=1);n[s]=a}else for(const c in o)i[c]=1}for(const o in r)o in t||(t[o]=void 0);return t}function ns(n){return typeof n=="object"&&n!==null?n:{}}function Tt(n){n&&n.c()}function Et(n,e,t){const{fragment:r,after_update:i}=n.$$;r&&r.m(e,t),St(()=>{const s=n.$$.on_mount.map(f_).filter(yr);n.$$.on_destroy?n.$$.on_destroy.push(...s):je(s),n.$$.on_mount=[]}),i.forEach(St)}function bt(n,e){const t=n.$$;t.fragment!==null&&(ov(t.after_update),je(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function fv(n,e){n.$$.dirty[0]===-1&&(Fr.push(n),iv(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function ut(n,e,t,r,i,s,o=null,a=[-1]){const c=ts;Ui(n);const l=n.$$={fragment:null,ctx:[],props:s,update:le,not_equal:i,bound:Uu(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Uu(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=t?t(n,e.props||{},(f,h,...d)=>{const p=d.length?d[0]:h;return l.ctx&&i(l.ctx[f],l.ctx[f]=p)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](p),u&&fv(n,f)),h}):[],l.update(),u=!0,je(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){const f=Qm(e.target);l.fragment&&l.fragment.l(f),f.forEach(M)}else l.fragment&&l.fragment.c();e.intro&&ne(n.$$.fragment),Et(n,e.target,e.anchor),E_()}Ui(c)}class ht{constructor(){wn(this,"$$");wn(this,"$$set")}$destroy(){bt(this,1),this.$destroy=le}$on(e,t){if(!yr(t))return le;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const i=r.indexOf(t);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!Um(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const dv="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(dv);const kr=[];function qt(n,e=le){let t;const r=new Set;function i(a){if(Ke(n,a)&&(n=a,t)){const c=!kr.length;for(const l of r)l[1](),kr.push(l,n);if(c){for(let l=0;l<kr.length;l+=2)kr[l][0](kr[l+1]);kr.length=0}}}function s(a){i(a(n))}function o(a,c=le){const l=[a,c];return r.add(l),r.size===1&&(t=e(i,s)||le),a(n),()=>{r.delete(l),r.size===0&&t&&(t(),t=null)}}return{set:i,update:s,subscribe:o}}var qu={};/**
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
 */const b_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const K=function(n,e){if(!n)throw ri(e)},ri=function(n){return new Error("Firebase Database ("+b_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const A_=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},pv=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Cc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,u=s>>2,f=(s&3)<<4|a>>4;let h=(a&15)<<2|l>>6,d=l&63;c||(d=64,o||(h=64)),r.push(t[u],t[f],t[h],t[d])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(A_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):pv(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const f=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||l==null||f==null)throw new _v;const h=s<<2|a>>4;if(r.push(h),l!==64){const d=a<<4&240|l>>2;if(r.push(d),f!==64){const p=l<<6&192|f;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};let _v=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}};const w_=function(n){const e=A_(n);return Cc.encodeByteArray(e,!0)},ao=function(n){return w_(n).replace(/\./g,"")},lo=function(n){try{return Cc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function xv(n){return D_(void 0,n)}function D_(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!gv(t)||(n[t]=D_(n[t],e[t]));return n}function gv(n){return n!=="__proto__"}/**
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
 */function mv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vv=()=>mv().__FIREBASE_DEFAULTS__,yv=()=>{if(typeof process>"u"||typeof qu>"u")return;const n=qu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Cv=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&lo(n[1]);return e&&JSON.parse(e)},Ec=()=>{try{return vv()||yv()||Cv()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},I_=n=>{var e,t;return(t=(e=Ec())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Ev=n=>{const e=I_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},S_=()=>{var n;return(n=Ec())===null||n===void 0?void 0:n.config},T_=n=>{var e;return(e=Ec())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */let qo=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}};/**
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
 */function bv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ao(JSON.stringify(t)),ao(JSON.stringify(o)),""].join(".")}/**
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
 */function At(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(At())}function Av(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function wv(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function B_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dv(){const n=At();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Iv(){return b_.NODE_ADMIN===!0}function Sv(){try{return typeof indexedDB=="object"}catch{return!1}}function Tv(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const Bv="FirebaseError";let ii=class k_ extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Bv,Object.setPrototypeOf(this,k_.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ys.prototype.create)}},ys=class{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?kv(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ii(i,a,r)}};function kv(n,e){return n.replace(Fv,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Fv=/\{\$([^}]+)}/g;/**
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
 */function rs(n){return JSON.parse(n)}function Ze(n){return JSON.stringify(n)}/**
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
 */const F_=function(n){let e={},t={},r={},i="";try{const s=n.split(".");e=rs(lo(s[0])||""),t=rs(lo(s[1])||""),i=s[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:i}},Rv=function(n){const e=F_(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Nv=function(n){const e=F_(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function hn(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Qr(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function yl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function co(n,e,t){const r={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=e.call(t,n[i],i,n));return r}function uo(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Vu(s)&&Vu(o)){if(!uo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Vu(n){return n!==null&&typeof n=="object"}/**
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
 */function si(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Oi(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Li(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */let Pv=class{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let f=0;f<16;f++)r[f]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let f=16;f<80;f++){const h=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let f=0;f<80;f++){f<40?f<20?(l=a^s&(o^a),u=1518500249):(l=s^o^a,u=1859775393):f<60?(l=s&o|a&(s|o),u=2400959708):(l=s^o^a,u=3395469782);const h=(i<<5|i>>>27)+l+c+u+r[f]&4294967295;c=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<t;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}};function Ov(n,e){const t=new Lv(n,e);return t.subscribe.bind(t)}class Lv{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Mv(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Da),i.error===void 0&&(i.error=Da),i.complete===void 0&&(i.complete=Da);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Mv(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Da(){}function Ac(n,e){return`${n} failed: ${e} argument `}/**
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
 */const $v=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,K(r<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Vo=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function ft(n){return n&&n._delegate?n._delegate:n}let cr=class{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
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
 */const Zn="[DEFAULT]";/**
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
 */let Hv=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new qo;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Wv(e))try{this.getOrInitializeService({instanceIdentifier:Zn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zn){return this.instances.has(e)}getOptions(e=Zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Uv(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zn){return this.component?this.component.multipleInstances?e:Zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function Uv(n){return n===Zn?void 0:n}function Wv(n){return n.instantiationMode==="EAGER"}/**
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
 */let zv=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Hv(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};/**
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
 */var Te;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Te||(Te={}));const qv={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},Vv=Te.INFO,Gv={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},jv=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Gv[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let wc=class{constructor(e){this.name=e,this._logLevel=Vv,this._logHandler=jv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}};const Kv=(n,e)=>e.some(t=>n instanceof t);let Gu,ju;function Yv(){return Gu||(Gu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qv(){return ju||(ju=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const R_=new WeakMap,Cl=new WeakMap,N_=new WeakMap,Ia=new WeakMap,Dc=new WeakMap;function Xv(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Fn(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&R_.set(t,n)}).catch(()=>{}),Dc.set(e,n),e}function Zv(n){if(Cl.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Cl.set(n,e)}let El={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Cl.get(n);if(e==="objectStoreNames")return n.objectStoreNames||N_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Fn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Jv(n){El=n(El)}function ey(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Sa(this),e,...t);return N_.set(r,e.sort?e.sort():[e]),Fn(r)}:Qv().includes(n)?function(...e){return n.apply(Sa(this),e),Fn(R_.get(this))}:function(...e){return Fn(n.apply(Sa(this),e))}}function ty(n){return typeof n=="function"?ey(n):(n instanceof IDBTransaction&&Zv(n),Kv(n,Yv())?new Proxy(n,El):n)}function Fn(n){if(n instanceof IDBRequest)return Xv(n);if(Ia.has(n))return Ia.get(n);const e=ty(n);return e!==n&&(Ia.set(n,e),Dc.set(e,n)),e}const Sa=n=>Dc.get(n);function ny(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=Fn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Fn(o.result),c.oldVersion,c.newVersion,Fn(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const ry=["get","getKey","getAll","getAllKeys","count"],iy=["put","add","delete","clear"],Ta=new Map;function Ku(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ta.get(e))return Ta.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=iy.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ry.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),i&&c.done]))[0]};return Ta.set(e,s),s}Jv(n=>({...n,get:(e,t,r)=>Ku(e,t)||n.get(e,t,r),has:(e,t)=>!!Ku(e,t)||n.has(e,t)}));/**
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
 */let sy=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(oy(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}};function oy(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bl="@firebase/app",Yu="0.10.17";/**
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
 */const yn=new wc("@firebase/app"),ay="@firebase/app-compat",ly="@firebase/analytics-compat",cy="@firebase/analytics",uy="@firebase/app-check-compat",hy="@firebase/app-check",fy="@firebase/auth",dy="@firebase/auth-compat",py="@firebase/database",_y="@firebase/data-connect",xy="@firebase/database-compat",gy="@firebase/functions",my="@firebase/functions-compat",vy="@firebase/installations",yy="@firebase/installations-compat",Cy="@firebase/messaging",Ey="@firebase/messaging-compat",by="@firebase/performance",Ay="@firebase/performance-compat",wy="@firebase/remote-config",Dy="@firebase/remote-config-compat",Iy="@firebase/storage",Sy="@firebase/storage-compat",Ty="@firebase/firestore",By="@firebase/vertexai",ky="@firebase/firestore-compat",Fy="firebase",Ry="11.1.0";/**
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
 */const Al="[DEFAULT]",Ny={[bl]:"fire-core",[ay]:"fire-core-compat",[cy]:"fire-analytics",[ly]:"fire-analytics-compat",[hy]:"fire-app-check",[uy]:"fire-app-check-compat",[fy]:"fire-auth",[dy]:"fire-auth-compat",[py]:"fire-rtdb",[_y]:"fire-data-connect",[xy]:"fire-rtdb-compat",[gy]:"fire-fn",[my]:"fire-fn-compat",[vy]:"fire-iid",[yy]:"fire-iid-compat",[Cy]:"fire-fcm",[Ey]:"fire-fcm-compat",[by]:"fire-perf",[Ay]:"fire-perf-compat",[wy]:"fire-rc",[Dy]:"fire-rc-compat",[Iy]:"fire-gcs",[Sy]:"fire-gcs-compat",[Ty]:"fire-fst",[ky]:"fire-fst-compat",[By]:"fire-vertex","fire-js":"fire-js",[Fy]:"fire-js-all"};/**
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
 */const ho=new Map,Py=new Map,wl=new Map;function Qu(n,e){try{n.container.addComponent(e)}catch(t){yn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Xr(n){const e=n.name;if(wl.has(e))return yn.debug(`There were multiple attempts to register component ${e}.`),!1;wl.set(e,n);for(const t of ho.values())Qu(t,n);for(const t of Py.values())Qu(t,n);return!0}function Ic(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function rn(n){return n.settings!==void 0}/**
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
 */const Oy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rn=new ys("app","Firebase",Oy);/**
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
 */let Ly=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rn.create("app-deleted",{appName:this._name})}};/**
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
 */const oi=Ry;function P_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Al,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Rn.create("bad-app-name",{appName:String(i)});if(t||(t=S_()),!t)throw Rn.create("no-options");const s=ho.get(i);if(s){if(uo(t,s.options)&&uo(r,s.config))return s;throw Rn.create("duplicate-app",{appName:i})}const o=new zv(i);for(const c of wl.values())o.addComponent(c);const a=new Ly(t,r,o);return ho.set(i,a),a}function Sc(n=Al){const e=ho.get(n);if(!e&&n===Al&&S_())return P_();if(!e)throw Rn.create("no-app",{appName:n});return e}function Nn(n,e,t){var r;let i=(r=Ny[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yn.warn(a.join(" "));return}Xr(new cr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const My="firebase-heartbeat-database",$y=1,is="firebase-heartbeat-store";let Ba=null;function O_(){return Ba||(Ba=ny(My,$y,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(is)}catch(t){console.warn(t)}}}}).catch(n=>{throw Rn.create("idb-open",{originalErrorMessage:n.message})})),Ba}async function Hy(n){try{const t=(await O_()).transaction(is),r=await t.objectStore(is).get(L_(n));return await t.done,r}catch(e){if(e instanceof ii)yn.warn(e.message);else{const t=Rn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yn.warn(t.message)}}}async function Xu(n,e){try{const r=(await O_()).transaction(is,"readwrite");await r.objectStore(is).put(e,L_(n)),await r.done}catch(t){if(t instanceof ii)yn.warn(t.message);else{const r=Rn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});yn.warn(r.message)}}}function L_(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Uy=1024,Wy=30*24*60*60*1e3;let zy=class{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Vy(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Zu();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Wy}),this._storage.overwrite(this._heartbeatsCache))}catch(r){yn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Zu(),{heartbeatsToSend:r,unsentEntries:i}=qy(this._heartbeatsCache.heartbeats),s=ao(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return yn.warn(t),""}}};function Zu(){return new Date().toISOString().substring(0,10)}function qy(n,e=Uy){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ju(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Ju(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}let Vy=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sv()?Tv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Hy(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}};function Ju(n){return ao(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Gy(n){Xr(new cr("platform-logger",e=>new sy(e),"PRIVATE")),Xr(new cr("heartbeat",e=>new zy(e),"PRIVATE")),Nn(bl,Yu,n),Nn(bl,Yu,"esm2017"),Nn("fire-js","")}Gy("");var jy="firebase",Ky="11.1.0";/**
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
 */Nn(jy,Ky,"app");function Tc(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function M_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Yy=M_,$_=new ys("auth","Firebase",M_());/**
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
 */const fo=new wc("@firebase/auth");function Qy(n,...e){fo.logLevel<=Te.WARN&&fo.warn(`Auth (${oi}): ${n}`,...e)}function js(n,...e){fo.logLevel<=Te.ERROR&&fo.error(`Auth (${oi}): ${n}`,...e)}/**
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
 */function Jt(n,...e){throw Bc(n,...e)}function ln(n,...e){return Bc(n,...e)}function H_(n,e,t){const r=Object.assign(Object.assign({},Yy()),{[e]:t});return new ys("auth","Firebase",r).create(e,{appName:n.name})}function gn(n){return H_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Bc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return $_.create(n,...e)}function ae(n,e,...t){if(!n)throw Bc(e,...t)}function dn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw js(e),new Error(e)}function Cn(n,e){n||dn(e)}/**
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
 */function Dl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Xy(){return eh()==="http:"||eh()==="https:"}function eh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Zy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Xy()||wv()||"connection"in navigator)?navigator.onLine:!0}function Jy(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Cs{constructor(e,t){this.shortDelay=e,this.longDelay=t,Cn(t>e,"Short delay should be less than long delay!"),this.isMobile=bc()||B_()}get(){return Zy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function kc(n,e){Cn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class U_{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const eC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const tC=new Cs(3e4,6e4);function Kn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function fn(n,e,t,r,i={}){return W_(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=si(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const l=Object.assign({method:e,headers:c},s);return Av()||(l.referrerPolicy="no-referrer"),U_.fetch()(z_(n,n.config.apiHost,t,a),l)})}async function W_(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},eC),e);try{const i=new rC(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Hs(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hs(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Hs(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Hs(n,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw H_(n,u,l);Jt(n,u)}}catch(i){if(i instanceof ii)throw i;Jt(n,"network-request-failed",{message:String(i)})}}async function Es(n,e,t,r,i={}){const s=await fn(n,e,t,r,i);return"mfaPendingCredential"in s&&Jt(n,"multi-factor-auth-required",{_serverResponse:s}),s}function z_(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?kc(n.config,i):`${n.config.apiScheme}://${i}`}function nC(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class rC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ln(this.auth,"network-request-failed")),tC.get())})}}function Hs(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=ln(n,e,r);return i.customData._tokenResponse=t,i}function th(n){return n!==void 0&&n.enterprise!==void 0}class iC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return nC(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function sC(n,e){return fn(n,"GET","/v2/recaptchaConfig",Kn(n,e))}/**
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
 */async function oC(n,e){return fn(n,"POST","/v1/accounts:delete",e)}async function q_(n,e){return fn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function zi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function aC(n,e=!1){const t=ft(n),r=await t.getIdToken(e),i=Fc(r);ae(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:zi(ka(i.auth_time)),issuedAtTime:zi(ka(i.iat)),expirationTime:zi(ka(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ka(n){return Number(n)*1e3}function Fc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return js("JWT malformed, contained fewer than 3 sections"),null;try{const i=lo(t);return i?JSON.parse(i):(js("Failed to decode base64 JWT payload"),null)}catch(i){return js("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function nh(n){const e=Fc(n);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ur(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ii&&lC(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function lC({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class cC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Il{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=zi(this.lastLoginAt),this.creationTime=zi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function po(n){var e;const t=n.auth,r=await n.getIdToken(),i=await ur(n,q_(t,{idToken:r}));ae(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?V_(s.providerUserInfo):[],a=hC(n.providerData,o),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Il(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,f)}async function uC(n){const e=ft(n);await po(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hC(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function V_(n){return n.map(e=>{var{providerId:t}=e,r=Tc(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function fC(n,e){const t=await W_(n,{},async()=>{const r=si({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=z_(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",U_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function dC(n,e){return fn(n,"POST","/v2/accounts:revokeToken",Kn(n,e))}/**
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
 */class Wr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const t=nh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await fC(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new Wr;return r&&(ae(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ae(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ae(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wr,this.toJSON())}_performRefresh(){return dn("not implemented")}}/**
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
 */function Dn(n,e){ae(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class pn{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Tc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Il(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await ur(this,this.stsTokenManager.getToken(this.auth,e));return ae(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return aC(this,e)}reload(){return uC(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new pn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await po(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(rn(this.auth.app))return Promise.reject(gn(this.auth));const e=await this.getIdToken();return await ur(this,oC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,l,u;const f=(r=t.displayName)!==null&&r!==void 0?r:void 0,h=(i=t.email)!==null&&i!==void 0?i:void 0,d=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=t.photoURL)!==null&&o!==void 0?o:void 0,g=(a=t.tenantId)!==null&&a!==void 0?a:void 0,m=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,y=(l=t.createdAt)!==null&&l!==void 0?l:void 0,_=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:x,emailVerified:v,isAnonymous:C,providerData:b,stsTokenManager:A}=t;ae(x&&A,e,"internal-error");const w=Wr.fromJSON(this.name,A);ae(typeof x=="string",e,"internal-error"),Dn(f,e.name),Dn(h,e.name),ae(typeof v=="boolean",e,"internal-error"),ae(typeof C=="boolean",e,"internal-error"),Dn(d,e.name),Dn(p,e.name),Dn(g,e.name),Dn(m,e.name),Dn(y,e.name),Dn(_,e.name);const T=new pn({uid:x,auth:e,email:h,emailVerified:v,displayName:f,isAnonymous:C,photoURL:p,phoneNumber:d,tenantId:g,stsTokenManager:w,createdAt:y,lastLoginAt:_});return b&&Array.isArray(b)&&(T.providerData=b.map(E=>Object.assign({},E))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(e,t,r=!1){const i=new Wr;i.updateFromServerResponse(t);const s=new pn({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await po(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];ae(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?V_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Wr;a.updateFromIdToken(r);const c=new pn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Il(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,l),c}}/**
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
 */const rh=new Map;function _n(n){Cn(n instanceof Function,"Expected a class definition");let e=rh.get(n);return e?(Cn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,rh.set(n,e),e)}/**
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
 */class G_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}G_.type="NONE";const ih=G_;/**
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
 */function Ks(n,e,t){return`firebase:${n}:${e}:${t}`}class zr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ks(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ks("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new zr(_n(ih),e,r);const i=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||_n(ih);const o=Ks(r,e.config.apiKey,e.name);let a=null;for(const l of t)try{const u=await l._get(o);if(u){const f=pn._fromJSON(e,u);l!==s&&(a=f),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new zr(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new zr(s,e,r))}}/**
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
 */function sh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Q_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(j_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Z_(e))return"Blackberry";if(J_(e))return"Webos";if(K_(e))return"Safari";if((e.includes("chrome/")||Y_(e))&&!e.includes("edge/"))return"Chrome";if(X_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function j_(n=At()){return/firefox\//i.test(n)}function K_(n=At()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Y_(n=At()){return/crios\//i.test(n)}function Q_(n=At()){return/iemobile/i.test(n)}function X_(n=At()){return/android/i.test(n)}function Z_(n=At()){return/blackberry/i.test(n)}function J_(n=At()){return/webos/i.test(n)}function Rc(n=At()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function pC(n=At()){var e;return Rc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _C(){return Dv()&&document.documentMode===10}function ex(n=At()){return Rc(n)||X_(n)||J_(n)||Z_(n)||/windows phone/i.test(n)||Q_(n)}/**
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
 */function tx(n,e=[]){let t;switch(n){case"Browser":t=sh(At());break;case"Worker":t=`${sh(At())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${oi}/${r}`}/**
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
 */class xC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function gC(n,e={}){return fn(n,"GET","/v2/passwordPolicy",Kn(n,e))}/**
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
 */const mC=6;class vC{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:mC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class yC{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new oh(this),this.idTokenSubscription=new oh(this),this.beforeStateQueue=new xC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_n(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await zr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await q_(this,{idToken:e}),r=await pn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(rn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await po(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Jy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(rn(this.app))return Promise.reject(gn(this));const t=e?ft(e):null;return t&&ae(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return rn(this.app)?Promise.reject(gn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return rn(this.app)?Promise.reject(gn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gC(this),t=new vC(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ys("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await dC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_n(e)||this._popupRedirectResolver;ae(t,this,"argument-error"),this.redirectPersistenceManager=await zr.create(this,[_n(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tx(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Qy(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Cr(n){return ft(n)}class oh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ov(t=>this.observer=t)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Go={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function CC(n){Go=n}function nx(n){return Go.loadJS(n)}function EC(){return Go.recaptchaEnterpriseScript}function bC(){return Go.gapiScript}function AC(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class wC{constructor(){this.enterprise=new DC}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class DC{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const IC="recaptcha-enterprise",rx="NO_RECAPTCHA";class SC{constructor(e){this.type=IC,this.auth=Cr(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{sC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new iC(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;th(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(rx)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new wC().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&th(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=EC();c.length!==0&&(c+=a),nx(c).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function ah(n,e,t,r=!1,i=!1){const s=new SC(n);let o;if(i)o=rx;else try{o=await s.verify(t)}catch{o=await s.verify(t,!0)}const a=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Sl(n,e,t,r,i){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await ah(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await ah(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(o)})}/**
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
 */function TC(n,e){const t=Ic(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(uo(s,e??{}))return i;Jt(i,"already-initialized")}return t.initialize({options:e})}function BC(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(_n);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function kC(n,e,t){const r=Cr(n);ae(r._canInitEmulator,r,"emulator-config-failed"),ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=ix(e),{host:o,port:a}=FC(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),RC()}function ix(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function FC(n){const e=ix(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:lh(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:lh(o)}}}function lh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function RC(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Nc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,t){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}}async function NC(n,e){return fn(n,"POST","/v1/accounts:update",e)}async function PC(n,e){return fn(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function OC(n,e){return Es(n,"POST","/v1/accounts:signInWithPassword",Kn(n,e))}/**
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
 */async function LC(n,e){return Es(n,"POST","/v1/accounts:signInWithEmailLink",Kn(n,e))}async function MC(n,e){return Es(n,"POST","/v1/accounts:signInWithEmailLink",Kn(n,e))}/**
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
 */class ss extends Nc{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new ss(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ss(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sl(e,t,"signInWithPassword",OC);case"emailLink":return LC(e,{email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sl(e,r,"signUpPassword",PC);case"emailLink":return MC(e,{idToken:t,email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function qr(n,e){return Es(n,"POST","/v1/accounts:signInWithIdp",Kn(n,e))}/**
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
 */const $C="http://localhost";class hr extends Nc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new hr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Jt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Tc(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new hr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return qr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,qr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,qr(e,t)}buildRequest(){const e={requestUri:$C,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=si(t)}return e}}/**
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
 */function HC(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function UC(n){const e=Oi(Li(n)).link,t=e?Oi(Li(e)).deep_link_id:null,r=Oi(Li(n)).deep_link_id;return(r?Oi(Li(r)).link:null)||r||t||e||n}class Pc{constructor(e){var t,r,i,s,o,a;const c=Oi(Li(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=HC((i=c.mode)!==null&&i!==void 0?i:null);ae(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=UC(e);try{return new Pc(t)}catch{return null}}}/**
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
 */class ai{constructor(){this.providerId=ai.PROVIDER_ID}static credential(e,t){return ss._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Pc.parseLink(t);return ae(r,"argument-error"),ss._fromEmailAndCode(e,r.code,r.tenantId)}}ai.PROVIDER_ID="password";ai.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ai.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class sx{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class bs extends sx{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class In extends bs{constructor(){super("facebook.com")}static credential(e){return hr._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.FACEBOOK_SIGN_IN_METHOD="facebook.com";In.PROVIDER_ID="facebook.com";/**
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
 */class Sn extends bs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return hr._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Sn.credential(t,r)}catch{return null}}}Sn.GOOGLE_SIGN_IN_METHOD="google.com";Sn.PROVIDER_ID="google.com";/**
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
 */class Tn extends bs{constructor(){super("github.com")}static credential(e){return hr._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch{return null}}}Tn.GITHUB_SIGN_IN_METHOD="github.com";Tn.PROVIDER_ID="github.com";/**
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
 */class Bn extends bs{constructor(){super("twitter.com")}static credential(e,t){return hr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Bn.credential(t,r)}catch{return null}}}Bn.TWITTER_SIGN_IN_METHOD="twitter.com";Bn.PROVIDER_ID="twitter.com";/**
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
 */async function WC(n,e){return Es(n,"POST","/v1/accounts:signUp",Kn(n,e))}/**
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
 */class fr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await pn._fromIdTokenResponse(e,r,i),o=ch(r);return new fr({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=ch(r);return new fr({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function ch(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class _o extends ii{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,_o.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new _o(e,t,r,i)}}function ox(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?_o._fromErrorAndOperation(n,s,e,r):s})}async function zC(n,e,t=!1){const r=await ur(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return fr._forOperation(n,"link",r)}/**
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
 */async function qC(n,e,t=!1){const{auth:r}=n;if(rn(r.app))return Promise.reject(gn(r));const i="reauthenticate";try{const s=await ur(n,ox(r,i,e,n),t);ae(s.idToken,r,"internal-error");const o=Fc(s.idToken);ae(o,r,"internal-error");const{sub:a}=o;return ae(n.uid===a,r,"user-mismatch"),fr._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Jt(r,"user-mismatch"),s}}/**
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
 */async function ax(n,e,t=!1){if(rn(n.app))return Promise.reject(gn(n));const r="signIn",i=await ox(n,r,e),s=await fr._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function VC(n,e){return ax(Cr(n),e)}/**
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
 */async function lx(n){const e=Cr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function GC(n,e,t){if(rn(n.app))return Promise.reject(gn(n));const r=Cr(n),o=await Sl(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",WC).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&lx(n),c}),a=await fr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function uh(n,e,t){return rn(n.app)?Promise.reject(gn(n)):VC(ft(n),ai.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&lx(n),r})}/**
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
 */async function jC(n,e){return fn(n,"POST","/v1/accounts:update",e)}/**
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
 */async function KC(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=ft(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await ur(r,jC(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function YC(n,e){return QC(ft(n),null,e)}async function QC(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};t&&(s.password=t);const o=await ur(n,NC(r,s));await n._updateTokensIfNecessary(o,!0)}function XC(n,e,t,r){return ft(n).onIdTokenChanged(e,t,r)}function ZC(n,e,t){return ft(n).beforeAuthStateChanged(e,t)}function JC(n,e,t,r){return ft(n).onAuthStateChanged(e,t,r)}const xo="__sak";/**
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
 */class cx{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(xo,"1"),this.storage.removeItem(xo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const eE=1e3,tE=10;class ux extends cx{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ex(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);_C()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,tE):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},eE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ux.type="LOCAL";const nE=ux;/**
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
 */class hx extends cx{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}hx.type="SESSION";const fx=hx;/**
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
 */function rE(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class jo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new jo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(t.origin,s)),c=await rE(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jo.receivers=[];/**
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
 */function Oc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class iE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Oc("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const h=f;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function cn(){return window}function sE(n){cn().location.href=n}/**
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
 */function dx(){return typeof cn().WorkerGlobalScope<"u"&&typeof cn().importScripts=="function"}async function oE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aE(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function lE(){return dx()?self:null}/**
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
 */const px="firebaseLocalStorageDb",cE=1,go="firebaseLocalStorage",_x="fbase_key";class As{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ko(n,e){return n.transaction([go],e?"readwrite":"readonly").objectStore(go)}function uE(){const n=indexedDB.deleteDatabase(px);return new As(n).toPromise()}function Tl(){const n=indexedDB.open(px,cE);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(go,{keyPath:_x})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(go)?e(r):(r.close(),await uE(),e(await Tl()))})})}async function hh(n,e,t){const r=Ko(n,!0).put({[_x]:e,value:t});return new As(r).toPromise()}async function hE(n,e){const t=Ko(n,!1).get(e),r=await new As(t).toPromise();return r===void 0?null:r.value}function fh(n,e){const t=Ko(n,!0).delete(e);return new As(t).toPromise()}const fE=800,dE=3;class xx{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tl(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>dE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dx()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jo._getInstance(lE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await oE(),!this.activeServiceWorker)return;this.sender=new iE(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tl();return await hh(e,xo,"1"),await fh(e,xo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>hh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>hE(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>fh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ko(i,!1).getAll();return new As(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xx.type="LOCAL";const pE=xx;new Cs(3e4,6e4);/**
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
 */function _E(n,e){return e?_n(e):(ae(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Lc extends Nc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return qr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return qr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function xE(n){return ax(n.auth,new Lc(n),n.bypassAuthState)}function gE(n){const{auth:e,user:t}=n;return ae(t,e,"internal-error"),qC(t,new Lc(n),n.bypassAuthState)}async function mE(n){const{auth:e,user:t}=n;return ae(t,e,"internal-error"),zC(t,new Lc(n),n.bypassAuthState)}/**
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
 */class gx{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xE;case"linkViaPopup":case"linkViaRedirect":return mE;case"reauthViaPopup":case"reauthViaRedirect":return gE;default:Jt(this.auth,"internal-error")}}resolve(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const vE=new Cs(2e3,1e4);class Nr extends gx{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Nr.currentPopupAction&&Nr.currentPopupAction.cancel(),Nr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){Cn(this.filter.length===1,"Popup operations only handle one event");const e=Oc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vE.get())};e()}}Nr.currentPopupAction=null;/**
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
 */const yE="pendingRedirect",Ys=new Map;class CE extends gx{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ys.get(this.auth._key());if(!e){try{const r=await EE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ys.set(this.auth._key(),e)}return this.bypassAuthState||Ys.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function EE(n,e){const t=wE(e),r=AE(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function bE(n,e){Ys.set(n._key(),e)}function AE(n){return _n(n._redirectPersistence)}function wE(n){return Ks(yE,n.config.apiKey,n.name)}async function DE(n,e,t=!1){if(rn(n.app))return Promise.reject(gn(n));const r=Cr(n),i=_E(r,e),o=await new CE(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const IE=10*60*1e3;class SE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!TE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!mx(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(ln(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=IE&&this.cachedEventUids.clear(),this.cachedEventUids.has(dh(e))}saveEventToCache(e){this.cachedEventUids.add(dh(e)),this.lastProcessedEventTime=Date.now()}}function dh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function mx({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function TE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mx(n);default:return!1}}/**
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
 */async function BE(n,e={}){return fn(n,"GET","/v1/projects",e)}/**
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
 */const kE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,FE=/^https?/;async function RE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await BE(n);for(const t of e)try{if(NE(t))return}catch{}Jt(n,"unauthorized-domain")}function NE(n){const e=Dl(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!FE.test(t))return!1;if(kE.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const PE=new Cs(3e4,6e4);function ph(){const n=cn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function OE(n){return new Promise((e,t)=>{var r,i,s;function o(){ph(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ph(),t(ln(n,"network-request-failed"))},timeout:PE.get()})}if(!((i=(r=cn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=cn().gapi)===null||s===void 0)&&s.load)o();else{const a=AC("iframefcb");return cn()[a]=()=>{gapi.load?o():t(ln(n,"network-request-failed"))},nx(`${bC()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Qs=null,e})}let Qs=null;function LE(n){return Qs=Qs||OE(n),Qs}/**
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
 */const ME=new Cs(5e3,15e3),$E="__/auth/iframe",HE="emulator/auth/iframe",UE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zE(n){const e=n.config;ae(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?kc(e,HE):`https://${n.config.authDomain}/${$E}`,r={apiKey:e.apiKey,appName:n.name,v:oi},i=WE.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${si(r).slice(1)}`}async function qE(n){const e=await LE(n),t=cn().gapi;return ae(t,n,"internal-error"),e.open({where:document.body,url:zE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UE,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ln(n,"network-request-failed"),a=cn().setTimeout(()=>{s(o)},ME.get());function c(){cn().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const VE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},GE=500,jE=600,KE="_blank",YE="http://localhost";class _h{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function QE(n,e,t,r=GE,i=jE){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},VE),{width:r.toString(),height:i.toString(),top:s,left:o}),l=At().toLowerCase();t&&(a=Y_(l)?KE:t),j_(l)&&(e=e||YE,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[d,p])=>`${h}${d}=${p},`,"");if(pC(l)&&a!=="_self")return XE(e||"",a),new _h(null);const f=window.open(e||"",a,u);ae(f,n,"popup-blocked");try{f.focus()}catch{}return new _h(f)}function XE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const ZE="__/auth/handler",JE="emulator/auth/handler",e2=encodeURIComponent("fac");async function xh(n,e,t,r,i,s){ae(n.config.authDomain,n,"auth-domain-config-required"),ae(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:oi,eventId:i};if(e instanceof sx){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",yl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(e instanceof bs){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await n._getAppCheckToken(),l=c?`#${e2}=${encodeURIComponent(c)}`:"";return`${t2(n)}?${si(a).slice(1)}${l}`}function t2({config:n}){return n.emulator?kc(n,JE):`https://${n.authDomain}/${ZE}`}/**
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
 */const Fa="webStorageSupport";class n2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fx,this._completeRedirectFn=DE,this._overrideRedirectResult=bE}async _openPopup(e,t,r,i){var s;Cn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await xh(e,t,r,Dl(),i);return QE(e,o,Oc())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await xh(e,t,r,Dl(),i);return sE(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Cn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await qE(e),r=new SE(e);return t.register("authEvent",i=>(ae(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Fa,{type:Fa},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Fa];o!==void 0&&t(!!o),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=RE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ex()||K_()||Rc()}}const r2=n2;var gh="@firebase/auth",mh="1.8.1";/**
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
 */class i2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function s2(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function o2(n){Xr(new cr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tx(n)},l=new yC(r,i,s,c);return BC(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Xr(new cr("auth-internal",e=>{const t=Cr(e.getProvider("auth").getImmediate());return(r=>new i2(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nn(gh,mh,s2(n)),Nn(gh,mh,"esm2017")}/**
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
 */const a2=5*60,l2=T_("authIdTokenMaxAge")||a2;let vh=null;const c2=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>l2)return;const i=t==null?void 0:t.token;vh!==i&&(vh=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function u2(n=Sc()){const e=Ic(n,"auth");if(e.isInitialized())return e.getImmediate();const t=TC(n,{popupRedirectResolver:r2,persistence:[pE,nE,fx]}),r=T_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=c2(s.toString());ZC(t,o,()=>o(t.currentUser)),XC(t,a=>o(a))}}const i=I_("auth");return i&&kC(t,`http://${i}`),t}function h2(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}CC({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=ln("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",h2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});o2("Browser");var yh={};const Ch="@firebase/database",Eh="1.0.10";/**
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
 */let vx="";function f2(n){vx=n}/**
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
 */let d2=class{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ze(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:rs(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}};/**
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
 */let p2=class{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return hn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}};/**
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
 */const yx=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new d2(e)}}catch{}return new p2},rr=yx("localStorage"),_2=yx("sessionStorage");/**
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
 */const Vr=new wc("@firebase/database"),x2=function(){let n=1;return function(){return n++}}(),Cx=function(n){const e=$v(n),t=new Pv;t.update(e);const r=t.digest();return Cc.encodeByteArray(r)},ws=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ws.apply(null,r):typeof r=="object"?e+=Ze(r):e+=r,e+=" "}return e};let qi=null,bh=!0;const g2=function(n,e){K(!0,"Can't turn on custom loggers persistently."),Vr.logLevel=Te.VERBOSE,qi=Vr.log.bind(Vr)},dt=function(...n){if(bh===!0&&(bh=!1,qi===null&&_2.get("logging_enabled")===!0&&g2()),qi){const e=ws.apply(null,n);qi(e)}},Ds=function(n){return function(...e){dt(n,...e)}},Bl=function(...n){const e="FIREBASE INTERNAL ERROR: "+ws(...n);Vr.error(e)},En=function(...n){const e=`FIREBASE FATAL ERROR: ${ws(...n)}`;throw Vr.error(e),new Error(e)},It=function(...n){const e="FIREBASE WARNING: "+ws(...n);Vr.warn(e)},m2=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&It("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Mc=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},v2=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},dr="[MIN_NAME]",zn="[MAX_NAME]",li=function(n,e){if(n===e)return 0;if(n===dr||e===zn)return-1;if(e===dr||n===zn)return 1;{const t=Ah(n),r=Ah(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},y2=function(n,e){return n===e?0:n<e?-1:1},Di=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Ze(e))},$c=function(n){if(typeof n!="object"||n===null)return Ze(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=Ze(e[r]),t+=":",t+=$c(n[e[r]]);return t+="}",t},Ex=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let i=0;i<t;i+=e)i+e>t?r.push(n.substring(i,t)):r.push(n.substring(i,i+e));return r};function Bt(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const bx=function(n){K(!Mc(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let i,s,o,a,c;n===0?(s=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),r),s=a+r,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(s=0,o=Math.round(n/Math.pow(2,1-r-t))));const l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(s%2?1:0),s=Math.floor(s/2);l.push(i?1:0),l.reverse();const u=l.join("");let f="";for(c=0;c<64;c+=8){let h=parseInt(u.substr(c,8),2).toString(16);h.length===1&&(h="0"+h),f=f+h}return f.toLowerCase()},C2=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},E2=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function b2(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const A2=new RegExp("^-?(0*)\\d{1,10}$"),w2=-2147483648,D2=2147483647,Ah=function(n){if(A2.test(n)){const e=Number(n);if(e>=w2&&e<=D2)return e}return null},ci=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw It("Exception was thrown by user callback.",t),e},Math.floor(0))}},I2=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Vi=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */let S2=class{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){It(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}};/**
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
 */let T2=class{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(dt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',It(e)}},Xs=class{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}};Xs.OWNER="owner";/**
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
 */const Hc="5",Ax="v",wx="s",Dx="r",Ix="f",Sx=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Tx="ls",Bx="p",kl="ac",kx="websocket",Fx="long_polling";/**
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
 */let Rx=class{constructor(e,t,r,i,s=!1,o="",a=!1,c=!1){this.secure=t,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=rr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&rr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}};function B2(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Nx(n,e,t){K(typeof e=="string","typeof type must == string"),K(typeof t=="object","typeof params must == object");let r;if(e===kx)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Fx)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);B2(n)&&(t.ns=n.namespace);const i=[];return Bt(t,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */let k2=class{constructor(){this.counters_={}}incrementCounter(e,t=1){hn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return xv(this.counters_)}};/**
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
 */const Ra={},Na={};function Uc(n){const e=n.toString();return Ra[e]||(Ra[e]=new k2),Ra[e]}function F2(n,e){const t=n.toString();return Na[t]||(Na[t]=e()),Na[t]}/**
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
 */let R2=class{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ci(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}};/**
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
 */const wh="start",N2="close",P2="pLPCommand",O2="pRTLPCB",Px="id",Ox="pw",Lx="ser",L2="cb",M2="seg",$2="ts",H2="d",U2="dframe",Mx=1870,$x=30,W2=Mx-$x,z2=25e3,q2=3e4;let V2=class Mi{constructor(e,t,r,i,s,o,a){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ds(e),this.stats_=Uc(t),this.urlFn=c=>(this.appCheckToken&&(c[kl]=this.appCheckToken),Nx(t,Fx,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new R2(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(q2)),v2(()=>{if(this.isClosed_)return;this.scriptTagHolder=new G2((...s)=>{const[o,a,c,l,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===wh)this.id=a,this.password=c;else if(o===N2)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[wh]="t",r[Lx]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[L2]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Ax]=Hc,this.transportSessionId&&(r[wx]=this.transportSessionId),this.lastSessionId&&(r[Tx]=this.lastSessionId),this.applicationId&&(r[Bx]=this.applicationId),this.appCheckToken&&(r[kl]=this.appCheckToken),typeof location<"u"&&location.hostname&&Sx.test(location.hostname)&&(r[Dx]=Ix);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Mi.forceAllow_=!0}static forceDisallow(){Mi.forceDisallow_=!0}static isAvailable(){return Mi.forceAllow_?!0:!Mi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!C2()&&!E2()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Ze(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=w_(t),i=Ex(r,W2);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[U2]="t",r[Px]=e,r[Ox]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Ze(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}},G2=class Hx{constructor(e,t,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=x2(),window[P2+this.uniqueCallbackIdentifier]=e,window[O2+this.uniqueCallbackIdentifier]=t,this.myIFrame=Hx.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){dt("frame writing exception"),a.stack&&dt(a.stack),dt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||dt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Px]=this.myID,e[Ox]=this.myPW,e[Lx]=this.currentSerial;let t=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+$x+r.length<=Mx;){const o=this.pendingSegs.shift();r=r+"&"+M2+i+"="+o.seg+"&"+$2+i+"="+o.ts+"&"+H2+i+"="+o.d,i++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(r,Math.floor(z2)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{dt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}};/**
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
 */const j2=16384,K2=45e3;let mo=null;typeof MozWebSocket<"u"?mo=MozWebSocket:typeof WebSocket<"u"&&(mo=WebSocket);let Pr=class Zs{constructor(e,t,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ds(this.connId),this.stats_=Uc(t),this.connURL=Zs.connectionURL_(t,o,a,i,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,i,s){const o={};return o[Ax]=Hc,typeof location<"u"&&location.hostname&&Sx.test(location.hostname)&&(o[Dx]=Ix),t&&(o[wx]=t),r&&(o[Tx]=r),i&&(o[kl]=i),s&&(o[Bx]=s),Nx(e,kx,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,rr.set("previous_websocket_failure",!0);try{let r;Iv(),this.mySock=new mo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Zs.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&mo!==null&&!Zs.forceDisallow_}static previouslyFailed(){return rr.isInMemoryStorage||rr.get("previous_websocket_failure")===!0}markConnectionHealthy(){rr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=rs(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(K(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=Ze(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=Ex(t,j2);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(K2))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}};Pr.responsesRequiredToBeHealthy=2;Pr.healthyTimeout=3e4;/**
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
 */let Ux=class Fl{static get ALL_TRANSPORTS(){return[V2,Pr]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Pr.isAvailable();let r=t&&!Pr.previouslyFailed();if(e.webSocketOnly&&(t||It("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Pr];else{const i=this.transports_=[];for(const s of Fl.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Fl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}};Ux.globalTransportInitialized_=!1;/**
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
 */const Y2=6e4,Q2=5e3,X2=10*1024,Z2=100*1024,Pa="t",Dh="d",J2="s",Ih="r",e4="e",Sh="o",Th="a",Bh="n",kh="p",t4="h";let n4=class{constructor(e,t,r,i,s,o,a,c,l,u){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ds("c:"+this.id+":"),this.transportManager_=new Ux(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Vi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Z2?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>X2?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Pa in e){const t=e[Pa];t===Th?this.upgradeIfSecondaryHealthy_():t===Ih?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Sh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Di("t",e),r=Di("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:kh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Th,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Bh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Di("t",e),r=Di("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Di(Pa,e);if(Dh in e){const r=e[Dh];if(t===t4){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Bh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===J2?this.onConnectionShutdown_(r):t===Ih?this.onReset_(r):t===e4?Bl("Server Error: "+r):t===Sh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Bl("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Hc!==r&&It("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),Vi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Y2))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Vi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Q2))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:kh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(rr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}};/**
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
 */let Wx=class{put(e,t,r,i){}merge(e,t,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}};/**
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
 */let zx=class{constructor(e){this.allowedEvents_=e,this.listeners_={},K(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const i=this.getInitialEvent(e);i&&t.apply(r,i)}off(e,t,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===t&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){K(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}};/**
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
 */let Fh=class qx extends zx{static getInstance(){return new qx}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!bc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return K(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}};/**
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
 */const Rh=32,Nh=768;let Ne=class{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}};function Ae(){return new Ne("")}function _e(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function qn(n){return n.pieces_.length-n.pieceNum_}function Le(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Ne(n.pieces_,e)}function Vx(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function r4(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Gx(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function jx(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Ne(e,0)}function Je(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof Ne)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&t.push(r[i])}return new Ne(t,0)}function fe(n){return n.pieceNum_>=n.pieces_.length}function Ct(n,e){const t=_e(n),r=_e(e);if(t===null)return e;if(t===r)return Ct(Le(n),Le(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Kx(n,e){if(qn(n)!==qn(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function Kt(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(qn(n)>qn(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}let i4=class{constructor(e,t){this.errorPrefix_=t,this.parts_=Gx(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Vo(this.parts_[r]);Yx(this)}};function s4(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Vo(e),Yx(n)}function o4(n){const e=n.parts_.pop();n.byteLength_-=Vo(e),n.parts_.length>0&&(n.byteLength_-=1)}function Yx(n){if(n.byteLength_>Nh)throw new Error(n.errorPrefix_+"has a key path longer than "+Nh+" bytes ("+n.byteLength_+").");if(n.parts_.length>Rh)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Rh+") or object contains a cycle "+Jn(n))}function Jn(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */let a4=class Qx extends zx{static getInstance(){return new Qx}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return K(e==="visible","Unknown event type: "+e),[this.visible_]}};/**
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
 */const Ii=1e3,l4=60*5*1e3,Ph=30*1e3,c4=1.3,u4=3e4,h4="server_kill",Oh=3;let Is=class Js extends Wx{constructor(e,t,r,i,s,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Js.nextPersistentConnectionId_++,this.log_=Ds("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ii,this.maxReconnectDelay_=l4,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");a4.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Fh.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_(Ze(s)),K(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const t=new qo,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),K(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),K(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const c=a.d,l=a.s;Js.warnOnListenWarnings_(c,t),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&hn(e,"w")){const r=Qr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',s=t._path.toString();It(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Nv(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ph)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Rv(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),K(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,t)}sendUnlisten_(e,t,r,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,i){const s={p:t,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,r,i){this.putInternal("p",e,t,r,i)}merge(e,t,r,i){this.putInternal("m",e,t,r,i)}putInternal(e,t,r,i,s){this.initConnection_();const o={p:t,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,s=>{this.log_(t+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ze(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Bl("Unrecognized action received from server: "+Ze(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){K(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ii,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ii,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>u4&&(this.reconnectDelay_=Ii),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*c4)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Js.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,r())},l=function(f){K(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?dt("getToken() completed but was canceled"):(dt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=h&&h.token,a=new n4(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,d=>{It(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(h4)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&It(f),c())}}}interrupt(e){dt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){dt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],yl(this.interruptReasons_)&&(this.reconnectDelay_=Ii,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(s=>$c(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const r=new Ne(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(t),s.delete(t),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,t){dt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Oh&&(this.reconnectDelay_=Ph,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){dt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Oh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+vx.replace(/\./g,"-")]=1,bc()?e["framework.cordova"]=1:B_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Fh.getInstance().currentlyOnline();return yl(this.interruptReasons_)&&e}};Is.nextPersistentConnectionId_=0;Is.nextConnectionId_=0;/**
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
 */let xe=class Xx{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Xx(e,t)}};/**
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
 */let Yo=class{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new xe(dr,e),i=new xe(dr,t);return this.compare(r,i)!==0}minPost(){return xe.MIN}};/**
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
 */let Us,Zx=class extends Yo{static get __EMPTY_NODE(){return Us}static set __EMPTY_NODE(e){Us=e}compare(e,t){return li(e.name,t.name)}isDefinedOn(e){throw ri("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return xe.MIN}maxPost(){return new xe(zn,Us)}makePost(e,t){return K(typeof e=="string","KeyIndex indexValue must always be a string."),new xe(e,Us)}toString(){return".key"}};const Pn=new Zx;/**
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
 */let Ws=class{constructor(e,t,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?r(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Pt=class $i{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??$i.RED,this.left=i??sn.EMPTY_NODE,this.right=s??sn.EMPTY_NODE}copy(e,t,r,i,s){return new $i(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return sn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,i;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return sn.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,$i.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,$i.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Pt.RED=!0;Pt.BLACK=!1;let f4=class{copy(e,t,r,i,s){return this}insert(e,t,r){return new Pt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}},sn=class eo{constructor(e,t=eo.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new eo(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Pt.BLACK,null,null))}remove(e){return new eo(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Pt.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,i=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ws(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ws(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ws(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ws(this.root_,null,this.comparator_,!0,e)}};sn.EMPTY_NODE=new f4;/**
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
 */function d4(n,e){return li(n.name,e.name)}function Wc(n,e){return li(n,e)}/**
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
 */let Rl;function p4(n){Rl=n}const Jx=function(n){return typeof n=="number"?"number:"+bx(n):"string:"+n},e1=function(n){if(n.isLeafNode()){const e=n.val();K(typeof e=="string"||typeof e=="number"||typeof e=="object"&&hn(e,".sv"),"Priority must be a string or number.")}else K(n===Rl||n.isEmpty(),"priority of unexpected type.");K(n===Rl||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Lh,pr=class jt{static set __childrenNodeConstructor(e){Lh=e}static get __childrenNodeConstructor(){return Lh}constructor(e,t=jt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,K(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),e1(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new jt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:jt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return fe(e)?this:_e(e)===".priority"?this.priorityNode_:jt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:jt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=_e(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(K(r!==".priority"||qn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,jt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Le(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Jx(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=bx(this.value_):e+=this.value_,this.lazyHash_=Cx(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===jt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof jt.__childrenNodeConstructor?-1:(K(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,i=jt.VALUE_TYPE_ORDER.indexOf(t),s=jt.VALUE_TYPE_ORDER.indexOf(r);return K(i>=0,"Unknown leaf type: "+t),K(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}};pr.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let t1,n1;function _4(n){t1=n}function x4(n){n1=n}let g4=class extends Yo{compare(e,t){const r=e.node.getPriority(),i=t.node.getPriority(),s=r.compareTo(i);return s===0?li(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return xe.MIN}maxPost(){return new xe(zn,new pr("[PRIORITY-POST]",n1))}makePost(e,t){const r=t1(e);return new xe(t,new pr("[PRIORITY-POST]",r))}toString(){return".priority"}};const ze=new g4;/**
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
 */const m4=Math.log(2);let v4=class{constructor(e){const t=s=>parseInt(Math.log(s)/m4,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}};const vo=function(n,e,t,r){n.sort(e);const i=function(c,l){const u=l-c;let f,h;if(u===0)return null;if(u===1)return f=n[c],h=t?t(f):f,new Pt(h,f.node,Pt.BLACK,null,null);{const d=parseInt(u/2,10)+c,p=i(c,d),g=i(d+1,l);return f=n[d],h=t?t(f):f,new Pt(h,f.node,Pt.BLACK,p,g)}},s=function(c){let l=null,u=null,f=n.length;const h=function(p,g){const m=f-p,y=f;f-=p;const _=i(m+1,y),x=n[m],v=t?t(x):x;d(new Pt(v,x.node,g,null,_))},d=function(p){l?(l.left=p,l=p):(u=p,l=p)};for(let p=0;p<c.count;++p){const g=c.nextBitIsOne(),m=Math.pow(2,c.count-(p+1));g?h(m,Pt.BLACK):(h(m,Pt.BLACK),h(m,Pt.RED))}return u},o=new v4(n.length),a=s(o);return new sn(r||e,a)};/**
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
 */let Oa;const Si={};let yo=class Hi{static get Default(){return K(ze,"ChildrenNode.ts has not been loaded"),Oa=Oa||new Hi({".priority":Si},{".priority":ze}),Oa}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Qr(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof sn?t:null}hasIndex(e){return hn(this.indexSet_,e.toString())}addIndex(e,t){K(e!==Pn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=t.getIterator(xe.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=vo(r,e.getCompare()):a=Si;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new Hi(u,l)}addToIndexes(e,t){const r=co(this.indexes_,(i,s)=>{const o=Qr(this.indexSet_,s);if(K(o,"Missing index implementation for "+s),i===Si)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(xe.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),vo(a,o.getCompare())}else return Si;else{const a=t.get(e.name);let c=i;return a&&(c=c.remove(new xe(e.name,a))),c.insert(e,e.node)}});return new Hi(r,this.indexSet_)}removeFromIndexes(e,t){const r=co(this.indexes_,i=>{if(i===Si)return i;{const s=t.get(e.name);return s?i.remove(new xe(e.name,s)):i}});return new Hi(r,this.indexSet_)}};/**
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
 */let Ti,ue=class Rr{static get EMPTY_NODE(){return Ti||(Ti=new Rr(new sn(Wc),null,yo.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&e1(this.priorityNode_),this.children_.isEmpty()&&K(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ti}updatePriority(e){return this.children_.isEmpty()?this:new Rr(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ti:t}}getChild(e){const t=_e(e);return t===null?this:this.getImmediateChild(t).getChild(Le(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(K(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new xe(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ti:this.priorityNode_;return new Rr(i,o,s)}}updateChild(e,t){const r=_e(e);if(r===null)return t;{K(_e(e)!==".priority"||qn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Le(e),t);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,i=0,s=!0;if(this.forEachChild(ze,(o,a)=>{t[o]=a.val(e),r++,s&&Rr.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Jx(this.getPriority().val())+":"),this.forEachChild(ze,(t,r)=>{const i=r.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Cx(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new xe(e,t));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new xe(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new xe(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,xe.Wrap);let s=i.peek();for(;s!=null&&t.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,xe.Wrap);let s=i.peek();for(;s!=null&&t.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ss?-1:0}withIndex(e){if(e===Pn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Rr(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Pn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(ze),i=t.getIterator(ze);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Pn?null:this.indexMap_.get(e.toString())}};ue.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;let y4=class extends ue{constructor(){super(new sn(Wc),ue.EMPTY_NODE,yo.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ue.EMPTY_NODE}isEmpty(){return!1}};const Ss=new y4;Object.defineProperties(xe,{MIN:{value:new xe(dr,ue.EMPTY_NODE)},MAX:{value:new xe(zn,Ss)}});Zx.__EMPTY_NODE=ue.EMPTY_NODE;pr.__childrenNodeConstructor=ue;p4(Ss);x4(Ss);/**
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
 */const C4=!0;function nt(n,e=null){if(n===null)return ue.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),K(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new pr(t,nt(e))}if(!(n instanceof Array)&&C4){const t=[];let r=!1;if(Bt(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=nt(a);c.isEmpty()||(r=r||!c.getPriority().isEmpty(),t.push(new xe(o,c)))}}),t.length===0)return ue.EMPTY_NODE;const s=vo(t,d4,o=>o.name,Wc);if(r){const o=vo(t,ze.getCompare());return new ue(s,nt(e),new yo({".priority":o},{".priority":ze}))}else return new ue(s,nt(e),yo.Default)}else{let t=ue.EMPTY_NODE;return Bt(n,(r,i)=>{if(hn(n,r)&&r.substring(0,1)!=="."){const s=nt(i);(s.isLeafNode()||!s.isEmpty())&&(t=t.updateImmediateChild(r,s))}}),t.updatePriority(nt(e))}}_4(nt);/**
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
 */let r1=class extends Yo{constructor(e){super(),this.indexPath_=e,K(!fe(e)&&_e(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),i=this.extractChild(t.node),s=r.compareTo(i);return s===0?li(e.name,t.name):s}makePost(e,t){const r=nt(e),i=ue.EMPTY_NODE.updateChild(this.indexPath_,r);return new xe(t,i)}maxPost(){const e=ue.EMPTY_NODE.updateChild(this.indexPath_,Ss);return new xe(zn,e)}toString(){return Gx(this.indexPath_,0).join("/")}};/**
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
 */let E4=class extends Yo{compare(e,t){const r=e.node.compareTo(t.node);return r===0?li(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return xe.MIN}maxPost(){return xe.MAX}makePost(e,t){const r=nt(e);return new xe(t,r)}toString(){return".value"}};const i1=new E4;/**
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
 */function s1(n){return{type:"value",snapshotNode:n}}function Zr(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function os(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function as(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function b4(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class zc{constructor(e){this.index_=e}updateChild(e,t,r,i,s,o){K(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(t)?o.trackChildChange(os(t,a)):K(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Zr(t,r)):o.trackChildChange(as(t,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ze,(i,s)=>{t.hasChild(i)||r.trackChildChange(os(i,s))}),t.isLeafNode()||t.forEachChild(ze,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(as(i,s,o))}else r.trackChildChange(Zr(i,s))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?ue.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ls{constructor(e){this.indexedFilter_=new zc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ls.getStartPost_(e),this.endPost_=ls.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,i,s,o){return this.matches(new xe(t,r))||(r=ue.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,i,s,o)}updateFullNode(e,t,r){t.isLeafNode()&&(t=ue.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(ue.EMPTY_NODE);const s=this;return t.forEachChild(ze,(o,a)=>{s.matches(new xe(o,a))||(i=i.updateImmediateChild(o,ue.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class A4{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ls(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,i,s,o){return this.rangedFilter_.matches(new xe(t,r))||(r=ue.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,i,s,o):this.fullLimitUpdateChild_(e,t,r,s,o)}updateFullNode(e,t,r){let i;if(t.isLeafNode()||t.isEmpty())i=ue.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=ue.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(ue.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,ue.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(h,d)=>f(d,h)}else o=this.index_.getCompare();const a=e;K(a.numChildren()===this.limit_,"");const c=new xe(t,r),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(t)){const f=a.getImmediateChild(t);let h=i.getChildAfterChild(this.index_,l,this.reverse_);for(;h!=null&&(h.name===t||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const d=h==null?1:o(h,c);if(u&&!r.isEmpty()&&d>=0)return s!=null&&s.trackChildChange(as(t,r,f)),a.updateImmediateChild(t,r);{s!=null&&s.trackChildChange(os(t,f));const g=a.updateImmediateChild(t,ue.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Zr(h.name,h.node)),g.updateImmediateChild(h.name,h.node)):g}}else return r.isEmpty()?e:u&&o(l,c)>=0?(s!=null&&(s.trackChildChange(os(l.name,l.node)),s.trackChildChange(Zr(t,r))),a.updateImmediateChild(t,r).updateImmediateChild(l.name,ue.EMPTY_NODE)):e}}/**
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
 */let w4=class o1{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ze}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return K(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return K(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:dr}hasEnd(){return this.endSet_}getIndexEndValue(){return K(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return K(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:zn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return K(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ze}copy(){const e=new o1;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}};function D4(n){return n.loadsAllData()?new zc(n.getIndex()):n.hasLimit()?new A4(n):new ls(n)}function I4(n,e){const t=n.copy();return t.index_=e,t}function Mh(n){const e={};if(n.isDefault())return e;let t;if(n.index_===ze?t="$priority":n.index_===i1?t="$value":n.index_===Pn?t="$key":(K(n.index_ instanceof r1,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Ze(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=Ze(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+Ze(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=Ze(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+Ze(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function $h(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==ze&&(e.i=n.index_.toString()),e}/**
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
 */let S4=class Nl extends Wx{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(K(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ds("p:rest:"),this.listens_={}}listen(e,t,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Nl.getListenId_(e,r),a={};this.listens_[o]=a;const c=Mh(e._queryParams);this.restRequest_(s+".json",c,(l,u)=>{let f=u;if(l===404&&(f=null,l=null),l===null&&this.onDataUpdate_(s,f,!1,r),Qr(this.listens_,o)===a){let h;l?l===401?h="permission_denied":h="rest_error:"+l:h="ok",i(h,null)}})}unlisten(e,t){const r=Nl.getListenId_(e,t);delete this.listens_[r]}get(e){const t=Mh(e._queryParams),r=e._path.toString(),i=new qo;return this.restRequest_(r+".json",t,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(t.auth=i.accessToken),s&&s.token&&(t.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+si(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=rs(a.responseText)}catch{It("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,c)}else a.status!==401&&a.status!==404&&It("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}};/**
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
 */let T4=class{constructor(){this.rootNode_=ue.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}};/**
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
 */function Co(){return{value:null,children:new Map}}function a1(n,e,t){if(fe(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=_e(e);n.children.has(r)||n.children.set(r,Co());const i=n.children.get(r);e=Le(e),a1(i,e,t)}}function Pl(n,e,t){n.value!==null?t(e,n.value):B4(n,(r,i)=>{const s=new Ne(e.toString()+"/"+r);Pl(i,s,t)})}function B4(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
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
 */let k4=class{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Bt(this.last_,(r,i)=>{t[r]=t[r]-i}),this.last_=e,t}};/**
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
 */const Hh=10*1e3,F4=30*1e3,R4=5*60*1e3;let N4=class{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new k4(e);const r=Hh+(F4-Hh)*Math.random();Vi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;Bt(e,(i,s)=>{s>0&&hn(this.statsToReport_,i)&&(t[i]=s,r=!0)}),r&&this.server_.reportStats(t),Vi(this.reportStats_.bind(this),Math.floor(Math.random()*2*R4))}};/**
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
 */var Yt;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Yt||(Yt={}));function l1(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function qc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Vc(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */let P4=class Ol{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=Yt.ACK_USER_WRITE,this.source=l1()}operationForChild(e){if(fe(this.path)){if(this.affectedTree.value!=null)return K(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Ne(e));return new Ol(Ae(),t,this.revert)}}else return K(_e(this.path)===e,"operationForChild called for unrelated child."),new Ol(Le(this.path),this.affectedTree,this.revert)}};/**
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
 */class cs{constructor(e,t){this.source=e,this.path=t,this.type=Yt.LISTEN_COMPLETE}operationForChild(e){return fe(this.path)?new cs(this.source,Ae()):new cs(this.source,Le(this.path))}}/**
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
 */let Qo=class Ll{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=Yt.OVERWRITE}operationForChild(e){return fe(this.path)?new Ll(this.source,Ae(),this.snap.getImmediateChild(e)):new Ll(this.source,Le(this.path),this.snap)}};/**
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
 */let c1=class Ml{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=Yt.MERGE}operationForChild(e){if(fe(this.path)){const t=this.children.subtree(new Ne(e));return t.isEmpty()?null:t.value?new Qo(this.source,Ae(),t.value):new Ml(this.source,Ae(),t)}else return K(_e(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ml(this.source,Le(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}};/**
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
 */let Vn=class{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(fe(e))return this.isFullyInitialized()&&!this.filtered_;const t=_e(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}};/**
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
 */class O4{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function L4(n,e,t,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(b4(o.childName,o.snapshotNode))}),Bi(n,i,"child_removed",e,r,t),Bi(n,i,"child_added",e,r,t),Bi(n,i,"child_moved",s,r,t),Bi(n,i,"child_changed",e,r,t),Bi(n,i,"value",e,r,t),i}function Bi(n,e,t,r,i,s){const o=r.filter(a=>a.type===t);o.sort((a,c)=>$4(n,a,c)),o.forEach(a=>{const c=M4(n,a,s);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function M4(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function $4(n,e,t){if(e.childName==null||t.childName==null)throw ri("Should only compare child_ events.");const r=new xe(e.childName,e.snapshotNode),i=new xe(t.childName,t.snapshotNode);return n.index_.compare(r,i)}/**
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
 */function Xo(n,e){return{eventCache:n,serverCache:e}}function Gi(n,e,t,r){return Xo(new Vn(e,t,r),n.serverCache)}function u1(n,e,t,r){return Xo(n.eventCache,new Vn(e,t,r))}function Eo(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function _r(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let La;const H4=()=>(La||(La=new sn(y2)),La);let Wt=class Nt{static fromObject(e){let t=new Nt(null);return Bt(e,(r,i)=>{t=t.set(new Ne(r),i)}),t}constructor(e,t=H4()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Ae(),value:this.value};if(fe(e))return null;{const r=_e(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Le(e),t);return s!=null?{path:Je(new Ne(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(fe(e))return this;{const t=_e(e),r=this.children.get(t);return r!==null?r.subtree(Le(e)):new Nt(null)}}set(e,t){if(fe(e))return new Nt(t,this.children);{const r=_e(e),s=(this.children.get(r)||new Nt(null)).set(Le(e),t),o=this.children.insert(r,s);return new Nt(this.value,o)}}remove(e){if(fe(e))return this.children.isEmpty()?new Nt(null):new Nt(null,this.children);{const t=_e(e),r=this.children.get(t);if(r){const i=r.remove(Le(e));let s;return i.isEmpty()?s=this.children.remove(t):s=this.children.insert(t,i),this.value===null&&s.isEmpty()?new Nt(null):new Nt(this.value,s)}else return this}}get(e){if(fe(e))return this.value;{const t=_e(e),r=this.children.get(t);return r?r.get(Le(e)):null}}setTree(e,t){if(fe(e))return t;{const r=_e(e),s=(this.children.get(r)||new Nt(null)).setTree(Le(e),t);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Nt(this.value,o)}}fold(e){return this.fold_(Ae(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Je(e,i),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,Ae(),t)}findOnPath_(e,t,r){const i=this.value?r(t,this.value):!1;if(i)return i;if(fe(e))return null;{const s=_e(e),o=this.children.get(s);return o?o.findOnPath_(Le(e),Je(t,s),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ae(),t)}foreachOnPath_(e,t,r){if(fe(e))return this;{this.value&&r(t,this.value);const i=_e(e),s=this.children.get(i);return s?s.foreachOnPath_(Le(e),Je(t,i),r):new Nt(null)}}foreach(e){this.foreach_(Ae(),e)}foreach_(e,t){this.children.inorderTraversal((r,i)=>{i.foreach_(Je(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}};/**
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
 */let mn=class h1{constructor(e){this.writeTree_=e}static empty(){return new h1(new Wt(null))}};function ji(n,e,t){if(fe(e))return new mn(new Wt(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ct(i,e);return s=s.updateChild(o,t),new mn(n.writeTree_.set(i,s))}else{const i=new Wt(t),s=n.writeTree_.setTree(e,i);return new mn(s)}}}function Uh(n,e,t){let r=n;return Bt(t,(i,s)=>{r=ji(r,Je(e,i),s)}),r}function Wh(n,e){if(fe(e))return mn.empty();{const t=n.writeTree_.setTree(e,new Wt(null));return new mn(t)}}function $l(n,e){return Er(n,e)!=null}function Er(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Ct(t.path,e)):null}function zh(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(ze,(r,i)=>{e.push(new xe(r,i))}):n.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new xe(r,i.value))}),e}function On(n,e){if(fe(e))return n;{const t=Er(n,e);return t!=null?new mn(new Wt(t)):new mn(n.writeTree_.subtree(e))}}function Hl(n){return n.writeTree_.isEmpty()}function Jr(n,e){return f1(Ae(),n.writeTree_,e)}function f1(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(K(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):t=f1(Je(n,i),s,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(Je(n,".priority"),r)),t}}/**
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
 */function Zo(n,e){return x1(e,n)}function U4(n,e,t,r,i){K(r>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:i}),i&&(n.visibleWrites=ji(n.visibleWrites,e,t)),n.lastWriteId=r}function W4(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function z4(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);K(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let i=r.visible,s=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&q4(a,r.path)?i=!1:Kt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return V4(n),!0;if(r.snap)n.visibleWrites=Wh(n.visibleWrites,r.path);else{const a=r.children;Bt(a,c=>{n.visibleWrites=Wh(n.visibleWrites,Je(r.path,c))})}return!0}else return!1}function q4(n,e){if(n.snap)return Kt(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Kt(Je(n.path,t),e))return!0;return!1}function V4(n){n.visibleWrites=d1(n.allWrites,G4,Ae()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function G4(n){return n.visible}function d1(n,e,t){let r=mn.empty();for(let i=0;i<n.length;++i){const s=n[i];if(e(s)){const o=s.path;let a;if(s.snap)Kt(t,o)?(a=Ct(t,o),r=ji(r,a,s.snap)):Kt(o,t)&&(a=Ct(o,t),r=ji(r,Ae(),s.snap.getChild(a)));else if(s.children){if(Kt(t,o))a=Ct(t,o),r=Uh(r,a,s.children);else if(Kt(o,t))if(a=Ct(o,t),fe(a))r=Uh(r,Ae(),s.children);else{const c=Qr(s.children,_e(a));if(c){const l=c.getChild(Le(a));r=ji(r,Ae(),l)}}}else throw ri("WriteRecord should have .snap or .children")}}return r}function p1(n,e,t,r,i){if(!r&&!i){const s=Er(n.visibleWrites,e);if(s!=null)return s;{const o=On(n.visibleWrites,e);if(Hl(o))return t;if(t==null&&!$l(o,Ae()))return null;{const a=t||ue.EMPTY_NODE;return Jr(o,a)}}}else{const s=On(n.visibleWrites,e);if(!i&&Hl(s))return t;if(!i&&t==null&&!$l(s,Ae()))return null;{const o=function(l){return(l.visible||i)&&(!r||!~r.indexOf(l.writeId))&&(Kt(l.path,e)||Kt(e,l.path))},a=d1(n.allWrites,o,e),c=t||ue.EMPTY_NODE;return Jr(a,c)}}}function j4(n,e,t){let r=ue.EMPTY_NODE;const i=Er(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ze,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(t){const s=On(n.visibleWrites,e);return t.forEachChild(ze,(o,a)=>{const c=Jr(On(s,new Ne(o)),a);r=r.updateImmediateChild(o,c)}),zh(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=On(n.visibleWrites,e);return zh(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function K4(n,e,t,r,i){K(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Je(e,t);if($l(n.visibleWrites,s))return null;{const o=On(n.visibleWrites,s);return Hl(o)?i.getChild(t):Jr(o,i.getChild(t))}}function Y4(n,e,t,r){const i=Je(e,t),s=Er(n.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(t)){const o=On(n.visibleWrites,i);return Jr(o,r.getNode().getImmediateChild(t))}else return null}function Q4(n,e){return Er(n.visibleWrites,e)}function X4(n,e,t,r,i,s,o){let a;const c=On(n.visibleWrites,e),l=Er(c,Ae());if(l!=null)a=l;else if(t!=null)a=Jr(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],f=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let d=h.getNext();for(;d&&u.length<i;)f(d,r)!==0&&u.push(d),d=h.getNext();return u}else return[]}function Z4(){return{visibleWrites:mn.empty(),allWrites:[],lastWriteId:-1}}function bo(n,e,t,r){return p1(n.writeTree,n.treePath,e,t,r)}function Gc(n,e){return j4(n.writeTree,n.treePath,e)}function qh(n,e,t,r){return K4(n.writeTree,n.treePath,e,t,r)}function Ao(n,e){return Q4(n.writeTree,Je(n.treePath,e))}function J4(n,e,t,r,i,s){return X4(n.writeTree,n.treePath,e,t,r,i,s)}function jc(n,e,t){return Y4(n.writeTree,n.treePath,e,t)}function _1(n,e){return x1(Je(n.treePath,e),n.writeTree)}function x1(n,e){return{treePath:n,writeTree:e}}/**
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
 */let e8=class{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;K(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),K(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(t==="child_added"&&s==="child_removed")this.changeMap.set(r,as(r,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&s==="child_changed")this.changeMap.set(r,os(r,i.oldSnap));else if(t==="child_changed"&&s==="child_added")this.changeMap.set(r,Zr(r,e.snapshotNode));else if(t==="child_changed"&&s==="child_changed")this.changeMap.set(r,as(r,e.snapshotNode,i.oldSnap));else throw ri("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}};/**
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
 */let t8=class{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}};const g1=new t8;let Kc=class{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Vn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return jc(this.writes_,e,r)}}getChildAfterChild(e,t,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:_r(this.viewCache_),s=J4(this.writes_,i,t,1,r,e);return s.length===0?null:s[0]}};/**
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
 */function n8(n){return{filter:n}}function r8(n,e){K(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),K(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function i8(n,e,t,r,i){const s=new e8;let o,a;if(t.type===Yt.OVERWRITE){const l=t;l.source.fromUser?o=Ul(n,e,l.path,l.snap,r,i,s):(K(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!fe(l.path),o=wo(n,e,l.path,l.snap,r,i,a,s))}else if(t.type===Yt.MERGE){const l=t;l.source.fromUser?o=o8(n,e,l.path,l.children,r,i,s):(K(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=Wl(n,e,l.path,l.children,r,i,a,s))}else if(t.type===Yt.ACK_USER_WRITE){const l=t;l.revert?o=c8(n,e,l.path,r,i,s):o=a8(n,e,l.path,l.affectedTree,r,i,s)}else if(t.type===Yt.LISTEN_COMPLETE)o=l8(n,e,t.path,r,s);else throw ri("Unknown operation type: "+t.type);const c=s.getChanges();return s8(e,o,c),{viewCache:o,changes:c}}function s8(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Eo(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&t.push(s1(Eo(e)))}}function m1(n,e,t,r,i,s){const o=e.eventCache;if(Ao(r,t)!=null)return e;{let a,c;if(fe(t))if(K(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=_r(e),u=l instanceof ue?l:ue.EMPTY_NODE,f=Gc(r,u);a=n.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const l=bo(r,_r(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,s)}else{const l=_e(t);if(l===".priority"){K(qn(t)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const f=qh(r,t,u,c);f!=null?a=n.filter.updatePriority(u,f):a=o.getNode()}else{const u=Le(t);let f;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const h=qh(r,t,o.getNode(),c);h!=null?f=o.getNode().getImmediateChild(l).updateChild(u,h):f=o.getNode().getImmediateChild(l)}else f=jc(r,l,e.serverCache);f!=null?a=n.filter.updateChild(o.getNode(),l,f,u,i,s):a=o.getNode()}}return Gi(e,a,o.isFullyInitialized()||fe(t),n.filter.filtersNodes())}}function wo(n,e,t,r,i,s,o,a){const c=e.serverCache;let l;const u=o?n.filter:n.filter.getIndexedFilter();if(fe(t))l=u.updateFullNode(c.getNode(),r,null);else if(u.filtersNodes()&&!c.isFiltered()){const d=c.getNode().updateChild(t,r);l=u.updateFullNode(c.getNode(),d,null)}else{const d=_e(t);if(!c.isCompleteForPath(t)&&qn(t)>1)return e;const p=Le(t),m=c.getNode().getImmediateChild(d).updateChild(p,r);d===".priority"?l=u.updatePriority(c.getNode(),m):l=u.updateChild(c.getNode(),d,m,p,g1,null)}const f=u1(e,l,c.isFullyInitialized()||fe(t),u.filtersNodes()),h=new Kc(i,f,s);return m1(n,f,t,i,h,a)}function Ul(n,e,t,r,i,s,o){const a=e.eventCache;let c,l;const u=new Kc(i,e,s);if(fe(t))l=n.filter.updateFullNode(e.eventCache.getNode(),r,o),c=Gi(e,l,!0,n.filter.filtersNodes());else{const f=_e(t);if(f===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),r),c=Gi(e,l,a.isFullyInitialized(),a.isFiltered());else{const h=Le(t),d=a.getNode().getImmediateChild(f);let p;if(fe(h))p=r;else{const g=u.getCompleteChild(f);g!=null?Vx(h)===".priority"&&g.getChild(jx(h)).isEmpty()?p=g:p=g.updateChild(h,r):p=ue.EMPTY_NODE}if(d.equals(p))c=e;else{const g=n.filter.updateChild(a.getNode(),f,p,h,u,o);c=Gi(e,g,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function Vh(n,e){return n.eventCache.isCompleteForChild(e)}function o8(n,e,t,r,i,s,o){let a=e;return r.foreach((c,l)=>{const u=Je(t,c);Vh(e,_e(u))&&(a=Ul(n,a,u,l,i,s,o))}),r.foreach((c,l)=>{const u=Je(t,c);Vh(e,_e(u))||(a=Ul(n,a,u,l,i,s,o))}),a}function Gh(n,e,t){return t.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Wl(n,e,t,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;fe(t)?l=r:l=new Wt(null).setTree(t,r);const u=e.serverCache.getNode();return l.children.inorderTraversal((f,h)=>{if(u.hasChild(f)){const d=e.serverCache.getNode().getImmediateChild(f),p=Gh(n,d,h);c=wo(n,c,new Ne(f),p,i,s,o,a)}}),l.children.inorderTraversal((f,h)=>{const d=!e.serverCache.isCompleteForChild(f)&&h.value===null;if(!u.hasChild(f)&&!d){const p=e.serverCache.getNode().getImmediateChild(f),g=Gh(n,p,h);c=wo(n,c,new Ne(f),g,i,s,o,a)}}),c}function a8(n,e,t,r,i,s,o){if(Ao(i,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(r.value!=null){if(fe(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return wo(n,e,t,c.getNode().getChild(t),i,s,a,o);if(fe(t)){let l=new Wt(null);return c.getNode().forEachChild(Pn,(u,f)=>{l=l.set(new Ne(u),f)}),Wl(n,e,t,l,i,s,a,o)}else return e}else{let l=new Wt(null);return r.foreach((u,f)=>{const h=Je(t,u);c.isCompleteForPath(h)&&(l=l.set(u,c.getNode().getChild(h)))}),Wl(n,e,t,l,i,s,a,o)}}function l8(n,e,t,r,i){const s=e.serverCache,o=u1(e,s.getNode(),s.isFullyInitialized()||fe(t),s.isFiltered());return m1(n,o,t,r,g1,i)}function c8(n,e,t,r,i,s){let o;if(Ao(r,t)!=null)return e;{const a=new Kc(r,e,i),c=e.eventCache.getNode();let l;if(fe(t)||_e(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=bo(r,_r(e));else{const f=e.serverCache.getNode();K(f instanceof ue,"serverChildren would be complete if leaf node"),u=Gc(r,f)}u=u,l=n.filter.updateFullNode(c,u,s)}else{const u=_e(t);let f=jc(r,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=c.getImmediateChild(u)),f!=null?l=n.filter.updateChild(c,u,f,Le(t),a,s):e.eventCache.getNode().hasChild(u)?l=n.filter.updateChild(c,u,ue.EMPTY_NODE,Le(t),a,s):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=bo(r,_r(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,s)))}return o=e.serverCache.isFullyInitialized()||Ao(r,Ae())!=null,Gi(e,l,o,n.filter.filtersNodes())}}/**
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
 */class u8{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new zc(r.getIndex()),s=D4(r);this.processor_=n8(s);const o=t.serverCache,a=t.eventCache,c=i.updateFullNode(ue.EMPTY_NODE,o.getNode(),null),l=s.updateFullNode(ue.EMPTY_NODE,a.getNode(),null),u=new Vn(c,o.isFullyInitialized(),i.filtersNodes()),f=new Vn(l,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Xo(f,u),this.eventGenerator_=new O4(this.query_)}get query(){return this.query_}}function h8(n){return n.viewCache_.serverCache.getNode()}function f8(n){return Eo(n.viewCache_)}function d8(n,e){const t=_r(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!fe(e)&&!t.getImmediateChild(_e(e)).isEmpty())?t.getChild(e):null}function jh(n){return n.eventRegistrations_.length===0}function p8(n,e){n.eventRegistrations_.push(e)}function Kh(n,e,t){const r=[];if(t){K(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(t,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<n.eventRegistrations_.length;++s){const o=n.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(s+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return r}function Yh(n,e,t,r){e.type===Yt.MERGE&&e.source.queryId!==null&&(K(_r(n.viewCache_),"We should always have a full cache before handling merges"),K(Eo(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,s=i8(n.processor_,i,e,t,r);return r8(n.processor_,s.viewCache),K(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=s.viewCache,v1(n,s.changes,s.viewCache.eventCache.getNode(),null)}function _8(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(ze,(s,o)=>{r.push(Zr(s,o))}),t.isFullyInitialized()&&r.push(s1(t.getNode())),v1(n,r,t.getNode(),e)}function v1(n,e,t,r){const i=r?[r]:n.eventRegistrations_;return L4(n.eventGenerator_,e,t,i)}/**
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
 */let Do;class y1{constructor(){this.views=new Map}}function x8(n){K(!Do,"__referenceConstructor has already been defined"),Do=n}function g8(){return K(Do,"Reference.ts has not been loaded"),Do}function m8(n){return n.views.size===0}function Yc(n,e,t,r){const i=e.source.queryId;if(i!==null){const s=n.views.get(i);return K(s!=null,"SyncTree gave us an op for an invalid query."),Yh(s,e,t,r)}else{let s=[];for(const o of n.views.values())s=s.concat(Yh(o,e,t,r));return s}}function C1(n,e,t,r,i){const s=e._queryIdentifier,o=n.views.get(s);if(!o){let a=bo(t,i?r:null),c=!1;a?c=!0:r instanceof ue?(a=Gc(t,r),c=!1):(a=ue.EMPTY_NODE,c=!1);const l=Xo(new Vn(a,c,!1),new Vn(r,i,!1));return new u8(e,l)}return o}function v8(n,e,t,r,i,s){const o=C1(n,e,r,i,s);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),p8(o,t),_8(o,t)}function y8(n,e,t,r){const i=e._queryIdentifier,s=[];let o=[];const a=Gn(n);if(i==="default")for(const[c,l]of n.views.entries())o=o.concat(Kh(l,t,r)),jh(l)&&(n.views.delete(c),l.query._queryParams.loadsAllData()||s.push(l.query));else{const c=n.views.get(i);c&&(o=o.concat(Kh(c,t,r)),jh(c)&&(n.views.delete(i),c.query._queryParams.loadsAllData()||s.push(c.query)))}return a&&!Gn(n)&&s.push(new(g8())(e._repo,e._path)),{removed:s,events:o}}function E1(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ln(n,e){let t=null;for(const r of n.views.values())t=t||d8(r,e);return t}function b1(n,e){if(e._queryParams.loadsAllData())return Jo(n);{const r=e._queryIdentifier;return n.views.get(r)}}function A1(n,e){return b1(n,e)!=null}function Gn(n){return Jo(n)!=null}function Jo(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Io;function C8(n){K(!Io,"__referenceConstructor has already been defined"),Io=n}function E8(){return K(Io,"Reference.ts has not been loaded"),Io}let b8=1,Qh=class{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Wt(null),this.pendingWriteTree_=Z4(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}};function w1(n,e,t,r,i){return U4(n.pendingWriteTree_,e,t,r,i),i?Bs(n,new Qo(l1(),e,t)):[]}function ir(n,e,t=!1){const r=W4(n.pendingWriteTree_,e);if(z4(n.pendingWriteTree_,e)){let s=new Wt(null);return r.snap!=null?s=s.set(Ae(),!0):Bt(r.children,o=>{s=s.set(new Ne(o),!0)}),Bs(n,new P4(r.path,s,t))}else return[]}function Ts(n,e,t){return Bs(n,new Qo(qc(),e,t))}function A8(n,e,t){const r=Wt.fromObject(t);return Bs(n,new c1(qc(),e,r))}function w8(n,e){return Bs(n,new cs(qc(),e))}function D8(n,e,t){const r=Xc(n,t);if(r){const i=Zc(r),s=i.path,o=i.queryId,a=Ct(s,e),c=new cs(Vc(o),a);return Jc(n,s,c)}else return[]}function D1(n,e,t,r,i=!1){const s=e._path,o=n.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||A1(o,e))){const c=y8(o,e,t,r);m8(o)&&(n.syncPointTree_=n.syncPointTree_.remove(s));const l=c.removed;if(a=c.events,!i){const u=l.findIndex(h=>h._queryParams.loadsAllData())!==-1,f=n.syncPointTree_.findOnPath(s,(h,d)=>Gn(d));if(u&&!f){const h=n.syncPointTree_.subtree(s);if(!h.isEmpty()){const d=B8(h);for(let p=0;p<d.length;++p){const g=d[p],m=g.query,y=B1(n,g);n.listenProvider_.startListening(Ki(m),us(n,m),y.hashFn,y.onComplete)}}}!f&&l.length>0&&!r&&(u?n.listenProvider_.stopListening(Ki(e),null):l.forEach(h=>{const d=n.queryToTagMap.get(ea(h));n.listenProvider_.stopListening(Ki(h),d)}))}k8(n,l)}return a}function I1(n,e,t,r){const i=Xc(n,r);if(i!=null){const s=Zc(i),o=s.path,a=s.queryId,c=Ct(o,e),l=new Qo(Vc(a),c,t);return Jc(n,o,l)}else return[]}function I8(n,e,t,r){const i=Xc(n,r);if(i){const s=Zc(i),o=s.path,a=s.queryId,c=Ct(o,e),l=Wt.fromObject(t),u=new c1(Vc(a),c,l);return Jc(n,o,u)}else return[]}function S8(n,e,t,r=!1){const i=e._path;let s=null,o=!1;n.syncPointTree_.foreachOnPath(i,(h,d)=>{const p=Ct(h,i);s=s||Ln(d,p),o=o||Gn(d)});let a=n.syncPointTree_.get(i);a?(o=o||Gn(a),s=s||Ln(a,Ae())):(a=new y1,n.syncPointTree_=n.syncPointTree_.set(i,a));let c;s!=null?c=!0:(c=!1,s=ue.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((d,p)=>{const g=Ln(p,Ae());g&&(s=s.updateImmediateChild(d,g))}));const l=A1(a,e);if(!l&&!e._queryParams.loadsAllData()){const h=ea(e);K(!n.queryToTagMap.has(h),"View does not exist, but we have a tag");const d=F8();n.queryToTagMap.set(h,d),n.tagToQueryMap.set(d,h)}const u=Zo(n.pendingWriteTree_,i);let f=v8(a,e,t,u,s,c);if(!l&&!o&&!r){const h=b1(a,e);f=f.concat(R8(n,e,h))}return f}function Qc(n,e,t){const i=n.pendingWriteTree_,s=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=Ct(o,e),l=Ln(a,c);if(l)return l});return p1(i,e,s,t,!0)}function T8(n,e){const t=e._path;let r=null;n.syncPointTree_.foreachOnPath(t,(l,u)=>{const f=Ct(l,t);r=r||Ln(u,f)});let i=n.syncPointTree_.get(t);i?r=r||Ln(i,Ae()):(i=new y1,n.syncPointTree_=n.syncPointTree_.set(t,i));const s=r!=null,o=s?new Vn(r,!0,!1):null,a=Zo(n.pendingWriteTree_,e._path),c=C1(i,e,a,s?o.getNode():ue.EMPTY_NODE,s);return f8(c)}function Bs(n,e){return S1(e,n.syncPointTree_,null,Zo(n.pendingWriteTree_,Ae()))}function S1(n,e,t,r){if(fe(n.path))return T1(n,e,t,r);{const i=e.get(Ae());t==null&&i!=null&&(t=Ln(i,Ae()));let s=[];const o=_e(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const l=t?t.getImmediateChild(o):null,u=_1(r,o);s=s.concat(S1(a,c,l,u))}return i&&(s=s.concat(Yc(i,n,r,t))),s}}function T1(n,e,t,r){const i=e.get(Ae());t==null&&i!=null&&(t=Ln(i,Ae()));let s=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,l=_1(r,o),u=n.operationForChild(o);u&&(s=s.concat(T1(u,a,c,l)))}),i&&(s=s.concat(Yc(i,n,r,t))),s}function B1(n,e){const t=e.query,r=us(n,t);return{hashFn:()=>(h8(e)||ue.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?D8(n,t._path,r):w8(n,t._path);{const s=b2(i,t);return D1(n,t,null,s)}}}}function us(n,e){const t=ea(e);return n.queryToTagMap.get(t)}function ea(n){return n._path.toString()+"$"+n._queryIdentifier}function Xc(n,e){return n.tagToQueryMap.get(e)}function Zc(n){const e=n.indexOf("$");return K(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Ne(n.substr(0,e))}}function Jc(n,e,t){const r=n.syncPointTree_.get(e);K(r,"Missing sync point for query tag that we're tracking");const i=Zo(n.pendingWriteTree_,e);return Yc(r,t,i,null)}function B8(n){return n.fold((e,t,r)=>{if(t&&Gn(t))return[Jo(t)];{let i=[];return t&&(i=E1(t)),Bt(r,(s,o)=>{i=i.concat(o)}),i}})}function Ki(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(E8())(n._repo,n._path):n}function k8(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const i=ea(r),s=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(s)}}}function F8(){return b8++}function R8(n,e,t){const r=e._path,i=us(n,e),s=B1(n,t),o=n.listenProvider_.startListening(Ki(e),i,s.hashFn,s.onComplete),a=n.syncPointTree_.subtree(r);if(i)K(!Gn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,u,f)=>{if(!fe(l)&&u&&Gn(u))return[Jo(u).query];{let h=[];return u&&(h=h.concat(E1(u).map(d=>d.query))),Bt(f,(d,p)=>{h=h.concat(p)}),h}});for(let l=0;l<c.length;++l){const u=c[l];n.listenProvider_.stopListening(Ki(u),us(n,u))}}return o}/**
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
 */let N8=class k1{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new k1(t)}node(){return this.node_}},P8=class F1{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Je(this.path_,e);return new F1(this.syncTree_,t)}node(){return Qc(this.syncTree_,this.path_)}};const O8=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Xh=function(n,e,t){if(!n||typeof n!="object")return n;if(K(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return L8(n[".sv"],e,t);if(typeof n[".sv"]=="object")return M8(n[".sv"],e);K(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},L8=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:K(!1,"Unexpected server value: "+n)}},M8=function(n,e,t){n.hasOwnProperty("increment")||K(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&K(!1,"Unexpected increment value: "+r);const i=e.node();if(K(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},$8=function(n,e,t,r){return eu(e,new P8(t,n),r)},R1=function(n,e,t){return eu(n,new N8(e),t)};function eu(n,e,t){const r=n.getPriority().val(),i=Xh(r,e.getImmediateChild(".priority"),t);let s;if(n.isLeafNode()){const o=n,a=Xh(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new pr(a,nt(i)):n}else{const o=n;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new pr(i))),o.forEachChild(ze,(a,c)=>{const l=eu(c,e.getImmediateChild(a),t);l!==c&&(s=s.updateImmediateChild(a,l))}),s}}/**
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
 */let tu=class{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}};function nu(n,e){let t=e instanceof Ne?e:new Ne(e),r=n,i=_e(t);for(;i!==null;){const s=Qr(r.node.children,i)||{children:{},childCount:0};r=new tu(i,r,s),t=Le(t),i=_e(t)}return r}function ui(n){return n.node.value}function N1(n,e){n.node.value=e,zl(n)}function P1(n){return n.node.childCount>0}function H8(n){return ui(n)===void 0&&!P1(n)}function ta(n,e){Bt(n.node.children,(t,r)=>{e(new tu(t,n,r))})}function O1(n,e,t,r){t&&e(n),ta(n,i=>{O1(i,e,!0)})}function U8(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ks(n){return new Ne(n.parent===null?n.name:ks(n.parent)+"/"+n.name)}function zl(n){n.parent!==null&&W8(n.parent,n.name,n)}function W8(n,e,t){const r=H8(t),i=hn(n.node.children,e);r&&i?(delete n.node.children[e],n.node.childCount--,zl(n)):!r&&!i&&(n.node.children[e]=t.node,n.node.childCount++,zl(n))}/**
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
 */const z8=/[\[\].#$\/\u0000-\u001F\u007F]/,q8=/[\[\].#$\u0000-\u001F\u007F]/,Ma=10*1024*1024,L1=function(n){return typeof n=="string"&&n.length!==0&&!z8.test(n)},M1=function(n){return typeof n=="string"&&n.length!==0&&!q8.test(n)},V8=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),M1(n)},Zh=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Mc(n)||n&&typeof n=="object"&&hn(n,".sv")},G8=function(n,e,t,r){ru(Ac(n,"value"),e,t)},ru=function(n,e,t){const r=t instanceof Ne?new i4(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Jn(r));if(typeof e=="function")throw new Error(n+"contains a function "+Jn(r)+" with contents = "+e.toString());if(Mc(e))throw new Error(n+"contains "+e.toString()+" "+Jn(r));if(typeof e=="string"&&e.length>Ma/3&&Vo(e)>Ma)throw new Error(n+"contains a string greater than "+Ma+" utf8 bytes "+Jn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Bt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!L1(o)))throw new Error(n+" contains an invalid key ("+o+") "+Jn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);s4(r,o),ru(n,a,r),o4(r)}),i&&s)throw new Error(n+' contains ".value" child '+Jn(r)+" in addition to actual children.")}},$1=function(n,e,t,r){if(!M1(t))throw new Error(Ac(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},j8=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),$1(n,e,t)},K8=function(n,e){if(_e(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Y8=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!L1(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!V8(t))throw new Error(Ac(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */let Q8=class{constructor(){this.eventLists_=[],this.recursionDepth_=0}};function H1(n,e){let t=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();t!==null&&!Kx(s,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:s}),t.events.push(i)}t&&n.eventLists_.push(t)}function un(n,e,t){H1(n,t),X8(n,r=>Kt(r,e)||Kt(e,r))}function X8(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const i=n.eventLists_[r];if(i){const s=i.path;e(s)?(Z8(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Z8(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();qi&&dt("event: "+t.toString()),ci(r)}}}/**
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
 */const J8="repo_interrupt",eb=25;let tb=class{constructor(e,t,r,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Q8,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Co(),this.transactionQueueTree_=new tu,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}};function nb(n,e,t){if(n.stats_=Uc(n.repoInfo_),n.forceRestClient_||I2())n.server_=new S4(n.repoInfo_,(r,i,s,o)=>{Jh(n,r,i,s,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>ef(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ze(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new Is(n.repoInfo_,e,(r,i,s,o)=>{Jh(n,r,i,s,o)},r=>{ef(n,r)},r=>{ib(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=F2(n.repoInfo_,()=>new N4(n.stats_,n.server_)),n.infoData_=new T4,n.infoSyncTree_=new Qh({startListening:(r,i,s,o)=>{let a=[];const c=n.infoData_.getNode(r._path);return c.isEmpty()||(a=Ts(n.infoSyncTree_,r._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),su(n,"connected",!1),n.serverSyncTree_=new Qh({startListening:(r,i,s,o)=>(n.server_.listen(r,s,i,(a,c)=>{const l=o(a,c);un(n.eventQueue_,r._path,l)}),[]),stopListening:(r,i)=>{n.server_.unlisten(r,i)}})}function rb(n){const t=n.infoData_.getNode(new Ne(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function iu(n){return O8({timestamp:rb(n)})}function Jh(n,e,t,r,i){n.dataUpdateCount++;const s=new Ne(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(r){const c=co(t,l=>nt(l));o=I8(n.serverSyncTree_,s,c,i)}else{const c=nt(t);o=I1(n.serverSyncTree_,s,c,i)}else if(r){const c=co(t,l=>nt(l));o=A8(n.serverSyncTree_,s,c)}else{const c=nt(t);o=Ts(n.serverSyncTree_,s,c)}let a=s;o.length>0&&(a=ra(n,s)),un(n.eventQueue_,a,o)}function ef(n,e){su(n,"connected",e),e===!1&&ab(n)}function ib(n,e){Bt(e,(t,r)=>{su(n,t,r)})}function su(n,e,t){const r=new Ne("/.info/"+e),i=nt(t);n.infoData_.updateSnapshot(r,i);const s=Ts(n.infoSyncTree_,r,i);un(n.eventQueue_,r,s)}function U1(n){return n.nextWriteId_++}function sb(n,e,t){const r=T8(n.serverSyncTree_,e);return r!=null?Promise.resolve(r):n.server_.get(e).then(i=>{const s=nt(i).withIndex(e._queryParams.getIndex());S8(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Ts(n.serverSyncTree_,e._path,s);else{const a=us(n.serverSyncTree_,e);o=I1(n.serverSyncTree_,e._path,s,a)}return un(n.eventQueue_,e._path,o),D1(n.serverSyncTree_,e,t,null,!0),s},i=>(na(n,"get for query "+Ze(e)+" failed: "+i),Promise.reject(new Error(i))))}function ob(n,e,t,r,i){na(n,"set",{path:e.toString(),value:t,priority:r});const s=iu(n),o=nt(t,r),a=Qc(n.serverSyncTree_,e),c=R1(o,a,s),l=U1(n),u=w1(n.serverSyncTree_,e,c,l,!0);H1(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(h,d)=>{const p=h==="ok";p||It("set at "+e+" failed: "+h);const g=ir(n.serverSyncTree_,l,!p);un(n.eventQueue_,e,g),cb(n,i,h,d)});const f=G1(n,e);ra(n,f),un(n.eventQueue_,f,[])}function ab(n){na(n,"onDisconnectEvents");const e=iu(n),t=Co();Pl(n.onDisconnect_,Ae(),(i,s)=>{const o=$8(i,s,n.serverSyncTree_,e);a1(t,i,o)});let r=[];Pl(t,Ae(),(i,s)=>{r=r.concat(Ts(n.serverSyncTree_,i,s));const o=G1(n,i);ra(n,o)}),n.onDisconnect_=Co(),un(n.eventQueue_,Ae(),r)}function lb(n){n.persistentConnection_&&n.persistentConnection_.interrupt(J8)}function na(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),dt(t,...e)}function cb(n,e,t,r){e&&ci(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function W1(n,e,t){return Qc(n.serverSyncTree_,e,t)||ue.EMPTY_NODE}function ou(n,e=n.transactionQueueTree_){if(e||ia(n,e),ui(e)){const t=q1(n,e);K(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&ub(n,ks(e),t)}else P1(e)&&ta(e,t=>{ou(n,t)})}function ub(n,e,t){const r=t.map(l=>l.currentWriteId),i=W1(n,e,r);let s=i;const o=i.hash();for(let l=0;l<t.length;l++){const u=t[l];K(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=Ct(e,u.path);s=s.updateChild(f,u.currentOutputSnapshotRaw)}const a=s.val(!0),c=e;n.server_.put(c.toString(),a,l=>{na(n,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const f=[];for(let h=0;h<t.length;h++)t[h].status=2,u=u.concat(ir(n.serverSyncTree_,t[h].currentWriteId)),t[h].onComplete&&f.push(()=>t[h].onComplete(null,!0,t[h].currentOutputSnapshotResolved)),t[h].unwatcher();ia(n,nu(n.transactionQueueTree_,e)),ou(n,n.transactionQueueTree_),un(n.eventQueue_,e,u);for(let h=0;h<f.length;h++)ci(f[h])}else{if(l==="datastale")for(let f=0;f<t.length;f++)t[f].status===3?t[f].status=4:t[f].status=0;else{It("transaction at "+c.toString()+" failed: "+l);for(let f=0;f<t.length;f++)t[f].status=4,t[f].abortReason=l}ra(n,e)}},o)}function ra(n,e){const t=z1(n,e),r=ks(t),i=q1(n,t);return hb(n,i,r),r}function hb(n,e,t){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=Ct(t,c.path);let u=!1,f;if(K(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,f=c.abortReason,i=i.concat(ir(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=eb)u=!0,f="maxretry",i=i.concat(ir(n.serverSyncTree_,c.currentWriteId,!0));else{const h=W1(n,c.path,o);c.currentInputSnapshot=h;const d=e[a].update(h.val());if(d!==void 0){ru("transaction failed: Data returned ",d,c.path);let p=nt(d);typeof d=="object"&&d!=null&&hn(d,".priority")||(p=p.updatePriority(h.getPriority()));const m=c.currentWriteId,y=iu(n),_=R1(p,h,y);c.currentOutputSnapshotRaw=p,c.currentOutputSnapshotResolved=_,c.currentWriteId=U1(n),o.splice(o.indexOf(m),1),i=i.concat(w1(n.serverSyncTree_,c.path,_,c.currentWriteId,c.applyLocally)),i=i.concat(ir(n.serverSyncTree_,m,!0))}else u=!0,f="nodata",i=i.concat(ir(n.serverSyncTree_,c.currentWriteId,!0))}un(n.eventQueue_,t,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}ia(n,n.transactionQueueTree_);for(let a=0;a<r.length;a++)ci(r[a]);ou(n,n.transactionQueueTree_)}function z1(n,e){let t,r=n.transactionQueueTree_;for(t=_e(e);t!==null&&ui(r)===void 0;)r=nu(r,t),e=Le(e),t=_e(e);return r}function q1(n,e){const t=[];return V1(n,e,t),t.sort((r,i)=>r.order-i.order),t}function V1(n,e,t){const r=ui(e);if(r)for(let i=0;i<r.length;i++)t.push(r[i]);ta(e,i=>{V1(n,i,t)})}function ia(n,e){const t=ui(e);if(t){let r=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[r]=t[i],r++);t.length=r,N1(e,t.length>0?t:void 0)}ta(e,r=>{ia(n,r)})}function G1(n,e){const t=ks(z1(n,e)),r=nu(n.transactionQueueTree_,e);return U8(r,i=>{$a(n,i)}),$a(n,r),O1(r,i=>{$a(n,i)}),t}function $a(n,e){const t=ui(e);if(t){const r=[];let i=[],s=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(K(s===o-1,"All SENT items should be at beginning of queue."),s=o,t[o].status=3,t[o].abortReason="set"):(K(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(ir(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&r.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?N1(e,void 0):t.length=s+1,un(n.eventQueue_,ks(e),i);for(let o=0;o<r.length;o++)ci(r[o])}}/**
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
 */function fb(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let i=t[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function db(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):It(`Invalid query segment '${t}' in query '${n}'`)}return e}const tf=function(n,e){const t=pb(n),r=t.namespace;t.domain==="firebase.com"&&En(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&En("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||m2();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Rx(t.host,t.secure,r,i,e,"",r!==t.subdomain),path:new Ne(t.pathString)}},pb=function(n){let e="",t="",r="",i="",s="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let u=n.indexOf("/");u===-1&&(u=n.length);let f=n.indexOf("?");f===-1&&(f=n.length),e=n.substring(0,Math.min(u,f)),u<f&&(i=fb(n.substring(u,f)));const h=db(n.substring(Math.min(n.length,f)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const d=e.slice(0,l);if(d.toLowerCase()==="localhost")t="localhost";else if(d.split(".").length<=2)t=d;else{const p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),t=e.substring(p+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:c,domain:t,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class _b{constructor(e,t,r,i){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ze(this.snapshot.exportVal())}}class xb{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class gb{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return K(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */let j1=class K1{constructor(e,t,r,i){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=i}get key(){return fe(this._path)?null:Vx(this._path)}get ref(){return new br(this._repo,this._path)}get _queryIdentifier(){const e=$h(this._queryParams),t=$c(e);return t==="{}"?"default":t}get _queryObject(){return $h(this._queryParams)}isEqual(e){if(e=ft(e),!(e instanceof K1))return!1;const t=this._repo===e._repo,r=Kx(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+r4(this._path)}};function mb(n,e){if(n._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function vb(n){let e=null,t=null;if(n.hasStart()&&(e=n.getIndexStartValue()),n.hasEnd()&&(t=n.getIndexEndValue()),n.getIndex()===Pn){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(n.hasStart()){if(n.getIndexStartName()!==dr)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(n.hasEnd()){if(n.getIndexEndName()!==zn)throw new Error(r);if(typeof t!="string")throw new Error(i)}}else if(n.getIndex()===ze){if(e!=null&&!Zh(e)||t!=null&&!Zh(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(K(n.getIndex()instanceof r1||n.getIndex()===i1,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}let br=class Y1 extends j1{constructor(e,t){super(e,t,new w4,!1)}get parent(){const e=jx(this._path);return e===null?null:new Y1(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}};class hs{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Ne(e),r=ql(this.ref,e);return new hs(this._node.getChild(t),r,ze)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new hs(i,ql(this.ref,r),ze)))}hasChild(e){const t=new Ne(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ha(n,e){return n=ft(n),n._checkNotDeleted("ref"),e!==void 0?ql(n._root,e):n._root}function ql(n,e){return n=ft(n),_e(n._path)===null?j8("child","path",e):$1("child","path",e),new br(n._repo,Je(n._path,e))}function nf(n,e){n=ft(n),K8("set",n._path),G8("set",e,n._path);const t=new qo;return ob(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function yb(n){n=ft(n);const e=new gb(()=>{}),t=new au(e);return sb(n._repo,n,t).then(r=>new hs(r,new br(n._repo,n._path),n._queryParams.getIndex()))}class au{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new _b("value",this,new hs(e.snapshotNode,new br(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new xb(this,e,t):null}matches(e){return e instanceof au?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Cb{}class Eb extends Cb{constructor(){super(...arguments),this.type="orderByKey"}_apply(e){mb(e,"orderByKey");const t=I4(e._queryParams,Pn);return vb(t),new j1(e._repo,e._path,t,!0)}}function bb(){return new Eb}function Ab(n,...e){let t=ft(n);for(const r of e)t=r._apply(t);return t}x8(br);C8(br);/**
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
 */const wb="FIREBASE_DATABASE_EMULATOR_HOST",Vl={};let Db=!1;function Ib(n,e,t,r){n.repoInfo_=new Rx(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),r&&(n.authTokenProvider_=r)}function Sb(n,e,t,r,i){let s=r||n.options.databaseURL;s===void 0&&(n.options.projectId||En("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),dt("Using default host for project ",n.options.projectId),s=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=tf(s,i),a=o.repoInfo,c;typeof process<"u"&&yh&&(c=yh[wb]),c?(s=`http://${c}?ns=${a.namespace}`,o=tf(s,i),a=o.repoInfo):o.repoInfo.secure;const l=new T2(n.name,n.options,e);Y8("Invalid Firebase Database URL",o),fe(o.path)||En("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Bb(a,n,l,new S2(n.name,t));return new kb(u,n)}function Tb(n,e){const t=Vl[e];(!t||t[n.key]!==n)&&En(`Database ${e}(${n.repoInfo_}) has already been deleted.`),lb(n),delete t[n.key]}function Bb(n,e,t,r){let i=Vl[e.name];i||(i={},Vl[e.name]=i);let s=i[n.toURLString()];return s&&En("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new tb(n,Db,t,r),i[n.toURLString()]=s,s}let kb=class{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(nb(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new br(this._repo,Ae())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Tb(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&En("Cannot call "+e+" on a deleted database.")}};function Fb(n=Sc(),e){const t=Ic(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=Ev("database");r&&Rb(t,...r)}return t}function Rb(n,e,t,r={}){n=ft(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&En("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&En('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Xs(Xs.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:bv(r.mockUserToken,n.app.options.projectId);s=new Xs(o)}Ib(i,e,t,s)}/**
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
 */function Nb(n){f2(oi),Xr(new cr("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Sb(r,i,s,t)},"PUBLIC").setMultipleInstances(!0)),Nn(Ch,Eh,n),Nn(Ch,Eh,"esm2017")}Is.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Is.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Nb();const Pb={apiKey:"AIzaSyDKnNr9NGleuqY_S5sWlkzj6NeVb-j7eu0",authDomain:"ff-site-user-data.firebaseapp.com",projectId:"ff-site-user-data",storageBucket:"ff-site-user-data.firebasestorage.app",messagingSenderId:"488410681248",appId:"1:488410681248:web:1982ba784b3061940cdec5",measurementId:"G-ZHZM7JVTXY"};P_(Pb,"sud");const Q1=Sc("sud"),Fs="https://xt8ss.github.io/ff-site-data";let Gr;fetch(Fs+"/user-ranks.json").then(async n=>Gr=await n.json());const Lt=u2(Q1),Ua=Fb(Q1),Ob={logIn:"material-symbols:login-rounded",logOut:"material-symbols:logout-rounded"},Lb={Arbewhy:{shop:"The Gold Coin",role:"Vendor",realm:"The Frontier",image:"8/80/Arbewhy2.png"},"Awoken Croc Carl":{shop:"Carl's Delicacies*",role:"Vendor",realm:"The Frontier",image:"2/22/Awoken_Croc_Carl.png"},"Benny Oreman":{shop:"Benny's Mining Supply",role:"Vendor",realm:"The Frontier",image:"b/b5/Benny_Oreman.png"},"Clothing Seller":{shop:"Clothing Boutique",role:"Vendor",realm:"The Frontier",image:"d/d4/Clothing_seller-2.png"},Construct:{shop:"Construct",role:"Vendor",realm:"The Frontier",image:"3/39/ConstructNPC.png"},Frog:{shop:"Frog Goods",role:"Vendor",realm:"The Nightmare",image:"d/d2/Frog_%28Vendor%29.png",article:"Frog (Vendor)"},Gargoyle:{role:"Item Dealer",realm:"The Nightmare",image:"4/44/Gargoyle.png"},"Gnome Wizard Master":{shop:"Magical Merchandise",role:"Vendor",realm:"The Frontier",image:"a/a9/Gnome_Wizard_Master-X.png"},"Greedy Wizard":{role:"Transportation",realm:"The Frontier*",image:"b/bd/Greedy_Wizard.png"},"Green Golem":{shop:"Green Golem's Goods",role:"Vendor",realm:"The Nightmare*",image:"f/f1/Green_Golem.png"},"Gunner Gary":{shop:"Garry's Guns",role:"Vendor",realm:"The Frontier",image:"a/a0/Gunner_Gary.png"},"Kind Wizard":{role:"Transportation",realm:"The Frontier*",image:"2/2b/Kind_Wizard.png"},"Knight Antonius":{shop:"Antonius' Armor Reserve",role:"Vendor",realm:"The Frontier",image:"3/35/Knight_Antonius.png"},"Linkman the Junkman":{shop:"Junkman's Junk",role:"Vendor",realm:"The Frontier",image:"/5/5e/Screenshot_594.png"},"Looney Lenny the Hedgeknight":{shop:"Hedge Knight's Tent",role:"Vendor",realm:"The Frontier",image:"6/6d/Looney_Lenny_the_Hedgeknight.png"},Luhr:{shop:"Luhr's Tackle",role:"Vendor",realm:"The Frontier",image:"6/6d/Luhr.png"},"MANAGER SUPREME":{shop:"SUPREME DEALS",role:"Vendor",realm:"The Nightmare",image:"8/84/Manager_Supreme.png"},"Mr. Sims":{shop:"Sim's Seed Supply",role:"Vendor",realm:"The Frontier",image:"7/7b/Mr._Sims.png"},"No-Legs":{shop:"No-Legs",role:"Vendor",realm:"The Nightmare",image:"0/08/No-Legs.png"},"Ollie Ozzwald":{shop:"Ollie's This 'n That",role:"Vendor",realm:"The Frontier",image:"c/ce/Ollie_Ozzwald.png"},"Otherworldly Weaponsmith":{shop:"Otherworld Armory",role:"Vendor",realm:"The Frontier",image:"0/0e/OtherwordlyWeaponsmith.png"},Parasite:{role:"Boss",realm:"The Frontier*",image:"7/7d/Parasite_Card_New_Image.png"},"Rabbit Hole":{role:"Portal",realm:"The Frontier",image:"3/3c/Screen_Shot_2018-06-11_at_6.48.26_PM.png"},"Reus the Smith":{shop:"Smith's Swords",role:"Vendor",realm:"The Frontier",image:"e/ed/Reus_The_Smith.png"},"Rising Waters":{shop:"Rising Waters",role:"Vendor",realm:"The Nightmare",image:"e/ee/Rising_Waters.png"},Slayer:{role:"Task Giver",realm:"The Frontier*",image:"9/90/Slayer_Outside.png"},Stick:{shop:"Stick Stuff",role:"Vendor",realm:"The Frontier",image:"a/aa/Stick.png"},Strangeman:{shop:"Strangeman's Domain",role:"Vendor",realm:"The Frontier",image:"7/70/Strangeman%27sTeleport.png"},"The Great Eyeman":{shop:"The Eye's Wares",role:"Vendor",realm:"The Frontier",image:"8/8b/The_Great_Eyeman.png"},"Toaster Josh":{role:"Quest Giver",realm:"The Nightmare",image:"d/d9/Toaster_Josh.png"},Vhitmire:{shop:"Vhitmire's Mystery Traveling Store",role:"Vendor",realm:"The Frontier",image:"2/23/Vhitmire.png"}},Or={day:"&#127774",night:"&#127769"},rf="https://fantastic-frontier-roblox.fandom.com/wiki/",sf="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/";var X=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Mb(n){if(n.__esModule)return n;var e=n.default;if(typeof e=="function"){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(r){var i=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(t,r,i.get?i:{enumerable:!0,get:function(){return n[r]}})}),t}var X1={exports:{}};function Z1(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Wa={exports:{}};const $b={},Hb=Object.freeze(Object.defineProperty({__proto__:null,default:$b},Symbol.toStringTag,{value:"Module"})),J1=Mb(Hb);var of;function ve(){return of||(of=1,function(n,e){(function(t,r){n.exports=r()})(X,function(){var t=t||function(r,i){var s;if(typeof window<"u"&&window.crypto&&(s=window.crypto),typeof self<"u"&&self.crypto&&(s=self.crypto),typeof globalThis<"u"&&globalThis.crypto&&(s=globalThis.crypto),!s&&typeof window<"u"&&window.msCrypto&&(s=window.msCrypto),!s&&typeof X<"u"&&X.crypto&&(s=X.crypto),!s&&typeof Z1=="function")try{s=J1}catch{}var o=function(){if(s){if(typeof s.getRandomValues=="function")try{return s.getRandomValues(new Uint32Array(1))[0]}catch{}if(typeof s.randomBytes=="function")try{return s.randomBytes(4).readInt32LE()}catch{}}throw new Error("Native crypto module could not be used to get secure random number.")},a=Object.create||function(){function _(){}return function(x){var v;return _.prototype=x,v=new _,_.prototype=null,v}}(),c={},l=c.lib={},u=l.Base=function(){return{extend:function(_){var x=a(this);return _&&x.mixIn(_),(!x.hasOwnProperty("init")||this.init===x.init)&&(x.init=function(){x.$super.init.apply(this,arguments)}),x.init.prototype=x,x.$super=this,x},create:function(){var _=this.extend();return _.init.apply(_,arguments),_},init:function(){},mixIn:function(_){for(var x in _)_.hasOwnProperty(x)&&(this[x]=_[x]);_.hasOwnProperty("toString")&&(this.toString=_.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),f=l.WordArray=u.extend({init:function(_,x){_=this.words=_||[],x!=i?this.sigBytes=x:this.sigBytes=_.length*4},toString:function(_){return(_||d).stringify(this)},concat:function(_){var x=this.words,v=_.words,C=this.sigBytes,b=_.sigBytes;if(this.clamp(),C%4)for(var A=0;A<b;A++){var w=v[A>>>2]>>>24-A%4*8&255;x[C+A>>>2]|=w<<24-(C+A)%4*8}else for(var T=0;T<b;T+=4)x[C+T>>>2]=v[T>>>2];return this.sigBytes+=b,this},clamp:function(){var _=this.words,x=this.sigBytes;_[x>>>2]&=4294967295<<32-x%4*8,_.length=r.ceil(x/4)},clone:function(){var _=u.clone.call(this);return _.words=this.words.slice(0),_},random:function(_){for(var x=[],v=0;v<_;v+=4)x.push(o());return new f.init(x,_)}}),h=c.enc={},d=h.Hex={stringify:function(_){for(var x=_.words,v=_.sigBytes,C=[],b=0;b<v;b++){var A=x[b>>>2]>>>24-b%4*8&255;C.push((A>>>4).toString(16)),C.push((A&15).toString(16))}return C.join("")},parse:function(_){for(var x=_.length,v=[],C=0;C<x;C+=2)v[C>>>3]|=parseInt(_.substr(C,2),16)<<24-C%8*4;return new f.init(v,x/2)}},p=h.Latin1={stringify:function(_){for(var x=_.words,v=_.sigBytes,C=[],b=0;b<v;b++){var A=x[b>>>2]>>>24-b%4*8&255;C.push(String.fromCharCode(A))}return C.join("")},parse:function(_){for(var x=_.length,v=[],C=0;C<x;C++)v[C>>>2]|=(_.charCodeAt(C)&255)<<24-C%4*8;return new f.init(v,x)}},g=h.Utf8={stringify:function(_){try{return decodeURIComponent(escape(p.stringify(_)))}catch{throw new Error("Malformed UTF-8 data")}},parse:function(_){return p.parse(unescape(encodeURIComponent(_)))}},m=l.BufferedBlockAlgorithm=u.extend({reset:function(){this._data=new f.init,this._nDataBytes=0},_append:function(_){typeof _=="string"&&(_=g.parse(_)),this._data.concat(_),this._nDataBytes+=_.sigBytes},_process:function(_){var x,v=this._data,C=v.words,b=v.sigBytes,A=this.blockSize,w=A*4,T=b/w;_?T=r.ceil(T):T=r.max((T|0)-this._minBufferSize,0);var E=T*A,D=r.min(E*4,b);if(E){for(var B=0;B<E;B+=A)this._doProcessBlock(C,B);x=C.splice(0,E),v.sigBytes-=D}return new f.init(x,D)},clone:function(){var _=u.clone.call(this);return _._data=this._data.clone(),_},_minBufferSize:0});l.Hasher=m.extend({cfg:u.extend(),init:function(_){this.cfg=this.cfg.extend(_),this.reset()},reset:function(){m.reset.call(this),this._doReset()},update:function(_){return this._append(_),this._process(),this},finalize:function(_){_&&this._append(_);var x=this._doFinalize();return x},blockSize:16,_createHelper:function(_){return function(x,v){return new _.init(v).finalize(x)}},_createHmacHelper:function(_){return function(x,v){return new y.HMAC.init(_,v).finalize(x)}}});var y=c.algo={};return c}(Math);return t})}(Wa)),Wa.exports}var za={exports:{}},af;function sa(){return af||(af=1,function(n,e){(function(t,r){n.exports=r(ve())})(X,function(t){return function(r){var i=t,s=i.lib,o=s.Base,a=s.WordArray,c=i.x64={};c.Word=o.extend({init:function(l,u){this.high=l,this.low=u}}),c.WordArray=o.extend({init:function(l,u){l=this.words=l||[],u!=r?this.sigBytes=u:this.sigBytes=l.length*8},toX32:function(){for(var l=this.words,u=l.length,f=[],h=0;h<u;h++){var d=l[h];f.push(d.high),f.push(d.low)}return a.create(f,this.sigBytes)},clone:function(){for(var l=o.clone.call(this),u=l.words=this.words.slice(0),f=u.length,h=0;h<f;h++)u[h]=u[h].clone();return l}})}(),t})}(za)),za.exports}var qa={exports:{}},lf;function Ub(){return lf||(lf=1,function(n,e){(function(t,r){n.exports=r(ve())})(X,function(t){return function(){if(typeof ArrayBuffer=="function"){var r=t,i=r.lib,s=i.WordArray,o=s.init,a=s.init=function(c){if(c instanceof ArrayBuffer&&(c=new Uint8Array(c)),(c instanceof Int8Array||typeof Uint8ClampedArray<"u"&&c instanceof Uint8ClampedArray||c instanceof Int16Array||c instanceof Uint16Array||c instanceof Int32Array||c instanceof Uint32Array||c instanceof Float32Array||c instanceof Float64Array)&&(c=new Uint8Array(c.buffer,c.byteOffset,c.byteLength)),c instanceof Uint8Array){for(var l=c.byteLength,u=[],f=0;f<l;f++)u[f>>>2]|=c[f]<<24-f%4*8;o.call(this,u,l)}else o.apply(this,arguments)};a.prototype=s}}(),t.lib.WordArray})}(qa)),qa.exports}var Va={exports:{}},cf;function Wb(){return cf||(cf=1,function(n,e){(function(t,r){n.exports=r(ve())})(X,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=r.enc;o.Utf16=o.Utf16BE={stringify:function(c){for(var l=c.words,u=c.sigBytes,f=[],h=0;h<u;h+=2){var d=l[h>>>2]>>>16-h%4*8&65535;f.push(String.fromCharCode(d))}return f.join("")},parse:function(c){for(var l=c.length,u=[],f=0;f<l;f++)u[f>>>1]|=c.charCodeAt(f)<<16-f%2*16;return s.create(u,l*2)}},o.Utf16LE={stringify:function(c){for(var l=c.words,u=c.sigBytes,f=[],h=0;h<u;h+=2){var d=a(l[h>>>2]>>>16-h%4*8&65535);f.push(String.fromCharCode(d))}return f.join("")},parse:function(c){for(var l=c.length,u=[],f=0;f<l;f++)u[f>>>1]|=a(c.charCodeAt(f)<<16-f%2*16);return s.create(u,l*2)}};function a(c){return c<<8&4278255360|c>>>8&16711935}}(),t.enc.Utf16})}(Va)),Va.exports}var Ga={exports:{}},uf;function Ar(){return uf||(uf=1,function(n,e){(function(t,r){n.exports=r(ve())})(X,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=r.enc;o.Base64={stringify:function(c){var l=c.words,u=c.sigBytes,f=this._map;c.clamp();for(var h=[],d=0;d<u;d+=3)for(var p=l[d>>>2]>>>24-d%4*8&255,g=l[d+1>>>2]>>>24-(d+1)%4*8&255,m=l[d+2>>>2]>>>24-(d+2)%4*8&255,y=p<<16|g<<8|m,_=0;_<4&&d+_*.75<u;_++)h.push(f.charAt(y>>>6*(3-_)&63));var x=f.charAt(64);if(x)for(;h.length%4;)h.push(x);return h.join("")},parse:function(c){var l=c.length,u=this._map,f=this._reverseMap;if(!f){f=this._reverseMap=[];for(var h=0;h<u.length;h++)f[u.charCodeAt(h)]=h}var d=u.charAt(64);if(d){var p=c.indexOf(d);p!==-1&&(l=p)}return a(c,l,f)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};function a(c,l,u){for(var f=[],h=0,d=0;d<l;d++)if(d%4){var p=u[c.charCodeAt(d-1)]<<d%4*2,g=u[c.charCodeAt(d)]>>>6-d%4*2,m=p|g;f[h>>>2]|=m<<24-h%4*8,h++}return s.create(f,h)}}(),t.enc.Base64})}(Ga)),Ga.exports}var ja={exports:{}},hf;function zb(){return hf||(hf=1,function(n,e){(function(t,r){n.exports=r(ve())})(X,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=r.enc;o.Base64url={stringify:function(c,l){l===void 0&&(l=!0);var u=c.words,f=c.sigBytes,h=l?this._safe_map:this._map;c.clamp();for(var d=[],p=0;p<f;p+=3)for(var g=u[p>>>2]>>>24-p%4*8&255,m=u[p+1>>>2]>>>24-(p+1)%4*8&255,y=u[p+2>>>2]>>>24-(p+2)%4*8&255,_=g<<16|m<<8|y,x=0;x<4&&p+x*.75<f;x++)d.push(h.charAt(_>>>6*(3-x)&63));var v=h.charAt(64);if(v)for(;d.length%4;)d.push(v);return d.join("")},parse:function(c,l){l===void 0&&(l=!0);var u=c.length,f=l?this._safe_map:this._map,h=this._reverseMap;if(!h){h=this._reverseMap=[];for(var d=0;d<f.length;d++)h[f.charCodeAt(d)]=d}var p=f.charAt(64);if(p){var g=c.indexOf(p);g!==-1&&(u=g)}return a(c,u,h)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",_safe_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"};function a(c,l,u){for(var f=[],h=0,d=0;d<l;d++)if(d%4){var p=u[c.charCodeAt(d-1)]<<d%4*2,g=u[c.charCodeAt(d)]>>>6-d%4*2,m=p|g;f[h>>>2]|=m<<24-h%4*8,h++}return s.create(f,h)}}(),t.enc.Base64url})}(ja)),ja.exports}var Ka={exports:{}},ff;function wr(){return ff||(ff=1,function(n,e){(function(t,r){n.exports=r(ve())})(X,function(t){return function(r){var i=t,s=i.lib,o=s.WordArray,a=s.Hasher,c=i.algo,l=[];(function(){for(var g=0;g<64;g++)l[g]=r.abs(r.sin(g+1))*4294967296|0})();var u=c.MD5=a.extend({_doReset:function(){this._hash=new o.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(g,m){for(var y=0;y<16;y++){var _=m+y,x=g[_];g[_]=(x<<8|x>>>24)&16711935|(x<<24|x>>>8)&4278255360}var v=this._hash.words,C=g[m+0],b=g[m+1],A=g[m+2],w=g[m+3],T=g[m+4],E=g[m+5],D=g[m+6],B=g[m+7],S=g[m+8],O=g[m+9],U=g[m+10],H=g[m+11],z=g[m+12],j=g[m+13],J=g[m+14],Y=g[m+15],I=v[0],F=v[1],N=v[2],k=v[3];I=f(I,F,N,k,C,7,l[0]),k=f(k,I,F,N,b,12,l[1]),N=f(N,k,I,F,A,17,l[2]),F=f(F,N,k,I,w,22,l[3]),I=f(I,F,N,k,T,7,l[4]),k=f(k,I,F,N,E,12,l[5]),N=f(N,k,I,F,D,17,l[6]),F=f(F,N,k,I,B,22,l[7]),I=f(I,F,N,k,S,7,l[8]),k=f(k,I,F,N,O,12,l[9]),N=f(N,k,I,F,U,17,l[10]),F=f(F,N,k,I,H,22,l[11]),I=f(I,F,N,k,z,7,l[12]),k=f(k,I,F,N,j,12,l[13]),N=f(N,k,I,F,J,17,l[14]),F=f(F,N,k,I,Y,22,l[15]),I=h(I,F,N,k,b,5,l[16]),k=h(k,I,F,N,D,9,l[17]),N=h(N,k,I,F,H,14,l[18]),F=h(F,N,k,I,C,20,l[19]),I=h(I,F,N,k,E,5,l[20]),k=h(k,I,F,N,U,9,l[21]),N=h(N,k,I,F,Y,14,l[22]),F=h(F,N,k,I,T,20,l[23]),I=h(I,F,N,k,O,5,l[24]),k=h(k,I,F,N,J,9,l[25]),N=h(N,k,I,F,w,14,l[26]),F=h(F,N,k,I,S,20,l[27]),I=h(I,F,N,k,j,5,l[28]),k=h(k,I,F,N,A,9,l[29]),N=h(N,k,I,F,B,14,l[30]),F=h(F,N,k,I,z,20,l[31]),I=d(I,F,N,k,E,4,l[32]),k=d(k,I,F,N,S,11,l[33]),N=d(N,k,I,F,H,16,l[34]),F=d(F,N,k,I,J,23,l[35]),I=d(I,F,N,k,b,4,l[36]),k=d(k,I,F,N,T,11,l[37]),N=d(N,k,I,F,B,16,l[38]),F=d(F,N,k,I,U,23,l[39]),I=d(I,F,N,k,j,4,l[40]),k=d(k,I,F,N,C,11,l[41]),N=d(N,k,I,F,w,16,l[42]),F=d(F,N,k,I,D,23,l[43]),I=d(I,F,N,k,O,4,l[44]),k=d(k,I,F,N,z,11,l[45]),N=d(N,k,I,F,Y,16,l[46]),F=d(F,N,k,I,A,23,l[47]),I=p(I,F,N,k,C,6,l[48]),k=p(k,I,F,N,B,10,l[49]),N=p(N,k,I,F,J,15,l[50]),F=p(F,N,k,I,E,21,l[51]),I=p(I,F,N,k,z,6,l[52]),k=p(k,I,F,N,w,10,l[53]),N=p(N,k,I,F,U,15,l[54]),F=p(F,N,k,I,b,21,l[55]),I=p(I,F,N,k,S,6,l[56]),k=p(k,I,F,N,Y,10,l[57]),N=p(N,k,I,F,D,15,l[58]),F=p(F,N,k,I,j,21,l[59]),I=p(I,F,N,k,T,6,l[60]),k=p(k,I,F,N,H,10,l[61]),N=p(N,k,I,F,A,15,l[62]),F=p(F,N,k,I,O,21,l[63]),v[0]=v[0]+I|0,v[1]=v[1]+F|0,v[2]=v[2]+N|0,v[3]=v[3]+k|0},_doFinalize:function(){var g=this._data,m=g.words,y=this._nDataBytes*8,_=g.sigBytes*8;m[_>>>5]|=128<<24-_%32;var x=r.floor(y/4294967296),v=y;m[(_+64>>>9<<4)+15]=(x<<8|x>>>24)&16711935|(x<<24|x>>>8)&4278255360,m[(_+64>>>9<<4)+14]=(v<<8|v>>>24)&16711935|(v<<24|v>>>8)&4278255360,g.sigBytes=(m.length+1)*4,this._process();for(var C=this._hash,b=C.words,A=0;A<4;A++){var w=b[A];b[A]=(w<<8|w>>>24)&16711935|(w<<24|w>>>8)&4278255360}return C},clone:function(){var g=a.clone.call(this);return g._hash=this._hash.clone(),g}});function f(g,m,y,_,x,v,C){var b=g+(m&y|~m&_)+x+C;return(b<<v|b>>>32-v)+m}function h(g,m,y,_,x,v,C){var b=g+(m&_|y&~_)+x+C;return(b<<v|b>>>32-v)+m}function d(g,m,y,_,x,v,C){var b=g+(m^y^_)+x+C;return(b<<v|b>>>32-v)+m}function p(g,m,y,_,x,v,C){var b=g+(y^(m|~_))+x+C;return(b<<v|b>>>32-v)+m}i.MD5=a._createHelper(u),i.HmacMD5=a._createHmacHelper(u)}(Math),t.MD5})}(Ka)),Ka.exports}var Ya={exports:{}},df;function eg(){return df||(df=1,function(n,e){(function(t,r){n.exports=r(ve())})(X,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=i.Hasher,a=r.algo,c=[],l=a.SHA1=o.extend({_doReset:function(){this._hash=new s.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(u,f){for(var h=this._hash.words,d=h[0],p=h[1],g=h[2],m=h[3],y=h[4],_=0;_<80;_++){if(_<16)c[_]=u[f+_]|0;else{var x=c[_-3]^c[_-8]^c[_-14]^c[_-16];c[_]=x<<1|x>>>31}var v=(d<<5|d>>>27)+y+c[_];_<20?v+=(p&g|~p&m)+1518500249:_<40?v+=(p^g^m)+1859775393:_<60?v+=(p&g|p&m|g&m)-1894007588:v+=(p^g^m)-899497514,y=m,m=g,g=p<<30|p>>>2,p=d,d=v}h[0]=h[0]+d|0,h[1]=h[1]+p|0,h[2]=h[2]+g|0,h[3]=h[3]+m|0,h[4]=h[4]+y|0},_doFinalize:function(){var u=this._data,f=u.words,h=this._nDataBytes*8,d=u.sigBytes*8;return f[d>>>5]|=128<<24-d%32,f[(d+64>>>9<<4)+14]=Math.floor(h/4294967296),f[(d+64>>>9<<4)+15]=h,u.sigBytes=f.length*4,this._process(),this._hash},clone:function(){var u=o.clone.call(this);return u._hash=this._hash.clone(),u}});r.SHA1=o._createHelper(l),r.HmacSHA1=o._createHmacHelper(l)}(),t.SHA1})}(Ya)),Ya.exports}var Qa={exports:{}},pf;function lu(){return pf||(pf=1,function(n,e){(function(t,r){n.exports=r(ve())})(X,function(t){return function(r){var i=t,s=i.lib,o=s.WordArray,a=s.Hasher,c=i.algo,l=[],u=[];(function(){function d(y){for(var _=r.sqrt(y),x=2;x<=_;x++)if(!(y%x))return!1;return!0}function p(y){return(y-(y|0))*4294967296|0}for(var g=2,m=0;m<64;)d(g)&&(m<8&&(l[m]=p(r.pow(g,1/2))),u[m]=p(r.pow(g,1/3)),m++),g++})();var f=[],h=c.SHA256=a.extend({_doReset:function(){this._hash=new o.init(l.slice(0))},_doProcessBlock:function(d,p){for(var g=this._hash.words,m=g[0],y=g[1],_=g[2],x=g[3],v=g[4],C=g[5],b=g[6],A=g[7],w=0;w<64;w++){if(w<16)f[w]=d[p+w]|0;else{var T=f[w-15],E=(T<<25|T>>>7)^(T<<14|T>>>18)^T>>>3,D=f[w-2],B=(D<<15|D>>>17)^(D<<13|D>>>19)^D>>>10;f[w]=E+f[w-7]+B+f[w-16]}var S=v&C^~v&b,O=m&y^m&_^y&_,U=(m<<30|m>>>2)^(m<<19|m>>>13)^(m<<10|m>>>22),H=(v<<26|v>>>6)^(v<<21|v>>>11)^(v<<7|v>>>25),z=A+H+S+u[w]+f[w],j=U+O;A=b,b=C,C=v,v=x+z|0,x=_,_=y,y=m,m=z+j|0}g[0]=g[0]+m|0,g[1]=g[1]+y|0,g[2]=g[2]+_|0,g[3]=g[3]+x|0,g[4]=g[4]+v|0,g[5]=g[5]+C|0,g[6]=g[6]+b|0,g[7]=g[7]+A|0},_doFinalize:function(){var d=this._data,p=d.words,g=this._nDataBytes*8,m=d.sigBytes*8;return p[m>>>5]|=128<<24-m%32,p[(m+64>>>9<<4)+14]=r.floor(g/4294967296),p[(m+64>>>9<<4)+15]=g,d.sigBytes=p.length*4,this._process(),this._hash},clone:function(){var d=a.clone.call(this);return d._hash=this._hash.clone(),d}});i.SHA256=a._createHelper(h),i.HmacSHA256=a._createHmacHelper(h)}(Math),t.SHA256})}(Qa)),Qa.exports}var Xa={exports:{}},_f;function qb(){return _f||(_f=1,function(n,e){(function(t,r,i){n.exports=r(ve(),lu())})(X,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=r.algo,a=o.SHA256,c=o.SHA224=a.extend({_doReset:function(){this._hash=new s.init([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])},_doFinalize:function(){var l=a._doFinalize.call(this);return l.sigBytes-=4,l}});r.SHA224=a._createHelper(c),r.HmacSHA224=a._createHmacHelper(c)}(),t.SHA224})}(Xa)),Xa.exports}var Za={exports:{}},xf;function tg(){return xf||(xf=1,function(n,e){(function(t,r,i){n.exports=r(ve(),sa())})(X,function(t){return function(){var r=t,i=r.lib,s=i.Hasher,o=r.x64,a=o.Word,c=o.WordArray,l=r.algo;function u(){return a.create.apply(a,arguments)}var f=[u(1116352408,3609767458),u(1899447441,602891725),u(3049323471,3964484399),u(3921009573,2173295548),u(961987163,4081628472),u(1508970993,3053834265),u(2453635748,2937671579),u(2870763221,3664609560),u(3624381080,2734883394),u(310598401,1164996542),u(607225278,1323610764),u(1426881987,3590304994),u(1925078388,4068182383),u(2162078206,991336113),u(2614888103,633803317),u(3248222580,3479774868),u(3835390401,2666613458),u(4022224774,944711139),u(264347078,2341262773),u(604807628,2007800933),u(770255983,1495990901),u(1249150122,1856431235),u(1555081692,3175218132),u(1996064986,2198950837),u(2554220882,3999719339),u(2821834349,766784016),u(2952996808,2566594879),u(3210313671,3203337956),u(3336571891,1034457026),u(3584528711,2466948901),u(113926993,3758326383),u(338241895,168717936),u(666307205,1188179964),u(773529912,1546045734),u(1294757372,1522805485),u(1396182291,2643833823),u(1695183700,2343527390),u(1986661051,1014477480),u(2177026350,1206759142),u(2456956037,344077627),u(2730485921,1290863460),u(2820302411,3158454273),u(3259730800,3505952657),u(3345764771,106217008),u(3516065817,3606008344),u(3600352804,1432725776),u(4094571909,1467031594),u(275423344,851169720),u(430227734,3100823752),u(506948616,1363258195),u(659060556,3750685593),u(883997877,3785050280),u(958139571,3318307427),u(1322822218,3812723403),u(1537002063,2003034995),u(1747873779,3602036899),u(1955562222,1575990012),u(2024104815,1125592928),u(2227730452,2716904306),u(2361852424,442776044),u(2428436474,593698344),u(2756734187,3733110249),u(3204031479,2999351573),u(3329325298,3815920427),u(3391569614,3928383900),u(3515267271,566280711),u(3940187606,3454069534),u(4118630271,4000239992),u(116418474,1914138554),u(174292421,2731055270),u(289380356,3203993006),u(460393269,320620315),u(685471733,587496836),u(852142971,1086792851),u(1017036298,365543100),u(1126000580,2618297676),u(1288033470,3409855158),u(1501505948,4234509866),u(1607167915,987167468),u(1816402316,1246189591)],h=[];(function(){for(var p=0;p<80;p++)h[p]=u()})();var d=l.SHA512=s.extend({_doReset:function(){this._hash=new c.init([new a.init(1779033703,4089235720),new a.init(3144134277,2227873595),new a.init(1013904242,4271175723),new a.init(2773480762,1595750129),new a.init(1359893119,2917565137),new a.init(2600822924,725511199),new a.init(528734635,4215389547),new a.init(1541459225,327033209)])},_doProcessBlock:function(p,g){for(var m=this._hash.words,y=m[0],_=m[1],x=m[2],v=m[3],C=m[4],b=m[5],A=m[6],w=m[7],T=y.high,E=y.low,D=_.high,B=_.low,S=x.high,O=x.low,U=v.high,H=v.low,z=C.high,j=C.low,J=b.high,Y=b.low,I=A.high,F=A.low,N=w.high,k=w.low,ie=T,ee=E,de=D,V=B,W=S,re=O,pe=U,qe=H,Q=z,ce=j,kt=J,mt=Y,Ft=I,vt=F,Vt=N,yt=k,Fe=0;Fe<80;Fe++){var Ie,Ve,Rt=h[Fe];if(Fe<16)Ve=Rt.high=p[g+Fe*2]|0,Ie=Rt.low=p[g+Fe*2+1]|0;else{var se=h[Fe-15],We=se.high,Ye=se.low,_i=(We>>>1|Ye<<31)^(We>>>8|Ye<<24)^We>>>7,G=(Ye>>>1|We<<31)^(Ye>>>8|We<<24)^(Ye>>>7|We<<25),Me=h[Fe-2],Qe=Me.high,Gt=Me.low,da=(Qe>>>19|Gt<<13)^(Qe<<3|Gt>>>29)^Qe>>>6,xi=(Gt>>>19|Qe<<13)^(Gt<<3|Qe>>>29)^(Gt>>>6|Qe<<26),gi=h[Fe-7],pa=gi.high,_a=gi.low,mi=h[Fe-16],xa=mi.high,vi=mi.low;Ie=G+_a,Ve=_i+pa+(Ie>>>0<G>>>0?1:0),Ie=Ie+xi,Ve=Ve+da+(Ie>>>0<xi>>>0?1:0),Ie=Ie+vi,Ve=Ve+xa+(Ie>>>0<vi>>>0?1:0),Rt.high=Ve,Rt.low=Ie}var ga=Q&kt^~Q&Ft,yi=ce&mt^~ce&vt,ma=ie&de^ie&W^de&W,va=ee&V^ee&re^V&re,ya=(ie>>>28|ee<<4)^(ie<<30|ee>>>2)^(ie<<25|ee>>>7),Ci=(ee>>>28|ie<<4)^(ee<<30|ie>>>2)^(ee<<25|ie>>>7),Ca=(Q>>>14|ce<<18)^(Q>>>18|ce<<14)^(Q<<23|ce>>>9),Ea=(ce>>>14|Q<<18)^(ce>>>18|Q<<14)^(ce<<23|Q>>>9),Ei=f[Fe],ba=Ei.high,bi=Ei.low,Re=yt+Ea,lt=Vt+Ca+(Re>>>0<yt>>>0?1:0),Re=Re+yi,lt=lt+ga+(Re>>>0<yi>>>0?1:0),Re=Re+bi,lt=lt+ba+(Re>>>0<bi>>>0?1:0),Re=Re+Ie,lt=lt+Ve+(Re>>>0<Ie>>>0?1:0),Ai=Ci+va,Aa=ya+ma+(Ai>>>0<Ci>>>0?1:0);Vt=Ft,yt=vt,Ft=kt,vt=mt,kt=Q,mt=ce,ce=qe+Re|0,Q=pe+lt+(ce>>>0<qe>>>0?1:0)|0,pe=W,qe=re,W=de,re=V,de=ie,V=ee,ee=Re+Ai|0,ie=lt+Aa+(ee>>>0<Re>>>0?1:0)|0}E=y.low=E+ee,y.high=T+ie+(E>>>0<ee>>>0?1:0),B=_.low=B+V,_.high=D+de+(B>>>0<V>>>0?1:0),O=x.low=O+re,x.high=S+W+(O>>>0<re>>>0?1:0),H=v.low=H+qe,v.high=U+pe+(H>>>0<qe>>>0?1:0),j=C.low=j+ce,C.high=z+Q+(j>>>0<ce>>>0?1:0),Y=b.low=Y+mt,b.high=J+kt+(Y>>>0<mt>>>0?1:0),F=A.low=F+vt,A.high=I+Ft+(F>>>0<vt>>>0?1:0),k=w.low=k+yt,w.high=N+Vt+(k>>>0<yt>>>0?1:0)},_doFinalize:function(){var p=this._data,g=p.words,m=this._nDataBytes*8,y=p.sigBytes*8;g[y>>>5]|=128<<24-y%32,g[(y+128>>>10<<5)+30]=Math.floor(m/4294967296),g[(y+128>>>10<<5)+31]=m,p.sigBytes=g.length*4,this._process();var _=this._hash.toX32();return _},clone:function(){var p=s.clone.call(this);return p._hash=this._hash.clone(),p},blockSize:1024/32});r.SHA512=s._createHelper(d),r.HmacSHA512=s._createHmacHelper(d)}(),t.SHA512})}(Za)),Za.exports}var Ja={exports:{}},gf;function Vb(){return gf||(gf=1,function(n,e){(function(t,r,i){n.exports=r(ve(),sa(),tg())})(X,function(t){return function(){var r=t,i=r.x64,s=i.Word,o=i.WordArray,a=r.algo,c=a.SHA512,l=a.SHA384=c.extend({_doReset:function(){this._hash=new o.init([new s.init(3418070365,3238371032),new s.init(1654270250,914150663),new s.init(2438529370,812702999),new s.init(355462360,4144912697),new s.init(1731405415,4290775857),new s.init(2394180231,1750603025),new s.init(3675008525,1694076839),new s.init(1203062813,3204075428)])},_doFinalize:function(){var u=c._doFinalize.call(this);return u.sigBytes-=16,u}});r.SHA384=c._createHelper(l),r.HmacSHA384=c._createHmacHelper(l)}(),t.SHA384})}(Ja)),Ja.exports}var e0={exports:{}},mf;function Gb(){return mf||(mf=1,function(n,e){(function(t,r,i){n.exports=r(ve(),sa())})(X,function(t){return function(r){var i=t,s=i.lib,o=s.WordArray,a=s.Hasher,c=i.x64,l=c.Word,u=i.algo,f=[],h=[],d=[];(function(){for(var m=1,y=0,_=0;_<24;_++){f[m+5*y]=(_+1)*(_+2)/2%64;var x=y%5,v=(2*m+3*y)%5;m=x,y=v}for(var m=0;m<5;m++)for(var y=0;y<5;y++)h[m+5*y]=y+(2*m+3*y)%5*5;for(var C=1,b=0;b<24;b++){for(var A=0,w=0,T=0;T<7;T++){if(C&1){var E=(1<<T)-1;E<32?w^=1<<E:A^=1<<E-32}C&128?C=C<<1^113:C<<=1}d[b]=l.create(A,w)}})();var p=[];(function(){for(var m=0;m<25;m++)p[m]=l.create()})();var g=u.SHA3=a.extend({cfg:a.cfg.extend({outputLength:512}),_doReset:function(){for(var m=this._state=[],y=0;y<25;y++)m[y]=new l.init;this.blockSize=(1600-2*this.cfg.outputLength)/32},_doProcessBlock:function(m,y){for(var _=this._state,x=this.blockSize/2,v=0;v<x;v++){var C=m[y+2*v],b=m[y+2*v+1];C=(C<<8|C>>>24)&16711935|(C<<24|C>>>8)&4278255360,b=(b<<8|b>>>24)&16711935|(b<<24|b>>>8)&4278255360;var A=_[v];A.high^=b,A.low^=C}for(var w=0;w<24;w++){for(var T=0;T<5;T++){for(var E=0,D=0,B=0;B<5;B++){var A=_[T+5*B];E^=A.high,D^=A.low}var S=p[T];S.high=E,S.low=D}for(var T=0;T<5;T++)for(var O=p[(T+4)%5],U=p[(T+1)%5],H=U.high,z=U.low,E=O.high^(H<<1|z>>>31),D=O.low^(z<<1|H>>>31),B=0;B<5;B++){var A=_[T+5*B];A.high^=E,A.low^=D}for(var j=1;j<25;j++){var E,D,A=_[j],J=A.high,Y=A.low,I=f[j];I<32?(E=J<<I|Y>>>32-I,D=Y<<I|J>>>32-I):(E=Y<<I-32|J>>>64-I,D=J<<I-32|Y>>>64-I);var F=p[h[j]];F.high=E,F.low=D}var N=p[0],k=_[0];N.high=k.high,N.low=k.low;for(var T=0;T<5;T++)for(var B=0;B<5;B++){var j=T+5*B,A=_[j],ie=p[j],ee=p[(T+1)%5+5*B],de=p[(T+2)%5+5*B];A.high=ie.high^~ee.high&de.high,A.low=ie.low^~ee.low&de.low}var A=_[0],V=d[w];A.high^=V.high,A.low^=V.low}},_doFinalize:function(){var m=this._data,y=m.words;this._nDataBytes*8;var _=m.sigBytes*8,x=this.blockSize*32;y[_>>>5]|=1<<24-_%32,y[(r.ceil((_+1)/x)*x>>>5)-1]|=128,m.sigBytes=y.length*4,this._process();for(var v=this._state,C=this.cfg.outputLength/8,b=C/8,A=[],w=0;w<b;w++){var T=v[w],E=T.high,D=T.low;E=(E<<8|E>>>24)&16711935|(E<<24|E>>>8)&4278255360,D=(D<<8|D>>>24)&16711935|(D<<24|D>>>8)&4278255360,A.push(D),A.push(E)}return new o.init(A,C)},clone:function(){for(var m=a.clone.call(this),y=m._state=this._state.slice(0),_=0;_<25;_++)y[_]=y[_].clone();return m}});i.SHA3=a._createHelper(g),i.HmacSHA3=a._createHmacHelper(g)}(Math),t.SHA3})}(e0)),e0.exports}var t0={exports:{}},vf;function jb(){return vf||(vf=1,function(n,e){(function(t,r){n.exports=r(ve())})(X,function(t){/** @preserve
			(c) 2012 by Cédric Mesnil. All rights reserved.

			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
			*/return function(r){var i=t,s=i.lib,o=s.WordArray,a=s.Hasher,c=i.algo,l=o.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),u=o.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),f=o.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),h=o.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),d=o.create([0,1518500249,1859775393,2400959708,2840853838]),p=o.create([1352829926,1548603684,1836072691,2053994217,0]),g=c.RIPEMD160=a.extend({_doReset:function(){this._hash=o.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(b,A){for(var w=0;w<16;w++){var T=A+w,E=b[T];b[T]=(E<<8|E>>>24)&16711935|(E<<24|E>>>8)&4278255360}var D=this._hash.words,B=d.words,S=p.words,O=l.words,U=u.words,H=f.words,z=h.words,j,J,Y,I,F,N,k,ie,ee,de;N=j=D[0],k=J=D[1],ie=Y=D[2],ee=I=D[3],de=F=D[4];for(var V,w=0;w<80;w+=1)V=j+b[A+O[w]]|0,w<16?V+=m(J,Y,I)+B[0]:w<32?V+=y(J,Y,I)+B[1]:w<48?V+=_(J,Y,I)+B[2]:w<64?V+=x(J,Y,I)+B[3]:V+=v(J,Y,I)+B[4],V=V|0,V=C(V,H[w]),V=V+F|0,j=F,F=I,I=C(Y,10),Y=J,J=V,V=N+b[A+U[w]]|0,w<16?V+=v(k,ie,ee)+S[0]:w<32?V+=x(k,ie,ee)+S[1]:w<48?V+=_(k,ie,ee)+S[2]:w<64?V+=y(k,ie,ee)+S[3]:V+=m(k,ie,ee)+S[4],V=V|0,V=C(V,z[w]),V=V+de|0,N=de,de=ee,ee=C(ie,10),ie=k,k=V;V=D[1]+Y+ee|0,D[1]=D[2]+I+de|0,D[2]=D[3]+F+N|0,D[3]=D[4]+j+k|0,D[4]=D[0]+J+ie|0,D[0]=V},_doFinalize:function(){var b=this._data,A=b.words,w=this._nDataBytes*8,T=b.sigBytes*8;A[T>>>5]|=128<<24-T%32,A[(T+64>>>9<<4)+14]=(w<<8|w>>>24)&16711935|(w<<24|w>>>8)&4278255360,b.sigBytes=(A.length+1)*4,this._process();for(var E=this._hash,D=E.words,B=0;B<5;B++){var S=D[B];D[B]=(S<<8|S>>>24)&16711935|(S<<24|S>>>8)&4278255360}return E},clone:function(){var b=a.clone.call(this);return b._hash=this._hash.clone(),b}});function m(b,A,w){return b^A^w}function y(b,A,w){return b&A|~b&w}function _(b,A,w){return(b|~A)^w}function x(b,A,w){return b&w|A&~w}function v(b,A,w){return b^(A|~w)}function C(b,A){return b<<A|b>>>32-A}i.RIPEMD160=a._createHelper(g),i.HmacRIPEMD160=a._createHmacHelper(g)}(),t.RIPEMD160})}(t0)),t0.exports}var n0={exports:{}},yf;function cu(){return yf||(yf=1,function(n,e){(function(t,r){n.exports=r(ve())})(X,function(t){(function(){var r=t,i=r.lib,s=i.Base,o=r.enc,a=o.Utf8,c=r.algo;c.HMAC=s.extend({init:function(l,u){l=this._hasher=new l.init,typeof u=="string"&&(u=a.parse(u));var f=l.blockSize,h=f*4;u.sigBytes>h&&(u=l.finalize(u)),u.clamp();for(var d=this._oKey=u.clone(),p=this._iKey=u.clone(),g=d.words,m=p.words,y=0;y<f;y++)g[y]^=1549556828,m[y]^=909522486;d.sigBytes=p.sigBytes=h,this.reset()},reset:function(){var l=this._hasher;l.reset(),l.update(this._iKey)},update:function(l){return this._hasher.update(l),this},finalize:function(l){var u=this._hasher,f=u.finalize(l);u.reset();var h=u.finalize(this._oKey.clone().concat(f));return h}})})()})}(n0)),n0.exports}var r0={exports:{}},Cf;function Kb(){return Cf||(Cf=1,function(n,e){(function(t,r,i){n.exports=r(ve(),lu(),cu())})(X,function(t){return function(){var r=t,i=r.lib,s=i.Base,o=i.WordArray,a=r.algo,c=a.SHA256,l=a.HMAC,u=a.PBKDF2=s.extend({cfg:s.extend({keySize:128/32,hasher:c,iterations:25e4}),init:function(f){this.cfg=this.cfg.extend(f)},compute:function(f,h){for(var d=this.cfg,p=l.create(d.hasher,f),g=o.create(),m=o.create([1]),y=g.words,_=m.words,x=d.keySize,v=d.iterations;y.length<x;){var C=p.update(h).finalize(m);p.reset();for(var b=C.words,A=b.length,w=C,T=1;T<v;T++){w=p.finalize(w),p.reset();for(var E=w.words,D=0;D<A;D++)b[D]^=E[D]}g.concat(C),_[0]++}return g.sigBytes=x*4,g}});r.PBKDF2=function(f,h,d){return u.create(d).compute(f,h)}}(),t.PBKDF2})}(r0)),r0.exports}var i0={exports:{}},Ef;function Yn(){return Ef||(Ef=1,function(n,e){(function(t,r,i){n.exports=r(ve(),eg(),cu())})(X,function(t){return function(){var r=t,i=r.lib,s=i.Base,o=i.WordArray,a=r.algo,c=a.MD5,l=a.EvpKDF=s.extend({cfg:s.extend({keySize:128/32,hasher:c,iterations:1}),init:function(u){this.cfg=this.cfg.extend(u)},compute:function(u,f){for(var h,d=this.cfg,p=d.hasher.create(),g=o.create(),m=g.words,y=d.keySize,_=d.iterations;m.length<y;){h&&p.update(h),h=p.update(u).finalize(f),p.reset();for(var x=1;x<_;x++)h=p.finalize(h),p.reset();g.concat(h)}return g.sigBytes=y*4,g}});r.EvpKDF=function(u,f,h){return l.create(h).compute(u,f)}}(),t.EvpKDF})}(i0)),i0.exports}var s0={exports:{}},bf;function ot(){return bf||(bf=1,function(n,e){(function(t,r,i){n.exports=r(ve(),Yn())})(X,function(t){t.lib.Cipher||function(r){var i=t,s=i.lib,o=s.Base,a=s.WordArray,c=s.BufferedBlockAlgorithm,l=i.enc;l.Utf8;var u=l.Base64,f=i.algo,h=f.EvpKDF,d=s.Cipher=c.extend({cfg:o.extend(),createEncryptor:function(E,D){return this.create(this._ENC_XFORM_MODE,E,D)},createDecryptor:function(E,D){return this.create(this._DEC_XFORM_MODE,E,D)},init:function(E,D,B){this.cfg=this.cfg.extend(B),this._xformMode=E,this._key=D,this.reset()},reset:function(){c.reset.call(this),this._doReset()},process:function(E){return this._append(E),this._process()},finalize:function(E){E&&this._append(E);var D=this._doFinalize();return D},keySize:128/32,ivSize:128/32,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function E(D){return typeof D=="string"?T:b}return function(D){return{encrypt:function(B,S,O){return E(S).encrypt(D,B,S,O)},decrypt:function(B,S,O){return E(S).decrypt(D,B,S,O)}}}}()});s.StreamCipher=d.extend({_doFinalize:function(){var E=this._process(!0);return E},blockSize:1});var p=i.mode={},g=s.BlockCipherMode=o.extend({createEncryptor:function(E,D){return this.Encryptor.create(E,D)},createDecryptor:function(E,D){return this.Decryptor.create(E,D)},init:function(E,D){this._cipher=E,this._iv=D}}),m=p.CBC=function(){var E=g.extend();E.Encryptor=E.extend({processBlock:function(B,S){var O=this._cipher,U=O.blockSize;D.call(this,B,S,U),O.encryptBlock(B,S),this._prevBlock=B.slice(S,S+U)}}),E.Decryptor=E.extend({processBlock:function(B,S){var O=this._cipher,U=O.blockSize,H=B.slice(S,S+U);O.decryptBlock(B,S),D.call(this,B,S,U),this._prevBlock=H}});function D(B,S,O){var U,H=this._iv;H?(U=H,this._iv=r):U=this._prevBlock;for(var z=0;z<O;z++)B[S+z]^=U[z]}return E}(),y=i.pad={},_=y.Pkcs7={pad:function(E,D){for(var B=D*4,S=B-E.sigBytes%B,O=S<<24|S<<16|S<<8|S,U=[],H=0;H<S;H+=4)U.push(O);var z=a.create(U,S);E.concat(z)},unpad:function(E){var D=E.words[E.sigBytes-1>>>2]&255;E.sigBytes-=D}};s.BlockCipher=d.extend({cfg:d.cfg.extend({mode:m,padding:_}),reset:function(){var E;d.reset.call(this);var D=this.cfg,B=D.iv,S=D.mode;this._xformMode==this._ENC_XFORM_MODE?E=S.createEncryptor:(E=S.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==E?this._mode.init(this,B&&B.words):(this._mode=E.call(S,this,B&&B.words),this._mode.__creator=E)},_doProcessBlock:function(E,D){this._mode.processBlock(E,D)},_doFinalize:function(){var E,D=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(D.pad(this._data,this.blockSize),E=this._process(!0)):(E=this._process(!0),D.unpad(E)),E},blockSize:128/32});var x=s.CipherParams=o.extend({init:function(E){this.mixIn(E)},toString:function(E){return(E||this.formatter).stringify(this)}}),v=i.format={},C=v.OpenSSL={stringify:function(E){var D,B=E.ciphertext,S=E.salt;return S?D=a.create([1398893684,1701076831]).concat(S).concat(B):D=B,D.toString(u)},parse:function(E){var D,B=u.parse(E),S=B.words;return S[0]==1398893684&&S[1]==1701076831&&(D=a.create(S.slice(2,4)),S.splice(0,4),B.sigBytes-=16),x.create({ciphertext:B,salt:D})}},b=s.SerializableCipher=o.extend({cfg:o.extend({format:C}),encrypt:function(E,D,B,S){S=this.cfg.extend(S);var O=E.createEncryptor(B,S),U=O.finalize(D),H=O.cfg;return x.create({ciphertext:U,key:B,iv:H.iv,algorithm:E,mode:H.mode,padding:H.padding,blockSize:E.blockSize,formatter:S.format})},decrypt:function(E,D,B,S){S=this.cfg.extend(S),D=this._parse(D,S.format);var O=E.createDecryptor(B,S).finalize(D.ciphertext);return O},_parse:function(E,D){return typeof E=="string"?D.parse(E,this):E}}),A=i.kdf={},w=A.OpenSSL={execute:function(E,D,B,S,O){if(S||(S=a.random(64/8)),O)var U=h.create({keySize:D+B,hasher:O}).compute(E,S);else var U=h.create({keySize:D+B}).compute(E,S);var H=a.create(U.words.slice(D),B*4);return U.sigBytes=D*4,x.create({key:U,iv:H,salt:S})}},T=s.PasswordBasedCipher=b.extend({cfg:b.cfg.extend({kdf:w}),encrypt:function(E,D,B,S){S=this.cfg.extend(S);var O=S.kdf.execute(B,E.keySize,E.ivSize,S.salt,S.hasher);S.iv=O.iv;var U=b.encrypt.call(this,E,D,O.key,S);return U.mixIn(O),U},decrypt:function(E,D,B,S){S=this.cfg.extend(S),D=this._parse(D,S.format);var O=S.kdf.execute(B,E.keySize,E.ivSize,D.salt,S.hasher);S.iv=O.iv;var U=b.decrypt.call(this,E,D,O.key,S);return U}})}()})}(s0)),s0.exports}var o0={exports:{}},Af;function Yb(){return Af||(Af=1,function(n,e){(function(t,r,i){n.exports=r(ve(),ot())})(X,function(t){return t.mode.CFB=function(){var r=t.lib.BlockCipherMode.extend();r.Encryptor=r.extend({processBlock:function(s,o){var a=this._cipher,c=a.blockSize;i.call(this,s,o,c,a),this._prevBlock=s.slice(o,o+c)}}),r.Decryptor=r.extend({processBlock:function(s,o){var a=this._cipher,c=a.blockSize,l=s.slice(o,o+c);i.call(this,s,o,c,a),this._prevBlock=l}});function i(s,o,a,c){var l,u=this._iv;u?(l=u.slice(0),this._iv=void 0):l=this._prevBlock,c.encryptBlock(l,0);for(var f=0;f<a;f++)s[o+f]^=l[f]}return r}(),t.mode.CFB})}(o0)),o0.exports}var a0={exports:{}},wf;function Qb(){return wf||(wf=1,function(n,e){(function(t,r,i){n.exports=r(ve(),ot())})(X,function(t){return t.mode.CTR=function(){var r=t.lib.BlockCipherMode.extend(),i=r.Encryptor=r.extend({processBlock:function(s,o){var a=this._cipher,c=a.blockSize,l=this._iv,u=this._counter;l&&(u=this._counter=l.slice(0),this._iv=void 0);var f=u.slice(0);a.encryptBlock(f,0),u[c-1]=u[c-1]+1|0;for(var h=0;h<c;h++)s[o+h]^=f[h]}});return r.Decryptor=i,r}(),t.mode.CTR})}(a0)),a0.exports}var l0={exports:{}},Df;function Xb(){return Df||(Df=1,function(n,e){(function(t,r,i){n.exports=r(ve(),ot())})(X,function(t){/** @preserve
 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
 * derived from CryptoJS.mode.CTR
 * Jan Hruby jhruby.web@gmail.com
 */return t.mode.CTRGladman=function(){var r=t.lib.BlockCipherMode.extend();function i(a){if((a>>24&255)===255){var c=a>>16&255,l=a>>8&255,u=a&255;c===255?(c=0,l===255?(l=0,u===255?u=0:++u):++l):++c,a=0,a+=c<<16,a+=l<<8,a+=u}else a+=1<<24;return a}function s(a){return(a[0]=i(a[0]))===0&&(a[1]=i(a[1])),a}var o=r.Encryptor=r.extend({processBlock:function(a,c){var l=this._cipher,u=l.blockSize,f=this._iv,h=this._counter;f&&(h=this._counter=f.slice(0),this._iv=void 0),s(h);var d=h.slice(0);l.encryptBlock(d,0);for(var p=0;p<u;p++)a[c+p]^=d[p]}});return r.Decryptor=o,r}(),t.mode.CTRGladman})}(l0)),l0.exports}var c0={exports:{}},If;function Zb(){return If||(If=1,function(n,e){(function(t,r,i){n.exports=r(ve(),ot())})(X,function(t){return t.mode.OFB=function(){var r=t.lib.BlockCipherMode.extend(),i=r.Encryptor=r.extend({processBlock:function(s,o){var a=this._cipher,c=a.blockSize,l=this._iv,u=this._keystream;l&&(u=this._keystream=l.slice(0),this._iv=void 0),a.encryptBlock(u,0);for(var f=0;f<c;f++)s[o+f]^=u[f]}});return r.Decryptor=i,r}(),t.mode.OFB})}(c0)),c0.exports}var u0={exports:{}},Sf;function Jb(){return Sf||(Sf=1,function(n,e){(function(t,r,i){n.exports=r(ve(),ot())})(X,function(t){return t.mode.ECB=function(){var r=t.lib.BlockCipherMode.extend();return r.Encryptor=r.extend({processBlock:function(i,s){this._cipher.encryptBlock(i,s)}}),r.Decryptor=r.extend({processBlock:function(i,s){this._cipher.decryptBlock(i,s)}}),r}(),t.mode.ECB})}(u0)),u0.exports}var h0={exports:{}},Tf;function eA(){return Tf||(Tf=1,function(n,e){(function(t,r,i){n.exports=r(ve(),ot())})(X,function(t){return t.pad.AnsiX923={pad:function(r,i){var s=r.sigBytes,o=i*4,a=o-s%o,c=s+a-1;r.clamp(),r.words[c>>>2]|=a<<24-c%4*8,r.sigBytes+=a},unpad:function(r){var i=r.words[r.sigBytes-1>>>2]&255;r.sigBytes-=i}},t.pad.Ansix923})}(h0)),h0.exports}var f0={exports:{}},Bf;function tA(){return Bf||(Bf=1,function(n,e){(function(t,r,i){n.exports=r(ve(),ot())})(X,function(t){return t.pad.Iso10126={pad:function(r,i){var s=i*4,o=s-r.sigBytes%s;r.concat(t.lib.WordArray.random(o-1)).concat(t.lib.WordArray.create([o<<24],1))},unpad:function(r){var i=r.words[r.sigBytes-1>>>2]&255;r.sigBytes-=i}},t.pad.Iso10126})}(f0)),f0.exports}var d0={exports:{}},kf;function nA(){return kf||(kf=1,function(n,e){(function(t,r,i){n.exports=r(ve(),ot())})(X,function(t){return t.pad.Iso97971={pad:function(r,i){r.concat(t.lib.WordArray.create([2147483648],1)),t.pad.ZeroPadding.pad(r,i)},unpad:function(r){t.pad.ZeroPadding.unpad(r),r.sigBytes--}},t.pad.Iso97971})}(d0)),d0.exports}var p0={exports:{}},Ff;function rA(){return Ff||(Ff=1,function(n,e){(function(t,r,i){n.exports=r(ve(),ot())})(X,function(t){return t.pad.ZeroPadding={pad:function(r,i){var s=i*4;r.clamp(),r.sigBytes+=s-(r.sigBytes%s||s)},unpad:function(r){for(var i=r.words,s=r.sigBytes-1,s=r.sigBytes-1;s>=0;s--)if(i[s>>>2]>>>24-s%4*8&255){r.sigBytes=s+1;break}}},t.pad.ZeroPadding})}(p0)),p0.exports}var _0={exports:{}},Rf;function iA(){return Rf||(Rf=1,function(n,e){(function(t,r,i){n.exports=r(ve(),ot())})(X,function(t){return t.pad.NoPadding={pad:function(){},unpad:function(){}},t.pad.NoPadding})}(_0)),_0.exports}var x0={exports:{}},Nf;function sA(){return Nf||(Nf=1,function(n,e){(function(t,r,i){n.exports=r(ve(),ot())})(X,function(t){return function(r){var i=t,s=i.lib,o=s.CipherParams,a=i.enc,c=a.Hex,l=i.format;l.Hex={stringify:function(u){return u.ciphertext.toString(c)},parse:function(u){var f=c.parse(u);return o.create({ciphertext:f})}}}(),t.format.Hex})}(x0)),x0.exports}var g0={exports:{}},Pf;function oA(){return Pf||(Pf=1,function(n,e){(function(t,r,i){n.exports=r(ve(),Ar(),wr(),Yn(),ot())})(X,function(t){return function(){var r=t,i=r.lib,s=i.BlockCipher,o=r.algo,a=[],c=[],l=[],u=[],f=[],h=[],d=[],p=[],g=[],m=[];(function(){for(var x=[],v=0;v<256;v++)v<128?x[v]=v<<1:x[v]=v<<1^283;for(var C=0,b=0,v=0;v<256;v++){var A=b^b<<1^b<<2^b<<3^b<<4;A=A>>>8^A&255^99,a[C]=A,c[A]=C;var w=x[C],T=x[w],E=x[T],D=x[A]*257^A*16843008;l[C]=D<<24|D>>>8,u[C]=D<<16|D>>>16,f[C]=D<<8|D>>>24,h[C]=D;var D=E*16843009^T*65537^w*257^C*16843008;d[A]=D<<24|D>>>8,p[A]=D<<16|D>>>16,g[A]=D<<8|D>>>24,m[A]=D,C?(C=w^x[x[x[E^w]]],b^=x[x[b]]):C=b=1}})();var y=[0,1,2,4,8,16,32,64,128,27,54],_=o.AES=s.extend({_doReset:function(){var x;if(!(this._nRounds&&this._keyPriorReset===this._key)){for(var v=this._keyPriorReset=this._key,C=v.words,b=v.sigBytes/4,A=this._nRounds=b+6,w=(A+1)*4,T=this._keySchedule=[],E=0;E<w;E++)E<b?T[E]=C[E]:(x=T[E-1],E%b?b>6&&E%b==4&&(x=a[x>>>24]<<24|a[x>>>16&255]<<16|a[x>>>8&255]<<8|a[x&255]):(x=x<<8|x>>>24,x=a[x>>>24]<<24|a[x>>>16&255]<<16|a[x>>>8&255]<<8|a[x&255],x^=y[E/b|0]<<24),T[E]=T[E-b]^x);for(var D=this._invKeySchedule=[],B=0;B<w;B++){var E=w-B;if(B%4)var x=T[E];else var x=T[E-4];B<4||E<=4?D[B]=x:D[B]=d[a[x>>>24]]^p[a[x>>>16&255]]^g[a[x>>>8&255]]^m[a[x&255]]}}},encryptBlock:function(x,v){this._doCryptBlock(x,v,this._keySchedule,l,u,f,h,a)},decryptBlock:function(x,v){var C=x[v+1];x[v+1]=x[v+3],x[v+3]=C,this._doCryptBlock(x,v,this._invKeySchedule,d,p,g,m,c);var C=x[v+1];x[v+1]=x[v+3],x[v+3]=C},_doCryptBlock:function(x,v,C,b,A,w,T,E){for(var D=this._nRounds,B=x[v]^C[0],S=x[v+1]^C[1],O=x[v+2]^C[2],U=x[v+3]^C[3],H=4,z=1;z<D;z++){var j=b[B>>>24]^A[S>>>16&255]^w[O>>>8&255]^T[U&255]^C[H++],J=b[S>>>24]^A[O>>>16&255]^w[U>>>8&255]^T[B&255]^C[H++],Y=b[O>>>24]^A[U>>>16&255]^w[B>>>8&255]^T[S&255]^C[H++],I=b[U>>>24]^A[B>>>16&255]^w[S>>>8&255]^T[O&255]^C[H++];B=j,S=J,O=Y,U=I}var j=(E[B>>>24]<<24|E[S>>>16&255]<<16|E[O>>>8&255]<<8|E[U&255])^C[H++],J=(E[S>>>24]<<24|E[O>>>16&255]<<16|E[U>>>8&255]<<8|E[B&255])^C[H++],Y=(E[O>>>24]<<24|E[U>>>16&255]<<16|E[B>>>8&255]<<8|E[S&255])^C[H++],I=(E[U>>>24]<<24|E[B>>>16&255]<<16|E[S>>>8&255]<<8|E[O&255])^C[H++];x[v]=j,x[v+1]=J,x[v+2]=Y,x[v+3]=I},keySize:256/32});r.AES=s._createHelper(_)}(),t.AES})}(g0)),g0.exports}var m0={exports:{}},Of;function aA(){return Of||(Of=1,function(n,e){(function(t,r,i){n.exports=r(ve(),Ar(),wr(),Yn(),ot())})(X,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=i.BlockCipher,a=r.algo,c=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],l=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],u=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],f=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],h=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],d=a.DES=o.extend({_doReset:function(){for(var y=this._key,_=y.words,x=[],v=0;v<56;v++){var C=c[v]-1;x[v]=_[C>>>5]>>>31-C%32&1}for(var b=this._subKeys=[],A=0;A<16;A++){for(var w=b[A]=[],T=u[A],v=0;v<24;v++)w[v/6|0]|=x[(l[v]-1+T)%28]<<31-v%6,w[4+(v/6|0)]|=x[28+(l[v+24]-1+T)%28]<<31-v%6;w[0]=w[0]<<1|w[0]>>>31;for(var v=1;v<7;v++)w[v]=w[v]>>>(v-1)*4+3;w[7]=w[7]<<5|w[7]>>>27}for(var E=this._invSubKeys=[],v=0;v<16;v++)E[v]=b[15-v]},encryptBlock:function(y,_){this._doCryptBlock(y,_,this._subKeys)},decryptBlock:function(y,_){this._doCryptBlock(y,_,this._invSubKeys)},_doCryptBlock:function(y,_,x){this._lBlock=y[_],this._rBlock=y[_+1],p.call(this,4,252645135),p.call(this,16,65535),g.call(this,2,858993459),g.call(this,8,16711935),p.call(this,1,1431655765);for(var v=0;v<16;v++){for(var C=x[v],b=this._lBlock,A=this._rBlock,w=0,T=0;T<8;T++)w|=f[T][((A^C[T])&h[T])>>>0];this._lBlock=A,this._rBlock=b^w}var E=this._lBlock;this._lBlock=this._rBlock,this._rBlock=E,p.call(this,1,1431655765),g.call(this,8,16711935),g.call(this,2,858993459),p.call(this,16,65535),p.call(this,4,252645135),y[_]=this._lBlock,y[_+1]=this._rBlock},keySize:64/32,ivSize:64/32,blockSize:64/32});function p(y,_){var x=(this._lBlock>>>y^this._rBlock)&_;this._rBlock^=x,this._lBlock^=x<<y}function g(y,_){var x=(this._rBlock>>>y^this._lBlock)&_;this._lBlock^=x,this._rBlock^=x<<y}r.DES=o._createHelper(d);var m=a.TripleDES=o.extend({_doReset:function(){var y=this._key,_=y.words;if(_.length!==2&&_.length!==4&&_.length<6)throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");var x=_.slice(0,2),v=_.length<4?_.slice(0,2):_.slice(2,4),C=_.length<6?_.slice(0,2):_.slice(4,6);this._des1=d.createEncryptor(s.create(x)),this._des2=d.createEncryptor(s.create(v)),this._des3=d.createEncryptor(s.create(C))},encryptBlock:function(y,_){this._des1.encryptBlock(y,_),this._des2.decryptBlock(y,_),this._des3.encryptBlock(y,_)},decryptBlock:function(y,_){this._des3.decryptBlock(y,_),this._des2.encryptBlock(y,_),this._des1.decryptBlock(y,_)},keySize:192/32,ivSize:64/32,blockSize:64/32});r.TripleDES=o._createHelper(m)}(),t.TripleDES})}(m0)),m0.exports}var v0={exports:{}},Lf;function lA(){return Lf||(Lf=1,function(n,e){(function(t,r,i){n.exports=r(ve(),Ar(),wr(),Yn(),ot())})(X,function(t){return function(){var r=t,i=r.lib,s=i.StreamCipher,o=r.algo,a=o.RC4=s.extend({_doReset:function(){for(var u=this._key,f=u.words,h=u.sigBytes,d=this._S=[],p=0;p<256;p++)d[p]=p;for(var p=0,g=0;p<256;p++){var m=p%h,y=f[m>>>2]>>>24-m%4*8&255;g=(g+d[p]+y)%256;var _=d[p];d[p]=d[g],d[g]=_}this._i=this._j=0},_doProcessBlock:function(u,f){u[f]^=c.call(this)},keySize:256/32,ivSize:0});function c(){for(var u=this._S,f=this._i,h=this._j,d=0,p=0;p<4;p++){f=(f+1)%256,h=(h+u[f])%256;var g=u[f];u[f]=u[h],u[h]=g,d|=u[(u[f]+u[h])%256]<<24-p*8}return this._i=f,this._j=h,d}r.RC4=s._createHelper(a);var l=o.RC4Drop=a.extend({cfg:a.cfg.extend({drop:192}),_doReset:function(){a._doReset.call(this);for(var u=this.cfg.drop;u>0;u--)c.call(this)}});r.RC4Drop=s._createHelper(l)}(),t.RC4})}(v0)),v0.exports}var y0={exports:{}},Mf;function cA(){return Mf||(Mf=1,function(n,e){(function(t,r,i){n.exports=r(ve(),Ar(),wr(),Yn(),ot())})(X,function(t){return function(){var r=t,i=r.lib,s=i.StreamCipher,o=r.algo,a=[],c=[],l=[],u=o.Rabbit=s.extend({_doReset:function(){for(var h=this._key.words,d=this.cfg.iv,p=0;p<4;p++)h[p]=(h[p]<<8|h[p]>>>24)&16711935|(h[p]<<24|h[p]>>>8)&4278255360;var g=this._X=[h[0],h[3]<<16|h[2]>>>16,h[1],h[0]<<16|h[3]>>>16,h[2],h[1]<<16|h[0]>>>16,h[3],h[2]<<16|h[1]>>>16],m=this._C=[h[2]<<16|h[2]>>>16,h[0]&4294901760|h[1]&65535,h[3]<<16|h[3]>>>16,h[1]&4294901760|h[2]&65535,h[0]<<16|h[0]>>>16,h[2]&4294901760|h[3]&65535,h[1]<<16|h[1]>>>16,h[3]&4294901760|h[0]&65535];this._b=0;for(var p=0;p<4;p++)f.call(this);for(var p=0;p<8;p++)m[p]^=g[p+4&7];if(d){var y=d.words,_=y[0],x=y[1],v=(_<<8|_>>>24)&16711935|(_<<24|_>>>8)&4278255360,C=(x<<8|x>>>24)&16711935|(x<<24|x>>>8)&4278255360,b=v>>>16|C&4294901760,A=C<<16|v&65535;m[0]^=v,m[1]^=b,m[2]^=C,m[3]^=A,m[4]^=v,m[5]^=b,m[6]^=C,m[7]^=A;for(var p=0;p<4;p++)f.call(this)}},_doProcessBlock:function(h,d){var p=this._X;f.call(this),a[0]=p[0]^p[5]>>>16^p[3]<<16,a[1]=p[2]^p[7]>>>16^p[5]<<16,a[2]=p[4]^p[1]>>>16^p[7]<<16,a[3]=p[6]^p[3]>>>16^p[1]<<16;for(var g=0;g<4;g++)a[g]=(a[g]<<8|a[g]>>>24)&16711935|(a[g]<<24|a[g]>>>8)&4278255360,h[d+g]^=a[g]},blockSize:128/32,ivSize:64/32});function f(){for(var h=this._X,d=this._C,p=0;p<8;p++)c[p]=d[p];d[0]=d[0]+1295307597+this._b|0,d[1]=d[1]+3545052371+(d[0]>>>0<c[0]>>>0?1:0)|0,d[2]=d[2]+886263092+(d[1]>>>0<c[1]>>>0?1:0)|0,d[3]=d[3]+1295307597+(d[2]>>>0<c[2]>>>0?1:0)|0,d[4]=d[4]+3545052371+(d[3]>>>0<c[3]>>>0?1:0)|0,d[5]=d[5]+886263092+(d[4]>>>0<c[4]>>>0?1:0)|0,d[6]=d[6]+1295307597+(d[5]>>>0<c[5]>>>0?1:0)|0,d[7]=d[7]+3545052371+(d[6]>>>0<c[6]>>>0?1:0)|0,this._b=d[7]>>>0<c[7]>>>0?1:0;for(var p=0;p<8;p++){var g=h[p]+d[p],m=g&65535,y=g>>>16,_=((m*m>>>17)+m*y>>>15)+y*y,x=((g&4294901760)*g|0)+((g&65535)*g|0);l[p]=_^x}h[0]=l[0]+(l[7]<<16|l[7]>>>16)+(l[6]<<16|l[6]>>>16)|0,h[1]=l[1]+(l[0]<<8|l[0]>>>24)+l[7]|0,h[2]=l[2]+(l[1]<<16|l[1]>>>16)+(l[0]<<16|l[0]>>>16)|0,h[3]=l[3]+(l[2]<<8|l[2]>>>24)+l[1]|0,h[4]=l[4]+(l[3]<<16|l[3]>>>16)+(l[2]<<16|l[2]>>>16)|0,h[5]=l[5]+(l[4]<<8|l[4]>>>24)+l[3]|0,h[6]=l[6]+(l[5]<<16|l[5]>>>16)+(l[4]<<16|l[4]>>>16)|0,h[7]=l[7]+(l[6]<<8|l[6]>>>24)+l[5]|0}r.Rabbit=s._createHelper(u)}(),t.Rabbit})}(y0)),y0.exports}var C0={exports:{}},$f;function uA(){return $f||($f=1,function(n,e){(function(t,r,i){n.exports=r(ve(),Ar(),wr(),Yn(),ot())})(X,function(t){return function(){var r=t,i=r.lib,s=i.StreamCipher,o=r.algo,a=[],c=[],l=[],u=o.RabbitLegacy=s.extend({_doReset:function(){var h=this._key.words,d=this.cfg.iv,p=this._X=[h[0],h[3]<<16|h[2]>>>16,h[1],h[0]<<16|h[3]>>>16,h[2],h[1]<<16|h[0]>>>16,h[3],h[2]<<16|h[1]>>>16],g=this._C=[h[2]<<16|h[2]>>>16,h[0]&4294901760|h[1]&65535,h[3]<<16|h[3]>>>16,h[1]&4294901760|h[2]&65535,h[0]<<16|h[0]>>>16,h[2]&4294901760|h[3]&65535,h[1]<<16|h[1]>>>16,h[3]&4294901760|h[0]&65535];this._b=0;for(var m=0;m<4;m++)f.call(this);for(var m=0;m<8;m++)g[m]^=p[m+4&7];if(d){var y=d.words,_=y[0],x=y[1],v=(_<<8|_>>>24)&16711935|(_<<24|_>>>8)&4278255360,C=(x<<8|x>>>24)&16711935|(x<<24|x>>>8)&4278255360,b=v>>>16|C&4294901760,A=C<<16|v&65535;g[0]^=v,g[1]^=b,g[2]^=C,g[3]^=A,g[4]^=v,g[5]^=b,g[6]^=C,g[7]^=A;for(var m=0;m<4;m++)f.call(this)}},_doProcessBlock:function(h,d){var p=this._X;f.call(this),a[0]=p[0]^p[5]>>>16^p[3]<<16,a[1]=p[2]^p[7]>>>16^p[5]<<16,a[2]=p[4]^p[1]>>>16^p[7]<<16,a[3]=p[6]^p[3]>>>16^p[1]<<16;for(var g=0;g<4;g++)a[g]=(a[g]<<8|a[g]>>>24)&16711935|(a[g]<<24|a[g]>>>8)&4278255360,h[d+g]^=a[g]},blockSize:128/32,ivSize:64/32});function f(){for(var h=this._X,d=this._C,p=0;p<8;p++)c[p]=d[p];d[0]=d[0]+1295307597+this._b|0,d[1]=d[1]+3545052371+(d[0]>>>0<c[0]>>>0?1:0)|0,d[2]=d[2]+886263092+(d[1]>>>0<c[1]>>>0?1:0)|0,d[3]=d[3]+1295307597+(d[2]>>>0<c[2]>>>0?1:0)|0,d[4]=d[4]+3545052371+(d[3]>>>0<c[3]>>>0?1:0)|0,d[5]=d[5]+886263092+(d[4]>>>0<c[4]>>>0?1:0)|0,d[6]=d[6]+1295307597+(d[5]>>>0<c[5]>>>0?1:0)|0,d[7]=d[7]+3545052371+(d[6]>>>0<c[6]>>>0?1:0)|0,this._b=d[7]>>>0<c[7]>>>0?1:0;for(var p=0;p<8;p++){var g=h[p]+d[p],m=g&65535,y=g>>>16,_=((m*m>>>17)+m*y>>>15)+y*y,x=((g&4294901760)*g|0)+((g&65535)*g|0);l[p]=_^x}h[0]=l[0]+(l[7]<<16|l[7]>>>16)+(l[6]<<16|l[6]>>>16)|0,h[1]=l[1]+(l[0]<<8|l[0]>>>24)+l[7]|0,h[2]=l[2]+(l[1]<<16|l[1]>>>16)+(l[0]<<16|l[0]>>>16)|0,h[3]=l[3]+(l[2]<<8|l[2]>>>24)+l[1]|0,h[4]=l[4]+(l[3]<<16|l[3]>>>16)+(l[2]<<16|l[2]>>>16)|0,h[5]=l[5]+(l[4]<<8|l[4]>>>24)+l[3]|0,h[6]=l[6]+(l[5]<<16|l[5]>>>16)+(l[4]<<16|l[4]>>>16)|0,h[7]=l[7]+(l[6]<<8|l[6]>>>24)+l[5]|0}r.RabbitLegacy=s._createHelper(u)}(),t.RabbitLegacy})}(C0)),C0.exports}var E0={exports:{}},Hf;function hA(){return Hf||(Hf=1,function(n,e){(function(t,r,i){n.exports=r(ve(),Ar(),wr(),Yn(),ot())})(X,function(t){return function(){var r=t,i=r.lib,s=i.BlockCipher,o=r.algo;const a=16,c=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],l=[[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946],[1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055],[3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504],[976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462]];var u={pbox:[],sbox:[]};function f(m,y){let _=y>>24&255,x=y>>16&255,v=y>>8&255,C=y&255,b=m.sbox[0][_]+m.sbox[1][x];return b=b^m.sbox[2][v],b=b+m.sbox[3][C],b}function h(m,y,_){let x=y,v=_,C;for(let b=0;b<a;++b)x=x^m.pbox[b],v=f(m,x)^v,C=x,x=v,v=C;return C=x,x=v,v=C,v=v^m.pbox[a],x=x^m.pbox[a+1],{left:x,right:v}}function d(m,y,_){let x=y,v=_,C;for(let b=a+1;b>1;--b)x=x^m.pbox[b],v=f(m,x)^v,C=x,x=v,v=C;return C=x,x=v,v=C,v=v^m.pbox[1],x=x^m.pbox[0],{left:x,right:v}}function p(m,y,_){for(let A=0;A<4;A++){m.sbox[A]=[];for(let w=0;w<256;w++)m.sbox[A][w]=l[A][w]}let x=0;for(let A=0;A<a+2;A++)m.pbox[A]=c[A]^y[x],x++,x>=_&&(x=0);let v=0,C=0,b=0;for(let A=0;A<a+2;A+=2)b=h(m,v,C),v=b.left,C=b.right,m.pbox[A]=v,m.pbox[A+1]=C;for(let A=0;A<4;A++)for(let w=0;w<256;w+=2)b=h(m,v,C),v=b.left,C=b.right,m.sbox[A][w]=v,m.sbox[A][w+1]=C;return!0}var g=o.Blowfish=s.extend({_doReset:function(){if(this._keyPriorReset!==this._key){var m=this._keyPriorReset=this._key,y=m.words,_=m.sigBytes/4;p(u,y,_)}},encryptBlock:function(m,y){var _=h(u,m[y],m[y+1]);m[y]=_.left,m[y+1]=_.right},decryptBlock:function(m,y){var _=d(u,m[y],m[y+1]);m[y]=_.left,m[y+1]=_.right},blockSize:64/32,keySize:128/32,ivSize:64/32});r.Blowfish=s._createHelper(g)}(),t.Blowfish})}(E0)),E0.exports}(function(n,e){(function(t,r,i){n.exports=r(ve(),sa(),Ub(),Wb(),Ar(),zb(),wr(),eg(),lu(),qb(),tg(),Vb(),Gb(),jb(),cu(),Kb(),Yn(),ot(),Yb(),Qb(),Xb(),Zb(),Jb(),eA(),tA(),nA(),rA(),iA(),sA(),oA(),aA(),lA(),cA(),uA(),hA())})(X,function(t){return t})})(X1);var Gl=X1.exports;let wt=n=>{n.target.closest("button").blur()},ng=(n,e)=>{let t=localStorage.getItem(n);return qt(t?JSON.parse(t):e)},fA=(n,e)=>n.subscribe(t=>localStorage.setItem(e,JSON.stringify(t))),Qt=n=>n!=null&&Object.keys(n).length,Lr=()=>!Wm(Xe).preventClosing&&Xe.set(uu(hu.promptData)),uu=n=>JSON.parse(JSON.stringify(n)),Uf=(n,e)=>Gl.AES.encrypt(n,Lt.currentUser.uid+581827).toString(),b0=(n,e)=>Gl.AES.decrypt(n,(e||Lt.currentUser.uid)+581827).toString(Gl.enc.Utf8),dA=n=>{let e;for(let t in Gr)if(Gr[t].userList.includes(n.toLowerCase())){e=t;break}return e||(e="User"),e},rg=(n,e)=>{Ql.update(t=>[...t,{icon:Ob[n],text:e}]),setTimeout(()=>Ql.update(t=>t.slice(1)),3e3)},pA=()=>history.replaceState(history.state,null,location.origin+location.pathname);const hu={promptData:{component:null,props:{},focus:"",hasWrapper:!1,preventClosing:!1},supportMe:{showAgain:!0,timesDenied:0,totalVisits:0,lastVisits:0}};let to=qt(!1),jl=qt({}),Kl=qt(!1),fs=qt(""),Yl=qt(!1),zs=qt({select:new Audio,day:new Audio,night:new Audio,nightWarning:new Audio}),Xe=qt(uu(hu.promptData)),Ql=qt([]),kn=ng("fcl-supportMe",uu(hu.supportMe)),ds=ng("fcl-changelogSeen",!1),Xl=qt(new Date),no=qt({muted:!1,altHourFormat:!1}),ro=qt({day:!1,night:!1}),Wf={"fcl-supportMe":kn,"fcl-changelogSeen":ds};for(let n in Wf)fA(Wf[n],n);function ig(n){const e=n-1;return e*e*e+1}function en(n,{delay:e=0,duration:t=400,easing:r=vs}={}){const i=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:r,css:s=>`opacity: ${s*i}`}}function So(n,{delay:e=0,duration:t=400,easing:r=ig,start:i=0,opacity:s=0}={}){const o=getComputedStyle(n),a=+o.opacity,c=o.transform==="none"?"":o.transform,l=1-i,u=a*(1-s);return{delay:e,duration:t,easing:r,css:(f,h)=>`
			transform: ${c} scale(${1-l*h});
			opacity: ${a-u*h}
		`}}function _A(n){let e,t,r,i,s;return{c(){e=P("span"),e.textContent="Credits",t=q(),r=P("hr"),i=q(),s=P("div"),s.innerHTML=`<div><p class="flex fjc-center fai-center cg-1"><span>This is a personal project. Contact me directly on</span> <iconify-icon id="discord" icon="ic:baseline-discord"></iconify-icon> <bl>Discord</bl> at<hl>xt.ss</hl>,</p> <p class="cg-1"><span>or in the</span> <a class="cg-1" href="https://discord.gg/ff" target="_blank">Fantastic Frontier Discord Server</a> <span>for inquiries or feedback!</span></p></div> <div><p class="flex fjc-center fai-center cg-1"><span>Frontier Clock especially took heavy inspiration from</span> <a class="flex fjc-center fai-center cg-1" href="https://sky-clock.netlify.app/" target="_blank"><iconify-icon icon="charm:clock"></iconify-icon>
                Sky Clock
            </a>,</p> <p class="flex fjc-center fai-center cg-1"><span>and certainly wouldn&#39;t be here without the</span> <a class="flex fjc-center fai-center cg-1" href="https://fantastic-frontier-roblox.fandom.com/wiki/Fantastic_Frontier_-_Roblox_Wiki" target="_blank"><iconify-icon icon="simple-icons:fandom"></iconify-icon> <span>Fantastic Frontier Wiki</span> </a>.</p></div> <div><p class="flex fjc-center"><span class="title">Special Thanks to:</span></p> <p class="flex fjc-center fai-center cg-1"><span>— Spectrabox and Gorbachelli, for creating truly such a</span> <a href="https://www.roblox.com/games/510411669/Fantastic-Frontier" class="flex fjc-center fai-center cg-1"><iconify-icon icon="simple-icons:roblox"></iconify-icon> <span>fantastic game.</span></a></p></div>`,L(e,"class","title"),L(s,"class","credits contents flex fd-col smaller-fs")},m(o,a){$(o,e,a),$(o,t,a),$(o,r,a),$(o,i,a),$(o,s,a)},p:le,i:le,o:le,d(o){o&&(M(e),M(t),M(r),M(i),M(s))}}}class xA extends ht{constructor(e){super(),ut(this,e,null,_A,Ke,{})}}function zf(n,e,t){const r=n.slice();return r[5]=e[t],r}function gA(n){let e,t=Oe(n[1]),r=[];for(let i=0;i<t.length;i+=1)r[i]=qf(zf(n,t,i));return{c(){for(let i=0;i<r.length;i+=1)r[i].c();e=tn()},m(i,s){for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(i,s);$(i,e,s)},p(i,s){if(s&2){t=Oe(i[1]);let o;for(o=0;o<t.length;o+=1){const a=zf(i,t,o);r[o]?r[o].p(a,s):(r[o]=qf(a),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=t.length}},d(i){i&&M(e),Mt(r,i)}}}function mA(n){let e,t,r;return{c(){e=P("span"),t=te("— "),r=te(n[1]),L(e,"id","cliInfo")},m(i,s){$(i,e,s),R(e,t),R(e,r)},p(i,s){s&2&&me(r,i[1])},d(i){i&&M(e)}}}function qf(n){let e,t,r=n[5]+"",i;return{c(){e=P("span"),t=te("— "),i=te(r),L(e,"id","cliInfo")},m(s,o){$(s,e,o),R(e,t),R(e,i)},p(s,o){o&2&&r!==(r=s[5]+"")&&me(i,r)},d(s){s&&M(e)}}}function vA(n){let e,t,r,i,s,o,a,c,l;function u(d,p){return typeof d[1]=="string"?mA:gA}let f=u(n),h=f(n);return{c(){e=P("hr"),t=q(),r=P("li"),i=P("span"),s=te("v"),o=te(n[0]),a=q(),c=P("i"),c.textContent=`${`${n[3][n[2][1]-1]} ${n[2][0]}, 20${n[2][2]}`}`,l=q(),h.c(),L(i,"id","cliVersion"),L(c,"id","cliDate"),L(r,"class","changelogItem flex fw fai-center")},m(d,p){$(d,e,p),$(d,t,p),$(d,r,p),R(r,i),R(i,s),R(i,o),R(r,a),R(r,c),R(r,l),h.m(r,null)},p(d,[p]){p&1&&me(o,d[0]),f===(f=u(d))&&h?h.p(d,p):(h.d(1),h=f(d),h&&(h.c(),h.m(r,null)))},i:le,o:le,d(d){d&&(M(e),M(t),M(r)),h.d()}}}function yA(n,e,t){let{version:r,date:i,logs:s}=e,o=i.split("/"),a=["January","February","March","April","May","June","July","August","September","October","November","December"];return n.$$set=c=>{"version"in c&&t(0,r=c.version),"date"in c&&t(4,i=c.date),"logs"in c&&t(1,s=c.logs)},[r,s,o,a,i]}class CA extends ht{constructor(e){super(),ut(this,e,yA,vA,Ke,{version:0,date:4,logs:1})}}function Vf(n,e,t){const r=n.slice();return r[1]=e[t],r}function Gf(n){let e,t;const r=[n[1]];let i={};for(let s=0;s<r.length;s+=1)i=Un(i,r[s]);return e=new CA({props:i}),{c(){Tt(e.$$.fragment)},m(s,o){Et(e,s,o),t=!0},p(s,o){const a=o&1?Wn(r,[ns(s[1])]):{};e.$set(a)},i(s){t||(ne(e.$$.fragment,s),t=!0)},o(s){oe(e.$$.fragment,s),t=!1},d(s){bt(e,s)}}}function EA(n){let e,t,r,i,s,o,a=Oe(n[0].toReversed()),c=[];for(let u=0;u<a.length;u+=1)c[u]=Gf(Vf(n,a,u));const l=u=>oe(c[u],1,1,()=>{c[u]=null});return{c(){e=P("span"),e.textContent="Changelog",t=q(),r=P("hr"),i=q(),s=P("ul");for(let u=0;u<c.length;u+=1)c[u].c();L(e,"class","title"),L(s,"class","changelog contents flex fd-col smaller-fs")},m(u,f){$(u,e,f),$(u,t,f),$(u,r,f),$(u,i,f),$(u,s,f);for(let h=0;h<c.length;h+=1)c[h]&&c[h].m(s,null);o=!0},p(u,[f]){if(f&1){a=Oe(u[0].toReversed());let h;for(h=0;h<a.length;h+=1){const d=Vf(u,a,h);c[h]?(c[h].p(d,f),ne(c[h],1)):(c[h]=Gf(d),c[h].c(),ne(c[h],1),c[h].m(s,null))}for(it(),h=a.length;h<c.length;h+=1)l(h);st()}},i(u){if(!o){for(let f=0;f<a.length;f+=1)ne(c[f]);o=!0}},o(u){c=c.filter(Boolean);for(let f=0;f<c.length;f+=1)oe(c[f]);o=!1},d(u){u&&(M(e),M(t),M(r),M(i),M(s)),Mt(c,u)}}}function bA(n){return[[{version:"1.0.0",date:"13/6/25",logs:"v1 Release"}]]}class AA extends ht{constructor(e){super(),ut(this,e,bA,EA,Ke,{})}}function wA(n){let e,t,r,i,s;return{c(){e=P("span"),e.textContent="Frontier Clock Policy",t=q(),r=P("hr"),i=q(),s=P("div"),s.innerHTML=`<b>About</b> <p>This site is a passion project, one that is independent and is not
        affiliated with or sponsored by the creators of Fantastic Frontier.</p> <b>Privacy Policy</b> <p>This policy explains what information Frontier Clock (&quot;we&quot;, &quot;us&quot; or
        &quot;our&quot;) collects, uses, and shares when you use our website.</p> <b>Information We Collect</b> <p>We collect information about how you use and interact with our website,
        general demographic details, and information about your device or
        browser.</p> <b>How We Use This Information</b> <p>Your information may be utilized to test and improve the site, once the
        aggregated, non-identifying information provided has been collected and
        analyzed.</p> <b>Contact</b> <p>For any questions or inquiries, feel free to contact us at <hl>@xt.ss</hl>.</p>`,L(e,"class","title"),L(s,"class","policy contents flex fd-col smaller-fs")},m(o,a){$(o,e,a),$(o,t,a),$(o,r,a),$(o,i,a),$(o,s,a)},p:le,i:le,o:le,d(o){o&&(M(e),M(t),M(r),M(i),M(s))}}}class DA extends ht{constructor(e){super(),ut(this,e,null,wA,Ke,{})}}function jf(n,e,t){const r=n.slice();return r[58]=e[t],r}function IA(n){let e,t,r,i,s,o,a,c,l,u,f,h,d,p,g,m,y,_,x=n[10]?"Hide":"Show",v,C,b,A,w=!n[8]&&Kf(n);function T(H,z){return H[8]?BA:TA}let E=T(n),D=E(n),B=[{type:n[10]?"text":"password"},{minlength:"6"},{maxlength:"20"},{placeholder:h=(n[8]?"New":"")+" Password"},{autocomplete:d=(n[1]||n[8]?"new":"current")+"-password"},{class:"font-ms"}],S={};for(let H=0;H<B.length;H+=1)S=Un(S,B[H]);let O=(n[1]||n[8])&&Yf(n),U=!n[1]&&!n[8]&&Qf(n);return{c(){w&&w.c(),e=q(),t=P("div"),r=P("div"),i=P("div"),s=P("iconify-icon"),o=q(),D.c(),a=q(),c=P("div"),l=P("iconify-icon"),u=q(),f=P("input"),p=q(),O&&O.c(),g=q(),m=P("div"),U&&U.c(),y=q(),_=P("button"),v=te(x),C=te(" password"),De(s,"icon","lucide:user-round"),L(i,"class","flex fai-center br-1"),Be(i,"ff-item",n[8]),Be(i,"border-tp",!n[8]),De(l,"icon","material-symbols:lock-outline"),lr(f,S),L(c,"class","flex fai-center pos-rel border-tp br-1"),L(r,"class","formInputs flex fd-col rg-1"),L(_,"class","textBtn smaller-fs no-bg no-bg-change"),L(m,"class","flex"),Ge(m,"justify-content",n[1]||n[8]?"flex-end":"space-between")},m(H,z){w&&w.m(H,z),$(H,e,z),$(H,t,z),R(t,r),R(r,i),R(i,s),R(i,o),D.m(i,null),R(r,a),R(r,c),R(c,l),R(c,u),R(c,f),f.autofocus&&f.focus(),Ut(f,n[2].password),R(r,p),O&&O.m(r,null),R(t,g),R(t,m),U&&U.m(m,null),R(m,y),R(m,_),R(_,v),R(_,C),b||(A=[he(f,"input",n[33]),he(f,"input",n[34]),he(_,"click",n[38])],b=!0)},p(H,z){H[8]?w&&(w.d(1),w=null):w?w.p(H,z):(w=Kf(H),w.c(),w.m(e.parentNode,e)),E===(E=T(H))&&D?D.p(H,z):(D.d(1),D=E(H),D&&(D.c(),D.m(i,null))),z[0]&256&&Be(i,"ff-item",H[8]),z[0]&256&&Be(i,"border-tp",!H[8]),lr(f,S=Wn(B,[z[0]&1024&&{type:H[10]?"text":"password"},{minlength:"6"},{maxlength:"20"},z[0]&256&&h!==(h=(H[8]?"New":"")+" Password")&&{placeholder:h},z[0]&258&&d!==(d=(H[1]||H[8]?"new":"current")+"-password")&&{autocomplete:d},{class:"font-ms"}])),z[0]&4&&f.value!==H[2].password&&Ut(f,H[2].password),H[1]||H[8]?O?O.p(H,z):(O=Yf(H),O.c(),O.m(r,null)):O&&(O.d(1),O=null),!H[1]&&!H[8]?U?U.p(H,z):(U=Qf(H),U.c(),U.m(m,y)):U&&(U.d(1),U=null),z[0]&1024&&x!==(x=H[10]?"Hide":"Show")&&me(v,x),z[0]&258&&Ge(m,"justify-content",H[1]||H[8]?"flex-end":"space-between")},d(H){H&&(M(e),M(t)),w&&w.d(H),D.d(),O&&O.d(),U&&U.d(),b=!1,je(A)}}}function SA(n){let e,t,r,i,s,o,a,c,l,u,f,h,d,p,g;function m(w,T){return w[7]?FA:kA}let y=m(n),_=y(n);function x(w,T){if(w[7])return NA;if(w[6]||w[9])return RA}let v=x(n),C=v&&v(n),b=!n[0]&&Xf(n),A=n[0]&&!n[9]&&Zf(n);return{c(){e=P("div"),_.c(),t=q(),r=P("div"),i=P("div"),C&&C.c(),s=q(),o=P("div"),a=P("iconify-icon"),c=q(),l=P("input"),f=q(),b&&b.c(),h=q(),A&&A.c(),d=tn(),L(e,"class","smaller-fs"),Ge(e,"letter-spacing","-0.05rem"),Ge(e,"line-height","3.75rem"),De(a,"icon","jam:write"),l.disabled=u=!n[9]&&n[0]&&!!n[2].password,L(l,"type","text"),L(l,"autocomplete","off"),L(l,"minlength","1"),L(l,"maxlength","35"),L(l,"placeholder","Your answer"),L(l,"class","font-ms"),L(o,"class","flex fai-center pos-rel border-tp br-1"),L(i,"class","formInputs flex fd-col rg-1"),L(r,"class","flex fd-col")},m(w,T){$(w,e,T),_.m(e,null),$(w,t,T),$(w,r,T),R(r,i),C&&C.m(i,null),R(i,s),R(i,o),R(o,a),R(o,c),R(o,l),Ut(l,n[2].answer),R(r,f),b&&b.m(r,null),$(w,h,T),A&&A.m(w,T),$(w,d,T),p||(g=[he(l,"input",n[24]),he(l,"input",n[25])],p=!0)},p(w,T){y===(y=m(w))&&_?_.p(w,T):(_.d(1),_=y(w),_&&(_.c(),_.m(e,null))),v===(v=x(w))&&C?C.p(w,T):(C&&C.d(1),C=v&&v(w),C&&(C.c(),C.m(i,s))),T[0]&517&&u!==(u=!w[9]&&w[0]&&!!w[2].password)&&(l.disabled=u),T[0]&4&&l.value!==w[2].answer&&Ut(l,w[2].answer),w[0]?b&&(b.d(1),b=null):b?b.p(w,T):(b=Xf(w),b.c(),b.m(r,null)),w[0]&&!w[9]?A?A.p(w,T):(A=Zf(w),A.c(),A.m(d.parentNode,d)):A&&(A.d(1),A=null)},d(w){w&&(M(e),M(t),M(r),M(h),M(d)),_.d(),C&&C.d(),b&&b.d(),A&&A.d(w),p=!1,je(g)}}}function Kf(n){let e,t=n[1]?"Already have":"Don't have",r,i,s,o=n[1]?"Log In":"Sign Up",a,c,l;return{c(){e=P("div"),r=te(t),i=te(` an account?\r
                `),s=P("button"),a=te(o),s.disabled=n[4],L(s,"class","border-tp br-1"),L(s,"id","switchMethod"),L(e,"class","smaller-fs")},m(u,f){$(u,e,f),R(e,r),R(e,i),R(e,s),R(s,a),c||(l=he(s,"click",n[30]),c=!0)},p(u,f){f[0]&2&&t!==(t=u[1]?"Already have":"Don't have")&&me(r,t),f[0]&2&&o!==(o=u[1]?"Log In":"Sign Up")&&me(a,o),f[0]&16&&(s.disabled=u[4])},d(u){u&&M(e),c=!1,l()}}}function TA(n){let e,t,r;return{c(){e=P("input"),L(e,"type","text"),L(e,"minlength","2"),L(e,"maxlength","20"),L(e,"placeholder","Username"),L(e,"autocomplete","username"),L(e,"class","font-ms")},m(i,s){$(i,e,s),Ut(e,n[2].username),t||(r=[he(e,"input",n[31]),he(e,"input",n[32])],t=!0)},p(i,s){s[0]&4&&e.value!==i[2].username&&Ut(e,i[2].username)},d(i){i&&M(e),t=!1,je(r)}}}function BA(n){let e,t=n[11].displayName+"",r;return{c(){e=P("span"),r=te(t),L(e,"class","flex fjc-center"),Ge(e,"flex","1")},m(i,s){$(i,e,s),R(e,r)},p(i,s){s[0]&2048&&t!==(t=i[11].displayName+"")&&me(r,t)},d(i){i&&M(e)}}}function Yf(n){let e,t,r,i,s,o,a,c=[{type:n[10]?"text":"password"},{minlength:"6"},{maxlength:"20"},{placeholder:s="Confirm "+(n[8]?"New Password":"Password")},{autocomplete:"new-password"},{class:"font-ms"}],l={};for(let u=0;u<c.length;u+=1)l=Un(l,c[u]);return{c(){e=P("div"),t=P("iconify-icon"),r=q(),i=P("input"),De(t,"icon","material-symbols:lock"),lr(i,l),L(e,"class","flex fai-center pos-rel border-tp br-1")},m(u,f){$(u,e,f),R(e,t),R(e,r),R(e,i),i.autofocus&&i.focus(),Ut(i,n[2].confirm),o||(a=[he(i,"input",n[35]),he(i,"input",n[36])],o=!0)},p(u,f){lr(i,l=Wn(c,[f[0]&1024&&{type:u[10]?"text":"password"},{minlength:"6"},{maxlength:"20"},f[0]&256&&s!==(s="Confirm "+(u[8]?"New Password":"Password"))&&{placeholder:s},{autocomplete:"new-password"},{class:"font-ms"}])),f[0]&4&&i.value!==u[2].confirm&&Ut(i,u[2].confirm)},d(u){u&&M(e),o=!1,je(a)}}}function Qf(n){let e,t,r,i;return{c(){e=P("button"),t=te("Forgot password?"),e.disabled=n[4],L(e,"class","textBtn smaller-fs no-bg no-bg-change")},m(s,o){$(s,e,o),R(e,t),r||(i=he(e,"click",n[37]),r=!0)},p(s,o){o[0]&16&&(e.disabled=s[4])},d(s){s&&M(e),r=!1,i()}}}function kA(n){let e,t=n[9]?"another":"a",r,i,s,o,a=n[9]?"again":"",c,l,u,f,h,d,p,g,m,y,_;return{c(){e=te("Before finalizing, we ask you to create "),r=te(t),i=q(),s=P("hl"),s.textContent="security question",o=te(`\r
                to answer in case you ever need to reset your password `),c=te(a),l=te(`.\r
                `),u=P("br"),f=q(),h=P("b"),h.textContent=`The answer should be confidential, easy to recall, and not\r
                    subject to change.`,d=q(),p=P("br"),g=te(`\r
                If you forget the `),m=P("hl"),m.textContent="exact answer",y=te(` (case-sensitive) along\r
                with your password, you may lose access to your account\r
                `),_=P("hl"),_.textContent="permanently!"},m(x,v){$(x,e,v),$(x,r,v),$(x,i,v),$(x,s,v),$(x,o,v),$(x,c,v),$(x,l,v),$(x,u,v),$(x,f,v),$(x,h,v),$(x,d,v),$(x,p,v),$(x,g,v),$(x,m,v),$(x,y,v),$(x,_,v)},p(x,v){v[0]&512&&t!==(t=x[9]?"another":"a")&&me(r,t),v[0]&512&&a!==(a=x[9]?"again":"")&&me(c,a)},d(x){x&&(M(e),M(r),M(i),M(s),M(o),M(c),M(l),M(u),M(f),M(h),M(d),M(p),M(g),M(m),M(y),M(_))}}}function FA(n){let e,t=n[0]?"security question and password":"password",r,i;return{c(){e=te("Answer the following prompt to reset your "),r=te(t),i=te(":")},m(s,o){$(s,e,o),$(s,r,o),$(s,i,o)},p(s,o){o[0]&1&&t!==(t=s[0]?"security question and password":"password")&&me(r,t)},d(s){s&&(M(e),M(r),M(i))}}}function RA(n){let e,t,r,i,s,o;return{c(){e=P("div"),t=P("iconify-icon"),r=q(),i=P("input"),De(t,"icon","f7:question-square"),L(i,"type","text"),L(i,"autocomplete","off"),L(i,"minlength","10"),L(i,"maxlength","35"),L(i,"placeholder","Your question"),L(i,"class","font-ms"),L(e,"class","flex fai-center border-tp br-1")},m(a,c){$(a,e,c),R(e,t),R(e,r),R(e,i),Ut(i,n[2].question),s||(o=[he(i,"input",n[22]),he(i,"input",n[23])],s=!0)},p(a,c){c[0]&4&&i.value!==a[2].question&&Ut(i,a[2].question)},d(a){a&&M(e),s=!1,je(o)}}}function NA(n){let e,t,r,i,s=(Qt(n[11])?n[11].security.question:"...")+"",o;return{c(){e=P("div"),t=P("iconify-icon"),r=q(),i=P("span"),o=te(s),De(t,"icon","f7:question-square"),L(i,"class","flex fjc-center"),Ge(i,"flex","1"),L(e,"class","ff-item flex fai-center br-1")},m(a,c){$(a,e,c),R(e,t),R(e,r),R(e,i),R(i,o)},p(a,c){c[0]&2048&&s!==(s=(Qt(a[11])?a[11].security.question:"...")+"")&&me(o,s)},d(a){a&&M(e)}}}function Xf(n){let e,t,r,i=n[6]?"Sign Up":n[9]?"Password Reset":"Log In",s,o,a;return{c(){e=P("div"),t=P("button"),r=te("Back to "),s=te(i),t.disabled=n[4],L(t,"class","textBtn smaller-fs no-bg no-bg-change"),L(e,"class","flex")},m(c,l){$(c,e,l),R(e,t),R(t,r),R(t,s),o||(a=he(t,"click",n[26]),o=!0)},p(c,l){l[0]&576&&i!==(i=c[6]?"Sign Up":c[9]?"Password Reset":"Log In")&&me(s,i),l[0]&16&&(t.disabled=c[4])},d(c){c&&M(e),o=!1,a()}}}function Zf(n){let e,t,r,i,s,o,a,c,l,u,f,h,d,p=n[10]?"Hide":"Show",g,m,y,_,x=[{disabled:l=!!n[2].answer},{type:n[10]?"text":"password"},{minlength:"6"},{maxlength:"20"},{placeholder:u=(n[8]?"New":"")+" Password"},{class:"font-ms"}],v={};for(let C=0;C<x.length;C+=1)v=Un(v,x[C]);return{c(){e=P("span"),e.textContent=`or, alternatively, input your current password in case you know\r
                it:`,t=q(),r=P("div"),i=P("div"),s=P("div"),o=P("iconify-icon"),a=q(),c=P("input"),f=q(),h=P("div"),d=P("button"),g=te(p),m=te(" password"),L(e,"class","smaller-fs"),De(o,"icon","material-symbols:lock-outline"),lr(c,v),L(s,"class","flex fai-center pos-rel border-tp br-1"),L(i,"class","formInputs flex fd-col rg-1"),L(d,"class","textBtn smaller-fs no-bg no-bg-change"),L(h,"class","flex"),Ge(h,"justify-content","flex-end")},m(C,b){$(C,e,b),$(C,t,b),$(C,r,b),R(r,i),R(i,s),R(s,o),R(s,a),R(s,c),c.autofocus&&c.focus(),Ut(c,n[2].password),R(r,f),R(r,h),R(h,d),R(d,g),R(d,m),y||(_=[he(c,"input",n[27]),he(c,"input",n[28]),he(d,"click",n[29])],y=!0)},p(C,b){lr(c,v=Wn(x,[b[0]&4&&l!==(l=!!C[2].answer)&&{disabled:l},b[0]&1024&&{type:C[10]?"text":"password"},{minlength:"6"},{maxlength:"20"},b[0]&256&&u!==(u=(C[8]?"New":"")+" Password")&&{placeholder:u},{class:"font-ms"}])),b[0]&4&&c.value!==C[2].password&&Ut(c,C[2].password),b[0]&1024&&p!==(p=C[10]?"Hide":"Show")&&me(g,p)},d(C){C&&(M(e),M(t),M(r)),y=!1,je(_)}}}function Jf(n){let e,t=Oe(n[5]),r=[];for(let i=0;i<t.length;i+=1)r[i]=ed(jf(n,t,i));return{c(){e=P("div");for(let i=0;i<r.length;i+=1)r[i].c();L(e,"class","flex fd-col smaller-fs"),Ge(e,"color","var(--ff-red)")},m(i,s){$(i,e,s);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null)},p(i,s){if(s[0]&40){t=Oe(i[5]);let o;for(o=0;o<t.length;o+=1){const a=jf(i,t,o);r[o]?r[o].p(a,s):(r[o]=ed(a),r[o].c(),r[o].m(e,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=t.length}},d(i){i&&M(e),Mt(r,i)}}}function ed(n){let e,t,r=n[3][n[58]].message+"",i;return{c(){e=P("span"),t=te("- "),i=te(r)},m(s,o){$(s,e,o),R(e,t),R(e,i)},p(s,o){o[0]&40&&r!==(r=s[3][s[58]].message+"")&&me(i,r)},d(s){s&&M(e)}}}function PA(n){let e,t=n[6]||n[9]?`Security ${n[0]?"Reset":"Question"}`:n[1]?"Sign Up":n[7]||n[8]?`${n[0]?"Security":"Password"} Reset`:"Log In",r,i,s,o,a,c,l,u,f=n[6]?"Create Account":n[9]?`Reset ${n[0]?"":"& Log In"}`:n[1]||n[7]||n[8]?"Next":"Log In",h,d,p;function g(x,v){return x[6]||x[9]||x[7]?SA:IA}let m=g(n),y=m(n),_=n[5].length&&Jf(n);return{c(){e=P("span"),r=te(t),i=q(),s=P("hr"),o=q(),a=P("div"),y.c(),c=q(),_&&_.c(),l=q(),u=P("button"),h=te(f),L(e,"class","title"),u.disabled=n[4],L(u,"class","mainBtn border-tp br-1"),L(a,"class","signupAndLogin contents flex fd-col smaller-fs"),Ge(a,"width",n[6]||n[9]||n[7]?"80rem":"")},m(x,v){$(x,e,v),R(e,r),$(x,i,v),$(x,s,v),$(x,o,v),$(x,a,v),y.m(a,null),R(a,c),_&&_.m(a,null),R(a,l),R(a,u),R(u,h),d||(p=he(u,"click",n[39]),d=!0)},p(x,v){v[0]&963&&t!==(t=x[6]||x[9]?`Security ${x[0]?"Reset":"Question"}`:x[1]?"Sign Up":x[7]||x[8]?`${x[0]?"Security":"Password"} Reset`:"Log In")&&me(r,t),m===(m=g(x))&&y?y.p(x,v):(y.d(1),y=m(x),y&&(y.c(),y.m(a,c))),x[5].length?_?_.p(x,v):(_=Jf(x),_.c(),_.m(a,l)):_&&(_.d(1),_=null),v[0]&963&&f!==(f=x[6]?"Create Account":x[9]?`Reset ${x[0]?"":"& Log In"}`:x[1]||x[7]||x[8]?"Next":"Log In")&&me(h,f),v[0]&16&&(u.disabled=x[4]),v[0]&704&&Ge(a,"width",x[6]||x[9]||x[7]?"80rem":"")},i:le,o:le,d(x){x&&(M(e),M(i),M(s),M(o),M(a)),y.d(),_&&_.d(),d=!1,p()}}}let OA=/[^a-zA-Z0-9_]/g,A0="@fantastic.frontier";function LA(n,e,t){let r,i,s;Se(n,Xe,se=>t(21,r=se)),Se(n,to,se=>t(40,i=se)),Se(n,fs,se=>t(41,s=se));let{onlyReset:o=!1,verifyAndSync:a}=e,c=!1,l=!1,u=!!o,f=!1,h=!1,d=!1,p=["admin","administrator","administration","advertiser","affiliate","affiliation","anonymous","bot","contributor","creator","designer","dev","developer","editor","guest","helper","management","manager","member","mod","moderation","moderator","name","operator","owner","service","staff","support","system","tester","user","username","visitor","website","xt8","xt8ss","xtss","xt_ss","you","yourname","yourusername"],g={question:"",answer:"",username:s||"",password:"",confirm:""},m={loginWrong:{active:!1,message:"That's not quite right!"},userNotFound:{active:!1,message:"Please make sure your username is correct!"},usernameUnavailable:{active:!1,message:"That username isn't available!"},usernameDupe:{active:!1,message:"That username is already taken!"},usernameLength:{active:!1,message:"Please make your username between 2-20 characters!"},passwordReset:{active:!1,message:"That's not quite right either!"},passwordLength:{active:!1,message:"Please make your password between 6-20 characters!"},passwordMatch:{active:!1,message:"Please make sure your passwords match!"},questionLength:{active:!1,message:"Please make your question between 10-35 characters!"},answerLength:{active:!1,message:"Please make your answer between 1-35 characters!"},answerWrong:{active:!1,message:"That's not quite right!"}},y=!1,_=[],x,v={},C=[];o&&E();async function b(){l||h?(H(),z(),setTimeout(()=>{_.length||(l?A():h&&T())})):c?(U(),S(),setTimeout(async()=>{if(!_.length){if(await E(),Qt(v)){N("usernameDupe");return}t(6,l=!0)}})):f?(S(),setTimeout(()=>{_.length||(t(2,g.answer="",g),t(9,h=!0))})):u?((!o||o&&!g.password)&&z(),o&&!g.answer&&O(),setTimeout(()=>{if(!_.length){if((!o||o&&!g.password)&&b0(v.security.answer.toString(),v.uid)!==g.answer){N("answerWrong");return}if(o&&!g.answer&&b0(v.password,v.uid)!==g.password){N("loginWrong");return}t(2,g.password="",g),t(2,g.confirm="",g),t(7,u=!1),t(8,f=!0)}})):(O(),setTimeout(async()=>{if(!_.length){if(await E(),!Qt(v)){N("loginWrong");return}w()}}))}async function A(){be(to,i=!0,i),t(4,y=!0),be(fs,s=g.username,s),await GC(Lt,s+A0,g.password),await KC(Lt.currentUser,{displayName:s}),await nf(Ha(Ua,`${s.toLowerCase()}/userInfo`),D()).then(()=>be(to,i=!1,i)),t(4,y=!1),B(),setTimeout(a,200)}async function w(){t(4,y=!0);try{await uh(Lt,g.username+A0,g.password)}catch{N("loginWrong"),t(4,y=!1);return}t(4,y=!1),B()}async function T(){t(4,y=!0),o&&(await Lt.signOut(),t(2,g.username=v.displayName,g)),await uh(Lt,g.username+A0,b0(v.password,v.uid)),await YC(Lt.currentUser,g.password),await nf(Ha(Ua,`${g.username.toLowerCase()}/userInfo`),D(v.displayName)),t(4,y=!1),B()}async function E(){let se=g.username,We=g.username.toLowerCase();if(!se||se.length<2||C.includes(We)){t(11,v={});return}if(!Qt(v)||v.username!==We){t(4,y=!0);let Ye=(await yb(Ab(Ha(Ua,`${We}/userInfo`),bb()))).val();Ye?t(11,v={username:We,...Ye}):(t(11,v={}),C.push(We)),t(4,y=!1)}}function D(se){return{displayName:se||g.username,password:Uf(g.password),security:{question:g.question,answer:Uf(g.answer)},uid:Lt.currentUser.uid}}function B(){t(20,ee=!0),setTimeout(Lr)}function S(){(g.password.length<6||g.password.length>20)&&N("passwordLength"),g.password!==g.confirm&&N("passwordMatch")}function O(){(g.password.length<6||g.password.length>20)&&N("loginWrong")}function U(){p.includes(g.username.toLowerCase())?N("usernameUnavailable"):(g.username.length<2||g.username.length>20)&&N("usernameLength")}function H(){(g.question.length<10||g.question.length>35)&&N("questionLength")}function z(){(!g.answer.length||g.answer.length>35)&&N("answerLength")}function j(se){I(OA,20,se)}function J(se){I(/[^a-zA-Z0-9 \$\.\,\?\"\!\@\#\%\&\/\>\<\'\:\;\~\+\=\-]/g,35,se)}function Y(se){I(/[^a-zA-Z0-9\^\$\*\.\[\]\{\}\(\)\?\"\!\@\#\%\&\/\\\,\>\<\'\:\;\|\_\~\`\+\=\-]/g,20,se)}function I(se,We,Ye){t(2,g[Ye]=g[Ye].replace(se,"").slice(0,We),g)}function F(){for(let se in g)t(2,g[se]="",g)}function N(se){t(3,m[se].active=!0,m)}function k(){be(Xe,r.preventClosing=!!y,r)}const ie=C_();let ee=!1;function de(){g.question=this.value,t(2,g)}const V=()=>J("question");function W(){g.answer=this.value,t(2,g)}const re=()=>J("answer"),pe=se=>{wt(se),!y&&(l?t(6,l=!1):h?t(9,h=!1):t(7,u=!1))};function qe(){g.password=this.value,t(2,g)}const Q=()=>Y("password"),ce=se=>{wt(se),t(10,d=!d)},kt=se=>{wt(se),!y&&(t(1,c=!c),t(10,d=!1))};function mt(){g.username=this.value,t(2,g)}const Ft=()=>j("username");function vt(){g.password=this.value,t(2,g)}const Vt=()=>Y("password");function yt(){g.confirm=this.value,t(2,g)}const Fe=()=>Y("confirm"),Ie=async se=>{if(wt(se),!y){if(await E(),!Qt(v)){N("userNotFound");return}t(7,u=!0)}},Ve=se=>{wt(se),t(10,d=!d)},Rt=se=>{wt(se),!y&&b()};return n.$$set=se=>{"onlyReset"in se&&t(0,o=se.onlyReset),"verifyAndSync"in se&&t(18,a=se.verifyAndSync)},n.$$.update=()=>{n.$$.dirty[0]&2&&(c||!c)&&F(),n.$$.dirty[0]&5&&o&&(g.answer||g.password)&&(t(4,y=!0),setTimeout(()=>{F(),t(4,y=!1)})),n.$$.dirty[0]&524328&&(t(5,_=Object.keys(m).filter(se=>m[se].active)),_.length&&(clearTimeout(x),t(19,x=setTimeout(()=>{t(5,_=[]);for(let se in m)t(3,m[se].active=!1,m)},2500)))),n.$$.dirty[0]&16&&(y||!y)&&k(),n.$$.dirty[0]&3145728&&r.component===null&&!ee&&ie("signupAndLoginClose")},[o,c,g,m,y,_,l,u,f,h,d,v,b,E,j,J,Y,N,a,x,ee,r,de,V,W,re,pe,qe,Q,ce,kt,mt,Ft,vt,Vt,yt,Fe,Ie,Ve,Rt]}class sg extends ht{constructor(e){super(),ut(this,e,LA,PA,Ke,{onlyReset:0,verifyAndSync:18},null,[-1,-1])}}function td(n){let e,t;return{c(){e=P("span"),t=te(n[2]),L(e,"class","tooltip"),L(e,"id",n[1])},m(r,i){$(r,e,i),R(e,t)},p(r,i){i&4&&me(t,r[2]),i&2&&L(e,"id",r[1])},d(r){r&&M(e)}}}function MA(n){let e,t,r,i,s,o=n[1]&&td(n);return{c(){e=P("div"),t=P("iconify-icon"),r=q(),i=te(n[0]),s=q(),o&&o.c(),De(t,"icon",n[3]),Ge(t,"color",n[4]),L(e,"class","username flex fjc-center fai-center cg-1 pos-rel font-ms")},m(a,c){$(a,e,c),R(e,t),R(e,r),R(e,i),R(e,s),o&&o.m(e,null)},p(a,[c]){c&8&&De(t,"icon",a[3]),c&16&&Ge(t,"color",a[4]),c&1&&me(i,a[0]),a[1]?o?o.p(a,c):(o=td(a),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},i:le,o:le,d(a){a&&M(e),o&&o.d()}}}function $A(n,e,t){let{username:r,tooltipPosition:i=null}=e,s,o="line-md:loading-loop",a="black";return n.$$set=c=>{"username"in c&&t(0,r=c.username),"tooltipPosition"in c&&t(1,i=c.tooltipPosition)},n.$$.update=()=>{n.$$.dirty&5&&Qt(Gr)&&(t(2,s=dA(r)),t(3,o=Gr[s].icon.iconifyName),t(4,a=Gr[s].icon.color))},[r,i,s,o,a]}class HA extends ht{constructor(e){super(),ut(this,e,$A,MA,Ke,{username:0,tooltipPosition:1})}}function UA(n){let e,t,r,i,s,o,a,c,l,u,f,h,d,p,g,m;return t=new HA({props:{username:n[0],tooltipPosition:"top"}}),{c(){e=P("span"),Tt(t.$$.fragment),r=q(),i=P("hr"),s=q(),o=P("div"),a=P("span"),c=te(`Created\r
        `),l=P("hl"),l.textContent=`${new Date(parseInt(n[2])).toLocaleDateString(void 0,{dateStyle:"long"})}`,u=q(),f=P("button"),f.textContent="Reset Security Question & Password",h=q(),d=P("button"),d.textContent="Log Out",L(e,"class","title"),L(f,"class","textBtn smaller-fs no-bg no-bg-change"),L(d,"class","mainBtn border-tp br-1"),L(o,"class","contents flex fd-col"),Ge(o,"row-gap","2.5rem")},m(y,_){$(y,e,_),Et(t,e,null),$(y,r,_),$(y,i,_),$(y,s,_),$(y,o,_),R(o,a),R(a,c),R(a,l),R(o,u),R(o,f),R(o,h),R(o,d),p=!0,g||(m=[he(f,"click",n[3]),he(d,"click",n[4])],g=!0)},p(y,[_]){const x={};_&1&&(x.username=y[0]),t.$set(x)},i(y){p||(ne(t.$$.fragment,y),p=!0)},o(y){oe(t.$$.fragment,y),p=!1},d(y){y&&(M(e),M(r),M(i),M(s),M(o)),bt(t),g=!1,je(m)}}}function WA(n,e,t){let r,i,s;Se(n,jl,l=>t(5,r=l)),Se(n,fs,l=>t(0,i=l)),Se(n,Xe,l=>t(1,s=l));let o=r.metadata.createdAt;return[i,s,o,()=>{be(Xe,s.props.onlyReset=!0,s),be(Xe,s.component=sg,s)},()=>{Lt.signOut(),rg("logOut","You logged out"),Lr()}]}class zA extends ht{constructor(e){super(),ut(this,e,WA,UA,Ke,{})}}function nd(n){let e,t,r;return{c(){e=P("iconify-icon"),De(e,"icon","uil:exclamation"),De(e,"id","unseen")},m(i,s){$(i,e,s),r=!0},i(i){r||(i&&St(()=>{r&&(t||(t=$t(e,en,{duration:150},!0)),t.run(1))}),r=!0)},o(i){i&&(t||(t=$t(e,en,{duration:150},!1)),t.run(0)),r=!1},d(i){i&&M(e),i&&t&&t.end()}}}function qA(n){let e,t,r,i,s,o,a=n[3]?"Account":"Log In",c,l,u,f,h,d,p,g,m,y,_,x,v,C,b,A,w=!n[4]&&nd();return{c(){e=P("div"),t=P("button"),t.innerHTML='<iconify-icon icon="octicon:people-16"></iconify-icon> <span class="tooltip" id="right">Credits</span>',r=q(),i=P("a"),i.innerHTML=`<img src="${Fs+"/ko-fi/icon.png"}" alt="Ko-fi"/> <span class="tooltip" id="right">Support Me</span>`,s=q(),o=P("button"),c=te(a),l=q(),u=P("a"),u.innerHTML='<img src="https://xt8ss.github.io/fantastic-hub/favicon.png" alt="Fantastic Hub"/> <span class="tooltip" id="right">Fantastic Hub</span>',f=q(),h=P("button"),d=P("iconify-icon"),p=q(),g=P("span"),g.textContent="Changelog",m=q(),w&&w.c(),y=q(),_=P("div"),x=te(n[0]),v=q(),C=P("button"),C.innerHTML='<iconify-icon icon="material-symbols:policy-outline-rounded"></iconify-icon> <span class="tooltip" id="left">Policy</span>',L(t,"class","info flex svelte-16bm4r0"),L(t,"id","credits"),L(i,"href","https://ko-fi.com/xt8ss"),L(i,"target","_blank"),L(i,"class","info bg-change svelte-16bm4r0"),L(i,"id","donate"),L(o,"class","info flex pos-rel bs svelte-16bm4r0"),L(o,"id","account"),L(u,"href","https://xt8ss.github.io/fantastic-hub/"),L(u,"target","_blank"),L(u,"class","info svelte-16bm4r0"),L(u,"id","hub"),De(d,"icon","octicon:log-16"),L(g,"class","tooltip"),L(g,"id","right"),L(h,"class","info svelte-16bm4r0"),L(h,"id","changelog"),L(_,"class","info"),L(_,"id","version"),L(C,"class","info"),L(C,"id","policy")},m(T,E){$(T,e,E),R(e,t),R(e,r),R(e,i),R(e,s),R(e,o),R(o,c),R(e,l),R(e,u),R(e,f),R(e,h),R(h,d),R(h,p),R(h,g),R(h,m),w&&w.m(h,null),R(e,y),R(e,_),R(_,x),R(e,v),R(e,C),b||(A=[he(t,"click",n[5]),he(o,"click",n[6]),he(h,"click",n[7]),he(C,"click",n[8])],b=!0)},p(T,[E]){E&8&&a!==(a=T[3]?"Account":"Log In")&&me(c,a),T[4]?w&&(it(),oe(w,1,1,()=>{w=null}),st()):w?E&16&&ne(w,1):(w=nd(),w.c(),ne(w,1),w.m(h,null)),E&1&&me(x,T[0])},i(T){ne(w)},o(T){oe(w)},d(T){T&&M(e),w&&w.d(),b=!1,je(A)}}}function VA(n,e,t){let r,i,s;Se(n,Xe,h=>t(2,r=h)),Se(n,Kl,h=>t(3,i=h)),Se(n,ds,h=>t(4,s=h));let{version:o,verifyAndSync:a}=e;const c=h=>{wt(h),be(Xe,r.component=xA,r)},l=h=>{wt(h),be(Xe,r.props={verifyAndSync:a},r),be(Xe,r.component=i?zA:sg,r)},u=h=>{wt(h),be(Xe,r.component=AA,r),be(ds,s=!0,s)},f=h=>{wt(h),be(Xe,r.component=DA,r)};return n.$$set=h=>{"version"in h&&t(0,o=h.version),"verifyAndSync"in h&&t(1,a=h.verifyAndSync)},[o,a,r,i,s,c,l,u,f]}class GA extends ht{constructor(e){super(),ut(this,e,VA,qA,Ke,{version:0,verifyAndSync:1})}}function jA(n,{from:e,to:t},r={}){const i=getComputedStyle(n),s=i.transform==="none"?"":i.transform,[o,a]=i.transformOrigin.split(" ").map(parseFloat),c=e.left+e.width*o/t.width-(t.left+o),l=e.top+e.height*a/t.height-(t.top+a),{delay:u=0,duration:f=d=>Math.sqrt(d)*120,easing:h=ig}=r;return{delay:u,duration:yr(f)?f(Math.sqrt(c*c+l*l)):f,easing:h,css:(d,p)=>{const g=p*c,m=p*l,y=d+p*e.width/t.width,_=d+p*e.height/t.height;return`transform: ${s} translate(${g}px, ${m}px) scale(${y}, ${_});`}}}function rd(n,e,t){const r=n.slice();return r[2]=e[t],r}function KA(n){const e=n.slice(),t=`<span class="font-ms smaller-fs">${og.exec(e[2].text)}</span>`;return e[5]=t,e}function YA(n){let e=n[2].text+"",t;return{c(){t=te(e)},m(r,i){$(r,t,i)},p(r,i){i&1&&e!==(e=r[2].text+"")&&me(t,e)},d(r){r&&M(t)}}}function id(n){let e,t=n[2].text.replace(od,n[5])+"",r;return{c(){e=new zo(!1),r=tn(),e.a=r},m(i,s){e.m(t,i,s),$(i,r,s)},p(i,s){s&1&&t!==(t=i[2].text.replace(od,i[5])+"")&&e.p(t)},d(i){i&&(M(r),e.d())}}}function sd(n,e){let t,r,i,s,o,a,c,l,u,f=le,h;function d(y,_){return _&1&&(o=null),o==null&&(o=!!og.test(y[2].text)),o?id:YA}function p(y,_){return _===id?KA(y):y}let g=d(e,-1),m=g(p(e,g));return{key:n,first:null,c(){t=P("div"),r=P("iconify-icon"),s=q(),m.c(),a=q(),De(r,"icon",i=e[2].icon),L(t,"class","toast flex fai-center cg-1 br-1 bs ta-center"),this.first=t},m(y,_){$(y,t,_),R(t,r),R(t,s),m.m(t,null),R(t,a),h=!0},p(y,_){e=y,(!h||_&1&&i!==(i=e[2].icon))&&De(r,"icon",i),g===(g=d(e,_))&&m?m.p(p(e,g),_):(m.d(1),m=g(p(e,g)),m&&(m.c(),m.m(t,a)))},r(){u=t.getBoundingClientRect()},f(){tv(t),f(),v_(t,u)},a(){f(),f=ev(t,u,jA,{duration:250})},i(y){h||(y&&St(()=>{h&&(l&&l.end(1),c=av(t,So,{}),c.start())}),h=!0)},o(y){c&&c.invalidate(),y&&(l=lv(t,e[1],{})),h=!1},d(y){y&&M(t),m.d(),y&&l&&l.end()}}}function QA(n){let e,t=[],r=new Map,i,s=Oe(n[0]);const o=a=>a[2];for(let a=0;a<s.length;a+=1){let c=rd(n,s,a),l=o(c);r.set(l,t[a]=sd(l,c))}return{c(){e=P("div");for(let a=0;a<t.length;a+=1)t[a].c();L(e,"class","toasts centered flex fjc-center fai-center fd-col pos-abs")},m(a,c){$(a,e,c);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(e,null);i=!0},p(a,[c]){if(c&1){s=Oe(a[0]),it();for(let l=0;l<t.length;l+=1)t[l].r();t=hv(t,c,o,1,a,s,r,e,uv,sd,null,rd);for(let l=0;l<t.length;l+=1)t[l].a();st()}},i(a){if(!i){for(let c=0;c<s.length;c+=1)ne(t[c]);i=!0}},o(a){for(let c=0;c<t.length;c+=1)oe(t[c]);i=!1},d(a){a&&M(e);for(let c=0;c<t.length;c+=1)t[c].d()}}}let og=new RegExp("(?<={).+(?=})"),od=/{.+} ?/;function XA(n,e,t){let r;Se(n,Ql,s=>t(0,r=s));function i(s){return r.length?So(s):en(s)}return[r,i]}class ZA extends ht{constructor(e){super(),ut(this,e,XA,QA,Ke,{})}}function JA(n){let e,t,r,i,s,o,a,c,l,u,f,h,d,p,g,m,y;return{c(){e=P("span"),e.textContent="Support Me",t=q(),r=P("div"),i=P("p"),i.textContent="Thank you for your continuous use of my site!",s=q(),o=P("p"),o.textContent=`If you would like to help improve it, as well as my other projects, you\r
        can do so through my Ko-fi, down below.`,a=q(),c=P("p"),c.textContent=`Hundreds of combined hours go into the making of these - and any\r
        donation, as small as it is, helps me continue creating more cool stuff\r
        for the community. No pressure!`,l=q(),u=P("a"),u.innerHTML=`<img src="${Fs}/ko-fi/badge.png" alt="Ko-fi"/>`,f=q(),h=P("div"),d=P("button"),d.textContent="Don't Show Again",p=q(),g=P("button"),g.textContent="Maybe Later",L(e,"class","title"),L(u,"class","flex br-1 bg-change light-hover"),L(u,"href","https://ko-fi.com/xt8ss"),L(u,"target","_blank"),L(d,"class","mainBtn flex fjc-center fai-center border-tp br-1"),L(g,"class","mainBtn flex fjc-center fai-center border-tp br-1"),L(h,"class","optionButtons flex cg-1"),L(r,"class","support contents flex fd-col fai-center smaller-fs")},m(_,x){$(_,e,x),$(_,t,x),$(_,r,x),R(r,i),R(r,s),R(r,o),R(r,a),R(r,c),R(r,l),R(r,u),R(r,f),R(r,h),R(h,d),R(h,p),R(h,g),m||(y=[he(d,"click",n[4]),he(g,"click",n[5])],m=!0)},p:le,i:le,o:le,d(_){_&&(M(e),M(t),M(r)),m=!1,je(y)}}}function ew(n,e,t){let r,i;Se(n,kn,l=>t(0,r=l)),Se(n,Xe,l=>t(3,i=l));let s=!1;function o(){t(2,s=!0),be(Xe,i.component=null,i)}const a=()=>{o(),be(kn,r.showAgain=!1,r)},c=()=>{o(),be(kn,r.timesDenied++,r)};return n.$$.update=()=>{n.$$.dirty&13&&i.component===null&&!s&&be(kn,r.timesDenied++,r)},[r,o,s,i,a,c]}class tw extends ht{constructor(e){super(),ut(this,e,ew,JA,Ke,{})}}var nw={exports:{}},w0={exports:{}},ad;function ye(){return ad||(ad=1,function(n,e){(function(t,r){n.exports=r()})(X,function(){var t=t||function(r,i){var s;if(typeof window<"u"&&window.crypto&&(s=window.crypto),typeof self<"u"&&self.crypto&&(s=self.crypto),typeof globalThis<"u"&&globalThis.crypto&&(s=globalThis.crypto),!s&&typeof window<"u"&&window.msCrypto&&(s=window.msCrypto),!s&&typeof X<"u"&&X.crypto&&(s=X.crypto),!s&&typeof Z1=="function")try{s=J1}catch{}var o=function(){if(s){if(typeof s.getRandomValues=="function")try{return s.getRandomValues(new Uint32Array(1))[0]}catch{}if(typeof s.randomBytes=="function")try{return s.randomBytes(4).readInt32LE()}catch{}}throw new Error("Native crypto module could not be used to get secure random number.")},a=Object.create||function(){function _(){}return function(x){var v;return _.prototype=x,v=new _,_.prototype=null,v}}(),c={},l=c.lib={},u=l.Base=function(){return{extend:function(_){var x=a(this);return _&&x.mixIn(_),(!x.hasOwnProperty("init")||this.init===x.init)&&(x.init=function(){x.$super.init.apply(this,arguments)}),x.init.prototype=x,x.$super=this,x},create:function(){var _=this.extend();return _.init.apply(_,arguments),_},init:function(){},mixIn:function(_){for(var x in _)_.hasOwnProperty(x)&&(this[x]=_[x]);_.hasOwnProperty("toString")&&(this.toString=_.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),f=l.WordArray=u.extend({init:function(_,x){_=this.words=_||[],x!=i?this.sigBytes=x:this.sigBytes=_.length*4},toString:function(_){return(_||d).stringify(this)},concat:function(_){var x=this.words,v=_.words,C=this.sigBytes,b=_.sigBytes;if(this.clamp(),C%4)for(var A=0;A<b;A++){var w=v[A>>>2]>>>24-A%4*8&255;x[C+A>>>2]|=w<<24-(C+A)%4*8}else for(var T=0;T<b;T+=4)x[C+T>>>2]=v[T>>>2];return this.sigBytes+=b,this},clamp:function(){var _=this.words,x=this.sigBytes;_[x>>>2]&=4294967295<<32-x%4*8,_.length=r.ceil(x/4)},clone:function(){var _=u.clone.call(this);return _.words=this.words.slice(0),_},random:function(_){for(var x=[],v=0;v<_;v+=4)x.push(o());return new f.init(x,_)}}),h=c.enc={},d=h.Hex={stringify:function(_){for(var x=_.words,v=_.sigBytes,C=[],b=0;b<v;b++){var A=x[b>>>2]>>>24-b%4*8&255;C.push((A>>>4).toString(16)),C.push((A&15).toString(16))}return C.join("")},parse:function(_){for(var x=_.length,v=[],C=0;C<x;C+=2)v[C>>>3]|=parseInt(_.substr(C,2),16)<<24-C%8*4;return new f.init(v,x/2)}},p=h.Latin1={stringify:function(_){for(var x=_.words,v=_.sigBytes,C=[],b=0;b<v;b++){var A=x[b>>>2]>>>24-b%4*8&255;C.push(String.fromCharCode(A))}return C.join("")},parse:function(_){for(var x=_.length,v=[],C=0;C<x;C++)v[C>>>2]|=(_.charCodeAt(C)&255)<<24-C%4*8;return new f.init(v,x)}},g=h.Utf8={stringify:function(_){try{return decodeURIComponent(escape(p.stringify(_)))}catch{throw new Error("Malformed UTF-8 data")}},parse:function(_){return p.parse(unescape(encodeURIComponent(_)))}},m=l.BufferedBlockAlgorithm=u.extend({reset:function(){this._data=new f.init,this._nDataBytes=0},_append:function(_){typeof _=="string"&&(_=g.parse(_)),this._data.concat(_),this._nDataBytes+=_.sigBytes},_process:function(_){var x,v=this._data,C=v.words,b=v.sigBytes,A=this.blockSize,w=A*4,T=b/w;_?T=r.ceil(T):T=r.max((T|0)-this._minBufferSize,0);var E=T*A,D=r.min(E*4,b);if(E){for(var B=0;B<E;B+=A)this._doProcessBlock(C,B);x=C.splice(0,E),v.sigBytes-=D}return new f.init(x,D)},clone:function(){var _=u.clone.call(this);return _._data=this._data.clone(),_},_minBufferSize:0});l.Hasher=m.extend({cfg:u.extend(),init:function(_){this.cfg=this.cfg.extend(_),this.reset()},reset:function(){m.reset.call(this),this._doReset()},update:function(_){return this._append(_),this._process(),this},finalize:function(_){_&&this._append(_);var x=this._doFinalize();return x},blockSize:16,_createHelper:function(_){return function(x,v){return new _.init(v).finalize(x)}},_createHmacHelper:function(_){return function(x,v){return new y.HMAC.init(_,v).finalize(x)}}});var y=c.algo={};return c}(Math);return t})}(w0)),w0.exports}var D0={exports:{}},ld;function oa(){return ld||(ld=1,function(n,e){(function(t,r){n.exports=r(ye())})(X,function(t){return function(r){var i=t,s=i.lib,o=s.Base,a=s.WordArray,c=i.x64={};c.Word=o.extend({init:function(l,u){this.high=l,this.low=u}}),c.WordArray=o.extend({init:function(l,u){l=this.words=l||[],u!=r?this.sigBytes=u:this.sigBytes=l.length*8},toX32:function(){for(var l=this.words,u=l.length,f=[],h=0;h<u;h++){var d=l[h];f.push(d.high),f.push(d.low)}return a.create(f,this.sigBytes)},clone:function(){for(var l=o.clone.call(this),u=l.words=this.words.slice(0),f=u.length,h=0;h<f;h++)u[h]=u[h].clone();return l}})}(),t})}(D0)),D0.exports}var I0={exports:{}},cd;function rw(){return cd||(cd=1,function(n,e){(function(t,r){n.exports=r(ye())})(X,function(t){return function(){if(typeof ArrayBuffer=="function"){var r=t,i=r.lib,s=i.WordArray,o=s.init,a=s.init=function(c){if(c instanceof ArrayBuffer&&(c=new Uint8Array(c)),(c instanceof Int8Array||typeof Uint8ClampedArray<"u"&&c instanceof Uint8ClampedArray||c instanceof Int16Array||c instanceof Uint16Array||c instanceof Int32Array||c instanceof Uint32Array||c instanceof Float32Array||c instanceof Float64Array)&&(c=new Uint8Array(c.buffer,c.byteOffset,c.byteLength)),c instanceof Uint8Array){for(var l=c.byteLength,u=[],f=0;f<l;f++)u[f>>>2]|=c[f]<<24-f%4*8;o.call(this,u,l)}else o.apply(this,arguments)};a.prototype=s}}(),t.lib.WordArray})}(I0)),I0.exports}var S0={exports:{}},ud;function iw(){return ud||(ud=1,function(n,e){(function(t,r){n.exports=r(ye())})(X,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=r.enc;o.Utf16=o.Utf16BE={stringify:function(c){for(var l=c.words,u=c.sigBytes,f=[],h=0;h<u;h+=2){var d=l[h>>>2]>>>16-h%4*8&65535;f.push(String.fromCharCode(d))}return f.join("")},parse:function(c){for(var l=c.length,u=[],f=0;f<l;f++)u[f>>>1]|=c.charCodeAt(f)<<16-f%2*16;return s.create(u,l*2)}},o.Utf16LE={stringify:function(c){for(var l=c.words,u=c.sigBytes,f=[],h=0;h<u;h+=2){var d=a(l[h>>>2]>>>16-h%4*8&65535);f.push(String.fromCharCode(d))}return f.join("")},parse:function(c){for(var l=c.length,u=[],f=0;f<l;f++)u[f>>>1]|=a(c.charCodeAt(f)<<16-f%2*16);return s.create(u,l*2)}};function a(c){return c<<8&4278255360|c>>>8&16711935}}(),t.enc.Utf16})}(S0)),S0.exports}var T0={exports:{}},hd;function Dr(){return hd||(hd=1,function(n,e){(function(t,r){n.exports=r(ye())})(X,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=r.enc;o.Base64={stringify:function(c){var l=c.words,u=c.sigBytes,f=this._map;c.clamp();for(var h=[],d=0;d<u;d+=3)for(var p=l[d>>>2]>>>24-d%4*8&255,g=l[d+1>>>2]>>>24-(d+1)%4*8&255,m=l[d+2>>>2]>>>24-(d+2)%4*8&255,y=p<<16|g<<8|m,_=0;_<4&&d+_*.75<u;_++)h.push(f.charAt(y>>>6*(3-_)&63));var x=f.charAt(64);if(x)for(;h.length%4;)h.push(x);return h.join("")},parse:function(c){var l=c.length,u=this._map,f=this._reverseMap;if(!f){f=this._reverseMap=[];for(var h=0;h<u.length;h++)f[u.charCodeAt(h)]=h}var d=u.charAt(64);if(d){var p=c.indexOf(d);p!==-1&&(l=p)}return a(c,l,f)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};function a(c,l,u){for(var f=[],h=0,d=0;d<l;d++)if(d%4){var p=u[c.charCodeAt(d-1)]<<d%4*2,g=u[c.charCodeAt(d)]>>>6-d%4*2,m=p|g;f[h>>>2]|=m<<24-h%4*8,h++}return s.create(f,h)}}(),t.enc.Base64})}(T0)),T0.exports}var B0={exports:{}},fd;function sw(){return fd||(fd=1,function(n,e){(function(t,r){n.exports=r(ye())})(X,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=r.enc;o.Base64url={stringify:function(c,l){l===void 0&&(l=!0);var u=c.words,f=c.sigBytes,h=l?this._safe_map:this._map;c.clamp();for(var d=[],p=0;p<f;p+=3)for(var g=u[p>>>2]>>>24-p%4*8&255,m=u[p+1>>>2]>>>24-(p+1)%4*8&255,y=u[p+2>>>2]>>>24-(p+2)%4*8&255,_=g<<16|m<<8|y,x=0;x<4&&p+x*.75<f;x++)d.push(h.charAt(_>>>6*(3-x)&63));var v=h.charAt(64);if(v)for(;d.length%4;)d.push(v);return d.join("")},parse:function(c,l){l===void 0&&(l=!0);var u=c.length,f=l?this._safe_map:this._map,h=this._reverseMap;if(!h){h=this._reverseMap=[];for(var d=0;d<f.length;d++)h[f.charCodeAt(d)]=d}var p=f.charAt(64);if(p){var g=c.indexOf(p);g!==-1&&(u=g)}return a(c,u,h)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",_safe_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"};function a(c,l,u){for(var f=[],h=0,d=0;d<l;d++)if(d%4){var p=u[c.charCodeAt(d-1)]<<d%4*2,g=u[c.charCodeAt(d)]>>>6-d%4*2,m=p|g;f[h>>>2]|=m<<24-h%4*8,h++}return s.create(f,h)}}(),t.enc.Base64url})}(B0)),B0.exports}var k0={exports:{}},dd;function Ir(){return dd||(dd=1,function(n,e){(function(t,r){n.exports=r(ye())})(X,function(t){return function(r){var i=t,s=i.lib,o=s.WordArray,a=s.Hasher,c=i.algo,l=[];(function(){for(var g=0;g<64;g++)l[g]=r.abs(r.sin(g+1))*4294967296|0})();var u=c.MD5=a.extend({_doReset:function(){this._hash=new o.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(g,m){for(var y=0;y<16;y++){var _=m+y,x=g[_];g[_]=(x<<8|x>>>24)&16711935|(x<<24|x>>>8)&4278255360}var v=this._hash.words,C=g[m+0],b=g[m+1],A=g[m+2],w=g[m+3],T=g[m+4],E=g[m+5],D=g[m+6],B=g[m+7],S=g[m+8],O=g[m+9],U=g[m+10],H=g[m+11],z=g[m+12],j=g[m+13],J=g[m+14],Y=g[m+15],I=v[0],F=v[1],N=v[2],k=v[3];I=f(I,F,N,k,C,7,l[0]),k=f(k,I,F,N,b,12,l[1]),N=f(N,k,I,F,A,17,l[2]),F=f(F,N,k,I,w,22,l[3]),I=f(I,F,N,k,T,7,l[4]),k=f(k,I,F,N,E,12,l[5]),N=f(N,k,I,F,D,17,l[6]),F=f(F,N,k,I,B,22,l[7]),I=f(I,F,N,k,S,7,l[8]),k=f(k,I,F,N,O,12,l[9]),N=f(N,k,I,F,U,17,l[10]),F=f(F,N,k,I,H,22,l[11]),I=f(I,F,N,k,z,7,l[12]),k=f(k,I,F,N,j,12,l[13]),N=f(N,k,I,F,J,17,l[14]),F=f(F,N,k,I,Y,22,l[15]),I=h(I,F,N,k,b,5,l[16]),k=h(k,I,F,N,D,9,l[17]),N=h(N,k,I,F,H,14,l[18]),F=h(F,N,k,I,C,20,l[19]),I=h(I,F,N,k,E,5,l[20]),k=h(k,I,F,N,U,9,l[21]),N=h(N,k,I,F,Y,14,l[22]),F=h(F,N,k,I,T,20,l[23]),I=h(I,F,N,k,O,5,l[24]),k=h(k,I,F,N,J,9,l[25]),N=h(N,k,I,F,w,14,l[26]),F=h(F,N,k,I,S,20,l[27]),I=h(I,F,N,k,j,5,l[28]),k=h(k,I,F,N,A,9,l[29]),N=h(N,k,I,F,B,14,l[30]),F=h(F,N,k,I,z,20,l[31]),I=d(I,F,N,k,E,4,l[32]),k=d(k,I,F,N,S,11,l[33]),N=d(N,k,I,F,H,16,l[34]),F=d(F,N,k,I,J,23,l[35]),I=d(I,F,N,k,b,4,l[36]),k=d(k,I,F,N,T,11,l[37]),N=d(N,k,I,F,B,16,l[38]),F=d(F,N,k,I,U,23,l[39]),I=d(I,F,N,k,j,4,l[40]),k=d(k,I,F,N,C,11,l[41]),N=d(N,k,I,F,w,16,l[42]),F=d(F,N,k,I,D,23,l[43]),I=d(I,F,N,k,O,4,l[44]),k=d(k,I,F,N,z,11,l[45]),N=d(N,k,I,F,Y,16,l[46]),F=d(F,N,k,I,A,23,l[47]),I=p(I,F,N,k,C,6,l[48]),k=p(k,I,F,N,B,10,l[49]),N=p(N,k,I,F,J,15,l[50]),F=p(F,N,k,I,E,21,l[51]),I=p(I,F,N,k,z,6,l[52]),k=p(k,I,F,N,w,10,l[53]),N=p(N,k,I,F,U,15,l[54]),F=p(F,N,k,I,b,21,l[55]),I=p(I,F,N,k,S,6,l[56]),k=p(k,I,F,N,Y,10,l[57]),N=p(N,k,I,F,D,15,l[58]),F=p(F,N,k,I,j,21,l[59]),I=p(I,F,N,k,T,6,l[60]),k=p(k,I,F,N,H,10,l[61]),N=p(N,k,I,F,A,15,l[62]),F=p(F,N,k,I,O,21,l[63]),v[0]=v[0]+I|0,v[1]=v[1]+F|0,v[2]=v[2]+N|0,v[3]=v[3]+k|0},_doFinalize:function(){var g=this._data,m=g.words,y=this._nDataBytes*8,_=g.sigBytes*8;m[_>>>5]|=128<<24-_%32;var x=r.floor(y/4294967296),v=y;m[(_+64>>>9<<4)+15]=(x<<8|x>>>24)&16711935|(x<<24|x>>>8)&4278255360,m[(_+64>>>9<<4)+14]=(v<<8|v>>>24)&16711935|(v<<24|v>>>8)&4278255360,g.sigBytes=(m.length+1)*4,this._process();for(var C=this._hash,b=C.words,A=0;A<4;A++){var w=b[A];b[A]=(w<<8|w>>>24)&16711935|(w<<24|w>>>8)&4278255360}return C},clone:function(){var g=a.clone.call(this);return g._hash=this._hash.clone(),g}});function f(g,m,y,_,x,v,C){var b=g+(m&y|~m&_)+x+C;return(b<<v|b>>>32-v)+m}function h(g,m,y,_,x,v,C){var b=g+(m&_|y&~_)+x+C;return(b<<v|b>>>32-v)+m}function d(g,m,y,_,x,v,C){var b=g+(m^y^_)+x+C;return(b<<v|b>>>32-v)+m}function p(g,m,y,_,x,v,C){var b=g+(y^(m|~_))+x+C;return(b<<v|b>>>32-v)+m}i.MD5=a._createHelper(u),i.HmacMD5=a._createHmacHelper(u)}(Math),t.MD5})}(k0)),k0.exports}var F0={exports:{}},pd;function ag(){return pd||(pd=1,function(n,e){(function(t,r){n.exports=r(ye())})(X,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=i.Hasher,a=r.algo,c=[],l=a.SHA1=o.extend({_doReset:function(){this._hash=new s.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(u,f){for(var h=this._hash.words,d=h[0],p=h[1],g=h[2],m=h[3],y=h[4],_=0;_<80;_++){if(_<16)c[_]=u[f+_]|0;else{var x=c[_-3]^c[_-8]^c[_-14]^c[_-16];c[_]=x<<1|x>>>31}var v=(d<<5|d>>>27)+y+c[_];_<20?v+=(p&g|~p&m)+1518500249:_<40?v+=(p^g^m)+1859775393:_<60?v+=(p&g|p&m|g&m)-1894007588:v+=(p^g^m)-899497514,y=m,m=g,g=p<<30|p>>>2,p=d,d=v}h[0]=h[0]+d|0,h[1]=h[1]+p|0,h[2]=h[2]+g|0,h[3]=h[3]+m|0,h[4]=h[4]+y|0},_doFinalize:function(){var u=this._data,f=u.words,h=this._nDataBytes*8,d=u.sigBytes*8;return f[d>>>5]|=128<<24-d%32,f[(d+64>>>9<<4)+14]=Math.floor(h/4294967296),f[(d+64>>>9<<4)+15]=h,u.sigBytes=f.length*4,this._process(),this._hash},clone:function(){var u=o.clone.call(this);return u._hash=this._hash.clone(),u}});r.SHA1=o._createHelper(l),r.HmacSHA1=o._createHmacHelper(l)}(),t.SHA1})}(F0)),F0.exports}var R0={exports:{}},_d;function fu(){return _d||(_d=1,function(n,e){(function(t,r){n.exports=r(ye())})(X,function(t){return function(r){var i=t,s=i.lib,o=s.WordArray,a=s.Hasher,c=i.algo,l=[],u=[];(function(){function d(y){for(var _=r.sqrt(y),x=2;x<=_;x++)if(!(y%x))return!1;return!0}function p(y){return(y-(y|0))*4294967296|0}for(var g=2,m=0;m<64;)d(g)&&(m<8&&(l[m]=p(r.pow(g,1/2))),u[m]=p(r.pow(g,1/3)),m++),g++})();var f=[],h=c.SHA256=a.extend({_doReset:function(){this._hash=new o.init(l.slice(0))},_doProcessBlock:function(d,p){for(var g=this._hash.words,m=g[0],y=g[1],_=g[2],x=g[3],v=g[4],C=g[5],b=g[6],A=g[7],w=0;w<64;w++){if(w<16)f[w]=d[p+w]|0;else{var T=f[w-15],E=(T<<25|T>>>7)^(T<<14|T>>>18)^T>>>3,D=f[w-2],B=(D<<15|D>>>17)^(D<<13|D>>>19)^D>>>10;f[w]=E+f[w-7]+B+f[w-16]}var S=v&C^~v&b,O=m&y^m&_^y&_,U=(m<<30|m>>>2)^(m<<19|m>>>13)^(m<<10|m>>>22),H=(v<<26|v>>>6)^(v<<21|v>>>11)^(v<<7|v>>>25),z=A+H+S+u[w]+f[w],j=U+O;A=b,b=C,C=v,v=x+z|0,x=_,_=y,y=m,m=z+j|0}g[0]=g[0]+m|0,g[1]=g[1]+y|0,g[2]=g[2]+_|0,g[3]=g[3]+x|0,g[4]=g[4]+v|0,g[5]=g[5]+C|0,g[6]=g[6]+b|0,g[7]=g[7]+A|0},_doFinalize:function(){var d=this._data,p=d.words,g=this._nDataBytes*8,m=d.sigBytes*8;return p[m>>>5]|=128<<24-m%32,p[(m+64>>>9<<4)+14]=r.floor(g/4294967296),p[(m+64>>>9<<4)+15]=g,d.sigBytes=p.length*4,this._process(),this._hash},clone:function(){var d=a.clone.call(this);return d._hash=this._hash.clone(),d}});i.SHA256=a._createHelper(h),i.HmacSHA256=a._createHmacHelper(h)}(Math),t.SHA256})}(R0)),R0.exports}var N0={exports:{}},xd;function ow(){return xd||(xd=1,function(n,e){(function(t,r,i){n.exports=r(ye(),fu())})(X,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=r.algo,a=o.SHA256,c=o.SHA224=a.extend({_doReset:function(){this._hash=new s.init([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])},_doFinalize:function(){var l=a._doFinalize.call(this);return l.sigBytes-=4,l}});r.SHA224=a._createHelper(c),r.HmacSHA224=a._createHmacHelper(c)}(),t.SHA224})}(N0)),N0.exports}var P0={exports:{}},gd;function lg(){return gd||(gd=1,function(n,e){(function(t,r,i){n.exports=r(ye(),oa())})(X,function(t){return function(){var r=t,i=r.lib,s=i.Hasher,o=r.x64,a=o.Word,c=o.WordArray,l=r.algo;function u(){return a.create.apply(a,arguments)}var f=[u(1116352408,3609767458),u(1899447441,602891725),u(3049323471,3964484399),u(3921009573,2173295548),u(961987163,4081628472),u(1508970993,3053834265),u(2453635748,2937671579),u(2870763221,3664609560),u(3624381080,2734883394),u(310598401,1164996542),u(607225278,1323610764),u(1426881987,3590304994),u(1925078388,4068182383),u(2162078206,991336113),u(2614888103,633803317),u(3248222580,3479774868),u(3835390401,2666613458),u(4022224774,944711139),u(264347078,2341262773),u(604807628,2007800933),u(770255983,1495990901),u(1249150122,1856431235),u(1555081692,3175218132),u(1996064986,2198950837),u(2554220882,3999719339),u(2821834349,766784016),u(2952996808,2566594879),u(3210313671,3203337956),u(3336571891,1034457026),u(3584528711,2466948901),u(113926993,3758326383),u(338241895,168717936),u(666307205,1188179964),u(773529912,1546045734),u(1294757372,1522805485),u(1396182291,2643833823),u(1695183700,2343527390),u(1986661051,1014477480),u(2177026350,1206759142),u(2456956037,344077627),u(2730485921,1290863460),u(2820302411,3158454273),u(3259730800,3505952657),u(3345764771,106217008),u(3516065817,3606008344),u(3600352804,1432725776),u(4094571909,1467031594),u(275423344,851169720),u(430227734,3100823752),u(506948616,1363258195),u(659060556,3750685593),u(883997877,3785050280),u(958139571,3318307427),u(1322822218,3812723403),u(1537002063,2003034995),u(1747873779,3602036899),u(1955562222,1575990012),u(2024104815,1125592928),u(2227730452,2716904306),u(2361852424,442776044),u(2428436474,593698344),u(2756734187,3733110249),u(3204031479,2999351573),u(3329325298,3815920427),u(3391569614,3928383900),u(3515267271,566280711),u(3940187606,3454069534),u(4118630271,4000239992),u(116418474,1914138554),u(174292421,2731055270),u(289380356,3203993006),u(460393269,320620315),u(685471733,587496836),u(852142971,1086792851),u(1017036298,365543100),u(1126000580,2618297676),u(1288033470,3409855158),u(1501505948,4234509866),u(1607167915,987167468),u(1816402316,1246189591)],h=[];(function(){for(var p=0;p<80;p++)h[p]=u()})();var d=l.SHA512=s.extend({_doReset:function(){this._hash=new c.init([new a.init(1779033703,4089235720),new a.init(3144134277,2227873595),new a.init(1013904242,4271175723),new a.init(2773480762,1595750129),new a.init(1359893119,2917565137),new a.init(2600822924,725511199),new a.init(528734635,4215389547),new a.init(1541459225,327033209)])},_doProcessBlock:function(p,g){for(var m=this._hash.words,y=m[0],_=m[1],x=m[2],v=m[3],C=m[4],b=m[5],A=m[6],w=m[7],T=y.high,E=y.low,D=_.high,B=_.low,S=x.high,O=x.low,U=v.high,H=v.low,z=C.high,j=C.low,J=b.high,Y=b.low,I=A.high,F=A.low,N=w.high,k=w.low,ie=T,ee=E,de=D,V=B,W=S,re=O,pe=U,qe=H,Q=z,ce=j,kt=J,mt=Y,Ft=I,vt=F,Vt=N,yt=k,Fe=0;Fe<80;Fe++){var Ie,Ve,Rt=h[Fe];if(Fe<16)Ve=Rt.high=p[g+Fe*2]|0,Ie=Rt.low=p[g+Fe*2+1]|0;else{var se=h[Fe-15],We=se.high,Ye=se.low,_i=(We>>>1|Ye<<31)^(We>>>8|Ye<<24)^We>>>7,G=(Ye>>>1|We<<31)^(Ye>>>8|We<<24)^(Ye>>>7|We<<25),Me=h[Fe-2],Qe=Me.high,Gt=Me.low,da=(Qe>>>19|Gt<<13)^(Qe<<3|Gt>>>29)^Qe>>>6,xi=(Gt>>>19|Qe<<13)^(Gt<<3|Qe>>>29)^(Gt>>>6|Qe<<26),gi=h[Fe-7],pa=gi.high,_a=gi.low,mi=h[Fe-16],xa=mi.high,vi=mi.low;Ie=G+_a,Ve=_i+pa+(Ie>>>0<G>>>0?1:0),Ie=Ie+xi,Ve=Ve+da+(Ie>>>0<xi>>>0?1:0),Ie=Ie+vi,Ve=Ve+xa+(Ie>>>0<vi>>>0?1:0),Rt.high=Ve,Rt.low=Ie}var ga=Q&kt^~Q&Ft,yi=ce&mt^~ce&vt,ma=ie&de^ie&W^de&W,va=ee&V^ee&re^V&re,ya=(ie>>>28|ee<<4)^(ie<<30|ee>>>2)^(ie<<25|ee>>>7),Ci=(ee>>>28|ie<<4)^(ee<<30|ie>>>2)^(ee<<25|ie>>>7),Ca=(Q>>>14|ce<<18)^(Q>>>18|ce<<14)^(Q<<23|ce>>>9),Ea=(ce>>>14|Q<<18)^(ce>>>18|Q<<14)^(ce<<23|Q>>>9),Ei=f[Fe],ba=Ei.high,bi=Ei.low,Re=yt+Ea,lt=Vt+Ca+(Re>>>0<yt>>>0?1:0),Re=Re+yi,lt=lt+ga+(Re>>>0<yi>>>0?1:0),Re=Re+bi,lt=lt+ba+(Re>>>0<bi>>>0?1:0),Re=Re+Ie,lt=lt+Ve+(Re>>>0<Ie>>>0?1:0),Ai=Ci+va,Aa=ya+ma+(Ai>>>0<Ci>>>0?1:0);Vt=Ft,yt=vt,Ft=kt,vt=mt,kt=Q,mt=ce,ce=qe+Re|0,Q=pe+lt+(ce>>>0<qe>>>0?1:0)|0,pe=W,qe=re,W=de,re=V,de=ie,V=ee,ee=Re+Ai|0,ie=lt+Aa+(ee>>>0<Re>>>0?1:0)|0}E=y.low=E+ee,y.high=T+ie+(E>>>0<ee>>>0?1:0),B=_.low=B+V,_.high=D+de+(B>>>0<V>>>0?1:0),O=x.low=O+re,x.high=S+W+(O>>>0<re>>>0?1:0),H=v.low=H+qe,v.high=U+pe+(H>>>0<qe>>>0?1:0),j=C.low=j+ce,C.high=z+Q+(j>>>0<ce>>>0?1:0),Y=b.low=Y+mt,b.high=J+kt+(Y>>>0<mt>>>0?1:0),F=A.low=F+vt,A.high=I+Ft+(F>>>0<vt>>>0?1:0),k=w.low=k+yt,w.high=N+Vt+(k>>>0<yt>>>0?1:0)},_doFinalize:function(){var p=this._data,g=p.words,m=this._nDataBytes*8,y=p.sigBytes*8;g[y>>>5]|=128<<24-y%32,g[(y+128>>>10<<5)+30]=Math.floor(m/4294967296),g[(y+128>>>10<<5)+31]=m,p.sigBytes=g.length*4,this._process();var _=this._hash.toX32();return _},clone:function(){var p=s.clone.call(this);return p._hash=this._hash.clone(),p},blockSize:1024/32});r.SHA512=s._createHelper(d),r.HmacSHA512=s._createHmacHelper(d)}(),t.SHA512})}(P0)),P0.exports}var O0={exports:{}},md;function aw(){return md||(md=1,function(n,e){(function(t,r,i){n.exports=r(ye(),oa(),lg())})(X,function(t){return function(){var r=t,i=r.x64,s=i.Word,o=i.WordArray,a=r.algo,c=a.SHA512,l=a.SHA384=c.extend({_doReset:function(){this._hash=new o.init([new s.init(3418070365,3238371032),new s.init(1654270250,914150663),new s.init(2438529370,812702999),new s.init(355462360,4144912697),new s.init(1731405415,4290775857),new s.init(2394180231,1750603025),new s.init(3675008525,1694076839),new s.init(1203062813,3204075428)])},_doFinalize:function(){var u=c._doFinalize.call(this);return u.sigBytes-=16,u}});r.SHA384=c._createHelper(l),r.HmacSHA384=c._createHmacHelper(l)}(),t.SHA384})}(O0)),O0.exports}var L0={exports:{}},vd;function lw(){return vd||(vd=1,function(n,e){(function(t,r,i){n.exports=r(ye(),oa())})(X,function(t){return function(r){var i=t,s=i.lib,o=s.WordArray,a=s.Hasher,c=i.x64,l=c.Word,u=i.algo,f=[],h=[],d=[];(function(){for(var m=1,y=0,_=0;_<24;_++){f[m+5*y]=(_+1)*(_+2)/2%64;var x=y%5,v=(2*m+3*y)%5;m=x,y=v}for(var m=0;m<5;m++)for(var y=0;y<5;y++)h[m+5*y]=y+(2*m+3*y)%5*5;for(var C=1,b=0;b<24;b++){for(var A=0,w=0,T=0;T<7;T++){if(C&1){var E=(1<<T)-1;E<32?w^=1<<E:A^=1<<E-32}C&128?C=C<<1^113:C<<=1}d[b]=l.create(A,w)}})();var p=[];(function(){for(var m=0;m<25;m++)p[m]=l.create()})();var g=u.SHA3=a.extend({cfg:a.cfg.extend({outputLength:512}),_doReset:function(){for(var m=this._state=[],y=0;y<25;y++)m[y]=new l.init;this.blockSize=(1600-2*this.cfg.outputLength)/32},_doProcessBlock:function(m,y){for(var _=this._state,x=this.blockSize/2,v=0;v<x;v++){var C=m[y+2*v],b=m[y+2*v+1];C=(C<<8|C>>>24)&16711935|(C<<24|C>>>8)&4278255360,b=(b<<8|b>>>24)&16711935|(b<<24|b>>>8)&4278255360;var A=_[v];A.high^=b,A.low^=C}for(var w=0;w<24;w++){for(var T=0;T<5;T++){for(var E=0,D=0,B=0;B<5;B++){var A=_[T+5*B];E^=A.high,D^=A.low}var S=p[T];S.high=E,S.low=D}for(var T=0;T<5;T++)for(var O=p[(T+4)%5],U=p[(T+1)%5],H=U.high,z=U.low,E=O.high^(H<<1|z>>>31),D=O.low^(z<<1|H>>>31),B=0;B<5;B++){var A=_[T+5*B];A.high^=E,A.low^=D}for(var j=1;j<25;j++){var E,D,A=_[j],J=A.high,Y=A.low,I=f[j];I<32?(E=J<<I|Y>>>32-I,D=Y<<I|J>>>32-I):(E=Y<<I-32|J>>>64-I,D=J<<I-32|Y>>>64-I);var F=p[h[j]];F.high=E,F.low=D}var N=p[0],k=_[0];N.high=k.high,N.low=k.low;for(var T=0;T<5;T++)for(var B=0;B<5;B++){var j=T+5*B,A=_[j],ie=p[j],ee=p[(T+1)%5+5*B],de=p[(T+2)%5+5*B];A.high=ie.high^~ee.high&de.high,A.low=ie.low^~ee.low&de.low}var A=_[0],V=d[w];A.high^=V.high,A.low^=V.low}},_doFinalize:function(){var m=this._data,y=m.words;this._nDataBytes*8;var _=m.sigBytes*8,x=this.blockSize*32;y[_>>>5]|=1<<24-_%32,y[(r.ceil((_+1)/x)*x>>>5)-1]|=128,m.sigBytes=y.length*4,this._process();for(var v=this._state,C=this.cfg.outputLength/8,b=C/8,A=[],w=0;w<b;w++){var T=v[w],E=T.high,D=T.low;E=(E<<8|E>>>24)&16711935|(E<<24|E>>>8)&4278255360,D=(D<<8|D>>>24)&16711935|(D<<24|D>>>8)&4278255360,A.push(D),A.push(E)}return new o.init(A,C)},clone:function(){for(var m=a.clone.call(this),y=m._state=this._state.slice(0),_=0;_<25;_++)y[_]=y[_].clone();return m}});i.SHA3=a._createHelper(g),i.HmacSHA3=a._createHmacHelper(g)}(Math),t.SHA3})}(L0)),L0.exports}var M0={exports:{}},yd;function cw(){return yd||(yd=1,function(n,e){(function(t,r){n.exports=r(ye())})(X,function(t){/** @preserve
			(c) 2012 by Cédric Mesnil. All rights reserved.

			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
			*/return function(r){var i=t,s=i.lib,o=s.WordArray,a=s.Hasher,c=i.algo,l=o.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),u=o.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),f=o.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),h=o.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),d=o.create([0,1518500249,1859775393,2400959708,2840853838]),p=o.create([1352829926,1548603684,1836072691,2053994217,0]),g=c.RIPEMD160=a.extend({_doReset:function(){this._hash=o.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(b,A){for(var w=0;w<16;w++){var T=A+w,E=b[T];b[T]=(E<<8|E>>>24)&16711935|(E<<24|E>>>8)&4278255360}var D=this._hash.words,B=d.words,S=p.words,O=l.words,U=u.words,H=f.words,z=h.words,j,J,Y,I,F,N,k,ie,ee,de;N=j=D[0],k=J=D[1],ie=Y=D[2],ee=I=D[3],de=F=D[4];for(var V,w=0;w<80;w+=1)V=j+b[A+O[w]]|0,w<16?V+=m(J,Y,I)+B[0]:w<32?V+=y(J,Y,I)+B[1]:w<48?V+=_(J,Y,I)+B[2]:w<64?V+=x(J,Y,I)+B[3]:V+=v(J,Y,I)+B[4],V=V|0,V=C(V,H[w]),V=V+F|0,j=F,F=I,I=C(Y,10),Y=J,J=V,V=N+b[A+U[w]]|0,w<16?V+=v(k,ie,ee)+S[0]:w<32?V+=x(k,ie,ee)+S[1]:w<48?V+=_(k,ie,ee)+S[2]:w<64?V+=y(k,ie,ee)+S[3]:V+=m(k,ie,ee)+S[4],V=V|0,V=C(V,z[w]),V=V+de|0,N=de,de=ee,ee=C(ie,10),ie=k,k=V;V=D[1]+Y+ee|0,D[1]=D[2]+I+de|0,D[2]=D[3]+F+N|0,D[3]=D[4]+j+k|0,D[4]=D[0]+J+ie|0,D[0]=V},_doFinalize:function(){var b=this._data,A=b.words,w=this._nDataBytes*8,T=b.sigBytes*8;A[T>>>5]|=128<<24-T%32,A[(T+64>>>9<<4)+14]=(w<<8|w>>>24)&16711935|(w<<24|w>>>8)&4278255360,b.sigBytes=(A.length+1)*4,this._process();for(var E=this._hash,D=E.words,B=0;B<5;B++){var S=D[B];D[B]=(S<<8|S>>>24)&16711935|(S<<24|S>>>8)&4278255360}return E},clone:function(){var b=a.clone.call(this);return b._hash=this._hash.clone(),b}});function m(b,A,w){return b^A^w}function y(b,A,w){return b&A|~b&w}function _(b,A,w){return(b|~A)^w}function x(b,A,w){return b&w|A&~w}function v(b,A,w){return b^(A|~w)}function C(b,A){return b<<A|b>>>32-A}i.RIPEMD160=a._createHelper(g),i.HmacRIPEMD160=a._createHmacHelper(g)}(),t.RIPEMD160})}(M0)),M0.exports}var $0={exports:{}},Cd;function du(){return Cd||(Cd=1,function(n,e){(function(t,r){n.exports=r(ye())})(X,function(t){(function(){var r=t,i=r.lib,s=i.Base,o=r.enc,a=o.Utf8,c=r.algo;c.HMAC=s.extend({init:function(l,u){l=this._hasher=new l.init,typeof u=="string"&&(u=a.parse(u));var f=l.blockSize,h=f*4;u.sigBytes>h&&(u=l.finalize(u)),u.clamp();for(var d=this._oKey=u.clone(),p=this._iKey=u.clone(),g=d.words,m=p.words,y=0;y<f;y++)g[y]^=1549556828,m[y]^=909522486;d.sigBytes=p.sigBytes=h,this.reset()},reset:function(){var l=this._hasher;l.reset(),l.update(this._iKey)},update:function(l){return this._hasher.update(l),this},finalize:function(l){var u=this._hasher,f=u.finalize(l);u.reset();var h=u.finalize(this._oKey.clone().concat(f));return h}})})()})}($0)),$0.exports}var H0={exports:{}},Ed;function uw(){return Ed||(Ed=1,function(n,e){(function(t,r,i){n.exports=r(ye(),fu(),du())})(X,function(t){return function(){var r=t,i=r.lib,s=i.Base,o=i.WordArray,a=r.algo,c=a.SHA256,l=a.HMAC,u=a.PBKDF2=s.extend({cfg:s.extend({keySize:128/32,hasher:c,iterations:25e4}),init:function(f){this.cfg=this.cfg.extend(f)},compute:function(f,h){for(var d=this.cfg,p=l.create(d.hasher,f),g=o.create(),m=o.create([1]),y=g.words,_=m.words,x=d.keySize,v=d.iterations;y.length<x;){var C=p.update(h).finalize(m);p.reset();for(var b=C.words,A=b.length,w=C,T=1;T<v;T++){w=p.finalize(w),p.reset();for(var E=w.words,D=0;D<A;D++)b[D]^=E[D]}g.concat(C),_[0]++}return g.sigBytes=x*4,g}});r.PBKDF2=function(f,h,d){return u.create(d).compute(f,h)}}(),t.PBKDF2})}(H0)),H0.exports}var U0={exports:{}},bd;function Qn(){return bd||(bd=1,function(n,e){(function(t,r,i){n.exports=r(ye(),ag(),du())})(X,function(t){return function(){var r=t,i=r.lib,s=i.Base,o=i.WordArray,a=r.algo,c=a.MD5,l=a.EvpKDF=s.extend({cfg:s.extend({keySize:128/32,hasher:c,iterations:1}),init:function(u){this.cfg=this.cfg.extend(u)},compute:function(u,f){for(var h,d=this.cfg,p=d.hasher.create(),g=o.create(),m=g.words,y=d.keySize,_=d.iterations;m.length<y;){h&&p.update(h),h=p.update(u).finalize(f),p.reset();for(var x=1;x<_;x++)h=p.finalize(h),p.reset();g.concat(h)}return g.sigBytes=y*4,g}});r.EvpKDF=function(u,f,h){return l.create(h).compute(u,f)}}(),t.EvpKDF})}(U0)),U0.exports}var W0={exports:{}},Ad;function at(){return Ad||(Ad=1,function(n,e){(function(t,r,i){n.exports=r(ye(),Qn())})(X,function(t){t.lib.Cipher||function(r){var i=t,s=i.lib,o=s.Base,a=s.WordArray,c=s.BufferedBlockAlgorithm,l=i.enc;l.Utf8;var u=l.Base64,f=i.algo,h=f.EvpKDF,d=s.Cipher=c.extend({cfg:o.extend(),createEncryptor:function(E,D){return this.create(this._ENC_XFORM_MODE,E,D)},createDecryptor:function(E,D){return this.create(this._DEC_XFORM_MODE,E,D)},init:function(E,D,B){this.cfg=this.cfg.extend(B),this._xformMode=E,this._key=D,this.reset()},reset:function(){c.reset.call(this),this._doReset()},process:function(E){return this._append(E),this._process()},finalize:function(E){E&&this._append(E);var D=this._doFinalize();return D},keySize:128/32,ivSize:128/32,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function E(D){return typeof D=="string"?T:b}return function(D){return{encrypt:function(B,S,O){return E(S).encrypt(D,B,S,O)},decrypt:function(B,S,O){return E(S).decrypt(D,B,S,O)}}}}()});s.StreamCipher=d.extend({_doFinalize:function(){var E=this._process(!0);return E},blockSize:1});var p=i.mode={},g=s.BlockCipherMode=o.extend({createEncryptor:function(E,D){return this.Encryptor.create(E,D)},createDecryptor:function(E,D){return this.Decryptor.create(E,D)},init:function(E,D){this._cipher=E,this._iv=D}}),m=p.CBC=function(){var E=g.extend();E.Encryptor=E.extend({processBlock:function(B,S){var O=this._cipher,U=O.blockSize;D.call(this,B,S,U),O.encryptBlock(B,S),this._prevBlock=B.slice(S,S+U)}}),E.Decryptor=E.extend({processBlock:function(B,S){var O=this._cipher,U=O.blockSize,H=B.slice(S,S+U);O.decryptBlock(B,S),D.call(this,B,S,U),this._prevBlock=H}});function D(B,S,O){var U,H=this._iv;H?(U=H,this._iv=r):U=this._prevBlock;for(var z=0;z<O;z++)B[S+z]^=U[z]}return E}(),y=i.pad={},_=y.Pkcs7={pad:function(E,D){for(var B=D*4,S=B-E.sigBytes%B,O=S<<24|S<<16|S<<8|S,U=[],H=0;H<S;H+=4)U.push(O);var z=a.create(U,S);E.concat(z)},unpad:function(E){var D=E.words[E.sigBytes-1>>>2]&255;E.sigBytes-=D}};s.BlockCipher=d.extend({cfg:d.cfg.extend({mode:m,padding:_}),reset:function(){var E;d.reset.call(this);var D=this.cfg,B=D.iv,S=D.mode;this._xformMode==this._ENC_XFORM_MODE?E=S.createEncryptor:(E=S.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==E?this._mode.init(this,B&&B.words):(this._mode=E.call(S,this,B&&B.words),this._mode.__creator=E)},_doProcessBlock:function(E,D){this._mode.processBlock(E,D)},_doFinalize:function(){var E,D=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(D.pad(this._data,this.blockSize),E=this._process(!0)):(E=this._process(!0),D.unpad(E)),E},blockSize:128/32});var x=s.CipherParams=o.extend({init:function(E){this.mixIn(E)},toString:function(E){return(E||this.formatter).stringify(this)}}),v=i.format={},C=v.OpenSSL={stringify:function(E){var D,B=E.ciphertext,S=E.salt;return S?D=a.create([1398893684,1701076831]).concat(S).concat(B):D=B,D.toString(u)},parse:function(E){var D,B=u.parse(E),S=B.words;return S[0]==1398893684&&S[1]==1701076831&&(D=a.create(S.slice(2,4)),S.splice(0,4),B.sigBytes-=16),x.create({ciphertext:B,salt:D})}},b=s.SerializableCipher=o.extend({cfg:o.extend({format:C}),encrypt:function(E,D,B,S){S=this.cfg.extend(S);var O=E.createEncryptor(B,S),U=O.finalize(D),H=O.cfg;return x.create({ciphertext:U,key:B,iv:H.iv,algorithm:E,mode:H.mode,padding:H.padding,blockSize:E.blockSize,formatter:S.format})},decrypt:function(E,D,B,S){S=this.cfg.extend(S),D=this._parse(D,S.format);var O=E.createDecryptor(B,S).finalize(D.ciphertext);return O},_parse:function(E,D){return typeof E=="string"?D.parse(E,this):E}}),A=i.kdf={},w=A.OpenSSL={execute:function(E,D,B,S,O){if(S||(S=a.random(64/8)),O)var U=h.create({keySize:D+B,hasher:O}).compute(E,S);else var U=h.create({keySize:D+B}).compute(E,S);var H=a.create(U.words.slice(D),B*4);return U.sigBytes=D*4,x.create({key:U,iv:H,salt:S})}},T=s.PasswordBasedCipher=b.extend({cfg:b.cfg.extend({kdf:w}),encrypt:function(E,D,B,S){S=this.cfg.extend(S);var O=S.kdf.execute(B,E.keySize,E.ivSize,S.salt,S.hasher);S.iv=O.iv;var U=b.encrypt.call(this,E,D,O.key,S);return U.mixIn(O),U},decrypt:function(E,D,B,S){S=this.cfg.extend(S),D=this._parse(D,S.format);var O=S.kdf.execute(B,E.keySize,E.ivSize,D.salt,S.hasher);S.iv=O.iv;var U=b.decrypt.call(this,E,D,O.key,S);return U}})}()})}(W0)),W0.exports}var z0={exports:{}},wd;function hw(){return wd||(wd=1,function(n,e){(function(t,r,i){n.exports=r(ye(),at())})(X,function(t){return t.mode.CFB=function(){var r=t.lib.BlockCipherMode.extend();r.Encryptor=r.extend({processBlock:function(s,o){var a=this._cipher,c=a.blockSize;i.call(this,s,o,c,a),this._prevBlock=s.slice(o,o+c)}}),r.Decryptor=r.extend({processBlock:function(s,o){var a=this._cipher,c=a.blockSize,l=s.slice(o,o+c);i.call(this,s,o,c,a),this._prevBlock=l}});function i(s,o,a,c){var l,u=this._iv;u?(l=u.slice(0),this._iv=void 0):l=this._prevBlock,c.encryptBlock(l,0);for(var f=0;f<a;f++)s[o+f]^=l[f]}return r}(),t.mode.CFB})}(z0)),z0.exports}var q0={exports:{}},Dd;function fw(){return Dd||(Dd=1,function(n,e){(function(t,r,i){n.exports=r(ye(),at())})(X,function(t){return t.mode.CTR=function(){var r=t.lib.BlockCipherMode.extend(),i=r.Encryptor=r.extend({processBlock:function(s,o){var a=this._cipher,c=a.blockSize,l=this._iv,u=this._counter;l&&(u=this._counter=l.slice(0),this._iv=void 0);var f=u.slice(0);a.encryptBlock(f,0),u[c-1]=u[c-1]+1|0;for(var h=0;h<c;h++)s[o+h]^=f[h]}});return r.Decryptor=i,r}(),t.mode.CTR})}(q0)),q0.exports}var V0={exports:{}},Id;function dw(){return Id||(Id=1,function(n,e){(function(t,r,i){n.exports=r(ye(),at())})(X,function(t){/** @preserve
 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
 * derived from CryptoJS.mode.CTR
 * Jan Hruby jhruby.web@gmail.com
 */return t.mode.CTRGladman=function(){var r=t.lib.BlockCipherMode.extend();function i(a){if((a>>24&255)===255){var c=a>>16&255,l=a>>8&255,u=a&255;c===255?(c=0,l===255?(l=0,u===255?u=0:++u):++l):++c,a=0,a+=c<<16,a+=l<<8,a+=u}else a+=1<<24;return a}function s(a){return(a[0]=i(a[0]))===0&&(a[1]=i(a[1])),a}var o=r.Encryptor=r.extend({processBlock:function(a,c){var l=this._cipher,u=l.blockSize,f=this._iv,h=this._counter;f&&(h=this._counter=f.slice(0),this._iv=void 0),s(h);var d=h.slice(0);l.encryptBlock(d,0);for(var p=0;p<u;p++)a[c+p]^=d[p]}});return r.Decryptor=o,r}(),t.mode.CTRGladman})}(V0)),V0.exports}var G0={exports:{}},Sd;function pw(){return Sd||(Sd=1,function(n,e){(function(t,r,i){n.exports=r(ye(),at())})(X,function(t){return t.mode.OFB=function(){var r=t.lib.BlockCipherMode.extend(),i=r.Encryptor=r.extend({processBlock:function(s,o){var a=this._cipher,c=a.blockSize,l=this._iv,u=this._keystream;l&&(u=this._keystream=l.slice(0),this._iv=void 0),a.encryptBlock(u,0);for(var f=0;f<c;f++)s[o+f]^=u[f]}});return r.Decryptor=i,r}(),t.mode.OFB})}(G0)),G0.exports}var j0={exports:{}},Td;function _w(){return Td||(Td=1,function(n,e){(function(t,r,i){n.exports=r(ye(),at())})(X,function(t){return t.mode.ECB=function(){var r=t.lib.BlockCipherMode.extend();return r.Encryptor=r.extend({processBlock:function(i,s){this._cipher.encryptBlock(i,s)}}),r.Decryptor=r.extend({processBlock:function(i,s){this._cipher.decryptBlock(i,s)}}),r}(),t.mode.ECB})}(j0)),j0.exports}var K0={exports:{}},Bd;function xw(){return Bd||(Bd=1,function(n,e){(function(t,r,i){n.exports=r(ye(),at())})(X,function(t){return t.pad.AnsiX923={pad:function(r,i){var s=r.sigBytes,o=i*4,a=o-s%o,c=s+a-1;r.clamp(),r.words[c>>>2]|=a<<24-c%4*8,r.sigBytes+=a},unpad:function(r){var i=r.words[r.sigBytes-1>>>2]&255;r.sigBytes-=i}},t.pad.Ansix923})}(K0)),K0.exports}var Y0={exports:{}},kd;function gw(){return kd||(kd=1,function(n,e){(function(t,r,i){n.exports=r(ye(),at())})(X,function(t){return t.pad.Iso10126={pad:function(r,i){var s=i*4,o=s-r.sigBytes%s;r.concat(t.lib.WordArray.random(o-1)).concat(t.lib.WordArray.create([o<<24],1))},unpad:function(r){var i=r.words[r.sigBytes-1>>>2]&255;r.sigBytes-=i}},t.pad.Iso10126})}(Y0)),Y0.exports}var Q0={exports:{}},Fd;function mw(){return Fd||(Fd=1,function(n,e){(function(t,r,i){n.exports=r(ye(),at())})(X,function(t){return t.pad.Iso97971={pad:function(r,i){r.concat(t.lib.WordArray.create([2147483648],1)),t.pad.ZeroPadding.pad(r,i)},unpad:function(r){t.pad.ZeroPadding.unpad(r),r.sigBytes--}},t.pad.Iso97971})}(Q0)),Q0.exports}var X0={exports:{}},Rd;function vw(){return Rd||(Rd=1,function(n,e){(function(t,r,i){n.exports=r(ye(),at())})(X,function(t){return t.pad.ZeroPadding={pad:function(r,i){var s=i*4;r.clamp(),r.sigBytes+=s-(r.sigBytes%s||s)},unpad:function(r){for(var i=r.words,s=r.sigBytes-1,s=r.sigBytes-1;s>=0;s--)if(i[s>>>2]>>>24-s%4*8&255){r.sigBytes=s+1;break}}},t.pad.ZeroPadding})}(X0)),X0.exports}var Z0={exports:{}},Nd;function yw(){return Nd||(Nd=1,function(n,e){(function(t,r,i){n.exports=r(ye(),at())})(X,function(t){return t.pad.NoPadding={pad:function(){},unpad:function(){}},t.pad.NoPadding})}(Z0)),Z0.exports}var J0={exports:{}},Pd;function Cw(){return Pd||(Pd=1,function(n,e){(function(t,r,i){n.exports=r(ye(),at())})(X,function(t){return function(r){var i=t,s=i.lib,o=s.CipherParams,a=i.enc,c=a.Hex,l=i.format;l.Hex={stringify:function(u){return u.ciphertext.toString(c)},parse:function(u){var f=c.parse(u);return o.create({ciphertext:f})}}}(),t.format.Hex})}(J0)),J0.exports}var el={exports:{}},Od;function Ew(){return Od||(Od=1,function(n,e){(function(t,r,i){n.exports=r(ye(),Dr(),Ir(),Qn(),at())})(X,function(t){return function(){var r=t,i=r.lib,s=i.BlockCipher,o=r.algo,a=[],c=[],l=[],u=[],f=[],h=[],d=[],p=[],g=[],m=[];(function(){for(var x=[],v=0;v<256;v++)v<128?x[v]=v<<1:x[v]=v<<1^283;for(var C=0,b=0,v=0;v<256;v++){var A=b^b<<1^b<<2^b<<3^b<<4;A=A>>>8^A&255^99,a[C]=A,c[A]=C;var w=x[C],T=x[w],E=x[T],D=x[A]*257^A*16843008;l[C]=D<<24|D>>>8,u[C]=D<<16|D>>>16,f[C]=D<<8|D>>>24,h[C]=D;var D=E*16843009^T*65537^w*257^C*16843008;d[A]=D<<24|D>>>8,p[A]=D<<16|D>>>16,g[A]=D<<8|D>>>24,m[A]=D,C?(C=w^x[x[x[E^w]]],b^=x[x[b]]):C=b=1}})();var y=[0,1,2,4,8,16,32,64,128,27,54],_=o.AES=s.extend({_doReset:function(){var x;if(!(this._nRounds&&this._keyPriorReset===this._key)){for(var v=this._keyPriorReset=this._key,C=v.words,b=v.sigBytes/4,A=this._nRounds=b+6,w=(A+1)*4,T=this._keySchedule=[],E=0;E<w;E++)E<b?T[E]=C[E]:(x=T[E-1],E%b?b>6&&E%b==4&&(x=a[x>>>24]<<24|a[x>>>16&255]<<16|a[x>>>8&255]<<8|a[x&255]):(x=x<<8|x>>>24,x=a[x>>>24]<<24|a[x>>>16&255]<<16|a[x>>>8&255]<<8|a[x&255],x^=y[E/b|0]<<24),T[E]=T[E-b]^x);for(var D=this._invKeySchedule=[],B=0;B<w;B++){var E=w-B;if(B%4)var x=T[E];else var x=T[E-4];B<4||E<=4?D[B]=x:D[B]=d[a[x>>>24]]^p[a[x>>>16&255]]^g[a[x>>>8&255]]^m[a[x&255]]}}},encryptBlock:function(x,v){this._doCryptBlock(x,v,this._keySchedule,l,u,f,h,a)},decryptBlock:function(x,v){var C=x[v+1];x[v+1]=x[v+3],x[v+3]=C,this._doCryptBlock(x,v,this._invKeySchedule,d,p,g,m,c);var C=x[v+1];x[v+1]=x[v+3],x[v+3]=C},_doCryptBlock:function(x,v,C,b,A,w,T,E){for(var D=this._nRounds,B=x[v]^C[0],S=x[v+1]^C[1],O=x[v+2]^C[2],U=x[v+3]^C[3],H=4,z=1;z<D;z++){var j=b[B>>>24]^A[S>>>16&255]^w[O>>>8&255]^T[U&255]^C[H++],J=b[S>>>24]^A[O>>>16&255]^w[U>>>8&255]^T[B&255]^C[H++],Y=b[O>>>24]^A[U>>>16&255]^w[B>>>8&255]^T[S&255]^C[H++],I=b[U>>>24]^A[B>>>16&255]^w[S>>>8&255]^T[O&255]^C[H++];B=j,S=J,O=Y,U=I}var j=(E[B>>>24]<<24|E[S>>>16&255]<<16|E[O>>>8&255]<<8|E[U&255])^C[H++],J=(E[S>>>24]<<24|E[O>>>16&255]<<16|E[U>>>8&255]<<8|E[B&255])^C[H++],Y=(E[O>>>24]<<24|E[U>>>16&255]<<16|E[B>>>8&255]<<8|E[S&255])^C[H++],I=(E[U>>>24]<<24|E[B>>>16&255]<<16|E[S>>>8&255]<<8|E[O&255])^C[H++];x[v]=j,x[v+1]=J,x[v+2]=Y,x[v+3]=I},keySize:256/32});r.AES=s._createHelper(_)}(),t.AES})}(el)),el.exports}var tl={exports:{}},Ld;function bw(){return Ld||(Ld=1,function(n,e){(function(t,r,i){n.exports=r(ye(),Dr(),Ir(),Qn(),at())})(X,function(t){return function(){var r=t,i=r.lib,s=i.WordArray,o=i.BlockCipher,a=r.algo,c=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],l=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],u=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],f=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],h=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],d=a.DES=o.extend({_doReset:function(){for(var y=this._key,_=y.words,x=[],v=0;v<56;v++){var C=c[v]-1;x[v]=_[C>>>5]>>>31-C%32&1}for(var b=this._subKeys=[],A=0;A<16;A++){for(var w=b[A]=[],T=u[A],v=0;v<24;v++)w[v/6|0]|=x[(l[v]-1+T)%28]<<31-v%6,w[4+(v/6|0)]|=x[28+(l[v+24]-1+T)%28]<<31-v%6;w[0]=w[0]<<1|w[0]>>>31;for(var v=1;v<7;v++)w[v]=w[v]>>>(v-1)*4+3;w[7]=w[7]<<5|w[7]>>>27}for(var E=this._invSubKeys=[],v=0;v<16;v++)E[v]=b[15-v]},encryptBlock:function(y,_){this._doCryptBlock(y,_,this._subKeys)},decryptBlock:function(y,_){this._doCryptBlock(y,_,this._invSubKeys)},_doCryptBlock:function(y,_,x){this._lBlock=y[_],this._rBlock=y[_+1],p.call(this,4,252645135),p.call(this,16,65535),g.call(this,2,858993459),g.call(this,8,16711935),p.call(this,1,1431655765);for(var v=0;v<16;v++){for(var C=x[v],b=this._lBlock,A=this._rBlock,w=0,T=0;T<8;T++)w|=f[T][((A^C[T])&h[T])>>>0];this._lBlock=A,this._rBlock=b^w}var E=this._lBlock;this._lBlock=this._rBlock,this._rBlock=E,p.call(this,1,1431655765),g.call(this,8,16711935),g.call(this,2,858993459),p.call(this,16,65535),p.call(this,4,252645135),y[_]=this._lBlock,y[_+1]=this._rBlock},keySize:64/32,ivSize:64/32,blockSize:64/32});function p(y,_){var x=(this._lBlock>>>y^this._rBlock)&_;this._rBlock^=x,this._lBlock^=x<<y}function g(y,_){var x=(this._rBlock>>>y^this._lBlock)&_;this._lBlock^=x,this._rBlock^=x<<y}r.DES=o._createHelper(d);var m=a.TripleDES=o.extend({_doReset:function(){var y=this._key,_=y.words;if(_.length!==2&&_.length!==4&&_.length<6)throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");var x=_.slice(0,2),v=_.length<4?_.slice(0,2):_.slice(2,4),C=_.length<6?_.slice(0,2):_.slice(4,6);this._des1=d.createEncryptor(s.create(x)),this._des2=d.createEncryptor(s.create(v)),this._des3=d.createEncryptor(s.create(C))},encryptBlock:function(y,_){this._des1.encryptBlock(y,_),this._des2.decryptBlock(y,_),this._des3.encryptBlock(y,_)},decryptBlock:function(y,_){this._des3.decryptBlock(y,_),this._des2.encryptBlock(y,_),this._des1.decryptBlock(y,_)},keySize:192/32,ivSize:64/32,blockSize:64/32});r.TripleDES=o._createHelper(m)}(),t.TripleDES})}(tl)),tl.exports}var nl={exports:{}},Md;function Aw(){return Md||(Md=1,function(n,e){(function(t,r,i){n.exports=r(ye(),Dr(),Ir(),Qn(),at())})(X,function(t){return function(){var r=t,i=r.lib,s=i.StreamCipher,o=r.algo,a=o.RC4=s.extend({_doReset:function(){for(var u=this._key,f=u.words,h=u.sigBytes,d=this._S=[],p=0;p<256;p++)d[p]=p;for(var p=0,g=0;p<256;p++){var m=p%h,y=f[m>>>2]>>>24-m%4*8&255;g=(g+d[p]+y)%256;var _=d[p];d[p]=d[g],d[g]=_}this._i=this._j=0},_doProcessBlock:function(u,f){u[f]^=c.call(this)},keySize:256/32,ivSize:0});function c(){for(var u=this._S,f=this._i,h=this._j,d=0,p=0;p<4;p++){f=(f+1)%256,h=(h+u[f])%256;var g=u[f];u[f]=u[h],u[h]=g,d|=u[(u[f]+u[h])%256]<<24-p*8}return this._i=f,this._j=h,d}r.RC4=s._createHelper(a);var l=o.RC4Drop=a.extend({cfg:a.cfg.extend({drop:192}),_doReset:function(){a._doReset.call(this);for(var u=this.cfg.drop;u>0;u--)c.call(this)}});r.RC4Drop=s._createHelper(l)}(),t.RC4})}(nl)),nl.exports}var rl={exports:{}},$d;function ww(){return $d||($d=1,function(n,e){(function(t,r,i){n.exports=r(ye(),Dr(),Ir(),Qn(),at())})(X,function(t){return function(){var r=t,i=r.lib,s=i.StreamCipher,o=r.algo,a=[],c=[],l=[],u=o.Rabbit=s.extend({_doReset:function(){for(var h=this._key.words,d=this.cfg.iv,p=0;p<4;p++)h[p]=(h[p]<<8|h[p]>>>24)&16711935|(h[p]<<24|h[p]>>>8)&4278255360;var g=this._X=[h[0],h[3]<<16|h[2]>>>16,h[1],h[0]<<16|h[3]>>>16,h[2],h[1]<<16|h[0]>>>16,h[3],h[2]<<16|h[1]>>>16],m=this._C=[h[2]<<16|h[2]>>>16,h[0]&4294901760|h[1]&65535,h[3]<<16|h[3]>>>16,h[1]&4294901760|h[2]&65535,h[0]<<16|h[0]>>>16,h[2]&4294901760|h[3]&65535,h[1]<<16|h[1]>>>16,h[3]&4294901760|h[0]&65535];this._b=0;for(var p=0;p<4;p++)f.call(this);for(var p=0;p<8;p++)m[p]^=g[p+4&7];if(d){var y=d.words,_=y[0],x=y[1],v=(_<<8|_>>>24)&16711935|(_<<24|_>>>8)&4278255360,C=(x<<8|x>>>24)&16711935|(x<<24|x>>>8)&4278255360,b=v>>>16|C&4294901760,A=C<<16|v&65535;m[0]^=v,m[1]^=b,m[2]^=C,m[3]^=A,m[4]^=v,m[5]^=b,m[6]^=C,m[7]^=A;for(var p=0;p<4;p++)f.call(this)}},_doProcessBlock:function(h,d){var p=this._X;f.call(this),a[0]=p[0]^p[5]>>>16^p[3]<<16,a[1]=p[2]^p[7]>>>16^p[5]<<16,a[2]=p[4]^p[1]>>>16^p[7]<<16,a[3]=p[6]^p[3]>>>16^p[1]<<16;for(var g=0;g<4;g++)a[g]=(a[g]<<8|a[g]>>>24)&16711935|(a[g]<<24|a[g]>>>8)&4278255360,h[d+g]^=a[g]},blockSize:128/32,ivSize:64/32});function f(){for(var h=this._X,d=this._C,p=0;p<8;p++)c[p]=d[p];d[0]=d[0]+1295307597+this._b|0,d[1]=d[1]+3545052371+(d[0]>>>0<c[0]>>>0?1:0)|0,d[2]=d[2]+886263092+(d[1]>>>0<c[1]>>>0?1:0)|0,d[3]=d[3]+1295307597+(d[2]>>>0<c[2]>>>0?1:0)|0,d[4]=d[4]+3545052371+(d[3]>>>0<c[3]>>>0?1:0)|0,d[5]=d[5]+886263092+(d[4]>>>0<c[4]>>>0?1:0)|0,d[6]=d[6]+1295307597+(d[5]>>>0<c[5]>>>0?1:0)|0,d[7]=d[7]+3545052371+(d[6]>>>0<c[6]>>>0?1:0)|0,this._b=d[7]>>>0<c[7]>>>0?1:0;for(var p=0;p<8;p++){var g=h[p]+d[p],m=g&65535,y=g>>>16,_=((m*m>>>17)+m*y>>>15)+y*y,x=((g&4294901760)*g|0)+((g&65535)*g|0);l[p]=_^x}h[0]=l[0]+(l[7]<<16|l[7]>>>16)+(l[6]<<16|l[6]>>>16)|0,h[1]=l[1]+(l[0]<<8|l[0]>>>24)+l[7]|0,h[2]=l[2]+(l[1]<<16|l[1]>>>16)+(l[0]<<16|l[0]>>>16)|0,h[3]=l[3]+(l[2]<<8|l[2]>>>24)+l[1]|0,h[4]=l[4]+(l[3]<<16|l[3]>>>16)+(l[2]<<16|l[2]>>>16)|0,h[5]=l[5]+(l[4]<<8|l[4]>>>24)+l[3]|0,h[6]=l[6]+(l[5]<<16|l[5]>>>16)+(l[4]<<16|l[4]>>>16)|0,h[7]=l[7]+(l[6]<<8|l[6]>>>24)+l[5]|0}r.Rabbit=s._createHelper(u)}(),t.Rabbit})}(rl)),rl.exports}var il={exports:{}},Hd;function Dw(){return Hd||(Hd=1,function(n,e){(function(t,r,i){n.exports=r(ye(),Dr(),Ir(),Qn(),at())})(X,function(t){return function(){var r=t,i=r.lib,s=i.StreamCipher,o=r.algo,a=[],c=[],l=[],u=o.RabbitLegacy=s.extend({_doReset:function(){var h=this._key.words,d=this.cfg.iv,p=this._X=[h[0],h[3]<<16|h[2]>>>16,h[1],h[0]<<16|h[3]>>>16,h[2],h[1]<<16|h[0]>>>16,h[3],h[2]<<16|h[1]>>>16],g=this._C=[h[2]<<16|h[2]>>>16,h[0]&4294901760|h[1]&65535,h[3]<<16|h[3]>>>16,h[1]&4294901760|h[2]&65535,h[0]<<16|h[0]>>>16,h[2]&4294901760|h[3]&65535,h[1]<<16|h[1]>>>16,h[3]&4294901760|h[0]&65535];this._b=0;for(var m=0;m<4;m++)f.call(this);for(var m=0;m<8;m++)g[m]^=p[m+4&7];if(d){var y=d.words,_=y[0],x=y[1],v=(_<<8|_>>>24)&16711935|(_<<24|_>>>8)&4278255360,C=(x<<8|x>>>24)&16711935|(x<<24|x>>>8)&4278255360,b=v>>>16|C&4294901760,A=C<<16|v&65535;g[0]^=v,g[1]^=b,g[2]^=C,g[3]^=A,g[4]^=v,g[5]^=b,g[6]^=C,g[7]^=A;for(var m=0;m<4;m++)f.call(this)}},_doProcessBlock:function(h,d){var p=this._X;f.call(this),a[0]=p[0]^p[5]>>>16^p[3]<<16,a[1]=p[2]^p[7]>>>16^p[5]<<16,a[2]=p[4]^p[1]>>>16^p[7]<<16,a[3]=p[6]^p[3]>>>16^p[1]<<16;for(var g=0;g<4;g++)a[g]=(a[g]<<8|a[g]>>>24)&16711935|(a[g]<<24|a[g]>>>8)&4278255360,h[d+g]^=a[g]},blockSize:128/32,ivSize:64/32});function f(){for(var h=this._X,d=this._C,p=0;p<8;p++)c[p]=d[p];d[0]=d[0]+1295307597+this._b|0,d[1]=d[1]+3545052371+(d[0]>>>0<c[0]>>>0?1:0)|0,d[2]=d[2]+886263092+(d[1]>>>0<c[1]>>>0?1:0)|0,d[3]=d[3]+1295307597+(d[2]>>>0<c[2]>>>0?1:0)|0,d[4]=d[4]+3545052371+(d[3]>>>0<c[3]>>>0?1:0)|0,d[5]=d[5]+886263092+(d[4]>>>0<c[4]>>>0?1:0)|0,d[6]=d[6]+1295307597+(d[5]>>>0<c[5]>>>0?1:0)|0,d[7]=d[7]+3545052371+(d[6]>>>0<c[6]>>>0?1:0)|0,this._b=d[7]>>>0<c[7]>>>0?1:0;for(var p=0;p<8;p++){var g=h[p]+d[p],m=g&65535,y=g>>>16,_=((m*m>>>17)+m*y>>>15)+y*y,x=((g&4294901760)*g|0)+((g&65535)*g|0);l[p]=_^x}h[0]=l[0]+(l[7]<<16|l[7]>>>16)+(l[6]<<16|l[6]>>>16)|0,h[1]=l[1]+(l[0]<<8|l[0]>>>24)+l[7]|0,h[2]=l[2]+(l[1]<<16|l[1]>>>16)+(l[0]<<16|l[0]>>>16)|0,h[3]=l[3]+(l[2]<<8|l[2]>>>24)+l[1]|0,h[4]=l[4]+(l[3]<<16|l[3]>>>16)+(l[2]<<16|l[2]>>>16)|0,h[5]=l[5]+(l[4]<<8|l[4]>>>24)+l[3]|0,h[6]=l[6]+(l[5]<<16|l[5]>>>16)+(l[4]<<16|l[4]>>>16)|0,h[7]=l[7]+(l[6]<<8|l[6]>>>24)+l[5]|0}r.RabbitLegacy=s._createHelper(u)}(),t.RabbitLegacy})}(il)),il.exports}var sl={exports:{}},Ud;function Iw(){return Ud||(Ud=1,function(n,e){(function(t,r,i){n.exports=r(ye(),Dr(),Ir(),Qn(),at())})(X,function(t){return function(){var r=t,i=r.lib,s=i.BlockCipher,o=r.algo;const a=16,c=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],l=[[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946],[1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055],[3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504],[976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462]];var u={pbox:[],sbox:[]};function f(m,y){let _=y>>24&255,x=y>>16&255,v=y>>8&255,C=y&255,b=m.sbox[0][_]+m.sbox[1][x];return b=b^m.sbox[2][v],b=b+m.sbox[3][C],b}function h(m,y,_){let x=y,v=_,C;for(let b=0;b<a;++b)x=x^m.pbox[b],v=f(m,x)^v,C=x,x=v,v=C;return C=x,x=v,v=C,v=v^m.pbox[a],x=x^m.pbox[a+1],{left:x,right:v}}function d(m,y,_){let x=y,v=_,C;for(let b=a+1;b>1;--b)x=x^m.pbox[b],v=f(m,x)^v,C=x,x=v,v=C;return C=x,x=v,v=C,v=v^m.pbox[1],x=x^m.pbox[0],{left:x,right:v}}function p(m,y,_){for(let A=0;A<4;A++){m.sbox[A]=[];for(let w=0;w<256;w++)m.sbox[A][w]=l[A][w]}let x=0;for(let A=0;A<a+2;A++)m.pbox[A]=c[A]^y[x],x++,x>=_&&(x=0);let v=0,C=0,b=0;for(let A=0;A<a+2;A+=2)b=h(m,v,C),v=b.left,C=b.right,m.pbox[A]=v,m.pbox[A+1]=C;for(let A=0;A<4;A++)for(let w=0;w<256;w+=2)b=h(m,v,C),v=b.left,C=b.right,m.sbox[A][w]=v,m.sbox[A][w+1]=C;return!0}var g=o.Blowfish=s.extend({_doReset:function(){if(this._keyPriorReset!==this._key){var m=this._keyPriorReset=this._key,y=m.words,_=m.sigBytes/4;p(u,y,_)}},encryptBlock:function(m,y){var _=h(u,m[y],m[y+1]);m[y]=_.left,m[y+1]=_.right},decryptBlock:function(m,y){var _=d(u,m[y],m[y+1]);m[y]=_.left,m[y+1]=_.right},blockSize:64/32,keySize:128/32,ivSize:64/32});r.Blowfish=s._createHelper(g)}(),t.Blowfish})}(sl)),sl.exports}(function(n,e){(function(t,r,i){n.exports=r(ye(),oa(),rw(),iw(),Dr(),sw(),Ir(),ag(),fu(),ow(),lg(),aw(),lw(),cw(),du(),uw(),Qn(),at(),hw(),fw(),dw(),pw(),_w(),xw(),gw(),mw(),vw(),yw(),Cw(),Ew(),bw(),Aw(),ww(),Dw(),Iw())})(X,function(t){return t})})(nw);var Wd={};/**
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
 */const cg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const Z=function(n,e){if(!n)throw hi(e)},hi=function(n){return new Error("Firebase Database ("+cg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const ug=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Sw=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},pu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,u=s>>2,f=(s&3)<<4|a>>4;let h=(a&15)<<2|l>>6,d=l&63;c||(d=64,o||(h=64)),r.push(t[u],t[f],t[h],t[d])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ug(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Sw(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const f=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||l==null||f==null)throw new Tw;const h=s<<2|a>>4;if(r.push(h),l!==64){const d=a<<4&240|l>>2;if(r.push(d),f!==64){const p=l<<6&192|f;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Tw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hg=function(n){const e=ug(n);return pu.encodeByteArray(e,!0)},To=function(n){return hg(n).replace(/\./g,"")},Zl=function(n){try{return pu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Bw(n){return fg(void 0,n)}function fg(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!kw(t)||(n[t]=fg(n[t],e[t]));return n}function kw(n){return n!=="__proto__"}/**
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
 */function Fw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Rw=()=>Fw().__FIREBASE_DEFAULTS__,Nw=()=>{if(typeof process>"u"||typeof Wd>"u")return;const n=Wd.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Pw=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Zl(n[1]);return e&&JSON.parse(e)},dg=()=>{try{return Rw()||Nw()||Pw()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ow=n=>{var e,t;return(t=(e=dg())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Lw=n=>{const e=Ow(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},pg=()=>{var n;return(n=dg())===null||n===void 0?void 0:n.config};/**
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
 */class _u{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Mw(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[To(JSON.stringify(t)),To(JSON.stringify(o)),""].join(".")}/**
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
 */function $w(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _g(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($w())}function Hw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Uw(){return cg.NODE_ADMIN===!0}function Ww(){try{return typeof indexedDB=="object"}catch{return!1}}function zw(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const qw="FirebaseError";class Rs extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=qw,Object.setPrototypeOf(this,Rs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xg.prototype.create)}}class xg{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Vw(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Rs(i,a,r)}}function Vw(n,e){return n.replace(Gw,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Gw=/\{\$([^}]+)}/g;/**
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
 */function ps(n){return JSON.parse(n)}function ct(n){return JSON.stringify(n)}/**
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
 */const gg=function(n){let e={},t={},r={},i="";try{const s=n.split(".");e=ps(Zl(s[0])||""),t=ps(Zl(s[1])||""),i=s[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:i}},jw=function(n){const e=gg(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Kw=function(n){const e=gg(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function An(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function ei(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function zd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Bo(n,e,t){const r={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=e.call(t,n[i],i,n));return r}function Jl(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(qd(s)&&qd(o)){if(!Jl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function qd(n){return n!==null&&typeof n=="object"}/**
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
 */function Yw(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class Qw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let f=0;f<16;f++)r[f]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let f=16;f<80;f++){const h=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let f=0;f<80;f++){f<40?f<20?(l=a^s&(o^a),u=1518500249):(l=s^o^a,u=1859775393):f<60?(l=s&o|a&(s|o),u=2400959708):(l=s^o^a,u=3395469782);const h=(i<<5|i>>>27)+l+c+u+r[f]&4294967295;c=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<t;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Xw(n,e){return`${n} failed: ${e} argument `}/**
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
 */const Zw=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,Z(r<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},aa=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function mg(n){return n&&n._delegate?n._delegate:n}class _s{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const er="[DEFAULT]";/**
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
 */class Jw{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new _u;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(t6(e))try{this.getOrInitializeService({instanceIdentifier:er})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=er){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=er){return this.instances.has(e)}getOptions(e=er){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e6(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=er){return this.component?this.component.multipleInstances?e:er:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function e6(n){return n===er?void 0:n}function t6(n){return n.instantiationMode==="EAGER"}/**
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
 */class n6{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Jw(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Pe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Pe||(Pe={}));const r6={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},i6=Pe.INFO,s6={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},o6=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=s6[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vg{constructor(e){this.name=e,this._logLevel=i6,this._logHandler=o6,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?r6[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const a6=(n,e)=>e.some(t=>n instanceof t);let Vd,Gd;function l6(){return Vd||(Vd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function c6(){return Gd||(Gd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yg=new WeakMap,ec=new WeakMap,Cg=new WeakMap,ol=new WeakMap,xu=new WeakMap;function u6(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Mn(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&yg.set(t,n)}).catch(()=>{}),xu.set(e,n),e}function h6(n){if(ec.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});ec.set(n,e)}let tc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ec.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Cg.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Mn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function f6(n){tc=n(tc)}function d6(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(al(this),e,...t);return Cg.set(r,e.sort?e.sort():[e]),Mn(r)}:c6().includes(n)?function(...e){return n.apply(al(this),e),Mn(yg.get(this))}:function(...e){return Mn(n.apply(al(this),e))}}function p6(n){return typeof n=="function"?d6(n):(n instanceof IDBTransaction&&h6(n),a6(n,l6())?new Proxy(n,tc):n)}function Mn(n){if(n instanceof IDBRequest)return u6(n);if(ol.has(n))return ol.get(n);const e=p6(n);return e!==n&&(ol.set(n,e),xu.set(e,n)),e}const al=n=>xu.get(n);function _6(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=Mn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Mn(o.result),c.oldVersion,c.newVersion,Mn(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const x6=["get","getKey","getAll","getAllKeys","count"],g6=["put","add","delete","clear"],ll=new Map;function jd(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ll.get(e))return ll.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=g6.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||x6.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),i&&c.done]))[0]};return ll.set(e,s),s}f6(n=>({...n,get:(e,t,r)=>jd(e,t)||n.get(e,t,r),has:(e,t)=>!!jd(e,t)||n.has(e,t)}));/**
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
 */class m6{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(v6(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function v6(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nc="@firebase/app",Kd="0.9.13";/**
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
 */const xr=new vg("@firebase/app"),y6="@firebase/app-compat",C6="@firebase/analytics-compat",E6="@firebase/analytics",b6="@firebase/app-check-compat",A6="@firebase/app-check",w6="@firebase/auth",D6="@firebase/auth-compat",I6="@firebase/database",S6="@firebase/database-compat",T6="@firebase/functions",B6="@firebase/functions-compat",k6="@firebase/installations",F6="@firebase/installations-compat",R6="@firebase/messaging",N6="@firebase/messaging-compat",P6="@firebase/performance",O6="@firebase/performance-compat",L6="@firebase/remote-config",M6="@firebase/remote-config-compat",$6="@firebase/storage",H6="@firebase/storage-compat",U6="@firebase/firestore",W6="@firebase/firestore-compat",z6="firebase",q6="9.23.0";/**
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
 */const rc="[DEFAULT]",V6={[nc]:"fire-core",[y6]:"fire-core-compat",[E6]:"fire-analytics",[C6]:"fire-analytics-compat",[A6]:"fire-app-check",[b6]:"fire-app-check-compat",[w6]:"fire-auth",[D6]:"fire-auth-compat",[I6]:"fire-rtdb",[S6]:"fire-rtdb-compat",[T6]:"fire-fn",[B6]:"fire-fn-compat",[k6]:"fire-iid",[F6]:"fire-iid-compat",[R6]:"fire-fcm",[N6]:"fire-fcm-compat",[P6]:"fire-perf",[O6]:"fire-perf-compat",[L6]:"fire-rc",[M6]:"fire-rc-compat",[$6]:"fire-gcs",[H6]:"fire-gcs-compat",[U6]:"fire-fst",[W6]:"fire-fst-compat","fire-js":"fire-js",[z6]:"fire-js-all"};/**
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
 */const ko=new Map,ic=new Map;function G6(n,e){try{n.container.addComponent(e)}catch(t){xr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Fo(n){const e=n.name;if(ic.has(e))return xr.debug(`There were multiple attempts to register component ${e}.`),!1;ic.set(e,n);for(const t of ko.values())G6(t,n);return!0}function j6(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const K6={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},$n=new xg("app","Firebase",K6);/**
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
 */class Y6{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _s("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $n.create("app-deleted",{appName:this._name})}}/**
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
 */const Q6=q6;function gu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:rc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw $n.create("bad-app-name",{appName:String(i)});if(t||(t=pg()),!t)throw $n.create("no-options");const s=ko.get(i);if(s){if(Jl(t,s.options)&&Jl(r,s.config))return s;throw $n.create("duplicate-app",{appName:i})}const o=new n6(i);for(const c of ic.values())o.addComponent(c);const a=new Y6(t,r,o);return ko.set(i,a),a}function mu(n=rc){const e=ko.get(n);if(!e&&n===rc&&pg())return gu();if(!e)throw $n.create("no-app",{appName:n});return e}function jr(n,e,t){var r;let i=(r=V6[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xr.warn(a.join(" "));return}Fo(new _s(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const X6="firebase-heartbeat-database",Z6=1,xs="firebase-heartbeat-store";let cl=null;function Eg(){return cl||(cl=_6(X6,Z6,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(xs)}}}).catch(n=>{throw $n.create("idb-open",{originalErrorMessage:n.message})})),cl}async function J6(n){try{return await(await Eg()).transaction(xs).objectStore(xs).get(bg(n))}catch(e){if(e instanceof Rs)xr.warn(e.message);else{const t=$n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xr.warn(t.message)}}}async function Yd(n,e){try{const r=(await Eg()).transaction(xs,"readwrite");await r.objectStore(xs).put(e,bg(n)),await r.done}catch(t){if(t instanceof Rs)xr.warn(t.message);else{const r=$n.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});xr.warn(r.message)}}}function bg(n){return`${n.name}!${n.options.appId}`}/**
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
 */const e3=1024,t3=30*24*60*60*1e3;class n3{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new i3(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Qd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=t3}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Qd(),{heartbeatsToSend:t,unsentEntries:r}=r3(this._heartbeatsCache.heartbeats),i=To(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Qd(){return new Date().toISOString().substring(0,10)}function r3(n,e=e3){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Xd(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Xd(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class i3{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ww()?zw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await J6(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Xd(n){return To(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function s3(n){Fo(new _s("platform-logger",e=>new m6(e),"PRIVATE")),Fo(new _s("heartbeat",e=>new n3(e),"PRIVATE")),jr(nc,Kd,n),jr(nc,Kd,"esm2017"),jr("fire-js","")}s3("");var o3="firebase",a3="9.23.0";/**
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
 */jr(o3,a3,"app");var Zd={};const Jd="@firebase/database",ep="0.14.4";/**
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
 */let Ag="";function l3(n){Ag=n}/**
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
 */class c3{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ct(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:ps(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class u3{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return An(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const wg=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new c3(e)}}catch{}return new u3},sr=wg("localStorage"),h3=wg("sessionStorage");/**
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
 */const Kr=new vg("@firebase/database"),f3=function(){let n=1;return function(){return n++}}(),Dg=function(n){const e=Zw(n),t=new Qw;t.update(e);const r=t.digest();return pu.encodeByteArray(r)},Ns=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ns.apply(null,r):typeof r=="object"?e+=ct(r):e+=r,e+=" "}return e};let Yi=null,tp=!0;const d3=function(n,e){Z(!0,"Can't turn on custom loggers persistently."),Kr.logLevel=Pe.VERBOSE,Yi=Kr.log.bind(Kr)},pt=function(...n){if(tp===!0&&(tp=!1,Yi===null&&h3.get("logging_enabled")===!0&&d3()),Yi){const e=Ns.apply(null,n);Yi(e)}},Ps=function(n){return function(...e){pt(n,...e)}},sc=function(...n){const e="FIREBASE INTERNAL ERROR: "+Ns(...n);Kr.error(e)},bn=function(...n){const e=`FIREBASE FATAL ERROR: ${Ns(...n)}`;throw Kr.error(e),new Error(e)},Ot=function(...n){const e="FIREBASE WARNING: "+Ns(...n);Kr.warn(e)},p3=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ot("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ig=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},_3=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ti="[MIN_NAME]",gr="[MAX_NAME]",fi=function(n,e){if(n===e)return 0;if(n===ti||e===gr)return-1;if(e===ti||n===gr)return 1;{const t=np(n),r=np(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},x3=function(n,e){return n===e?0:n<e?-1:1},ki=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+ct(e))},vu=function(n){if(typeof n!="object"||n===null)return ct(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=ct(e[r]),t+=":",t+=vu(n[e[r]]);return t+="}",t},Sg=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let i=0;i<t;i+=e)i+e>t?r.push(n.substring(i,t)):r.push(n.substring(i,i+e));return r};function zt(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Tg=function(n){Z(!Ig(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let i,s,o,a,c;n===0?(s=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),r),s=a+r,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(s=0,o=Math.round(n/Math.pow(2,1-r-t))));const l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(s%2?1:0),s=Math.floor(s/2);l.push(i?1:0),l.reverse();const u=l.join("");let f="";for(c=0;c<64;c+=8){let h=parseInt(u.substr(c,8),2).toString(16);h.length===1&&(h="0"+h),f=f+h}return f.toLowerCase()},g3=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},m3=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},v3=new RegExp("^-?(0*)\\d{1,10}$"),y3=-2147483648,C3=2147483647,np=function(n){if(v3.test(n)){const e=Number(n);if(e>=y3&&e<=C3)return e}return null},Os=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Ot("Exception was thrown by user callback.",t),e},Math.floor(0))}},E3=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Qi=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class b3{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ot(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class A3{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(pt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ot(e)}}class io{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}io.OWNER="owner";/**
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
 */const yu="5",Bg="v",kg="s",Fg="r",Rg="f",Ng=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Pg="ls",Og="p",oc="ac",Lg="websocket",Mg="long_polling";/**
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
 */class $g{constructor(e,t,r,i,s=!1,o="",a=!1,c=!1){this.secure=t,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=sr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&sr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function w3(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Hg(n,e,t){Z(typeof e=="string","typeof type must == string"),Z(typeof t=="object","typeof params must == object");let r;if(e===Lg)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Mg)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);w3(n)&&(t.ns=n.namespace);const i=[];return zt(t,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class D3{constructor(){this.counters_={}}incrementCounter(e,t=1){An(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Bw(this.counters_)}}/**
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
 */const ul={},hl={};function Cu(n){const e=n.toString();return ul[e]||(ul[e]=new D3),ul[e]}function I3(n,e){const t=n.toString();return hl[t]||(hl[t]=e()),hl[t]}/**
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
 */class S3{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Os(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const rp="start",T3="close",B3="pLPCommand",k3="pRTLPCB",Ug="id",Wg="pw",zg="ser",F3="cb",R3="seg",N3="ts",P3="d",O3="dframe",qg=1870,Vg=30,L3=qg-Vg,M3=25e3,$3=3e4;class Mr{constructor(e,t,r,i,s,o,a){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ps(e),this.stats_=Cu(t),this.urlFn=c=>(this.appCheckToken&&(c[oc]=this.appCheckToken),Hg(t,Mg,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new S3(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor($3)),_3(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Eu((...s)=>{const[o,a,c,l,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===rp)this.id=a,this.password=c;else if(o===T3)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[rp]="t",r[zg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[F3]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Bg]=yu,this.transportSessionId&&(r[kg]=this.transportSessionId),this.lastSessionId&&(r[Pg]=this.lastSessionId),this.applicationId&&(r[Og]=this.applicationId),this.appCheckToken&&(r[oc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ng.test(location.hostname)&&(r[Fg]=Rg);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Mr.forceAllow_=!0}static forceDisallow(){Mr.forceDisallow_=!0}static isAvailable(){return Mr.forceAllow_?!0:!Mr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!g3()&&!m3()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ct(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=hg(t),i=Sg(r,L3);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[O3]="t",r[Ug]=e,r[Wg]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ct(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Eu{constructor(e,t,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=f3(),window[B3+this.uniqueCallbackIdentifier]=e,window[k3+this.uniqueCallbackIdentifier]=t,this.myIFrame=Eu.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){pt("frame writing exception"),a.stack&&pt(a.stack),pt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||pt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ug]=this.myID,e[Wg]=this.myPW,e[zg]=this.currentSerial;let t=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Vg+r.length<=qg;){const o=this.pendingSegs.shift();r=r+"&"+R3+i+"="+o.seg+"&"+N3+i+"="+o.ts+"&"+P3+i+"="+o.d,i++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(r,Math.floor(M3)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{pt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const H3=16384,U3=45e3;let Ro=null;typeof MozWebSocket<"u"?Ro=MozWebSocket:typeof WebSocket<"u"&&(Ro=WebSocket);class on{constructor(e,t,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ps(this.connId),this.stats_=Cu(t),this.connURL=on.connectionURL_(t,o,a,i,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,i,s){const o={};return o[Bg]=yu,typeof location<"u"&&location.hostname&&Ng.test(location.hostname)&&(o[Fg]=Rg),t&&(o[kg]=t),r&&(o[Pg]=r),i&&(o[oc]=i),s&&(o[Og]=s),Hg(e,Lg,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,sr.set("previous_websocket_failure",!0);try{let r;Uw(),this.mySock=new Ro(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){on.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ro!==null&&!on.forceDisallow_}static previouslyFailed(){return sr.isInMemoryStorage||sr.get("previous_websocket_failure")===!0}markConnectionHealthy(){sr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=ps(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Z(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=ct(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=Sg(t,H3);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(U3))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}on.responsesRequiredToBeHealthy=2;on.healthyTimeout=3e4;/**
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
 */class gs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Mr,on]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=on.isAvailable();let r=t&&!on.previouslyFailed();if(e.webSocketOnly&&(t||Ot("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[on];else{const i=this.transports_=[];for(const s of gs.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);gs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}gs.globalTransportInitialized_=!1;/**
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
 */const W3=6e4,z3=5e3,q3=10*1024,V3=100*1024,fl="t",ip="d",G3="s",sp="r",j3="e",op="o",ap="a",lp="n",cp="p",K3="h";class Y3{constructor(e,t,r,i,s,o,a,c,l,u){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ps("c:"+this.id+":"),this.transportManager_=new gs(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Qi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>V3?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>q3?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(fl in e){const t=e[fl];t===ap?this.upgradeIfSecondaryHealthy_():t===sp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===op&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=ki("t",e),r=ki("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:cp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ap,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:lp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=ki("t",e),r=ki("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=ki(fl,e);if(ip in e){const r=e[ip];if(t===K3){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===lp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===G3?this.onConnectionShutdown_(r):t===sp?this.onReset_(r):t===j3?sc("Server Error: "+r):t===op?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):sc("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),yu!==r&&Ot("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),Qi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(W3))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Qi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(z3))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:cp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(sr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Gg{put(e,t,r,i){}merge(e,t,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class jg{constructor(e){this.allowedEvents_=e,this.listeners_={},Z(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const i=this.getInitialEvent(e);i&&t.apply(r,i)}off(e,t,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===t&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){Z(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class No extends jg{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!_g()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new No}getInitialEvent(e){return Z(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const up=32,hp=768;class Ue{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ke(){return new Ue("")}function Ce(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function jn(n){return n.pieces_.length-n.pieceNum_}function He(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Ue(n.pieces_,e)}function Kg(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Q3(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Yg(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Qg(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Ue(e,0)}function rt(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof Ue)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&t.push(r[i])}return new Ue(t,0)}function ge(n){return n.pieceNum_>=n.pieces_.length}function Ht(n,e){const t=Ce(n),r=Ce(e);if(t===null)return e;if(t===r)return Ht(He(n),He(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Xg(n,e){if(jn(n)!==jn(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function Xt(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(jn(n)>jn(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class X3{constructor(e,t){this.errorPrefix_=t,this.parts_=Yg(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=aa(this.parts_[r]);Zg(this)}}function Z3(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=aa(e),Zg(n)}function J3(n){const e=n.parts_.pop();n.byteLength_-=aa(e),n.parts_.length>0&&(n.byteLength_-=1)}function Zg(n){if(n.byteLength_>hp)throw new Error(n.errorPrefix_+"has a key path longer than "+hp+" bytes ("+n.byteLength_+").");if(n.parts_.length>up)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+up+") or object contains a cycle "+tr(n))}function tr(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class bu extends jg{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new bu}getInitialEvent(e){return Z(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Fi=1e3,eD=60*5*1e3,fp=30*1e3,tD=1.3,nD=3e4,rD="server_kill",dp=3;class vn extends Gg{constructor(e,t,r,i,s,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=vn.nextPersistentConnectionId_++,this.log_=Ps("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Fi,this.maxReconnectDelay_=eD,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");bu.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&No.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_(ct(s)),Z(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const t=new _u,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),Z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Z(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const c=a.d,l=a.s;vn.warnOnListenWarnings_(c,t),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&An(e,"w")){const r=ei(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',s=t._path.toString();Ot(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Kw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=fp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=jw(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),Z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,t)}sendUnlisten_(e,t,r,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,i){const s={p:t,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,r,i){this.putInternal("p",e,t,r,i)}merge(e,t,r,i){this.putInternal("m",e,t,r,i)}putInternal(e,t,r,i,s){this.initConnection_();const o={p:t,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,s=>{this.log_(t+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ct(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):sc("Unrecognized action received from server: "+ct(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Z(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Fi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Fi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>nD&&(this.reconnectDelay_=Fi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*tD)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+vn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,r())},l=function(f){Z(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?pt("getToken() completed but was canceled"):(pt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=h&&h.token,a=new Y3(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,d=>{Ot(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(rD)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Ot(f),c())}}}interrupt(e){pt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){pt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],zd(this.interruptReasons_)&&(this.reconnectDelay_=Fi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(s=>vu(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const r=new Ue(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(t),s.delete(t),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,t){pt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=dp&&(this.reconnectDelay_=fp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){pt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=dp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Ag.replace(/\./g,"-")]=1,_g()?e["framework.cordova"]=1:Hw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=No.getInstance().currentlyOnline();return zd(this.interruptReasons_)&&e}}vn.nextPersistentConnectionId_=0;vn.nextConnectionId_=0;/**
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
 */class Ee{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ee(e,t)}}/**
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
 */class la{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new Ee(ti,e),i=new Ee(ti,t);return this.compare(r,i)!==0}minPost(){return Ee.MIN}}/**
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
 */let qs;class Jg extends la{static get __EMPTY_NODE(){return qs}static set __EMPTY_NODE(e){qs=e}compare(e,t){return fi(e.name,t.name)}isDefinedOn(e){throw hi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ee.MIN}maxPost(){return new Ee(gr,qs)}makePost(e,t){return Z(typeof e=="string","KeyIndex indexValue must always be a string."),new Ee(e,qs)}toString(){return".key"}}const Yr=new Jg;/**
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
 */class Vs{constructor(e,t,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?r(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class tt{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??tt.RED,this.left=i??Dt.EMPTY_NODE,this.right=s??Dt.EMPTY_NODE}copy(e,t,r,i,s){return new tt(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Dt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,i;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return Dt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}tt.RED=!0;tt.BLACK=!1;class iD{copy(e,t,r,i,s){return this}insert(e,t,r){return new tt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Dt{constructor(e,t=Dt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Dt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,tt.BLACK,null,null))}remove(e){return new Dt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,tt.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,i=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Vs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Vs(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Vs(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Vs(this.root_,null,this.comparator_,!0,e)}}Dt.EMPTY_NODE=new iD;/**
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
 */function sD(n,e){return fi(n.name,e.name)}function Au(n,e){return fi(n,e)}/**
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
 */let ac;function oD(n){ac=n}const em=function(n){return typeof n=="number"?"number:"+Tg(n):"string:"+n},tm=function(n){if(n.isLeafNode()){const e=n.val();Z(typeof e=="string"||typeof e=="number"||typeof e=="object"&&An(e,".sv"),"Priority must be a string or number.")}else Z(n===ac||n.isEmpty(),"priority of unexpected type.");Z(n===ac||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let pp;class et{constructor(e,t=et.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Z(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),tm(this.priorityNode_)}static set __childrenNodeConstructor(e){pp=e}static get __childrenNodeConstructor(){return pp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new et(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ge(e)?this:Ce(e)===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:et.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=Ce(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(Z(r!==".priority"||jn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,et.__childrenNodeConstructor.EMPTY_NODE.updateChild(He(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+em(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Tg(this.value_):e+=this.value_,this.lazyHash_=Dg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===et.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof et.__childrenNodeConstructor?-1:(Z(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,i=et.VALUE_TYPE_ORDER.indexOf(t),s=et.VALUE_TYPE_ORDER.indexOf(r);return Z(i>=0,"Unknown leaf type: "+t),Z(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}et.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let nm,rm;function aD(n){nm=n}function lD(n){rm=n}class cD extends la{compare(e,t){const r=e.node.getPriority(),i=t.node.getPriority(),s=r.compareTo(i);return s===0?fi(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ee.MIN}maxPost(){return new Ee(gr,new et("[PRIORITY-POST]",rm))}makePost(e,t){const r=nm(e);return new Ee(t,new et("[PRIORITY-POST]",r))}toString(){return".priority"}}const gt=new cD;/**
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
 */const uD=Math.log(2);class hD{constructor(e){const t=s=>parseInt(Math.log(s)/uD,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Po=function(n,e,t,r){n.sort(e);const i=function(c,l){const u=l-c;let f,h;if(u===0)return null;if(u===1)return f=n[c],h=t?t(f):f,new tt(h,f.node,tt.BLACK,null,null);{const d=parseInt(u/2,10)+c,p=i(c,d),g=i(d+1,l);return f=n[d],h=t?t(f):f,new tt(h,f.node,tt.BLACK,p,g)}},s=function(c){let l=null,u=null,f=n.length;const h=function(p,g){const m=f-p,y=f;f-=p;const _=i(m+1,y),x=n[m],v=t?t(x):x;d(new tt(v,x.node,g,null,_))},d=function(p){l?(l.left=p,l=p):(u=p,l=p)};for(let p=0;p<c.count;++p){const g=c.nextBitIsOne(),m=Math.pow(2,c.count-(p+1));g?h(m,tt.BLACK):(h(m,tt.BLACK),h(m,tt.RED))}return u},o=new hD(n.length),a=s(o);return new Dt(r||e,a)};/**
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
 */let dl;const Ri={};class xn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return Z(gt,"ChildrenNode.ts has not been loaded"),dl=dl||new xn({".priority":Ri},{".priority":gt}),dl}get(e){const t=ei(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Dt?t:null}hasIndex(e){return An(this.indexSet_,e.toString())}addIndex(e,t){Z(e!==Yr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=t.getIterator(Ee.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Po(r,e.getCompare()):a=Ri;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new xn(u,l)}addToIndexes(e,t){const r=Bo(this.indexes_,(i,s)=>{const o=ei(this.indexSet_,s);if(Z(o,"Missing index implementation for "+s),i===Ri)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(Ee.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Po(a,o.getCompare())}else return Ri;else{const a=t.get(e.name);let c=i;return a&&(c=c.remove(new Ee(e.name,a))),c.insert(e,e.node)}});return new xn(r,this.indexSet_)}removeFromIndexes(e,t){const r=Bo(this.indexes_,i=>{if(i===Ri)return i;{const s=t.get(e.name);return s?i.remove(new Ee(e.name,s)):i}});return new xn(r,this.indexSet_)}}/**
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
 */let Ni;class we{constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&tm(this.priorityNode_),this.children_.isEmpty()&&Z(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ni||(Ni=new we(new Dt(Au),null,xn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ni}updatePriority(e){return this.children_.isEmpty()?this:new we(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ni:t}}getChild(e){const t=Ce(e);return t===null?this:this.getImmediateChild(t).getChild(He(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(Z(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new Ee(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ni:this.priorityNode_;return new we(i,o,s)}}updateChild(e,t){const r=Ce(e);if(r===null)return t;{Z(Ce(e)!==".priority"||jn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(He(e),t);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,i=0,s=!0;if(this.forEachChild(gt,(o,a)=>{t[o]=a.val(e),r++,s&&we.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+em(this.getPriority().val())+":"),this.forEachChild(gt,(t,r)=>{const i=r.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Dg(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new Ee(e,t));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ee(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ee(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Ee.Wrap);let s=i.peek();for(;s!=null&&t.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Ee.Wrap);let s=i.peek();for(;s!=null&&t.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ls?-1:0}withIndex(e){if(e===Yr||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new we(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Yr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(gt),i=t.getIterator(gt);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Yr?null:this.indexMap_.get(e.toString())}}we.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class fD extends we{constructor(){super(new Dt(Au),we.EMPTY_NODE,xn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return we.EMPTY_NODE}isEmpty(){return!1}}const Ls=new fD;Object.defineProperties(Ee,{MIN:{value:new Ee(ti,we.EMPTY_NODE)},MAX:{value:new Ee(gr,Ls)}});Jg.__EMPTY_NODE=we.EMPTY_NODE;et.__childrenNodeConstructor=we;oD(Ls);lD(Ls);/**
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
 */const dD=!0;function _t(n,e=null){if(n===null)return we.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),Z(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new et(t,_t(e))}if(!(n instanceof Array)&&dD){const t=[];let r=!1;if(zt(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=_t(a);c.isEmpty()||(r=r||!c.getPriority().isEmpty(),t.push(new Ee(o,c)))}}),t.length===0)return we.EMPTY_NODE;const s=Po(t,sD,o=>o.name,Au);if(r){const o=Po(t,gt.getCompare());return new we(s,_t(e),new xn({".priority":o},{".priority":gt}))}else return new we(s,_t(e),xn.Default)}else{let t=we.EMPTY_NODE;return zt(n,(r,i)=>{if(An(n,r)&&r.substring(0,1)!=="."){const s=_t(i);(s.isLeafNode()||!s.isEmpty())&&(t=t.updateImmediateChild(r,s))}}),t.updatePriority(_t(e))}}aD(_t);/**
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
 */class pD extends la{constructor(e){super(),this.indexPath_=e,Z(!ge(e)&&Ce(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),i=this.extractChild(t.node),s=r.compareTo(i);return s===0?fi(e.name,t.name):s}makePost(e,t){const r=_t(e),i=we.EMPTY_NODE.updateChild(this.indexPath_,r);return new Ee(t,i)}maxPost(){const e=we.EMPTY_NODE.updateChild(this.indexPath_,Ls);return new Ee(gr,e)}toString(){return Yg(this.indexPath_,0).join("/")}}/**
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
 */class _D extends la{compare(e,t){const r=e.node.compareTo(t.node);return r===0?fi(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ee.MIN}maxPost(){return Ee.MAX}makePost(e,t){const r=_t(e);return new Ee(t,r)}toString(){return".value"}}const xD=new _D;/**
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
 */function gD(n){return{type:"value",snapshotNode:n}}function mD(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function vD(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function _p(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function yD(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class wu{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=gt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return Z(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Z(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ti}hasEnd(){return this.endSet_}getIndexEndValue(){return Z(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Z(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:gr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return Z(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===gt}copy(){const e=new wu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function xp(n){const e={};if(n.isDefault())return e;let t;if(n.index_===gt?t="$priority":n.index_===xD?t="$value":n.index_===Yr?t="$key":(Z(n.index_ instanceof pD,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=ct(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=ct(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+ct(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=ct(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+ct(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function gp(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==gt&&(e.i=n.index_.toString()),e}/**
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
 */class Oo extends Gg{constructor(e,t,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ps("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(Z(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Oo.getListenId_(e,r),a={};this.listens_[o]=a;const c=xp(e._queryParams);this.restRequest_(s+".json",c,(l,u)=>{let f=u;if(l===404&&(f=null,l=null),l===null&&this.onDataUpdate_(s,f,!1,r),ei(this.listens_,o)===a){let h;l?l===401?h="permission_denied":h="rest_error:"+l:h="ok",i(h,null)}})}unlisten(e,t){const r=Oo.getListenId_(e,t);delete this.listens_[r]}get(e){const t=xp(e._queryParams),r=e._path.toString(),i=new _u;return this.restRequest_(r+".json",t,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(t.auth=i.accessToken),s&&s.token&&(t.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Yw(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=ps(a.responseText)}catch{Ot("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,c)}else a.status!==401&&a.status!==404&&Ot("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class CD{constructor(){this.rootNode_=we.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Lo(){return{value:null,children:new Map}}function im(n,e,t){if(ge(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=Ce(e);n.children.has(r)||n.children.set(r,Lo());const i=n.children.get(r);e=He(e),im(i,e,t)}}function lc(n,e,t){n.value!==null?t(e,n.value):ED(n,(r,i)=>{const s=new Ue(e.toString()+"/"+r);lc(i,s,t)})}function ED(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
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
 */class bD{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&zt(this.last_,(r,i)=>{t[r]=t[r]-i}),this.last_=e,t}}/**
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
 */const mp=10*1e3,AD=30*1e3,wD=5*60*1e3;class DD{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new bD(e);const r=mp+(AD-mp)*Math.random();Qi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;zt(e,(i,s)=>{s>0&&An(this.statsToReport_,i)&&(t[i]=s,r=!0)}),r&&this.server_.reportStats(t),Qi(this.reportStats_.bind(this),Math.floor(Math.random()*2*wD))}}/**
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
 */var an;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(an||(an={}));function sm(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function om(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function am(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Mo{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=an.ACK_USER_WRITE,this.source=sm()}operationForChild(e){if(ge(this.path)){if(this.affectedTree.value!=null)return Z(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Ue(e));return new Mo(ke(),t,this.revert)}}else return Z(Ce(this.path)===e,"operationForChild called for unrelated child."),new Mo(He(this.path),this.affectedTree,this.revert)}}/**
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
 */class mr{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=an.OVERWRITE}operationForChild(e){return ge(this.path)?new mr(this.source,ke(),this.snap.getImmediateChild(e)):new mr(this.source,He(this.path),this.snap)}}/**
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
 */class ms{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=an.MERGE}operationForChild(e){if(ge(this.path)){const t=this.children.subtree(new Ue(e));return t.isEmpty()?null:t.value?new mr(this.source,ke(),t.value):new ms(this.source,ke(),t)}else return Z(Ce(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ms(this.source,He(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Du{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ge(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ce(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function ID(n,e,t,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(yD(o.childName,o.snapshotNode))}),Pi(n,i,"child_removed",e,r,t),Pi(n,i,"child_added",e,r,t),Pi(n,i,"child_moved",s,r,t),Pi(n,i,"child_changed",e,r,t),Pi(n,i,"value",e,r,t),i}function Pi(n,e,t,r,i,s){const o=r.filter(a=>a.type===t);o.sort((a,c)=>TD(n,a,c)),o.forEach(a=>{const c=SD(n,a,s);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function SD(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function TD(n,e,t){if(e.childName==null||t.childName==null)throw hi("Should only compare child_ events.");const r=new Ee(e.childName,e.snapshotNode),i=new Ee(t.childName,t.snapshotNode);return n.index_.compare(r,i)}/**
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
 */function lm(n,e){return{eventCache:n,serverCache:e}}function Xi(n,e,t,r){return lm(new Du(e,t,r),n.serverCache)}function cm(n,e,t,r){return lm(n.eventCache,new Du(e,t,r))}function cc(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function vr(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let pl;const BD=()=>(pl||(pl=new Dt(x3)),pl);class $e{constructor(e,t=BD()){this.value=e,this.children=t}static fromObject(e){let t=new $e(null);return zt(e,(r,i)=>{t=t.set(new Ue(r),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ke(),value:this.value};if(ge(e))return null;{const r=Ce(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(He(e),t);return s!=null?{path:rt(new Ue(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ge(e))return this;{const t=Ce(e),r=this.children.get(t);return r!==null?r.subtree(He(e)):new $e(null)}}set(e,t){if(ge(e))return new $e(t,this.children);{const r=Ce(e),s=(this.children.get(r)||new $e(null)).set(He(e),t),o=this.children.insert(r,s);return new $e(this.value,o)}}remove(e){if(ge(e))return this.children.isEmpty()?new $e(null):new $e(null,this.children);{const t=Ce(e),r=this.children.get(t);if(r){const i=r.remove(He(e));let s;return i.isEmpty()?s=this.children.remove(t):s=this.children.insert(t,i),this.value===null&&s.isEmpty()?new $e(null):new $e(this.value,s)}else return this}}get(e){if(ge(e))return this.value;{const t=Ce(e),r=this.children.get(t);return r?r.get(He(e)):null}}setTree(e,t){if(ge(e))return t;{const r=Ce(e),s=(this.children.get(r)||new $e(null)).setTree(He(e),t);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new $e(this.value,o)}}fold(e){return this.fold_(ke(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(rt(e,i),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,ke(),t)}findOnPath_(e,t,r){const i=this.value?r(t,this.value):!1;if(i)return i;if(ge(e))return null;{const s=Ce(e),o=this.children.get(s);return o?o.findOnPath_(He(e),rt(t,s),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ke(),t)}foreachOnPath_(e,t,r){if(ge(e))return this;{this.value&&r(t,this.value);const i=Ce(e),s=this.children.get(i);return s?s.foreachOnPath_(He(e),rt(t,i),r):new $e(null)}}foreach(e){this.foreach_(ke(),e)}foreach_(e,t){this.children.inorderTraversal((r,i)=>{i.foreach_(rt(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
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
 */class Zt{constructor(e){this.writeTree_=e}static empty(){return new Zt(new $e(null))}}function Zi(n,e,t){if(ge(e))return new Zt(new $e(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ht(i,e);return s=s.updateChild(o,t),new Zt(n.writeTree_.set(i,s))}else{const i=new $e(t),s=n.writeTree_.setTree(e,i);return new Zt(s)}}}function vp(n,e,t){let r=n;return zt(t,(i,s)=>{r=Zi(r,rt(e,i),s)}),r}function yp(n,e){if(ge(e))return Zt.empty();{const t=n.writeTree_.setTree(e,new $e(null));return new Zt(t)}}function uc(n,e){return Sr(n,e)!=null}function Sr(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Ht(t.path,e)):null}function Cp(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(gt,(r,i)=>{e.push(new Ee(r,i))}):n.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Ee(r,i.value))}),e}function Hn(n,e){if(ge(e))return n;{const t=Sr(n,e);return t!=null?new Zt(new $e(t)):new Zt(n.writeTree_.subtree(e))}}function hc(n){return n.writeTree_.isEmpty()}function ni(n,e){return um(ke(),n.writeTree_,e)}function um(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(Z(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):t=um(rt(n,i),s,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(rt(n,".priority"),r)),t}}/**
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
 */function hm(n,e){return xm(e,n)}function kD(n,e,t,r,i){Z(r>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:i}),i&&(n.visibleWrites=Zi(n.visibleWrites,e,t)),n.lastWriteId=r}function FD(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function RD(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);Z(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let i=r.visible,s=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&ND(a,r.path)?i=!1:Xt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return PD(n),!0;if(r.snap)n.visibleWrites=yp(n.visibleWrites,r.path);else{const a=r.children;zt(a,c=>{n.visibleWrites=yp(n.visibleWrites,rt(r.path,c))})}return!0}else return!1}function ND(n,e){if(n.snap)return Xt(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Xt(rt(n.path,t),e))return!0;return!1}function PD(n){n.visibleWrites=fm(n.allWrites,OD,ke()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function OD(n){return n.visible}function fm(n,e,t){let r=Zt.empty();for(let i=0;i<n.length;++i){const s=n[i];if(e(s)){const o=s.path;let a;if(s.snap)Xt(t,o)?(a=Ht(t,o),r=Zi(r,a,s.snap)):Xt(o,t)&&(a=Ht(o,t),r=Zi(r,ke(),s.snap.getChild(a)));else if(s.children){if(Xt(t,o))a=Ht(t,o),r=vp(r,a,s.children);else if(Xt(o,t))if(a=Ht(o,t),ge(a))r=vp(r,ke(),s.children);else{const c=ei(s.children,Ce(a));if(c){const l=c.getChild(He(a));r=Zi(r,ke(),l)}}}else throw hi("WriteRecord should have .snap or .children")}}return r}function dm(n,e,t,r,i){if(!r&&!i){const s=Sr(n.visibleWrites,e);if(s!=null)return s;{const o=Hn(n.visibleWrites,e);if(hc(o))return t;if(t==null&&!uc(o,ke()))return null;{const a=t||we.EMPTY_NODE;return ni(o,a)}}}else{const s=Hn(n.visibleWrites,e);if(!i&&hc(s))return t;if(!i&&t==null&&!uc(s,ke()))return null;{const o=function(l){return(l.visible||i)&&(!r||!~r.indexOf(l.writeId))&&(Xt(l.path,e)||Xt(e,l.path))},a=fm(n.allWrites,o,e),c=t||we.EMPTY_NODE;return ni(a,c)}}}function LD(n,e,t){let r=we.EMPTY_NODE;const i=Sr(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(gt,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(t){const s=Hn(n.visibleWrites,e);return t.forEachChild(gt,(o,a)=>{const c=ni(Hn(s,new Ue(o)),a);r=r.updateImmediateChild(o,c)}),Cp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Hn(n.visibleWrites,e);return Cp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function MD(n,e,t,r,i){Z(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=rt(e,t);if(uc(n.visibleWrites,s))return null;{const o=Hn(n.visibleWrites,s);return hc(o)?i.getChild(t):ni(o,i.getChild(t))}}function $D(n,e,t,r){const i=rt(e,t),s=Sr(n.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(t)){const o=Hn(n.visibleWrites,i);return ni(o,r.getNode().getImmediateChild(t))}else return null}function HD(n,e){return Sr(n.visibleWrites,e)}function UD(n,e,t,r,i,s,o){let a;const c=Hn(n.visibleWrites,e),l=Sr(c,ke());if(l!=null)a=l;else if(t!=null)a=ni(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],f=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let d=h.getNext();for(;d&&u.length<i;)f(d,r)!==0&&u.push(d),d=h.getNext();return u}else return[]}function WD(){return{visibleWrites:Zt.empty(),allWrites:[],lastWriteId:-1}}function fc(n,e,t,r){return dm(n.writeTree,n.treePath,e,t,r)}function pm(n,e){return LD(n.writeTree,n.treePath,e)}function Ep(n,e,t,r){return MD(n.writeTree,n.treePath,e,t,r)}function $o(n,e){return HD(n.writeTree,rt(n.treePath,e))}function zD(n,e,t,r,i,s){return UD(n.writeTree,n.treePath,e,t,r,i,s)}function Iu(n,e,t){return $D(n.writeTree,n.treePath,e,t)}function _m(n,e){return xm(rt(n.treePath,e),n.writeTree)}function xm(n,e){return{treePath:n,writeTree:e}}/**
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
 */class qD{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;Z(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),Z(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(t==="child_added"&&s==="child_removed")this.changeMap.set(r,_p(r,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&s==="child_changed")this.changeMap.set(r,vD(r,i.oldSnap));else if(t==="child_changed"&&s==="child_added")this.changeMap.set(r,mD(r,e.snapshotNode));else if(t==="child_changed"&&s==="child_changed")this.changeMap.set(r,_p(r,e.snapshotNode,i.oldSnap));else throw hi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class VD{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const gm=new VD;class Su{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Du(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Iu(this.writes_,e,r)}}getChildAfterChild(e,t,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:vr(this.viewCache_),s=zD(this.writes_,i,t,1,r,e);return s.length===0?null:s[0]}}function GD(n,e){Z(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),Z(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function jD(n,e,t,r,i){const s=new qD;let o,a;if(t.type===an.OVERWRITE){const l=t;l.source.fromUser?o=dc(n,e,l.path,l.snap,r,i,s):(Z(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!ge(l.path),o=Ho(n,e,l.path,l.snap,r,i,a,s))}else if(t.type===an.MERGE){const l=t;l.source.fromUser?o=YD(n,e,l.path,l.children,r,i,s):(Z(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=pc(n,e,l.path,l.children,r,i,a,s))}else if(t.type===an.ACK_USER_WRITE){const l=t;l.revert?o=ZD(n,e,l.path,r,i,s):o=QD(n,e,l.path,l.affectedTree,r,i,s)}else if(t.type===an.LISTEN_COMPLETE)o=XD(n,e,t.path,r,s);else throw hi("Unknown operation type: "+t.type);const c=s.getChanges();return KD(e,o,c),{viewCache:o,changes:c}}function KD(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=cc(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&t.push(gD(cc(e)))}}function mm(n,e,t,r,i,s){const o=e.eventCache;if($o(r,t)!=null)return e;{let a,c;if(ge(t))if(Z(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=vr(e),u=l instanceof we?l:we.EMPTY_NODE,f=pm(r,u);a=n.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const l=fc(r,vr(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,s)}else{const l=Ce(t);if(l===".priority"){Z(jn(t)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const f=Ep(r,t,u,c);f!=null?a=n.filter.updatePriority(u,f):a=o.getNode()}else{const u=He(t);let f;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const h=Ep(r,t,o.getNode(),c);h!=null?f=o.getNode().getImmediateChild(l).updateChild(u,h):f=o.getNode().getImmediateChild(l)}else f=Iu(r,l,e.serverCache);f!=null?a=n.filter.updateChild(o.getNode(),l,f,u,i,s):a=o.getNode()}}return Xi(e,a,o.isFullyInitialized()||ge(t),n.filter.filtersNodes())}}function Ho(n,e,t,r,i,s,o,a){const c=e.serverCache;let l;const u=o?n.filter:n.filter.getIndexedFilter();if(ge(t))l=u.updateFullNode(c.getNode(),r,null);else if(u.filtersNodes()&&!c.isFiltered()){const d=c.getNode().updateChild(t,r);l=u.updateFullNode(c.getNode(),d,null)}else{const d=Ce(t);if(!c.isCompleteForPath(t)&&jn(t)>1)return e;const p=He(t),m=c.getNode().getImmediateChild(d).updateChild(p,r);d===".priority"?l=u.updatePriority(c.getNode(),m):l=u.updateChild(c.getNode(),d,m,p,gm,null)}const f=cm(e,l,c.isFullyInitialized()||ge(t),u.filtersNodes()),h=new Su(i,f,s);return mm(n,f,t,i,h,a)}function dc(n,e,t,r,i,s,o){const a=e.eventCache;let c,l;const u=new Su(i,e,s);if(ge(t))l=n.filter.updateFullNode(e.eventCache.getNode(),r,o),c=Xi(e,l,!0,n.filter.filtersNodes());else{const f=Ce(t);if(f===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),r),c=Xi(e,l,a.isFullyInitialized(),a.isFiltered());else{const h=He(t),d=a.getNode().getImmediateChild(f);let p;if(ge(h))p=r;else{const g=u.getCompleteChild(f);g!=null?Kg(h)===".priority"&&g.getChild(Qg(h)).isEmpty()?p=g:p=g.updateChild(h,r):p=we.EMPTY_NODE}if(d.equals(p))c=e;else{const g=n.filter.updateChild(a.getNode(),f,p,h,u,o);c=Xi(e,g,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function bp(n,e){return n.eventCache.isCompleteForChild(e)}function YD(n,e,t,r,i,s,o){let a=e;return r.foreach((c,l)=>{const u=rt(t,c);bp(e,Ce(u))&&(a=dc(n,a,u,l,i,s,o))}),r.foreach((c,l)=>{const u=rt(t,c);bp(e,Ce(u))||(a=dc(n,a,u,l,i,s,o))}),a}function Ap(n,e,t){return t.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function pc(n,e,t,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;ge(t)?l=r:l=new $e(null).setTree(t,r);const u=e.serverCache.getNode();return l.children.inorderTraversal((f,h)=>{if(u.hasChild(f)){const d=e.serverCache.getNode().getImmediateChild(f),p=Ap(n,d,h);c=Ho(n,c,new Ue(f),p,i,s,o,a)}}),l.children.inorderTraversal((f,h)=>{const d=!e.serverCache.isCompleteForChild(f)&&h.value===null;if(!u.hasChild(f)&&!d){const p=e.serverCache.getNode().getImmediateChild(f),g=Ap(n,p,h);c=Ho(n,c,new Ue(f),g,i,s,o,a)}}),c}function QD(n,e,t,r,i,s,o){if($o(i,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(r.value!=null){if(ge(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Ho(n,e,t,c.getNode().getChild(t),i,s,a,o);if(ge(t)){let l=new $e(null);return c.getNode().forEachChild(Yr,(u,f)=>{l=l.set(new Ue(u),f)}),pc(n,e,t,l,i,s,a,o)}else return e}else{let l=new $e(null);return r.foreach((u,f)=>{const h=rt(t,u);c.isCompleteForPath(h)&&(l=l.set(u,c.getNode().getChild(h)))}),pc(n,e,t,l,i,s,a,o)}}function XD(n,e,t,r,i){const s=e.serverCache,o=cm(e,s.getNode(),s.isFullyInitialized()||ge(t),s.isFiltered());return mm(n,o,t,r,gm,i)}function ZD(n,e,t,r,i,s){let o;if($o(r,t)!=null)return e;{const a=new Su(r,e,i),c=e.eventCache.getNode();let l;if(ge(t)||Ce(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=fc(r,vr(e));else{const f=e.serverCache.getNode();Z(f instanceof we,"serverChildren would be complete if leaf node"),u=pm(r,f)}u=u,l=n.filter.updateFullNode(c,u,s)}else{const u=Ce(t);let f=Iu(r,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=c.getImmediateChild(u)),f!=null?l=n.filter.updateChild(c,u,f,He(t),a,s):e.eventCache.getNode().hasChild(u)?l=n.filter.updateChild(c,u,we.EMPTY_NODE,He(t),a,s):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=fc(r,vr(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,s)))}return o=e.serverCache.isFullyInitialized()||$o(r,ke())!=null,Xi(e,l,o,n.filter.filtersNodes())}}function JD(n,e){const t=vr(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!ge(e)&&!t.getImmediateChild(Ce(e)).isEmpty())?t.getChild(e):null}function wp(n,e,t,r){e.type===an.MERGE&&e.source.queryId!==null&&(Z(vr(n.viewCache_),"We should always have a full cache before handling merges"),Z(cc(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,s=jD(n.processor_,i,e,t,r);return GD(n.processor_,s.viewCache),Z(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=s.viewCache,eI(n,s.changes,s.viewCache.eventCache.getNode())}function eI(n,e,t,r){const i=n.eventRegistrations_;return ID(n.eventGenerator_,e,t,i)}/**
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
 */let Dp;function tI(n){Z(!Dp,"__referenceConstructor has already been defined"),Dp=n}function Tu(n,e,t,r){const i=e.source.queryId;if(i!==null){const s=n.views.get(i);return Z(s!=null,"SyncTree gave us an op for an invalid query."),wp(s,e,t,r)}else{let s=[];for(const o of n.views.values())s=s.concat(wp(o,e,t,r));return s}}function Bu(n,e){let t=null;for(const r of n.views.values())t=t||JD(r,e);return t}/**
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
 */let Ip;function nI(n){Z(!Ip,"__referenceConstructor has already been defined"),Ip=n}class Sp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new $e(null),this.pendingWriteTree_=WD(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function rI(n,e,t,r,i){return kD(n.pendingWriteTree_,e,t,r,i),i?ua(n,new mr(sm(),e,t)):[]}function $r(n,e,t=!1){const r=FD(n.pendingWriteTree_,e);if(RD(n.pendingWriteTree_,e)){let s=new $e(null);return r.snap!=null?s=s.set(ke(),!0):zt(r.children,o=>{s=s.set(new Ue(o),!0)}),ua(n,new Mo(r.path,s,t))}else return[]}function ca(n,e,t){return ua(n,new mr(om(),e,t))}function iI(n,e,t){const r=$e.fromObject(t);return ua(n,new ms(om(),e,r))}function sI(n,e,t,r){const i=Em(n,r);if(i!=null){const s=bm(i),o=s.path,a=s.queryId,c=Ht(o,e),l=new mr(am(a),c,t);return Am(n,o,l)}else return[]}function oI(n,e,t,r){const i=Em(n,r);if(i){const s=bm(i),o=s.path,a=s.queryId,c=Ht(o,e),l=$e.fromObject(t),u=new ms(am(a),c,l);return Am(n,o,u)}else return[]}function vm(n,e,t){const i=n.pendingWriteTree_,s=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=Ht(o,e),l=Bu(a,c);if(l)return l});return dm(i,e,s,t,!0)}function ua(n,e){return ym(e,n.syncPointTree_,null,hm(n.pendingWriteTree_,ke()))}function ym(n,e,t,r){if(ge(n.path))return Cm(n,e,t,r);{const i=e.get(ke());t==null&&i!=null&&(t=Bu(i,ke()));let s=[];const o=Ce(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const l=t?t.getImmediateChild(o):null,u=_m(r,o);s=s.concat(ym(a,c,l,u))}return i&&(s=s.concat(Tu(i,n,r,t))),s}}function Cm(n,e,t,r){const i=e.get(ke());t==null&&i!=null&&(t=Bu(i,ke()));let s=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,l=_m(r,o),u=n.operationForChild(o);u&&(s=s.concat(Cm(u,a,c,l)))}),i&&(s=s.concat(Tu(i,n,r,t))),s}function Em(n,e){return n.tagToQueryMap.get(e)}function bm(n){const e=n.indexOf("$");return Z(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Ue(n.substr(0,e))}}function Am(n,e,t){const r=n.syncPointTree_.get(e);Z(r,"Missing sync point for query tag that we're tracking");const i=hm(n.pendingWriteTree_,e);return Tu(r,t,i,null)}/**
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
 */class ku{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new ku(t)}node(){return this.node_}}class Fu{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=rt(this.path_,e);return new Fu(this.syncTree_,t)}node(){return vm(this.syncTree_,this.path_)}}const aI=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Tp=function(n,e,t){if(!n||typeof n!="object")return n;if(Z(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return lI(n[".sv"],e,t);if(typeof n[".sv"]=="object")return cI(n[".sv"],e);Z(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},lI=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:Z(!1,"Unexpected server value: "+n)}},cI=function(n,e,t){n.hasOwnProperty("increment")||Z(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&Z(!1,"Unexpected increment value: "+r);const i=e.node();if(Z(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},uI=function(n,e,t,r){return Ru(e,new Fu(t,n),r)},hI=function(n,e,t){return Ru(n,new ku(e),t)};function Ru(n,e,t){const r=n.getPriority().val(),i=Tp(r,e.getImmediateChild(".priority"),t);let s;if(n.isLeafNode()){const o=n,a=Tp(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new et(a,_t(i)):n}else{const o=n;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new et(i))),o.forEachChild(gt,(a,c)=>{const l=Ru(c,e.getImmediateChild(a),t);l!==c&&(s=s.updateImmediateChild(a,l))}),s}}/**
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
 */class Nu{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function Pu(n,e){let t=e instanceof Ue?e:new Ue(e),r=n,i=Ce(t);for(;i!==null;){const s=ei(r.node.children,i)||{children:{},childCount:0};r=new Nu(i,r,s),t=He(t),i=Ce(t)}return r}function di(n){return n.node.value}function wm(n,e){n.node.value=e,_c(n)}function Dm(n){return n.node.childCount>0}function fI(n){return di(n)===void 0&&!Dm(n)}function ha(n,e){zt(n.node.children,(t,r)=>{e(new Nu(t,n,r))})}function Im(n,e,t,r){t&&e(n),ha(n,i=>{Im(i,e,!0)})}function dI(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ms(n){return new Ue(n.parent===null?n.name:Ms(n.parent)+"/"+n.name)}function _c(n){n.parent!==null&&pI(n.parent,n.name,n)}function pI(n,e,t){const r=fI(t),i=An(n.node.children,e);r&&i?(delete n.node.children[e],n.node.childCount--,_c(n)):!r&&!i&&(n.node.children[e]=t.node,n.node.childCount++,_c(n))}/**
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
 */const _I=/[\[\].#$\/\u0000-\u001F\u007F]/,xI=/[\[\].#$\u0000-\u001F\u007F]/,_l=10*1024*1024,Sm=function(n){return typeof n=="string"&&n.length!==0&&!_I.test(n)},gI=function(n){return typeof n=="string"&&n.length!==0&&!xI.test(n)},mI=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),gI(n)},Tm=function(n,e,t){const r=t instanceof Ue?new X3(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+tr(r));if(typeof e=="function")throw new Error(n+"contains a function "+tr(r)+" with contents = "+e.toString());if(Ig(e))throw new Error(n+"contains "+e.toString()+" "+tr(r));if(typeof e=="string"&&e.length>_l/3&&aa(e)>_l)throw new Error(n+"contains a string greater than "+_l+" utf8 bytes "+tr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(zt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Sm(o)))throw new Error(n+" contains an invalid key ("+o+") "+tr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Z3(r,o),Tm(n,a,r),J3(r)}),i&&s)throw new Error(n+' contains ".value" child '+tr(r)+" in addition to actual children.")}},vI=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Sm(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!mI(t))throw new Error(Xw(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class yI{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function CI(n,e){let t=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();t!==null&&!Xg(s,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:s}),t.events.push(i)}t&&n.eventLists_.push(t)}function Tr(n,e,t){CI(n,t),EI(n,r=>Xt(r,e)||Xt(e,r))}function EI(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const i=n.eventLists_[r];if(i){const s=i.path;e(s)?(bI(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function bI(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();Yi&&pt("event: "+t.toString()),Os(r)}}}/**
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
 */const AI="repo_interrupt",wI=25;class DI{constructor(e,t,r,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new yI,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Lo(),this.transactionQueueTree_=new Nu,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function II(n,e,t){if(n.stats_=Cu(n.repoInfo_),n.forceRestClient_||E3())n.server_=new Oo(n.repoInfo_,(r,i,s,o)=>{Bp(n,r,i,s,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>kp(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ct(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new vn(n.repoInfo_,e,(r,i,s,o)=>{Bp(n,r,i,s,o)},r=>{kp(n,r)},r=>{TI(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=I3(n.repoInfo_,()=>new DD(n.stats_,n.server_)),n.infoData_=new CD,n.infoSyncTree_=new Sp({startListening:(r,i,s,o)=>{let a=[];const c=n.infoData_.getNode(r._path);return c.isEmpty()||(a=ca(n.infoSyncTree_,r._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ou(n,"connected",!1),n.serverSyncTree_=new Sp({startListening:(r,i,s,o)=>(n.server_.listen(r,s,i,(a,c)=>{const l=o(a,c);Tr(n.eventQueue_,r._path,l)}),[]),stopListening:(r,i)=>{n.server_.unlisten(r,i)}})}function SI(n){const t=n.infoData_.getNode(new Ue(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Bm(n){return aI({timestamp:SI(n)})}function Bp(n,e,t,r,i){n.dataUpdateCount++;const s=new Ue(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(r){const c=Bo(t,l=>_t(l));o=oI(n.serverSyncTree_,s,c,i)}else{const c=_t(t);o=sI(n.serverSyncTree_,s,c,i)}else if(r){const c=Bo(t,l=>_t(l));o=iI(n.serverSyncTree_,s,c)}else{const c=_t(t);o=ca(n.serverSyncTree_,s,c)}let a=s;o.length>0&&(a=Mu(n,s)),Tr(n.eventQueue_,a,o)}function kp(n,e){Ou(n,"connected",e),e===!1&&kI(n)}function TI(n,e){zt(e,(t,r)=>{Ou(n,t,r)})}function Ou(n,e,t){const r=new Ue("/.info/"+e),i=_t(t);n.infoData_.updateSnapshot(r,i);const s=ca(n.infoSyncTree_,r,i);Tr(n.eventQueue_,r,s)}function BI(n){return n.nextWriteId_++}function kI(n){km(n,"onDisconnectEvents");const e=Bm(n),t=Lo();lc(n.onDisconnect_,ke(),(i,s)=>{const o=uI(i,s,n.serverSyncTree_,e);im(t,i,o)});let r=[];lc(t,ke(),(i,s)=>{r=r.concat(ca(n.serverSyncTree_,i,s));const o=PI(n,i);Mu(n,o)}),n.onDisconnect_=Lo(),Tr(n.eventQueue_,ke(),r)}function FI(n){n.persistentConnection_&&n.persistentConnection_.interrupt(AI)}function km(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),pt(t,...e)}function Fm(n,e,t){return vm(n.serverSyncTree_,e,t)||we.EMPTY_NODE}function Lu(n,e=n.transactionQueueTree_){if(e||fa(n,e),di(e)){const t=Nm(n,e);Z(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&RI(n,Ms(e),t)}else Dm(e)&&ha(e,t=>{Lu(n,t)})}function RI(n,e,t){const r=t.map(l=>l.currentWriteId),i=Fm(n,e,r);let s=i;const o=i.hash();for(let l=0;l<t.length;l++){const u=t[l];Z(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=Ht(e,u.path);s=s.updateChild(f,u.currentOutputSnapshotRaw)}const a=s.val(!0),c=e;n.server_.put(c.toString(),a,l=>{km(n,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const f=[];for(let h=0;h<t.length;h++)t[h].status=2,u=u.concat($r(n.serverSyncTree_,t[h].currentWriteId)),t[h].onComplete&&f.push(()=>t[h].onComplete(null,!0,t[h].currentOutputSnapshotResolved)),t[h].unwatcher();fa(n,Pu(n.transactionQueueTree_,e)),Lu(n,n.transactionQueueTree_),Tr(n.eventQueue_,e,u);for(let h=0;h<f.length;h++)Os(f[h])}else{if(l==="datastale")for(let f=0;f<t.length;f++)t[f].status===3?t[f].status=4:t[f].status=0;else{Ot("transaction at "+c.toString()+" failed: "+l);for(let f=0;f<t.length;f++)t[f].status=4,t[f].abortReason=l}Mu(n,e)}},o)}function Mu(n,e){const t=Rm(n,e),r=Ms(t),i=Nm(n,t);return NI(n,i,r),r}function NI(n,e,t){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=Ht(t,c.path);let u=!1,f;if(Z(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,f=c.abortReason,i=i.concat($r(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=wI)u=!0,f="maxretry",i=i.concat($r(n.serverSyncTree_,c.currentWriteId,!0));else{const h=Fm(n,c.path,o);c.currentInputSnapshot=h;const d=e[a].update(h.val());if(d!==void 0){Tm("transaction failed: Data returned ",d,c.path);let p=_t(d);typeof d=="object"&&d!=null&&An(d,".priority")||(p=p.updatePriority(h.getPriority()));const m=c.currentWriteId,y=Bm(n),_=hI(p,h,y);c.currentOutputSnapshotRaw=p,c.currentOutputSnapshotResolved=_,c.currentWriteId=BI(n),o.splice(o.indexOf(m),1),i=i.concat(rI(n.serverSyncTree_,c.path,_,c.currentWriteId,c.applyLocally)),i=i.concat($r(n.serverSyncTree_,m,!0))}else u=!0,f="nodata",i=i.concat($r(n.serverSyncTree_,c.currentWriteId,!0))}Tr(n.eventQueue_,t,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}fa(n,n.transactionQueueTree_);for(let a=0;a<r.length;a++)Os(r[a]);Lu(n,n.transactionQueueTree_)}function Rm(n,e){let t,r=n.transactionQueueTree_;for(t=Ce(e);t!==null&&di(r)===void 0;)r=Pu(r,t),e=He(e),t=Ce(e);return r}function Nm(n,e){const t=[];return Pm(n,e,t),t.sort((r,i)=>r.order-i.order),t}function Pm(n,e,t){const r=di(e);if(r)for(let i=0;i<r.length;i++)t.push(r[i]);ha(e,i=>{Pm(n,i,t)})}function fa(n,e){const t=di(e);if(t){let r=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[r]=t[i],r++);t.length=r,wm(e,t.length>0?t:void 0)}ha(e,r=>{fa(n,r)})}function PI(n,e){const t=Ms(Rm(n,e)),r=Pu(n.transactionQueueTree_,e);return dI(r,i=>{xl(n,i)}),xl(n,r),Im(r,i=>{xl(n,i)}),t}function xl(n,e){const t=di(e);if(t){const r=[];let i=[],s=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(Z(s===o-1,"All SENT items should be at beginning of queue."),s=o,t[o].status=3,t[o].abortReason="set"):(Z(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat($r(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&r.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?wm(e,void 0):t.length=s+1,Tr(n.eventQueue_,Ms(e),i);for(let o=0;o<r.length;o++)Os(r[o])}}/**
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
 */function OI(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let i=t[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function LI(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ot(`Invalid query segment '${t}' in query '${n}'`)}return e}const Fp=function(n,e){const t=MI(n),r=t.namespace;t.domain==="firebase.com"&&bn(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&bn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||p3();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new $g(t.host,t.secure,r,i,e,"",r!==t.subdomain),path:new Ue(t.pathString)}},MI=function(n){let e="",t="",r="",i="",s="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let u=n.indexOf("/");u===-1&&(u=n.length);let f=n.indexOf("?");f===-1&&(f=n.length),e=n.substring(0,Math.min(u,f)),u<f&&(i=OI(n.substring(u,f)));const h=LI(n.substring(Math.min(n.length,f)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const d=e.slice(0,l);if(d.toLowerCase()==="localhost")t="localhost";else if(d.split(".").length<=2)t=d;else{const p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),t=e.substring(p+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:c,domain:t,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class $u{constructor(e,t,r,i){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=i}get key(){return ge(this._path)?null:Kg(this._path)}get ref(){return new pi(this._repo,this._path)}get _queryIdentifier(){const e=gp(this._queryParams),t=vu(e);return t==="{}"?"default":t}get _queryObject(){return gp(this._queryParams)}isEqual(e){if(e=mg(e),!(e instanceof $u))return!1;const t=this._repo===e._repo,r=Xg(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Q3(this._path)}}class pi extends $u{constructor(e,t){super(e,t,new wu,!1)}get parent(){const e=Qg(this._path);return e===null?null:new pi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}tI(pi);nI(pi);/**
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
 */const $I="FIREBASE_DATABASE_EMULATOR_HOST",xc={};let HI=!1;function UI(n,e,t,r){n.repoInfo_=new $g(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),r&&(n.authTokenProvider_=r)}function WI(n,e,t,r,i){let s=r||n.options.databaseURL;s===void 0&&(n.options.projectId||bn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),pt("Using default host for project ",n.options.projectId),s=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Fp(s,i),a=o.repoInfo,c;typeof process<"u"&&Zd&&(c=Zd[$I]),c?(s=`http://${c}?ns=${a.namespace}`,o=Fp(s,i),a=o.repoInfo):o.repoInfo.secure;const l=new A3(n.name,n.options,e);vI("Invalid Firebase Database URL",o),ge(o.path)||bn("Database URL must point to the root of a Firebase Database (not including a child path).");const u=qI(a,n,l,new b3(n.name,t));return new VI(u,n)}function zI(n,e){const t=xc[e];(!t||t[n.key]!==n)&&bn(`Database ${e}(${n.repoInfo_}) has already been deleted.`),FI(n),delete t[n.key]}function qI(n,e,t,r){let i=xc[e.name];i||(i={},xc[e.name]=i);let s=i[n.toURLString()];return s&&bn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new DI(n,HI,t,r),i[n.toURLString()]=s,s}class VI{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(II(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new pi(this._repo,ke())),this._rootInternal}_delete(){return this._rootInternal!==null&&(zI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&bn("Cannot call "+e+" on a deleted database.")}}function Om(n=mu(),e){const t=j6(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=Lw("database");r&&GI(t,...r)}return t}function GI(n,e,t,r={}){n=mg(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&bn("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&bn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new io(io.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Mw(r.mockUserToken,n.app.options.projectId);s=new io(o)}UI(i,e,t,s)}/**
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
 */function jI(n){l3(Q6),Fo(new _s("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return WI(r,i,s,t)},"PUBLIC").setMultipleInstances(!0)),jr(Jd,ep,n),jr(Jd,ep,"esm2017")}vn.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};vn.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};jI();let KI=["builds","fa-trackItems","fd-currentGameData","fd-endlessModesData","fd-playerStats"];const YI={apiKey:"AIzaSyDKnNr9NGleuqY_S5sWlkzj6NeVb-j7eu0",authDomain:"ff-site-user-data.firebaseapp.com",projectId:"ff-site-user-data",storageBucket:"ff-site-user-data.firebasestorage.app",messagingSenderId:"488410681248",appId:"1:488410681248:web:1982ba784b3061940cdec5",measurementId:"G-ZHZM7JVTXY"},QI={apiKey:"AIzaSyAHVFTyCrEeHuOY9POiWkpA2mI70X5P1jQ",authDomain:"fc-v3-8b3f9.firebaseapp.com",databaseURL:"https://fc-v3-8b3f9-default-rtdb.europe-west1.firebasedatabase.app",projectId:"fc-v3-8b3f9",storageBucket:"fc-v3-8b3f9.appspot.com",messagingSenderId:"31377888705",appId:"1:31377888705:web:3018d8fc0a07e867ec0b40"};gu(YI,"sud");gu(QI,"fc");Om(mu("sud"));Om(mu("fc"));let XI=()=>{for(let n of KI)if(localStorage.getItem(n))return!0};function ZI(n){let e,t;return{c(){e=P("hl"),t=te(n[0])},m(r,i){$(r,e,i),R(e,t)},p(r,[i]){i&1&&me(t,r[0])},i:le,o:le,d(r){r&&M(e)}}}function JI(n,e,t){let{startTime:r}=e;const i=C_();let s=Date.now(),o=s+r*1e3,a=r,c=setInterval(()=>{let l=Date.now();t(0,a=r-Math.floor((l-s)/1e3)),l>=o&&(i("end"),clearTimeout(c))},50);return n.$$set=l=>{"startTime"in l&&t(1,r=l.startTime)},[a,r]}class eS extends ht{constructor(e){super(),ut(this,e,JI,ZI,Ke,{startTime:1})}}function Rp(n){let e,t;return{c(){e=P("a"),t=te("Couldn't be redirected? Click here"),L(e,"href",Lm),L(e,"class","svelte-1gimb7y")},m(r,i){$(r,e,i),R(e,t)},p:le,d(r){r&&M(e)}}}function tS(n){let e,t,r,i,s,o,a,c,l,u,f,h,d,p,g,m;d=new eS({props:{startTime:10}}),d.$on("end",n[1]);let y=n[0]&&Rp();return{c(){e=P("span"),e.textContent="Data Sync Required",t=q(),r=P("hr"),i=q(),s=P("div"),o=P("span"),o.textContent=`It looks like you have data from previous sessions waiting to be synced\r
        to an account.`,a=q(),c=P("span"),c.textContent="You will be redirected to the data synchronization process shortly.",l=q(),u=P("span"),f=P("i"),f.textContent="Attempting redirect in",h=q(),Tt(d.$$.fragment),p=te("..."),g=q(),y&&y.c(),L(e,"class","title"),L(s,"class","contents flex fd-col rg-1 svelte-1gimb7y")},m(_,x){$(_,e,x),$(_,t,x),$(_,r,x),$(_,i,x),$(_,s,x),R(s,o),R(s,a),R(s,c),R(s,l),R(s,u),R(u,f),R(u,h),Et(d,u,null),R(u,p),R(s,g),y&&y.m(s,null),m=!0},p(_,[x]){_[0]?y?y.p(_,x):(y=Rp(),y.c(),y.m(s,null)):y&&(y.d(1),y=null)},i(_){m||(ne(d.$$.fragment,_),m=!0)},o(_){oe(d.$$.fragment,_),m=!1},d(_){_&&(M(e),M(t),M(r),M(i),M(s)),bt(d),y&&y.d()}}}let Lm="https://xt8ss.github.io/fantastic-hub/?dataSync=true";function nS(n,e,t){let r=!1;return[r,()=>{location.href=Lm,setTimeout(()=>t(0,r=!0),1e3)}]}class rS extends ht{constructor(e){super(),ut(this,e,nS,tS,Ke,{})}}function Np(n){let e;return{c(){e=P("span"),e.textContent="Currently...",L(e,"class","title font-rf")},m(t,r){$(t,e,r)},d(t){t&&M(e)}}}function iS(n){let e,t,r,i,s=n[0]?`${Or.day} DAY`:`${Or.night} NIGHT`,o,a=`var(--${n[0]?"day-blue":"night-purple"})`,c,l,u,f=(n[1]===1?"<1":n[1])+"",h,d,p=n[1]>1?"s":"",g,m,y,_,x=!n[3]&&Np();return{c(){e=P("div"),x&&x.c(),t=q(),r=P("span"),i=new zo(!1),o=te("TIME"),c=q(),l=P("i"),u=te("— "),h=te(f),d=te(`\r
        minute`),g=te(p),m=te(" left —"),i.a=o,L(r,"class","timeOfDay flex fjc-center font-rf svelte-1tqwks7"),Be(r,"ff-item",!n[3]),Ge(r,"color",a),Be(l,"smaller-fs",n[3]),L(e,"class","currentTime ff-bg flex fd-col border-tp br-1 bs ta-center svelte-1tqwks7"),Be(e,"popup",n[3]),Be(e,"active",n[4]),Be(e,"rg-1",!n[3])},m(v,C){$(v,e,C),x&&x.m(e,null),R(e,t),R(e,r),i.m(s,r),R(r,o),R(e,c),R(e,l),R(l,u),R(l,h),R(l,d),R(l,g),R(l,m),y||(_=zm(n[2].call(null,e)),y=!0)},p(v,[C]){v[3]?x&&(x.d(1),x=null):x||(x=Np(),x.c(),x.m(e,t)),C&1&&s!==(s=v[0]?`${Or.day} DAY`:`${Or.night} NIGHT`)&&i.p(s),C&8&&Be(r,"ff-item",!v[3]),C&1&&a!==(a=`var(--${v[0]?"day-blue":"night-purple"})`)&&Ge(r,"color",a),C&2&&f!==(f=(v[1]===1?"<1":v[1])+"")&&me(h,f),C&2&&p!==(p=v[1]>1?"s":"")&&me(g,p),C&8&&Be(l,"smaller-fs",v[3]),C&8&&Be(e,"popup",v[3]),C&16&&Be(e,"active",v[4]),C&8&&Be(e,"rg-1",!v[3])},i:le,o:le,d(v){v&&M(e),x&&x.d(),y=!1,_()}}}function sS(n,e,t){let{isDaytime:r,untilNextTimeOfDay:i,checkIfInViewport:s=c=>{},isPopup:o=!1,popupActive:a=!1}=e;return n.$$set=c=>{"isDaytime"in c&&t(0,r=c.isDaytime),"untilNextTimeOfDay"in c&&t(1,i=c.untilNextTimeOfDay),"checkIfInViewport"in c&&t(2,s=c.checkIfInViewport),"isPopup"in c&&t(3,o=c.isPopup),"popupActive"in c&&t(4,a=c.popupActive)},[r,i,s,o,a]}class Hu extends ht{constructor(e){super(),ut(this,e,sS,iS,Ke,{isDaytime:0,untilNextTimeOfDay:1,checkIfInViewport:2,isPopup:3,popupActive:4})}}function Pp(n,e,t){const r=n.slice();return r[6]=e[t][0],r[7]=e[t][1],r[9]=t,r}function Op(n){let e,t;const r=[n[0],{checkIfInViewport:n[1]}];let i={};for(let s=0;s<r.length;s+=1)i=Un(i,r[s]);return e=new Hu({props:i}),{c(){Tt(e.$$.fragment)},m(s,o){Et(e,s,o),t=!0},p(s,o){const a=o&3?Wn(r,[o&1&&ns(s[0]),o&2&&{checkIfInViewport:s[1]}]):{};e.$set(a)},i(s){t||(ne(e.$$.fragment,s),t=!0)},o(s){oe(e.$$.fragment,s),t=!1},d(s){bt(e,s)}}}function Lp(n){let e,t,r,i=n[6]+"",s,o,a,c=n[7]+"",l,u,f=n[9]===1&&!n[3]&&Op(n);return{c(){f&&f.c(),e=q(),t=P("div"),r=P("span"),s=te(i),o=q(),a=P("span"),l=te(c),L(r,"class","title font-rf"),L(a,"class","time ff-item svelte-ipkgkz"),L(t,"class","ff-bg flex fd-col rg-1 border-tp br-1 bs ta-center svelte-ipkgkz")},m(h,d){f&&f.m(h,d),$(h,e,d),$(h,t,d),R(t,r),R(r,s),R(t,o),R(t,a),R(a,l),u=!0},p(h,d){h[9]===1&&!h[3]?f?(f.p(h,d),d&8&&ne(f,1)):(f=Op(h),f.c(),ne(f,1),f.m(e.parentNode,e)):f&&(it(),oe(f,1,1,()=>{f=null}),st()),(!u||d&4)&&i!==(i=h[6]+"")&&me(s,i),(!u||d&4)&&c!==(c=h[7]+"")&&me(l,c)},i(h){u||(ne(f),u=!0)},o(h){oe(f),u=!1},d(h){h&&(M(e),M(t)),f&&f.d(h)}}}function Mp(n){let e,t;const r=[n[0],{checkIfInViewport:n[1]}];let i={};for(let s=0;s<r.length;s+=1)i=Un(i,r[s]);return e=new Hu({props:i}),{c(){Tt(e.$$.fragment)},m(s,o){Et(e,s,o),t=!0},p(s,o){const a=o&3?Wn(r,[o&1&&ns(s[0]),o&2&&{checkIfInViewport:s[1]}]):{};e.$set(a)},i(s){t||(ne(e.$$.fragment,s),t=!0)},o(s){oe(e.$$.fragment,s),t=!1},d(s){bt(e,s)}}}function oS(n){let e,t,r,i=Oe(Object.entries(n[2])),s=[];for(let c=0;c<i.length;c+=1)s[c]=Lp(Pp(n,i,c));const o=c=>oe(s[c],1,1,()=>{s[c]=null});let a=n[3]&&Mp(n);return{c(){e=P("div");for(let c=0;c<s.length;c+=1)s[c].c();t=q(),a&&a.c(),L(e,"class","clocks flex fw fjc-center fai-center svelte-ipkgkz")},m(c,l){$(c,e,l);for(let u=0;u<s.length;u+=1)s[u]&&s[u].m(e,null);R(e,t),a&&a.m(e,null),r=!0},p(c,[l]){if(l&15){i=Oe(Object.entries(c[2]));let u;for(u=0;u<i.length;u+=1){const f=Pp(c,i,u);s[u]?(s[u].p(f,l),ne(s[u],1)):(s[u]=Lp(f),s[u].c(),ne(s[u],1),s[u].m(e,t))}for(it(),u=i.length;u<s.length;u+=1)o(u);st()}c[3]?a?(a.p(c,l),l&8&&ne(a,1)):(a=Mp(c),a.c(),ne(a,1),a.m(e,null)):a&&(it(),oe(a,1,1,()=>{a=null}),st())},i(c){if(!r){for(let l=0;l<i.length;l+=1)ne(s[l]);ne(a),r=!0}},o(c){s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)oe(s[l]);oe(a),r=!1},d(c){c&&M(e),Mt(s,c),a&&a.d()}}}let aS=/:\d+(?= |$)/;function lS(n,e,t){let r,i,s,o;Se(n,no,l=>t(4,i=l)),Se(n,Xl,l=>t(5,s=l)),Se(n,Yl,l=>t(3,o=l));let{ffDayInfo:a,checkIfInViewport:c}=e;return n.$$set=l=>{"ffDayInfo"in l&&t(0,a=l.ffDayInfo),"checkIfInViewport"in l&&t(1,c=l.checkIfInViewport)},n.$$.update=()=>{n.$$.dirty&48&&t(2,r={"Local Time":s.toLocaleTimeString(void 0,{hour12:!i.altHourFormat}),"Frontier Time":new Date(new Date((s.getUTCMinutes()%20*60+s.getUTCSeconds())/(60*20)*(60*60*24)*1e3).toUTCString()).toLocaleTimeString(void 0,{timeZone:"UTC",hour12:!i.altHourFormat}).replace(aS,"")})},[a,c,r,o,i,s]}class cS extends ht{constructor(e){super(),ut(this,e,lS,oS,Ke,{ffDayInfo:0,checkIfInViewport:1})}}function $p(n){let e,t,r,i,s,o,a,c,l,u,f,h=xt(n[4])?"a":"span",d,p=n[3]&&Hp(n),g=(xt(n[4])?"a":"span")&&gl(n);function m(x,v){return x[1]?hS:uS}let y=m(n),_=y(n);return{c(){e=P("div"),t=P("a"),r=P("img"),o=q(),a=P("iconify-icon"),c=q(),p&&p.c(),u=q(),f=P("div"),g&&g.c(),d=q(),_.c(),ar(r.src,i=n[1]?n[5].image:sf+n[2].image)||L(r,"src",i),L(r,"alt",s=n[1]?n[5].title:n[0]),L(r,"class","br-1 svelte-3jddhj"),De(a,"icon","tabler:external-link"),De(a,"class","flex fai-center fjc-center pos-abs br-1 svelte-3jddhj"),L(t,"href",l=n[1]?n[5].link:rf+(n[2].article?n[2].article:n[0])),L(t,"target","_blank"),L(t,"class","participantImage pos-rel svelte-3jddhj"),L(f,"class","participantInfo flex fd-col svelte-3jddhj"),L(e,"class","eventParticipant ff-item flex cg-1 rg-1 br-1 svelte-3jddhj"),Be(e,"customEvent",n[1]),Be(e,"fd-col",n[1])},m(x,v){$(x,e,v),R(e,t),R(t,r),R(t,o),R(t,a),R(t,c),p&&p.m(t,null),R(e,u),R(e,f),g&&g.m(f,null),R(f,d),_.m(f,null)},p(x,v){v&38&&!ar(r.src,i=x[1]?x[5].image:sf+x[2].image)&&L(r,"src",i),v&35&&s!==(s=x[1]?x[5].title:x[0])&&L(r,"alt",s),x[3]?p?p.p(x,v):(p=Hp(x),p.c(),p.m(t,null)):p&&(p.d(1),p=null),v&39&&l!==(l=x[1]?x[5].link:rf+(x[2].article?x[2].article:x[0]))&&L(t,"href",l),xt(x[4]),h?Ke(h,xt(x[4])?"a":"span")?(g.d(1),g=gl(x),h=xt(x[4])?"a":"span",g.c(),g.m(f,d)):g.p(x,v):(g=gl(x),h=xt(x[4])?"a":"span",g.c(),g.m(f,d)),y===(y=m(x))&&_?_.p(x,v):(_.d(1),_=y(x),_&&(_.c(),_.m(f,null))),v&2&&Be(e,"customEvent",x[1]),v&2&&Be(e,"fd-col",x[1])},d(x){x&&M(e),p&&p.d(),g&&g.d(x),_.d()}}}function Hp(n){let e,t;return{c(){e=P("span"),t=te(n[0]),L(e,"class","tooltip"),L(e,"id","top")},m(r,i){$(r,e,i),R(e,t)},p(r,i){i&1&&me(t,r[0])},d(r){r&&M(e)}}}function gl(n){let e,t=(n[1]?n[5].title:n[3]?n[2].shop:n[0])+"",r;return{c(){e=P(xt(n[4])?"a":"span"),r=te(t),g_(xt(n[4])?"a":"span")(e,{href:"#notes",class:"ff-item title font-rf svelte-3jddhj",id:"title"}),Ge(e,"color","var(--light)")},m(i,s){$(i,e,s),R(e,r)},p(i,s){s&47&&t!==(t=(i[1]?i[5].title:i[3]?i[2].shop:i[0])+"")&&me(r,t)},d(i){i&&M(e)}}}function uS(n){let e,t,r=(n[3]?"Shop":n[2].role)+"",i,s,o,a=xt(n[2].realm)?"a":"i",c,l=(xt(n[2].realm)?"a":"i")&&ml(n);return{c(){e=P("i"),t=te("— "),i=te(r),s=te(" —"),o=q(),l&&l.c(),c=tn(),L(e,"class","svelte-3jddhj")},m(u,f){$(u,e,f),R(e,t),R(e,i),R(e,s),$(u,o,f),l&&l.m(u,f),$(u,c,f)},p(u,f){f&12&&r!==(r=(u[3]?"Shop":u[2].role)+"")&&me(i,r),xt(u[2].realm),a?Ke(a,xt(u[2].realm)?"a":"i")?(l.d(1),l=ml(u),a=xt(u[2].realm)?"a":"i",l.c(),l.m(c.parentNode,c)):l.p(u,f):(l=ml(u),a=xt(u[2].realm)?"a":"i",l.c(),l.m(c.parentNode,c))},d(u){u&&(M(e),M(o),M(c)),l&&l.d(u)}}}function hS(n){let e,t=n[5].text+"",r,i,s,o,a=n[5].flavor+"",c,l;return{c(){e=P("i"),r=te(t),i=q(),s=P("span"),o=te("— "),c=te(a),l=te(" —"),L(e,"class","smaller-fs svelte-3jddhj"),Ge(e,"padding","1.5rem"),L(s,"class","svelte-3jddhj"),Ge(s,"color","var(--dark)")},m(u,f){$(u,e,f),R(e,r),$(u,i,f),$(u,s,f),R(s,o),R(s,c),R(s,l)},p(u,f){f&32&&t!==(t=u[5].text+"")&&me(r,t),f&32&&a!==(a=u[5].flavor+"")&&me(c,a)},d(u){u&&(M(e),M(i),M(s))}}}function ml(n){let e,t=n[2].realm+"",r;return{c(){e=P(xt(n[2].realm)?"a":"i"),r=te(t),g_(xt(n[2].realm)?"a":"i")(e,{href:"#notes",class:"title svelte-3jddhj",id:"realm"})},m(i,s){$(i,e,s),R(e,r)},p(i,s){s&4&&t!==(t=i[2].realm+"")&&me(r,t)},d(i){i&&M(e)}}}function fS(n){let e=Qt(n[2]),t,r=e&&$p(n);return{c(){r&&r.c(),t=tn()},m(i,s){r&&r.m(i,s),$(i,t,s)},p(i,[s]){s&4&&(e=Qt(i[2])),e?r?r.p(i,s):(r=$p(i),r.c(),r.m(t.parentNode,t)):r&&(r.d(1),r=null)},i:le,o:le,d(i){i&&M(t),r&&r.d(i)}}}function xt(n){return n.endsWith("*")}function dS(n,e,t){let r,i,s,o,{eventType:a,participant:c="Green Golem",isCustomEvent:l=!1}=e,u={"???":{title:"Fantastic Frontier Forever",text:`"I have traveled for many days... The sky was higher than I thought. I've seen creatures both great and small, and a world unlike any I have seen before. Although there is still much ahead of me, I feel as though my journey's end is drawing near. Almost there... Almost there..."`,flavor:"Almost there.",image:"https://pbs.twimg.com/media/E1NKMC4XEAQ81SH?format=jpg&name=large",link:"https://www.roblox.com/games/510411669/Fantastic-Frontier"}};return n.$$set=f=>{"eventType"in f&&t(6,a=f.eventType),"participant"in f&&t(0,c=f.participant),"isCustomEvent"in f&&t(1,l=f.isCustomEvent)},n.$$.update=()=>{n.$$.dirty&66&&t(5,r=l?u[a]:null),n.$$.dirty&1&&t(2,i=Lb[c]),n.$$.dirty&64&&t(3,s=a==="Shop Restocks"),n.$$.dirty&13&&t(4,o=s?i.shop:c)},[c,l,i,s,o,r,a]}class Mm extends ht{constructor(e){super(),ut(this,e,dS,fS,Ke,{eventType:6,participant:0,isCustomEvent:1})}}function Up(n,e,t){const r=n.slice();return r[8]=e[t][0],r[9]=e[t][1],r}function Wp(n,e,t){const r=n.slice();r[12]=e[t][0],r[13]=e[t][1];const i=Qt(r[13])>1;r[14]=i;const s=r[12]==="???";return r[15]=s,r}function zp(n,e,t){const r=n.slice();return r[18]=e[t][0],r[19]=e[t][1],r}function qp(n,e,t){const r=n.slice();return r[22]=e[t],r}function Vp(n){let e,t,r;return{c(){e=P("iconify-icon"),De(e,"icon","tabler:refresh"),De(e,"flip","horizontal"),De(e,"class","refreshAnimation pos-abs svelte-eal0js")},m(i,s){$(i,e,s),r=!0},i(i){r||(i&&St(()=>{r&&(t||(t=$t(e,en,{duration:150},!0)),t.run(1))}),r=!0)},o(i){i&&(t||(t=$t(e,en,{duration:150},!1)),t.run(0)),r=!1},d(i){i&&M(e),i&&t&&t.end()}}}function Gp(n){let e,t,r=Oe(Object.entries(n[13])),i=[];for(let o=0;o<r.length;o+=1)i[o]=Qp(zp(n,r,o));const s=o=>oe(i[o],1,1,()=>{i[o]=null});return{c(){e=P("div");for(let o=0;o<i.length;o+=1)i[o].c();L(e,"class","flex fd-col")},m(o,a){$(o,e,a);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(e,null);t=!0},p(o,a){if(a&14){r=Oe(Object.entries(o[13]));let c;for(c=0;c<r.length;c+=1){const l=zp(o,r,c);i[c]?(i[c].p(l,a),ne(i[c],1)):(i[c]=Qp(l),i[c].c(),ne(i[c],1),i[c].m(e,null))}for(it(),c=r.length;c<i.length;c+=1)s(c);st()}},i(o){if(!t){for(let a=0;a<r.length;a+=1)ne(i[a]);t=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)oe(i[a]);t=!1},d(o){o&&M(e),Mt(i,o)}}}function pS(n){let e,t,r=`${Or[n[18]]} ${n[18].toUpperCase()}TIME`,i,s,o,a=`var(--${n[18]==="day"?"day-blue":"night-purple"})`,c,l;function u(...f){return n[7](n[12],n[18],...f)}return{c(){e=P("button"),t=new zo(!1),i=q(),s=P("iconify-icon"),t.a=i,De(s,"icon",o="ep:arrow-"+(n[1][n[12]][n[18]]?"down":"left")+"-bold"),De(s,"class","collapseIcon pos-abs svelte-eal0js"),L(e,"class","flex fjc-center fai-center pos-rel font-rf light-hover svelte-eal0js"),Ge(e,"color",a)},m(f,h){$(f,e,h),t.m(r,e),R(e,i),R(e,s),c||(l=he(e,"click",u),c=!0)},p(f,h){n=f,h&2&&o!==(o="ep:arrow-"+(n[1][n[12]][n[18]]?"down":"left")+"-bold")&&De(s,"icon",o)},d(f){f&&M(e),c=!1,l()}}}function jp(n){let e,t,r,i,s;const o=[xS,_S],a=[];function c(u,f){return u[15]?0:1}t=c(n),r=a[t]=o[t](n);let l=n[2][n[18]]&&Yp();return{c(){e=P("div"),r.c(),i=q(),l&&l.c(),L(e,"class","eventParticipantsGrid flex fw fjc-center pos-rel svelte-eal0js")},m(u,f){$(u,e,f),a[t].m(e,null),R(e,i),l&&l.m(e,null),s=!0},p(u,f){r.p(u,f),u[2][u[18]]?l?f&4&&ne(l,1):(l=Yp(),l.c(),ne(l,1),l.m(e,null)):l&&(it(),oe(l,1,1,()=>{l=null}),st())},i(u){s||(ne(r),ne(l),s=!0)},o(u){oe(r),oe(l),s=!1},d(u){u&&M(e),a[t].d(),l&&l.d()}}}function _S(n){let e,t,r=Oe(n[19]),i=[];for(let o=0;o<r.length;o+=1)i[o]=Kp(qp(n,r,o));const s=o=>oe(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=tn()},m(o,a){for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(o,a);$(o,e,a),t=!0},p(o,a){if(a&8){r=Oe(o[19]);let c;for(c=0;c<r.length;c+=1){const l=qp(o,r,c);i[c]?(i[c].p(l,a),ne(i[c],1)):(i[c]=Kp(l),i[c].c(),ne(i[c],1),i[c].m(e.parentNode,e))}for(it(),c=r.length;c<i.length;c+=1)s(c);st()}},i(o){if(!t){for(let a=0;a<r.length;a+=1)ne(i[a]);t=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)oe(i[a]);t=!1},d(o){o&&M(e),Mt(i,o)}}}function xS(n){let e,t;return e=new Mm({props:{eventType:n[12],isCustomEvent:!0}}),{c(){Tt(e.$$.fragment)},m(r,i){Et(e,r,i),t=!0},p:le,i(r){t||(ne(e.$$.fragment,r),t=!0)},o(r){oe(e.$$.fragment,r),t=!1},d(r){bt(e,r)}}}function Kp(n){let e,t;return e=new Mm({props:{eventType:n[12],participant:n[22]}}),{c(){Tt(e.$$.fragment)},m(r,i){Et(e,r,i),t=!0},p:le,i(r){t||(ne(e.$$.fragment,r),t=!0)},o(r){oe(e.$$.fragment,r),t=!1},d(r){bt(e,r)}}}function Yp(n){let e,t,r;return{c(){e=P("div"),e.innerHTML='<iconify-icon icon="tabler:refresh" flip="horizontal" class="refreshAnimation svelte-eal0js"></iconify-icon>',L(e,"class","refreshAlert flex fjc-center fai-center pos-abs svelte-eal0js")},m(i,s){$(i,e,s),r=!0},i(i){r||(i&&St(()=>{r&&(t||(t=$t(e,en,{duration:150},!0)),t.run(1))}),r=!0)},o(i){i&&(t||(t=$t(e,en,{duration:150},!1)),t.run(0)),r=!1},d(i){i&&M(e),i&&t&&t.end()}}}function Qp(n){let e,t,r,i,s=n[14]&&pS(n),o=n[1][n[12]][n[18]]!==!1&&jp(n);return{c(){e=P("div"),s&&s.c(),t=q(),o&&o.c(),r=q(),L(e,"class","eventTypeTime flex fd-col svelte-eal0js")},m(a,c){$(a,e,c),s&&s.m(e,null),R(e,t),o&&o.m(e,null),R(e,r),i=!0},p(a,c){a[14]&&s.p(a,c),a[1][a[12]][a[18]]!==!1?o?(o.p(a,c),c&2&&ne(o,1)):(o=jp(a),o.c(),ne(o,1),o.m(e,r)):o&&(it(),oe(o,1,1,()=>{o=null}),st())},i(a){i||(ne(o),i=!0)},o(a){oe(o),i=!1},d(a){a&&M(e),s&&s.d(),o&&o.d()}}}function Xp(n){let e,t,r=!n[0][n[12]]&&Object.keys(n[13]).includes(Object.keys(n[2]).filter(n[5])[0]),i,s,o=(!n[14]&&!n[15]?Or[Object.keys(n[13])[0]]:"")+"",a,c=n[12]+"",l,u,f,h,d,p,g,m,y,_=r&&Vp();function x(...C){return n[6](n[12],...C)}let v=n[0][n[12]]&&Gp(n);return{c(){e=P("div"),t=P("button"),_&&_.c(),i=q(),s=new zo(!1),a=q(),l=te(c),u=q(),f=P("iconify-icon"),d=q(),v&&v.c(),p=q(),s.a=a,De(f,"icon",h="ep:arrow-"+(n[0][n[12]]?"down":"left")+"-bold"),De(f,"class","collapseIcon pos-abs svelte-eal0js"),L(t,"class","title flex fjc-center fai-center pos-rel bs font-rf svelte-eal0js"),L(e,"class","eventType border-tp br-1 svelte-eal0js")},m(C,b){$(C,e,b),R(e,t),_&&_.m(t,null),R(t,i),s.m(o,t),R(t,a),R(t,l),R(t,u),R(t,f),R(e,d),v&&v.m(e,null),R(e,p),g=!0,m||(y=he(t,"click",x),m=!0)},p(C,b){n=C,b&5&&(r=!n[0][n[12]]&&Object.keys(n[13]).includes(Object.keys(n[2]).filter(n[5])[0])),r?_?b&5&&ne(_,1):(_=Vp(),_.c(),ne(_,1),_.m(t,i)):_&&(it(),oe(_,1,1,()=>{_=null}),st()),(!g||b&1&&h!==(h="ep:arrow-"+(n[0][n[12]]?"down":"left")+"-bold"))&&De(f,"icon",h),n[0][n[12]]?v?(v.p(n,b),b&1&&ne(v,1)):(v=Gp(n),v.c(),ne(v,1),v.m(e,p)):v&&(it(),oe(v,1,1,()=>{v=null}),st())},i(C){g||(ne(_),ne(v),g=!0)},o(C){oe(_),oe(v),g=!1},d(C){C&&M(e),_&&_.d(),v&&v.d(),m=!1,y()}}}function Zp(n){let e,t,r,i,s=n[9]+"",o;return{c(){e=P("span"),t=te("* "),r=P("b"),r.textContent=`${n[8]}`,i=te(": "),o=te(s)},m(a,c){$(a,e,c),R(e,t),R(e,r),R(e,i),R(e,o)},p:le,d(a){a&&M(e)}}}function gS(n){let e,t,r,i,s,o,a,c,l,u=Oe(Object.entries(n[3])),f=[];for(let g=0;g<u.length;g+=1)f[g]=Xp(Wp(n,u,g));const h=g=>oe(f[g],1,1,()=>{f[g]=null});let d=Oe(Object.entries(n[4])),p=[];for(let g=0;g<d.length;g+=1)p[g]=Zp(Up(n,d,g));return{c(){e=P("div"),t=P("span"),t.textContent="Events",r=q(),i=P("div");for(let g=0;g<f.length;g+=1)f[g].c();s=q(),o=P("hl"),o.textContent="Notes",a=q(),c=P("div");for(let g=0;g<p.length;g+=1)p[g].c();L(t,"class","title ff-item br-1 font-rf svelte-eal0js"),L(i,"class","flex fd-col rg-3 fjc-center"),L(o,"class","font-rf svelte-eal0js"),L(o,"id","notes"),L(c,"class","notes flex fd-col rg-3 svelte-eal0js"),L(e,"class","events ff-bg flex fd-col rg-3 border-tp br-1 bs ta-center svelte-eal0js")},m(g,m){$(g,e,m),R(e,t),R(e,r),R(e,i);for(let y=0;y<f.length;y+=1)f[y]&&f[y].m(i,null);R(e,s),R(e,o),R(e,a),R(e,c);for(let y=0;y<p.length;y+=1)p[y]&&p[y].m(c,null);l=!0},p(g,[m]){if(m&15){u=Oe(Object.entries(g[3]));let y;for(y=0;y<u.length;y+=1){const _=Wp(g,u,y);f[y]?(f[y].p(_,m),ne(f[y],1)):(f[y]=Xp(_),f[y].c(),ne(f[y],1),f[y].m(i,null))}for(it(),y=u.length;y<f.length;y+=1)h(y);st()}if(m&16){d=Oe(Object.entries(g[4]));let y;for(y=0;y<d.length;y+=1){const _=Up(g,d,y);p[y]?p[y].p(_,m):(p[y]=Zp(_),p[y].c(),p[y].m(c,null))}for(;y<p.length;y+=1)p[y].d(1);p.length=d.length}},i(g){if(!l){for(let m=0;m<u.length;m+=1)ne(f[m]);l=!0}},o(g){f=f.filter(Boolean);for(let m=0;m<f.length;m+=1)oe(f[m]);l=!1},d(g){g&&M(e),Mt(f,g),Mt(p,g)}}}function mS(n,e,t){let r;Se(n,ro,f=>t(2,r=f));let i={"Shop Restocks":{day:["Arbewhy","Awoken Croc Carl","Benny Oreman","Clothing Seller","Construct","Frog","Gnome Wizard Master","Green Golem","Gunner Gary","Knight Antonius","Looney Lenny the Hedgeknight","Luhr","MANAGER SUPREME","No-Legs","Ollie Ozzwald","Otherworldly Weaponsmith","Reus the Smith","Rising Waters","The Great Eyeman"],night:["Linkman the Junkman","Mr. Sims","Stick","Strangeman","Vhitmire"]},"Location Changes":{night:["Construct","Green Golem","Linkman the Junkman","Stick","Strangeman","Vhitmire","Rabbit Hole","Toaster Josh","Gargoyle","Slayer","Greedy Wizard","Kind Wizard"]},"Monster Spawns":{night:["Parasite"]},"???":{placeholder:[]}},s={"Shop Restocks":!0,"Location Changes":!0,"Monster Spawns":!0,"???":!1},o={"Shop Restocks":{day:!0,night:!0},"Location Changes":{},"Monster Spawns":{},"???":{}};return[s,o,r,i,{"Awoken Croc Carl's Delicacies":"Carl's stock itself doesn't change; only his prices.","Greedy Wizard & Kind Wizard":"The wizards only have 2 locations each, as they always swap with each other's locations.","Green Golem":"Green Golem has 1 possible location based in the Frontier, in Topple Hill's market.",Slayer:"Slayer only has 2 locations; either inside or outside his designated building in Topple Town's shopping district.",Parasite:"Parasite spawns inside the Rabbit Hole area."},f=>r[f],(f,h)=>{wt(h),t(0,s[f]=!s[f],s)},(f,h,d)=>{wt(d),t(1,o[f][h]=!o[f][h],o)}]}class vS extends ht{constructor(e){super(),ut(this,e,mS,gS,Ke,{})}}const{document:Xn,window:nr}=qm;function Jp(n,e,t){const r=n.slice();return r[63]=e[t],r}function e_(n,e,t){const r=n.slice();return r[66]=e[t],r}function t_(n,e,t){const r=n.slice();return r[63]=e[t],r[69]=e,r[70]=t,r}function n_(n,e,t){const r=n.slice();return r[66]=e[t],r}function r_(n){let e;return{c(){e=P("link"),L(e,"rel","preload"),L(e,"as","image"),L(e,"href",n[66])},m(t,r){$(t,e,r)},p:le,d(t){t&&M(e)}}}function i_(n){let e;return{c(){e=P("style"),e.textContent=`body > :not(.promptCont) {
                pointer-events: none;
            }
        `},m(t,r){$(t,e,r)},d(t){t&&M(e)}}}function s_(n){let e;return{c(){e=P("style"),e.innerHTML=""},m(t,r){$(t,e,r)},d(t){t&&M(e)}}}function o_(n){let e,t,r,i=n[63];const s=()=>n[33](e,i),o=()=>n[33](null,i);return{c(){e=P("audio"),ar(e.src,t="audios/"+n[63]+".mp3")||L(e,"src",t),e.muted=r=n[16].muted},m(a,c){$(a,e,c),s()},p(a,c){n=a,c[0]&65536&&r!==(r=n[16].muted)&&(e.muted=r),i!==n[63]&&(o(),i=n[63],s())},d(a){a&&M(e),o()}}}function a_(n){let e,t;return{c(){e=P("img"),ar(e.src,t=n[66])||L(e,"src",t),L(e,"alt",""),L(e,"class","background"),Be(e,"active",n[21].indexOf(n[66])==n[10])},m(r,i){$(r,e,i)},p(r,i){i[0]&2098176&&Be(e,"active",r[21].indexOf(r[66])==r[10])},d(r){r&&M(e)}}}function l_(n){let e,t,r=Math.floor(n[18][n[2]]*100)+"",i,s,o,a;return{c(){e=P("span"),t=te("Zoom: "),i=te(r),s=P("b"),s.textContent="%",L(e,"class","info"),L(e,"id","zoomLevel")},m(c,l){$(c,e,l),R(e,t),R(e,i),R(e,s),a=!0},p(c,l){(!a||l[0]&4)&&r!==(r=Math.floor(c[18][c[2]]*100)+"")&&me(i,r)},i(c){a||(c&&St(()=>{a&&(o||(o=$t(e,en,{duration:150},!0)),o.run(1))}),a=!0)},o(c){c&&(o||(o=$t(e,en,{duration:150},!1)),o.run(0)),a=!1},d(c){c&&M(e),c&&o&&o.end()}}}function c_(n){let e,t;return e=new GA({props:{version:gc,verifyAndSync:n[17]}}),{c(){Tt(e.$$.fragment)},m(r,i){Et(e,r,i),t=!0},p:le,i(r){t||(ne(e.$$.fragment,r),t=!0)},o(r){oe(e.$$.fragment,r),t=!1},d(r){bt(e,r)}}}function u_(n){let e,t;return{c(){e=P("img"),ar(e.src,t="timePopups/"+n[63]+".png")||L(e,"src",t),L(e,"alt",n[63]),L(e,"class","timePopup svelte-4ctur1"),Be(e,"active",n[63]===n[11])},m(r,i){$(r,e,i)},p(r,i){i[0]&4196352&&Be(e,"active",r[63]===r[11])},d(r){r&&M(e)}}}function yS(n){let e,t,r,i,s,o,a,c=n[16].muted?"Muted":"Unmuted",l,u,f,h,d,p,g,m,y,_,x,v,C=(n[16].altHourFormat?24:12)+"",b,A,w,T,E,D,B,S,O,U,H;return D=new cS({props:{ffDayInfo:n[13],checkIfInViewport:n[23]}}),S=new vS({}),{c(){e=P("div"),t=P("div"),r=P("button"),i=P("iconify-icon"),o=q(),a=P("span"),l=te(c),u=q(),f=P("img"),d=q(),p=P("div"),g=P("button"),m=P("iconify-icon"),_=q(),x=P("span"),v=P("nobr"),b=te(C),A=te("-hour"),w=te(" Format"),T=q(),E=P("div"),Tt(D.$$.fragment),B=q(),Tt(S.$$.fragment),De(i,"icon",s="f7:speaker-"+(n[16].muted?"slash":"2")+"-fill"),L(a,"class","tooltip"),L(a,"id","left"),L(r,"class","flex pos-rel no-bg light-hover svelte-4ctur1"),L(t,"class","headerBtnWrapper ff-bg flex pos-rel border-tp br-1 bs svelte-4ctur1"),ar(f.src,h="misc/logo.svg")||L(f,"src",h),L(f,"alt","Frontier Clock"),L(f,"id","logo"),L(f,"class","svelte-4ctur1"),De(m,"icon",y="tabler:clock-"+(n[16].altHourFormat?24:12)),L(x,"class","tooltip"),L(x,"id","right"),L(g,"class","flex pos-rel no-bg light-hover svelte-4ctur1"),L(p,"class","headerBtnWrapper ff-bg flex pos-rel border-tp br-1 bs svelte-4ctur1"),L(e,"class","header flex fai-center svelte-4ctur1"),L(E,"class","generalTimes flex fd-col fai-center svelte-4ctur1")},m(z,j){$(z,e,j),R(e,t),R(t,r),R(r,i),R(r,o),R(r,a),R(a,l),R(e,u),R(e,f),R(e,d),R(e,p),R(p,g),R(g,m),R(g,_),R(g,x),R(x,v),R(v,b),R(v,A),R(x,w),$(z,T,j),$(z,E,j),Et(D,E,null),$(z,B,j),Et(S,z,j),O=!0,U||(H=[he(r,"click",n[35]),he(g,"click",n[36])],U=!0)},p(z,j){(!O||j[0]&65536&&s!==(s="f7:speaker-"+(z[16].muted?"slash":"2")+"-fill"))&&De(i,"icon",s),(!O||j[0]&65536)&&c!==(c=z[16].muted?"Muted":"Unmuted")&&me(l,c),(!O||j[0]&65536&&y!==(y="tabler:clock-"+(z[16].altHourFormat?24:12)))&&De(m,"icon",y),(!O||j[0]&65536)&&C!==(C=(z[16].altHourFormat?24:12)+"")&&me(b,C);const J={};j[0]&8192&&(J.ffDayInfo=z[13]),D.$set(J)},i(z){O||(ne(D.$$.fragment,z),ne(S.$$.fragment,z),O=!0)},o(z){oe(D.$$.fragment,z),oe(S.$$.fragment,z),O=!1},d(z){z&&(M(e),M(T),M(E),M(B)),bt(D),bt(S,z),U=!1,je(H)}}}function CS(n){let e;return{c(){e=P("div"),e.textContent=`Looks like you've already got Frontier Clock opened in another tab!
            Please close this tab and return to the original.`,L(e,"class","pageWarning ff-bg bg-sand border-tp br-1 bs ta-center")},m(t,r){$(t,e,r)},p:le,i:le,o:le,d(t){t&&M(e)}}}function h_(n){let e,t,r,i,s,o,a,c,l;const u=[n[5].props];var f=n[5].component;function h(d,p){let g={};for(let m=0;m<u.length;m+=1)g=Un(g,u[m]);return p!==void 0&&p[0]&32&&(g=Un(g,Wn(u,[ns(d[5].props)]))),{props:g}}return f&&(r=Wu(f,h(n))),{c(){e=P("div"),t=P("div"),r&&Tt(r.$$.fragment),L(t,"class",i=n[5].hasWrapper?"":"flex fd-col border-tp br-1 bs"),Be(t,"ignoreWrapper",n[5].hasWrapper),Be(t,"portrait",n[15]),L(e,"class","promptCont")},m(d,p){$(d,e,p),R(e,t),r&&Et(r,t,null),n[38](e),a=!0,c||(l=[he(t,"introstart",n[37]),he(e,"click",n[39])],c=!0)},p(d,p){if(p[0]&32&&f!==(f=d[5].component)){if(r){it();const g=r;oe(g.$$.fragment,1,0,()=>{bt(g,1)}),st()}f?(r=Wu(f,h(d,p)),Tt(r.$$.fragment),ne(r.$$.fragment,1),Et(r,t,null)):r=null}else if(f){const g=p[0]&32?Wn(u,[ns(d[5].props)]):{};r.$set(g)}(!a||p[0]&32&&i!==(i=d[5].hasWrapper?"":"flex fd-col border-tp br-1 bs"))&&L(t,"class",i),(!a||p[0]&32)&&Be(t,"ignoreWrapper",d[5].hasWrapper),(!a||p[0]&32800)&&Be(t,"portrait",d[15])},i(d){a||(r&&ne(r.$$.fragment,d),d&&St(()=>{a&&(s||(s=$t(t,So,{duration:200},!0)),s.run(1))}),d&&St(()=>{a&&(o||(o=$t(e,en,{duration:100},!0)),o.run(1))}),a=!0)},o(d){r&&oe(r.$$.fragment,d),d&&(s||(s=$t(t,So,{duration:200},!1)),s.run(0)),d&&(o||(o=$t(e,en,{duration:100},!1)),o.run(0)),a=!1},d(d){d&&M(e),r&&bt(r),d&&s&&s.end(),n[38](null),d&&o&&o.end(),c=!1,je(l)}}}function ES(n){let e,t,r,i,s,o,a,c,l,u,f,h,d,p,g,m,y,_,x,v,C,b,A,w,T,E,D,B;St(n[31]);let S=Oe(n[21]),O=[];for(let W=0;W<S.length;W+=1)O[W]=r_(n_(n,S,W));let U=(n[5].component||n[8])&&i_(),H=n[15]&&s_(),z=Oe(n[22]),j=[];for(let W=0;W<z.length;W+=1)j[W]=o_(t_(n,z,W));let J=Oe(n[21]),Y=[];for(let W=0;W<J.length;W+=1)Y[W]=a_(e_(n,J,W));let I=n[9]&&l_(n),F=!n[6]&&c_(n),N=Oe(n[22]),k=[];for(let W=0;W<N.length;W+=1)k[W]=u_(Jp(n,N,W));const ie=[CS,yS],ee=[];function de(W,re){return W[6]?0:1}_=de(n),x=ee[_]=ie[_](n),C=new Hu({props:{isDaytime:n[3],untilNextTimeOfDay:n[4],isPopup:!0,popupActive:!n[12]&&!n[6]}}),A=new ZA({});let V=n[5].component&&h_(n);return{c(){e=q();for(let W=0;W<O.length;W+=1)O[W].c();t=tn(),U&&U.c(),r=tn(),H&&H.c(),i=tn(),s=q(),o=P("div");for(let W=0;W<j.length;W+=1)j[W].c();a=q(),c=P("audio"),u=q(),f=P("div");for(let W=0;W<Y.length;W+=1)Y[W].c();h=q(),I&&I.c(),d=q(),F&&F.c(),p=q(),g=P("div");for(let W=0;W<k.length;W+=1)k[W].c();m=q(),y=P("main"),x.c(),v=q(),Tt(C.$$.fragment),b=q(),Tt(A.$$.fragment),w=q(),V&&V.c(),T=tn(),ar(c.src,l=Fs+"/audios/select.mp3")||L(c,"src",l),L(g,"class","popups"),L(y,"class","flex fd-col fai-center svelte-4ctur1"),Be(y,"portrait",n[15]),Ge(y,"height",n[6]?"100vh":"")},m(W,re){$(W,e,re);for(let pe=0;pe<O.length;pe+=1)O[pe]&&O[pe].m(Xn.head,null);R(Xn.head,t),U&&U.m(Xn.head,null),R(Xn.head,r),H&&H.m(Xn.head,null),R(Xn.head,i),$(W,s,re),$(W,o,re);for(let pe=0;pe<j.length;pe+=1)j[pe]&&j[pe].m(o,null);R(o,a),R(o,c),n[34](c),$(W,u,re),$(W,f,re);for(let pe=0;pe<Y.length;pe+=1)Y[pe]&&Y[pe].m(f,null);$(W,h,re),I&&I.m(W,re),$(W,d,re),F&&F.m(W,re),$(W,p,re),$(W,g,re);for(let pe=0;pe<k.length;pe+=1)k[pe]&&k[pe].m(g,null);$(W,m,re),$(W,y,re),ee[_].m(y,null),R(y,v),Et(C,y,null),$(W,b,re),Et(A,W,re),$(W,w,re),V&&V.m(W,re),$(W,T,re),E=!0,D||(B=[he(nr,"storage",n[27]),he(nr,"wheel",n[28],{passive:!1}),he(nr,"click",n[29]),he(nr,"keydown",n[30]),he(nr,"resize",n[31]),he(Xn,"visibilitychange",n[32])],D=!0)},p(W,re){if(re[0]&2097152){S=Oe(W[21]);let Q;for(Q=0;Q<S.length;Q+=1){const ce=n_(W,S,Q);O[Q]?O[Q].p(ce,re):(O[Q]=r_(ce),O[Q].c(),O[Q].m(t.parentNode,t))}for(;Q<O.length;Q+=1)O[Q].d(1);O.length=S.length}if(W[5].component||W[8]?U||(U=i_(),U.c(),U.m(r.parentNode,r)):U&&(U.d(1),U=null),W[15]?H||(H=s_(),H.c(),H.m(i.parentNode,i)):H&&(H.d(1),H=null),re[0]&4276224){z=Oe(W[22]);let Q;for(Q=0;Q<z.length;Q+=1){const ce=t_(W,z,Q);j[Q]?j[Q].p(ce,re):(j[Q]=o_(ce),j[Q].c(),j[Q].m(o,a))}for(;Q<j.length;Q+=1)j[Q].d(1);j.length=z.length}if(re[0]&2098176){J=Oe(W[21]);let Q;for(Q=0;Q<J.length;Q+=1){const ce=e_(W,J,Q);Y[Q]?Y[Q].p(ce,re):(Y[Q]=a_(ce),Y[Q].c(),Y[Q].m(f,null))}for(;Q<Y.length;Q+=1)Y[Q].d(1);Y.length=J.length}if(W[9]?I?(I.p(W,re),re[0]&512&&ne(I,1)):(I=l_(W),I.c(),ne(I,1),I.m(d.parentNode,d)):I&&(it(),oe(I,1,1,()=>{I=null}),st()),W[6]?F&&(it(),oe(F,1,1,()=>{F=null}),st()):F?(F.p(W,re),re[0]&64&&ne(F,1)):(F=c_(W),F.c(),ne(F,1),F.m(p.parentNode,p)),re[0]&4196352){N=Oe(W[22]);let Q;for(Q=0;Q<N.length;Q+=1){const ce=Jp(W,N,Q);k[Q]?k[Q].p(ce,re):(k[Q]=u_(ce),k[Q].c(),k[Q].m(g,null))}for(;Q<k.length;Q+=1)k[Q].d(1);k.length=N.length}let pe=_;_=de(W),_===pe?ee[_].p(W,re):(it(),oe(ee[pe],1,1,()=>{ee[pe]=null}),st(),x=ee[_],x?x.p(W,re):(x=ee[_]=ie[_](W),x.c()),ne(x,1),x.m(y,v));const qe={};re[0]&8&&(qe.isDaytime=W[3]),re[0]&16&&(qe.untilNextTimeOfDay=W[4]),re[0]&4160&&(qe.popupActive=!W[12]&&!W[6]),C.$set(qe),(!E||re[0]&32768)&&Be(y,"portrait",W[15]),re[0]&64&&Ge(y,"height",W[6]?"100vh":""),W[5].component?V?(V.p(W,re),re[0]&32&&ne(V,1)):(V=h_(W),V.c(),ne(V,1),V.m(T.parentNode,T)):V&&(it(),oe(V,1,1,()=>{V=null}),st())},i(W){E||(ne(I),ne(F),ne(x),ne(C.$$.fragment,W),ne(A.$$.fragment,W),ne(V),E=!0)},o(W){oe(I),oe(F),oe(x),oe(C.$$.fragment,W),oe(A.$$.fragment,W),oe(V),E=!1},d(W){W&&(M(e),M(s),M(o),M(u),M(f),M(h),M(d),M(p),M(g),M(m),M(y),M(b),M(w),M(T)),Mt(O,W),M(t),U&&U.d(W),M(r),H&&H.d(W),M(i),Mt(j,W),n[34](null),Mt(Y,W),I&&I.d(W),F&&F.d(W),Mt(k,W),ee[_].d(),bt(C),bt(A,W),V&&V.d(W),D=!1,je(B)}}}let gc="v1.0.0";function bS(n,e,t){let r,i,s,o,a,c,l,u,f,h,d,p,g,m,y,_,x;Se(n,Xl,G=>t(26,c=G)),Se(n,Xe,G=>t(5,l=G)),Se(n,ro,G=>t(47,u=G)),Se(n,zs,G=>t(14,f=G)),Se(n,Yl,G=>t(15,h=G)),Se(n,ds,G=>t(48,d=G)),Se(n,to,G=>t(49,p=G)),Se(n,fs,G=>t(50,g=G)),Se(n,Kl,G=>t(51,m=G)),Se(n,jl,G=>t(52,y=G)),Se(n,kn,G=>t(53,_=G)),Se(n,no,G=>t(16,x=G));let v=!1,C=!0,b=XI();function A(){if(b)return setTimeout(()=>{be(Xe,l.preventClosing=!0,l),be(Xe,l.component=rS,l)},200),!0}{const G=new BroadcastChannel("tab");G.postMessage("anotherTab"),G.addEventListener("message",Me=>{Me.data==="anotherTab"&&C&&G.postMessage("alreadyOpen"),Me.data==="alreadyOpen"&&(C=!1,t(6,v=!0),pA())})}let w=CSS.supports("height: 100lvh"),T,E,D,B=!1;nv(()=>{if(v)return;let G=setInterval(()=>be(Xl,c=new Date,c),100);if(!b&&(be(kn,_.totalVisits++,_),_.showAgain)){let Me=Math.floor((_.totalVisits-_.lastVisits)/3);Me&&Me>=_.timesDenied&&(be(kn,_.lastVisits=_.totalVisits,_),be(Xe,l.component=tw,l))}return JC(Lt,async()=>{b&&Lr(),be(jl,y=Lt.currentUser,y),be(Kl,m=!!Qt(y),m),be(fs,g=m?y.displayName||g:"",g),m&&(v||(rg("logIn",`Succesfully logged in as {${g}}`),!p&&A()))}),localStorage.getItem("fcl-version")!=gc&&(be(ds,d=!1,d),localStorage.setItem("fcl-version",gc)),()=>clearInterval(G)});let S=[.45,.6,.75,.85,.95,1,1.1,1.25,1.5],O=S.indexOf(1),U=!1,H;function z(){H=setTimeout(()=>{t(9,U=!1)},750)}function j(){clearTimeout(H),t(9,U=!0),z()}function J(){be(Yl,h=T>E,h),document.documentElement.style.fontSize=`${(h?E/T/1.2:.75)*S[O]}${w?"l":""}vh`}let Y=[],I=[],F,N,k=11;for(let G=0;G<k;G++)Y.push(`${Fs}/backgrounds/BG${G}.jpg`);function ie(G){N=Math.floor(Math.random()*G.length)}ie(Y);function ee(){t(10,F=N),I.push(N)}ee(),function G(){setTimeout(()=>{if(ie(Y),!I.length)ee();else if(I.length>3&&(I=I.slice(1)),!I.includes(N))ee();else{let Me=[...Array(k).keys()].filter(Qe=>!I.includes(Qe));ie(Me),ee()}document.visibilityState=="visible"&&G()},45e3)}();let de=["day","night","nightWarning"],V=!1,W="";function re(G){t(11,W=G),f[G].play(),setTimeout(()=>{t(11,W="")},2500)}function pe(G){V?(re(G),be(ro,u[G]=!0,u),setTimeout(()=>{be(ro,u[G]=!1,u)},4e3)):V=!0}let qe=!0;function Q(G){new IntersectionObserver(Qe=>{Qe[0].isIntersecting?t(12,qe=!0):t(12,qe=!1)}).observe(G)}let ce=!1;function kt(){if(!ce){ce=!0;return}t(8,B=!0),setTimeout(()=>t(8,B=!1),150)}const mt=G=>{/^f[a-z]{1,2}-/.test(G.key)&&localStorage.setItem(G.key,G.oldValue)},Ft=G=>{let Me=G.deltaY;if(G.ctrlKey){if(G.preventDefault(),S[O]==S[0]&&Me>0||S[O]==S[S.length-1]&&Me<0)return;Me<0?t(2,O++,O):t(2,O--,O),j()}},vt=G=>{if(G.target instanceof HTMLElement){let Me=G.target.closest("button");Me&&!Me.classList.contains("no-sound")&&(be(zs,f.select.currentTime=0,f),f.select.play())}},Vt=G=>{let Me=["Enter"," "],Qe=["BUTTON","INPUT","A"];G.ctrlKey&&(G.key=="-"||G.key=="+"||G.code=="Equal"||G.key=="0")&&(G.preventDefault(),(G.key=="+"||G.code=="Equal")&&S[O]!=S[S.length-1]?t(2,O++,O):G.key=="-"&&S[O]!=S[0]?t(2,O--,O):G.key=="0"&&S[O]!=1&&t(2,O=S.indexOf(1)),j()),l.component&&D&&(!G.ctrlKey&&!G.shiftKey&&!G.altKey&&(G.key=="Escape"||Me.includes(G.key)&&!Qe.includes(document.activeElement.tagName))?Lr():setTimeout(()=>{G.key=="Tab"&&!D.contains(document.activeElement)&&Lr()}))};function yt(){t(0,T=nr.outerHeight),t(1,E=nr.outerWidth)}const Fe=()=>{document.visibilityState=="visible"&&setTimeout(()=>{t(0,T=window.outerHeight),t(1,E=window.outerWidth),J()})};function Ie(G,Me){Wi[G?"unshift":"push"](()=>{f[Me]=G,zs.set(f)})}function Ve(G){Wi[G?"unshift":"push"](()=>{f.select=G,zs.set(f)})}const Rt=G=>{wt(G),be(no,x.muted=!x.muted,x)},se=G=>{wt(G),be(no,x.altHourFormat=!x.altHourFormat,x)},We=()=>{let G=l.focus?D.querySelector(`#${l.focus}`):D.querySelector("a, button, input");G&&G.focus()};function Ye(G){Wi[G?"unshift":"push"](()=>{D=G,t(7,D)})}const _i=G=>{G.composedPath()[0]===D&&Lr()};return n.$$.update=()=>{n.$$.dirty[0]&7&&(T||E||O)&&J(),n.$$.dirty[0]&32&&l.component===null&&kt(),n.$$.dirty[0]&67108864&&t(25,r=c.getUTCMinutes()%20),n.$$.dirty[0]&33554432&&t(3,i=r-15<0),n.$$.dirty[0]&33554440&&t(4,s=(i?15:20)-r),n.$$.dirty[0]&33554456&&t(13,o={dayMinsElapsed:r,isDaytime:i,untilNextTimeOfDay:s}),n.$$.dirty[0]&67108864&&t(24,a=c.getUTCSeconds()),n.$$.dirty[0]&8&&pe(i?"day":"night"),n.$$.dirty[0]&50331648&&r===13&&a===30&&re("nightWarning")},[T,E,O,i,s,l,v,D,B,U,F,W,qe,o,f,h,x,A,S,j,J,Y,de,Q,a,r,c,mt,Ft,vt,Vt,yt,Fe,Ie,Ve,Rt,se,We,Ye,_i]}class AS extends ht{constructor(e){super(),ut(this,e,bS,ES,Ke,{},null,[-1,-1,-1])}}new AS({target:document.body});
