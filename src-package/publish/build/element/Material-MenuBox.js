!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var t=n();for(var r in t)("object"==typeof exports?exports:e)[r]=t[r]}}(self,(()=>(()=>{"use strict";var e={};function n(){return n=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},n.apply(this,arguments)}function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);var r,o={Render:function(e){var t=window.React,r=window.MaterialUI,o=r.Menu,i=r.MenuItem,a=e.compound,l=e.inner,u=e.listen,c=e.dispatch,f=e.children,p=e.pure,s=e.update;t.useEffect((function(){if(u&&u.setValues){var e=u.setValues((function(e){l.list=e,s()}));return function(){e()}}}),[]);var d=function(){l.open=!1,s()},m=function(){l.open=!0,s()},y=t.useRef();return t.createElement(t.Fragment,null,t.createElement("div",n({},a,{ref:function(e){return y.current=e},onClick:"click"===l.openType?m:void 0,onMouseOver:"mouseover"===l.openType?m:void 0}),f&&f.main?f.main():null),t.createElement(o,{open:p&&l.open,onClose:d,anchorEl:y.current},l.options.map((function(e,n){return t.createElement(i,{key:n,onClick:function(n){return function(e,n){l.clickClose&&d(),c&&c.onClick&&c.onClick(n,e)}(n,e.value)}},e.label)}))))},license:{key:"Material-MenuBox",dependencies:["MaterialUI"]}};return window.graphElement=window.graphElement?[].concat(function(e){if(Array.isArray(e))return t(e)}(r=window.graphElement)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[o]):[o],e})()));