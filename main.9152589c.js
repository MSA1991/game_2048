parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var r,e,n,t,o=document.querySelector(".button"),f=document.querySelectorAll(".message"),a=document.querySelector(".message-lose"),c=document.querySelector(".message-win"),i=document.querySelector(".game-score"),u=4,s={up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight"};function l(){e=0,r=!1,n=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],h(),h(),q(),o.innerHTML="Reset",o.classList.remove("start"),o.classList.add("restart"),L()}function d(r){switch(t=JSON.parse(JSON.stringify(n)),r.code){case s.up:p();break;case s.down:y();break;case s.left:g();break;case s.right:w();break;default:return}L(),!v(t,n)&&A()&&h(),L()}function v(r,e){for(var n=0;n<u;n++)for(var t=0;t<u;t++)if(r[n][t]!==e[n][t])return!1;return!0}function h(){if(A()){for(var r=n[m(4)];-1===r.indexOf(0);)r=n[m(4)];var e=r.reduce(function(r,e,n){return 0===e&&r.push(n),r},[]),t=e[m(e.length)],o=n.indexOf(r);n[o][t]=m()}}function m(r){return r?Math.floor(Math.random()*r):Math.random()<.2?4:2}function L(){var t=document.querySelectorAll(".field-cell");i.innerHTML=e,r&&c.classList.remove("hidden"),!A()&&b()&&a.classList.remove("hidden");for(var o=0;o<u;o++)for(var f=0;f<u;f++){var s=o*u+f;0!==n[o][f]?(t[s].innerHTML=n[o][f],t[s].className="\n          field-cell field-cell--show field-cell--".concat(n[o][f],"\n        ")):(t[s].innerHTML="",t[s].className="field-cell")}}function g(){for(var r=0;r<u;r++){var e=S(n[r]);M(e),k(e),M(e=S(e)),n[r]=e}}function w(){for(var r=0;r<u;r++){var e=S(n[r]);M(e,"reverse"),k(e,"reverse"),M(e=S(e),"reverse"),n[r]=e}}function p(){for(var r=0;r<u;r++){for(var e=[],t=0;t<u;t++)e.push(n[t][r]);M(e=S(e)),k(e),M(e=S(e));for(var o=0;o<u;o++)n[o][r]=e[o]}}function y(){for(var r=0;r<u;r++){for(var e=[],t=0;t<u;t++)e.push(n[t][r]);M(e=S(e),"reverse"),k(e,"reverse"),M(e=S(e),"reverse");for(var o=0;o<u;o++)n[o][r]=e[o]}}function S(r){return r.filter(function(r){return 0!==r})}function M(r,e){if(e)for(;r.length<4;)r.unshift(0);else for(;r.length<4;)r.push(0)}function k(r,n){if(n)for(var t=u-1;t>=0;t--)r[t]===r[t-1]&&0!==r[t]&&(r[t]+=r[t-1],H(r[t]),r[t-1]=0,e+=r[t]);else for(var o=0;o<u-1;o++)r[o]===r[o+1]&&0!==r[o]&&(r[o]+=r[o+1],H(r[o]),r[o+1]=0,e+=r[o])}function q(){f.forEach(function(r){return r.classList.add("hidden")})}function A(){return n.some(function(r){return r.includes(0)})}function b(){for(var r=0;r<u;r++)for(var e=0;e<u-1;e++)if(n[r][e]===n[r][e+1])return!1;for(var t=0;t<u-1;t++)for(var o=0;o<u;o++)if(n[t][o]===n[t+1][o])return!1;return!0}function H(e){2048===e&&(r=!0)}o.addEventListener("click",l),document.addEventListener("keyup",d);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.9152589c.js.map