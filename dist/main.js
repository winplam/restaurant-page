!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const a=(e,...t)=>{t.forEach(t=>{const n=document.createElement(t[0]),a=document.getElementsByClassName(e);t[1]||"string"!=typeof t[2]?t[1]&&"string"==typeof t[2]?(r(n,t[1]),n.innerHTML+=t[2],a[a.length-1].appendChild(n)):t[1]||"object"!=typeof t[2]?t[1]&&"object"==typeof t[2]&&(r(n,t[2]),n.innerHTML+=t[1],document.getElementById("content").appendChild(n)):(r(n,t[2]),a[a.length-1].appendChild(n)):(n.innerHTML+=t[2],a[a.length-1].appendChild(n))})},o=(e,t,n,...o)=>{const r=document.createElement("div");r.className=t,n&&(r.id=n);const c=document.querySelectorAll(e);c[c.length-1].appendChild(r),a(t,...o)},r=(e,t)=>{Object.entries(t).forEach(t=>e.setAttribute(...t))};a("content",["label","About",{class:"tab",for:"tab-top",id:"about-btn"}],["label","Home",{class:"tab",for:"tab-front",id:"home-btn"}],["label","Menu",{class:"tab",for:"tab-bottom",id:"menu-btn"}],["label","Contact",{class:"tab",for:"tab-back",id:"contact-btn"}],["input"," ",{type:"radio",name:"tabs",id:"tab-top"}],["input"," ",{type:"radio",name:"tabs",id:"tab-front"}],["input"," ",{type:"radio",name:"tabs",id:"tab-bottom"}],["input"," ",{type:"radio",name:"tabs",id:"tab-back"}]),((e,t,n)=>{const a=document.createElement("div");t&&(a.className=t),n&&(a.id=n),document.getElementById(e).appendChild(a)})("content","cube"),o(".cube","tab-content","",["h1","","About Us"],["p","","Whether you're looking for a meal to die for, or just a place to have a quick drink, our experienced virtual staff are here to cater to you. Our virtual bar offers a variety of liquor, and beer, from both, around the world, or your favorite local brew masters. Be sure to pair your favorite dish, with something from our extensive wine list as well!"],["img","",{src:"img/about.jpg",alt:"About Our Restaurant",width:"450px",id:"about-img"}]),o(".cube","tab-content","",["h1","","Le Gourmet Virtuel French Cuisine"],["p","","Bienvenue! Le Gourmet Virtuel, voted The Odin Projects’s best virtual restaurant year after year, welcomes you for breakfast, lunch, or dinner at our casual, ocean view restaurant at the city of your choice. Part restaurant, part wine boutique, part French Bakery, Le Gourmet Virtuel combines the elegance of an old world café with the casual ambiance of a neighborhood eatery. It’s sunlit space is perfect for an early morning espresso with a croissant or a leisurely lunch of shared dishes."],["img","",{src:"img/home.jpg",alt:"French Menu Item #0",width:"450px",id:"home-img"}]),document.getElementById("home-btn").classList.add("selected-tab"),document.querySelectorAll(".tab-content")[1].classList.add("cube-active"),o(".cube","tab-content","menu",["h1",{id:"le-menu"},"Le Menu"]),o(".tab-content","menu-images","",["img","",{src:"img/menu1.jpg",alt:"French Menu Item #1",width:"200px",height:"200px",class:"menu-img"}],["img","",{src:"img/menu2.jpg",alt:"French Menu Item #2",width:"200px",height:"200px",class:"menu-img"}],["img","",{src:"img/menu3.jpg",alt:"French Menu Item #3",width:"200px",height:"200px",class:"menu-img"}],["img","",{src:"img/menu4.jpg",alt:"French Menu Item #4",width:"200px",height:"200px",class:"menu-img"}]),o(".cube","tab-content","contact-page",["h1","","Contact Page"],["p","","Don't call us, we'll call You"]),o(".tab-content","map-container","",["img","",{src:"img/map.jpg",alt:"Restaurant Map",width:"400px",class:"map-img"}]);(()=>{const e=document.querySelectorAll(".tab"),t=document.querySelectorAll(".tab-content"),n=t=>{e.forEach(e=>e.classList.remove("selected-tab")),document.getElementById(t).classList.add("selected-tab")},a=e=>{t.forEach(e=>e.classList.remove("cube-active")),t[e].classList.add("cube-active")};e.forEach(e=>e.addEventListener("click",e=>{o(e.target.id)}));const o=e=>{switch(e){case"about-btn":n(e),a(0);break;case"home-btn":n(e),a(1);break;case"menu-btn":n(e),a(2);break;case"contact-btn":n(e),a(3)}}})(),(()=>{console.log("making");document.getElementById("content").appendChild((()=>document.createRange().createContextualFragment('\n    <footer><a href="https://github.com/winplam/restaurant-page/">GitHub</a></footer>\n'))())})()}]);