function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function i(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function u(t,n,e,o){if(t){const r=a(t,n,e,o);return t[0](r)}}function a(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function l(t,n,e,o,r,i,c){const s=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,i);if(s){const r=a(n,e,o,c);t.p(r,s)}}function f(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}function d(t,n,e=n){return t.set(e),n}let h,p=!1;function m(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function _(t,n){p?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const n=t.childNodes,e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let u=0;u<n.length;u++){const t=m(1,r+1,(t=>n[e[t]].claim_order),n[u].claim_order)-1;o[u]=e[t]+1;const i=t+1;e[i]=u,r=Math.max(i,r)}const i=[],c=[];let s=n.length-1;for(let u=e[r]+1;0!=u;u=o[u-1]){for(i.push(n[u-1]);s>=u;s--)c.push(n[s]);s--}for(;s>=0;s--)c.push(n[s]);i.reverse(),c.sort(((t,n)=>t.claim_order-n.claim_order));for(let u=0,a=0;u<c.length;u++){for(;a<i.length&&c[u].claim_order>=i[a].claim_order;)a++;const n=a<i.length?i[a]:null;t.insertBefore(c[u],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),n!==t.actual_end_child?t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling):n.parentNode!==t&&t.appendChild(n)}function g(t,n,e){p&&!e?_(t,n):(n.parentNode!==t||e&&n.nextSibling!==e)&&t.insertBefore(n,e||null)}function $(t){t.parentNode.removeChild(t)}function b(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function y(t){return document.createElement(t)}function x(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function w(){return v(" ")}function E(){return v("")}function k(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function N(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function A(t){return Array.from(t.childNodes)}function j(t,n,e,o,r=!1){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0});const i=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const i=t[o];if(n(i))return e(i),t.splice(o,1),r||(t.claim_info.last_index=o),i}for(let o=t.claim_info.last_index-1;o>=0;o--){const i=t[o];if(n(i))return e(i),t.splice(o,1),r?t.claim_info.last_index--:t.claim_info.last_index=o,i}return o()})();return i.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,i}function S(t,n,e,o){return j(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o?x(n):y(n)))}function O(t,n){return j(t,(t=>3===t.nodeType),(t=>{t.data=""+n}),(()=>v(n)),!0)}function B(t){return O(t," ")}function C(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function L(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function M(t,n,e){t.classList[e?"add":"remove"](n)}function I(t){h=t}function P(){if(!h)throw new Error("Function called outside component initialization");return h}function T(t){P().$$.on_mount.push(t)}function q(t){P().$$.after_update.push(t)}function z(t,n){P().$$.context.set(t,n)}const F=[],D=[],G=[],H=[],J=Promise.resolve();let K=!1;function Q(t){G.push(t)}let R=!1;const U=new Set;function V(){if(!R){R=!0;do{for(let t=0;t<F.length;t+=1){const n=F[t];I(n),W(n.$$)}for(I(null),F.length=0;D.length;)D.pop()();for(let t=0;t<G.length;t+=1){const n=G[t];U.has(n)||(U.add(n),n())}G.length=0}while(F.length);for(;H.length;)H.pop()();K=!1,R=!1,U.clear()}}function W(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(Q)}}const X=new Set;let Y;function Z(){Y={r:0,c:[],p:Y}}function tt(){Y.r||r(Y.c),Y=Y.p}function nt(t,n){t&&t.i&&(X.delete(t),t.i(n))}function et(t,n,e,o){if(t&&t.o){if(X.has(t))return;X.add(t),Y.c.push((()=>{X.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function ot(t,n){const e={},o={},r={$$scope:1};let i=t.length;for(;i--;){const c=t[i],s=n[i];if(s){for(const t in c)t in s||(o[t]=1);for(const t in s)r[t]||(e[t]=s[t],r[t]=1);t[i]=s}else for(const t in c)r[t]=1}for(const c in o)c in e||(e[c]=void 0);return e}function rt(t){return"object"==typeof t&&null!==t?t:{}}function it(t){t&&t.c()}function ct(t,n){t&&t.l(n)}function st(t,n,o,c){const{fragment:s,on_mount:u,on_destroy:a,after_update:l}=t.$$;s&&s.m(n,o),c||Q((()=>{const n=u.map(e).filter(i);a?a.push(...n):r(n),t.$$.on_mount=[]})),l.forEach(Q)}function ut(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function at(t,n){-1===t.$$.dirty[0]&&(F.push(t),K||(K=!0,J.then(V)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function lt(n,e,i,c,s,u,a=[-1]){const l=h;I(n);const f=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:e.context||[]),callbacks:o(),dirty:a,skip_bound:!1};let d=!1;if(f.ctx=i?i(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return f.ctx&&s(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),d&&at(n,t)),e})):[],f.update(),d=!0,r(f.before_update),f.fragment=!!c&&c(f.ctx),e.target){if(e.hydrate){p=!0;const t=A(e.target);f.fragment&&f.fragment.l(t),t.forEach($)}else f.fragment&&f.fragment.c();e.intro&&nt(n.$$.fragment),st(n,e.target,e.anchor,e.customElement),p=!1,V()}I(l)}class ft{$destroy(){ut(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const dt=[];function ht(n,e=t){let o;const r=[];function i(t){if(c(n,t)&&(n=t,o)){const t=!dt.length;for(let e=0;e<r.length;e+=1){const t=r[e];t[1](),dt.push(t,n)}if(t){for(let t=0;t<dt.length;t+=2)dt[t][0](dt[t+1]);dt.length=0}}}return{set:i,update:function(t){i(t(n))},subscribe:function(c,s=t){const u=[c,s];return r.push(u),1===r.length&&(o=e(i)||t),c(n),()=>{const t=r.indexOf(u);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}export{T as A,n as B,ht as C,M as D,_ as E,t as F,s as G,u as H,l as I,Q as J,x as K,L,k as M,b as N,r as O,d as P,f as Q,ft as S,A as a,N as b,S as c,$ as d,y as e,g as f,O as g,C as h,lt as i,it as j,w as k,E as l,ct as m,B as n,st as o,ot as p,rt as q,Z as r,c as s,v as t,et as u,ut as v,tt as w,nt as x,z as y,q as z};
