!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("React"));else if("function"==typeof define&&define.amd)define(["React"],t);else{var r="object"==typeof exports?t(require("React")):t(e.React);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(self,(e=>(()=>{"use strict";var t={24:t=>{t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{n.r(o);var e=n(24),t=n.n(e);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var c,p={Render:function(e){var n=e.env,o=e.update,a=e.devParams,i=e.property,u=e.style,c=e.monitor,p=e.trigger,f=(e.children,e.element,e.prop,function(e){i.value=e.target.value,o(),p&&p.onChange&&p.onChange(i.value,e)}),s=function(e){p&&p.onFocus&&p.onFocus(i.value,e)},d=function(e){p&&p.onBlur&&p.onBlur(i.value,e)};if(t().useEffect((function(){if(c&&c.setValue){var e=c.setValue((function(e){i.value=e,o()}));return function(){e()}}}),[]),t().useEffect((function(){if(c&&c.clearValue){var e=c.clearValue((function(e){i.value="",o()}));return function(){e()}}}),[]),"dev"===n){if("textarea"===i.type)return t().createElement("textarea",r({},a,{style:l(l({},u.content),{},{resize:"none"}),value:i.value,onFocus:s,onBlur:d,placeholder:i.placeholder,disabled:i.disabled}));if("file"===i.type)return t().createElement("input",r({},a,{style:l({},u.content),value:i.value,onFocus:s,onBlur:d,type:i.type,placeholder:i.placeholder,disabled:i.disabled,multiple:i.fileMultiple,accept:i.fileAccept}));if("textarea"!==i.type&&"file"!==i.type)return t().createElement("input",r({},a,{style:l({},u.content),value:i.value,onFocus:s,onBlur:d,type:i.type,placeholder:i.placeholder,disabled:i.disabled}))}if("prod"===n){if("textarea"===i.type)return t().createElement("textarea",{style:l(l({},u.content),{},{resize:"none"}),value:i.value,placeholder:i.placeholder,disabled:i.disabled,onChange:f});if("file"===i.type)return t().createElement("input",{style:l({},u.content),value:i.value,type:i.type,placeholder:i.placeholder,disabled:i.disabled,multiple:i.fileMultiple,accept:i.fileAccept,onChange:f});if("textarea"!==i.type&&"file"!==i.type)return t().createElement("input",{style:l({},u.content),value:i.value,type:i.type,placeholder:i.placeholder,disabled:i.disabled,onChange:f})}},license:{key:"Basic-Input"}};window.graphElement=window.graphElement?[].concat(function(e){if(Array.isArray(e))return u(e)}(c=window.graphElement)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(c)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[p]):[p]})(),o})()));