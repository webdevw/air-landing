parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e,t=".slider .slider__images .slider__image",n=document.querySelectorAll(t),i=document.querySelector(".slider__images"),d=document.querySelector(".slider__button--left"),o=document.querySelector(".slider__button--right"),r=document.querySelector("#formField"),s=0;function c(){e=document.querySelector(".slider").offsetWidth,i.style.width=e*n.length+"px",n.forEach(function(t){t.style.width=e+"px"}),u()}function l(e){e.preventDefault(),r.reset()}function u(){i.style.transform="translate(-"+s*e+"px)"}window.addEventListener("hashchange",function(){"#menu"===window.location.hash?document.body.classList.add("page__body--with-menu"):document.body.classList.remove("page__body--with-menu")}),c(),window.addEventListener("resize",c),d.addEventListener("click",function(){--s<0&&(s=n.length-1),u()}),o.addEventListener("click",function(){++s>=n.length&&(s=0),u()}),r.addEventListener("submit",l);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.0daad152.js.map