"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const i=require("vue");function Xe(e){return i.getCurrentScope()?(i.onScopeDispose(e),!0):!1}function Te(e){return typeof e=="function"?e():i.unref(e)}const Pe=typeof window<"u"&&typeof document<"u",Ye=Object.prototype.toString,Ze=e=>Ye.call(e)==="[object Object]",Z=()=>{},et=tt();function tt(){var e;return Pe&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function P(e){var n;const t=Te(e);return(n=t==null?void 0:t.$el)!=null?n:t}const je=Pe?window:void 0;function J(...e){let n,t,r,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,r,o]=e,n=je):[n,t,r,o]=e,!n)return Z;Array.isArray(t)||(t=[t]),Array.isArray(r)||(r=[r]);const s=[],c=()=>{s.forEach(f=>f()),s.length=0},a=(f,d,p,g)=>(f.addEventListener(d,p,g),()=>f.removeEventListener(d,p,g)),l=i.watch(()=>[P(n),Te(o)],([f,d])=>{if(c(),!f)return;const p=Ze(d)?{...d}:d;s.push(...t.flatMap(g=>r.map(m=>a(f,g,m,p))))},{immediate:!0,flush:"post"}),u=()=>{l(),c()};return Xe(u),u}let ge=!1;function nt(e,n,t={}){const{window:r=je,ignore:o=[],capture:s=!0,detectIframe:c=!1}=t;if(!r)return;et&&!ge&&(ge=!0,Array.from(r.document.body.children).forEach(p=>p.addEventListener("click",Z)),r.document.documentElement.addEventListener("click",Z));let a=!0;const l=p=>o.some(g=>{if(typeof g=="string")return Array.from(r.document.querySelectorAll(g)).some(m=>m===p.target||p.composedPath().includes(m));{const m=P(g);return m&&(p.target===m||p.composedPath().includes(m))}}),f=[J(r,"click",p=>{const g=P(e);if(!(!g||g===p.target||p.composedPath().includes(g))){if(p.detail===0&&(a=!l(p)),!a){a=!0;return}n(p)}},{passive:!0,capture:s}),J(r,"pointerdown",p=>{const g=P(e);g&&(a=!p.composedPath().includes(g)&&!l(p))},{passive:!0}),c&&J(r,"blur",p=>{setTimeout(()=>{var g;const m=P(e);((g=r.document.activeElement)==null?void 0:g.tagName)==="IFRAME"&&!(m!=null&&m.contains(r.document.activeElement))&&n(p)},0)})].filter(Boolean);return()=>f.forEach(p=>p())}const M=/^[a-z0-9]+(-[a-z0-9]+)*$/,U=(e,n,t,r="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const a=o.pop(),l=o.pop(),u={provider:o.length>0?o[0]:r,prefix:l,name:a};return n&&!R(u)?null:u}const s=o[0],c=s.split("-");if(c.length>1){const a={provider:r,prefix:c.shift(),name:c.join("-")};return n&&!R(a)?null:a}if(t&&r===""){const a={provider:r,prefix:"",name:s};return n&&!R(a,t)?null:a}return null},R=(e,n)=>e?!!((e.provider===""||e.provider.match(M))&&(n&&e.prefix===""||e.prefix.match(M))&&e.name.match(M)):!1,Me=Object.freeze({left:0,top:0,width:16,height:16}),Q=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),W=Object.freeze({...Me,...Q}),ee=Object.freeze({...W,body:"",hidden:!1});function ot(e,n){const t={};!e.hFlip!=!n.hFlip&&(t.hFlip=!0),!e.vFlip!=!n.vFlip&&(t.vFlip=!0);const r=((e.rotate||0)+(n.rotate||0))%4;return r&&(t.rotate=r),t}function me(e,n){const t=ot(e,n);for(const r in ee)r in Q?r in e&&!(r in t)&&(t[r]=Q[r]):r in n?t[r]=n[r]:r in e&&(t[r]=e[r]);return t}function rt(e,n){const t=e.icons,r=e.aliases||Object.create(null),o=Object.create(null);function s(c){if(t[c])return o[c]=[];if(!(c in o)){o[c]=null;const a=r[c]&&r[c].parent,l=a&&s(a);l&&(o[c]=[a].concat(l))}return o[c]}return(n||Object.keys(t).concat(Object.keys(r))).forEach(s),o}function st(e,n,t){const r=e.icons,o=e.aliases||Object.create(null);let s={};function c(a){s=me(r[a]||o[a],s)}return c(n),t.forEach(c),me(e,s)}function Le(e,n){const t=[];if(typeof e!="object"||typeof e.icons!="object")return t;e.not_found instanceof Array&&e.not_found.forEach(o=>{n(o,null),t.push(o)});const r=rt(e);for(const o in r){const s=r[o];s&&(n(o,st(e,o,s)),t.push(o))}return t}const it={provider:"",aliases:{},not_found:{},...Me};function X(e,n){for(const t in n)if(t in e&&typeof e[t]!=typeof n[t])return!1;return!0}function Ne(e){if(typeof e!="object"||e===null)return null;const n=e;if(typeof n.prefix!="string"||!e.icons||typeof e.icons!="object"||!X(e,it))return null;const t=n.icons;for(const o in t){const s=t[o];if(!o.match(M)||typeof s.body!="string"||!X(s,ee))return null}const r=n.aliases||Object.create(null);for(const o in r){const s=r[o],c=s.parent;if(!o.match(M)||typeof c!="string"||!t[c]&&!r[c]||!X(s,ee))return null}return n}const ve=Object.create(null);function ct(e,n){return{provider:e,prefix:n,icons:Object.create(null),missing:new Set}}function E(e,n){const t=ve[e]||(ve[e]=Object.create(null));return t[n]||(t[n]=ct(e,n))}function ce(e,n){return Ne(n)?Le(n,(t,r)=>{r?e.icons[t]=r:e.missing.add(t)}):[]}function at(e,n,t){try{if(typeof t.body=="string")return e.icons[n]={...t},!0}catch{}return!1}let L=!1;function Ae(e){return typeof e=="boolean"&&(L=e),L}function lt(e){const n=typeof e=="string"?U(e,!0,L):e;if(n){const t=E(n.provider,n.prefix),r=n.name;return t.icons[r]||(t.missing.has(r)?null:void 0)}}function ut(e,n){const t=U(e,!0,L);if(!t)return!1;const r=E(t.provider,t.prefix);return at(r,t.name,n)}function ft(e,n){if(typeof e!="object")return!1;if(typeof n!="string"&&(n=e.provider||""),L&&!n&&!e.prefix){let o=!1;return Ne(e)&&(e.prefix="",Le(e,(s,c)=>{c&&ut(s,c)&&(o=!0)})),o}const t=e.prefix;if(!R({provider:n,prefix:t,name:"a"}))return!1;const r=E(n,t);return!!ce(r,e)}const Fe=Object.freeze({width:null,height:null}),Ve=Object.freeze({...Fe,...Q}),dt=/(-?[0-9.]*[0-9]+[0-9.]*)/g,pt=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function ye(e,n,t){if(n===1)return e;if(t=t||100,typeof e=="number")return Math.ceil(e*n*t)/t;if(typeof e!="string")return e;const r=e.split(dt);if(r===null||!r.length)return e;const o=[];let s=r.shift(),c=pt.test(s);for(;;){if(c){const a=parseFloat(s);isNaN(a)?o.push(s):o.push(Math.ceil(a*n*t)/t)}else o.push(s);if(s=r.shift(),s===void 0)return o.join("");c=!c}}const ht=e=>e==="unset"||e==="undefined"||e==="none";function gt(e,n){const t={...W,...e},r={...Ve,...n},o={left:t.left,top:t.top,width:t.width,height:t.height};let s=t.body;[t,r].forEach(m=>{const v=[],y=m.hFlip,S=m.vFlip;let C=m.rotate;y?S?C+=2:(v.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),v.push("scale(-1 1)"),o.top=o.left=0):S&&(v.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),v.push("scale(1 -1)"),o.top=o.left=0);let k;switch(C<0&&(C-=Math.floor(C/4)*4),C=C%4,C){case 1:k=o.height/2+o.top,v.unshift("rotate(90 "+k.toString()+" "+k.toString()+")");break;case 2:v.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:k=o.width/2+o.left,v.unshift("rotate(-90 "+k.toString()+" "+k.toString()+")");break}C%2===1&&(o.left!==o.top&&(k=o.left,o.left=o.top,o.top=k),o.width!==o.height&&(k=o.width,o.width=o.height,o.height=k)),v.length&&(s='<g transform="'+v.join(" ")+'">'+s+"</g>")});const c=r.width,a=r.height,l=o.width,u=o.height;let f,d;c===null?(d=a===null?"1em":a==="auto"?u:a,f=ye(d,l/u)):(f=c==="auto"?l:c,d=a===null?ye(f,u/l):a==="auto"?u:a);const p={},g=(m,v)=>{ht(v)||(p[m]=v.toString())};return g("width",f),g("height",d),p.viewBox=o.left.toString()+" "+o.top.toString()+" "+l.toString()+" "+u.toString(),{attributes:p,body:s}}const mt=/\sid="(\S+)"/g,vt="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let yt=0;function _t(e,n=vt){const t=[];let r;for(;r=mt.exec(e);)t.push(r[1]);if(!t.length)return e;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return t.forEach(s=>{const c=typeof n=="function"?n(s):n+(yt++).toString(),a=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+a+')([")]|\\.[a-z])',"g"),"$1"+c+o+"$3")}),e=e.replace(new RegExp(o,"g"),""),e}const te=Object.create(null);function bt(e,n){te[e]=n}function ne(e){return te[e]||te[""]}function ae(e){let n;if(typeof e.resources=="string")n=[e.resources];else if(n=e.resources,!(n instanceof Array)||!n.length)return null;return{resources:n,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const le=Object.create(null),T=["https://api.simplesvg.com","https://api.unisvg.com"],H=[];for(;T.length>0;)T.length===1||Math.random()>.5?H.push(T.shift()):H.push(T.pop());le[""]=ae({resources:["https://api.iconify.design"].concat(H)});function kt(e,n){const t=ae(n);return t===null?!1:(le[e]=t,!0)}function ue(e){return le[e]}const Ct=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let _e=Ct();function wt(e,n){const t=ue(e);if(!t)return 0;let r;if(!t.maxURL)r=0;else{let o=0;t.resources.forEach(c=>{o=Math.max(o,c.length)});const s=n+".json?icons=";r=t.maxURL-o-t.path.length-s.length}return r}function xt(e){return e===404}const St=(e,n,t)=>{const r=[],o=wt(e,n),s="icons";let c={type:s,provider:e,prefix:n,icons:[]},a=0;return t.forEach((l,u)=>{a+=l.length+1,a>=o&&u>0&&(r.push(c),c={type:s,provider:e,prefix:n,icons:[]},a=l.length),c.icons.push(l)}),r.push(c),r};function It(e){if(typeof e=="string"){const n=ue(e);if(n)return n.path}return"/"}const Et=(e,n,t)=>{if(!_e){t("abort",424);return}let r=It(n.provider);switch(n.type){case"icons":{const s=n.prefix,a=n.icons.join(","),l=new URLSearchParams({icons:a});r+=s+".json?"+l.toString();break}case"custom":{const s=n.uri;r+=s.slice(0,1)==="/"?s.slice(1):s;break}default:t("abort",400);return}let o=503;_e(e+r).then(s=>{const c=s.status;if(c!==200){setTimeout(()=>{t(xt(c)?"abort":"next",c)});return}return o=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?t("abort",s):t("next",o)});return}setTimeout(()=>{t("success",s)})}).catch(()=>{t("next",o)})},Bt={prepare:St,send:Et};function Ot(e){const n={loaded:[],missing:[],pending:[]},t=Object.create(null);e.sort((o,s)=>o.provider!==s.provider?o.provider.localeCompare(s.provider):o.prefix!==s.prefix?o.prefix.localeCompare(s.prefix):o.name.localeCompare(s.name));let r={provider:"",prefix:"",name:""};return e.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const s=o.provider,c=o.prefix,a=o.name,l=t[s]||(t[s]=Object.create(null)),u=l[c]||(l[c]=E(s,c));let f;a in u.icons?f=n.loaded:c===""||u.missing.has(a)?f=n.missing:f=n.pending;const d={provider:s,prefix:c,name:a};f.push(d)}),n}function $e(e,n){e.forEach(t=>{const r=t.loaderCallbacks;r&&(t.loaderCallbacks=r.filter(o=>o.id!==n))})}function Tt(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const n=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!n.length)return;let t=!1;const r=e.provider,o=e.prefix;n.forEach(s=>{const c=s.icons,a=c.pending.length;c.pending=c.pending.filter(l=>{if(l.prefix!==o)return!0;const u=l.name;if(e.icons[u])c.loaded.push({provider:r,prefix:o,name:u});else if(e.missing.has(u))c.missing.push({provider:r,prefix:o,name:u});else return t=!0,!0;return!1}),c.pending.length!==a&&(t||$e([e],s.id),s.callback(c.loaded.slice(0),c.missing.slice(0),c.pending.slice(0),s.abort))})}))}let Pt=0;function jt(e,n,t){const r=Pt++,o=$e.bind(null,t,r);if(!n.pending.length)return o;const s={id:r,icons:n,callback:e,abort:o};return t.forEach(c=>{(c.loaderCallbacks||(c.loaderCallbacks=[])).push(s)}),o}function Mt(e,n=!0,t=!1){const r=[];return e.forEach(o=>{const s=typeof o=="string"?U(o,n,t):o;s&&r.push(s)}),r}var Lt={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Nt(e,n,t,r){const o=e.resources.length,s=e.random?Math.floor(Math.random()*o):e.index;let c;if(e.random){let h=e.resources.slice(0);for(c=[];h.length>1;){const b=Math.floor(Math.random()*h.length);c.push(h[b]),h=h.slice(0,b).concat(h.slice(b+1))}c=c.concat(h)}else c=e.resources.slice(s).concat(e.resources.slice(0,s));const a=Date.now();let l="pending",u=0,f,d=null,p=[],g=[];typeof r=="function"&&g.push(r);function m(){d&&(clearTimeout(d),d=null)}function v(){l==="pending"&&(l="aborted"),m(),p.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),p=[]}function y(h,b){b&&(g=[]),typeof h=="function"&&g.push(h)}function S(){return{startTime:a,payload:n,status:l,queriesSent:u,queriesPending:p.length,subscribe:y,abort:v}}function C(){l="failed",g.forEach(h=>{h(void 0,f)})}function k(){p.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),p=[]}function K(h,b,x){const I=b!=="success";switch(p=p.filter(w=>w!==h),l){case"pending":break;case"failed":if(I||!e.dataAfterTimeout)return;break;default:return}if(b==="abort"){f=x,C();return}if(I){f=x,p.length||(c.length?_():C());return}if(m(),k(),!e.random){const w=e.resources.indexOf(h.resource);w!==-1&&w!==e.index&&(e.index=w)}l="completed",g.forEach(w=>{w(x)})}function _(){if(l!=="pending")return;m();const h=c.shift();if(h===void 0){if(p.length){d=setTimeout(()=>{m(),l==="pending"&&(k(),C())},e.timeout);return}C();return}const b={status:"pending",resource:h,callback:(x,I)=>{K(b,x,I)}};p.push(b),u++,d=setTimeout(_,e.rotate),t(h,n,b.callback)}return setTimeout(_),S}function De(e){const n={...Lt,...e};let t=[];function r(){t=t.filter(a=>a().status==="pending")}function o(a,l,u){const f=Nt(n,a,l,(d,p)=>{r(),u&&u(d,p)});return t.push(f),f}function s(a){return t.find(l=>a(l))||null}return{query:o,find:s,setIndex:a=>{n.index=a},getIndex:()=>n.index,cleanup:r}}function be(){}const Y=Object.create(null);function At(e){if(!Y[e]){const n=ue(e);if(!n)return;const t=De(n),r={config:n,redundancy:t};Y[e]=r}return Y[e]}function Ft(e,n,t){let r,o;if(typeof e=="string"){const s=ne(e);if(!s)return t(void 0,424),be;o=s.send;const c=At(e);c&&(r=c.redundancy)}else{const s=ae(e);if(s){r=De(s);const c=e.resources?e.resources[0]:"",a=ne(c);a&&(o=a.send)}}return!r||!o?(t(void 0,424),be):r.query(n,o,t)().abort}const ke="iconify2",N="iconify",Re=N+"-count",Ce=N+"-version",He=36e5,Vt=168;function oe(e,n){try{return e.getItem(n)}catch{}}function fe(e,n,t){try{return e.setItem(n,t),!0}catch{}}function we(e,n){try{e.removeItem(n)}catch{}}function re(e,n){return fe(e,Re,n.toString())}function se(e){return parseInt(oe(e,Re))||0}const G={local:!0,session:!0},ze={local:new Set,session:new Set};let de=!1;function $t(e){de=e}let D=typeof window>"u"?{}:window;function qe(e){const n=e+"Storage";try{if(D&&D[n]&&typeof D[n].length=="number")return D[n]}catch{}G[e]=!1}function Qe(e,n){const t=qe(e);if(!t)return;const r=oe(t,Ce);if(r!==ke){if(r){const a=se(t);for(let l=0;l<a;l++)we(t,N+l.toString())}fe(t,Ce,ke),re(t,0);return}const o=Math.floor(Date.now()/He)-Vt,s=a=>{const l=N+a.toString(),u=oe(t,l);if(typeof u=="string"){try{const f=JSON.parse(u);if(typeof f=="object"&&typeof f.cached=="number"&&f.cached>o&&typeof f.provider=="string"&&typeof f.data=="object"&&typeof f.data.prefix=="string"&&n(f,a))return!0}catch{}we(t,l)}};let c=se(t);for(let a=c-1;a>=0;a--)s(a)||(a===c-1?(c--,re(t,c)):ze[e].add(a))}function Ue(){if(!de){$t(!0);for(const e in G)Qe(e,n=>{const t=n.data,r=n.provider,o=t.prefix,s=E(r,o);if(!ce(s,t).length)return!1;const c=t.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,c):c,!0})}}function Dt(e,n){const t=e.lastModifiedCached;if(t&&t>=n)return t===n;if(e.lastModifiedCached=n,t)for(const r in G)Qe(r,o=>{const s=o.data;return o.provider!==e.provider||s.prefix!==e.prefix||s.lastModified===n});return!0}function Rt(e,n){de||Ue();function t(r){let o;if(!G[r]||!(o=qe(r)))return;const s=ze[r];let c;if(s.size)s.delete(c=Array.from(s).shift());else if(c=se(o),!re(o,c+1))return;const a={cached:Math.floor(Date.now()/He),provider:e.provider,data:n};return fe(o,N+c.toString(),JSON.stringify(a))}n.lastModified&&!Dt(e,n.lastModified)||Object.keys(n.icons).length&&(n.not_found&&(n=Object.assign({},n),delete n.not_found),t("local")||t("session"))}function xe(){}function Ht(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,Tt(e)}))}function zt(e,n){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(n).sort():e.iconsToLoad=n,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:t,prefix:r}=e,o=e.iconsToLoad;delete e.iconsToLoad;let s;if(!o||!(s=ne(t)))return;s.prepare(t,r,o).forEach(a=>{Ft(t,a,l=>{if(typeof l!="object")a.icons.forEach(u=>{e.missing.add(u)});else try{const u=ce(e,l);if(!u.length)return;const f=e.pendingIcons;f&&u.forEach(d=>{f.delete(d)}),Rt(e,l)}catch(u){console.error(u)}Ht(e)})})}))}const qt=(e,n)=>{const t=Mt(e,!0,Ae()),r=Ot(t);if(!r.pending.length){let l=!0;return n&&setTimeout(()=>{l&&n(r.loaded,r.missing,r.pending,xe)}),()=>{l=!1}}const o=Object.create(null),s=[];let c,a;return r.pending.forEach(l=>{const{provider:u,prefix:f}=l;if(f===a&&u===c)return;c=u,a=f,s.push(E(u,f));const d=o[u]||(o[u]=Object.create(null));d[f]||(d[f]=[])}),r.pending.forEach(l=>{const{provider:u,prefix:f,name:d}=l,p=E(u,f),g=p.pendingIcons||(p.pendingIcons=new Set);g.has(d)||(g.add(d),o[u][f].push(d))}),s.forEach(l=>{const{provider:u,prefix:f}=l;o[u][f].length&&zt(l,o[u][f])}),n?jt(n,r,s):xe};function Qt(e,n){const t={...e};for(const r in n){const o=n[r],s=typeof o;r in Fe?(o===null||o&&(s==="string"||s==="number"))&&(t[r]=o):s===typeof t[r]&&(t[r]=r==="rotate"?o%4:o)}return t}const Ut=/[\s,]+/;function Wt(e,n){n.split(Ut).forEach(t=>{switch(t.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function Gt(e,n=0){const t=e.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(t===""){const o=parseInt(e);return isNaN(o)?0:r(o)}else if(t!==e){let o=0;switch(t){case"%":o=25;break;case"deg":o=90}if(o){let s=parseFloat(e.slice(0,e.length-t.length));return isNaN(s)?0:(s=s/o,s%1===0?r(s):0)}}return n}function Kt(e,n){let t=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in n)t+=" "+r+'="'+n[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+t+">"+e+"</svg>"}function Jt(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Xt(e){return"data:image/svg+xml,"+Jt(e)}function Yt(e){return'url("'+Xt(e)+'")'}const Se={...Ve,inline:!1},Zt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},en={display:"inline-block"},ie={backgroundColor:"currentColor"},We={backgroundColor:"transparent"},Ie={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Ee={webkitMask:ie,mask:ie,background:We};for(const e in Ee){const n=Ee[e];for(const t in Ie)n[e+t]=Ie[t]}const z={};["horizontal","vertical"].forEach(e=>{const n=e.slice(0,1)+"Flip";z[e+"-flip"]=n,z[e.slice(0,1)+"-flip"]=n,z[e+"Flip"]=n});function Be(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const Oe=(e,n)=>{const t=Qt(Se,n),r={...Zt},o=n.mode||"svg",s={},c=n.style,a=typeof c=="object"&&!(c instanceof Array)?c:{};for(let v in n){const y=n[v];if(y!==void 0)switch(v){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":t[v]=y===!0||y==="true"||y===1;break;case"flip":typeof y=="string"&&Wt(t,y);break;case"color":s.color=y;break;case"rotate":typeof y=="string"?t[v]=Gt(y):typeof y=="number"&&(t[v]=y);break;case"ariaHidden":case"aria-hidden":y!==!0&&y!=="true"&&delete r["aria-hidden"];break;default:{const S=z[v];S?(y===!0||y==="true"||y===1)&&(t[S]=!0):Se[v]===void 0&&(r[v]=y)}}}const l=gt(e,t),u=l.attributes;if(t.inline&&(s.verticalAlign="-0.125em"),o==="svg"){r.style={...s,...a},Object.assign(r,u);let v=0,y=n.id;return typeof y=="string"&&(y=y.replace(/-/g,"_")),r.innerHTML=_t(l.body,y?()=>y+"ID"+v++:"iconifyVue"),i.h("svg",r)}const{body:f,width:d,height:p}=e,g=o==="mask"||(o==="bg"?!1:f.indexOf("currentColor")!==-1),m=Kt(f,{...u,width:d+"",height:p+""});return r.style={...s,"--svg":Yt(m),width:Be(u.width),height:Be(u.height),...en,...g?ie:We,...a},i.h("span",r)};Ae(!0);bt("",Bt);if(typeof document<"u"&&typeof window<"u"){Ue();const e=window;if(e.IconifyPreload!==void 0){const n=e.IconifyPreload,t="Invalid IconifyPreload syntax.";typeof n=="object"&&n!==null&&(n instanceof Array?n:[n]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!ft(r))&&console.error(t)}catch{console.error(t)}})}if(e.IconifyProviders!==void 0){const n=e.IconifyProviders;if(typeof n=="object"&&n!==null)for(let t in n){const r="IconifyProviders["+t+"] is invalid.";try{const o=n[t];if(typeof o!="object"||!o||o.resources===void 0)continue;kt(t,o)||console.error(r)}catch{console.error(r)}}}}const tn={...W,body:""},j=i.defineComponent({inheritAttrs:!1,data(){return{iconMounted:!1,counter:0}},mounted(){this._name="",this._loadingIcon=null,this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(e,n){if(typeof e=="object"&&e!==null&&typeof e.body=="string")return this._name="",this.abortLoading(),{data:e};let t;if(typeof e!="string"||(t=U(e,!1,!0))===null)return this.abortLoading(),null;const r=lt(t);if(!r)return(!this._loadingIcon||this._loadingIcon.name!==e)&&(this.abortLoading(),this._name="",r!==null&&(this._loadingIcon={name:e,abort:qt([t],()=>{this.counter++})})),null;this.abortLoading(),this._name!==e&&(this._name=e,n&&n(e));const o=["iconify"];return t.prefix!==""&&o.push("iconify--"+t.prefix),t.provider!==""&&o.push("iconify--"+t.provider),{data:r,classes:o}}},render(){this.counter;const e=this.$attrs,n=this.iconMounted?this.getIcon(e.icon,e.onLoad):null;if(!n)return Oe(tn,e);let t=e;return n.classes&&(t={...e,class:(typeof e.class=="string"?e.class+" ":"")+n.classes.join(" ")}),Oe({...W,...n.data},t)}}),A=e=>{const n=[],t={};return e({classes:n,styles:t}),{class:n,style:t}},q=e=>typeof e=="number"?`${e}px`:e,nn=["title"],on={class:"vui-cascade-option__string"},rn={class:"vui-cascade-option__string-left"},sn={class:"vui-cascade-option__tree-btn-space"},cn={class:"py-1"},an={key:0,class:"vui-cascade-oprion__next-btn"},ln={key:0},un={key:1},fn={key:2},dn=i.defineComponent({__name:"CascadeOption",props:{option:{},cascade:{}},emits:["on-click"],setup(e,{emit:n}){const t=e,r=i.inject("selectedOptions"),o=i.ref(!1),s=i.computed(()=>!!t.option.options||!!t.option.getAsyncOptions),c=i.computed(()=>!!t.option.children),a=i.computed(()=>{var g;const f=(g=r==null?void 0:r.value)==null?void 0:g.find((m,v)=>v===t.cascade.id);if(!f)return!1;const d=f.id??f.value,p=t.option.id||t.option.value;return d===p}),l=i.computed(()=>A(({classes:f})=>{a.value&&f.push("vui-cascade-option--selected")}));function u(){const f={option:t.option,last:!s.value};n("on-click",f)}return(f,d)=>{const p=i.resolveComponent("CascadeOption",!0),g=i.resolveComponent("CollapseBody");return i.openBlock(),i.createElementBlock("div",i.mergeProps({class:"vui-cascade-option",onClick:u},l.value,{title:t.option.title}),[i.createElementVNode("div",on,[i.createElementVNode("div",rn,[i.createElementVNode("div",sn,[c.value?(i.openBlock(),i.createElementBlock("div",{key:0,class:i.normalizeClass(["vui-cascade-option__tree-btn",{"vui-cascade-option__tree-btn--opened":o.value}]),onClick:d[0]||(d[0]=i.withModifiers(m=>o.value=!o.value,["stop"]))},[i.createVNode(i.unref(j),{icon:"bxs:right-arrow"})],2)):i.createCommentVNode("",!0)]),i.createElementVNode("div",cn,i.toDisplayString(t.option.title),1)]),s.value?(i.openBlock(),i.createElementBlock("div",an,[f.option.loadingState?f.option.loadingState==="process"?(i.openBlock(),i.createElementBlock("span",un,[i.createVNode(i.unref(j),{icon:"ep:loading"})])):f.option.loadingState==="ready"?(i.openBlock(),i.createElementBlock("span",fn,[i.createVNode(i.unref(j),{icon:"ep:refresh"})])):i.createCommentVNode("",!0):(i.openBlock(),i.createElementBlock("span",ln,[i.createVNode(i.unref(j),{icon:"ep:arrow-right"})]))])):i.createCommentVNode("",!0)]),c.value?(i.openBlock(),i.createBlock(g,{key:0,expanded:o.value,option:t.option},{default:i.withCtx(()=>[(i.openBlock(!0),i.createElementBlock(i.Fragment,null,i.renderList(f.option.children,m=>(i.openBlock(),i.createBlock(p,{key:m.id||m.value,cascade:f.cascade,option:m,onOnClick:d[1]||(d[1]=v=>n("on-click",v))},null,8,["cascade","option"]))),128))]),_:1},8,["expanded","option"])):i.createCommentVNode("",!0)],16,nn)}}});const F=(e,n)=>{const t=e.__vccOpts||e;for(const[r,o]of n)t[r]=o;return t},pn=F(dn,[["__scopeId","data-v-ffb37f0f"]]),hn={class:"vui-cascade__scrollable"},gn={key:0,class:"vui-cascade__top-space"},mn={key:0,class:"vui-cascade__fog"},vn=i.defineComponent({__name:"Cascade",props:{cascade:{},padding:{},fog:{type:Boolean},canBack:{type:Boolean},configs:{}},emits:["on-select","on-back"],setup(e,{emit:n}){const t=e,r=i.computed(()=>A(({styles:c})=>{var a,l,u;c.width=q(((a=t.configs)==null?void 0:a.width)||"240px"),(l=t.configs)!=null&&l.maxHeight?c.maxHeight=q(t.configs.maxHeight):c.height=q(((u=t.configs)==null?void 0:u.height)||"120px"),c.left=`${12*t.padding}px`}));function o(c){t.fog||n("on-select",{cascade:t.cascade,optionParams:c})}function s(){n("on-back")}return(c,a)=>(i.openBlock(),i.createElementBlock("div",i.mergeProps({class:"vui-cascade"},r.value),[i.createElementVNode("div",hn,[t.canBack?(i.openBlock(),i.createElementBlock("div",gn,[i.createElementVNode("div",{class:"vui-cascade__back-btn",onClick:s},[i.renderSlot(c.$slots,"backBtn",i.normalizeProps(i.guardReactiveProps({back:s})),()=>[i.createVNode(i.unref(j),{icon:"ep:back"})],!0)])])):i.createCommentVNode("",!0),(i.openBlock(!0),i.createElementBlock(i.Fragment,null,i.renderList(c.cascade.options,l=>(i.openBlock(),i.createBlock(pn,{key:l.id||l.value,cascade:c.cascade,option:l,onOnClick:o},null,8,["cascade","option"]))),128)),i.createVNode(i.Transition,{class:"vui-cascade__fog-transition"},{default:i.withCtx(()=>[t.fog?(i.openBlock(),i.createElementBlock("div",mn)):i.createCommentVNode("",!0)]),_:1})])],16))}});const yn=F(vn,[["__scopeId","data-v-9a933cca"]]),_n={class:"vui-cascade-input__label"},bn={key:0,class:"vui-cascade-input__error"},kn=i.defineComponent({__name:"CascadeInput",props:{values:{},errorMsg:{},separator:{default:"/"}},emits:["on-click"],setup(e,{emit:n}){const t=e,r=i.computed(()=>t.values.join(t.separator));function o(){n("on-click")}return(s,c)=>(i.openBlock(),i.createElementBlock("div",{class:"vui-cascader__input",onClick:o},[i.createElementVNode("div",_n,i.toDisplayString(r.value),1),s.errorMsg?(i.openBlock(),i.createElementBlock("div",bn,i.toDisplayString(s.errorMsg),1)):i.createCommentVNode("",!0)]))}});const Cn=F(kn,[["__scopeId","data-v-8a6e07f2"]]),wn={class:"vui-cascader__dropdown-wrapper"},xn={class:"vui-cascader__dropdown"},Sn=i.defineComponent({__name:"Cascader",props:{modelValue:{},data:{},separator:{default:"/"},cascadesConfig:{},transform:{},reform:{}},emits:["update:modelValue"],setup(e,{emit:n}){const t=e,r=i.ref(null),o={value:"__ROOT_CASCADE__",title:"",options:t.data},s=i.ref(!1),c=i.ref(""),a=i.ref([]);y(o,0);const l=i.computed(()=>s.value?a.value:[]),u=i.ref([]);u.value=k(t.modelValue),i.provide("selectedOptions",u);const f=i.computed(()=>u.value.map(_=>_.title)),d=_=>{var h;return((h=a.value[a.value.length-1])==null?void 0:h.id)===_.id};function p(_){s.value=_,_||(u.value=k(t.modelValue))}i.onMounted(()=>{nt(r.value,m)});function g(){p(!0)}function m(){p(!1)}function v({cascade:_,optionParams:h}){if(u.value=u.value.slice(0,_.id),u.value[_.id]=h.option,h.last){n("update:modelValue",K(u.value)),i.nextTick(()=>{p(!1)});return}y(h.option)}function y(_,h){const b=h||a.value.length;h!==void 0&&(a.value=a.value.slice(0,h)),a.value.push(S(_,b))}function S(_,h){return{id:h,options:_.options||[]}}function C(){a.value.pop()}function k(_){var x,I;if(t.transform)return t.transform(_,S);const h=[],b=_;for(let w=0;w<b.length;w++){const Je=b[w],pe=$=>{var he;let O=$.find(B=>B.value===Je);if(O)return O;for(let B=0;B<$.length;B++)if((he=$[B].children)!=null&&he.length&&(O=pe($[B].children),O))return O},V=pe((x=a.value[w])==null?void 0:x.options);if(V)if(h.push(V),(I=V.options)!=null&&I.length)y(V,w+1);else if(w<b.length-1){c.value="Can`t display such a value";break}else w===b.length-1&&(c.value="");else{c.value="Can`t display such a value";break}}return h}function K(_){return t.reform?t.reform(_):_.map(h=>h.value)}return(_,h)=>(i.openBlock(),i.createElementBlock("div",{class:"vui-cascader",ref_key:"cascaderEl",ref:r},[i.createVNode(Cn,{values:f.value,separator:t.separator,onOnClick:g},null,8,["values","separator"]),i.createElementVNode("div",wn,[i.createElementVNode("div",xn,[i.createVNode(i.TransitionGroup,{tag:"div",mode:"in-out",name:"vui-cascader-transition"},{default:i.withCtx(()=>[(i.openBlock(!0),i.createElementBlock(i.Fragment,null,i.renderList(l.value,(b,x)=>(i.openBlock(),i.createBlock(yn,{key:b.id,cascade:b,padding:x,fog:!d(b),canBack:x>0,configs:t.cascadesConfig,onOnSelect:v,onOnBack:C},null,8,["cascade","padding","fog","canBack","configs"]))),128))]),_:1})])])],512))}});const Ge=F(Sn,[["__scopeId","data-v-47720ba2"]]),In=i.defineComponent({__name:"CollapseBody",props:{expanded:{type:Boolean},option:{},padding:{}},setup(e){const n=e,t=i.ref(null),r=i.ref(0);i.onMounted(()=>{var d,p;(d=t.value)==null||d.addEventListener("vui-collapse-expand-changed",o),r.value=((p=t.value)==null?void 0:p.offsetHeight)||0});function o(d){d.target!==t.value&&s()}function s(){r.value=void 0}function c(){var d;n.expanded?r.value=((d=t.value)==null?void 0:d.offsetHeight)||0:r.value=0}const a=i.computed(()=>(i.nextTick(()=>c()),n.expanded));function l(){var p;const d=new CustomEvent("vui-collapse-expand-changed",{bubbles:!0});(p=t.value)==null||p.dispatchEvent(d)}const u=i.computed(()=>A(({styles:d})=>{r.value!==void 0?a.value?(d.height=`${r.value}px`,d.opacity="1",l()):(d.height="0",d.opacity="0"):c()})),f=i.computed(()=>A(({styles:d})=>{d.paddingLeft=q(n.padding||"1rem")}));return(d,p)=>(i.openBlock(),i.createElementBlock("div",i.mergeProps({class:"vui-collapse-body"},u.value),[i.createElementVNode("div",i.mergeProps({class:"vui-collapse-body__content",ref_key:"collapseBodyEl",ref:t},f.value),[i.renderSlot(d.$slots,"default",{},void 0,!0)],16)],16))}});const Ke=F(In,[["__scopeId","data-v-1abca66d"]]),En={install:e=>{e.component("Cascader",Ge),e.component("CollapseBody",Ke)}};exports.Cascader=Ge;exports.CollapseBody=Ke;exports.createStyleClasses=A;exports.default=En;
