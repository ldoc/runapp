(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}})();function a(){}function N(e){return e()}function O(){return Object.create(null)}function _(e){e.forEach(N)}function P(e){return typeof e=="function"}function S(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function M(e){return Object.keys(e).length===0}function B(e,t,n){e.insertBefore(t,n||null)}function L(e){e.parentNode&&e.parentNode.removeChild(e)}function C(e){return document.createElement(e)}function I(e){return Array.from(e.childNodes)}let $;function d(e){$=e}const l=[],E=[],m=[],k=[],q=Promise.resolve();let g=!1;function F(){g||(g=!0,q.then(j))}function y(e){m.push(e)}const p=new Set;let f=0;function j(){if(f!==0)return;const e=$;do{try{for(;f<l.length;){const t=l[f];f++,d(t),H(t.$$)}}catch(t){throw l.length=0,f=0,t}for(d(null),l.length=0,f=0;E.length;)E.pop()();for(let t=0;t<m.length;t+=1){const n=m[t];p.has(n)||(p.add(n),n())}m.length=0}while(l.length);for(;k.length;)k.pop()();g=!1,p.clear(),d(e)}function H(e){if(e.fragment!==null){e.update(),_(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(y)}}const K=new Set;function R(e,t){e&&e.i&&(K.delete(e),e.i(t))}function T(e,t,n,i){const{fragment:r,after_update:c}=e.$$;r&&r.m(t,n),i||y(()=>{const s=e.$$.on_mount.map(N).filter(P);e.$$.on_destroy?e.$$.on_destroy.push(...s):_(s),e.$$.on_mount=[]}),c.forEach(y)}function U(e,t){const n=e.$$;n.fragment!==null&&(_(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function z(e,t){e.$$.dirty[0]===-1&&(l.push(e),F(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function D(e,t,n,i,r,c,s,A=[-1]){const h=$;d(e);const o=e.$$={fragment:null,ctx:[],props:c,update:a,not_equal:r,bound:O(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:O(),dirty:A,skip_bound:!1,root:t.target||h.$$.root};s&&s(o.root);let b=!1;if(o.ctx=n?n(e,t.props||{},(u,x,...w)=>{const v=w.length?w[0]:x;return o.ctx&&r(o.ctx[u],o.ctx[u]=v)&&(!o.skip_bound&&o.bound[u]&&o.bound[u](v),b&&z(e,u)),x}):[],o.update(),b=!0,_(o.before_update),o.fragment=i?i(o.ctx):!1,t.target){if(t.hydrate){const u=I(t.target);o.fragment&&o.fragment.l(u),u.forEach(L)}else o.fragment&&o.fragment.c();t.intro&&R(e.$$.fragment),T(e,t.target,t.anchor,t.customElement),j()}d(h)}class G{$destroy(){U(this,1),this.$destroy=a}$on(t,n){if(!P(n))return a;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!M(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function J(e){let t;return{c(){t=C("main"),t.innerHTML="<div>RUNAPP</div>"},m(n,i){B(n,t,i)},p:a,i:a,o:a,d(n){n&&L(t)}}}class Q extends G{constructor(t){super(),D(this,t,null,J,S,{})}}new Q({target:document.getElementById("app")});
