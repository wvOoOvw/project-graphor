!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(self,(()=>(()=>{"use strict";var e={};function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},t.apply(this,arguments)}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);var r,o={Render:function(e){var n=window.React,r=window.MaterialUI.Radio,o=e.compound,i=e.inner,a=e.listen,c=e.dispatch,f=e.pure,l=e.update;return n.useEffect((function(){if(a&&a.setCheckedOpen){var e=a.setCheckedOpen((function(e){i.checked=!0,l()}));return function(){e()}}}),[]),n.useEffect((function(){if(a&&a.setCheckedClose){var e=a.setCheckedClose((function(e){i.checked=!1,l()}));return function(){e()}}}),[]),n.createElement(r,t({},o,{checked:i.checked,onChange:function(e){f&&(i.checked=!0,l(),c&&c.onChange&&c.onChange(i.checked,e))},size:i.size,color:i.color,disabled:i.disabled}))},license:{key:"Material-Radio",dependencies:["MaterialUI"]}};return window.graphElement=window.graphElement?[].concat(function(e){if(Array.isArray(e))return n(e)}(r=window.graphElement)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[o]):[o],e})()));