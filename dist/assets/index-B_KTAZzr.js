(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var xg={exports:{}},Kl={},vg={exports:{}},Fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Va=Symbol.for("react.element"),Mv=Symbol.for("react.portal"),wv=Symbol.for("react.fragment"),Ev=Symbol.for("react.strict_mode"),bv=Symbol.for("react.profiler"),Tv=Symbol.for("react.provider"),Av=Symbol.for("react.context"),Cv=Symbol.for("react.forward_ref"),Rv=Symbol.for("react.suspense"),Pv=Symbol.for("react.memo"),Nv=Symbol.for("react.lazy"),Wh=Symbol.iterator;function Lv(t){return t===null||typeof t!="object"?null:(t=Wh&&t[Wh]||t["@@iterator"],typeof t=="function"?t:null)}var _g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yg=Object.assign,Sg={};function Bs(t,e,n){this.props=t,this.context=e,this.refs=Sg,this.updater=n||_g}Bs.prototype.isReactComponent={};Bs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Bs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Mg(){}Mg.prototype=Bs.prototype;function bf(t,e,n){this.props=t,this.context=e,this.refs=Sg,this.updater=n||_g}var Tf=bf.prototype=new Mg;Tf.constructor=bf;yg(Tf,Bs.prototype);Tf.isPureReactComponent=!0;var Xh=Array.isArray,wg=Object.prototype.hasOwnProperty,Af={current:null},Eg={key:!0,ref:!0,__self:!0,__source:!0};function bg(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)wg.call(e,i)&&!Eg.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Va,type:t,key:s,ref:a,props:r,_owner:Af.current}}function Dv(t,e){return{$$typeof:Va,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Cf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Va}function Iv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var $h=/\/+/g;function bc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Iv(""+t.key):e.toString(36)}function Yo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Va:case Mv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+bc(a,0):i,Xh(r)?(n="",t!=null&&(n=t.replace($h,"$&/")+"/"),Yo(r,e,n,"",function(c){return c})):r!=null&&(Cf(r)&&(r=Dv(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace($h,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Xh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+bc(s,o);a+=Yo(s,e,n,l,r)}else if(l=Lv(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+bc(s,o++),a+=Yo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function to(t,e,n){if(t==null)return t;var i=[],r=0;return Yo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Uv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Kt={current:null},Ko={transition:null},Fv={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:Ko,ReactCurrentOwner:Af};function Tg(){throw Error("act(...) is not supported in production builds of React.")}Fe.Children={map:to,forEach:function(t,e,n){to(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return to(t,function(){e++}),e},toArray:function(t){return to(t,function(e){return e})||[]},only:function(t){if(!Cf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Fe.Component=Bs;Fe.Fragment=wv;Fe.Profiler=bv;Fe.PureComponent=bf;Fe.StrictMode=Ev;Fe.Suspense=Rv;Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fv;Fe.act=Tg;Fe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=yg({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Af.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)wg.call(e,l)&&!Eg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Va,type:t.type,key:r,ref:s,props:i,_owner:a}};Fe.createContext=function(t){return t={$$typeof:Av,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Tv,_context:t},t.Consumer=t};Fe.createElement=bg;Fe.createFactory=function(t){var e=bg.bind(null,t);return e.type=t,e};Fe.createRef=function(){return{current:null}};Fe.forwardRef=function(t){return{$$typeof:Cv,render:t}};Fe.isValidElement=Cf;Fe.lazy=function(t){return{$$typeof:Nv,_payload:{_status:-1,_result:t},_init:Uv}};Fe.memo=function(t,e){return{$$typeof:Pv,type:t,compare:e===void 0?null:e}};Fe.startTransition=function(t){var e=Ko.transition;Ko.transition={};try{t()}finally{Ko.transition=e}};Fe.unstable_act=Tg;Fe.useCallback=function(t,e){return Kt.current.useCallback(t,e)};Fe.useContext=function(t){return Kt.current.useContext(t)};Fe.useDebugValue=function(){};Fe.useDeferredValue=function(t){return Kt.current.useDeferredValue(t)};Fe.useEffect=function(t,e){return Kt.current.useEffect(t,e)};Fe.useId=function(){return Kt.current.useId()};Fe.useImperativeHandle=function(t,e,n){return Kt.current.useImperativeHandle(t,e,n)};Fe.useInsertionEffect=function(t,e){return Kt.current.useInsertionEffect(t,e)};Fe.useLayoutEffect=function(t,e){return Kt.current.useLayoutEffect(t,e)};Fe.useMemo=function(t,e){return Kt.current.useMemo(t,e)};Fe.useReducer=function(t,e,n){return Kt.current.useReducer(t,e,n)};Fe.useRef=function(t){return Kt.current.useRef(t)};Fe.useState=function(t){return Kt.current.useState(t)};Fe.useSyncExternalStore=function(t,e,n){return Kt.current.useSyncExternalStore(t,e,n)};Fe.useTransition=function(){return Kt.current.useTransition()};Fe.version="18.3.1";vg.exports=Fe;var ae=vg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kv=ae,Ov=Symbol.for("react.element"),zv=Symbol.for("react.fragment"),Bv=Object.prototype.hasOwnProperty,jv=kv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hv={key:!0,ref:!0,__self:!0,__source:!0};function Ag(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Bv.call(e,i)&&!Hv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Ov,type:t,key:s,ref:a,props:r,_owner:jv.current}}Kl.Fragment=zv;Kl.jsx=Ag;Kl.jsxs=Ag;xg.exports=Kl;var u=xg.exports,Cg={exports:{}},Mn={},Rg={exports:{}},Pg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,Y){var Z=L.length;L.push(Y);e:for(;0<Z;){var se=Z-1>>>1,Ee=L[se];if(0<r(Ee,Y))L[se]=Y,L[Z]=Ee,Z=se;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var Y=L[0],Z=L.pop();if(Z!==Y){L[0]=Z;e:for(var se=0,Ee=L.length,ke=Ee>>>1;se<ke;){var W=2*(se+1)-1,ne=L[W],fe=W+1,ce=L[fe];if(0>r(ne,Z))fe<Ee&&0>r(ce,ne)?(L[se]=ce,L[fe]=Z,se=fe):(L[se]=ne,L[W]=Z,se=W);else if(fe<Ee&&0>r(ce,Z))L[se]=ce,L[fe]=Z,se=fe;else break e}}return Y}function r(L,Y){var Z=L.sortIndex-Y.sortIndex;return Z!==0?Z:L.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],f=1,p=null,d=3,m=!1,_=!1,S=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(L){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=L)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function M(L){if(S=!1,x(L),!_)if(n(l)!==null)_=!0,G(R);else{var Y=n(c);Y!==null&&Q(M,Y.startTime-L)}}function R(L,Y){_=!1,S&&(S=!1,h(P),P=-1),m=!0;var Z=d;try{for(x(Y),p=n(l);p!==null&&(!(p.expirationTime>Y)||L&&!T());){var se=p.callback;if(typeof se=="function"){p.callback=null,d=p.priorityLevel;var Ee=se(p.expirationTime<=Y);Y=t.unstable_now(),typeof Ee=="function"?p.callback=Ee:p===n(l)&&i(l),x(Y)}else i(l);p=n(l)}if(p!==null)var ke=!0;else{var W=n(c);W!==null&&Q(M,W.startTime-Y),ke=!1}return ke}finally{p=null,d=Z,m=!1}}var A=!1,b=null,P=-1,B=5,y=-1;function T(){return!(t.unstable_now()-y<B)}function H(){if(b!==null){var L=t.unstable_now();y=L;var Y=!0;try{Y=b(!0,L)}finally{Y?j():(A=!1,b=null)}}else A=!1}var j;if(typeof v=="function")j=function(){v(H)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,J=q.port2;q.port1.onmessage=H,j=function(){J.postMessage(null)}}else j=function(){g(H,0)};function G(L){b=L,A||(A=!0,j())}function Q(L,Y){P=g(function(){L(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,G(R))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(d){case 1:case 2:case 3:var Y=3;break;default:Y=d}var Z=d;d=Y;try{return L()}finally{d=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,Y){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Z=d;d=L;try{return Y()}finally{d=Z}},t.unstable_scheduleCallback=function(L,Y,Z){var se=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?se+Z:se):Z=se,L){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=Z+Ee,L={id:f++,callback:Y,priorityLevel:L,startTime:Z,expirationTime:Ee,sortIndex:-1},Z>se?(L.sortIndex=Z,e(c,L),n(l)===null&&L===n(c)&&(S?(h(P),P=-1):S=!0,Q(M,Z-se))):(L.sortIndex=Ee,e(l,L),_||m||(_=!0,G(R))),L},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(L){var Y=d;return function(){var Z=d;d=Y;try{return L.apply(this,arguments)}finally{d=Z}}}})(Pg);Rg.exports=Pg;var Vv=Rg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gv=ae,Sn=Vv;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ng=new Set,Ea={};function zr(t,e){As(t,e),As(t+"Capture",e)}function As(t,e){for(Ea[t]=e,t=0;t<e.length;t++)Ng.add(e[t])}var wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fu=Object.prototype.hasOwnProperty,Wv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qh={},Yh={};function Xv(t){return Fu.call(Yh,t)?!0:Fu.call(qh,t)?!1:Wv.test(t)?Yh[t]=!0:(qh[t]=!0,!1)}function $v(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function qv(t,e,n,i){if(e===null||typeof e>"u"||$v(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Zt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new Zt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new Zt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new Zt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new Zt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new Zt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new Zt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new Zt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new Zt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new Zt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Rf=/[\-:]([a-z])/g;function Pf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Rf,Pf);Ft[e]=new Zt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Rf,Pf);Ft[e]=new Zt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Rf,Pf);Ft[e]=new Zt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new Zt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new Zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new Zt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nf(t,e,n,i){var r=Ft.hasOwnProperty(e)?Ft[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(qv(e,n,r,i)&&(n=null),i||r===null?Xv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ci=Gv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,no=Symbol.for("react.element"),rs=Symbol.for("react.portal"),ss=Symbol.for("react.fragment"),Lf=Symbol.for("react.strict_mode"),ku=Symbol.for("react.profiler"),Lg=Symbol.for("react.provider"),Dg=Symbol.for("react.context"),Df=Symbol.for("react.forward_ref"),Ou=Symbol.for("react.suspense"),zu=Symbol.for("react.suspense_list"),If=Symbol.for("react.memo"),Oi=Symbol.for("react.lazy"),Ig=Symbol.for("react.offscreen"),Kh=Symbol.iterator;function Xs(t){return t===null||typeof t!="object"?null:(t=Kh&&t[Kh]||t["@@iterator"],typeof t=="function"?t:null)}var mt=Object.assign,Tc;function la(t){if(Tc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Tc=e&&e[1]||""}return`
`+Tc+t}var Ac=!1;function Cc(t,e){if(!t||Ac)return"";Ac=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Ac=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?la(t):""}function Yv(t){switch(t.tag){case 5:return la(t.type);case 16:return la("Lazy");case 13:return la("Suspense");case 19:return la("SuspenseList");case 0:case 2:case 15:return t=Cc(t.type,!1),t;case 11:return t=Cc(t.type.render,!1),t;case 1:return t=Cc(t.type,!0),t;default:return""}}function Bu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ss:return"Fragment";case rs:return"Portal";case ku:return"Profiler";case Lf:return"StrictMode";case Ou:return"Suspense";case zu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Dg:return(t.displayName||"Context")+".Consumer";case Lg:return(t._context.displayName||"Context")+".Provider";case Df:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case If:return e=t.displayName||null,e!==null?e:Bu(t.type)||"Memo";case Oi:e=t._payload,t=t._init;try{return Bu(t(e))}catch{}}return null}function Kv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bu(e);case 8:return e===Lf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ug(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Zv(t){var e=Ug(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function io(t){t._valueTracker||(t._valueTracker=Zv(t))}function Fg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Ug(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function gl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ju(t,e){var n=e.checked;return mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Zh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function kg(t,e){e=e.checked,e!=null&&Nf(t,"checked",e,!1)}function Hu(t,e){kg(t,e);var n=ir(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vu(t,e.type,ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Qh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vu(t,e,n){(e!=="number"||gl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ca=Array.isArray;function xs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ir(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Gu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Jh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(ca(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ir(n)}}function Og(t,e){var n=ir(e.value),i=ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function ep(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function zg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?zg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ro,Bg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ro=ro||document.createElement("div"),ro.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ro.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ba(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ma={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qv=["Webkit","ms","Moz","O"];Object.keys(ma).forEach(function(t){Qv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ma[e]=ma[t]})});function jg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ma.hasOwnProperty(t)&&ma[t]?(""+e).trim():e+"px"}function Hg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=jg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Jv=mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xu(t,e){if(e){if(Jv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function $u(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qu=null;function Uf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yu=null,vs=null,_s=null;function tp(t){if(t=Xa(t)){if(typeof Yu!="function")throw Error(te(280));var e=t.stateNode;e&&(e=tc(e),Yu(t.stateNode,t.type,e))}}function Vg(t){vs?_s?_s.push(t):_s=[t]:vs=t}function Gg(){if(vs){var t=vs,e=_s;if(_s=vs=null,tp(t),e)for(t=0;t<e.length;t++)tp(e[t])}}function Wg(t,e){return t(e)}function Xg(){}var Rc=!1;function $g(t,e,n){if(Rc)return t(e,n);Rc=!0;try{return Wg(t,e,n)}finally{Rc=!1,(vs!==null||_s!==null)&&(Xg(),Gg())}}function Ta(t,e){var n=t.stateNode;if(n===null)return null;var i=tc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var Ku=!1;if(wi)try{var $s={};Object.defineProperty($s,"passive",{get:function(){Ku=!0}}),window.addEventListener("test",$s,$s),window.removeEventListener("test",$s,$s)}catch{Ku=!1}function e_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var ga=!1,xl=null,vl=!1,Zu=null,t_={onError:function(t){ga=!0,xl=t}};function n_(t,e,n,i,r,s,a,o,l){ga=!1,xl=null,e_.apply(t_,arguments)}function i_(t,e,n,i,r,s,a,o,l){if(n_.apply(this,arguments),ga){if(ga){var c=xl;ga=!1,xl=null}else throw Error(te(198));vl||(vl=!0,Zu=c)}}function Br(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function qg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function np(t){if(Br(t)!==t)throw Error(te(188))}function r_(t){var e=t.alternate;if(!e){if(e=Br(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return np(r),t;if(s===i)return np(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function Yg(t){return t=r_(t),t!==null?Kg(t):null}function Kg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Kg(t);if(e!==null)return e;t=t.sibling}return null}var Zg=Sn.unstable_scheduleCallback,ip=Sn.unstable_cancelCallback,s_=Sn.unstable_shouldYield,a_=Sn.unstable_requestPaint,_t=Sn.unstable_now,o_=Sn.unstable_getCurrentPriorityLevel,Ff=Sn.unstable_ImmediatePriority,Qg=Sn.unstable_UserBlockingPriority,_l=Sn.unstable_NormalPriority,l_=Sn.unstable_LowPriority,Jg=Sn.unstable_IdlePriority,Zl=null,ri=null;function c_(t){if(ri&&typeof ri.onCommitFiberRoot=="function")try{ri.onCommitFiberRoot(Zl,t,void 0,(t.current.flags&128)===128)}catch{}}var Xn=Math.clz32?Math.clz32:f_,u_=Math.log,d_=Math.LN2;function f_(t){return t>>>=0,t===0?32:31-(u_(t)/d_|0)|0}var so=64,ao=4194304;function ua(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function yl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ua(o):(s&=a,s!==0&&(i=ua(s)))}else a=n&~r,a!==0?i=ua(a):s!==0&&(i=ua(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Xn(e),r=1<<n,i|=t[n],e&=~r;return i}function h_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function p_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Xn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=h_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Qu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function e0(){var t=so;return so<<=1,!(so&4194240)&&(so=64),t}function Pc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ga(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xn(e),t[e]=n}function m_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Xn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function kf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Xn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function t0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var n0,Of,i0,r0,s0,Ju=!1,oo=[],$i=null,qi=null,Yi=null,Aa=new Map,Ca=new Map,Bi=[],g_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rp(t,e){switch(t){case"focusin":case"focusout":$i=null;break;case"dragenter":case"dragleave":qi=null;break;case"mouseover":case"mouseout":Yi=null;break;case"pointerover":case"pointerout":Aa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ca.delete(e.pointerId)}}function qs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Xa(e),e!==null&&Of(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function x_(t,e,n,i,r){switch(e){case"focusin":return $i=qs($i,t,e,n,i,r),!0;case"dragenter":return qi=qs(qi,t,e,n,i,r),!0;case"mouseover":return Yi=qs(Yi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Aa.set(s,qs(Aa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ca.set(s,qs(Ca.get(s)||null,t,e,n,i,r)),!0}return!1}function a0(t){var e=Er(t.target);if(e!==null){var n=Br(e);if(n!==null){if(e=n.tag,e===13){if(e=qg(n),e!==null){t.blockedOn=e,s0(t.priority,function(){i0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ed(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);qu=i,n.target.dispatchEvent(i),qu=null}else return e=Xa(n),e!==null&&Of(e),t.blockedOn=n,!1;e.shift()}return!0}function sp(t,e,n){Zo(t)&&n.delete(e)}function v_(){Ju=!1,$i!==null&&Zo($i)&&($i=null),qi!==null&&Zo(qi)&&(qi=null),Yi!==null&&Zo(Yi)&&(Yi=null),Aa.forEach(sp),Ca.forEach(sp)}function Ys(t,e){t.blockedOn===e&&(t.blockedOn=null,Ju||(Ju=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,v_)))}function Ra(t){function e(r){return Ys(r,t)}if(0<oo.length){Ys(oo[0],t);for(var n=1;n<oo.length;n++){var i=oo[n];i.blockedOn===t&&(i.blockedOn=null)}}for($i!==null&&Ys($i,t),qi!==null&&Ys(qi,t),Yi!==null&&Ys(Yi,t),Aa.forEach(e),Ca.forEach(e),n=0;n<Bi.length;n++)i=Bi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Bi.length&&(n=Bi[0],n.blockedOn===null);)a0(n),n.blockedOn===null&&Bi.shift()}var ys=Ci.ReactCurrentBatchConfig,Sl=!0;function __(t,e,n,i){var r=et,s=ys.transition;ys.transition=null;try{et=1,zf(t,e,n,i)}finally{et=r,ys.transition=s}}function y_(t,e,n,i){var r=et,s=ys.transition;ys.transition=null;try{et=4,zf(t,e,n,i)}finally{et=r,ys.transition=s}}function zf(t,e,n,i){if(Sl){var r=ed(t,e,n,i);if(r===null)Bc(t,e,i,Ml,n),rp(t,i);else if(x_(r,t,e,n,i))i.stopPropagation();else if(rp(t,i),e&4&&-1<g_.indexOf(t)){for(;r!==null;){var s=Xa(r);if(s!==null&&n0(s),s=ed(t,e,n,i),s===null&&Bc(t,e,i,Ml,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Bc(t,e,i,null,n)}}var Ml=null;function ed(t,e,n,i){if(Ml=null,t=Uf(i),t=Er(t),t!==null)if(e=Br(t),e===null)t=null;else if(n=e.tag,n===13){if(t=qg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ml=t,null}function o0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(o_()){case Ff:return 1;case Qg:return 4;case _l:case l_:return 16;case Jg:return 536870912;default:return 16}default:return 16}}var Vi=null,Bf=null,Qo=null;function l0(){if(Qo)return Qo;var t,e=Bf,n=e.length,i,r="value"in Vi?Vi.value:Vi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Qo=r.slice(t,1<i?1-i:void 0)}function Jo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function lo(){return!0}function ap(){return!1}function wn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?lo:ap,this.isPropagationStopped=ap,this}return mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),e}var js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jf=wn(js),Wa=mt({},js,{view:0,detail:0}),S_=wn(Wa),Nc,Lc,Ks,Ql=mt({},Wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ks&&(Ks&&t.type==="mousemove"?(Nc=t.screenX-Ks.screenX,Lc=t.screenY-Ks.screenY):Lc=Nc=0,Ks=t),Nc)},movementY:function(t){return"movementY"in t?t.movementY:Lc}}),op=wn(Ql),M_=mt({},Ql,{dataTransfer:0}),w_=wn(M_),E_=mt({},Wa,{relatedTarget:0}),Dc=wn(E_),b_=mt({},js,{animationName:0,elapsedTime:0,pseudoElement:0}),T_=wn(b_),A_=mt({},js,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),C_=wn(A_),R_=mt({},js,{data:0}),lp=wn(R_),P_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},N_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},L_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function D_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=L_[t])?!!e[t]:!1}function Hf(){return D_}var I_=mt({},Wa,{key:function(t){if(t.key){var e=P_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Jo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?N_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hf,charCode:function(t){return t.type==="keypress"?Jo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Jo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),U_=wn(I_),F_=mt({},Ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cp=wn(F_),k_=mt({},Wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hf}),O_=wn(k_),z_=mt({},js,{propertyName:0,elapsedTime:0,pseudoElement:0}),B_=wn(z_),j_=mt({},Ql,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),H_=wn(j_),V_=[9,13,27,32],Vf=wi&&"CompositionEvent"in window,xa=null;wi&&"documentMode"in document&&(xa=document.documentMode);var G_=wi&&"TextEvent"in window&&!xa,c0=wi&&(!Vf||xa&&8<xa&&11>=xa),up=" ",dp=!1;function u0(t,e){switch(t){case"keyup":return V_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function d0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var as=!1;function W_(t,e){switch(t){case"compositionend":return d0(e);case"keypress":return e.which!==32?null:(dp=!0,up);case"textInput":return t=e.data,t===up&&dp?null:t;default:return null}}function X_(t,e){if(as)return t==="compositionend"||!Vf&&u0(t,e)?(t=l0(),Qo=Bf=Vi=null,as=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return c0&&e.locale!=="ko"?null:e.data;default:return null}}var $_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!$_[t.type]:e==="textarea"}function f0(t,e,n,i){Vg(i),e=wl(e,"onChange"),0<e.length&&(n=new jf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var va=null,Pa=null;function q_(t){w0(t,0)}function Jl(t){var e=cs(t);if(Fg(e))return t}function Y_(t,e){if(t==="change")return e}var h0=!1;if(wi){var Ic;if(wi){var Uc="oninput"in document;if(!Uc){var hp=document.createElement("div");hp.setAttribute("oninput","return;"),Uc=typeof hp.oninput=="function"}Ic=Uc}else Ic=!1;h0=Ic&&(!document.documentMode||9<document.documentMode)}function pp(){va&&(va.detachEvent("onpropertychange",p0),Pa=va=null)}function p0(t){if(t.propertyName==="value"&&Jl(Pa)){var e=[];f0(e,Pa,t,Uf(t)),$g(q_,e)}}function K_(t,e,n){t==="focusin"?(pp(),va=e,Pa=n,va.attachEvent("onpropertychange",p0)):t==="focusout"&&pp()}function Z_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jl(Pa)}function Q_(t,e){if(t==="click")return Jl(e)}function J_(t,e){if(t==="input"||t==="change")return Jl(e)}function ey(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qn=typeof Object.is=="function"?Object.is:ey;function Na(t,e){if(qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Fu.call(e,r)||!qn(t[r],e[r]))return!1}return!0}function mp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gp(t,e){var n=mp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mp(n)}}function m0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?m0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function g0(){for(var t=window,e=gl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=gl(t.document)}return e}function Gf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ty(t){var e=g0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&m0(n.ownerDocument.documentElement,n)){if(i!==null&&Gf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=gp(n,s);var a=gp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ny=wi&&"documentMode"in document&&11>=document.documentMode,os=null,td=null,_a=null,nd=!1;function xp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nd||os==null||os!==gl(i)||(i=os,"selectionStart"in i&&Gf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),_a&&Na(_a,i)||(_a=i,i=wl(td,"onSelect"),0<i.length&&(e=new jf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=os)))}function co(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ls={animationend:co("Animation","AnimationEnd"),animationiteration:co("Animation","AnimationIteration"),animationstart:co("Animation","AnimationStart"),transitionend:co("Transition","TransitionEnd")},Fc={},x0={};wi&&(x0=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function ec(t){if(Fc[t])return Fc[t];if(!ls[t])return t;var e=ls[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in x0)return Fc[t]=e[n];return t}var v0=ec("animationend"),_0=ec("animationiteration"),y0=ec("animationstart"),S0=ec("transitionend"),M0=new Map,vp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(t,e){M0.set(t,e),zr(e,[t])}for(var kc=0;kc<vp.length;kc++){var Oc=vp[kc],iy=Oc.toLowerCase(),ry=Oc[0].toUpperCase()+Oc.slice(1);or(iy,"on"+ry)}or(v0,"onAnimationEnd");or(_0,"onAnimationIteration");or(y0,"onAnimationStart");or("dblclick","onDoubleClick");or("focusin","onFocus");or("focusout","onBlur");or(S0,"onTransitionEnd");As("onMouseEnter",["mouseout","mouseover"]);As("onMouseLeave",["mouseout","mouseover"]);As("onPointerEnter",["pointerout","pointerover"]);As("onPointerLeave",["pointerout","pointerover"]);zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sy=new Set("cancel close invalid load scroll toggle".split(" ").concat(da));function _p(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,i_(i,e,void 0,t),t.currentTarget=null}function w0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;_p(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;_p(r,o,c),s=l}}}if(vl)throw t=Zu,vl=!1,Zu=null,t}function ot(t,e){var n=e[od];n===void 0&&(n=e[od]=new Set);var i=t+"__bubble";n.has(i)||(E0(e,t,2,!1),n.add(i))}function zc(t,e,n){var i=0;e&&(i|=4),E0(n,t,i,e)}var uo="_reactListening"+Math.random().toString(36).slice(2);function La(t){if(!t[uo]){t[uo]=!0,Ng.forEach(function(n){n!=="selectionchange"&&(sy.has(n)||zc(n,!1,t),zc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[uo]||(e[uo]=!0,zc("selectionchange",!1,e))}}function E0(t,e,n,i){switch(o0(e)){case 1:var r=__;break;case 4:r=y_;break;default:r=zf}n=r.bind(null,e,n,t),r=void 0,!Ku||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Bc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Er(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}$g(function(){var c=s,f=Uf(n),p=[];e:{var d=M0.get(t);if(d!==void 0){var m=jf,_=t;switch(t){case"keypress":if(Jo(n)===0)break e;case"keydown":case"keyup":m=U_;break;case"focusin":_="focus",m=Dc;break;case"focusout":_="blur",m=Dc;break;case"beforeblur":case"afterblur":m=Dc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=op;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=w_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=O_;break;case v0:case _0:case y0:m=T_;break;case S0:m=B_;break;case"scroll":m=S_;break;case"wheel":m=H_;break;case"copy":case"cut":case"paste":m=C_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=cp}var S=(e&4)!==0,g=!S&&t==="scroll",h=S?d!==null?d+"Capture":null:d;S=[];for(var v=c,x;v!==null;){x=v;var M=x.stateNode;if(x.tag===5&&M!==null&&(x=M,h!==null&&(M=Ta(v,h),M!=null&&S.push(Da(v,M,x)))),g)break;v=v.return}0<S.length&&(d=new m(d,_,null,n,f),p.push({event:d,listeners:S}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==qu&&(_=n.relatedTarget||n.fromElement)&&(Er(_)||_[Ei]))break e;if((m||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?Er(_):null,_!==null&&(g=Br(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(S=op,M="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(S=cp,M="onPointerLeave",h="onPointerEnter",v="pointer"),g=m==null?d:cs(m),x=_==null?d:cs(_),d=new S(M,v+"leave",m,n,f),d.target=g,d.relatedTarget=x,M=null,Er(f)===c&&(S=new S(h,v+"enter",_,n,f),S.target=x,S.relatedTarget=g,M=S),g=M,m&&_)t:{for(S=m,h=_,v=0,x=S;x;x=Vr(x))v++;for(x=0,M=h;M;M=Vr(M))x++;for(;0<v-x;)S=Vr(S),v--;for(;0<x-v;)h=Vr(h),x--;for(;v--;){if(S===h||h!==null&&S===h.alternate)break t;S=Vr(S),h=Vr(h)}S=null}else S=null;m!==null&&yp(p,d,m,S,!1),_!==null&&g!==null&&yp(p,g,_,S,!0)}}e:{if(d=c?cs(c):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var R=Y_;else if(fp(d))if(h0)R=J_;else{R=Z_;var A=K_}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(R=Q_);if(R&&(R=R(t,c))){f0(p,R,n,f);break e}A&&A(t,d,c),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&Vu(d,"number",d.value)}switch(A=c?cs(c):window,t){case"focusin":(fp(A)||A.contentEditable==="true")&&(os=A,td=c,_a=null);break;case"focusout":_a=td=os=null;break;case"mousedown":nd=!0;break;case"contextmenu":case"mouseup":case"dragend":nd=!1,xp(p,n,f);break;case"selectionchange":if(ny)break;case"keydown":case"keyup":xp(p,n,f)}var b;if(Vf)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else as?u0(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(c0&&n.locale!=="ko"&&(as||P!=="onCompositionStart"?P==="onCompositionEnd"&&as&&(b=l0()):(Vi=f,Bf="value"in Vi?Vi.value:Vi.textContent,as=!0)),A=wl(c,P),0<A.length&&(P=new lp(P,t,null,n,f),p.push({event:P,listeners:A}),b?P.data=b:(b=d0(n),b!==null&&(P.data=b)))),(b=G_?W_(t,n):X_(t,n))&&(c=wl(c,"onBeforeInput"),0<c.length&&(f=new lp("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=b))}w0(p,e)})}function Da(t,e,n){return{instance:t,listener:e,currentTarget:n}}function wl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ta(t,n),s!=null&&i.unshift(Da(t,s,r)),s=Ta(t,e),s!=null&&i.push(Da(t,s,r))),t=t.return}return i}function Vr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function yp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Ta(n,s),l!=null&&a.unshift(Da(n,l,o))):r||(l=Ta(n,s),l!=null&&a.push(Da(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var ay=/\r\n?/g,oy=/\u0000|\uFFFD/g;function Sp(t){return(typeof t=="string"?t:""+t).replace(ay,`
`).replace(oy,"")}function fo(t,e,n){if(e=Sp(e),Sp(t)!==e&&n)throw Error(te(425))}function El(){}var id=null,rd=null;function sd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ad=typeof setTimeout=="function"?setTimeout:void 0,ly=typeof clearTimeout=="function"?clearTimeout:void 0,Mp=typeof Promise=="function"?Promise:void 0,cy=typeof queueMicrotask=="function"?queueMicrotask:typeof Mp<"u"?function(t){return Mp.resolve(null).then(t).catch(uy)}:ad;function uy(t){setTimeout(function(){throw t})}function jc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ra(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ra(e)}function Ki(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function wp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Hs=Math.random().toString(36).slice(2),ni="__reactFiber$"+Hs,Ia="__reactProps$"+Hs,Ei="__reactContainer$"+Hs,od="__reactEvents$"+Hs,dy="__reactListeners$"+Hs,fy="__reactHandles$"+Hs;function Er(t){var e=t[ni];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ei]||n[ni]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=wp(t);t!==null;){if(n=t[ni])return n;t=wp(t)}return e}t=n,n=t.parentNode}return null}function Xa(t){return t=t[ni]||t[Ei],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function tc(t){return t[Ia]||null}var ld=[],us=-1;function lr(t){return{current:t}}function ct(t){0>us||(t.current=ld[us],ld[us]=null,us--)}function rt(t,e){us++,ld[us]=t.current,t.current=e}var rr={},Gt=lr(rr),ln=lr(!1),Lr=rr;function Cs(t,e){var n=t.type.contextTypes;if(!n)return rr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function cn(t){return t=t.childContextTypes,t!=null}function bl(){ct(ln),ct(Gt)}function Ep(t,e,n){if(Gt.current!==rr)throw Error(te(168));rt(Gt,e),rt(ln,n)}function b0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,Kv(t)||"Unknown",r));return mt({},n,i)}function Tl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||rr,Lr=Gt.current,rt(Gt,t),rt(ln,ln.current),!0}function bp(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=b0(t,e,Lr),i.__reactInternalMemoizedMergedChildContext=t,ct(ln),ct(Gt),rt(Gt,t)):ct(ln),rt(ln,n)}var mi=null,nc=!1,Hc=!1;function T0(t){mi===null?mi=[t]:mi.push(t)}function hy(t){nc=!0,T0(t)}function cr(){if(!Hc&&mi!==null){Hc=!0;var t=0,e=et;try{var n=mi;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}mi=null,nc=!1}catch(r){throw mi!==null&&(mi=mi.slice(t+1)),Zg(Ff,cr),r}finally{et=e,Hc=!1}}return null}var ds=[],fs=0,Al=null,Cl=0,Tn=[],An=0,Dr=null,xi=1,vi="";function vr(t,e){ds[fs++]=Cl,ds[fs++]=Al,Al=t,Cl=e}function A0(t,e,n){Tn[An++]=xi,Tn[An++]=vi,Tn[An++]=Dr,Dr=t;var i=xi;t=vi;var r=32-Xn(i)-1;i&=~(1<<r),n+=1;var s=32-Xn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,xi=1<<32-Xn(e)+r|n<<r|i,vi=s+t}else xi=1<<s|n<<r|i,vi=t}function Wf(t){t.return!==null&&(vr(t,1),A0(t,1,0))}function Xf(t){for(;t===Al;)Al=ds[--fs],ds[fs]=null,Cl=ds[--fs],ds[fs]=null;for(;t===Dr;)Dr=Tn[--An],Tn[An]=null,vi=Tn[--An],Tn[An]=null,xi=Tn[--An],Tn[An]=null}var yn=null,_n=null,dt=!1,Vn=null;function C0(t,e){var n=Pn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Tp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yn=t,_n=Ki(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yn=t,_n=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Dr!==null?{id:xi,overflow:vi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Pn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yn=t,_n=null,!0):!1;default:return!1}}function cd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ud(t){if(dt){var e=_n;if(e){var n=e;if(!Tp(t,e)){if(cd(t))throw Error(te(418));e=Ki(n.nextSibling);var i=yn;e&&Tp(t,e)?C0(i,n):(t.flags=t.flags&-4097|2,dt=!1,yn=t)}}else{if(cd(t))throw Error(te(418));t.flags=t.flags&-4097|2,dt=!1,yn=t}}}function Ap(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yn=t}function ho(t){if(t!==yn)return!1;if(!dt)return Ap(t),dt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!sd(t.type,t.memoizedProps)),e&&(e=_n)){if(cd(t))throw R0(),Error(te(418));for(;e;)C0(t,e),e=Ki(e.nextSibling)}if(Ap(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_n=Ki(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_n=null}}else _n=yn?Ki(t.stateNode.nextSibling):null;return!0}function R0(){for(var t=_n;t;)t=Ki(t.nextSibling)}function Rs(){_n=yn=null,dt=!1}function $f(t){Vn===null?Vn=[t]:Vn.push(t)}var py=Ci.ReactCurrentBatchConfig;function Zs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function po(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Cp(t){var e=t._init;return e(t._payload)}function P0(t){function e(h,v){if(t){var x=h.deletions;x===null?(h.deletions=[v],h.flags|=16):x.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=er(h,v),h.index=0,h.sibling=null,h}function s(h,v,x){return h.index=x,t?(x=h.alternate,x!==null?(x=x.index,x<v?(h.flags|=2,v):x):(h.flags|=2,v)):(h.flags|=1048576,v)}function a(h){return t&&h.alternate===null&&(h.flags|=2),h}function o(h,v,x,M){return v===null||v.tag!==6?(v=Yc(x,h.mode,M),v.return=h,v):(v=r(v,x),v.return=h,v)}function l(h,v,x,M){var R=x.type;return R===ss?f(h,v,x.props.children,M,x.key):v!==null&&(v.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Oi&&Cp(R)===v.type)?(M=r(v,x.props),M.ref=Zs(h,v,x),M.return=h,M):(M=al(x.type,x.key,x.props,null,h.mode,M),M.ref=Zs(h,v,x),M.return=h,M)}function c(h,v,x,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Kc(x,h.mode,M),v.return=h,v):(v=r(v,x.children||[]),v.return=h,v)}function f(h,v,x,M,R){return v===null||v.tag!==7?(v=Pr(x,h.mode,M,R),v.return=h,v):(v=r(v,x),v.return=h,v)}function p(h,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Yc(""+v,h.mode,x),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case no:return x=al(v.type,v.key,v.props,null,h.mode,x),x.ref=Zs(h,null,v),x.return=h,x;case rs:return v=Kc(v,h.mode,x),v.return=h,v;case Oi:var M=v._init;return p(h,M(v._payload),x)}if(ca(v)||Xs(v))return v=Pr(v,h.mode,x,null),v.return=h,v;po(h,v)}return null}function d(h,v,x,M){var R=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return R!==null?null:o(h,v,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case no:return x.key===R?l(h,v,x,M):null;case rs:return x.key===R?c(h,v,x,M):null;case Oi:return R=x._init,d(h,v,R(x._payload),M)}if(ca(x)||Xs(x))return R!==null?null:f(h,v,x,M,null);po(h,x)}return null}function m(h,v,x,M,R){if(typeof M=="string"&&M!==""||typeof M=="number")return h=h.get(x)||null,o(v,h,""+M,R);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case no:return h=h.get(M.key===null?x:M.key)||null,l(v,h,M,R);case rs:return h=h.get(M.key===null?x:M.key)||null,c(v,h,M,R);case Oi:var A=M._init;return m(h,v,x,A(M._payload),R)}if(ca(M)||Xs(M))return h=h.get(x)||null,f(v,h,M,R,null);po(v,M)}return null}function _(h,v,x,M){for(var R=null,A=null,b=v,P=v=0,B=null;b!==null&&P<x.length;P++){b.index>P?(B=b,b=null):B=b.sibling;var y=d(h,b,x[P],M);if(y===null){b===null&&(b=B);break}t&&b&&y.alternate===null&&e(h,b),v=s(y,v,P),A===null?R=y:A.sibling=y,A=y,b=B}if(P===x.length)return n(h,b),dt&&vr(h,P),R;if(b===null){for(;P<x.length;P++)b=p(h,x[P],M),b!==null&&(v=s(b,v,P),A===null?R=b:A.sibling=b,A=b);return dt&&vr(h,P),R}for(b=i(h,b);P<x.length;P++)B=m(b,h,P,x[P],M),B!==null&&(t&&B.alternate!==null&&b.delete(B.key===null?P:B.key),v=s(B,v,P),A===null?R=B:A.sibling=B,A=B);return t&&b.forEach(function(T){return e(h,T)}),dt&&vr(h,P),R}function S(h,v,x,M){var R=Xs(x);if(typeof R!="function")throw Error(te(150));if(x=R.call(x),x==null)throw Error(te(151));for(var A=R=null,b=v,P=v=0,B=null,y=x.next();b!==null&&!y.done;P++,y=x.next()){b.index>P?(B=b,b=null):B=b.sibling;var T=d(h,b,y.value,M);if(T===null){b===null&&(b=B);break}t&&b&&T.alternate===null&&e(h,b),v=s(T,v,P),A===null?R=T:A.sibling=T,A=T,b=B}if(y.done)return n(h,b),dt&&vr(h,P),R;if(b===null){for(;!y.done;P++,y=x.next())y=p(h,y.value,M),y!==null&&(v=s(y,v,P),A===null?R=y:A.sibling=y,A=y);return dt&&vr(h,P),R}for(b=i(h,b);!y.done;P++,y=x.next())y=m(b,h,P,y.value,M),y!==null&&(t&&y.alternate!==null&&b.delete(y.key===null?P:y.key),v=s(y,v,P),A===null?R=y:A.sibling=y,A=y);return t&&b.forEach(function(H){return e(h,H)}),dt&&vr(h,P),R}function g(h,v,x,M){if(typeof x=="object"&&x!==null&&x.type===ss&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case no:e:{for(var R=x.key,A=v;A!==null;){if(A.key===R){if(R=x.type,R===ss){if(A.tag===7){n(h,A.sibling),v=r(A,x.props.children),v.return=h,h=v;break e}}else if(A.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Oi&&Cp(R)===A.type){n(h,A.sibling),v=r(A,x.props),v.ref=Zs(h,A,x),v.return=h,h=v;break e}n(h,A);break}else e(h,A);A=A.sibling}x.type===ss?(v=Pr(x.props.children,h.mode,M,x.key),v.return=h,h=v):(M=al(x.type,x.key,x.props,null,h.mode,M),M.ref=Zs(h,v,x),M.return=h,h=M)}return a(h);case rs:e:{for(A=x.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(h,v.sibling),v=r(v,x.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=Kc(x,h.mode,M),v.return=h,h=v}return a(h);case Oi:return A=x._init,g(h,v,A(x._payload),M)}if(ca(x))return _(h,v,x,M);if(Xs(x))return S(h,v,x,M);po(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(h,v.sibling),v=r(v,x),v.return=h,h=v):(n(h,v),v=Yc(x,h.mode,M),v.return=h,h=v),a(h)):n(h,v)}return g}var Ps=P0(!0),N0=P0(!1),Rl=lr(null),Pl=null,hs=null,qf=null;function Yf(){qf=hs=Pl=null}function Kf(t){var e=Rl.current;ct(Rl),t._currentValue=e}function dd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ss(t,e){Pl=t,qf=hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(on=!0),t.firstContext=null)}function In(t){var e=t._currentValue;if(qf!==t)if(t={context:t,memoizedValue:e,next:null},hs===null){if(Pl===null)throw Error(te(308));hs=t,Pl.dependencies={lanes:0,firstContext:t}}else hs=hs.next=t;return e}var br=null;function Zf(t){br===null?br=[t]:br.push(t)}function L0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Zf(e)):(n.next=r.next,r.next=n),e.interleaved=n,bi(t,i)}function bi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var zi=!1;function Qf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function D0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Si(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,We&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,bi(t,n)}return r=i.interleaved,r===null?(e.next=e,Zf(i)):(e.next=r.next,r.next=e),i.interleaved=e,bi(t,n)}function el(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,kf(t,n)}}function Rp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Nl(t,e,n,i){var r=t.updateQueue;zi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;a=0,f=c=l=null,o=s;do{var d=o.lane,m=o.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,S=o;switch(d=e,m=n,S.tag){case 1:if(_=S.payload,typeof _=="function"){p=_.call(m,p,d);break e}p=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=S.payload,d=typeof _=="function"?_.call(m,p,d):_,d==null)break e;p=mt({},p,d);break e;case 2:zi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else m={eventTime:m,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=m,l=p):f=f.next=m,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ur|=a,t.lanes=a,t.memoizedState=p}}function Pp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var $a={},si=lr($a),Ua=lr($a),Fa=lr($a);function Tr(t){if(t===$a)throw Error(te(174));return t}function Jf(t,e){switch(rt(Fa,e),rt(Ua,t),rt(si,$a),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Wu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Wu(e,t)}ct(si),rt(si,e)}function Ns(){ct(si),ct(Ua),ct(Fa)}function I0(t){Tr(Fa.current);var e=Tr(si.current),n=Wu(e,t.type);e!==n&&(rt(Ua,t),rt(si,n))}function eh(t){Ua.current===t&&(ct(si),ct(Ua))}var ft=lr(0);function Ll(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Vc=[];function th(){for(var t=0;t<Vc.length;t++)Vc[t]._workInProgressVersionPrimary=null;Vc.length=0}var tl=Ci.ReactCurrentDispatcher,Gc=Ci.ReactCurrentBatchConfig,Ir=0,pt=null,wt=null,Pt=null,Dl=!1,ya=!1,ka=0,my=0;function kt(){throw Error(te(321))}function nh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qn(t[n],e[n]))return!1;return!0}function ih(t,e,n,i,r,s){if(Ir=s,pt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tl.current=t===null||t.memoizedState===null?_y:yy,t=n(i,r),ya){s=0;do{if(ya=!1,ka=0,25<=s)throw Error(te(301));s+=1,Pt=wt=null,e.updateQueue=null,tl.current=Sy,t=n(i,r)}while(ya)}if(tl.current=Il,e=wt!==null&&wt.next!==null,Ir=0,Pt=wt=pt=null,Dl=!1,e)throw Error(te(300));return t}function rh(){var t=ka!==0;return ka=0,t}function Jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?pt.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function Un(){if(wt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Pt===null?pt.memoizedState:Pt.next;if(e!==null)Pt=e,wt=t;else{if(t===null)throw Error(te(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Pt===null?pt.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function Oa(t,e){return typeof e=="function"?e(t):e}function Wc(t){var e=Un(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=wt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var f=c.lane;if((Ir&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=p,a=i):l=l.next=p,pt.lanes|=f,Ur|=f}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,qn(i,e.memoizedState)||(on=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,pt.lanes|=s,Ur|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Xc(t){var e=Un(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);qn(s,e.memoizedState)||(on=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function U0(){}function F0(t,e){var n=pt,i=Un(),r=e(),s=!qn(i.memoizedState,r);if(s&&(i.memoizedState=r,on=!0),i=i.queue,sh(z0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Pt!==null&&Pt.memoizedState.tag&1){if(n.flags|=2048,za(9,O0.bind(null,n,i,r,e),void 0,null),Nt===null)throw Error(te(349));Ir&30||k0(n,e,r)}return r}function k0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function O0(t,e,n,i){e.value=n,e.getSnapshot=i,B0(e)&&j0(t)}function z0(t,e,n){return n(function(){B0(e)&&j0(t)})}function B0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qn(t,n)}catch{return!0}}function j0(t){var e=bi(t,1);e!==null&&$n(e,t,1,-1)}function Np(t){var e=Jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:t},e.queue=t,t=t.dispatch=vy.bind(null,pt,t),[e.memoizedState,t]}function za(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function H0(){return Un().memoizedState}function nl(t,e,n,i){var r=Jn();pt.flags|=t,r.memoizedState=za(1|e,n,void 0,i===void 0?null:i)}function ic(t,e,n,i){var r=Un();i=i===void 0?null:i;var s=void 0;if(wt!==null){var a=wt.memoizedState;if(s=a.destroy,i!==null&&nh(i,a.deps)){r.memoizedState=za(e,n,s,i);return}}pt.flags|=t,r.memoizedState=za(1|e,n,s,i)}function Lp(t,e){return nl(8390656,8,t,e)}function sh(t,e){return ic(2048,8,t,e)}function V0(t,e){return ic(4,2,t,e)}function G0(t,e){return ic(4,4,t,e)}function W0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function X0(t,e,n){return n=n!=null?n.concat([t]):null,ic(4,4,W0.bind(null,e,t),n)}function ah(){}function $0(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&nh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function q0(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&nh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Y0(t,e,n){return Ir&21?(qn(n,e)||(n=e0(),pt.lanes|=n,Ur|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,on=!0),t.memoizedState=n)}function gy(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=Gc.transition;Gc.transition={};try{t(!1),e()}finally{et=n,Gc.transition=i}}function K0(){return Un().memoizedState}function xy(t,e,n){var i=Ji(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Z0(t))Q0(e,n);else if(n=L0(t,e,n,i),n!==null){var r=$t();$n(n,t,i,r),J0(n,e,i)}}function vy(t,e,n){var i=Ji(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Z0(t))Q0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,qn(o,a)){var l=e.interleaved;l===null?(r.next=r,Zf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=L0(t,e,r,i),n!==null&&(r=$t(),$n(n,t,i,r),J0(n,e,i))}}function Z0(t){var e=t.alternate;return t===pt||e!==null&&e===pt}function Q0(t,e){ya=Dl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function J0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,kf(t,n)}}var Il={readContext:In,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},_y={readContext:In,useCallback:function(t,e){return Jn().memoizedState=[t,e===void 0?null:e],t},useContext:In,useEffect:Lp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,nl(4194308,4,W0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return nl(4,2,t,e)},useMemo:function(t,e){var n=Jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Jn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=xy.bind(null,pt,t),[i.memoizedState,t]},useRef:function(t){var e=Jn();return t={current:t},e.memoizedState=t},useState:Np,useDebugValue:ah,useDeferredValue:function(t){return Jn().memoizedState=t},useTransition:function(){var t=Np(!1),e=t[0];return t=gy.bind(null,t[1]),Jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=pt,r=Jn();if(dt){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Nt===null)throw Error(te(349));Ir&30||k0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Lp(z0.bind(null,i,s,t),[t]),i.flags|=2048,za(9,O0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Jn(),e=Nt.identifierPrefix;if(dt){var n=vi,i=xi;n=(i&~(1<<32-Xn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ka++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=my++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},yy={readContext:In,useCallback:$0,useContext:In,useEffect:sh,useImperativeHandle:X0,useInsertionEffect:V0,useLayoutEffect:G0,useMemo:q0,useReducer:Wc,useRef:H0,useState:function(){return Wc(Oa)},useDebugValue:ah,useDeferredValue:function(t){var e=Un();return Y0(e,wt.memoizedState,t)},useTransition:function(){var t=Wc(Oa)[0],e=Un().memoizedState;return[t,e]},useMutableSource:U0,useSyncExternalStore:F0,useId:K0,unstable_isNewReconciler:!1},Sy={readContext:In,useCallback:$0,useContext:In,useEffect:sh,useImperativeHandle:X0,useInsertionEffect:V0,useLayoutEffect:G0,useMemo:q0,useReducer:Xc,useRef:H0,useState:function(){return Xc(Oa)},useDebugValue:ah,useDeferredValue:function(t){var e=Un();return wt===null?e.memoizedState=t:Y0(e,wt.memoizedState,t)},useTransition:function(){var t=Xc(Oa)[0],e=Un().memoizedState;return[t,e]},useMutableSource:U0,useSyncExternalStore:F0,useId:K0,unstable_isNewReconciler:!1};function jn(t,e){if(t&&t.defaultProps){e=mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function fd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var rc={isMounted:function(t){return(t=t._reactInternals)?Br(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=$t(),r=Ji(t),s=Si(i,r);s.payload=e,n!=null&&(s.callback=n),e=Zi(t,s,r),e!==null&&($n(e,t,r,i),el(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=$t(),r=Ji(t),s=Si(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Zi(t,s,r),e!==null&&($n(e,t,r,i),el(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=$t(),i=Ji(t),r=Si(n,i);r.tag=2,e!=null&&(r.callback=e),e=Zi(t,r,i),e!==null&&($n(e,t,i,n),el(e,t,i))}};function Dp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Na(n,i)||!Na(r,s):!0}function ex(t,e,n){var i=!1,r=rr,s=e.contextType;return typeof s=="object"&&s!==null?s=In(s):(r=cn(e)?Lr:Gt.current,i=e.contextTypes,s=(i=i!=null)?Cs(t,r):rr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=rc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ip(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&rc.enqueueReplaceState(e,e.state,null)}function hd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Qf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=In(s):(s=cn(e)?Lr:Gt.current,r.context=Cs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(fd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&rc.enqueueReplaceState(r,r.state,null),Nl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ls(t,e){try{var n="",i=e;do n+=Yv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function $c(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function pd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var My=typeof WeakMap=="function"?WeakMap:Map;function tx(t,e,n){n=Si(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Fl||(Fl=!0,Ed=i),pd(t,e)},n}function nx(t,e,n){n=Si(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){pd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){pd(t,e),typeof i!="function"&&(Qi===null?Qi=new Set([this]):Qi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Up(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new My;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Fy.bind(null,t,e,n),e.then(t,t))}function Fp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function kp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Si(-1,1),e.tag=2,Zi(n,e,1))),n.lanes|=1),t)}var wy=Ci.ReactCurrentOwner,on=!1;function Xt(t,e,n,i){e.child=t===null?N0(e,null,n,i):Ps(e,t.child,n,i)}function Op(t,e,n,i,r){n=n.render;var s=e.ref;return Ss(e,r),i=ih(t,e,n,i,s,r),n=rh(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ti(t,e,r)):(dt&&n&&Wf(e),e.flags|=1,Xt(t,e,i,r),e.child)}function zp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!ph(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ix(t,e,s,i,r)):(t=al(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Na,n(a,i)&&t.ref===e.ref)return Ti(t,e,r)}return e.flags|=1,t=er(s,i),t.ref=e.ref,t.return=e,e.child=t}function ix(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Na(s,i)&&t.ref===e.ref)if(on=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(on=!0);else return e.lanes=t.lanes,Ti(t,e,r)}return md(t,e,n,i,r)}function rx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(ms,xn),xn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,rt(ms,xn),xn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,rt(ms,xn),xn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,rt(ms,xn),xn|=i;return Xt(t,e,r,n),e.child}function sx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function md(t,e,n,i,r){var s=cn(n)?Lr:Gt.current;return s=Cs(e,s),Ss(e,r),n=ih(t,e,n,i,s,r),i=rh(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ti(t,e,r)):(dt&&i&&Wf(e),e.flags|=1,Xt(t,e,n,r),e.child)}function Bp(t,e,n,i,r){if(cn(n)){var s=!0;Tl(e)}else s=!1;if(Ss(e,r),e.stateNode===null)il(t,e),ex(e,n,i),hd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=In(c):(c=cn(n)?Lr:Gt.current,c=Cs(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Ip(e,a,i,c),zi=!1;var d=e.memoizedState;a.state=d,Nl(e,i,a,r),l=e.memoizedState,o!==i||d!==l||ln.current||zi?(typeof f=="function"&&(fd(e,n,f,i),l=e.memoizedState),(o=zi||Dp(e,n,o,i,d,l,c))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,D0(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:jn(e.type,o),a.props=c,p=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=In(l):(l=cn(n)?Lr:Gt.current,l=Cs(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||d!==l)&&Ip(e,a,i,l),zi=!1,d=e.memoizedState,a.state=d,Nl(e,i,a,r);var _=e.memoizedState;o!==p||d!==_||ln.current||zi?(typeof m=="function"&&(fd(e,n,m,i),_=e.memoizedState),(c=zi||Dp(e,n,c,i,d,_,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return gd(t,e,n,i,s,r)}function gd(t,e,n,i,r,s){sx(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&bp(e,n,!1),Ti(t,e,s);i=e.stateNode,wy.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ps(e,t.child,null,s),e.child=Ps(e,null,o,s)):Xt(t,e,o,s),e.memoizedState=i.state,r&&bp(e,n,!0),e.child}function ax(t){var e=t.stateNode;e.pendingContext?Ep(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ep(t,e.context,!1),Jf(t,e.containerInfo)}function jp(t,e,n,i,r){return Rs(),$f(r),e.flags|=256,Xt(t,e,n,i),e.child}var xd={dehydrated:null,treeContext:null,retryLane:0};function vd(t){return{baseLanes:t,cachePool:null,transitions:null}}function ox(t,e,n){var i=e.pendingProps,r=ft.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),rt(ft,r&1),t===null)return ud(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=oc(a,i,0,null),t=Pr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=vd(n),e.memoizedState=xd,t):oh(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Ey(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=er(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=er(o,s):(s=Pr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?vd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=xd,i}return s=t.child,t=s.sibling,i=er(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function oh(t,e){return e=oc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function mo(t,e,n,i){return i!==null&&$f(i),Ps(e,t.child,null,n),t=oh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ey(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=$c(Error(te(422))),mo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=oc({mode:"visible",children:i.children},r,0,null),s=Pr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ps(e,t.child,null,a),e.child.memoizedState=vd(a),e.memoizedState=xd,s);if(!(e.mode&1))return mo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(te(419)),i=$c(s,i,void 0),mo(t,e,a,i)}if(o=(a&t.childLanes)!==0,on||o){if(i=Nt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,bi(t,r),$n(i,t,r,-1))}return hh(),i=$c(Error(te(421))),mo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ky.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,_n=Ki(r.nextSibling),yn=e,dt=!0,Vn=null,t!==null&&(Tn[An++]=xi,Tn[An++]=vi,Tn[An++]=Dr,xi=t.id,vi=t.overflow,Dr=e),e=oh(e,i.children),e.flags|=4096,e)}function Hp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),dd(t.return,e,n)}function qc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function lx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Xt(t,e,i.children,n),i=ft.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Hp(t,n,e);else if(t.tag===19)Hp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(rt(ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ll(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),qc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ll(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}qc(e,!0,n,null,s);break;case"together":qc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function il(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ti(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ur|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function by(t,e,n){switch(e.tag){case 3:ax(e),Rs();break;case 5:I0(e);break;case 1:cn(e.type)&&Tl(e);break;case 4:Jf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;rt(Rl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(rt(ft,ft.current&1),e.flags|=128,null):n&e.child.childLanes?ox(t,e,n):(rt(ft,ft.current&1),t=Ti(t,e,n),t!==null?t.sibling:null);rt(ft,ft.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return lx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),rt(ft,ft.current),i)break;return null;case 22:case 23:return e.lanes=0,rx(t,e,n)}return Ti(t,e,n)}var cx,_d,ux,dx;cx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_d=function(){};ux=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Tr(si.current);var s=null;switch(n){case"input":r=ju(t,r),i=ju(t,i),s=[];break;case"select":r=mt({},r,{value:void 0}),i=mt({},i,{value:void 0}),s=[];break;case"textarea":r=Gu(t,r),i=Gu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=El)}Xu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ea.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ea.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ot("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};dx=function(t,e,n,i){n!==i&&(e.flags|=4)};function Qs(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Ty(t,e,n){var i=e.pendingProps;switch(Xf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(e),null;case 1:return cn(e.type)&&bl(),Ot(e),null;case 3:return i=e.stateNode,Ns(),ct(ln),ct(Gt),th(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ho(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vn!==null&&(Ad(Vn),Vn=null))),_d(t,e),Ot(e),null;case 5:eh(e);var r=Tr(Fa.current);if(n=e.type,t!==null&&e.stateNode!=null)ux(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Ot(e),null}if(t=Tr(si.current),ho(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ni]=e,i[Ia]=s,t=(e.mode&1)!==0,n){case"dialog":ot("cancel",i),ot("close",i);break;case"iframe":case"object":case"embed":ot("load",i);break;case"video":case"audio":for(r=0;r<da.length;r++)ot(da[r],i);break;case"source":ot("error",i);break;case"img":case"image":case"link":ot("error",i),ot("load",i);break;case"details":ot("toggle",i);break;case"input":Zh(i,s),ot("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ot("invalid",i);break;case"textarea":Jh(i,s),ot("invalid",i)}Xu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&fo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&fo(i.textContent,o,t),r=["children",""+o]):Ea.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ot("scroll",i)}switch(n){case"input":io(i),Qh(i,s,!0);break;case"textarea":io(i),ep(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=El)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=zg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ni]=e,t[Ia]=i,cx(t,e,!1,!1),e.stateNode=t;e:{switch(a=$u(n,i),n){case"dialog":ot("cancel",t),ot("close",t),r=i;break;case"iframe":case"object":case"embed":ot("load",t),r=i;break;case"video":case"audio":for(r=0;r<da.length;r++)ot(da[r],t);r=i;break;case"source":ot("error",t),r=i;break;case"img":case"image":case"link":ot("error",t),ot("load",t),r=i;break;case"details":ot("toggle",t),r=i;break;case"input":Zh(t,i),r=ju(t,i),ot("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=mt({},i,{value:void 0}),ot("invalid",t);break;case"textarea":Jh(t,i),r=Gu(t,i),ot("invalid",t);break;default:r=i}Xu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Hg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Bg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ba(t,l):typeof l=="number"&&ba(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ea.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ot("scroll",t):l!=null&&Nf(t,s,l,a))}switch(n){case"input":io(t),Qh(t,i,!1);break;case"textarea":io(t),ep(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ir(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?xs(t,!!i.multiple,s,!1):i.defaultValue!=null&&xs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=El)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ot(e),null;case 6:if(t&&e.stateNode!=null)dx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=Tr(Fa.current),Tr(si.current),ho(e)){if(i=e.stateNode,n=e.memoizedProps,i[ni]=e,(s=i.nodeValue!==n)&&(t=yn,t!==null))switch(t.tag){case 3:fo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ni]=e,e.stateNode=i}return Ot(e),null;case 13:if(ct(ft),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(dt&&_n!==null&&e.mode&1&&!(e.flags&128))R0(),Rs(),e.flags|=98560,s=!1;else if(s=ho(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[ni]=e}else Rs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ot(e),s=!1}else Vn!==null&&(Ad(Vn),Vn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ft.current&1?Et===0&&(Et=3):hh())),e.updateQueue!==null&&(e.flags|=4),Ot(e),null);case 4:return Ns(),_d(t,e),t===null&&La(e.stateNode.containerInfo),Ot(e),null;case 10:return Kf(e.type._context),Ot(e),null;case 17:return cn(e.type)&&bl(),Ot(e),null;case 19:if(ct(ft),s=e.memoizedState,s===null)return Ot(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Qs(s,!1);else{if(Et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Ll(t),a!==null){for(e.flags|=128,Qs(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return rt(ft,ft.current&1|2),e.child}t=t.sibling}s.tail!==null&&_t()>Ds&&(e.flags|=128,i=!0,Qs(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ll(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Qs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!dt)return Ot(e),null}else 2*_t()-s.renderingStartTime>Ds&&n!==1073741824&&(e.flags|=128,i=!0,Qs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=_t(),e.sibling=null,n=ft.current,rt(ft,i?n&1|2:n&1),e):(Ot(e),null);case 22:case 23:return fh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?xn&1073741824&&(Ot(e),e.subtreeFlags&6&&(e.flags|=8192)):Ot(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function Ay(t,e){switch(Xf(e),e.tag){case 1:return cn(e.type)&&bl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ns(),ct(ln),ct(Gt),th(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return eh(e),null;case 13:if(ct(ft),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));Rs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ct(ft),null;case 4:return Ns(),null;case 10:return Kf(e.type._context),null;case 22:case 23:return fh(),null;case 24:return null;default:return null}}var go=!1,jt=!1,Cy=typeof WeakSet=="function"?WeakSet:Set,me=null;function ps(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){xt(t,e,i)}else n.current=null}function yd(t,e,n){try{n()}catch(i){xt(t,e,i)}}var Vp=!1;function Ry(t,e){if(id=Sl,t=g0(),Gf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,f=0,p=t,d=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(l=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)d=p,p=m;for(;;){if(p===t)break t;if(d===n&&++c===r&&(o=a),d===s&&++f===i&&(l=a),(m=p.nextSibling)!==null)break;p=d,d=p.parentNode}p=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(rd={focusedElem:t,selectionRange:n},Sl=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var S=_.memoizedProps,g=_.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?S:jn(e.type,S),g);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(M){xt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return _=Vp,Vp=!1,_}function Sa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&yd(e,n,s)}r=r.next}while(r!==i)}}function sc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Sd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function fx(t){var e=t.alternate;e!==null&&(t.alternate=null,fx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ni],delete e[Ia],delete e[od],delete e[dy],delete e[fy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function hx(t){return t.tag===5||t.tag===3||t.tag===4}function Gp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||hx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Md(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=El));else if(i!==4&&(t=t.child,t!==null))for(Md(t,e,n),t=t.sibling;t!==null;)Md(t,e,n),t=t.sibling}function wd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(wd(t,e,n),t=t.sibling;t!==null;)wd(t,e,n),t=t.sibling}var Dt=null,Hn=!1;function Ni(t,e,n){for(n=n.child;n!==null;)px(t,e,n),n=n.sibling}function px(t,e,n){if(ri&&typeof ri.onCommitFiberUnmount=="function")try{ri.onCommitFiberUnmount(Zl,n)}catch{}switch(n.tag){case 5:jt||ps(n,e);case 6:var i=Dt,r=Hn;Dt=null,Ni(t,e,n),Dt=i,Hn=r,Dt!==null&&(Hn?(t=Dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Dt.removeChild(n.stateNode));break;case 18:Dt!==null&&(Hn?(t=Dt,n=n.stateNode,t.nodeType===8?jc(t.parentNode,n):t.nodeType===1&&jc(t,n),Ra(t)):jc(Dt,n.stateNode));break;case 4:i=Dt,r=Hn,Dt=n.stateNode.containerInfo,Hn=!0,Ni(t,e,n),Dt=i,Hn=r;break;case 0:case 11:case 14:case 15:if(!jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&yd(n,e,a),r=r.next}while(r!==i)}Ni(t,e,n);break;case 1:if(!jt&&(ps(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){xt(n,e,o)}Ni(t,e,n);break;case 21:Ni(t,e,n);break;case 22:n.mode&1?(jt=(i=jt)||n.memoizedState!==null,Ni(t,e,n),jt=i):Ni(t,e,n);break;default:Ni(t,e,n)}}function Wp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Cy),e.forEach(function(i){var r=Oy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Dt=o.stateNode,Hn=!1;break e;case 3:Dt=o.stateNode.containerInfo,Hn=!0;break e;case 4:Dt=o.stateNode.containerInfo,Hn=!0;break e}o=o.return}if(Dt===null)throw Error(te(160));px(s,a,r),Dt=null,Hn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){xt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)mx(e,t),e=e.sibling}function mx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kn(e,t),Kn(t),i&4){try{Sa(3,t,t.return),sc(3,t)}catch(S){xt(t,t.return,S)}try{Sa(5,t,t.return)}catch(S){xt(t,t.return,S)}}break;case 1:kn(e,t),Kn(t),i&512&&n!==null&&ps(n,n.return);break;case 5:if(kn(e,t),Kn(t),i&512&&n!==null&&ps(n,n.return),t.flags&32){var r=t.stateNode;try{ba(r,"")}catch(S){xt(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&kg(r,s),$u(o,a);var c=$u(o,s);for(a=0;a<l.length;a+=2){var f=l[a],p=l[a+1];f==="style"?Hg(r,p):f==="dangerouslySetInnerHTML"?Bg(r,p):f==="children"?ba(r,p):Nf(r,f,p,c)}switch(o){case"input":Hu(r,s);break;case"textarea":Og(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?xs(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?xs(r,!!s.multiple,s.defaultValue,!0):xs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ia]=s}catch(S){xt(t,t.return,S)}}break;case 6:if(kn(e,t),Kn(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){xt(t,t.return,S)}}break;case 3:if(kn(e,t),Kn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ra(e.containerInfo)}catch(S){xt(t,t.return,S)}break;case 4:kn(e,t),Kn(t);break;case 13:kn(e,t),Kn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(uh=_t())),i&4&&Wp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(jt=(c=jt)||f,kn(e,t),jt=c):kn(e,t),Kn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(me=t,f=t.child;f!==null;){for(p=me=f;me!==null;){switch(d=me,m=d.child,d.tag){case 0:case 11:case 14:case 15:Sa(4,d,d.return);break;case 1:ps(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(S){xt(i,n,S)}}break;case 5:ps(d,d.return);break;case 22:if(d.memoizedState!==null){$p(p);continue}}m!==null?(m.return=d,me=m):$p(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=jg("display",a))}catch(S){xt(t,t.return,S)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(S){xt(t,t.return,S)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:kn(e,t),Kn(t),i&4&&Wp(t);break;case 21:break;default:kn(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(hx(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ba(r,""),i.flags&=-33);var s=Gp(t);wd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Gp(t);Md(t,o,a);break;default:throw Error(te(161))}}catch(l){xt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Py(t,e,n){me=t,gx(t)}function gx(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||go;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||jt;o=go;var c=jt;if(go=a,(jt=l)&&!c)for(me=r;me!==null;)a=me,l=a.child,a.tag===22&&a.memoizedState!==null?qp(r):l!==null?(l.return=a,me=l):qp(r);for(;s!==null;)me=s,gx(s),s=s.sibling;me=r,go=o,jt=c}Xp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):Xp(t)}}function Xp(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||sc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Pp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Pp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Ra(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}jt||e.flags&512&&Sd(e)}catch(d){xt(e,e.return,d)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function $p(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function qp(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{sc(4,e)}catch(l){xt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){xt(e,r,l)}}var s=e.return;try{Sd(e)}catch(l){xt(e,s,l)}break;case 5:var a=e.return;try{Sd(e)}catch(l){xt(e,a,l)}}}catch(l){xt(e,e.return,l)}if(e===t){me=null;break}var o=e.sibling;if(o!==null){o.return=e.return,me=o;break}me=e.return}}var Ny=Math.ceil,Ul=Ci.ReactCurrentDispatcher,lh=Ci.ReactCurrentOwner,Ln=Ci.ReactCurrentBatchConfig,We=0,Nt=null,Mt=null,Ut=0,xn=0,ms=lr(0),Et=0,Ba=null,Ur=0,ac=0,ch=0,Ma=null,rn=null,uh=0,Ds=1/0,pi=null,Fl=!1,Ed=null,Qi=null,xo=!1,Gi=null,kl=0,wa=0,bd=null,rl=-1,sl=0;function $t(){return We&6?_t():rl!==-1?rl:rl=_t()}function Ji(t){return t.mode&1?We&2&&Ut!==0?Ut&-Ut:py.transition!==null?(sl===0&&(sl=e0()),sl):(t=et,t!==0||(t=window.event,t=t===void 0?16:o0(t.type)),t):1}function $n(t,e,n,i){if(50<wa)throw wa=0,bd=null,Error(te(185));Ga(t,n,i),(!(We&2)||t!==Nt)&&(t===Nt&&(!(We&2)&&(ac|=n),Et===4&&ji(t,Ut)),un(t,i),n===1&&We===0&&!(e.mode&1)&&(Ds=_t()+500,nc&&cr()))}function un(t,e){var n=t.callbackNode;p_(t,e);var i=yl(t,t===Nt?Ut:0);if(i===0)n!==null&&ip(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&ip(n),e===1)t.tag===0?hy(Yp.bind(null,t)):T0(Yp.bind(null,t)),cy(function(){!(We&6)&&cr()}),n=null;else{switch(t0(i)){case 1:n=Ff;break;case 4:n=Qg;break;case 16:n=_l;break;case 536870912:n=Jg;break;default:n=_l}n=Ex(n,xx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function xx(t,e){if(rl=-1,sl=0,We&6)throw Error(te(327));var n=t.callbackNode;if(Ms()&&t.callbackNode!==n)return null;var i=yl(t,t===Nt?Ut:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ol(t,i);else{e=i;var r=We;We|=2;var s=_x();(Nt!==t||Ut!==e)&&(pi=null,Ds=_t()+500,Rr(t,e));do try{Iy();break}catch(o){vx(t,o)}while(!0);Yf(),Ul.current=s,We=r,Mt!==null?e=0:(Nt=null,Ut=0,e=Et)}if(e!==0){if(e===2&&(r=Qu(t),r!==0&&(i=r,e=Td(t,r))),e===1)throw n=Ba,Rr(t,0),ji(t,i),un(t,_t()),n;if(e===6)ji(t,i);else{if(r=t.current.alternate,!(i&30)&&!Ly(r)&&(e=Ol(t,i),e===2&&(s=Qu(t),s!==0&&(i=s,e=Td(t,s))),e===1))throw n=Ba,Rr(t,0),ji(t,i),un(t,_t()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:_r(t,rn,pi);break;case 3:if(ji(t,i),(i&130023424)===i&&(e=uh+500-_t(),10<e)){if(yl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){$t(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ad(_r.bind(null,t,rn,pi),e);break}_r(t,rn,pi);break;case 4:if(ji(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Xn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=_t()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ny(i/1960))-i,10<i){t.timeoutHandle=ad(_r.bind(null,t,rn,pi),i);break}_r(t,rn,pi);break;case 5:_r(t,rn,pi);break;default:throw Error(te(329))}}}return un(t,_t()),t.callbackNode===n?xx.bind(null,t):null}function Td(t,e){var n=Ma;return t.current.memoizedState.isDehydrated&&(Rr(t,e).flags|=256),t=Ol(t,e),t!==2&&(e=rn,rn=n,e!==null&&Ad(e)),t}function Ad(t){rn===null?rn=t:rn.push.apply(rn,t)}function Ly(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!qn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ji(t,e){for(e&=~ch,e&=~ac,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xn(e),i=1<<n;t[n]=-1,e&=~i}}function Yp(t){if(We&6)throw Error(te(327));Ms();var e=yl(t,0);if(!(e&1))return un(t,_t()),null;var n=Ol(t,e);if(t.tag!==0&&n===2){var i=Qu(t);i!==0&&(e=i,n=Td(t,i))}if(n===1)throw n=Ba,Rr(t,0),ji(t,e),un(t,_t()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,_r(t,rn,pi),un(t,_t()),null}function dh(t,e){var n=We;We|=1;try{return t(e)}finally{We=n,We===0&&(Ds=_t()+500,nc&&cr())}}function Fr(t){Gi!==null&&Gi.tag===0&&!(We&6)&&Ms();var e=We;We|=1;var n=Ln.transition,i=et;try{if(Ln.transition=null,et=1,t)return t()}finally{et=i,Ln.transition=n,We=e,!(We&6)&&cr()}}function fh(){xn=ms.current,ct(ms)}function Rr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ly(n)),Mt!==null)for(n=Mt.return;n!==null;){var i=n;switch(Xf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&bl();break;case 3:Ns(),ct(ln),ct(Gt),th();break;case 5:eh(i);break;case 4:Ns();break;case 13:ct(ft);break;case 19:ct(ft);break;case 10:Kf(i.type._context);break;case 22:case 23:fh()}n=n.return}if(Nt=t,Mt=t=er(t.current,null),Ut=xn=e,Et=0,Ba=null,ch=ac=Ur=0,rn=Ma=null,br!==null){for(e=0;e<br.length;e++)if(n=br[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}br=null}return t}function vx(t,e){do{var n=Mt;try{if(Yf(),tl.current=Il,Dl){for(var i=pt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Dl=!1}if(Ir=0,Pt=wt=pt=null,ya=!1,ka=0,lh.current=null,n===null||n.return===null){Et=1,Ba=e,Mt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Ut,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=o,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Fp(a);if(m!==null){m.flags&=-257,kp(m,a,o,s,e),m.mode&1&&Up(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var S=new Set;S.add(l),e.updateQueue=S}else _.add(l);break e}else{if(!(e&1)){Up(s,c,e),hh();break e}l=Error(te(426))}}else if(dt&&o.mode&1){var g=Fp(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),kp(g,a,o,s,e),$f(Ls(l,o));break e}}s=l=Ls(l,o),Et!==4&&(Et=2),Ma===null?Ma=[s]:Ma.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=tx(s,l,e);Rp(s,h);break e;case 1:o=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Qi===null||!Qi.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=nx(s,o,e);Rp(s,M);break e}}s=s.return}while(s!==null)}Sx(n)}catch(R){e=R,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(!0)}function _x(){var t=Ul.current;return Ul.current=Il,t===null?Il:t}function hh(){(Et===0||Et===3||Et===2)&&(Et=4),Nt===null||!(Ur&268435455)&&!(ac&268435455)||ji(Nt,Ut)}function Ol(t,e){var n=We;We|=2;var i=_x();(Nt!==t||Ut!==e)&&(pi=null,Rr(t,e));do try{Dy();break}catch(r){vx(t,r)}while(!0);if(Yf(),We=n,Ul.current=i,Mt!==null)throw Error(te(261));return Nt=null,Ut=0,Et}function Dy(){for(;Mt!==null;)yx(Mt)}function Iy(){for(;Mt!==null&&!s_();)yx(Mt)}function yx(t){var e=wx(t.alternate,t,xn);t.memoizedProps=t.pendingProps,e===null?Sx(t):Mt=e,lh.current=null}function Sx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ay(n,e),n!==null){n.flags&=32767,Mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Et=6,Mt=null;return}}else if(n=Ty(n,e,xn),n!==null){Mt=n;return}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=t}while(e!==null);Et===0&&(Et=5)}function _r(t,e,n){var i=et,r=Ln.transition;try{Ln.transition=null,et=1,Uy(t,e,n,i)}finally{Ln.transition=r,et=i}return null}function Uy(t,e,n,i){do Ms();while(Gi!==null);if(We&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(m_(t,s),t===Nt&&(Mt=Nt=null,Ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xo||(xo=!0,Ex(_l,function(){return Ms(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ln.transition,Ln.transition=null;var a=et;et=1;var o=We;We|=4,lh.current=null,Ry(t,n),mx(n,t),ty(rd),Sl=!!id,rd=id=null,t.current=n,Py(n),a_(),We=o,et=a,Ln.transition=s}else t.current=n;if(xo&&(xo=!1,Gi=t,kl=r),s=t.pendingLanes,s===0&&(Qi=null),c_(n.stateNode),un(t,_t()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Fl)throw Fl=!1,t=Ed,Ed=null,t;return kl&1&&t.tag!==0&&Ms(),s=t.pendingLanes,s&1?t===bd?wa++:(wa=0,bd=t):wa=0,cr(),null}function Ms(){if(Gi!==null){var t=t0(kl),e=Ln.transition,n=et;try{if(Ln.transition=null,et=16>t?16:t,Gi===null)var i=!1;else{if(t=Gi,Gi=null,kl=0,We&6)throw Error(te(331));var r=We;for(We|=4,me=t.current;me!==null;){var s=me,a=s.child;if(me.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(me=c;me!==null;){var f=me;switch(f.tag){case 0:case 11:case 15:Sa(8,f,s)}var p=f.child;if(p!==null)p.return=f,me=p;else for(;me!==null;){f=me;var d=f.sibling,m=f.return;if(fx(f),f===c){me=null;break}if(d!==null){d.return=m,me=d;break}me=m}}}var _=s.alternate;if(_!==null){var S=_.child;if(S!==null){_.child=null;do{var g=S.sibling;S.sibling=null,S=g}while(S!==null)}}me=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,me=a;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Sa(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,me=h;break e}me=s.return}}var v=t.current;for(me=v;me!==null;){a=me;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,me=x;else e:for(a=v;me!==null;){if(o=me,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:sc(9,o)}}catch(R){xt(o,o.return,R)}if(o===a){me=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,me=M;break e}me=o.return}}if(We=r,cr(),ri&&typeof ri.onPostCommitFiberRoot=="function")try{ri.onPostCommitFiberRoot(Zl,t)}catch{}i=!0}return i}finally{et=n,Ln.transition=e}}return!1}function Kp(t,e,n){e=Ls(n,e),e=tx(t,e,1),t=Zi(t,e,1),e=$t(),t!==null&&(Ga(t,1,e),un(t,e))}function xt(t,e,n){if(t.tag===3)Kp(t,t,n);else for(;e!==null;){if(e.tag===3){Kp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Qi===null||!Qi.has(i))){t=Ls(n,t),t=nx(e,t,1),e=Zi(e,t,1),t=$t(),e!==null&&(Ga(e,1,t),un(e,t));break}}e=e.return}}function Fy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=$t(),t.pingedLanes|=t.suspendedLanes&n,Nt===t&&(Ut&n)===n&&(Et===4||Et===3&&(Ut&130023424)===Ut&&500>_t()-uh?Rr(t,0):ch|=n),un(t,e)}function Mx(t,e){e===0&&(t.mode&1?(e=ao,ao<<=1,!(ao&130023424)&&(ao=4194304)):e=1);var n=$t();t=bi(t,e),t!==null&&(Ga(t,e,n),un(t,n))}function ky(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Mx(t,n)}function Oy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),Mx(t,n)}var wx;wx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ln.current)on=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return on=!1,by(t,e,n);on=!!(t.flags&131072)}else on=!1,dt&&e.flags&1048576&&A0(e,Cl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;il(t,e),t=e.pendingProps;var r=Cs(e,Gt.current);Ss(e,n),r=ih(null,e,i,t,r,n);var s=rh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,cn(i)?(s=!0,Tl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Qf(e),r.updater=rc,e.stateNode=r,r._reactInternals=e,hd(e,i,t,n),e=gd(null,e,i,!0,s,n)):(e.tag=0,dt&&s&&Wf(e),Xt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(il(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=By(i),t=jn(i,t),r){case 0:e=md(null,e,i,t,n);break e;case 1:e=Bp(null,e,i,t,n);break e;case 11:e=Op(null,e,i,t,n);break e;case 14:e=zp(null,e,i,jn(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),md(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Bp(t,e,i,r,n);case 3:e:{if(ax(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,D0(t,e),Nl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ls(Error(te(423)),e),e=jp(t,e,i,n,r);break e}else if(i!==r){r=Ls(Error(te(424)),e),e=jp(t,e,i,n,r);break e}else for(_n=Ki(e.stateNode.containerInfo.firstChild),yn=e,dt=!0,Vn=null,n=N0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rs(),i===r){e=Ti(t,e,n);break e}Xt(t,e,i,n)}e=e.child}return e;case 5:return I0(e),t===null&&ud(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,sd(i,r)?a=null:s!==null&&sd(i,s)&&(e.flags|=32),sx(t,e),Xt(t,e,a,n),e.child;case 6:return t===null&&ud(e),null;case 13:return ox(t,e,n);case 4:return Jf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ps(e,null,i,n):Xt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Op(t,e,i,r,n);case 7:return Xt(t,e,e.pendingProps,n),e.child;case 8:return Xt(t,e,e.pendingProps.children,n),e.child;case 12:return Xt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,rt(Rl,i._currentValue),i._currentValue=a,s!==null)if(qn(s.value,a)){if(s.children===r.children&&!ln.current){e=Ti(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Si(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),dd(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(te(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),dd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Xt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ss(e,n),r=In(r),i=i(r),e.flags|=1,Xt(t,e,i,n),e.child;case 14:return i=e.type,r=jn(i,e.pendingProps),r=jn(i.type,r),zp(t,e,i,r,n);case 15:return ix(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),il(t,e),e.tag=1,cn(i)?(t=!0,Tl(e)):t=!1,Ss(e,n),ex(e,i,r),hd(e,i,r,n),gd(null,e,i,!0,t,n);case 19:return lx(t,e,n);case 22:return rx(t,e,n)}throw Error(te(156,e.tag))};function Ex(t,e){return Zg(t,e)}function zy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(t,e,n,i){return new zy(t,e,n,i)}function ph(t){return t=t.prototype,!(!t||!t.isReactComponent)}function By(t){if(typeof t=="function")return ph(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Df)return 11;if(t===If)return 14}return 2}function er(t,e){var n=t.alternate;return n===null?(n=Pn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function al(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")ph(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ss:return Pr(n.children,r,s,e);case Lf:a=8,r|=8;break;case ku:return t=Pn(12,n,e,r|2),t.elementType=ku,t.lanes=s,t;case Ou:return t=Pn(13,n,e,r),t.elementType=Ou,t.lanes=s,t;case zu:return t=Pn(19,n,e,r),t.elementType=zu,t.lanes=s,t;case Ig:return oc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Lg:a=10;break e;case Dg:a=9;break e;case Df:a=11;break e;case If:a=14;break e;case Oi:a=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=Pn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Pr(t,e,n,i){return t=Pn(7,t,i,e),t.lanes=n,t}function oc(t,e,n,i){return t=Pn(22,t,i,e),t.elementType=Ig,t.lanes=n,t.stateNode={isHidden:!1},t}function Yc(t,e,n){return t=Pn(6,t,null,e),t.lanes=n,t}function Kc(t,e,n){return e=Pn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function jy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pc(0),this.expirationTimes=Pc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function mh(t,e,n,i,r,s,a,o,l){return t=new jy(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Pn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qf(s),t}function Hy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function bx(t){if(!t)return rr;t=t._reactInternals;e:{if(Br(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(cn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(cn(n))return b0(t,n,e)}return e}function Tx(t,e,n,i,r,s,a,o,l){return t=mh(n,i,!0,t,r,s,a,o,l),t.context=bx(null),n=t.current,i=$t(),r=Ji(n),s=Si(i,r),s.callback=e??null,Zi(n,s,r),t.current.lanes=r,Ga(t,r,i),un(t,i),t}function lc(t,e,n,i){var r=e.current,s=$t(),a=Ji(r);return n=bx(n),e.context===null?e.context=n:e.pendingContext=n,e=Si(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Zi(r,e,a),t!==null&&($n(t,r,a,s),el(t,r,a)),a}function zl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Zp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function gh(t,e){Zp(t,e),(t=t.alternate)&&Zp(t,e)}function Vy(){return null}var Ax=typeof reportError=="function"?reportError:function(t){console.error(t)};function xh(t){this._internalRoot=t}cc.prototype.render=xh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));lc(t,e,null,null)};cc.prototype.unmount=xh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Fr(function(){lc(null,t,null,null)}),e[Ei]=null}};function cc(t){this._internalRoot=t}cc.prototype.unstable_scheduleHydration=function(t){if(t){var e=r0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Bi.length&&e!==0&&e<Bi[n].priority;n++);Bi.splice(n,0,t),n===0&&a0(t)}};function vh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function uc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qp(){}function Gy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=zl(a);s.call(c)}}var a=Tx(e,i,t,0,null,!1,!1,"",Qp);return t._reactRootContainer=a,t[Ei]=a.current,La(t.nodeType===8?t.parentNode:t),Fr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=zl(l);o.call(c)}}var l=mh(t,0,!1,null,null,!1,!1,"",Qp);return t._reactRootContainer=l,t[Ei]=l.current,La(t.nodeType===8?t.parentNode:t),Fr(function(){lc(e,l,n,i)}),l}function dc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=zl(a);o.call(l)}}lc(e,a,t,r)}else a=Gy(n,e,t,r,i);return zl(a)}n0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ua(e.pendingLanes);n!==0&&(kf(e,n|1),un(e,_t()),!(We&6)&&(Ds=_t()+500,cr()))}break;case 13:Fr(function(){var i=bi(t,1);if(i!==null){var r=$t();$n(i,t,1,r)}}),gh(t,1)}};Of=function(t){if(t.tag===13){var e=bi(t,134217728);if(e!==null){var n=$t();$n(e,t,134217728,n)}gh(t,134217728)}};i0=function(t){if(t.tag===13){var e=Ji(t),n=bi(t,e);if(n!==null){var i=$t();$n(n,t,e,i)}gh(t,e)}};r0=function(){return et};s0=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};Yu=function(t,e,n){switch(e){case"input":if(Hu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=tc(i);if(!r)throw Error(te(90));Fg(i),Hu(i,r)}}}break;case"textarea":Og(t,n);break;case"select":e=n.value,e!=null&&xs(t,!!n.multiple,e,!1)}};Wg=dh;Xg=Fr;var Wy={usingClientEntryPoint:!1,Events:[Xa,cs,tc,Vg,Gg,dh]},Js={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xy={bundleType:Js.bundleType,version:Js.version,rendererPackageName:Js.rendererPackageName,rendererConfig:Js.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ci.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Yg(t),t===null?null:t.stateNode},findFiberByHostInstance:Js.findFiberByHostInstance||Vy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vo.isDisabled&&vo.supportsFiber)try{Zl=vo.inject(Xy),ri=vo}catch{}}Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wy;Mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vh(e))throw Error(te(200));return Hy(t,e,null,n)};Mn.createRoot=function(t,e){if(!vh(t))throw Error(te(299));var n=!1,i="",r=Ax;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=mh(t,1,!1,null,null,n,!1,i,r),t[Ei]=e.current,La(t.nodeType===8?t.parentNode:t),new xh(e)};Mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=Yg(e),t=t===null?null:t.stateNode,t};Mn.flushSync=function(t){return Fr(t)};Mn.hydrate=function(t,e,n){if(!uc(e))throw Error(te(200));return dc(null,t,e,!0,n)};Mn.hydrateRoot=function(t,e,n){if(!vh(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Ax;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Tx(e,null,t,1,n??null,r,!1,s,a),t[Ei]=e.current,La(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new cc(e)};Mn.render=function(t,e,n){if(!uc(e))throw Error(te(200));return dc(null,t,e,!1,n)};Mn.unmountComponentAtNode=function(t){if(!uc(t))throw Error(te(40));return t._reactRootContainer?(Fr(function(){dc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ei]=null})}),!0):!1};Mn.unstable_batchedUpdates=dh;Mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!uc(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return dc(t,e,n,!1,i)};Mn.version="18.3.1-next-f1338f8080-20240426";function Cx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cx)}catch(t){console.error(t)}}Cx(),Cg.exports=Mn;var $y=Cg.exports,Rx,Jp=$y;Rx=Jp.createRoot,Jp.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _h="169",qy=0,em=1,Yy=2,Px=1,Ky=2,hi=3,sr=0,dn=1,gi=2,tr=0,ws=1,tm=2,nm=3,im=4,Zy=5,Mr=100,Qy=101,Jy=102,e1=103,t1=104,n1=200,i1=201,r1=202,s1=203,Cd=204,Rd=205,a1=206,o1=207,l1=208,c1=209,u1=210,d1=211,f1=212,h1=213,p1=214,Pd=0,Nd=1,Ld=2,Is=3,Dd=4,Id=5,Ud=6,Fd=7,Nx=0,m1=1,g1=2,nr=0,x1=1,v1=2,_1=3,y1=4,S1=5,M1=6,w1=7,Lx=300,Us=301,Fs=302,kd=303,Od=304,fc=306,zd=1e3,Ar=1001,Bd=1002,Nn=1003,E1=1004,_o=1005,Gn=1006,Zc=1007,Cr=1008,Ai=1009,Dx=1010,Ix=1011,ja=1012,yh=1013,kr=1014,_i=1015,qa=1016,Sh=1017,Mh=1018,ks=1020,Ux=35902,Fx=1021,kx=1022,Wn=1023,Ox=1024,zx=1025,Es=1026,Os=1027,Bx=1028,wh=1029,jx=1030,Eh=1031,bh=1033,ol=33776,ll=33777,cl=33778,ul=33779,jd=35840,Hd=35841,Vd=35842,Gd=35843,Wd=36196,Xd=37492,$d=37496,qd=37808,Yd=37809,Kd=37810,Zd=37811,Qd=37812,Jd=37813,ef=37814,tf=37815,nf=37816,rf=37817,sf=37818,af=37819,of=37820,lf=37821,dl=36492,cf=36494,uf=36495,Hx=36283,df=36284,ff=36285,hf=36286,b1=3200,T1=3201,Vx=0,A1=1,Hi="",ei="srgb",ur="srgb-linear",Th="display-p3",hc="display-p3-linear",Bl="linear",lt="srgb",jl="rec709",Hl="p3",Gr=7680,rm=519,C1=512,R1=513,P1=514,Gx=515,N1=516,L1=517,D1=518,I1=519,sm=35044,am="300 es",yi=2e3,Vl=2001;class Vs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fl=Math.PI/180,pf=180/Math.PI;function Ya(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[t&255]+zt[t>>8&255]+zt[t>>16&255]+zt[t>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[n&63|128]+zt[n>>8&255]+"-"+zt[n>>16&255]+zt[n>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function sn(t,e,n){return Math.max(e,Math.min(n,t))}function U1(t,e){return(t%e+e)%e}function Qc(t,e,n){return(1-n)*t+n*e}function ea(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function en(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class je{constructor(e=0,n=0){je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,n,i,r,s,a,o,l,c){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],p=i[7],d=i[2],m=i[5],_=i[8],S=r[0],g=r[3],h=r[6],v=r[1],x=r[4],M=r[7],R=r[2],A=r[5],b=r[8];return s[0]=a*S+o*v+l*R,s[3]=a*g+o*x+l*A,s[6]=a*h+o*M+l*b,s[1]=c*S+f*v+p*R,s[4]=c*g+f*x+p*A,s[7]=c*h+f*M+p*b,s[2]=d*S+m*v+_*R,s[5]=d*g+m*x+_*A,s[8]=d*h+m*M+_*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return n*a*f-n*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],p=f*a-o*c,d=o*l-f*s,m=c*s-a*l,_=n*p+i*d+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=p*S,e[1]=(r*c-f*i)*S,e[2]=(o*i-r*a)*S,e[3]=d*S,e[4]=(f*n-r*l)*S,e[5]=(r*s-o*n)*S,e[6]=m*S,e[7]=(i*l-c*n)*S,e[8]=(a*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Jc.makeScale(e,n)),this}rotate(e){return this.premultiply(Jc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Jc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jc=new Ue;function Wx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Gl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function F1(){const t=Gl("canvas");return t.style.display="block",t}const om={};function hl(t){t in om||(om[t]=!0,console.warn(t))}function k1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function O1(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function z1(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const lm=new Ue().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),cm=new Ue().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ta={[ur]:{transfer:Bl,primaries:jl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[ei]:{transfer:lt,primaries:jl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[hc]:{transfer:Bl,primaries:Hl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(cm),fromReference:t=>t.applyMatrix3(lm)},[Th]:{transfer:lt,primaries:Hl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(cm),fromReference:t=>t.applyMatrix3(lm).convertLinearToSRGB()}},B1=new Set([ur,hc]),Qe={enabled:!0,_workingColorSpace:ur,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!B1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ta[e].toReference,r=ta[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ta[t].primaries},getTransfer:function(t){return t===Hi?Bl:ta[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(ta[e].luminanceCoefficients)}};function bs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function eu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Wr;class j1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Wr===void 0&&(Wr=Gl("canvas")),Wr.width=e.width,Wr.height=e.height;const i=Wr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Wr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Gl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=bs(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(bs(n[i]/255)*255):n[i]=bs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let H1=0;class Xx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:H1++}),this.uuid=Ya(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(tu(r[a].image)):s.push(tu(r[a]))}else s=tu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function tu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?j1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let V1=0;class qt extends Vs{constructor(e=qt.DEFAULT_IMAGE,n=qt.DEFAULT_MAPPING,i=Ar,r=Ar,s=Gn,a=Cr,o=Wn,l=Ai,c=qt.DEFAULT_ANISOTROPY,f=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:V1++}),this.uuid=Ya(),this.name="",this.source=new Xx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zd:e.x=e.x-Math.floor(e.x);break;case Ar:e.x=e.x<0?0:1;break;case Bd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zd:e.y=e.y-Math.floor(e.y);break;case Ar:e.y=e.y<0?0:1;break;case Bd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=Lx;qt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,n=0,i=0,r=1){nt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],p=l[8],d=l[1],m=l[5],_=l[9],S=l[2],g=l[6],h=l[10];if(Math.abs(f-d)<.01&&Math.abs(p-S)<.01&&Math.abs(_-g)<.01){if(Math.abs(f+d)<.1&&Math.abs(p+S)<.1&&Math.abs(_+g)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,M=(m+1)/2,R=(h+1)/2,A=(f+d)/4,b=(p+S)/4,P=(_+g)/4;return x>M&&x>R?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=b/i):M>R?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=P/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=b/s,r=P/s),this.set(i,r,s,n),this}let v=Math.sqrt((g-_)*(g-_)+(p-S)*(p-S)+(d-f)*(d-f));return Math.abs(v)<.001&&(v=1),this.x=(g-_)/v,this.y=(p-S)/v,this.z=(d-f)/v,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class G1 extends Vs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new nt(0,0,e,n),this.scissorTest=!1,this.viewport=new nt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new qt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Xx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Or extends G1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class $x extends qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class W1 extends qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ka{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],p=i[r+3];const d=s[a+0],m=s[a+1],_=s[a+2],S=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=p;return}if(o===1){e[n+0]=d,e[n+1]=m,e[n+2]=_,e[n+3]=S;return}if(p!==S||l!==d||c!==m||f!==_){let g=1-o;const h=l*d+c*m+f*_+p*S,v=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const R=Math.sqrt(x),A=Math.atan2(R,h*v);g=Math.sin(g*A)/R,o=Math.sin(o*A)/R}const M=o*v;if(l=l*g+d*M,c=c*g+m*M,f=f*g+_*M,p=p*g+S*M,g===1-o){const R=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=R,c*=R,f*=R,p*=R}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],p=s[a],d=s[a+1],m=s[a+2],_=s[a+3];return e[n]=o*_+f*p+l*m-c*d,e[n+1]=l*_+f*d+c*p-o*m,e[n+2]=c*_+f*m+o*d-l*p,e[n+3]=f*_-o*p-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),p=o(s/2),d=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*f*p+c*m*_,this._y=c*m*p-d*f*_,this._z=c*f*_+d*m*p,this._w=c*f*p-d*m*_;break;case"YXZ":this._x=d*f*p+c*m*_,this._y=c*m*p-d*f*_,this._z=c*f*_-d*m*p,this._w=c*f*p+d*m*_;break;case"ZXY":this._x=d*f*p-c*m*_,this._y=c*m*p+d*f*_,this._z=c*f*_+d*m*p,this._w=c*f*p-d*m*_;break;case"ZYX":this._x=d*f*p-c*m*_,this._y=c*m*p+d*f*_,this._z=c*f*_-d*m*p,this._w=c*f*p+d*m*_;break;case"YZX":this._x=d*f*p+c*m*_,this._y=c*m*p+d*f*_,this._z=c*f*_-d*m*p,this._w=c*f*p-d*m*_;break;case"XZY":this._x=d*f*p-c*m*_,this._y=c*m*p-d*f*_,this._z=c*f*_+d*m*p,this._w=c*f*p+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],f=n[6],p=n[10],d=i+o+p;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(f-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,o),p=Math.sin((1-n)*f)/c,d=Math.sin(n*f)/c;return this._w=a*p+this._w*d,this._x=i*p+this._x*d,this._y=r*p+this._y*d,this._z=s*p+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,n=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(um.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(um.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*n-s*r),p=2*(s*i-a*n);return this.x=n+l*c+a*p-o*f,this.y=i+l*f+o*c-s*p,this.z=r+l*p+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return nu.copy(this).projectOnVector(e),this.sub(nu)}reflect(e){return this.sub(nu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nu=new I,um=new Ka;class Za{constructor(e=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(On.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(On.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=On.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,On):On.fromBufferAttribute(s,a),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yo.copy(i.boundingBox)),yo.applyMatrix4(e.matrixWorld),this.union(yo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(na),So.subVectors(this.max,na),Xr.subVectors(e.a,na),$r.subVectors(e.b,na),qr.subVectors(e.c,na),Li.subVectors($r,Xr),Di.subVectors(qr,$r),fr.subVectors(Xr,qr);let n=[0,-Li.z,Li.y,0,-Di.z,Di.y,0,-fr.z,fr.y,Li.z,0,-Li.x,Di.z,0,-Di.x,fr.z,0,-fr.x,-Li.y,Li.x,0,-Di.y,Di.x,0,-fr.y,fr.x,0];return!iu(n,Xr,$r,qr,So)||(n=[1,0,0,0,1,0,0,0,1],!iu(n,Xr,$r,qr,So))?!1:(Mo.crossVectors(Li,Di),n=[Mo.x,Mo.y,Mo.z],iu(n,Xr,$r,qr,So))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const li=[new I,new I,new I,new I,new I,new I,new I,new I],On=new I,yo=new Za,Xr=new I,$r=new I,qr=new I,Li=new I,Di=new I,fr=new I,na=new I,So=new I,Mo=new I,hr=new I;function iu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){hr.fromArray(t,s);const o=r.x*Math.abs(hr.x)+r.y*Math.abs(hr.y)+r.z*Math.abs(hr.z),l=e.dot(hr),c=n.dot(hr),f=i.dot(hr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const X1=new Za,ia=new I,ru=new I;class Qa{constructor(e=new I,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):X1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ia.subVectors(e,this.center);const n=ia.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ia,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ru.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ia.copy(e.center).add(ru)),this.expandByPoint(ia.copy(e.center).sub(ru))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ci=new I,su=new I,wo=new I,Ii=new I,au=new I,Eo=new I,ou=new I;class Ah{constructor(e=new I,n=new I(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,n),ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){su.copy(e).add(n).multiplyScalar(.5),wo.copy(n).sub(e).normalize(),Ii.copy(this.origin).sub(su);const s=e.distanceTo(n)*.5,a=-this.direction.dot(wo),o=Ii.dot(this.direction),l=-Ii.dot(wo),c=Ii.lengthSq(),f=Math.abs(1-a*a);let p,d,m,_;if(f>0)if(p=a*l-o,d=a*o-l,_=s*f,p>=0)if(d>=-_)if(d<=_){const S=1/f;p*=S,d*=S,m=p*(p+a*d+2*o)+d*(a*p+d+2*l)+c}else d=s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*l)+c;else d=-s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*l)+c;else d<=-_?(p=Math.max(0,-(-a*s+o)),d=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+d*(d+2*l)+c):d<=_?(p=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(p=Math.max(0,-(a*s+o)),d=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+d*(d+2*l)+c);else d=a>0?-s:s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(su).addScaledVector(wo,d),m}intersectSphere(e,n){ci.subVectors(e.center,this.origin);const i=ci.dot(this.direction),r=ci.dot(ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-d.z)*p,l=(e.max.z-d.z)*p):(o=(e.max.z-d.z)*p,l=(e.min.z-d.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,n,i,r,s){au.subVectors(n,e),Eo.subVectors(i,e),ou.crossVectors(au,Eo);let a=this.direction.dot(ou),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ii.subVectors(this.origin,e);const l=o*this.direction.dot(Eo.crossVectors(Ii,Eo));if(l<0)return null;const c=o*this.direction.dot(au.cross(Ii));if(c<0||l+c>a)return null;const f=-o*Ii.dot(ou);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,n,i,r,s,a,o,l,c,f,p,d,m,_,S,g){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,f,p,d,m,_,S,g)}set(e,n,i,r,s,a,o,l,c,f,p,d,m,_,S,g){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=f,h[10]=p,h[14]=d,h[3]=m,h[7]=_,h[11]=S,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Yr.setFromMatrixColumn(e,0).length(),s=1/Yr.setFromMatrixColumn(e,1).length(),a=1/Yr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const d=a*f,m=a*p,_=o*f,S=o*p;n[0]=l*f,n[4]=-l*p,n[8]=c,n[1]=m+_*c,n[5]=d-S*c,n[9]=-o*l,n[2]=S-d*c,n[6]=_+m*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*f,m=l*p,_=c*f,S=c*p;n[0]=d+S*o,n[4]=_*o-m,n[8]=a*c,n[1]=a*p,n[5]=a*f,n[9]=-o,n[2]=m*o-_,n[6]=S+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*f,m=l*p,_=c*f,S=c*p;n[0]=d-S*o,n[4]=-a*p,n[8]=_+m*o,n[1]=m+_*o,n[5]=a*f,n[9]=S-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*f,m=a*p,_=o*f,S=o*p;n[0]=l*f,n[4]=_*c-m,n[8]=d*c+S,n[1]=l*p,n[5]=S*c+d,n[9]=m*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,_=o*l,S=o*c;n[0]=l*f,n[4]=S-d*p,n[8]=_*p+m,n[1]=p,n[5]=a*f,n[9]=-o*f,n[2]=-c*f,n[6]=m*p+_,n[10]=d-S*p}else if(e.order==="XZY"){const d=a*l,m=a*c,_=o*l,S=o*c;n[0]=l*f,n[4]=-p,n[8]=c*f,n[1]=d*p+S,n[5]=a*f,n[9]=m*p-_,n[2]=_*p-m,n[6]=o*f,n[10]=S*p+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose($1,e,q1)}lookAt(e,n,i){const r=this.elements;return mn.subVectors(e,n),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Ui.crossVectors(i,mn),Ui.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Ui.crossVectors(i,mn)),Ui.normalize(),bo.crossVectors(mn,Ui),r[0]=Ui.x,r[4]=bo.x,r[8]=mn.x,r[1]=Ui.y,r[5]=bo.y,r[9]=mn.y,r[2]=Ui.z,r[6]=bo.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],p=i[5],d=i[9],m=i[13],_=i[2],S=i[6],g=i[10],h=i[14],v=i[3],x=i[7],M=i[11],R=i[15],A=r[0],b=r[4],P=r[8],B=r[12],y=r[1],T=r[5],H=r[9],j=r[13],q=r[2],J=r[6],G=r[10],Q=r[14],L=r[3],Y=r[7],Z=r[11],se=r[15];return s[0]=a*A+o*y+l*q+c*L,s[4]=a*b+o*T+l*J+c*Y,s[8]=a*P+o*H+l*G+c*Z,s[12]=a*B+o*j+l*Q+c*se,s[1]=f*A+p*y+d*q+m*L,s[5]=f*b+p*T+d*J+m*Y,s[9]=f*P+p*H+d*G+m*Z,s[13]=f*B+p*j+d*Q+m*se,s[2]=_*A+S*y+g*q+h*L,s[6]=_*b+S*T+g*J+h*Y,s[10]=_*P+S*H+g*G+h*Z,s[14]=_*B+S*j+g*Q+h*se,s[3]=v*A+x*y+M*q+R*L,s[7]=v*b+x*T+M*J+R*Y,s[11]=v*P+x*H+M*G+R*Z,s[15]=v*B+x*j+M*Q+R*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],p=e[6],d=e[10],m=e[14],_=e[3],S=e[7],g=e[11],h=e[15];return _*(+s*l*p-r*c*p-s*o*d+i*c*d+r*o*m-i*l*m)+S*(+n*l*m-n*c*d+s*a*d-r*a*m+r*c*f-s*l*f)+g*(+n*c*p-n*o*m-s*a*p+i*a*m+s*o*f-i*c*f)+h*(-r*o*f-n*l*p+n*o*d+r*a*p-i*a*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],p=e[9],d=e[10],m=e[11],_=e[12],S=e[13],g=e[14],h=e[15],v=p*g*c-S*d*c+S*l*m-o*g*m-p*l*h+o*d*h,x=_*d*c-f*g*c-_*l*m+a*g*m+f*l*h-a*d*h,M=f*S*c-_*p*c+_*o*m-a*S*m-f*o*h+a*p*h,R=_*p*l-f*S*l-_*o*d+a*S*d+f*o*g-a*p*g,A=n*v+i*x+r*M+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=v*b,e[1]=(S*d*s-p*g*s-S*r*m+i*g*m+p*r*h-i*d*h)*b,e[2]=(o*g*s-S*l*s+S*r*c-i*g*c-o*r*h+i*l*h)*b,e[3]=(p*l*s-o*d*s-p*r*c+i*d*c+o*r*m-i*l*m)*b,e[4]=x*b,e[5]=(f*g*s-_*d*s+_*r*m-n*g*m-f*r*h+n*d*h)*b,e[6]=(_*l*s-a*g*s-_*r*c+n*g*c+a*r*h-n*l*h)*b,e[7]=(a*d*s-f*l*s+f*r*c-n*d*c-a*r*m+n*l*m)*b,e[8]=M*b,e[9]=(_*p*s-f*S*s-_*i*m+n*S*m+f*i*h-n*p*h)*b,e[10]=(a*S*s-_*o*s+_*i*c-n*S*c-a*i*h+n*o*h)*b,e[11]=(f*o*s-a*p*s-f*i*c+n*p*c+a*i*m-n*o*m)*b,e[12]=R*b,e[13]=(f*S*r-_*p*r+_*i*d-n*S*d-f*i*g+n*p*g)*b,e[14]=(_*o*r-a*S*r-_*i*l+n*S*l+a*i*g-n*o*g)*b,e[15]=(a*p*r-f*o*r+f*i*l-n*p*l-a*i*d+n*o*d)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,f=a+a,p=o+o,d=s*c,m=s*f,_=s*p,S=a*f,g=a*p,h=o*p,v=l*c,x=l*f,M=l*p,R=i.x,A=i.y,b=i.z;return r[0]=(1-(S+h))*R,r[1]=(m+M)*R,r[2]=(_-x)*R,r[3]=0,r[4]=(m-M)*A,r[5]=(1-(d+h))*A,r[6]=(g+v)*A,r[7]=0,r[8]=(_+x)*b,r[9]=(g-v)*b,r[10]=(1-(d+S))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Yr.set(r[0],r[1],r[2]).length();const a=Yr.set(r[4],r[5],r[6]).length(),o=Yr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zn.copy(this);const c=1/s,f=1/a,p=1/o;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=f,zn.elements[5]*=f,zn.elements[6]*=f,zn.elements[8]*=p,zn.elements[9]*=p,zn.elements[10]*=p,n.setFromRotationMatrix(zn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=yi){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),p=(n+e)/(n-e),d=(i+r)/(i-r);let m,_;if(o===yi)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Vl)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=yi){const l=this.elements,c=1/(n-e),f=1/(i-r),p=1/(a-s),d=(n+e)*c,m=(i+r)*f;let _,S;if(o===yi)_=(a+s)*p,S=-2*p;else if(o===Vl)_=s*p,S=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=S,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Yr=new I,zn=new ut,$1=new I(0,0,0),q1=new I(1,1,1),Ui=new I,bo=new I,mn=new I,dm=new ut,fm=new Ka;class ai{constructor(e=0,n=0,i=0,r=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],p=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(sn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-sn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return dm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return fm.setFromEuler(this),this.setFromQuaternion(fm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class qx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Y1=0;const hm=new I,Kr=new Ka,ui=new ut,To=new I,ra=new I,K1=new I,Z1=new Ka,pm=new I(1,0,0),mm=new I(0,1,0),gm=new I(0,0,1),xm={type:"added"},Q1={type:"removed"},Zr={type:"childadded",child:null},lu={type:"childremoved",child:null};class Ht extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Y1++}),this.uuid=Ya(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new I,n=new ai,i=new Ka,r=new I(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ue}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Kr.setFromAxisAngle(e,n),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(e,n){return Kr.setFromAxisAngle(e,n),this.quaternion.premultiply(Kr),this}rotateX(e){return this.rotateOnAxis(pm,e)}rotateY(e){return this.rotateOnAxis(mm,e)}rotateZ(e){return this.rotateOnAxis(gm,e)}translateOnAxis(e,n){return hm.copy(e).applyQuaternion(this.quaternion),this.position.add(hm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(pm,e)}translateY(e){return this.translateOnAxis(mm,e)}translateZ(e){return this.translateOnAxis(gm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?To.copy(e):To.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(ra,To,this.up):ui.lookAt(To,ra,this.up),this.quaternion.setFromRotationMatrix(ui),r&&(ui.extractRotation(r.matrixWorld),Kr.setFromRotationMatrix(ui),this.quaternion.premultiply(Kr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xm),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Q1),lu.child=e,this.dispatchEvent(lu),lu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xm),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,e,K1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,Z1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),p=a(e.shapes),d=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ht.DEFAULT_UP=new I(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new I,di=new I,cu=new I,fi=new I,Qr=new I,Jr=new I,vm=new I,uu=new I,du=new I,fu=new I,hu=new nt,pu=new nt,mu=new nt;class Cn{constructor(e=new I,n=new I,i=new I){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Bn.subVectors(e,n),r.cross(Bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Bn.subVectors(r,n),di.subVectors(i,n),cu.subVectors(e,n);const a=Bn.dot(Bn),o=Bn.dot(di),l=Bn.dot(cu),c=di.dot(di),f=di.dot(cu),p=a*c-o*o;if(p===0)return s.set(0,0,0),null;const d=1/p,m=(c*l-o*f)*d,_=(a*f-o*l)*d;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fi.x),l.addScaledVector(a,fi.y),l.addScaledVector(o,fi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return hu.setScalar(0),pu.setScalar(0),mu.setScalar(0),hu.fromBufferAttribute(e,n),pu.fromBufferAttribute(e,i),mu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(hu,s.x),a.addScaledVector(pu,s.y),a.addScaledVector(mu,s.z),a}static isFrontFacing(e,n,i,r){return Bn.subVectors(i,n),di.subVectors(e,n),Bn.cross(di).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Bn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Cn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Cn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Qr.subVectors(r,i),Jr.subVectors(s,i),uu.subVectors(e,i);const l=Qr.dot(uu),c=Jr.dot(uu);if(l<=0&&c<=0)return n.copy(i);du.subVectors(e,r);const f=Qr.dot(du),p=Jr.dot(du);if(f>=0&&p<=f)return n.copy(r);const d=l*p-f*c;if(d<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(Qr,a);fu.subVectors(e,s);const m=Qr.dot(fu),_=Jr.dot(fu);if(_>=0&&m<=_)return n.copy(s);const S=m*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Jr,o);const g=f*_-m*p;if(g<=0&&p-f>=0&&m-_>=0)return vm.subVectors(s,r),o=(p-f)/(p-f+(m-_)),n.copy(r).addScaledVector(vm,o);const h=1/(g+S+d);return a=S*h,o=d*h,n.copy(i).addScaledVector(Qr,a).addScaledVector(Jr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function gu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Be{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=U1(e,1),n=sn(n,0,1),i=sn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=gu(a,s,e+1/3),this.g=gu(a,s,e),this.b=gu(a,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=ei){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ei){const i=Yx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}copyLinearToSRGB(e){return this.r=eu(e.r),this.g=eu(e.g),this.b=eu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return Qe.fromWorkingColorSpace(Bt.copy(this),e),Math.round(sn(Bt.r*255,0,255))*65536+Math.round(sn(Bt.g*255,0,255))*256+Math.round(sn(Bt.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Bt.copy(this),n);const i=Bt.r,r=Bt.g,s=Bt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=f<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Bt.copy(this),n),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=ei){Qe.fromWorkingColorSpace(Bt.copy(this),e);const n=Bt.r,i=Bt.g,r=Bt.b;return e!==ei?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+n,Fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Fi),e.getHSL(Ao);const i=Qc(Fi.h,Ao.h,n),r=Qc(Fi.s,Ao.s,n),s=Qc(Fi.l,Ao.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Be;Be.NAMES=Yx;let J1=0;class jr extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:J1++}),this.uuid=Ya(),this.name="",this.type="Material",this.blending=ws,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cd,this.blendDst=Rd,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(i.blending=this.blending),this.side!==sr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cd&&(i.blendSrc=this.blendSrc),this.blendDst!==Rd&&(i.blendDst=this.blendDst),this.blendEquation!==Mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ch extends jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Nx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new I,Co=new je;class Dn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=sm,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Co.fromBufferAttribute(this,n),Co.applyMatrix3(e),this.setXY(n,Co.x,Co.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ea(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=en(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ea(n,this.array)),n}setX(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ea(n,this.array)),n}setY(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ea(n,this.array)),n}setZ(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ea(n,this.array)),n}setW(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array),s=en(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sm&&(e.usage=this.usage),e}}class Kx extends Dn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Zx extends Dn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Vt extends Dn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let eS=0;const bn=new ut,xu=new Ht,es=new I,gn=new Za,sa=new Za,At=new I;class Yt extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eS++}),this.uuid=Ya(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wx(e)?Zx:Kx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,n,i){return bn.makeTranslation(e,n,i),this.applyMatrix4(bn),this}scale(e,n,i){return bn.makeScale(e,n,i),this.applyMatrix4(bn),this}lookAt(e){return xu.lookAt(e),xu.updateMatrix(),this.applyMatrix4(xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Vt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Za);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];sa.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(gn.min,sa.min),gn.expandByPoint(At),At.addVectors(gn.max,sa.max),gn.expandByPoint(At)):(gn.expandByPoint(sa.min),gn.expandByPoint(sa.max))}gn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)At.fromBufferAttribute(o,c),l&&(es.fromBufferAttribute(e,c),At.add(es)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new I,l[P]=new I;const c=new I,f=new I,p=new I,d=new je,m=new je,_=new je,S=new I,g=new I;function h(P,B,y){c.fromBufferAttribute(i,P),f.fromBufferAttribute(i,B),p.fromBufferAttribute(i,y),d.fromBufferAttribute(s,P),m.fromBufferAttribute(s,B),_.fromBufferAttribute(s,y),f.sub(c),p.sub(c),m.sub(d),_.sub(d);const T=1/(m.x*_.y-_.x*m.y);isFinite(T)&&(S.copy(f).multiplyScalar(_.y).addScaledVector(p,-m.y).multiplyScalar(T),g.copy(p).multiplyScalar(m.x).addScaledVector(f,-_.x).multiplyScalar(T),o[P].add(S),o[B].add(S),o[y].add(S),l[P].add(g),l[B].add(g),l[y].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,B=v.length;P<B;++P){const y=v[P],T=y.start,H=y.count;for(let j=T,q=T+H;j<q;j+=3)h(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const x=new I,M=new I,R=new I,A=new I;function b(P){R.fromBufferAttribute(r,P),A.copy(R);const B=o[P];x.copy(B),x.sub(R.multiplyScalar(R.dot(B))).normalize(),M.crossVectors(A,B);const T=M.dot(l[P])<0?-1:1;a.setXYZW(P,x.x,x.y,x.z,T)}for(let P=0,B=v.length;P<B;++P){const y=v[P],T=y.start,H=y.count;for(let j=T,q=T+H;j<q;j+=3)b(e.getX(j+0)),b(e.getX(j+1)),b(e.getX(j+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Dn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new I,s=new I,a=new I,o=new I,l=new I,c=new I,f=new I,p=new I;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),S=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,S),a.fromBufferAttribute(n,g),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,g),o.add(f),l.add(f),c.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),f.subVectors(a,s),p.subVectors(r,s),f.cross(p),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)At.fromBufferAttribute(e,n),At.normalize(),e.setXYZ(n,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,p=o.normalized,d=new c.constructor(l.length*f);let m=0,_=0;for(let S=0,g=l.length;S<g;S++){o.isInterleavedBufferAttribute?m=l[S]*o.data.stride+o.offset:m=l[S]*f;for(let h=0;h<f;h++)d[_++]=c[m++]}return new Dn(d,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Yt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,p=c.length;f<p;f++){const d=c[f],m=e(d,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let p=0,d=c.length;p<d;p++){const m=c[p];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],p=s[c];for(let d=0,m=p.length;d<m;d++)f.push(p[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _m=new ut,pr=new Ah,Ro=new Qa,ym=new I,Po=new I,No=new I,Lo=new I,vu=new I,Do=new I,Sm=new I,Io=new I;class Rt extends Ht{constructor(e=new Yt,n=new Ch){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Do.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],p=s[l];f!==0&&(vu.fromBufferAttribute(p,e),a?Do.addScaledVector(vu,f):Do.addScaledVector(vu.sub(n),f))}n.add(Do)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ro.copy(i.boundingSphere),Ro.applyMatrix4(s),pr.copy(e.ray).recast(e.near),!(Ro.containsPoint(pr.origin)===!1&&(pr.intersectSphere(Ro,ym)===null||pr.origin.distanceToSquared(ym)>(e.far-e.near)**2))&&(_m.copy(s).invert(),pr.copy(e.ray).applyMatrix4(_m),!(i.boundingBox!==null&&pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,pr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=d.length;_<S;_++){const g=d[_],h=a[g.materialIndex],v=Math.max(g.start,m.start),x=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let M=v,R=x;M<R;M+=3){const A=o.getX(M),b=o.getX(M+1),P=o.getX(M+2);r=Uo(this,h,e,i,c,f,p,A,b,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let g=_,h=S;g<h;g+=3){const v=o.getX(g),x=o.getX(g+1),M=o.getX(g+2);r=Uo(this,a,e,i,c,f,p,v,x,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=d.length;_<S;_++){const g=d[_],h=a[g.materialIndex],v=Math.max(g.start,m.start),x=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let M=v,R=x;M<R;M+=3){const A=M,b=M+1,P=M+2;r=Uo(this,h,e,i,c,f,p,A,b,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let g=_,h=S;g<h;g+=3){const v=g,x=g+1,M=g+2;r=Uo(this,a,e,i,c,f,p,v,x,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function tS(t,e,n,i,r,s,a,o){let l;if(e.side===dn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===sr,o),l===null)return null;Io.copy(o),Io.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Io);return c<n.near||c>n.far?null:{distance:c,point:Io.clone(),object:t}}function Uo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Po),t.getVertexPosition(l,No),t.getVertexPosition(c,Lo);const f=tS(t,e,n,i,Po,No,Lo,Sm);if(f){const p=new I;Cn.getBarycoord(Sm,Po,No,Lo,p),r&&(f.uv=Cn.getInterpolatedAttribute(r,o,l,c,p,new je)),s&&(f.uv1=Cn.getInterpolatedAttribute(s,o,l,c,p,new je)),a&&(f.normal=Cn.getInterpolatedAttribute(a,o,l,c,p,new I),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new I,materialIndex:0};Cn.getNormal(Po,No,Lo,d.normal),f.face=d,f.barycoord=p}return f}class ii extends Yt{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],p=[];let d=0,m=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(f,3)),this.setAttribute("uv",new Vt(p,2));function _(S,g,h,v,x,M,R,A,b,P,B){const y=M/b,T=R/P,H=M/2,j=R/2,q=A/2,J=b+1,G=P+1;let Q=0,L=0;const Y=new I;for(let Z=0;Z<G;Z++){const se=Z*T-j;for(let Ee=0;Ee<J;Ee++){const ke=Ee*y-H;Y[S]=ke*v,Y[g]=se*x,Y[h]=q,c.push(Y.x,Y.y,Y.z),Y[S]=0,Y[g]=0,Y[h]=A>0?1:-1,f.push(Y.x,Y.y,Y.z),p.push(Ee/b),p.push(1-Z/P),Q+=1}}for(let Z=0;Z<P;Z++)for(let se=0;se<b;se++){const Ee=d+se+J*Z,ke=d+se+J*(Z+1),W=d+(se+1)+J*(Z+1),ne=d+(se+1)+J*Z;l.push(Ee,ke,ne),l.push(ke,W,ne),L+=6}o.addGroup(m,L,B),m+=L,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ii(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Wt(t){const e={};for(let n=0;n<t.length;n++){const i=zs(t[n]);for(const r in i)e[r]=i[r]}return e}function nS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Qx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const iS={clone:zs,merge:Wt};var rS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ar extends jr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rS,this.fragmentShader=sS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=nS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Jx extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=yi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ki=new I,Mm=new je,wm=new je;class vn extends Jx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=pf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pf*2*Math.atan(Math.tan(fl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,n){return this.getViewBounds(e,Mm,wm),n.subVectors(wm,Mm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(fl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ts=-90,ns=1;class aS extends Ht{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new vn(ts,ns,e,n);r.layers=this.layers,this.add(r);const s=new vn(ts,ns,e,n);s.layers=this.layers,this.add(s);const a=new vn(ts,ns,e,n);a.layers=this.layers,this.add(a);const o=new vn(ts,ns,e,n);o.layers=this.layers,this.add(o);const l=new vn(ts,ns,e,n);l.layers=this.layers,this.add(l);const c=new vn(ts,ns,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(p,d,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class ev extends qt{constructor(e,n,i,r,s,a,o,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:Us,super(e,n,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class oS extends Or{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ev(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Gn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ii(5,5,5),s=new ar({name:"CubemapFromEquirect",uniforms:zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:tr});s.uniforms.tEquirect.value=n;const a=new Rt(r,s),o=n.minFilter;return n.minFilter===Cr&&(n.minFilter=Gn),new aS(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const _u=new I,lS=new I,cS=new Ue;let yr=class{constructor(e=new I(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=_u.subVectors(i,n).cross(lS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(_u),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||cS.getNormalMatrix(e),r=this.coplanarPoint(_u).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const mr=new Qa,Fo=new I;class Rh{constructor(e=new yr,n=new yr,i=new yr,r=new yr,s=new yr,a=new yr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=yi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],f=r[5],p=r[6],d=r[7],m=r[8],_=r[9],S=r[10],g=r[11],h=r[12],v=r[13],x=r[14],M=r[15];if(i[0].setComponents(l-s,d-c,g-m,M-h).normalize(),i[1].setComponents(l+s,d+c,g+m,M+h).normalize(),i[2].setComponents(l+a,d+f,g+_,M+v).normalize(),i[3].setComponents(l-a,d-f,g-_,M-v).normalize(),i[4].setComponents(l-o,d-p,g-S,M-x).normalize(),n===yi)i[5].setComponents(l+o,d+p,g+S,M+x).normalize();else if(n===Vl)i[5].setComponents(o,p,S,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Fo.x=r.normal.x>0?e.max.x:e.min.x,Fo.y=r.normal.y>0?e.max.y:e.min.y,Fo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tv(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function uS(t){const e=new WeakMap;function n(o,l){const c=o.array,f=o.usage,p=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,f),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const f=l.array,p=l.updateRanges;if(t.bindBuffer(c,o),p.length===0)t.bufferSubData(c,0,f);else{p.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<p.length;m++){const _=p[d],S=p[m];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++d,p[d]=S)}p.length=d+1;for(let m=0,_=p.length;m<_;m++){const S=p[m];t.bufferSubData(c,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class pc extends Yt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,p=e/o,d=n/l,m=[],_=[],S=[],g=[];for(let h=0;h<f;h++){const v=h*d-a;for(let x=0;x<c;x++){const M=x*p-s;_.push(M,-v,0),S.push(0,0,1),g.push(x/o),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<o;v++){const x=v+c*h,M=v+c*(h+1),R=v+1+c*(h+1),A=v+1+c*h;m.push(x,M,A),m.push(M,R,A)}this.setIndex(m),this.setAttribute("position",new Vt(_,3)),this.setAttribute("normal",new Vt(S,3)),this.setAttribute("uv",new Vt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pc(e.width,e.height,e.widthSegments,e.heightSegments)}}var dS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_S=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,MS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ES=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,TS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,AS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,NS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,LS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,DS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,IS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,US=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,FS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,OS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jS="gl_FragColor = linearToOutputTexel( gl_FragColor );",HS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,VS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,GS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,WS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,XS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$S=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ZS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,JS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,iM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_M=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,EM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,AM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,RM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,PM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,DM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,IM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,UM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,OM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,BM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,HM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,GM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$M=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,YM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,KM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ZM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,QM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ew=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ow=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_w=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ww=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ew=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Aw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Rw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Nw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Uw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ow=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Hw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ie={alphahash_fragment:dS,alphahash_pars_fragment:fS,alphamap_fragment:hS,alphamap_pars_fragment:pS,alphatest_fragment:mS,alphatest_pars_fragment:gS,aomap_fragment:xS,aomap_pars_fragment:vS,batching_pars_vertex:_S,batching_vertex:yS,begin_vertex:SS,beginnormal_vertex:MS,bsdfs:wS,iridescence_fragment:ES,bumpmap_pars_fragment:bS,clipping_planes_fragment:TS,clipping_planes_pars_fragment:AS,clipping_planes_pars_vertex:CS,clipping_planes_vertex:RS,color_fragment:PS,color_pars_fragment:NS,color_pars_vertex:LS,color_vertex:DS,common:IS,cube_uv_reflection_fragment:US,defaultnormal_vertex:FS,displacementmap_pars_vertex:kS,displacementmap_vertex:OS,emissivemap_fragment:zS,emissivemap_pars_fragment:BS,colorspace_fragment:jS,colorspace_pars_fragment:HS,envmap_fragment:VS,envmap_common_pars_fragment:GS,envmap_pars_fragment:WS,envmap_pars_vertex:XS,envmap_physical_pars_fragment:iM,envmap_vertex:$S,fog_vertex:qS,fog_pars_vertex:YS,fog_fragment:KS,fog_pars_fragment:ZS,gradientmap_pars_fragment:QS,lightmap_pars_fragment:JS,lights_lambert_fragment:eM,lights_lambert_pars_fragment:tM,lights_pars_begin:nM,lights_toon_fragment:rM,lights_toon_pars_fragment:sM,lights_phong_fragment:aM,lights_phong_pars_fragment:oM,lights_physical_fragment:lM,lights_physical_pars_fragment:cM,lights_fragment_begin:uM,lights_fragment_maps:dM,lights_fragment_end:fM,logdepthbuf_fragment:hM,logdepthbuf_pars_fragment:pM,logdepthbuf_pars_vertex:mM,logdepthbuf_vertex:gM,map_fragment:xM,map_pars_fragment:vM,map_particle_fragment:_M,map_particle_pars_fragment:yM,metalnessmap_fragment:SM,metalnessmap_pars_fragment:MM,morphinstance_vertex:wM,morphcolor_vertex:EM,morphnormal_vertex:bM,morphtarget_pars_vertex:TM,morphtarget_vertex:AM,normal_fragment_begin:CM,normal_fragment_maps:RM,normal_pars_fragment:PM,normal_pars_vertex:NM,normal_vertex:LM,normalmap_pars_fragment:DM,clearcoat_normal_fragment_begin:IM,clearcoat_normal_fragment_maps:UM,clearcoat_pars_fragment:FM,iridescence_pars_fragment:kM,opaque_fragment:OM,packing:zM,premultiplied_alpha_fragment:BM,project_vertex:jM,dithering_fragment:HM,dithering_pars_fragment:VM,roughnessmap_fragment:GM,roughnessmap_pars_fragment:WM,shadowmap_pars_fragment:XM,shadowmap_pars_vertex:$M,shadowmap_vertex:qM,shadowmask_pars_fragment:YM,skinbase_vertex:KM,skinning_pars_vertex:ZM,skinning_vertex:QM,skinnormal_vertex:JM,specularmap_fragment:ew,specularmap_pars_fragment:tw,tonemapping_fragment:nw,tonemapping_pars_fragment:iw,transmission_fragment:rw,transmission_pars_fragment:sw,uv_pars_fragment:aw,uv_pars_vertex:ow,uv_vertex:lw,worldpos_vertex:cw,background_vert:uw,background_frag:dw,backgroundCube_vert:fw,backgroundCube_frag:hw,cube_vert:pw,cube_frag:mw,depth_vert:gw,depth_frag:xw,distanceRGBA_vert:vw,distanceRGBA_frag:_w,equirect_vert:yw,equirect_frag:Sw,linedashed_vert:Mw,linedashed_frag:ww,meshbasic_vert:Ew,meshbasic_frag:bw,meshlambert_vert:Tw,meshlambert_frag:Aw,meshmatcap_vert:Cw,meshmatcap_frag:Rw,meshnormal_vert:Pw,meshnormal_frag:Nw,meshphong_vert:Lw,meshphong_frag:Dw,meshphysical_vert:Iw,meshphysical_frag:Uw,meshtoon_vert:Fw,meshtoon_frag:kw,points_vert:Ow,points_frag:zw,shadow_vert:Bw,shadow_frag:jw,sprite_vert:Hw,sprite_frag:Vw},oe={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},ti={basic:{uniforms:Wt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Wt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Wt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Wt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Wt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Wt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Wt([oe.points,oe.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Wt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Wt([oe.common,oe.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Wt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Wt([oe.sprite,oe.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Wt([oe.common,oe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Wt([oe.lights,oe.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};ti.physical={uniforms:Wt([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const ko={r:0,b:0,g:0},gr=new ai,Gw=new ut;function Ww(t,e,n,i,r,s,a){const o=new Be(0);let l=s===!0?0:1,c,f,p=null,d=0,m=null;function _(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?n:e).get(x)),x}function S(v){let x=!1;const M=_(v);M===null?h(o,l):M&&M.isColor&&(h(M,1),x=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(v,x){const M=_(x);M&&(M.isCubeTexture||M.mapping===fc)?(f===void 0&&(f=new Rt(new ii(1,1,1),new ar({name:"BackgroundCubeMaterial",uniforms:zs(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),gr.copy(x.backgroundRotation),gr.x*=-1,gr.y*=-1,gr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Gw.makeRotationFromEuler(gr)),f.material.toneMapped=Qe.getTransfer(M.colorSpace)!==lt,(p!==M||d!==M.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,p=M,d=M.version,m=t.toneMapping),f.layers.enableAll(),v.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Rt(new pc(2,2),new ar({name:"BackgroundMaterial",uniforms:zs(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(M.colorSpace)!==lt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(p!==M||d!==M.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,p=M,d=M.version,m=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function h(v,x){v.getRGB(ko,Qx(t)),i.buffers.color.setClear(ko.r,ko.g,ko.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(v,x=1){o.set(v),l=x,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,h(o,l)},render:S,addToRenderList:g}}function Xw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(y,T,H,j,q){let J=!1;const G=p(j,H,T);s!==G&&(s=G,c(s.object)),J=m(y,j,H,q),J&&_(y,j,H,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,M(y,T,H,j),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function f(y){return t.deleteVertexArray(y)}function p(y,T,H){const j=H.wireframe===!0;let q=i[y.id];q===void 0&&(q={},i[y.id]=q);let J=q[T.id];J===void 0&&(J={},q[T.id]=J);let G=J[j];return G===void 0&&(G=d(l()),J[j]=G),G}function d(y){const T=[],H=[],j=[];for(let q=0;q<n;q++)T[q]=0,H[q]=0,j[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:H,attributeDivisors:j,object:y,attributes:{},index:null}}function m(y,T,H,j){const q=s.attributes,J=T.attributes;let G=0;const Q=H.getAttributes();for(const L in Q)if(Q[L].location>=0){const Z=q[L];let se=J[L];if(se===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(se=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(se=y.instanceColor)),Z===void 0||Z.attribute!==se||se&&Z.data!==se.data)return!0;G++}return s.attributesNum!==G||s.index!==j}function _(y,T,H,j){const q={},J=T.attributes;let G=0;const Q=H.getAttributes();for(const L in Q)if(Q[L].location>=0){let Z=J[L];Z===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor));const se={};se.attribute=Z,Z&&Z.data&&(se.data=Z.data),q[L]=se,G++}s.attributes=q,s.attributesNum=G,s.index=j}function S(){const y=s.newAttributes;for(let T=0,H=y.length;T<H;T++)y[T]=0}function g(y){h(y,0)}function h(y,T){const H=s.newAttributes,j=s.enabledAttributes,q=s.attributeDivisors;H[y]=1,j[y]===0&&(t.enableVertexAttribArray(y),j[y]=1),q[y]!==T&&(t.vertexAttribDivisor(y,T),q[y]=T)}function v(){const y=s.newAttributes,T=s.enabledAttributes;for(let H=0,j=T.length;H<j;H++)T[H]!==y[H]&&(t.disableVertexAttribArray(H),T[H]=0)}function x(y,T,H,j,q,J,G){G===!0?t.vertexAttribIPointer(y,T,H,q,J):t.vertexAttribPointer(y,T,H,j,q,J)}function M(y,T,H,j){S();const q=j.attributes,J=H.getAttributes(),G=T.defaultAttributeValues;for(const Q in J){const L=J[Q];if(L.location>=0){let Y=q[Q];if(Y===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(Y=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(Y=y.instanceColor)),Y!==void 0){const Z=Y.normalized,se=Y.itemSize,Ee=e.get(Y);if(Ee===void 0)continue;const ke=Ee.buffer,W=Ee.type,ne=Ee.bytesPerElement,fe=W===t.INT||W===t.UNSIGNED_INT||Y.gpuType===yh;if(Y.isInterleavedBufferAttribute){const ce=Y.data,Le=ce.stride,Te=Y.offset;if(ce.isInstancedInterleavedBuffer){for(let He=0;He<L.locationSize;He++)h(L.location+He,ce.meshPerAttribute);y.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let He=0;He<L.locationSize;He++)g(L.location+He);t.bindBuffer(t.ARRAY_BUFFER,ke);for(let He=0;He<L.locationSize;He++)x(L.location+He,se/L.locationSize,W,Z,Le*ne,(Te+se/L.locationSize*He)*ne,fe)}else{if(Y.isInstancedBufferAttribute){for(let ce=0;ce<L.locationSize;ce++)h(L.location+ce,Y.meshPerAttribute);y.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ce=0;ce<L.locationSize;ce++)g(L.location+ce);t.bindBuffer(t.ARRAY_BUFFER,ke);for(let ce=0;ce<L.locationSize;ce++)x(L.location+ce,se/L.locationSize,W,Z,se*ne,se/L.locationSize*ce*ne,fe)}}else if(G!==void 0){const Z=G[Q];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(L.location,Z);break;case 3:t.vertexAttrib3fv(L.location,Z);break;case 4:t.vertexAttrib4fv(L.location,Z);break;default:t.vertexAttrib1fv(L.location,Z)}}}}v()}function R(){P();for(const y in i){const T=i[y];for(const H in T){const j=T[H];for(const q in j)f(j[q].object),delete j[q];delete T[H]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const T=i[y.id];for(const H in T){const j=T[H];for(const q in j)f(j[q].object),delete j[q];delete T[H]}delete i[y.id]}function b(y){for(const T in i){const H=i[T];if(H[y.id]===void 0)continue;const j=H[y.id];for(const q in j)f(j[q].object),delete j[q];delete H[y.id]}}function P(){B(),a=!0,s!==r&&(s=r,c(s.object))}function B(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:B,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:S,enableAttribute:g,disableUnusedAttributes:v}}function $w(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function a(c,f,p){p!==0&&(t.drawArraysInstanced(i,c,f,p),n.update(f,i,p))}function o(c,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,p);let m=0;for(let _=0;_<p;_++)m+=f[_];n.update(m,i,1)}function l(c,f,p,d){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],f[_],d[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,f,0,d,0,p);let _=0;for(let S=0;S<p;S++)_+=f[S];for(let S=0;S<d.length;S++)n.update(_,i,d[S])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function qw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==Wn&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const P=b===qa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Ai&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==_i&&!P)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const p=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const b=e.get("EXT_clip_control");b.clipControlEXT(b.LOWER_LEFT_EXT,b.ZERO_TO_ONE_EXT)}const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:R,maxSamples:A}}function Yw(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new yr,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const m=p.length!==0||d||i!==0||r;return r=d,i=p.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,d){n=f(p,d,0)},this.setState=function(p,d,m){const _=p.clippingPlanes,S=p.clipIntersection,g=p.clipShadows,h=t.get(p);if(!r||_===null||_.length===0||s&&!g)s?f(null):c();else{const v=s?0:i,x=v*4;let M=h.clippingState||null;l.value=M,M=f(_,d,x,m);for(let R=0;R!==x;++R)M[R]=n[R];h.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(p,d,m,_){const S=p!==null?p.length:0;let g=null;if(S!==0){if(g=l.value,_!==!0||g===null){const h=m+S*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<h)&&(g=new Float32Array(h));for(let x=0,M=m;x!==S;++x,M+=4)a.copy(p[x]).applyMatrix4(v,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}function Kw(t){let e=new WeakMap;function n(a,o){return o===kd?a.mapping=Us:o===Od&&(a.mapping=Fs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===kd||o===Od)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new oS(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Zw extends Jx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const gs=4,Em=[.125,.215,.35,.446,.526,.582],wr=20,yu=new Zw,bm=new Be;let Su=null,Mu=0,wu=0,Eu=!1;const Sr=(1+Math.sqrt(5))/2,is=1/Sr,Tm=[new I(-Sr,is,0),new I(Sr,is,0),new I(-is,0,Sr),new I(is,0,Sr),new I(0,Sr,-is),new I(0,Sr,is),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Am{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Su=this._renderer.getRenderTarget(),Mu=this._renderer.getActiveCubeFace(),wu=this._renderer.getActiveMipmapLevel(),Eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Su,Mu,wu),this._renderer.xr.enabled=Eu,e.scissorTest=!1,Oo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Us||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Su=this._renderer.getRenderTarget(),Mu=this._renderer.getActiveCubeFace(),wu=this._renderer.getActiveMipmapLevel(),Eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:qa,format:Wn,colorSpace:ur,depthBuffer:!1},r=Cm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qw(s)),this._blurMaterial=Jw(s,e,n)}return r}_compileMaterial(e){const n=new Rt(this._lodPlanes[0],e);this._renderer.compile(n,yu)}_sceneToCubeUV(e,n,i,r){const o=new vn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,d=f.toneMapping;f.getClearColor(bm),f.toneMapping=nr,f.autoClear=!1;const m=new Ch({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),_=new Rt(new ii,m);let S=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,S=!0):(m.color.copy(bm),S=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):v===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const x=this._cubeSize;Oo(r,v*x,h>2?x:0,x,x),f.setRenderTarget(r),S&&f.render(_,o),f.render(e,o)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=d,f.autoClear=p,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Us||e.mapping===Fs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Rt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Oo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,yu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Tm[(r-s-1)%Tm.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,p=new Rt(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*wr-1),S=s/_,g=isFinite(s)?1+Math.floor(f*S):wr;g>wr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${wr}`);const h=[];let v=0;for(let b=0;b<wr;++b){const P=b/S,B=Math.exp(-P*P/2);h.push(B),b===0?v+=B:b<g&&(v+=2*B)}for(let b=0;b<h.length;b++)h[b]=h[b]/v;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-i;const M=this._sizeLods[r],R=3*M*(r>x-gs?r-x+gs:0),A=4*(this._cubeSize-M);Oo(n,R,A,3*M,2*M),l.setRenderTarget(n),l.render(p,yu)}}function Qw(t){const e=[],n=[],i=[];let r=t;const s=t-gs+1+Em.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-gs?l=Em[a-t+gs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),f=-c,p=1+c,d=[f,f,p,f,p,p,f,f,p,p,f,p],m=6,_=6,S=3,g=2,h=1,v=new Float32Array(S*_*m),x=new Float32Array(g*_*m),M=new Float32Array(h*_*m);for(let A=0;A<m;A++){const b=A%3*2/3-1,P=A>2?0:-1,B=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];v.set(B,S*_*A),x.set(d,g*_*A);const y=[A,A,A,A,A,A];M.set(y,h*_*A)}const R=new Yt;R.setAttribute("position",new Dn(v,S)),R.setAttribute("uv",new Dn(x,g)),R.setAttribute("faceIndex",new Dn(M,h)),e.push(R),r>gs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Cm(t,e,n){const i=new Or(t,e,n);return i.texture.mapping=fc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Oo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Jw(t,e,n){const i=new Float32Array(wr),r=new I(0,1,0);return new ar({name:"SphericalGaussianBlur",defines:{n:wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Rm(){return new ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Pm(){return new ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Ph(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function eE(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===kd||l===Od,f=l===Us||l===Fs;if(c||f){let p=e.get(o);const d=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return n===null&&(n=new Am(t)),p=c?n.fromEquirectangular(o,p):n.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const m=o.image;return c&&m&&m.height>0||f&&m&&r(m)?(n===null&&(n=new Am(t)),p=c?n.fromEquirectangular(o):n.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",s),p.texture):null}}}return o}function r(o){let l=0;const c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function tE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&hl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function nE(t,e,n,i){const r={},s=new WeakMap;function a(p){const d=p.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const S=d.morphAttributes[_];for(let g=0,h=S.length;g<h;g++)e.remove(S[g])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(p,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(p){const d=p.attributes;for(const _ in d)e.update(d[_],t.ARRAY_BUFFER);const m=p.morphAttributes;for(const _ in m){const S=m[_];for(let g=0,h=S.length;g<h;g++)e.update(S[g],t.ARRAY_BUFFER)}}function c(p){const d=[],m=p.index,_=p.attributes.position;let S=0;if(m!==null){const v=m.array;S=m.version;for(let x=0,M=v.length;x<M;x+=3){const R=v[x+0],A=v[x+1],b=v[x+2];d.push(R,A,A,b,b,R)}}else if(_!==void 0){const v=_.array;S=_.version;for(let x=0,M=v.length/3-1;x<M;x+=3){const R=x+0,A=x+1,b=x+2;d.push(R,A,A,b,b,R)}}else return;const g=new(Wx(d)?Zx:Kx)(d,1);g.version=S;const h=s.get(p);h&&e.remove(h),s.set(p,g)}function f(p){const d=s.get(p);if(d){const m=p.index;m!==null&&d.version<m.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:f}}function iE(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,m){t.drawElements(i,m,s,d*a),n.update(m,i,1)}function c(d,m,_){_!==0&&(t.drawElementsInstanced(i,m,s,d*a,_),n.update(m,i,_))}function f(d,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,_);let g=0;for(let h=0;h<_;h++)g+=m[h];n.update(g,i,1)}function p(d,m,_,S){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<d.length;h++)c(d[h]/a,m[h],S[h]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,S,0,_);let h=0;for(let v=0;v<_;v++)h+=m[v];for(let v=0;v<S.length;v++)n.update(h,i,S[v])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function rE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function sE(t,e,n){const i=new WeakMap,r=new nt;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0;let d=i.get(o);if(d===void 0||d.count!==p){let y=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var m=y;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),S===!0&&(M=2),g===!0&&(M=3);let R=o.attributes.position.count*M,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const b=new Float32Array(R*A*4*p),P=new $x(b,R,A,p);P.type=_i,P.needsUpdate=!0;const B=M*4;for(let T=0;T<p;T++){const H=h[T],j=v[T],q=x[T],J=R*A*4*T;for(let G=0;G<H.count;G++){const Q=G*B;_===!0&&(r.fromBufferAttribute(H,G),b[J+Q+0]=r.x,b[J+Q+1]=r.y,b[J+Q+2]=r.z,b[J+Q+3]=0),S===!0&&(r.fromBufferAttribute(j,G),b[J+Q+4]=r.x,b[J+Q+5]=r.y,b[J+Q+6]=r.z,b[J+Q+7]=0),g===!0&&(r.fromBufferAttribute(q,G),b[J+Q+8]=r.x,b[J+Q+9]=r.y,b[J+Q+10]=r.z,b[J+Q+11]=q.itemSize===4?r.w:1)}}d={count:p,texture:P,size:new je(R,A)},i.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const S=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function aE(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,p=e.get(l,f);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return p}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class nv extends qt{constructor(e,n,i,r,s,a,o,l,c,f=Es){if(f!==Es&&f!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Es&&(i=kr),i===void 0&&f===Os&&(i=ks),super(null,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Nn,this.minFilter=l!==void 0?l:Nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const iv=new qt,Nm=new nv(1,1),rv=new $x,sv=new W1,av=new ev,Lm=[],Dm=[],Im=new Float32Array(16),Um=new Float32Array(9),Fm=new Float32Array(4);function Gs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Lm[r];if(s===void 0&&(s=new Float32Array(r),Lm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Tt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function mc(t,e){let n=Dm[e];n===void 0&&(n=new Int32Array(e),Dm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function oE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function lE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2fv(this.addr,e),Tt(n,e)}}function cE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(bt(n,e))return;t.uniform3fv(this.addr,e),Tt(n,e)}}function uE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4fv(this.addr,e),Tt(n,e)}}function dE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Tt(n,e)}else{if(bt(n,i))return;Fm.set(i),t.uniformMatrix2fv(this.addr,!1,Fm),Tt(n,i)}}function fE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Tt(n,e)}else{if(bt(n,i))return;Um.set(i),t.uniformMatrix3fv(this.addr,!1,Um),Tt(n,i)}}function hE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Tt(n,e)}else{if(bt(n,i))return;Im.set(i),t.uniformMatrix4fv(this.addr,!1,Im),Tt(n,i)}}function pE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function mE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2iv(this.addr,e),Tt(n,e)}}function gE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3iv(this.addr,e),Tt(n,e)}}function xE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4iv(this.addr,e),Tt(n,e)}}function vE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function _E(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2uiv(this.addr,e),Tt(n,e)}}function yE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3uiv(this.addr,e),Tt(n,e)}}function SE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4uiv(this.addr,e),Tt(n,e)}}function ME(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Nm.compareFunction=Gx,s=Nm):s=iv,n.setTexture2D(e||s,r)}function wE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||sv,r)}function EE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||av,r)}function bE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||rv,r)}function TE(t){switch(t){case 5126:return oE;case 35664:return lE;case 35665:return cE;case 35666:return uE;case 35674:return dE;case 35675:return fE;case 35676:return hE;case 5124:case 35670:return pE;case 35667:case 35671:return mE;case 35668:case 35672:return gE;case 35669:case 35673:return xE;case 5125:return vE;case 36294:return _E;case 36295:return yE;case 36296:return SE;case 35678:case 36198:case 36298:case 36306:case 35682:return ME;case 35679:case 36299:case 36307:return wE;case 35680:case 36300:case 36308:case 36293:return EE;case 36289:case 36303:case 36311:case 36292:return bE}}function AE(t,e){t.uniform1fv(this.addr,e)}function CE(t,e){const n=Gs(e,this.size,2);t.uniform2fv(this.addr,n)}function RE(t,e){const n=Gs(e,this.size,3);t.uniform3fv(this.addr,n)}function PE(t,e){const n=Gs(e,this.size,4);t.uniform4fv(this.addr,n)}function NE(t,e){const n=Gs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function LE(t,e){const n=Gs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function DE(t,e){const n=Gs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function IE(t,e){t.uniform1iv(this.addr,e)}function UE(t,e){t.uniform2iv(this.addr,e)}function FE(t,e){t.uniform3iv(this.addr,e)}function kE(t,e){t.uniform4iv(this.addr,e)}function OE(t,e){t.uniform1uiv(this.addr,e)}function zE(t,e){t.uniform2uiv(this.addr,e)}function BE(t,e){t.uniform3uiv(this.addr,e)}function jE(t,e){t.uniform4uiv(this.addr,e)}function HE(t,e,n){const i=this.cache,r=e.length,s=mc(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||iv,s[a])}function VE(t,e,n){const i=this.cache,r=e.length,s=mc(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||sv,s[a])}function GE(t,e,n){const i=this.cache,r=e.length,s=mc(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||av,s[a])}function WE(t,e,n){const i=this.cache,r=e.length,s=mc(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||rv,s[a])}function XE(t){switch(t){case 5126:return AE;case 35664:return CE;case 35665:return RE;case 35666:return PE;case 35674:return NE;case 35675:return LE;case 35676:return DE;case 5124:case 35670:return IE;case 35667:case 35671:return UE;case 35668:case 35672:return FE;case 35669:case 35673:return kE;case 5125:return OE;case 36294:return zE;case 36295:return BE;case 36296:return jE;case 35678:case 36198:case 36298:case 36306:case 35682:return HE;case 35679:case 36299:case 36307:return VE;case 35680:case 36300:case 36308:case 36293:return GE;case 36289:case 36303:case 36311:case 36292:return WE}}class $E{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=TE(n.type)}}class qE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=XE(n.type)}}class YE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const bu=/(\w+)(\])?(\[|\.)?/g;function km(t,e){t.seq.push(e),t.map[e.id]=e}function KE(t,e,n){const i=t.name,r=i.length;for(bu.lastIndex=0;;){const s=bu.exec(i),a=bu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){km(n,c===void 0?new $E(o,t,e):new qE(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new YE(o),km(n,p)),n=p}}}class pl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);KE(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Om(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const ZE=37297;let QE=0;function JE(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function eb(t){const e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t);let i;switch(e===n?i="":e===Hl&&n===jl?i="LinearDisplayP3ToLinearSRGB":e===jl&&n===Hl&&(i="LinearSRGBToLinearDisplayP3"),t){case ur:case hc:return[i,"LinearTransferOETF"];case ei:case Th:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function zm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+JE(t.getShaderSource(e),a)}else return r}function tb(t,e){const n=eb(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function nb(t,e){let n;switch(e){case x1:n="Linear";break;case v1:n="Reinhard";break;case _1:n="Cineon";break;case y1:n="ACESFilmic";break;case M1:n="AgX";break;case w1:n="Neutral";break;case S1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const zo=new I;function ib(){Qe.getLuminanceCoefficients(zo);const t=zo.x.toFixed(4),e=zo.y.toFixed(4),n=zo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fa).join(`
`)}function sb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function ab(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function fa(t){return t!==""}function Bm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ob=/^[ \t]*#include +<([\w\d./]+)>/gm;function mf(t){return t.replace(ob,cb)}const lb=new Map;function cb(t,e){let n=Ie[e];if(n===void 0){const i=lb.get(e);if(i!==void 0)n=Ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return mf(n)}const ub=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hm(t){return t.replace(ub,db)}function db(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Vm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Px?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Ky?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function hb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Us:case Fs:e="ENVMAP_TYPE_CUBE";break;case fc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Fs:e="ENVMAP_MODE_REFRACTION";break}return e}function mb(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Nx:e="ENVMAP_BLENDING_MULTIPLY";break;case m1:e="ENVMAP_BLENDING_MIX";break;case g1:e="ENVMAP_BLENDING_ADD";break}return e}function gb(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function xb(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=fb(n),c=hb(n),f=pb(n),p=mb(n),d=gb(n),m=rb(n),_=sb(s),S=r.createProgram();let g,h,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(fa).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(fa).join(`
`),h.length>0&&(h+=`
`)):(g=[Vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fa).join(`
`),h=[Vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==nr?"#define TONE_MAPPING":"",n.toneMapping!==nr?Ie.tonemapping_pars_fragment:"",n.toneMapping!==nr?nb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,tb("linearToOutputTexel",n.outputColorSpace),ib(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(fa).join(`
`)),a=mf(a),a=Bm(a,n),a=jm(a,n),o=mf(o),o=Bm(o,n),o=jm(o,n),a=Hm(a),o=Hm(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===am?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===am?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=v+g+a,M=v+h+o,R=Om(r,r.VERTEX_SHADER,x),A=Om(r,r.FRAGMENT_SHADER,M);r.attachShader(S,R),r.attachShader(S,A),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function b(T){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(S).trim(),j=r.getShaderInfoLog(R).trim(),q=r.getShaderInfoLog(A).trim();let J=!0,G=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(J=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,R,A);else{const Q=zm(r,R,"vertex"),L=zm(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+H+`
`+Q+`
`+L)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(j===""||q==="")&&(G=!1);G&&(T.diagnostics={runnable:J,programLog:H,vertexShader:{log:j,prefix:g},fragmentShader:{log:q,prefix:h}})}r.deleteShader(R),r.deleteShader(A),P=new pl(r,S),B=ab(r,S)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let B;this.getAttributes=function(){return B===void 0&&b(this),B};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(S,ZE)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=QE++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=R,this.fragmentShader=A,this}let vb=0;class _b{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new yb(e),n.set(e,i)),i}}class yb{constructor(e){this.id=vb++,this.code=e,this.usedTimes=0}}function Sb(t,e,n,i,r,s,a){const o=new qx,l=new _b,c=new Set,f=[],p=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,m=r.vertexTextures;let _=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function h(y,T,H,j,q){const J=j.fog,G=q.geometry,Q=y.isMeshStandardMaterial?j.environment:null,L=(y.isMeshStandardMaterial?n:e).get(y.envMap||Q),Y=L&&L.mapping===fc?L.image.height:null,Z=S[y.type];y.precision!==null&&(_=r.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const se=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ee=se!==void 0?se.length:0;let ke=0;G.morphAttributes.position!==void 0&&(ke=1),G.morphAttributes.normal!==void 0&&(ke=2),G.morphAttributes.color!==void 0&&(ke=3);let W,ne,fe,ce;if(Z){const Jt=ti[Z];W=Jt.vertexShader,ne=Jt.fragmentShader}else W=y.vertexShader,ne=y.fragmentShader,l.update(y),fe=l.getVertexShaderID(y),ce=l.getFragmentShaderID(y);const Le=t.getRenderTarget(),Te=q.isInstancedMesh===!0,He=q.isBatchedMesh===!0,tt=!!y.map,Ve=!!y.matcap,N=!!L,fn=!!y.aoMap,Oe=!!y.lightMap,Xe=!!y.bumpMap,Ce=!!y.normalMap,st=!!y.displacementMap,Ne=!!y.emissiveMap,C=!!y.metalnessMap,w=!!y.roughnessMap,k=y.anisotropy>0,$=y.clearcoat>0,ee=y.dispersion>0,X=y.iridescence>0,Se=y.sheen>0,le=y.transmission>0,ge=k&&!!y.anisotropyMap,$e=$&&!!y.clearcoatMap,ie=$&&!!y.clearcoatNormalMap,xe=$&&!!y.clearcoatRoughnessMap,Re=X&&!!y.iridescenceMap,Pe=X&&!!y.iridescenceThicknessMap,ve=Se&&!!y.sheenColorMap,ze=Se&&!!y.sheenRoughnessMap,De=!!y.specularMap,it=!!y.specularColorMap,D=!!y.specularIntensityMap,he=le&&!!y.transmissionMap,V=le&&!!y.thicknessMap,K=!!y.gradientMap,ue=!!y.alphaMap,pe=y.alphaTest>0,Ge=!!y.alphaHash,yt=!!y.extensions;let Qt=nr;y.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(Qt=t.toneMapping);const Ye={shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:W,fragmentShader:ne,defines:y.defines,customVertexShaderID:fe,customFragmentShaderID:ce,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:He,batchingColor:He&&q._colorsTexture!==null,instancing:Te,instancingColor:Te&&q.instanceColor!==null,instancingMorph:Te&&q.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Le===null?t.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:ur,alphaToCoverage:!!y.alphaToCoverage,map:tt,matcap:Ve,envMap:N,envMapMode:N&&L.mapping,envMapCubeUVHeight:Y,aoMap:fn,lightMap:Oe,bumpMap:Xe,normalMap:Ce,displacementMap:m&&st,emissiveMap:Ne,normalMapObjectSpace:Ce&&y.normalMapType===A1,normalMapTangentSpace:Ce&&y.normalMapType===Vx,metalnessMap:C,roughnessMap:w,anisotropy:k,anisotropyMap:ge,clearcoat:$,clearcoatMap:$e,clearcoatNormalMap:ie,clearcoatRoughnessMap:xe,dispersion:ee,iridescence:X,iridescenceMap:Re,iridescenceThicknessMap:Pe,sheen:Se,sheenColorMap:ve,sheenRoughnessMap:ze,specularMap:De,specularColorMap:it,specularIntensityMap:D,transmission:le,transmissionMap:he,thicknessMap:V,gradientMap:K,opaque:y.transparent===!1&&y.blending===ws&&y.alphaToCoverage===!1,alphaMap:ue,alphaTest:pe,alphaHash:Ge,combine:y.combine,mapUv:tt&&g(y.map.channel),aoMapUv:fn&&g(y.aoMap.channel),lightMapUv:Oe&&g(y.lightMap.channel),bumpMapUv:Xe&&g(y.bumpMap.channel),normalMapUv:Ce&&g(y.normalMap.channel),displacementMapUv:st&&g(y.displacementMap.channel),emissiveMapUv:Ne&&g(y.emissiveMap.channel),metalnessMapUv:C&&g(y.metalnessMap.channel),roughnessMapUv:w&&g(y.roughnessMap.channel),anisotropyMapUv:ge&&g(y.anisotropyMap.channel),clearcoatMapUv:$e&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:ie&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:ze&&g(y.sheenRoughnessMap.channel),specularMapUv:De&&g(y.specularMap.channel),specularColorMapUv:it&&g(y.specularColorMap.channel),specularIntensityMapUv:D&&g(y.specularIntensityMap.channel),transmissionMapUv:he&&g(y.transmissionMap.channel),thicknessMapUv:V&&g(y.thicknessMap.channel),alphaMapUv:ue&&g(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ce||k),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!G.attributes.uv&&(tt||ue),fog:!!J,useFog:y.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:d,skinning:q.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:ke,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&H.length>0,shadowMapType:t.shadowMap.type,toneMapping:Qt,decodeVideoTexture:tt&&y.map.isVideoTexture===!0&&Qe.getTransfer(y.map.colorSpace)===lt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===gi,flipSided:y.side===dn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:yt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&y.extensions.multiDraw===!0||He)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function v(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const H in y.defines)T.push(H),T.push(y.defines[H]);return y.isRawShaderMaterial===!1&&(x(T,y),M(T,y),T.push(t.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function x(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function M(y,T){o.disableAll(),T.supportsVertexTextures&&o.enable(0),T.instancing&&o.enable(1),T.instancingColor&&o.enable(2),T.instancingMorph&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),T.dispersion&&o.enable(20),T.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reverseDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.alphaToCoverage&&o.enable(20),y.push(o.mask)}function R(y){const T=S[y.type];let H;if(T){const j=ti[T];H=iS.clone(j.uniforms)}else H=y.uniforms;return H}function A(y,T){let H;for(let j=0,q=f.length;j<q;j++){const J=f[j];if(J.cacheKey===T){H=J,++H.usedTimes;break}}return H===void 0&&(H=new xb(t,T,y,s),f.push(H)),H}function b(y){if(--y.usedTimes===0){const T=f.indexOf(y);f[T]=f[f.length-1],f.pop(),y.destroy()}}function P(y){l.remove(y)}function B(){l.dispose()}return{getParameters:h,getProgramCacheKey:v,getUniforms:R,acquireProgram:A,releaseProgram:b,releaseShaderCache:P,programs:f,dispose:B}}function Mb(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function wb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Gm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Wm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(p,d,m,_,S,g){let h=t[e];return h===void 0?(h={id:p.id,object:p,geometry:d,material:m,groupOrder:_,renderOrder:p.renderOrder,z:S,group:g},t[e]=h):(h.id=p.id,h.object=p,h.geometry=d,h.material=m,h.groupOrder=_,h.renderOrder=p.renderOrder,h.z=S,h.group=g),e++,h}function o(p,d,m,_,S,g){const h=a(p,d,m,_,S,g);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):n.push(h)}function l(p,d,m,_,S,g){const h=a(p,d,m,_,S,g);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):n.unshift(h)}function c(p,d){n.length>1&&n.sort(p||wb),i.length>1&&i.sort(d||Gm),r.length>1&&r.sort(d||Gm)}function f(){for(let p=e,d=t.length;p<d;p++){const m=t[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:f,sort:c}}function Eb(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Wm,t.set(i,[a])):r>=s.length?(a=new Wm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function bb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new I,color:new Be};break;case"SpotLight":n={position:new I,direction:new I,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new Be,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":n={color:new Be,position:new I,halfWidth:new I,halfHeight:new I};break}return t[e.id]=n,n}}}function Tb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Ab=0;function Cb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Rb(t){const e=new bb,n=Tb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const r=new I,s=new ut,a=new ut;function o(c){let f=0,p=0,d=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let m=0,_=0,S=0,g=0,h=0,v=0,x=0,M=0,R=0,A=0,b=0;c.sort(Cb);for(let B=0,y=c.length;B<y;B++){const T=c[B],H=T.color,j=T.intensity,q=T.distance,J=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)f+=H.r*j,p+=H.g*j,d+=H.b*j;else if(T.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(T.sh.coefficients[G],j);b++}else if(T.isDirectionalLight){const G=e.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const Q=T.shadow,L=n.get(T);L.shadowIntensity=Q.intensity,L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,i.directionalShadow[m]=L,i.directionalShadowMap[m]=J,i.directionalShadowMatrix[m]=T.shadow.matrix,v++}i.directional[m]=G,m++}else if(T.isSpotLight){const G=e.get(T);G.position.setFromMatrixPosition(T.matrixWorld),G.color.copy(H).multiplyScalar(j),G.distance=q,G.coneCos=Math.cos(T.angle),G.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),G.decay=T.decay,i.spot[S]=G;const Q=T.shadow;if(T.map&&(i.spotLightMap[R]=T.map,R++,Q.updateMatrices(T),T.castShadow&&A++),i.spotLightMatrix[S]=Q.matrix,T.castShadow){const L=n.get(T);L.shadowIntensity=Q.intensity,L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,i.spotShadow[S]=L,i.spotShadowMap[S]=J,M++}S++}else if(T.isRectAreaLight){const G=e.get(T);G.color.copy(H).multiplyScalar(j),G.halfWidth.set(T.width*.5,0,0),G.halfHeight.set(0,T.height*.5,0),i.rectArea[g]=G,g++}else if(T.isPointLight){const G=e.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),G.distance=T.distance,G.decay=T.decay,T.castShadow){const Q=T.shadow,L=n.get(T);L.shadowIntensity=Q.intensity,L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,L.shadowCameraNear=Q.camera.near,L.shadowCameraFar=Q.camera.far,i.pointShadow[_]=L,i.pointShadowMap[_]=J,i.pointShadowMatrix[_]=T.shadow.matrix,x++}i.point[_]=G,_++}else if(T.isHemisphereLight){const G=e.get(T);G.skyColor.copy(T.color).multiplyScalar(j),G.groundColor.copy(T.groundColor).multiplyScalar(j),i.hemi[h]=G,h++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==m||P.pointLength!==_||P.spotLength!==S||P.rectAreaLength!==g||P.hemiLength!==h||P.numDirectionalShadows!==v||P.numPointShadows!==x||P.numSpotShadows!==M||P.numSpotMaps!==R||P.numLightProbes!==b)&&(i.directional.length=m,i.spot.length=S,i.rectArea.length=g,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=M+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=b,P.directionalLength=m,P.pointLength=_,P.spotLength=S,P.rectAreaLength=g,P.hemiLength=h,P.numDirectionalShadows=v,P.numPointShadows=x,P.numSpotShadows=M,P.numSpotMaps=R,P.numLightProbes=b,i.version=Ab++)}function l(c,f){let p=0,d=0,m=0,_=0,S=0;const g=f.matrixWorldInverse;for(let h=0,v=c.length;h<v;h++){const x=c[h];if(x.isDirectionalLight){const M=i.directional[p];M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),p++}else if(x.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),m++}else if(x.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),a.identity(),s.copy(x.matrixWorld),s.premultiply(g),a.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){const M=i.hemi[S];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(g),S++}}}return{setup:o,setupView:l,state:i}}function Xm(t){const e=new Rb(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function a(f){i.push(f)}function o(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Pb(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Xm(t),e.set(r,[o])):s>=a.length?(o=new Xm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class Nb extends jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=b1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lb extends jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Db=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ib=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ub(t,e,n){let i=new Rh;const r=new je,s=new je,a=new nt,o=new Nb({depthPacking:T1}),l=new Lb,c={},f=n.maxTextureSize,p={[sr]:dn,[dn]:sr,[gi]:gi},d=new ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:Db,fragmentShader:Ib}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new Yt;_.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Rt(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Px;let h=this.type;this.render=function(A,b,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const B=t.getRenderTarget(),y=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),H=t.state;H.setBlending(tr),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const j=h!==hi&&this.type===hi,q=h===hi&&this.type!==hi;for(let J=0,G=A.length;J<G;J++){const Q=A[J],L=Q.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const Y=L.getFrameExtents();if(r.multiply(Y),s.copy(L.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/Y.x),r.x=s.x*Y.x,L.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/Y.y),r.y=s.y*Y.y,L.mapSize.y=s.y)),L.map===null||j===!0||q===!0){const se=this.type!==hi?{minFilter:Nn,magFilter:Nn}:{};L.map!==null&&L.map.dispose(),L.map=new Or(r.x,r.y,se),L.map.texture.name=Q.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const Z=L.getViewportCount();for(let se=0;se<Z;se++){const Ee=L.getViewport(se);a.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),H.viewport(a),L.updateMatrices(Q,se),i=L.getFrustum(),M(b,P,L.camera,Q,this.type)}L.isPointLightShadow!==!0&&this.type===hi&&v(L,P),L.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(B,y,T)};function v(A,b){const P=e.update(S);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Or(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(b,null,P,d,S,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(b,null,P,m,S,null)}function x(A,b,P,B){let y=null;const T=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)y=T;else if(y=P.isPointLight===!0?l:o,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const H=y.uuid,j=b.uuid;let q=c[H];q===void 0&&(q={},c[H]=q);let J=q[j];J===void 0&&(J=y.clone(),q[j]=J,b.addEventListener("dispose",R)),y=J}if(y.visible=b.visible,y.wireframe=b.wireframe,B===hi?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:p[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const H=t.properties.get(y);H.light=P}return y}function M(A,b,P,B,y){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===hi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const j=e.update(A),q=A.material;if(Array.isArray(q)){const J=j.groups;for(let G=0,Q=J.length;G<Q;G++){const L=J[G],Y=q[L.materialIndex];if(Y&&Y.visible){const Z=x(A,Y,B,y);A.onBeforeShadow(t,A,b,P,j,Z,L),t.renderBufferDirect(P,null,j,Z,A,L),A.onAfterShadow(t,A,b,P,j,Z,L)}}}else if(q.visible){const J=x(A,q,B,y);A.onBeforeShadow(t,A,b,P,j,J,null),t.renderBufferDirect(P,null,j,J,A,null),A.onAfterShadow(t,A,b,P,j,J,null)}}const H=A.children;for(let j=0,q=H.length;j<q;j++)M(H[j],b,P,B,y)}function R(A){A.target.removeEventListener("dispose",R);for(const P in c){const B=c[P],y=A.target.uuid;y in B&&(B[y].dispose(),delete B[y])}}}const Fb={[Pd]:Nd,[Ld]:Ud,[Dd]:Fd,[Is]:Id,[Nd]:Pd,[Ud]:Ld,[Fd]:Dd,[Id]:Is};function kb(t){function e(){let D=!1;const he=new nt;let V=null;const K=new nt(0,0,0,0);return{setMask:function(ue){V!==ue&&!D&&(t.colorMask(ue,ue,ue,ue),V=ue)},setLocked:function(ue){D=ue},setClear:function(ue,pe,Ge,yt,Qt){Qt===!0&&(ue*=yt,pe*=yt,Ge*=yt),he.set(ue,pe,Ge,yt),K.equals(he)===!1&&(t.clearColor(ue,pe,Ge,yt),K.copy(he))},reset:function(){D=!1,V=null,K.set(-1,0,0,0)}}}function n(){let D=!1,he=!1,V=null,K=null,ue=null;return{setReversed:function(pe){he=pe},setTest:function(pe){pe?fe(t.DEPTH_TEST):ce(t.DEPTH_TEST)},setMask:function(pe){V!==pe&&!D&&(t.depthMask(pe),V=pe)},setFunc:function(pe){if(he&&(pe=Fb[pe]),K!==pe){switch(pe){case Pd:t.depthFunc(t.NEVER);break;case Nd:t.depthFunc(t.ALWAYS);break;case Ld:t.depthFunc(t.LESS);break;case Is:t.depthFunc(t.LEQUAL);break;case Dd:t.depthFunc(t.EQUAL);break;case Id:t.depthFunc(t.GEQUAL);break;case Ud:t.depthFunc(t.GREATER);break;case Fd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}K=pe}},setLocked:function(pe){D=pe},setClear:function(pe){ue!==pe&&(t.clearDepth(pe),ue=pe)},reset:function(){D=!1,V=null,K=null,ue=null}}}function i(){let D=!1,he=null,V=null,K=null,ue=null,pe=null,Ge=null,yt=null,Qt=null;return{setTest:function(Ye){D||(Ye?fe(t.STENCIL_TEST):ce(t.STENCIL_TEST))},setMask:function(Ye){he!==Ye&&!D&&(t.stencilMask(Ye),he=Ye)},setFunc:function(Ye,Jt,oi){(V!==Ye||K!==Jt||ue!==oi)&&(t.stencilFunc(Ye,Jt,oi),V=Ye,K=Jt,ue=oi)},setOp:function(Ye,Jt,oi){(pe!==Ye||Ge!==Jt||yt!==oi)&&(t.stencilOp(Ye,Jt,oi),pe=Ye,Ge=Jt,yt=oi)},setLocked:function(Ye){D=Ye},setClear:function(Ye){Qt!==Ye&&(t.clearStencil(Ye),Qt=Ye)},reset:function(){D=!1,he=null,V=null,K=null,ue=null,pe=null,Ge=null,yt=null,Qt=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,l=new WeakMap;let c={},f={},p=new WeakMap,d=[],m=null,_=!1,S=null,g=null,h=null,v=null,x=null,M=null,R=null,A=new Be(0,0,0),b=0,P=!1,B=null,y=null,T=null,H=null,j=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,G=0;const Q=t.getParameter(t.VERSION);Q.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Q)[1]),J=G>=1):Q.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),J=G>=2);let L=null,Y={};const Z=t.getParameter(t.SCISSOR_BOX),se=t.getParameter(t.VIEWPORT),Ee=new nt().fromArray(Z),ke=new nt().fromArray(se);function W(D,he,V,K){const ue=new Uint8Array(4),pe=t.createTexture();t.bindTexture(D,pe),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ge=0;Ge<V;Ge++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,K,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(he+Ge,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return pe}const ne={};ne[t.TEXTURE_2D]=W(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=W(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=W(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=W(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),fe(t.DEPTH_TEST),s.setFunc(Is),Oe(!1),Xe(em),fe(t.CULL_FACE),N(tr);function fe(D){c[D]!==!0&&(t.enable(D),c[D]=!0)}function ce(D){c[D]!==!1&&(t.disable(D),c[D]=!1)}function Le(D,he){return f[D]!==he?(t.bindFramebuffer(D,he),f[D]=he,D===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=he),D===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=he),!0):!1}function Te(D,he){let V=d,K=!1;if(D){V=p.get(he),V===void 0&&(V=[],p.set(he,V));const ue=D.textures;if(V.length!==ue.length||V[0]!==t.COLOR_ATTACHMENT0){for(let pe=0,Ge=ue.length;pe<Ge;pe++)V[pe]=t.COLOR_ATTACHMENT0+pe;V.length=ue.length,K=!0}}else V[0]!==t.BACK&&(V[0]=t.BACK,K=!0);K&&t.drawBuffers(V)}function He(D){return m!==D?(t.useProgram(D),m=D,!0):!1}const tt={[Mr]:t.FUNC_ADD,[Qy]:t.FUNC_SUBTRACT,[Jy]:t.FUNC_REVERSE_SUBTRACT};tt[e1]=t.MIN,tt[t1]=t.MAX;const Ve={[n1]:t.ZERO,[i1]:t.ONE,[r1]:t.SRC_COLOR,[Cd]:t.SRC_ALPHA,[u1]:t.SRC_ALPHA_SATURATE,[l1]:t.DST_COLOR,[a1]:t.DST_ALPHA,[s1]:t.ONE_MINUS_SRC_COLOR,[Rd]:t.ONE_MINUS_SRC_ALPHA,[c1]:t.ONE_MINUS_DST_COLOR,[o1]:t.ONE_MINUS_DST_ALPHA,[d1]:t.CONSTANT_COLOR,[f1]:t.ONE_MINUS_CONSTANT_COLOR,[h1]:t.CONSTANT_ALPHA,[p1]:t.ONE_MINUS_CONSTANT_ALPHA};function N(D,he,V,K,ue,pe,Ge,yt,Qt,Ye){if(D===tr){_===!0&&(ce(t.BLEND),_=!1);return}if(_===!1&&(fe(t.BLEND),_=!0),D!==Zy){if(D!==S||Ye!==P){if((g!==Mr||x!==Mr)&&(t.blendEquation(t.FUNC_ADD),g=Mr,x=Mr),Ye)switch(D){case ws:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case tm:t.blendFunc(t.ONE,t.ONE);break;case nm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case im:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ws:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case tm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case nm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case im:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}h=null,v=null,M=null,R=null,A.set(0,0,0),b=0,S=D,P=Ye}return}ue=ue||he,pe=pe||V,Ge=Ge||K,(he!==g||ue!==x)&&(t.blendEquationSeparate(tt[he],tt[ue]),g=he,x=ue),(V!==h||K!==v||pe!==M||Ge!==R)&&(t.blendFuncSeparate(Ve[V],Ve[K],Ve[pe],Ve[Ge]),h=V,v=K,M=pe,R=Ge),(yt.equals(A)===!1||Qt!==b)&&(t.blendColor(yt.r,yt.g,yt.b,Qt),A.copy(yt),b=Qt),S=D,P=!1}function fn(D,he){D.side===gi?ce(t.CULL_FACE):fe(t.CULL_FACE);let V=D.side===dn;he&&(V=!V),Oe(V),D.blending===ws&&D.transparent===!1?N(tr):N(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const K=D.stencilWrite;a.setTest(K),K&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),st(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?fe(t.SAMPLE_ALPHA_TO_COVERAGE):ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(D){B!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),B=D)}function Xe(D){D!==qy?(fe(t.CULL_FACE),D!==y&&(D===em?t.cullFace(t.BACK):D===Yy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ce(t.CULL_FACE),y=D}function Ce(D){D!==T&&(J&&t.lineWidth(D),T=D)}function st(D,he,V){D?(fe(t.POLYGON_OFFSET_FILL),(H!==he||j!==V)&&(t.polygonOffset(he,V),H=he,j=V)):ce(t.POLYGON_OFFSET_FILL)}function Ne(D){D?fe(t.SCISSOR_TEST):ce(t.SCISSOR_TEST)}function C(D){D===void 0&&(D=t.TEXTURE0+q-1),L!==D&&(t.activeTexture(D),L=D)}function w(D,he,V){V===void 0&&(L===null?V=t.TEXTURE0+q-1:V=L);let K=Y[V];K===void 0&&(K={type:void 0,texture:void 0},Y[V]=K),(K.type!==D||K.texture!==he)&&(L!==V&&(t.activeTexture(V),L=V),t.bindTexture(D,he||ne[D]),K.type=D,K.texture=he)}function k(){const D=Y[L];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $e(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(D){Ee.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Ee.copy(D))}function ve(D){ke.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),ke.copy(D))}function ze(D,he){let V=l.get(he);V===void 0&&(V=new WeakMap,l.set(he,V));let K=V.get(D);K===void 0&&(K=t.getUniformBlockIndex(he,D.name),V.set(D,K))}function De(D,he){const K=l.get(he).get(D);o.get(he)!==K&&(t.uniformBlockBinding(he,K,D.__bindingPointIndex),o.set(he,K))}function it(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},L=null,Y={},f={},p=new WeakMap,d=[],m=null,_=!1,S=null,g=null,h=null,v=null,x=null,M=null,R=null,A=new Be(0,0,0),b=0,P=!1,B=null,y=null,T=null,H=null,j=null,Ee.set(0,0,t.canvas.width,t.canvas.height),ke.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:fe,disable:ce,bindFramebuffer:Le,drawBuffers:Te,useProgram:He,setBlending:N,setMaterial:fn,setFlipSided:Oe,setCullFace:Xe,setLineWidth:Ce,setPolygonOffset:st,setScissorTest:Ne,activeTexture:C,bindTexture:w,unbindTexture:k,compressedTexImage2D:$,compressedTexImage3D:ee,texImage2D:xe,texImage3D:Re,updateUBOMapping:ze,uniformBlockBinding:De,texStorage2D:$e,texStorage3D:ie,texSubImage2D:X,texSubImage3D:Se,compressedTexSubImage2D:le,compressedTexSubImage3D:ge,scissor:Pe,viewport:ve,reset:it}}function $m(t,e,n,i){const r=Ob(i);switch(n){case Fx:return t*e;case Ox:return t*e;case zx:return t*e*2;case Bx:return t*e/r.components*r.byteLength;case wh:return t*e/r.components*r.byteLength;case jx:return t*e*2/r.components*r.byteLength;case Eh:return t*e*2/r.components*r.byteLength;case kx:return t*e*3/r.components*r.byteLength;case Wn:return t*e*4/r.components*r.byteLength;case bh:return t*e*4/r.components*r.byteLength;case ol:case ll:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case cl:case ul:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Hd:case Gd:return Math.max(t,16)*Math.max(e,8)/4;case jd:case Vd:return Math.max(t,8)*Math.max(e,8)/2;case Wd:case Xd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case $d:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case qd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Yd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Jd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case ef:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case tf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case nf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case rf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case sf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case af:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case of:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case lf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case dl:case cf:case uf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Hx:case df:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ff:case hf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Ob(t){switch(t){case Ai:case Dx:return{byteLength:1,components:1};case ja:case Ix:case qa:return{byteLength:2,components:1};case Sh:case Mh:return{byteLength:2,components:4};case kr:case yh:case _i:return{byteLength:4,components:1};case Ux:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function zb(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,f=new WeakMap;let p;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,w){return m?new OffscreenCanvas(C,w):Gl("canvas")}function S(C,w,k){let $=1;const ee=Ne(C);if((ee.width>k||ee.height>k)&&($=k/Math.max(ee.width,ee.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const X=Math.floor($*ee.width),Se=Math.floor($*ee.height);p===void 0&&(p=_(X,Se));const le=w?_(X,Se):p;return le.width=X,le.height=Se,le.getContext("2d").drawImage(C,0,0,X,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+X+"x"+Se+")."),le}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),C;return C}function g(C){return C.generateMipmaps&&C.minFilter!==Nn&&C.minFilter!==Gn}function h(C){t.generateMipmap(C)}function v(C,w,k,$,ee=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let X=w;if(w===t.RED&&(k===t.FLOAT&&(X=t.R32F),k===t.HALF_FLOAT&&(X=t.R16F),k===t.UNSIGNED_BYTE&&(X=t.R8)),w===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(X=t.R8UI),k===t.UNSIGNED_SHORT&&(X=t.R16UI),k===t.UNSIGNED_INT&&(X=t.R32UI),k===t.BYTE&&(X=t.R8I),k===t.SHORT&&(X=t.R16I),k===t.INT&&(X=t.R32I)),w===t.RG&&(k===t.FLOAT&&(X=t.RG32F),k===t.HALF_FLOAT&&(X=t.RG16F),k===t.UNSIGNED_BYTE&&(X=t.RG8)),w===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&(X=t.RG8UI),k===t.UNSIGNED_SHORT&&(X=t.RG16UI),k===t.UNSIGNED_INT&&(X=t.RG32UI),k===t.BYTE&&(X=t.RG8I),k===t.SHORT&&(X=t.RG16I),k===t.INT&&(X=t.RG32I)),w===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&(X=t.RGB8UI),k===t.UNSIGNED_SHORT&&(X=t.RGB16UI),k===t.UNSIGNED_INT&&(X=t.RGB32UI),k===t.BYTE&&(X=t.RGB8I),k===t.SHORT&&(X=t.RGB16I),k===t.INT&&(X=t.RGB32I)),w===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&(X=t.RGBA8UI),k===t.UNSIGNED_SHORT&&(X=t.RGBA16UI),k===t.UNSIGNED_INT&&(X=t.RGBA32UI),k===t.BYTE&&(X=t.RGBA8I),k===t.SHORT&&(X=t.RGBA16I),k===t.INT&&(X=t.RGBA32I)),w===t.RGB&&k===t.UNSIGNED_INT_5_9_9_9_REV&&(X=t.RGB9_E5),w===t.RGBA){const Se=ee?Bl:Qe.getTransfer($);k===t.FLOAT&&(X=t.RGBA32F),k===t.HALF_FLOAT&&(X=t.RGBA16F),k===t.UNSIGNED_BYTE&&(X=Se===lt?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&(X=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(X=t.RGB5_A1)}return(X===t.R16F||X===t.R32F||X===t.RG16F||X===t.RG32F||X===t.RGBA16F||X===t.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function x(C,w){let k;return C?w===null||w===kr||w===ks?k=t.DEPTH24_STENCIL8:w===_i?k=t.DEPTH32F_STENCIL8:w===ja&&(k=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===kr||w===ks?k=t.DEPTH_COMPONENT24:w===_i?k=t.DEPTH_COMPONENT32F:w===ja&&(k=t.DEPTH_COMPONENT16),k}function M(C,w){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Nn&&C.minFilter!==Gn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function R(C){const w=C.target;w.removeEventListener("dispose",R),b(w),w.isVideoTexture&&f.delete(w)}function A(C){const w=C.target;w.removeEventListener("dispose",A),B(w)}function b(C){const w=i.get(C);if(w.__webglInit===void 0)return;const k=C.source,$=d.get(k);if($){const ee=$[w.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&P(C),Object.keys($).length===0&&d.delete(k)}i.remove(C)}function P(C){const w=i.get(C);t.deleteTexture(w.__webglTexture);const k=C.source,$=d.get(k);delete $[w.__cacheKey],a.memory.textures--}function B(C){const w=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(w.__webglFramebuffer[$]))for(let ee=0;ee<w.__webglFramebuffer[$].length;ee++)t.deleteFramebuffer(w.__webglFramebuffer[$][ee]);else t.deleteFramebuffer(w.__webglFramebuffer[$]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[$])}else{if(Array.isArray(w.__webglFramebuffer))for(let $=0;$<w.__webglFramebuffer.length;$++)t.deleteFramebuffer(w.__webglFramebuffer[$]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let $=0;$<w.__webglColorRenderbuffer.length;$++)w.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[$]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const k=C.textures;for(let $=0,ee=k.length;$<ee;$++){const X=i.get(k[$]);X.__webglTexture&&(t.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(k[$])}i.remove(C)}let y=0;function T(){y=0}function H(){const C=y;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),y+=1,C}function j(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function q(C,w){const k=i.get(C);if(C.isVideoTexture&&Ce(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){const $=C.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ke(k,C,w);return}}n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+w)}function J(C,w){const k=i.get(C);if(C.version>0&&k.__version!==C.version){ke(k,C,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+w)}function G(C,w){const k=i.get(C);if(C.version>0&&k.__version!==C.version){ke(k,C,w);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+w)}function Q(C,w){const k=i.get(C);if(C.version>0&&k.__version!==C.version){W(k,C,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+w)}const L={[zd]:t.REPEAT,[Ar]:t.CLAMP_TO_EDGE,[Bd]:t.MIRRORED_REPEAT},Y={[Nn]:t.NEAREST,[E1]:t.NEAREST_MIPMAP_NEAREST,[_o]:t.NEAREST_MIPMAP_LINEAR,[Gn]:t.LINEAR,[Zc]:t.LINEAR_MIPMAP_NEAREST,[Cr]:t.LINEAR_MIPMAP_LINEAR},Z={[C1]:t.NEVER,[I1]:t.ALWAYS,[R1]:t.LESS,[Gx]:t.LEQUAL,[P1]:t.EQUAL,[D1]:t.GEQUAL,[N1]:t.GREATER,[L1]:t.NOTEQUAL};function se(C,w){if(w.type===_i&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Gn||w.magFilter===Zc||w.magFilter===_o||w.magFilter===Cr||w.minFilter===Gn||w.minFilter===Zc||w.minFilter===_o||w.minFilter===Cr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,L[w.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,L[w.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,L[w.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,Y[w.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,Y[w.minFilter]),w.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Z[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Nn||w.minFilter!==_o&&w.minFilter!==Cr||w.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Ee(C,w){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",R));const $=w.source;let ee=d.get($);ee===void 0&&(ee={},d.set($,ee));const X=j(w);if(X!==C.__cacheKey){ee[X]===void 0&&(ee[X]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,k=!0),ee[X].usedTimes++;const Se=ee[C.__cacheKey];Se!==void 0&&(ee[C.__cacheKey].usedTimes--,Se.usedTimes===0&&P(w)),C.__cacheKey=X,C.__webglTexture=ee[X].texture}return k}function ke(C,w,k){let $=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&($=t.TEXTURE_3D);const ee=Ee(C,w),X=w.source;n.bindTexture($,C.__webglTexture,t.TEXTURE0+k);const Se=i.get(X);if(X.version!==Se.__version||ee===!0){n.activeTexture(t.TEXTURE0+k);const le=Qe.getPrimaries(Qe.workingColorSpace),ge=w.colorSpace===Hi?null:Qe.getPrimaries(w.colorSpace),$e=w.colorSpace===Hi||le===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let ie=S(w.image,!1,r.maxTextureSize);ie=st(w,ie);const xe=s.convert(w.format,w.colorSpace),Re=s.convert(w.type);let Pe=v(w.internalFormat,xe,Re,w.colorSpace,w.isVideoTexture);se($,w);let ve;const ze=w.mipmaps,De=w.isVideoTexture!==!0,it=Se.__version===void 0||ee===!0,D=X.dataReady,he=M(w,ie);if(w.isDepthTexture)Pe=x(w.format===Os,w.type),it&&(De?n.texStorage2D(t.TEXTURE_2D,1,Pe,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Pe,ie.width,ie.height,0,xe,Re,null));else if(w.isDataTexture)if(ze.length>0){De&&it&&n.texStorage2D(t.TEXTURE_2D,he,Pe,ze[0].width,ze[0].height);for(let V=0,K=ze.length;V<K;V++)ve=ze[V],De?D&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,ve.width,ve.height,xe,Re,ve.data):n.texImage2D(t.TEXTURE_2D,V,Pe,ve.width,ve.height,0,xe,Re,ve.data);w.generateMipmaps=!1}else De?(it&&n.texStorage2D(t.TEXTURE_2D,he,Pe,ie.width,ie.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,xe,Re,ie.data)):n.texImage2D(t.TEXTURE_2D,0,Pe,ie.width,ie.height,0,xe,Re,ie.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){De&&it&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Pe,ze[0].width,ze[0].height,ie.depth);for(let V=0,K=ze.length;V<K;V++)if(ve=ze[V],w.format!==Wn)if(xe!==null)if(De){if(D)if(w.layerUpdates.size>0){const ue=$m(ve.width,ve.height,w.format,w.type);for(const pe of w.layerUpdates){const Ge=ve.data.subarray(pe*ue/ve.data.BYTES_PER_ELEMENT,(pe+1)*ue/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,pe,ve.width,ve.height,1,xe,Ge,0,0)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,0,ve.width,ve.height,ie.depth,xe,ve.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,V,Pe,ve.width,ve.height,ie.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,0,ve.width,ve.height,ie.depth,xe,Re,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,V,Pe,ve.width,ve.height,ie.depth,0,xe,Re,ve.data)}else{De&&it&&n.texStorage2D(t.TEXTURE_2D,he,Pe,ze[0].width,ze[0].height);for(let V=0,K=ze.length;V<K;V++)ve=ze[V],w.format!==Wn?xe!==null?De?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,V,0,0,ve.width,ve.height,xe,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,V,Pe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?D&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,ve.width,ve.height,xe,Re,ve.data):n.texImage2D(t.TEXTURE_2D,V,Pe,ve.width,ve.height,0,xe,Re,ve.data)}else if(w.isDataArrayTexture)if(De){if(it&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Pe,ie.width,ie.height,ie.depth),D)if(w.layerUpdates.size>0){const V=$m(ie.width,ie.height,w.format,w.type);for(const K of w.layerUpdates){const ue=ie.data.subarray(K*V/ie.data.BYTES_PER_ELEMENT,(K+1)*V/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,K,ie.width,ie.height,1,xe,Re,ue)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,xe,Re,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,ie.width,ie.height,ie.depth,0,xe,Re,ie.data);else if(w.isData3DTexture)De?(it&&n.texStorage3D(t.TEXTURE_3D,he,Pe,ie.width,ie.height,ie.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,xe,Re,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,ie.width,ie.height,ie.depth,0,xe,Re,ie.data);else if(w.isFramebufferTexture){if(it)if(De)n.texStorage2D(t.TEXTURE_2D,he,Pe,ie.width,ie.height);else{let V=ie.width,K=ie.height;for(let ue=0;ue<he;ue++)n.texImage2D(t.TEXTURE_2D,ue,Pe,V,K,0,xe,Re,null),V>>=1,K>>=1}}else if(ze.length>0){if(De&&it){const V=Ne(ze[0]);n.texStorage2D(t.TEXTURE_2D,he,Pe,V.width,V.height)}for(let V=0,K=ze.length;V<K;V++)ve=ze[V],De?D&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,xe,Re,ve):n.texImage2D(t.TEXTURE_2D,V,Pe,xe,Re,ve);w.generateMipmaps=!1}else if(De){if(it){const V=Ne(ie);n.texStorage2D(t.TEXTURE_2D,he,Pe,V.width,V.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,Re,ie)}else n.texImage2D(t.TEXTURE_2D,0,Pe,xe,Re,ie);g(w)&&h($),Se.__version=X.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function W(C,w,k){if(w.image.length!==6)return;const $=Ee(C,w),ee=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+k);const X=i.get(ee);if(ee.version!==X.__version||$===!0){n.activeTexture(t.TEXTURE0+k);const Se=Qe.getPrimaries(Qe.workingColorSpace),le=w.colorSpace===Hi?null:Qe.getPrimaries(w.colorSpace),ge=w.colorSpace===Hi||Se===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const $e=w.isCompressedTexture||w.image[0].isCompressedTexture,ie=w.image[0]&&w.image[0].isDataTexture,xe=[];for(let K=0;K<6;K++)!$e&&!ie?xe[K]=S(w.image[K],!0,r.maxCubemapSize):xe[K]=ie?w.image[K].image:w.image[K],xe[K]=st(w,xe[K]);const Re=xe[0],Pe=s.convert(w.format,w.colorSpace),ve=s.convert(w.type),ze=v(w.internalFormat,Pe,ve,w.colorSpace),De=w.isVideoTexture!==!0,it=X.__version===void 0||$===!0,D=ee.dataReady;let he=M(w,Re);se(t.TEXTURE_CUBE_MAP,w);let V;if($e){De&&it&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,ze,Re.width,Re.height);for(let K=0;K<6;K++){V=xe[K].mipmaps;for(let ue=0;ue<V.length;ue++){const pe=V[ue];w.format!==Wn?Pe!==null?De?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,0,0,pe.width,pe.height,Pe,pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,ze,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,0,0,pe.width,pe.height,Pe,ve,pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,ze,pe.width,pe.height,0,Pe,ve,pe.data)}}}else{if(V=w.mipmaps,De&&it){V.length>0&&he++;const K=Ne(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,ze,K.width,K.height)}for(let K=0;K<6;K++)if(ie){De?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,xe[K].width,xe[K].height,Pe,ve,xe[K].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ze,xe[K].width,xe[K].height,0,Pe,ve,xe[K].data);for(let ue=0;ue<V.length;ue++){const Ge=V[ue].image[K].image;De?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,0,0,Ge.width,Ge.height,Pe,ve,Ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,ze,Ge.width,Ge.height,0,Pe,ve,Ge.data)}}else{De?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Pe,ve,xe[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ze,Pe,ve,xe[K]);for(let ue=0;ue<V.length;ue++){const pe=V[ue];De?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,0,0,Pe,ve,pe.image[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,ze,Pe,ve,pe.image[K])}}}g(w)&&h(t.TEXTURE_CUBE_MAP),X.__version=ee.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ne(C,w,k,$,ee,X){const Se=s.convert(k.format,k.colorSpace),le=s.convert(k.type),ge=v(k.internalFormat,Se,le,k.colorSpace);if(!i.get(w).__hasExternalTextures){const ie=Math.max(1,w.width>>X),xe=Math.max(1,w.height>>X);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,X,ge,ie,xe,w.depth,0,Se,le,null):n.texImage2D(ee,X,ge,ie,xe,0,Se,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Xe(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,ee,i.get(k).__webglTexture,0,Oe(w)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,ee,i.get(k).__webglTexture,X),n.bindFramebuffer(t.FRAMEBUFFER,null)}function fe(C,w,k){if(t.bindRenderbuffer(t.RENDERBUFFER,C),w.depthBuffer){const $=w.depthTexture,ee=$&&$.isDepthTexture?$.type:null,X=x(w.stencilBuffer,ee),Se=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=Oe(w);Xe(w)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,X,w.width,w.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,X,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,X,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Se,t.RENDERBUFFER,C)}else{const $=w.textures;for(let ee=0;ee<$.length;ee++){const X=$[ee],Se=s.convert(X.format,X.colorSpace),le=s.convert(X.type),ge=v(X.internalFormat,Se,le,X.colorSpace),$e=Oe(w);k&&Xe(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,$e,ge,w.width,w.height):Xe(w)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,$e,ge,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,ge,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ce(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),q(w.depthTexture,0);const $=i.get(w.depthTexture).__webglTexture,ee=Oe(w);if(w.depthTexture.format===Es)Xe(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0);else if(w.depthTexture.format===Os)Xe(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Le(C){const w=i.get(C),k=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){const $=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),$){const ee=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,$.removeEventListener("dispose",ee)};$.addEventListener("dispose",ee),w.__depthDisposeCallback=ee}w.__boundDepthTexture=$}if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ce(w.__webglFramebuffer,C)}else if(k){w.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[$]),w.__webglDepthbuffer[$]===void 0)w.__webglDepthbuffer[$]=t.createRenderbuffer(),fe(w.__webglDepthbuffer[$],C,!1);else{const ee=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,X=w.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,X),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,X)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),fe(w.__webglDepthbuffer,C,!1);else{const $=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,ee)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Te(C,w,k){const $=i.get(C);w!==void 0&&ne($.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&Le(C)}function He(C){const w=C.texture,k=i.get(C),$=i.get(w);C.addEventListener("dispose",A);const ee=C.textures,X=C.isWebGLCubeRenderTarget===!0,Se=ee.length>1;if(Se||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=w.version,a.memory.textures++),X){k.__webglFramebuffer=[];for(let le=0;le<6;le++)if(w.mipmaps&&w.mipmaps.length>0){k.__webglFramebuffer[le]=[];for(let ge=0;ge<w.mipmaps.length;ge++)k.__webglFramebuffer[le][ge]=t.createFramebuffer()}else k.__webglFramebuffer[le]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){k.__webglFramebuffer=[];for(let le=0;le<w.mipmaps.length;le++)k.__webglFramebuffer[le]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(Se)for(let le=0,ge=ee.length;le<ge;le++){const $e=i.get(ee[le]);$e.__webglTexture===void 0&&($e.__webglTexture=t.createTexture(),a.memory.textures++)}if(C.samples>0&&Xe(C)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let le=0;le<ee.length;le++){const ge=ee[le];k.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[le]);const $e=s.convert(ge.format,ge.colorSpace),ie=s.convert(ge.type),xe=v(ge.internalFormat,$e,ie,ge.colorSpace,C.isXRRenderTarget===!0),Re=Oe(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,xe,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,k.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),fe(k.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(X){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),se(t.TEXTURE_CUBE_MAP,w);for(let le=0;le<6;le++)if(w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)ne(k.__webglFramebuffer[le][ge],C,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge);else ne(k.__webglFramebuffer[le],C,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);g(w)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Se){for(let le=0,ge=ee.length;le<ge;le++){const $e=ee[le],ie=i.get($e);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),se(t.TEXTURE_2D,$e),ne(k.__webglFramebuffer,C,$e,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,0),g($e)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(le=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,$.__webglTexture),se(le,w),w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)ne(k.__webglFramebuffer[ge],C,w,t.COLOR_ATTACHMENT0,le,ge);else ne(k.__webglFramebuffer,C,w,t.COLOR_ATTACHMENT0,le,0);g(w)&&h(le),n.unbindTexture()}C.depthBuffer&&Le(C)}function tt(C){const w=C.textures;for(let k=0,$=w.length;k<$;k++){const ee=w[k];if(g(ee)){const X=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Se=i.get(ee).__webglTexture;n.bindTexture(X,Se),h(X),n.unbindTexture()}}}const Ve=[],N=[];function fn(C){if(C.samples>0){if(Xe(C)===!1){const w=C.textures,k=C.width,$=C.height;let ee=t.COLOR_BUFFER_BIT;const X=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=i.get(C),le=w.length>1;if(le)for(let ge=0;ge<w.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ge=0;ge<w.length;ge++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Se.__webglColorRenderbuffer[ge]);const $e=i.get(w[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,$e,0)}t.blitFramebuffer(0,0,k,$,0,0,k,$,ee,t.NEAREST),l===!0&&(Ve.length=0,N.length=0,Ve.push(t.COLOR_ATTACHMENT0+ge),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ve.push(X),N.push(X),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,N)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ve))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let ge=0;ge<w.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,Se.__webglColorRenderbuffer[ge]);const $e=i.get(w[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,$e,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const w=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function Oe(C){return Math.min(r.maxSamples,C.samples)}function Xe(C){const w=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ce(C){const w=a.render.frame;f.get(C)!==w&&(f.set(C,w),C.update())}function st(C,w){const k=C.colorSpace,$=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==ur&&k!==Hi&&(Qe.getTransfer(k)===lt?($!==Wn||ee!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),w}function Ne(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=T,this.setTexture2D=q,this.setTexture2DArray=J,this.setTexture3D=G,this.setTextureCube=Q,this.rebindTextures=Te,this.setupRenderTarget=He,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=fn,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Xe}function Bb(t,e){function n(i,r=Hi){let s;const a=Qe.getTransfer(r);if(i===Ai)return t.UNSIGNED_BYTE;if(i===Sh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Mh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Ux)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Dx)return t.BYTE;if(i===Ix)return t.SHORT;if(i===ja)return t.UNSIGNED_SHORT;if(i===yh)return t.INT;if(i===kr)return t.UNSIGNED_INT;if(i===_i)return t.FLOAT;if(i===qa)return t.HALF_FLOAT;if(i===Fx)return t.ALPHA;if(i===kx)return t.RGB;if(i===Wn)return t.RGBA;if(i===Ox)return t.LUMINANCE;if(i===zx)return t.LUMINANCE_ALPHA;if(i===Es)return t.DEPTH_COMPONENT;if(i===Os)return t.DEPTH_STENCIL;if(i===Bx)return t.RED;if(i===wh)return t.RED_INTEGER;if(i===jx)return t.RG;if(i===Eh)return t.RG_INTEGER;if(i===bh)return t.RGBA_INTEGER;if(i===ol||i===ll||i===cl||i===ul)if(a===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ol)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ol)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ll)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===cl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ul)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jd||i===Hd||i===Vd||i===Gd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===jd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Hd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Gd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wd||i===Xd||i===$d)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Wd||i===Xd)return a===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===$d)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===qd||i===Yd||i===Kd||i===Zd||i===Qd||i===Jd||i===ef||i===tf||i===nf||i===rf||i===sf||i===af||i===of||i===lf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===qd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Kd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ef)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===af)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===of)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===dl||i===cf||i===uf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===dl)return a===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hx||i===df||i===ff||i===hf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===dl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===df)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ff)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ks?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class jb extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wi extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hb={type:"move"};class Tu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const g=n.getJointPose(S,i),h=this._getHandJoint(c,S);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=f.position.distanceTo(p.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hb)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Wi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Vb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Wb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new qt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ar({vertexShader:Vb,fragmentShader:Gb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Rt(new pc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Xb extends Vs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,p=null,d=null,m=null,_=null;const S=new Wb,g=n.getContextAttributes();let h=null,v=null;const x=[],M=[],R=new je;let A=null;const b=new vn;b.layers.enable(1),b.viewport=new nt;const P=new vn;P.layers.enable(2),P.viewport=new nt;const B=[b,P],y=new jb;y.layers.enable(1),y.layers.enable(2);let T=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ne=x[W];return ne===void 0&&(ne=new Tu,x[W]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(W){let ne=x[W];return ne===void 0&&(ne=new Tu,x[W]=ne),ne.getGripSpace()},this.getHand=function(W){let ne=x[W];return ne===void 0&&(ne=new Tu,x[W]=ne),ne.getHandSpace()};function j(W){const ne=M.indexOf(W.inputSource);if(ne===-1)return;const fe=x[ne];fe!==void 0&&(fe.update(W.inputSource,W.frame,c||a),fe.dispatchEvent({type:W.type,data:W.inputSource}))}function q(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",J);for(let W=0;W<x.length;W++){const ne=M[W];ne!==null&&(M[W]=null,x[W].disconnect(ne))}T=null,H=null,S.reset(),e.setRenderTarget(h),m=null,d=null,p=null,r=null,v=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return p},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",q),r.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const ne={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new Or(m.framebufferWidth,m.framebufferHeight,{format:Wn,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ne=null,fe=null,ce=null;g.depth&&(ce=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=g.stencil?Os:Es,fe=g.stencil?ks:kr);const Le={colorFormat:n.RGBA8,depthFormat:ce,scaleFactor:s};p=new XRWebGLBinding(r,n),d=p.createProjectionLayer(Le),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Or(d.textureWidth,d.textureHeight,{format:Wn,type:Ai,depthTexture:new nv(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ke.setContext(r),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function J(W){for(let ne=0;ne<W.removed.length;ne++){const fe=W.removed[ne],ce=M.indexOf(fe);ce>=0&&(M[ce]=null,x[ce].disconnect(fe))}for(let ne=0;ne<W.added.length;ne++){const fe=W.added[ne];let ce=M.indexOf(fe);if(ce===-1){for(let Te=0;Te<x.length;Te++)if(Te>=M.length){M.push(fe),ce=Te;break}else if(M[Te]===null){M[Te]=fe,ce=Te;break}if(ce===-1)break}const Le=x[ce];Le&&Le.connect(fe)}}const G=new I,Q=new I;function L(W,ne,fe){G.setFromMatrixPosition(ne.matrixWorld),Q.setFromMatrixPosition(fe.matrixWorld);const ce=G.distanceTo(Q),Le=ne.projectionMatrix.elements,Te=fe.projectionMatrix.elements,He=Le[14]/(Le[10]-1),tt=Le[14]/(Le[10]+1),Ve=(Le[9]+1)/Le[5],N=(Le[9]-1)/Le[5],fn=(Le[8]-1)/Le[0],Oe=(Te[8]+1)/Te[0],Xe=He*fn,Ce=He*Oe,st=ce/(-fn+Oe),Ne=st*-fn;if(ne.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ne),W.translateZ(st),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Le[10]===-1)W.projectionMatrix.copy(ne.projectionMatrix),W.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const C=He+st,w=tt+st,k=Xe-Ne,$=Ce+(ce-Ne),ee=Ve*tt/w*C,X=N*tt/w*C;W.projectionMatrix.makePerspective(k,$,ee,X,C,w),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function Y(W,ne){ne===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ne.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let ne=W.near,fe=W.far;S.texture!==null&&(S.depthNear>0&&(ne=S.depthNear),S.depthFar>0&&(fe=S.depthFar)),y.near=P.near=b.near=ne,y.far=P.far=b.far=fe,(T!==y.near||H!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,H=y.far);const ce=W.parent,Le=y.cameras;Y(y,ce);for(let Te=0;Te<Le.length;Te++)Y(Le[Te],ce);Le.length===2?L(y,b,P):y.projectionMatrix.copy(b.projectionMatrix),Z(W,y,ce)};function Z(W,ne,fe){fe===null?W.matrix.copy(ne.matrixWorld):(W.matrix.copy(fe.matrixWorld),W.matrix.invert(),W.matrix.multiply(ne.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ne.projectionMatrix),W.projectionMatrixInverse.copy(ne.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=pf*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(y)};let se=null;function Ee(W,ne){if(f=ne.getViewerPose(c||a),_=ne,f!==null){const fe=f.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let ce=!1;fe.length!==y.cameras.length&&(y.cameras.length=0,ce=!0);for(let Te=0;Te<fe.length;Te++){const He=fe[Te];let tt=null;if(m!==null)tt=m.getViewport(He);else{const N=p.getViewSubImage(d,He);tt=N.viewport,Te===0&&(e.setRenderTargetTextures(v,N.colorTexture,d.ignoreDepthValues?void 0:N.depthStencilTexture),e.setRenderTarget(v))}let Ve=B[Te];Ve===void 0&&(Ve=new vn,Ve.layers.enable(Te),Ve.viewport=new nt,B[Te]=Ve),Ve.matrix.fromArray(He.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(He.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(tt.x,tt.y,tt.width,tt.height),Te===0&&(y.matrix.copy(Ve.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ce===!0&&y.cameras.push(Ve)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const Te=p.getDepthInformation(fe[0]);Te&&Te.isValid&&Te.texture&&S.init(e,Te,r.renderState)}}for(let fe=0;fe<x.length;fe++){const ce=M[fe],Le=x[fe];ce!==null&&Le!==void 0&&Le.update(ce,ne,c||a)}se&&se(W,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),_=null}const ke=new tv;ke.setAnimationLoop(Ee),this.setAnimationLoop=function(W){se=W},this.dispose=function(){}}}const xr=new ai,$b=new ut;function qb(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,Qx(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,v,x,M){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(g,h):h.isMeshToonMaterial?(s(g,h),p(g,h)):h.isMeshPhongMaterial?(s(g,h),f(g,h)):h.isMeshStandardMaterial?(s(g,h),d(g,h),h.isMeshPhysicalMaterial&&m(g,h,M)):h.isMeshMatcapMaterial?(s(g,h),_(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),S(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(a(g,h),h.isLineDashedMaterial&&o(g,h)):h.isPointsMaterial?l(g,h,v,x):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===dn&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===dn&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const v=e.get(h),x=v.envMap,M=v.envMapRotation;x&&(g.envMap.value=x,xr.copy(M),xr.x*=-1,xr.y*=-1,xr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),g.envMapRotation.value.setFromMatrix4($b.makeRotationFromEuler(xr)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function a(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function o(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,v,x){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*v,g.scale.value=x*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function f(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function p(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function d(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function m(g,h,v){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===dn&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,h){h.matcap&&(g.matcap.value=h.matcap)}function S(g,h){const v=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Yb(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const M=x.program;i.uniformBlockBinding(v,M)}function c(v,x){let M=r[v.id];M===void 0&&(_(v),M=f(v),r[v.id]=M,v.addEventListener("dispose",g));const R=x.program;i.updateUBOMapping(v,R);const A=e.render.frame;s[v.id]!==A&&(d(v),s[v.id]=A)}function f(v){const x=p();v.__bindingPointIndex=x;const M=t.createBuffer(),R=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,R,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,M),M}function p(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=r[v.id],M=v.uniforms,R=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let A=0,b=M.length;A<b;A++){const P=Array.isArray(M[A])?M[A]:[M[A]];for(let B=0,y=P.length;B<y;B++){const T=P[B];if(m(T,A,B,R)===!0){const H=T.__offset,j=Array.isArray(T.value)?T.value:[T.value];let q=0;for(let J=0;J<j.length;J++){const G=j[J],Q=S(G);typeof G=="number"||typeof G=="boolean"?(T.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,H+q,T.__data)):G.isMatrix3?(T.__data[0]=G.elements[0],T.__data[1]=G.elements[1],T.__data[2]=G.elements[2],T.__data[3]=0,T.__data[4]=G.elements[3],T.__data[5]=G.elements[4],T.__data[6]=G.elements[5],T.__data[7]=0,T.__data[8]=G.elements[6],T.__data[9]=G.elements[7],T.__data[10]=G.elements[8],T.__data[11]=0):(G.toArray(T.__data,q),q+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,T.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,x,M,R){const A=v.value,b=x+"_"+M;if(R[b]===void 0)return typeof A=="number"||typeof A=="boolean"?R[b]=A:R[b]=A.clone(),!0;{const P=R[b];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return R[b]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function _(v){const x=v.uniforms;let M=0;const R=16;for(let b=0,P=x.length;b<P;b++){const B=Array.isArray(x[b])?x[b]:[x[b]];for(let y=0,T=B.length;y<T;y++){const H=B[y],j=Array.isArray(H.value)?H.value:[H.value];for(let q=0,J=j.length;q<J;q++){const G=j[q],Q=S(G),L=M%R,Y=L%Q.boundary,Z=L+Y;M+=Y,Z!==0&&R-Z<Q.storage&&(M+=R-Z),H.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=Q.storage}}}const A=M%R;return A>0&&(M+=R-A),v.__size=M,v.__cache={},this}function S(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function g(v){const x=v.target;x.removeEventListener("dispose",g);const M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class Kb{constructor(e={}){const{canvas:n=F1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const m=new Uint32Array(4),_=new Int32Array(4);let S=null,g=null;const h=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ei,this.toneMapping=nr,this.toneMappingExposure=1;const x=this;let M=!1,R=0,A=0,b=null,P=-1,B=null;const y=new nt,T=new nt;let H=null;const j=new Be(0);let q=0,J=n.width,G=n.height,Q=1,L=null,Y=null;const Z=new nt(0,0,J,G),se=new nt(0,0,J,G);let Ee=!1;const ke=new Rh;let W=!1,ne=!1;const fe=new ut,ce=new ut,Le=new I,Te=new nt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function Ve(){return b===null?Q:1}let N=i;function fn(E,U){return n.getContext(E,U)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${_h}`),n.addEventListener("webglcontextlost",K,!1),n.addEventListener("webglcontextrestored",ue,!1),n.addEventListener("webglcontextcreationerror",pe,!1),N===null){const U="webgl2";if(N=fn(U,E),N===null)throw fn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Oe,Xe,Ce,st,Ne,C,w,k,$,ee,X,Se,le,ge,$e,ie,xe,Re,Pe,ve,ze,De,it,D;function he(){Oe=new tE(N),Oe.init(),De=new Bb(N,Oe),Xe=new qw(N,Oe,e,De),Ce=new kb(N),Xe.reverseDepthBuffer&&Ce.buffers.depth.setReversed(!0),st=new rE(N),Ne=new Mb,C=new zb(N,Oe,Ce,Ne,Xe,De,st),w=new Kw(x),k=new eE(x),$=new uS(N),it=new Xw(N,$),ee=new nE(N,$,st,it),X=new aE(N,ee,$,st),Pe=new sE(N,Xe,C),ie=new Yw(Ne),Se=new Sb(x,w,k,Oe,Xe,it,ie),le=new qb(x,Ne),ge=new Eb,$e=new Pb(Oe),Re=new Ww(x,w,k,Ce,X,d,l),xe=new Ub(x,X,Xe),D=new Yb(N,st,Xe,Ce),ve=new $w(N,Oe,st),ze=new iE(N,Oe,st),st.programs=Se.programs,x.capabilities=Xe,x.extensions=Oe,x.properties=Ne,x.renderLists=ge,x.shadowMap=xe,x.state=Ce,x.info=st}he();const V=new Xb(x,N);this.xr=V,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=Oe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Oe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(E){E!==void 0&&(Q=E,this.setSize(J,G,!1))},this.getSize=function(E){return E.set(J,G)},this.setSize=function(E,U,O=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=E,G=U,n.width=Math.floor(E*Q),n.height=Math.floor(U*Q),O===!0&&(n.style.width=E+"px",n.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(J*Q,G*Q).floor()},this.setDrawingBufferSize=function(E,U,O){J=E,G=U,Q=O,n.width=Math.floor(E*O),n.height=Math.floor(U*O),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(Z)},this.setViewport=function(E,U,O,z){E.isVector4?Z.set(E.x,E.y,E.z,E.w):Z.set(E,U,O,z),Ce.viewport(y.copy(Z).multiplyScalar(Q).round())},this.getScissor=function(E){return E.copy(se)},this.setScissor=function(E,U,O,z){E.isVector4?se.set(E.x,E.y,E.z,E.w):se.set(E,U,O,z),Ce.scissor(T.copy(se).multiplyScalar(Q).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(E){Ce.setScissorTest(Ee=E)},this.setOpaqueSort=function(E){L=E},this.setTransparentSort=function(E){Y=E},this.getClearColor=function(E){return E.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(E=!0,U=!0,O=!0){let z=0;if(E){let F=!1;if(b!==null){const re=b.texture.format;F=re===bh||re===Eh||re===wh}if(F){const re=b.texture.type,de=re===Ai||re===kr||re===ja||re===ks||re===Sh||re===Mh,_e=Re.getClearColor(),ye=Re.getClearAlpha(),be=_e.r,Ae=_e.g,Me=_e.b;de?(m[0]=be,m[1]=Ae,m[2]=Me,m[3]=ye,N.clearBufferuiv(N.COLOR,0,m)):(_[0]=be,_[1]=Ae,_[2]=Me,_[3]=ye,N.clearBufferiv(N.COLOR,0,_))}else z|=N.COLOR_BUFFER_BIT}U&&(z|=N.DEPTH_BUFFER_BIT,N.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),O&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",K,!1),n.removeEventListener("webglcontextrestored",ue,!1),n.removeEventListener("webglcontextcreationerror",pe,!1),ge.dispose(),$e.dispose(),Ne.dispose(),w.dispose(),k.dispose(),X.dispose(),it.dispose(),D.dispose(),Se.dispose(),V.dispose(),V.removeEventListener("sessionstart",kh),V.removeEventListener("sessionend",Oh),dr.stop()};function K(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=st.autoReset,U=xe.enabled,O=xe.autoUpdate,z=xe.needsUpdate,F=xe.type;he(),st.autoReset=E,xe.enabled=U,xe.autoUpdate=O,xe.needsUpdate=z,xe.type=F}function pe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ge(E){const U=E.target;U.removeEventListener("dispose",Ge),yt(U)}function yt(E){Qt(E),Ne.remove(E)}function Qt(E){const U=Ne.get(E).programs;U!==void 0&&(U.forEach(function(O){Se.releaseProgram(O)}),E.isShaderMaterial&&Se.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,O,z,F,re){U===null&&(U=He);const de=F.isMesh&&F.matrixWorld.determinant()<0,_e=vv(E,U,O,z,F);Ce.setMaterial(z,de);let ye=O.index,be=1;if(z.wireframe===!0){if(ye=ee.getWireframeAttribute(O),ye===void 0)return;be=2}const Ae=O.drawRange,Me=O.attributes.position;let Je=Ae.start*be,at=(Ae.start+Ae.count)*be;re!==null&&(Je=Math.max(Je,re.start*be),at=Math.min(at,(re.start+re.count)*be)),ye!==null?(Je=Math.max(Je,0),at=Math.min(at,ye.count)):Me!=null&&(Je=Math.max(Je,0),at=Math.min(at,Me.count));const gt=at-Je;if(gt<0||gt===1/0)return;it.setup(F,z,_e,O,ye);let hn,Ke=ve;if(ye!==null&&(hn=$.get(ye),Ke=ze,Ke.setIndex(hn)),F.isMesh)z.wireframe===!0?(Ce.setLineWidth(z.wireframeLinewidth*Ve()),Ke.setMode(N.LINES)):Ke.setMode(N.TRIANGLES);else if(F.isLine){let we=z.linewidth;we===void 0&&(we=1),Ce.setLineWidth(we*Ve()),F.isLineSegments?Ke.setMode(N.LINES):F.isLineLoop?Ke.setMode(N.LINE_LOOP):Ke.setMode(N.LINE_STRIP)}else F.isPoints?Ke.setMode(N.POINTS):F.isSprite&&Ke.setMode(N.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Ke.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))Ke.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const we=F._multiDrawStarts,Lt=F._multiDrawCounts,Ze=F._multiDrawCount,Fn=ye?$.get(ye).bytesPerElement:1,Hr=Ne.get(z).currentProgram.getUniforms();for(let pn=0;pn<Ze;pn++)Hr.setValue(N,"_gl_DrawID",pn),Ke.render(we[pn]/Fn,Lt[pn])}else if(F.isInstancedMesh)Ke.renderInstances(Je,gt,F.count);else if(O.isInstancedBufferGeometry){const we=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Lt=Math.min(O.instanceCount,we);Ke.renderInstances(Je,gt,Lt)}else Ke.render(Je,gt)};function Ye(E,U,O){E.transparent===!0&&E.side===gi&&E.forceSinglePass===!1?(E.side=dn,E.needsUpdate=!0,eo(E,U,O),E.side=sr,E.needsUpdate=!0,eo(E,U,O),E.side=gi):eo(E,U,O)}this.compile=function(E,U,O=null){O===null&&(O=E),g=$e.get(O),g.init(U),v.push(g),O.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(g.pushLight(F),F.castShadow&&g.pushShadow(F))}),E!==O&&E.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(g.pushLight(F),F.castShadow&&g.pushShadow(F))}),g.setupLights();const z=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const re=F.material;if(re)if(Array.isArray(re))for(let de=0;de<re.length;de++){const _e=re[de];Ye(_e,O,F),z.add(_e)}else Ye(re,O,F),z.add(re)}),v.pop(),g=null,z},this.compileAsync=function(E,U,O=null){const z=this.compile(E,U,O);return new Promise(F=>{function re(){if(z.forEach(function(de){Ne.get(de).currentProgram.isReady()&&z.delete(de)}),z.size===0){F(E);return}setTimeout(re,10)}Oe.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Jt=null;function oi(E){Jt&&Jt(E)}function kh(){dr.stop()}function Oh(){dr.start()}const dr=new tv;dr.setAnimationLoop(oi),typeof self<"u"&&dr.setContext(self),this.setAnimationLoop=function(E){Jt=E,V.setAnimationLoop(E),E===null?dr.stop():dr.start()},V.addEventListener("sessionstart",kh),V.addEventListener("sessionend",Oh),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(U),U=V.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,U,b),g=$e.get(E,v.length),g.init(U),v.push(g),ce.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ke.setFromProjectionMatrix(ce),ne=this.localClippingEnabled,W=ie.init(this.clippingPlanes,ne),S=ge.get(E,h.length),S.init(),h.push(S),V.enabled===!0&&V.isPresenting===!0){const re=x.xr.getDepthSensingMesh();re!==null&&Sc(re,U,-1/0,x.sortObjects)}Sc(E,U,0,x.sortObjects),S.finish(),x.sortObjects===!0&&S.sort(L,Y),tt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,tt&&Re.addToRenderList(S,E),this.info.render.frame++,W===!0&&ie.beginShadows();const O=g.state.shadowsArray;xe.render(O,E,U),W===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=S.opaque,F=S.transmissive;if(g.setupLights(),U.isArrayCamera){const re=U.cameras;if(F.length>0)for(let de=0,_e=re.length;de<_e;de++){const ye=re[de];Bh(z,F,E,ye)}tt&&Re.render(E);for(let de=0,_e=re.length;de<_e;de++){const ye=re[de];zh(S,E,ye,ye.viewport)}}else F.length>0&&Bh(z,F,E,U),tt&&Re.render(E),zh(S,E,U);b!==null&&(C.updateMultisampleRenderTarget(b),C.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(x,E,U),it.resetDefaultState(),P=-1,B=null,v.pop(),v.length>0?(g=v[v.length-1],W===!0&&ie.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,h.pop(),h.length>0?S=h[h.length-1]:S=null};function Sc(E,U,O,z){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)O=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ke.intersectsSprite(E)){z&&Te.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ce);const de=X.update(E),_e=E.material;_e.visible&&S.push(E,de,_e,O,Te.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ke.intersectsObject(E))){const de=X.update(E),_e=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Te.copy(E.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Te.copy(de.boundingSphere.center)),Te.applyMatrix4(E.matrixWorld).applyMatrix4(ce)),Array.isArray(_e)){const ye=de.groups;for(let be=0,Ae=ye.length;be<Ae;be++){const Me=ye[be],Je=_e[Me.materialIndex];Je&&Je.visible&&S.push(E,de,Je,O,Te.z,Me)}}else _e.visible&&S.push(E,de,_e,O,Te.z,null)}}const re=E.children;for(let de=0,_e=re.length;de<_e;de++)Sc(re[de],U,O,z)}function zh(E,U,O,z){const F=E.opaque,re=E.transmissive,de=E.transparent;g.setupLightsView(O),W===!0&&ie.setGlobalState(x.clippingPlanes,O),z&&Ce.viewport(y.copy(z)),F.length>0&&Ja(F,U,O),re.length>0&&Ja(re,U,O),de.length>0&&Ja(de,U,O),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Bh(E,U,O,z){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[z.id]===void 0&&(g.state.transmissionRenderTarget[z.id]=new Or(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?qa:Ai,minFilter:Cr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const re=g.state.transmissionRenderTarget[z.id],de=z.viewport||y;re.setSize(de.z,de.w);const _e=x.getRenderTarget();x.setRenderTarget(re),x.getClearColor(j),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),tt&&Re.render(O);const ye=x.toneMapping;x.toneMapping=nr;const be=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),g.setupLightsView(z),W===!0&&ie.setGlobalState(x.clippingPlanes,z),Ja(E,O,z),C.updateMultisampleRenderTarget(re),C.updateRenderTargetMipmap(re),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let Me=0,Je=U.length;Me<Je;Me++){const at=U[Me],gt=at.object,hn=at.geometry,Ke=at.material,we=at.group;if(Ke.side===gi&&gt.layers.test(z.layers)){const Lt=Ke.side;Ke.side=dn,Ke.needsUpdate=!0,jh(gt,O,z,hn,Ke,we),Ke.side=Lt,Ke.needsUpdate=!0,Ae=!0}}Ae===!0&&(C.updateMultisampleRenderTarget(re),C.updateRenderTargetMipmap(re))}x.setRenderTarget(_e),x.setClearColor(j,q),be!==void 0&&(z.viewport=be),x.toneMapping=ye}function Ja(E,U,O){const z=U.isScene===!0?U.overrideMaterial:null;for(let F=0,re=E.length;F<re;F++){const de=E[F],_e=de.object,ye=de.geometry,be=z===null?de.material:z,Ae=de.group;_e.layers.test(O.layers)&&jh(_e,U,O,ye,be,Ae)}}function jh(E,U,O,z,F,re){E.onBeforeRender(x,U,O,z,F,re),E.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(x,U,O,z,E,re),F.transparent===!0&&F.side===gi&&F.forceSinglePass===!1?(F.side=dn,F.needsUpdate=!0,x.renderBufferDirect(O,U,z,F,E,re),F.side=sr,F.needsUpdate=!0,x.renderBufferDirect(O,U,z,F,E,re),F.side=gi):x.renderBufferDirect(O,U,z,F,E,re),E.onAfterRender(x,U,O,z,F,re)}function eo(E,U,O){U.isScene!==!0&&(U=He);const z=Ne.get(E),F=g.state.lights,re=g.state.shadowsArray,de=F.state.version,_e=Se.getParameters(E,F.state,re,U,O),ye=Se.getProgramCacheKey(_e);let be=z.programs;z.environment=E.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(E.isMeshStandardMaterial?k:w).get(E.envMap||z.environment),z.envMapRotation=z.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,be===void 0&&(E.addEventListener("dispose",Ge),be=new Map,z.programs=be);let Ae=be.get(ye);if(Ae!==void 0){if(z.currentProgram===Ae&&z.lightsStateVersion===de)return Vh(E,_e),Ae}else _e.uniforms=Se.getUniforms(E),E.onBeforeCompile(_e,x),Ae=Se.acquireProgram(_e,ye),be.set(ye,Ae),z.uniforms=_e.uniforms;const Me=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Me.clippingPlanes=ie.uniform),Vh(E,_e),z.needsLights=yv(E),z.lightsStateVersion=de,z.needsLights&&(Me.ambientLightColor.value=F.state.ambient,Me.lightProbe.value=F.state.probe,Me.directionalLights.value=F.state.directional,Me.directionalLightShadows.value=F.state.directionalShadow,Me.spotLights.value=F.state.spot,Me.spotLightShadows.value=F.state.spotShadow,Me.rectAreaLights.value=F.state.rectArea,Me.ltc_1.value=F.state.rectAreaLTC1,Me.ltc_2.value=F.state.rectAreaLTC2,Me.pointLights.value=F.state.point,Me.pointLightShadows.value=F.state.pointShadow,Me.hemisphereLights.value=F.state.hemi,Me.directionalShadowMap.value=F.state.directionalShadowMap,Me.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Me.spotShadowMap.value=F.state.spotShadowMap,Me.spotLightMatrix.value=F.state.spotLightMatrix,Me.spotLightMap.value=F.state.spotLightMap,Me.pointShadowMap.value=F.state.pointShadowMap,Me.pointShadowMatrix.value=F.state.pointShadowMatrix),z.currentProgram=Ae,z.uniformsList=null,Ae}function Hh(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=pl.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Vh(E,U){const O=Ne.get(E);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.batchingColor=U.batchingColor,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.instancingMorph=U.instancingMorph,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function vv(E,U,O,z,F){U.isScene!==!0&&(U=He),C.resetTextureUnits();const re=U.fog,de=z.isMeshStandardMaterial?U.environment:null,_e=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:ur,ye=(z.isMeshStandardMaterial?k:w).get(z.envMap||de),be=z.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ae=!!O.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Me=!!O.morphAttributes.position,Je=!!O.morphAttributes.normal,at=!!O.morphAttributes.color;let gt=nr;z.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(gt=x.toneMapping);const hn=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ke=hn!==void 0?hn.length:0,we=Ne.get(z),Lt=g.state.lights;if(W===!0&&(ne===!0||E!==B)){const En=E===B&&z.id===P;ie.setState(z,E,En)}let Ze=!1;z.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Lt.state.version||we.outputColorSpace!==_e||F.isBatchedMesh&&we.batching===!1||!F.isBatchedMesh&&we.batching===!0||F.isBatchedMesh&&we.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&we.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&we.instancing===!1||!F.isInstancedMesh&&we.instancing===!0||F.isSkinnedMesh&&we.skinning===!1||!F.isSkinnedMesh&&we.skinning===!0||F.isInstancedMesh&&we.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&we.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&we.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&we.instancingMorph===!1&&F.morphTexture!==null||we.envMap!==ye||z.fog===!0&&we.fog!==re||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ie.numPlanes||we.numIntersection!==ie.numIntersection)||we.vertexAlphas!==be||we.vertexTangents!==Ae||we.morphTargets!==Me||we.morphNormals!==Je||we.morphColors!==at||we.toneMapping!==gt||we.morphTargetsCount!==Ke)&&(Ze=!0):(Ze=!0,we.__version=z.version);let Fn=we.currentProgram;Ze===!0&&(Fn=eo(z,U,F));let Hr=!1,pn=!1,Mc=!1;const vt=Fn.getUniforms(),Pi=we.uniforms;if(Ce.useProgram(Fn.program)&&(Hr=!0,pn=!0,Mc=!0),z.id!==P&&(P=z.id,pn=!0),Hr||B!==E){Xe.reverseDepthBuffer?(fe.copy(E.projectionMatrix),O1(fe),z1(fe),vt.setValue(N,"projectionMatrix",fe)):vt.setValue(N,"projectionMatrix",E.projectionMatrix),vt.setValue(N,"viewMatrix",E.matrixWorldInverse);const En=vt.map.cameraPosition;En!==void 0&&En.setValue(N,Le.setFromMatrixPosition(E.matrixWorld)),Xe.logarithmicDepthBuffer&&vt.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&vt.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),B!==E&&(B=E,pn=!0,Mc=!0)}if(F.isSkinnedMesh){vt.setOptional(N,F,"bindMatrix"),vt.setOptional(N,F,"bindMatrixInverse");const En=F.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),vt.setValue(N,"boneTexture",En.boneTexture,C))}F.isBatchedMesh&&(vt.setOptional(N,F,"batchingTexture"),vt.setValue(N,"batchingTexture",F._matricesTexture,C),vt.setOptional(N,F,"batchingIdTexture"),vt.setValue(N,"batchingIdTexture",F._indirectTexture,C),vt.setOptional(N,F,"batchingColorTexture"),F._colorsTexture!==null&&vt.setValue(N,"batchingColorTexture",F._colorsTexture,C));const wc=O.morphAttributes;if((wc.position!==void 0||wc.normal!==void 0||wc.color!==void 0)&&Pe.update(F,O,Fn),(pn||we.receiveShadow!==F.receiveShadow)&&(we.receiveShadow=F.receiveShadow,vt.setValue(N,"receiveShadow",F.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Pi.envMap.value=ye,Pi.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(Pi.envMapIntensity.value=U.environmentIntensity),pn&&(vt.setValue(N,"toneMappingExposure",x.toneMappingExposure),we.needsLights&&_v(Pi,Mc),re&&z.fog===!0&&le.refreshFogUniforms(Pi,re),le.refreshMaterialUniforms(Pi,z,Q,G,g.state.transmissionRenderTarget[E.id]),pl.upload(N,Hh(we),Pi,C)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(pl.upload(N,Hh(we),Pi,C),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&vt.setValue(N,"center",F.center),vt.setValue(N,"modelViewMatrix",F.modelViewMatrix),vt.setValue(N,"normalMatrix",F.normalMatrix),vt.setValue(N,"modelMatrix",F.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const En=z.uniformsGroups;for(let Ec=0,Sv=En.length;Ec<Sv;Ec++){const Gh=En[Ec];D.update(Gh,Fn),D.bind(Gh,Fn)}}return Fn}function _v(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function yv(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,U,O){Ne.get(E.texture).__webglTexture=U,Ne.get(E.depthTexture).__webglTexture=O;const z=Ne.get(E);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=O===void 0,z.__autoAllocateDepthBuffer||Oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const O=Ne.get(E);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,O=0){b=E,R=U,A=O;let z=!0,F=null,re=!1,de=!1;if(E){const ye=Ne.get(E);if(ye.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(N.FRAMEBUFFER,null),z=!1;else if(ye.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(ye.__hasExternalTextures)C.rebindTextures(E,Ne.get(E.texture).__webglTexture,Ne.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Me=E.depthTexture;if(ye.__boundDepthTexture!==Me){if(Me!==null&&Ne.has(Me)&&(E.width!==Me.image.width||E.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}const be=E.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(de=!0);const Ae=Ne.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ae[U])?F=Ae[U][O]:F=Ae[U],re=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?F=Ne.get(E).__webglMultisampledFramebuffer:Array.isArray(Ae)?F=Ae[O]:F=Ae,y.copy(E.viewport),T.copy(E.scissor),H=E.scissorTest}else y.copy(Z).multiplyScalar(Q).floor(),T.copy(se).multiplyScalar(Q).floor(),H=Ee;if(Ce.bindFramebuffer(N.FRAMEBUFFER,F)&&z&&Ce.drawBuffers(E,F),Ce.viewport(y),Ce.scissor(T),Ce.setScissorTest(H),re){const ye=Ne.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye.__webglTexture,O)}else if(de){const ye=Ne.get(E.texture),be=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,ye.__webglTexture,O||0,be)}P=-1},this.readRenderTargetPixels=function(E,U,O,z,F,re,de){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&de!==void 0&&(_e=_e[de]),_e){Ce.bindFramebuffer(N.FRAMEBUFFER,_e);try{const ye=E.texture,be=ye.format,Ae=ye.type;if(!Xe.textureFormatReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-z&&O>=0&&O<=E.height-F&&N.readPixels(U,O,z,F,De.convert(be),De.convert(Ae),re)}finally{const ye=b!==null?Ne.get(b).__webglFramebuffer:null;Ce.bindFramebuffer(N.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(E,U,O,z,F,re,de){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&de!==void 0&&(_e=_e[de]),_e){const ye=E.texture,be=ye.format,Ae=ye.type;if(!Xe.textureFormatReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-z&&O>=0&&O<=E.height-F){Ce.bindFramebuffer(N.FRAMEBUFFER,_e);const Me=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Me),N.bufferData(N.PIXEL_PACK_BUFFER,re.byteLength,N.STREAM_READ),N.readPixels(U,O,z,F,De.convert(be),De.convert(Ae),0);const Je=b!==null?Ne.get(b).__webglFramebuffer:null;Ce.bindFramebuffer(N.FRAMEBUFFER,Je);const at=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await k1(N,at,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Me),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,re),N.deleteBuffer(Me),N.deleteSync(at),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,O=0){E.isTexture!==!0&&(hl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const z=Math.pow(2,-O),F=Math.floor(E.image.width*z),re=Math.floor(E.image.height*z),de=U!==null?U.x:0,_e=U!==null?U.y:0;C.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,O,0,0,de,_e,F,re),Ce.unbindTexture()},this.copyTextureToTexture=function(E,U,O=null,z=null,F=0){E.isTexture!==!0&&(hl("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1],U=arguments[2],F=arguments[3]||0,O=null);let re,de,_e,ye,be,Ae;O!==null?(re=O.max.x-O.min.x,de=O.max.y-O.min.y,_e=O.min.x,ye=O.min.y):(re=E.image.width,de=E.image.height,_e=0,ye=0),z!==null?(be=z.x,Ae=z.y):(be=0,Ae=0);const Me=De.convert(U.format),Je=De.convert(U.type);C.setTexture2D(U,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);const at=N.getParameter(N.UNPACK_ROW_LENGTH),gt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),hn=N.getParameter(N.UNPACK_SKIP_PIXELS),Ke=N.getParameter(N.UNPACK_SKIP_ROWS),we=N.getParameter(N.UNPACK_SKIP_IMAGES),Lt=E.isCompressedTexture?E.mipmaps[F]:E.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Lt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Lt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,_e),N.pixelStorei(N.UNPACK_SKIP_ROWS,ye),E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,F,be,Ae,re,de,Me,Je,Lt.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,F,be,Ae,Lt.width,Lt.height,Me,Lt.data):N.texSubImage2D(N.TEXTURE_2D,F,be,Ae,re,de,Me,Je,Lt),N.pixelStorei(N.UNPACK_ROW_LENGTH,at),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,gt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,hn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ke),N.pixelStorei(N.UNPACK_SKIP_IMAGES,we),F===0&&U.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(E,U,O=null,z=null,F=0){E.isTexture!==!0&&(hl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,z=arguments[1]||null,E=arguments[2],U=arguments[3],F=arguments[4]||0);let re,de,_e,ye,be,Ae,Me,Je,at;const gt=E.isCompressedTexture?E.mipmaps[F]:E.image;O!==null?(re=O.max.x-O.min.x,de=O.max.y-O.min.y,_e=O.max.z-O.min.z,ye=O.min.x,be=O.min.y,Ae=O.min.z):(re=gt.width,de=gt.height,_e=gt.depth,ye=0,be=0,Ae=0),z!==null?(Me=z.x,Je=z.y,at=z.z):(Me=0,Je=0,at=0);const hn=De.convert(U.format),Ke=De.convert(U.type);let we;if(U.isData3DTexture)C.setTexture3D(U,0),we=N.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)C.setTexture2DArray(U,0),we=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);const Lt=N.getParameter(N.UNPACK_ROW_LENGTH),Ze=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Fn=N.getParameter(N.UNPACK_SKIP_PIXELS),Hr=N.getParameter(N.UNPACK_SKIP_ROWS),pn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,gt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,gt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ye),N.pixelStorei(N.UNPACK_SKIP_ROWS,be),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ae),E.isDataTexture||E.isData3DTexture?N.texSubImage3D(we,F,Me,Je,at,re,de,_e,hn,Ke,gt.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(we,F,Me,Je,at,re,de,_e,hn,gt.data):N.texSubImage3D(we,F,Me,Je,at,re,de,_e,hn,Ke,gt),N.pixelStorei(N.UNPACK_ROW_LENGTH,Lt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ze),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Fn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Hr),N.pixelStorei(N.UNPACK_SKIP_IMAGES,pn),F===0&&U.generateMipmaps&&N.generateMipmap(we),Ce.unbindTexture()},this.initRenderTarget=function(E){Ne.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),Ce.unbindTexture()},this.resetState=function(){R=0,A=0,b=null,Ce.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Th?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===hc?"display-p3":"srgb"}}class gc{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Be(e),this.near=n,this.far=i}clone(){return new gc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class qm extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class ha extends jr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wl=new I,Xl=new I,Ym=new ut,aa=new Ah,Bo=new Qa,Au=new I,Km=new I;class ov extends Ht{constructor(e=new Yt,n=new ha){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Wl.fromBufferAttribute(n,r-1),Xl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Wl.distanceTo(Xl);e.setAttribute("lineDistance",new Vt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bo.copy(i.boundingSphere),Bo.applyMatrix4(r),Bo.radius+=s,e.ray.intersectsSphere(Bo)===!1)return;Ym.copy(r).invert(),aa.copy(e.ray).applyMatrix4(Ym);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=i.index,d=i.attributes.position;if(f!==null){const m=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let S=m,g=_-1;S<g;S+=c){const h=f.getX(S),v=f.getX(S+1),x=jo(this,e,aa,l,h,v);x&&n.push(x)}if(this.isLineLoop){const S=f.getX(_-1),g=f.getX(m),h=jo(this,e,aa,l,S,g);h&&n.push(h)}}else{const m=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let S=m,g=_-1;S<g;S+=c){const h=jo(this,e,aa,l,S,S+1);h&&n.push(h)}if(this.isLineLoop){const S=jo(this,e,aa,l,_-1,m);S&&n.push(S)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function jo(t,e,n,i,r,s){const a=t.geometry.attributes.position;if(Wl.fromBufferAttribute(a,r),Xl.fromBufferAttribute(a,s),n.distanceSqToSegment(Wl,Xl,Au,Km)>i)return;Au.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Au);if(!(l<e.near||l>e.far))return{distance:l,point:Km.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const Zm=new I,Qm=new I;class Cu extends ov{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Zm.fromBufferAttribute(n,r),Qm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Zm.distanceTo(Qm);e.setAttribute("lineDistance",new Vt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gf extends jr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Jm=new ut,xf=new Ah,Ho=new Qa,Vo=new I;class eg extends Ht{constructor(e=new Yt,n=new gf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ho.copy(i.boundingSphere),Ho.applyMatrix4(r),Ho.radius+=s,e.ray.intersectsSphere(Ho)===!1)return;Jm.copy(r).invert(),xf.copy(e.ray).applyMatrix4(Jm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,p=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=d,S=m;_<S;_++){const g=c.getX(_);Vo.fromBufferAttribute(p,g),tg(Vo,g,l,r,e,n,this)}}else{const d=Math.max(0,a.start),m=Math.min(p.count,a.start+a.count);for(let _=d,S=m;_<S;_++)Vo.fromBufferAttribute(p,_),tg(Vo,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function tg(t,e,n,i,r,s,a){const o=xf.distanceSqToPoint(t);if(o<n){const l=new I;xf.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Zb extends qt{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xc extends Yt{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),c(i),f(),this.setAttribute("position",new Vt(s,3)),this.setAttribute("normal",new Vt(s.slice(),3)),this.setAttribute("uv",new Vt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const x=new I,M=new I,R=new I;for(let A=0;A<n.length;A+=3)m(n[A+0],x),m(n[A+1],M),m(n[A+2],R),l(x,M,R,v)}function l(v,x,M,R){const A=R+1,b=[];for(let P=0;P<=A;P++){b[P]=[];const B=v.clone().lerp(M,P/A),y=x.clone().lerp(M,P/A),T=A-P;for(let H=0;H<=T;H++)H===0&&P===A?b[P][H]=B:b[P][H]=B.clone().lerp(y,H/T)}for(let P=0;P<A;P++)for(let B=0;B<2*(A-P)-1;B++){const y=Math.floor(B/2);B%2===0?(d(b[P][y+1]),d(b[P+1][y]),d(b[P][y])):(d(b[P][y+1]),d(b[P+1][y+1]),d(b[P+1][y]))}}function c(v){const x=new I;for(let M=0;M<s.length;M+=3)x.x=s[M+0],x.y=s[M+1],x.z=s[M+2],x.normalize().multiplyScalar(v),s[M+0]=x.x,s[M+1]=x.y,s[M+2]=x.z}function f(){const v=new I;for(let x=0;x<s.length;x+=3){v.x=s[x+0],v.y=s[x+1],v.z=s[x+2];const M=g(v)/2/Math.PI+.5,R=h(v)/Math.PI+.5;a.push(M,1-R)}_(),p()}function p(){for(let v=0;v<a.length;v+=6){const x=a[v+0],M=a[v+2],R=a[v+4],A=Math.max(x,M,R),b=Math.min(x,M,R);A>.9&&b<.1&&(x<.2&&(a[v+0]+=1),M<.2&&(a[v+2]+=1),R<.2&&(a[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function m(v,x){const M=v*3;x.x=e[M+0],x.y=e[M+1],x.z=e[M+2]}function _(){const v=new I,x=new I,M=new I,R=new I,A=new je,b=new je,P=new je;for(let B=0,y=0;B<s.length;B+=9,y+=6){v.set(s[B+0],s[B+1],s[B+2]),x.set(s[B+3],s[B+4],s[B+5]),M.set(s[B+6],s[B+7],s[B+8]),A.set(a[y+0],a[y+1]),b.set(a[y+2],a[y+3]),P.set(a[y+4],a[y+5]),R.copy(v).add(x).add(M).divideScalar(3);const T=g(R);S(A,y+0,v,T),S(b,y+2,x,T),S(P,y+4,M,T)}}function S(v,x,M,R){R<0&&v.x===1&&(a[x]=v.x-1),M.x===0&&M.z===0&&(a[x]=R/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function h(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xc(e.vertices,e.indices,e.radius,e.details)}}const Go=new I,Wo=new I,Ru=new I,Xo=new Cn;class Pu extends Yt{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(fl*n),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],f=["a","b","c"],p=new Array(3),d={},m=[];for(let _=0;_<l;_+=3){a?(c[0]=a.getX(_),c[1]=a.getX(_+1),c[2]=a.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:S,b:g,c:h}=Xo;if(S.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),h.fromBufferAttribute(o,c[2]),Xo.getNormal(Ru),p[0]=`${Math.round(S.x*r)},${Math.round(S.y*r)},${Math.round(S.z*r)}`,p[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,p[2]=`${Math.round(h.x*r)},${Math.round(h.y*r)},${Math.round(h.z*r)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let v=0;v<3;v++){const x=(v+1)%3,M=p[v],R=p[x],A=Xo[f[v]],b=Xo[f[x]],P=`${M}_${R}`,B=`${R}_${M}`;B in d&&d[B]?(Ru.dot(d[B].normal)<=s&&(m.push(A.x,A.y,A.z),m.push(b.x,b.y,b.z)),d[B]=null):P in d||(d[P]={index0:c[v],index1:c[x],normal:Ru.clone()})}}for(const _ in d)if(d[_]){const{index0:S,index1:g}=d[_];Go.fromBufferAttribute(o,S),Wo.fromBufferAttribute(o,g),m.push(Go.x,Go.y,Go.z),m.push(Wo.x,Wo.y,Wo.z)}this.setAttribute("position",new Vt(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Nh extends xc{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Nh(e.radius,e.detail)}}class $l extends xc{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new $l(e.radius,e.detail)}}class Lh extends Yt{constructor(e=1,n=.4,i=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:n,tubularSegments:i,radialSegments:r,p:s,q:a},i=Math.floor(i),r=Math.floor(r);const o=[],l=[],c=[],f=[],p=new I,d=new I,m=new I,_=new I,S=new I,g=new I,h=new I;for(let x=0;x<=i;++x){const M=x/i*s*Math.PI*2;v(M,s,a,e,m),v(M+.01,s,a,e,_),g.subVectors(_,m),h.addVectors(_,m),S.crossVectors(g,h),h.crossVectors(S,g),S.normalize(),h.normalize();for(let R=0;R<=r;++R){const A=R/r*Math.PI*2,b=-n*Math.cos(A),P=n*Math.sin(A);p.x=m.x+(b*h.x+P*S.x),p.y=m.y+(b*h.y+P*S.y),p.z=m.z+(b*h.z+P*S.z),l.push(p.x,p.y,p.z),d.subVectors(p,m).normalize(),c.push(d.x,d.y,d.z),f.push(x/i),f.push(R/r)}}for(let x=1;x<=i;x++)for(let M=1;M<=r;M++){const R=(r+1)*(x-1)+(M-1),A=(r+1)*x+(M-1),b=(r+1)*x+M,P=(r+1)*(x-1)+M;o.push(R,A,P),o.push(A,b,P)}this.setIndex(o),this.setAttribute("position",new Vt(l,3)),this.setAttribute("normal",new Vt(c,3)),this.setAttribute("uv",new Vt(f,2));function v(x,M,R,A,b){const P=Math.cos(x),B=Math.sin(x),y=R/M*x,T=Math.cos(y);b.x=A*(2+T)*.5*P,b.y=A*(2+T)*B*.5,b.z=A*Math.sin(y)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lh(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class pa extends jr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vx,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class lv extends Ht{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Nu=new ut,ng=new I,ig=new I;class Qb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rh,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;ng.setFromMatrixPosition(e.matrixWorld),n.position.copy(ng),ig.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ig),n.updateMatrixWorld(),Nu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Nu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const rg=new ut,oa=new I,Lu=new I;class Jb extends Qb{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new je(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),oa.setFromMatrixPosition(e.matrixWorld),i.position.copy(oa),Lu.copy(i.position),Lu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Lu),i.updateMatrixWorld(),r.makeTranslation(-oa.x,-oa.y,-oa.z),rg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rg)}}class cv extends lv{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Jb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class e2 extends lv{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_h}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_h);const Zn=12951634,Ct=(t,e)=>t+Math.random()*(e-t);function sg(){const t=document.createElement("canvas");t.width=t.height=512;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,512,512);n.addColorStop(0,"#f4f1ea"),n.addColorStop(1,"#cfc9bd"),e.fillStyle=n,e.fillRect(0,0,512,512);for(let i=0;i<26;i++){let r=Math.random()*512,s=0;const a=Ct(.15,.65);e.beginPath(),e.moveTo(r,s);for(let o=0;o<40;o++)r+=Ct(-17,17),s+=13,e.lineTo(r,s);e.strokeStyle=i%5?`rgba(90,86,80,${a*.6})`:`rgba(197,160,82,${a})`,e.lineWidth=Ct(.4,2.2),e.stroke()}return new Zb(t)}const Qn=t=>new pa({color:t,roughness:.4,metalness:.55,flatShading:!0});function t2(t,e,n,i){const r=[];if(t==="home"){const s=new Rt(new ii(3.2,4.4,.3),new pa({map:sg(),roughness:.25,metalness:.1}));s.add(new Cu(new Pu(s.geometry),new ha({color:Zn}))),e.add(s);const a=new $l(.5),o=Qn(3815994),l=Qn(Zn),c=[];for(let f=0;f<(i?12:26);f++){const p=new Rt(a,f%4?o:l);p.position.set(Ct(-9,9),Ct(-7,7),Ct(-7,-1)),p.scale.set(Ct(.5,1.4),Ct(.5,2),Ct(.5,1.4)),c.push(p),n.add(p)}r.push((f,p)=>{s.rotation.y=Math.sin(f*.4)*.6+p*.5,c.forEach(d=>{d.rotation.x+=.004,d.rotation.y+=.005,d.position.y+=.004,d.position.y>7&&(d.position.y=-7)})})}if(t==="about"){const s=[Qn(Zn),Qn(15328474),Qn(2894894)],a=[],o=new ii(3.4,.32,2.4);for(let l=0;l<8;l++){const c=new Rt(o,s[l%3]);c.position.y=l*.55-2,e.add(c),a.push(c)}e.rotation.x=.25,r.push(l=>{a.forEach((c,f)=>{c.rotation.y=l*.3+f*.4,c.position.x=Math.sin(l*.6+f)*.25}),e.rotation.y=l*.1})}if(t==="collection"){const s=new Rt(new Nh(3.4,1),new Ch({color:Zn,wireframe:!0,transparent:!0,opacity:.35})),a=new Rt(new Lh(1.2,.36,120,14),Qn(15328474)),o=new Wi,l=new $l(.3),c=Qn(Zn),f=Qn(3815994);for(let p=0;p<12;p++){const d=new Rt(l,p%2?c:f),m=p/12*Math.PI*2;d.position.set(Math.cos(m)*4.6,Ct(-1.5,1.5),Math.sin(m)*4.6),o.add(d)}e.add(s,a,o),r.push(p=>{s.rotation.y=p*.1,s.rotation.x=p*.06,a.rotation.x=p*.25,a.rotation.y=p*.2,o.rotation.y=-p*.3})}if(t==="clients"){const s=i?7:11,a=[],o=new ii(.7,1,.7),l=Qn(Zn),c=Qn(3815998);for(let f=0;f<s;f++)for(let p=0;p<s;p++){const d=new Rt(o,(f*3+p)%7===0?l:c);d.position.set((f-s/2)*.95,0,(p-s/2)*.95),e.add(d),a.push(d)}e.rotation.x=.55,r.push(f=>{a.forEach((p,d)=>{const m=.6+(Math.sin(f*.9+Math.floor(d/s)*.6+d%s*.5)+1)*1.6;p.scale.y=m,p.position.y=m/2}),e.rotation.y=f*.08})}if(t==="contact"){const s=i?40:70,a=new Float32Array(s*s*3);for(let l=0;l<s;l++)for(let c=0;c<s;c++){const f=(l*s+c)*3;a[f]=(l-s/2)*.28,a[f+2]=(c-s/2)*.28}const o=new Yt;o.setAttribute("position",new Dn(a,3)),e.add(new eg(o,new gf({color:Zn,size:.06}))),e.rotation.x=.35,r.push(l=>{for(let c=0;c<s;c++)for(let f=0;f<s;f++)a[(c*s+f)*3+1]=Math.sin(c*.35+l*1.2)*.4+Math.cos(f*.3+l)*.4;o.attributes.position.needsUpdate=!0,e.rotation.y=l*.05})}if(t==="industries"){const s=i?10:14,a=3.4,o=s*a,l=new ii(1,1,1),c=new Pu(l),f=new pa({color:1842207,roughness:.32,metalness:.65,flatShading:!0}),p=new pa({color:14275526,roughness:.3,metalness:.2,flatShading:!0}),d=new ha({color:Zn,transparent:!0,opacity:.6}),m=new ha({color:Zn,transparent:!0,opacity:.28}),_=new Yt().setFromPoints([new I(-11,.01,0),new I(11,.01,0)]),S=[];for(let R=0;R<s;R++){const A=new Wi;for(const b of[-1,1]){const P=i?1:2;for(let B=0;B<P;B++){const y=Ct(2,9.5),T=Ct(.9,1.7),H=Ct(1.4,2.4),j=new Rt(l,Math.random()<.18?p:f);j.scale.set(T,y,H),j.position.set(b*(3.2+B*2.3+Ct(0,.8)),y/2,Ct(-.5,.5)),j.add(new Cu(c,d)),A.add(j)}}A.add(new ov(_,m)),S.push(A),n.add(A)}n.fog=new gc(1052688,8,i?26:34);const g=new cv(16777215,1.1,40);g.position.set(-5,7,4),n.add(g);const h=new Rt(new ii(2.4,3.3,.24),new pa({map:sg(),roughness:.25,metalness:.1}));h.add(new Cu(new Pu(h.geometry),new ha({color:Zn}))),h.position.set(0,1.9,2),e.add(h);const v=i?120:260,x=new Float32Array(v*3);for(let R=0;R<v;R++)x[R*3]=Ct(-12,12),x[R*3+1]=Ct(.2,10),x[R*3+2]=Ct(-34,9);const M=new Yt;M.setAttribute("position",new Dn(x,3)),n.add(new eg(M,new gf({color:14072963,size:.05,transparent:!0,opacity:.8}))),r.push((R,A,b)=>{const P=R*1.1+b*.014;S.forEach((B,y)=>{B.position.z=11-(y*a+P)%o}),h.rotation.y=Math.sin(R*.45)*.7+A*.6,h.rotation.x=Math.sin(R*.3)*.08,h.position.y=1.9+Math.sin(R*.8)*.12;for(let B=0;B<v;B++){const y=B*3+1;x[y]+=.004,x[y]>10&&(x[y]=.2)}M.attributes.position.needsUpdate=!0})}return(s,a,o)=>r.forEach(l=>l(s,a,o))}const ag=t=>t.traverse(e=>{var r;const n=e;(r=n.geometry)==null||r.dispose();const i=n.material;(Array.isArray(i)?i:i?[i]:[]).forEach(s=>{var a;(a=s.map)==null||a.dispose(),s.dispose()})});function n2({variant:t}){const e=ae.useRef(null),n=ae.useRef(null);return ae.useEffect(()=>{const i=e.current,r=matchMedia("(prefers-reduced-motion:reduce)").matches,s=new Kb({canvas:i,alpha:!0,antialias:!0,powerPreference:"high-performance"});s.setPixelRatio(Math.min(devicePixelRatio,1.5));const a=new vn(50,1,.1,100);a.position.z=10;let o=!0,l=new qm,c=new Wi,f=()=>{},p="home",d=0,m=0,_=!0,S=0,g=0;const h=b=>{f(b,d,window.scrollY),a.position.x+=(d*(p==="industries"?1.2:2)-a.position.x)*.05,a.lookAt(0,S,g),s.render(l,a)},v=()=>{const b=i.parentElement,P=b.clientWidth||innerWidth,B=b.clientHeight||innerHeight,y=P>860;s.setSize(P,B,!1),a.aspect=P/B,a.updateProjectionMatrix(),c.scale.setScalar(y?1:.62),c.position.set(y?3:0,p==="home"?y?0:-1.8:p==="clients"?-1:p==="contact"?-1.5:0,0),r&&h(0)};n.current={load(b){ag(l),l=new qm,c=new Wi,p=b,a.position.y=b==="industries"?2.4:0,S=b==="industries"?1.5:0,g=b==="industries"?-12:0,l.fog=new gc(1052688,9,24),l.add(new e2(16777215,.7));const P=new cv(14072963,1.8,60);P.position.set(5,5,8),l.add(P,c),f=t2(b,c,l,innerWidth<700),v()}};const x=b=>{d=b.clientX/innerWidth-.5},M=()=>{_&&(o&&h(performance.now()/1e3),r||(m=requestAnimationFrame(M)))},R=new ResizeObserver(v);R.observe(i.parentElement);const A=new IntersectionObserver(b=>{o=b[0].isIntersecting});return A.observe(i.parentElement),addEventListener("mousemove",x),n.current.load(t),M(),()=>{_=!1,cancelAnimationFrame(m),R.disconnect(),A.disconnect(),removeEventListener("mousemove",x),ag(l),s.dispose(),n.current=null}},[]),ae.useEffect(()=>{var i;(i=n.current)==null||i.load(t)},[t]),u.jsx("canvas",{ref:e,"aria-hidden":!0,className:"absolute inset-0 w-full h-full z-0 pointer-events-none"})}const i2=["tilt","rise","swing","float"],Dh=["flipY","flipX","diag","door"];function vf({fx:t,children:e,className:n="",delay:i=0}){const r=ae.useRef(null),s=l=>{const c=r.current;if(!c||t!=="tilt"||l.pointerType!=="mouse")return;const f=c.getBoundingClientRect(),p=(l.clientX-f.left)/f.width-.5,d=(l.clientY-f.top)/f.height-.5;c.style.transform=`perspective(900px) rotateY(${p*14}deg) rotateX(${-d*14}deg) scale(1.03)`,c.style.setProperty("--gx",`${(p+.5)*100}%`),c.style.setProperty("--gy",`${(d+.5)*100}%`)},a=()=>{r.current&&(r.current.style.transform="")},o={"--d":`${-i*.7}s`};return u.jsx("div",{ref:r,"data-fx":t,className:`pn ${n}`,style:o,onPointerMove:s,onPointerLeave:a,children:e})}function Ih({fx:t,front:e,back:n,className:i="",index:r=0}){const[s,a]=ae.useState(!1),o={"--i":r%14},l=c=>{(c.key==="Enter"||c.key===" ")&&a(f=>!f)};return u.jsx("div",{"data-fx":t,"data-open":s,className:`fl ${i}`,style:o,onClick:()=>a(c=>!c),role:"button",tabIndex:0,onKeyDown:l,children:u.jsxs("div",{className:"fl-in",children:[u.jsx("div",{className:"fl-f",children:e}),u.jsx("div",{className:"fl-b",children:n})]})})}let Du="";function r2(){if(Du)return Du;const t=document.createElement("canvas");t.width=t.height=256;const e=t.getContext("2d");for(let n=0;n<16;n++){let i=Math.random()*256,r=0;e.beginPath(),e.moveTo(i,r);for(let s=0;s<20;s++)i+=(Math.random()-.5)*22,r+=13,e.lineTo(i,r);e.strokeStyle=n%3?`rgba(255,255,255,${.25+Math.random()*.4})`:`rgba(0,0,0,${.2+Math.random()*.3})`,e.lineWidth=.6+Math.random()*2.2,e.stroke()}return Du=`url(${t.toDataURL()})`}function _f({c:t,r:e=0}){return u.jsx("div",{className:"absolute inset-0",style:{backgroundImage:`${r2()}, linear-gradient(135deg,${t[0]},${t[1]})`,backgroundSize:"100% 100%, 100% 100%",backgroundBlendMode:"overlay, normal",transform:`scale(1.5) rotate(${e}deg)`}})}const vc=()=>typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches;function _c(t=.15){const e=ae.useRef(null),[n,i]=ae.useState(!1);return ae.useEffect(()=>{const r=e.current;if(!r)return;if(vc()||!("IntersectionObserver"in window)){i(!0);return}const s=new IntersectionObserver(([a])=>{a.isIntersecting&&(i(!0),s.disconnect())},{threshold:t,rootMargin:"0px 0px -8% 0px"});return s.observe(r),()=>s.disconnect()},[t]),[e,n]}function Ws(t){const e=ae.useRef(t);e.current=t,ae.useEffect(()=>{if(vc())return;let n=0;const i=()=>{n=0,e.current(window.scrollY)},r=()=>{n||(n=requestAnimationFrame(i))};return i(),addEventListener("scroll",r,{passive:!0}),addEventListener("resize",r),()=>{removeEventListener("scroll",r),removeEventListener("resize",r),n&&cancelAnimationFrame(n)}},[])}function s2(t=.12){const e=ae.useRef(null);return Ws(()=>{var s;const n=e.current;if(!n)return;const i=(s=n.parentElement)==null?void 0:s.getBoundingClientRect();if(!i)return;const r=i.top+i.height/2-innerHeight/2;n.style.transform=`translate3d(0, ${(-r*t).toFixed(1)}px, 0)`}),e}function a2(){const t=ae.useRef(null);return Ws(e=>{const n=t.current;if(!n)return;const i=Math.min(1,e/(innerHeight*.7));n.style.opacity=String(1-i*.9),n.style.transform=`translate3d(0, ${(e*.18).toFixed(1)}px, 0)`}),t}function o2(){const t=ae.useRef(null),[e,n]=ae.useState(vc()?1:0);return Ws(()=>{const i=t.current;if(!i)return;const r=i.getBoundingClientRect(),s=(innerHeight*.7-r.top)/r.height;n(Math.max(0,Math.min(1,s)))}),[t,e]}function yf(t="enter"){const e=ae.useRef(null);return ae.useEffect(()=>{var n;vc()&&((n=e.current)==null||n.style.setProperty("--p","1"))},[]),Ws(()=>{const n=e.current;if(!n)return;const i=n.getBoundingClientRect(),r=t==="enter"?(innerHeight*.95-i.top)/(innerHeight*.55):(innerHeight-i.top)/(innerHeight+i.height);n.style.setProperty("--p",Math.max(0,Math.min(1,r)).toFixed(3))}),e}const l2=[{to:1998,label:"Established",plain:"1998"},{to:25,suffix:"+",label:"Years of experience"},{to:5,label:"Stone categories"},{to:0,label:"Reach: across India",plain:"India"}],c2=["Wide variety of imported & Indian stones","Bulk supply for projects","Custom sizing available","Reliable delivery timelines"],u2=[{title:"Residential Projects",items:["Homes","Villas","Apartments","Flooring","Kitchen countertops","Staircases","Wall applications"],grad:"linear-gradient(135deg,#5a4a30,#1b1710)"},{title:"Commercial Projects",items:["Offices","Retail establishments","Hotels","Commercial buildings"],grad:"linear-gradient(135deg,#3a3f48,#14161a)"},{title:"Construction & Real Estate",items:["Builders","Developers","Construction companies","Large-scale developments"],grad:"linear-gradient(135deg,#4d4a44,#151514)"},{title:"Institutional Projects",items:["Educational institutions","Airports","Public infrastructure","Other institutional developments"],grad:"linear-gradient(135deg,#3b4a45,#121614)"}],d2=[["Requirement-based sourcing","Tell us your preferred stone category, colour, finish, quantity and application."],["Multiple stone categories","We deal in marbles, granites, Kota stones, quartz and Kadapa stones."],["Project-specific assistance","We help you identify suitable material options for your requirements."],["Sourcing across India","Materials can be sourced from different parts of India depending on the stone and specification."]],f2=[["Deliver top-grade materials","Every marble slab, granite block and Kota stone meets stringent quality standards for finish, strength and longevity."],["Empower industry professionals","We support builders, architects and designers with reliable materials that bring creative visions to life without compromise."],["Ensure long-term value","We prioritise durability and performance so every project keeps its appeal and strength for years to come."],["Maintain consistency & reliability","A streamlined supply chain ensures timely delivery without sacrificing quality."]],h2=["Natural stone trading","Requirement-based sourcing","Multiple stone categories","Residential supply","Commercial supply","Large-project requirements"],p2=[["What types of stones are available at Joys Marbles & Granites?","Joys Marbles & Granites offers a range of natural stone products, including different types of marbles and granites, Kota stone and Kadapa stone, along with quartz. We cater to residential, commercial and construction requirements, helping customers find suitable materials for their projects."],["Where can I find marble and granite suppliers in Chennai?","Joys Marbles & Granites is a Chennai-based marble and granite supplier, established in 1998. We deal in different varieties of marble and granite for flooring, countertops, wall applications and other architectural requirements. Contact us to discuss your material preferences and request a quotation."],["Do you offer different varieties of marble and granite?","Yes. We deal in different varieties of marble and granite to suit diverse design preferences and project requirements. Contact us with your preferred colour, pattern, finish and application to enquire about suitable stone options."],["Do you supply Kota stone and Kadapa stone?","Yes. Joys Marbles & Granites deals in Kota stone and Kadapa stone for flooring, residential, commercial and construction applications. Contact our team with your required quantity and project details to enquire about sourcing and pricing."],["Do you provide quartz for residential and commercial projects?","Yes. We deal in quartz for suitable residential and commercial applications. If you are looking for quartz for kitchen countertops, interiors or other architectural requirements, get in touch to discuss available options and pricing."],["How can I get the price of marble, granite or other stones?","Request a quotation through our website enquiry form or WhatsApp. Share the stone category, preferred specifications, required quantity and project location. Our team will review your requirements and assist you with relevant pricing information."],["Can I get specific types of stones sourced for my project?","Yes. We source stones from different parts of India based on customer and project requirements. Share your preferred specifications and we will explore suitable sourcing options."],["Do you supply natural stones for large construction and commercial projects?","Yes. We cater to residential, commercial and larger construction-related requirements. Builders, developers, architects and construction companies can contact us based on their project specifications and quantities."],["Do you supply marble and granite outside Chennai?","Yes. Although we are based in Chennai, we consider enquiries from customers across Tamil Nadu and other parts of India. Supply arrangements can be discussed based on the stone required, quantity, project location and logistical feasibility."],["How can I contact Joys Marbles & Granites for a stone enquiry?","Reach us through our website, phone or WhatsApp. Whether you need marble, granite, quartz, Kota stone or Kadapa stone, share your product preferences and project requirements to request product information and pricing."]];function qe({children:t,from:e="up",delay:n=0,className:i=""}){const[r,s]=_c(),a={transitionDelay:`${n}ms`};return u.jsx("div",{ref:r,"data-from":e,"data-in":s,style:a,className:`rv ${i}`,children:t})}function m2({className:t=""}){const[e,n]=_c(.5);return u.jsx("div",{ref:e,"data-in":n,className:`rule ${t}`})}function g2({to:t,suffix:e="",plain:n}){const[i,r]=_c(.5),[s,a]=ae.useState(0);return ae.useEffect(()=>{if(!r||n)return;if(matchMedia("(prefers-reduced-motion: reduce)").matches){a(t);return}const o=performance.now(),l=1400;let c=0;const f=p=>{const d=Math.min(1,(p-o)/l);a(Math.round(t*(1-Math.pow(1-d,3)))),d<1&&(c=requestAnimationFrame(f))};return c=requestAnimationFrame(f),()=>cancelAnimationFrame(c)},[r,t,n]),u.jsx("b",{ref:i,className:"gold font-serif text-4xl sm:text-5xl lg:text-6xl block leading-none",children:n??`${s}${e}`})}function x2(){const[t,e]=ae.useState(0);return Ws(n=>{const i=document.documentElement.scrollHeight-innerHeight;e(i>0?n/i:0)}),u.jsx("div",{"aria-hidden":!0,className:"fixed top-0 left-0 h-[2px] z-[60] bg-gradient-to-r from-[#8d6c2a] via-gd to-cg origin-left",style:{transform:`scaleX(${t})`,width:"100%"}})}function Yn({v:t,title:e,text:n,children:i,eyebrow:r,tall:s}){const a=a2();return u.jsxs("header",{className:`relative overflow-hidden px-[5vw] pt-32 pb-12 sm:pt-40 sm:pb-16 flex items-center ${s?"min-h-screen":"min-h-[60vh]"}`,children:[u.jsx(n2,{variant:t}),u.jsxs("div",{ref:a,className:"wrap w-full relative z-10 will-change-transform",children:[r&&u.jsx("p",{className:"text-cg tracking-[.3em] text-xs uppercase mb-4 hero-in",style:{animationDelay:".1s"},children:r}),u.jsx("h1",{className:"gold text-[clamp(38px,6.5vw,84px)] max-w-[900px] hero-in",style:{animationDelay:".2s"},children:e}),u.jsx("p",{className:"text-sg max-w-[560px] mt-5 hero-in",style:{animationDelay:".4s"},children:n}),u.jsx("div",{className:"hero-in",style:{animationDelay:".6s"},children:i})]}),u.jsx("a",{href:"#scroll-start","aria-label":"Scroll down",className:"hidden sm:block absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-cg/70 text-xs tracking-[.3em] scroll-cue",onClick:o=>{o.preventDefault(),scrollTo({top:innerHeight*.9,behavior:"smooth"})},children:"SCROLL"})]})}function ht({children:t,alt:e=!1,center:n=!1,id:i,className:r=""}){return u.jsx("section",{id:i,className:`sec ${e?"alt":""} ${n?"text-center":""} ${r}`,children:u.jsx("div",{className:"wrap",children:t})})}function an({children:t,lead:e,center:n,gold:i}){return u.jsxs(qe,{children:[u.jsx("h2",{className:`h2 ${i?"gold":""}`,children:t}),u.jsx(m2,{className:n?"mx-auto":""}),e&&u.jsx("p",{className:`lead mt-5 ${n?"mx-auto":""}`,children:e})]})}function v2({t,d:e,i:n}){return u.jsxs(vf,{fx:i2[n%4],delay:n,className:"card h-full",children:[u.jsx("span",{className:"ico"}),u.jsx("h3",{children:t}),e&&u.jsx("p",{children:e})]})}function yc({items:t,cols:e=4}){return u.jsx("div",{className:`grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 ${e===4?"lg:grid-cols-4":"lg:grid-cols-3"} [perspective:1200px]`,children:t.map(([n,i],r)=>u.jsx(qe,{delay:r*90,from:"zoom",className:"h-full",children:u.jsx(v2,{t:n,d:i,i:r})},n))})}function Ri({title:t,text:e,href:n="#contact",label:i,second:r}){return u.jsx(ht,{center:!0,children:u.jsxs(qe,{children:[u.jsx("h2",{className:"h2 gold",children:t}),u.jsx("p",{className:"lead mx-auto",children:e}),u.jsxs("div",{className:"flex flex-wrap gap-3.5 justify-center",children:[u.jsx("a",{className:"btn-fill",href:n,children:i}),r&&u.jsx("a",{className:"btn",href:r[1],children:r[0]})]})]})})}function _2(){const t=c2.map(e=>`✔ ${e}`);return u.jsx("div",{className:"overflow-hidden border-y border-gd/30 py-4 bg-bk/70","aria-hidden":!0,children:u.jsx("div",{className:"flex gap-14 w-max text-cg font-serif font-semibold text-xl whitespace-nowrap animate-[mq_34s_linear_infinite]",children:[...t,...t,...t,...t].map((e,n)=>u.jsx("span",{children:e},n))})})}function Sf({words:t,reverse:e=!1}){const n=yf("pass"),i=[...t,...t].join("  ·  ");return u.jsx("div",{ref:n,className:"overflow-hidden py-6 sm:py-10 border-y border-gd/15 bg-bk/60","aria-hidden":!0,children:u.jsx("div",{className:"scrub-band font-serif font-semibold whitespace-nowrap text-[clamp(44px,10vw,140px)] leading-none",style:{"--dir":e?-1:1},children:i})})}const y2={fill:"none",stroke:"currentColor",strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round"},S2=[{lines:["Experience","since 1998"],rz:"-6deg",y:"6px",icon:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M6 3h12l4 6-10 13L2 9Z"}),u.jsx("path",{d:"M11 3 8 9l4 13 4-13-3-6M2 9h20"})]})},{lines:["Diverse stone","selection"],rz:"-3deg",y:"-6px",icon:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"}),u.jsx("path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"}),u.jsx("path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"})]})},{lines:["Requirement-","based sourcing"],rz:"0deg",y:"-14px",icon:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}),u.jsx("path",{d:"m9 12 2 2 4-4"})]})},{lines:["Residential &","commercial"],rz:"3deg",y:"-6px",icon:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"m11 17 2 2a1 1 0 1 0 3-3"}),u.jsx("path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"}),u.jsx("path",{d:"m21 3 1 11h-2"}),u.jsx("path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"}),u.jsx("path",{d:"M3 4h8"})]})},{lines:["Personalised","assistance"],rz:"6deg",y:"6px",icon:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"8",r:"3.2"}),u.jsx("path",{d:"M6.5 20v-1.5a4 4 0 0 1 4-4h3a4 4 0 0 1 4 4V20"}),u.jsx("circle",{cx:"5",cy:"10",r:"2"}),u.jsx("circle",{cx:"19",cy:"10",r:"2"}),u.jsx("path",{d:"M2 18v-.8a2.6 2.6 0 0 1 2.6-2.6M22 18v-.8a2.6 2.6 0 0 0-2.6-2.6"})]})}];function M2(){const t=ae.useRef(null);return ae.useEffect(()=>{const e=t.current,n=e==null?void 0:e.parentElement;if(!e||!n||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const i=e.getContext("2d");if(!i)return;const r=Math.min(window.devicePixelRatio||1,2);let s=0,a=0,o=0,l=!0;const c=()=>{s=n.clientWidth,a=n.clientHeight,e.width=s*r,e.height=a*r,i.setTransform(r,0,0,r,0,0)};c();const f=()=>({x:Math.random()*s,y:Math.random()*a,r:Math.random()*1.6+.3,vy:-(Math.random()*.25+.05),vx:(Math.random()-.5)*.15,a:Math.random()*6.28,s:Math.random()*.02+.005}),p=s<700?40:80,d=Array.from({length:p},f),m=new ResizeObserver(c);m.observe(n);const _=new IntersectionObserver(([g])=>{l=g.isIntersecting});_.observe(n);const S=()=>{if(o=requestAnimationFrame(S),!(!l||document.hidden)){i.clearRect(0,0,s,a);for(const g of d){g.x+=g.vx,g.y+=g.vy,g.a+=g.s,g.y<-5&&(g.y=a+5,g.x=Math.random()*s);const h=.25+.55*Math.abs(Math.sin(g.a));i.beginPath(),i.fillStyle=`rgba(255,215,130,${h})`,i.shadowColor="rgba(255,200,100,.9)",i.shadowBlur=8,i.arc(g.x,g.y,g.r,0,6.28),i.fill()}}};return o=requestAnimationFrame(S),()=>{cancelAnimationFrame(o),m.disconnect(),_.disconnect()}},[]),u.jsx("canvas",{ref:t,"aria-hidden":!0,className:"pointer-events-none absolute inset-0 z-0 h-full w-full"})}function w2({r:t,i:e}){const n=r=>{if(r.pointerType!=="mouse")return;const s=r.currentTarget,a=s.querySelector(".wy-face");if(!a)return;const o=s.getBoundingClientRect(),l=(r.clientX-o.left)/o.width,c=(r.clientY-o.top)/o.height;a.style.setProperty("--gx",`${l*100}%`),a.style.setProperty("--gy",`${c*100}%`),a.style.setProperty("--cy",`${(l-.5)*26}deg`),a.style.setProperty("--cx",`${(.5-c)*22}deg`)},i=r=>{const s=r.currentTarget.querySelector(".wy-face");["--gx","--gy","--cy","--cx"].forEach(a=>s==null?void 0:s.style.removeProperty(a))};return u.jsx("article",{onPointerMove:n,onPointerLeave:i,className:"wy-card relative h-[176px] w-[calc(50%-8px)] max-w-[170px] md:h-[190px] md:w-[17.5%] md:max-w-[150px] xl:h-[200px] xl:w-[clamp(104px,9vw,152px)] xl:max-w-none",style:{"--i":e,"--rz":t.rz,"--y":t.y},children:u.jsx("div",{className:"wy-float absolute inset-0",children:u.jsxs("div",{className:"wy-face absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-[18px] px-2.5 py-5 text-center",children:[u.jsx("div",{className:"wy-medal relative grid h-[54px] w-[54px] place-items-center rounded-full text-[#e3b765] sm:h-[62px] sm:w-[62px]",children:u.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":!0,className:"h-[26px] w-[26px] sm:h-[30px] sm:w-[30px]",style:{filter:"drop-shadow(0 0 5px rgba(255,208,110,.8))"},...y2,children:t.icon})}),u.jsxs("div",{className:"wy-label text-[14px] font-medium leading-tight text-white 2xl:text-[15px]",children:[t.lines[0],u.jsx("br",{}),t.lines[1]]})]})})})}function E2(){const t=ae.useRef(null),e=ae.useRef(null),[n,i]=ae.useState(!1);ae.useEffect(()=>{const a=t.current;if(!a)return;const o=new IntersectionObserver(([l])=>{l.isIntersecting&&(i(!0),o.disconnect())},{threshold:.2});return o.observe(a),()=>o.disconnect()},[]);const r=a=>{if(a.pointerType!=="mouse")return;const o=t.current,l=e.current;if(!o||!l)return;const c=o.getBoundingClientRect(),f=(a.clientX-c.left)/c.width-.5,p=(a.clientY-c.top)/c.height-.5;l.style.setProperty("--ry",(f*16).toFixed(2)),l.style.setProperty("--rx",(-p*10).toFixed(2))},s=()=>{var a,o;(a=e.current)==null||a.style.setProperty("--ry","0"),(o=e.current)==null||o.style.setProperty("--rx","0")};return u.jsxs("section",{"aria-labelledby":"wy-title",className:"relative bg-black px-[5vw] py-14 sm:py-20",children:[u.jsx("style",{children:`
        .wy-banner {
          background:
            radial-gradient(60% 80% at 8% 0%,rgba(15,90,63,.55),transparent 60%),
            radial-gradient(40% 60% at 100% 0%,rgba(20,120,80,.5),transparent 65%),
            radial-gradient(70% 50% at 70% 100%,rgba(227,183,101,.16),transparent 70%),
            linear-gradient(180deg,#030302,#0a0907 60%,#050504);
          box-shadow: 0 0 0 1px rgba(227,183,101,.18), 0 40px 90px -30px rgba(227,183,101,.25);
        }
        .wy-banner::before { content:""; position:absolute; inset:-20%; z-index:-1; opacity:.35;
          background: repeating-linear-gradient(115deg,transparent 0 46px,rgba(227,183,101,.07) 47px,transparent 49px 120px),
                      repeating-linear-gradient(62deg,transparent 0 80px,rgba(31,150,100,.09) 81px,transparent 83px 190px);
          animation: wy-drift 40s linear infinite; }
        .wy-orn-r { transform: scaleX(-1); }
        .wy-gem { filter: drop-shadow(0 0 8px rgba(227,183,101,.8)); animation: wy-pulse 3.6s ease-in-out infinite; }
        .wy-h {
          background: linear-gradient(100deg,#fff 0%,#fff 40%,#fff0c4 50%,#fff 60%,#fff 100%); background-size: 250% 100%;
          -webkit-background-clip: text; background-clip: text; color: transparent; animation: wy-sheen 7s ease-in-out infinite 1.6s; }
        .wy-gold { background: linear-gradient(120deg,#9a6d2a,#e3b765,#fff0c4,#e3b765); -webkit-background-clip: text; background-clip: text; color: transparent; }

        .wy-cta { transition: transform .3s, box-shadow .3s, background .3s; }
        .wy-cta::before { content:""; position:absolute; inset:0; transform: translateX(-120%); transition: transform .8s;
          background: linear-gradient(110deg,transparent 35%,rgba(255,240,196,.35) 50%,transparent 65%); }
        .wy-cta:hover, .wy-cta:focus-visible { transform: translateY(-2px); background: rgba(227,183,101,.14);
          box-shadow: 0 10px 30px -8px rgba(227,183,101,.6), inset 0 0 18px rgba(227,183,101,.2); outline: none; }
        .wy-cta:hover::before, .wy-cta:focus-visible::before { transform: translateX(120%); }
        .wy-cta:hover .wy-arr { transform: translateX(4px); }

        .wy-stage { perspective: 1300px; }
        @media (max-width: 1279px) { .wy-stage { perspective: 900px; } }
        .wy-ring { fill: none; stroke: url(#wy-gl); stroke-linecap: round; filter: drop-shadow(0 0 7px rgba(227,183,101,.9)); }
        .wy-r1 { stroke-width: 2; stroke-dasharray: 900 1400; animation: wy-dash 14s linear infinite; }
        .wy-r2 { stroke-width: 1.2; stroke-dasharray: 500 1500; animation: wy-dash 20s linear infinite reverse; opacity: .8; }

        .wy-rig { transform-style: preserve-3d; transform: rotateX(calc(var(--rx,0)*1deg)) rotateY(calc(var(--ry,0)*1deg)); transition: transform .25s ease-out; }
        .wy-platform { clip-path: polygon(2% 38%,10% 18%,30% 28%,52% 8%,75% 26%,92% 14%,100% 40%,98% 100%,0 100%);
          background: linear-gradient(180deg,#26221a,#0d0c09 55%,#050504); }
        .wy-platform::before { content:""; position:absolute; inset:0; mix-blend-mode: screen; animation: wy-vein 6s ease-in-out infinite;
          background: linear-gradient(100deg,transparent 30%,rgba(227,183,101,.5) 32%,transparent 34%,transparent 60%,rgba(227,183,101,.35) 61%,transparent 63%),
                      linear-gradient(180deg,rgba(255,225,150,.35),transparent 35%); }

        .wy-card { transform-style: preserve-3d; opacity: 0; transform: rotateZ(var(--rz)) translateY(var(--y,0)); }
        .wy-in .wy-card { animation: wy-rise 1.1s cubic-bezier(.2,.9,.25,1) forwards; animation-delay: calc(var(--i)*.14s + .2s); }
        .wy-float { transform-style: preserve-3d; animation: wy-bob 5s ease-in-out infinite; animation-delay: calc(var(--i)*-.9s); }
        .wy-face {
          transform: rotateY(var(--cy,-8deg)) rotateX(var(--cx,0deg)); transition: transform .2s ease-out, box-shadow .3s;
          background:
            radial-gradient(circle at var(--gx,50%) var(--gy,0%),rgba(255,226,150,.22),transparent 55%),
            linear-gradient(115deg,transparent 42%,rgba(227,183,101,.22) 43%,transparent 45%),
            linear-gradient(65deg,transparent 60%,rgba(255,255,255,.07) 61%,transparent 63%),
            linear-gradient(160deg,#25231f,#0b0a08 60%,#16130e);
          border: 1px solid rgba(227,183,101,.45);
          box-shadow: inset 0 0 22px rgba(227,183,101,.14), inset 0 1px 0 rgba(255,240,196,.4), 0 26px 40px -12px rgba(0,0,0,.9), 0 0 30px -4px rgba(227,183,101,.35); }
        .wy-face::after { content:""; position:absolute; inset:0; border-radius:inherit; pointer-events:none; mix-blend-mode: screen;
          background: linear-gradient(105deg,transparent 30%,rgba(255,240,200,.28) 50%,transparent 70%); background-size: 250% 100%; background-position: 150% 0;
          animation: wy-glint 6s ease-in-out infinite; animation-delay: calc(var(--i)*.5s + 2s); }
        .wy-card:hover .wy-face { box-shadow: inset 0 0 26px rgba(227,183,101,.28), inset 0 1px 0 rgba(255,240,196,.6), 0 30px 50px -12px rgba(0,0,0,.9), 0 0 46px 0 rgba(255,208,110,.6); }
        .wy-medal { transform: translateZ(36px); background: radial-gradient(circle at 35% 25%,#3a3224,#0a0907 70%); border: 1px solid rgba(227,183,101,.6);
          box-shadow: 0 0 0 5px rgba(227,183,101,.08), 0 0 22px rgba(227,183,101,.45), inset 0 0 14px rgba(227,183,101,.25); }
        .wy-medal::before { content:""; position:absolute; inset:-7px; border-radius:50%; border:1px dashed rgba(227,183,101,.4); animation: wy-spin 16s linear infinite; }
        .wy-label { transform: translateZ(22px); }

        @keyframes wy-drift { to { transform: translate3d(-90px,40px,0); } }
        @keyframes wy-pulse { 50% { filter: drop-shadow(0 0 16px rgba(255,220,140,1)); transform: scale(1.08); } }
        @keyframes wy-sheen { 0%,60% { background-position: 120% 0; } 100% { background-position: -120% 0; } }
        @keyframes wy-dash { to { stroke-dashoffset: -2300; } }
        @keyframes wy-vein { 50% { opacity: .45; } }
        @keyframes wy-rise {
          from { opacity: 0; transform: rotateZ(var(--rz)) translateY(120px) translateZ(-200px) rotateX(50deg); }
          to   { opacity: 1; transform: rotateZ(var(--rz)) translateY(var(--y,0)); } }
        @keyframes wy-bob { 0%,100% { transform: translateY(0) translateZ(0); } 50% { transform: translateY(-12px) translateZ(26px); } }
        @keyframes wy-glint { 0%,70% { background-position: 150% 0; } 100% { background-position: -150% 0; } }
        @keyframes wy-spin { to { transform: rotate(360deg); } }
        @media (prefers-reduced-motion: reduce) {
          .wy-banner::before,.wy-gem,.wy-h,.wy-r1,.wy-r2,.wy-platform::before,.wy-float,.wy-face::after,.wy-medal::before { animation: none !important; }
          .wy-in .wy-card, .wy-card { animation: none !important; opacity: 1; }
          .wy-rig { transform: none !important; }
        }
      `}),u.jsxs("div",{ref:t,onPointerMove:r,onPointerLeave:s,className:`wy-banner relative isolate mx-auto grid w-full max-w-[1400px] items-center gap-5 overflow-hidden rounded-[22px] px-5 py-8 sm:px-8 sm:py-10 xl:min-h-[460px] xl:grid-cols-[minmax(300px,34%)_1fr] xl:px-12 xl:py-10 ${n?"wy-in":""}`,children:[u.jsx(M2,{}),u.jsxs("div",{className:"relative z-[3] text-center xl:text-left",children:[u.jsxs("div",{className:"mx-auto mb-4 flex w-[200px] items-center gap-3.5 text-[#e3b765] sm:w-[230px] xl:mx-0","aria-hidden":!0,children:[u.jsx("i",{className:"h-px flex-1 bg-gradient-to-r from-transparent to-[#e3b765]"}),u.jsxs("svg",{viewBox:"0 0 24 24",className:"wy-gem h-[30px] w-[30px]",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinejoin:"round",children:[u.jsx("path",{d:"M6 3h12l4 6-10 13L2 9Z"}),u.jsx("path",{d:"M11 3 8 9l4 13 4-13-3-6M2 9h20"})]}),u.jsx("i",{className:"wy-orn-r h-px flex-1 bg-gradient-to-r from-transparent to-[#e3b765]"})]}),u.jsxs("h2",{id:"wy-title",className:"wy-h mb-3.5 font-serif text-[clamp(42px,9vw,68px)] font-semibold leading-[1.02]",children:["Why choose ",u.jsx("b",{className:"wy-gold font-semibold",children:"us"})]}),u.jsx("p",{className:"mx-auto mb-6 max-w-[36ch] text-[15.5px] leading-[1.55] text-[#e9e3d4] xl:mx-0",children:"Quality you can build on, from the first slab to the final delivery."}),u.jsxs("a",{href:"#sourcing",className:"wy-cta relative inline-flex items-center gap-3.5 overflow-hidden rounded-full border border-[#e3b765]/70 bg-[#e3b765]/[.06] py-[13px] pl-[22px] pr-[18px] text-sm font-medium text-[#fff0c4]",children:["Explore Our Services",u.jsx("span",{className:"wy-arr grid h-6 w-6 place-items-center rounded-full border border-current transition-transform duration-300",children:u.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,children:u.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})})})]})]}),u.jsxs("div",{className:"wy-stage relative z-[2] flex items-center justify-center pb-6 xl:h-[380px] xl:pb-0",children:[u.jsxs("svg",{viewBox:"0 0 900 380",preserveAspectRatio:"none","aria-hidden":!0,className:"pointer-events-none absolute -inset-x-[2%] -top-[6%] bottom-[8%] z-0 hidden h-[96%] w-[104%] overflow-visible xl:block",children:[u.jsx("defs",{children:u.jsxs("linearGradient",{id:"wy-gl",x1:"0",x2:"1",children:[u.jsx("stop",{offset:"0",stopColor:"#9a6d2a",stopOpacity:"0"}),u.jsx("stop",{offset:".5",stopColor:"#ffe2a0"}),u.jsx("stop",{offset:"1",stopColor:"#9a6d2a",stopOpacity:"0"})]})}),u.jsx("ellipse",{className:"wy-ring wy-r1",cx:"450",cy:"190",rx:"430",ry:"150",transform:"rotate(-3 450 190)"}),u.jsx("ellipse",{className:"wy-ring wy-r2",cx:"470",cy:"200",rx:"380",ry:"120",transform:"rotate(4 470 200)"})]}),u.jsx("div",{"aria-hidden":!0,className:"wy-platform absolute -inset-x-[3%] bottom-0 z-[1] hidden h-[120px] xl:block"}),u.jsx("div",{ref:e,className:"wy-rig relative z-[2] flex w-full flex-wrap items-center justify-center gap-4 md:flex-nowrap md:gap-3 xl:mb-[46px] xl:w-auto xl:gap-3 2xl:gap-4",children:S2.map((a,o)=>u.jsx(w2,{r:a,i:o},a.lines.join("")))})]})]})]})}const Rn="#e2b254",uv=[{title:"Marbles",blurb:["Timeless beauty,","natural elegance."],icon:"layers",face:"linear-gradient(135deg,#faf8f4,#d9d4ca 55%,#a9a39a)",edge:"#cfc9be",vein:{rgb:[.3,.3,.32],a:.75,f:".010 .028",seed:4}},{title:"Granites",blurb:["Unmatched durability,","lasting brilliance."],icon:"stack",face:"linear-gradient(135deg,#2a2a2e,#0c0c0e 55%,#050506)",edge:"#17171a",vein:{rgb:[.88,.66,.25],a:.95,f:".012 .03",seed:11}},{title:"Kota Stones",blurb:["Simple, sturdy,","forever reliable."],icon:"column",face:"linear-gradient(135deg,#93a498,#5e7267 55%,#34443c)",edge:"#44564c",vein:{rgb:[.82,.9,.84],a:.55,f:".014 .04",seed:7}},{title:"Quartz",blurb:["Pure elegance,","modern appeal."],icon:"diamond",face:"linear-gradient(135deg,#f4f1ea,#cfc8bb 55%,#9d968a)",edge:"#c2bbae",vein:{rgb:[1,1,1],a:.9,f:".03 .05",seed:2}},{title:"Kadapa Stones",blurb:["Strength and style","in every surface."],icon:"grid",face:"linear-gradient(135deg,#6a6a73,#33333a 55%,#14141a)",edge:"#26262c",vein:{rgb:[.88,.66,.25],a:.6,f:".012 .035",seed:19}}];function b2({name:t}){const e={fill:"none",stroke:Rn,strokeWidth:1.6,strokeLinejoin:"round",strokeLinecap:"round"};return u.jsxs("svg",{viewBox:"0 0 48 48",className:"h-9 w-9 sm:h-11 sm:w-11","aria-hidden":!0,children:[t==="layers"&&u.jsxs("g",{...e,children:[u.jsx("path",{d:"M24 6 42 15 24 24 6 15z"}),u.jsx("path",{d:"M6 22l18 9 18-9"}),u.jsx("path",{d:"M6 29l18 9 18-9"})]}),t==="stack"&&u.jsxs("g",{...e,children:[u.jsx("path",{d:"M24 5 43 14 24 23 5 14z"}),u.jsx("path",{d:"M14 19l10 5 10-5M5 24l19 9 19-9"}),u.jsx("path",{d:"M5 33l19 9 19-9"})]}),t==="column"&&u.jsxs("g",{...e,children:[u.jsx("path",{d:"M7 12h34M10 8h28v4M10 40h28M7 44h34"}),u.jsx("path",{d:"M14 14v24M22 14v24M26 14v24M34 14v24"})]}),t==="diamond"&&u.jsxs("g",{...e,children:[u.jsx("path",{d:"M14 8h20l9 11-19 23L5 19z"}),u.jsx("path",{d:"M5 19h38M17 19l7 23 7-23M14 8l3 11M34 8l-3 11M24 8v11"})]}),t==="grid"&&u.jsxs("g",{...e,children:[u.jsx("rect",{x:"7",y:"7",width:"34",height:"34"}),u.jsx("path",{d:"M7 24h34M24 7v34M16 7v17M33 24v17"})]})]})}function T2(){return u.jsx("svg",{width:"0",height:"0",className:"absolute","aria-hidden":!0,focusable:"false",children:uv.map((t,e)=>{const[n,i,r]=t.vein.rgb;return u.jsxs("filter",{id:`cs-vein-${e}`,x:"0",y:"0",width:"100%",height:"100%",colorInterpolationFilters:"sRGB",children:[u.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:t.vein.f,numOctaves:"4",seed:t.vein.seed,result:"n"}),u.jsx("feColorMatrix",{in:"n",values:`0 0 0 0 ${n}  0 0 0 0 ${i}  0 0 0 0 ${r}  1 0 0 0 0`,result:"t"}),u.jsx("feComponentTransfer",{in:"t",children:u.jsx("feFuncA",{type:"table",tableValues:`0 0 0 0 0 ${t.vein.a} 0 0 0 0 0`})})]},t.title)})})}function og({className:t="",style:e}){return u.jsx("div",{className:`pointer-events-none absolute ${t}`,style:{filter:`drop-shadow(0 0 7px ${Rn}66)`,...e},children:u.jsx("div",{className:"h-full w-full",style:{clipPath:"polygon(0 100%,4% 70%,12% 58%,20% 62%,30% 38%,40% 46%,50% 24%,60% 40%,70% 30%,80% 48%,90% 36%,100% 52%,100% 100%)",background:"linear-gradient(160deg,#3b3b40 0%,#121216 40%,#050507 100%), repeating-linear-gradient(115deg,rgba(226,178,84,.18) 0 1px,transparent 1px 14px)",backgroundBlendMode:"screen"}})})}function A2({item:t,index:e,children:n}){const i=ae.useRef(null),r=a=>{if(a.pointerType!=="mouse")return;const o=i.current;if(!o)return;const l=o.getBoundingClientRect(),c=(a.clientX-l.left)/l.width,f=(a.clientY-l.top)/l.height;o.style.setProperty("--rx",`${(.5-f)*10}deg`),o.style.setProperty("--ry",`${(c-.5)*14}deg`),o.style.setProperty("--px",`${(c-.5)*18}px`),o.style.setProperty("--py",`${(f-.5)*12}px`),o.style.setProperty("--mx",`${c*100}%`),o.style.setProperty("--my",`${f*100}%`)},s=()=>{const a=i.current;a&&["--rx","--ry","--px","--py"].forEach(o=>a.style.setProperty(o,o.startsWith("--r")?"0deg":"0px"))};return u.jsxs("a",{ref:i,href:`#collection/${encodeURIComponent(t.title)}`,"aria-label":`Explore ${t.title} collection`,onPointerMove:r,onPointerLeave:s,className:"cs-card group relative block h-full min-h-[250px] outline-none sm:min-h-[270px] lg:min-h-[280px]",children:[u.jsxs("div",{className:"cs-tilt absolute inset-0",children:[u.jsxs("div",{className:"cs-glass absolute inset-0 overflow-hidden rounded-[22px]",children:[u.jsx("div",{"aria-hidden":!0,className:"absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100",style:{background:`radial-gradient(45% 70% at var(--mx,50%) var(--my,50%), ${Rn}38, transparent 70%)`}}),u.jsx("span",{"aria-hidden":!0,className:"cs-ring absolute -right-[8%] bottom-[6%] h-[62%] w-[62%] rounded-[50%] border border-[#e2b254]/60",style:{boxShadow:`0 0 18px ${Rn}55, inset 0 0 18px ${Rn}33`}}),u.jsx(og,{className:"-right-[4%] bottom-0 h-[34%] w-[66%]"}),u.jsx("div",{className:"cs-slab absolute bottom-[12%] right-[6%] aspect-[4/5] w-[42%] sm:w-[40%]",style:{"--edge":t.edge},children:u.jsxs("div",{className:"absolute inset-0 overflow-hidden rounded-[3px]",style:{background:t.face},children:[u.jsx("div",{className:"absolute inset-0",style:{filter:`url(#cs-vein-${e})`,background:"#fff",opacity:1}}),u.jsx("div",{"aria-hidden":!0,className:"cs-sheen absolute inset-0",style:{background:"linear-gradient(110deg,transparent 35%,rgba(255,255,255,.35) 50%,transparent 65%)"}}),u.jsx("div",{className:"absolute inset-0",style:{boxShadow:`inset 0 0 0 1px ${Rn}66, inset 0 0 22px rgba(0,0,0,.35)`}})]})}),u.jsx(og,{className:"-right-[2%] bottom-0 h-[20%] w-[46%]",style:{transform:"scaleX(-1)"}})]}),u.jsxs("div",{className:"cs-content relative z-10 flex h-full max-w-[58%] flex-col justify-center gap-1 p-5 sm:max-w-[54%] sm:p-7 lg:p-8",children:[u.jsx(b2,{name:t.icon}),u.jsx("h3",{className:"mt-2 text-[26px] font-medium leading-none text-white sm:text-[32px] lg:text-[34px]",children:t.title}),u.jsxs("p",{className:"mt-1 text-[13.5px] leading-snug text-white/70 sm:text-[15px]",children:[t.blurb[0],u.jsx("br",{}),t.blurb[1]]}),u.jsxs("span",{className:"mt-3 inline-flex w-fit items-center gap-2 rounded-full border border-[#e2b254]/70 bg-black/40 px-4 py-2 text-[12.5px] font-medium text-[#f1dca3] shadow-[0_0_14px_rgba(226,178,84,.25)] transition group-hover:bg-[#e2b254]/15 group-hover:shadow-[0_0_22px_rgba(226,178,84,.55)] sm:text-[13.5px]",children:["Explore Collection",u.jsx("svg",{viewBox:"0 0 24 24",className:"h-4 w-4 transition-transform duration-300 group-hover:translate-x-1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,children:u.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})})]})]})]}),n]})}const C2=Array.from({length:22},(t,e)=>({left:e*37%100,top:10+e*53%85,size:2+e%3,delay:e*.41%6,dur:5+e%5}));function R2(){return u.jsxs("div",{"aria-hidden":!0,className:"pointer-events-none absolute inset-0 overflow-hidden",children:[u.jsx("div",{className:"absolute inset-0",style:{background:"radial-gradient(55% 35% at 50% 0%,rgba(226,178,84,.10),transparent 70%), radial-gradient(40% 40% at 90% 30%,rgba(47,227,143,.08),transparent 70%), radial-gradient(40% 40% at 8% 60%,rgba(47,227,143,.06),transparent 70%)"}}),u.jsx("span",{className:"cs-orbit absolute -left-24 top-[14%] hidden h-[340px] w-[340px] rounded-[50%] border border-[#e2b254]/40 md:block",style:{boxShadow:`0 0 30px ${Rn}33`}}),u.jsx("span",{className:"cs-orbit-r absolute -right-28 top-[40%] hidden h-[300px] w-[420px] rounded-[50%] border border-[#e2b254]/35 md:block",style:{boxShadow:`0 0 30px ${Rn}2a`}}),u.jsx("div",{className:"cs-drift-a absolute right-[6%] top-[4%] h-14 w-14 sm:h-20 sm:w-20",style:{filter:`drop-shadow(0 0 8px ${Rn}77)`},children:u.jsx("div",{className:"h-full w-full bg-gradient-to-br from-[#4a4a50] to-[#08080a]",style:{clipPath:"polygon(10% 30%,45% 0,90% 20%,100% 60%,70% 100%,20% 90%,0 60%)"}})}),u.jsx("div",{className:"cs-drift-b absolute left-[3%] top-[40%] h-10 w-10 sm:h-14 sm:w-14",style:{filter:`drop-shadow(0 0 8px ${Rn}77)`},children:u.jsx("div",{className:"h-full w-full bg-gradient-to-br from-[#3f3f45] to-[#050507]",style:{clipPath:"polygon(20% 0,80% 15%,100% 55%,60% 100%,10% 85%,0 40%)"}})}),C2.map((t,e)=>u.jsx("span",{className:"cs-spark absolute rounded-full bg-amber-300 shadow-[0_0_8px_#e2b254]",style:{left:`${t.left}%`,top:`${t.top}%`,width:t.size,height:t.size,animationDelay:`${t.delay}s`,animationDuration:`${t.dur}s`}},e)),u.jsx("div",{className:"absolute inset-x-0 bottom-0 h-40",style:{background:"linear-gradient(to top,rgba(226,178,84,.12),transparent)"}}),u.jsx("div",{className:"absolute inset-x-[8%] bottom-0 h-px",style:{background:`linear-gradient(90deg,transparent,${Rn},transparent)`}})]})}function P2(){return u.jsxs("section",{"aria-labelledby":"cs-title",className:"relative isolate overflow-hidden bg-black px-[5vw] py-16 sm:py-20 lg:py-28",children:[u.jsx("style",{children:`
        .cs-card { perspective: 1100px; }
        .cs-tilt { transform-style: preserve-3d; transform: rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)); transition: transform .25s ease-out; }
        .cs-glass {
          background: linear-gradient(135deg, rgba(40,40,44,.55), rgba(8,8,10,.92) 55%, rgba(0,0,0,.96));
          border: 1px solid rgba(226,178,84,.55);
          box-shadow: 0 0 0 1px rgba(226,178,84,.12) inset, 0 0 26px rgba(226,178,84,.22), 0 22px 40px rgba(0,0,0,.6);
          backdrop-filter: blur(4px);
          transition: box-shadow .4s, border-color .4s;
        }
        .cs-card:hover .cs-glass, .cs-card:focus-visible .cs-glass {
          border-color: rgba(241,220,163,.95);
          box-shadow: 0 0 0 1px rgba(241,220,163,.25) inset, 0 0 44px rgba(226,178,84,.5), 0 28px 50px rgba(0,0,0,.7);
        }
        .cs-glass::before { content:''; position:absolute; inset:0; border-radius:inherit; pointer-events:none;
          background: linear-gradient(120deg, rgba(255,255,255,.10), transparent 28%); }
        .cs-slab { transform-style: preserve-3d;
          transform: perspective(800px) translate3d(var(--px,0px), var(--py,0px), 0) rotateY(-26deg) rotateX(5deg) rotateZ(-5deg);
          transition: transform .5s cubic-bezier(.2,.8,.2,1);
          filter: drop-shadow(0 16px 18px rgba(0,0,0,.65)); }
        .cs-slab::after { content:''; position:absolute; top:2px; bottom:-2px; right:-9px; width:9px; background: var(--edge); transform: skewY(-38deg); transform-origin: left top; border-radius: 0 2px 2px 0; opacity:.95; }
        .cs-card:hover .cs-slab { transform: perspective(800px) translate3d(var(--px,0px), calc(var(--py,0px) - 10px), 36px) rotateY(-20deg) rotateX(3deg) rotateZ(-4deg) scale(1.04); }
        .cs-content { transform: translateZ(30px); }
        .cs-sheen { transform: translateX(-120%); animation: cs-sheen 6s ease-in-out infinite; }
        .cs-ring { animation: cs-ring 7s ease-in-out infinite; }
        .cs-orbit { animation: cs-spin 26s linear infinite; }
        .cs-orbit-r { animation: cs-spin 34s linear infinite reverse; }
        .cs-drift-a { animation: cs-float 9s ease-in-out infinite; }
        .cs-drift-b { animation: cs-float 11s ease-in-out -3s infinite; }
        .cs-spark { opacity: 0; animation: cs-spark 6s ease-in infinite; }
        .cs-title-sheen { background: linear-gradient(110deg,#a6823a,#e2b254 30%,#fff1c4 50%,#e2b254 70%,#a6823a); background-size: 220% 100%; -webkit-background-clip: text; background-clip: text; color: transparent; animation: cs-shine 6s linear infinite; }
        @keyframes cs-sheen { 0%,55% { transform: translateX(-120%) } 100% { transform: translateX(120%) } }
        @keyframes cs-ring  { 0%,100% { transform: rotate(-6deg) scale(1); opacity:.85 } 50% { transform: rotate(4deg) scale(1.05); opacity:1 } }
        @keyframes cs-spin  { to { transform: rotate(360deg) } }
        @keyframes cs-float { 0%,100% { transform: translateY(0) rotate(0) } 50% { transform: translateY(-12px) rotate(6deg) } }
        @keyframes cs-spark { 0% { transform: translateY(0) scale(.6); opacity:0 } 30% { opacity:1 } 100% { transform: translateY(-70px) scale(1.1); opacity:0 } }
        @keyframes cs-shine { to { background-position: -220% 0 } }
        @media (prefers-reduced-motion: reduce) {
          .cs-sheen,.cs-ring,.cs-orbit,.cs-orbit-r,.cs-drift-a,.cs-drift-b,.cs-spark,.cs-title-sheen { animation: none !important; }
          .cs-tilt { transform: none !important; }
        }
      `}),u.jsx(T2,{}),u.jsx(R2,{}),u.jsxs("div",{className:"relative mx-auto max-w-[1180px]",children:[u.jsx(qe,{children:u.jsxs("div",{className:"mx-auto mb-10 text-center sm:mb-14",children:[u.jsxs("div",{className:"mx-auto mb-4 flex items-center justify-center gap-3","aria-hidden":!0,children:[u.jsx("span",{className:"h-px w-16 bg-gradient-to-r from-transparent to-[#e2b254] sm:w-28"}),u.jsxs("svg",{viewBox:"0 0 48 48",className:"h-6 w-6",fill:"none",stroke:Rn,strokeWidth:"2",strokeLinejoin:"round",children:[u.jsx("path",{d:"M14 8h20l9 11-19 23L5 19z"}),u.jsx("path",{d:"M5 19h38M17 19l7 23 7-23"})]}),u.jsx("span",{className:"h-px w-16 bg-gradient-to-l from-transparent to-[#e2b254] sm:w-28"})]}),u.jsxs("h2",{id:"cs-title",className:"text-[clamp(34px,6vw,64px)] font-medium leading-[1.05] text-white",children:["Explore our ",u.jsx("span",{className:"cs-title-sheen",children:"collections"})]}),u.jsx("p",{className:"mx-auto mt-4 max-w-[620px] text-[15px] leading-relaxed text-white/65 sm:text-[17px]",children:"From luxurious marbles to timeless granites, we provide stones that define elegance and strength."})]})}),u.jsx("div",{className:"grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-6",children:uv.map((t,e)=>u.jsx(qe,{from:"zoom",delay:e*120,className:`${e<2?"lg:col-span-3":"lg:col-span-2"} ${e===4?"md:col-span-2 md:mx-auto md:w-1/2 lg:mx-0 lg:w-auto":""}`,children:u.jsx(A2,{item:t,index:e})},t.title))})]})]})}const N2=`
.sf-fold-wrap{perspective:1800px}
.sf-fold{transform-style:preserve-3d;transform:rotateX(5deg)}
.sf-pn{position:absolute;top:0;left:100%;width:var(--W);height:var(--H);transform-origin:0 50%;transform-style:preserve-3d;
  transition:transform 1.5s cubic-bezier(.65,0,.2,1);transform:rotateY(var(--c))}
.sf-fold.sf-open .sf-pn{transform:rotateY(var(--o))}
.sf-fold>.sf-pn.sf-root{left:0;transform:none!important}
.sf-pf,.sf-pb{position:absolute;inset:0;backface-visibility:hidden}
.sf-pf{background:linear-gradient(150deg,#1f1e1a,#121211);border:1px solid rgba(212,175,95,.25);border-left:2px solid #d4af5f;
  padding:calc(24px*var(--fs)) calc(16px*var(--fs));display:flex;flex-direction:column;justify-content:center;gap:8px;box-shadow:0 20px 40px rgba(0,0,0,.5)}
.sf-pf h3{font:600 calc(24px*var(--fs))/1.15 'Cormorant Garamond',serif;color:#f0d894;overflow-wrap:anywhere}
.sf-pf p{font-size:calc(14.5px*var(--fs));line-height:1.5;color:#a7a193}
.sf-pn:not(.sf-root)::before{content:"";position:absolute;inset:0;pointer-events:none;z-index:3;backface-visibility:hidden;background:linear-gradient(90deg,rgba(0,0,0,.35),transparent 30%)}
.sf-pb{transform:rotateY(180deg);background-size:cover;border:1px solid rgba(212,175,95,.25);box-shadow:inset 0 0 60px rgba(0,0,0,.6)}
.sf-fold:not(.sf-open)>.sf-pn.sf-root .sf-pf{border-color:rgba(212,175,95,.55);box-shadow:0 0 30px rgba(212,175,95,.15),0 20px 40px rgba(0,0,0,.5);cursor:pointer}
.sf-cta{position:relative;overflow:hidden;background:linear-gradient(135deg,#f3dc9b 0%,#d2ad5a 45%,#a9812f 100%);box-shadow:0 5px 0 #6f5116,0 14px 26px rgba(0,0,0,.55);transition:transform .25s,box-shadow .25s}
.sf-cta::after{content:"";position:absolute;inset:0;background:linear-gradient(110deg,transparent 35%,rgba(255,255,255,.55) 50%,transparent 65%);transform:translateX(-120%)}
.sf-cta:hover{transform:translateY(-2px);box-shadow:0 7px 0 #6f5116,0 22px 34px rgba(0,0,0,.6),0 0 34px rgba(212,175,95,.25)}
.sf-cta:hover::after{transform:translateX(120%);transition:transform .8s}
.sf-cta:active{transform:translateY(5px);box-shadow:0 0 0 #6f5116,0 6px 12px rgba(0,0,0,.6)}
.sf-rise{opacity:0;transform:translateY(22px);transition:opacity .9s ease,transform 1s cubic-bezier(.2,.9,.25,1);transition-delay:calc(var(--i)*.12s)}
.sf-in .sf-rise{opacity:1;transform:none}
@media(prefers-reduced-motion:reduce){.sf-pn,.sf-rise{transition:none!important}.sf-rise{opacity:1;transform:none}}
`,L2=[{base:"#ece7dd",layers:[{freq:"0.006 0.016",oct:5,seed:7,c:[.55,.5,.42],table:"0 0 0 0 .1 .55 .1 0 0 0 0",op:.9},{freq:"0.012 0.03",oct:5,seed:19,c:[.7,.64,.52],table:"0 0 0 0 0 .4 0 0 0 0",op:.55}]},{base:"#4a4744",layers:[{freq:"0.55",oct:2,seed:4,c:[.95,.93,.88],table:"0 0 0 0 0 .8 .8",op:.7},{freq:"0.9",oct:1,seed:11,c:[.1,.1,.1],table:"0 0 0 .9 .9 0",op:.8}]},{base:"#5f6b5c",layers:[{freq:"0.002 0.09",oct:3,seed:5,c:[.15,.2,.15],table:"0 .5 0 .5 0 .4 0",op:.6},{freq:"0.6",oct:2,seed:8,c:[.8,.85,.75],table:"0 0 0 0 .3 .3",op:.18}]},{base:"#f3f1ec",layers:[{freq:"0.7",oct:1,seed:9,c:[.6,.62,.66],table:"0 0 0 0 0 .9 .9",op:.55},{freq:"0.02",oct:3,seed:6,c:[.85,.83,.78],table:"0 .3 .6 .3 0",op:.5}]},{base:"#2c3036",layers:[{freq:"0.004 0.05",oct:3,seed:12,c:[.55,.6,.68],table:"0 0 .3 .4 .3 0 0",op:.35},{freq:"0.5",oct:2,seed:14,c:[.05,.05,.07],table:"0 0 .6 .6 0",op:.5}]}];function D2(t){const i=t.layers.map((r,s)=>`<filter id="f${s}" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="${r.freq}" numOctaves="${r.oct}" seed="${r.seed}"/><feColorMatrix type="matrix" values="0 0 0 0 ${r.c[0]}  0 0 0 0 ${r.c[1]}  0 0 0 0 ${r.c[2]}  1 0 0 0 0"/><feComponentTransfer><feFuncA type="table" tableValues="${r.table}"/></feComponentTransfer></filter><rect width="400" height="560" filter="url(#f${s})" opacity="${r.op}"/>`).join("");return`url("data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="560"><rect width="400" height="560" fill="${t.base}"/>${i}</svg>`)}")`}const $o=[["Requirement-based sourcing","Tell us your preferred stone category, colour, finish, quantity and application."],["Multiple stone categories","We deal in marbles, granites, Kota stones, quartz and Kadapa stones."],["Project-specific assistance","We help you identify suitable material options for your requirements."],["Sourcing across India","Materials can be sourced from different parts of India depending on the stone and specification."]],I2=[0,176,-176,176],U2=[0,-18,36,-36],lg=(t,e,n)=>Math.max(e,Math.min(n,t));function F2(){const t=ae.useRef(null),e=ae.useRef(null),[n,i]=ae.useState(!1),[r,s]=ae.useState(!1),[a,o]=ae.useState(170),l=ae.useRef(0),c=ae.useMemo(()=>L2.map(D2),[]);ae.useEffect(()=>{const m=new IntersectionObserver(([_])=>{_.isIntersecting&&(i(!0),m.disconnect())},{threshold:.3});return m.observe(t.current),()=>m.disconnect()},[]),ae.useEffect(()=>{const m=e.current;if(!m)return;const _=()=>{const g=m.clientWidth;g&&o(Math.round(lg(g/3.95,120,185)))};_();const S=new ResizeObserver(_);return S.observe(m),()=>S.disconnect()},[]),ae.useEffect(()=>()=>clearTimeout(l.current),[]);const f=Math.round(a*1.88),p=lg(a/170,.78,1.08),d=m=>u.jsxs("div",{className:"sf-pn"+(m?"":" sf-root"),style:{"--c":I2[m]+"deg","--o":U2[m]+"deg"},children:[u.jsxs("div",{className:"sf-pf",children:[u.jsx("h3",{children:$o[m][0]}),u.jsx("p",{children:$o[m][1]})]}),u.jsx("div",{className:"sf-pb",style:{backgroundImage:c[(m+1)%5]}}),m<$o.length-1&&d(m+1)]},m);return u.jsxs("section",{ref:t,className:"relative overflow-hidden bg-bk "+(n?"sf-in":""),"aria-labelledby":"sf-title",children:[u.jsx("style",{children:N2}),u.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"radial-gradient(55% 80% at 62% 50%,rgba(212,175,95,.10),transparent 70%)"}}),u.jsxs("div",{className:"relative z-[2] mx-auto max-w-[1585px] px-6 sm:px-10 min-[900px]:px-12 xl:px-24 py-16 sm:py-20 min-[900px]:py-24 grid min-[900px]:grid-cols-[.85fr_1.15fr] gap-10 min-[900px]:gap-12 items-center",children:[u.jsxs("div",{children:[u.jsx("p",{className:"sf-rise text-gd tracking-[.34em] text-[11px] sm:text-[13px] uppercase mb-3",style:{"--i":0},children:"Our sourcing capabilities"}),u.jsx("h2",{id:"sf-title",className:"sf-rise font-serif font-medium text-[clamp(38px,4.8vw,70px)] leading-[1.04] mb-6 bg-gradient-to-br from-[#f3dc9b] via-[#d2ad5a] to-[#a9812f] bg-clip-text text-transparent",style:{"--i":1},children:"The right stone. Sourced for your requirements."}),u.jsx("p",{className:"sf-rise text-sg text-[17px] sm:text-[19px] leading-[1.75] max-w-[560px] mb-9",style:{"--i":2},children:"We source natural stones from different parts of India based on customer and project requirements."}),u.jsx("div",{className:"sf-rise",style:{"--i":3},children:u.jsx("a",{href:"#sourcing",className:"sf-cta inline-block px-8 py-[19px] text-[15px] font-medium tracking-[.05em] text-[#1a1408]",children:"Discuss your requirements"})})]}),u.jsxs("div",{className:"hidden min-[900px]:block",children:[u.jsx("div",{ref:e,className:"sf-fold-wrap flex items-center justify-start",style:{height:f+40,"--W":a+"px","--H":f+"px","--fs":p},onPointerLeave:m=>{m.pointerType!=="touch"&&(l.current=window.setTimeout(()=>s(!1),250))},onPointerEnter:()=>clearTimeout(l.current),children:u.jsx("div",{className:"sf-fold relative"+(r?" sf-open":""),style:{width:a,height:f},onPointerEnter:m=>{m.pointerType!=="touch"&&(clearTimeout(l.current),s(!0))},onClick:()=>{matchMedia("(hover:none)").matches&&s(m=>!m)},role:"button",tabIndex:0,"aria-expanded":r,"aria-label":"Open sourcing capabilities brochure",onKeyDown:m=>{(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),s(_=>!_))},children:d(0)})}),u.jsx("p",{className:"mt-2 text-[11px] tracking-[.22em] uppercase text-mg",children:r?"Move away to fold":"Hover the first panel"})]}),u.jsx("div",{className:"min-[900px]:hidden",children:$o.map(([m,_],S)=>u.jsxs("div",{className:"sf-rise border-l-2 border-gd pl-5 py-0.5 mb-6",style:{"--i":S+2},children:[u.jsx("h3",{className:"font-serif font-semibold text-[26px] sm:text-[28px] leading-tight text-[#f0d894]",children:m}),u.jsx("p",{className:"text-sg text-[16px] sm:text-[17px] leading-relaxed",children:_})]},m))})]})]})}const Mf={"Hindus Construction":["hcc","#fefefe"],"Spectrum Engineers":["spectrum","#ffffff"],"Ellora Builders":["ellora","#d6def1"],"Cauvery Build Tech":["cauvery","#fefefe"],"Sanjana Builders":["sanjana","#fefefe"],"TVS Emerald Limited":["tvs-emerald","#ffffff"],"Teemage Precas In":["teemage","#d3d3d3"],"P V K Construction Pvt Ltd":["pvk","#ffffff"],"Marbo Furnishing LLP":["marbo","#000000"],"Sabarie Construction Pvt Ltd":["sabari","#ffffff"]},cg=["Sattva Engineering Construction Pvt Ltd","Velu Builders Pvt Ltd","Hindus Construction","Spectrum Engineers","Ellora Builders","Moghan Builders","Cauvery Build Tech","Joshuva Builders","Sanjana Builders","Elango Builders","Saravana Builders","Santhosh Construction","TVS Emerald Limited","Teemage Builders Pvt Ltd","Teemage Precas In","P V K Construction Pvt Ltd","Marbo Furnishing LLP","Sabarie Construction Pvt Ltd"],ug=t=>{const e=Mf[t];return e?{name:t,logo:`/clients/${e[0]}.jpg`,bg:e[1]}:{name:t}},k2=[...cg.filter(t=>Mf[t]).map(ug),...cg.filter(t=>!Mf[t]).map(ug)],dv=[{name:"IIT Hyderabad",city:"Hyderabad",kind:"Educational institution",via:"Teemage",tint:"#4a4132"},{name:"NIT Karaikal",city:"Karaikal",kind:"Educational institution",via:"Teemage",tint:"#3a3f48"},{name:"Vijayawada Airport",city:"Vijayawada",kind:"Airport",via:"Teemage",tint:"#4d4a44"},{name:"Chennai Silks",city:"Chennai",kind:"Commercial",via:"Teemage",tint:"#503438"},{name:"TVS Emerald, Anna Nagar",city:"Chennai",kind:"Residential",via:"TVS",tint:"#5a4a30"},{name:"TVS Emerald, Kovilambakkam",city:"Chennai",kind:"Residential",via:"TVS",tint:"#3b4a45"}],O2=`
@keyframes lp-glow{0%,100%{filter:drop-shadow(0 0 5px var(--gc))}50%{filter:drop-shadow(0 0 16px var(--gc))}}
@keyframes lp-beam{0%{transform:translateX(-120%)}55%,100%{transform:translateX(420%)}}
@keyframes lp-floor{0%,100%{opacity:.4}50%{opacity:1}}
@keyframes lp-twinkle{0%,100%{transform:scale(0) rotate(0)}50%{transform:scale(1) rotate(90deg)}}
@keyframes lp-enter{from{opacity:0;transform:translate3d(120px,30px,-300px) rotateY(-70deg)}to{opacity:1;transform:none}}
@keyframes lp-fade{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
.lp-stage{perspective:1700px;perspective-origin:50% 45%}
.lp-rig{transform-style:preserve-3d;transform:rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))}
.lp-list{transform-style:preserve-3d}
.lp-item{--gc:rgba(233,178,74,.55);transform-style:preserve-3d;opacity:0}
.lp-item[data-c="e"]{--gc:rgba(70,225,160,.5)}
.lp-in .lp-item{opacity:1;animation:lp-enter 1.4s cubic-bezier(.16,.84,.24,1) both;animation-delay:calc(.3s + var(--i)*.14s)}
.lp-fade{opacity:0}
.lp-in .lp-fade{animation:lp-fade 1s .1s cubic-bezier(.2,.8,.2,1) both}
.lp-skew{transform:skewX(-13deg);transition:transform .7s cubic-bezier(.2,.8,.2,1),filter .5s;animation:lp-glow 4.5s ease-in-out infinite;animation-delay:calc(var(--i)*.5s)}
.lp-unskew{transform:skewX(13deg)}
@media(min-width:1024px){
  .lp-item{transform:translateZ(var(--z,0px))}
  .lp-in .lp-item{animation-name:lp-enter}
  .lp-item:hover .lp-skew,.lp-item:focus-within .lp-skew{transform:skewX(-13deg) translateZ(50px) scale(1.045)}
  .lp-list:has(.lp-item:hover) .lp-item:not(:hover) .lp-skew{filter:brightness(.55)}
}
.lp-beam{position:absolute;inset:0;overflow:hidden;pointer-events:none;mix-blend-mode:screen}
.lp-beam:before{content:"";position:absolute;top:0;bottom:0;width:22%;background:linear-gradient(90deg,transparent,rgba(255,236,190,.4),transparent);animation:lp-beam 8s ease-in-out infinite;animation-delay:calc(3s + var(--i)*.4s)}
.lp-spot{background:radial-gradient(40% 30% at var(--mx,50%) var(--my,35%),rgba(255,255,255,.55),transparent 70%);opacity:0;transition:opacity .4s;mix-blend-mode:overlay}
.lp-skew:hover .lp-spot{opacity:1}
.lp-spark{position:absolute;width:26px;height:26px;transform:scale(0);background:radial-gradient(circle,#fff 0 8%,rgba(255,225,150,.9) 12%,transparent 60%);clip-path:polygon(50% 0,58% 42%,100% 50%,58% 58%,50% 100%,42% 58%,0 50%,42% 42%);animation:lp-twinkle 3.2s ease-in-out infinite}
@media(prefers-reduced-motion:reduce){*,.lp-skew,.lp-beam:before{animation:none!important;transition:none!important}.lp-item,.lp-fade{opacity:1!important}.lp-rig{transform:none!important}}
`;function z2(){const t=ae.useRef(null);return ae.useEffect(()=>{const e=t.current,n=e.getContext("2d");if(!n||matchMedia("(prefers-reduced-motion: reduce)").matches)return;let i=0,r=0,s=0,a=!0;const o=Array.from({length:50},()=>({x:Math.random(),y:Math.random(),r:Math.random()*1.6+.4,s:Math.random()*4e-4+8e-5,a:Math.random(),e:Math.random()<.35})),l=()=>{const d=Math.min(devicePixelRatio||1,2);i=e.clientWidth,r=e.clientHeight,e.width=i*d,e.height=r*d,n.setTransform(d,0,0,d,0,0)};l();const c=new ResizeObserver(l);c.observe(e);const f=new IntersectionObserver(([d])=>{a=d.isIntersecting},{threshold:0});f.observe(e);const p=()=>{if(s=requestAnimationFrame(p),!!a){n.clearRect(0,0,i,r);for(const d of o){d.y-=d.s*16,d.a+=.01,d.y<-.02&&(d.y=1.02,d.x=Math.random());const m=.15+.45*Math.abs(Math.sin(d.a));n.beginPath(),n.fillStyle=d.e?`rgba(90,240,175,${m*.8})`:`rgba(250,218,150,${m})`,n.arc(d.x*i,d.y*r,d.r,0,6.283),n.fill()}}};return p(),()=>{cancelAnimationFrame(s),c.disconnect(),f.disconnect()}},[]),u.jsx("canvas",{ref:t,className:"absolute inset-0 w-full h-full pointer-events-none","aria-hidden":!0})}const B2=[20,34,48,34,20],dg=["g","e","g","e","e"];function j2(){const t=ae.useRef(null),e=ae.useRef(null),n=dv.slice(0,5);ae.useEffect(()=>{const r=t.current,s=new IntersectionObserver(([x])=>{x.isIntersecting&&(r.classList.add("lp-in"),s.disconnect())},{threshold:.12});s.observe(r);const a=matchMedia("(prefers-reduced-motion: reduce)").matches;let o=!1,l=0,c=0,f=0,p=0,d=0,m=!0,_=0;const S=new IntersectionObserver(([x])=>{m=x.isIntersecting});S.observe(r);const g=()=>{var x,M;d=requestAnimationFrame(g),!(!m||a||innerWidth<1024)&&(_+=.016,o||(l=Math.sin(_*.45)*.55,c=Math.cos(_*.33)*.35),f+=(l-f)*.06,p+=(c-p)*.06,(x=e.current)==null||x.style.setProperty("--ry",(f*7).toFixed(2)+"deg"),(M=e.current)==null||M.style.setProperty("--rx",(-p*4).toFixed(2)+"deg"))};g();const h=x=>{if(x.pointerType!=="mouse")return;const M=r.getBoundingClientRect();l=((x.clientX-M.left)/M.width-.5)*2,c=((x.clientY-M.top)/M.height-.5)*2,o=!0},v=()=>{o=!1};return r.addEventListener("pointermove",h),r.addEventListener("pointerleave",v),()=>{cancelAnimationFrame(d),s.disconnect(),S.disconnect(),r.removeEventListener("pointermove",h),r.removeEventListener("pointerleave",v)}},[]);const i=r=>{const s=r.currentTarget.getBoundingClientRect();r.currentTarget.style.setProperty("--mx",(r.clientX-s.left)/s.width*100+"%"),r.currentTarget.style.setProperty("--my",(r.clientY-s.top)/s.height*100+"%")};return u.jsxs("section",{ref:t,className:"relative overflow-hidden bg-black py-14 sm:py-20 lg:py-0","aria-labelledby":"lp-title",children:[u.jsx("style",{children:O2}),u.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"radial-gradient(60% 70% at 78% 40%,rgba(20,90,60,.22),transparent 70%),radial-gradient(40% 50% at 10% 20%,rgba(197,160,82,.10),transparent 70%)"}}),u.jsx(z2,{}),u.jsx("span",{className:"lp-spark hidden sm:block left-[4%] top-[8%]"}),u.jsx("span",{className:"lp-spark hidden sm:block right-[3%] bottom-[22%]",style:{animationDelay:"1.2s"}}),u.jsxs("div",{className:"lp-stage relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10 lg:min-h-[640px] xl:min-h-[700px] lg:grid lg:grid-cols-[minmax(260px,31%)_1fr] lg:items-center lg:gap-6",children:[u.jsxs("div",{className:"lp-fade mb-10 lg:mb-0 text-center lg:text-left",children:[u.jsxs("div",{className:"flex items-center gap-3 justify-center lg:justify-start mb-6","aria-hidden":!0,children:[u.jsx("svg",{width:"38",height:"32",viewBox:"0 0 24 20",fill:"none",stroke:"#E9B24A",strokeWidth:"1.1",strokeLinejoin:"round",children:u.jsx("path",{d:"M6 1h12l5 6-11 12L1 7z M1 7h22 M8 1l-2 6 6 12 6-12-2-6 M10 1l2 6 2-6"})}),u.jsx("span",{className:"h-px w-24 bg-gradient-to-r from-gd to-transparent"})]}),u.jsxs("h2",{id:"lp-title",className:"font-serif font-semibold text-[clamp(34px,4.2vw,60px)] leading-[1.08] text-wh",children:["Stone that",u.jsx("br",{}),"becomes part",u.jsx("br",{}),"of ",u.jsx("span",{className:"bg-gradient-to-r from-[#e8b95e] via-[#f6d68e] to-[#e2a947] bg-clip-text text-transparent",children:"a legacy"})]}),u.jsx("p",{className:"mt-5 text-sg font-light text-[15px] sm:text-base leading-relaxed max-w-sm mx-auto lg:mx-0",children:"Notable projects where we have supplied natural stones."}),u.jsxs("a",{href:"#projects",className:"group mt-8 inline-flex items-center gap-2 rounded-full border border-gd/70 px-7 py-3.5 text-[#f8efd9] text-sm tracking-wide shadow-[0_0_18px_rgba(233,178,74,.25)] hover:bg-gd/15 hover:shadow-[0_0_34px_rgba(233,178,74,.7)] transition",children:["View all projects ",u.jsx("span",{className:"text-[#f0c46c] transition-transform group-hover:translate-x-1.5",children:"→"})]})]}),u.jsxs("div",{ref:e,className:"lp-rig relative",children:[u.jsx("ul",{className:"lp-list flex lg:grid lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-3 xl:gap-4 overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none -mx-5 px-8 sm:-mx-8 sm:px-10 lg:mx-0 lg:px-0 pb-8 lg:pb-0 list-none m-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",children:n.map((r,s)=>u.jsx("li",{"data-c":dg[s],className:"lp-item snap-center shrink-0 w-[62%] xs:w-[52%] sm:w-[34%] md:w-[28%] lg:w-auto",style:{"--i":s,"--z":B2[s]+"px"},children:u.jsx("a",{href:"#projects",onPointerMove:i,"aria-label":`${r.name}, ${r.city}`,className:"block focus:outline-none",children:u.jsxs("div",{className:"lp-skew relative aspect-[10/19] lg:aspect-[10/20] rounded-[10px] overflow-hidden border border-[var(--gc)] bg-[#06100c]",style:{boxShadow:"inset 0 0 30px rgba(0,0,0,.8)"},children:[u.jsx("div",{className:"absolute inset-0",style:{background:`linear-gradient(165deg,${dg[s]==="e"?"#0e3a2b":"#3a2c12"} 0%,#050807 45%,#050807 100%)`}}),u.jsx("div",{className:"absolute inset-0 opacity-40 mix-blend-screen",style:{background:"repeating-linear-gradient(118deg,transparent 0 26px,rgba(214,188,131,.35) 27px,transparent 29px 71px)"}}),u.jsxs("div",{className:"absolute inset-x-0 top-[9%] h-[50%] overflow-hidden",children:[u.jsx("div",{className:"lp-unskew absolute inset-y-0 -inset-x-[14%]",children:u.jsx("img",{src:`/legacy/proj${s}.webp`,alt:`${r.name}, ${r.city}`,loading:"lazy",className:"h-full w-full object-cover object-center"})}),u.jsx("div",{className:"absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#050807] to-transparent"})]}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"}),u.jsx("div",{className:"lp-beam",style:{"--i":s}}),u.jsx("div",{className:"lp-spot absolute inset-0"}),u.jsxs("div",{className:"lp-unskew absolute inset-x-0 bottom-0 px-3 pb-[14%] text-center",children:[u.jsx("small",{className:"block text-[9px] sm:text-[10px] tracking-[.2em] uppercase text-gd/90",children:r.kind}),u.jsx("h3",{className:"font-serif font-medium text-[clamp(17px,1.9vw,26px)] leading-tight text-[#f7f3ea] mt-1.5",children:r.name}),u.jsx("p",{className:"text-sg text-xs mt-1",children:r.city})]})]})})},r.name))}),u.jsx("div",{className:"hidden lg:block absolute left-[8%] right-0 -bottom-6 h-10 rounded-[50%] bg-gd/25 blur-2xl pointer-events-none",style:{animation:"lp-floor 4s ease-in-out infinite"},"aria-hidden":!0})]})]})]})}const Nr=1983,Ts=793,Iu=1800,Mi=(t,e="webp")=>`/legacy/${t}.${e}`,H2={sculpture:[517,77,1244,764],rockTL:[0,0,239,219],rockTR:[1742,0,1983,154],rockBR:[1457,597,1983,793],card0:[1109,157,1502,308],card1:[1517,157,1912,308],card2:[1109,321,1502,473],card3:[1517,321,1912,473],card4:[1109,484,1502,637],card5:[1517,484,1912,637],cta:[97,595,436,702]},fv=[{id:"card0",label:"Established history",href:"#about"},{id:"card1",label:"Natural stone expertise",href:"#collection"},{id:"card2",label:"Product diversity",href:"#collection"},{id:"card3",label:"Sourcing capabilities",href:"#sourcing"},{id:"card4",label:"Residential projects",href:"#projects"},{id:"card5",label:"Commercial projects",href:"#projects"}],hv="#about";function Uh(t,e,n=e){const[i,r,s,a]=H2[t],o=s-i,l=a-r;return{left:`${i/Nr*100}%`,top:`${r/Ts*100}%`,width:`${o/Nr*100}%`,height:`${l/Ts*100}%`,transformOrigin:`${(Nr/2-i)/o*100}% ${(Ts/2-r)/l*100}%`,"--z0":e,"--zh":n}}const V2=Array.from({length:26},(t,e)=>({left:12+e*41%76,top:25+e*29%62,size:2+e%3,delay:e*.37%6,dur:4+e%5}));function qo({id:t,z:e,children:n,className:i=""}){return u.jsx("div",{className:`ls-plane pointer-events-none ${i}`,style:Uh(t,e),children:u.jsxs("div",{className:"ls-float h-full w-full",children:[u.jsx("img",{src:Mi(t),alt:"",draggable:!1,className:"block h-full w-full select-none"}),n]})})}function G2({id:t,label:e,href:n}){const i=s=>{if(s.pointerType!=="mouse")return;const a=s.currentTarget,o=a.getBoundingClientRect(),l=(s.clientX-o.left)/o.width,c=(s.clientY-o.top)/o.height;a.style.setProperty("--crx",`${(.5-c)*14}deg`),a.style.setProperty("--cry",`${(l-.5)*18}deg`),a.style.setProperty("--mx",`${l*100}%`),a.style.setProperty("--my",`${c*100}%`)},r=s=>{s.currentTarget.style.setProperty("--crx","0deg"),s.currentTarget.style.setProperty("--cry","0deg")};return u.jsx("a",{href:n,"aria-label":e,onPointerMove:i,onPointerLeave:r,className:"ls-plane ls-card group outline-none",style:Uh(t,30,110),children:u.jsxs("div",{className:"ls-tilt relative h-full w-full",children:[u.jsx("img",{src:Mi(t),alt:"",draggable:!1,className:"block h-full w-full select-none"}),u.jsx("span",{"aria-hidden":!0,className:"pointer-events-none absolute inset-[6%] rounded-[8%] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100",style:{background:"radial-gradient(40% 70% at var(--mx,50%) var(--my,50%), rgba(226,178,84,.28), transparent 70%)"}}),u.jsx("span",{"aria-hidden":!0,className:"pointer-events-none absolute inset-[3.2%] rounded-[8%] opacity-0 shadow-[0_0_28px_rgba(226,178,84,.55),inset_0_0_0_1.5px_rgba(226,178,84,.9)] transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"})]})})}function W2(){return u.jsx("a",{href:hv,"aria-label":"Discover our story",className:"ls-plane ls-card group outline-none",style:Uh("cta",40,100),children:u.jsxs("div",{className:"ls-tilt relative h-full w-full",children:[u.jsx("img",{src:Mi("cta"),alt:"",draggable:!1,className:"block h-full w-full select-none"}),u.jsx("span",{"aria-hidden":!0,className:"pointer-events-none absolute inset-[4%] rounded-full opacity-0 shadow-[0_0_30px_rgba(47,227,143,.65),inset_0_0_0_1.5px_rgba(226,178,84,.95)] transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"})]})})}function X2(){const t=ae.useRef(null),e=i=>{if(i.pointerType!=="mouse")return;const r=t.current;if(!r)return;const s=r.getBoundingClientRect(),a=(i.clientX-s.left)/s.width-.5,o=(i.clientY-s.top)/s.height-.5;r.style.setProperty("--rx",`${-o*7}deg`),r.style.setProperty("--ry",`${a*10}deg`)},n=()=>{var i,r;(i=t.current)==null||i.style.setProperty("--rx","0deg"),(r=t.current)==null||r.style.setProperty("--ry","0deg")};return u.jsx("div",{ref:t,onPointerMove:e,onPointerLeave:n,className:"ls-root ls-fade relative hidden w-full select-none overflow-hidden bg-black lg:block",style:{aspectRatio:`${Nr} / ${Ts}`},children:u.jsx("div",{className:"ls-persp absolute inset-0",children:u.jsx("div",{className:"ls-sway absolute inset-0",children:u.jsxs("div",{className:"ls-stage absolute inset-0",children:[u.jsx("img",{src:Mi("base","jpg"),alt:"A legacy built on stone. Joys Marbles & Granites deals in marbles, granites, Kota stones, quartz and Kadapa stones, sourced from across India.",draggable:!1,className:"absolute inset-0 h-full w-full"}),[0,2.2].map(i=>u.jsx("span",{"aria-hidden":!0,className:"ls-ripple pointer-events-none absolute rounded-[50%] border border-amber-300/70 shadow-[0_0_18px_rgba(226,178,84,.5)]",style:{left:`${370/Nr*100}%`,top:`${709/Ts*100}%`,width:`${1040/Nr*100}%`,height:`${52/Ts*100}%`,animationDelay:`${i}s`}},i)),u.jsx(qo,{id:"rockTL",z:140,className:"ls-drift-a"}),u.jsx(qo,{id:"rockTR",z:110,className:"ls-drift-b"}),u.jsx(qo,{id:"rockBR",z:170,className:"ls-drift-a"}),u.jsxs(qo,{id:"sculpture",z:75,className:"ls-sculpt",children:[u.jsx("img",{src:Mi("sculpture"),alt:"","aria-hidden":!0,draggable:!1,className:"ls-pulse pointer-events-none absolute inset-0 h-full w-full",style:{filter:"brightness(1.7) saturate(1.2)"}}),u.jsx("img",{src:Mi("sculpture"),alt:"","aria-hidden":!0,draggable:!1,className:"ls-sweep pointer-events-none absolute inset-0 h-full w-full"}),V2.map((i,r)=>u.jsx("span",{"aria-hidden":!0,className:"ls-spark absolute rounded-full bg-amber-300 shadow-[0_0_8px_#e2b254]",style:{left:`${i.left}%`,top:`${i.top}%`,width:i.size,height:i.size,animationDelay:`${i.delay}s`,animationDuration:`${i.dur}s`}},r))]}),fv.map(i=>u.jsx(G2,{id:i.id,label:i.label,href:i.href},i.id)),u.jsx(W2,{})]})})})})}function $2(){return u.jsxs("div",{className:"relative overflow-hidden bg-black px-[5vw] py-14 sm:py-16 lg:hidden",children:[u.jsx("div",{"aria-hidden":!0,className:"pointer-events-none absolute inset-0",style:{background:"radial-gradient(60% 40% at 80% 35%, rgba(47,227,143,.12), transparent 70%), radial-gradient(50% 35% at 15% 90%, rgba(226,178,84,.12), transparent 70%)"}}),u.jsxs("div",{className:"relative mx-auto grid max-w-[1000px] items-center gap-10 md:grid-cols-2 md:gap-8",children:[u.jsxs("div",{children:[u.jsxs("span",{className:"inline-flex items-center gap-2.5 rounded-full border border-[#e2b254]/40 bg-gradient-to-r from-[#e2b254]/10 to-transparent px-4 py-1.5 text-[11px] font-medium uppercase tracking-[.28em] text-[#e2b254]",children:[u.jsx("span",{className:"h-2 w-2 rotate-45 bg-[#e2b254]"}),"Our legacy"]}),u.jsxs("h2",{className:"mt-5 text-[clamp(38px,9vw,64px)] font-medium leading-[1.02] text-white",children:["A legacy built",u.jsx("br",{}),"on ",u.jsx("span",{className:"bg-gradient-to-r from-[#1fbf78] to-[#52f0a8] bg-clip-text text-transparent",children:"stone."})]}),u.jsxs("div",{className:"mt-6 space-y-4 border-l-2 border-[#2fe38f] pl-4 text-[15px] leading-relaxed text-white/85 sm:text-base",children:[u.jsx("p",{children:"Joys Marbles & Granites has built its presence in the natural stone trading industry through years of experience, product knowledge and customer relationships."}),u.jsx("p",{children:"We deal in marbles, granites, Kota stones, quartz and Kadapa stones, and source materials from across India to suit each project."})]}),u.jsx("a",{href:hv,"aria-label":"Discover our story",className:"mt-8 inline-block transition hover:-translate-y-0.5 hover:drop-shadow-[0_0_18px_rgba(47,227,143,.5)] active:scale-[.98]",children:u.jsx("img",{src:Mi("cta"),alt:"",draggable:!1,className:"block h-auto w-[230px] sm:w-[260px]"})})]}),u.jsx("div",{className:"relative mx-auto w-full max-w-[420px] md:max-w-none",children:u.jsx("img",{src:Mi("sculpture"),alt:"Black, white and green marble slabs encircled by a golden ring on a rock",draggable:!1,className:"ls-float-m block h-auto w-full select-none",loading:"lazy"})})]}),u.jsx("ul",{className:"relative mx-auto mt-10 grid max-w-[1000px] grid-cols-1 gap-3 xs:grid-cols-2 md:grid-cols-3 md:gap-4",children:fv.map(t=>u.jsx("li",{children:u.jsx("a",{href:t.href,"aria-label":t.label,className:"group block transition duration-300 hover:-translate-y-1 hover:drop-shadow-[0_0_20px_rgba(226,178,84,.45)] active:scale-[.98]",children:u.jsx("img",{src:Mi(t.id),alt:"",draggable:!1,className:"block h-auto w-full select-none",loading:"lazy"})})},t.id))}),u.jsx("style",{children:`
        .ls-float-m { animation: ls-float 7s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .ls-float-m { animation: none !important; } }
      `})]})}function q2(){return u.jsxs("section",{"aria-label":"Our legacy",className:"w-full bg-black",children:[u.jsx("style",{children:`
        .ls-root { --u: ${100/Nr}cqw; container-type: inline-size; }
        .ls-persp { perspective: calc(${Iu} * var(--u)); perspective-origin: 50% 50%; }
        .ls-stage { transform-style: preserve-3d; transform: rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)); transition: transform .35s ease-out; }
        .ls-sway { transform-style: preserve-3d; animation: ls-sway 16s ease-in-out infinite; }
        .ls-plane { position: absolute; transform-style: preserve-3d; --z: var(--z0);
          transform: translateZ(calc(var(--z) * var(--u))) scale(calc((${Iu} - var(--z)) / ${Iu}));
          transition: transform .5s cubic-bezier(.2,.8,.2,1); }
        .ls-card:hover, .ls-card:focus-visible { --z: var(--zh); }
        .ls-tilt { transform-style: preserve-3d; transform: rotateX(var(--crx,0deg)) rotateY(var(--cry,0deg)); transition: transform .2s ease-out; }
        .ls-float { transform-style: preserve-3d; }
        .ls-sculpt .ls-float { animation: ls-float 7s ease-in-out infinite; }
        .ls-pulse { animation: ls-pulse 5s ease-in-out infinite; }
        .ls-sweep {
          filter: brightness(2.1) contrast(1.05);
          -webkit-mask-image: linear-gradient(105deg, transparent 42%, #000 50%, transparent 58%);
                  mask-image: linear-gradient(105deg, transparent 42%, #000 50%, transparent 58%);
          -webkit-mask-size: 300% 100%; mask-size: 300% 100%;
          animation: ls-sweep 8s ease-in-out infinite;
        }
        .ls-spark { animation: ls-spark 5s ease-in infinite; opacity: 0; }
        .ls-ripple { animation: ls-ripple 6s ease-out infinite; }
        .ls-drift-a .ls-float { animation: ls-float 9s ease-in-out infinite; }
        .ls-drift-b .ls-float { animation: ls-float 11s ease-in-out -3s infinite; }
        .ls-fade { animation: ls-fade 1s ease-out both; }
        @keyframes ls-sway   { 0%,100% { transform: rotateY(-1.6deg) } 50% { transform: rotateY(1.6deg) } }
        @keyframes ls-float  { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-6px) } }
        @keyframes ls-pulse  { 0%,100% { opacity: 0 } 50% { opacity: .55 } }
        @keyframes ls-sweep  { 0% { -webkit-mask-position: 130% 0; mask-position: 130% 0 } 60%,100% { -webkit-mask-position: -30% 0; mask-position: -30% 0 } }
        @keyframes ls-spark  { 0% { transform: translateY(0) scale(.6); opacity: 0 } 30% { opacity: 1 } 100% { transform: translateY(-80px) scale(1.1); opacity: 0 } }
        @keyframes ls-ripple { 0% { transform: scale(.55); opacity: .75 } 100% { transform: scale(1.15); opacity: 0 } }
        @keyframes ls-fade   { from { opacity: 0; transform: scale(1.015) } to { opacity: 1; transform: none } }
        @media (prefers-reduced-motion: reduce) {
          .ls-sway,.ls-sculpt .ls-float,.ls-pulse,.ls-sweep,.ls-spark,.ls-ripple,.ls-drift-a .ls-float,.ls-drift-b .ls-float,.ls-fade { animation: none !important; }
          .ls-stage { transform: none !important; }
        }
      `}),u.jsx(X2,{}),u.jsx($2,{})]})}const Y2=[[/black/,"#2a2a2d","#0a0a0c"],[/green/,"#6f8f78","#24382f"],[/red|ruby/,"#a8322f","#4a0e10"],[/pink|flamingo/,"#e8b6b0","#a8706c"],[/blue/,"#6f86a3","#2b3a52"],[/yellow|golden/,"#e5c76b","#a8832f"],[/brown|tan|ivory|cheetha/,"#9a6a45","#3d2416"],[/grey|silver|steel/,"#aab0b3","#5d6468"],[/beige|botticino|chiffon/,"#dccdb0","#a99a7c"]],wf=t=>{const e=t.toLowerCase(),n=Y2.find(i=>i[0].test(e));return n?[n[1],n[2]]:["#f4f2ee","#bdb8ad"]},K2="Meera White,Black,Tiger Green,Silver Paradise,Silver Black,Ivory Brown,Royal Brown,Bose Brown,Steel Grey,Silver Blue,Paradise Brown,Tan Brown,Kuppam Green,Imperial Brown,Rajshree Red,Black Pearl,Jet Black,Red Multi,Cheetha Brown,Himalayan Brown,Black Galaxy,Ruby Red".split(","),Z2=["Toranto Marble Light","Morchana White Marble","Dharmeta White Marble","Green Marble","Yellow Marble","Makrana White Marble","Banswara White Marble","Rajnagar White Marble","Agaria White Marble","Morwad White Marble","Wonder White / White Sangemarmar","Black Marble","Jet Black Marble","Udaipur Green Marble","Katni Green Marble","Kota Green / Rainforest Green","Rainforest Brown","Toronto Brown","Imperial Brown","Paradise Brown / Bose Brown / Royal Brown","Tan Brown Marble","Himalayan Brown Marble","Pink Marble (Udaipur, Rajpura, Baroda)","Flamingo Pink Marble","Ivory Brown / Chiffon Beige","Botticino Beige","Golden Silk / Italian Yellow","Statuario Marble","White Onyx","Green Onyx","Black Onyx","Rainbow Onyx"],Ha=[...K2.map(t=>({name:`${t} Granite`,cat:"Granites"})),...Z2.map(t=>({name:t,cat:"Marbles"})),{name:"Kota Stone",cat:"Kota Stones",c:["#7f8b82","#3f4a44"],desc:"Natural, cost-effective and highly durable. Perfect for outdoor spaces, pathways and industrial use."}],ql=[{title:"Marbles",blurb:"Timeless veined elegance for interiors.",bg:"linear-gradient(135deg,#f3f1ec,#c9c4ba 55%,#8e8a82)"},{title:"Granites",blurb:"Strength and depth for any surface.",bg:"linear-gradient(135deg,#3a3a3c,#16161a 55%,#6b5a3a)"},{title:"Kota Stones",blurb:"Durable, cost-effective, built for outdoors.",bg:"linear-gradient(135deg,#8a9a8f,#566a62 55%,#2f3d38)"},{title:"Quartz",blurb:"Refined engineered surfaces.",bg:"linear-gradient(135deg,#e9e4da,#b7aea0 55%,#6f685e)"},{title:"Kadapa Stones",blurb:"Dark, durable slabs for flooring.",bg:"linear-gradient(135deg,#6e6a73,#3d3a45 55%,#1d1b24)"}].map(t=>({...t,count:Ha.filter(e=>e.cat===t.title).length})),pv=["Polished","Matte / Honed","Lapatra"],Q2=["White","Black","Green","Brown","Red","Pink","Yellow","Grey","Blue","Beige"],ml=t=>{const e=t.toLowerCase();return/beige|botticino|chiffon/.test(e)?"Beige":/red|ruby/.test(e)?"Red":/pink|flamingo/.test(e)?"Pink":/yellow|golden/.test(e)?"Yellow":/blue/.test(e)?"Blue":/grey|steel|silver paradise/.test(e)?"Grey":/black/.test(e)?"Black":/green/.test(e)?"Green":/brown|tan|ivory|cheetha/.test(e)?"Brown":/white|statuario|sangemarmar/.test(e)?"White":""},Fh=t=>t.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),J2=t=>Ha.find(e=>Fh(e.name)===t),eT={Marbles:["Flooring","Wall cladding","Staircases","Interior accents"],Granites:["Kitchen countertops","Flooring","Staircases","Exterior cladding"],"Kota Stones":["Outdoor spaces","Pathways","Industrial flooring"],Quartz:["Kitchen countertops","Interiors"],"Kadapa Stones":["Flooring","Wall cladding","Outdoor paving"]};function tT({p:t}){const e=s2(.06);return u.jsx("div",{ref:e,className:"absolute -inset-[8%]",style:{background:`linear-gradient(160deg,${t.tint},#141414)`},children:t.img&&u.jsx("img",{src:t.img,alt:`${t.name}, ${t.city}`,loading:"lazy",onError:n=>n.currentTarget.style.display="none",className:"w-full h-full object-cover"})})}function nT({limit:t}){return u.jsx("div",{className:"grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",children:dv.slice(0,t).map((e,n)=>u.jsx(qe,{delay:n%3*110,children:u.jsx(Ih,{index:n,fx:Dh[(n+1)%4],className:"aspect-[4/3] w-full",front:u.jsxs(u.Fragment,{children:[u.jsx(tT,{p:e}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-bk/90 via-bk/10 to-transparent"}),u.jsxs("div",{className:"absolute bottom-0 p-4 sm:p-5",children:[u.jsx("h3",{className:"text-2xl sm:text-3xl",children:e.name}),u.jsxs("small",{className:"text-cg",children:[e.kind," · ",e.city]})]})]}),back:u.jsxs("div",{className:"h-full flex flex-col justify-center gap-2 p-5 sm:p-6",children:[u.jsx("h3",{className:"text-2xl text-cg",children:e.name}),u.jsxs("p",{className:"text-sg text-sm",children:[e.kind,", ",e.city,". Natural stone supplied through ",e.via,"."]}),u.jsx("a",{href:"#contact",className:"btn self-start !px-4 !py-2 !text-xs mt-1",onClick:i=>i.stopPropagation(),children:"Discuss your project"})]})})},e.name))})}function iT({c:t}){return t.logo?u.jsx("div",{className:"absolute inset-0 flex items-center justify-center",style:{background:t.bg},children:u.jsx("img",{src:t.logo,alt:t.name,loading:"lazy",className:"w-full h-full object-contain"})}):u.jsx("div",{className:"absolute inset-0 grid place-items-center p-3 text-center bg-gradient-to-br from-[#2a2a2a] to-[#151515]",children:u.jsx("span",{className:"font-serif font-semibold text-cg text-base sm:text-lg leading-snug",children:t.name})})}function mv({limit:t}){return u.jsxs("div",{className:"grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",children:[k2.slice(0,t).map((e,n)=>u.jsx(qe,{delay:n%5*70,from:"zoom",children:u.jsx(Ih,{index:n,fx:Dh[n%4],className:"aspect-[3/2]",front:u.jsx(iT,{c:e}),back:u.jsx("div",{className:"h-full grid place-items-center p-3 text-center",children:u.jsx("span",{className:"font-serif font-semibold text-cg text-base sm:text-lg leading-snug",children:e.name})})})},e.name)),u.jsx(qe,{delay:200,children:u.jsx("div",{className:"aspect-[3/2] grid place-items-center border border-dashed border-gd/40 text-sg font-serif text-lg",children:"and many more"})})]})}function gv(){const[t,e]=_c(.3);return u.jsxs("svg",{ref:t,"data-in":e,className:"tree mx-auto mb-8 w-32 h-32 sm:w-40 sm:h-40",viewBox:"0 0 120 120",fill:"none",stroke:"#C5A052",strokeWidth:"1.4",strokeLinecap:"round","aria-hidden":!0,children:[u.jsx("path",{d:"M60 112 V58"}),u.jsx("path",{d:"M60 86 C48 80 40 72 34 62"}),u.jsx("path",{d:"M60 78 C72 72 80 64 86 54"}),u.jsx("path",{d:"M60 64 C52 56 48 46 46 34"}),u.jsx("path",{d:"M60 58 C68 50 72 40 74 30"}),u.jsx("path",{d:"M60 58 V22"}),u.jsx("circle",{cx:"34",cy:"60",r:"4"}),u.jsx("circle",{cx:"86",cy:"52",r:"4"}),u.jsx("circle",{cx:"46",cy:"32",r:"4"}),u.jsx("circle",{cx:"74",cy:"28",r:"4"}),u.jsx("circle",{cx:"60",cy:"20",r:"4"}),u.jsx("path",{d:"M40 112 H80"})]})}function rT(){return u.jsxs("div",{className:"ring","aria-label":"Stone categories",children:[u.jsx("svg",{width:"0",height:"0",className:"absolute","aria-hidden":!0,children:u.jsxs("filter",{id:"ringvein",children:[u.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:".012 .05",numOctaves:"4",seed:"7",result:"n"}),u.jsx("feColorMatrix",{in:"n",values:"0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 -2.2 1.35",result:"v"}),u.jsx("feComposite",{in:"v",in2:"SourceGraphic",operator:"in",result:"m"}),u.jsx("feBlend",{in:"SourceGraphic",in2:"m",mode:"soft-light"})]})}),u.jsx("div",{className:"rg",children:ql.map((t,e)=>u.jsxs("a",{href:`#collection/${encodeURIComponent(t.title)}`,className:"ri",style:{"--i":e},children:[u.jsx("span",{className:"absolute inset-0",style:{background:t.bg,filter:"url(#ringvein)"}}),u.jsx("span",{className:"absolute inset-0 bg-gradient-to-t from-bk/90 to-transparent"}),u.jsxs("span",{className:"relative z-10 text-left",children:[u.jsx("h3",{className:"text-2xl sm:text-3xl",children:t.title}),u.jsx("p",{className:"text-cg text-[13px] mt-1",children:t.blurb})]})]},t.title))})]})}function sT(){return u.jsxs(u.Fragment,{children:[u.jsxs(Yn,{v:"home",tall:!0,eyebrow:"Natural stone since 1998 · Chennai",title:"Elevating iconic architecture with premium stone.",text:"Discover premium natural marbles, granites and architectural stones backed by decades of industry experience.",children:[u.jsx("p",{className:"text-sg/80 max-w-[520px] mt-4 text-[15px] hidden sm:block",children:"Established in 1998, Joys Marbles & Granites specialises in natural stone trading and supply, with materials sourced from across India for residential, commercial and large-scale projects."}),u.jsxs("div",{className:"flex flex-wrap gap-3.5 mt-8",children:[u.jsx("a",{className:"btn-fill",href:"#collection",children:"Explore our collection"}),u.jsx("a",{className:"btn",href:"#contact",children:"Request pricing"})]})]}),u.jsx("div",{id:"scroll-start",className:"grid grid-cols-2 lg:grid-cols-4 border-y border-gd/30 bg-bk/70 text-center",children:l2.map((t,e)=>u.jsxs(qe,{delay:e*100,className:"py-8 sm:py-10 px-3 border-r border-gd/15 last:border-r-0",children:[u.jsx(g2,{to:t.to,suffix:t.suffix,plain:t.plain}),u.jsx("span",{className:"text-sg text-sm",children:t.label})]},t.label))}),u.jsx(Sf,{words:["Marble","Granite","Kota","Quartz","Kadapa"]}),u.jsx(q2,{}),u.jsx(P2,{}),u.jsxs(ht,{center:!0,children:[u.jsx(an,{center:!0,lead:"Tap or hover a card to pause the ring.",children:"What we offer"}),u.jsx(qe,{from:"zoom",children:u.jsx(rT,{})}),u.jsx("a",{className:"btn-fill",href:"#collection",children:"View the collection"})]}),u.jsx(_2,{}),u.jsx(E2,{}),u.jsxs(ht,{center:!0,children:[u.jsx(qe,{children:u.jsx(gv,{})}),u.jsx(an,{center:!0,lead:"Built on trust. Strengthened by relationships.",children:"Trusted partners"}),u.jsx(mv,{limit:9}),u.jsx(qe,{children:u.jsx("a",{className:"btn mt-10",href:"#clients",children:"See all our customers"})}),u.jsx("p",{className:"text-sg/70 text-xs mt-6 max-w-xl mx-auto",children:"Names and logos are shown as customers who have purchased from us; they do not imply formal partnership or endorsement."})]}),u.jsx(j2,{}),u.jsx(F2,{}),u.jsx(Ri,{title:"Looking for the perfect stone for your project?",text:"Tell us what you are looking for. Our team will help you explore suitable options and provide pricing based on your requirements.",label:"Request pricing",second:["Contact our team","#contact"]})]})}function fg({rgb:t=[.3,.29,.27],seed:e=7,fx:n=.005,fy:i=.016,width:r=1}={}){const[s,a,o]=t,l=Array.from({length:41},(f,p)=>{const d=Math.abs(p-20);return d<=r-1?1:d===r?.45:0}).join(" ");return`url("data:image/svg+xml,${`<svg xmlns='http://www.w3.org/2000/svg' width='900' height='1100'><filter id='f' x='0' y='0' width='100%' height='100%' color-interpolation-filters='sRGB'><feTurbulence type='fractalNoise' baseFrequency='${n} ${i}' numOctaves='6' seed='${e}'/><feColorMatrix values='0 0 0 0 ${s} 0 0 0 0 ${a} 0 0 0 0 ${o} 1 0 0 0 0'/><feComponentTransfer><feFuncA type='table' tableValues='${l}'/></feComponentTransfer></filter><rect width='100%' height='100%' filter='url(%23f)'/></svg>`.replace(/#/g,"%23")}")`}const xv=[{n:"Statuario",a:"#d9d5cc",b:"#9c978c",v:[.35,.34,.32]},{n:"Verde Alpi",a:"#2d5a45",b:"#102219",v:[.7,.86,.76]},{n:"Calacatta Gold",a:"#ece4d3",b:"#c6b896",v:[.7,.5,.2]},{n:"Emperador",a:"#7a5538",b:"#3d2616",v:[.88,.72,.5]},{n:"Nero Marquina",a:"#1f1f1f",b:"#080808",v:[.88,.85,.78]},{n:"Black Galaxy",a:"#17171b",b:"#050507",v:[.75,.62,.3]},{n:"Rosso Levanto",a:"#6e1f26",b:"#2f0b0f",v:[.9,.8,.7]}],Yl=xv.length,Ef=180,hg=400,aT=Math.round(Ef/2/Math.tan(Math.PI/Yl))+26,oT=(Yl-1)/2,lT=(t,e,n)=>Math.max(e,Math.min(n,t));function cT(){const[t,e]=ae.useState("fan"),[n,i]=ae.useState(!1),[r,s]=ae.useState(!0),[a,o]=ae.useState(1),l=ae.useRef(null),c=ae.useRef(null),f=ae.useRef(null),p=ae.useRef(null),d=ae.useRef(null),m=ae.useRef(!0);m.current=r;const _=ae.useRef({angle:0,vel:0,drag:!1,lastX:0,vis:!0}),S=ae.useMemo(()=>typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches,[]);ae.useEffect(()=>{const v=setTimeout(()=>i(!0),300);return()=>clearTimeout(v)},[]),ae.useEffect(()=>{const v=c.current,x=()=>o(lT(Math.min(v.clientWidth/600,v.clientHeight/640),.5,1));x();const M=new ResizeObserver(x);return M.observe(v),()=>M.disconnect()},[]),ae.useEffect(()=>{const v=new IntersectionObserver(([R])=>{_.current.vis=R.isIntersecting});v.observe(l.current);let x=0;const M=()=>{x=requestAnimationFrame(M);const R=_.current;if(!R.vis)return;R.drag||(R.angle+=R.vel+(m.current&&!S?.3:0),R.vel*=.94);const A=(R.angle%360+360)%360;f.current&&(f.current.style.transform=`rotateY(${R.angle}deg)`),p.current&&(p.current.style.transform=`rotateX(90deg) rotateZ(${-R.angle}deg)`),d.current&&(d.current.textContent=`${String(Math.round(A)).padStart(3,"0")}°`)};return x=requestAnimationFrame(M),()=>{cancelAnimationFrame(x),v.disconnect()}},[S]);const g=v=>{if(!n)return"rotateY(0deg) translateZ(0px) rotateZ(0deg)";if(t==="ring")return`rotateY(${360/Yl*v}deg) translateZ(${aT}px) rotateZ(0deg)`;const x=v-oT;return`rotateY(${x*6}deg) translateZ(${(Math.floor(Yl/2)-Math.abs(x))*22}px) rotateZ(${x*10}deg)`},h=v=>`rounded-full border px-3.5 sm:px-4 py-1.5 text-[10px] sm:text-[11px] uppercase tracking-[.22em] transition ${v?"border-gd bg-gd text-bk":"border-gd/40 text-cg hover:bg-gd/10"}`;return u.jsxs("header",{ref:l,className:"relative overflow-hidden bg-[#0f0f0f] min-h-screen flex items-center","aria-labelledby":"ah-title",children:[u.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"radial-gradient(55% 60% at 75% 60%,rgba(184,137,58,.14),transparent 70%),radial-gradient(40% 40% at 10% 15%,rgba(197,160,82,.08),transparent 70%)"}}),u.jsxs("div",{className:"relative z-10 mx-auto w-full max-w-[1500px] grid lg:grid-cols-[1.05fr_1fr] items-center gap-6 lg:gap-10 px-6 sm:px-10 lg:px-16 pt-28 sm:pt-32 pb-20",children:[u.jsxs("div",{className:"max-w-[640px] hero-in",children:[u.jsx("p",{className:"mb-4 sm:mb-6 text-xs sm:text-sm uppercase tracking-[.3em] text-gd",children:"About us"}),u.jsx("h1",{id:"ah-title",className:"gold font-serif font-semibold text-[clamp(2.6rem,5.6vw,5.2rem)] leading-[1.04]",children:"A legacy built on stone."}),u.jsx("p",{className:"mt-6 sm:mt-8 text-base sm:text-lg font-light leading-7 sm:leading-8 text-[#b9b3a6]",children:"Established in 1998, Joys Marbles and Granites has spent over two decades mastering natural stone distribution for builders, architects, interior designers and homeowners."}),u.jsxs("div",{className:"mt-8 sm:mt-9 flex flex-wrap gap-3 sm:gap-4",children:[u.jsx("a",{className:"btn-fill",href:"#collection",children:"Explore our collection"}),u.jsx("a",{className:"btn",href:"#contact",children:"Request pricing"})]})]}),u.jsxs("div",{ref:c,className:"relative h-[400px] sm:h-[520px] lg:h-[640px] w-full cursor-grab touch-pan-y select-none active:cursor-grabbing [perspective:1800px] [perspective-origin:50%_30%]",onPointerDown:v=>{_.current.drag=!0,_.current.lastX=v.clientX,v.currentTarget.setPointerCapture(v.pointerId)},onPointerMove:v=>{const x=_.current;if(!x.drag)return;const M=v.clientX-x.lastX;x.lastX=v.clientX,x.angle+=M*.5,x.vel=M*.5},onPointerUp:()=>{_.current.drag=!1},onPointerCancel:()=>{_.current.drag=!1},children:[u.jsx("div",{className:"absolute inset-0 [transform-style:preserve-3d]",style:{transform:`scale(${a})`,transformOrigin:"50% 80%"},children:u.jsxs("div",{className:"absolute bottom-[17%] left-1/2 h-0 w-0 [transform-style:preserve-3d] [transform:rotateX(13deg)]",children:[u.jsxs("div",{ref:p,className:"absolute left-1/2 top-0 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-gd/80 [background:radial-gradient(circle,#2a2418_0,#15120d_60%,#1d1810_100%)] [box-shadow:0_0_120px_rgba(184,137,58,.45),inset_0_0_60px_rgba(184,137,58,.2)]",children:[u.jsx("div",{className:"absolute inset-[10px] rounded-full opacity-90 [background:repeating-conic-gradient(rgba(217,179,106,.9)_0_.5deg,transparent_.5deg_5deg)] [mask-image:radial-gradient(circle,transparent_78%,#000_79%,#000_92%,transparent_93%)]"}),u.jsx("div",{className:"absolute inset-[44px] rounded-full border border-gd/25"}),u.jsx("span",{className:"absolute left-1/2 top-3 -translate-x-1/2 text-[11px] tracking-[.3em] text-cg",children:"N"})]}),u.jsx("div",{ref:f,className:"absolute left-0 top-0 h-0 w-0 [transform-style:preserve-3d]",children:xv.map((v,x)=>{const M=v.v;return u.jsxs("div",{className:"absolute bottom-0 left-0 transition-transform duration-[1600ms] ease-[cubic-bezier(.2,.8,.2,1)] [transform-style:preserve-3d]",style:{width:Ef,height:hg,marginLeft:-Ef/2,top:-hg,transformOrigin:"50% 100%",transform:g(x),transitionDelay:`${x*70}ms`},children:[Array.from({length:6},(R,A)=>u.jsx("div",{className:"absolute inset-0 border border-gd/30 bg-[#3a3427]",style:{transform:`translateZ(${-(A+1)*2.4}px)`}},A)),u.jsxs("div",{className:"absolute inset-0 overflow-hidden border border-gd/70 shadow-[0_30px_60px_-20px_rgba(0,0,0,.9)] [backface-visibility:hidden]",style:{background:`linear-gradient(165deg,${v.a},${v.b})`},children:[u.jsx("div",{className:"absolute inset-0",style:{backgroundImage:fg({rgb:M,seed:40+x*6}),backgroundSize:"cover"}}),u.jsx("div",{className:"absolute inset-0 [background:linear-gradient(110deg,rgba(255,255,255,.2),transparent_40%,rgba(0,0,0,.4))]"}),u.jsx("span",{className:"absolute inset-x-0 bottom-4 text-center font-serif text-lg font-semibold text-white [text-shadow:0_2px_10px_#000]",children:v.n})]}),u.jsxs("div",{className:"absolute inset-0 overflow-hidden border border-gd/50 [backface-visibility:hidden] [transform:rotateY(180deg)_translateZ(15px)]",style:{background:`linear-gradient(165deg,${v.b},#0b0b0b)`},children:[u.jsx("div",{className:"absolute inset-0 opacity-50",style:{backgroundImage:fg({rgb:M,seed:140+x*6,fx:.01,fy:.03}),backgroundSize:"cover"}}),u.jsx("span",{className:"absolute inset-x-0 top-4 text-center text-[10px] uppercase tracking-[.35em] text-gd/80",children:"Joys · 1998"})]})]},v.n)})})]})}),u.jsxs("div",{className:"absolute right-0 top-0 z-10 flex gap-2",onPointerDown:v=>v.stopPropagation(),children:[u.jsx("button",{type:"button",className:h(t==="fan"),onClick:()=>e("fan"),children:"Fan"}),u.jsx("button",{type:"button",className:h(t==="ring"),onClick:()=>e("ring"),children:"Ring"}),u.jsx("button",{type:"button",className:h(r),onClick:()=>s(v=>!v),"aria-pressed":r,children:r?"❚❚ Spin":"▶ Spin"})]}),u.jsxs("div",{className:"pointer-events-none absolute bottom-[1%] left-1/2 -translate-x-1/2 whitespace-nowrap text-center text-[10px] sm:text-[11px] uppercase tracking-[.3em] text-[#8a8374]",children:["Drag to rotate · 360° ",u.jsx("span",{ref:d,className:"ml-2 text-cg",children:"000°"})]})]})]})]})}const pg="space-y-4 text-sg max-w-[760px]";function uT(){const[t,e]=o2(),n=[["1998","Joys Marbles & Granites is established","We begin trading natural stone in Chennai."],["Today","25+ years of experience","Five stone categories, requirement-based sourcing across India, and supply to residential, commercial and institutional projects."]];return u.jsxs("div",{ref:t,className:"relative max-w-[760px] pl-8 sm:pl-12",children:[u.jsx("div",{className:"absolute left-[7px] sm:left-[11px] top-1 bottom-1 w-px bg-gd/20"}),u.jsx("div",{className:"absolute left-[7px] sm:left-[11px] top-1 w-px bg-gradient-to-b from-cg to-gd",style:{height:`${e*100}%`}}),n.map(([i,r,s],a)=>u.jsxs(qe,{delay:a*150,from:"right",className:"relative pb-10 last:pb-0",children:[u.jsx("span",{className:"absolute -left-[33px] sm:-left-[41px] top-2 w-3.5 h-3.5 rotate-45 bg-gd shadow-[0_0_14px_rgba(197,160,82,.7)]"}),u.jsx("b",{className:"gold font-serif text-4xl",children:i}),u.jsx("h3",{className:"text-2xl text-cg mt-1",children:r}),u.jsx("p",{className:"text-sg text-[15px]",children:s})]},i)),u.jsx("p",{className:"text-sg/60 text-xs mt-8",children:"More milestones will be added after company confirmation."})]})}function dT(){return u.jsxs(u.Fragment,{children:[u.jsx(cT,{}),u.jsxs(ht,{alt:!0,id:"who",children:[u.jsx(an,{children:"Who we are"}),u.jsx(qe,{children:u.jsxs("div",{className:pg,children:[u.jsx("p",{children:"Joys Marbles and Granites is more than just a supplier. It is a legacy brand built on trust, craftsmanship and an unwavering commitment to quality. Established in 1998, we have spent over two decades mastering the art and science of natural stone distribution, becoming a reliable partner for builders, architects, interior designers and homeowners alike."}),u.jsx("p",{children:"From humble beginnings, we have grown into a recognized name in the marble and granite industry by consistently delivering materials that meet the highest standards of durability and visual appeal. Our expertise lies in understanding not just the stone, but the vision behind every project, whether it is a luxury residence, a commercial complex or a large-scale infrastructure development."}),u.jsx("p",{children:"Our portfolio includes a wide variety of premium marbles, high-strength granites and durable Kota stones sourced from trusted quarries. Each slab is carefully selected to align with modern design trends while maintaining timeless elegance. We don’t just supply stone. We help shape spaces that stand the test of time."})]})})]}),u.jsxs(ht,{children:[u.jsx(an,{children:"Our journey"}),u.jsx(uT,{})]}),u.jsx(ht,{alt:!0,children:u.jsxs("div",{className:"grid gap-5 lg:grid-cols-2 [perspective:1200px]",children:[u.jsx(qe,{from:"left",children:u.jsxs(vf,{fx:"swing",className:"card !p-7 sm:!p-10 h-full",children:[u.jsx("span",{className:"ico"}),u.jsx("h3",{className:"!text-3xl sm:!text-4xl",children:"Our vision"}),u.jsxs("div",{className:"space-y-3 text-sg",children:[u.jsx("p",{children:"To redefine how natural stone is perceived and used in construction and design, delivering premium stone solutions that blend aesthetics with structural integrity."}),u.jsx("p",{children:"We envision a future where every architectural space, modern or traditional, reflects sophistication, strength and sustainability through the intelligent use of natural stone."})]})]})}),u.jsx(qe,{from:"right",children:u.jsxs(vf,{fx:"rise",className:"card !p-7 sm:!p-10 h-full",children:[u.jsx("span",{className:"ico"}),u.jsx("h3",{className:"!text-3xl sm:!text-4xl",children:"Our mission"}),u.jsxs("div",{className:"space-y-3 text-sg",children:[u.jsx("p",{children:"To deliver excellence at every touchpoint, creating value not just through our products but through the experience we provide to our clients."}),u.jsx("p",{children:"It comes down to four commitments, set out below."})]})]})})]})}),u.jsxs(ht,{children:[u.jsx(an,{children:"Our mission in practice"}),u.jsx(yc,{items:f2})]}),u.jsxs(ht,{alt:!0,children:[u.jsx(an,{children:"Our philosophy & capabilities"}),u.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-3",children:h2.map((t,e)=>u.jsx(qe,{delay:e*80,from:"zoom",children:u.jsx("div",{className:"border border-gd/30 p-5 font-serif text-xl text-cg bg-bk/40",children:t})},t))})]}),u.jsxs(ht,{children:[u.jsx(an,{children:"What sets us apart"}),u.jsx(qe,{children:u.jsxs("div",{className:pg,children:[u.jsx("p",{children:"What differentiates us is deep-rooted industry knowledge combined with a customer-first approach."}),u.jsx("p",{children:"With over 25 years of experience, we understand material behaviour, architectural requirements and evolving design preferences, which lets us guide clients to the right stone for the right application."}),u.jsx("p",{children:"Every product undergoes careful inspection for uniformity, finish and strength. We work closely with trusted suppliers and quarries to maintain a consistent inventory of premium materials."}),u.jsx("p",{children:"Our focus on timely delivery, transparent dealings and long-term relationships has earned the trust of numerous clients. We don’t operate on one-time transactions. We build partnerships that grow over time."})]})}),u.jsx(qe,{children:u.jsx("p",{className:"gold font-serif text-2xl sm:text-3xl mt-10 max-w-[760px]",children:"Every slab tells a story of precision, passion and performance."})})]}),u.jsx(Ri,{title:"Let’s build something exceptional.",text:"Share your requirements and our team will help you find the right stone.",label:"Request a quote",second:["Explore products","#collection"]})]})}const Uu=t=>`border border-gd/40 px-4 sm:px-5 py-2 text-sm transition ${t?"bg-gd text-bk":"text-sg hover:bg-gd hover:text-bk"}`;function fT({initial:t,onPick:e}){const[n,i]=ae.useState(ql.some(d=>d.title===t)?t:""),[r,s]=ae.useState(""),[a,o]=ae.useState(""),l=ae.useMemo(()=>{const d=a.trim().toLowerCase();return Ha.filter(m=>(!n||m.cat===n)&&(!r||ml(m.name)===r)&&(!d||`${m.name} ${m.cat} ${ml(m.name)} ${m.desc??""}`.toLowerCase().includes(d)))},[n,r,a]),c=["",...ql.map(d=>d.title)],f=Q2.filter(d=>Ha.some(m=>ml(m.name)===d)),p=n==="Quartz"||n==="Kadapa Stones";return u.jsxs(u.Fragment,{children:[u.jsx(Yn,{v:"collection",eyebrow:"Product catalogue",title:"Explore the art of natural stone.",text:"Discover a selection of natural stones suited to different architectural, residential and commercial applications. Hover or tap any stone to see details and request pricing."}),u.jsxs(ht,{alt:!0,id:"catalogue",children:[u.jsxs(qe,{children:[u.jsx("label",{className:"sr-only",htmlFor:"stone-search",children:"Search stones"}),u.jsx("input",{id:"stone-search",type:"search",value:a,onChange:d=>o(d.target.value),placeholder:"Search by stone name, category or colour",className:"w-full max-w-xl bg-white/5 border border-gd/30 text-wh px-4 py-3 mb-5 outline-none focus:border-cg placeholder:text-sg/80"}),u.jsx("div",{className:"flex flex-wrap gap-2 mb-3",role:"group","aria-label":"Category",children:c.map(d=>u.jsx("button",{onClick:()=>i(d),className:Uu(n===d),children:d||"All"},d||"all"))}),u.jsxs("div",{className:"flex flex-wrap gap-2 mb-8",role:"group","aria-label":"Colour",children:[u.jsx("button",{onClick:()=>s(""),className:`${Uu(r==="")} !py-1 !text-xs`,children:"Any colour"}),f.map(d=>u.jsx("button",{onClick:()=>s(r===d?"":d),className:`${Uu(r===d)} !py-1 !text-xs`,children:d},d))]}),u.jsxs("p",{className:"text-sg text-sm mb-4","aria-live":"polite",children:[l.length," ",l.length===1?"stone":"stones"]})]}),l.length===0&&u.jsxs("div",{className:"border border-dashed border-gd/40 p-8 text-center",children:[u.jsx("p",{className:"font-serif text-2xl text-cg",children:p?`${n} options are shared on request.`:"No stones match your search."}),u.jsx("p",{className:"text-sg mt-2",children:"Tell us your requirement and we will share suitable options and pricing."}),u.jsx("a",{href:"#contact",className:"btn-fill mt-5",onClick:()=>e(p?n:""),children:"Request pricing"})]}),u.jsx("div",{className:"grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",children:l.map((d,m)=>u.jsx(Ih,{index:m,fx:Dh[m%4],className:"aspect-[4/5]",front:u.jsxs(u.Fragment,{children:[u.jsx(_f,{c:d.c??wf(d.name),r:m*37%360}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-bk/90 to-transparent"}),u.jsxs("div",{className:"absolute bottom-0 p-3 sm:p-4",children:[u.jsx("h3",{className:"text-lg sm:text-2xl leading-tight",children:d.name}),u.jsx("small",{className:"text-cg text-xs",children:d.cat})]})]}),back:u.jsxs("div",{className:"h-full flex flex-col justify-center gap-2 p-4",children:[u.jsx("h3",{className:"text-lg sm:text-2xl leading-tight text-cg",children:d.name}),u.jsx("p",{className:"text-sg text-xs sm:text-sm",children:d.desc??"Polished, matte / honed or lapatra finish. Custom sizes and thickness available."}),u.jsx("a",{href:`#stone/${Fh(d.name)}`,className:"text-cg text-xs underline self-start",onClick:_=>_.stopPropagation(),children:"View details"}),u.jsx("a",{href:"#contact",className:"btn self-start !px-4 !py-2 !text-xs",onClick:_=>{_.stopPropagation(),e(d.name)},children:"Request pricing"})]})},d.name))})]}),u.jsxs(ht,{children:[u.jsx(an,{children:"Available finishes & customization"}),u.jsx(yc,{cols:3,items:[["Finishes",pv.join(", ")+" finish."],["Customization options","Custom sizes and thickness, with polished, honed and textured finishes."],["Bulk supply","Bulk supply for projects."]]}),u.jsx(qe,{children:u.jsx("p",{className:"text-center mt-10",children:u.jsx("a",{className:"btn-fill",href:"#contact",children:"Request samples or pricing"})})})]}),u.jsx(Ri,{title:"Can’t find the stone you need?",text:"We source natural stones from across India based on your requirements.",href:"#sourcing",label:"Our sourcing capabilities",second:["Contact our team","#contact"]})]})}const It={name:"Joys Marbles & Granites",founded:1998,city:"Chennai, Tamil Nadu, India",whatsapp:"919999999999",phone:"+91 00000 00000",phoneHref:"tel:+910000000000",email:"info@example.com",address:"Business address to be added (Chennai, Tamil Nadu)"},Xi=t=>`https://wa.me/${It.whatsapp}?text=${encodeURIComponent("Hello Joys Marbles & Granites, I would like pricing"+(t?` for ${t}`:"")+".")}`;function hT({id:t,onPick:e}){const n=J2(t);if(!n)return u.jsxs(u.Fragment,{children:[u.jsx(Yn,{v:"collection",title:"Stone not found.",text:"This stone is not in the catalogue. Browse the full collection or ask us to source it."}),u.jsx(Ri,{title:"Looking for something specific?",text:"Share your requirement and we will source it.",label:"Contact our team"})]});const i=Ha.filter(a=>a.cat===n.cat&&a.name!==n.name).slice(0,4),r=ml(n.name),s=[["Category",n.cat],...r?[["Colour",r]]:[],["Finish",pv.join(" / ")],["Thickness & dimensions","Custom sizes and thickness available on request"],["Recommended applications",eT[n.cat].join(", ")]];return u.jsxs(u.Fragment,{children:[u.jsx(Yn,{v:"collection",eyebrow:n.cat,title:n.name,text:n.desc??`Natural ${n.cat.toLowerCase().replace(/s$/,"")} for architectural, residential and commercial applications.`,children:u.jsx("p",{className:"mt-6",children:u.jsx("a",{className:"text-cg text-sm underline",href:"#collection",children:"← Back to collection"})})}),u.jsx(ht,{alt:!0,children:u.jsxs("div",{className:"grid lg:grid-cols-2 gap-8 lg:gap-14 items-start",children:[u.jsx(qe,{from:"left",children:u.jsxs("div",{className:"relative aspect-[4/5] max-h-[620px] overflow-hidden border border-gd/40 shadow-[0_30px_80px_rgba(0,0,0,.6)]",children:[u.jsx(_f,{c:n.c??wf(n.name),r:20}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-bk/60 to-transparent"}),u.jsx("span",{className:"absolute bottom-3 left-4 text-xs text-wh/80",children:"Representative colour. Natural stone varies by slab; ask for samples."})]})}),u.jsxs(qe,{from:"right",children:[u.jsx("dl",{className:"divide-y divide-gd/20 border-y border-gd/20",children:s.map(([a,o])=>u.jsxs("div",{className:"grid sm:grid-cols-[180px_1fr] gap-1 sm:gap-4 py-4",children:[u.jsx("dt",{className:"text-cg text-sm tracking-wider uppercase",children:a}),u.jsx("dd",{className:"text-sg",children:o})]},a))}),u.jsxs("div",{className:"flex flex-wrap gap-3.5 mt-8",children:[u.jsx("a",{className:"btn-fill",href:"#contact",onClick:()=>e(n.name),children:"REQUEST PRICING FOR THIS STONE"}),u.jsx("a",{className:"btn",href:Xi(n.name),target:"_blank",rel:"noopener noreferrer",children:"ENQUIRE ON WHATSAPP"})]}),u.jsx("p",{className:"text-sg/70 text-xs mt-4",children:"Availability and specifications are confirmed by our team when you enquire."})]})]})}),i.length>0&&u.jsxs(ht,{children:[u.jsx(an,{children:"Related stones"}),u.jsx("div",{className:"grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-4",children:i.map((a,o)=>u.jsx(qe,{delay:o*90,from:"zoom",children:u.jsxs("a",{href:`#stone/${Fh(a.name)}`,className:"group relative block aspect-[4/5] overflow-hidden border border-gd/30",children:[u.jsx("span",{className:"zoom-img absolute inset-0",children:u.jsx(_f,{c:a.c??wf(a.name),r:o*53})}),u.jsx("span",{className:"absolute inset-0 bg-gradient-to-t from-bk/90 to-transparent"}),u.jsx("span",{className:"absolute bottom-0 p-3 sm:p-4 text-lg sm:text-2xl font-serif font-semibold leading-tight",children:a.name})]})},a.name))})]})]})}function pT(){return u.jsxs(u.Fragment,{children:[u.jsx(Yn,{v:"clients",eyebrow:"Crafted projects",title:"Stone that becomes part of a legacy.",text:"Notable educational, airport, commercial and residential projects where Joys Marbles & Granites has supplied natural stone."}),u.jsxs(ht,{alt:!0,children:[u.jsx(an,{lead:"Project photographs and materials supplied will be added once approved by each client.",children:"Crafted spaces"}),u.jsx(nT,{}),u.jsx(qe,{children:u.jsx("p",{className:"text-center font-serif font-semibold text-cg text-xl sm:text-2xl mt-12 max-w-3xl mx-auto",children:"We don’t just supply materials. We build relationships that last as long as our stones."})})]}),u.jsx(Ri,{title:"Planning a project?",text:"Discuss your requirements with our team.",label:"Discuss your project",second:["Explore products","#collection"]})]})}function mT(){return u.jsxs(u.Fragment,{children:[u.jsx(Yn,{v:"clients",eyebrow:"Trusted by",title:"Trusted by builders, architects & developers.",text:"Over the years, we’ve partnered with construction companies, architects and independent builders to deliver materials that meet the highest standards."}),u.jsxs(ht,{alt:!0,children:[u.jsx(an,{children:"Our clients trust us for"}),u.jsx(yc,{items:[["Consistent quality"],["On-time delivery"],["Transparent pricing"],["Long-term reliability"]]})]}),u.jsxs(ht,{center:!0,children:[u.jsx(qe,{children:u.jsx(gv,{})}),u.jsx(an,{center:!0,lead:"Built on trust. Strengthened by relationships.",children:"Our customers"}),u.jsx(mv,{}),u.jsx("p",{className:"text-sg/70 text-xs mt-8 max-w-xl mx-auto",children:"Logos belong to their respective owners and appear with the company’s permission. Listing does not imply a formal partnership or endorsement."})]}),u.jsx(Ri,{title:"Join the builders who trust us.",text:"Tell us about your next project.",label:"Request a quote"})]})}function gT({s:t,i:e}){const n=yf("enter"),i=yf("enter"),r=e%2===1;return u.jsx(ht,{alt:e%2===0,children:u.jsxs("div",{className:`grid lg:grid-cols-2 gap-8 lg:gap-14 items-center ${r?"lg:[&>*:first-child]:order-2":""}`,children:[u.jsxs("div",{ref:n,className:"scrub-panel relative aspect-[16/10] border border-gd/30 overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,.5)]",children:[u.jsx("div",{className:"scrub-inner absolute inset-0",style:{background:t.grad},children:u.jsx("span",{className:"absolute inset-0 opacity-30",style:{backgroundImage:"repeating-linear-gradient(115deg,transparent 0 38px,rgba(197,160,82,.25) 38px 39px)"}})}),u.jsx("span",{className:"absolute bottom-3 left-5 font-serif text-5xl sm:text-6xl text-cg/80",children:String(e+1).padStart(2,"0")})]}),u.jsxs("div",{ref:i,className:"scrub-list",children:[u.jsx("h2",{className:"h2 gold",children:t.title}),u.jsx("ul",{className:"grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sg mb-8",children:t.items.map(s=>u.jsxs("li",{className:"flex gap-3 items-center",children:[u.jsx("span",{className:"w-2 h-2 rotate-45 bg-gd shrink-0"}),s]},s))}),u.jsx("a",{className:"btn-fill",href:"#contact",children:"Discuss your project"})]})]})})}function xT(){return u.jsxs(u.Fragment,{children:[u.jsx(Yn,{v:"industries",tall:!0,eyebrow:"Industries we serve",title:"Stone for every kind of space.",text:"From private homes to airports and campuses, we help each customer segment find the right material."}),u.jsx(Sf,{words:["Residential","Commercial","Construction","Institutional"]}),u2.map((t,e)=>u.jsxs("div",{children:[u.jsx(gT,{s:t,i:e}),e===1&&u.jsx(Sf,{reverse:!0,words:["Villas","Hotels","Airports","Campuses","Apartments"]})]},t.title)),u.jsx(Ri,{title:"Not sure where your project fits?",text:"Share your requirements and we will help you choose.",label:"Contact our team"})]})}function vT(){const t=[["Share","Tell us the category, colour, finish, quantity and application."],["Review","Our team reviews your requirement and suitable options."],["Source","We source the material from the right part of India."],["Quote","You receive pricing based on your requirements."]];return u.jsxs(u.Fragment,{children:[u.jsx(Yn,{v:"collection",eyebrow:"Our sourcing capabilities",title:"The right stone. Sourced for your requirements.",text:"Joys Marbles & Granites sources natural stones from different parts of India based on customer and project requirements."}),u.jsxs(ht,{alt:!0,children:[u.jsx(an,{children:"What we offer"}),u.jsx(yc,{items:d2})]}),u.jsxs(ht,{children:[u.jsx(an,{children:"How it works"}),u.jsx("div",{className:"grid gap-5 sm:grid-cols-2 lg:grid-cols-4",children:t.map(([e,n],i)=>u.jsx(qe,{delay:i*120,children:u.jsxs("div",{className:"border-t border-gd/50 pt-4",children:[u.jsx("span",{className:"gold font-serif text-5xl",children:i+1}),u.jsx("h3",{className:"text-2xl text-cg mt-1",children:e}),u.jsx("p",{className:"text-sg text-[15px]",children:n})]})},e))})]}),u.jsx(Ri,{title:"Share your requirements.",text:"The more detail you share, the better we can help.",label:"Share your requirements"})]})}async function _T(t){return await new Promise(n=>setTimeout(n,600)),{id:`JMG-${Date.now().toString(36).toUpperCase()}`}}const yT=["Marbles","Granites","Kota Stones","Quartz","Kadapa Stones"],ST=["Product Enquiry","Request Pricing","Bulk Requirement","Project Enquiry","General Enquiry"],MT=["","Polished","Matte / Honed","Lapatra","Not sure"],tn="w-full bg-white/5 border border-gd/30 text-wh px-3.5 py-3 font-light text-base rounded-none placeholder:text-sg/80 focus:border-cg focus:bg-white/10 outline-none transition",nn="block text-xs tracking-wider uppercase text-cg mb-1.5";function wT({stone:t,setStone:e,category:n=""}){const[i,r]=ae.useState("idle"),[s,a]=ae.useState(""),[o,l]=ae.useState(""),c=async f=>{f.preventDefault();const p=new FormData(f.currentTarget);if(p.get("website"))return;const d=S=>String(p.get(S)??"").trim();if(!d("name")||!d("phone")||!d("category")||!d("location")){l("Please fill the required fields marked *.");return}if(!/^[+\d][\d\s-]{7,}$/.test(d("phone"))){l("Please enter a valid phone number.");return}l(""),r("sending");const m=p.get("file"),{id:_}=await _T({name:d("name"),phone:d("phone"),category:d("category"),location:d("location"),email:d("email"),company:d("company"),stone:d("stone"),quantity:d("quantity"),dimensions:d("dimensions"),finish:d("finish"),application:d("application"),message:d("message"),type:d("type"),file:m instanceof File?m.name:""});a(_),r("done")};return i==="done"?u.jsxs("div",{className:"max-w-[760px] mx-auto mt-8 border border-gd p-7 sm:p-10 text-center",role:"status",children:[u.jsx("h3",{className:"gold text-3xl sm:text-4xl",children:"Thank you."}),u.jsx("p",{className:"text-sg mt-3",children:"Thank you for contacting Joys Marbles & Granites. Your enquiry has been received. Our team will get in touch with you shortly."}),u.jsxs("p",{className:"text-cg text-sm mt-3",children:["Reference: ",s]}),u.jsx("a",{className:"btn mt-6",href:Xi(t),target:"_blank",rel:"noopener noreferrer",children:"Continue on WhatsApp"})]}):u.jsxs("form",{onSubmit:c,noValidate:!0,className:"grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[760px] mx-auto mt-8 p-5 sm:p-8 border border-gd/35 bg-[rgba(20,20,20,.8)] text-left",children:[u.jsxs("div",{children:[u.jsx("label",{className:nn,htmlFor:"f-name",children:"Full name *"}),u.jsx("input",{id:"f-name",className:tn,name:"name",autoComplete:"name",required:!0})]}),u.jsxs("div",{children:[u.jsx("label",{className:nn,htmlFor:"f-phone",children:"Phone number *"}),u.jsx("input",{id:"f-phone",className:tn,name:"phone",type:"tel",inputMode:"tel",autoComplete:"tel",required:!0})]}),u.jsxs("div",{children:[u.jsx("label",{className:nn,htmlFor:"f-email",children:"Email address"}),u.jsx("input",{id:"f-email",className:tn,name:"email",type:"email",autoComplete:"email"})]}),u.jsxs("div",{children:[u.jsx("label",{className:nn,htmlFor:"f-company",children:"Company name"}),u.jsx("input",{id:"f-company",className:tn,name:"company",autoComplete:"organization"})]}),u.jsxs("div",{children:[u.jsx("label",{className:nn,htmlFor:"f-type",children:"Enquiry type"}),u.jsx("select",{id:"f-type",className:tn,name:"type",defaultValue:"Request Pricing",children:ST.map(f=>u.jsx("option",{className:"bg-ch",children:f},f))})]}),u.jsxs("div",{children:[u.jsx("label",{className:nn,htmlFor:"f-cat",children:"Product category *"}),u.jsxs("select",{id:"f-cat",className:tn,name:"category",defaultValue:n,required:!0,children:[u.jsx("option",{value:"",className:"bg-ch",children:"Select"}),yT.map(f=>u.jsx("option",{className:"bg-ch",children:f},f))]})]}),u.jsxs("div",{children:[u.jsx("label",{className:nn,htmlFor:"f-loc",children:"Location *"}),u.jsx("input",{id:"f-loc",className:tn,name:"location",placeholder:"City / project location",required:!0})]}),u.jsxs("div",{children:[u.jsx("label",{className:nn,htmlFor:"f-stone",children:"Selected stone"}),u.jsx("input",{id:"f-stone",className:tn,name:"stone",value:t,onChange:f=>e(f.target.value),placeholder:"e.g. Black Galaxy Granite"})]}),u.jsxs("div",{children:[u.jsx("label",{className:nn,htmlFor:"f-qty",children:"Required quantity"}),u.jsx("input",{id:"f-qty",className:tn,name:"quantity",placeholder:"e.g. 2,000 sq ft"})]}),u.jsxs("div",{children:[u.jsx("label",{className:nn,htmlFor:"f-dim",children:"Required dimensions"}),u.jsx("input",{id:"f-dim",className:tn,name:"dimensions",placeholder:"e.g. 600 x 600 mm, 18 mm"})]}),u.jsxs("div",{children:[u.jsx("label",{className:nn,htmlFor:"f-fin",children:"Preferred finish"}),u.jsx("select",{id:"f-fin",className:tn,name:"finish",defaultValue:"",children:MT.map(f=>u.jsx("option",{value:f,className:"bg-ch",children:f||"Select"},f))})]}),u.jsxs("div",{children:[u.jsx("label",{className:nn,htmlFor:"f-app",children:"Intended application"}),u.jsx("input",{id:"f-app",className:tn,name:"application",placeholder:"Flooring, countertop, cladding..."})]}),u.jsxs("div",{className:"sm:col-span-2",children:[u.jsx("label",{className:nn,htmlFor:"f-msg",children:"Project description"}),u.jsx("textarea",{id:"f-msg",className:tn,name:"message",rows:4})]}),u.jsxs("div",{className:"sm:col-span-2",children:[u.jsx("label",{className:nn,htmlFor:"f-file",children:"Reference image (optional)"}),u.jsx("input",{id:"f-file",className:`${tn} file:mr-4 file:border-0 file:bg-gd file:text-bk file:px-3 file:py-1.5`,name:"file",type:"file",accept:"image/jpeg,image/png,image/webp,application/pdf"})]}),u.jsx("input",{name:"website",tabIndex:-1,autoComplete:"off","aria-hidden":!0,className:"hidden"}),u.jsxs("p",{className:"sm:col-span-2 text-xs text-sg",children:["By submitting, you agree that Joys Marbles & Granites may use these details to respond to your enquiry. See our ",u.jsx("a",{className:"text-cg underline",href:"#privacy",children:"Privacy Policy"}),"."]}),o&&u.jsx("p",{className:"sm:col-span-2 text-[#ff9b8a] text-sm",role:"alert",children:o}),u.jsx("button",{className:"btn-fill sm:col-span-2 disabled:opacity-60",type:"submit",disabled:i==="sending",children:i==="sending"?"SENDING...":"SUBMIT ENQUIRY"})]})}function ET({sel:t,setSel:e}){const n=[["Phone",It.phone,It.phoneHref],["Email",It.email,`mailto:${It.email}`],["WhatsApp","Chat with our team",Xi(t)],["Address",It.address]];return u.jsxs(u.Fragment,{children:[u.jsx(Yn,{v:"contact",eyebrow:"Contact us",title:"Let’s build something exceptional.",text:"Have a project in mind? Reach out to us instantly.",children:u.jsxs("div",{className:"flex flex-wrap gap-3.5 mt-8",children:[u.jsx("a",{className:"btn",href:`mailto:${It.email}`,children:"Email us"}),u.jsx("a",{className:"btn",href:It.phoneHref,children:"Call us"}),u.jsx("a",{className:"btn-fill",href:Xi(t),target:"_blank",rel:"noopener noreferrer",children:"WhatsApp us"})]})}),u.jsxs(ht,{alt:!0,id:"enquiry",children:[u.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14",children:n.map(([i,r,s],a)=>u.jsx(qe,{delay:a*90,from:"zoom",children:u.jsxs("div",{className:"card h-full",children:[u.jsx("h3",{children:i}),s?u.jsx("a",{className:"text-sg text-[15px] break-words hover:text-cg",href:s,...i==="WhatsApp"?{target:"_blank",rel:"noopener noreferrer"}:{},children:r}):u.jsx("p",{children:r})]})},i))}),u.jsxs(qe,{className:"text-center",children:[u.jsx("h2",{className:"h2",children:"Get a quote / send an enquiry"}),u.jsx("p",{className:"lead mx-auto",children:"Our team will get back to you quickly with the best options and pricing tailored to your needs."})]}),u.jsx(qe,{children:u.jsx(wT,{stone:t,setStone:e})})]}),u.jsx(ht,{children:u.jsx(qe,{children:u.jsx("div",{className:"border border-gd/30 bg-bk/50 aspect-[16/7] min-h-[200px] grid place-items-center text-center p-6 text-sg",children:u.jsx("p",{children:"Google Map will appear here once the business address is confirmed."})})})})]})}function bT(){const[t,e]=ae.useState(0);return u.jsxs(u.Fragment,{children:[u.jsx(Yn,{v:"contact",eyebrow:"FAQs",title:"Frequently asked questions.",text:"Quick answers about our stones, sourcing and how to get pricing."}),u.jsx(ht,{alt:!0,children:u.jsx("div",{className:"max-w-[860px] mx-auto divide-y divide-gd/25 border-y border-gd/25",children:p2.map(([n,i],r)=>u.jsx(qe,{delay:r%4*60,children:u.jsxs("div",{children:[u.jsx("h2",{className:"!text-xl sm:!text-2xl !font-semibold",children:u.jsxs("button",{className:"w-full flex justify-between gap-4 text-left py-5 hover:text-cg transition","aria-expanded":t===r,onClick:()=>e(t===r?-1:r),children:[u.jsx("span",{children:n}),u.jsx("span",{className:`text-gd transition-transform duration-300 ${t===r?"rotate-45":""}`,"aria-hidden":!0,children:"+"})]})}),u.jsx("div",{className:`grid transition-[grid-template-rows] duration-500 ${t===r?"grid-rows-[1fr]":"grid-rows-[0fr]"}`,children:u.jsx("p",{className:"overflow-hidden text-sg text-[15px] sm:text-base",children:u.jsx("span",{className:"block pb-5",children:i})})})]})},n))})}),u.jsx(Ri,{title:"Still have a question?",text:"Our team is happy to help.",label:"Contact our team"})]})}const TT={privacy:["Privacy Policy",["We collect the details you submit through our enquiry forms (such as name, phone number, email, location and project requirements) only to respond to your enquiry and to follow up on quotations.","We do not sell your information. Access is limited to authorised team members, and uploaded files are stored securely.","To ask about or remove your data, contact us using the details on the Contact page."]],terms:["Terms & Conditions",["This website is an information and enquiry platform. It does not offer online purchasing. All prices and availability are confirmed by our team through a written quotation.","Images show representative colours and patterns. Natural stone varies from slab to slab; please request samples before finalising.","Company, client and project names appear for reference only and do not imply endorsement."]]};function AT({kind:t}){const[e,n]=TT[t];return u.jsxs(u.Fragment,{children:[u.jsx(Yn,{v:"about",title:e,text:"Draft text for company review. Replace with the approved policy before launch."}),u.jsx(ht,{alt:!0,children:u.jsx("div",{className:"space-y-4 text-sg max-w-[760px]",children:n.map(i=>u.jsx("p",{children:i},i))})})]})}const CT=["home","about","collection","stone","projects","clients","industries","sourcing","contact","faq","privacy","terms"],RT=[["home","Home"],["about","About Us"],["collection","Products"],["projects","Projects"],["industries","Industries"],["contact","Contact"]],mg={home:"",about:"About Us",collection:"Products",stone:"Stone details",projects:"Projects",clients:"Trusted By",industries:"Industries We Serve",sourcing:"Sourcing Capabilities",contact:"Contact Us",faq:"FAQs",privacy:"Privacy Policy",terms:"Terms & Conditions"},gg=()=>{const[t="",...e]=decodeURIComponent(location.hash.slice(1)).split("/");return{page:CT.includes(t)?t:"home",param:e.join("/")}};function PT(){const[t,e]=ae.useState(gg),[n,i]=ae.useState(!1),[r,s]=ae.useState(""),[a,o]=ae.useState(!1),[l,c]=ae.useState(!1),{page:f,param:p}=t;Ws(m=>c(m>40)),ae.useEffect(()=>{const m=()=>{e(gg()),i(!1),scrollTo(0,0)};addEventListener("hashchange",m);const _=setTimeout(()=>o(!0),700);return()=>{removeEventListener("hashchange",m),clearTimeout(_)}},[]),ae.useEffect(()=>{document.title=(mg[f]?`${mg[f]} | `:"")+"Joys Marbles & Granites"+(f==="home"?" | Premium Natural Stone Supplier Since 1998":"")},[f]);const d=f==="stone"?"collection":f;return u.jsxs(u.Fragment,{children:[u.jsx("div",{className:`fixed inset-0 z-[100] bg-bk grid place-items-center transition-all duration-700 ${a?"opacity-0 invisible":""}`,"aria-hidden":a,children:u.jsx("b",{className:"gold font-serif text-6xl",children:"Joys"})}),u.jsx(x2,{}),u.jsxs("nav",{className:`fixed top-0 inset-x-0 z-50 flex items-center gap-6 px-[5vw] pb-3.5 backdrop-blur-md border-b transition-all duration-500 ${l?"bg-bk/90 border-gd/40":"bg-bk/60 border-gd/15"}`,style:{paddingTop:`calc(${l?8:14}px + env(safe-area-inset-top, 0px))`},"aria-label":"Primary",children:[u.jsxs("a",{href:"#home",className:"mr-auto font-serif font-bold text-2xl leading-none",children:["Joys",u.jsx("small",{className:"block font-sans font-normal text-[10px] tracking-[.3em] text-sg mt-1",children:"MARBLES & GRANITES"})]}),u.jsxs("div",{className:`${n?"flex":"hidden"} lg:flex absolute lg:static top-full inset-x-0 flex-col lg:flex-row gap-5 lg:gap-6 bg-bk lg:bg-transparent px-[5vw] py-5 lg:p-0 border-b border-gd lg:border-0 text-[15px]`,children:[RT.map(([m,_])=>u.jsx("a",{href:`#${m}`,"aria-current":d===m?"page":void 0,className:`pb-0.5 border-b transition ${d===m?"text-cg border-gd":"text-sg border-transparent hover:text-cg hover:border-gd"}`,children:_},m)),u.jsx("a",{className:"btn-fill lg:hidden text-center",href:"#contact",children:"REQUEST A QUOTE"}),u.jsx("a",{className:"btn lg:hidden text-center",href:Xi(r),target:"_blank",rel:"noopener noreferrer",children:"WHATSAPP US"})]}),u.jsx("a",{className:"btn hidden xl:inline-block !py-2",href:Xi(r),target:"_blank",rel:"noopener noreferrer",children:"WHATSAPP US"}),u.jsx("a",{className:"btn-fill hidden lg:inline-block !py-2",href:"#contact",children:"REQUEST A QUOTE"}),u.jsx("button",{className:"lg:hidden text-2xl w-10 h-10 grid place-items-center","aria-label":"Menu","aria-expanded":n,onClick:()=>i(m=>!m),children:n?"✕":"☰"})]}),u.jsxs("main",{className:"page relative z-10 min-h-screen",children:[f==="home"&&u.jsx(sT,{}),f==="about"&&u.jsx(dT,{}),f==="collection"&&u.jsx(fT,{initial:p,onPick:s}),f==="stone"&&u.jsx(hT,{id:p,onPick:s}),f==="projects"&&u.jsx(pT,{}),f==="clients"&&u.jsx(mT,{}),f==="industries"&&u.jsx(xT,{}),f==="sourcing"&&u.jsx(vT,{}),f==="contact"&&u.jsx(ET,{sel:r,setSel:s}),f==="faq"&&u.jsx(bT,{}),(f==="privacy"||f==="terms")&&u.jsx(AT,{kind:f})]},f+p),u.jsxs("footer",{className:"relative z-10 text-sm text-sg px-[5vw] py-14 border-t border-gd/30 bg-bk/90",children:[u.jsxs("div",{className:"wrap grid gap-10 sm:grid-cols-2 lg:grid-cols-4",children:[u.jsxs("div",{children:[u.jsx("div",{className:"font-serif font-bold text-2xl text-wh mb-2",children:It.name}),u.jsxs("p",{children:["Premium natural stone supplier since ",It.founded,". ",It.city,"."]})]}),u.jsxs("div",{children:[u.jsx("h4",{className:"text-cg tracking-[.2em] text-xs uppercase mb-3",children:"Explore"}),u.jsx("ul",{className:"space-y-2",children:[["about","About Us"],["collection","Products"],["projects","Projects"],["clients","Trusted By"],["industries","Industries"],["sourcing","Sourcing"],["faq","FAQs"]].map(([m,_])=>u.jsx("li",{children:u.jsx("a",{className:"hover:text-cg",href:`#${m}`,children:_})},m))})]}),u.jsxs("div",{children:[u.jsx("h4",{className:"text-cg tracking-[.2em] text-xs uppercase mb-3",children:"Collections"}),u.jsx("ul",{className:"space-y-2",children:ql.map(m=>u.jsx("li",{children:u.jsx("a",{className:"hover:text-cg",href:`#collection/${encodeURIComponent(m.title)}`,children:m.title})},m.title))})]}),u.jsxs("div",{children:[u.jsx("h4",{className:"text-cg tracking-[.2em] text-xs uppercase mb-3",children:"Contact"}),u.jsxs("ul",{className:"space-y-2",children:[u.jsx("li",{children:It.address}),u.jsx("li",{children:u.jsx("a",{className:"hover:text-cg",href:It.phoneHref,children:It.phone})}),u.jsx("li",{children:u.jsx("a",{className:"hover:text-cg break-all",href:`mailto:${It.email}`,children:It.email})}),u.jsx("li",{children:u.jsx("a",{className:"hover:text-cg",href:Xi(),target:"_blank",rel:"noopener noreferrer",children:"WhatsApp"})})]})]})]}),u.jsxs("div",{className:"wrap mt-10 pt-6 border-t border-gd/20 flex flex-wrap gap-x-6 gap-y-2 justify-between text-xs",children:[u.jsxs("span",{children:["© ",new Date().getFullYear()," ",It.name,". All rights reserved."]}),u.jsxs("span",{className:"flex gap-5",children:[u.jsx("a",{className:"hover:text-cg",href:"#privacy",children:"Privacy Policy"}),u.jsx("a",{className:"hover:text-cg",href:"#terms",children:"Terms & Conditions"})]})]})]}),u.jsx("a",{className:"fixed right-4 z-40 bg-[#25D366] text-[#073] px-5 py-3 rounded-full font-medium text-sm shadow-xl hover:scale-105 transition",style:{bottom:"calc(16px + env(safe-area-inset-bottom, 0px))"},href:Xi(r),target:"_blank",rel:"noopener noreferrer",children:"WhatsApp us"})]})}Rx(document.getElementById("root")).render(u.jsx(ae.StrictMode,{children:u.jsx(PT,{})}));
