!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var t=n();for(var o in t)("object"==typeof exports?exports:e)[o]=t[o]}}(self,(()=>(()=>{"use strict";var e={};function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);var t,o={Render:function(e){var n=window.React,t=e.inner,o=e.listen,r=e.dispatch,i=e.pure,f=function(){t.useWindow&&t.windowName&&(window[t.windowName]=t.value)};return n.useEffect((function(){if(o&&o.setValue){var e=o.setValue((function(e){t.value=e,f(),r&&r.onEffect&&r.onEffect(t.value)}));return function(){e()}}}),[]),n.useEffect((function(){if(o&&o.assignValue){var e=o.assignValue((function(e){Object.assign(t.value,e),f(),r&&r.onEffect&&r.onEffect(t.value)}));return function(){e()}}}),[]),i?(n.useEffect((function(){t.immediate&&Promise.resolve().then((function(){f(),r&&r.onEffect&&r.onEffect(t.value)}))}),[]),n.useEffect((function(){f()}),[t.useWindow,t.windowName]),null):null},license:{key:"Tool-Data"}};return window.graphElement=window.graphElement?[].concat(function(e){if(Array.isArray(e))return n(e)}(t=window.graphElement)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[o]):[o],e})()));