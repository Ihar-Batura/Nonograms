(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>Y});var r=t(601),i=t.n(r),a=t(314),l=t.n(a),o=t(417),c=t.n(o),s=new URL(t(821),t.b),d=new URL(t(279),t.b),p=new URL(t(866),t.b),m=new URL(t(826),t.b),u=new URL(t(891),t.b),g=new URL(t(121),t.b),f=new URL(t(85),t.b),h=new URL(t(387),t.b),v=new URL(t(186),t.b),b=new URL(t(395),t.b),x=new URL(t(82),t.b),y=new URL(t(790),t.b),w=new URL(t(532),t.b),L=new URL(t(510),t.b),k=new URL(t(932),t.b),S=new URL(t(689),t.b),T=new URL(t(794),t.b),E=new URL(t(758),t.b),z=new URL(t(721),t.b),q=new URL(t(183),t.b),M=l()(i()),N=c()(s),$=c()(d),H=c()(p),R=c()(m),C=c()(u),I=c()(g),U=c()(f),A=c()(h),P=c()(v),_=c()(b),j=c()(x),O=c()(y),J=c()(w),D=c()(L),B=c()(k),F=c()(S),G=c()(T),W=c()(E),Q=c()(z),X=c()(q);M.push([n.id,`:root {\n  /* colors */\n  --clr-text-light: #e2f0ed;\n  --clr-text-light-hover: #ecc5bd;\n  --clr-body-light: #f5edeb;\n  --clr-body-text-light: #420c0d;\n  --clr-header-footer-light: #3d2d66;\n}\n\nhtml {\n  box-sizing: border-box;\n  scroll-behavior: smooth;\n  font-size: 10px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\n/* Reset margins */\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nfigure,\npicture {\n  margin: 0;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n  font-weight: 400;\n}\n\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: 'Inter', sans-serif;\n  font-optical-sizing: auto;\n  font-style: normal;\n  color: var(--clr-text-light);\n  background-color: var(--clr-body-light);\n  overflow-x: hidden;\n}\n\n.unscroll {\n  overflow: hidden;\n}\n\n.header,\n.footer {\n  background-color: var(--clr-header-footer-light);\n}\n\n.wrapper {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n\n.header-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 0;\n}\n\nh1 {\n  font-size: 2.9rem;\n  margin: 10px 0;\n}\n\nh1 > a {\n  text-decoration: none;\n  color: var(--clr-text-light);\n}\n\n.navigation {\n  list-style: none;\n  font-size: 1.7rem;\n  display: flex;\n  gap: 15px;\n  z-index: 100;\n}\n\n.navigation li > a {\n  text-decoration: none;\n  color: var(--clr-text-light);\n  transition: all 0.6s ease-out;\n}\n\n.navigation li > a:hover {\n  color: var(--clr-text-light-hover);\n}\n\n/* burger menu */\n\n.burger-menu {\n  display: none;\n  height: 35px;\n  width: 35px;\n  margin-left: auto;\n  position: relative;\n}\n\n.burger-menu span {\n  height: 2px;\n  width: 100%;\n  background-color: var(--clr-text-light);\n  border-radius: 10px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transition: 0.3s ease;\n}\n\n.burger-menu span:nth-child(1) {\n  top: 25%;\n}\n\n.burger-menu span:nth-child(3) {\n  top: 75%;\n}\n\n/* active burger */\n.burger-menu.active span:nth-child(1) {\n  top: 50%;\n  transform: translate(-50%, -50%) rotate(45deg);\n}\n.burger-menu.active span:nth-child(2) {\n  opacity: 0;\n}\n.burger-menu.active span:nth-child(3) {\n  top: 50%;\n  transform: translate(-50%, -50%) rotate(-45deg);\n}\n\n/* main */\n#levels {\n  padding: 40px 10px;\n}\n\nh2 {\n  font-size: 2.7rem;\n  font-weight: 600;\n  color: var(--clr-body-text-light);\n  text-align: center;\n  margin-bottom: 25px;\n}\n\n.level {\n  display: flex;\n  flex-direction: column;\n  width: 400px;\n  margin: 0 auto;\n  gap: 15px;\n  margin-top: 40px;\n}\n\n.level > p {\n  font-size: 1.5rem;\n  font-weight: 500;\n  width: 400px;\n  color: var(--clr-body-light);\n  background-color: var(--clr-header-footer-light);\n  text-align: center;\n  padding: 10px 0;\n  border-radius: 5px;\n}\n\n.levels-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n}\n\n.levels-container > a {\n  text-decoration: none;\n}\n\n.level-card {\n  text-align: center;\n}\n\n.level-img {\n  width: 72px;\n  height: 72px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.img-smile {\n  background-image: url(${N});\n}\n.img-dog {\n  background-image: url(${$});\n}\n.img-scull {\n  background-image: url(${H});\n}\n.img-tower {\n  background-image: url(${R});\n}\n.img-plane {\n  background-image: url(${C});\n}\n.img-question {\n  background-image: url(${I});\n}\n.img-note {\n  background-image: url(${U});\n}\n.img-tv {\n  background-image: url(${A});\n}\n.img-snail {\n  background-image: url(${P});\n}\n.img-tea {\n  background-image: url(${_});\n}\n.img-clover {\n  background-image: url(${j});\n}\n.img-duck {\n  background-image: url(${O});\n}\n.img-mouse {\n  background-image: url(${J});\n}\n.img-giraffes {\n  background-image: url(${D});\n}\n.img-skittles {\n  background-image: url(${B});\n}\n\n.level-card > p {\n  margin-top: 10px;\n  font-size: 2rem;\n  font-weight: 600;\n\n  color: var(--clr-body-text-light);\n}\n\np > span {\n  font-size: 1.2rem;\n}\n\n/* game*/\n\n.game-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.game-field__container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 600px;\n  height: 500px;\n}\n\n.timer {\n  color: red;\n  font-size: 1.7rem;\n  font-weight: 500;\n  text-align: center;\n}\n\n.game-buttons {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\n.game-btn {\n  width: 170px;\n  font-family: 'Inter', sans-serif;\n  font-size: 1.5rem;\n  font-weight: 400;\n  border: none;\n  border-radius: 5px;\n  background-color: var(--clr-header-footer-light);\n  color: var(--clr-text-light);\n  padding: 7px;\n  cursor: pointer;\n  transition: all 0.5s ease;\n}\n\n.game-btn:hover {\n  color: var(--clr-text-light-hover);\n}\n\n.game-field {\n  border-bottom: 2px solid black;\n  border-right: 2px solid black;\n}\n\n.row-top {\n  display: flex;\n}\n\n.row-top .row-prompt {\n  border: none;\n}\n\n.top-prompt {\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n  color: black;\n  font-size: 16px;\n  font-weight: 500;\n  width: 40px;\n  min-height: 60px;\n  border: 2px solid black;\n  border-right: 1px;\n}\n\nspan.prompt {\n  text-align: center;\n}\n\n.row-cells {\n  display: flex;\n}\n\n.cell {\n  color: black;\n  font-size: 1px;\n  width: 40px;\n  height: 40px;\n  border: 1px solid black;\n}\n\n.cell.fill {\n  background-color: black;\n}\n\n.cell.cross {\n  background-image: url(${F});\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.row-border {\n  border-top: 2px solid black;\n}\n\n.cell-border {\n  border-left: 2px solid black;\n}\n\n.row-prompt {\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  color: black;\n  font-size: 16px;\n  font-weight: 500;\n  min-width: 60px;\n  height: 40px;\n  text-align: end;\n  border: 2px solid black;\n  border-bottom: 1px;\n}\n\n/* Для большой игры */\n.game-field.big-field .row-top > *,\n.game-field.big-field .row-cells > * {\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.big-field .row-top .top-prompt {\n  width: 25px;\n}\n\n.big-field .row-cells .row-prompt {\n  height: 25px;\n}\n\n.big-field .row-cells .cell {\n  width: 25px;\n  height: 25px;\n  font-size: 1px;\n}\n\n/* table */\n#table {\n  padding: 20px 0 30px;\n}\n\n.table-container {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  max-width: 650px;\n  margin: 0 auto;\n  padding: 10px;\n}\n\n.table-score {\n  border-spacing: 0;\n  width: 100%;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);\n}\n\n.table-caption {\n  font-size: 2.7rem;\n  font-weight: 600;\n  color: var(--clr-body-text-light);\n  margin: 30px 0;\n}\n\nth {\n  font-size: 1.9rem;\n  font-weight: 400;\n  padding: 12px 15px;\n  background-color: var(--clr-header-footer-light);\n  text-align: start;\n}\n\ntd {\n  font-size: 1.8rem;\n  padding: 12px 15px;\n  background-color: var(--clr-header-footer-light);\n  text-align: start;\n}\n\ntr > td {\n  font-size: 1.6rem;\n  font-weight: 600;\n  padding: 8px 15px;\n  height: 35px;\n  background-color: var(--clr-body-light);\n  color: var(--clr-body-text-light);\n}\n\ntr:nth-child(2n) > td {\n  background-color: var(--clr-text-light);\n}\n\n/* footer */\n.footer-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 0;\n  height: 68px;\n}\n\n.footer-container p {\n  font-size: 1.7rem;\n}\n\n.contacts-container {\n  display: flex;\n}\n\n.contacts-container > a {\n  text-decoration: none;\n}\n\n.contact-img {\n  width: 35px;\n  height: 35px;\n  margin-left: 7px;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.img-git {\n  background-image: url(${G});\n}\n\n.img-discord {\n  background-image: url(${W});\n}\n\n.img-email {\n  background-image: url(${Q});\n}\n\n/* MODAL WINDOW*/\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 200;\n  padding: 15px;\n  display: none;\n}\n\n.show-modal {\n  display: block;\n}\n\n.modal-window {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  width: 440px;\n  background-color: var(--clr-text-light);\n  border-radius: 5px;\n  padding: 50px 40px;\n}\n\n.modal-img {\n  width: 70px;\n  height: 70px;\n  background-image: url(${X});\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  margin: 15px auto 30px;\n}\n\n.modal-btn {\n  margin: 0 auto;\n}\n\n@media (max-width: 700px) {\n  .navigation {\n    position: absolute;\n    top: 75px;\n    left: 100%;\n    background-color: var(--clr-header-footer-light);\n    display: block;\n    margin: 0;\n    width: 100%;\n    height: 100vh;\n    padding: 40px 20px 0;\n    text-align: center;\n    font-size: 2rem;\n    transition: 0.7s ease;\n  }\n\n  .navigation > li {\n    margin-bottom: 30px;\n    font-size: 2.5rem;\n  }\n\n  .burger-menu {\n    display: block;\n  }\n\n  .header-container.active .navigation {\n    transform: translateX(-100%);\n  }\n\n  h2 {\n    font-size: 2.2rem;\n  }\n\n  .level {\n    width: 315px;\n  }\n\n  .level > p {\n    font-size: 1.2rem;\n    font-weight: 400;\n    width: 315px;\n  }\n\n  p > span {\n    font-size: 1rem;\n  }\n\n  .level-img {\n    width: 55px;\n    height: 55px;\n  }\n\n  .level-card > p {\n    font-size: 1.5rem;\n    font-weight: 500;\n\n    color: var(--clr-body-text-light);\n  }\n\n  .game-container {\n    flex-direction: column;\n  }\n\n  .table-caption {\n    font-size: 2.2rem;\n  }\n  th {\n    font-size: 1.7rem;\n  }\n\n  td {\n    font-size: 1.5rem;\n  }\n  tr > td {\n    padding: 6px 15px;\n    height: 30px;\n  }\n}\n\n@media (max-width: 500px) {\n  h2 {\n    font-size: 1.8rem;\n  }\n\n  .footer-container p {\n    font-size: 1.5rem;\n  }\n\n  .contact-img {\n    width: 25px;\n    height: 25px;\n  }\n\n  .table-container {\n    padding: 0;\n  }\n\n  .table-caption {\n    font-size: 1.8rem;\n  }\n  th {\n    font-size: 1.4rem;\n  }\n\n  td {\n    font-size: 1.2rem;\n  }\n  tr > td {\n    padding: 6px 15px;\n    height: 28px;\n    font-weight: 400;\n  }\n\n  .game-field .row-top > *,\n  .game-field .row-cells > * {\n    font-size: 14px;\n    font-weight: 400;\n  }\n\n  .game-field .cell {\n    font-size: 1px;\n  }\n\n  .row-top .top-prompt {\n    width: 25px;\n  }\n\n  .row-cells .row-prompt {\n    height: 25px;\n  }\n\n  .row-cells .cell {\n    width: 25px;\n    height: 25px;\n  }\n\n  .modal-window {\n    width: 100%;\n    max-width: 400px;\n    padding: 30px 20px;\n  }\n}\n\n/*Sound btn*/\n.sound-btn__text {\n  min-width: 22px;\n  text-align: center;\n}\n`,""]);const Y=M},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,a){"string"==typeof n&&(n=[[null,n,void 0]]);var l={};if(r)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(l[c]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);r&&l[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},l=[],o=0;o<n.length;o++){var c=n[o],s=r.base?c[0]+r.base:c[0],d=a[s]||0,p="".concat(s," ").concat(d);a[s]=d+1;var m=t(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var g=i(u,r);r.byIndex=o,e.splice(o,0,{identifier:p,updater:g,references:1})}l.push(p)}return l}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var a=r(n=n||[],i=i||{});return function(n){n=n||[];for(var l=0;l<a.length;l++){var o=t(a[l]);e[o].references--}for(var c=r(n,i),s=0;s<a.length;s++){var d=t(a[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},758:(n,e,t)=>{n.exports=t.p+"c7c09b7073775b59e6d8.png"},794:(n,e,t)=>{n.exports=t.p+"50c0b4c2f54d900c9048.png"},721:(n,e,t)=>{n.exports=t.p+"2e3870890d3c8142e6bf.png"},82:(n,e,t)=>{n.exports=t.p+"062cb51d7a0d73723481.png"},279:(n,e,t)=>{n.exports=t.p+"2908320742f1cc000133.png"},790:(n,e,t)=>{n.exports=t.p+"c5b4d52c7f5d40082d54.png"},510:(n,e,t)=>{n.exports=t.p+"d243496f058c53573a51.png"},532:(n,e,t)=>{n.exports=t.p+"508642d1f6fe4e912406.png"},85:(n,e,t)=>{n.exports=t.p+"6ad3e9dbc9f82207b8ac.png"},891:(n,e,t)=>{n.exports=t.p+"341c4c44e9ad8f4162cb.png"},121:(n,e,t)=>{n.exports=t.p+"f9cf1703a82cfbb997ce.png"},866:(n,e,t)=>{n.exports=t.p+"2a775282befba012ea78.png"},932:(n,e,t)=>{n.exports=t.p+"26952fe4f143b4b0fa02.png"},821:(n,e,t)=>{n.exports=t.p+"f612b031508c849b966a.png"},186:(n,e,t)=>{n.exports=t.p+"9f7bffb04f23ce26f9f3.png"},395:(n,e,t)=>{n.exports=t.p+"ef9319ae9071b2b0a6e6.png"},826:(n,e,t)=>{n.exports=t.p+"87918f73d532cf40e242.png"},387:(n,e,t)=>{n.exports=t.p+"01ae2d32a5db4d0687f6.png"},183:(n,e,t)=>{n.exports=t.p+"59e5261d125057e42160.png"},689:(n,e,t)=>{n.exports=t.p+"994361768f0fa86f0d6a.svg"}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&(!n||!/^http(s?):/.test(n));)n=r[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r=t(72),i=t.n(r),a=t(825),l=t.n(a),o=t(659),c=t.n(o),s=t(56),d=t.n(s),p=t(540),m=t.n(p),u=t(113),g=t.n(u),f=t(208),h={};h.styleTagTransform=g(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=l(),h.insertStyleElement=m(),i()(f.A,h),f.A&&f.A.locals&&f.A.locals;const v=document.querySelector("body"),b=document.createElement("header");b.className="header",b.innerHTML='\n<div class="wrapper">\n        <div class="header-container">\n          <h1><a href="./index.html">Nonograms</a></h1>\n          <div class="burger-menu">\n            <span></span>\n            <span></span>\n            <span></span>\n          </div>\n          <nav>\n            <ul class="navigation">\n              <li><a href="#levels">Select level</a></li>\n              <li><a class="random-game" href="#game">Start random</a></li>\n              <li><a href="#table">Score table</a></li>\n              <li><a class="theme-btn" href="#">Change theme</a></li>\n            </ul>\n          </nav>\n        </div>\n      </div>\n',v.appendChild(b);const x=document.createElement("main");x.innerHTML='\n<div class="wrapper">\n        <section id="levels">\n          <h2>Choose a level for the game:</h2>\n          <div class="level">\n            <p>Easy <span>(5x5)</span></p>\n            <div class="levels-container">\n              <a id="4" href="#game">\n                <div class="level-card">\n                  <div class="level-img img-smile"></div>\n                  <p>smile</p>\n                </div>\n              </a>\n              <a id="1" href="#game">\n                <div class="level-card">\n                  <div class="level-img img-dog"></div>\n                  <p>dog</p>\n                </div>\n              </a>\n              <a id="5" href="#game">\n                <div class="level-card">\n                  <div class="level-img img-scull"></div>\n                  <p>scull</p>\n                </div>\n              </a>\n              <a id="3" href="#game">\n                <div class="level-card">\n                  <div class="level-img img-tower"></div>\n                  <p>tower</p>\n                </div>\n              </a>\n              <a id="2" href="#game">\n                <div class="level-card">\n                  <div class="level-img img-plane"></div>\n                  <p>plane</p>\n                </div>\n              </a>\n            </div>\n          </div>\n          <div class="level">\n            <p>Medium <span>(10x10)</span></p>\n            <div class="levels-container">\n              <a id="7" href="#game">\n                <div class="level-card">\n                  <div class="level-img img-question"></div>\n                  <p>matter</p>\n                </div>\n              </a>\n              <a id="9" href="#game">\n                <div class="level-card">\n                  <div class="level-img img-note"></div>\n                  <p>note</p>\n                </div>\n              </a>\n              <a id="6" href="#game">\n                <div class="level-card">\n                  <div class="level-img img-tv"></div>\n                  <p>tv</p>\n                </div>\n              </a>\n              <a id="10" href="#game">\n                <div class="level-card">\n                  <div class="level-img img-snail"></div>\n                  <p>snail</p>\n                </div>\n              </a>\n              <a id="8" href="#game">\n                <div class="level-card">\n                  <div class="level-img img-tea"></div>\n                  <p>tea</p>\n                </div>\n              </a>\n            </div>\n          </div>\n          <div class="level">\n            <p>Hard <span>(15x15)</span></p>\n            <div class="levels-container">\n              <a id="12" href="#game">\n                <div class="level-card">\n                  <div class="level-img img-clover"></div>\n                  <p>clover</p>\n                </div>\n              </a>\n              <a id="14" href="#game">\n                <div class="level-card">\n                  <div class="level-img img-duck"></div>\n                  <p>duck</p>\n                </div>\n              </a>\n              <a id="15" href="#game">\n                <div class="level-card">\n                  <div class="level-img img-mouse"></div>\n                  <p>mouse</p>\n                </div>\n              </a>\n              <a id="11" href="#game">\n                <div class="level-card">\n                  <div class="level-img img-giraffes"></div>\n                  <p>giraffes</p>\n                </div>\n              </a>\n              <a id="13" href="#game">\n                <div class="level-card">\n                  <div class="level-img img-skittles"></div>\n                  <p>skittles</p>\n                </div>\n              </a>\n            </div>\n          </div>\n        </section>\n        <section id="game">\n          <div class="game-container">\n            <div class="game-field__container">\n              <div class="game-field"></div>\n            </div>\n            <div class="game-buttons">\n              <div class="timer">\n                <span class="interval-hours">00</span>\n                <span class="dots">:</span>\n                <span class="interval-minutes">00</span>\n                <span class="dots">:</span>\n                <span class="interval-seconds">00</span>\n              </div>\n              <button class="game-btn reset-button">Reset game</button>\n              <button class="game-btn solution">Show solution</button>\n              <button class="game-btn sound-btn">Sound <span class="sound-btn__text">off</span></button>\n              <button class="game-btn save-btn">Save game</button>\n              <button class="game-btn continue-btn">Continue last game</button>\n            </div>\n          </div>\n        </section>\n        <section id="table">\n          <div class="table-container">\n            <table class="table-score">\n              <caption class="table-caption">\n                Score table:\n              </caption>\n              <thead>\n                <tr>\n                  <th>Puzzle name:</th>\n                  <th>Difficulty:</th>\n                  <th>Result:</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                </tr>\n                <tr>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                </tr>\n                <tr>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                </tr>\n                <tr>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                </tr>\n                <tr>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </section>\n      </div>\n',v.appendChild(x);const y=document.createElement("footer");y.className="footer",y.innerHTML='\n<div class="wrapper">\n        <div class="footer-container">\n          <p>2024</p>\n          <p>Ihar Batura</p>\n\n          <div class="contacts-container">\n            <a href="https://github.com/Ihar-Batura" target="_blank">\n              <div class="contact-img img-git"></div>\n            </a>\n            <a\n              href="https://discordapp.com/users/925457041785512027/"\n              target="_blank"\n            >\n              <div class="contact-img img-discord"></div>\n            </a>\n            <a href="mailto:a17331582@gmail.com">\n              <div class="contact-img img-email"></div>\n            </a>\n          </div>\n        </div>\n      </div>\n',v.appendChild(y);const w=document.createElement("div");w.className="modal",w.innerHTML='\n<div class="modal-window">\n        <h2>\n          "Great! You have solved the nonogram in\n          <span class="modal-time"></span> seconds!"\n        </h2>\n        <div class="modal-img"></div>\n        <button class="game-btn modal-btn">Play again</button>\n      </div>\n',v.appendChild(w);const L=[{id:1,name:"dog",difficulty:"easy",cellsNumber:25,matrix:[[0,0,0,1,0],[1,0,1,1,1],[0,1,1,1,0],[0,1,0,1,0],[0,1,0,1,0]]},{id:2,name:"plane",difficulty:"easy",cellsNumber:25,matrix:[[0,0,1,0,0],[0,1,1,1,0],[1,1,1,1,1],[0,0,1,0,0],[0,1,1,1,0]]},{id:3,name:"tower",difficulty:"easy",cellsNumber:25,matrix:[[1,0,1,0,1],[1,1,1,1,1],[0,1,1,1,0],[0,1,0,1,0],[0,1,1,1,0]]},{id:4,name:"smile",difficulty:"easy",cellsNumber:25,matrix:[[1,1,0,1,1],[1,1,0,1,1],[0,0,0,0,0],[1,0,0,0,1],[0,1,1,1,0]]},{id:5,name:"scull",difficulty:"easy",cellsNumber:25,matrix:[[0,1,1,1,0],[1,1,1,1,1],[1,0,1,0,1],[1,1,1,1,1],[0,1,0,1,0]]},{id:6,name:"tv",difficulty:"medium",cellsNumber:100,matrix:[[0,0,1,0,0,0,0,1,0,0],[0,0,0,1,0,0,1,0,0,0],[1,1,1,1,1,1,1,1,1,1],[1,0,1,1,0,0,0,0,1,1],[1,1,1,0,0,0,0,0,0,1],[1,0,1,0,0,0,0,0,0,1],[1,1,1,0,0,0,0,0,0,1],[1,1,1,1,0,0,0,0,1,1],[1,1,1,1,1,1,1,1,1,1],[0,1,0,0,0,0,0,0,1,0]]},{id:7,name:"question",difficulty:"medium",cellsNumber:100,matrix:[[0,0,1,1,1,1,1,1,0,0],[0,1,1,0,0,0,0,1,1,0],[0,1,1,0,0,0,0,1,1,0],[0,0,0,0,0,0,0,1,1,0],[0,0,0,0,0,0,1,1,1,0],[0,0,0,0,1,1,1,1,0,0],[0,0,0,0,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,0,0,0,0],[0,0,0,0,1,1,0,0,0,0]]},{id:8,name:"tea",difficulty:"medium",cellsNumber:100,matrix:[[0,0,1,0,1,0,1,0,0,0],[0,0,1,0,1,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,1,0,0],[0,1,1,0,1,1,1,1,1,1],[0,1,1,0,1,1,1,1,0,1],[0,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,0,0],[1,0,1,1,1,1,1,0,0,1],[0,1,1,1,1,1,1,1,1,0]]},{id:9,name:"note",difficulty:"medium",cellsNumber:100,matrix:[[0,0,0,0,0,0,1,1,1,1],[0,0,0,1,1,1,0,0,0,1],[0,0,0,1,0,0,0,1,1,1],[0,0,0,1,1,1,1,0,0,1],[0,0,0,1,0,0,0,0,0,1],[0,0,0,1,0,0,0,1,1,1],[0,1,1,1,0,0,1,1,1,1],[1,1,1,1,0,0,1,1,1,1],[1,1,1,1,0,0,0,1,1,0],[0,1,1,0,0,0,0,0,0,0]]},{id:10,name:"snail",difficulty:"medium",cellsNumber:100,matrix:[[0,0,1,1,1,1,0,0,0,0],[0,1,1,0,1,1,1,0,0,0],[1,1,1,1,0,1,1,1,0,0],[1,0,1,1,1,0,1,1,0,0],[1,1,1,1,1,0,1,1,0,0],[1,1,1,1,0,1,1,0,0,0],[1,1,1,1,1,1,1,0,1,0],[1,1,1,1,1,1,0,0,0,1],[0,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,0]]},{id:11,name:"giraffes",difficulty:"hard",cellsNumber:225,matrix:[[0,0,0,0,1,0,1,0,0,0,0,1,0,1,0],[0,0,1,0,1,1,1,0,0,1,0,1,1,1,0],[0,0,0,1,1,1,1,1,0,0,1,1,1,1,1],[0,0,0,0,1,0,1,1,0,0,0,1,0,1,1],[0,0,0,0,1,0,0,0,0,0,0,1,0,0,0],[0,0,0,1,1,0,0,0,0,0,1,1,0,0,0],[0,0,0,1,1,0,0,0,0,0,1,1,0,0,0],[0,0,1,1,0,0,0,0,0,1,1,0,0,0,0],[0,0,1,1,0,0,0,0,0,1,1,0,0,0,1],[1,1,1,0,0,0,1,1,1,1,0,0,1,1,1],[1,1,1,0,1,1,1,1,1,1,0,1,1,1,1],[1,1,0,0,1,1,1,1,1,0,0,1,1,1,1],[0,1,1,0,1,1,1,1,1,1,0,0,1,0,1],[0,0,1,0,1,1,0,1,0,1,0,0,0,0,1],[0,0,1,0,1,0,0,1,0,1,0,0,1,1,1]]},{id:12,name:"clover",difficulty:"hard",cellsNumber:225,matrix:[[0,0,0,0,0,1,1,0,1,1,0,0,0,0,0],[0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],[0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],[0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],[0,1,1,1,0,1,1,1,1,1,0,1,1,1,0],[1,1,1,1,1,0,1,1,1,0,1,1,1,1,1],[1,1,1,1,1,1,0,1,0,1,1,1,1,1,1],[0,1,1,1,1,1,1,0,1,1,1,1,1,1,0],[1,1,1,1,1,1,0,1,0,1,1,1,1,1,1],[1,1,1,1,1,0,0,1,0,0,1,1,1,1,1],[0,1,1,1,0,0,0,1,0,0,0,1,1,1,0],[0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0],[0,0,1,1,1,1,0,0,0,0,0,0,0,0,0],[0,0,1,1,0,0,0,0,0,0,0,0,0,0,0]]},{id:13,name:"skittles",difficulty:"hard",cellsNumber:225,matrix:[[0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,1,1,1,1,0],[0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,1,1,1,0],[0,0,0,0,0,0,0,0,0,0,1,1,0,1,0],[0,0,0,0,0,0,0,0,0,1,1,1,1,0,1],[0,0,0,0,0,0,0,0,0,1,1,1,1,1,0],[0,1,1,1,0,0,0,0,1,1,1,1,1,1,1],[1,1,1,0,1,0,0,0,1,1,1,1,1,1,1],[1,1,1,0,1,0,0,0,0,1,1,1,1,1,1],[1,1,1,1,1,0,0,0,0,1,1,1,1,1,1],[0,1,1,1,0,0,0,0,0,0,1,1,1,1,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]},{id:14,name:"duck",difficulty:"hard",cellsNumber:225,matrix:[[0,0,0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,0,0],[0,0,0,0,0,0,0,1,1,1,1,0,1,1,1],[0,0,0,0,0,0,0,1,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,0,0],[1,0,0,0,0,0,1,1,1,1,1,1,1,1,0],[1,1,1,0,0,1,1,1,0,0,0,1,1,1,0],[1,1,1,1,1,1,1,0,1,1,1,0,1,1,0],[0,1,1,1,1,1,0,1,1,1,1,0,1,1,0],[0,1,1,1,1,1,1,1,1,0,0,1,1,0,0],[0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],[0,0,0,0,1,1,0,1,1,1,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,1,1,1,0,0,0]]},{id:15,name:"mouse",difficulty:"hard",cellsNumber:225,matrix:[[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[0,0,0,0,0,1,1,1,1,0,0,1,1,0,1],[0,0,0,1,1,1,0,0,1,0,0,1,0,1,0],[1,1,1,0,1,0,0,1,1,0,0,1,0,0,0],[1,1,0,0,0,0,0,1,0,0,0,1,1,0,0],[0,1,1,1,1,0,0,1,1,0,0,0,1,1,0],[0,0,0,0,1,1,0,0,1,1,0,0,0,1,1],[0,0,0,0,0,1,0,0,0,1,1,1,0,0,1],[0,0,0,0,0,1,1,0,0,0,0,1,1,0,1],[0,0,0,1,1,1,1,0,0,0,0,0,1,1,1],[0,0,0,1,0,1,0,0,1,1,0,0,0,1,1],[0,0,0,0,0,1,0,0,1,0,0,0,0,1,0],[0,0,0,0,0,0,1,0,1,0,0,0,0,1,0],[0,0,0,0,0,1,1,1,1,1,0,0,1,1,0],[0,0,0,1,1,1,0,1,1,0,1,1,1,0,0]]}],k=document.querySelector(".burger-menu"),S=document.querySelector(".header-container"),T=document.querySelectorAll(".navigation li a");let E=!1;k.addEventListener("click",(function(){E=!E,E?(k.classList.add("active"),S.classList.add("active"),v.classList.add("unscroll")):(k.classList.remove("active"),S.classList.remove("active"),v.classList.remove("unscroll"))})),T.forEach((n=>{n.addEventListener("click",(()=>{k.classList.remove("active"),S.classList.remove("active"),v.classList.remove("unscroll"),E=!1}))}));const z=document.querySelector(".game-field");let q;function M(n=L[0].matrix){q=n,n.length>10?z.classList.add("big-field"):z.classList.remove("big-field");const e=document.createElement("div");e.className="row-top",z.appendChild(e);const t=document.createElement("div");t.className="row-prompt",e.appendChild(t);for(let t=0;t<n.length;t++){const r=document.createElement("div");5===t||10===t?r.classList="top-prompt cell-border":r.className="top-prompt";let i=0;for(let e=0;e<n.length;e++){const a=document.createElement("span");a.className="prompt",a.innerText="",1===n[e][t]?(i++,e===n.length-1&&(a.innerText+=i,r.appendChild(a))):i>0&&(a.innerText+=i,r.appendChild(a),i=0)}e.appendChild(r)}for(let e=0;e<n.length;e++){const t=document.createElement("div");t.classList=5===e||10===e?"row-cells row-border":"row-cells";const r=document.createElement("div");r.className="row-prompt",r.innerText="",t.appendChild(r);let i=0;for(let a=0;a<n[e].length;a++){const l=document.createElement("div");5===a||10===a?l.classList="cell cell-border":l.className="cell",l.innerText=n[e][a],1===n[e][a]?(i++,a===n.length-1&&(r.innerText+=` ${i}`)):i>0&&(r.innerText+=` ${i}`,i=0),t.appendChild(l)}z.appendChild(t)}document.querySelectorAll(".cell").forEach((n=>n.addEventListener("click",(function(){O||(clearInterval(U),U=setInterval(j,1e3),O=!0)})))),document.querySelectorAll(".cell").forEach((n=>n.addEventListener("click",(()=>{n.classList.remove("cross"),n.classList.toggle("fill")})))),document.querySelectorAll(".cell").forEach((n=>n.addEventListener("contextmenu",(e=>{e.preventDefault(),n.classList.remove("fill"),n.classList.toggle("cross")})))),function(){function n(){const n=document.querySelectorAll(".cell");let e=0;n.forEach((n=>{"1"===n.innerText&&(e++,"1"===n.innerText&&n.classList.value.includes("fill")&&e--),"0"===n.innerText&&n.classList.value.includes("fill")&&e++})),0===e&&function(){const n=document.querySelector(".modal"),e=document.querySelector(".modal-time"),t=document.querySelector(".interval-hours").innerHTML,r=document.querySelector(".interval-minutes").innerHTML,i=document.querySelector(".interval-seconds").innerHTML;e.innerText=`${t}:${r}:${i}`,n.classList.add("show-modal"),clearInterval(U),function(){let n,e;L.forEach((t=>{t.matrix===q&&(n=t.name,e=t.difficulty)}));const t=document.querySelector(".interval-hours").innerHTML,r=document.querySelector(".interval-minutes").innerHTML,i=document.querySelector(".interval-seconds").innerHTML,a={name:`${n}`,difficulty:`${e}`,result:`${`${t}:${r}:${i}`}`},l=JSON.parse(localStorage.getItem("resultList"));if(null===l){const n=[];n.push(a),localStorage.setItem("resultList",JSON.stringify(n))}else{let n=l;n.push(a),localStorage.setItem("resultList",JSON.stringify(n))}}(),D()}()}document.querySelectorAll(".cell").forEach((e=>{e.addEventListener("click",n)}))}()}function N(n,e){return Math.floor(n+Math.random()*(e-n))}M(),document.querySelector(".random-game").addEventListener("click",(function(){z.innerHTML="";let n=0,e=N(0,14);console.log(e),n===e&&(e=N(0,14),n=e),M(L[e].matrix),J()})),document.querySelectorAll(".levels-container a").forEach((n=>n.addEventListener("click",(()=>{z.innerHTML="",M(L[n.id-1].matrix),J()}))));const $=document.querySelector(".interval-hours"),H=document.querySelector(".interval-minutes"),R=document.querySelector(".interval-seconds"),C=document.querySelector(".solution"),I=document.querySelector(".reset-button");let U,A=0,P=0,_=0;const j=()=>{_++,R.innerHTML=_,_<=9&&(R.innerHTML="0"+_),_>9&&_<=99&&(R.innerHTML=_),100==_&&(R.innerHTML="00",P++,H.innerHTML="0"+P,_=0),P>9&&(H.innerHTML=P),P>59&&(A++,$.innerHTML="0"+A,P=0,H.innerHTML="0"+P),A>9&&($.innerHTML=A)};let O;function J(){clearInterval(U),A=0,P=0,_=0,$.innerHTML="00",H.innerHTML="00",R.innerHTML="00",O=!1}function D(){const n=JSON.parse(localStorage.getItem("resultList"));if(null!==n){let e=n.sort((function(n,e){return n.result>e.result?1:n.result<e.result?-1:0}));const t=document.querySelectorAll("tbody tr");let r=0;t.forEach((n=>{null!==e&&void 0!==e[r]&&(n.children[0].innerText=e[r].name,n.children[1].innerText=e[r].difficulty,n.children[2].innerText=e[r].result),r++}))}}C.addEventListener("click",(function(){clearInterval(U)})),I.addEventListener("click",J),document.querySelector(".reset-button").addEventListener("click",(()=>{z.innerHTML="",M(q)})),document.querySelector(".solution").addEventListener("click",(()=>{z.innerHTML="",M(q),document.querySelectorAll(".cell").forEach((n=>{"1"===n.innerText&&n.classList.add("fill")}))})),document.querySelector(".modal-btn").addEventListener("click",(()=>{document.querySelector(".modal").classList.remove("show-modal"),z.innerHTML="",M(q),J()})),document.querySelector(".save-btn").addEventListener("click",(function(){const n=document.querySelectorAll(".cell"),e=[];n.forEach((n=>{"1"!==n.innerText||n.classList.value.includes("fill")||n.classList.value.includes("cross")?"1"===n.innerText&&n.classList.value.includes("fill")?e.push(2):"1"===n.innerText&&n.classList.value.includes("cross")?e.push(3):"0"!==n.innerText||n.classList.value.includes("fill")||n.classList.value.includes("cross")?"0"===n.innerText&&n.classList.value.includes("fill")?e.push(-1):"0"===n.innerText&&n.classList.value.includes("cross")&&e.push(-2):e.push(0):e.push(1)})),localStorage.setItem("nonogramLastGame",JSON.stringify(e))})),document.querySelector(".continue-btn").addEventListener("click",(()=>{const n=JSON.parse(localStorage.getItem("nonogramLastGame"));z.innerHTML="",M(q);const e=document.querySelectorAll(".cell");let t=0;e.forEach((e=>{1===n[t]?e.innerText="1":2===n[t]?(e.innerText="1",e.classList.add("fill")):3===n[t]?(e.innerText="1",e.classList.add("cross")):0===n[t]?e.innerText="0":-1===n[t]?(e.innerText="0",e.classList.add("fill")):-2===n[t]&&(e.innerText="0",e.classList.add("cross")),t++}))})),D();const B=document.querySelector(".theme-btn");let F=!1;B.addEventListener("click",(function(){F=!F,F?(document.documentElement.style.setProperty("--clr-text-light","#d0ef88"),document.documentElement.style.setProperty("--clr-text-light-hover","#87bf02"),document.documentElement.style.setProperty("--clr-body-light","#b7badb"),document.documentElement.style.setProperty("--clr-body-text-light","#282d1b"),document.documentElement.style.setProperty("--clr-header-footer-light","#0c103a")):(document.documentElement.style.setProperty("--clr-text-light","#e2f0ed"),document.documentElement.style.setProperty("--clr-text-light-hover","#ecc5bd"),document.documentElement.style.setProperty("--clr-body-light","#f5edeb"),document.documentElement.style.setProperty("--clr-body-text-light","#420c0d"),document.documentElement.style.setProperty("--clr-header-footer-light","#3d2d66"))}));const G=document.querySelector(".sound-btn"),W=document.querySelector(".sound-btn__text");let Q=!0;G.addEventListener("click",(function(){Q=!Q,W.innerText=Q?"off":"on"}))})();