var app_container;(()=>{"use strict";var e,r,t,n,o,a,i={198:(e,r,t)=>{var n={"./Header":()=>Promise.all([t.e(416),t.e(920),t.e(221)]).then((()=>()=>t(221)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>a})},710:(e,r,t)=>{var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof clothes)return e();t.l("https://ifrainmedinagarcia.github.io/MFE1_devschool/",(t=>{if("undefined"!=typeof clothes)return e();var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+o+": "+a+")",n.name="ScriptExternalLoadError",n.type=o,n.request=a,r(n)}),"clothes")})).then((()=>clothes))}},f={};function u(e){var r=f[e];if(void 0!==r)return r.exports;var t=f[e]={id:e,exports:{}};return i[e](t,t.exports,u),t.exports}u.m=i,u.c=f,u.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return u.d(r,{a:r}),r},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,u.t=function(t,n){if(1&n&&(t=this(t)),8&n)return t;if("object"==typeof t&&t){if(4&n&&t.__esModule)return t;if(16&n&&"function"==typeof t.then)return t}var o=Object.create(null);u.r(o);var a={};e=e||[null,r({}),r([]),r(r)];for(var i=2&n&&t;"object"==typeof i&&!~e.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((e=>a[e]=()=>t[e]));return a.default=()=>t,u.d(o,a),o},u.d=(e,r)=>{for(var t in r)u.o(r,t)&&!u.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},u.f={},u.e=e=>Promise.all(Object.keys(u.f).reduce(((r,t)=>(u.f[t](e,r),r)),[])),u.u=e=>e+"."+{221:"efab182d821052fd2860",294:"1dd3400193dff8be95a7",416:"3249fdb3163438bc7183",920:"8f65908b972ca3a7949d",935:"d57e8c44e027f95b329b",936:"024c5b509cbe5e020184",957:"dbf258926bb97dda0b99"}[e]+".js",u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t={},n="mfe1:",u.l=(e,r,o,a)=>{if(t[e])t[e].push(r);else{var i,f;if(void 0!==o)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var c=l[s];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")==n+o){i=c;break}}i||(f=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.setAttribute("data-webpack",n+o),i.src=e),t[e]=[r];var d=(r,n)=>{i.onerror=i.onload=null,clearTimeout(p);var o=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),f&&document.head.appendChild(i)}},u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o={957:[957]},a={957:["default","./App",710]},u.f.remotes=(e,r)=>{u.o(o,e)&&o[e].forEach((e=>{var t=u.R;t||(t=[]);var n=a[e];if(!(t.indexOf(n)>=0)){if(t.push(n),n.p)return r.push(n.p);var o=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+n[1]+'" from '+n[2]),u.m[e]=()=>{throw r},n.p=0},i=(e,t,a,i,f,u)=>{try{var l=e(t,a);if(!l||!l.then)return f(l,i,u);var s=l.then((e=>f(e,i)),o);if(!u)return s;r.push(n.p=s)}catch(e){o(e)}},f=(e,r,o)=>i(r.get,n[1],t,0,l,o),l=r=>{n.p=1,u.m[e]=e=>{e.exports=r()}};i(u,n[2],0,0,((e,r,t)=>e?i(u.I,n[0],0,e,f,t):o()),1)}}))},(()=>{u.S={};var e={},r={};u.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];u.o(u.S,t)||(u.S[t]={});var a=u.S[t],i="mfe1",f=(e,r,t,n)=>{var o=a[e]=a[e]||{},f=o[r];(!f||!f.loaded&&(!n!=!f.eager?n:i>f.from))&&(o[r]={get:t,from:i,eager:!!n})},l=[];return"default"===t&&(f("react-dom","18.2.0",(()=>Promise.all([u.e(935),u.e(416)]).then((()=>()=>u(935))))),f("react-router-dom","6.3.0",(()=>Promise.all([u.e(936),u.e(416)]).then((()=>()=>u(936))))),f("react","18.2.0",(()=>u.e(294).then((()=>()=>u(294))))),(e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,"undefined"!=typeof console&&console.warn&&console.warn(r);var r};try{var o=u(710);if(!o)return;var a=e=>e&&e.init&&e.init(u.S[t],n);if(o.then)return l.push(o.then(a,r));var i=a(o);i&&i.then&&l.push(i.catch(r))}catch(e){r(e)}})()),l.length?e[t]=Promise.all(l).then((()=>e[t]=1)):e[t]=1}}})(),(()=>{var e;u.g.importScripts&&(e=u.g.location+"");var r=u.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),u.p=e})(),(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=(r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=r[n],a=(typeof o)[0];if(n>=t.length)return"u"==a;var i=t[n],f=(typeof i)[0];if(a!=f)return"o"==a&&"n"==f||"s"==f||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},t=e=>{var r=e[0],n="";if(1===e.length)return"*";if(r+.5){n+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,n+="u"==(typeof(f=e[a]))[0]?"-":(o>0?".":"")+(o=2,f);return n}var i=[];for(a=1;a<e.length;a++){var f=e[a];i.push(0===f?"not("+u()+")":1===f?"("+u()+" || "+u()+")":2===f?i.pop()+" "+i.pop():t(f))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},n=(r,t)=>{if(0 in r){t=e(t);var o=r[0],a=o<0;a&&(o=-o-1);for(var i=0,f=1,u=!0;;f++,i++){var l,s,c=f<r.length?(typeof r[f])[0]:"";if(i>=t.length||"o"==(s=(typeof(l=t[i]))[0]))return!u||("u"==c?f>o&&!a:""==c!=a);if("u"==s){if(!u||"u"!=c)return!1}else if(u)if(c==s)if(f<=o){if(l!=r[f])return!1}else{if(a?l>r[f]:l<r[f])return!1;l!=r[f]&&(u=!1)}else if("s"!=c&&"n"!=c){if(a||f<=o)return!1;u=!1,f--}else{if(f<=o||s<c!=a)return!1;u=!1}else"s"!=c&&"n"!=c&&(u=!1,f--)}}var d=[],p=d.pop.bind(d);for(i=1;i<r.length;i++){var h=r[i];d.push(1==h?p()|p():2==h?p()&p():h?n(h,t):!p())}return!!p()},o=(e,o,i,f)=>{var u=((e,t)=>{var n=e[t];return Object.keys(n).reduce(((e,t)=>!e||!n[e].loaded&&r(e,t)?t:e),0)})(e,i);return n(f,u)||"undefined"!=typeof console&&console.warn&&console.warn(((e,r,n,o)=>"Unsatisfied version "+n+" from "+(n&&e[r][n].from)+" of shared singleton module "+r+" (required "+t(o)+")")(e,i,u,f)),a(e[i][u])},a=e=>(e.loaded=1,e.get()),i=e=>function(r,t,n,o){var a=u.I(r);return a&&a.then?a.then(e.bind(e,r,u.S[r],t,n,o)):e(r,u.S[r],t,n,o)},f=i(((e,r,t,n,a)=>r&&u.o(r,t)?o(r,0,t,n):a())),l=i(((e,t,o,i,f)=>{var l=t&&u.o(t,o)&&((e,t,o)=>{var a=e[t];return(t=Object.keys(a).reduce(((e,t)=>!n(o,t)||e&&!r(e,t)?e:t),0))&&a[t]})(t,o,i);return l?a(l):f()})),s={},c={416:()=>f("default","react",[1,18,2,0],(()=>u.e(294).then((()=>()=>u(294))))),159:()=>l("default","react-router-dom",[1,6,3,0],(()=>u.e(936).then((()=>()=>u(936)))))},d={416:[416],920:[159]};u.f.consumes=(e,r)=>{u.o(d,e)&&d[e].forEach((e=>{if(u.o(s,e))return r.push(s[e]);var t=r=>{s[e]=0,u.m[e]=t=>{delete u.c[e],t.exports=r()}},n=r=>{delete s[e],u.m[e]=t=>{throw delete u.c[e],r}};try{var o=c[e]();o.then?r.push(s[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))}})(),(()=>{var e={836:0};u.f.j=(r,t)=>{var n=u.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(416|957)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=u.p+u.u(r),i=new Error;u.l(a,(t=>{if(u.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,i,f]=t,l=0;if(a.some((r=>0!==e[r]))){for(n in i)u.o(i,n)&&(u.m[n]=i[n]);f&&f(u)}for(r&&r(t);l<a.length;l++)o=a[l],u.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkmfe1=self.webpackChunkmfe1||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),u.nc=void 0;var l=u(198);app_container=l})();
//# sourceMappingURL=remoteEntry.js.map