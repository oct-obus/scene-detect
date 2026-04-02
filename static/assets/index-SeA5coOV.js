var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(e&&(t=e(e=0)),t),s=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,a)=>(a=n==null?{}:e(i(n)),c(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function ie(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ae(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var oe=/\/+/g;function se(e,t){return typeof e==`object`&&e&&e.key!=null?ae(``+e.key):t.toString(36)}function ce(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function le(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,le(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+se(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(oe,`$&/`)+`/`),le(o,r,i,``,function(e){return e})):o!=null&&(ie(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(oe,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+se(a,u),c+=le(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+se(a,u++),c+=le(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return le(ce(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ue(e,t,n){if(e==null)return e;var r=[],i=0;return le(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function de(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var w=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},T={map:ue,forEach:function(e,t,n){ue(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ue(e,function(){t++}),t},toArray:function(e){return ue(e,function(e){return e})||[]},only:function(e){if(!ie(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=T,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ie,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:de}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,w)}catch(e){w(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.4`})),d=s(((e,t)=>{t.exports=u()})),f=s((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,ie());else{var t=n(l);t!==null&&se(x,t.startTime-e)}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function re(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&se(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ie():ee=!1}}}var ie;if(typeof y==`function`)ie=function(){y(re)};else if(typeof MessageChannel<`u`){var ae=new MessageChannel,oe=ae.port2;ae.port1.onmessage=re,ie=function(){oe.postMessage(null)}}else ie=function(){_(re,0)};function se(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,se(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,ie()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),p=s(((e,t)=>{t.exports=f()})),m=s((e=>{var t=d();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.4`})),h=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=s((e=>{var t=p(),n=d(),r=h();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var m=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),ie=Symbol.for(`react.lazy`),ae=Symbol.for(`react.activity`),oe=Symbol.for(`react.memo_cache_sentinel`),se=Symbol.iterator;function ce(e){return typeof e!=`object`||!e?null:(e=se&&e[se]||e[`@@iterator`],typeof e==`function`?e:null)}var le=Symbol.for(`react.client.reference`);function ue(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===le?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case ae:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?ue(e.type)||`Memo`:t;case ie:t=e._payload,e=e._init;try{return ue(e(t))}catch{}}return null}var de=Array.isArray,w=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},pe=[],me=-1;function he(e){return{current:e}}function ge(e){0>me||(e.current=pe[me],pe[me]=null,me--)}function E(e,t){me++,pe[me]=e.current,e.current=t}var _e=he(null),ve=he(null),ye=he(null),be=he(null);function xe(e,t){switch(E(ye,t),E(ve,e),E(_e,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}ge(_e),E(_e,e)}function D(){ge(_e),ge(ve),ge(ye)}function Se(e){e.memoizedState!==null&&E(be,e);var t=_e.current,n=Hd(t,e.type);t!==n&&(E(ve,e),E(_e,n))}function Ce(e){ve.current===e&&(ge(_e),ge(ve)),be.current===e&&(ge(be),Qf._currentValue=fe)}var we,Te;function Ee(e){if(we===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);we=t&&t[1]||``,Te=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+we+e+Te}var De=!1;function Oe(e,t){if(!e||De)return``;De=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{De=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ee(n):``}function ke(e,t){switch(e.tag){case 26:case 27:case 5:return Ee(e.type);case 16:return Ee(`Lazy`);case 13:return e.child!==t&&t!==null?Ee(`Suspense Fallback`):Ee(`Suspense`);case 19:return Ee(`SuspenseList`);case 0:case 15:return Oe(e.type,!1);case 11:return Oe(e.type.render,!1);case 1:return Oe(e.type,!0);case 31:return Ee(`Activity`);default:return``}}function Ae(e){try{var t=``,n=null;do t+=ke(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var je=Object.prototype.hasOwnProperty,Me=t.unstable_scheduleCallback,Ne=t.unstable_cancelCallback,Pe=t.unstable_shouldYield,Fe=t.unstable_requestPaint,Ie=t.unstable_now,Le=t.unstable_getCurrentPriorityLevel,Re=t.unstable_ImmediatePriority,ze=t.unstable_UserBlockingPriority,Be=t.unstable_NormalPriority,Ve=t.unstable_LowPriority,He=t.unstable_IdlePriority,Ue=t.log,We=t.unstable_setDisableYieldValue,Ge=null,Ke=null;function qe(e){if(typeof Ue==`function`&&We(e),Ke&&typeof Ke.setStrictMode==`function`)try{Ke.setStrictMode(Ge,e)}catch{}}var O=Math.clz32?Math.clz32:Xe,Je=Math.log,Ye=Math.LN2;function Xe(e){return e>>>=0,e===0?32:31-(Je(e)/Ye|0)|0}var Ze=256,Qe=262144,$e=4194304;function et(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=et(n))):i=et(o):i=et(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=et(n))):i=et(o)):i=et(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function k(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function nt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rt(){var e=$e;return $e<<=1,!($e&62914560)&&($e=4194304),e}function A(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function j(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function it(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-O(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&at(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function at(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-O(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ot(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-O(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function M(e,t){var n=t&-t;return n=n&42?1:st(n),(n&(e.suspendedLanes|t))===0?n:0}function st(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ct(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function lt(){var e=T.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ut(e,t){var n=T.p;try{return T.p=e,t()}finally{T.p=n}}var N=Math.random().toString(36).slice(2),dt=`__reactFiber$`+N,P=`__reactProps$`+N,ft=`__reactContainer$`+N,F=`__reactEvents$`+N,pt=`__reactListeners$`+N,mt=`__reactHandles$`+N,ht=`__reactResources$`+N,gt=`__reactMarker$`+N;function _t(e){delete e[dt],delete e[P],delete e[F],delete e[pt],delete e[mt]}function vt(e){var t=e[dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ft]||n[dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[dt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function I(e){if(e=e[dt]||e[ft]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function L(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function yt(e){var t=e[ht];return t||=e[ht]={hoistableStyles:new Map,hoistableScripts:new Map},t}function bt(e){e[gt]=!0}var xt=new Set,St={};function Ct(e,t){wt(e,t),wt(e+`Capture`,t)}function wt(e,t){for(St[e]=t,e=0;e<t.length;e++)xt.add(t[e])}var Tt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Et={},Dt={};function Ot(e){return je.call(Dt,e)?!0:je.call(Et,e)?!1:Tt.test(e)?Dt[e]=!0:(Et[e]=!0,!1)}function kt(e,t,n){if(Ot(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function At(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function jt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Mt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Nt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Pt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ft(e){if(!e._valueTracker){var t=Nt(e)?`checked`:`value`;e._valueTracker=Pt(e,t,``+e[t])}}function It(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Nt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Lt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Rt=/[\n"\\]/g;function zt(e){return e.replace(Rt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Bt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Mt(t)):e.value!==``+Mt(t)&&(e.value=``+Mt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Ht(e,o,Mt(n)):Ht(e,o,Mt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Mt(s):e.removeAttribute(`name`)}function Vt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ft(e);return}n=n==null?``:``+Mt(n),t=t==null?n:``+Mt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ft(e)}function Ht(e,t,n){t===`number`&&Lt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Ut(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Mt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Wt(e,t,n){if(t!=null&&(t=``+Mt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Mt(n)}function Gt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(de(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Mt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ft(e)}function Kt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var qt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Jt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||qt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Yt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Jt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Jt(e,o,t[o])}function Xt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Zt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Qt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $t(e){return Qt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function en(){}var tn=null;function nn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rn=null,an=null;function on(e){var t=I(e);if(t&&(e=t.stateNode)){var n=e[P]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Bt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+zt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[P]||null;if(!a)throw Error(i(90));Bt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&It(r)}break a;case`textarea`:Wt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Ut(e,!!n.multiple,t,!1)}}}var sn=!1;function cn(e,t,n){if(sn)return e(t,n);sn=!0;try{return e(t)}finally{if(sn=!1,(rn!==null||an!==null)&&(bu(),rn&&(t=rn,e=an,an=rn=null,on(t),e)))for(t=0;t<e.length;t++)on(e[t])}}function ln(e,t){var n=e.stateNode;if(n===null)return null;var r=n[P]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var un=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),dn=!1;if(un)try{var fn={};Object.defineProperty(fn,`passive`,{get:function(){dn=!0}}),window.addEventListener(`test`,fn,fn),window.removeEventListener(`test`,fn,fn)}catch{dn=!1}var pn=null,mn=null,hn=null;function gn(){if(hn)return hn;var e,t=mn,n=t.length,r,i=`value`in pn?pn.value:pn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return hn=i.slice(e,1<r?1-r:void 0)}function _n(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vn(){return!0}function yn(){return!1}function bn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?vn:yn,this.isPropagationStopped=yn,this}return m(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=vn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=vn)},persist:function(){},isPersistent:vn}),t}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sn=bn(xn),Cn=m({},xn,{view:0,detail:0}),wn=bn(Cn),Tn,En,Dn,On=m({},Cn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Dn&&(Dn&&e.type===`mousemove`?(Tn=e.screenX-Dn.screenX,En=e.screenY-Dn.screenY):En=Tn=0,Dn=e),Tn)},movementY:function(e){return`movementY`in e?e.movementY:En}}),kn=bn(On),An=bn(m({},On,{dataTransfer:0})),jn=bn(m({},Cn,{relatedTarget:0})),Mn=bn(m({},xn,{animationName:0,elapsedTime:0,pseudoElement:0})),Nn=bn(m({},xn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Pn=bn(m({},xn,{data:0})),Fn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},In={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Ln={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Rn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ln[e])?!!t[e]:!1}function zn(){return Rn}var Bn=bn(m({},Cn,{key:function(e){if(e.key){var t=Fn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=_n(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?In[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zn,charCode:function(e){return e.type===`keypress`?_n(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?_n(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Vn=bn(m({},On,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Hn=bn(m({},Cn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zn})),Un=bn(m({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Wn=bn(m({},On,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Gn=bn(m({},xn,{newState:0,oldState:0})),Kn=[9,13,27,32],qn=un&&`CompositionEvent`in window,Jn=null;un&&`documentMode`in document&&(Jn=document.documentMode);var Yn=un&&`TextEvent`in window&&!Jn,Xn=un&&(!qn||Jn&&8<Jn&&11>=Jn),Zn=` `,Qn=!1;function $n(e,t){switch(e){case`keyup`:return Kn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function er(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var tr=!1;function nr(e,t){switch(e){case`compositionend`:return er(t);case`keypress`:return t.which===32?(Qn=!0,Zn):null;case`textInput`:return e=t.data,e===Zn&&Qn?null:e;default:return null}}function rr(e,t){if(tr)return e===`compositionend`||!qn&&$n(e,t)?(e=gn(),hn=mn=pn=null,tr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Xn&&t.locale!==`ko`?null:t.data;default:return null}}var ir={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function R(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!ir[e.type]:t===`textarea`}function ar(e,t,n,r){rn?an?an.push(r):an=[r]:rn=r,t=Ed(t,`onChange`),0<t.length&&(n=new Sn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var or=null,sr=null;function cr(e){yd(e,0)}function lr(e){if(It(L(e)))return e}function ur(e,t){if(e===`change`)return t}var dr=!1;if(un){var fr;if(un){var pr=`oninput`in document;if(!pr){var mr=document.createElement(`div`);mr.setAttribute(`oninput`,`return;`),pr=typeof mr.oninput==`function`}fr=pr}else fr=!1;dr=fr&&(!document.documentMode||9<document.documentMode)}function hr(){or&&(or.detachEvent(`onpropertychange`,gr),sr=or=null)}function gr(e){if(e.propertyName===`value`&&lr(sr)){var t=[];ar(t,sr,e,nn(e)),cn(cr,t)}}function _r(e,t,n){e===`focusin`?(hr(),or=t,sr=n,or.attachEvent(`onpropertychange`,gr)):e===`focusout`&&hr()}function vr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return lr(sr)}function yr(e,t){if(e===`click`)return lr(t)}function br(e,t){if(e===`input`||e===`change`)return lr(t)}function xr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Sr=typeof Object.is==`function`?Object.is:xr;function Cr(e,t){if(Sr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!je.call(t,i)||!Sr(e[i],t[i]))return!1}return!0}function wr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tr(e,t){var n=wr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=wr(n)}}function Er(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Er(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Dr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Lt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Lt(e.document)}return t}function Or(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var kr=un&&`documentMode`in document&&11>=document.documentMode,Ar=null,jr=null,Mr=null,Nr=!1;function Pr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nr||Ar==null||Ar!==Lt(r)||(r=Ar,`selectionStart`in r&&Or(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mr&&Cr(Mr,r)||(Mr=r,r=Ed(jr,`onSelect`),0<r.length&&(t=new Sn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Ar)))}function Fr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Ir={animationend:Fr(`Animation`,`AnimationEnd`),animationiteration:Fr(`Animation`,`AnimationIteration`),animationstart:Fr(`Animation`,`AnimationStart`),transitionrun:Fr(`Transition`,`TransitionRun`),transitionstart:Fr(`Transition`,`TransitionStart`),transitioncancel:Fr(`Transition`,`TransitionCancel`),transitionend:Fr(`Transition`,`TransitionEnd`)},Lr={},Rr={};un&&(Rr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),`TransitionEvent`in window||delete Ir.transitionend.transition);function zr(e){if(Lr[e])return Lr[e];if(!Ir[e])return e;var t=Ir[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Rr)return Lr[e]=t[n];return e}var Br=zr(`animationend`),Vr=zr(`animationiteration`),Hr=zr(`animationstart`),Ur=zr(`transitionrun`),Wr=zr(`transitionstart`),Gr=zr(`transitioncancel`),Kr=zr(`transitionend`),qr=new Map,Jr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Jr.push(`scrollEnd`);function Yr(e,t){qr.set(e,t),Ct(t,[e])}var Xr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Zr=[],Qr=0,$r=0;function ei(){for(var e=Qr,t=$r=Qr=0;t<e;){var n=Zr[t];Zr[t++]=null;var r=Zr[t];Zr[t++]=null;var i=Zr[t];Zr[t++]=null;var a=Zr[t];if(Zr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ii(n,i,a)}}function ti(e,t,n,r){Zr[Qr++]=e,Zr[Qr++]=t,Zr[Qr++]=n,Zr[Qr++]=r,$r|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ni(e,t,n,r){return ti(e,t,n,r),z(e)}function ri(e,t){return ti(e,null,null,t),z(e)}function ii(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-O(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function z(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ai={};function oi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(e,t,n,r){return new oi(e,t,n,r)}function ci(e){return e=e.prototype,!(!e||!e.isReactComponent)}function li(e,t){var n=e.alternate;return n===null?(n=si(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ui(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function di(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)ci(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,_e.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ae:return e=si(31,n,t,a),e.elementType=ae,e.lanes=o,e;case y:return fi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=si(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case te:return e=si(13,n,t,a),e.elementType=te,e.lanes=o,e;case ne:return e=si(19,n,t,a),e.elementType=ne,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case C:s=11;break a;case re:s=14;break a;case ie:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=si(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function fi(e,t,n,r){return e=si(7,e,r,t),e.lanes=n,e}function pi(e,t,n){return e=si(6,e,null,t),e.lanes=n,e}function mi(e){var t=si(18,null,null,0);return t.stateNode=e,t}function hi(e,t,n){return t=si(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var gi=new WeakMap;function _i(e,t){if(typeof e==`object`&&e){var n=gi.get(e);return n===void 0?(t={value:e,source:t,stack:Ae(t)},gi.set(e,t),t):n}return{value:e,source:t,stack:Ae(t)}}var vi=[],yi=0,bi=null,xi=0,Si=[],Ci=0,wi=null,Ti=1,Ei=``;function Di(e,t){vi[yi++]=xi,vi[yi++]=bi,bi=e,xi=t}function Oi(e,t,n){Si[Ci++]=Ti,Si[Ci++]=Ei,Si[Ci++]=wi,wi=e;var r=Ti;e=Ei;var i=32-O(r)-1;r&=~(1<<i),n+=1;var a=32-O(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ti=1<<32-O(t)+i|n<<i|r,Ei=a+e}else Ti=1<<a|n<<i|r,Ei=e}function ki(e){e.return!==null&&(Di(e,1),Oi(e,1,0))}function Ai(e){for(;e===bi;)bi=vi[--yi],vi[yi]=null,xi=vi[--yi],vi[yi]=null;for(;e===wi;)wi=Si[--Ci],Si[Ci]=null,Ei=Si[--Ci],Si[Ci]=null,Ti=Si[--Ci],Si[Ci]=null}function ji(e,t){Si[Ci++]=Ti,Si[Ci++]=Ei,Si[Ci++]=wi,Ti=t.id,Ei=t.overflow,wi=e}var Mi=null,B=null,V=!1,Ni=null,Pi=!1,Fi=Error(i(519));function Ii(e){throw Hi(_i(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Fi}function Li(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[dt]=e,t[P]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Vt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Gt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=en),t=!0):t=!1,t||Ii(e,!0)}function Ri(e){for(Mi=e.return;Mi;)switch(Mi.tag){case 5:case 31:case 13:Pi=!1;return;case 27:case 3:Pi=!0;return;default:Mi=Mi.return}}function zi(e){if(e!==Mi)return!1;if(!V)return Ri(e),V=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&B&&Ii(e),Ri(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));B=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));B=uf(e)}else t===27?(t=B,Zd(e.type)?(e=lf,lf=null,B=e):B=t):B=Mi?cf(e.stateNode.nextSibling):null;return!0}function Bi(){B=Mi=null,V=!1}function Vi(){var e=Ni;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Ni=null),e}function Hi(e){Ni===null?Ni=[e]:Ni.push(e)}var Ui=he(null),Wi=null,Gi=null;function Ki(e,t,n){E(Ui,t._currentValue),t._currentValue=n}function qi(e){e._currentValue=Ui.current,ge(Ui)}function Ji(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Yi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ji(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Ji(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Xi(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Sr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===be.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&Yi(t,e,n,r),t.flags|=262144}function Zi(e){for(e=e.firstContext;e!==null;){if(!Sr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Qi(e){Wi=e,Gi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function $i(e){return ta(Wi,e)}function ea(e,t){return Wi===null&&Qi(e),ta(e,t)}function ta(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Gi===null){if(e===null)throw Error(i(308));Gi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Gi=Gi.next=t;return n}var na=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ra=t.unstable_scheduleCallback,ia=t.unstable_NormalPriority,aa={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function oa(){return{controller:new na,data:new Map,refCount:0}}function sa(e){e.refCount--,e.refCount===0&&ra(ia,function(){e.controller.abort()})}var ca=null,la=0,ua=0,da=null;function fa(e,t){if(ca===null){var n=ca=[];la=0,ua=dd(),da={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return la++,t.then(pa,pa),t}function pa(){if(--la===0&&ca!==null){da!==null&&(da.status=`fulfilled`);var e=ca;ca=null,ua=0,da=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ma(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ha=w.S;w.S=function(e,t){eu=Ie(),typeof t==`object`&&t&&typeof t.then==`function`&&fa(e,t),ha!==null&&ha(e,t)};var ga=he(null);function _a(){var e=ga.current;return e===null?q.pooledCache:e}function va(e,t){t===null?E(ga,ga.current):E(ga,t.pool)}function ya(){var e=_a();return e===null?null:{parent:aa._currentValue,pool:e}}var ba=Error(i(460)),xa=Error(i(474)),Sa=Error(i(542)),Ca={then:function(){}};function wa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ta(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(en,en),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ka(e),e;default:if(typeof t.status==`string`)t.then(en,en);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ka(e),e}throw Da=t,ba}}function Ea(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Da=e,ba):e}}var Da=null;function Oa(){if(Da===null)throw Error(i(459));var e=Da;return Da=null,e}function ka(e){if(e===ba||e===Sa)throw Error(i(483))}var Aa=null,ja=0;function Ma(e){var t=ja;return ja+=1,Aa===null&&(Aa=[]),Ta(Aa,e,t)}function Na(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Pa(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Fa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=li(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=pi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===ie&&Ea(i)===t.type)?(t=a(t,n.props),Na(t,n),t.return=e,t):(t=di(n.type,n.key,n.props,null,e.mode,r),Na(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=hi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=fi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=pi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=di(t.type,t.key,t.props,null,e.mode,n),Na(n,t),n.return=e,n;case v:return t=hi(t,e.mode,n),t.return=e,t;case ie:return t=Ea(t),f(e,t,n)}if(de(t)||ce(t))return t=fi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ma(t),n);if(t.$$typeof===S)return f(e,ea(e,t),n);Pa(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case ie:return n=Ea(n),p(e,t,n,r)}if(de(n)||ce(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ma(n),r);if(n.$$typeof===S)return p(e,t,ea(e,n),r);Pa(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ie:return r=Ea(r),m(e,t,n,r,i)}if(de(r)||ce(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ma(r),i);if(r.$$typeof===S)return m(e,t,n,ea(t,r),i);Pa(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),V&&Di(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return V&&Di(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),V&&Di(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),V&&Di(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return V&&Di(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),V&&Di(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ie&&Ea(l)===r.type){n(e,r.sibling),c=a(r,o.props),Na(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=fi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=di(o.type,o.key,o.props,null,e.mode,c),Na(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=hi(o,e.mode,c),c.return=e,e=c}return s(e);case ie:return o=Ea(o),b(e,r,o,c)}if(de(o))return h(e,r,o,c);if(ce(o)){if(l=ce(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ma(o),c);if(o.$$typeof===S)return b(e,r,ea(e,o),c);Pa(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=pi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{ja=0;var i=b(e,t,n,r);return Aa=null,i}catch(t){if(t===ba||t===Sa)throw t;var a=si(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ia=Fa(!0),La=Fa(!1),Ra=!1;function za(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ba(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ha(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=z(e),ii(e,null,n),t}return ti(e,r,t,n),z(e)}function Ua(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}function Wa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ga=!1;function Ka(){if(Ga){var e=da;if(e!==null)throw e}}function qa(e,t,n,r){Ga=!1;var i=e.updateQueue;Ra=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===ua&&(Ga=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,f);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,f=typeof h==`function`?h.call(_,d,f):h,f==null)break a;d=m({},d,f);break a;case 2:Ra=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Ja(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Ya(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ja(n[e],t)}var Xa=he(null),Za=he(0);function Qa(e,t){e=Ul,E(Za,e),E(Xa,t),Ul=e|t.baseLanes}function $a(){E(Za,Ul),E(Xa,Xa.current)}function eo(){Ul=Za.current,ge(Xa),ge(Za)}var to=he(null),no=null;function ro(e){var t=e.alternate;E(co,co.current&1),E(to,e),no===null&&(t===null||Xa.current!==null||t.memoizedState!==null)&&(no=e)}function io(e){E(co,co.current),E(to,e),no===null&&(no=e)}function ao(e){e.tag===22?(E(co,co.current),E(to,e),no===null&&(no=e)):oo(e)}function oo(){E(co,co.current),E(to,to.current)}function so(e){ge(to),no===e&&(no=null),ge(co)}var co=he(0);function lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var uo=0,H=null,U=null,fo=null,po=!1,mo=!1,ho=!1,go=0,_o=0,vo=null,yo=0;function bo(){throw Error(i(321))}function xo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Sr(e[n],t[n]))return!1;return!0}function So(e,t,n,r,i,a){return uo=a,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,w.H=e===null||e.memoizedState===null?zs:Bs,ho=!1,a=n(r,i),ho=!1,mo&&(a=wo(t,n,r,i)),Co(e),a}function Co(e){w.H=Rs;var t=U!==null&&U.next!==null;if(uo=0,fo=U=H=null,po=!1,_o=0,vo=null,t)throw Error(i(300));e===null||rc||(e=e.dependencies,e!==null&&Zi(e)&&(rc=!0))}function wo(e,t,n,r){H=e;var a=0;do{if(mo&&(vo=null),_o=0,mo=!1,25<=a)throw Error(i(301));if(a+=1,fo=U=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}w.H=Vs,o=t(n,r)}while(mo);return o}function To(){var e=w.H,t=e.useState()[0];return t=typeof t.then==`function`?Mo(t):t,e=e.useState()[0],(U===null?null:U.memoizedState)!==e&&(H.flags|=1024),t}function Eo(){var e=go!==0;return go=0,e}function Do(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Oo(e){if(po){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}po=!1}uo=0,fo=U=H=null,mo=!1,_o=go=0,vo=null}function ko(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fo===null?H.memoizedState=fo=e:fo=fo.next=e,fo}function Ao(){if(U===null){var e=H.alternate;e=e===null?null:e.memoizedState}else e=U.next;var t=fo===null?H.memoizedState:fo.next;if(t!==null)fo=t,U=e;else{if(e===null)throw H.alternate===null?Error(i(467)):Error(i(310));U=e,e={memoizedState:U.memoizedState,baseState:U.baseState,baseQueue:U.baseQueue,queue:U.queue,next:null},fo===null?H.memoizedState=fo=e:fo=fo.next=e}return fo}function jo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mo(e){var t=_o;return _o+=1,vo===null&&(vo=[]),e=Ta(vo,e,t),t=H,(fo===null?t.memoizedState:fo.next)===null&&(t=t.alternate,w.H=t===null||t.memoizedState===null?zs:Bs),e}function No(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Mo(e);if(e.$$typeof===S)return $i(e)}throw Error(i(438,String(e)))}function Po(e){var t=null,n=H.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=H.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=jo(),H.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=oe;return t.index++,n}function Fo(e,t){return typeof t==`function`?t(e):t}function Io(e){return Lo(Ao(),U,e)}function Lo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(uo&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ua&&(d=!0);else if((uo&p)===p){u=u.next,p===ua&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,H.lanes|=p,Gl|=p;f=u.action,ho&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,H.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Sr(o,e.memoizedState)&&(rc=!0,d&&(n=da,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ro(e){var t=Ao(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Sr(o,t.memoizedState)||(rc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function zo(e,t,n){var r=H,a=Ao(),o=V;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Sr((U||a).memoizedState,n);if(s&&(a.memoizedState=n,rc=!0),a=a.queue,us(Ho.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||fo!==null&&fo.memoizedState.tag&1){if(r.flags|=2048,as(9,{destroy:void 0},Vo.bind(null,r,a,n,t),null),q===null)throw Error(i(349));o||uo&127||Bo(r,t,n)}return n}function Bo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t=jo(),H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vo(e,t,n,r){t.value=n,t.getSnapshot=r,Uo(t)&&Wo(e)}function Ho(e,t,n){return n(function(){Uo(t)&&Wo(e)})}function Uo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Sr(e,n)}catch{return!0}}function Wo(e){var t=ri(e,2);t!==null&&hu(t,e,2)}function Go(e){var t=ko();if(typeof e==`function`){var n=e;if(e=n(),ho){qe(!0);try{n()}finally{qe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:e},t}function Ko(e,t,n,r){return e.baseState=n,Lo(e,U,typeof r==`function`?r:Fo)}function qo(e,t,n,r,a){if(Fs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};w.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Jo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Jo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=w.T,o={};w.T=o;try{var s=n(i,r),c=w.S;c!==null&&c(o,s),Yo(e,t,s)}catch(n){Zo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),w.T=a}}else try{a=n(i,r),Yo(e,t,a)}catch(n){Zo(e,t,n)}}function Yo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Xo(e,t,n)},function(n){return Zo(e,t,n)}):Xo(e,t,n)}function Xo(e,t,n){t.status=`fulfilled`,t.value=n,Qo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Jo(e,n)))}function Zo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Qo(t),t=t.next;while(t!==r)}e.action=null}function Qo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function $o(e,t){return t}function es(e,t){if(V){var n=q.formState;if(n!==null){a:{var r=H;if(V){if(B){b:{for(var i=B,a=Pi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){B=cf(i.nextSibling),r=i.data===`F!`;break a}}Ii(r)}r=!1}r&&(t=n[0])}}return n=ko(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$o,lastRenderedState:t},n.queue=r,n=Ms.bind(null,H,r),r.dispatch=n,r=Go(!1),a=Ps.bind(null,H,!1,r.queue),r=ko(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=qo.bind(null,H,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ts(e){return ns(Ao(),U,e)}function ns(e,t,n){if(t=Lo(e,t,$o)[0],e=Io(Fo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Mo(t)}catch(e){throw e===ba?Sa:e}else r=t;t=Ao();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(H.flags|=2048,as(9,{destroy:void 0},rs.bind(null,i,n),null)),[r,a,e]}function rs(e,t){e.action=t}function is(e){var t=Ao(),n=U;if(n!==null)return ns(t,n,e);Ao(),t=t.memoizedState,n=Ao();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function as(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=H.updateQueue,t===null&&(t=jo(),H.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function os(){return Ao().memoizedState}function ss(e,t,n,r){var i=ko();H.flags|=e,i.memoizedState=as(1|t,{destroy:void 0},n,r===void 0?null:r)}function cs(e,t,n,r){var i=Ao();r=r===void 0?null:r;var a=i.memoizedState.inst;U!==null&&r!==null&&xo(r,U.memoizedState.deps)?i.memoizedState=as(t,a,n,r):(H.flags|=e,i.memoizedState=as(1|t,a,n,r))}function ls(e,t){ss(8390656,8,e,t)}function us(e,t){cs(2048,8,e,t)}function ds(e){H.flags|=4;var t=H.updateQueue;if(t===null)t=jo(),H.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function fs(e){var t=Ao().memoizedState;return ds({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ps(e,t){return cs(4,2,e,t)}function ms(e,t){return cs(4,4,e,t)}function hs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gs(e,t,n){n=n==null?null:n.concat([e]),cs(4,4,hs.bind(null,t,e),n)}function _s(){}function vs(e,t){var n=Ao();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&xo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ys(e,t){var n=Ao();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&xo(t,r[1]))return r[0];if(r=e(),ho){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r}function bs(e,t,n){return n===void 0||uo&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),H.lanes|=e,Gl|=e,n)}function xs(e,t,n,r){return Sr(n,t)?n:Xa.current===null?!(uo&42)||uo&1073741824&&!(Y&261930)?(rc=!0,e.memoizedState=n):(e=mu(),H.lanes|=e,Gl|=e,t):(e=bs(e,n,r),Sr(e,t)||(rc=!0),e)}function Ss(e,t,n,r,i){var a=T.p;T.p=a!==0&&8>a?a:8;var o=w.T,s={};w.T=s,Ps(e,!1,t,n);try{var c=i(),l=w.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ns(e,t,ma(c,r),pu(e)):Ns(e,t,r,pu(e))}catch(n){Ns(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{T.p=a,o!==null&&s.types!==null&&(o.types=s.types),w.T=o}}function Cs(){}function ws(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Ts(e).queue;Ss(e,a,t,fe,n===null?Cs:function(){return Es(e),n(r)})}function Ts(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:fe},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Es(e){var t=Ts(e);t.next===null&&(t=e.alternate.memoizedState),Ns(e,t.next.queue,{},pu())}function Ds(){return $i(Qf)}function Os(){return Ao().memoizedState}function ks(){return Ao().memoizedState}function As(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Va(n);var r=Ha(t,e,n);r!==null&&(hu(r,t,n),Ua(r,t,n)),t={cache:oa()},e.payload=t;return}t=t.return}}function js(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Fs(e)?Is(t,n):(n=ni(e,t,n,r),n!==null&&(hu(n,e,r),Ls(n,t,r)))}function Ms(e,t,n){Ns(e,t,n,pu())}function Ns(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fs(e))Is(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Sr(s,o))return ti(e,t,i,0),q===null&&ei(),!1}catch{}if(n=ni(e,t,i,r),n!==null)return hu(n,e,r),Ls(n,t,r),!0}return!1}function Ps(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Fs(e)){if(t)throw Error(i(479))}else t=ni(e,n,r,2),t!==null&&hu(t,e,2)}function Fs(e){var t=e.alternate;return e===H||t!==null&&t===H}function Is(e,t){mo=po=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ls(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}var Rs={readContext:$i,use:No,useCallback:bo,useContext:bo,useEffect:bo,useImperativeHandle:bo,useLayoutEffect:bo,useInsertionEffect:bo,useMemo:bo,useReducer:bo,useRef:bo,useState:bo,useDebugValue:bo,useDeferredValue:bo,useTransition:bo,useSyncExternalStore:bo,useId:bo,useHostTransitionStatus:bo,useFormState:bo,useActionState:bo,useOptimistic:bo,useMemoCache:bo,useCacheRefresh:bo};Rs.useEffectEvent=bo;var zs={readContext:$i,use:No,useCallback:function(e,t){return ko().memoizedState=[e,t===void 0?null:t],e},useContext:$i,useEffect:ls,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ss(4194308,4,hs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ss(4194308,4,e,t)},useInsertionEffect:function(e,t){ss(4,2,e,t)},useMemo:function(e,t){var n=ko();t=t===void 0?null:t;var r=e();if(ho){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=ko();if(n!==void 0){var i=n(t);if(ho){qe(!0);try{n(t)}finally{qe(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=js.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=ko();return e={current:e},t.memoizedState=e},useState:function(e){e=Go(e);var t=e.queue,n=Ms.bind(null,H,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:_s,useDeferredValue:function(e,t){return bs(ko(),e,t)},useTransition:function(){var e=Go(!1);return e=Ss.bind(null,H,e.queue,!0,!1),ko().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=H,a=ko();if(V){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||Bo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ls(Ho.bind(null,r,o,e),[e]),r.flags|=2048,as(9,{destroy:void 0},Vo.bind(null,r,o,n,t),null),n},useId:function(){var e=ko(),t=q.identifierPrefix;if(V){var n=Ei,r=Ti;n=(r&~(1<<32-O(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=go++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=yo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ds,useFormState:es,useActionState:es,useOptimistic:function(e){var t=ko();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ps.bind(null,H,!0,n),n.dispatch=t,[e,t]},useMemoCache:Po,useCacheRefresh:function(){return ko().memoizedState=As.bind(null,H)},useEffectEvent:function(e){var t=ko(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Bs={readContext:$i,use:No,useCallback:vs,useContext:$i,useEffect:us,useImperativeHandle:gs,useInsertionEffect:ps,useLayoutEffect:ms,useMemo:ys,useReducer:Io,useRef:os,useState:function(){return Io(Fo)},useDebugValue:_s,useDeferredValue:function(e,t){return xs(Ao(),U.memoizedState,e,t)},useTransition:function(){var e=Io(Fo)[0],t=Ao().memoizedState;return[typeof e==`boolean`?e:Mo(e),t]},useSyncExternalStore:zo,useId:Os,useHostTransitionStatus:Ds,useFormState:ts,useActionState:ts,useOptimistic:function(e,t){return Ko(Ao(),U,e,t)},useMemoCache:Po,useCacheRefresh:ks};Bs.useEffectEvent=fs;var Vs={readContext:$i,use:No,useCallback:vs,useContext:$i,useEffect:us,useImperativeHandle:gs,useInsertionEffect:ps,useLayoutEffect:ms,useMemo:ys,useReducer:Ro,useRef:os,useState:function(){return Ro(Fo)},useDebugValue:_s,useDeferredValue:function(e,t){var n=Ao();return U===null?bs(n,e,t):xs(n,U.memoizedState,e,t)},useTransition:function(){var e=Ro(Fo)[0],t=Ao().memoizedState;return[typeof e==`boolean`?e:Mo(e),t]},useSyncExternalStore:zo,useId:Os,useHostTransitionStatus:Ds,useFormState:is,useActionState:is,useOptimistic:function(e,t){var n=Ao();return U===null?(n.baseState=e,[e,n.queue.dispatch]):Ko(n,U,e,t)},useMemoCache:Po,useCacheRefresh:ks};Vs.useEffectEvent=fs;function Hs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:m({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Us={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Va(r);i.payload=t,n!=null&&(i.callback=n),t=Ha(e,i,r),t!==null&&(hu(t,e,r),Ua(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Va(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ha(e,i,r),t!==null&&(hu(t,e,r),Ua(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Va(n);r.tag=2,t!=null&&(r.callback=t),t=Ha(e,r,n),t!==null&&(hu(t,e,n),Ua(t,e,n))}};function Ws(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Cr(n,r)||!Cr(i,a):!0}function Gs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Us.enqueueReplaceState(t,t.state,null)}function Ks(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=m({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function qs(e){Xr(e)}function Js(e){console.error(e)}function Ys(e){Xr(e)}function Xs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Zs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){return n=Va(n),n.tag=3,n.payload={element:null},n.callback=function(){Xs(e,t)},n}function $s(e){return e=Va(e),e.tag=3,e}function ec(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Zs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Zs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function tc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Xi(t,n,a,!0),n=to.current,n!==null){switch(n.tag){case 31:case 13:return no===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ca?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Ca?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(V)return t=to.current,t===null?(r!==Fi&&(t=Error(i(423),{cause:r}),Hi(_i(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=_i(r,n),a=Qs(e.stateNode,r,a),Wa(e,a),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Fi&&(e=Error(i(422),{cause:r}),Hi(_i(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=_i(o,n),Xl===null?Xl=[o]:Xl.push(o),Wl!==4&&(Wl=2),t===null)return!0;r=_i(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Qs(n.stateNode,r,e),Wa(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=$s(a),ec(a,e,n,r),Wa(n,a),!1}n=n.return}while(n!==null);return!1}var nc=Error(i(461)),rc=!1;function ic(e,t,n,r){t.child=e===null?La(t,null,n,r):Ia(t,e.child,n,r)}function ac(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Qi(t),r=So(e,t,n,o,a,i),s=Eo(),e!==null&&!rc?(Do(e,t,i),kc(e,t,i)):(V&&s&&ki(t),t.flags|=1,ic(e,t,r,i),t.child)}function oc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ci(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,sc(e,t,a,r,i)):(e=di(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Ac(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Cr:n,n(o,r)&&e.ref===t.ref)return kc(e,t,i)}return t.flags|=1,e=li(a,r),e.ref=t.ref,e.return=t,t.child=e}function sc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Cr(a,r)&&e.ref===t.ref)if(rc=!1,t.pendingProps=r=a,Ac(e,i))e.flags&131072&&(rc=!0);else return t.lanes=e.lanes,kc(e,t,i)}return hc(e,t,n,r,i)}function cc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return uc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&va(t,a===null?null:a.cachePool),a===null?$a():Qa(t,a),ao(t);else return r=t.lanes=536870912,uc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&va(t,null),$a(),oo(t)):(va(t,a.cachePool),Qa(t,a),oo(t),t.memoizedState=null);return ic(e,t,i,n),t.child}function lc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function uc(e,t,n,r,i){var a=_a();return a=a===null?null:{parent:aa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&va(t,null),$a(),ao(t),e!==null&&Xi(e,t,r,!0),t.childLanes=i,null}function dc(e,t){return t=wc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function fc(e,t,n){return Ia(t,e.child,null,n),e=dc(t,t.pendingProps),e.flags|=2,so(t),t.memoizedState=null,e}function pc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(V){if(r.mode===`hidden`)return e=dc(t,r),t.lanes=536870912,lc(null,e);if(io(t),(e=B)?(e=rf(e,Pi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:wi===null?null:{id:Ti,overflow:Ei},retryLane:536870912,hydrationErrors:null},n=mi(e),n.return=t,t.child=n,Mi=t,B=null)):e=null,e===null)throw Ii(t);return t.lanes=536870912,null}return dc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(io(t),a)if(t.flags&256)t.flags&=-257,t=fc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(rc||Xi(e,t,n,!1),a=(n&e.childLanes)!==0,rc||a){if(r=q,r!==null&&(s=M(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ri(e,s),hu(r,e,s),nc;Du(),t=fc(e,t,n)}else e=o.treeContext,B=cf(s.nextSibling),Mi=t,V=!0,Ni=null,Pi=!1,e!==null&&ji(t,e),t=dc(t,r),t.flags|=4096;return t}return e=li(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function mc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function hc(e,t,n,r,i){return Qi(t),n=So(e,t,n,r,void 0,i),r=Eo(),e!==null&&!rc?(Do(e,t,i),kc(e,t,i)):(V&&r&&ki(t),t.flags|=1,ic(e,t,n,i),t.child)}function gc(e,t,n,r,i,a){return Qi(t),t.updateQueue=null,n=wo(t,r,n,i),Co(e),r=Eo(),e!==null&&!rc?(Do(e,t,a),kc(e,t,a)):(V&&r&&ki(t),t.flags|=1,ic(e,t,n,a),t.child)}function _c(e,t,n,r,i){if(Qi(t),t.stateNode===null){var a=ai,o=n.contextType;typeof o==`object`&&o&&(a=$i(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Us,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},za(t),o=n.contextType,a.context=typeof o==`object`&&o?$i(o):ai,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Hs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Us.enqueueReplaceState(a,a.state,null),qa(t,r,a,i),Ka(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ks(n,s);a.props=c;var l=a.context,u=n.contextType;o=ai,typeof u==`object`&&u&&(o=$i(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Gs(t,a,r,o),Ra=!1;var f=t.memoizedState;a.state=f,qa(t,r,a,i),Ka(),l=t.memoizedState,s||f!==l||Ra?(typeof d==`function`&&(Hs(t,n,d,r),l=t.memoizedState),(c=Ra||Ws(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ba(e,t),o=t.memoizedProps,u=Ks(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ai,typeof l==`object`&&l&&(c=$i(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Gs(t,a,r,c),Ra=!1,f=t.memoizedState,a.state=f,qa(t,r,a,i),Ka();var p=t.memoizedState;o!==d||f!==p||Ra||e!==null&&e.dependencies!==null&&Zi(e.dependencies)?(typeof s==`function`&&(Hs(t,n,s,r),p=t.memoizedState),(u=Ra||Ws(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Zi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,mc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ia(t,e.child,null,i),t.child=Ia(t,null,n,i)):ic(e,t,n,i),t.memoizedState=a.state,e=t.child):e=kc(e,t,i),e}function vc(e,t,n,r){return Bi(),t.flags|=256,ic(e,t,n,r),t.child}var yc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bc(e){return{baseLanes:e,cachePool:ya()}}function xc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Sc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(co.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(V){if(a?ro(t):oo(t),(e=B)?(e=rf(e,Pi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:wi===null?null:{id:Ti,overflow:Ei},retryLane:536870912,hydrationErrors:null},n=mi(e),n.return=t,t.child=n,Mi=t,B=null)):e=null,e===null)throw Ii(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(oo(t),a=t.mode,c=wc({mode:`hidden`,children:c},a),r=fi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=bc(n),r.childLanes=xc(e,s,n),t.memoizedState=yc,lc(null,r)):(ro(t),Cc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(ro(t),t.flags&=-257,t=Tc(e,t,n)):t.memoizedState===null?(oo(t),c=r.fallback,a=t.mode,r=wc({mode:`visible`,children:r.children},a),c=fi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ia(t,e.child,null,n),r=t.child,r.memoizedState=bc(n),r.childLanes=xc(e,s,n),t.memoizedState=yc,t=lc(null,r)):(oo(t),t.child=e.child,t.flags|=128,t=null);else if(ro(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Hi({value:r,source:null,stack:null}),t=Tc(e,t,n)}else if(rc||Xi(e,t,n,!1),s=(n&e.childLanes)!==0,rc||s){if(s=q,s!==null&&(r=M(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ri(e,r),hu(s,e,r),nc;af(c)||Du(),t=Tc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,B=cf(c.nextSibling),Mi=t,V=!0,Ni=null,Pi=!1,e!==null&&ji(t,e),t=Cc(t,r.children),t.flags|=4096);return t}return a?(oo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=li(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=fi(c,a,n,null),c.flags|=2):c=li(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,lc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=bc(n):(a=c.cachePool,a===null?a=ya():(l=aa._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=xc(e,s,n),t.memoizedState=yc,lc(e.child,r)):(ro(t),n=e.child,e=n.sibling,n=li(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Cc(e,t){return t=wc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function wc(e,t){return e=si(22,e,null,t),e.lanes=0,e}function Tc(e,t,n){return Ia(t,e.child,null,n),e=Cc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ec(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ji(e.return,t,n)}function Dc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Oc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=co.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,E(co,o),ic(e,t,r,n),r=V?xi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ec(e,n,t);else if(e.tag===19)Ec(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&lo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Dc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&lo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Dc(t,!0,n,null,a,r);break;case`together`:Dc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function kc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Xi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=li(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=li(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ac(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&Zi(e))):!0}function jc(e,t,n){switch(t.tag){case 3:xe(t,t.stateNode.containerInfo),Ki(t,aa,e.memoizedState.cache),Bi();break;case 27:case 5:Se(t);break;case 4:xe(t,t.stateNode.containerInfo);break;case 10:Ki(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,io(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(ro(t),e=kc(e,t,n),e===null?null:e.sibling):Sc(e,t,n):(ro(t),t.flags|=128,null);ro(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Xi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Oc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),E(co,co.current),r)break;return null;case 22:return t.lanes=0,cc(e,t,n,t.pendingProps);case 24:Ki(t,aa,e.memoizedState.cache)}return kc(e,t,n)}function Mc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)rc=!0;else{if(!Ac(e,n)&&!(t.flags&128))return rc=!1,jc(e,t,n);rc=!!(e.flags&131072)}else rc=!1,V&&t.flags&1048576&&Oi(t,xi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ea(t.elementType),t.type=e,typeof e==`function`)ci(e)?(r=Ks(e,r),t.tag=1,t=_c(null,t,e,r,n)):(t.tag=0,t=hc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=ac(null,t,e,r,n);break a}else if(a===re){t.tag=14,t=oc(null,t,e,r,n);break a}}throw t=ue(e)||e,Error(i(306,t,``))}}return t;case 0:return hc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ks(r,t.pendingProps),_c(e,t,r,a,n);case 3:a:{if(xe(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ba(e,t),qa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Ki(t,aa,r),r!==o.cache&&Yi(t,[aa],n,!0),Ka(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=vc(e,t,r,n);break a}else if(r!==a){a=_i(Error(i(424)),t),Hi(a),t=vc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(B=cf(e.firstChild),Mi=t,V=!0,Ni=null,Pi=!0,n=La(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Bi(),r===a){t=kc(e,t,n);break a}ic(e,t,r,n)}t=t.child}return t;case 26:return mc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:V||(n=t.type,e=t.pendingProps,r=Bd(ye.current).createElement(n),r[dt]=t,r[P]=e,Pd(r,n,e),bt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Se(t),e===null&&V&&(r=t.stateNode=ff(t.type,t.pendingProps,ye.current),Mi=t,Pi=!0,a=B,Zd(t.type)?(lf=a,B=cf(r.firstChild)):B=a),ic(e,t,t.pendingProps.children,n),mc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&V&&((a=r=B)&&(r=tf(r,t.type,t.pendingProps,Pi),r===null?a=!1:(t.stateNode=r,Mi=t,B=cf(r.firstChild),Pi=!1,a=!0)),a||Ii(t)),Se(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=So(e,t,To,null,null,n),Qf._currentValue=a),mc(e,t),ic(e,t,r,n),t.child;case 6:return e===null&&V&&((e=n=B)&&(n=nf(n,t.pendingProps,Pi),n===null?e=!1:(t.stateNode=n,Mi=t,B=null,e=!0)),e||Ii(t)),null;case 13:return Sc(e,t,n);case 4:return xe(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ia(t,null,r,n):ic(e,t,r,n),t.child;case 11:return ac(e,t,t.type,t.pendingProps,n);case 7:return ic(e,t,t.pendingProps,n),t.child;case 8:return ic(e,t,t.pendingProps.children,n),t.child;case 12:return ic(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Ki(t,t.type,r.value),ic(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Qi(t),a=$i(a),r=r(a),t.flags|=1,ic(e,t,r,n),t.child;case 14:return oc(e,t,t.type,t.pendingProps,n);case 15:return sc(e,t,t.type,t.pendingProps,n);case 19:return Oc(e,t,n);case 31:return pc(e,t,n);case 22:return cc(e,t,n,t.pendingProps);case 24:return Qi(t),r=$i(aa),e===null?(a=_a(),a===null&&(a=q,o=oa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},za(t),Ki(t,aa,a)):((e.lanes&n)!==0&&(Ba(e,t),qa(t,null,null,n),Ka()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Ki(t,aa,r),r!==a.cache&&Yi(t,[aa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Ki(t,aa,r))),ic(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Nc(e){e.flags|=4}function Pc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Da=Ca,xa}else e.flags&=-16777217}function Fc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Da=Ca,xa}function Ic(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:rt(),e.lanes|=t,Yl|=t)}function Lc(e,t){if(!V)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function W(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Rc(e,t,n){var r=t.pendingProps;switch(Ai(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return W(t),null;case 1:return W(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),qi(aa),D(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(zi(t)?Nc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Vi())),W(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Nc(t),o===null?(W(t),Pc(t,a,null,r,n)):(W(t),Fc(t,o))):o?o===e.memoizedState?(W(t),t.flags&=-16777217):(Nc(t),W(t),Fc(t,o)):(e=e.memoizedProps,e!==r&&Nc(t),W(t),Pc(t,a,e,r,n)),null;case 27:if(Ce(t),n=ye.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return W(t),null}e=_e.current,zi(t)?Li(t,e):(e=ff(a,r,n),t.stateNode=e,Nc(t))}return W(t),null;case 5:if(Ce(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return W(t),null}if(o=_e.current,zi(t))Li(t,o);else{var s=Bd(ye.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[dt]=t,o[P]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Nc(t)}}return W(t),Pc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ye.current,zi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Mi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[dt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Ii(t,!0)}else e=Bd(e).createTextNode(r),e[dt]=t,t.stateNode=e}return W(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=zi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[dt]=t}else Bi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),e=!1}else n=Vi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(so(t),t):(so(t),null);if(t.flags&128)throw Error(i(558))}return W(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=zi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[dt]=t}else Bi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),a=!1}else a=Vi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(so(t),t):(so(t),null)}return so(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ic(t,t.updateQueue),W(t),null);case 4:return D(),e===null&&Sd(t.stateNode.containerInfo),W(t),null;case 10:return qi(t.type),W(t),null;case 19:if(ge(co),r=t.memoizedState,r===null)return W(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Lc(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=lo(e),o!==null){for(t.flags|=128,Lc(r,!1),e=o.updateQueue,t.updateQueue=e,Ic(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ui(n,e),n=n.sibling;return E(co,co.current&1|2),V&&Di(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ie()>tu&&(t.flags|=128,a=!0,Lc(r,!1),t.lanes=4194304)}else{if(!a)if(e=lo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Ic(t,e),Lc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!V)return W(t),null}else 2*Ie()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Lc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(W(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ie(),e.sibling=null,n=co.current,E(co,a?n&1|2:n&1),V&&Di(t,r.treeForkCount),e);case 22:case 23:return so(t),eo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(W(t),t.subtreeFlags&6&&(t.flags|=8192)):W(t),n=t.updateQueue,n!==null&&Ic(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&ge(ga),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),qi(aa),W(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function zc(e,t){switch(Ai(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qi(aa),D(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ce(t),null;case 31:if(t.memoizedState!==null){if(so(t),t.alternate===null)throw Error(i(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(so(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ge(co),null;case 4:return D(),null;case 10:return qi(t.type),null;case 22:case 23:return so(t),eo(),e!==null&&ge(ga),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return qi(aa),null;case 25:return null;default:return null}}function Bc(e,t){switch(Ai(t),t.tag){case 3:qi(aa),D();break;case 26:case 27:case 5:Ce(t);break;case 4:D();break;case 31:t.memoizedState!==null&&so(t);break;case 13:so(t);break;case 19:ge(co);break;case 10:qi(t.type);break;case 22:case 23:so(t),eo(),e!==null&&ge(ga);break;case 24:qi(aa)}}function Vc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Hc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Uc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ya(t,n)}catch(t){Z(e,e.return,t)}}}function Wc(e,t,n){n.props=Ks(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Gc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Kc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function qc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Jc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[P]=t}catch(t){Z(e,e.return,t)}}function Yc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Xc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Yc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=en));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[dt]=e,t[P]=n}catch(t){Z(e,e.return,t)}}var el=!1,tl=!1,nl=!1,rl=typeof WeakSet==`function`?WeakSet:Set,il=null;function al(e,t){if(e=e.containerInfo,Rd=sp,e=Dr(e),Or(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,il=t;il!==null;)if(t=il,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,il=e;else for(;il!==null;){switch(t=il,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ks(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,il=e;break}il=t.return}}function ol(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:bl(e,n),r&4&&Vc(5,n);break;case 1:if(bl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ks(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Uc(n),r&512&&Gc(n,n.return);break;case 3:if(bl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ya(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&$c(n);case 26:case 5:bl(e,n),t===null&&r&4&&qc(n),r&512&&Gc(n,n.return);break;case 12:bl(e,n);break;case 31:bl(e,n),r&4&&dl(e,n);break;case 13:bl(e,n),r&4&&fl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||el,!r){t=t!==null&&t.memoizedState!==null||tl,i=el;var a=tl;el=r,(tl=t)&&!a?Sl(e,n,(n.subtreeFlags&8772)!=0):bl(e,n),el=i,tl=a}break;case 30:break;default:bl(e,n)}}function sl(e){var t=e.alternate;t!==null&&(e.alternate=null,sl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&_t(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var G=null,cl=!1;function ll(e,t,n){for(n=n.child;n!==null;)ul(e,t,n),n=n.sibling}function ul(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount==`function`)try{Ke.onCommitFiberUnmount(Ge,n)}catch{}switch(n.tag){case 26:tl||Kc(n,t),ll(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:tl||Kc(n,t);var r=G,i=cl;Zd(n.type)&&(G=n.stateNode,cl=!1),ll(e,t,n),pf(n.stateNode),G=r,cl=i;break;case 5:tl||Kc(n,t);case 6:if(r=G,i=cl,G=null,ll(e,t,n),G=r,cl=i,G!==null)if(cl)try{(G.nodeType===9?G.body:G.nodeName===`HTML`?G.ownerDocument.body:G).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{G.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:G!==null&&(cl?(e=G,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(G,n.stateNode));break;case 4:r=G,i=cl,G=n.stateNode.containerInfo,cl=!0,ll(e,t,n),G=r,cl=i;break;case 0:case 11:case 14:case 15:Hc(2,n,t),tl||Hc(4,n,t),ll(e,t,n);break;case 1:tl||(Kc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Wc(n,t,r)),ll(e,t,n);break;case 21:ll(e,t,n);break;case 22:tl=(r=tl)||n.memoizedState!==null,ll(e,t,n),tl=r;break;default:ll(e,t,n)}}function dl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function pl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new rl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new rl),t;default:throw Error(i(435,e.tag))}}function ml(e,t){var n=pl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function hl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){G=c.stateNode,cl=!1;break a}break;case 5:G=c.stateNode,cl=!1;break a;case 3:case 4:G=c.stateNode.containerInfo,cl=!0;break a}c=c.return}if(G===null)throw Error(i(160));ul(o,s,a),G=null,cl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_l(t,e),t=t.sibling}var gl=null;function _l(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hl(t,e),vl(e),r&4&&(Hc(3,e,e.return),Vc(3,e),Hc(5,e,e.return));break;case 1:hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),r&64&&el&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=gl;if(hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[gt]||o[dt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[dt]=e,bt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[dt]=e,bt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Jc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),n!==null&&r&4&&Jc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),e.flags&32){a=e.stateNode;try{Kt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Jc(e,a,n===null?a:n.memoizedProps)),r&1024&&(nl=!0);break;case 6:if(hl(t,e),vl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=gl,gl=gf(t.containerInfo),hl(t,e),gl=a,vl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}nl&&(nl=!1,yl(e));break;case 4:r=gl,gl=gf(e.stateNode.containerInfo),hl(t,e),vl(e),gl=r;break;case 12:hl(t,e),vl(e);break;case 31:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 13:hl(t,e),vl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Ie()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=el,d=tl;if(el=u||a,tl=d||l,hl(t,e),tl=d,el=u,vl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||el||tl||xl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ml(e,n))));break;case 19:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 30:break;case 21:break;default:hl(t,e),vl(e)}}function vl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Yc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Qc(e,Xc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Kt(o,``),n.flags&=-33),Qc(e,Xc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Zc(e,Xc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ol(e,t.alternate,t),t=t.sibling}function xl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Hc(4,t,t.return),xl(t);break;case 1:Kc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Wc(t,t.return,n),xl(t);break;case 27:pf(t.stateNode);case 26:case 5:Kc(t,t.return),xl(t);break;case 22:t.memoizedState===null&&xl(t);break;case 30:xl(t);break;default:xl(t)}e=e.sibling}}function Sl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Sl(i,a,n),Vc(4,a);break;case 1:if(Sl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ja(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Uc(a),Gc(a,a.return);break;case 27:$c(a);case 26:case 5:Sl(i,a,n),n&&r===null&&o&4&&qc(a),Gc(a,a.return);break;case 12:Sl(i,a,n);break;case 31:Sl(i,a,n),n&&o&4&&dl(i,a);break;case 13:Sl(i,a,n),n&&o&4&&fl(i,a);break;case 22:a.memoizedState===null&&Sl(i,a,n),Gc(a,a.return);break;case 30:break;default:Sl(i,a,n)}t=t.sibling}}function Cl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&sa(n))}function wl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sa(e))}function Tl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)El(e,t,n,r),t=t.sibling}function El(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Tl(e,t,n,r),i&2048&&Vc(9,t);break;case 1:Tl(e,t,n,r);break;case 3:Tl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&sa(e)));break;case 12:if(i&2048){Tl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Tl(e,t,n,r);break;case 31:Tl(e,t,n,r);break;case 13:Tl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Tl(e,t,n,r):(a._visibility|=2,Dl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Tl(e,t,n,r):Ol(e,t),i&2048&&Cl(o,t);break;case 24:Tl(e,t,n,r),i&2048&&wl(t.alternate,t);break;default:Tl(e,t,n,r)}}function Dl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Dl(a,o,s,c,i),Vc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Dl(a,o,s,c,i)):u._visibility&2?Dl(a,o,s,c,i):Ol(a,o),i&&l&2048&&Cl(o.alternate,o);break;case 24:Dl(a,o,s,c,i),i&&l&2048&&wl(o.alternate,o);break;default:Dl(a,o,s,c,i)}t=t.sibling}}function Ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ol(n,r),i&2048&&Cl(r.alternate,r);break;case 24:Ol(n,r),i&2048&&wl(r.alternate,r);break;default:Ol(n,r)}t=t.sibling}}var kl=8192;function Al(e,t,n){if(e.subtreeFlags&kl)for(e=e.child;e!==null;)jl(e,t,n),e=e.sibling}function jl(e,t,n){switch(e.tag){case 26:Al(e,t,n),e.flags&kl&&e.memoizedState!==null&&Gf(n,gl,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,n);break;case 3:case 4:var r=gl;gl=gf(e.stateNode.containerInfo),Al(e,t,n),gl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=kl,kl=16777216,Al(e,t,n),kl=r):Al(e,t,n));break;default:Al(e,t,n)}}function Ml(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Il(r,e)}Ml(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pl(e),e=e.sibling}function Pl(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&Hc(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):Nl(e);break;default:Nl(e)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Il(r,e)}Ml(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Hc(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function Il(e,t){for(;il!==null;){var n=il;switch(n.tag){case 0:case 11:case 15:Hc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:sa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,il=r;else a:for(n=e;il!==null;){r=il;var i=r.sibling,a=r.return;if(sl(r),r===n){il=null;break a}if(i!==null){i.return=a,il=i;break a}il=a}}}var Ll={getCacheForType:function(e){var t=$i(aa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return $i(aa).controller.signal}},Rl=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return K&2&&Y!==0?Y&-Y:w.T===null?lt():dd()}function mu(){if(Jl===0)if(!(Y&536870912)||V){var e=Qe;Qe<<=1,!(Qe&3932160)&&(Qe=262144),Jl=e}else Jl=536870912;return e=to.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Y,Jl,!1)),j(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(Kl|=n),Wl===4&&yu(e,Y,Jl,!1)),rd(e))}function gu(e,t,n){if(K&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||k(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Vl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Ie(),10<a)){if(yu(r,t,Jl,!Bl),tt(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:en},jl(t,a,d);var m=(a&62914560)===a?$l-Ie():(a&4194048)===a?eu-Ie():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Sr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-O(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&at(e,n,t)}function bu(){return K&6?!0:(id(0,!1),!1)}function xu(){if(J!==null){if(X===0)var e=J.return;else e=J,Gi=Wi=null,Oo(e),Aa=null,ja=0,e=J;for(;e!==null;)Bc(e.alternate,e),e=e.return;J=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),q=e,J=n=li(e.current,null),Y=t,X=0,zl=null,Bl=!1,Vl=k(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-O(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,ei(),n}function Cu(e,t){H=null,w.H=Rs,t===ba||t===Sa?(t=Oa(),X=3):t===xa?(t=Oa(),X=4):X=t===nc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,J===null&&(Wl=1,Xs(e,_i(t,e.current)))}function wu(){var e=to.current;return e===null?!0:(Y&4194048)===Y?no===null:(Y&62914560)===Y||Y&536870912?e===no:!1}function Tu(){var e=w.H;return w.H=Rs,e===null?Rs:e}function Eu(){var e=w.A;return w.A=Ll,e}function Du(){Wl=4,Bl||(Y&4194048)!==Y&&to.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||q===null||yu(q,Y,Jl,!1)}function Ou(e,t,n){var r=K;K|=2;var i=Tu(),a=Eu();(q!==e||Y!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(X!==0&&J!==null){var s=J,c=zl;switch(X){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:to.current===null&&(t=!0);var l=X;if(X=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=X,X=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Gi=Wi=null,K=r,w.H=i,w.A=a,J===null&&(q=null,Y=0,ei()),o}function ku(){for(;J!==null;)Mu(J)}function Au(e,t){var n=K;K|=2;var r=Tu(),a=Eu();q!==e||Y!==t?(nu=null,tu=Ie()+500,Su(e,t)):Vl=k(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=zl;b:switch(X){case 1:X=0,zl=null,Pu(e,t,o,1);break;case 2:case 9:if(wa(o)){X=0,zl=null,Nu(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),rd(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:wa(o)?(X=0,zl=null,Nu(t)):(X=0,zl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Wf(s):c.stateNode.complete){X=0,zl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Fu(u))}break b}}X=0,zl=null,Pu(e,t,o,5);break;case 6:X=0,zl=null,Pu(e,t,o,6);break;case 8:xu(),Wl=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Gi=Wi=null,w.H=r,w.A=a,K=n,J===null?(q=null,Y=0,ei(),Wl):0}function ju(){for(;J!==null&&!Pe();)Mu(J)}function Mu(e){var t=Mc(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=gc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=gc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Oo(t);default:Bc(n,t),t=J=ui(t,Ul),t=Mc(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Pu(e,t,n,r){Gi=Wi=null,Oo(t),Aa=null,ja=0;var i=t.return;try{if(tc(e,i,t,n,Y)){Wl=1,Xs(e,_i(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Wl=1,Xs(e,_i(n,e.current)),J=null;return}t.flags&32768?(V||r===1?e=!0:Vl||Y&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=to.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Rc(t.alternate,t,Ul);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=zc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Wl=6,J=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=$r,it(e,n,o,s,c,l),e===q&&(J=q=null,Y=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Be,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=w.T,w.T=null,a=T.p,T.p=2,s=K,K|=4;try{al(e,t,n)}finally{K=s,T.p=a,w.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=w.T,w.T=null;var r=T.p;T.p=2;var i=K;K|=4;try{_l(t,e);var a=zd,o=Dr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Er(s.ownerDocument.documentElement,s)){if(c!==null&&Or(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Tr(s,h),v=Tr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{K=i,T.p=r,w.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=w.T,w.T=null;var r=T.p;T.p=2;var i=K;K|=4;try{ol(e,t.alternate,t)}finally{K=i,T.p=r,w.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Fe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),ct(n),t=t.stateNode,Ke&&typeof Ke.onCommitFiberRoot==`function`)try{Ke.onCommitFiberRoot(Ge,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=w.T,i=T.p,T.p=2,w.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{w.T=t,T.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,sa(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=ct(su),r=w.T,a=T.p;try{T.p=32>n?32:n,w.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,K&6)throw Error(i(331));var c=K;if(K|=4,Pl(o.current),El(o,o.current,s,n),K=c,id(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot==`function`)try{Ke.onPostCommitFiberRoot(Ge,o)}catch{}return!0}finally{T.p=a,w.T=r,Vu(e,t)}}function Wu(e,t,n){t=_i(n,t),t=Qs(e.stateNode,t,2),e=Ha(e,t,2),e!==null&&(j(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=_i(n,e),n=$s(2),r=Ha(t,n,2),r!==null&&(ec(n,r,t,e),j(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(Wl===4||Wl===3&&(Y&62914560)===Y&&300>Ie()-$l?!(K&2)&&Su(e,0):ql|=n,Yl===Y&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=rt()),e=ri(e,t),e!==null&&(j(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Me(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-O(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Y,a=tt(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||k(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Ie(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-O(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=nt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=tt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ne(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||k(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ne(r),ct(n)){case 2:case 8:n=ze;break;case 32:n=Be;break;case 268435456:n=He;break;default:n=Be}return r=cd.bind(null,e),n=Me(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ne(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Y;return r=tt(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Ie()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){K&6?Me(Re,ad):od()})}function dd(){if(nd===0){var e=ua;e===0&&(e=Ze,Ze<<=1,!(Ze&261888)&&(Ze=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:$t(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[P]||null).action),o=r.submitter;o&&(t=(t=o[P]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Sn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);ws(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),ws(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Jr.length;hd++){var gd=Jr[hd];Yr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Yr(Br,`onAnimationEnd`),Yr(Vr,`onAnimationIteration`),Yr(Hr,`onAnimationStart`),Yr(`dblclick`,`onDoubleClick`),Yr(`focusin`,`onFocus`),Yr(`focusout`,`onBlur`),Yr(Ur,`onTransitionRun`),Yr(Wr,`onTransitionStart`),Yr(Gr,`onTransitionCancel`),Yr(Kr,`onTransitionEnd`),wt(`onMouseEnter`,[`mouseout`,`mouseover`]),wt(`onMouseLeave`,[`mouseout`,`mouseover`]),wt(`onPointerEnter`,[`pointerout`,`pointerover`]),wt(`onPointerLeave`,[`pointerout`,`pointerover`]),Ct(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Ct(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Ct(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Ct(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Ct(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Ct(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Xr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Xr(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[F];n===void 0&&(n=t[F]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,xt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!dn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=vt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}cn(function(){var r=a,i=nn(n),s=[];a:{var c=qr.get(e);if(c!==void 0){var l=Sn,u=e;switch(e){case`keypress`:if(_n(n)===0)break a;case`keydown`:case`keyup`:l=Bn;break;case`focusin`:u=`focus`,l=jn;break;case`focusout`:u=`blur`,l=jn;break;case`beforeblur`:case`afterblur`:l=jn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=kn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=An;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Hn;break;case Br:case Vr:case Hr:l=Mn;break;case Kr:l=Un;break;case`scroll`:case`scrollend`:l=wn;break;case`wheel`:l=Wn;break;case`copy`:case`cut`:case`paste`:l=Nn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Vn;break;case`toggle`:case`beforetoggle`:l=Gn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=ln(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==tn&&(u=n.relatedTarget||n.fromElement)&&(vt(u)||u[ft]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?vt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=kn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Vn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:L(l),h=u==null?c:L(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,vt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?L(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=ur;else if(R(c))if(dr)v=br;else{v=vr;var y=_r}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Xt(r.elementType)&&(v=ur):v=yr;if(v&&=v(e,r)){ar(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Ht(c,`number`,c.value)}switch(y=r?L(r):window,e){case`focusin`:(R(y)||y.contentEditable===`true`)&&(Ar=y,jr=r,Mr=null);break;case`focusout`:Mr=jr=Ar=null;break;case`mousedown`:Nr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Nr=!1,Pr(s,n,i);break;case`selectionchange`:if(kr)break;case`keydown`:case`keyup`:Pr(s,n,i)}var b;if(qn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else tr?$n(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Xn&&n.locale!==`ko`&&(tr||x!==`onCompositionStart`?x===`onCompositionEnd`&&tr&&(b=gn()):(pn=i,mn=`value`in pn?pn.value:pn.textContent,tr=!0)),y=Ed(r,x),0<y.length&&(x=new Pn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=er(n),b!==null&&(x.data=b)))),(b=Yn?nr(e,n):rr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Pn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=ln(e,n),i!=null&&r.unshift(Td(e,i,a)),i=ln(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=ln(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=ln(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Kt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Kt(e,``+r);break;case`className`:At(e,`class`,r);break;case`tabIndex`:At(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:At(e,n,r);break;case`style`:Yt(e,r,o);break;case`data`:if(t!==`object`){At(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=$t(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=$t(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=en);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=$t(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),kt(e,`popover`,r);break;case`xlinkActuate`:jt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:jt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:jt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:jt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:jt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:jt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:jt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:jt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:jt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:kt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Zt.get(n)||n,kt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:Yt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Kt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Kt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=en);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!St.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[P]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):kt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Vt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Ut(e,!!r,n,!0):Ut(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Gt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(Xt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Bt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Ut(e,!!n,n?[]:``,!1):Ut(e,!!n,t,!0)):Ut(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Wt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(Xt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[gt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),_t(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[gt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);_t(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=T.d;T.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=I(e);t!==null&&t.tag===5&&t.type===`form`?Es(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=zt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),bt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+zt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+zt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+zt(n.imageSizes)+`"]`)):i+=`[href="`+zt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=m({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),bt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+zt(r)+`"][href="`+zt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=m({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),bt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=yt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=m({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);bt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=yt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=m({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),bt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=yt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=m({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),bt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ye.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=yt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=yt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=yt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+zt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return m({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),bt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+zt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+zt(n.href)+`"]`);if(r)return t.instance=r,bt(r),r;var a=m({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),bt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,bt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),bt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,bt(a),a):(r=n,(a=mf.get(o))&&(r=m({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),bt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[gt]||a[dt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,bt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),bt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=A(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=A(0),this.hiddenUpdates=A(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=si(3,null,null,t),e.current=a,a.stateNode=e,t=oa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},za(a),e}function tp(e){return e?(e=ai,e):ai}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Va(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ha(e,r,t),n!==null&&(hu(n,e,t),Ua(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ri(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=st(t);var n=ri(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=w.T;w.T=null;var a=T.p;try{T.p=2,up(e,t,n,r)}finally{T.p=a,w.T=i}}function lp(e,t,n,r){var i=w.T;w.T=null;var a=T.p;try{T.p=8,up(e,t,n,r)}finally{T.p=a,w.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=I(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=et(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-O(o);s.entanglements[1]|=c,o&=~c}rd(a),!(K&6)&&(tu=Ie()+500,id(0,!1))}}break;case 31:case 13:s=ri(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=nn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=vt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Le()){case Re:return 2;case ze:return 8;case Be:case Ve:return 32;case He:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=I(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=vt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ut(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ut(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);tn=r,n.target.dispatchEvent(r),tn=null}else return t=I(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=I(n);a!==null&&(e.splice(t,3),t-=3,ws(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[P]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[P]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[ft]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=lt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.4`)throw Error(i(527,Lp,`19.2.4`));T.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.4`,rendererPackageName:`react-dom`,currentDispatcherRef:w,reconcilerVersion:`19.2.4`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ge=zp.inject(Rp),Ke=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=qs,s=Js,c=Ys;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[ft]=t.current,Sd(e),new Fp(t)}})),_=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()}));function v(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>`u`)){var r=document.head||document.getElementsByTagName(`head`)[0],i=document.createElement(`style`);i.type=`text/css`,n===`top`&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}function y(){let e=Ye.getInstance();if(e.hasData(O.prototype))return e.getData(O.prototype)[0]}function b(){let e=Ye.getInstance();if(e.hasData(Je.prototype))return e.getData(Je.prototype)[0]}function x(e,t,n,r){return e.addEventListener(t,n,r),{dispose:()=>{e.removeEventListener(t,n,r)}}}function ee(e,t){let n=new ResizeObserver(e=>{requestAnimationFrame(()=>{let n=e[0];t(n)})});return n.observe(e),{dispose:()=>{n.unobserve(e),n.disconnect()}}}function S(e,t){for(;e;){if(e===t)return!0;e=e.parentNode}return!1}function C(e){return new st(e)}function te(e){e[ct]=!0}function ne(e){return e[ct]}function re(e,t){let n=Array.from(t);for(let t of n){if(t.href){let n=e.createElement(`link`);n.href=t.href,n.type=t.type,n.rel=`stylesheet`,e.head.appendChild(n)}let n=[];try{t.cssRules&&(n=Array.from(t.cssRules).map(e=>e.cssText))}catch{}for(let t of n){let n=e.createElement(`style`);n.appendChild(e.createTextNode(t)),e.head.appendChild(n)}}}function ie(e){let{left:t,top:n,width:r,height:i}=e.getBoundingClientRect();return{left:t+window.scrollX,top:n+window.scrollY,width:r,height:i}}function ae(e){let t=e;for(;t?.parentNode;)if(t.parentNode===document)return!0;else t=t.parentNode instanceof DocumentFragment?t.parentNode.host:t.parentNode;return!1}function oe(e,t){e.setAttribute(`data-testid`,t)}function se(e){let t=[];function n(r){if(r.nodeType===Node.ELEMENT_NODE){e.includes(r.tagName)&&t.push(r),r.shadowRoot&&n(r.shadowRoot);for(let e of r.children)n(e)}}return n(document.documentElement),t}function ce(e=document){let t=se([`IFRAME`,`WEBVIEW`]),n=new WeakMap;for(let e of t)n.set(e,e.style.pointerEvents),e.style.pointerEvents=`none`;return{release:()=>{for(let e of t)e.style.pointerEvents=n.get(e)??`auto`;t.splice(0,t.length)}}}function le(e){function t(e){let t=[];for(let n=0;n<e.classList.length;n++)t.push(e.classList.item(n));return t}let n,r=e;for(;r!==null&&(n=t(r).find(e=>e.startsWith(`dockview-theme-`)),typeof n!=`string`);)r=r.parentElement;return n}function ue(e,t){let n=ie(e),r=ie(t);return!(n.left<r.left||n.left+n.width>r.left+r.width||n.top<r.top||n.top+n.height>r.top+r.height)}function de(e){let t=new k,n=e.screenX,r=e.screenY,i,a=()=>{if(e.closed)return;let o=e.screenX,s=e.screenY;(o!==n||s!==r)&&(clearTimeout(i),i=setTimeout(()=>{t.fire()},ut),n=o,r=s),requestAnimationFrame(a)};return a(),t}function w(e,t){let n;return new A(x(e,`resize`,()=>{clearTimeout(n),n=setTimeout(()=>{t()},ut)}))}function T(e,t,n={buffer:10}){let r=n.buffer,i=e.getBoundingClientRect(),a=t.getBoundingClientRect(),o=0,s=0,c=i.left-a.left,l=i.top-a.top,u=i.bottom-a.bottom,d=i.right-a.right;c<r?o=r-c:d>r&&(o=-r-d),l<r?s=r-l:u>r&&(s=-u-r),(o!==0||s!==0)&&(e.style.transform=`translate(${o}px, ${s}px)`)}function fe(e){let t=e;for(;t&&(t.style.zIndex===`auto`||t.style.zIndex===``);)t=t.parentElement;return t}function pe(e){if(e.length===0)throw Error(`Invalid tail call`);return[e.slice(0,e.length-1),e[e.length-1]]}function me(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function he(e,t){let n=e.indexOf(t);n>-1&&(e.splice(n,1),e.unshift(t))}function ge(e,t){let n=e.indexOf(t);n>-1&&(e.splice(n,1),e.push(t))}function E(e,t){for(let n=0;n<e.length;n++){let r=e[n];if(t(r))return n}return-1}function _e(e,t){let n=e.findIndex(e=>e===t);return n>-1?(e.splice(n,1),!0):!1}function ve(e,t){if(e instanceof I)return e;if(e instanceof L)return ve(e.children[t?e.children.length-1:0],t);throw Error(`invalid node`)}function ye(e,t,n){if(e instanceof L){let r=new L(e.orientation,e.proportionalLayout,e.styles,t,n,e.disabled,e.margin);for(let t=e.children.length-1;t>=0;t--){let n=e.children[t];r.addChild(ye(n,n.size,n.orthogonalSize),n.size,0,!0)}return r}else return new I(e.view,e.orientation,n)}function be(e,t,n){if(e instanceof L){let r=new L(yt(e.orientation),e.proportionalLayout,e.styles,t,n,e.disabled,e.margin),i=0;for(let a=e.children.length-1;a>=0;a--){let o=e.children[a],s=o instanceof L?o.orthogonalSize:o.size,c=e.size===0?0:Math.round(t*s/e.size);i+=c,a===0&&(c+=t-i),r.addChild(be(o,n,c),c,0,!0)}return r}else return new I(e.view,yt(e.orientation),n)}function xe(e){let t=e.parentElement;if(!t)throw Error(`Invalid grid element`);let n=t.firstElementChild,r=0;for(;n!==e&&n!==t.lastElementChild&&n;)n=n.nextElementSibling,r++;return r}function D(e){let t=e.parentElement;if(!t)throw Error(`Invalid grid element`);if(/\bdv-grid-view\b/.test(t.className))return[];let n=xe(t),r=t.parentElement.parentElement.parentElement;return[...D(r),n]}function Se(e,t,n){if(we(e,t)===Ce(n)){let[e,r]=pe(t),i=r;return(n===`right`||n===`bottom`)&&(i+=1),[...e,i]}else{let e=n===`right`||n===`bottom`?1:0;return[...t,e]}}function Ce(e){return e===`top`||e===`bottom`?F.VERTICAL:F.HORIZONTAL}function we(e,t){return t.length%2==0?yt(e):e}function Te(e){return!!e.children}function Ee(e){switch(e){case`left`:return`left`;case`right`:return`right`;case`above`:return`top`;case`below`:return`bottom`;default:return`center`}}function De(e,t){let{top:n,left:r,width:i,height:a}=t,o=`${Math.round(n)}px`,s=`${Math.round(r)}px`,c=`${Math.round(i)}px`,l=`${Math.round(a)}px`;e.style.top=o,e.style.left=s,e.style.width=c,e.style.height=l,e.style.visibility=`visible`,(!e.style.transform||e.style.transform===``)&&(e.style.transform=`translate3d(0, 0, 0)`)}function Oe(e,t){let{top:n,left:r,width:i,height:a}=t;e.style.top=n,e.style.left=r,e.style.width=i,e.style.height=a,e.style.visibility=`visible`,(!e.style.transform||e.style.transform===``)&&(e.style.transform=`translate3d(0, 0, 0)`)}function ke(e,t){let{top:n,left:r,width:i,height:a}=t,o=`${Math.round(n)}px`,s=`${Math.round(r)}px`,c=`${Math.round(i)}px`,l=`${Math.round(a)}px`;return e.style.top!==o||e.style.left!==s||e.style.width!==c||e.style.height!==l}function Ae(e){switch(e){case`above`:return`top`;case`below`:return`bottom`;case`left`:return`left`;case`right`:return`right`;case`within`:return`center`;default:throw Error(`invalid direction '${e}'`)}}function je(e){switch(e){case`top`:return`above`;case`bottom`:return`below`;case`left`:return`left`;case`right`:return`right`;case`center`:return`within`;default:throw Error(`invalid position '${e}'`)}}function Me(e,t,n,r,i,a){let o=100*t/r,s=100*n/i;return e.has(`left`)&&o<a?`left`:e.has(`right`)&&o>100-a?`right`:e.has(`top`)&&s<a?`top`:e.has(`bottom`)&&s>100-a?`bottom`:e.has(`center`)?`center`:null}function Ne(e,t,n,r,i,a){return e.has(`left`)&&t<a?`left`:e.has(`right`)&&t>r-a?`right`:e.has(`top`)&&n<a?`top`:e.has(`bottom`)&&n>i-a?`bottom`:e.has(`center`)?`center`:null}function Pe(e,t,n){ot(t,`dv-dragged`),t.style.top=`-9999px`,document.body.appendChild(t),e.setDragImage(t,n?.x??0,n?.y??0),setTimeout(()=>{at(t,`dv-dragged`),t.remove()},0)}function Fe(){let e=document.createElement(`div`);e.className=`dv-tabs-overflow-dropdown-default`;let t=document.createElement(`span`);t.textContent=``;let n=an();return e.appendChild(n),e.appendChild(t),{element:e,update:e=>{t.textContent=`${e.tabs}`}}}function Ie(e){return!!e.referencePanel}function Le(e){return!!e.referenceGroup}function Re(e){return!!e.referencePanel}function ze(e){return!!e.referenceGroup}function Be(){let e=document.createElement(`div`);return e.tabIndex=-1,e}function Ve(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})}function He(e){let t=e.from.activePanel;[...e.from.panels].map(t=>{let n=e.from.model.removePanel(t);return e.from.model.renderContainer.detatch(t),n}).forEach(n=>{e.to.model.openPanel(n,{skipSetActive:t!==n,skipSetGroupActive:!0})})}function Ue(e,t){return new Bn(e,t).api}function We(e,t){return new Et(new Hn(e,t))}function Ge(e,t){return new Ot(new Vn(e,t))}function Ke(e,t){return new Dt(new Yn(e,t))}var qe,O,Je,Ye,Xe,Ze,Qe,$e,et,tt,k,nt,rt,A,j,it,at,ot,M,st,ct,lt,ut,N,dt,P,ft,F,pt,mt,ht,gt,_t,vt,I,L,yt,bt,xt,St,Ct,wt,Tt,Et,Dt,Ot,kt,At,jt,Mt,Nt,Pt,Ft,It,Lt,Rt,zt,Bt,Vt,Ht,Ut,Wt,Gt,Kt,qt,Jt,Yt,Xt,Zt,Qt,$t,en,tn,nn,rn,an,on,sn,cn,ln,un,dn,fn,pn,mn,hn,gn,_n,vn,yn,bn,xn,Sn,Cn,wn,Tn,En,Dn,On,kn,An,jn,Mn,Nn,Pn,Fn,In,Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,qn,Jn,Yn,Xn,Zn=o((()=>{v(`.dv-scrollable {
  position: relative;
  overflow: hidden;
}
.dv-scrollable .dv-scrollbar {
  position: absolute;
  border-radius: 2px;
  background-color: transparent;
  /* GPU optimizations */
  will-change: background-color, transform;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  transition-property: background-color;
  transition-timing-function: ease-in-out;
  transition-duration: 1s;
  transition-delay: 0s;
}
.dv-scrollable .dv-scrollbar-horizontal {
  bottom: 0px;
  left: 0px;
  height: 4px;
}
.dv-scrollable .dv-scrollbar-vertical {
  right: 0px;
  top: 0px;
  width: 4px;
}
.dv-scrollable:hover .dv-scrollbar, .dv-scrollable.dv-scrollable-resizing .dv-scrollbar, .dv-scrollable.dv-scrollable-scrolling .dv-scrollbar {
  background-color: var(--dv-scrollbar-background-color, rgba(255, 255, 255, 0.25));
}
.dv-svg {
  display: inline-block;
  fill: currentcolor;
  line-height: 1;
  stroke: currentcolor;
  stroke-width: 0;
}
.dockview-theme-dark {
  --dv-paneview-active-outline-color: dodgerblue;
  --dv-tabs-and-actions-container-font-size: 13px;
  --dv-tabs-and-actions-container-height: 35px;
  --dv-drag-over-background-color: rgba(83, 89, 93, 0.5);
  --dv-drag-over-border-color: transparent;
  --dv-tabs-container-scrollbar-color: #888;
  --dv-icon-hover-background-color: rgba(90, 93, 94, 0.31);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(83, 89, 93, 0.5);
  --dv-overlay-z-index: 999;
  --dv-tab-font-size: inherit;
  --dv-border-radius: 0px;
  --dv-tab-margin: 0;
  --dv-sash-color: transparent;
  --dv-active-sash-color: transparent;
  --dv-active-sash-transition-duration: 0.1s;
  --dv-active-sash-transition-delay: 0.5s;
  --dv-group-view-background-color: #1e1e1e;
  --dv-tabs-and-actions-container-background-color: #252526;
  --dv-activegroup-visiblepanel-tab-background-color: #1e1e1e;
  --dv-activegroup-hiddenpanel-tab-background-color: #2d2d2d;
  --dv-inactivegroup-visiblepanel-tab-background-color: #1e1e1e;
  --dv-inactivegroup-hiddenpanel-tab-background-color: #2d2d2d;
  --dv-tab-divider-color: #1e1e1e;
  --dv-activegroup-visiblepanel-tab-color: white;
  --dv-activegroup-hiddenpanel-tab-color: #969696;
  --dv-inactivegroup-visiblepanel-tab-color: #8f8f8f;
  --dv-inactivegroup-hiddenpanel-tab-color: #626262;
  --dv-separator-border: rgb(68, 68, 68);
  --dv-paneview-header-border-color: rgba(204, 204, 204, 0.2);
}
.dockview-theme-dark .dv-drop-target-container .dv-drop-target-anchor.dv-drop-target-anchor-container-changed {
  opacity: 0;
  transition: none;
}

.dockview-theme-light {
  --dv-paneview-active-outline-color: dodgerblue;
  --dv-tabs-and-actions-container-font-size: 13px;
  --dv-tabs-and-actions-container-height: 35px;
  --dv-drag-over-background-color: rgba(83, 89, 93, 0.5);
  --dv-drag-over-border-color: transparent;
  --dv-tabs-container-scrollbar-color: #888;
  --dv-icon-hover-background-color: rgba(90, 93, 94, 0.31);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(83, 89, 93, 0.5);
  --dv-overlay-z-index: 999;
  --dv-tab-font-size: inherit;
  --dv-border-radius: 0px;
  --dv-tab-margin: 0;
  --dv-sash-color: transparent;
  --dv-active-sash-color: transparent;
  --dv-active-sash-transition-duration: 0.1s;
  --dv-active-sash-transition-delay: 0.5s;
  --dv-group-view-background-color: white;
  --dv-tabs-and-actions-container-background-color: #f3f3f3;
  --dv-activegroup-visiblepanel-tab-background-color: white;
  --dv-activegroup-hiddenpanel-tab-background-color: #ececec;
  --dv-inactivegroup-visiblepanel-tab-background-color: white;
  --dv-inactivegroup-hiddenpanel-tab-background-color: #ececec;
  --dv-tab-divider-color: white;
  --dv-activegroup-visiblepanel-tab-color: rgb(51, 51, 51);
  --dv-activegroup-hiddenpanel-tab-color: rgba(51, 51, 51, 0.7);
  --dv-inactivegroup-visiblepanel-tab-color: rgba(51, 51, 51, 0.7);
  --dv-inactivegroup-hiddenpanel-tab-color: rgba(51, 51, 51, 0.35);
  --dv-separator-border: rgba(128, 128, 128, 0.35);
  --dv-paneview-header-border-color: rgb(51, 51, 51);
  --dv-scrollbar-background-color: rgba(0, 0, 0, 0.25);
}
.dockview-theme-light .dv-drop-target-container .dv-drop-target-anchor.dv-drop-target-anchor-container-changed {
  opacity: 0;
  transition: none;
}

.dockview-theme-vs {
  --dv-paneview-active-outline-color: dodgerblue;
  --dv-tabs-and-actions-container-font-size: 13px;
  --dv-tabs-and-actions-container-height: 35px;
  --dv-drag-over-background-color: rgba(83, 89, 93, 0.5);
  --dv-drag-over-border-color: transparent;
  --dv-tabs-container-scrollbar-color: #888;
  --dv-icon-hover-background-color: rgba(90, 93, 94, 0.31);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(83, 89, 93, 0.5);
  --dv-overlay-z-index: 999;
  --dv-tab-font-size: inherit;
  --dv-border-radius: 0px;
  --dv-tab-margin: 0;
  --dv-sash-color: transparent;
  --dv-active-sash-color: transparent;
  --dv-active-sash-transition-duration: 0.1s;
  --dv-active-sash-transition-delay: 0.5s;
  --dv-group-view-background-color: #1e1e1e;
  --dv-tabs-and-actions-container-background-color: #252526;
  --dv-activegroup-visiblepanel-tab-background-color: #1e1e1e;
  --dv-activegroup-hiddenpanel-tab-background-color: #2d2d2d;
  --dv-inactivegroup-visiblepanel-tab-background-color: #1e1e1e;
  --dv-inactivegroup-hiddenpanel-tab-background-color: #2d2d2d;
  --dv-tab-divider-color: #1e1e1e;
  --dv-activegroup-visiblepanel-tab-color: white;
  --dv-activegroup-hiddenpanel-tab-color: #969696;
  --dv-inactivegroup-visiblepanel-tab-color: #8f8f8f;
  --dv-inactivegroup-hiddenpanel-tab-color: #626262;
  --dv-separator-border: rgb(68, 68, 68);
  --dv-paneview-header-border-color: rgba(204, 204, 204, 0.2);
  --dv-tabs-and-actions-container-background-color: #2d2d30;
  --dv-tabs-and-actions-container-height: 20px;
  --dv-tabs-and-actions-container-font-size: 11px;
  --dv-activegroup-visiblepanel-tab-background-color: #007acc;
  --dv-inactivegroup-visiblepanel-tab-background-color: #3f3f46;
  --dv-activegroup-visiblepanel-tab-color: white;
  --dv-activegroup-hiddenpanel-tab-color: white;
  --dv-inactivegroup-visiblepanel-tab-color: white;
  --dv-inactivegroup-hiddenpanel-tab-color: white;
}
.dockview-theme-vs .dv-drop-target-container .dv-drop-target-anchor.dv-drop-target-anchor-container-changed {
  opacity: 0;
  transition: none;
}
.dockview-theme-vs .dv-groupview.dv-active-group > .dv-tabs-and-actions-container {
  box-sizing: content-box;
  border-bottom: 2px solid var(--dv-activegroup-visiblepanel-tab-background-color);
}
.dockview-theme-vs .dv-groupview.dv-active-group > .dv-tabs-and-actions-container .dv-tab.dv-active-tab {
  border-top: 2px solid var(--dv-activegroup-visiblepanel-tab-background-color);
}
.dockview-theme-vs .dv-groupview.dv-active-group > .dv-tabs-and-actions-container .dv-tab.dv-inactive-tab {
  border-top: 2px solid var(--dv-activegroup-hiddenpanel-tab-background-color);
}
.dockview-theme-vs .dv-groupview.dv-inactive-group > .dv-tabs-and-actions-container {
  box-sizing: content-box;
  border-bottom: 2px solid var(--dv-inactivegroup-visiblepanel-tab-background-color);
}
.dockview-theme-vs .dv-groupview.dv-inactive-group > .dv-tabs-and-actions-container .dv-tab.dv-active-tab {
  border-top: 2px solid var(--dv-inactivegroup-visiblepanel-tab-background-color);
}
.dockview-theme-vs .dv-groupview.dv-inactive-group > .dv-tabs-and-actions-container .dv-tab.dv-inactive-tab {
  border-top: 2px solid var(--dv-inactivegroup-hiddenpanel-tab-background-color);
}

.dockview-theme-abyss {
  --dv-paneview-active-outline-color: dodgerblue;
  --dv-tabs-and-actions-container-font-size: 13px;
  --dv-tabs-and-actions-container-height: 35px;
  --dv-drag-over-background-color: rgba(83, 89, 93, 0.5);
  --dv-drag-over-border-color: transparent;
  --dv-tabs-container-scrollbar-color: #888;
  --dv-icon-hover-background-color: rgba(90, 93, 94, 0.31);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(83, 89, 93, 0.5);
  --dv-overlay-z-index: 999;
  --dv-tab-font-size: inherit;
  --dv-border-radius: 0px;
  --dv-tab-margin: 0;
  --dv-sash-color: transparent;
  --dv-active-sash-color: transparent;
  --dv-active-sash-transition-duration: 0.1s;
  --dv-active-sash-transition-delay: 0.5s;
  --dv-color-abyss-dark: #000c18;
  --dv-color-abyss: #10192c;
  --dv-color-abyss-light: #1c1c2a;
  --dv-color-abyss-lighter: #2b2b4a;
  --dv-color-abyss-accent: rgb(91, 30, 207);
  --dv-color-abyss-primary-text: white;
  --dv-color-abyss-secondary-text: rgb(148, 151, 169);
  --dv-group-view-background-color: var(--dv-color-abyss-dark);
  --dv-tabs-and-actions-container-background-color: var(
      --dv-color-abyss-light
  );
  --dv-activegroup-visiblepanel-tab-background-color: var(
      --dv-color-abyss-dark
  );
  --dv-activegroup-hiddenpanel-tab-background-color: var(--dv-color-abyss);
  --dv-inactivegroup-visiblepanel-tab-background-color: var(
      --dv-color-abyss-dark
  );
  --dv-inactivegroup-hiddenpanel-tab-background-color: var(--dv-color-abyss);
  --dv-tab-divider-color: var(--dv-color-abyss-lighter);
  --dv-activegroup-visiblepanel-tab-color: white;
  --dv-activegroup-hiddenpanel-tab-color: rgba(255, 255, 255, 0.5);
  --dv-inactivegroup-visiblepanel-tab-color: rgba(255, 255, 255, 0.5);
  --dv-inactivegroup-hiddenpanel-tab-color: rgba(255, 255, 255, 0.25);
  --dv-separator-border: var(--dv-color-abyss-lighter);
  --dv-paneview-header-border-color: var(--dv-color-abyss-lighter);
  --dv-paneview-active-outline-color: #596f99;
}
.dockview-theme-abyss .dv-drop-target-container .dv-drop-target-anchor.dv-drop-target-anchor-container-changed {
  opacity: 0;
  transition: none;
}

.dockview-theme-dracula {
  --dv-paneview-active-outline-color: dodgerblue;
  --dv-tabs-and-actions-container-font-size: 13px;
  --dv-tabs-and-actions-container-height: 35px;
  --dv-drag-over-background-color: rgba(83, 89, 93, 0.5);
  --dv-drag-over-border-color: transparent;
  --dv-tabs-container-scrollbar-color: #888;
  --dv-icon-hover-background-color: rgba(90, 93, 94, 0.31);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(83, 89, 93, 0.5);
  --dv-overlay-z-index: 999;
  --dv-tab-font-size: inherit;
  --dv-border-radius: 0px;
  --dv-tab-margin: 0;
  --dv-sash-color: transparent;
  --dv-active-sash-color: transparent;
  --dv-active-sash-transition-duration: 0.1s;
  --dv-active-sash-transition-delay: 0.5s;
  --dv-group-view-background-color: #282a36;
  --dv-tabs-and-actions-container-background-color: #191a21;
  --dv-activegroup-visiblepanel-tab-background-color: #282a36;
  --dv-activegroup-hiddenpanel-tab-background-color: #21222c;
  --dv-inactivegroup-visiblepanel-tab-background-color: #282a36;
  --dv-inactivegroup-hiddenpanel-tab-background-color: #21222c;
  --dv-tab-divider-color: #191a21;
  --dv-activegroup-visiblepanel-tab-color: rgb(248, 248, 242);
  --dv-activegroup-hiddenpanel-tab-color: rgb(98, 114, 164);
  --dv-inactivegroup-visiblepanel-tab-color: rgba(248, 248, 242, 0.5);
  --dv-inactivegroup-hiddenpanel-tab-color: rgba(98, 114, 164, 0.5);
  --dv-separator-border: #bd93f9;
  --dv-paneview-header-border-color: #bd93f9;
  --dv-paneview-active-outline-color: #6272a4;
}
.dockview-theme-dracula .dv-drop-target-container .dv-drop-target-anchor.dv-drop-target-anchor-container-changed {
  opacity: 0;
  transition: none;
}
.dockview-theme-dracula .dv-groupview.dv-active-group > .dv-tabs-and-actions-container .dv-tabs-container > .dv-tab.dv-active-tab {
  position: relative;
}
.dockview-theme-dracula .dv-groupview.dv-active-group > .dv-tabs-and-actions-container .dv-tabs-container > .dv-tab.dv-active-tab::after {
  position: absolute;
  left: 0px;
  top: 0px;
  content: "";
  width: 100%;
  height: 1px;
  background-color: #94527e;
  z-index: 999;
}
.dockview-theme-dracula .dv-groupview.dv-inactive-group > .dv-tabs-and-actions-container .dv-tabs-container > .dv-tab.dv-active-tab {
  position: relative;
}
.dockview-theme-dracula .dv-groupview.dv-inactive-group > .dv-tabs-and-actions-container .dv-tabs-container > .dv-tab.dv-active-tab::after {
  position: absolute;
  left: 0px;
  bottom: 0px;
  content: "";
  width: 100%;
  height: 1px;
  background-color: #5e3d5a;
  z-index: 999;
}

.dockview-theme-replit {
  --dv-paneview-active-outline-color: dodgerblue;
  --dv-tabs-and-actions-container-font-size: 13px;
  --dv-tabs-and-actions-container-height: 35px;
  --dv-drag-over-background-color: rgba(83, 89, 93, 0.5);
  --dv-drag-over-border-color: transparent;
  --dv-tabs-container-scrollbar-color: #888;
  --dv-icon-hover-background-color: rgba(90, 93, 94, 0.31);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(83, 89, 93, 0.5);
  --dv-overlay-z-index: 999;
  --dv-tab-font-size: inherit;
  --dv-border-radius: 0px;
  --dv-tab-margin: 0;
  --dv-sash-color: transparent;
  --dv-active-sash-color: transparent;
  --dv-active-sash-transition-duration: 0.1s;
  --dv-active-sash-transition-delay: 0.5s;
  box-sizing: border-box;
  padding: 10px;
  background-color: #ebeced;
  --dv-group-view-background-color: #ebeced;
  --dv-tabs-and-actions-container-background-color: #fcfcfc;
  --dv-activegroup-visiblepanel-tab-background-color: #f0f1f2;
  --dv-activegroup-hiddenpanel-tab-background-color: #fcfcfc;
  --dv-inactivegroup-visiblepanel-tab-background-color: #f0f1f2;
  --dv-inactivegroup-hiddenpanel-tab-background-color: #fcfcfc;
  --dv-tab-divider-color: transparent;
  --dv-activegroup-visiblepanel-tab-color: rgb(51, 51, 51);
  --dv-activegroup-hiddenpanel-tab-color: rgb(51, 51, 51);
  --dv-inactivegroup-visiblepanel-tab-color: rgb(51, 51, 51);
  --dv-inactivegroup-hiddenpanel-tab-color: rgb(51, 51, 51);
  --dv-separator-border: transparent;
  --dv-paneview-header-border-color: rgb(51, 51, 51);
  --dv-sash-color: #cfd1d3;
  --dv-active-sash-color: #babbbb;
}
.dockview-theme-replit .dv-drop-target-container .dv-drop-target-anchor.dv-drop-target-anchor-container-changed {
  opacity: 0;
  transition: none;
}
.dockview-theme-replit .dv-resize-container:has(> .dv-groupview) {
  border-radius: 8px;
}
.dockview-theme-replit .dv-resize-container {
  border-radius: 10px !important;
  border: none;
}
.dockview-theme-replit .dv-groupview {
  overflow: hidden;
  border-radius: 10px;
}
.dockview-theme-replit .dv-groupview .dv-tabs-and-actions-container {
  border-bottom: 1px solid rgba(128, 128, 128, 0.35);
}
.dockview-theme-replit .dv-groupview .dv-tabs-and-actions-container .dv-tab {
  margin: 4px;
  border-radius: 8px;
}
.dockview-theme-replit .dv-groupview .dv-tabs-and-actions-container .dv-tab .dv-svg {
  height: 8px;
  width: 8px;
}
.dockview-theme-replit .dv-groupview .dv-tabs-and-actions-container .dv-tab:hover {
  background-color: #e4e5e6 !important;
}
.dockview-theme-replit .dv-groupview .dv-content-container {
  background-color: #fcfcfc;
}
.dockview-theme-replit .dv-groupview.dv-active-group {
  border: 1px solid rgba(128, 128, 128, 0.35);
}
.dockview-theme-replit .dv-groupview.dv-inactive-group {
  border: 1px solid transparent;
}
.dockview-theme-replit .dv-vertical > .dv-sash-container > .dv-sash {
  background-color: transparent;
}
.dockview-theme-replit .dv-vertical > .dv-sash-container > .dv-sash:not(.disabled)::after {
  content: "";
  height: 4px;
  width: 40px;
  border-radius: 2px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--dv-sash-color);
  position: absolute;
}
.dockview-theme-replit .dv-vertical > .dv-sash-container > .dv-sash:not(.disabled):hover, .dockview-theme-replit .dv-vertical > .dv-sash-container > .dv-sash:not(.disabled):active {
  background-color: transparent;
}
.dockview-theme-replit .dv-vertical > .dv-sash-container > .dv-sash:not(.disabled):hover::after, .dockview-theme-replit .dv-vertical > .dv-sash-container > .dv-sash:not(.disabled):active::after {
  background-color: var(--dv-active-sash-color);
}
.dockview-theme-replit .dv-horizontal > .dv-sash-container > .dv-sash {
  background-color: transparent;
}
.dockview-theme-replit .dv-horizontal > .dv-sash-container > .dv-sash:not(.disabled)::after {
  content: "";
  height: 40px;
  width: 4px;
  border-radius: 2px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--dv-sash-color);
  position: absolute;
}
.dockview-theme-replit .dv-horizontal > .dv-sash-container > .dv-sash:not(.disabled):hover, .dockview-theme-replit .dv-horizontal > .dv-sash-container > .dv-sash:not(.disabled):active {
  background-color: transparent;
}
.dockview-theme-replit .dv-horizontal > .dv-sash-container > .dv-sash:not(.disabled):hover::after, .dockview-theme-replit .dv-horizontal > .dv-sash-container > .dv-sash:not(.disabled):active::after {
  background-color: var(--dv-active-sash-color);
}

.dockview-theme-abyss-spaced {
  --dv-paneview-active-outline-color: dodgerblue;
  --dv-tabs-and-actions-container-font-size: 13px;
  --dv-tabs-and-actions-container-height: 35px;
  --dv-drag-over-background-color: rgba(83, 89, 93, 0.5);
  --dv-drag-over-border-color: transparent;
  --dv-tabs-container-scrollbar-color: #888;
  --dv-icon-hover-background-color: rgba(90, 93, 94, 0.31);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(83, 89, 93, 0.5);
  --dv-overlay-z-index: 999;
  --dv-tab-font-size: inherit;
  --dv-border-radius: 0px;
  --dv-tab-margin: 0;
  --dv-sash-color: transparent;
  --dv-active-sash-color: transparent;
  --dv-active-sash-transition-duration: 0.1s;
  --dv-active-sash-transition-delay: 0.5s;
  --dv-tab-font-size: 12px;
  --dv-border-radius: 20px;
  --dv-tab-margin: 0.5rem 0.25rem;
  --dv-tabs-and-actions-container-height: 44px;
  --dv-border-radius: 20px;
  box-sizing: border-box;
  --dv-color-abyss-dark: rgb(11, 6, 17);
  --dv-color-abyss: #16121f;
  --dv-color-abyss-light: #201d2b;
  --dv-color-abyss-lighter: #2a2837;
  --dv-color-abyss-accent: rgb(91, 30, 207);
  --dv-color-abyss-primary-text: white;
  --dv-color-abyss-secondary-text: rgb(148, 151, 169);
  --dv-drag-over-border: 2px solid var(--dv-color-abyss-accent);
  --dv-drag-over-background-color: "";
  --dv-group-view-background-color: var(--dv-color-abyss-dark);
  --dv-tabs-and-actions-container-background-color: var(--dv-color-abyss);
  --dv-activegroup-visiblepanel-tab-background-color: var(
      --dv-color-abyss-lighter
  );
  --dv-activegroup-hiddenpanel-tab-background-color: var(
      --dv-color-abyss-light
  );
  --dv-inactivegroup-visiblepanel-tab-background-color: var(
      --dv-color-abyss-lighter
  );
  --dv-inactivegroup-hiddenpanel-tab-background-color: var(
      --dv-color-abyss-light
  );
  --dv-tab-divider-color: transparent;
  --dv-activegroup-visiblepanel-tab-color: var(--dv-color-abyss-primary-text);
  --dv-activegroup-hiddenpanel-tab-color: var(
      --dv-color-abyss-secondary-text
  );
  --dv-inactivegroup-visiblepanel-tab-color: var(
      --dv-color-abyss-primary-text
  );
  --dv-inactivegroup-hiddenpanel-tab-color: var(
      --dv-color-abyss-secondary-text
  );
  --dv-separator-border: transparent;
  --dv-paneview-header-border-color: rgb(51, 51, 51);
  --dv-active-sash-color: var(--dv-color-abyss-accent);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(0, 0, 0, 0.5);
  padding: 10px;
  background-color: var(--dv-color-abyss-dark);
}
.dockview-theme-abyss-spaced .dv-resize-container:has(> .dv-groupview) {
  border-radius: 8px;
}
.dockview-theme-abyss-spaced .dv-sash {
  border-radius: 4px;
}
.dockview-theme-abyss-spaced .dv-drop-target-anchor {
  border-radius: calc(var(--dv-border-radius) / 4);
}
.dockview-theme-abyss-spaced .dv-drop-target-anchor.dv-drop-target-content {
  border-radius: var(--dv-border-radius);
}
.dockview-theme-abyss-spaced .dv-resize-container {
  border-radius: var(--dv-border-radius) !important;
  border: none;
}
.dockview-theme-abyss-spaced .dv-tabs-overflow-container,
.dockview-theme-abyss-spaced .dv-tabs-overflow-dropdown-default {
  border-radius: 8px;
  height: unset !important;
}
.dockview-theme-abyss-spaced .dv-tab {
  border-radius: 8px;
}
.dockview-theme-abyss-spaced .dv-tab .dv-svg {
  height: 8px;
  width: 8px;
}
.dockview-theme-abyss-spaced .dv-groupview {
  border-radius: var(--dv-border-radius);
}
.dockview-theme-abyss-spaced .dv-groupview .dv-tabs-and-actions-container {
  padding: 0px calc(var(--dv-border-radius) / 2);
}
.dockview-theme-abyss-spaced .dv-groupview .dv-content-container {
  background-color: var(--dv-tabs-and-actions-container-background-color);
}
.dockview-theme-abyss-spaced .dv-resize-container .dv-groupview {
  border: 2px solid var(--dv-color-abyss-dark);
}

.dockview-theme-light-spaced {
  --dv-paneview-active-outline-color: dodgerblue;
  --dv-tabs-and-actions-container-font-size: 13px;
  --dv-tabs-and-actions-container-height: 35px;
  --dv-drag-over-background-color: rgba(83, 89, 93, 0.5);
  --dv-drag-over-border-color: transparent;
  --dv-tabs-container-scrollbar-color: #888;
  --dv-icon-hover-background-color: rgba(90, 93, 94, 0.31);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(83, 89, 93, 0.5);
  --dv-overlay-z-index: 999;
  --dv-tab-font-size: inherit;
  --dv-border-radius: 0px;
  --dv-tab-margin: 0;
  --dv-sash-color: transparent;
  --dv-active-sash-color: transparent;
  --dv-active-sash-transition-duration: 0.1s;
  --dv-active-sash-transition-delay: 0.5s;
  --dv-tab-font-size: 12px;
  --dv-border-radius: 20px;
  --dv-tab-margin: 0.5rem 0.25rem;
  --dv-tabs-and-actions-container-height: 44px;
  --dv-border-radius: 20px;
  box-sizing: border-box;
  --dv-drag-over-border: 2px solid rgb(91, 30, 207);
  --dv-drag-over-background-color: "";
  --dv-group-view-background-color: #f6f5f9;
  --dv-tabs-and-actions-container-background-color: white;
  --dv-activegroup-visiblepanel-tab-background-color: #ededf0;
  --dv-activegroup-hiddenpanel-tab-background-color: #f9f9fa;
  --dv-inactivegroup-visiblepanel-tab-background-color: #ededf0;
  --dv-inactivegroup-hiddenpanel-tab-background-color: #f9f9fa;
  --dv-tab-divider-color: transparent;
  --dv-activegroup-visiblepanel-tab-color: rgb(104, 107, 130);
  --dv-activegroup-hiddenpanel-tab-color: rgb(148, 151, 169);
  --dv-inactivegroup-visiblepanel-tab-color: rgb(104, 107, 130);
  --dv-inactivegroup-hiddenpanel-tab-color: rgb(148, 151, 169);
  --dv-separator-border: transparent;
  --dv-paneview-header-border-color: rgb(51, 51, 51);
  --dv-active-sash-color: rgb(91, 30, 207);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(0, 0, 0, 0.1);
  padding: 10px;
  background-color: #f6f5f9;
  --dv-scrollbar-background-color: rgba(0, 0, 0, 0.25);
}
.dockview-theme-light-spaced .dv-resize-container:has(> .dv-groupview) {
  border-radius: 8px;
}
.dockview-theme-light-spaced .dv-sash {
  border-radius: 4px;
}
.dockview-theme-light-spaced .dv-drop-target-anchor {
  border-radius: calc(var(--dv-border-radius) / 4);
}
.dockview-theme-light-spaced .dv-drop-target-anchor.dv-drop-target-content {
  border-radius: var(--dv-border-radius);
}
.dockview-theme-light-spaced .dv-resize-container {
  border-radius: var(--dv-border-radius) !important;
  border: none;
}
.dockview-theme-light-spaced .dv-tabs-overflow-container,
.dockview-theme-light-spaced .dv-tabs-overflow-dropdown-default {
  border-radius: 8px;
  height: unset !important;
}
.dockview-theme-light-spaced .dv-tab {
  border-radius: 8px;
}
.dockview-theme-light-spaced .dv-tab .dv-svg {
  height: 8px;
  width: 8px;
}
.dockview-theme-light-spaced .dv-groupview {
  border-radius: var(--dv-border-radius);
}
.dockview-theme-light-spaced .dv-groupview .dv-tabs-and-actions-container {
  padding: 0px calc(var(--dv-border-radius) / 2);
}
.dockview-theme-light-spaced .dv-groupview .dv-content-container {
  background-color: var(--dv-tabs-and-actions-container-background-color);
}
.dockview-theme-light-spaced .dv-resize-container .dv-groupview {
  border: 2px solid rgba(255, 255, 255, 0.1);
}
.dv-drop-target-container {
  position: absolute;
  z-index: 9999;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  pointer-events: none;
  overflow: hidden;
  --dv-transition-duration: 300ms;
}
.dv-drop-target-container .dv-drop-target-anchor {
  position: relative;
  border: var(--dv-drag-over-border);
  background-color: var(--dv-drag-over-background-color);
  opacity: 1;
  /* GPU optimizations */
  will-change: transform, opacity;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  contain: layout paint;
  transition: opacity var(--dv-transition-duration) ease-in, top var(--dv-transition-duration) ease-out, left var(--dv-transition-duration) ease-out, width var(--dv-transition-duration) ease-out, height var(--dv-transition-duration) ease-out;
}
.dv-drop-target {
  position: relative;
  --dv-transition-duration: 70ms;
}
.dv-drop-target > .dv-drop-target-dropzone {
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100%;
  width: 100%;
  z-index: 1000;
  pointer-events: none;
}
.dv-drop-target > .dv-drop-target-dropzone > .dv-drop-target-selection {
  position: relative;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  border: var(--dv-drag-over-border);
  background-color: var(--dv-drag-over-background-color);
  transition: top var(--dv-transition-duration) ease-out, left var(--dv-transition-duration) ease-out, width var(--dv-transition-duration) ease-out, height var(--dv-transition-duration) ease-out, opacity var(--dv-transition-duration) ease-out;
  will-change: transform;
  pointer-events: none;
}
.dv-drop-target > .dv-drop-target-dropzone > .dv-drop-target-selection.dv-drop-target-top.dv-drop-target-small-vertical {
  border-top: 1px solid var(--dv-drag-over-border-color);
}
.dv-drop-target > .dv-drop-target-dropzone > .dv-drop-target-selection.dv-drop-target-bottom.dv-drop-target-small-vertical {
  border-bottom: 1px solid var(--dv-drag-over-border-color);
}
.dv-drop-target > .dv-drop-target-dropzone > .dv-drop-target-selection.dv-drop-target-left.dv-drop-target-small-horizontal {
  border-left: 1px solid var(--dv-drag-over-border-color);
}
.dv-drop-target > .dv-drop-target-dropzone > .dv-drop-target-selection.dv-drop-target-right.dv-drop-target-small-horizontal {
  border-right: 1px solid var(--dv-drag-over-border-color);
}
.dv-dockview {
  position: relative;
  background-color: var(--dv-group-view-background-color);
  contain: layout;
}
.dv-dockview .dv-watermark-container {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  z-index: 1;
}
.dv-dockview .dv-overlay-render-container {
  position: relative;
}

.dv-groupview.dv-active-group > .dv-tabs-and-actions-container .dv-tabs-container > .dv-tab.dv-active-tab {
  background-color: var(--dv-activegroup-visiblepanel-tab-background-color);
  color: var(--dv-activegroup-visiblepanel-tab-color);
}
.dv-groupview.dv-active-group > .dv-tabs-and-actions-container .dv-tabs-container > .dv-tab.dv-inactive-tab {
  background-color: var(--dv-activegroup-hiddenpanel-tab-background-color);
  color: var(--dv-activegroup-hiddenpanel-tab-color);
}
.dv-groupview.dv-inactive-group > .dv-tabs-and-actions-container .dv-tabs-container > .dv-tab.dv-active-tab {
  background-color: var(--dv-inactivegroup-visiblepanel-tab-background-color);
  color: var(--dv-inactivegroup-visiblepanel-tab-color);
}
.dv-groupview.dv-inactive-group > .dv-tabs-and-actions-container .dv-tabs-container > .dv-tab.dv-inactive-tab {
  background-color: var(--dv-inactivegroup-hiddenpanel-tab-background-color);
  color: var(--dv-inactivegroup-hiddenpanel-tab-color);
}

/**
 * when a tab is dragged we lose the above stylings because they are conditional on parent elements
 * therefore we also set some stylings for the dragging event
 **/
.dv-tab.dv-tab-dragging {
  background-color: var(--dv-activegroup-visiblepanel-tab-background-color);
  color: var(--dv-activegroup-visiblepanel-tab-color);
}
.dv-groupview {
  display: flex;
  height: 100%;
  background-color: var(--dv-group-view-background-color);
  overflow: hidden;
  flex-direction: column;
}
.dv-groupview:focus {
  outline: none;
}
.dv-groupview > .dv-content-container {
  flex-grow: 1;
  min-height: 0;
  outline: none;
}
.dv-groupview.dv-groupview-header-bottom {
  flex-direction: column-reverse;
}
.dv-groupview.dv-groupview-header-left {
  flex-direction: row;
}
.dv-groupview.dv-groupview-header-right {
  flex-direction: row-reverse;
}
.dv-root-wrapper {
  height: 100%;
  width: 100%;
}
.dv-grid-view,
.dv-branch-node {
  height: 100%;
  width: 100%;
}
.dv-debug .dv-resize-container .dv-resize-handle-top {
  background-color: red;
}
.dv-debug .dv-resize-container .dv-resize-handle-bottom {
  background-color: green;
}
.dv-debug .dv-resize-container .dv-resize-handle-left {
  background-color: yellow;
}
.dv-debug .dv-resize-container .dv-resize-handle-right {
  background-color: blue;
}
.dv-debug .dv-resize-container .dv-resize-handle-topleft,
.dv-debug .dv-resize-container .dv-resize-handle-topright,
.dv-debug .dv-resize-container .dv-resize-handle-bottomleft,
.dv-debug .dv-resize-container .dv-resize-handle-bottomright {
  background-color: cyan;
}

.dv-resize-container {
  --dv-overlay-z-index: var(--dv-overlay-z-index, 999);
  position: absolute;
  z-index: calc(var(--dv-overlay-z-index) - 2);
  border: 1px solid var(--dv-tab-divider-color);
  box-shadow: var(--dv-floating-box-shadow);
  /* GPU optimizations for floating group movement */
  will-change: transform, opacity;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
}
.dv-resize-container.dv-hidden {
  display: none;
}
.dv-resize-container.dv-resize-container-dragging {
  opacity: 0.5;
  /* Enhanced GPU acceleration during drag */
  will-change: transform, opacity;
}
.dv-resize-container .dv-resize-handle-top {
  height: 4px;
  width: calc(100% - 8px);
  left: 4px;
  top: -2px;
  z-index: var(--dv-overlay-z-index);
  position: absolute;
  cursor: ns-resize;
}
.dv-resize-container .dv-resize-handle-bottom {
  height: 4px;
  width: calc(100% - 8px);
  left: 4px;
  bottom: -2px;
  z-index: var(--dv-overlay-z-index);
  position: absolute;
  cursor: ns-resize;
}
.dv-resize-container .dv-resize-handle-left {
  height: calc(100% - 8px);
  width: 4px;
  left: -2px;
  top: 4px;
  z-index: var(--dv-overlay-z-index);
  position: absolute;
  cursor: ew-resize;
}
.dv-resize-container .dv-resize-handle-right {
  height: calc(100% - 8px);
  width: 4px;
  right: -2px;
  top: 4px;
  z-index: var(--dv-overlay-z-index);
  position: absolute;
  cursor: ew-resize;
}
.dv-resize-container .dv-resize-handle-topleft {
  height: 4px;
  width: 4px;
  top: -2px;
  left: -2px;
  z-index: var(--dv-overlay-z-index);
  position: absolute;
  cursor: nw-resize;
}
.dv-resize-container .dv-resize-handle-topright {
  height: 4px;
  width: 4px;
  right: -2px;
  top: -2px;
  z-index: var(--dv-overlay-z-index);
  position: absolute;
  cursor: ne-resize;
}
.dv-resize-container .dv-resize-handle-bottomleft {
  height: 4px;
  width: 4px;
  left: -2px;
  bottom: -2px;
  z-index: var(--dv-overlay-z-index);
  position: absolute;
  cursor: sw-resize;
}
.dv-resize-container .dv-resize-handle-bottomright {
  height: 4px;
  width: 4px;
  right: -2px;
  bottom: -2px;
  z-index: var(--dv-overlay-z-index);
  position: absolute;
  cursor: se-resize;
}
.dv-render-overlay {
  --dv-overlay-z-index: var(--dv-overlay-z-index, 999);
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  contain: layout paint;
  isolation: isolate;
  /* GPU optimizations */
  will-change: transform;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
}
.dv-render-overlay.dv-render-overlay-float {
  z-index: calc(var(--dv-overlay-z-index) - 1);
}

.dv-debug .dv-render-overlay {
  outline: 1px solid red;
  outline-offset: -1;
}
.dv-pane-container {
  height: 100%;
  width: 100%;
}
.dv-pane-container.dv-animated .dv-view {
  /* GPU optimizations for smooth pane animations */
  will-change: transform;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  transition: transform 0.15s ease-out;
}
.dv-pane-container .dv-view {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0px !important;
}
.dv-pane-container .dv-view:not(:first-child)::before {
  background-color: transparent !important;
}
.dv-pane-container .dv-view:not(:first-child) .dv-pane > .dv-pane-header {
  border-top: 1px solid var(--dv-paneview-header-border-color);
}
.dv-pane-container .dv-view .dv-default-header {
  background-color: var(--dv-group-view-background-color);
  color: var(--dv-activegroup-visiblepanel-tab-color);
  display: flex;
  padding: 0px 8px;
  cursor: pointer;
}
.dv-pane-container .dv-view .dv-default-header .dv-pane-header-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
.dv-pane-container .dv-view .dv-default-header > span {
  padding-left: 8px;
  flex-grow: 1;
}
.dv-pane-container:first-of-type > .dv-pane > .dv-pane-header {
  border-top: none !important;
}
.dv-pane-container .dv-pane {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
}
.dv-pane-container .dv-pane .dv-pane-header {
  box-sizing: border-box;
  user-select: none;
  position: relative;
  outline: none;
}
.dv-pane-container .dv-pane .dv-pane-header.dv-pane-draggable {
  cursor: pointer;
}
.dv-pane-container .dv-pane .dv-pane-header:focus:before, .dv-pane-container .dv-pane .dv-pane-header:focus-within:before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  content: "";
  pointer-events: none;
  outline: 1px solid;
  outline-width: -1px;
  outline-style: solid;
  outline-offset: -1px;
  outline-color: var(--dv-paneview-active-outline-color);
}
.dv-pane-container .dv-pane .dv-pane-body {
  overflow-y: auto;
  overflow-x: hidden;
  flex-grow: 1;
  position: relative;
  outline: none;
}
.dv-pane-container .dv-pane .dv-pane-body:focus:before, .dv-pane-container .dv-pane .dv-pane-body:focus-within:before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  content: "";
  pointer-events: none;
  outline: 1px solid;
  outline-width: -1px;
  outline-style: solid;
  outline-offset: -1px;
  outline-color: var(--dv-paneview-active-outline-color);
}
.dv-debug .dv-split-view-container .dv-sash-container .dv-sash.dv-enabled {
  background-color: black;
}
.dv-debug .dv-split-view-container .dv-sash-container .dv-sash.dv-disabled {
  background-color: orange;
}
.dv-debug .dv-split-view-container .dv-sash-container .dv-sash.dv-maximum {
  background-color: green;
}
.dv-debug .dv-split-view-container .dv-sash-container .dv-sash.dv-minimum {
  background-color: red;
}

.dv-split-view-container {
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
}
.dv-split-view-container.dv-splitview-disabled > .dv-sash-container > .dv-sash {
  pointer-events: none;
}
.dv-split-view-container.dv-animation .dv-view,
.dv-split-view-container.dv-animation .dv-sash {
  /* GPU optimizations for smooth animations */
  will-change: transform;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  transition: transform 0.15s ease-out;
}
.dv-split-view-container.dv-horizontal {
  height: 100%;
}
.dv-split-view-container.dv-horizontal > .dv-sash-container > .dv-sash {
  height: 100%;
  width: 4px;
}
.dv-split-view-container.dv-horizontal > .dv-sash-container > .dv-sash.dv-enabled {
  cursor: ew-resize;
}
.dv-split-view-container.dv-horizontal > .dv-sash-container > .dv-sash.dv-disabled {
  cursor: default;
}
.dv-split-view-container.dv-horizontal > .dv-sash-container > .dv-sash.dv-maximum {
  cursor: w-resize;
}
.dv-split-view-container.dv-horizontal > .dv-sash-container > .dv-sash.dv-minimum {
  cursor: e-resize;
}
.dv-split-view-container.dv-horizontal > .dv-view-container > .dv-view:not(:first-child)::before {
  height: 100%;
  width: 1px;
}
.dv-split-view-container.dv-vertical {
  width: 100%;
}
.dv-split-view-container.dv-vertical > .dv-sash-container > .dv-sash {
  width: 100%;
  height: 4px;
}
.dv-split-view-container.dv-vertical > .dv-sash-container > .dv-sash.dv-enabled {
  cursor: ns-resize;
}
.dv-split-view-container.dv-vertical > .dv-sash-container > .dv-sash.dv-disabled {
  cursor: default;
}
.dv-split-view-container.dv-vertical > .dv-sash-container > .dv-sash.dv-maximum {
  cursor: n-resize;
}
.dv-split-view-container.dv-vertical > .dv-sash-container > .dv-sash.dv-minimum {
  cursor: s-resize;
}
.dv-split-view-container.dv-vertical > .dv-view-container > .dv-view {
  width: 100%;
}
.dv-split-view-container.dv-vertical > .dv-view-container > .dv-view:not(:first-child)::before {
  height: 1px;
  width: 100%;
}
.dv-split-view-container .dv-sash-container {
  height: 100%;
  width: 100%;
  position: absolute;
}
.dv-split-view-container .dv-sash-container .dv-sash {
  position: absolute;
  z-index: 99;
  outline: none;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  touch-action: none;
  background-color: var(--dv-sash-color, transparent);
}
.dv-split-view-container .dv-sash-container .dv-sash:not(.disabled):active, .dv-split-view-container .dv-sash-container .dv-sash:not(.disabled):hover {
  background-color: var(--dv-active-sash-color, transparent);
  transition-property: background-color;
  transition-timing-function: ease-in-out;
  transition-duration: var(--dv-active-sash-transition-duration, 0.1s);
  transition-delay: var(--dv-active-sash-transition-delay, 0.5s);
}
.dv-split-view-container .dv-view-container {
  position: relative;
  height: 100%;
  width: 100%;
}
.dv-split-view-container .dv-view-container .dv-view {
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
  position: absolute;
}
.dv-split-view-container.dv-separator-border .dv-view:not(:first-child)::before {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  pointer-events: none;
  background-color: var(--dv-separator-border);
}
.dv-dragged {
  transform: translate3d(0px, 0px, 0px); /* forces tab to be drawn on a separate layer (see https://github.com/microsoft/vscode/issues/18733) */
}

.dv-tab {
  flex-shrink: 0;
}
.dv-tab:focus-within, .dv-tab:focus {
  position: relative;
}
.dv-tab:focus-within::after, .dv-tab:focus::after {
  position: absolute;
  content: "";
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  pointer-events: none;
  outline: 1px solid var(--dv-tab-divider-color) !important;
  outline-offset: -1px;
  z-index: 5;
}
.dv-tab.dv-tab-dragging .dv-default-tab-action {
  background-color: var(--dv-activegroup-visiblepanel-tab-color);
}
.dv-tab.dv-active-tab .dv-default-tab .dv-default-tab-action {
  visibility: visible;
}
.dv-tab.dv-inactive-tab .dv-default-tab .dv-default-tab-action {
  visibility: hidden;
}
.dv-tab.dv-inactive-tab .dv-default-tab:hover .dv-default-tab-action {
  visibility: visible;
}
.dv-tab .dv-default-tab {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.dv-tab .dv-default-tab .dv-default-tab-content {
  flex-grow: 1;
  margin-right: 4px;
}
.dv-tab .dv-default-tab .dv-default-tab-action {
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}
.dv-tab .dv-default-tab .dv-default-tab-action:hover {
  border-radius: 2px;
  background-color: var(--dv-icon-hover-background-color);
}
.dv-tabs-overflow-dropdown-default {
  height: 100%;
  color: var(--dv-activegroup-hiddenpanel-tab-color);
  margin: var(--dv-tab-margin);
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
}
.dv-tabs-overflow-dropdown-default > span {
  padding-left: 0.25rem;
}
.dv-tabs-overflow-dropdown-default > svg {
  transform: rotate(90deg);
}
.dv-tabs-overflow-dropdown-default:hover {
  border-radius: 2px;
  background-color: var(--dv-icon-hover-background-color);
}
.dv-tabs-container {
  display: flex;
  height: 100%;
  overflow: auto;
  scrollbar-width: thin;
  /* GPU optimizations for smooth scrolling */
  will-change: scroll-position;
  transform: translate3d(0, 0, 0);
  /* Track */
  /* Handle */
}
.dv-tabs-container.dv-tabs-container-vertical {
  width: 100%;
  height: fit-content;
  max-height: 100%;
  writing-mode: vertical-rl;
}
.dv-tabs-container.dv-horizontal .dv-tab:not(:first-child)::before, .dv-tabs-container.dv-vertical .dv-tab:not(:first-child)::before {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  pointer-events: none;
  background-color: var(--dv-tab-divider-color);
}
.dv-tabs-container.dv-horizontal .dv-tab:not(:first-child)::before {
  width: 1px;
  height: 100%;
}
.dv-tabs-container.dv-vertical .dv-tab:not(:first-child)::before {
  width: 100%;
  height: 1px;
}
.dv-tabs-container::-webkit-scrollbar {
  height: 3px;
}
.dv-tabs-container::-webkit-scrollbar-track {
  background: transparent;
}
.dv-tabs-container::-webkit-scrollbar-thumb {
  background: var(--dv-tabs-container-scrollbar-color);
}

.dv-scrollable > .dv-tabs-container {
  overflow: hidden;
}

.dv-tab {
  -webkit-user-drag: element;
  outline: none;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  font-size: var(--dv-tab-font-size);
  margin: var(--dv-tab-margin);
}
.dv-tab.dv-tab--shifting {
  will-change: margin-left;
  transition: transform var(--dv-transition-duration, 200ms) ease-out, margin-left var(--dv-transition-duration, 200ms) ease-out;
}
.dv-tab.dv-tab--dragging {
  width: 0 !important;
  min-width: 0 !important;
  padding: 0 !important;
  margin: 0 !important;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  transition: width var(--dv-transition-duration, 200ms) ease-out, padding var(--dv-transition-duration, 200ms) ease-out, margin var(--dv-transition-duration, 200ms) ease-out, opacity var(--dv-transition-duration, 200ms) ease-out;
}

@media (prefers-reduced-motion: reduce) {
  .dv-tab {
    transition: none !important;
  }
}
.dv-tabs-container-vertical .dv-tab {
  padding: 0.5rem 0.25rem;
}

.dv-tabs-overflow-container {
  flex-direction: column;
  height: unset;
  font-size: var(--dv-tabs-and-actions-container-font-size);
  max-height: min(50vh, 400px);
  overflow-y: auto;
  border: 1px solid var(--dv-tab-divider-color);
  background-color: var(--dv-group-view-background-color);
  /* Scrollbar styling for webkit browsers */
  /* Firefox scrollbar */
  scrollbar-width: thin;
}
.dv-tabs-overflow-container::-webkit-scrollbar {
  width: 6px;
}
.dv-tabs-overflow-container::-webkit-scrollbar-track {
  background: transparent;
}
.dv-tabs-overflow-container::-webkit-scrollbar-thumb {
  background: var(--dv-tabs-container-scrollbar-color);
  border-radius: 3px;
}
.dv-tabs-overflow-container .dv-tab:not(:last-child) {
  border-bottom: 1px solid var(--dv-tab-divider-color);
}
.dv-tabs-overflow-container .dv-active-tab {
  background-color: var(--dv-activegroup-visiblepanel-tab-background-color);
  color: var(--dv-activegroup-visiblepanel-tab-color);
}
.dv-tabs-overflow-container .dv-inactive-tab {
  background-color: var(--dv-activegroup-hiddenpanel-tab-background-color);
  color: var(--dv-activegroup-hiddenpanel-tab-color);
}
.dv-tabs-and-actions-container {
  display: flex;
  background-color: var(--dv-tabs-and-actions-container-background-color);
  flex-shrink: 0;
  box-sizing: border-box;
  height: var(--dv-tabs-and-actions-container-height);
  font-size: var(--dv-tabs-and-actions-container-font-size);
}
.dv-tabs-and-actions-container.dv-single-tab.dv-full-width-single-tab .dv-scrollable {
  flex-grow: 1;
}
.dv-tabs-and-actions-container.dv-single-tab.dv-full-width-single-tab .dv-tabs-container {
  flex-grow: 1;
}
.dv-tabs-and-actions-container.dv-single-tab.dv-full-width-single-tab .dv-tabs-container .dv-tab {
  flex-grow: 1;
  padding: 0px;
}
.dv-tabs-and-actions-container.dv-single-tab.dv-full-width-single-tab .dv-void-container {
  flex-grow: 0;
}
.dv-tabs-and-actions-container .dv-void-container {
  display: flex;
  flex-grow: 1;
}
.dv-tabs-and-actions-container .dv-void-container.dv-draggable {
  cursor: grab;
}
.dv-tabs-and-actions-container .dv-right-actions-container {
  display: flex;
}
.dv-tabs-and-actions-container .dv-right-actions-container.dv-right-actions-container-vertical {
  flex-direction: column;
}
.dv-tabs-and-actions-container.dv-groupview-header-vertical {
  flex-direction: column;
  height: auto;
  width: var(--dv-tabs-and-actions-container-height);
}
.dv-watermark {
  display: flex;
  height: 100%;
}`),qe=class{},O=class extends qe{constructor(e,t,n){super(),this.viewId=e,this.groupId=t,this.panelId=n}},Je=class extends qe{constructor(e,t){super(),this.viewId=e,this.paneId=t}},Ye=class e{constructor(){}static getInstance(){return e.INSTANCE}hasData(e){return e&&e===this.proto}clearData(e){this.hasData(e)&&(this.proto=void 0,this.data=void 0)}getData(e){if(this.hasData(e))return this.data}setData(e,t){t&&(this.data=e,this.proto=t)}},Ye.INSTANCE=new Ye,(function(e){e.any=(...e)=>t=>{let n=e.map(e=>e(t));return{dispose:()=>{n.forEach(e=>{e.dispose()})}}}})(Xe||={}),Ze=class{constructor(){this._defaultPrevented=!1}get defaultPrevented(){return this._defaultPrevented}preventDefault(){this._defaultPrevented=!0}},Qe=class{constructor(){this._isAccepted=!1}get isAccepted(){return this._isAccepted}accept(){this._isAccepted=!0}},$e=class{constructor(){this.events=new Map}get size(){return this.events.size}add(e,t){this.events.set(e,t)}delete(e){this.events.delete(e)}clear(){this.events.clear()}},et=class e{static create(){return new e(Error().stack??``)}constructor(e){this.value=e}print(){console.warn(`dockview: stacktrace`,this.value)}},tt=class{constructor(e,t){this.callback=e,this.stacktrace=t}},k=class e{static setLeakageMonitorEnabled(t){t!==e.ENABLE_TRACKING&&e.MEMORY_LEAK_WATCHER.clear(),e.ENABLE_TRACKING=t}get value(){return this._last}constructor(e){this.options=e,this._listeners=[],this._disposed=!1}get event(){return this._event||(this._event=t=>{this.options?.replay&&this._last!==void 0&&t(this._last);let n=new tt(t,e.ENABLE_TRACKING?et.create():void 0);return this._listeners.push(n),{dispose:()=>{let t=this._listeners.indexOf(n);t>-1?this._listeners.splice(t,1):e.ENABLE_TRACKING}}},e.ENABLE_TRACKING&&e.MEMORY_LEAK_WATCHER.add(this._event,et.create())),this._event}fire(e){this.options?.replay&&(this._last=e);for(let t of this._listeners)t.callback(e)}dispose(){this._disposed||(this._disposed=!0,this._listeners.length>0&&(e.ENABLE_TRACKING&&queueMicrotask(()=>{for(let e of this._listeners)console.warn(`dockview: stacktrace`,e.stacktrace?.print())}),this._listeners=[]),e.ENABLE_TRACKING&&this._event&&e.MEMORY_LEAK_WATCHER.delete(this._event))}},k.ENABLE_TRACKING=!1,k.MEMORY_LEAK_WATCHER=new $e,nt=class{constructor(){this._onFired=new k,this._currentFireCount=0,this._queued=!1,this.onEvent=e=>{let t=this._currentFireCount;return this._onFired.event(()=>{this._currentFireCount>t&&e()})}}fire(){this._currentFireCount++,!this._queued&&(this._queued=!0,queueMicrotask(()=>{this._queued=!1,this._onFired.fire()}))}dispose(){this._onFired.dispose()}},(function(e){e.NONE={dispose:()=>{}};function t(e){return{dispose:()=>{e()}}}e.from=t})(rt||={}),A=class{get isDisposed(){return this._isDisposed}constructor(...e){this._isDisposed=!1,this._disposables=new Set(e)}addDisposables(...e){e.forEach(e=>this._disposables.add(e))}removeDisposable(e){this._disposables.delete(e)}dispose(){this._isDisposed||(this._isDisposed=!0,this._disposables.forEach(e=>e.dispose()),this._disposables.clear())}},j=class{constructor(){this._disposable=rt.NONE}set value(e){this._disposable&&this._disposable.dispose(),this._disposable=e}dispose(){this._disposable&&=(this._disposable.dispose(),rt.NONE)}},it=class extends A{constructor(e){super(),this._onDidChange=new k,this.onDidChange=this._onDidChange.event,this._value=null,this.addDisposables(this._onDidChange,ee(e,e=>{this._value={hasScrollX:e.target.scrollWidth>e.target.clientWidth,hasScrollY:e.target.scrollHeight>e.target.clientHeight},this._onDidChange.fire(this._value)}))}},at=(e,...t)=>{for(let n of t)e.classList.contains(n)&&e.classList.remove(n)},ot=(e,...t)=>{for(let n of t)e.classList.contains(n)||e.classList.add(n)},M=(e,t,n)=>{let r=e.classList.contains(t);n&&!r&&e.classList.add(t),!n&&r&&e.classList.remove(t)},st=class extends A{constructor(e){super(),this._onDidFocus=new k,this.onDidFocus=this._onDidFocus.event,this._onDidBlur=new k,this.onDidBlur=this._onDidBlur.event,this.addDisposables(this._onDidFocus,this._onDidBlur);let t=S(document.activeElement,e),n=!1,r=()=>{n=!1,t||(t=!0,this._onDidFocus.fire())},i=()=>{t&&(n=!0,window.setTimeout(()=>{n&&(n=!1,t=!1,this._onDidBlur.fire())},0))};this._refreshStateHandler=()=>{S(document.activeElement,e)!==t&&(t?i():r())},this.addDisposables(x(e,`focus`,r,!0)),this.addDisposables(x(e,`blur`,i,!0))}refreshState(){this._refreshStateHandler()}},ct=`dv-quasiPreventDefault`,lt=class{constructor(e){this.element=e,this._classNames=[]}setClassNames(e){for(let e of this._classNames)M(this.element,e,!1);this._classNames=e.split(` `).filter(e=>e.trim().length>0);for(let e of this._classNames)M(this.element,e,!0)}},ut=100,N=(e,t,n)=>t>n?t:Math.min(n,Math.max(e,t)),dt=()=>{let e=1;return{next:()=>(e++).toString()}},P=(e,t)=>{let n=[];if(typeof t!=`number`&&(t=e,e=0),e<=t)for(let r=e;r<t;r++)n.push(r);else for(let r=e;r>t;r--)n.push(r);return n},ft=class{set size(e){this._size=e}get size(){return this._size}get cachedVisibleSize(){return this._cachedVisibleSize}get visible(){return this._cachedVisibleSize===void 0}get minimumSize(){return this.visible?this.view.minimumSize:0}get viewMinimumSize(){return this.view.minimumSize}get maximumSize(){return this.visible?this.view.maximumSize:0}get viewMaximumSize(){return this.view.maximumSize}get priority(){return this.view.priority}get snap(){return!!this.view.snap}set enabled(e){this.container.style.pointerEvents=e?``:`none`}constructor(e,t,n,r){this.container=e,this.view=t,this.disposable=r,this._cachedVisibleSize=void 0,typeof n==`number`?(this._size=n,this._cachedVisibleSize=void 0,e.classList.add(`visible`)):(this._size=0,this._cachedVisibleSize=n.cachedVisibleSize)}setVisible(e,t){e!==this.visible&&(e?(this.size=N(this._cachedVisibleSize??0,this.viewMinimumSize,this.viewMaximumSize),this._cachedVisibleSize=void 0):(this._cachedVisibleSize=typeof t==`number`?t:this.size,this.size=0),this.container.classList.toggle(`visible`,e),this.view.setVisible&&this.view.setVisible(e))}dispose(){return this.disposable.dispose(),this.view}},(function(e){e.HORIZONTAL=`HORIZONTAL`,e.VERTICAL=`VERTICAL`})(F||={}),(function(e){e[e.MAXIMUM=0]=`MAXIMUM`,e[e.MINIMUM=1]=`MINIMUM`,e[e.DISABLED=2]=`DISABLED`,e[e.ENABLED=3]=`ENABLED`})(pt||={}),(function(e){e.Low=`low`,e.High=`high`,e.Normal=`normal`})(mt||={}),(function(e){e.Distribute={type:`distribute`};function t(e){return{type:`split`,index:e}}e.Split=t;function n(e){return{type:`invisible`,cachedVisibleSize:e}}e.Invisible=n})(ht||={}),gt=class{get contentSize(){return this._contentSize}get size(){return this._size}set size(e){this._size=e}get orthogonalSize(){return this._orthogonalSize}set orthogonalSize(e){this._orthogonalSize=e}get length(){return this.viewItems.length}get proportions(){return this._proportions?[...this._proportions]:void 0}get orientation(){return this._orientation}set orientation(e){this._orientation=e;let t=this.size;this.size=this.orthogonalSize,this.orthogonalSize=t,at(this.element,`dv-horizontal`,`dv-vertical`),this.element.classList.add(this.orientation==F.HORIZONTAL?`dv-horizontal`:`dv-vertical`)}get minimumSize(){return this.viewItems.reduce((e,t)=>e+t.minimumSize,0)}get maximumSize(){return this.length===0?1/0:this.viewItems.reduce((e,t)=>e+t.maximumSize,0)}get startSnappingEnabled(){return this._startSnappingEnabled}set startSnappingEnabled(e){this._startSnappingEnabled!==e&&(this._startSnappingEnabled=e,this.updateSashEnablement())}get endSnappingEnabled(){return this._endSnappingEnabled}set endSnappingEnabled(e){this._endSnappingEnabled!==e&&(this._endSnappingEnabled=e,this.updateSashEnablement())}get disabled(){return this._disabled}set disabled(e){this._disabled=e,M(this.element,`dv-splitview-disabled`,e)}get margin(){return this._margin}set margin(e){this._margin=e,M(this.element,`dv-splitview-has-margin`,e!==0)}constructor(e,t){this.container=e,this.viewItems=[],this.sashes=[],this._size=0,this._orthogonalSize=0,this._contentSize=0,this._proportions=void 0,this._startSnappingEnabled=!0,this._endSnappingEnabled=!0,this._disabled=!1,this._margin=0,this._onDidSashEnd=new k,this.onDidSashEnd=this._onDidSashEnd.event,this._onDidAddView=new k,this.onDidAddView=this._onDidAddView.event,this._onDidRemoveView=new k,this.onDidRemoveView=this._onDidRemoveView.event,this.resize=(e,t,n=this.viewItems.map(e=>e.size),r,i,a=-1/0,o=1/0,s,c)=>{if(e<0||e>this.viewItems.length)return 0;let l=P(e,-1),u=P(e+1,this.viewItems.length);if(i)for(let e of i)he(l,e),he(u,e);if(r)for(let e of r)ge(l,e),ge(u,e);let d=l.map(e=>this.viewItems[e]),f=l.map(e=>n[e]),p=u.map(e=>this.viewItems[e]),m=u.map(e=>n[e]),h=l.reduce((e,t)=>e+this.viewItems[t].minimumSize-n[t],0),g=l.reduce((e,t)=>e+this.viewItems[t].maximumSize-n[t],0),_=u.length===0?1/0:u.reduce((e,t)=>e+n[t]-this.viewItems[t].minimumSize,0),v=u.length===0?-1/0:u.reduce((e,t)=>e+n[t]-this.viewItems[t].maximumSize,0),y=Math.max(h,v),b=Math.min(_,g),x=!1;if(s){let e=this.viewItems[s.index],n=t>=s.limitDelta;x=n!==e.visible,e.setVisible(n,s.size)}if(!x&&c){let e=this.viewItems[c.index],n=t<c.limitDelta;x=n!==e.visible,e.setVisible(n,c.size)}if(x)return this.resize(e,t,n,r,i,a,o);let ee=N(t,y,b),S=0,C=ee;for(let e=0;e<d.length;e++){let t=d[e],n=N(f[e]+C,t.minimumSize,t.maximumSize),r=n-f[e];S+=r,C-=r,t.size=n}let te=S;for(let e=0;e<p.length;e++){let t=p[e],n=N(m[e]-te,t.minimumSize,t.maximumSize),r=n-m[e];te+=r,t.size=n}return t},this._orientation=t.orientation??F.VERTICAL,this.element=this.createContainer(),this.margin=t.margin??0,this.proportionalLayout=t.proportionalLayout===void 0?!0:!!t.proportionalLayout,this.viewContainer=this.createViewContainer(),this.sashContainer=this.createSashContainer(),this.element.appendChild(this.sashContainer),this.element.appendChild(this.viewContainer),this.container.appendChild(this.element),this.style(t.styles),t.descriptor&&(this._size=t.descriptor.size,t.descriptor.views.forEach((e,t)=>{let n=e.visible===void 0||e.visible?e.size:{type:`invisible`,cachedVisibleSize:e.size},r=e.view;this.addView(r,n,t,!0)}),this._contentSize=this.viewItems.reduce((e,t)=>e+t.size,0),this.saveProportions())}style(e){e?.separatorBorder===`transparent`?(at(this.element,`dv-separator-border`),this.element.style.removeProperty(`--dv-separator-border`)):(ot(this.element,`dv-separator-border`),e?.separatorBorder&&this.element.style.setProperty(`--dv-separator-border`,e.separatorBorder))}isViewVisible(e){if(e<0||e>=this.viewItems.length)throw Error(`Index out of bounds`);return this.viewItems[e].visible}setViewVisible(e,t){if(e<0||e>=this.viewItems.length)throw Error(`Index out of bounds`);let n=this.viewItems[e];n.setVisible(t,n.size),this.distributeEmptySpace(e),this.layoutViews(),this.saveProportions()}getViewSize(e){return e<0||e>=this.viewItems.length?-1:this.viewItems[e].size}resizeView(e,t){if(e<0||e>=this.viewItems.length)return;let n=P(this.viewItems.length).filter(t=>t!==e),r=[...n.filter(e=>this.viewItems[e].priority===mt.Low),e],i=n.filter(e=>this.viewItems[e].priority===mt.High),a=this.viewItems[e];t=Math.round(t),t=N(t,a.minimumSize,Math.min(a.maximumSize,this._size)),a.size=t,this.relayout(r,i)}getViews(){return this.viewItems.map(e=>e.view)}onDidChange(e,t){let n=this.viewItems.indexOf(e);if(n<0||n>=this.viewItems.length)return;t=typeof t==`number`?t:e.size,t=N(t,e.minimumSize,e.maximumSize),e.size=t;let r=P(this.viewItems.length).filter(e=>e!==n),i=[...r.filter(e=>this.viewItems[e].priority===mt.Low),n],a=r.filter(e=>this.viewItems[e].priority===mt.High);this.relayout([...i,n],a)}addView(e,t={type:`distribute`},n=this.viewItems.length,r){let i=document.createElement(`div`);i.className=`dv-view`,i.appendChild(e.element);let a;a=typeof t==`number`?t:t.type===`split`?this.getViewSize(t.index)/2:t.type===`invisible`?{cachedVisibleSize:t.cachedVisibleSize}:e.minimumSize;let o=e.onDidChange(e=>this.onDidChange(s,e.size)),s=new ft(i,e,a,{dispose:()=>{o.dispose(),this.viewContainer.removeChild(i)}});if(n===this.viewItems.length?this.viewContainer.appendChild(i):this.viewContainer.insertBefore(i,this.viewContainer.children.item(n)),this.viewItems.splice(n,0,s),this.viewItems.length>1){let e=document.createElement(`div`);e.className=`dv-sash`;let t=t=>{for(let e of this.viewItems)e.enabled=!1;let n=ce(),r=this._orientation===F.HORIZONTAL?t.clientX:t.clientY,i=E(this.sashes,t=>t.container===e),a=this.viewItems.map(e=>e.size),o,s,c=P(i,-1),l=P(i+1,this.viewItems.length),u=c.reduce((e,t)=>e+(this.viewItems[t].minimumSize-a[t]),0),d=c.reduce((e,t)=>e+(this.viewItems[t].viewMaximumSize-a[t]),0),f=l.length===0?1/0:l.reduce((e,t)=>e+(a[t]-this.viewItems[t].minimumSize),0),p=l.length===0?-1/0:l.reduce((e,t)=>e+(a[t]-this.viewItems[t].viewMaximumSize),0),m=Math.max(u,p),h=Math.min(f,d),g=this.findFirstSnapIndex(c),_=this.findFirstSnapIndex(l);if(typeof g==`number`){let e=this.viewItems[g],t=Math.floor(e.viewMinimumSize/2);o={index:g,limitDelta:e.visible?m-t:m+t,size:e.size}}if(typeof _==`number`){let e=this.viewItems[_],t=Math.floor(e.viewMinimumSize/2);s={index:_,limitDelta:e.visible?h+t:h-t,size:e.size}}let v=e=>{let t=(this._orientation===F.HORIZONTAL?e.clientX:e.clientY)-r;this.resize(i,t,a,void 0,void 0,m,h,o,s),this.distributeEmptySpace(),this.layoutViews()},y=()=>{for(let e of this.viewItems)e.enabled=!0;n.release(),this.saveProportions(),document.removeEventListener(`pointermove`,v),document.removeEventListener(`pointerup`,y),document.removeEventListener(`pointercancel`,y),document.removeEventListener(`contextmenu`,y),this._onDidSashEnd.fire(void 0)};document.addEventListener(`pointermove`,v),document.addEventListener(`pointerup`,y),document.addEventListener(`pointercancel`,y),document.addEventListener(`contextmenu`,y)};e.addEventListener(`pointerdown`,t);let n={container:e,disposable:()=>{e.removeEventListener(`pointerdown`,t),this.sashContainer.removeChild(e)}};this.sashContainer.appendChild(e),this.sashes.push(n)}r||this.relayout([n]),!r&&typeof t!=`number`&&t.type===`distribute`&&this.distributeViewSizes(),this._onDidAddView.fire(e)}distributeViewSizes(){let e=[],t=0;for(let n of this.viewItems)n.maximumSize-n.minimumSize>0&&(e.push(n),t+=n.size);let n=Math.floor(t/e.length);for(let t of e)t.size=N(n,t.minimumSize,t.maximumSize);let r=P(this.viewItems.length),i=r.filter(e=>this.viewItems[e].priority===mt.Low),a=r.filter(e=>this.viewItems[e].priority===mt.High);this.relayout(i,a)}removeView(e,t,n=!1){let r=this.viewItems.splice(e,1)[0];if(r.dispose(),this.viewItems.length>=1){let t=Math.max(e-1,0);this.sashes.splice(t,1)[0].disposable()}return n||this.relayout(),t&&t.type===`distribute`&&this.distributeViewSizes(),this._onDidRemoveView.fire(r.view),r.view}getViewCachedVisibleSize(e){if(e<0||e>=this.viewItems.length)throw Error(`Index out of bounds`);return this.viewItems[e].cachedVisibleSize}moveView(e,t){let n=this.getViewCachedVisibleSize(e),r=n===void 0?this.getViewSize(e):ht.Invisible(n),i=this.removeView(e,void 0,!0);this.addView(i,r,t)}layout(e,t){let n=Math.max(this.size,this._contentSize);if(this.size=e,this.orthogonalSize=t,this.proportions){let t=0;for(let n=0;n<this.viewItems.length;n++){let r=this.viewItems[n],i=this.proportions[n];typeof i==`number`?t+=i:e-=r.size}for(let n=0;n<this.viewItems.length;n++){let r=this.viewItems[n],i=this.proportions[n];typeof i==`number`&&t>0&&(r.size=N(Math.round(i*e/t),r.minimumSize,r.maximumSize))}}else{let t=P(this.viewItems.length),r=t.filter(e=>this.viewItems[e].priority===mt.Low),i=t.filter(e=>this.viewItems[e].priority===mt.High);this.resize(this.viewItems.length-1,e-n,void 0,r,i)}this.distributeEmptySpace(),this.layoutViews()}relayout(e,t){let n=this.viewItems.reduce((e,t)=>e+t.size,0);this.resize(this.viewItems.length-1,this._size-n,void 0,e,t),this.distributeEmptySpace(),this.layoutViews(),this.saveProportions()}distributeEmptySpace(e){let t=this.viewItems.reduce((e,t)=>e+t.size,0),n=this.size-t,r=P(this.viewItems.length-1,-1),i=r.filter(e=>this.viewItems[e].priority===mt.Low),a=r.filter(e=>this.viewItems[e].priority===mt.High);for(let e of a)he(r,e);for(let e of i)ge(r,e);typeof e==`number`&&ge(r,e);for(let e=0;n!==0&&e<r.length;e++){let t=this.viewItems[r[e]],i=N(t.size+n,t.minimumSize,t.maximumSize),a=i-t.size;n-=a,t.size=i}}saveProportions(){this.proportionalLayout&&this._contentSize>0&&(this._proportions=this.viewItems.map(e=>e.visible?e.size/this._contentSize:void 0))}layoutViews(){if(this._contentSize=this.viewItems.reduce((e,t)=>e+t.size,0),this.updateSashEnablement(),this.viewItems.length===0)return;let e=this.viewItems.filter(e=>e.visible),t=Math.max(0,e.length-1),n=this.margin*t/Math.max(1,e.length),r=0,i=[],a=this.viewItems.reduce((e,t,n)=>{let r=t.visible?1:0;return n===0?e.push(r):e.push(e[n-1]+r),e},[]);this.viewItems.forEach((e,o)=>{r+=this.viewItems[o].size,i.push(r);let s=e.visible?e.size-n:0,c=Math.max(0,a[o]-1),l=o===0||c===0?0:i[o-1]+c/t*n;if(o<this.viewItems.length-1){let t=e.visible?l+s-4/2+this.margin/2:l;this._orientation===F.HORIZONTAL&&(this.sashes[o].container.style.left=`${t}px`,this.sashes[o].container.style.top=`0px`),this._orientation===F.VERTICAL&&(this.sashes[o].container.style.left=`0px`,this.sashes[o].container.style.top=`${t}px`)}this._orientation===F.HORIZONTAL&&(e.container.style.width=`${s}px`,e.container.style.left=`${l}px`,e.container.style.top=``,e.container.style.height=``),this._orientation===F.VERTICAL&&(e.container.style.height=`${s}px`,e.container.style.top=`${l}px`,e.container.style.width=``,e.container.style.left=``),e.view.layout(e.size-n,this._orthogonalSize)})}findFirstSnapIndex(e){for(let t of e){let e=this.viewItems[t];if(e.visible&&e.snap)return t}for(let t of e){let e=this.viewItems[t];if(e.visible&&e.maximumSize-e.minimumSize>0)return;if(!e.visible&&e.snap)return t}}updateSashEnablement(){let e=!1,t=this.viewItems.map(t=>e=t.size-t.minimumSize>0||e);e=!1;let n=this.viewItems.map(t=>e=t.maximumSize-t.size>0||e),r=[...this.viewItems].reverse();e=!1;let i=r.map(t=>e=t.size-t.minimumSize>0||e).reverse();e=!1;let a=r.map(t=>e=t.maximumSize-t.size>0||e).reverse(),o=0;for(let e=0;e<this.sashes.length;e++){let r=this.sashes[e],s=this.viewItems[e];o+=s.size;let c=!(t[e]&&a[e+1]),l=!(n[e]&&i[e+1]);if(c&&l){let n=P(e,-1),a=P(e+1,this.viewItems.length),s=this.findFirstSnapIndex(n),c=this.findFirstSnapIndex(a),l=typeof s==`number`&&!this.viewItems[s].visible,u=typeof c==`number`&&!this.viewItems[c].visible;l&&i[e]&&(o>0||this.startSnappingEnabled)?this.updateSash(r,pt.MINIMUM):u&&t[e]&&(o<this._contentSize||this.endSnappingEnabled)?this.updateSash(r,pt.MAXIMUM):this.updateSash(r,pt.DISABLED)}else c&&!l?this.updateSash(r,pt.MINIMUM):!c&&l?this.updateSash(r,pt.MAXIMUM):this.updateSash(r,pt.ENABLED)}}updateSash(e,t){M(e.container,`dv-disabled`,t===pt.DISABLED),M(e.container,`dv-enabled`,t===pt.ENABLED),M(e.container,`dv-maximum`,t===pt.MAXIMUM),M(e.container,`dv-minimum`,t===pt.MINIMUM)}createViewContainer(){let e=document.createElement(`div`);return e.className=`dv-view-container`,e}createSashContainer(){let e=document.createElement(`div`);return e.className=`dv-sash-container`,e}createContainer(){let e=document.createElement(`div`);return e.className=`dv-split-view-container ${this._orientation===F.HORIZONTAL?`dv-horizontal`:`dv-vertical`}`,e}dispose(){this._onDidSashEnd.dispose(),this._onDidAddView.dispose(),this._onDidRemoveView.dispose();for(let e=0;e<this.element.children.length;e++)if(this.element.children.item(e)===this.element){this.element.removeChild(this.element);break}for(let e of this.viewItems)e.dispose();this.element.remove()}},_t=Object.keys({orientation:void 0,descriptor:void 0,proportionalLayout:void 0,styles:void 0,margin:void 0,disableAutoResizing:void 0,className:void 0}),vt=class extends A{get onDidAddView(){return this.splitview.onDidAddView}get onDidRemoveView(){return this.splitview.onDidRemoveView}get minimumSize(){return this.splitview.minimumSize}get maximumSize(){return this.splitview.maximumSize}get orientation(){return this.splitview.orientation}get size(){return this.splitview.size}get orthogonalSize(){return this.splitview.orthogonalSize}constructor(e,t){super(),this.paneItems=[],this.skipAnimation=!1,this._onDidChange=new k,this.onDidChange=this._onDidChange.event,this._orientation=t.orientation??F.VERTICAL,this.element=document.createElement(`div`),this.element.className=`dv-pane-container`,e.appendChild(this.element),this.splitview=new gt(this.element,{orientation:this._orientation,proportionalLayout:!1,descriptor:t.descriptor}),this.getPanes().forEach(e=>{let t=new A(e.onDidChangeExpansionState(()=>{this.setupAnimation(),this._onDidChange.fire(void 0)})),n={pane:e,disposable:{dispose:()=>{t.dispose()}}};this.paneItems.push(n),e.orthogonalSize=this.splitview.orthogonalSize}),this.addDisposables(this._onDidChange,this.splitview.onDidSashEnd(()=>{this._onDidChange.fire(void 0)}),this.splitview.onDidAddView(()=>{this._onDidChange.fire()}),this.splitview.onDidRemoveView(()=>{this._onDidChange.fire()}))}setViewVisible(e,t){this.splitview.setViewVisible(e,t)}addPane(e,t,n=this.splitview.length,r=!1){let i=e.onDidChangeExpansionState(()=>{this.setupAnimation(),this._onDidChange.fire(void 0)}),a={pane:e,disposable:{dispose:()=>{i.dispose()}}};this.paneItems.splice(n,0,a),e.orthogonalSize=this.splitview.orthogonalSize,this.splitview.addView(e,t,n,r)}getViewSize(e){return this.splitview.getViewSize(e)}getPanes(){return this.splitview.getViews()}removePane(e,t={skipDispose:!1}){let n=this.paneItems.splice(e,1)[0];return this.splitview.removeView(e),t.skipDispose||(n.disposable.dispose(),n.pane.dispose()),n}moveView(e,t){if(e===t)return;let n=this.removePane(e,{skipDispose:!0});this.skipAnimation=!0;try{this.addPane(n.pane,n.pane.size,t,!1)}finally{this.skipAnimation=!1}}layout(e,t){this.splitview.layout(e,t)}setupAnimation(){this.skipAnimation||(this.animationTimer&&=(clearTimeout(this.animationTimer),void 0),ot(this.element,`dv-animated`),this.animationTimer=setTimeout(()=>{this.animationTimer=void 0,at(this.element,`dv-animated`)},200))}dispose(){super.dispose(),this.animationTimer&&=(clearTimeout(this.animationTimer),void 0),this.paneItems.forEach(e=>{e.disposable.dispose(),e.pane.dispose()}),this.paneItems=[],this.splitview.dispose(),this.element.remove()}},I=class{get minimumWidth(){return this.view.minimumWidth}get maximumWidth(){return this.view.maximumWidth}get minimumHeight(){return this.view.minimumHeight}get maximumHeight(){return this.view.maximumHeight}get priority(){return this.view.priority}get snap(){return this.view.snap}get minimumSize(){return this.orientation===F.HORIZONTAL?this.minimumHeight:this.minimumWidth}get maximumSize(){return this.orientation===F.HORIZONTAL?this.maximumHeight:this.maximumWidth}get minimumOrthogonalSize(){return this.orientation===F.HORIZONTAL?this.minimumWidth:this.minimumHeight}get maximumOrthogonalSize(){return this.orientation===F.HORIZONTAL?this.maximumWidth:this.maximumHeight}get orthogonalSize(){return this._orthogonalSize}get size(){return this._size}get element(){return this.view.element}get width(){return this.orientation===F.HORIZONTAL?this.orthogonalSize:this.size}get height(){return this.orientation===F.HORIZONTAL?this.size:this.orthogonalSize}constructor(e,t,n,r=0){this.view=e,this.orientation=t,this._onDidChange=new k,this.onDidChange=this._onDidChange.event,this._orthogonalSize=n,this._size=r,this._disposable=this.view.onDidChange(e=>{e?this._onDidChange.fire({size:this.orientation===F.VERTICAL?e.width:e.height,orthogonalSize:this.orientation===F.VERTICAL?e.height:e.width}):this._onDidChange.fire({})})}setVisible(e){this.view.setVisible&&this.view.setVisible(e)}layout(e,t){this._size=e,this._orthogonalSize=t,this.view.layout(this.width,this.height)}dispose(){this._onDidChange.dispose(),this._disposable.dispose()}},L=class e extends A{get width(){return this.orientation===F.HORIZONTAL?this.size:this.orthogonalSize}get height(){return this.orientation===F.HORIZONTAL?this.orthogonalSize:this.size}get minimumSize(){return this.children.length===0?0:Math.max(...this.children.map((e,t)=>this.splitview.isViewVisible(t)?e.minimumOrthogonalSize:0))}get maximumSize(){return Math.min(...this.children.map((e,t)=>this.splitview.isViewVisible(t)?e.maximumOrthogonalSize:1/0))}get minimumOrthogonalSize(){return this.splitview.minimumSize}get maximumOrthogonalSize(){return this.splitview.maximumSize}get orthogonalSize(){return this._orthogonalSize}get size(){return this._size}get minimumWidth(){return this.orientation===F.HORIZONTAL?this.minimumOrthogonalSize:this.minimumSize}get minimumHeight(){return this.orientation===F.HORIZONTAL?this.minimumSize:this.minimumOrthogonalSize}get maximumWidth(){return this.orientation===F.HORIZONTAL?this.maximumOrthogonalSize:this.maximumSize}get maximumHeight(){return this.orientation===F.HORIZONTAL?this.maximumSize:this.maximumOrthogonalSize}get priority(){if(this.children.length===0)return mt.Normal;let e=this.children.map(e=>e.priority===void 0?mt.Normal:e.priority);return e.some(e=>e===mt.High)?mt.High:e.some(e=>e===mt.Low)?mt.Low:mt.Normal}get disabled(){return this.splitview.disabled}set disabled(e){this.splitview.disabled=e}get margin(){return this.splitview.margin}set margin(t){this.splitview.margin=t,this.children.forEach(n=>{n instanceof e&&(n.margin=t)})}constructor(e,t,n,r,i,a,o,s){if(super(),this.orientation=e,this.proportionalLayout=t,this.styles=n,this._childrenDisposable=rt.NONE,this.children=[],this._onDidChange=new k,this.onDidChange=this._onDidChange.event,this._onDidVisibilityChange=new k,this.onDidVisibilityChange=this._onDidVisibilityChange.event,this._orthogonalSize=i,this._size=r,this.element=document.createElement(`div`),this.element.className=`dv-branch-node`,!s)this.splitview=new gt(this.element,{orientation:this.orientation,proportionalLayout:t,styles:n,margin:o}),this.splitview.layout(this.size,this.orthogonalSize);else{let e={views:s.map(e=>({view:e.node,size:e.node.size,visible:e.node instanceof I&&e.visible!==void 0?e.visible:!0})),size:this.orthogonalSize};this.children=s.map(e=>e.node),this.splitview=new gt(this.element,{orientation:this.orientation,descriptor:e,proportionalLayout:t,styles:n,margin:o})}this.disabled=a,this.addDisposables(this._onDidChange,this._onDidVisibilityChange,this.splitview.onDidSashEnd(()=>{this._onDidChange.fire({})})),this.setupChildrenEvents()}setVisible(e){}isChildVisible(e){if(e<0||e>=this.children.length)throw Error(`Invalid index`);return this.splitview.isViewVisible(e)}setChildVisible(e,t){if(e<0||e>=this.children.length)throw Error(`Invalid index`);if(this.splitview.isViewVisible(e)===t)return;let n=this.splitview.contentSize===0;this.splitview.setViewVisible(e,t);let r=this.splitview.contentSize===0;(t&&n||!t&&r)&&this._onDidVisibilityChange.fire({visible:t})}moveChild(e,t){if(e===t)return;if(e<0||e>=this.children.length)throw Error(`Invalid from index`);e<t&&t--,this.splitview.moveView(e,t);let n=this._removeChild(e);this._addChild(n,t)}getChildSize(e){if(e<0||e>=this.children.length)throw Error(`Invalid index`);return this.splitview.getViewSize(e)}resizeChild(e,t){if(e<0||e>=this.children.length)throw Error(`Invalid index`);this.splitview.resizeView(e,t)}layout(e,t){this._size=t,this._orthogonalSize=e,this.splitview.layout(t,e)}addChild(e,t,n,r){if(n<0||n>this.children.length)throw Error(`Invalid index`);this.splitview.addView(e,t,n,r),this._addChild(e,n)}getChildCachedVisibleSize(e){if(e<0||e>=this.children.length)throw Error(`Invalid index`);return this.splitview.getViewCachedVisibleSize(e)}removeChild(e,t){if(e<0||e>=this.children.length)throw Error(`Invalid index`);return this.splitview.removeView(e,t),this._removeChild(e)}_addChild(e,t){this.children.splice(t,0,e),this.setupChildrenEvents()}_removeChild(e){let[t]=this.children.splice(e,1);return this.setupChildrenEvents(),t}setupChildrenEvents(){this._childrenDisposable.dispose(),this._childrenDisposable=new A(Xe.any(...this.children.map(e=>e.onDidChange))(e=>{this._onDidChange.fire({size:e.orthogonalSize})}),...this.children.map((t,n)=>t instanceof e?t.onDidVisibilityChange(({visible:e})=>{this.setChildVisible(n,e)}):rt.NONE))}dispose(){this._childrenDisposable.dispose(),this.splitview.dispose(),this.children.forEach(e=>e.dispose()),super.dispose()}},yt=e=>e===F.HORIZONTAL?F.VERTICAL:F.HORIZONTAL,bt=(e,t)=>{let n=t===F.VERTICAL?e.box.width:e.box.height;return Te(e)?{type:`branch`,data:e.children.map(e=>bt(e,yt(t))),size:n}:typeof e.cachedVisibleSize==`number`?{type:`leaf`,data:e.view.toJSON(),size:e.cachedVisibleSize,visible:!1}:{type:`leaf`,data:e.view.toJSON(),size:n}},xt=class{get length(){return this._root?this._root.children.length:0}get orientation(){return this.root.orientation}set orientation(e){if(this.root.orientation===e)return;let{size:t,orthogonalSize:n}=this.root;this.root=be(this.root,n,t),this.root.layout(t,n)}get width(){return this.root.width}get height(){return this.root.height}get minimumWidth(){return this.root.minimumWidth}get minimumHeight(){return this.root.minimumHeight}get maximumWidth(){return this.root.maximumHeight}get maximumHeight(){return this.root.maximumHeight}get locked(){return this._locked}set locked(e){this._locked=e;let t=[this.root];for(;t.length>0;){let n=t.pop();n instanceof L&&(n.disabled=e,t.push(...n.children))}}get margin(){return this._margin}set margin(e){this._margin=e,this.root.margin=e}maximizedView(){return this._maximizedNode?.leaf.view}hasMaximizedView(){return this._maximizedNode!==void 0}maximizeView(e){let t=D(e.element),[n,r]=this.getNode(t);if(!(r instanceof I)||this._maximizedNode?.leaf===r)return;this.hasMaximizedView()&&this.exitMaximizedView(),bt(this.getView(),this.orientation);let i=[];function a(e,t){for(let n=0;n<e.children.length;n++){let r=e.children[n];r instanceof I?r!==t&&(e.isChildVisible(n)?e.setChildVisible(n,!1):i.push(r)):a(r,t)}}a(this.root,r),this._maximizedNode={leaf:r,hiddenOnMaximize:i},this._onDidMaximizedNodeChange.fire({view:r.view,isMaximized:!0})}exitMaximizedView(){if(!this._maximizedNode)return;let e=this._maximizedNode.hiddenOnMaximize;function t(n){for(let r=n.children.length-1;r>=0;r--){let i=n.children[r];i instanceof I?e.includes(i)||n.setChildVisible(r,!0):t(i)}}t(this.root);let n=this._maximizedNode.leaf;this._maximizedNode=void 0,this._onDidMaximizedNodeChange.fire({view:n.view,isMaximized:!1})}serialize(){let e=this.maximizedView(),t;e&&(t=D(e.element)),this.hasMaximizedView()&&this.exitMaximizedView();let n={root:bt(this.getView(),this.orientation),width:this.width,height:this.height,orientation:this.orientation};return t&&(n.maximizedNode={location:t}),e&&this.maximizeView(e),n}dispose(){this.disposable.dispose(),this._onDidChange.dispose(),this._onDidMaximizedNodeChange.dispose(),this._onDidViewVisibilityChange.dispose(),this.root.dispose(),this._maximizedNode=void 0,this.element.remove()}clear(){let e=this.root.orientation;this.root=new L(e,this.proportionalLayout,this.styles,this.root.size,this.root.orthogonalSize,this.locked,this.margin)}deserialize(e,t){let n=e.orientation,r=n===F.VERTICAL?e.height:e.width;if(this._deserialize(e.root,n,t,r),this.layout(e.width,e.height),e.maximizedNode){let t=e.maximizedNode.location,[n,r]=this.getNode(t);if(!(r instanceof I))return;this.maximizeView(r.view)}}_deserialize(e,t,n,r){this.root=this._deserializeNode(e,t,n,r)}_deserializeNode(e,t,n,r){var i;let a;if(e.type===`branch`){let i=e.data.map(r=>({node:this._deserializeNode(r,yt(t),n,e.size),visible:r.visible}));a=new L(t,this.proportionalLayout,this.styles,e.size,r,this.locked,this.margin,i)}else{let o=n.fromJSON(e);typeof e.visible==`boolean`&&((i=o.setVisible)==null||i.call(o,e.visible)),a=new I(o,t,r,e.size)}return a}get root(){return this._root}set root(e){let t=this._root;t&&(t.dispose(),this._maximizedNode=void 0,this.element.removeChild(t.element)),this._root=e,this.element.appendChild(this._root.element),this.disposable.value=this._root.onDidChange(e=>{this._onDidChange.fire(e)})}normalize(){if(!this._root||this._root.children.length!==1)return;let e=this.root,t=e.children[0];if(t instanceof I)return;e.element.remove();let n=e.removeChild(0);e.dispose(),n.dispose(),this._root=ye(t,t.size,t.orthogonalSize),this.element.appendChild(this._root.element),this.disposable.value=this._root.onDidChange(e=>{this._onDidChange.fire(e)})}insertOrthogonalSplitviewAtRoot(){if(!this._root)return;let e=this.root;if(e.element.remove(),this._root=new L(yt(e.orientation),this.proportionalLayout,this.styles,this.root.orthogonalSize,this.root.size,this.locked,this.margin),e.children.length!==0)if(e.children.length===1){let t=e.children[0];e.removeChild(0).dispose(),e.dispose(),this._root.addChild(be(t,t.orthogonalSize,t.size),ht.Distribute,0)}else this._root.addChild(e,ht.Distribute,0);this.element.appendChild(this._root.element),this.disposable.value=this._root.onDidChange(e=>{this._onDidChange.fire(e)})}next(e){return this.progmaticSelect(e)}previous(e){return this.progmaticSelect(e,!0)}getView(e){let t=e?this.getNode(e)[1]:this.root;return this._getViews(t,this.orientation)}_getViews(e,t,n){let r={height:e.height,width:e.width};if(e instanceof I)return{box:r,view:e.view,cachedVisibleSize:n};let i=[];for(let n=0;n<e.children.length;n++){let r=e.children[n],a=e.getChildCachedVisibleSize(n);i.push(this._getViews(r,yt(t),a))}return{box:r,children:i}}progmaticSelect(e,t=!1){let[n,r]=this.getNode(e);if(!(r instanceof I))throw Error(`invalid location`);for(let r=n.length-1;r>-1;r--){let i=n[r],a=e[r]||0;if(t?a-1>-1:a+1<i.children.length)return ve(i.children[t?a-1:a+1],t)}return ve(this.root,t)}constructor(e,t,n,r,i){this.proportionalLayout=e,this.styles=t,this._locked=!1,this._margin=0,this._maximizedNode=void 0,this.disposable=new j,this._onDidChange=new k,this.onDidChange=this._onDidChange.event,this._onDidViewVisibilityChange=new k,this.onDidViewVisibilityChange=this._onDidViewVisibilityChange.event,this._onDidMaximizedNodeChange=new k,this.onDidMaximizedNodeChange=this._onDidMaximizedNodeChange.event,this.element=document.createElement(`div`),this.element.className=`dv-grid-view`,this._locked=r??!1,this._margin=i??0,this.root=new L(n,e,t,0,0,this.locked,this.margin)}isViewVisible(e){let[t,n]=pe(e),[,r]=this.getNode(t);if(!(r instanceof L))throw Error(`Invalid from location`);return r.isChildVisible(n)}setViewVisible(e,t){this.hasMaximizedView()&&this.exitMaximizedView();let[n,r]=pe(e),[,i]=this.getNode(n);if(!(i instanceof L))throw Error(`Invalid from location`);this._onDidViewVisibilityChange.fire(),i.setChildVisible(r,t)}moveView(e,t,n){this.hasMaximizedView()&&this.exitMaximizedView();let[,r]=this.getNode(e);if(!(r instanceof L))throw Error(`Invalid location`);r.moveChild(t,n)}addView(e,t,n){this.hasMaximizedView()&&this.exitMaximizedView();let[r,i]=pe(n),[a,o]=this.getNode(r);if(o instanceof L){let n=new I(e,yt(o.orientation),o.orthogonalSize);o.addChild(n,t,i)}else{let[n,...s]=[...a].reverse(),[c,...l]=[...r].reverse(),u=0,d=n.getChildCachedVisibleSize(c);typeof d==`number`&&(u=ht.Invisible(d)),n.removeChild(c).dispose();let f=new L(o.orientation,this.proportionalLayout,this.styles,o.size,o.orthogonalSize,this.locked,this.margin);n.addChild(f,o.size,c);let p=new I(o.view,n.orientation,o.size);f.addChild(p,u,0),typeof t!=`number`&&t.type===`split`&&(t={type:`split`,index:0});let m=new I(e,n.orientation,o.size);f.addChild(m,t,i)}}remove(e,t){let n=D(e.element);return this.removeView(n,t)}removeView(e,t){this.hasMaximizedView()&&this.exitMaximizedView();let[n,r]=pe(e),[i,a]=this.getNode(n);if(!(a instanceof L))throw Error(`Invalid location`);let o=a.children[r];if(!(o instanceof I))throw Error(`Invalid location`);if(a.removeChild(r,t),o.dispose(),a.children.length!==1)return o.view;let s=a.children[0];if(i.length===0)return s instanceof I?o.view:(a.removeChild(0,t),this.root=s,o.view);let[c,...l]=[...i].reverse(),[u,...d]=[...n].reverse(),f=a.isChildVisible(0);a.removeChild(0,t);let p=c.children.map((e,t)=>c.getChildSize(t));if(c.removeChild(u,t).dispose(),s instanceof L){p.splice(u,1,...s.children.map(e=>e.size));for(let e=0;e<s.children.length;e++){let t=s.children[e];c.addChild(t,t.size,u+e)}for(;s.children.length>0;)s.removeChild(0)}else{let e=new I(s.view,yt(s.orientation),s.size),t=f?s.orthogonalSize:ht.Invisible(s.orthogonalSize);c.addChild(e,t,u)}s.dispose();for(let e=0;e<p.length;e++)c.resizeChild(e,p[e]);return o.view}layout(e,t){let[n,r]=this.root.orientation===F.HORIZONTAL?[t,e]:[e,t];this.root.layout(n,r)}getNode(e,t=this.root,n=[]){if(e.length===0)return[n,t];if(!(t instanceof L))throw Error(`Invalid location`);let[r,...i]=e;if(r<0||r>=t.children.length)throw Error(`Invalid location`);let a=t.children[r];return n.push(t),this.getNode(i,a,n)}},St=Object.keys({disableAutoResizing:void 0,proportionalLayout:void 0,orientation:void 0,hideBorders:void 0,className:void 0}),Ct=class extends A{get element(){return this._element}get disableResizing(){return this._disableResizing}set disableResizing(e){this._disableResizing=e}constructor(e,t=!1){super(),this._disableResizing=t,this._element=e,this.addDisposables(ee(this._element,e=>{if(this.isDisposed||this.disableResizing||!this._element.offsetParent||!ae(this._element))return;let{width:t,height:n}=e.contentRect;this.layout(t,n)}))}},wt=dt(),Tt=class extends Ct{get id(){return this._id}get size(){return this._groups.size}get groups(){return Array.from(this._groups.values()).map(e=>e.value)}get width(){return this.gridview.width}get height(){return this.gridview.height}get minimumHeight(){return this.gridview.minimumHeight}get maximumHeight(){return this.gridview.maximumHeight}get minimumWidth(){return this.gridview.minimumWidth}get maximumWidth(){return this.gridview.maximumWidth}get activeGroup(){return this._activeGroup}get locked(){return this.gridview.locked}set locked(e){this.gridview.locked=e}constructor(e,t){super(document.createElement(`div`),t.disableAutoResizing),this._id=wt.next(),this._groups=new Map,this._onDidRemove=new k,this.onDidRemove=this._onDidRemove.event,this._onDidAdd=new k,this.onDidAdd=this._onDidAdd.event,this._onDidMaximizedChange=new k,this.onDidMaximizedChange=this._onDidMaximizedChange.event,this._onDidActiveChange=new k,this.onDidActiveChange=this._onDidActiveChange.event,this._bufferOnDidLayoutChange=new nt,this.onDidLayoutChange=this._bufferOnDidLayoutChange.onEvent,this._onDidViewVisibilityChangeMicroTaskQueue=new nt,this.onDidViewVisibilityChangeMicroTaskQueue=this._onDidViewVisibilityChangeMicroTaskQueue.onEvent,this.element.style.height=`100%`,this.element.style.width=`100%`,this._classNames=new lt(this.element),this._classNames.setClassNames(t.className??``),e.appendChild(this.element),this.gridview=new xt(!!t.proportionalLayout,t.styles,t.orientation,t.locked,t.margin),this.gridview.locked=!!t.locked,this.element.appendChild(this.gridview.element),this.layout(0,0,!0),this.addDisposables(this.gridview.onDidMaximizedNodeChange(e=>{this._onDidMaximizedChange.fire({panel:e.view,isMaximized:e.isMaximized})}),this.gridview.onDidViewVisibilityChange(()=>this._onDidViewVisibilityChangeMicroTaskQueue.fire()),this.onDidViewVisibilityChangeMicroTaskQueue(()=>{this.layout(this.width,this.height,!0)}),rt.from(()=>{var e;(e=this.element.parentElement)==null||e.removeChild(this.element)}),this.gridview.onDidChange(()=>{this._bufferOnDidLayoutChange.fire()}),Xe.any(this.onDidAdd,this.onDidRemove,this.onDidActiveChange)(()=>{this._bufferOnDidLayoutChange.fire()}),this._onDidMaximizedChange,this._onDidViewVisibilityChangeMicroTaskQueue,this._bufferOnDidLayoutChange)}setVisible(e,t){this.gridview.setViewVisible(D(e.element),t),this._bufferOnDidLayoutChange.fire()}isVisible(e){return this.gridview.isViewVisible(D(e.element))}updateOptions(e){e.proportionalLayout,e.orientation&&(this.gridview.orientation=e.orientation),`disableResizing`in e&&(this.disableResizing=e.disableAutoResizing??!1),`locked`in e&&(this.locked=e.locked??!1),`margin`in e&&(this.gridview.margin=e.margin??0),`className`in e&&this._classNames.setClassNames(e.className??``)}maximizeGroup(e){this.gridview.maximizeView(e),this.doSetGroupActive(e)}isMaximizedGroup(e){return this.gridview.maximizedView()===e}exitMaximizedGroup(){this.gridview.exitMaximizedView()}hasMaximizedGroup(){return this.gridview.hasMaximizedView()}doAddGroup(e,t=[0],n){this.gridview.addView(e,n??ht.Distribute,t),this._onDidAdd.fire(e)}doRemoveGroup(e,t){if(!this._groups.has(e.id))throw Error(`invalid operation`);let n=this._groups.get(e.id),r=this.gridview.remove(e,ht.Distribute);if(n&&!t?.skipDispose&&(n.disposable.dispose(),n.value.dispose(),this._groups.delete(e.id),this._onDidRemove.fire(e)),!t?.skipActive&&this._activeGroup===e){let e=Array.from(this._groups.values());this.doSetGroupActive(e.length>0?e[0].value:void 0)}return r}getPanel(e){return this._groups.get(e)?.value}doSetGroupActive(e){this._activeGroup!==e&&(this._activeGroup&&this._activeGroup.setActive(!1),e&&e.setActive(!0),this._activeGroup=e,this._onDidActiveChange.fire(e))}removeGroup(e){this.doRemoveGroup(e)}moveToNext(e){if(e||={},!e.group){if(!this.activeGroup)return;e.group=this.activeGroup}let t=D(e.group.element),n=this.gridview.next(t)?.view;this.doSetGroupActive(n)}moveToPrevious(e){if(e||={},!e.group){if(!this.activeGroup)return;e.group=this.activeGroup}let t=D(e.group.element),n=this.gridview.previous(t)?.view;this.doSetGroupActive(n)}layout(e,t,n){(n||e!==this.width||t!==this.height)&&(this.gridview.element.style.height=`${t}px`,this.gridview.element.style.width=`${e}px`,this.gridview.layout(e,t))}dispose(){this._onDidActiveChange.dispose(),this._onDidAdd.dispose(),this._onDidRemove.dispose();for(let e of this.groups)e.dispose();this.gridview.dispose(),super.dispose()}},Et=class{get minimumSize(){return this.component.minimumSize}get maximumSize(){return this.component.maximumSize}get width(){return this.component.width}get height(){return this.component.height}get length(){return this.component.length}get orientation(){return this.component.orientation}get panels(){return this.component.panels}get onDidLayoutFromJSON(){return this.component.onDidLayoutFromJSON}get onDidLayoutChange(){return this.component.onDidLayoutChange}get onDidAddView(){return this.component.onDidAddView}get onDidRemoveView(){return this.component.onDidRemoveView}constructor(e){this.component=e}removePanel(e,t){this.component.removePanel(e,t)}focus(){this.component.focus()}getPanel(e){return this.component.getPanel(e)}layout(e,t){return this.component.layout(e,t)}addPanel(e){return this.component.addPanel(e)}movePanel(e,t){this.component.movePanel(e,t)}fromJSON(e){this.component.fromJSON(e)}toJSON(){return this.component.toJSON()}clear(){this.component.clear()}updateOptions(e){this.component.updateOptions(e)}dispose(){this.component.dispose()}},Dt=class{get minimumSize(){return this.component.minimumSize}get maximumSize(){return this.component.maximumSize}get width(){return this.component.width}get height(){return this.component.height}get panels(){return this.component.panels}get onDidLayoutChange(){return this.component.onDidLayoutChange}get onDidLayoutFromJSON(){return this.component.onDidLayoutFromJSON}get onDidAddView(){return this.component.onDidAddView}get onDidRemoveView(){return this.component.onDidRemoveView}get onDidDrop(){return this.component.onDidDrop}get onUnhandledDragOverEvent(){return this.component.onUnhandledDragOverEvent}constructor(e){this.component=e}removePanel(e){this.component.removePanel(e)}getPanel(e){return this.component.getPanel(e)}movePanel(e,t){this.component.movePanel(e,t)}focus(){this.component.focus()}layout(e,t){this.component.layout(e,t)}addPanel(e){return this.component.addPanel(e)}fromJSON(e){this.component.fromJSON(e)}toJSON(){return this.component.toJSON()}clear(){this.component.clear()}updateOptions(e){this.component.updateOptions(e)}dispose(){this.component.dispose()}},Ot=class{get width(){return this.component.width}get height(){return this.component.height}get minimumHeight(){return this.component.minimumHeight}get maximumHeight(){return this.component.maximumHeight}get minimumWidth(){return this.component.minimumWidth}get maximumWidth(){return this.component.maximumWidth}get onDidLayoutChange(){return this.component.onDidLayoutChange}get onDidAddPanel(){return this.component.onDidAddGroup}get onDidRemovePanel(){return this.component.onDidRemoveGroup}get onDidActivePanelChange(){return this.component.onDidActiveGroupChange}get onDidLayoutFromJSON(){return this.component.onDidLayoutFromJSON}get panels(){return this.component.groups}get orientation(){return this.component.orientation}set orientation(e){this.component.updateOptions({orientation:e})}constructor(e){this.component=e}focus(){this.component.focus()}layout(e,t,n=!1){this.component.layout(e,t,n)}addPanel(e){return this.component.addPanel(e)}removePanel(e,t){this.component.removePanel(e,t)}movePanel(e,t){this.component.movePanel(e,t)}getPanel(e){return this.component.getPanel(e)}fromJSON(e){return this.component.fromJSON(e)}toJSON(){return this.component.toJSON()}clear(){this.component.clear()}updateOptions(e){this.component.updateOptions(e)}dispose(){this.component.dispose()}},kt=class{get id(){return this.component.id}get width(){return this.component.width}get height(){return this.component.height}get minimumHeight(){return this.component.minimumHeight}get maximumHeight(){return this.component.maximumHeight}get minimumWidth(){return this.component.minimumWidth}get maximumWidth(){return this.component.maximumWidth}get size(){return this.component.size}get totalPanels(){return this.component.totalPanels}get onDidActiveGroupChange(){return this.component.onDidActiveGroupChange}get onDidAddGroup(){return this.component.onDidAddGroup}get onDidRemoveGroup(){return this.component.onDidRemoveGroup}get onDidActivePanelChange(){return this.component.onDidActivePanelChange}get onDidAddPanel(){return this.component.onDidAddPanel}get onDidRemovePanel(){return this.component.onDidRemovePanel}get onDidMovePanel(){return this.component.onDidMovePanel}get onDidLayoutFromJSON(){return this.component.onDidLayoutFromJSON}get onDidLayoutChange(){return this.component.onDidLayoutChange}get onDidDrop(){return this.component.onDidDrop}get onWillDrop(){return this.component.onWillDrop}get onWillShowOverlay(){return this.component.onWillShowOverlay}get onWillDragGroup(){return this.component.onWillDragGroup}get onWillDragPanel(){return this.component.onWillDragPanel}get onUnhandledDragOverEvent(){return this.component.onUnhandledDragOverEvent}get onDidPopoutGroupSizeChange(){return this.component.onDidPopoutGroupSizeChange}get onDidPopoutGroupPositionChange(){return this.component.onDidPopoutGroupPositionChange}get onDidOpenPopoutWindowFail(){return this.component.onDidOpenPopoutWindowFail}get panels(){return this.component.panels}get groups(){return this.component.groups}get activePanel(){return this.component.activePanel}get activeGroup(){return this.component.activeGroup}constructor(e){this.component=e}focus(){this.component.focus()}getPanel(e){return this.component.getGroupPanel(e)}layout(e,t,n=!1){this.component.layout(e,t,n)}addPanel(e){return this.component.addPanel(e)}removePanel(e){this.component.removePanel(e)}addGroup(e){return this.component.addGroup(e)}closeAllGroups(){return this.component.closeAllGroups()}removeGroup(e){this.component.removeGroup(e)}getGroup(e){return this.component.getPanel(e)}addFloatingGroup(e,t){return this.component.addFloatingGroup(e,t)}fromJSON(e,t){this.component.fromJSON(e,t)}toJSON(){return this.component.toJSON()}clear(){this.component.clear()}moveToNext(e){this.component.moveToNext(e)}moveToPrevious(e){this.component.moveToPrevious(e)}maximizeGroup(e){this.component.maximizeGroup(e.group)}hasMaximizedGroup(){return this.component.hasMaximizedGroup()}exitMaximizedGroup(){this.component.exitMaximizedGroup()}get onDidMaximizedGroupChange(){return this.component.onDidMaximizedGroupChange}addPopoutGroup(e,t){return this.component.addPopoutGroup(e,t)}updateOptions(e){this.component.updateOptions(e)}dispose(){this.component.dispose()}},At=class extends A{constructor(e,t){super(),this.el=e,this.disabled=t,this.dataDisposable=new j,this.pointerEventsDisposable=new j,this._onDragStart=new k,this.onDragStart=this._onDragStart.event,this.addDisposables(this._onDragStart,this.dataDisposable,this.pointerEventsDisposable),this.configure()}setDisabled(e){this.disabled=e}isCancelled(e){return!1}configure(){this.addDisposables(this._onDragStart,x(this.el,`dragstart`,e=>{if(e.defaultPrevented||this.isCancelled(e)||this.disabled){e.preventDefault();return}let t=ce();this.pointerEventsDisposable.value={dispose:()=>{t.release()}},this.el.classList.add(`dv-dragged`),setTimeout(()=>this.el.classList.remove(`dv-dragged`),0),this.dataDisposable.value=this.getData(e),this._onDragStart.fire(e),e.dataTransfer&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.items.length>0||e.dataTransfer.setData(`text/plain`,``))}),x(this.el,`dragend`,()=>{this.pointerEventsDisposable.dispose(),setTimeout(()=>{this.dataDisposable.dispose()},0)}))}},jt=class extends A{constructor(e,t){super(),this.element=e,this.callbacks=t,this.target=null,this.registerListeners()}onDragEnter(e){this.target=e.target,this.callbacks.onDragEnter(e)}onDragOver(e){e.preventDefault(),this.callbacks.onDragOver&&this.callbacks.onDragOver(e)}onDragLeave(e){this.target===e.target&&(this.target=null,this.callbacks.onDragLeave(e))}onDragEnd(e){this.target=null,this.callbacks.onDragEnd(e)}onDrop(e){this.callbacks.onDrop(e)}registerListeners(){this.addDisposables(x(this.element,`dragenter`,e=>{this.onDragEnter(e)},!0)),this.addDisposables(x(this.element,`dragover`,e=>{this.onDragOver(e)},!0)),this.addDisposables(x(this.element,`dragleave`,e=>{this.onDragLeave(e)})),this.addDisposables(x(this.element,`dragend`,e=>{this.onDragEnd(e)})),this.addDisposables(x(this.element,`drop`,e=>{this.onDrop(e)}))}},Mt=class extends Ze{get nativeEvent(){return this.options.nativeEvent}get position(){return this.options.position}constructor(e){super(),this.options=e}},Nt={value:20,type:`percentage`},Pt={value:50,type:`percentage`},Ft=100,It=100,Lt=class e extends A{get disabled(){return this._disabled}set disabled(e){this._disabled=e}get state(){return this._state}constructor(t,n){super(),this.element=t,this.options=n,this._onDrop=new k,this.onDrop=this._onDrop.event,this._onWillShowOverlay=new k,this.onWillShowOverlay=this._onWillShowOverlay.event,this._disabled=!1,this._acceptedTargetZonesSet=new Set(this.options.acceptedTargetZones),this.dnd=new jt(this.element,{onDragEnter:()=>{var e,t;(t=(e=this.options).getOverrideTarget?.call(e))==null||t.getElements()},onDragOver:t=>{var n,r;e.ACTUAL_TARGET=this;let i=(n=this.options).getOverrideTarget?.call(n);if(this._acceptedTargetZonesSet.size===0){if(i)return;this.removeDropTarget();return}let a=(r=this.options).getOverlayOutline?.call(r)??this.element,o=a.offsetWidth,s=a.offsetHeight;if(o===0||s===0)return;let c=t.currentTarget.getBoundingClientRect(),l=(t.clientX??0)-c.left,u=(t.clientY??0)-c.top,d=this.calculateQuadrant(this._acceptedTargetZonesSet,l,u,o,s);if(this.isAlreadyUsed(t)||d===null){this.removeDropTarget();return}if(!this.options.canDisplayOverlay(t,d)){if(i)return;this.removeDropTarget();return}let f=new Mt({nativeEvent:t,position:d});if(this._onWillShowOverlay.fire(f),f.defaultPrevented){this.removeDropTarget();return}this.markAsUsed(t),i||this.targetElement||(this.targetElement=document.createElement(`div`),this.targetElement.className=`dv-drop-target-dropzone`,this.overlayElement=document.createElement(`div`),this.overlayElement.className=`dv-drop-target-selection`,this._state=`center`,this.targetElement.appendChild(this.overlayElement),a.classList.add(`dv-drop-target`),a.append(this.targetElement)),this.toggleClasses(d,o,s),this._state=d},onDragLeave:()=>{var e;(e=this.options).getOverrideTarget?.call(e)||this.removeDropTarget()},onDragEnd:t=>{var n;let r=(n=this.options).getOverrideTarget?.call(n);r&&e.ACTUAL_TARGET===this&&this._state&&(t.stopPropagation(),this._onDrop.fire({position:this._state,nativeEvent:t})),this.removeDropTarget(),r?.clear()},onDrop:e=>{var t,n;e.preventDefault();let r=this._state;this.removeDropTarget(),(n=(t=this.options).getOverrideTarget?.call(t))==null||n.clear(),r&&(e.stopPropagation(),this._onDrop.fire({position:r,nativeEvent:e}))}}),this.addDisposables(this._onDrop,this._onWillShowOverlay,this.dnd)}setTargetZones(e){this._acceptedTargetZonesSet=new Set(e)}setOverlayModel(e){this.options.overlayModel=e}dispose(){this.removeDropTarget(),super.dispose()}markAsUsed(t){t[e.USED_EVENT_ID]=!0}isAlreadyUsed(t){let n=t[e.USED_EVENT_ID];return typeof n==`boolean`&&n}toggleClasses(e,t,n){var r,i;let a=(r=this.options).getOverrideTarget?.call(r);if(!a&&!this.overlayElement)return;let o=t<Ft,s=n<It,c=e===`left`,l=e===`right`,u=e===`top`,d=e===`bottom`,f=!o&&l,p=!o&&c,m=!s&&u,h=!s&&d,g=1,_=this.options.overlayModel?.size??Pt;if(_.type===`percentage`?g=N(_.value,0,100)/100:((f||p)&&(g=N(0,_.value,t)/t),(m||h)&&(g=N(0,_.value,n)/n)),a){let r=(i=this.options).getOverlayOutline?.call(i)??this.element,s=r.getBoundingClientRect(),_=a.getElements(void 0,r),v=_.root,y=_.overlay,b=v.getBoundingClientRect(),x=s.top-b.top,ee=s.left-b.left,S={top:x,left:ee,width:t,height:n};if(f?(S.left=ee+t*(1-g),S.width=t*g):p?S.width=t*g:m?S.height=n*g:h&&(S.top=x+n*(1-g),S.height=n*g),o&&c&&(S.width=4),o&&l&&(S.left=ee+t-4,S.width=4),!ke(y,S))return;De(y,S),y.className=`dv-drop-target-anchor${this.options.className?` ${this.options.className}`:``}`,M(y,`dv-drop-target-left`,c),M(y,`dv-drop-target-right`,l),M(y,`dv-drop-target-top`,u),M(y,`dv-drop-target-bottom`,d),M(y,`dv-drop-target-center`,e===`center`),_.changed&&(M(y,`dv-drop-target-anchor-container-changed`,!0),setTimeout(()=>{M(y,`dv-drop-target-anchor-container-changed`,!1)},10));return}if(!this.overlayElement)return;let v={top:`0px`,left:`0px`,width:`100%`,height:`100%`};f?(v.left=`${100*(1-g)}%`,v.width=`${100*g}%`):p?v.width=`${100*g}%`:m?v.height=`${100*g}%`:h&&(v.top=`${100*(1-g)}%`,v.height=`${100*g}%`),Oe(this.overlayElement,v),M(this.overlayElement,`dv-drop-target-small-vertical`,s),M(this.overlayElement,`dv-drop-target-small-horizontal`,o),M(this.overlayElement,`dv-drop-target-left`,c),M(this.overlayElement,`dv-drop-target-right`,l),M(this.overlayElement,`dv-drop-target-top`,u),M(this.overlayElement,`dv-drop-target-bottom`,d),M(this.overlayElement,`dv-drop-target-center`,e===`center`)}calculateQuadrant(e,t,n,r,i){let a=this.options.overlayModel?.activationSize??Nt;return a.type===`percentage`?Me(e,t,n,r,i,a.value):Ne(e,t,n,r,i,a.value)}removeDropTarget(){var e;this.targetElement&&(this._state=void 0,(e=this.targetElement.parentElement)==null||e.classList.remove(`dv-drop-target`),this.targetElement.remove(),this.targetElement=void 0,this.overlayElement=void 0)}},Lt.USED_EVENT_ID=`__dockview_droptarget_event_is_used__`,Rt=Object.keys({disableAutoResizing:void 0,disableDnd:void 0,className:void 0}),zt=class extends Qe{constructor(e,t,n,r){super(),this.nativeEvent=e,this.position=t,this.getData=n,this.panel=r}},Bt=class extends Ze{constructor(){super()}},Vt=class extends A{get isFocused(){return this._isFocused}get isActive(){return this._isActive}get isVisible(){return this._isVisible}get width(){return this._width}get height(){return this._height}constructor(e,t){super(),this.id=e,this.component=t,this._isFocused=!1,this._isActive=!1,this._isVisible=!0,this._width=0,this._height=0,this._parameters={},this.panelUpdatesDisposable=new j,this._onDidDimensionChange=new k,this.onDidDimensionsChange=this._onDidDimensionChange.event,this._onDidChangeFocus=new k,this.onDidFocusChange=this._onDidChangeFocus.event,this._onWillFocus=new k,this.onWillFocus=this._onWillFocus.event,this._onDidVisibilityChange=new k,this.onDidVisibilityChange=this._onDidVisibilityChange.event,this._onWillVisibilityChange=new k,this.onWillVisibilityChange=this._onWillVisibilityChange.event,this._onDidActiveChange=new k,this.onDidActiveChange=this._onDidActiveChange.event,this._onActiveChange=new k,this.onActiveChange=this._onActiveChange.event,this._onDidParametersChange=new k,this.onDidParametersChange=this._onDidParametersChange.event,this.addDisposables(this.onDidFocusChange(e=>{this._isFocused=e.isFocused}),this.onDidActiveChange(e=>{this._isActive=e.isActive}),this.onDidVisibilityChange(e=>{this._isVisible=e.isVisible}),this.onDidDimensionsChange(e=>{this._width=e.width,this._height=e.height}),this.panelUpdatesDisposable,this._onDidDimensionChange,this._onDidChangeFocus,this._onDidVisibilityChange,this._onDidActiveChange,this._onWillFocus,this._onActiveChange,this._onWillFocus,this._onWillVisibilityChange,this._onDidParametersChange)}getParameters(){return this._parameters}initialize(e){this.panelUpdatesDisposable.value=this._onDidParametersChange.event(t=>{this._parameters=t,e.update({params:t})})}setVisible(e){this._onWillVisibilityChange.fire({isVisible:e})}setActive(){this._onActiveChange.fire()}updateParameters(e){this._onDidParametersChange.fire(e)}},Ht=class extends Vt{constructor(e,t){super(e,t),this._onDidConstraintsChangeInternal=new k,this.onDidConstraintsChangeInternal=this._onDidConstraintsChangeInternal.event,this._onDidConstraintsChange=new k({replay:!0}),this.onDidConstraintsChange=this._onDidConstraintsChange.event,this._onDidSizeChange=new k,this.onDidSizeChange=this._onDidSizeChange.event,this.addDisposables(this._onDidConstraintsChangeInternal,this._onDidConstraintsChange,this._onDidSizeChange)}setConstraints(e){this._onDidConstraintsChangeInternal.fire(e)}setSize(e){this._onDidSizeChange.fire(e)}},Ut=class extends Ht{set pane(e){this._pane=e}constructor(e,t){super(e,t),this._onDidExpansionChange=new k({replay:!0}),this.onDidExpansionChange=this._onDidExpansionChange.event,this._onMouseEnter=new k({}),this.onMouseEnter=this._onMouseEnter.event,this._onMouseLeave=new k({}),this.onMouseLeave=this._onMouseLeave.event,this.addDisposables(this._onDidExpansionChange,this._onMouseEnter,this._onMouseLeave)}setExpanded(e){var t;(t=this._pane)==null||t.setExpanded(e)}get isExpanded(){return!!this._pane?.isExpanded()}},Wt=class extends A{get element(){return this._element}get width(){return this._width}get height(){return this._height}get params(){return this._params?.params}constructor(e,t,n){super(),this.id=e,this.component=t,this.api=n,this._height=0,this._width=0,this._element=document.createElement(`div`),this._element.tabIndex=-1,this._element.style.outline=`none`,this._element.style.height=`100%`,this._element.style.width=`100%`,this._element.style.overflow=`hidden`;let r=C(this._element);this.addDisposables(this.api,r.onDidFocus(()=>{this.api._onDidChangeFocus.fire({isFocused:!0})}),r.onDidBlur(()=>{this.api._onDidChangeFocus.fire({isFocused:!1})}),r)}focus(){let e=new Bt;this.api._onWillFocus.fire(e),!e.defaultPrevented&&this._element.focus()}layout(e,t){this._width=e,this._height=t,this.api._onDidDimensionChange.fire({width:e,height:t}),this.part&&this._params&&this.part.update(this._params.params)}init(e){this._params=e,this.part=this.getComponent()}update(e){var t;this._params=Object.assign(Object.assign({},this._params),{params:Object.assign(Object.assign({},this._params?.params),e.params)});for(let t of Object.keys(e.params))e.params[t]===void 0&&delete this._params.params[t];(t=this.part)==null||t.update({params:this._params.params})}toJSON(){let e=this._params?.params??{};return{id:this.id,component:this.component,params:Object.keys(e).length>0?e:void 0}}dispose(){var e;this.api.dispose(),(e=this.part)==null||e.dispose(),super.dispose()}},Gt=class extends Wt{set orientation(e){this._orientation=e}get orientation(){return this._orientation}get minimumSize(){return this.headerSize+(this.isExpanded()?this._minimumBodySize:0)}get maximumSize(){return this.headerSize+(this.isExpanded()?this._maximumBodySize:0)}get size(){return this._size}get orthogonalSize(){return this._orthogonalSize}set orthogonalSize(e){this._orthogonalSize=e}get minimumBodySize(){return this._minimumBodySize}set minimumBodySize(e){this._minimumBodySize=typeof e==`number`?e:0}get maximumBodySize(){return this._maximumBodySize}set maximumBodySize(e){this._maximumBodySize=typeof e==`number`?e:1/0}get headerVisible(){return this._headerVisible}set headerVisible(e){this._headerVisible=e,this.header.style.display=e?``:`none`}constructor(e){super(e.id,e.component,new Ut(e.id,e.component)),this._onDidChangeExpansionState=new k({replay:!0}),this.onDidChangeExpansionState=this._onDidChangeExpansionState.event,this._onDidChange=new k,this.onDidChange=this._onDidChange.event,this._orthogonalSize=0,this._size=0,this._isExpanded=!1,this.api.pane=this,this.api.initialize(this),this.headerSize=e.headerSize,this.headerComponent=e.headerComponent,this._minimumBodySize=e.minimumBodySize,this._maximumBodySize=e.maximumBodySize,this._isExpanded=e.isExpanded,this._headerVisible=e.isHeaderVisible,this._onDidChangeExpansionState.fire(this.isExpanded()),this._orientation=e.orientation,this.element.classList.add(`dv-pane`),this.addDisposables(this.api.onWillVisibilityChange(e=>{let{isVisible:t}=e,{accessor:n}=this._params;n.setVisible(this,t)}),this.api.onDidSizeChange(e=>{this._onDidChange.fire({size:e.size})}),x(this.element,`mouseenter`,e=>{this.api._onMouseEnter.fire(e)}),x(this.element,`mouseleave`,e=>{this.api._onMouseLeave.fire(e)})),this.addDisposables(this._onDidChangeExpansionState,this.onDidChangeExpansionState(e=>{this.api._onDidExpansionChange.fire({isExpanded:e})}),this.api.onDidFocusChange(e=>{this.header&&(e.isFocused?ot(this.header,`focused`):at(this.header,`focused`))})),this.renderOnce()}setVisible(e){this.api._onDidVisibilityChange.fire({isVisible:e})}setActive(e){this.api._onDidActiveChange.fire({isActive:e})}isExpanded(){return this._isExpanded}setExpanded(e){this._isExpanded!==e&&(this._isExpanded=e,e?(this.animationTimer&&clearTimeout(this.animationTimer),this.body&&this.element.appendChild(this.body)):this.animationTimer=setTimeout(()=>{var e;(e=this.body)==null||e.remove()},200),this._onDidChange.fire(e?{size:this.width}:{}),this._onDidChangeExpansionState.fire(e))}layout(e,t){this._size=e,this._orthogonalSize=t;let[n,r]=this.orientation===F.HORIZONTAL?[e,t]:[t,e];super.layout(n,r)}init(e){var t,n;super.init(e),typeof e.minimumBodySize==`number`&&(this.minimumBodySize=e.minimumBodySize),typeof e.maximumBodySize==`number`&&(this.maximumBodySize=e.maximumBodySize),this.bodyPart=this.getBodyComponent(),this.headerPart=this.getHeaderComponent(),this.bodyPart.init(Object.assign(Object.assign({},e),{api:this.api})),this.headerPart.init(Object.assign(Object.assign({},e),{api:this.api})),(t=this.body)==null||t.append(this.bodyPart.element),(n=this.header)==null||n.append(this.headerPart.element),typeof e.isExpanded==`boolean`&&this.setExpanded(e.isExpanded)}toJSON(){let e=this._params;return Object.assign(Object.assign({},super.toJSON()),{headerComponent:this.headerComponent,title:e.title})}renderOnce(){this.header=document.createElement(`div`),this.header.tabIndex=0,this.header.className=`dv-pane-header`,this.header.style.height=`${this.headerSize}px`,this.header.style.lineHeight=`${this.headerSize}px`,this.header.style.minHeight=`${this.headerSize}px`,this.header.style.maxHeight=`${this.headerSize}px`,this.element.appendChild(this.header),this.body=document.createElement(`div`),this.body.className=`dv-pane-body`,this.element.appendChild(this.body)}getComponent(){return{update:e=>{var t,n;(t=this.bodyPart)==null||t.update({params:e}),(n=this.headerPart)==null||n.update({params:e})},dispose:()=>{var e,t;(e=this.bodyPart)==null||e.dispose(),(t=this.headerPart)==null||t.dispose()}}}},Kt=class extends Gt{constructor(e){super({id:e.id,component:e.component,headerComponent:e.headerComponent,orientation:e.orientation,isExpanded:e.isExpanded,isHeaderVisible:!0,headerSize:e.headerSize,minimumBodySize:e.minimumBodySize,maximumBodySize:e.maximumBodySize}),this._onDidDrop=new k,this.onDidDrop=this._onDidDrop.event,this._onUnhandledDragOverEvent=new k,this.onUnhandledDragOverEvent=this._onUnhandledDragOverEvent.event,this.accessor=e.accessor,this.addDisposables(this._onDidDrop,this._onUnhandledDragOverEvent),e.disableDnd||this.initDragFeatures()}initDragFeatures(){if(!this.header)return;let e=this.id,t=this.accessor.id;this.header.draggable=!0,this.handler=new class extends At{getData(){return Ye.getInstance().setData([new Je(t,e)],Je.prototype),{dispose:()=>{Ye.getInstance().clearData(Je.prototype)}}}}(this.header),this.target=new Lt(this.element,{acceptedTargetZones:[`top`,`bottom`],overlayModel:{activationSize:{type:`percentage`,value:50}},canDisplayOverlay:(e,t)=>{let n=b();if(n&&n.paneId!==this.id&&n.viewId===this.accessor.id)return!0;let r=new zt(e,t,b,this);return this._onUnhandledDragOverEvent.fire(r),r.isAccepted}}),this.addDisposables(this._onDidDrop,this.handler,this.target,this.target.onDrop(e=>{this.onDrop(e)}))}onDrop(e){let t=b();if(!t||t.viewId!==this.accessor.id){this._onDidDrop.fire(Object.assign(Object.assign({},e),{panel:this,api:new Dt(this.accessor),getData:b}));return}let n=this._params.containerApi,r=t.paneId,i=n.getPanel(r);if(!i){this._onDidDrop.fire(Object.assign(Object.assign({},e),{panel:this,getData:b,api:new Dt(this.accessor)}));return}let a=n.panels,o=a.indexOf(i),s=n.panels.indexOf(this);(e.position===`left`||e.position===`top`)&&(s=Math.max(0,s-1)),(e.position===`right`||e.position===`bottom`)&&(o>s&&s++,s=Math.min(a.length-1,s)),n.movePanel(o,s)}},qt=class extends A{get element(){return this._element}constructor(e,t){super(),this.accessor=e,this.group=t,this.disposable=new j,this._onDidFocus=new k,this.onDidFocus=this._onDidFocus.event,this._onDidBlur=new k,this.onDidBlur=this._onDidBlur.event,this._element=document.createElement(`div`),this._element.className=`dv-content-container`,this._element.tabIndex=-1,this.addDisposables(this._onDidFocus,this._onDidBlur);let n=t.dropTargetContainer;this.dropTarget=new Lt(this.element,{getOverlayOutline:()=>e.options.theme?.dndPanelOverlay===`group`?this.element.parentElement:null,className:`dv-drop-target-content`,acceptedTargetZones:[`top`,`bottom`,`left`,`right`,`center`],canDisplayOverlay:(e,t)=>{if(this.group.locked===`no-drop-target`||this.group.locked&&t===`center`)return!1;let n=y();return!n&&e.shiftKey&&this.group.location.type!==`floating`?!1:n&&n.viewId===this.accessor.id?!0:this.group.canDisplayOverlay(e,t,`content`)},getOverrideTarget:n?()=>n.model:void 0}),this.addDisposables(this.dropTarget)}show(){this.element.style.display=``}hide(){this.element.style.display=`none`}renderPanel(e,t={asActive:!0}){let n=t.asActive||this.panel&&this.group.isPanelActive(this.panel);this.panel&&this.panel.view.content.element.parentElement===this._element&&this._element.removeChild(this.panel.view.content.element),this.panel=e;let r;switch(e.api.renderer){case`onlyWhenVisible`:this.group.renderContainer.detatch(e),this.panel&&n&&this._element.appendChild(this.panel.view.content.element),r=this._element;break;case`always`:e.view.content.element.parentElement===this._element&&this._element.removeChild(e.view.content.element),r=this.group.renderContainer.attach({panel:e,referenceContainer:this});break;default:throw Error(`dockview: invalid renderer type '${e.api.renderer}'`)}if(n){let e=C(r);this.focusTracker=e;let t=new A;t.addDisposables(e,e.onDidFocus(()=>this._onDidFocus.fire()),e.onDidBlur(()=>this._onDidBlur.fire())),this.disposable.value=t}}openPanel(e){this.panel!==e&&this.renderPanel(e)}layout(e,t){}closePanel(){var e;this.panel&&this.panel.api.renderer===`onlyWhenVisible`&&((e=this.panel.view.content.element.parentElement)==null||e.removeChild(this.panel.view.content.element)),this.panel=void 0}dispose(){this.disposable.dispose(),super.dispose()}refreshFocusState(){this.focusTracker?.refreshState&&this.focusTracker.refreshState()}},Jt=class extends At{constructor(e,t,n,r,i){super(e,i),this.accessor=t,this.group=n,this.panel=r,this.panelTransfer=Ye.getInstance()}getData(e){return this.panelTransfer.setData([new O(this.accessor.id,this.group.id,this.panel.id)],O.prototype),{dispose:()=>{this.panelTransfer.clearData(O.prototype)}}}},Yt=class extends A{get element(){return this._element}constructor(e,t,n){super(),this.panel=e,this.accessor=t,this.group=n,this.content=void 0,this._onPointDown=new k,this.onPointerDown=this._onPointDown.event,this._onDropped=new k,this.onDrop=this._onDropped.event,this._onDragStart=new k,this.onDragStart=this._onDragStart.event,this._onDragEnd=new k,this.onDragEnd=this._onDragEnd.event,this._element=document.createElement(`div`),this._element.className=`dv-tab`,this._element.tabIndex=0,this._element.draggable=!this.accessor.options.disableDnd,M(this.element,`dv-inactive-tab`,!0),this.dragHandler=new Jt(this._element,this.accessor,this.group,this.panel,!!this.accessor.options.disableDnd),this.dropTarget=new Lt(this._element,{acceptedTargetZones:[`left`,`right`],overlayModel:{activationSize:{value:50,type:`percentage`}},canDisplayOverlay:(e,t)=>{if(this.group.locked)return!1;let n=y();return n&&this.accessor.id===n.viewId?!(this.accessor.options.tabAnimation===`smooth`&&n.groupId===this.group.id):this.group.model.canDisplayOverlay(e,t,`tab`)},getOverrideTarget:()=>n.model.dropTargetContainer?.model}),this.onWillShowOverlay=this.dropTarget.onWillShowOverlay,this.addDisposables(this._onPointDown,this._onDropped,this._onDragStart,this._onDragEnd,this.dragHandler.onDragStart(e=>{if(e.dataTransfer){let t=getComputedStyle(this.element),n=this.element.cloneNode(!0);Array.from(t).forEach(e=>n.style.setProperty(e,t.getPropertyValue(e),t.getPropertyPriority(e))),n.style.position=`absolute`,Pe(e.dataTransfer,n,{y:-10,x:30})}this._onDragStart.fire(e),this.accessor.options.tabAnimation===`smooth`&&requestAnimationFrame(()=>{M(this.element,`dv-tab--dragging`,!0)})}),x(this._element,`dragend`,e=>{M(this.element,`dv-tab--dragging`,!1),this._onDragEnd.fire(e)}),this.dragHandler,x(this._element,`pointerdown`,e=>{this._onPointDown.fire(e)}),this.dropTarget.onDrop(e=>{this._onDropped.fire(e)}),this.dropTarget)}setActive(e){M(this.element,`dv-active-tab`,e),M(this.element,`dv-inactive-tab`,!e)}setContent(e){this.content&&this._element.removeChild(this.content.element),this.content=e,this._element.appendChild(this.content.element)}updateDragAndDropState(){this._element.draggable=!this.accessor.options.disableDnd,this.dragHandler.setDisabled(!!this.accessor.options.disableDnd)}dispose(){super.dispose()}},Xt=class{get kind(){return this.options.kind}get nativeEvent(){return this.event.nativeEvent}get position(){return this.event.position}get defaultPrevented(){return this.event.defaultPrevented}get panel(){return this.options.panel}get api(){return this.options.api}get group(){return this.options.group}preventDefault(){this.event.preventDefault()}getData(){return this.options.getData()}constructor(e,t){this.event=e,this.options=t}},Zt=class extends At{constructor(e,t,n,r){super(e,r),this.accessor=t,this.group=n,this.panelTransfer=Ye.getInstance(),this.addDisposables(x(e,`pointerdown`,e=>{e.shiftKey&&te(e)},!0))}isCancelled(e){return this.group.api.location.type===`floating`&&!e.shiftKey}getData(e){let t=e.dataTransfer;this.panelTransfer.setData([new O(this.accessor.id,this.group.id,null)],O.prototype);let n=window.getComputedStyle(this.el),r=n.getPropertyValue(`--dv-activegroup-visiblepanel-tab-background-color`),i=n.getPropertyValue(`--dv-activegroup-visiblepanel-tab-color`);if(t){let e=document.createElement(`div`);e.style.backgroundColor=r,e.style.color=i,e.style.padding=`2px 8px`,e.style.height=`24px`,e.style.fontSize=`11px`,e.style.lineHeight=`20px`,e.style.borderRadius=`12px`,e.style.position=`absolute`,e.style.pointerEvents=`none`,e.style.top=`-9999px`,e.textContent=`Multiple Panels (${this.group.size})`,Pe(t,e,{y:-10,x:30})}return{dispose:()=>{this.panelTransfer.clearData(O.prototype)}}}},Qt=class extends A{get element(){return this._element}constructor(e,t){super(),this.accessor=e,this.group=t,this._onDrop=new k,this.onDrop=this._onDrop.event,this._onDragStart=new k,this.onDragStart=this._onDragStart.event,this._element=document.createElement(`div`),this._element.className=`dv-void-container`,this._element.draggable=!this.accessor.options.disableDnd,M(this._element,`dv-draggable`,!this.accessor.options.disableDnd),this.addDisposables(this._onDrop,this._onDragStart,x(this._element,`pointerdown`,()=>{this.accessor.doSetGroupActive(this.group)})),this.handler=new Zt(this._element,e,t,!!this.accessor.options.disableDnd),this.dropTarget=new Lt(this._element,{acceptedTargetZones:[`center`],canDisplayOverlay:(e,n)=>{let r=y();return r&&this.accessor.id===r.viewId?!0:t.model.canDisplayOverlay(e,n,`header_space`)},getOverrideTarget:()=>t.model.dropTargetContainer?.model}),this.onWillShowOverlay=this.dropTarget.onWillShowOverlay,this.addDisposables(this.handler,this.handler.onDragStart(e=>{this._onDragStart.fire(e)}),this.dropTarget.onDrop(e=>{this._onDrop.fire(e)}),this.dropTarget)}updateDragAndDropState(){this._element.draggable=!this.accessor.options.disableDnd,M(this._element,`dv-draggable`,!this.accessor.options.disableDnd),this.handler.setDisabled(!!this.accessor.options.disableDnd)}},$t=class e extends A{get element(){return this._element}get orientation(){return this._orientation}set orientation(e){this._orientation!==e&&(this._scrollOffset=0,this._orientation=e,at(this._scrollbar,`dv-scrollbar-vertical`,`dv-scrollbar-horizontal`),e===`vertical`?ot(this._scrollbar,`dv-scrollbar-vertical`):ot(this._scrollbar,`dv-scrollbar-horizontal`))}constructor(t){super(),this.scrollableElement=t,this._scrollOffset=0,this._orientation=`horizontal`,this._element=document.createElement(`div`),this._element.className=`dv-scrollable`,this._scrollbar=document.createElement(`div`),this._scrollbar.className=`dv-scrollbar dv-scrollbar-horizontal`,this.element.appendChild(t),this.element.appendChild(this._scrollbar),this.addDisposables(x(this.element,`wheel`,t=>{this._scrollOffset+=t.deltaY*e.MouseWheelSpeed,this.calculateScrollbarStyles()}),x(this._scrollbar,`pointerdown`,e=>{e.preventDefault(),M(this.element,`dv-scrollable-scrolling`,!0);let t=this._orientation===`horizontal`?e.clientX:e.clientY,n=this._scrollOffset,r=e=>{this._scrollOffset=n+(this._orientation===`horizontal`?e.clientX-t:e.clientY-t)/((this._orientation===`horizontal`?this.element.clientWidth:this.element.clientHeight)/(this._orientation===`horizontal`?this.scrollableElement.scrollWidth:this.scrollableElement.scrollHeight)),this.calculateScrollbarStyles()},i=()=>{M(this.element,`dv-scrollable-scrolling`,!1),document.removeEventListener(`pointermove`,r),document.removeEventListener(`pointerup`,i),document.removeEventListener(`pointercancel`,i)};document.addEventListener(`pointermove`,r),document.addEventListener(`pointerup`,i),document.addEventListener(`pointercancel`,i)}),x(this.element,`scroll`,()=>{this.calculateScrollbarStyles()}),x(this.scrollableElement,`scroll`,()=>{this._scrollOffset=this._orientation===`horizontal`?this.scrollableElement.scrollLeft:this.scrollableElement.scrollTop,this.calculateScrollbarStyles()}),ee(this.element,()=>{M(this.element,`dv-scrollable-resizing`,!0),this._animationTimer&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(()=>{clearTimeout(this._animationTimer),M(this.element,`dv-scrollable-resizing`,!1)},500),this.calculateScrollbarStyles()}))}calculateScrollbarStyles(){let e=this._orientation===`horizontal`?this.element.clientWidth:this.element.clientHeight,t=this._orientation===`horizontal`?this.scrollableElement.scrollWidth:this.scrollableElement.scrollHeight;if(t>e){let n=e/t*e;this._orientation===`horizontal`?(this._scrollbar.style.width=`${n}px`,this._scrollbar.style.height=``):(this._scrollbar.style.height=`${n}px`,this._scrollbar.style.width=``),this._scrollOffset=N(this._scrollOffset,0,t-e),this._orientation===`horizontal`?this.scrollableElement.scrollLeft=this._scrollOffset:this.scrollableElement.scrollTop=this._scrollOffset;let r=this._scrollOffset/(t-e);this._orientation===`horizontal`?(this._scrollbar.style.left=`${(e-n)*r}px`,this._scrollbar.style.top=``):(this._scrollbar.style.top=`${(e-n)*r}px`,this._scrollbar.style.left=``)}else this._orientation===`horizontal`?(this._scrollbar.style.width=`0px`,this._scrollbar.style.left=`0px`):(this._scrollbar.style.height=`0px`,this._scrollbar.style.top=`0px`),this._scrollOffset=0}},$t.MouseWheelSpeed=1,en=class extends A{get showTabsOverflowControl(){return this._showTabsOverflowControl}set showTabsOverflowControl(e){if(this._showTabsOverflowControl!=e&&(this._showTabsOverflowControl=e,e)){let e=new it(this._tabsList);this._observerDisposable.value=new A(e,e.onDidChange(e=>{let t=e.hasScrollX||e.hasScrollY;this.toggleDropdown({reset:!t})}),x(this._tabsList,`scroll`,()=>{this.toggleDropdown({reset:!1})}))}}get element(){return this._element}get panels(){return this._tabs.map(e=>e.value.panel.id)}get size(){return this._tabs.length}get tabs(){return this._tabs.map(e=>e.value)}get direction(){return this._direction}set direction(e){this._direction!==e&&(this._direction=e,this._scrollbar&&(this._scrollbar.orientation=e),at(this._tabsList,`dv-horizontal`,`dv-vertical`),e===`vertical`?ot(this._tabsList,`dv-tabs-container-vertical`,`dv-vertical`):(at(this._tabsList,`dv-tabs-container-vertical`),ot(this._tabsList,`dv-horizontal`)))}constructor(e,t,n){super(),this.group=e,this.accessor=t,this._observerDisposable=new j,this._scrollbar=null,this._tabs=[],this.selectedIndex=-1,this._showTabsOverflowControl=!1,this._direction=`horizontal`,this._animState=null,this._onTabDragStart=new k,this.onTabDragStart=this._onTabDragStart.event,this._onDrop=new k,this.onDrop=this._onDrop.event,this._onWillShowOverlay=new k,this.onWillShowOverlay=this._onWillShowOverlay.event,this._onOverflowTabsChange=new k,this.onOverflowTabsChange=this._onOverflowTabsChange.event,this._tabsList=document.createElement(`div`),this._tabsList.className=`dv-tabs-container`,this.showTabsOverflowControl=n.showTabsOverflowControl,t.options.scrollbars===`native`?this._element=this._tabsList:(this._scrollbar=new $t(this._tabsList),this._scrollbar.orientation=this.direction,this._element=this._scrollbar.element,this.addDisposables(this._scrollbar)),this.addDisposables(this._onOverflowTabsChange,this._observerDisposable,this._onWillShowOverlay,this._onDrop,this._onTabDragStart,x(this.element,`pointerdown`,e=>{e.defaultPrevented||e.button===0&&this.accessor.doSetGroupActive(this.group)}),x(this._tabsList,`dragover`,e=>{if(!this._animState){if(this.accessor.options.tabAnimation!==`smooth`||this.accessor.options.disableDnd)return;let e=y();if(e&&e.panelId&&e.groupId!==this.group.id)this._animState={sourceTabId:e.panelId,sourceIndex:-1,tabPositions:this.snapshotTabPositions(),currentInsertionIndex:null};else return}this.handleDragOver(e)},!0),x(this._tabsList,`dragleave`,e=>{this._animState&&(e.relatedTarget&&this._tabsList.contains(e.relatedTarget)||(this.resetTabTransforms(),this._animState&&(this._animState.sourceIndex===-1?this._animState=null:this._animState.currentInsertionIndex=null)))},!0),x(this._tabsList,`dragend`,()=>{this.resetDragAnimation()}),x(this._tabsList,`drop`,e=>{if(this.accessor.options.tabAnimation!==`smooth`||!this._animState||this._animState.currentInsertionIndex===null)return;e.stopPropagation(),e.preventDefault();let t=this._animState;this._animState=null;let n=t.currentInsertionIndex,r=t.sourceIndex,i=n-(r!==-1&&r<n?1:0);if(i===r){this.resetTabTransforms();return}let a=this.snapshotTabPositions();this.resetTabTransforms(),this._onDrop.fire({event:e,index:i}),this.runFlipAnimation(a,t.sourceTabId,t.sourceIndex===-1,{from:Math.min(r,i),to:Math.max(r,i)})},!0),rt.from(()=>{this.resetDragAnimation();for(let{value:e,disposable:t}of this._tabs)t.dispose(),e.dispose();this._tabs=[]}))}indexOf(e){return this._tabs.findIndex(t=>t.value.panel.id===e)}isActive(e){return this.selectedIndex>-1&&this._tabs[this.selectedIndex].value===e}setActivePanel(e){let t=0;for(let n of this._tabs){let r=e.id===n.value.panel.id;if(n.value.setActive(r),r){let e=n.value.element,r=e.parentElement;(t<r.scrollLeft||t+e.clientWidth>r.scrollLeft+r.clientWidth)&&(r.scrollLeft=t)}t+=n.value.element.clientWidth}}openPanel(e,t=this._tabs.length){if(this._tabs.find(t=>t.value.panel.id===e.id))return;let n=new Yt(e,this.accessor,this.group);n.setContent(e.view.tab);let r={value:n,disposable:new A(n.onDragStart(t=>{this._onTabDragStart.fire({nativeEvent:t,panel:e}),this.accessor.options.tabAnimation===`smooth`&&(this._animState={sourceTabId:e.id,sourceIndex:this._tabs.findIndex(e=>e.value===n),tabPositions:this.snapshotTabPositions(),currentInsertionIndex:null})}),n.onPointerDown(t=>{if(t.defaultPrevented)return;let r=!this.accessor.options.disableFloatingGroups,i=this.group.api.location.type===`floating`&&this.size===1;if(r&&!i&&t.shiftKey){t.preventDefault();let e=this.accessor.getGroupPanel(n.panel.id),{top:r,left:i}=n.element.getBoundingClientRect(),{top:a,left:o}=this.accessor.element.getBoundingClientRect();this.accessor.addFloatingGroup(e,{x:i-o,y:r-a,inDragMode:!0});return}switch(t.button){case 0:this.group.activePanel!==e&&this.group.model.openPanel(e);break}}),n.onDrop(e=>{let t=this._animState;this._animState=null;let r=this._tabs.findIndex(e=>e.value===n);if(t){let n=this.snapshotTabPositions();this.resetTabTransforms(),this._onDrop.fire({event:e.nativeEvent,index:r}),this.runFlipAnimation(n,t.sourceTabId,t.sourceIndex===-1,t.sourceIndex===-1?void 0:{from:Math.min(t.sourceIndex,r),to:Math.max(t.sourceIndex,r)})}else this._onDrop.fire({event:e.nativeEvent,index:r})}),n.onWillShowOverlay(e=>{this._onWillShowOverlay.fire(new Xt(e,{kind:`tab`,panel:this.group.activePanel,api:this.accessor.api,group:this.group,getData:y}))}))};this.addTab(r,t),this._animState&&(this._animState.tabPositions=this.snapshotTabPositions(),this.applyDragOverTransforms())}delete(e){this._animState?.sourceTabId===e&&(this.resetTabTransforms(),this._animState=null);let t=this.indexOf(e),{value:n,disposable:r}=this._tabs.splice(t,1)[0];r.dispose(),n.dispose(),n.element.remove(),this._animState&&(this._animState.tabPositions=this.snapshotTabPositions(),this.applyDragOverTransforms())}addTab(e,t=this._tabs.length){if(t<0||t>this._tabs.length)throw Error(`invalid location`);this._tabsList.insertBefore(e.value.element,this._tabsList.children[t]),this._tabs=[...this._tabs.slice(0,t),e,...this._tabs.slice(t)],this.selectedIndex<0&&(this.selectedIndex=t)}toggleDropdown(e){let t=e.reset?[]:this._tabs.filter(e=>!ue(e.value.element,this._tabsList)).map(e=>e.value.panel.id);this._onOverflowTabsChange.fire({tabs:t,reset:e.reset})}updateDragAndDropState(){for(let e of this._tabs)e.value.updateDragAndDropState()}snapshotTabPositions(){let e=new Map;for(let t of this._tabs)e.set(t.value.panel.id,t.value.element.getBoundingClientRect());return e}getAverageTabWidth(){if(this._tabs.length===0)return 0;let e=0;for(let t of this._tabs)e+=t.value.element.getBoundingClientRect().width;return e/this._tabs.length}handleDragOver(e){if(!this._animState)return;let t=e.clientX,n=null;for(let e=0;e<this._tabs.length;e++){let r=this._tabs[e].value;if(r.panel.id===this._animState.sourceTabId)continue;let i=r.element.getBoundingClientRect();if(t<i.left+i.width/2){n=e;break}n=e+1}n!==this._animState.currentInsertionIndex&&(this._animState.currentInsertionIndex=n,this.applyDragOverTransforms())}applyDragOverTransforms(){if(!this._animState||this._animState.currentInsertionIndex===null){this.resetTabTransforms();return}let e=this._animState.currentInsertionIndex,t=this._animState.tabPositions.get(this._animState.sourceTabId),n=t?t.width:this.getAverageTabWidth(),r=!1;for(let t=0;t<this._tabs.length;t++){let i=this._tabs[t].value;if(i.panel.id!==this._animState.sourceTabId)if(!r&&t>=e)i.element.style.marginLeft=`${n}px`,M(i.element,`dv-tab--shifting`,!0),r=!0;else if(i.element.style.marginLeft){i.element.style.marginLeft=`0px`,M(i.element,`dv-tab--shifting`,!0);let e=()=>{i.element.style.removeProperty(`margin-left`),M(i.element,`dv-tab--shifting`,!1),i.element.removeEventListener(`transitionend`,e)};i.element.addEventListener(`transitionend`,e)}else M(i.element,`dv-tab--shifting`,!1)}}resetTabTransforms(){for(let e of this._tabs)e.value.element.style.removeProperty(`margin-left`),e.value.element.style.removeProperty(`transform`),M(e.value.element,`dv-tab--shifting`,!1)}resetDragAnimation(){this.resetTabTransforms(),this._animState=null;for(let e of this._tabs)M(e.value.element,`dv-tab--dragging`,!1)}runFlipAnimation(e,t,n=!1,r){let i=!1;for(let a=0;a<this._tabs.length;a++){let o=this._tabs[a],s=o.value.panel.id;if(s===t){if(n){let e=o.value.element.getBoundingClientRect();o.value.element.style.transform=`translateX(${e.width}px)`,M(o.value.element,`dv-tab--shifting`,!0),i=!0}continue}if(r!==void 0&&(a<r.from||a>r.to))continue;let c=e.get(s);if(!c)continue;let l=o.value.element.getBoundingClientRect(),u=c.left-l.left;Math.abs(u)<1||(o.value.element.style.transform=`translateX(${u}px)`,M(o.value.element,`dv-tab--shifting`,!0),i=!0)}i&&requestAnimationFrame(()=>{for(let e of this._tabs)e.value.element.style.transform&&(e.value.element.style.transform=``);let e=t=>{if(t.propertyName===`transform`){this._tabsList.removeEventListener(`transitionend`,e);for(let e of this._tabs)M(e.value.element,`dv-tab--shifting`,!1)}};this._tabsList.addEventListener(`transitionend`,e)})}},tn=e=>{let t=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t.setAttributeNS(null,`height`,e.height),t.setAttributeNS(null,`width`,e.width),t.setAttributeNS(null,`viewBox`,e.viewbox),t.setAttributeNS(null,`aria-hidden`,`false`),t.setAttributeNS(null,`focusable`,`false`),t.classList.add(`dv-svg`);let n=document.createElementNS(`http://www.w3.org/2000/svg`,`path`);return n.setAttributeNS(null,`d`,e.path),t.appendChild(n),t},nn=()=>tn({width:`11`,height:`11`,viewbox:`0 0 28 28`,path:`M2.1 27.3L0 25.2L11.55 13.65L0 2.1L2.1 0L13.65 11.55L25.2 0L27.3 2.1L15.75 13.65L27.3 25.2L25.2 27.3L13.65 15.75L2.1 27.3Z`}),rn=()=>tn({width:`11`,height:`11`,viewbox:`0 0 24 15`,path:`M12 14.15L0 2.15L2.15 0L12 9.9L21.85 0.0499992L24 2.2L12 14.15Z`}),an=()=>tn({width:`11`,height:`11`,viewbox:`0 0 15 25`,path:`M2.15 24.1L0 21.95L9.9 12.05L0 2.15L2.15 0L14.2 12.05L2.15 24.1Z`}),on=class extends A{get onTabDragStart(){return this.tabs.onTabDragStart}get panels(){return this.tabs.panels}get size(){return this.tabs.size}get hidden(){return this._hidden}set hidden(e){this._hidden=e,this.element.style.display=e?`none`:``}get direction(){return this._direction}set direction(e){this._direction=e,e===`vertical`?(ot(this._element,`dv-groupview-header-vertical`),ot(this.rightActionsContainer,`dv-right-actions-container-vertical`),this.tabs.direction=e):(at(this._element,`dv-groupview-header-vertical`),at(this.rightActionsContainer,`dv-right-actions-container-vertical`),this.tabs.direction=e)}get element(){return this._element}constructor(e,t){super(),this.accessor=e,this.group=t,this._hidden=!1,this._direction=`horizontal`,this.dropdownPart=null,this._overflowTabs=[],this._dropdownDisposable=new j,this._onDrop=new k,this.onDrop=this._onDrop.event,this._onGroupDragStart=new k,this.onGroupDragStart=this._onGroupDragStart.event,this._onWillShowOverlay=new k,this.onWillShowOverlay=this._onWillShowOverlay.event,this._element=document.createElement(`div`),this._element.className=`dv-tabs-and-actions-container`,M(this._element,`dv-full-width-single-tab`,this.accessor.options.singleTabMode===`fullwidth`),this.rightActionsContainer=document.createElement(`div`),this.rightActionsContainer.className=`dv-right-actions-container`,this.leftActionsContainer=document.createElement(`div`),this.leftActionsContainer.className=`dv-left-actions-container`,this.preActionsContainer=document.createElement(`div`),this.preActionsContainer.className=`dv-pre-actions-container`,this.tabs=new en(t,e,{showTabsOverflowControl:!e.options.disableTabsOverflowList}),this.voidContainer=new Qt(this.accessor,this.group),this._element.appendChild(this.preActionsContainer),this._element.appendChild(this.tabs.element),this._element.appendChild(this.leftActionsContainer),this._element.appendChild(this.voidContainer.element),this._element.appendChild(this.rightActionsContainer),this.addDisposables(this.tabs.onDrop(e=>this._onDrop.fire(e)),this.tabs.onWillShowOverlay(e=>this._onWillShowOverlay.fire(e)),e.onDidOptionsChange(()=>{this.tabs.showTabsOverflowControl=!e.options.disableTabsOverflowList}),this.tabs.onOverflowTabsChange(e=>{this.toggleDropdown(e)}),this.tabs,this._onWillShowOverlay,this._onDrop,this._onGroupDragStart,this.voidContainer,this.voidContainer.onDragStart(e=>{this._onGroupDragStart.fire({nativeEvent:e,group:this.group})}),this.voidContainer.onDrop(e=>{this._onDrop.fire({event:e.nativeEvent,index:this.tabs.size})}),this.voidContainer.onWillShowOverlay(e=>{this._onWillShowOverlay.fire(new Xt(e,{kind:`header_space`,panel:this.group.activePanel,api:this.accessor.api,group:this.group,getData:y}))}),x(this.voidContainer.element,`pointerdown`,e=>{if(!e.defaultPrevented&&!this.accessor.options.disableFloatingGroups&&e.shiftKey&&this.group.api.location.type!==`floating`){e.preventDefault();let{top:t,left:n}=this.element.getBoundingClientRect(),{top:r,left:i}=this.accessor.element.getBoundingClientRect();this.accessor.addFloatingGroup(this.group,{x:n-i+20,y:t-r+20,inDragMode:!0})}}))}show(){this.hidden||(this.element.style.display=``)}hide(){this._element.style.display=`none`}setRightActionsElement(e){this.rightActions!==e&&(this.rightActions&&=(this.rightActions.remove(),void 0),e&&(this.rightActionsContainer.appendChild(e),this.rightActions=e))}setLeftActionsElement(e){this.leftActions!==e&&(this.leftActions&&=(this.leftActions.remove(),void 0),e&&(this.leftActionsContainer.appendChild(e),this.leftActions=e))}setPrefixActionsElement(e){this.preActions!==e&&(this.preActions&&=(this.preActions.remove(),void 0),e&&(this.preActionsContainer.appendChild(e),this.preActions=e))}isActive(e){return this.tabs.isActive(e)}indexOf(e){return this.tabs.indexOf(e)}setActive(e){}delete(e){this.tabs.delete(e),this.updateClassnames()}setActivePanel(e){this.tabs.setActivePanel(e)}openPanel(e,t=this.tabs.size){this.tabs.openPanel(e,t),this.updateClassnames()}closePanel(e){this.delete(e.id)}updateClassnames(){M(this._element,`dv-single-tab`,this.size===1)}toggleDropdown(e){let t=e.reset?[]:e.tabs;if(this._overflowTabs=t,this._overflowTabs.length>0&&this.dropdownPart){this.dropdownPart.update({tabs:t.length});return}if(this._overflowTabs.length===0){this._dropdownDisposable.dispose();return}let n=document.createElement(`div`);n.className=`dv-tabs-overflow-dropdown-root`;let r=Fe();r.update({tabs:t.length}),this.dropdownPart=r,n.appendChild(r.element),this.rightActionsContainer.prepend(n),this._dropdownDisposable.value=new A(rt.from(()=>{var e,t;n.remove(),(t=(e=this.dropdownPart)?.dispose)==null||t.call(e),this.dropdownPart=null}),x(n,`pointerdown`,e=>{e.preventDefault()},{capture:!0}),x(n,`click`,e=>{let t=document.createElement(`div`);t.style.overflow=`auto`,t.className=`dv-tabs-overflow-container`;for(let e of this.tabs.tabs.filter(e=>this._overflowTabs.includes(e.panel.id))){let n=this.group.panels.find(t=>t===e.panel),r=n.view.createTabRenderer(`headerOverflow`).element,i=document.createElement(`div`);M(i,`dv-tab`,!0),M(i,`dv-active-tab`,n.api.isActive),M(i,`dv-inactive-tab`,!n.api.isActive),i.addEventListener(`click`,t=>{this.accessor.popupService.close(),!t.defaultPrevented&&(e.element.scrollIntoView(),e.panel.api.setActive())}),i.appendChild(r),t.appendChild(i)}let r=fe(n);this.accessor.popupService.openPopover(t,{x:e.clientX,y:e.clientY,zIndex:r?.style.zIndex?`calc(${r.style.zIndex} * 2)`:void 0})}))}updateDragAndDropState(){this.tabs.updateDragAndDropState(),this.voidContainer.updateDragAndDropState()}},sn=class extends Qe{constructor(e,t,n,r,i){super(),this.nativeEvent=e,this.target=t,this.position=n,this.getData=r,this.group=i}},cn=Object.keys({disableAutoResizing:void 0,hideBorders:void 0,singleTabMode:void 0,disableFloatingGroups:void 0,floatingGroupBounds:void 0,popoutUrl:void 0,defaultRenderer:void 0,defaultHeaderPosition:void 0,debug:void 0,rootOverlayModel:void 0,locked:void 0,disableDnd:void 0,className:void 0,noPanelsOverlay:void 0,dndEdges:void 0,theme:void 0,disableTabsOverflowList:void 0,scrollbars:void 0,tabAnimation:void 0}),ln=class extends Ze{get nativeEvent(){return this.options.nativeEvent}get position(){return this.options.position}get panel(){return this.options.panel}get group(){return this.options.group}get api(){return this.options.api}constructor(e){super(),this.options=e}getData(){return this.options.getData()}},un=class extends ln{get kind(){return this._kind}constructor(e){super(e),this._kind=e.kind}},dn=class extends A{get element(){throw Error(`dockview: not supported`)}get activePanel(){return this._activePanel}get locked(){return this._locked}set locked(e){this._locked=e,M(this.container,`dv-locked-groupview`,e===`no-drop-target`||e)}get isActive(){return this._isGroupActive}get panels(){return this._panels}get size(){return this._panels.length}get isEmpty(){return this._panels.length===0}get hasWatermark(){return!!(this.watermark&&this.container.contains(this.watermark.element))}get header(){return this.tabsContainer}get isContentFocused(){return document.activeElement?S(document.activeElement,this.contentContainer.element):!1}get headerPosition(){return this._headerPosition??`top`}set headerPosition(e){this._headerPosition=e,at(this.container,`dv-groupview-header-top`,`dv-groupview-header-bottom`,`dv-groupview-header-left`,`dv-groupview-header-right`),ot(this.container,`dv-groupview-header-${e}`);let t=e===`top`||e===`bottom`?`horizontal`:`vertical`;this.tabsContainer.direction=t,this.header.direction=t,this._activePanel?.layout&&this._activePanel.layout(this._width,this._height),(this._leftHeaderActions||this._rightHeaderActions||this._prefixHeaderActions)&&this.updateHeaderActions()}get location(){return this._location}set location(e){switch(this._location=e,M(this.container,`dv-groupview-floating`,!1),M(this.container,`dv-groupview-popout`,!1),e.type){case`grid`:this.contentContainer.dropTarget.setTargetZones([`top`,`bottom`,`left`,`right`,`center`]);break;case`floating`:this.contentContainer.dropTarget.setTargetZones([`center`]),this.contentContainer.dropTarget.setTargetZones(e?[`center`]:[`top`,`bottom`,`left`,`right`,`center`]),M(this.container,`dv-groupview-floating`,!0);break;case`popout`:this.contentContainer.dropTarget.setTargetZones([`center`]),M(this.container,`dv-groupview-popout`,!0);break}this.groupPanel.api._onDidLocationChange.fire({location:this.location})}constructor(e,t,n,r,i){super(),this.container=e,this.accessor=t,this.id=n,this.options=r,this.groupPanel=i,this._isGroupActive=!1,this._locked=!1,this._rightHeaderActionsDisposable=new j,this._leftHeaderActionsDisposable=new j,this._prefixHeaderActionsDisposable=new j,this._location={type:`grid`},this.mostRecentlyUsed=[],this._overwriteRenderContainer=null,this._overwriteDropTargetContainer=null,this._onDidChange=new k,this.onDidChange=this._onDidChange.event,this._width=0,this._height=0,this._panels=[],this._panelDisposables=new Map,this._onMove=new k,this.onMove=this._onMove.event,this._onDidDrop=new k,this.onDidDrop=this._onDidDrop.event,this._onWillDrop=new k,this.onWillDrop=this._onWillDrop.event,this._onWillShowOverlay=new k,this.onWillShowOverlay=this._onWillShowOverlay.event,this._onTabDragStart=new k,this.onTabDragStart=this._onTabDragStart.event,this._onGroupDragStart=new k,this.onGroupDragStart=this._onGroupDragStart.event,this._onDidAddPanel=new k,this.onDidAddPanel=this._onDidAddPanel.event,this._onDidPanelTitleChange=new k,this.onDidPanelTitleChange=this._onDidPanelTitleChange.event,this._onDidPanelParametersChange=new k,this.onDidPanelParametersChange=this._onDidPanelParametersChange.event,this._onDidRemovePanel=new k,this.onDidRemovePanel=this._onDidRemovePanel.event,this._onDidActivePanelChange=new k,this.onDidActivePanelChange=this._onDidActivePanelChange.event,this._onUnhandledDragOverEvent=new k,this.onUnhandledDragOverEvent=this._onUnhandledDragOverEvent.event,M(this.container,`dv-groupview`,!0),this._api=new kt(this.accessor),this.tabsContainer=new on(this.accessor,this.groupPanel),this.contentContainer=new qt(this.accessor,this),e.append(this.tabsContainer.element,this.contentContainer.element),this.header.hidden=!!r.hideHeader,this.locked=r.locked??!1,this.headerPosition=r.headerPosition??t.defaultHeaderPosition,this.addDisposables(this._onTabDragStart,this._onGroupDragStart,this._onWillShowOverlay,this._rightHeaderActionsDisposable,this._leftHeaderActionsDisposable,this._prefixHeaderActionsDisposable,this.tabsContainer.onTabDragStart(e=>{this._onTabDragStart.fire(e)}),this.tabsContainer.onGroupDragStart(e=>{this._onGroupDragStart.fire(e)}),this.tabsContainer.onDrop(e=>{this.handleDropEvent(`header`,e.event,`center`,e.index)}),this.contentContainer.onDidFocus(()=>{this.accessor.doSetGroupActive(this.groupPanel)}),this.contentContainer.onDidBlur(()=>{}),this.contentContainer.dropTarget.onDrop(e=>{this.handleDropEvent(`content`,e.nativeEvent,e.position)}),this.tabsContainer.onWillShowOverlay(e=>{this._onWillShowOverlay.fire(e)}),this.contentContainer.dropTarget.onWillShowOverlay(e=>{this._onWillShowOverlay.fire(new Xt(e,{kind:`content`,panel:this.activePanel,api:this._api,group:this.groupPanel,getData:y}))}),this._onMove,this._onDidChange,this._onDidDrop,this._onWillDrop,this._onDidAddPanel,this._onDidRemovePanel,this._onDidActivePanelChange,this._onUnhandledDragOverEvent,this._onDidPanelTitleChange,this._onDidPanelParametersChange)}focusContent(){this.contentContainer.element.focus()}set renderContainer(e){this.panels.forEach(e=>{this.renderContainer.detatch(e)}),this._overwriteRenderContainer=e,this.panels.forEach(e=>{this.rerender(e)})}get renderContainer(){return this._overwriteRenderContainer??this.accessor.overlayRenderContainer}set dropTargetContainer(e){this._overwriteDropTargetContainer=e}get dropTargetContainer(){return this._overwriteDropTargetContainer??this.accessor.rootDropTargetContainer}initialize(){this.options.panels&&this.options.panels.forEach(e=>{this.doAddPanel(e)}),this.options.activePanel&&this.openPanel(this.options.activePanel),this.setActive(this.isActive,!0),this.updateContainer(),this.updateHeaderActions()}updateHeaderActions(){this.accessor.options.createRightHeaderActionComponent?(this._rightHeaderActions=this.accessor.options.createRightHeaderActionComponent(this.groupPanel),this._rightHeaderActionsDisposable.value=this._rightHeaderActions,this._rightHeaderActions.init({containerApi:this._api,api:this.groupPanel.api,group:this.groupPanel}),this.tabsContainer.setRightActionsElement(this._rightHeaderActions.element)):(this._rightHeaderActions=void 0,this._rightHeaderActionsDisposable.dispose(),this.tabsContainer.setRightActionsElement(void 0)),this.accessor.options.createLeftHeaderActionComponent?(this._leftHeaderActions=this.accessor.options.createLeftHeaderActionComponent(this.groupPanel),this._leftHeaderActionsDisposable.value=this._leftHeaderActions,this._leftHeaderActions.init({containerApi:this._api,api:this.groupPanel.api,group:this.groupPanel}),this.tabsContainer.setLeftActionsElement(this._leftHeaderActions.element)):(this._leftHeaderActions=void 0,this._leftHeaderActionsDisposable.dispose(),this.tabsContainer.setLeftActionsElement(void 0)),this.accessor.options.createPrefixHeaderActionComponent?(this._prefixHeaderActions=this.accessor.options.createPrefixHeaderActionComponent(this.groupPanel),this._prefixHeaderActionsDisposable.value=this._prefixHeaderActions,this._prefixHeaderActions.init({containerApi:this._api,api:this.groupPanel.api,group:this.groupPanel}),this.tabsContainer.setPrefixActionsElement(this._prefixHeaderActions.element)):(this._prefixHeaderActions=void 0,this._prefixHeaderActionsDisposable.dispose(),this.tabsContainer.setPrefixActionsElement(void 0))}rerender(e){this.contentContainer.renderPanel(e,{asActive:!1})}indexOf(e){return this.tabsContainer.indexOf(e.id)}toJSON(){let e={views:this.tabsContainer.panels,activeView:this._activePanel?.id,id:this.id};return this.locked!==!1&&(e.locked=this.locked),this.header.hidden&&(e.hideHeader=!0),this.headerPosition!==`top`&&(e.headerPosition=this.headerPosition),e}moveToNext(e){e||={},e.panel||=this.activePanel;let t=e.panel?this.panels.indexOf(e.panel):-1,n;if(t<this.panels.length-1)n=t+1;else if(!e.suppressRoll)n=0;else return;this.openPanel(this.panels[n])}moveToPrevious(e){if(e||={},e.panel||=this.activePanel,!e.panel)return;let t=this.panels.indexOf(e.panel),n;if(t>0)n=t-1;else if(!e.suppressRoll)n=this.panels.length-1;else return;this.openPanel(this.panels[n])}containsPanel(e){return this.panels.includes(e)}init(e){}update(e){}focus(){var e;(e=this._activePanel)==null||e.focus()}openPanel(e,t={}){(typeof t.index!=`number`||t.index>this.panels.length)&&(t.index=this.panels.length);let n=!!t.skipSetActive;if(e.updateParentGroup(this.groupPanel,{skipSetActive:t.skipSetActive}),this.doAddPanel(e,t.index,{skipSetActive:n}),this._activePanel===e){this.contentContainer.renderPanel(e,{asActive:!0});return}n||this.doSetActivePanel(e),t.skipSetGroupActive||this.accessor.doSetGroupActive(this.groupPanel),t.skipSetActive||this.updateContainer()}removePanel(e,t={skipSetActive:!1}){let n=typeof e==`string`?e:e.id,r=this._panels.find(e=>e.id===n);if(!r)throw Error(`invalid operation`);return this._removePanel(r,t)}closeAllPanels(){if(this.panels.length>0){let e=[...this.panels];for(let t of e)this.doClose(t)}else this.accessor.removeGroup(this.groupPanel)}closePanel(e){this.doClose(e)}doClose(e){let t=this.panels.length===1&&this.accessor.groups.length===1;this.accessor.removePanel(e,t&&this.accessor.options.noPanelsOverlay===`emptyGroup`?{removeEmptyGroup:!1}:void 0)}isPanelActive(e){return this._activePanel===e}updateActions(e){this.tabsContainer.setRightActionsElement(e)}setActive(e,t=!1){!t&&this.isActive===e||(this._isGroupActive=e,M(this.container,`dv-active-group`,e),M(this.container,`dv-inactive-group`,!e),this.tabsContainer.setActive(this.isActive),!this._activePanel&&this.panels.length>0&&this.doSetActivePanel(this.panels[0]),this.updateContainer())}layout(e,t){this._width=e,this._height=t,this.contentContainer.layout(this._width,this._height),this._activePanel?.layout&&this._activePanel.layout(this._width,this._height)}_removePanel(e,t){let n=this._activePanel===e;if(this.doRemovePanel(e),n&&this.panels.length>0){let e=this.mostRecentlyUsed[0];this.openPanel(e,{skipSetActive:t.skipSetActive,skipSetGroupActive:t.skipSetActiveGroup})}return this._activePanel&&this.panels.length===0&&this.doSetActivePanel(void 0),t.skipSetActive||this.updateContainer(),e}doRemovePanel(e){let t=this.panels.indexOf(e);if(this._activePanel===e&&this.contentContainer.closePanel(),this.tabsContainer.delete(e.id),this._panels.splice(t,1),this.mostRecentlyUsed.includes(e)){let t=this.mostRecentlyUsed.indexOf(e);this.mostRecentlyUsed.splice(t,1)}let n=this._panelDisposables.get(e.id);n&&(n.dispose(),this._panelDisposables.delete(e.id)),this._onDidRemovePanel.fire({panel:e})}doAddPanel(e,t=this.panels.length,n={skipSetActive:!1}){let r=this._panels.indexOf(e)>-1;this.tabsContainer.show(),this.contentContainer.show(),this.tabsContainer.openPanel(e,t),n.skipSetActive?e.api.renderer===`always`&&this.contentContainer.renderPanel(e,{asActive:!1}):this.contentContainer.openPanel(e),!r&&(this.updateMru(e),this.panels.splice(t,0,e),this._panelDisposables.set(e.id,new A(e.api.onDidTitleChange(e=>this._onDidPanelTitleChange.fire(e)),e.api.onDidParametersChange(e=>this._onDidPanelParametersChange.fire(e)))),this._onDidAddPanel.fire({panel:e}))}doSetActivePanel(e){this._activePanel!==e&&(this._activePanel=e,e&&(this.tabsContainer.setActivePanel(e),this.contentContainer.openPanel(e),e.layout(this._width,this._height),this.updateMru(e),this.contentContainer.refreshFocusState(),this._onDidActivePanelChange.fire({panel:e})))}updateMru(e){this.mostRecentlyUsed.includes(e)&&this.mostRecentlyUsed.splice(this.mostRecentlyUsed.indexOf(e),1),this.mostRecentlyUsed=[e,...this.mostRecentlyUsed]}updateContainer(){var e,t;if(this.panels.forEach(e=>e.runEvents()),this.isEmpty&&!this.watermark){let e=this.accessor.createWatermarkComponent();e.init({containerApi:this._api,group:this.groupPanel}),this.watermark=e,x(this.watermark.element,`pointerdown`,()=>{this.isActive||this.accessor.doSetGroupActive(this.groupPanel)}),this.contentContainer.element.appendChild(this.watermark.element)}!this.isEmpty&&this.watermark&&(this.watermark.element.remove(),(t=(e=this.watermark).dispose)==null||t.call(e),this.watermark=void 0)}canDisplayOverlay(e,t,n){let r=new sn(e,n,t,y,this.accessor.getPanel(this.id));return this._onUnhandledDragOverEvent.fire(r),r.isAccepted}handleDropEvent(e,t,n,r){if(this.locked===`no-drop-target`)return;function i(){switch(e){case`header`:return typeof r==`number`?`tab`:`header_space`;case`content`:return`content`}}let a=typeof r==`number`?this.panels[r]:void 0,o=new un({nativeEvent:t,position:n,panel:a,getData:()=>y(),kind:i(),group:this.groupPanel,api:this._api});if(this._onWillDrop.fire(o),o.defaultPrevented)return;let s=y();if(s&&s.viewId===this.accessor.id){if(e===`content`&&s.groupId===this.id&&(n===`center`||s.panelId===null)||e===`header`&&s.groupId===this.id&&s.panelId===null)return;if(s.panelId===null){let{groupId:e}=s;this._onMove.fire({target:n,groupId:e,index:r});return}if(this.tabsContainer.indexOf(s.panelId)!==-1&&this.tabsContainer.size===1)return;let{groupId:t,panelId:i}=s;if(this.id===t&&!n&&this.tabsContainer.indexOf(i)===r)return;this._onMove.fire({target:n,groupId:s.groupId,itemId:s.panelId,index:r})}else this._onDidDrop.fire(new ln({nativeEvent:t,position:n,panel:a,getData:()=>y(),group:this.groupPanel,api:this._api}))}updateDragAndDropState(){this.tabsContainer.updateDragAndDropState()}dispose(){var e,t,n;super.dispose(),(e=this.watermark)==null||e.element.remove(),(n=(t=this.watermark)?.dispose)==null||n.call(t),this.watermark=void 0;for(let e of this.panels)e.dispose();this.tabsContainer.dispose(),this.contentContainer.dispose()}},fn=class extends Vt{constructor(e,t,n){super(e,t),this._onDidConstraintsChangeInternal=new k,this.onDidConstraintsChangeInternal=this._onDidConstraintsChangeInternal.event,this._onDidConstraintsChange=new k,this.onDidConstraintsChange=this._onDidConstraintsChange.event,this._onDidSizeChange=new k,this.onDidSizeChange=this._onDidSizeChange.event,this.addDisposables(this._onDidConstraintsChangeInternal,this._onDidConstraintsChange,this._onDidSizeChange),n&&this.initialize(n)}setConstraints(e){this._onDidConstraintsChangeInternal.fire(e)}setSize(e){this._onDidSizeChange.fire(e)}},pn=class extends Wt{get priority(){return this._priority}get snap(){return this._snap}get minimumWidth(){return this.__minimumWidth()}get minimumHeight(){return this.__minimumHeight()}get maximumHeight(){return this.__maximumHeight()}get maximumWidth(){return this.__maximumWidth()}__minimumWidth(){let e=typeof this._minimumWidth==`function`?this._minimumWidth():this._minimumWidth;return e!==this._evaluatedMinimumWidth&&(this._evaluatedMinimumWidth=e,this.updateConstraints()),e}__maximumWidth(){let e=typeof this._maximumWidth==`function`?this._maximumWidth():this._maximumWidth;return e!==this._evaluatedMaximumWidth&&(this._evaluatedMaximumWidth=e,this.updateConstraints()),e}__minimumHeight(){let e=typeof this._minimumHeight==`function`?this._minimumHeight():this._minimumHeight;return e!==this._evaluatedMinimumHeight&&(this._evaluatedMinimumHeight=e,this.updateConstraints()),e}__maximumHeight(){let e=typeof this._maximumHeight==`function`?this._maximumHeight():this._maximumHeight;return e!==this._evaluatedMaximumHeight&&(this._evaluatedMaximumHeight=e,this.updateConstraints()),e}get isActive(){return this.api.isActive}get isVisible(){return this.api.isVisible}constructor(e,t,n,r){super(e,t,r??new fn(e,t)),this._evaluatedMinimumWidth=0,this._evaluatedMaximumWidth=2**53-1,this._evaluatedMinimumHeight=0,this._evaluatedMaximumHeight=2**53-1,this._minimumWidth=0,this._minimumHeight=0,this._maximumWidth=2**53-1,this._maximumHeight=2**53-1,this._snap=!1,this._onDidChange=new k,this.onDidChange=this._onDidChange.event,typeof n?.minimumWidth==`number`&&(this._minimumWidth=n.minimumWidth),typeof n?.maximumWidth==`number`&&(this._maximumWidth=n.maximumWidth),typeof n?.minimumHeight==`number`&&(this._minimumHeight=n.minimumHeight),typeof n?.maximumHeight==`number`&&(this._maximumHeight=n.maximumHeight),this.api.initialize(this),this.addDisposables(this.api.onWillVisibilityChange(e=>{let{isVisible:t}=e,{accessor:n}=this._params;n.setVisible(this,t)}),this.api.onActiveChange(()=>{let{accessor:e}=this._params;e.doSetGroupActive(this)}),this.api.onDidConstraintsChangeInternal(e=>{(typeof e.minimumWidth==`number`||typeof e.minimumWidth==`function`)&&(this._minimumWidth=e.minimumWidth),(typeof e.minimumHeight==`number`||typeof e.minimumHeight==`function`)&&(this._minimumHeight=e.minimumHeight),(typeof e.maximumWidth==`number`||typeof e.maximumWidth==`function`)&&(this._maximumWidth=e.maximumWidth),(typeof e.maximumHeight==`number`||typeof e.maximumHeight==`function`)&&(this._maximumHeight=e.maximumHeight)}),this.api.onDidSizeChange(e=>{this._onDidChange.fire({height:e.height,width:e.width})}),this._onDidChange)}setVisible(e){this.api._onDidVisibilityChange.fire({isVisible:e})}setActive(e){this.api._onDidActiveChange.fire({isActive:e})}init(e){e.maximumHeight&&(this._maximumHeight=e.maximumHeight),e.minimumHeight&&(this._minimumHeight=e.minimumHeight),e.maximumWidth&&(this._maximumWidth=e.maximumWidth),e.minimumWidth&&(this._minimumWidth=e.minimumWidth),this._priority=e.priority,this._snap=!!e.snap,super.init(e),typeof e.isVisible==`boolean`&&this.setVisible(e.isVisible)}updateConstraints(){this.api._onDidConstraintsChange.fire({minimumWidth:this._evaluatedMinimumWidth,maximumWidth:this._evaluatedMaximumWidth,minimumHeight:this._evaluatedMinimumHeight,maximumHeight:this._evaluatedMaximumHeight})}toJSON(){let e=super.toJSON(),t=e=>e===2**53-1?void 0:e,n=e=>e<=0?void 0:e;return Object.assign(Object.assign({},e),{minimumHeight:n(this.minimumHeight),maximumHeight:t(this.maximumHeight),minimumWidth:n(this.minimumWidth),maximumWidth:t(this.maximumWidth),snap:this.snap,priority:this.priority})}},mn=`dockview: DockviewGroupPanelApiImpl not initialized`,hn=class extends fn{get location(){if(!this._group)throw Error(mn);return this._group.model.location}constructor(e,t){super(e,`__dockviewgroup__`),this.accessor=t,this._onDidLocationChange=new k,this.onDidLocationChange=this._onDidLocationChange.event,this._onDidActivePanelChange=new k,this.onDidActivePanelChange=this._onDidActivePanelChange.event,this.addDisposables(this._onDidLocationChange,this._onDidActivePanelChange,this._onDidVisibilityChange.event(e=>{e.isVisible&&this._pendingSize&&(super.setSize(this._pendingSize),this._pendingSize=void 0)}))}setSize(e){this._pendingSize=Object.assign({},e),super.setSize(e)}close(){if(this._group)return this.accessor.removeGroup(this._group)}getWindow(){return this.location.type===`popout`?this.location.getWindow():window}setHeaderPosition(e){if(!this._group)throw Error(mn);this._group.model.headerPosition=e}getHeaderPosition(){if(!this._group)throw Error(mn);return this._group.model.headerPosition}moveTo(e){if(!this._group)throw Error(mn);let t=e.group??this.accessor.addGroup({direction:je(e.position??`right`),skipSetActive:e.skipSetActive??!1});this.accessor.moveGroupOrPanel({from:{groupId:this._group.id},to:{group:t,position:e.group?e.position??`center`:`center`,index:e.index},skipSetActive:e.skipSetActive})}maximize(){if(!this._group)throw Error(mn);this.location.type===`grid`&&this.accessor.maximizeGroup(this._group)}isMaximized(){if(!this._group)throw Error(mn);return this.accessor.isMaximizedGroup(this._group)}exitMaximized(){if(!this._group)throw Error(mn);this.isMaximized()&&this.accessor.exitMaximizedGroup()}initialize(e){this._group=e}},gn=100,_n=100,vn=class extends pn{get minimumWidth(){if(typeof this._explicitConstraints.minimumWidth==`number`)return this._explicitConstraints.minimumWidth;let e=this.activePanel?.minimumWidth;return typeof e==`number`?e:super.__minimumWidth()}get minimumHeight(){if(typeof this._explicitConstraints.minimumHeight==`number`)return this._explicitConstraints.minimumHeight;let e=this.activePanel?.minimumHeight;return typeof e==`number`?e:super.__minimumHeight()}get maximumWidth(){if(typeof this._explicitConstraints.maximumWidth==`number`)return this._explicitConstraints.maximumWidth;let e=this.activePanel?.maximumWidth;return typeof e==`number`?e:super.__maximumWidth()}get maximumHeight(){if(typeof this._explicitConstraints.maximumHeight==`number`)return this._explicitConstraints.maximumHeight;let e=this.activePanel?.maximumHeight;return typeof e==`number`?e:super.__maximumHeight()}get panels(){return this._model.panels}get activePanel(){return this._model.activePanel}get size(){return this._model.size}get model(){return this._model}get locked(){return this._model.locked}set locked(e){this._model.locked=e}get header(){return this._model.header}constructor(e,t,n){super(t,`groupview_default`,{minimumHeight:n.constraints?.minimumHeight??_n,minimumWidth:n.constraints?.minimumWidth??gn,maximumHeight:n.constraints?.maximumHeight,maximumWidth:n.constraints?.maximumWidth},new hn(t,e)),this._explicitConstraints={},this.api.initialize(this),this._model=new dn(this.element,e,t,n,this),this.addDisposables(this.model.onDidActivePanelChange(e=>{this.api._onDidActivePanelChange.fire(e)}),this.api.onDidConstraintsChangeInternal(e=>{e.minimumWidth!==void 0&&(this._explicitConstraints.minimumWidth=typeof e.minimumWidth==`function`?e.minimumWidth():e.minimumWidth),e.minimumHeight!==void 0&&(this._explicitConstraints.minimumHeight=typeof e.minimumHeight==`function`?e.minimumHeight():e.minimumHeight),e.maximumWidth!==void 0&&(this._explicitConstraints.maximumWidth=typeof e.maximumWidth==`function`?e.maximumWidth():e.maximumWidth),e.maximumHeight!==void 0&&(this._explicitConstraints.maximumHeight=typeof e.maximumHeight==`function`?e.maximumHeight():e.maximumHeight)}))}focus(){this.api.isActive||this.api.setActive(),super.focus()}initialize(){this._model.initialize()}setActive(e){super.setActive(e),this.model.setActive(e)}layout(e,t){super.layout(e,t),this.model.layout(e,t)}getComponent(){return this._model}toJSON(){return this.model.toJSON()}},yn={name:`abyss`,className:`dockview-theme-abyss`},bn=class extends fn{get location(){return this.group.api.location}get title(){return this.panel.title}get isGroupActive(){return this.group.isActive}get renderer(){return this.panel.renderer}set group(e){let t=this._group;this._group!==e&&(this._group=e,this._onDidGroupChange.fire({}),this.setupGroupEventListeners(t),this._onDidLocationChange.fire({location:this.group.api.location}))}get group(){return this._group}get tabComponent(){return this._tabComponent}constructor(e,t,n,r,i){super(e.id,r),this.panel=e,this.accessor=n,this._onDidTitleChange=new k,this.onDidTitleChange=this._onDidTitleChange.event,this._onDidActiveGroupChange=new k,this.onDidActiveGroupChange=this._onDidActiveGroupChange.event,this._onDidGroupChange=new k,this.onDidGroupChange=this._onDidGroupChange.event,this._onDidRendererChange=new k,this.onDidRendererChange=this._onDidRendererChange.event,this._onDidLocationChange=new k,this.onDidLocationChange=this._onDidLocationChange.event,this.groupEventsDisposable=new j,this._tabComponent=i,this.initialize(e),this._group=t,this.setupGroupEventListeners(),this.addDisposables(this.groupEventsDisposable,this._onDidRendererChange,this._onDidTitleChange,this._onDidGroupChange,this._onDidActiveGroupChange,this._onDidLocationChange)}getWindow(){return this.group.api.getWindow()}moveTo(e){this.accessor.moveGroupOrPanel({from:{groupId:this._group.id,panelId:this.panel.id},to:{group:e.group??this._group,position:e.group?e.position??`center`:`center`,index:e.index},skipSetActive:e.skipSetActive})}setTitle(e){this.panel.setTitle(e)}setRenderer(e){this.panel.setRenderer(e)}close(){this.group.model.closePanel(this.panel)}maximize(){this.group.api.maximize()}isMaximized(){return this.group.api.isMaximized()}exitMaximized(){this.group.api.exitMaximized()}setupGroupEventListeners(e){let t=e?.isActive??!1;this.groupEventsDisposable.value=new A(this.group.api.onDidVisibilityChange(e=>{let t=!e.isVisible&&this.isVisible,n=e.isVisible&&!this.isVisible,r=this.group.model.isPanelActive(this.panel);(t||n&&r)&&this._onDidVisibilityChange.fire(e)}),this.group.api.onDidLocationChange(e=>{this.group===this.panel.group&&this._onDidLocationChange.fire(e)}),this.group.api.onDidActiveChange(()=>{this.group===this.panel.group&&t!==this.isGroupActive&&(t=this.isGroupActive,this._onDidActiveGroupChange.fire({isActive:this.isGroupActive}))}))}},xn=class extends A{get params(){return this._params}get title(){return this._title}get group(){return this._group}get renderer(){return this._renderer??this.accessor.renderer}get minimumWidth(){return this._minimumWidth}get minimumHeight(){return this._minimumHeight}get maximumWidth(){return this._maximumWidth}get maximumHeight(){return this._maximumHeight}constructor(e,t,n,r,i,a,o,s){super(),this.id=e,this.accessor=r,this.containerApi=i,this.view=o,this._renderer=s.renderer,this._group=a,this._minimumWidth=s.minimumWidth,this._minimumHeight=s.minimumHeight,this._maximumWidth=s.maximumWidth,this._maximumHeight=s.maximumHeight,this.api=new bn(this,this._group,r,t,n),this.addDisposables(this.api.onActiveChange(()=>{r.setActivePanel(this)}),this.api.onDidSizeChange(e=>{this.group.api.setSize(e)}),this.api.onDidRendererChange(()=>{this.group.model.rerender(this)}))}init(e){this._params=e.params,this.view.init(Object.assign(Object.assign({},e),{api:this.api,containerApi:this.containerApi})),this.setTitle(e.title)}focus(){let e=new Bt;this.api._onWillFocus.fire(e),!e.defaultPrevented&&(this.api.isActive||this.api.setActive())}toJSON(){return{id:this.id,contentComponent:this.view.contentComponent,tabComponent:this.view.tabComponent,params:Object.keys(this._params||{}).length>0?this._params:void 0,title:this.title,renderer:this._renderer,minimumHeight:this._minimumHeight,maximumHeight:this._maximumHeight,minimumWidth:this._minimumWidth,maximumWidth:this._maximumWidth}}setTitle(e){e!==this.title&&(this._title=e,this.api._onDidTitleChange.fire({title:e}))}setRenderer(e){e!==this.renderer&&(this._renderer=e,this.api._onDidRendererChange.fire({renderer:e}))}update(e){this._params=Object.assign(Object.assign({},this._params??{}),e.params);for(let t of Object.keys(e.params))e.params[t]===void 0&&delete this._params[t];this.view.update({params:this._params})}updateFromStateModel(e){this._maximumHeight=e.maximumHeight,this._minimumHeight=e.minimumHeight,this._maximumWidth=e.maximumWidth,this._minimumWidth=e.minimumWidth,this.update({params:e.params??{}}),this.setTitle(e.title??this.id),this.setRenderer(e.renderer??this.accessor.renderer)}updateParentGroup(e,t){this._group=e,this.api.group=this._group;let n=this._group.model.isPanelActive(this),r=this.group.api.isActive&&n;t?.skipSetActive||this.api.isActive!==r&&this.api._onDidActiveChange.fire({isActive:this.group.api.isActive&&n}),this.api.isVisible!==n&&this.api._onDidVisibilityChange.fire({isVisible:n})}runEvents(){let e=this._group.model.isPanelActive(this),t=this.group.api.isActive&&e;this.api.isActive!==t&&this.api._onDidActiveChange.fire({isActive:this.group.api.isActive&&e}),this.api.isVisible!==e&&this.api._onDidVisibilityChange.fire({isVisible:e})}layout(e,t){this.api._onDidDimensionChange.fire({width:e,height:t}),this.view.layout(e,t)}dispose(){this.api.dispose(),this.view.dispose()}},Sn=class extends A{get element(){return this._element}constructor(){super(),this._element=document.createElement(`div`),this._element.className=`dv-default-tab`,this._content=document.createElement(`div`),this._content.className=`dv-default-tab-content`,this.action=document.createElement(`div`),this.action.className=`dv-default-tab-action`,this.action.appendChild(nn()),this._element.appendChild(this._content),this._element.appendChild(this.action),this.render()}init(e){this._title=e.title,this.addDisposables(e.api.onDidTitleChange(e=>{this._title=e.title,this.render()}),x(this.action,`pointerdown`,e=>{e.preventDefault()}),x(this.action,`click`,t=>{t.defaultPrevented||(t.preventDefault(),e.api.close())})),this.render()}render(){this._content.textContent!==this._title&&(this._content.textContent=this._title??``)}},Cn=class{get content(){return this._content}get tab(){return this._tab}constructor(e,t,n,r){this.accessor=e,this.id=t,this.contentComponent=n,this.tabComponent=r,this._content=this.createContentComponent(this.id,n),this._tab=this.createTabComponent(this.id,r)}createTabRenderer(e){var t;let n=this.createTabComponent(this.id,this.tabComponent);return this._params&&n.init(Object.assign(Object.assign({},this._params),{tabLocation:e})),this._updateEvent&&((t=n.update)==null||t.call(n,this._updateEvent)),n}init(e){this._params=e,this.content.init(e),this.tab.init(Object.assign(Object.assign({},e),{tabLocation:`header`}))}layout(e,t){var n,r;(r=(n=this.content).layout)==null||r.call(n,e,t)}update(e){var t,n,r,i;this._updateEvent=e,(n=(t=this.content).update)==null||n.call(t,e),(i=(r=this.tab).update)==null||i.call(r,e)}dispose(){var e,t,n,r;(t=(e=this.content).dispose)==null||t.call(e),(r=(n=this.tab).dispose)==null||r.call(n)}createContentComponent(e,t){return this.accessor.options.createComponent({id:e,name:t})}createTabComponent(e,t){let n=t??this.accessor.options.defaultTabComponent;if(n){if(this.accessor.options.createTabComponent)return this.accessor.options.createTabComponent({id:e,name:n})||new Sn;console.warn(`dockview: tabComponent '${t}' was not found. falling back to the default tab.`)}return new Sn}},wn=class{constructor(e){this.accessor=e}fromJSON(e,t){let n=e.id,r=e.params,i=e.title,a=e.view,o=a?a.content.id:e.contentComponent??`unknown`,s=a?a.tab?.id:e.tabComponent,c=new Cn(this.accessor,n,o,s),l=new xn(n,o,s,this.accessor,new kt(this.accessor),t,c,{renderer:e.renderer,minimumWidth:e.minimumWidth,minimumHeight:e.minimumHeight,maximumWidth:e.maximumWidth,maximumHeight:e.maximumHeight});return l.init({title:i??n,params:r??{}}),l}},Tn=class extends A{get element(){return this._element}constructor(){super(),this._element=document.createElement(`div`),this._element.className=`dv-watermark`}init(e){}},En=class{constructor(){this._orderedList=[]}push(e){this._orderedList=[...this._orderedList.filter(t=>t!==e),e],this.update()}destroy(e){this._orderedList=this._orderedList.filter(t=>t!==e),this.update()}update(){for(let e=0;e<this._orderedList.length;e++)this._orderedList[e].setAttribute(`aria-level`,`${e}`),this._orderedList[e].style.zIndex=`calc(var(--dv-overlay-z-index, 999) + ${e*2})`}},Dn=new En,On=class e extends A{set minimumInViewportWidth(e){this.options.minimumInViewportWidth=e}set minimumInViewportHeight(e){this.options.minimumInViewportHeight=e}get element(){return this._element}get isVisible(){return this._isVisible}constructor(e){super(),this.options=e,this._element=document.createElement(`div`),this._onDidChange=new k,this.onDidChange=this._onDidChange.event,this._onDidChangeEnd=new k,this.onDidChangeEnd=this._onDidChangeEnd.event,this.addDisposables(this._onDidChange,this._onDidChangeEnd),this._element.className=`dv-resize-container`,this._isVisible=!0,this.setupResize(`top`),this.setupResize(`bottom`),this.setupResize(`left`),this.setupResize(`right`),this.setupResize(`topleft`),this.setupResize(`topright`),this.setupResize(`bottomleft`),this.setupResize(`bottomright`),this._element.appendChild(this.options.content),this.options.container.appendChild(this._element),this.setBounds(Object.assign(Object.assign(Object.assign(Object.assign({height:this.options.height,width:this.options.width},`top`in this.options&&{top:this.options.top}),`bottom`in this.options&&{bottom:this.options.bottom}),`left`in this.options&&{left:this.options.left}),`right`in this.options&&{right:this.options.right})),Dn.push(this._element)}setVisible(e){e!==this.isVisible&&(this._isVisible=e,M(this.element,`dv-hidden`,!this.isVisible))}bringToFront(){Dn.push(this._element)}setBounds(e={}){typeof e.height==`number`&&(this._element.style.height=`${e.height}px`),typeof e.width==`number`&&(this._element.style.width=`${e.width}px`),`top`in e&&typeof e.top==`number`&&(this._element.style.top=`${e.top}px`,this._element.style.bottom=`auto`,this.verticalAlignment=`top`),`bottom`in e&&typeof e.bottom==`number`&&(this._element.style.bottom=`${e.bottom}px`,this._element.style.top=`auto`,this.verticalAlignment=`bottom`),`left`in e&&typeof e.left==`number`&&(this._element.style.left=`${e.left}px`,this._element.style.right=`auto`,this.horiziontalAlignment=`left`),`right`in e&&typeof e.right==`number`&&(this._element.style.right=`${e.right}px`,this._element.style.left=`auto`,this.horiziontalAlignment=`right`);let t=this.options.container.getBoundingClientRect(),n=this._element.getBoundingClientRect(),r=Math.max(0,this.getMinimumWidth(n.width)),i=Math.max(0,this.getMinimumHeight(n.height));if(this.verticalAlignment===`top`){let e=N(n.top-t.top,-i,Math.max(0,t.height-n.height+i));this._element.style.top=`${e}px`,this._element.style.bottom=`auto`}if(this.verticalAlignment===`bottom`){let e=N(t.bottom-n.bottom,-i,Math.max(0,t.height-n.height+i));this._element.style.bottom=`${e}px`,this._element.style.top=`auto`}if(this.horiziontalAlignment===`left`){let e=N(n.left-t.left,-r,Math.max(0,t.width-n.width+r));this._element.style.left=`${e}px`,this._element.style.right=`auto`}if(this.horiziontalAlignment===`right`){let e=N(t.right-n.right,-r,Math.max(0,t.width-n.width+r));this._element.style.right=`${e}px`,this._element.style.left=`auto`}this._onDidChange.fire()}toJSON(){let e=this.options.container.getBoundingClientRect(),t=this._element.getBoundingClientRect(),n={};return this.verticalAlignment===`top`?n.top=parseFloat(this._element.style.top):this.verticalAlignment===`bottom`?n.bottom=parseFloat(this._element.style.bottom):n.top=t.top-e.top,this.horiziontalAlignment===`left`?n.left=parseFloat(this._element.style.left):this.horiziontalAlignment===`right`?n.right=parseFloat(this._element.style.right):n.left=t.left-e.left,n.width=t.width,n.height=t.height,n}setupDrag(e,t={inDragMode:!1}){let n=new j,r=()=>{let e=null,t=ce();n.value=new A({dispose:()=>{t.release()}},x(window,`pointermove`,t=>{let n=this.options.container.getBoundingClientRect(),r=t.clientX-n.left,i=t.clientY-n.top;M(this._element,`dv-resize-container-dragging`,!0);let a=this._element.getBoundingClientRect();e===null&&(e={x:t.clientX-a.left,y:t.clientY-a.top});let o=Math.max(0,this.getMinimumWidth(a.width)),s=Math.max(0,this.getMinimumHeight(a.height)),c=N(i-e.y,-s,Math.max(0,n.height-a.height+s)),l=N(e.y-i+n.height-a.height,-s,Math.max(0,n.height-a.height+s)),u=N(r-e.x,-o,Math.max(0,n.width-a.width+o)),d=N(e.x-r+n.width-a.width,-o,Math.max(0,n.width-a.width+o)),f={};c<=l?f.top=c:f.bottom=l,u<=d?f.left=u:f.right=d,this.setBounds(f)}),x(window,`pointerup`,()=>{M(this._element,`dv-resize-container-dragging`,!1),n.dispose(),this._onDidChangeEnd.fire()}))};this.addDisposables(n,x(e,`pointerdown`,e=>{if(e.defaultPrevented){e.preventDefault();return}ne(e)||r()}),x(this.options.content,`pointerdown`,e=>{e.defaultPrevented||ne(e)||e.shiftKey&&r()}),x(this.options.content,`pointerdown`,()=>{Dn.push(this._element)},!0)),t.inDragMode&&r()}setupResize(t){let n=document.createElement(`div`);n.className=`dv-resize-handle-${t}`,this._element.appendChild(n);let r=new j;this.addDisposables(r,x(n,`pointerdown`,n=>{n.preventDefault();let i=null,a=ce();r.value=new A(x(window,`pointermove`,n=>{let r=this.options.container.getBoundingClientRect(),a=this._element.getBoundingClientRect(),o=n.clientY-r.top,s=n.clientX-r.left;i===null&&(i={originalY:o,originalHeight:a.height,originalX:s,originalWidth:a.width});let c,l,u,d,f,p,m=()=>{c=N(o,0,i.originalY+i.originalHeight>r.height?Math.max(0,r.height-e.MINIMUM_HEIGHT):Math.max(0,i.originalY+i.originalHeight-e.MINIMUM_HEIGHT)),u=i.originalY+i.originalHeight-c,l=r.height-c-u},h=()=>{c=i.originalY-i.originalHeight;let t=c<0&&typeof this.options.minimumInViewportHeight==`number`?-c+this.options.minimumInViewportHeight:e.MINIMUM_HEIGHT,n=r.height-Math.max(0,c);u=N(o-c,t,n),l=r.height-c-u},g=()=>{d=N(s,0,i.originalX+i.originalWidth>r.width?Math.max(0,r.width-e.MINIMUM_WIDTH):Math.max(0,i.originalX+i.originalWidth-e.MINIMUM_WIDTH)),p=i.originalX+i.originalWidth-d,f=r.width-d-p},_=()=>{d=i.originalX-i.originalWidth;let t=d<0&&typeof this.options.minimumInViewportWidth==`number`?-d+this.options.minimumInViewportWidth:e.MINIMUM_WIDTH,n=r.width-Math.max(0,d);p=N(s-d,t,n),f=r.width-d-p};switch(t){case`top`:m();break;case`bottom`:h();break;case`left`:g();break;case`right`:_();break;case`topleft`:m(),g();break;case`topright`:m(),_();break;case`bottomleft`:h(),g();break;case`bottomright`:h(),_();break}let v={};c<=l?v.top=c:v.bottom=l,d<=f?v.left=d:v.right=f,v.height=u,v.width=p,this.setBounds(v)}),{dispose:()=>{a.release()}},x(window,`pointerup`,()=>{r.dispose(),this._onDidChangeEnd.fire()}))}))}getMinimumWidth(e){return typeof this.options.minimumInViewportWidth==`number`?e-this.options.minimumInViewportWidth:0}getMinimumHeight(e){return typeof this.options.minimumInViewportHeight==`number`?e-this.options.minimumInViewportHeight:0}dispose(){Dn.destroy(this._element),this._element.remove(),super.dispose()}},On.MINIMUM_HEIGHT=20,On.MINIMUM_WIDTH=20,kn=class extends A{constructor(e,t){super(),this.group=e,this.overlay=t,this.addDisposables(t)}position(e){this.overlay.setBounds(e)}},An=100,jn={left:100,top:100,width:300,height:300},Mn=100,Nn=class{constructor(){this.cache=new Map,this.currentFrameId=0,this.rafId=null}getPosition(e){let t=this.cache.get(e);if(t&&t.frameId===this.currentFrameId)return t.rect;this.scheduleFrameUpdate();let n=ie(e);return this.cache.set(e,{rect:n,frameId:this.currentFrameId}),n}invalidate(){this.currentFrameId++}scheduleFrameUpdate(){this.rafId||=requestAnimationFrame(()=>{this.currentFrameId++,this.rafId=null})}},Pn=class extends A{constructor(e,t){super(),this.element=e,this.accessor=t,this.map={},this._disposed=!1,this.positionCache=new Nn,this.pendingUpdates=new Set,this.addDisposables(rt.from(()=>{for(let e of Object.values(this.map))e.disposable.dispose(),e.destroy.dispose();this._disposed=!0}))}updateAllPositions(){if(!this._disposed){this.positionCache.invalidate();for(let e of Object.values(this.map))e.panel.api.isVisible&&e.resize&&e.resize()}}detatch(e){if(this.map[e.api.id]){let{disposable:t,destroy:n}=this.map[e.api.id];return t.dispose(),n.dispose(),delete this.map[e.api.id],!0}return!1}attach(e){let{panel:t,referenceContainer:n}=e;if(!this.map[t.api.id]){let e=Be();e.className=`dv-render-overlay`,e.style.visibility=`hidden`,this.map[t.api.id]={panel:t,disposable:rt.NONE,destroy:rt.NONE,element:e}}let r=this.map[t.api.id].element;t.view.content.element.parentElement!==r&&r.appendChild(t.view.content.element),r.parentElement!==this.element&&this.element.appendChild(r);let i=()=>{let e=t.api.id;this.pendingUpdates.has(e)||(this.pendingUpdates.add(e),requestAnimationFrame(()=>{if(this.pendingUpdates.delete(e),this.isDisposed||!this.map[e])return;let i=this.positionCache.getPosition(n.element),a=this.positionCache.getPosition(this.element),o=i.left-a.left,s=i.top-a.top,c=i.width,l=i.height;r.style.left=`${o}px`,r.style.top=`${s}px`,r.style.width=`${c}px`,r.style.height=`${l}px`,r.style.visibility===`hidden`&&(r.style.visibility=``),M(r,`dv-render-overlay-float`,t.group.api.location.type===`floating`)}))},a=()=>{t.api.isVisible&&(this.positionCache.invalidate(),i()),r.style.display=t.api.isVisible?``:`none`},o=new j,s=()=>{t.api.location.type===`floating`?queueMicrotask(()=>{let e=this.accessor.floatingGroups.find(e=>e.group===t.api.group);if(!e)return;let n=e.overlay.element,i=()=>{let e=Number(n.getAttribute(`aria-level`));r.style.zIndex=`calc(var(--dv-overlay-z-index, 999) + ${e*2+1})`},a=new MutationObserver(()=>{i()});o.value=rt.from(()=>a.disconnect()),a.observe(n,{attributeFilter:[`aria-level`],attributes:!0}),i()}):r.style.zIndex=``},c=new A(o,new jt(r,{onDragEnd:e=>{n.dropTarget.dnd.onDragEnd(e)},onDragEnter:e=>{n.dropTarget.dnd.onDragEnter(e)},onDragLeave:e=>{n.dropTarget.dnd.onDragLeave(e)},onDrop:e=>{n.dropTarget.dnd.onDrop(e)},onDragOver:e=>{n.dropTarget.dnd.onDragOver(e)}}),t.api.onDidVisibilityChange(()=>{a()}),t.api.onDidDimensionsChange(()=>{t.api.isVisible&&i()}),t.api.onDidLocationChange(()=>{s()}));return this.map[t.api.id].destroy=rt.from(()=>{var e;t.view.content.element.parentElement===r&&r.removeChild(t.view.content.element),(e=r.parentElement)==null||e.removeChild(r)}),s(),queueMicrotask(()=>{this.isDisposed||a()}),this.map[t.api.id].disposable.dispose(),this.map[t.api.id].disposable=c,this.map[t.api.id].resize=i,r}},Fn=class extends A{get window(){return this._window?.value??null}constructor(e,t,n){super(),this.target=e,this.className=t,this.options=n,this._onWillClose=new k,this.onWillClose=this._onWillClose.event,this._onDidClose=new k,this.onDidClose=this._onDidClose.event,this._window=null,this.addDisposables(this._onWillClose,this._onDidClose,{dispose:()=>{this.close()}})}dimensions(){if(!this._window)return null;let e=this._window.value.screenX;return{top:this._window.value.screenY,left:e,width:this._window.value.innerWidth,height:this._window.value.innerHeight}}close(){var e,t;this._window&&(this._onWillClose.fire(),(t=(e=this.options).onWillClose)==null||t.call(e,{id:this.target,window:this._window.value}),this._window.disposable.dispose(),this._window=null,this._onDidClose.fire())}open(){var e,t;return Ve(this,void 0,void 0,function*(){if(this._window)throw Error(`instance of popout window is already open`);let n=`${this.options.url}`,r=Object.entries({top:this.options.top,left:this.options.left,width:this.options.width,height:this.options.height}).map(([e,t])=>`${e}=${t}`).join(`,`),i=window.open(n,this.target,r);if(!i)return null;let a=new A;this._window={value:i,disposable:a},a.addDisposables(rt.from(()=>{i.close()}),x(window,`beforeunload`,()=>{this.close()}));let o=this.createPopoutWindowContainer();return this.className&&o.classList.add(this.className),(t=(e=this.options).onDidOpen)==null||t.call(e,{id:this.target,window:i}),new Promise((e,t)=>{i.addEventListener(`unload`,e=>{}),i.addEventListener(`load`,()=>{try{let t=i.document;t.title=document.title,t.body.appendChild(o),re(t,window.document.styleSheets),x(i,`beforeunload`,()=>{this.close()}),e(o)}catch(e){t(e)}})})})}createPopoutWindowContainer(){let e=document.createElement(`div`);return e.classList.add(`dv-popout-window`),e.id=`dv-popout-window`,e.style.position=`absolute`,e.style.width=`100%`,e.style.height=`100%`,e.style.top=`0px`,e.style.left=`0px`,e}},In=class extends A{constructor(e){super(),this.accessor=e,this.init()}init(){let e=new Set,t=new Set;this.addDisposables(this.accessor.onDidAddPanel(t=>{if(e.has(t.api.id))throw Error(`dockview: Invalid event sequence. [onDidAddPanel] called for panel ${t.api.id} but panel already exists`);e.add(t.api.id)}),this.accessor.onDidRemovePanel(t=>{if(e.has(t.api.id))e.delete(t.api.id);else throw Error(`dockview: Invalid event sequence. [onDidRemovePanel] called for panel ${t.api.id} but panel does not exists`)}),this.accessor.onDidAddGroup(e=>{if(t.has(e.api.id))throw Error(`dockview: Invalid event sequence. [onDidAddGroup] called for group ${e.api.id} but group already exists`);t.add(e.api.id)}),this.accessor.onDidRemoveGroup(e=>{if(t.has(e.api.id))t.delete(e.api.id);else throw Error(`dockview: Invalid event sequence. [onDidRemoveGroup] called for group ${e.api.id} but group does not exists`)}))}},Ln=class extends A{constructor(e){super(),this.root=e,this._active=null,this._activeDisposable=new j,this._element=document.createElement(`div`),this._element.className=`dv-popover-anchor`,this._element.style.position=`relative`,this.root.prepend(this._element),this.addDisposables(rt.from(()=>{this.close()}),this._activeDisposable)}openPopover(e,t){this.close();let n=document.createElement(`div`);n.style.position=`absolute`,n.style.zIndex=t.zIndex??`var(--dv-overlay-z-index)`,n.appendChild(e);let r=this._element.getBoundingClientRect(),i=r.left,a=r.top;n.style.top=`${t.y-a}px`,n.style.left=`${t.x-i}px`,this._element.appendChild(n),this._active=n,this._activeDisposable.value=new A(x(window,`pointerdown`,e=>{let t=e.target;if(!(t instanceof HTMLElement))return;let r=t;for(;r&&r!==n;)r=r?.parentElement??null;r||this.close()}),x(window,`resize`,()=>{this.close()})),requestAnimationFrame(()=>{T(n,this.root)})}close(){this._active&&=(this._active.remove(),this._activeDisposable.dispose(),null)}},Rn=class extends A{get disabled(){return this._disabled}set disabled(e){var t;this.disabled!==e&&(this._disabled=e,e&&((t=this.model)==null||t.clear()))}get model(){if(!this.disabled)return{clear:()=>{var e;this._model&&((e=this._model.root.parentElement)==null||e.removeChild(this._model.root)),this._model=void 0},exists:()=>!!this._model,getElements:(e,t)=>{let n=this._outline!==t;if(this._outline=t,this._model)return this._model.changed=n,this._model;let r=this.createContainer(),i=this.createAnchor();if(this._model={root:r,overlay:i,changed:n},r.appendChild(i),this.element.appendChild(r),e?.target instanceof HTMLElement){let t=e.target.getBoundingClientRect(),n=this.element.getBoundingClientRect();i.style.left=`${t.left-n.left}px`,i.style.top=`${t.top-n.top}px`}return this._model}}}constructor(e,t){super(),this.element=e,this._disabled=!1,this._disabled=t.disabled,this.addDisposables(rt.from(()=>{var e;(e=this.model)==null||e.clear()}))}createContainer(){let e=document.createElement(`div`);return e.className=`dv-drop-target-container`,e}createAnchor(){let e=document.createElement(`div`);return e.className=`dv-drop-target-anchor`,e.style.visibility=`hidden`,e}},zn={activationSize:{type:`pixels`,value:10},size:{type:`pixels`,value:20}},Bn=class extends Tt{get orientation(){return this.gridview.orientation}get totalPanels(){return this.panels.length}get panels(){return this.groups.flatMap(e=>e.panels)}get options(){return this._options}get activePanel(){let e=this.activeGroup;if(e)return e.activePanel}get renderer(){return this.options.defaultRenderer??`onlyWhenVisible`}get defaultHeaderPosition(){return this.options.defaultHeaderPosition??`top`}get api(){return this._api}get floatingGroups(){return this._floatingGroups}get popoutRestorationPromise(){return this._popoutRestorationPromise}constructor(e,t){super(e,{proportionalLayout:!0,orientation:F.HORIZONTAL,styles:t.hideBorders?{separatorBorder:`transparent`}:void 0,disableAutoResizing:t.disableAutoResizing,locked:t.locked,margin:t.theme?.gap??0,className:t.className}),this.nextGroupId=dt(),this._deserializer=new wn(this),this._watermark=null,this._onWillDragPanel=new k,this.onWillDragPanel=this._onWillDragPanel.event,this._onWillDragGroup=new k,this.onWillDragGroup=this._onWillDragGroup.event,this._onDidDrop=new k,this.onDidDrop=this._onDidDrop.event,this._onWillDrop=new k,this.onWillDrop=this._onWillDrop.event,this._onWillShowOverlay=new k,this.onWillShowOverlay=this._onWillShowOverlay.event,this._onUnhandledDragOverEvent=new k,this.onUnhandledDragOverEvent=this._onUnhandledDragOverEvent.event,this._onDidRemovePanel=new k,this.onDidRemovePanel=this._onDidRemovePanel.event,this._onDidAddPanel=new k,this.onDidAddPanel=this._onDidAddPanel.event,this._onDidPopoutGroupSizeChange=new k,this.onDidPopoutGroupSizeChange=this._onDidPopoutGroupSizeChange.event,this._onDidPopoutGroupPositionChange=new k,this.onDidPopoutGroupPositionChange=this._onDidPopoutGroupPositionChange.event,this._onDidOpenPopoutWindowFail=new k,this.onDidOpenPopoutWindowFail=this._onDidOpenPopoutWindowFail.event,this._onDidLayoutFromJSON=new k,this.onDidLayoutFromJSON=this._onDidLayoutFromJSON.event,this._onDidActivePanelChange=new k({replay:!0}),this.onDidActivePanelChange=this._onDidActivePanelChange.event,this._onDidMovePanel=new k,this.onDidMovePanel=this._onDidMovePanel.event,this._onDidMaximizedGroupChange=new k,this.onDidMaximizedGroupChange=this._onDidMaximizedGroupChange.event,this._floatingGroups=[],this._popoutGroups=[],this._popoutRestorationPromise=Promise.resolve(),this._onDidRemoveGroup=new k,this.onDidRemoveGroup=this._onDidRemoveGroup.event,this._onDidAddGroup=new k,this.onDidAddGroup=this._onDidAddGroup.event,this._onDidOptionsChange=new k,this.onDidOptionsChange=this._onDidOptionsChange.event,this._onDidActiveGroupChange=new k,this.onDidActiveGroupChange=this._onDidActiveGroupChange.event,this._moving=!1,this._options=t,this.popupService=new Ln(this.element),this._themeClassnames=new lt(this.element),this._api=new kt(this),this.rootDropTargetContainer=new Rn(this.element,{disabled:!0}),this.overlayRenderContainer=new Pn(this.gridview.element,this),this._rootDropTarget=new Lt(this.element,{className:`dv-drop-target-edge`,canDisplayOverlay:(e,t)=>{let n=y();if(n)return n.viewId===this.id?t===`center`?this.gridview.length===0:!0:!1;if(t===`center`&&this.gridview.length!==0)return!1;let r=new sn(e,`edge`,t,y);return this._onUnhandledDragOverEvent.fire(r),r.isAccepted},acceptedTargetZones:[`top`,`bottom`,`left`,`right`,`center`],overlayModel:t.rootOverlayModel??zn,getOverrideTarget:()=>this.rootDropTargetContainer?.model}),this.updateDropTargetModel(t),M(this.gridview.element,`dv-dockview`,!0),M(this.element,`dv-debug`,!!t.debug),this.updateTheme(),this.updateWatermark(),t.debug&&this.addDisposables(new In(this)),this.addDisposables(this.rootDropTargetContainer,this.overlayRenderContainer,this._onWillDragPanel,this._onWillDragGroup,this._onWillShowOverlay,this._onDidActivePanelChange,this._onDidAddPanel,this._onDidRemovePanel,this._onDidLayoutFromJSON,this._onDidDrop,this._onWillDrop,this._onDidMovePanel,this._onDidMovePanel.event(()=>{this.debouncedUpdateAllPositions()}),this._onDidAddGroup,this._onDidRemoveGroup,this._onDidActiveGroupChange,this._onUnhandledDragOverEvent,this._onDidMaximizedGroupChange,this._onDidOptionsChange,this._onDidPopoutGroupSizeChange,this._onDidPopoutGroupPositionChange,this._onDidOpenPopoutWindowFail,this.onDidViewVisibilityChangeMicroTaskQueue(()=>{this.updateWatermark()}),this.onDidAdd(e=>{this._moving||this._onDidAddGroup.fire(e)}),this.onDidRemove(e=>{this._moving||this._onDidRemoveGroup.fire(e)}),this.onDidActiveChange(e=>{this._moving||this._onDidActiveGroupChange.fire(e)}),this.onDidMaximizedChange(e=>{this._onDidMaximizedGroupChange.fire({group:e.panel,isMaximized:e.isMaximized})}),Xe.any(this.onDidAdd,this.onDidRemove)(()=>{this.updateWatermark()}),Xe.any(this.onDidAddPanel,this.onDidRemovePanel,this.onDidAddGroup,this.onDidRemove,this.onDidMovePanel,this.onDidActivePanelChange,this.onDidPopoutGroupPositionChange,this.onDidPopoutGroupSizeChange)(()=>{this._bufferOnDidLayoutChange.fire()}),rt.from(()=>{for(let e of[...this._floatingGroups])e.dispose();for(let e of[...this._popoutGroups])e.disposable.dispose()}),this._rootDropTarget,this._rootDropTarget.onWillShowOverlay(e=>{this.gridview.length>0&&e.position===`center`||this._onWillShowOverlay.fire(new Xt(e,{kind:`edge`,panel:void 0,api:this._api,group:void 0,getData:y}))}),this._rootDropTarget.onDrop(e=>{let t=new un({nativeEvent:e.nativeEvent,position:e.position,panel:void 0,api:this._api,group:void 0,getData:y,kind:`edge`});if(this._onWillDrop.fire(t),t.defaultPrevented)return;let n=y();n?this.moveGroupOrPanel({from:{groupId:n.groupId,panelId:n.panelId??void 0},to:{group:this.orthogonalize(e.position),position:`center`}}):this._onDidDrop.fire(new ln({nativeEvent:e.nativeEvent,position:e.position,panel:void 0,api:this._api,group:void 0,getData:y}))}),this._rootDropTarget)}setVisible(e,t){switch(e.api.location.type){case`grid`:super.setVisible(e,t);break;case`floating`:{let n=this.floatingGroups.find(t=>t.group===e);n&&(n.overlay.setVisible(t),e.api._onDidVisibilityChange.fire({isVisible:t}));break}case`popout`:console.warn(`dockview: You cannot hide a group that is in a popout window`);break}}addPopoutGroup(e,t){if(e instanceof xn&&e.group.size===1)return this.addPopoutGroup(e.group,t);let n=le(this.gridview.element),r=this.element;function i(){return t?.position?t.position:e instanceof vn?e.element.getBoundingClientRect():e.group?e.group.element.getBoundingClientRect():r.getBoundingClientRect()}let a=i(),o=t?.overridePopoutGroup?.id??this.getNextGroupId(),s=new Fn(`${this.id}-${o}`,n??``,{url:t?.popoutUrl??this.options?.popoutUrl??`/popout.html`,left:window.screenX+a.left,top:window.screenY+a.top,width:a.width,height:a.height,onDidOpen:t?.onDidOpen,onWillClose:t?.onWillClose}),c=new A(s,s.onDidClose(()=>{c.dispose()}));return s.open().then(n=>{if(s.isDisposed)return!1;let r=t?.referenceGroup?t.referenceGroup:e instanceof xn?e.group:e,i=e.api.location.type,a=r.element.parentElement!==null,l;if(a?t?.overridePopoutGroup?l=t.overridePopoutGroup:(l=this.createGroup({id:o}),n&&this._onDidAddGroup.fire(l)):l=r,n===null)return console.error(`dockview: failed to create popout. perhaps you need to allow pop-ups for this website`),c.dispose(),this._onDidOpenPopoutWindowFail.fire(),this.movingLock(()=>He({from:l,to:r})),r.api.isVisible||r.api.setVisible(!0),!1;let u=document.createElement(`div`);u.className=`dv-overlay-render-container`;let d=new Pn(u,this);l.model.renderContainer=d,l.layout(s.window.innerWidth,s.window.innerHeight);let f;if(!t?.overridePopoutGroup&&a)if(e instanceof xn)this.movingLock(()=>{let t=r.model.removePanel(e);l.model.openPanel(t)});else switch(this.movingLock(()=>He({from:r,to:l})),i){case`grid`:r.api.setVisible(!1);break;case`floating`:case`popout`:f=this._floatingGroups.find(t=>t.group.api.id===e.api.id)?.overlay.toJSON(),this.removeGroup(r);break}n.classList.add(`dv-dockview`),n.style.overflow=`hidden`,n.appendChild(u),n.appendChild(l.element);let p=document.createElement(`div`),m=new Rn(p,{disabled:this.rootDropTargetContainer.disabled});n.appendChild(p),l.model.dropTargetContainer=m,l.model.location={type:`popout`,getWindow:()=>s.window,popoutUrl:t?.popoutUrl},a&&e.api.location.type===`grid`&&e.api.setVisible(!1),this.doSetGroupAndPanelActive(l),c.addDisposables(l.api.onDidActiveChange(e=>{var t;e.isActive&&((t=s.window)==null||t.focus())}),l.api.onWillFocus(()=>{var e;(e=s.window)==null||e.focus()}));let h,g=a&&r&&this.getPanel(r.id),_={window:s,popoutGroup:l,referenceGroup:g?r.id:void 0,disposable:{dispose:()=>(c.dispose(),h)}},v=de(s.window);return c.addDisposables(v,w(s.window,()=>{this._onDidPopoutGroupSizeChange.fire({width:s.window.innerWidth,height:s.window.innerHeight,group:l})}),v.event(()=>{this._onDidPopoutGroupPositionChange.fire({screenX:s.window.screenX,screenY:s.window.screenX,group:l})}),x(s.window,`resize`,()=>{l.layout(s.window.innerWidth,s.window.innerHeight)}),d,rt.from(()=>{if(!this.isDisposed){if(a&&this.getPanel(r.id))this.movingLock(()=>He({from:l,to:r})),r.api.isVisible||r.api.setVisible(!0),this.getPanel(l.id)&&this.doRemoveGroup(l,{skipPopoutAssociated:!0});else if(this.getPanel(l.id)){if(l.model.renderContainer=this.overlayRenderContainer,l.model.dropTargetContainer=this.rootDropTargetContainer,h=l,!this._popoutGroups.find(e=>e.popoutGroup===l))return;f?this.addFloatingGroup(l,{height:f.height,width:f.width,position:f}):(this.doRemoveGroup(l,{skipDispose:!0,skipActive:!0,skipPopoutReturn:!0}),l.model.location={type:`grid`},this.movingLock(()=>{this.doAddGroup(l,[0])})),this.doSetGroupAndPanelActive(l)}}})),this._popoutGroups.push(_),this.updateWatermark(),!0}).catch(e=>(console.error(`dockview: failed to create popout.`,e),!1))}addFloatingGroup(e,t){let n;if(e instanceof xn)n=this.createGroup(),this._onDidAddGroup.fire(n),this.movingLock(()=>this.removePanel(e,{removeEmptyGroup:!0,skipDispose:!0,skipSetActiveGroup:!0})),this.movingLock(()=>n.model.openPanel(e,{skipSetGroupActive:!0}));else{n=e;let r=this._popoutGroups.find(e=>e.popoutGroup===n)?.referenceGroup,i=r?this.getPanel(r):void 0;typeof t?.skipRemoveGroup==`boolean`&&t.skipRemoveGroup||(i?(this.movingLock(()=>He({from:e,to:i})),this.doRemoveGroup(e,{skipPopoutReturn:!0,skipPopoutAssociated:!0}),this.doRemoveGroup(i,{skipDispose:!0}),n=i):this.doRemoveGroup(e,{skipDispose:!0,skipPopoutReturn:!0,skipPopoutAssociated:!1}))}function r(){if(t?.position){let e={};return`left`in t.position?e.left=Math.max(t.position.left,0):`right`in t.position?e.right=Math.max(t.position.right,0):e.left=jn.left,`top`in t.position?e.top=Math.max(t.position.top,0):`bottom`in t.position?e.bottom=Math.max(t.position.bottom,0):e.top=jn.top,typeof t.width==`number`?e.width=Math.max(t.width,0):e.width=jn.width,typeof t.height==`number`?e.height=Math.max(t.height,0):e.height=jn.height,e}return{left:typeof t?.x==`number`?Math.max(t.x,0):jn.left,top:typeof t?.y==`number`?Math.max(t.y,0):jn.top,width:typeof t?.width==`number`?Math.max(t.width,0):jn.width,height:typeof t?.height==`number`?Math.max(t.height,0):jn.height}}let i=r(),a=new On(Object.assign(Object.assign({container:this.gridview.element,content:n.element},i),{minimumInViewportWidth:this.options.floatingGroupBounds===`boundedWithinViewport`?void 0:this.options.floatingGroupBounds?.minimumWidthWithinViewport??An,minimumInViewportHeight:this.options.floatingGroupBounds===`boundedWithinViewport`?void 0:this.options.floatingGroupBounds?.minimumHeightWithinViewport??An})),o=n.element.querySelector(`.dv-void-container`);if(!o)throw Error(`dockview: failed to find drag handle`);a.setupDrag(o,{inDragMode:typeof t?.inDragMode==`boolean`?t.inDragMode:!1});let s=new kn(n,a),c=new A(n.api.onDidActiveChange(e=>{e.isActive&&a.bringToFront()}),ee(n.element,e=>{let{width:t,height:r}=e.contentRect;n.layout(t,r)}));s.addDisposables(a.onDidChange(()=>{n.layout(n.width,n.height)}),a.onDidChangeEnd(()=>{this._bufferOnDidLayoutChange.fire()}),n.onDidChange(e=>{a.setBounds({height:e?.height,width:e?.width})}),{dispose:()=>{c.dispose(),_e(this._floatingGroups,s),n.model.location={type:`grid`},this.updateWatermark()}}),this._floatingGroups.push(s),n.model.location={type:`floating`},t?.skipActiveGroup||this.doSetGroupAndPanelActive(n),this.updateWatermark()}orthogonalize(e,t){switch(this.gridview.normalize(),e){case`top`:case`bottom`:this.gridview.orientation===F.HORIZONTAL&&this.gridview.insertOrthogonalSplitviewAtRoot();break;case`left`:case`right`:this.gridview.orientation===F.VERTICAL&&this.gridview.insertOrthogonalSplitviewAtRoot();break}switch(e){case`top`:case`left`:case`center`:return this.createGroupAtLocation([0],void 0,t);case`bottom`:case`right`:return this.createGroupAtLocation([this.gridview.length],void 0,t);default:throw Error(`dockview: unsupported position ${e}`)}}updateOptions(e){if(super.updateOptions(e),`floatingGroupBounds`in e)for(let t of this._floatingGroups){switch(e.floatingGroupBounds){case`boundedWithinViewport`:t.overlay.minimumInViewportHeight=void 0,t.overlay.minimumInViewportWidth=void 0;break;case void 0:t.overlay.minimumInViewportHeight=An,t.overlay.minimumInViewportWidth=An;break;default:t.overlay.minimumInViewportHeight=e.floatingGroupBounds?.minimumHeightWithinViewport,t.overlay.minimumInViewportWidth=e.floatingGroupBounds?.minimumWidthWithinViewport}t.overlay.setBounds()}this.updateDropTargetModel(e);let t=this.options.disableDnd;if(this._options=Object.assign(Object.assign({},this.options),e),t!==this.options.disableDnd&&this.updateDragAndDropState(),`theme`in e&&this.updateTheme(),`createRightHeaderActionComponent`in e||`createLeftHeaderActionComponent`in e||`createPrefixHeaderActionComponent`in e)for(let e of this.groups)e.model.updateHeaderActions();this.layout(this.gridview.width,this.gridview.height,!0)}layout(e,t,n){if(super.layout(e,t,n),this._floatingGroups)for(let e of this._floatingGroups)e.overlay.setBounds()}updateDragAndDropState(){for(let e of this.groups)e.model.updateDragAndDropState()}focus(){var e;(e=this.activeGroup)==null||e.focus()}getGroupPanel(e){return this.panels.find(t=>t.id===e)}setActivePanel(e){e.group.model.openPanel(e),this.doSetGroupAndPanelActive(e.group)}moveToNext(e={}){if(!e.group){if(!this.activeGroup)return;e.group=this.activeGroup}if(e.includePanel&&e.group&&e.group.activePanel!==e.group.panels[e.group.panels.length-1]){e.group.model.moveToNext({suppressRoll:!0});return}let t=D(e.group.element),n=this.gridview.next(t)?.view;this.doSetGroupAndPanelActive(n)}moveToPrevious(e={}){if(!e.group){if(!this.activeGroup)return;e.group=this.activeGroup}if(e.includePanel&&e.group&&e.group.activePanel!==e.group.panels[0]){e.group.model.moveToPrevious({suppressRoll:!0});return}let t=D(e.group.element),n=this.gridview.previous(t)?.view;n&&this.doSetGroupAndPanelActive(n)}toJSON(){let e=this.gridview.serialize(),t=this.panels.reduce((e,t)=>(e[t.id]=t.toJSON(),e),{}),n=this._floatingGroups.map(e=>({data:e.group.toJSON(),position:e.overlay.toJSON()})),r=this._popoutGroups.map(e=>({data:e.popoutGroup.toJSON(),gridReferenceGroup:e.referenceGroup,position:e.window.dimensions(),url:e.popoutGroup.api.location.type===`popout`?e.popoutGroup.api.location.popoutUrl:void 0})),i={grid:e,panels:t,activeGroup:this.activeGroup?.id};return n.length>0&&(i.floatingGroups=n),r.length>0&&(i.popoutGroups=r),i}fromJSON(e,t){let n=new Map,r;if(t?.reuseExistingPanels){r=this.createGroup(),this._groups.delete(r.api.id);let t=Object.keys(e.panels);for(let e of this.panels)t.includes(e.api.id)&&n.set(e.api.id,e);this.movingLock(()=>{Array.from(n.values()).forEach(e=>{this.moveGroupOrPanel({from:{groupId:e.api.group.api.id,panelId:e.api.id},to:{group:r,position:`center`},keepEmptyGroups:!0})})})}if(this.clear(),typeof e!=`object`||!e)throw Error(`dockview: serialized layout must be a non-null object`);let{grid:i,panels:a,activeGroup:o}=e;if(i.root.type!==`branch`||!Array.isArray(i.root.data))throw Error(`dockview: root must be of type branch`);try{let t=this.width,s=this.height,c=e=>{let{id:t,locked:i,hideHeader:o,headerPosition:s,views:c,activeView:l}=e;if(typeof t!=`string`)throw Error(`dockview: group id must be of type string`);let u=this.createGroup({id:t,locked:!!i,hideHeader:!!o,headerPosition:s});this._onDidAddGroup.fire(u);let d=[];for(let e of c){let t=n.get(e);if(r&&t)this.movingLock(()=>{r.model.removePanel(t)}),d.push(t),t.updateFromStateModel(a[e]);else{let t=this._deserializer.fromJSON(a[e],u);d.push(t)}}for(let e=0;e<c.length;e++){let t=d[e],r=typeof l==`string`&&l===t.id;n.has(t.api.id)?this.movingLock(()=>{u.model.openPanel(t,{skipSetActive:!r,skipSetGroupActive:!0})}):u.model.openPanel(t,{skipSetActive:!r,skipSetGroupActive:!0})}return!u.activePanel&&u.panels.length>0&&u.model.openPanel(u.panels[u.panels.length-1],{skipSetGroupActive:!0}),u};this.gridview.deserialize(i,{fromJSON:e=>c(e.data)}),this.layout(t,s,!0);let l=e.floatingGroups??[];for(let e of l){let{data:t,position:n}=e,r=c(t);this.addFloatingGroup(r,{position:n,width:n.width,height:n.height,skipRemoveGroup:!0,inDragMode:!1})}let u=e.popoutGroups??[],d=[];u.forEach((e,t)=>{let{data:n,position:r,gridReferenceGroup:i,url:a}=e,o=c(n),s=new Promise(e=>{setTimeout(()=>{this.addPopoutGroup(o,{position:r??void 0,overridePopoutGroup:i?o:void 0,referenceGroup:i?this.getPanel(i):void 0,popoutUrl:a}),e()},t*Mn)});d.push(s)}),this._popoutRestorationPromise=Promise.all(d).then(()=>void 0);for(let e of this._floatingGroups)e.overlay.setBounds();if(typeof o==`string`){let e=this.getPanel(o);e&&this.doSetGroupAndPanelActive(e)}}catch(e){console.error(`dockview: failed to deserialize layout. Reverting changes`,e);for(let e of this.groups)for(let t of e.panels)this.removePanel(t,{removeEmptyGroup:!1,skipDispose:!1});for(let e of this.groups)e.dispose(),this._groups.delete(e.id),this._onDidRemoveGroup.fire(e);for(let e of[...this._floatingGroups])e.dispose();throw this.clear(),e}this.updateWatermark(),this.debouncedUpdateAllPositions(),this._onDidLayoutFromJSON.fire()}clear(){let e=Array.from(this._groups.values()).map(e=>e.value),t=!!this.activeGroup;for(let t of e)this.removeGroup(t,{skipActive:!0});t&&this.doSetGroupAndPanelActive(void 0),this.gridview.clear()}closeAllGroups(){for(let e of this._groups.entries()){let[t,n]=e;n.value.model.closeAllPanels()}}addPanel(e){if(this.panels.find(t=>t.id===e.id))throw Error(`dockview: panel with id ${e.id} already exists`);let t;if(e.position&&e.floating)throw Error(`dockview: you can only provide one of: position, floating as arguments to .addPanel(...)`);let n={width:e.initialWidth,height:e.initialHeight},r;if(e.position)if(Ie(e.position)){let n=typeof e.position.referencePanel==`string`?this.getGroupPanel(e.position.referencePanel):e.position.referencePanel;if(r=e.position.index,!n)throw Error(`dockview: referencePanel '${e.position.referencePanel}' does not exist`);t=this.findGroup(n)}else if(Le(e.position)){if(t=typeof e.position.referenceGroup==`string`?this._groups.get(e.position.referenceGroup)?.value:e.position.referenceGroup,r=e.position.index,!t)throw Error(`dockview: referenceGroup '${e.position.referenceGroup}' does not exist`)}else{let t=this.orthogonalize(Ae(e.position.direction)),i=this.createPanel(e,t);return t.model.openPanel(i,{skipSetActive:e.inactive,skipSetGroupActive:e.inactive,index:r}),e.inactive||this.doSetGroupAndPanelActive(t),t.api.setSize({height:n?.height,width:n?.width}),i}else t=this.activeGroup;let i;if(t){let a=Ee(e.position?.direction||`within`);if(e.floating){let t=this.createGroup();this._onDidAddGroup.fire(t);let n=typeof e.floating==`object`&&e.floating!==null?e.floating:{};this.addFloatingGroup(t,Object.assign(Object.assign({},n),{inDragMode:!1,skipRemoveGroup:!0,skipActiveGroup:!0})),i=this.createPanel(e,t),t.model.openPanel(i,{skipSetActive:e.inactive,skipSetGroupActive:e.inactive,index:r})}else if(t.api.location.type===`floating`||a===`center`)i=this.createPanel(e,t),t.model.openPanel(i,{skipSetActive:e.inactive,skipSetGroupActive:e.inactive,index:r}),t.api.setSize({width:n?.width,height:n?.height}),e.inactive||this.doSetGroupAndPanelActive(t);else{let o=D(t.element),s=Se(this.gridview.orientation,o,a),c=this.createGroupAtLocation(s,this.orientationAtLocation(s)===F.VERTICAL?n?.height:n?.width);i=this.createPanel(e,c),c.model.openPanel(i,{skipSetActive:e.inactive,skipSetGroupActive:e.inactive,index:r}),e.inactive||this.doSetGroupAndPanelActive(c)}}else if(e.floating){let t=this.createGroup();this._onDidAddGroup.fire(t);let n=typeof e.floating==`object`&&e.floating!==null?e.floating:{};this.addFloatingGroup(t,Object.assign(Object.assign({},n),{inDragMode:!1,skipRemoveGroup:!0,skipActiveGroup:!0})),i=this.createPanel(e,t),t.model.openPanel(i,{skipSetActive:e.inactive,skipSetGroupActive:e.inactive,index:r})}else{let t=this.createGroupAtLocation([0],this.gridview.orientation===F.VERTICAL?n?.height:n?.width);i=this.createPanel(e,t),t.model.openPanel(i,{skipSetActive:e.inactive,skipSetGroupActive:e.inactive,index:r}),e.inactive||this.doSetGroupAndPanelActive(t)}return i}removePanel(e,t={removeEmptyGroup:!0}){let n=e.group;if(!n)throw Error(`dockview: cannot remove panel ${e.id}. it's missing a group.`);n.model.removePanel(e,{skipSetActiveGroup:t.skipSetActiveGroup}),t.skipDispose||(e.group.model.renderContainer.detatch(e),e.dispose()),n.size===0&&t.removeEmptyGroup&&this.removeGroup(n,{skipActive:t.skipSetActiveGroup})}createWatermarkComponent(){return this.options.createWatermarkComponent?this.options.createWatermarkComponent():new Tn}updateWatermark(){var e,t;if(this.groups.filter(e=>e.api.location.type===`grid`&&e.api.isVisible).length===0){if(!this._watermark){this._watermark=this.createWatermarkComponent(),this._watermark.init({containerApi:new kt(this)});let e=document.createElement(`div`);e.className=`dv-watermark-container`,oe(e,`watermark-component`),e.appendChild(this._watermark.element),this.gridview.element.appendChild(e)}}else this._watermark&&=(this._watermark.element.parentElement.remove(),(t=(e=this._watermark).dispose)==null||t.call(e),null)}addGroup(e){if(e){let t;if(Re(e)){let n=typeof e.referencePanel==`string`?this.panels.find(t=>t.id===e.referencePanel):e.referencePanel;if(!n)throw Error(`dockview: reference panel ${e.referencePanel} does not exist`);if(t=this.findGroup(n),!t)throw Error(`dockview: reference group for reference panel ${e.referencePanel} does not exist`)}else if(ze(e)){if(t=typeof e.referenceGroup==`string`?this._groups.get(e.referenceGroup)?.value:e.referenceGroup,!t)throw Error(`dockview: reference group ${e.referenceGroup} does not exist`)}else{let t=this.orthogonalize(Ae(e.direction),e);return e.skipSetActive||this.doSetGroupAndPanelActive(t),t}let n=Ee(e.direction||`within`),r=D(t.element),i=Se(this.gridview.orientation,r,n),a=this.createGroup(e),o=this.getLocationOrientation(i)===F.VERTICAL?e.initialHeight:e.initialWidth;return this.doAddGroup(a,i,o),e.skipSetActive||this.doSetGroupAndPanelActive(a),a}else{let t=this.createGroup(e);return this.doAddGroup(t),this.doSetGroupAndPanelActive(t),t}}getLocationOrientation(e){return e.length%2==0&&this.gridview.orientation===F.HORIZONTAL?F.HORIZONTAL:F.VERTICAL}removeGroup(e,t){this.doRemoveGroup(e,t)}doRemoveGroup(e,t){let n=[...e.panels];if(!t?.skipDispose)for(let e of n)this.removePanel(e,{removeEmptyGroup:!1,skipDispose:t?.skipDispose??!1});let r=this.activePanel;if(e.api.location.type===`floating`){let n=this._floatingGroups.find(t=>t.group===e);if(n){if(t?.skipDispose||(n.group.dispose(),this._groups.delete(e.id),this._onDidRemoveGroup.fire(e)),_e(this._floatingGroups,n),n.dispose(),!t?.skipActive&&this._activeGroup===e){let e=Array.from(this._groups.values());this.doSetGroupAndPanelActive(e.length>0?e[0].value:void 0)}return n.group}throw Error(`dockview: failed to find floating group`)}if(e.api.location.type===`popout`){let n=this._popoutGroups.find(t=>t.popoutGroup===e);if(n){if(!t?.skipDispose){if(!t?.skipPopoutAssociated){let e=n.referenceGroup?this.getPanel(n.referenceGroup):void 0;e&&e.panels.length===0&&this.removeGroup(e)}n.popoutGroup.dispose(),this._groups.delete(e.id),this._onDidRemoveGroup.fire(e)}_e(this._popoutGroups,n);let r=n.disposable.dispose();if(!t?.skipPopoutReturn&&r&&(this.doAddGroup(r,[0]),this.doSetGroupAndPanelActive(r)),!t?.skipActive&&this._activeGroup===e){let e=Array.from(this._groups.values());this.doSetGroupAndPanelActive(e.length>0?e[0].value:void 0)}return this.updateWatermark(),n.popoutGroup}throw Error(`dockview: failed to find popout group`)}let i=super.doRemoveGroup(e,t);return t?.skipActive||this.activePanel!==r&&this._onDidActivePanelChange.fire(this.activePanel),i}debouncedUpdateAllPositions(){this._updatePositionsFrameId!==void 0&&cancelAnimationFrame(this._updatePositionsFrameId),this._updatePositionsFrameId=requestAnimationFrame(()=>{this._updatePositionsFrameId=void 0,this.overlayRenderContainer.updateAllPositions()})}movingLock(e){let t=this._moving;try{return this._moving=!0,e()}finally{this._moving=t}}moveGroupOrPanel(e){let t=e.to.group,n=e.from.groupId,r=e.from.panelId,i=e.to.position,a=e.to.index,o=n?this._groups.get(n)?.value:void 0;if(!o)throw Error(`dockview: Failed to find group id ${n}`);if(r===void 0){this.moveGroup({from:{group:o},to:{group:t,position:i},skipSetActive:e.skipSetActive});return}if(!i||i===`center`){let n=this.movingLock(()=>o.model.removePanel(r,{skipSetActive:!1,skipSetActiveGroup:!0}));if(!n)throw Error(`dockview: No panel with id ${r}`);!e.keepEmptyGroups&&o.model.size===0&&this.doRemoveGroup(o,{skipActive:!0});let i=t.model.size===0;this.movingLock(()=>t.model.openPanel(n,{index:a,skipSetActive:(e.skipSetActive??!1)&&!i,skipSetGroupActive:!0})),e.skipSetActive||this.doSetGroupAndPanelActive(t),this._onDidMovePanel.fire({panel:n,from:o})}else{let e=D(t.element),n=Se(this.gridview.orientation,e,i);if(o.size<2){let[e,a]=pe(n);if(o.api.location.type===`grid`){let[t,n]=pe(D(o.element));if(me(t,e)){this.gridview.moveView(t,n,a),this._onDidMovePanel.fire({panel:this.getGroupPanel(r),from:o});return}}if(o.api.location.type===`popout`){let e=this._popoutGroups.find(e=>e.popoutGroup===o),t=this.movingLock(()=>e.popoutGroup.model.removePanel(e.popoutGroup.panels[0],{skipSetActive:!0,skipSetActiveGroup:!0}));this.doRemoveGroup(o,{skipActive:!0});let i=this.createGroupAtLocation(n);this.movingLock(()=>i.model.openPanel(t,{skipSetActive:!0})),this.doSetGroupAndPanelActive(i),this._onDidMovePanel.fire({panel:this.getGroupPanel(r),from:o});return}let s=this.movingLock(()=>this.doRemoveGroup(o,{skipActive:!0,skipDispose:!0})),c=D(t.element),l=Se(this.gridview.orientation,c,i);this.movingLock(()=>this.doAddGroup(s,l)),this.doSetGroupAndPanelActive(s),this._onDidMovePanel.fire({panel:this.getGroupPanel(r),from:o})}else{let t=this.movingLock(()=>o.model.removePanel(r,{skipSetActive:!1,skipSetActiveGroup:!0}));if(!t)throw Error(`dockview: No panel with id ${r}`);let n=Se(this.gridview.orientation,e,i),a=this.createGroupAtLocation(n);this.movingLock(()=>a.model.openPanel(t,{skipSetGroupActive:!0})),this.doSetGroupAndPanelActive(a),this._onDidMovePanel.fire({panel:t,from:o})}}}moveGroup(e){let t=e.from.group,n=e.to.group,r=e.to.position;if(r===`center`){let r=t.activePanel,i=this.movingLock(()=>[...t.panels].map(e=>t.model.removePanel(e.id,{skipSetActive:!0})));t?.model.size===0&&this.doRemoveGroup(t,{skipActive:!0}),this.movingLock(()=>{for(let e of i)n.model.openPanel(e,{skipSetActive:e!==r,skipSetGroupActive:!0})}),e.skipSetActive===!0&&this.activePanel||this.doSetGroupAndPanelActive(n)}else{switch(t.api.location.type){case`grid`:this.gridview.removeView(D(t.element));break;case`floating`:{let e=this._floatingGroups.find(e=>e.group===t);if(!e)throw Error(`dockview: failed to find floating group`);e.dispose();break}case`popout`:{let e=this._popoutGroups.find(e=>e.popoutGroup===t);if(!e)throw Error(`dockview: failed to find popout group`);let r=this._popoutGroups.indexOf(e);if(r>=0&&this._popoutGroups.splice(r,1),e.referenceGroup){let t=this.getPanel(e.referenceGroup);t&&!t.api.isVisible&&this.doRemoveGroup(t,{skipActive:!0})}e.window.dispose(),n.api.location.type===`grid`?(t.model.renderContainer=this.overlayRenderContainer,t.model.dropTargetContainer=this.rootDropTargetContainer,t.model.location={type:`grid`}):n.api.location.type===`floating`&&(t.model.renderContainer=this.overlayRenderContainer,t.model.dropTargetContainer=this.rootDropTargetContainer,t.model.location={type:`floating`});break}}if(n.api.location.type===`grid`){let e=D(n.element),i=Se(this.gridview.orientation,e,r),a;switch(this.gridview.orientation){case F.VERTICAL:a=e.length%2==0?t.api.width:t.api.height;break;case F.HORIZONTAL:a=e.length%2==0?t.api.height:t.api.width;break}this.gridview.addView(t,a,i)}else if(n.api.location.type===`floating`){let e=this._floatingGroups.find(e=>e.group===n);if(e){let n=e.overlay.toJSON(),r,i;r=`left`in n?n.left+50:`right`in n?Math.max(0,n.right-n.width-50):50,i=`top`in n?n.top+50:`bottom`in n?Math.max(0,n.bottom-n.height-50):50,this.addFloatingGroup(t,{height:n.height,width:n.width,position:{left:r,top:i}})}}}if(t.panels.forEach(e=>{this._onDidMovePanel.fire({panel:e,from:t})}),this.debouncedUpdateAllPositions(),e.skipSetActive===!1){let e=n??t;this.doSetGroupAndPanelActive(e)}}doSetGroupActive(e){super.doSetGroupActive(e);let t=this.activePanel;!this._moving&&t!==this._onDidActivePanelChange.value&&this._onDidActivePanelChange.fire(t)}doSetGroupAndPanelActive(e){super.doSetGroupActive(e);let t=this.activePanel;e&&this.hasMaximizedGroup()&&!this.isMaximizedGroup(e)&&this.exitMaximizedGroup(),!this._moving&&t!==this._onDidActivePanelChange.value&&this._onDidActivePanelChange.fire(t)}getNextGroupId(){let e=this.nextGroupId.next();for(;this._groups.has(e);)e=this.nextGroupId.next();return e}createGroup(e){e||={};let t=e?.id;if(t&&this._groups.has(e.id)&&(console.warn(`dockview: Duplicate group id ${e?.id}. reassigning group id to avoid errors`),t=void 0),!t)for(t=this.nextGroupId.next();this._groups.has(t);)t=this.nextGroupId.next();let n=new vn(this,t,e);if(n.init({params:{},accessor:this}),!this._groups.has(n.id)){let e=new A(n.model.onTabDragStart(e=>{this._onWillDragPanel.fire(e)}),n.model.onGroupDragStart(e=>{this._onWillDragGroup.fire(e)}),n.model.onMove(e=>{let{groupId:t,itemId:r,target:i,index:a}=e;this.moveGroupOrPanel({from:{groupId:t,panelId:r},to:{group:n,position:i,index:a}})}),n.model.onDidDrop(e=>{this._onDidDrop.fire(e)}),n.model.onWillDrop(e=>{this._onWillDrop.fire(e)}),n.model.onWillShowOverlay(e=>{if(this.options.disableDnd){e.preventDefault();return}this._onWillShowOverlay.fire(e)}),n.model.onUnhandledDragOverEvent(e=>{this._onUnhandledDragOverEvent.fire(e)}),n.model.onDidAddPanel(e=>{this._moving||this._onDidAddPanel.fire(e.panel)}),n.model.onDidRemovePanel(e=>{this._moving||this._onDidRemovePanel.fire(e.panel)}),n.model.onDidActivePanelChange(e=>{this._moving||e.panel===this.activePanel&&this._onDidActivePanelChange.value!==e.panel&&this._onDidActivePanelChange.fire(e.panel)}),Xe.any(n.model.onDidPanelTitleChange,n.model.onDidPanelParametersChange)(()=>{this._bufferOnDidLayoutChange.fire()}));this._groups.set(n.id,{value:n,disposable:e})}return n.initialize(),n}createPanel(e,t){let n=e.component,r=e.tabComponent??this.options.defaultTabComponent,i=new Cn(this,e.id,n,r),a=new xn(e.id,n,r,this,this._api,t,i,{renderer:e.renderer,minimumWidth:e.minimumWidth,minimumHeight:e.minimumHeight,maximumWidth:e.maximumWidth,maximumHeight:e.maximumHeight});return a.init({title:e.title??e.id,params:e?.params??{}}),a}createGroupAtLocation(e,t,n){let r=this.createGroup(n);return this.doAddGroup(r,e,t),r}findGroup(e){return Array.from(this._groups.values()).find(t=>t.value.model.containsPanel(e))?.value}orientationAtLocation(e){let t=this.gridview.orientation;return e.length%2==1?t:yt(t)}updateDropTargetModel(e){`dndEdges`in e&&(this._rootDropTarget.disabled=typeof e.dndEdges==`boolean`&&e.dndEdges===!1,typeof e.dndEdges==`object`&&e.dndEdges!==null?this._rootDropTarget.setOverlayModel(e.dndEdges):this._rootDropTarget.setOverlayModel(zn)),`rootOverlayModel`in e&&this.updateDropTargetModel({dndEdges:e.dndEdges})}updateTheme(){let e=this._options.theme??yn;switch(this._themeClassnames.setClassNames(e.className),this.gridview.margin=e.gap??0,e.dndOverlayMounting){case`absolute`:this.rootDropTargetContainer.disabled=!1;break;default:this.rootDropTargetContainer.disabled=!0;break}}},Vn=class extends Tt{get orientation(){return this.gridview.orientation}set orientation(e){this.gridview.orientation=e}get options(){return this._options}get deserializer(){return this._deserializer}set deserializer(e){this._deserializer=e}constructor(e,t){super(e,{proportionalLayout:t.proportionalLayout??!0,orientation:t.orientation,styles:t.hideBorders?{separatorBorder:`transparent`}:void 0,disableAutoResizing:t.disableAutoResizing,className:t.className}),this._onDidLayoutfromJSON=new k,this.onDidLayoutFromJSON=this._onDidLayoutfromJSON.event,this._onDidRemoveGroup=new k,this.onDidRemoveGroup=this._onDidRemoveGroup.event,this._onDidAddGroup=new k,this.onDidAddGroup=this._onDidAddGroup.event,this._onDidActiveGroupChange=new k,this.onDidActiveGroupChange=this._onDidActiveGroupChange.event,this._options=t,this.addDisposables(this._onDidAddGroup,this._onDidRemoveGroup,this._onDidActiveGroupChange,this.onDidAdd(e=>{this._onDidAddGroup.fire(e)}),this.onDidRemove(e=>{this._onDidRemoveGroup.fire(e)}),this.onDidActiveChange(e=>{this._onDidActiveGroupChange.fire(e)}))}updateOptions(e){super.updateOptions(e);let t=typeof e.orientation==`string`&&this.gridview.orientation!==e.orientation;this._options=Object.assign(Object.assign({},this.options),e),t&&(this.gridview.orientation=e.orientation),this.layout(this.gridview.width,this.gridview.height,!0)}removePanel(e){this.removeGroup(e)}toJSON(){return{grid:this.gridview.serialize(),activePanel:this.activeGroup?.id}}setVisible(e,t){this.gridview.setViewVisible(D(e.element),t)}setActive(e){this._groups.forEach((t,n)=>{t.value.setActive(e===t.value)})}focus(){var e;(e=this.activeGroup)==null||e.focus()}fromJSON(e){this.clear();let{grid:t,activePanel:n}=e;try{let e=[],r=this.width,i=this.height;if(this.gridview.deserialize(t,{fromJSON:t=>{let{data:n}=t,r=this.options.createComponent({id:n.id,name:n.component});return e.push(()=>r.init({params:n.params,minimumWidth:n.minimumWidth,maximumWidth:n.maximumWidth,minimumHeight:n.minimumHeight,maximumHeight:n.maximumHeight,priority:n.priority,snap:!!n.snap,accessor:this,isVisible:t.visible})),this._onDidAddGroup.fire(r),this.registerPanel(r),r}}),this.layout(r,i,!0),e.forEach(e=>e()),typeof n==`string`){let e=this.getPanel(n);e&&this.doSetGroupActive(e)}}catch(e){for(let e of this.groups)e.dispose(),this._groups.delete(e.id),this._onDidRemoveGroup.fire(e);throw this.clear(),e}this._onDidLayoutfromJSON.fire()}clear(){let e=this.activeGroup,t=Array.from(this._groups.values());for(let e of t)e.disposable.dispose(),this.doRemoveGroup(e.value,{skipActive:!0});e&&this.doSetGroupActive(void 0),this.gridview.clear()}movePanel(e,t){let n,r=this.gridview.remove(e),i=this._groups.get(t.reference)?.value;if(!i)throw Error(`reference group ${t.reference} does not exist`);let a=Ee(t.direction);if(a===`center`)throw Error(`${a} not supported as an option`);{let e=D(i.element);n=Se(this.gridview.orientation,e,a)}this.doAddGroup(r,n,t.size)}addPanel(e){let t=e.location??[0];if(e.position?.referencePanel){let n=this._groups.get(e.position.referencePanel)?.value;if(!n)throw Error(`reference group ${e.position.referencePanel} does not exist`);let r=Ee(e.position.direction);if(r===`center`)throw Error(`${r} not supported as an option`);{let e=D(n.element);t=Se(this.gridview.orientation,e,r)}}let n=this.options.createComponent({id:e.id,name:e.component});return n.init({params:e.params??{},minimumWidth:e.minimumWidth,maximumWidth:e.maximumWidth,minimumHeight:e.minimumHeight,maximumHeight:e.maximumHeight,priority:e.priority,snap:!!e.snap,accessor:this,isVisible:!0}),this.doAddGroup(n,t,e.size),this.registerPanel(n),this.doSetGroupActive(n),n}registerPanel(e){let t=new A(e.api.onDidFocusChange(t=>{t.isFocused&&this._groups.forEach(t=>{let n=t.value;n===e?n.setActive(!0):n.setActive(!1)})}));this._groups.set(e.id,{value:e,disposable:t})}moveGroup(e,t,n){let r=this.getPanel(t);if(!r)throw Error(`invalid operation`);let i=D(e.element),[a,o]=pe(Se(this.gridview.orientation,i,n)),[s,c]=pe(D(r.element));if(me(s,a)){this.gridview.moveView(s,c,o);return}let l=this.doRemoveGroup(r,{skipActive:!0,skipDispose:!0}),u=D(e.element),d=Se(this.gridview.orientation,u,n);this.doAddGroup(l,d)}removeGroup(e){super.removeGroup(e)}dispose(){super.dispose(),this._onDidLayoutfromJSON.dispose()}},Hn=class extends Ct{get panels(){return this.splitview.getViews()}get options(){return this._options}get length(){return this._panels.size}get orientation(){return this.splitview.orientation}get splitview(){return this._splitview}set splitview(e){this._splitview&&this._splitview.dispose(),this._splitview=e,this._splitviewChangeDisposable.value=new A(this._splitview.onDidSashEnd(()=>{this._onDidLayoutChange.fire(void 0)}),this._splitview.onDidAddView(e=>this._onDidAddView.fire(e)),this._splitview.onDidRemoveView(e=>this._onDidRemoveView.fire(e)))}get minimumSize(){return this.splitview.minimumSize}get maximumSize(){return this.splitview.maximumSize}get height(){return this.splitview.orientation===F.HORIZONTAL?this.splitview.orthogonalSize:this.splitview.size}get width(){return this.splitview.orientation===F.HORIZONTAL?this.splitview.size:this.splitview.orthogonalSize}constructor(e,t){super(document.createElement(`div`),t.disableAutoResizing),this._splitviewChangeDisposable=new j,this._panels=new Map,this._onDidLayoutfromJSON=new k,this.onDidLayoutFromJSON=this._onDidLayoutfromJSON.event,this._onDidAddView=new k,this.onDidAddView=this._onDidAddView.event,this._onDidRemoveView=new k,this.onDidRemoveView=this._onDidRemoveView.event,this._onDidLayoutChange=new k,this.onDidLayoutChange=this._onDidLayoutChange.event,this.element.style.height=`100%`,this.element.style.width=`100%`,this._classNames=new lt(this.element),this._classNames.setClassNames(t.className??``),e.appendChild(this.element),this._options=t,this.splitview=new gt(this.element,t),this.addDisposables(this._onDidAddView,this._onDidLayoutfromJSON,this._onDidRemoveView,this._onDidLayoutChange)}updateOptions(e){`className`in e&&this._classNames.setClassNames(e.className??``),`disableResizing`in e&&(this.disableResizing=e.disableAutoResizing??!1),typeof e.orientation==`string`&&(this.splitview.orientation=e.orientation),this._options=Object.assign(Object.assign({},this.options),e),this.splitview.layout(this.splitview.size,this.splitview.orthogonalSize)}focus(){var e;(e=this._activePanel)==null||e.focus()}movePanel(e,t){this.splitview.moveView(e,t)}setVisible(e,t){let n=this.panels.indexOf(e);this.splitview.setViewVisible(n,t)}setActive(e,t){this._activePanel=e,this.panels.filter(t=>t!==e).forEach(e=>{e.api._onDidActiveChange.fire({isActive:!1}),t||e.focus()}),e.api._onDidActiveChange.fire({isActive:!0}),t||e.focus()}removePanel(e,t){let n=this._panels.get(e.id);if(!n)throw Error(`unknown splitview panel ${e.id}`);n.dispose(),this._panels.delete(e.id);let r=this.panels.findIndex(t=>t===e);this.splitview.removeView(r,t).dispose();let i=this.panels;i.length>0&&this.setActive(i[i.length-1])}getPanel(e){return this.panels.find(t=>t.id===e)}addPanel(e){if(this._panels.has(e.id))throw Error(`panel ${e.id} already exists`);let t=this.options.createComponent({id:e.id,name:e.component});t.orientation=this.splitview.orientation,t.init({params:e.params??{},minimumSize:e.minimumSize,maximumSize:e.maximumSize,snap:e.snap,priority:e.priority,accessor:this});let n=typeof e.size==`number`?e.size:ht.Distribute,r=typeof e.index==`number`?e.index:void 0;return this.splitview.addView(t,n,r),this.doAddView(t),this.setActive(t),t}layout(e,t){let[n,r]=this.splitview.orientation===F.HORIZONTAL?[e,t]:[t,e];this.splitview.layout(n,r)}doAddView(e){let t=e.api.onDidFocusChange(t=>{t.isFocused&&this.setActive(e,!0)});this._panels.set(e.id,t)}toJSON(){return{views:this.splitview.getViews().map((e,t)=>({size:this.splitview.getViewSize(t),data:e.toJSON(),snap:!!e.snap,priority:e.priority})),activeView:this._activePanel?.id,size:this.splitview.size,orientation:this.splitview.orientation}}fromJSON(e){this.clear();let{views:t,orientation:n,size:r,activeView:i}=e,a=[],o=this.width,s=this.height;if(this.splitview=new gt(this.element,{orientation:n,proportionalLayout:this.options.proportionalLayout,descriptor:{size:r,views:t.map(e=>{let t=e.data;if(this._panels.has(t.id))throw Error(`panel ${t.id} already exists`);let r=this.options.createComponent({id:t.id,name:t.component});return a.push(()=>{r.init({params:t.params??{},minimumSize:t.minimumSize,maximumSize:t.maximumSize,snap:e.snap,priority:e.priority,accessor:this})}),r.orientation=n,this.doAddView(r),setTimeout(()=>{this._onDidAddView.fire(r)},0),{size:e.size,view:r}})}}),this.layout(o,s),a.forEach(e=>e()),typeof i==`string`){let e=this.getPanel(i);e&&this.setActive(e)}this._onDidLayoutfromJSON.fire()}clear(){for(let e of this._panels.values())e.dispose();for(this._panels.clear();this.splitview.length>0;)this.splitview.removeView(0,ht.Distribute,!0).dispose()}dispose(){for(let e of this._panels.values())e.dispose();this._panels.clear();let e=this.splitview.getViews();this._splitviewChangeDisposable.dispose(),this.splitview.dispose();for(let t of e)t.dispose();this.element.remove(),super.dispose()}},Un=class extends A{get element(){return this._element}constructor(){super(),this._expandedIcon=rn(),this._collapsedIcon=an(),this.disposable=new j,this.apiRef={api:null},this._element=document.createElement(`div`),this.element.className=`dv-default-header`,this._content=document.createElement(`span`),this._expander=document.createElement(`div`),this._expander.className=`dv-pane-header-icon`,this.element.appendChild(this._expander),this.element.appendChild(this._content),this.addDisposables(x(this._element,`click`,()=>{var e;(e=this.apiRef.api)==null||e.setExpanded(!this.apiRef.api.isExpanded)}))}init(e){this.apiRef.api=e.api,this._content.textContent=e.title,this.updateIcon(),this.disposable.value=e.api.onDidExpansionChange(()=>{this.updateIcon()})}updateIcon(){let e=!!this.apiRef.api?.isExpanded;M(this._expander,`collapsed`,!e),e?(this._expander.contains(this._collapsedIcon)&&this._collapsedIcon.remove(),this._expander.contains(this._expandedIcon)||this._expander.appendChild(this._expandedIcon)):(this._expander.contains(this._expandedIcon)&&this._expandedIcon.remove(),this._expander.contains(this._collapsedIcon)||this._expander.appendChild(this._collapsedIcon))}update(e){}dispose(){this.disposable.dispose(),super.dispose()}},Wn=dt(),Gn=22,Kn=0,qn=2**53-1,Jn=class extends Kt{constructor(e){super({accessor:e.accessor,id:e.id,component:e.component,headerComponent:e.headerComponent,orientation:e.orientation,isExpanded:e.isExpanded,disableDnd:e.disableDnd,headerSize:e.headerSize,minimumBodySize:e.minimumBodySize,maximumBodySize:e.maximumBodySize}),this.options=e}getBodyComponent(){return this.options.body}getHeaderComponent(){return this.options.header}},Yn=class extends Ct{get id(){return this._id}get panels(){return this.paneview.getPanes()}set paneview(e){this._paneview=e,this._disposable.value=new A(this._paneview.onDidChange(()=>{this._onDidLayoutChange.fire(void 0)}),this._paneview.onDidAddView(e=>this._onDidAddView.fire(e)),this._paneview.onDidRemoveView(e=>this._onDidRemoveView.fire(e)))}get paneview(){return this._paneview}get minimumSize(){return this.paneview.minimumSize}get maximumSize(){return this.paneview.maximumSize}get height(){return this.paneview.orientation===F.HORIZONTAL?this.paneview.orthogonalSize:this.paneview.size}get width(){return this.paneview.orientation===F.HORIZONTAL?this.paneview.size:this.paneview.orthogonalSize}get options(){return this._options}constructor(e,t){super(document.createElement(`div`),t.disableAutoResizing),this._id=Wn.next(),this._disposable=new j,this._viewDisposables=new Map,this._onDidLayoutfromJSON=new k,this.onDidLayoutFromJSON=this._onDidLayoutfromJSON.event,this._onDidLayoutChange=new k,this.onDidLayoutChange=this._onDidLayoutChange.event,this._onDidDrop=new k,this.onDidDrop=this._onDidDrop.event,this._onDidAddView=new k,this.onDidAddView=this._onDidAddView.event,this._onDidRemoveView=new k,this.onDidRemoveView=this._onDidRemoveView.event,this._onUnhandledDragOverEvent=new k,this.onUnhandledDragOverEvent=this._onUnhandledDragOverEvent.event,this.element.style.height=`100%`,this.element.style.width=`100%`,this.addDisposables(this._onDidLayoutChange,this._onDidLayoutfromJSON,this._onDidDrop,this._onDidAddView,this._onDidRemoveView,this._onUnhandledDragOverEvent),this._classNames=new lt(this.element),this._classNames.setClassNames(t.className??``),e.appendChild(this.element),this._options=t,this.paneview=new vt(this.element,{orientation:F.VERTICAL}),this.addDisposables(this._disposable)}setVisible(e,t){let n=this.panels.indexOf(e);this.paneview.setViewVisible(n,t)}focus(){}updateOptions(e){`className`in e&&this._classNames.setClassNames(e.className??``),`disableResizing`in e&&(this.disableResizing=e.disableAutoResizing??!1),this._options=Object.assign(Object.assign({},this.options),e)}addPanel(e){let t=this.options.createComponent({id:e.id,name:e.component}),n;e.headerComponent&&this.options.createHeaderComponent&&(n=this.options.createHeaderComponent({id:e.id,name:e.headerComponent})),n||=new Un;let r=new Jn({id:e.id,component:e.component,headerComponent:e.headerComponent,header:n,body:t,orientation:F.VERTICAL,isExpanded:!!e.isExpanded,disableDnd:!!this.options.disableDnd,accessor:this,headerSize:e.headerSize??Gn,minimumBodySize:Kn,maximumBodySize:qn});this.doAddPanel(r);let i=typeof e.size==`number`?e.size:ht.Distribute,a=typeof e.index==`number`?e.index:void 0;return r.init({params:e.params??{},minimumBodySize:e.minimumBodySize,maximumBodySize:e.maximumBodySize,isExpanded:e.isExpanded,title:e.title,containerApi:new Dt(this),accessor:this}),this.paneview.addPane(r,i,a),r.orientation=this.paneview.orientation,r}removePanel(e){let t=this.panels.findIndex(t=>t===e);this.paneview.removePane(t),this.doRemovePanel(e)}movePanel(e,t){this.paneview.moveView(e,t)}getPanel(e){return this.panels.find(t=>t.id===e)}layout(e,t){let[n,r]=this.paneview.orientation===F.HORIZONTAL?[e,t]:[t,e];this.paneview.layout(n,r)}toJSON(){let e=e=>e===2**53-1||e===1/0?void 0:e,t=e=>e<=0?void 0:e;return{views:this.paneview.getPanes().map((n,r)=>({size:this.paneview.getViewSize(r),data:n.toJSON(),minimumSize:t(n.minimumBodySize),maximumSize:e(n.maximumBodySize),headerSize:n.headerSize,expanded:n.isExpanded()})),size:this.paneview.size}}fromJSON(e){this.clear();let{views:t,size:n}=e,r=[],i=this.width,a=this.height;this.paneview=new vt(this.element,{orientation:F.VERTICAL,descriptor:{size:n,views:t.map(e=>{let t=e.data,n=this.options.createComponent({id:t.id,name:t.component}),i;t.headerComponent&&this.options.createHeaderComponent&&(i=this.options.createHeaderComponent({id:t.id,name:t.headerComponent})),i||=new Un;let a=new Jn({id:t.id,component:t.component,headerComponent:t.headerComponent,header:i,body:n,orientation:F.VERTICAL,isExpanded:!!e.expanded,disableDnd:!!this.options.disableDnd,accessor:this,headerSize:e.headerSize??Gn,minimumBodySize:e.minimumSize??Kn,maximumBodySize:e.maximumSize??qn});return this.doAddPanel(a),r.push(()=>{a.init({params:t.params??{},minimumBodySize:e.minimumSize,maximumBodySize:e.maximumSize,title:t.title,isExpanded:!!e.expanded,containerApi:new Dt(this),accessor:this}),a.orientation=this.paneview.orientation}),setTimeout(()=>{this._onDidAddView.fire(a)},0),{size:e.size,view:a}})}}),this.layout(i,a),r.forEach(e=>e()),this._onDidLayoutfromJSON.fire()}clear(){for(let[e,t]of this._viewDisposables.entries())t.dispose();this._viewDisposables.clear(),this.paneview.dispose()}doAddPanel(e){let t=new A(e.onDidDrop(e=>{this._onDidDrop.fire(e)}),e.onUnhandledDragOverEvent(e=>{this._onUnhandledDragOverEvent.fire(e)}));this._viewDisposables.set(e.id,t)}doRemovePanel(e){let t=this._viewDisposables.get(e.id);t&&(t.dispose(),this._viewDisposables.delete(e.id))}dispose(){super.dispose();for(let[e,t]of this._viewDisposables.entries())t.dispose();this._viewDisposables.clear(),this.element.remove(),this.paneview.dispose()}},Xn=class extends Wt{get priority(){return this._priority}set orientation(e){this._orientation=e}get orientation(){return this._orientation}get minimumSize(){let e=typeof this._minimumSize==`function`?this._minimumSize():this._minimumSize;return e!==this._evaluatedMinimumSize&&(this._evaluatedMinimumSize=e,this.updateConstraints()),e}get maximumSize(){let e=typeof this._maximumSize==`function`?this._maximumSize():this._maximumSize;return e!==this._evaluatedMaximumSize&&(this._evaluatedMaximumSize=e,this.updateConstraints()),e}get snap(){return this._snap}constructor(e,t){super(e,t,new Ht(e,t)),this._evaluatedMinimumSize=0,this._evaluatedMaximumSize=1/0,this._minimumSize=0,this._maximumSize=1/0,this._snap=!1,this._onDidChange=new k,this.onDidChange=this._onDidChange.event,this.api.initialize(this),this.addDisposables(this._onDidChange,this.api.onWillVisibilityChange(e=>{let{isVisible:t}=e,{accessor:n}=this._params;n.setVisible(this,t)}),this.api.onActiveChange(()=>{let{accessor:e}=this._params;e.setActive(this)}),this.api.onDidConstraintsChangeInternal(e=>{(typeof e.minimumSize==`number`||typeof e.minimumSize==`function`)&&(this._minimumSize=e.minimumSize),(typeof e.maximumSize==`number`||typeof e.maximumSize==`function`)&&(this._maximumSize=e.maximumSize),this.updateConstraints()}),this.api.onDidSizeChange(e=>{this._onDidChange.fire({size:e.size})}))}setVisible(e){this.api._onDidVisibilityChange.fire({isVisible:e})}setActive(e){this.api._onDidActiveChange.fire({isActive:e})}layout(e,t){let[n,r]=this.orientation===F.HORIZONTAL?[e,t]:[t,e];super.layout(n,r)}init(e){super.init(e),this._priority=e.priority,e.minimumSize&&(this._minimumSize=e.minimumSize),e.maximumSize&&(this._maximumSize=e.maximumSize),e.snap&&(this._snap=e.snap)}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{minimumSize:(e=>e<=0?void 0:e)(this.minimumSize),maximumSize:(e=>e===2**53-1||e===1/0?void 0:e)(this.maximumSize)})}updateConstraints(){this.api._onDidConstraintsChange.fire({maximumSize:this._evaluatedMaximumSize,minimumSize:this._evaluatedMinimumSize})}}}));function Qn(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>`u`)){var r=document.head||document.getElementsByTagName(`head`)[0],i=document.createElement(`style`);i.type=`text/css`,n===`top`&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}function $n(e){return typeof e==`function`||!!e?.$$typeof}function er(e,t){return e?n=>new mr(e,t,n):void 0}function tr(e){return cn.reduce((t,n)=>(n in e&&(t[n]=e[n]),t),{})}function nr(e){return _t.reduce((t,n)=>(n in e&&(t[n]=e[n]),t),{})}function rr(e){return St.reduce((t,n)=>(n in e&&(t[n]=e[n]),t),{})}function ir(e){return Rt.reduce((t,n)=>(n in e&&(t[n]=e[n]),t),{})}var R,ar,or,sr,cr,lr,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr,br,xr,Sr,Cr=o((()=>{Zn(),Zn(),R=l(d(),1),ar=l(h(),1),Qn(`.dv-scrollable {
  position: relative;
  overflow: hidden;
}
.dv-scrollable .dv-scrollbar {
  position: absolute;
  border-radius: 2px;
  background-color: transparent;
  /* GPU optimizations */
  will-change: background-color, transform;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  transition-property: background-color;
  transition-timing-function: ease-in-out;
  transition-duration: 1s;
  transition-delay: 0s;
}
.dv-scrollable .dv-scrollbar-horizontal {
  bottom: 0px;
  left: 0px;
  height: 4px;
}
.dv-scrollable .dv-scrollbar-vertical {
  right: 0px;
  top: 0px;
  width: 4px;
}
.dv-scrollable:hover .dv-scrollbar, .dv-scrollable.dv-scrollable-resizing .dv-scrollbar, .dv-scrollable.dv-scrollable-scrolling .dv-scrollbar {
  background-color: var(--dv-scrollbar-background-color, rgba(255, 255, 255, 0.25));
}
.dv-svg {
  display: inline-block;
  fill: currentcolor;
  line-height: 1;
  stroke: currentcolor;
  stroke-width: 0;
}
.dockview-theme-dark {
  --dv-paneview-active-outline-color: dodgerblue;
  --dv-tabs-and-actions-container-font-size: 13px;
  --dv-tabs-and-actions-container-height: 35px;
  --dv-drag-over-background-color: rgba(83, 89, 93, 0.5);
  --dv-drag-over-border-color: transparent;
  --dv-tabs-container-scrollbar-color: #888;
  --dv-icon-hover-background-color: rgba(90, 93, 94, 0.31);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(83, 89, 93, 0.5);
  --dv-overlay-z-index: 999;
  --dv-tab-font-size: inherit;
  --dv-border-radius: 0px;
  --dv-tab-margin: 0;
  --dv-sash-color: transparent;
  --dv-active-sash-color: transparent;
  --dv-active-sash-transition-duration: 0.1s;
  --dv-active-sash-transition-delay: 0.5s;
  --dv-group-view-background-color: #1e1e1e;
  --dv-tabs-and-actions-container-background-color: #252526;
  --dv-activegroup-visiblepanel-tab-background-color: #1e1e1e;
  --dv-activegroup-hiddenpanel-tab-background-color: #2d2d2d;
  --dv-inactivegroup-visiblepanel-tab-background-color: #1e1e1e;
  --dv-inactivegroup-hiddenpanel-tab-background-color: #2d2d2d;
  --dv-tab-divider-color: #1e1e1e;
  --dv-activegroup-visiblepanel-tab-color: white;
  --dv-activegroup-hiddenpanel-tab-color: #969696;
  --dv-inactivegroup-visiblepanel-tab-color: #8f8f8f;
  --dv-inactivegroup-hiddenpanel-tab-color: #626262;
  --dv-separator-border: rgb(68, 68, 68);
  --dv-paneview-header-border-color: rgba(204, 204, 204, 0.2);
}
.dockview-theme-dark .dv-drop-target-container .dv-drop-target-anchor.dv-drop-target-anchor-container-changed {
  opacity: 0;
  transition: none;
}

.dockview-theme-light {
  --dv-paneview-active-outline-color: dodgerblue;
  --dv-tabs-and-actions-container-font-size: 13px;
  --dv-tabs-and-actions-container-height: 35px;
  --dv-drag-over-background-color: rgba(83, 89, 93, 0.5);
  --dv-drag-over-border-color: transparent;
  --dv-tabs-container-scrollbar-color: #888;
  --dv-icon-hover-background-color: rgba(90, 93, 94, 0.31);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(83, 89, 93, 0.5);
  --dv-overlay-z-index: 999;
  --dv-tab-font-size: inherit;
  --dv-border-radius: 0px;
  --dv-tab-margin: 0;
  --dv-sash-color: transparent;
  --dv-active-sash-color: transparent;
  --dv-active-sash-transition-duration: 0.1s;
  --dv-active-sash-transition-delay: 0.5s;
  --dv-group-view-background-color: white;
  --dv-tabs-and-actions-container-background-color: #f3f3f3;
  --dv-activegroup-visiblepanel-tab-background-color: white;
  --dv-activegroup-hiddenpanel-tab-background-color: #ececec;
  --dv-inactivegroup-visiblepanel-tab-background-color: white;
  --dv-inactivegroup-hiddenpanel-tab-background-color: #ececec;
  --dv-tab-divider-color: white;
  --dv-activegroup-visiblepanel-tab-color: rgb(51, 51, 51);
  --dv-activegroup-hiddenpanel-tab-color: rgba(51, 51, 51, 0.7);
  --dv-inactivegroup-visiblepanel-tab-color: rgba(51, 51, 51, 0.7);
  --dv-inactivegroup-hiddenpanel-tab-color: rgba(51, 51, 51, 0.35);
  --dv-separator-border: rgba(128, 128, 128, 0.35);
  --dv-paneview-header-border-color: rgb(51, 51, 51);
  --dv-scrollbar-background-color: rgba(0, 0, 0, 0.25);
}
.dockview-theme-light .dv-drop-target-container .dv-drop-target-anchor.dv-drop-target-anchor-container-changed {
  opacity: 0;
  transition: none;
}

.dockview-theme-vs {
  --dv-paneview-active-outline-color: dodgerblue;
  --dv-tabs-and-actions-container-font-size: 13px;
  --dv-tabs-and-actions-container-height: 35px;
  --dv-drag-over-background-color: rgba(83, 89, 93, 0.5);
  --dv-drag-over-border-color: transparent;
  --dv-tabs-container-scrollbar-color: #888;
  --dv-icon-hover-background-color: rgba(90, 93, 94, 0.31);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(83, 89, 93, 0.5);
  --dv-overlay-z-index: 999;
  --dv-tab-font-size: inherit;
  --dv-border-radius: 0px;
  --dv-tab-margin: 0;
  --dv-sash-color: transparent;
  --dv-active-sash-color: transparent;
  --dv-active-sash-transition-duration: 0.1s;
  --dv-active-sash-transition-delay: 0.5s;
  --dv-group-view-background-color: #1e1e1e;
  --dv-tabs-and-actions-container-background-color: #252526;
  --dv-activegroup-visiblepanel-tab-background-color: #1e1e1e;
  --dv-activegroup-hiddenpanel-tab-background-color: #2d2d2d;
  --dv-inactivegroup-visiblepanel-tab-background-color: #1e1e1e;
  --dv-inactivegroup-hiddenpanel-tab-background-color: #2d2d2d;
  --dv-tab-divider-color: #1e1e1e;
  --dv-activegroup-visiblepanel-tab-color: white;
  --dv-activegroup-hiddenpanel-tab-color: #969696;
  --dv-inactivegroup-visiblepanel-tab-color: #8f8f8f;
  --dv-inactivegroup-hiddenpanel-tab-color: #626262;
  --dv-separator-border: rgb(68, 68, 68);
  --dv-paneview-header-border-color: rgba(204, 204, 204, 0.2);
  --dv-tabs-and-actions-container-background-color: #2d2d30;
  --dv-tabs-and-actions-container-height: 20px;
  --dv-tabs-and-actions-container-font-size: 11px;
  --dv-activegroup-visiblepanel-tab-background-color: #007acc;
  --dv-inactivegroup-visiblepanel-tab-background-color: #3f3f46;
  --dv-activegroup-visiblepanel-tab-color: white;
  --dv-activegroup-hiddenpanel-tab-color: white;
  --dv-inactivegroup-visiblepanel-tab-color: white;
  --dv-inactivegroup-hiddenpanel-tab-color: white;
}
.dockview-theme-vs .dv-drop-target-container .dv-drop-target-anchor.dv-drop-target-anchor-container-changed {
  opacity: 0;
  transition: none;
}
.dockview-theme-vs .dv-groupview.dv-active-group > .dv-tabs-and-actions-container {
  box-sizing: content-box;
  border-bottom: 2px solid var(--dv-activegroup-visiblepanel-tab-background-color);
}
.dockview-theme-vs .dv-groupview.dv-active-group > .dv-tabs-and-actions-container .dv-tab.dv-active-tab {
  border-top: 2px solid var(--dv-activegroup-visiblepanel-tab-background-color);
}
.dockview-theme-vs .dv-groupview.dv-active-group > .dv-tabs-and-actions-container .dv-tab.dv-inactive-tab {
  border-top: 2px solid var(--dv-activegroup-hiddenpanel-tab-background-color);
}
.dockview-theme-vs .dv-groupview.dv-inactive-group > .dv-tabs-and-actions-container {
  box-sizing: content-box;
  border-bottom: 2px solid var(--dv-inactivegroup-visiblepanel-tab-background-color);
}
.dockview-theme-vs .dv-groupview.dv-inactive-group > .dv-tabs-and-actions-container .dv-tab.dv-active-tab {
  border-top: 2px solid var(--dv-inactivegroup-visiblepanel-tab-background-color);
}
.dockview-theme-vs .dv-groupview.dv-inactive-group > .dv-tabs-and-actions-container .dv-tab.dv-inactive-tab {
  border-top: 2px solid var(--dv-inactivegroup-hiddenpanel-tab-background-color);
}

.dockview-theme-abyss {
  --dv-paneview-active-outline-color: dodgerblue;
  --dv-tabs-and-actions-container-font-size: 13px;
  --dv-tabs-and-actions-container-height: 35px;
  --dv-drag-over-background-color: rgba(83, 89, 93, 0.5);
  --dv-drag-over-border-color: transparent;
  --dv-tabs-container-scrollbar-color: #888;
  --dv-icon-hover-background-color: rgba(90, 93, 94, 0.31);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(83, 89, 93, 0.5);
  --dv-overlay-z-index: 999;
  --dv-tab-font-size: inherit;
  --dv-border-radius: 0px;
  --dv-tab-margin: 0;
  --dv-sash-color: transparent;
  --dv-active-sash-color: transparent;
  --dv-active-sash-transition-duration: 0.1s;
  --dv-active-sash-transition-delay: 0.5s;
  --dv-color-abyss-dark: #000c18;
  --dv-color-abyss: #10192c;
  --dv-color-abyss-light: #1c1c2a;
  --dv-color-abyss-lighter: #2b2b4a;
  --dv-color-abyss-accent: rgb(91, 30, 207);
  --dv-color-abyss-primary-text: white;
  --dv-color-abyss-secondary-text: rgb(148, 151, 169);
  --dv-group-view-background-color: var(--dv-color-abyss-dark);
  --dv-tabs-and-actions-container-background-color: var(
      --dv-color-abyss-light
  );
  --dv-activegroup-visiblepanel-tab-background-color: var(
      --dv-color-abyss-dark
  );
  --dv-activegroup-hiddenpanel-tab-background-color: var(--dv-color-abyss);
  --dv-inactivegroup-visiblepanel-tab-background-color: var(
      --dv-color-abyss-dark
  );
  --dv-inactivegroup-hiddenpanel-tab-background-color: var(--dv-color-abyss);
  --dv-tab-divider-color: var(--dv-color-abyss-lighter);
  --dv-activegroup-visiblepanel-tab-color: white;
  --dv-activegroup-hiddenpanel-tab-color: rgba(255, 255, 255, 0.5);
  --dv-inactivegroup-visiblepanel-tab-color: rgba(255, 255, 255, 0.5);
  --dv-inactivegroup-hiddenpanel-tab-color: rgba(255, 255, 255, 0.25);
  --dv-separator-border: var(--dv-color-abyss-lighter);
  --dv-paneview-header-border-color: var(--dv-color-abyss-lighter);
  --dv-paneview-active-outline-color: #596f99;
}
.dockview-theme-abyss .dv-drop-target-container .dv-drop-target-anchor.dv-drop-target-anchor-container-changed {
  opacity: 0;
  transition: none;
}

.dockview-theme-dracula {
  --dv-paneview-active-outline-color: dodgerblue;
  --dv-tabs-and-actions-container-font-size: 13px;
  --dv-tabs-and-actions-container-height: 35px;
  --dv-drag-over-background-color: rgba(83, 89, 93, 0.5);
  --dv-drag-over-border-color: transparent;
  --dv-tabs-container-scrollbar-color: #888;
  --dv-icon-hover-background-color: rgba(90, 93, 94, 0.31);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(83, 89, 93, 0.5);
  --dv-overlay-z-index: 999;
  --dv-tab-font-size: inherit;
  --dv-border-radius: 0px;
  --dv-tab-margin: 0;
  --dv-sash-color: transparent;
  --dv-active-sash-color: transparent;
  --dv-active-sash-transition-duration: 0.1s;
  --dv-active-sash-transition-delay: 0.5s;
  --dv-group-view-background-color: #282a36;
  --dv-tabs-and-actions-container-background-color: #191a21;
  --dv-activegroup-visiblepanel-tab-background-color: #282a36;
  --dv-activegroup-hiddenpanel-tab-background-color: #21222c;
  --dv-inactivegroup-visiblepanel-tab-background-color: #282a36;
  --dv-inactivegroup-hiddenpanel-tab-background-color: #21222c;
  --dv-tab-divider-color: #191a21;
  --dv-activegroup-visiblepanel-tab-color: rgb(248, 248, 242);
  --dv-activegroup-hiddenpanel-tab-color: rgb(98, 114, 164);
  --dv-inactivegroup-visiblepanel-tab-color: rgba(248, 248, 242, 0.5);
  --dv-inactivegroup-hiddenpanel-tab-color: rgba(98, 114, 164, 0.5);
  --dv-separator-border: #bd93f9;
  --dv-paneview-header-border-color: #bd93f9;
  --dv-paneview-active-outline-color: #6272a4;
}
.dockview-theme-dracula .dv-drop-target-container .dv-drop-target-anchor.dv-drop-target-anchor-container-changed {
  opacity: 0;
  transition: none;
}
.dockview-theme-dracula .dv-groupview.dv-active-group > .dv-tabs-and-actions-container .dv-tabs-container > .dv-tab.dv-active-tab {
  position: relative;
}
.dockview-theme-dracula .dv-groupview.dv-active-group > .dv-tabs-and-actions-container .dv-tabs-container > .dv-tab.dv-active-tab::after {
  position: absolute;
  left: 0px;
  top: 0px;
  content: "";
  width: 100%;
  height: 1px;
  background-color: #94527e;
  z-index: 999;
}
.dockview-theme-dracula .dv-groupview.dv-inactive-group > .dv-tabs-and-actions-container .dv-tabs-container > .dv-tab.dv-active-tab {
  position: relative;
}
.dockview-theme-dracula .dv-groupview.dv-inactive-group > .dv-tabs-and-actions-container .dv-tabs-container > .dv-tab.dv-active-tab::after {
  position: absolute;
  left: 0px;
  bottom: 0px;
  content: "";
  width: 100%;
  height: 1px;
  background-color: #5e3d5a;
  z-index: 999;
}

.dockview-theme-replit {
  --dv-paneview-active-outline-color: dodgerblue;
  --dv-tabs-and-actions-container-font-size: 13px;
  --dv-tabs-and-actions-container-height: 35px;
  --dv-drag-over-background-color: rgba(83, 89, 93, 0.5);
  --dv-drag-over-border-color: transparent;
  --dv-tabs-container-scrollbar-color: #888;
  --dv-icon-hover-background-color: rgba(90, 93, 94, 0.31);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(83, 89, 93, 0.5);
  --dv-overlay-z-index: 999;
  --dv-tab-font-size: inherit;
  --dv-border-radius: 0px;
  --dv-tab-margin: 0;
  --dv-sash-color: transparent;
  --dv-active-sash-color: transparent;
  --dv-active-sash-transition-duration: 0.1s;
  --dv-active-sash-transition-delay: 0.5s;
  box-sizing: border-box;
  padding: 10px;
  background-color: #ebeced;
  --dv-group-view-background-color: #ebeced;
  --dv-tabs-and-actions-container-background-color: #fcfcfc;
  --dv-activegroup-visiblepanel-tab-background-color: #f0f1f2;
  --dv-activegroup-hiddenpanel-tab-background-color: #fcfcfc;
  --dv-inactivegroup-visiblepanel-tab-background-color: #f0f1f2;
  --dv-inactivegroup-hiddenpanel-tab-background-color: #fcfcfc;
  --dv-tab-divider-color: transparent;
  --dv-activegroup-visiblepanel-tab-color: rgb(51, 51, 51);
  --dv-activegroup-hiddenpanel-tab-color: rgb(51, 51, 51);
  --dv-inactivegroup-visiblepanel-tab-color: rgb(51, 51, 51);
  --dv-inactivegroup-hiddenpanel-tab-color: rgb(51, 51, 51);
  --dv-separator-border: transparent;
  --dv-paneview-header-border-color: rgb(51, 51, 51);
  --dv-sash-color: #cfd1d3;
  --dv-active-sash-color: #babbbb;
}
.dockview-theme-replit .dv-drop-target-container .dv-drop-target-anchor.dv-drop-target-anchor-container-changed {
  opacity: 0;
  transition: none;
}
.dockview-theme-replit .dv-resize-container:has(> .dv-groupview) {
  border-radius: 8px;
}
.dockview-theme-replit .dv-resize-container {
  border-radius: 10px !important;
  border: none;
}
.dockview-theme-replit .dv-groupview {
  overflow: hidden;
  border-radius: 10px;
}
.dockview-theme-replit .dv-groupview .dv-tabs-and-actions-container {
  border-bottom: 1px solid rgba(128, 128, 128, 0.35);
}
.dockview-theme-replit .dv-groupview .dv-tabs-and-actions-container .dv-tab {
  margin: 4px;
  border-radius: 8px;
}
.dockview-theme-replit .dv-groupview .dv-tabs-and-actions-container .dv-tab .dv-svg {
  height: 8px;
  width: 8px;
}
.dockview-theme-replit .dv-groupview .dv-tabs-and-actions-container .dv-tab:hover {
  background-color: #e4e5e6 !important;
}
.dockview-theme-replit .dv-groupview .dv-content-container {
  background-color: #fcfcfc;
}
.dockview-theme-replit .dv-groupview.dv-active-group {
  border: 1px solid rgba(128, 128, 128, 0.35);
}
.dockview-theme-replit .dv-groupview.dv-inactive-group {
  border: 1px solid transparent;
}
.dockview-theme-replit .dv-vertical > .dv-sash-container > .dv-sash {
  background-color: transparent;
}
.dockview-theme-replit .dv-vertical > .dv-sash-container > .dv-sash:not(.disabled)::after {
  content: "";
  height: 4px;
  width: 40px;
  border-radius: 2px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--dv-sash-color);
  position: absolute;
}
.dockview-theme-replit .dv-vertical > .dv-sash-container > .dv-sash:not(.disabled):hover, .dockview-theme-replit .dv-vertical > .dv-sash-container > .dv-sash:not(.disabled):active {
  background-color: transparent;
}
.dockview-theme-replit .dv-vertical > .dv-sash-container > .dv-sash:not(.disabled):hover::after, .dockview-theme-replit .dv-vertical > .dv-sash-container > .dv-sash:not(.disabled):active::after {
  background-color: var(--dv-active-sash-color);
}
.dockview-theme-replit .dv-horizontal > .dv-sash-container > .dv-sash {
  background-color: transparent;
}
.dockview-theme-replit .dv-horizontal > .dv-sash-container > .dv-sash:not(.disabled)::after {
  content: "";
  height: 40px;
  width: 4px;
  border-radius: 2px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--dv-sash-color);
  position: absolute;
}
.dockview-theme-replit .dv-horizontal > .dv-sash-container > .dv-sash:not(.disabled):hover, .dockview-theme-replit .dv-horizontal > .dv-sash-container > .dv-sash:not(.disabled):active {
  background-color: transparent;
}
.dockview-theme-replit .dv-horizontal > .dv-sash-container > .dv-sash:not(.disabled):hover::after, .dockview-theme-replit .dv-horizontal > .dv-sash-container > .dv-sash:not(.disabled):active::after {
  background-color: var(--dv-active-sash-color);
}

.dockview-theme-abyss-spaced {
  --dv-paneview-active-outline-color: dodgerblue;
  --dv-tabs-and-actions-container-font-size: 13px;
  --dv-tabs-and-actions-container-height: 35px;
  --dv-drag-over-background-color: rgba(83, 89, 93, 0.5);
  --dv-drag-over-border-color: transparent;
  --dv-tabs-container-scrollbar-color: #888;
  --dv-icon-hover-background-color: rgba(90, 93, 94, 0.31);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(83, 89, 93, 0.5);
  --dv-overlay-z-index: 999;
  --dv-tab-font-size: inherit;
  --dv-border-radius: 0px;
  --dv-tab-margin: 0;
  --dv-sash-color: transparent;
  --dv-active-sash-color: transparent;
  --dv-active-sash-transition-duration: 0.1s;
  --dv-active-sash-transition-delay: 0.5s;
  --dv-tab-font-size: 12px;
  --dv-border-radius: 20px;
  --dv-tab-margin: 0.5rem 0.25rem;
  --dv-tabs-and-actions-container-height: 44px;
  --dv-border-radius: 20px;
  box-sizing: border-box;
  --dv-color-abyss-dark: rgb(11, 6, 17);
  --dv-color-abyss: #16121f;
  --dv-color-abyss-light: #201d2b;
  --dv-color-abyss-lighter: #2a2837;
  --dv-color-abyss-accent: rgb(91, 30, 207);
  --dv-color-abyss-primary-text: white;
  --dv-color-abyss-secondary-text: rgb(148, 151, 169);
  --dv-drag-over-border: 2px solid var(--dv-color-abyss-accent);
  --dv-drag-over-background-color: "";
  --dv-group-view-background-color: var(--dv-color-abyss-dark);
  --dv-tabs-and-actions-container-background-color: var(--dv-color-abyss);
  --dv-activegroup-visiblepanel-tab-background-color: var(
      --dv-color-abyss-lighter
  );
  --dv-activegroup-hiddenpanel-tab-background-color: var(
      --dv-color-abyss-light
  );
  --dv-inactivegroup-visiblepanel-tab-background-color: var(
      --dv-color-abyss-lighter
  );
  --dv-inactivegroup-hiddenpanel-tab-background-color: var(
      --dv-color-abyss-light
  );
  --dv-tab-divider-color: transparent;
  --dv-activegroup-visiblepanel-tab-color: var(--dv-color-abyss-primary-text);
  --dv-activegroup-hiddenpanel-tab-color: var(
      --dv-color-abyss-secondary-text
  );
  --dv-inactivegroup-visiblepanel-tab-color: var(
      --dv-color-abyss-primary-text
  );
  --dv-inactivegroup-hiddenpanel-tab-color: var(
      --dv-color-abyss-secondary-text
  );
  --dv-separator-border: transparent;
  --dv-paneview-header-border-color: rgb(51, 51, 51);
  --dv-active-sash-color: var(--dv-color-abyss-accent);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(0, 0, 0, 0.5);
  padding: 10px;
  background-color: var(--dv-color-abyss-dark);
}
.dockview-theme-abyss-spaced .dv-resize-container:has(> .dv-groupview) {
  border-radius: 8px;
}
.dockview-theme-abyss-spaced .dv-sash {
  border-radius: 4px;
}
.dockview-theme-abyss-spaced .dv-drop-target-anchor {
  border-radius: calc(var(--dv-border-radius) / 4);
}
.dockview-theme-abyss-spaced .dv-drop-target-anchor.dv-drop-target-content {
  border-radius: var(--dv-border-radius);
}
.dockview-theme-abyss-spaced .dv-resize-container {
  border-radius: var(--dv-border-radius) !important;
  border: none;
}
.dockview-theme-abyss-spaced .dv-tabs-overflow-container,
.dockview-theme-abyss-spaced .dv-tabs-overflow-dropdown-default {
  border-radius: 8px;
  height: unset !important;
}
.dockview-theme-abyss-spaced .dv-tab {
  border-radius: 8px;
}
.dockview-theme-abyss-spaced .dv-tab .dv-svg {
  height: 8px;
  width: 8px;
}
.dockview-theme-abyss-spaced .dv-groupview {
  border-radius: var(--dv-border-radius);
}
.dockview-theme-abyss-spaced .dv-groupview .dv-tabs-and-actions-container {
  padding: 0px calc(var(--dv-border-radius) / 2);
}
.dockview-theme-abyss-spaced .dv-groupview .dv-content-container {
  background-color: var(--dv-tabs-and-actions-container-background-color);
}
.dockview-theme-abyss-spaced .dv-resize-container .dv-groupview {
  border: 2px solid var(--dv-color-abyss-dark);
}

.dockview-theme-light-spaced {
  --dv-paneview-active-outline-color: dodgerblue;
  --dv-tabs-and-actions-container-font-size: 13px;
  --dv-tabs-and-actions-container-height: 35px;
  --dv-drag-over-background-color: rgba(83, 89, 93, 0.5);
  --dv-drag-over-border-color: transparent;
  --dv-tabs-container-scrollbar-color: #888;
  --dv-icon-hover-background-color: rgba(90, 93, 94, 0.31);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(83, 89, 93, 0.5);
  --dv-overlay-z-index: 999;
  --dv-tab-font-size: inherit;
  --dv-border-radius: 0px;
  --dv-tab-margin: 0;
  --dv-sash-color: transparent;
  --dv-active-sash-color: transparent;
  --dv-active-sash-transition-duration: 0.1s;
  --dv-active-sash-transition-delay: 0.5s;
  --dv-tab-font-size: 12px;
  --dv-border-radius: 20px;
  --dv-tab-margin: 0.5rem 0.25rem;
  --dv-tabs-and-actions-container-height: 44px;
  --dv-border-radius: 20px;
  box-sizing: border-box;
  --dv-drag-over-border: 2px solid rgb(91, 30, 207);
  --dv-drag-over-background-color: "";
  --dv-group-view-background-color: #f6f5f9;
  --dv-tabs-and-actions-container-background-color: white;
  --dv-activegroup-visiblepanel-tab-background-color: #ededf0;
  --dv-activegroup-hiddenpanel-tab-background-color: #f9f9fa;
  --dv-inactivegroup-visiblepanel-tab-background-color: #ededf0;
  --dv-inactivegroup-hiddenpanel-tab-background-color: #f9f9fa;
  --dv-tab-divider-color: transparent;
  --dv-activegroup-visiblepanel-tab-color: rgb(104, 107, 130);
  --dv-activegroup-hiddenpanel-tab-color: rgb(148, 151, 169);
  --dv-inactivegroup-visiblepanel-tab-color: rgb(104, 107, 130);
  --dv-inactivegroup-hiddenpanel-tab-color: rgb(148, 151, 169);
  --dv-separator-border: transparent;
  --dv-paneview-header-border-color: rgb(51, 51, 51);
  --dv-active-sash-color: rgb(91, 30, 207);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(0, 0, 0, 0.1);
  padding: 10px;
  background-color: #f6f5f9;
  --dv-scrollbar-background-color: rgba(0, 0, 0, 0.25);
}
.dockview-theme-light-spaced .dv-resize-container:has(> .dv-groupview) {
  border-radius: 8px;
}
.dockview-theme-light-spaced .dv-sash {
  border-radius: 4px;
}
.dockview-theme-light-spaced .dv-drop-target-anchor {
  border-radius: calc(var(--dv-border-radius) / 4);
}
.dockview-theme-light-spaced .dv-drop-target-anchor.dv-drop-target-content {
  border-radius: var(--dv-border-radius);
}
.dockview-theme-light-spaced .dv-resize-container {
  border-radius: var(--dv-border-radius) !important;
  border: none;
}
.dockview-theme-light-spaced .dv-tabs-overflow-container,
.dockview-theme-light-spaced .dv-tabs-overflow-dropdown-default {
  border-radius: 8px;
  height: unset !important;
}
.dockview-theme-light-spaced .dv-tab {
  border-radius: 8px;
}
.dockview-theme-light-spaced .dv-tab .dv-svg {
  height: 8px;
  width: 8px;
}
.dockview-theme-light-spaced .dv-groupview {
  border-radius: var(--dv-border-radius);
}
.dockview-theme-light-spaced .dv-groupview .dv-tabs-and-actions-container {
  padding: 0px calc(var(--dv-border-radius) / 2);
}
.dockview-theme-light-spaced .dv-groupview .dv-content-container {
  background-color: var(--dv-tabs-and-actions-container-background-color);
}
.dockview-theme-light-spaced .dv-resize-container .dv-groupview {
  border: 2px solid rgba(255, 255, 255, 0.1);
}
.dv-drop-target-container {
  position: absolute;
  z-index: 9999;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  pointer-events: none;
  overflow: hidden;
  --dv-transition-duration: 300ms;
}
.dv-drop-target-container .dv-drop-target-anchor {
  position: relative;
  border: var(--dv-drag-over-border);
  background-color: var(--dv-drag-over-background-color);
  opacity: 1;
  /* GPU optimizations */
  will-change: transform, opacity;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  contain: layout paint;
  transition: opacity var(--dv-transition-duration) ease-in, top var(--dv-transition-duration) ease-out, left var(--dv-transition-duration) ease-out, width var(--dv-transition-duration) ease-out, height var(--dv-transition-duration) ease-out;
}
.dv-drop-target {
  position: relative;
  --dv-transition-duration: 70ms;
}
.dv-drop-target > .dv-drop-target-dropzone {
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100%;
  width: 100%;
  z-index: 1000;
  pointer-events: none;
}
.dv-drop-target > .dv-drop-target-dropzone > .dv-drop-target-selection {
  position: relative;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  border: var(--dv-drag-over-border);
  background-color: var(--dv-drag-over-background-color);
  transition: top var(--dv-transition-duration) ease-out, left var(--dv-transition-duration) ease-out, width var(--dv-transition-duration) ease-out, height var(--dv-transition-duration) ease-out, opacity var(--dv-transition-duration) ease-out;
  will-change: transform;
  pointer-events: none;
}
.dv-drop-target > .dv-drop-target-dropzone > .dv-drop-target-selection.dv-drop-target-top.dv-drop-target-small-vertical {
  border-top: 1px solid var(--dv-drag-over-border-color);
}
.dv-drop-target > .dv-drop-target-dropzone > .dv-drop-target-selection.dv-drop-target-bottom.dv-drop-target-small-vertical {
  border-bottom: 1px solid var(--dv-drag-over-border-color);
}
.dv-drop-target > .dv-drop-target-dropzone > .dv-drop-target-selection.dv-drop-target-left.dv-drop-target-small-horizontal {
  border-left: 1px solid var(--dv-drag-over-border-color);
}
.dv-drop-target > .dv-drop-target-dropzone > .dv-drop-target-selection.dv-drop-target-right.dv-drop-target-small-horizontal {
  border-right: 1px solid var(--dv-drag-over-border-color);
}
.dv-dockview {
  position: relative;
  background-color: var(--dv-group-view-background-color);
  contain: layout;
}
.dv-dockview .dv-watermark-container {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  z-index: 1;
}
.dv-dockview .dv-overlay-render-container {
  position: relative;
}

.dv-groupview.dv-active-group > .dv-tabs-and-actions-container .dv-tabs-container > .dv-tab.dv-active-tab {
  background-color: var(--dv-activegroup-visiblepanel-tab-background-color);
  color: var(--dv-activegroup-visiblepanel-tab-color);
}
.dv-groupview.dv-active-group > .dv-tabs-and-actions-container .dv-tabs-container > .dv-tab.dv-inactive-tab {
  background-color: var(--dv-activegroup-hiddenpanel-tab-background-color);
  color: var(--dv-activegroup-hiddenpanel-tab-color);
}
.dv-groupview.dv-inactive-group > .dv-tabs-and-actions-container .dv-tabs-container > .dv-tab.dv-active-tab {
  background-color: var(--dv-inactivegroup-visiblepanel-tab-background-color);
  color: var(--dv-inactivegroup-visiblepanel-tab-color);
}
.dv-groupview.dv-inactive-group > .dv-tabs-and-actions-container .dv-tabs-container > .dv-tab.dv-inactive-tab {
  background-color: var(--dv-inactivegroup-hiddenpanel-tab-background-color);
  color: var(--dv-inactivegroup-hiddenpanel-tab-color);
}

/**
 * when a tab is dragged we lose the above stylings because they are conditional on parent elements
 * therefore we also set some stylings for the dragging event
 **/
.dv-tab.dv-tab-dragging {
  background-color: var(--dv-activegroup-visiblepanel-tab-background-color);
  color: var(--dv-activegroup-visiblepanel-tab-color);
}
.dv-groupview {
  display: flex;
  height: 100%;
  background-color: var(--dv-group-view-background-color);
  overflow: hidden;
  flex-direction: column;
}
.dv-groupview:focus {
  outline: none;
}
.dv-groupview > .dv-content-container {
  flex-grow: 1;
  min-height: 0;
  outline: none;
}
.dv-groupview.dv-groupview-header-bottom {
  flex-direction: column-reverse;
}
.dv-groupview.dv-groupview-header-left {
  flex-direction: row;
}
.dv-groupview.dv-groupview-header-right {
  flex-direction: row-reverse;
}
.dv-root-wrapper {
  height: 100%;
  width: 100%;
}
.dv-grid-view,
.dv-branch-node {
  height: 100%;
  width: 100%;
}
.dv-debug .dv-resize-container .dv-resize-handle-top {
  background-color: red;
}
.dv-debug .dv-resize-container .dv-resize-handle-bottom {
  background-color: green;
}
.dv-debug .dv-resize-container .dv-resize-handle-left {
  background-color: yellow;
}
.dv-debug .dv-resize-container .dv-resize-handle-right {
  background-color: blue;
}
.dv-debug .dv-resize-container .dv-resize-handle-topleft,
.dv-debug .dv-resize-container .dv-resize-handle-topright,
.dv-debug .dv-resize-container .dv-resize-handle-bottomleft,
.dv-debug .dv-resize-container .dv-resize-handle-bottomright {
  background-color: cyan;
}

.dv-resize-container {
  --dv-overlay-z-index: var(--dv-overlay-z-index, 999);
  position: absolute;
  z-index: calc(var(--dv-overlay-z-index) - 2);
  border: 1px solid var(--dv-tab-divider-color);
  box-shadow: var(--dv-floating-box-shadow);
  /* GPU optimizations for floating group movement */
  will-change: transform, opacity;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
}
.dv-resize-container.dv-hidden {
  display: none;
}
.dv-resize-container.dv-resize-container-dragging {
  opacity: 0.5;
  /* Enhanced GPU acceleration during drag */
  will-change: transform, opacity;
}
.dv-resize-container .dv-resize-handle-top {
  height: 4px;
  width: calc(100% - 8px);
  left: 4px;
  top: -2px;
  z-index: var(--dv-overlay-z-index);
  position: absolute;
  cursor: ns-resize;
}
.dv-resize-container .dv-resize-handle-bottom {
  height: 4px;
  width: calc(100% - 8px);
  left: 4px;
  bottom: -2px;
  z-index: var(--dv-overlay-z-index);
  position: absolute;
  cursor: ns-resize;
}
.dv-resize-container .dv-resize-handle-left {
  height: calc(100% - 8px);
  width: 4px;
  left: -2px;
  top: 4px;
  z-index: var(--dv-overlay-z-index);
  position: absolute;
  cursor: ew-resize;
}
.dv-resize-container .dv-resize-handle-right {
  height: calc(100% - 8px);
  width: 4px;
  right: -2px;
  top: 4px;
  z-index: var(--dv-overlay-z-index);
  position: absolute;
  cursor: ew-resize;
}
.dv-resize-container .dv-resize-handle-topleft {
  height: 4px;
  width: 4px;
  top: -2px;
  left: -2px;
  z-index: var(--dv-overlay-z-index);
  position: absolute;
  cursor: nw-resize;
}
.dv-resize-container .dv-resize-handle-topright {
  height: 4px;
  width: 4px;
  right: -2px;
  top: -2px;
  z-index: var(--dv-overlay-z-index);
  position: absolute;
  cursor: ne-resize;
}
.dv-resize-container .dv-resize-handle-bottomleft {
  height: 4px;
  width: 4px;
  left: -2px;
  bottom: -2px;
  z-index: var(--dv-overlay-z-index);
  position: absolute;
  cursor: sw-resize;
}
.dv-resize-container .dv-resize-handle-bottomright {
  height: 4px;
  width: 4px;
  right: -2px;
  bottom: -2px;
  z-index: var(--dv-overlay-z-index);
  position: absolute;
  cursor: se-resize;
}
.dv-render-overlay {
  --dv-overlay-z-index: var(--dv-overlay-z-index, 999);
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  contain: layout paint;
  isolation: isolate;
  /* GPU optimizations */
  will-change: transform;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
}
.dv-render-overlay.dv-render-overlay-float {
  z-index: calc(var(--dv-overlay-z-index) - 1);
}

.dv-debug .dv-render-overlay {
  outline: 1px solid red;
  outline-offset: -1;
}
.dv-pane-container {
  height: 100%;
  width: 100%;
}
.dv-pane-container.dv-animated .dv-view {
  /* GPU optimizations for smooth pane animations */
  will-change: transform;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  transition: transform 0.15s ease-out;
}
.dv-pane-container .dv-view {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0px !important;
}
.dv-pane-container .dv-view:not(:first-child)::before {
  background-color: transparent !important;
}
.dv-pane-container .dv-view:not(:first-child) .dv-pane > .dv-pane-header {
  border-top: 1px solid var(--dv-paneview-header-border-color);
}
.dv-pane-container .dv-view .dv-default-header {
  background-color: var(--dv-group-view-background-color);
  color: var(--dv-activegroup-visiblepanel-tab-color);
  display: flex;
  padding: 0px 8px;
  cursor: pointer;
}
.dv-pane-container .dv-view .dv-default-header .dv-pane-header-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
.dv-pane-container .dv-view .dv-default-header > span {
  padding-left: 8px;
  flex-grow: 1;
}
.dv-pane-container:first-of-type > .dv-pane > .dv-pane-header {
  border-top: none !important;
}
.dv-pane-container .dv-pane {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
}
.dv-pane-container .dv-pane .dv-pane-header {
  box-sizing: border-box;
  user-select: none;
  position: relative;
  outline: none;
}
.dv-pane-container .dv-pane .dv-pane-header.dv-pane-draggable {
  cursor: pointer;
}
.dv-pane-container .dv-pane .dv-pane-header:focus:before, .dv-pane-container .dv-pane .dv-pane-header:focus-within:before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  content: "";
  pointer-events: none;
  outline: 1px solid;
  outline-width: -1px;
  outline-style: solid;
  outline-offset: -1px;
  outline-color: var(--dv-paneview-active-outline-color);
}
.dv-pane-container .dv-pane .dv-pane-body {
  overflow-y: auto;
  overflow-x: hidden;
  flex-grow: 1;
  position: relative;
  outline: none;
}
.dv-pane-container .dv-pane .dv-pane-body:focus:before, .dv-pane-container .dv-pane .dv-pane-body:focus-within:before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  content: "";
  pointer-events: none;
  outline: 1px solid;
  outline-width: -1px;
  outline-style: solid;
  outline-offset: -1px;
  outline-color: var(--dv-paneview-active-outline-color);
}
.dv-debug .dv-split-view-container .dv-sash-container .dv-sash.dv-enabled {
  background-color: black;
}
.dv-debug .dv-split-view-container .dv-sash-container .dv-sash.dv-disabled {
  background-color: orange;
}
.dv-debug .dv-split-view-container .dv-sash-container .dv-sash.dv-maximum {
  background-color: green;
}
.dv-debug .dv-split-view-container .dv-sash-container .dv-sash.dv-minimum {
  background-color: red;
}

.dv-split-view-container {
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
}
.dv-split-view-container.dv-splitview-disabled > .dv-sash-container > .dv-sash {
  pointer-events: none;
}
.dv-split-view-container.dv-animation .dv-view,
.dv-split-view-container.dv-animation .dv-sash {
  /* GPU optimizations for smooth animations */
  will-change: transform;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  transition: transform 0.15s ease-out;
}
.dv-split-view-container.dv-horizontal {
  height: 100%;
}
.dv-split-view-container.dv-horizontal > .dv-sash-container > .dv-sash {
  height: 100%;
  width: 4px;
}
.dv-split-view-container.dv-horizontal > .dv-sash-container > .dv-sash.dv-enabled {
  cursor: ew-resize;
}
.dv-split-view-container.dv-horizontal > .dv-sash-container > .dv-sash.dv-disabled {
  cursor: default;
}
.dv-split-view-container.dv-horizontal > .dv-sash-container > .dv-sash.dv-maximum {
  cursor: w-resize;
}
.dv-split-view-container.dv-horizontal > .dv-sash-container > .dv-sash.dv-minimum {
  cursor: e-resize;
}
.dv-split-view-container.dv-horizontal > .dv-view-container > .dv-view:not(:first-child)::before {
  height: 100%;
  width: 1px;
}
.dv-split-view-container.dv-vertical {
  width: 100%;
}
.dv-split-view-container.dv-vertical > .dv-sash-container > .dv-sash {
  width: 100%;
  height: 4px;
}
.dv-split-view-container.dv-vertical > .dv-sash-container > .dv-sash.dv-enabled {
  cursor: ns-resize;
}
.dv-split-view-container.dv-vertical > .dv-sash-container > .dv-sash.dv-disabled {
  cursor: default;
}
.dv-split-view-container.dv-vertical > .dv-sash-container > .dv-sash.dv-maximum {
  cursor: n-resize;
}
.dv-split-view-container.dv-vertical > .dv-sash-container > .dv-sash.dv-minimum {
  cursor: s-resize;
}
.dv-split-view-container.dv-vertical > .dv-view-container > .dv-view {
  width: 100%;
}
.dv-split-view-container.dv-vertical > .dv-view-container > .dv-view:not(:first-child)::before {
  height: 1px;
  width: 100%;
}
.dv-split-view-container .dv-sash-container {
  height: 100%;
  width: 100%;
  position: absolute;
}
.dv-split-view-container .dv-sash-container .dv-sash {
  position: absolute;
  z-index: 99;
  outline: none;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  touch-action: none;
  background-color: var(--dv-sash-color, transparent);
}
.dv-split-view-container .dv-sash-container .dv-sash:not(.disabled):active, .dv-split-view-container .dv-sash-container .dv-sash:not(.disabled):hover {
  background-color: var(--dv-active-sash-color, transparent);
  transition-property: background-color;
  transition-timing-function: ease-in-out;
  transition-duration: var(--dv-active-sash-transition-duration, 0.1s);
  transition-delay: var(--dv-active-sash-transition-delay, 0.5s);
}
.dv-split-view-container .dv-view-container {
  position: relative;
  height: 100%;
  width: 100%;
}
.dv-split-view-container .dv-view-container .dv-view {
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
  position: absolute;
}
.dv-split-view-container.dv-separator-border .dv-view:not(:first-child)::before {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  pointer-events: none;
  background-color: var(--dv-separator-border);
}
.dv-dragged {
  transform: translate3d(0px, 0px, 0px); /* forces tab to be drawn on a separate layer (see https://github.com/microsoft/vscode/issues/18733) */
}

.dv-tab {
  flex-shrink: 0;
}
.dv-tab:focus-within, .dv-tab:focus {
  position: relative;
}
.dv-tab:focus-within::after, .dv-tab:focus::after {
  position: absolute;
  content: "";
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  pointer-events: none;
  outline: 1px solid var(--dv-tab-divider-color) !important;
  outline-offset: -1px;
  z-index: 5;
}
.dv-tab.dv-tab-dragging .dv-default-tab-action {
  background-color: var(--dv-activegroup-visiblepanel-tab-color);
}
.dv-tab.dv-active-tab .dv-default-tab .dv-default-tab-action {
  visibility: visible;
}
.dv-tab.dv-inactive-tab .dv-default-tab .dv-default-tab-action {
  visibility: hidden;
}
.dv-tab.dv-inactive-tab .dv-default-tab:hover .dv-default-tab-action {
  visibility: visible;
}
.dv-tab .dv-default-tab {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.dv-tab .dv-default-tab .dv-default-tab-content {
  flex-grow: 1;
  margin-right: 4px;
}
.dv-tab .dv-default-tab .dv-default-tab-action {
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}
.dv-tab .dv-default-tab .dv-default-tab-action:hover {
  border-radius: 2px;
  background-color: var(--dv-icon-hover-background-color);
}
.dv-tabs-overflow-dropdown-default {
  height: 100%;
  color: var(--dv-activegroup-hiddenpanel-tab-color);
  margin: var(--dv-tab-margin);
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
}
.dv-tabs-overflow-dropdown-default > span {
  padding-left: 0.25rem;
}
.dv-tabs-overflow-dropdown-default > svg {
  transform: rotate(90deg);
}
.dv-tabs-overflow-dropdown-default:hover {
  border-radius: 2px;
  background-color: var(--dv-icon-hover-background-color);
}
.dv-tabs-container {
  display: flex;
  height: 100%;
  overflow: auto;
  scrollbar-width: thin;
  /* GPU optimizations for smooth scrolling */
  will-change: scroll-position;
  transform: translate3d(0, 0, 0);
  /* Track */
  /* Handle */
}
.dv-tabs-container.dv-tabs-container-vertical {
  width: 100%;
  height: fit-content;
  max-height: 100%;
  writing-mode: vertical-rl;
}
.dv-tabs-container.dv-horizontal .dv-tab:not(:first-child)::before, .dv-tabs-container.dv-vertical .dv-tab:not(:first-child)::before {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  pointer-events: none;
  background-color: var(--dv-tab-divider-color);
}
.dv-tabs-container.dv-horizontal .dv-tab:not(:first-child)::before {
  width: 1px;
  height: 100%;
}
.dv-tabs-container.dv-vertical .dv-tab:not(:first-child)::before {
  width: 100%;
  height: 1px;
}
.dv-tabs-container::-webkit-scrollbar {
  height: 3px;
}
.dv-tabs-container::-webkit-scrollbar-track {
  background: transparent;
}
.dv-tabs-container::-webkit-scrollbar-thumb {
  background: var(--dv-tabs-container-scrollbar-color);
}

.dv-scrollable > .dv-tabs-container {
  overflow: hidden;
}

.dv-tab {
  -webkit-user-drag: element;
  outline: none;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  font-size: var(--dv-tab-font-size);
  margin: var(--dv-tab-margin);
}
.dv-tab.dv-tab--shifting {
  will-change: margin-left;
  transition: transform var(--dv-transition-duration, 200ms) ease-out, margin-left var(--dv-transition-duration, 200ms) ease-out;
}
.dv-tab.dv-tab--dragging {
  width: 0 !important;
  min-width: 0 !important;
  padding: 0 !important;
  margin: 0 !important;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  transition: width var(--dv-transition-duration, 200ms) ease-out, padding var(--dv-transition-duration, 200ms) ease-out, margin var(--dv-transition-duration, 200ms) ease-out, opacity var(--dv-transition-duration, 200ms) ease-out;
}

@media (prefers-reduced-motion: reduce) {
  .dv-tab {
    transition: none !important;
  }
}
.dv-tabs-container-vertical .dv-tab {
  padding: 0.5rem 0.25rem;
}

.dv-tabs-overflow-container {
  flex-direction: column;
  height: unset;
  font-size: var(--dv-tabs-and-actions-container-font-size);
  max-height: min(50vh, 400px);
  overflow-y: auto;
  border: 1px solid var(--dv-tab-divider-color);
  background-color: var(--dv-group-view-background-color);
  /* Scrollbar styling for webkit browsers */
  /* Firefox scrollbar */
  scrollbar-width: thin;
}
.dv-tabs-overflow-container::-webkit-scrollbar {
  width: 6px;
}
.dv-tabs-overflow-container::-webkit-scrollbar-track {
  background: transparent;
}
.dv-tabs-overflow-container::-webkit-scrollbar-thumb {
  background: var(--dv-tabs-container-scrollbar-color);
  border-radius: 3px;
}
.dv-tabs-overflow-container .dv-tab:not(:last-child) {
  border-bottom: 1px solid var(--dv-tab-divider-color);
}
.dv-tabs-overflow-container .dv-active-tab {
  background-color: var(--dv-activegroup-visiblepanel-tab-background-color);
  color: var(--dv-activegroup-visiblepanel-tab-color);
}
.dv-tabs-overflow-container .dv-inactive-tab {
  background-color: var(--dv-activegroup-hiddenpanel-tab-background-color);
  color: var(--dv-activegroup-hiddenpanel-tab-color);
}
.dv-tabs-and-actions-container {
  display: flex;
  background-color: var(--dv-tabs-and-actions-container-background-color);
  flex-shrink: 0;
  box-sizing: border-box;
  height: var(--dv-tabs-and-actions-container-height);
  font-size: var(--dv-tabs-and-actions-container-font-size);
}
.dv-tabs-and-actions-container.dv-single-tab.dv-full-width-single-tab .dv-scrollable {
  flex-grow: 1;
}
.dv-tabs-and-actions-container.dv-single-tab.dv-full-width-single-tab .dv-tabs-container {
  flex-grow: 1;
}
.dv-tabs-and-actions-container.dv-single-tab.dv-full-width-single-tab .dv-tabs-container .dv-tab {
  flex-grow: 1;
  padding: 0px;
}
.dv-tabs-and-actions-container.dv-single-tab.dv-full-width-single-tab .dv-void-container {
  flex-grow: 0;
}
.dv-tabs-and-actions-container .dv-void-container {
  display: flex;
  flex-grow: 1;
}
.dv-tabs-and-actions-container .dv-void-container.dv-draggable {
  cursor: grab;
}
.dv-tabs-and-actions-container .dv-right-actions-container {
  display: flex;
}
.dv-tabs-and-actions-container .dv-right-actions-container.dv-right-actions-container-vertical {
  flex-direction: column;
}
.dv-tabs-and-actions-container.dv-groupview-header-vertical {
  flex-direction: column;
  height: auto;
  width: var(--dv-tabs-and-actions-container-height);
}
.dv-watermark {
  display: flex;
  height: 100%;
}`),or=(e,t)=>{let[n,r]=R.useState(),i=R.useRef(e.componentProps);return R.useImperativeHandle(t,()=>({update:e=>{i.current=Object.assign(Object.assign({},i.current),e),r(Date.now())}}),[]),R.createElement(e.component,i.current)},or.displayName=`DockviewReactJsBridge`,sr=(()=>{let e=1;return{next:()=>`dockview_react_portal_key_${(e++).toString()}`}})(),cr=R.createContext({}),lr=class{constructor(e,t,n,r,i){this.parent=e,this.portalStore=t,this.component=n,this.parameters=r,this.context=i,this._initialProps={},this.disposed=!1,this.createPortal()}update(e){if(this.disposed)throw Error(`invalid operation: resource is already disposed`);this.componentInstance?this.componentInstance.update(e):this._initialProps=Object.assign(Object.assign({},this._initialProps),e)}createPortal(){if(this.disposed)throw Error(`invalid operation: resource is already disposed`);if(!$n(this.component))throw Error(`Dockview: Only React.memo(...), React.ForwardRef(...) and functional components are accepted as components`);let e=R.createElement(R.forwardRef(or),{component:this.component,componentProps:this.parameters,ref:e=>{this.componentInstance=e,Object.keys(this._initialProps).length>0&&(this.componentInstance.update(this._initialProps),this._initialProps={})}}),t=this.context?R.createElement(cr.Provider,{value:this.context},e):e,n=ar.createPortal(t,this.parent,sr.next());this.ref={portal:n,disposable:this.portalStore.addPortal(n)}}dispose(){var e;(e=this.ref)==null||e.disposable.dispose(),this.disposed=!0}},ur=()=>{let[e,t]=R.useState([]);return R.useDebugValue(`Portal count: ${e.length}`),[e,R.useCallback(e=>{t(t=>[...t,e]);let n=!1;return rt.from(()=>{if(n)throw Error(`invalid operation: resource already disposed`);n=!0,t(t=>t.filter(t=>t!==e))})},[])]},dr=class{get element(){return this._element}constructor(e,t,n){this.id=e,this.component=t,this.reactPortalStore=n,this._onDidFocus=new k,this.onDidFocus=this._onDidFocus.event,this._onDidBlur=new k,this.onDidBlur=this._onDidBlur.event,this._element=document.createElement(`div`),this._element.className=`dv-react-part`,this._element.style.height=`100%`,this._element.style.width=`100%`}focus(){}init(e){this.part=new lr(this.element,this.reactPortalStore,this.component,{params:e.params,api:e.api,containerApi:e.containerApi})}update(e){var t;(t=this.part)==null||t.update({params:e.params})}layout(e,t){}dispose(){var e;this._onDidFocus.dispose(),this._onDidBlur.dispose(),(e=this.part)==null||e.dispose()}},fr=class{get element(){return this._element}constructor(e,t,n){this.id=e,this.component=t,this.reactPortalStore=n,this._element=document.createElement(`div`),this._element.className=`dv-react-part`,this._element.style.height=`100%`,this._element.style.width=`100%`}focus(){}init(e){this.part=new lr(this.element,this.reactPortalStore,this.component,{params:e.params,api:e.api,containerApi:e.containerApi,tabLocation:e.tabLocation})}update(e){var t;(t=this.part)==null||t.update({params:e.params})}layout(e,t){}dispose(){var e;(e=this.part)==null||e.dispose()}},pr=class{get element(){return this._element}constructor(e,t,n){this.id=e,this.component=t,this.reactPortalStore=n,this._element=document.createElement(`div`),this._element.className=`dv-react-part`,this._element.style.height=`100%`,this._element.style.width=`100%`}init(e){this.part=new lr(this.element,this.reactPortalStore,this.component,{group:e.group,containerApi:e.containerApi})}focus(){}update(e){var t;this.parameters&&(this.parameters.params=e.params),(t=this.part)==null||t.update({params:this.parameters?.params??{}})}layout(e,t){}dispose(){var e;(e=this.part)==null||e.dispose()}},mr=class{get element(){return this._element}get part(){return this._part}constructor(e,t,n){this.component=e,this.reactPortalStore=t,this._group=n,this.mutableDisposable=new j,this._element=document.createElement(`div`),this._element.className=`dv-react-part`,this._element.style.height=`100%`,this._element.style.width=`100%`}init(e){this.mutableDisposable.value=new A(this._group.model.onDidAddPanel(()=>{this.updatePanels()}),this._group.model.onDidRemovePanel(()=>{this.updatePanels()}),this._group.model.onDidActivePanelChange(()=>{this.updateActivePanel()}),e.api.onDidActiveChange(()=>{this.updateGroupActive()})),this._part=new lr(this.element,this.reactPortalStore,this.component,{api:e.api,containerApi:e.containerApi,panels:this._group.model.panels,activePanel:this._group.model.activePanel,isGroupActive:this._group.api.isActive,group:this._group,headerPosition:this._group.model.headerPosition})}dispose(){var e;this.mutableDisposable.dispose(),(e=this._part)==null||e.dispose()}update(e){var t;(t=this._part)==null||t.update(e.params)}updatePanels(){this.update({params:{panels:this._group.model.panels}})}updateActivePanel(){this.update({params:{activePanel:this._group.model.activePanel}})}updateGroupActive(){this.update({params:{isGroupActive:this._group.api.isActive}})}},hr=`props.defaultTabComponent`,gr=R.forwardRef((e,t)=>{let n=R.useRef(null),r=R.useRef(),[i,a]=ur();R.useImperativeHandle(t,()=>n.current,[]);let o=R.useRef({});return R.useEffect(()=>{let t={};cn.forEach(n=>{let r=n,i=e[r];r in e&&i!==o.current[r]&&(t[r]=i)}),r.current&&r.current.updateOptions(t),o.current=e},cn.map(t=>e[t])),R.useEffect(()=>{if(!n.current)return;let t=e.tabComponents??{};e.defaultTabComponent&&(t[hr]=e.defaultTabComponent);let i={createLeftHeaderActionComponent:er(e.leftHeaderActionsComponent,{addPortal:a}),createRightHeaderActionComponent:er(e.rightHeaderActionsComponent,{addPortal:a}),createPrefixHeaderActionComponent:er(e.prefixHeaderActionsComponent,{addPortal:a}),createComponent:t=>new dr(t.id,e.components[t.name],{addPortal:a}),createTabComponent(e){return new fr(e.id,t[e.name],{addPortal:a})},createWatermarkComponent:e.watermarkComponent?()=>new pr(`watermark`,e.watermarkComponent,{addPortal:a}):void 0,defaultTabComponent:e.defaultTabComponent?hr:void 0},o=Ue(n.current,Object.assign(Object.assign({},tr(e)),i)),{clientWidth:s,clientHeight:c}=n.current;return o.layout(s,c),e.onReady&&e.onReady({api:o}),r.current=o,()=>{r.current=void 0,o.dispose()}},[]),R.useEffect(()=>{if(!r.current)return()=>{};let t=r.current.onDidDrop(t=>{e.onDidDrop&&e.onDidDrop(t)});return()=>{t.dispose()}},[e.onDidDrop]),R.useEffect(()=>{if(!r.current)return()=>{};let t=r.current.onWillDrop(t=>{e.onWillDrop&&e.onWillDrop(t)});return()=>{t.dispose()}},[e.onWillDrop]),R.useEffect(()=>{r.current&&r.current.updateOptions({createComponent:t=>new dr(t.id,e.components[t.name],{addPortal:a})})},[e.components]),R.useEffect(()=>{if(!r.current)return;let t=e.tabComponents??{};e.defaultTabComponent&&(t[hr]=e.defaultTabComponent),r.current.updateOptions({defaultTabComponent:e.defaultTabComponent?hr:void 0,createTabComponent(e){return new fr(e.id,t[e.name],{addPortal:a})}})},[e.tabComponents,e.defaultTabComponent]),R.useEffect(()=>{r.current&&r.current.updateOptions({createWatermarkComponent:e.watermarkComponent?()=>new pr(`watermark`,e.watermarkComponent,{addPortal:a}):void 0})},[e.watermarkComponent]),R.useEffect(()=>{r.current&&r.current.updateOptions({createRightHeaderActionComponent:er(e.rightHeaderActionsComponent,{addPortal:a})})},[e.rightHeaderActionsComponent]),R.useEffect(()=>{r.current&&r.current.updateOptions({createLeftHeaderActionComponent:er(e.leftHeaderActionsComponent,{addPortal:a})})},[e.leftHeaderActionsComponent]),R.useEffect(()=>{r.current&&r.current.updateOptions({createPrefixHeaderActionComponent:er(e.prefixHeaderActionsComponent,{addPortal:a})})},[e.prefixHeaderActionsComponent]),R.createElement(`div`,{style:{height:`100%`,width:`100%`},ref:n},i)}),gr.displayName=`DockviewComponent`,_r=class extends Xn{constructor(e,t,n,r){super(e,t),this.reactComponent=n,this.reactPortalStore=r}getComponent(){return new lr(this.element,this.reactPortalStore,this.reactComponent,{params:this._params?.params??{},api:this.api,containerApi:new Et(this._params.accessor)})}},vr=R.forwardRef((e,t)=>{let n=R.useRef(null),r=R.useRef(),[i,a]=ur();R.useImperativeHandle(t,()=>n.current,[]);let o=R.useRef({});return R.useEffect(()=>{let t={};_t.forEach(n=>{let r=n,i=e[r];r in e&&i!==o.current[r]&&(t[r]=i)}),r.current&&r.current.updateOptions(t),o.current=e},_t.map(t=>e[t])),R.useEffect(()=>{if(!n.current)return()=>{};let t=We(n.current,Object.assign(Object.assign({},nr(e)),{createComponent:t=>new _r(t.id,t.name,e.components[t.name],{addPortal:a})})),{clientWidth:i,clientHeight:o}=n.current;return t.layout(i,o),e.onReady&&e.onReady({api:t}),r.current=t,()=>{r.current=void 0,t.dispose()}},[]),R.useEffect(()=>{r.current&&r.current.updateOptions({createComponent:t=>new _r(t.id,t.name,e.components[t.name],{addPortal:a})})},[e.components]),R.createElement(`div`,{style:{height:`100%`,width:`100%`},ref:n},i)}),vr.displayName=`SplitviewComponent`,yr=class extends pn{constructor(e,t,n,r){super(e,t),this.reactComponent=n,this.reactPortalStore=r}getComponent(){return new lr(this.element,this.reactPortalStore,this.reactComponent,{params:this._params?.params??{},api:this.api,containerApi:new Ot(this._params.accessor)})}},br=R.forwardRef((e,t)=>{let n=R.useRef(null),r=R.useRef(),[i,a]=ur();R.useImperativeHandle(t,()=>n.current,[]);let o=R.useRef({});return R.useEffect(()=>{let t={};St.forEach(n=>{let r=n,i=e[r];r in e&&i!==o.current[r]&&(t[r]=i)}),r.current&&r.current.updateOptions(t),o.current=e},St.map(t=>e[t])),R.useEffect(()=>{if(!n.current)return()=>{};let t=Ge(n.current,Object.assign(Object.assign({},rr(e)),{createComponent:t=>new yr(t.id,t.name,e.components[t.name],{addPortal:a})})),{clientWidth:i,clientHeight:o}=n.current;return t.layout(i,o),e.onReady&&e.onReady({api:t}),r.current=t,()=>{r.current=void 0,t.dispose()}},[]),R.useEffect(()=>{r.current&&r.current.updateOptions({createComponent:t=>new yr(t.id,t.name,e.components[t.name],{addPortal:a})})},[e.components]),R.createElement(`div`,{style:{height:`100%`,width:`100%`},ref:n},i)}),br.displayName=`GridviewComponent`,xr=class{get element(){return this._element}constructor(e,t,n){this.id=e,this.component=t,this.reactPortalStore=n,this._element=document.createElement(`div`),this._element.style.height=`100%`,this._element.style.width=`100%`}init(e){this.part=new lr(this.element,this.reactPortalStore,this.component,{params:e.params,api:e.api,title:e.title,containerApi:e.containerApi})}toJSON(){return{id:this.id}}update(e){var t;(t=this.part)==null||t.update(e.params)}dispose(){var e;(e=this.part)==null||e.dispose()}},Sr=R.forwardRef((e,t)=>{let n=R.useRef(null),r=R.useRef(),[i,a]=ur();R.useImperativeHandle(t,()=>n.current,[]);let o=R.useRef({});return R.useEffect(()=>{let t={};Rt.forEach(n=>{let r=n,i=e[r];r in e&&i!==o.current[r]&&(t[r]=i)}),r.current&&r.current.updateOptions(t),o.current=e},Rt.map(t=>e[t])),R.useEffect(()=>{if(!n.current)return()=>{};let t=e.headerComponents??{},i=Ke(n.current,Object.assign(Object.assign({},ir(e)),{createComponent:t=>new xr(t.id,e.components[t.name],{addPortal:a}),createHeaderComponent:e=>new xr(e.id,t[e.name],{addPortal:a})})),{clientWidth:o,clientHeight:s}=n.current;return i.layout(o,s),e.onReady&&e.onReady({api:i}),r.current=i,()=>{r.current=void 0,i.dispose()}},[]),R.useEffect(()=>{r.current&&r.current.updateOptions({createComponent:t=>new xr(t.id,e.components[t.name],{addPortal:a})})},[e.components]),R.useEffect(()=>{if(!r.current)return;let t=e.headerComponents??{};r.current.updateOptions({createHeaderComponent:e=>new xr(e.id,t[e.name],{addPortal:a})})},[e.headerComponents]),R.useEffect(()=>{if(!r.current)return()=>{};let t=r.current.onDidDrop(t=>{e.onDidDrop&&e.onDidDrop(t)});return()=>{t.dispose()}},[e.onDidDrop]),R.createElement(`div`,{style:{height:`100%`,width:`100%`},ref:n},i)}),Sr.displayName=`PaneviewComponent`}));function wr(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>`u`)){var r=document.head||document.getElementsByTagName(`head`)[0],i=document.createElement(`style`);i.type=`text/css`,n===`top`&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var Tr=o((()=>{Cr(),wr(`.dv-scrollable {
  position: relative;
  overflow: hidden;
}
.dv-scrollable .dv-scrollbar {
  position: absolute;
  border-radius: 2px;
  background-color: transparent;
  /* GPU optimizations */
  will-change: background-color, transform;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  transition-property: background-color;
  transition-timing-function: ease-in-out;
  transition-duration: 1s;
  transition-delay: 0s;
}
.dv-scrollable .dv-scrollbar-horizontal {
  bottom: 0px;
  left: 0px;
  height: 4px;
}
.dv-scrollable .dv-scrollbar-vertical {
  right: 0px;
  top: 0px;
  width: 4px;
}
.dv-scrollable:hover .dv-scrollbar, .dv-scrollable.dv-scrollable-resizing .dv-scrollbar, .dv-scrollable.dv-scrollable-scrolling .dv-scrollbar {
  background-color: var(--dv-scrollbar-background-color, rgba(255, 255, 255, 0.25));
}
.dv-svg {
  display: inline-block;
  fill: currentcolor;
  line-height: 1;
  stroke: currentcolor;
  stroke-width: 0;
}
.dockview-theme-dark {
  --dv-paneview-active-outline-color: dodgerblue;
  --dv-tabs-and-actions-container-font-size: 13px;
  --dv-tabs-and-actions-container-height: 35px;
  --dv-drag-over-background-color: rgba(83, 89, 93, 0.5);
  --dv-drag-over-border-color: transparent;
  --dv-tabs-container-scrollbar-color: #888;
  --dv-icon-hover-background-color: rgba(90, 93, 94, 0.31);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(83, 89, 93, 0.5);
  --dv-overlay-z-index: 999;
  --dv-tab-font-size: inherit;
  --dv-border-radius: 0px;
  --dv-tab-margin: 0;
  --dv-sash-color: transparent;
  --dv-active-sash-color: transparent;
  --dv-active-sash-transition-duration: 0.1s;
  --dv-active-sash-transition-delay: 0.5s;
  --dv-group-view-background-color: #1e1e1e;
  --dv-tabs-and-actions-container-background-color: #252526;
  --dv-activegroup-visiblepanel-tab-background-color: #1e1e1e;
  --dv-activegroup-hiddenpanel-tab-background-color: #2d2d2d;
  --dv-inactivegroup-visiblepanel-tab-background-color: #1e1e1e;
  --dv-inactivegroup-hiddenpanel-tab-background-color: #2d2d2d;
  --dv-tab-divider-color: #1e1e1e;
  --dv-activegroup-visiblepanel-tab-color: white;
  --dv-activegroup-hiddenpanel-tab-color: #969696;
  --dv-inactivegroup-visiblepanel-tab-color: #8f8f8f;
  --dv-inactivegroup-hiddenpanel-tab-color: #626262;
  --dv-separator-border: rgb(68, 68, 68);
  --dv-paneview-header-border-color: rgba(204, 204, 204, 0.2);
}
.dockview-theme-dark .dv-drop-target-container .dv-drop-target-anchor.dv-drop-target-anchor-container-changed {
  opacity: 0;
  transition: none;
}

.dockview-theme-light {
  --dv-paneview-active-outline-color: dodgerblue;
  --dv-tabs-and-actions-container-font-size: 13px;
  --dv-tabs-and-actions-container-height: 35px;
  --dv-drag-over-background-color: rgba(83, 89, 93, 0.5);
  --dv-drag-over-border-color: transparent;
  --dv-tabs-container-scrollbar-color: #888;
  --dv-icon-hover-background-color: rgba(90, 93, 94, 0.31);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(83, 89, 93, 0.5);
  --dv-overlay-z-index: 999;
  --dv-tab-font-size: inherit;
  --dv-border-radius: 0px;
  --dv-tab-margin: 0;
  --dv-sash-color: transparent;
  --dv-active-sash-color: transparent;
  --dv-active-sash-transition-duration: 0.1s;
  --dv-active-sash-transition-delay: 0.5s;
  --dv-group-view-background-color: white;
  --dv-tabs-and-actions-container-background-color: #f3f3f3;
  --dv-activegroup-visiblepanel-tab-background-color: white;
  --dv-activegroup-hiddenpanel-tab-background-color: #ececec;
  --dv-inactivegroup-visiblepanel-tab-background-color: white;
  --dv-inactivegroup-hiddenpanel-tab-background-color: #ececec;
  --dv-tab-divider-color: white;
  --dv-activegroup-visiblepanel-tab-color: rgb(51, 51, 51);
  --dv-activegroup-hiddenpanel-tab-color: rgba(51, 51, 51, 0.7);
  --dv-inactivegroup-visiblepanel-tab-color: rgba(51, 51, 51, 0.7);
  --dv-inactivegroup-hiddenpanel-tab-color: rgba(51, 51, 51, 0.35);
  --dv-separator-border: rgba(128, 128, 128, 0.35);
  --dv-paneview-header-border-color: rgb(51, 51, 51);
  --dv-scrollbar-background-color: rgba(0, 0, 0, 0.25);
}
.dockview-theme-light .dv-drop-target-container .dv-drop-target-anchor.dv-drop-target-anchor-container-changed {
  opacity: 0;
  transition: none;
}

.dockview-theme-vs {
  --dv-paneview-active-outline-color: dodgerblue;
  --dv-tabs-and-actions-container-font-size: 13px;
  --dv-tabs-and-actions-container-height: 35px;
  --dv-drag-over-background-color: rgba(83, 89, 93, 0.5);
  --dv-drag-over-border-color: transparent;
  --dv-tabs-container-scrollbar-color: #888;
  --dv-icon-hover-background-color: rgba(90, 93, 94, 0.31);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(83, 89, 93, 0.5);
  --dv-overlay-z-index: 999;
  --dv-tab-font-size: inherit;
  --dv-border-radius: 0px;
  --dv-tab-margin: 0;
  --dv-sash-color: transparent;
  --dv-active-sash-color: transparent;
  --dv-active-sash-transition-duration: 0.1s;
  --dv-active-sash-transition-delay: 0.5s;
  --dv-group-view-background-color: #1e1e1e;
  --dv-tabs-and-actions-container-background-color: #252526;
  --dv-activegroup-visiblepanel-tab-background-color: #1e1e1e;
  --dv-activegroup-hiddenpanel-tab-background-color: #2d2d2d;
  --dv-inactivegroup-visiblepanel-tab-background-color: #1e1e1e;
  --dv-inactivegroup-hiddenpanel-tab-background-color: #2d2d2d;
  --dv-tab-divider-color: #1e1e1e;
  --dv-activegroup-visiblepanel-tab-color: white;
  --dv-activegroup-hiddenpanel-tab-color: #969696;
  --dv-inactivegroup-visiblepanel-tab-color: #8f8f8f;
  --dv-inactivegroup-hiddenpanel-tab-color: #626262;
  --dv-separator-border: rgb(68, 68, 68);
  --dv-paneview-header-border-color: rgba(204, 204, 204, 0.2);
  --dv-tabs-and-actions-container-background-color: #2d2d30;
  --dv-tabs-and-actions-container-height: 20px;
  --dv-tabs-and-actions-container-font-size: 11px;
  --dv-activegroup-visiblepanel-tab-background-color: #007acc;
  --dv-inactivegroup-visiblepanel-tab-background-color: #3f3f46;
  --dv-activegroup-visiblepanel-tab-color: white;
  --dv-activegroup-hiddenpanel-tab-color: white;
  --dv-inactivegroup-visiblepanel-tab-color: white;
  --dv-inactivegroup-hiddenpanel-tab-color: white;
}
.dockview-theme-vs .dv-drop-target-container .dv-drop-target-anchor.dv-drop-target-anchor-container-changed {
  opacity: 0;
  transition: none;
}
.dockview-theme-vs .dv-groupview.dv-active-group > .dv-tabs-and-actions-container {
  box-sizing: content-box;
  border-bottom: 2px solid var(--dv-activegroup-visiblepanel-tab-background-color);
}
.dockview-theme-vs .dv-groupview.dv-active-group > .dv-tabs-and-actions-container .dv-tab.dv-active-tab {
  border-top: 2px solid var(--dv-activegroup-visiblepanel-tab-background-color);
}
.dockview-theme-vs .dv-groupview.dv-active-group > .dv-tabs-and-actions-container .dv-tab.dv-inactive-tab {
  border-top: 2px solid var(--dv-activegroup-hiddenpanel-tab-background-color);
}
.dockview-theme-vs .dv-groupview.dv-inactive-group > .dv-tabs-and-actions-container {
  box-sizing: content-box;
  border-bottom: 2px solid var(--dv-inactivegroup-visiblepanel-tab-background-color);
}
.dockview-theme-vs .dv-groupview.dv-inactive-group > .dv-tabs-and-actions-container .dv-tab.dv-active-tab {
  border-top: 2px solid var(--dv-inactivegroup-visiblepanel-tab-background-color);
}
.dockview-theme-vs .dv-groupview.dv-inactive-group > .dv-tabs-and-actions-container .dv-tab.dv-inactive-tab {
  border-top: 2px solid var(--dv-inactivegroup-hiddenpanel-tab-background-color);
}

.dockview-theme-abyss {
  --dv-paneview-active-outline-color: dodgerblue;
  --dv-tabs-and-actions-container-font-size: 13px;
  --dv-tabs-and-actions-container-height: 35px;
  --dv-drag-over-background-color: rgba(83, 89, 93, 0.5);
  --dv-drag-over-border-color: transparent;
  --dv-tabs-container-scrollbar-color: #888;
  --dv-icon-hover-background-color: rgba(90, 93, 94, 0.31);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(83, 89, 93, 0.5);
  --dv-overlay-z-index: 999;
  --dv-tab-font-size: inherit;
  --dv-border-radius: 0px;
  --dv-tab-margin: 0;
  --dv-sash-color: transparent;
  --dv-active-sash-color: transparent;
  --dv-active-sash-transition-duration: 0.1s;
  --dv-active-sash-transition-delay: 0.5s;
  --dv-color-abyss-dark: #000c18;
  --dv-color-abyss: #10192c;
  --dv-color-abyss-light: #1c1c2a;
  --dv-color-abyss-lighter: #2b2b4a;
  --dv-color-abyss-accent: rgb(91, 30, 207);
  --dv-color-abyss-primary-text: white;
  --dv-color-abyss-secondary-text: rgb(148, 151, 169);
  --dv-group-view-background-color: var(--dv-color-abyss-dark);
  --dv-tabs-and-actions-container-background-color: var(
      --dv-color-abyss-light
  );
  --dv-activegroup-visiblepanel-tab-background-color: var(
      --dv-color-abyss-dark
  );
  --dv-activegroup-hiddenpanel-tab-background-color: var(--dv-color-abyss);
  --dv-inactivegroup-visiblepanel-tab-background-color: var(
      --dv-color-abyss-dark
  );
  --dv-inactivegroup-hiddenpanel-tab-background-color: var(--dv-color-abyss);
  --dv-tab-divider-color: var(--dv-color-abyss-lighter);
  --dv-activegroup-visiblepanel-tab-color: white;
  --dv-activegroup-hiddenpanel-tab-color: rgba(255, 255, 255, 0.5);
  --dv-inactivegroup-visiblepanel-tab-color: rgba(255, 255, 255, 0.5);
  --dv-inactivegroup-hiddenpanel-tab-color: rgba(255, 255, 255, 0.25);
  --dv-separator-border: var(--dv-color-abyss-lighter);
  --dv-paneview-header-border-color: var(--dv-color-abyss-lighter);
  --dv-paneview-active-outline-color: #596f99;
}
.dockview-theme-abyss .dv-drop-target-container .dv-drop-target-anchor.dv-drop-target-anchor-container-changed {
  opacity: 0;
  transition: none;
}

.dockview-theme-dracula {
  --dv-paneview-active-outline-color: dodgerblue;
  --dv-tabs-and-actions-container-font-size: 13px;
  --dv-tabs-and-actions-container-height: 35px;
  --dv-drag-over-background-color: rgba(83, 89, 93, 0.5);
  --dv-drag-over-border-color: transparent;
  --dv-tabs-container-scrollbar-color: #888;
  --dv-icon-hover-background-color: rgba(90, 93, 94, 0.31);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(83, 89, 93, 0.5);
  --dv-overlay-z-index: 999;
  --dv-tab-font-size: inherit;
  --dv-border-radius: 0px;
  --dv-tab-margin: 0;
  --dv-sash-color: transparent;
  --dv-active-sash-color: transparent;
  --dv-active-sash-transition-duration: 0.1s;
  --dv-active-sash-transition-delay: 0.5s;
  --dv-group-view-background-color: #282a36;
  --dv-tabs-and-actions-container-background-color: #191a21;
  --dv-activegroup-visiblepanel-tab-background-color: #282a36;
  --dv-activegroup-hiddenpanel-tab-background-color: #21222c;
  --dv-inactivegroup-visiblepanel-tab-background-color: #282a36;
  --dv-inactivegroup-hiddenpanel-tab-background-color: #21222c;
  --dv-tab-divider-color: #191a21;
  --dv-activegroup-visiblepanel-tab-color: rgb(248, 248, 242);
  --dv-activegroup-hiddenpanel-tab-color: rgb(98, 114, 164);
  --dv-inactivegroup-visiblepanel-tab-color: rgba(248, 248, 242, 0.5);
  --dv-inactivegroup-hiddenpanel-tab-color: rgba(98, 114, 164, 0.5);
  --dv-separator-border: #bd93f9;
  --dv-paneview-header-border-color: #bd93f9;
  --dv-paneview-active-outline-color: #6272a4;
}
.dockview-theme-dracula .dv-drop-target-container .dv-drop-target-anchor.dv-drop-target-anchor-container-changed {
  opacity: 0;
  transition: none;
}
.dockview-theme-dracula .dv-groupview.dv-active-group > .dv-tabs-and-actions-container .dv-tabs-container > .dv-tab.dv-active-tab {
  position: relative;
}
.dockview-theme-dracula .dv-groupview.dv-active-group > .dv-tabs-and-actions-container .dv-tabs-container > .dv-tab.dv-active-tab::after {
  position: absolute;
  left: 0px;
  top: 0px;
  content: "";
  width: 100%;
  height: 1px;
  background-color: #94527e;
  z-index: 999;
}
.dockview-theme-dracula .dv-groupview.dv-inactive-group > .dv-tabs-and-actions-container .dv-tabs-container > .dv-tab.dv-active-tab {
  position: relative;
}
.dockview-theme-dracula .dv-groupview.dv-inactive-group > .dv-tabs-and-actions-container .dv-tabs-container > .dv-tab.dv-active-tab::after {
  position: absolute;
  left: 0px;
  bottom: 0px;
  content: "";
  width: 100%;
  height: 1px;
  background-color: #5e3d5a;
  z-index: 999;
}

.dockview-theme-replit {
  --dv-paneview-active-outline-color: dodgerblue;
  --dv-tabs-and-actions-container-font-size: 13px;
  --dv-tabs-and-actions-container-height: 35px;
  --dv-drag-over-background-color: rgba(83, 89, 93, 0.5);
  --dv-drag-over-border-color: transparent;
  --dv-tabs-container-scrollbar-color: #888;
  --dv-icon-hover-background-color: rgba(90, 93, 94, 0.31);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(83, 89, 93, 0.5);
  --dv-overlay-z-index: 999;
  --dv-tab-font-size: inherit;
  --dv-border-radius: 0px;
  --dv-tab-margin: 0;
  --dv-sash-color: transparent;
  --dv-active-sash-color: transparent;
  --dv-active-sash-transition-duration: 0.1s;
  --dv-active-sash-transition-delay: 0.5s;
  box-sizing: border-box;
  padding: 10px;
  background-color: #ebeced;
  --dv-group-view-background-color: #ebeced;
  --dv-tabs-and-actions-container-background-color: #fcfcfc;
  --dv-activegroup-visiblepanel-tab-background-color: #f0f1f2;
  --dv-activegroup-hiddenpanel-tab-background-color: #fcfcfc;
  --dv-inactivegroup-visiblepanel-tab-background-color: #f0f1f2;
  --dv-inactivegroup-hiddenpanel-tab-background-color: #fcfcfc;
  --dv-tab-divider-color: transparent;
  --dv-activegroup-visiblepanel-tab-color: rgb(51, 51, 51);
  --dv-activegroup-hiddenpanel-tab-color: rgb(51, 51, 51);
  --dv-inactivegroup-visiblepanel-tab-color: rgb(51, 51, 51);
  --dv-inactivegroup-hiddenpanel-tab-color: rgb(51, 51, 51);
  --dv-separator-border: transparent;
  --dv-paneview-header-border-color: rgb(51, 51, 51);
  --dv-sash-color: #cfd1d3;
  --dv-active-sash-color: #babbbb;
}
.dockview-theme-replit .dv-drop-target-container .dv-drop-target-anchor.dv-drop-target-anchor-container-changed {
  opacity: 0;
  transition: none;
}
.dockview-theme-replit .dv-resize-container:has(> .dv-groupview) {
  border-radius: 8px;
}
.dockview-theme-replit .dv-resize-container {
  border-radius: 10px !important;
  border: none;
}
.dockview-theme-replit .dv-groupview {
  overflow: hidden;
  border-radius: 10px;
}
.dockview-theme-replit .dv-groupview .dv-tabs-and-actions-container {
  border-bottom: 1px solid rgba(128, 128, 128, 0.35);
}
.dockview-theme-replit .dv-groupview .dv-tabs-and-actions-container .dv-tab {
  margin: 4px;
  border-radius: 8px;
}
.dockview-theme-replit .dv-groupview .dv-tabs-and-actions-container .dv-tab .dv-svg {
  height: 8px;
  width: 8px;
}
.dockview-theme-replit .dv-groupview .dv-tabs-and-actions-container .dv-tab:hover {
  background-color: #e4e5e6 !important;
}
.dockview-theme-replit .dv-groupview .dv-content-container {
  background-color: #fcfcfc;
}
.dockview-theme-replit .dv-groupview.dv-active-group {
  border: 1px solid rgba(128, 128, 128, 0.35);
}
.dockview-theme-replit .dv-groupview.dv-inactive-group {
  border: 1px solid transparent;
}
.dockview-theme-replit .dv-vertical > .dv-sash-container > .dv-sash {
  background-color: transparent;
}
.dockview-theme-replit .dv-vertical > .dv-sash-container > .dv-sash:not(.disabled)::after {
  content: "";
  height: 4px;
  width: 40px;
  border-radius: 2px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--dv-sash-color);
  position: absolute;
}
.dockview-theme-replit .dv-vertical > .dv-sash-container > .dv-sash:not(.disabled):hover, .dockview-theme-replit .dv-vertical > .dv-sash-container > .dv-sash:not(.disabled):active {
  background-color: transparent;
}
.dockview-theme-replit .dv-vertical > .dv-sash-container > .dv-sash:not(.disabled):hover::after, .dockview-theme-replit .dv-vertical > .dv-sash-container > .dv-sash:not(.disabled):active::after {
  background-color: var(--dv-active-sash-color);
}
.dockview-theme-replit .dv-horizontal > .dv-sash-container > .dv-sash {
  background-color: transparent;
}
.dockview-theme-replit .dv-horizontal > .dv-sash-container > .dv-sash:not(.disabled)::after {
  content: "";
  height: 40px;
  width: 4px;
  border-radius: 2px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--dv-sash-color);
  position: absolute;
}
.dockview-theme-replit .dv-horizontal > .dv-sash-container > .dv-sash:not(.disabled):hover, .dockview-theme-replit .dv-horizontal > .dv-sash-container > .dv-sash:not(.disabled):active {
  background-color: transparent;
}
.dockview-theme-replit .dv-horizontal > .dv-sash-container > .dv-sash:not(.disabled):hover::after, .dockview-theme-replit .dv-horizontal > .dv-sash-container > .dv-sash:not(.disabled):active::after {
  background-color: var(--dv-active-sash-color);
}

.dockview-theme-abyss-spaced {
  --dv-paneview-active-outline-color: dodgerblue;
  --dv-tabs-and-actions-container-font-size: 13px;
  --dv-tabs-and-actions-container-height: 35px;
  --dv-drag-over-background-color: rgba(83, 89, 93, 0.5);
  --dv-drag-over-border-color: transparent;
  --dv-tabs-container-scrollbar-color: #888;
  --dv-icon-hover-background-color: rgba(90, 93, 94, 0.31);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(83, 89, 93, 0.5);
  --dv-overlay-z-index: 999;
  --dv-tab-font-size: inherit;
  --dv-border-radius: 0px;
  --dv-tab-margin: 0;
  --dv-sash-color: transparent;
  --dv-active-sash-color: transparent;
  --dv-active-sash-transition-duration: 0.1s;
  --dv-active-sash-transition-delay: 0.5s;
  --dv-tab-font-size: 12px;
  --dv-border-radius: 20px;
  --dv-tab-margin: 0.5rem 0.25rem;
  --dv-tabs-and-actions-container-height: 44px;
  --dv-border-radius: 20px;
  box-sizing: border-box;
  --dv-color-abyss-dark: rgb(11, 6, 17);
  --dv-color-abyss: #16121f;
  --dv-color-abyss-light: #201d2b;
  --dv-color-abyss-lighter: #2a2837;
  --dv-color-abyss-accent: rgb(91, 30, 207);
  --dv-color-abyss-primary-text: white;
  --dv-color-abyss-secondary-text: rgb(148, 151, 169);
  --dv-drag-over-border: 2px solid var(--dv-color-abyss-accent);
  --dv-drag-over-background-color: "";
  --dv-group-view-background-color: var(--dv-color-abyss-dark);
  --dv-tabs-and-actions-container-background-color: var(--dv-color-abyss);
  --dv-activegroup-visiblepanel-tab-background-color: var(
      --dv-color-abyss-lighter
  );
  --dv-activegroup-hiddenpanel-tab-background-color: var(
      --dv-color-abyss-light
  );
  --dv-inactivegroup-visiblepanel-tab-background-color: var(
      --dv-color-abyss-lighter
  );
  --dv-inactivegroup-hiddenpanel-tab-background-color: var(
      --dv-color-abyss-light
  );
  --dv-tab-divider-color: transparent;
  --dv-activegroup-visiblepanel-tab-color: var(--dv-color-abyss-primary-text);
  --dv-activegroup-hiddenpanel-tab-color: var(
      --dv-color-abyss-secondary-text
  );
  --dv-inactivegroup-visiblepanel-tab-color: var(
      --dv-color-abyss-primary-text
  );
  --dv-inactivegroup-hiddenpanel-tab-color: var(
      --dv-color-abyss-secondary-text
  );
  --dv-separator-border: transparent;
  --dv-paneview-header-border-color: rgb(51, 51, 51);
  --dv-active-sash-color: var(--dv-color-abyss-accent);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(0, 0, 0, 0.5);
  padding: 10px;
  background-color: var(--dv-color-abyss-dark);
}
.dockview-theme-abyss-spaced .dv-resize-container:has(> .dv-groupview) {
  border-radius: 8px;
}
.dockview-theme-abyss-spaced .dv-sash {
  border-radius: 4px;
}
.dockview-theme-abyss-spaced .dv-drop-target-anchor {
  border-radius: calc(var(--dv-border-radius) / 4);
}
.dockview-theme-abyss-spaced .dv-drop-target-anchor.dv-drop-target-content {
  border-radius: var(--dv-border-radius);
}
.dockview-theme-abyss-spaced .dv-resize-container {
  border-radius: var(--dv-border-radius) !important;
  border: none;
}
.dockview-theme-abyss-spaced .dv-tabs-overflow-container,
.dockview-theme-abyss-spaced .dv-tabs-overflow-dropdown-default {
  border-radius: 8px;
  height: unset !important;
}
.dockview-theme-abyss-spaced .dv-tab {
  border-radius: 8px;
}
.dockview-theme-abyss-spaced .dv-tab .dv-svg {
  height: 8px;
  width: 8px;
}
.dockview-theme-abyss-spaced .dv-groupview {
  border-radius: var(--dv-border-radius);
}
.dockview-theme-abyss-spaced .dv-groupview .dv-tabs-and-actions-container {
  padding: 0px calc(var(--dv-border-radius) / 2);
}
.dockview-theme-abyss-spaced .dv-groupview .dv-content-container {
  background-color: var(--dv-tabs-and-actions-container-background-color);
}
.dockview-theme-abyss-spaced .dv-resize-container .dv-groupview {
  border: 2px solid var(--dv-color-abyss-dark);
}

.dockview-theme-light-spaced {
  --dv-paneview-active-outline-color: dodgerblue;
  --dv-tabs-and-actions-container-font-size: 13px;
  --dv-tabs-and-actions-container-height: 35px;
  --dv-drag-over-background-color: rgba(83, 89, 93, 0.5);
  --dv-drag-over-border-color: transparent;
  --dv-tabs-container-scrollbar-color: #888;
  --dv-icon-hover-background-color: rgba(90, 93, 94, 0.31);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(83, 89, 93, 0.5);
  --dv-overlay-z-index: 999;
  --dv-tab-font-size: inherit;
  --dv-border-radius: 0px;
  --dv-tab-margin: 0;
  --dv-sash-color: transparent;
  --dv-active-sash-color: transparent;
  --dv-active-sash-transition-duration: 0.1s;
  --dv-active-sash-transition-delay: 0.5s;
  --dv-tab-font-size: 12px;
  --dv-border-radius: 20px;
  --dv-tab-margin: 0.5rem 0.25rem;
  --dv-tabs-and-actions-container-height: 44px;
  --dv-border-radius: 20px;
  box-sizing: border-box;
  --dv-drag-over-border: 2px solid rgb(91, 30, 207);
  --dv-drag-over-background-color: "";
  --dv-group-view-background-color: #f6f5f9;
  --dv-tabs-and-actions-container-background-color: white;
  --dv-activegroup-visiblepanel-tab-background-color: #ededf0;
  --dv-activegroup-hiddenpanel-tab-background-color: #f9f9fa;
  --dv-inactivegroup-visiblepanel-tab-background-color: #ededf0;
  --dv-inactivegroup-hiddenpanel-tab-background-color: #f9f9fa;
  --dv-tab-divider-color: transparent;
  --dv-activegroup-visiblepanel-tab-color: rgb(104, 107, 130);
  --dv-activegroup-hiddenpanel-tab-color: rgb(148, 151, 169);
  --dv-inactivegroup-visiblepanel-tab-color: rgb(104, 107, 130);
  --dv-inactivegroup-hiddenpanel-tab-color: rgb(148, 151, 169);
  --dv-separator-border: transparent;
  --dv-paneview-header-border-color: rgb(51, 51, 51);
  --dv-active-sash-color: rgb(91, 30, 207);
  --dv-floating-box-shadow: 8px 8px 8px 0px rgba(0, 0, 0, 0.1);
  padding: 10px;
  background-color: #f6f5f9;
  --dv-scrollbar-background-color: rgba(0, 0, 0, 0.25);
}
.dockview-theme-light-spaced .dv-resize-container:has(> .dv-groupview) {
  border-radius: 8px;
}
.dockview-theme-light-spaced .dv-sash {
  border-radius: 4px;
}
.dockview-theme-light-spaced .dv-drop-target-anchor {
  border-radius: calc(var(--dv-border-radius) / 4);
}
.dockview-theme-light-spaced .dv-drop-target-anchor.dv-drop-target-content {
  border-radius: var(--dv-border-radius);
}
.dockview-theme-light-spaced .dv-resize-container {
  border-radius: var(--dv-border-radius) !important;
  border: none;
}
.dockview-theme-light-spaced .dv-tabs-overflow-container,
.dockview-theme-light-spaced .dv-tabs-overflow-dropdown-default {
  border-radius: 8px;
  height: unset !important;
}
.dockview-theme-light-spaced .dv-tab {
  border-radius: 8px;
}
.dockview-theme-light-spaced .dv-tab .dv-svg {
  height: 8px;
  width: 8px;
}
.dockview-theme-light-spaced .dv-groupview {
  border-radius: var(--dv-border-radius);
}
.dockview-theme-light-spaced .dv-groupview .dv-tabs-and-actions-container {
  padding: 0px calc(var(--dv-border-radius) / 2);
}
.dockview-theme-light-spaced .dv-groupview .dv-content-container {
  background-color: var(--dv-tabs-and-actions-container-background-color);
}
.dockview-theme-light-spaced .dv-resize-container .dv-groupview {
  border: 2px solid rgba(255, 255, 255, 0.1);
}
.dv-drop-target-container {
  position: absolute;
  z-index: 9999;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  pointer-events: none;
  overflow: hidden;
  --dv-transition-duration: 300ms;
}
.dv-drop-target-container .dv-drop-target-anchor {
  position: relative;
  border: var(--dv-drag-over-border);
  background-color: var(--dv-drag-over-background-color);
  opacity: 1;
  /* GPU optimizations */
  will-change: transform, opacity;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  contain: layout paint;
  transition: opacity var(--dv-transition-duration) ease-in, top var(--dv-transition-duration) ease-out, left var(--dv-transition-duration) ease-out, width var(--dv-transition-duration) ease-out, height var(--dv-transition-duration) ease-out;
}
.dv-drop-target {
  position: relative;
  --dv-transition-duration: 70ms;
}
.dv-drop-target > .dv-drop-target-dropzone {
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100%;
  width: 100%;
  z-index: 1000;
  pointer-events: none;
}
.dv-drop-target > .dv-drop-target-dropzone > .dv-drop-target-selection {
  position: relative;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  border: var(--dv-drag-over-border);
  background-color: var(--dv-drag-over-background-color);
  transition: top var(--dv-transition-duration) ease-out, left var(--dv-transition-duration) ease-out, width var(--dv-transition-duration) ease-out, height var(--dv-transition-duration) ease-out, opacity var(--dv-transition-duration) ease-out;
  will-change: transform;
  pointer-events: none;
}
.dv-drop-target > .dv-drop-target-dropzone > .dv-drop-target-selection.dv-drop-target-top.dv-drop-target-small-vertical {
  border-top: 1px solid var(--dv-drag-over-border-color);
}
.dv-drop-target > .dv-drop-target-dropzone > .dv-drop-target-selection.dv-drop-target-bottom.dv-drop-target-small-vertical {
  border-bottom: 1px solid var(--dv-drag-over-border-color);
}
.dv-drop-target > .dv-drop-target-dropzone > .dv-drop-target-selection.dv-drop-target-left.dv-drop-target-small-horizontal {
  border-left: 1px solid var(--dv-drag-over-border-color);
}
.dv-drop-target > .dv-drop-target-dropzone > .dv-drop-target-selection.dv-drop-target-right.dv-drop-target-small-horizontal {
  border-right: 1px solid var(--dv-drag-over-border-color);
}
.dv-dockview {
  position: relative;
  background-color: var(--dv-group-view-background-color);
  contain: layout;
}
.dv-dockview .dv-watermark-container {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  z-index: 1;
}
.dv-dockview .dv-overlay-render-container {
  position: relative;
}

.dv-groupview.dv-active-group > .dv-tabs-and-actions-container .dv-tabs-container > .dv-tab.dv-active-tab {
  background-color: var(--dv-activegroup-visiblepanel-tab-background-color);
  color: var(--dv-activegroup-visiblepanel-tab-color);
}
.dv-groupview.dv-active-group > .dv-tabs-and-actions-container .dv-tabs-container > .dv-tab.dv-inactive-tab {
  background-color: var(--dv-activegroup-hiddenpanel-tab-background-color);
  color: var(--dv-activegroup-hiddenpanel-tab-color);
}
.dv-groupview.dv-inactive-group > .dv-tabs-and-actions-container .dv-tabs-container > .dv-tab.dv-active-tab {
  background-color: var(--dv-inactivegroup-visiblepanel-tab-background-color);
  color: var(--dv-inactivegroup-visiblepanel-tab-color);
}
.dv-groupview.dv-inactive-group > .dv-tabs-and-actions-container .dv-tabs-container > .dv-tab.dv-inactive-tab {
  background-color: var(--dv-inactivegroup-hiddenpanel-tab-background-color);
  color: var(--dv-inactivegroup-hiddenpanel-tab-color);
}

/**
 * when a tab is dragged we lose the above stylings because they are conditional on parent elements
 * therefore we also set some stylings for the dragging event
 **/
.dv-tab.dv-tab-dragging {
  background-color: var(--dv-activegroup-visiblepanel-tab-background-color);
  color: var(--dv-activegroup-visiblepanel-tab-color);
}
.dv-groupview {
  display: flex;
  height: 100%;
  background-color: var(--dv-group-view-background-color);
  overflow: hidden;
  flex-direction: column;
}
.dv-groupview:focus {
  outline: none;
}
.dv-groupview > .dv-content-container {
  flex-grow: 1;
  min-height: 0;
  outline: none;
}
.dv-groupview.dv-groupview-header-bottom {
  flex-direction: column-reverse;
}
.dv-groupview.dv-groupview-header-left {
  flex-direction: row;
}
.dv-groupview.dv-groupview-header-right {
  flex-direction: row-reverse;
}
.dv-root-wrapper {
  height: 100%;
  width: 100%;
}
.dv-grid-view,
.dv-branch-node {
  height: 100%;
  width: 100%;
}
.dv-debug .dv-resize-container .dv-resize-handle-top {
  background-color: red;
}
.dv-debug .dv-resize-container .dv-resize-handle-bottom {
  background-color: green;
}
.dv-debug .dv-resize-container .dv-resize-handle-left {
  background-color: yellow;
}
.dv-debug .dv-resize-container .dv-resize-handle-right {
  background-color: blue;
}
.dv-debug .dv-resize-container .dv-resize-handle-topleft,
.dv-debug .dv-resize-container .dv-resize-handle-topright,
.dv-debug .dv-resize-container .dv-resize-handle-bottomleft,
.dv-debug .dv-resize-container .dv-resize-handle-bottomright {
  background-color: cyan;
}

.dv-resize-container {
  --dv-overlay-z-index: var(--dv-overlay-z-index, 999);
  position: absolute;
  z-index: calc(var(--dv-overlay-z-index) - 2);
  border: 1px solid var(--dv-tab-divider-color);
  box-shadow: var(--dv-floating-box-shadow);
  /* GPU optimizations for floating group movement */
  will-change: transform, opacity;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
}
.dv-resize-container.dv-hidden {
  display: none;
}
.dv-resize-container.dv-resize-container-dragging {
  opacity: 0.5;
  /* Enhanced GPU acceleration during drag */
  will-change: transform, opacity;
}
.dv-resize-container .dv-resize-handle-top {
  height: 4px;
  width: calc(100% - 8px);
  left: 4px;
  top: -2px;
  z-index: var(--dv-overlay-z-index);
  position: absolute;
  cursor: ns-resize;
}
.dv-resize-container .dv-resize-handle-bottom {
  height: 4px;
  width: calc(100% - 8px);
  left: 4px;
  bottom: -2px;
  z-index: var(--dv-overlay-z-index);
  position: absolute;
  cursor: ns-resize;
}
.dv-resize-container .dv-resize-handle-left {
  height: calc(100% - 8px);
  width: 4px;
  left: -2px;
  top: 4px;
  z-index: var(--dv-overlay-z-index);
  position: absolute;
  cursor: ew-resize;
}
.dv-resize-container .dv-resize-handle-right {
  height: calc(100% - 8px);
  width: 4px;
  right: -2px;
  top: 4px;
  z-index: var(--dv-overlay-z-index);
  position: absolute;
  cursor: ew-resize;
}
.dv-resize-container .dv-resize-handle-topleft {
  height: 4px;
  width: 4px;
  top: -2px;
  left: -2px;
  z-index: var(--dv-overlay-z-index);
  position: absolute;
  cursor: nw-resize;
}
.dv-resize-container .dv-resize-handle-topright {
  height: 4px;
  width: 4px;
  right: -2px;
  top: -2px;
  z-index: var(--dv-overlay-z-index);
  position: absolute;
  cursor: ne-resize;
}
.dv-resize-container .dv-resize-handle-bottomleft {
  height: 4px;
  width: 4px;
  left: -2px;
  bottom: -2px;
  z-index: var(--dv-overlay-z-index);
  position: absolute;
  cursor: sw-resize;
}
.dv-resize-container .dv-resize-handle-bottomright {
  height: 4px;
  width: 4px;
  right: -2px;
  bottom: -2px;
  z-index: var(--dv-overlay-z-index);
  position: absolute;
  cursor: se-resize;
}
.dv-render-overlay {
  --dv-overlay-z-index: var(--dv-overlay-z-index, 999);
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  contain: layout paint;
  isolation: isolate;
  /* GPU optimizations */
  will-change: transform;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
}
.dv-render-overlay.dv-render-overlay-float {
  z-index: calc(var(--dv-overlay-z-index) - 1);
}

.dv-debug .dv-render-overlay {
  outline: 1px solid red;
  outline-offset: -1;
}
.dv-pane-container {
  height: 100%;
  width: 100%;
}
.dv-pane-container.dv-animated .dv-view {
  /* GPU optimizations for smooth pane animations */
  will-change: transform;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  transition: transform 0.15s ease-out;
}
.dv-pane-container .dv-view {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0px !important;
}
.dv-pane-container .dv-view:not(:first-child)::before {
  background-color: transparent !important;
}
.dv-pane-container .dv-view:not(:first-child) .dv-pane > .dv-pane-header {
  border-top: 1px solid var(--dv-paneview-header-border-color);
}
.dv-pane-container .dv-view .dv-default-header {
  background-color: var(--dv-group-view-background-color);
  color: var(--dv-activegroup-visiblepanel-tab-color);
  display: flex;
  padding: 0px 8px;
  cursor: pointer;
}
.dv-pane-container .dv-view .dv-default-header .dv-pane-header-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
.dv-pane-container .dv-view .dv-default-header > span {
  padding-left: 8px;
  flex-grow: 1;
}
.dv-pane-container:first-of-type > .dv-pane > .dv-pane-header {
  border-top: none !important;
}
.dv-pane-container .dv-pane {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
}
.dv-pane-container .dv-pane .dv-pane-header {
  box-sizing: border-box;
  user-select: none;
  position: relative;
  outline: none;
}
.dv-pane-container .dv-pane .dv-pane-header.dv-pane-draggable {
  cursor: pointer;
}
.dv-pane-container .dv-pane .dv-pane-header:focus:before, .dv-pane-container .dv-pane .dv-pane-header:focus-within:before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  content: "";
  pointer-events: none;
  outline: 1px solid;
  outline-width: -1px;
  outline-style: solid;
  outline-offset: -1px;
  outline-color: var(--dv-paneview-active-outline-color);
}
.dv-pane-container .dv-pane .dv-pane-body {
  overflow-y: auto;
  overflow-x: hidden;
  flex-grow: 1;
  position: relative;
  outline: none;
}
.dv-pane-container .dv-pane .dv-pane-body:focus:before, .dv-pane-container .dv-pane .dv-pane-body:focus-within:before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  content: "";
  pointer-events: none;
  outline: 1px solid;
  outline-width: -1px;
  outline-style: solid;
  outline-offset: -1px;
  outline-color: var(--dv-paneview-active-outline-color);
}
.dv-debug .dv-split-view-container .dv-sash-container .dv-sash.dv-enabled {
  background-color: black;
}
.dv-debug .dv-split-view-container .dv-sash-container .dv-sash.dv-disabled {
  background-color: orange;
}
.dv-debug .dv-split-view-container .dv-sash-container .dv-sash.dv-maximum {
  background-color: green;
}
.dv-debug .dv-split-view-container .dv-sash-container .dv-sash.dv-minimum {
  background-color: red;
}

.dv-split-view-container {
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
}
.dv-split-view-container.dv-splitview-disabled > .dv-sash-container > .dv-sash {
  pointer-events: none;
}
.dv-split-view-container.dv-animation .dv-view,
.dv-split-view-container.dv-animation .dv-sash {
  /* GPU optimizations for smooth animations */
  will-change: transform;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  transition: transform 0.15s ease-out;
}
.dv-split-view-container.dv-horizontal {
  height: 100%;
}
.dv-split-view-container.dv-horizontal > .dv-sash-container > .dv-sash {
  height: 100%;
  width: 4px;
}
.dv-split-view-container.dv-horizontal > .dv-sash-container > .dv-sash.dv-enabled {
  cursor: ew-resize;
}
.dv-split-view-container.dv-horizontal > .dv-sash-container > .dv-sash.dv-disabled {
  cursor: default;
}
.dv-split-view-container.dv-horizontal > .dv-sash-container > .dv-sash.dv-maximum {
  cursor: w-resize;
}
.dv-split-view-container.dv-horizontal > .dv-sash-container > .dv-sash.dv-minimum {
  cursor: e-resize;
}
.dv-split-view-container.dv-horizontal > .dv-view-container > .dv-view:not(:first-child)::before {
  height: 100%;
  width: 1px;
}
.dv-split-view-container.dv-vertical {
  width: 100%;
}
.dv-split-view-container.dv-vertical > .dv-sash-container > .dv-sash {
  width: 100%;
  height: 4px;
}
.dv-split-view-container.dv-vertical > .dv-sash-container > .dv-sash.dv-enabled {
  cursor: ns-resize;
}
.dv-split-view-container.dv-vertical > .dv-sash-container > .dv-sash.dv-disabled {
  cursor: default;
}
.dv-split-view-container.dv-vertical > .dv-sash-container > .dv-sash.dv-maximum {
  cursor: n-resize;
}
.dv-split-view-container.dv-vertical > .dv-sash-container > .dv-sash.dv-minimum {
  cursor: s-resize;
}
.dv-split-view-container.dv-vertical > .dv-view-container > .dv-view {
  width: 100%;
}
.dv-split-view-container.dv-vertical > .dv-view-container > .dv-view:not(:first-child)::before {
  height: 1px;
  width: 100%;
}
.dv-split-view-container .dv-sash-container {
  height: 100%;
  width: 100%;
  position: absolute;
}
.dv-split-view-container .dv-sash-container .dv-sash {
  position: absolute;
  z-index: 99;
  outline: none;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  touch-action: none;
  background-color: var(--dv-sash-color, transparent);
}
.dv-split-view-container .dv-sash-container .dv-sash:not(.disabled):active, .dv-split-view-container .dv-sash-container .dv-sash:not(.disabled):hover {
  background-color: var(--dv-active-sash-color, transparent);
  transition-property: background-color;
  transition-timing-function: ease-in-out;
  transition-duration: var(--dv-active-sash-transition-duration, 0.1s);
  transition-delay: var(--dv-active-sash-transition-delay, 0.5s);
}
.dv-split-view-container .dv-view-container {
  position: relative;
  height: 100%;
  width: 100%;
}
.dv-split-view-container .dv-view-container .dv-view {
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
  position: absolute;
}
.dv-split-view-container.dv-separator-border .dv-view:not(:first-child)::before {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  pointer-events: none;
  background-color: var(--dv-separator-border);
}
.dv-dragged {
  transform: translate3d(0px, 0px, 0px); /* forces tab to be drawn on a separate layer (see https://github.com/microsoft/vscode/issues/18733) */
}

.dv-tab {
  flex-shrink: 0;
}
.dv-tab:focus-within, .dv-tab:focus {
  position: relative;
}
.dv-tab:focus-within::after, .dv-tab:focus::after {
  position: absolute;
  content: "";
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  pointer-events: none;
  outline: 1px solid var(--dv-tab-divider-color) !important;
  outline-offset: -1px;
  z-index: 5;
}
.dv-tab.dv-tab-dragging .dv-default-tab-action {
  background-color: var(--dv-activegroup-visiblepanel-tab-color);
}
.dv-tab.dv-active-tab .dv-default-tab .dv-default-tab-action {
  visibility: visible;
}
.dv-tab.dv-inactive-tab .dv-default-tab .dv-default-tab-action {
  visibility: hidden;
}
.dv-tab.dv-inactive-tab .dv-default-tab:hover .dv-default-tab-action {
  visibility: visible;
}
.dv-tab .dv-default-tab {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.dv-tab .dv-default-tab .dv-default-tab-content {
  flex-grow: 1;
  margin-right: 4px;
}
.dv-tab .dv-default-tab .dv-default-tab-action {
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}
.dv-tab .dv-default-tab .dv-default-tab-action:hover {
  border-radius: 2px;
  background-color: var(--dv-icon-hover-background-color);
}
.dv-tabs-overflow-dropdown-default {
  height: 100%;
  color: var(--dv-activegroup-hiddenpanel-tab-color);
  margin: var(--dv-tab-margin);
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
}
.dv-tabs-overflow-dropdown-default > span {
  padding-left: 0.25rem;
}
.dv-tabs-overflow-dropdown-default > svg {
  transform: rotate(90deg);
}
.dv-tabs-overflow-dropdown-default:hover {
  border-radius: 2px;
  background-color: var(--dv-icon-hover-background-color);
}
.dv-tabs-container {
  display: flex;
  height: 100%;
  overflow: auto;
  scrollbar-width: thin;
  /* GPU optimizations for smooth scrolling */
  will-change: scroll-position;
  transform: translate3d(0, 0, 0);
  /* Track */
  /* Handle */
}
.dv-tabs-container.dv-tabs-container-vertical {
  width: 100%;
  height: fit-content;
  max-height: 100%;
  writing-mode: vertical-rl;
}
.dv-tabs-container.dv-horizontal .dv-tab:not(:first-child)::before, .dv-tabs-container.dv-vertical .dv-tab:not(:first-child)::before {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  pointer-events: none;
  background-color: var(--dv-tab-divider-color);
}
.dv-tabs-container.dv-horizontal .dv-tab:not(:first-child)::before {
  width: 1px;
  height: 100%;
}
.dv-tabs-container.dv-vertical .dv-tab:not(:first-child)::before {
  width: 100%;
  height: 1px;
}
.dv-tabs-container::-webkit-scrollbar {
  height: 3px;
}
.dv-tabs-container::-webkit-scrollbar-track {
  background: transparent;
}
.dv-tabs-container::-webkit-scrollbar-thumb {
  background: var(--dv-tabs-container-scrollbar-color);
}

.dv-scrollable > .dv-tabs-container {
  overflow: hidden;
}

.dv-tab {
  -webkit-user-drag: element;
  outline: none;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  font-size: var(--dv-tab-font-size);
  margin: var(--dv-tab-margin);
}
.dv-tab.dv-tab--shifting {
  will-change: margin-left;
  transition: transform var(--dv-transition-duration, 200ms) ease-out, margin-left var(--dv-transition-duration, 200ms) ease-out;
}
.dv-tab.dv-tab--dragging {
  width: 0 !important;
  min-width: 0 !important;
  padding: 0 !important;
  margin: 0 !important;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  transition: width var(--dv-transition-duration, 200ms) ease-out, padding var(--dv-transition-duration, 200ms) ease-out, margin var(--dv-transition-duration, 200ms) ease-out, opacity var(--dv-transition-duration, 200ms) ease-out;
}

@media (prefers-reduced-motion: reduce) {
  .dv-tab {
    transition: none !important;
  }
}
.dv-tabs-container-vertical .dv-tab {
  padding: 0.5rem 0.25rem;
}

.dv-tabs-overflow-container {
  flex-direction: column;
  height: unset;
  font-size: var(--dv-tabs-and-actions-container-font-size);
  max-height: min(50vh, 400px);
  overflow-y: auto;
  border: 1px solid var(--dv-tab-divider-color);
  background-color: var(--dv-group-view-background-color);
  /* Scrollbar styling for webkit browsers */
  /* Firefox scrollbar */
  scrollbar-width: thin;
}
.dv-tabs-overflow-container::-webkit-scrollbar {
  width: 6px;
}
.dv-tabs-overflow-container::-webkit-scrollbar-track {
  background: transparent;
}
.dv-tabs-overflow-container::-webkit-scrollbar-thumb {
  background: var(--dv-tabs-container-scrollbar-color);
  border-radius: 3px;
}
.dv-tabs-overflow-container .dv-tab:not(:last-child) {
  border-bottom: 1px solid var(--dv-tab-divider-color);
}
.dv-tabs-overflow-container .dv-active-tab {
  background-color: var(--dv-activegroup-visiblepanel-tab-background-color);
  color: var(--dv-activegroup-visiblepanel-tab-color);
}
.dv-tabs-overflow-container .dv-inactive-tab {
  background-color: var(--dv-activegroup-hiddenpanel-tab-background-color);
  color: var(--dv-activegroup-hiddenpanel-tab-color);
}
.dv-tabs-and-actions-container {
  display: flex;
  background-color: var(--dv-tabs-and-actions-container-background-color);
  flex-shrink: 0;
  box-sizing: border-box;
  height: var(--dv-tabs-and-actions-container-height);
  font-size: var(--dv-tabs-and-actions-container-font-size);
}
.dv-tabs-and-actions-container.dv-single-tab.dv-full-width-single-tab .dv-scrollable {
  flex-grow: 1;
}
.dv-tabs-and-actions-container.dv-single-tab.dv-full-width-single-tab .dv-tabs-container {
  flex-grow: 1;
}
.dv-tabs-and-actions-container.dv-single-tab.dv-full-width-single-tab .dv-tabs-container .dv-tab {
  flex-grow: 1;
  padding: 0px;
}
.dv-tabs-and-actions-container.dv-single-tab.dv-full-width-single-tab .dv-void-container {
  flex-grow: 0;
}
.dv-tabs-and-actions-container .dv-void-container {
  display: flex;
  flex-grow: 1;
}
.dv-tabs-and-actions-container .dv-void-container.dv-draggable {
  cursor: grab;
}
.dv-tabs-and-actions-container .dv-right-actions-container {
  display: flex;
}
.dv-tabs-and-actions-container .dv-right-actions-container.dv-right-actions-container-vertical {
  flex-direction: column;
}
.dv-tabs-and-actions-container.dv-groupview-header-vertical {
  flex-direction: column;
  height: auto;
  width: var(--dv-tabs-and-actions-container-height);
}
.dv-watermark {
  display: flex;
  height: 100%;
}`)})),Er=o((()=>{}));async function Dr(){return(await fetch(`${Lr}/api/video-info`)).json()}async function Or(e){let t=await fetch(`${Lr}/api/set-video`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({path:e})});if(!t.ok){let e=await t.json().catch(()=>({detail:t.statusText}));throw Error(e.detail||`Failed to set video`)}return t.json()}function kr(){return`${Lr}/api/video`}async function Ar(e){let t=e?`?path=${encodeURIComponent(e)}`:``;return(await fetch(`${Lr}/api/browse${t}`)).json()}function jr(e){return`${Lr}/api/thumbnail/${e}`}async function Mr(){return(await fetch(`${Lr}/api/scenes`)).json()}async function Nr(e){await fetch(`${Lr}/api/scenes/${e}`,{method:`DELETE`})}async function Pr(e){await fetch(`${Lr}/api/scenes/${e}/restore`,{method:`POST`})}function Fr(e,t){return`${Lr}/api/face-crop/${e}/${t}`}function Ir(){let e=window.location.protocol===`https:`?`wss:`:`ws:`;return new WebSocket(`${e}//${window.location.host}/api/ws`)}var Lr,Rr=o((()=>{Lr=``})),zr=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),Br=s(((e,t)=>{t.exports=zr()}));function Vr(e,t){switch(t.type){case`SET_VIDEO_INFO`:return{...e,videoInfo:t.payload,showFilePicker:!1};case`SET_SCENES`:return{...e,scenes:t.payload.scenes,scores:t.payload.scores,fps:t.payload.fps,totalFrames:t.payload.totalFrames};case`SET_ANALYZING`:return{...e,analyzing:t.payload};case`SET_PROGRESS`:return{...e,phase:t.payload.phase,progress:t.payload.progress,scenesFound:t.payload.scenesFound};case`SELECT_SCENE`:return{...e,selectedScene:t.payload};case`SEEK_TO_FRAME`:return{...e,seekToFrame:t.payload};case`UPDATE_SCENE`:{let n=e.scenes.map(e=>e.frame===t.payload.frame?{...e,...t.payload.changes}:e);return{...e,scenes:n}}case`SHOW_FILE_PICKER`:return{...e,showFilePicker:t.payload};case`SET_ERROR`:return{...e,error:t.payload};case`RESET_ANALYSIS`:return{...e,analyzing:!1,phase:``,progress:0,scenesFound:0};default:return e}}function Hr(){let e=(0,Wr.useContext)(qr);if(!e)throw Error(`useAppContext must be used within AppProvider`);return e}function Ur({children:e}){let[t,n]=(0,Wr.useReducer)(Vr,Kr),r=(0,Wr.useRef)(null),i={state:t,dispatch:n,loadVideo:(0,Wr.useCallback)(async e=>{n({type:`SET_VIDEO_INFO`,payload:await Or(e)}),localStorage.setItem(`lastVideo`,e),localStorage.setItem(`lastDir`,e.substring(0,e.lastIndexOf(`/`)))},[]),loadScenes:(0,Wr.useCallback)(async()=>{let e=await Mr();n({type:`SET_SCENES`,payload:{scenes:e.scenes,scores:e.all_scores,fps:e.fps,totalFrames:e.total_frames}})},[]),startAnalysis:(0,Wr.useCallback)(e=>{n({type:`SET_ANALYZING`,payload:!0}),n({type:`SET_ERROR`,payload:null}),n({type:`SET_PROGRESS`,payload:{phase:`Starting...`,progress:0,scenesFound:0}});let t=Ir();r.current=t,t.onopen=()=>{t.send(JSON.stringify({action:`analyze`,settings:e}))},t.onmessage=e=>{let r=JSON.parse(e.data);switch(r.type){case`progress`:n({type:`SET_PROGRESS`,payload:{phase:r.phase||`Analyzing`,progress:r.percent,scenesFound:r.scenes_found}});break;case`complete`:n({type:`SET_SCENES`,payload:{scenes:r.scenes,scores:r.scores,fps:r.fps,totalFrames:r.total_frames}}),n({type:`RESET_ANALYSIS`}),t.close();break;case`cancelled`:n({type:`RESET_ANALYSIS`}),t.close();break;case`error`:n({type:`SET_ERROR`,payload:r.message}),n({type:`RESET_ANALYSIS`}),t.close();break}},t.onerror=()=>{n({type:`RESET_ANALYSIS`})},t.onclose=()=>{r.current=null}},[]),cancelAnalysis:(0,Wr.useCallback)(()=>{r.current&&r.current.readyState===WebSocket.OPEN&&r.current.send(JSON.stringify({action:`cancel`}))},[]),removeScene:(0,Wr.useCallback)(async e=>{await Nr(e),n({type:`UPDATE_SCENE`,payload:{frame:e,changes:{removed:!0}}})},[]),restoreScene:(0,Wr.useCallback)(async e=>{await Pr(e),n({type:`UPDATE_SCENE`,payload:{frame:e,changes:{removed:!1}}})},[]),selectAndSeek:(0,Wr.useCallback)(e=>{n({type:`SELECT_SCENE`,payload:e}),n({type:`SEEK_TO_FRAME`,payload:e})},[])};return(0,Gr.jsx)(qr.Provider,{value:i,children:e})}var Wr,Gr,Kr,qr,Jr=o((()=>{Wr=l(d()),Rr(),Gr=Br(),Kr={videoInfo:null,scenes:[],scores:[],fps:30,totalFrames:0,analyzing:!1,phase:``,progress:0,scenesFound:0,selectedScene:null,seekToFrame:null,showFilePicker:!1,error:null},qr=(0,Wr.createContext)(null)}));function Yr(){let{state:e,dispatch:t}=Hr(),n=(0,Xr.useRef)(null),[r,i]=(0,Xr.useState)(!1),[a,o]=(0,Xr.useState)(0),[s,c]=(0,Xr.useState)(0);(0,Xr.useEffect)(()=>{if(e.seekToFrame!==null&&n.current&&e.fps>0){let r=e.seekToFrame/e.fps;n.current.currentTime=r,t({type:`SEEK_TO_FRAME`,payload:null})}},[e.seekToFrame,e.fps,t]);let l=(0,Xr.useCallback)(()=>{let e=n.current;e&&(e.paused?e.play():e.pause())},[]),u=(0,Xr.useCallback)(()=>{n.current&&o(n.current.currentTime)},[]),d=(0,Xr.useCallback)(()=>i(!0),[]),f=(0,Xr.useCallback)(()=>i(!1),[]),p=(0,Xr.useCallback)(()=>{n.current&&c(n.current.duration)},[]),m=t=>{let n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=Math.floor(t%60),a=Math.floor(t%1*(e.fps||30));return n>0?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}.${String(a).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}.${String(a).padStart(2,`0`)}`};if(!e.videoInfo?.path)return(0,Zr.jsxs)(`div`,{className:`empty-state`,children:[(0,Zr.jsx)(`div`,{children:`No video loaded`}),(0,Zr.jsx)(`button`,{className:`btn btn-primary`,onClick:()=>t({type:`SHOW_FILE_PICKER`,payload:!0}),children:`Open Video`})]});let h=Math.round(a*e.fps);return(0,Zr.jsxs)(`div`,{className:`video-container`,children:[(0,Zr.jsx)(`video`,{ref:n,src:kr(),onTimeUpdate:u,onPlay:d,onPause:f,onLoadedMetadata:p}),(0,Zr.jsxs)(`div`,{className:`video-controls`,children:[(0,Zr.jsx)(`button`,{onClick:l,children:r?`Pause`:`Play`}),(0,Zr.jsxs)(`span`,{children:[m(a),` / `,m(s)]}),(0,Zr.jsxs)(`span`,{style:{marginLeft:`auto`},children:[`Frame: `,h]})]})]})}var Xr,Zr,Qr=o((()=>{Xr=l(d()),Jr(),Rr(),Zr=Br()}));function $r(){let{state:e,selectAndSeek:t}=Hr(),n=(0,ei.useRef)(null),r=(0,ei.useRef)(null),[i,a]=(0,ei.useState)(null),o=(0,ei.useCallback)(()=>{let t=n.current;if(!t)return;let r=t.parentElement;if(!r)return;let a=r.getBoundingClientRect(),o=a.width,s=a.height;if(o===0||s===0)return;t.width=o*window.devicePixelRatio,t.height=s*window.devicePixelRatio,t.style.width=o+`px`,t.style.height=s+`px`;let c=t.getContext(`2d`);if(!c)return;c.scale(window.devicePixelRatio,window.devicePixelRatio),c.clearRect(0,0,o,s),c.fillStyle=`#0d1117`,c.fillRect(0,0,o,s);let l=e.scores,u=e.totalFrames;if(l.length===0||u===0){c.fillStyle=`#8b949e`,c.font=`12px sans-serif`,c.textAlign=`center`,c.fillText(`No analysis data`,o/2,s/2);return}let d=o/l.length;for(let e=0;e<l.length;e++){let t=l[e],n=Math.min(t*3,1);c.fillStyle=`rgb(${Math.floor(n*255)},${Math.floor((1-n)*80)},${Math.floor((1-n)*40)})`;let r=Math.max(1,t*s*.8);c.fillRect(e*d,s-r,Math.max(1,d),r)}let f=e.scenes.filter(e=>!e.removed);c.strokeStyle=`#f85149`,c.lineWidth=1;for(let e of f){let t=e.frame/u*o;c.beginPath(),c.moveTo(t,0),c.lineTo(t,s),c.stroke()}if(i!==null){let e=i/u*o;c.strokeStyle=`rgba(255,255,255,0.5)`,c.lineWidth=1,c.beginPath(),c.moveTo(e,0),c.lineTo(e,s),c.stroke()}},[e.scores,e.totalFrames,e.scenes,i]);(0,ei.useEffect)(()=>{o()},[o]),(0,ei.useEffect)(()=>{let e=new ResizeObserver(()=>o());return r.current&&e.observe(r.current),()=>e.disconnect()},[o]);let s=(0,ei.useCallback)(t=>{let r=n.current;if(!r||e.totalFrames===0)return 0;let i=r.getBoundingClientRect(),a=t-i.left;return Math.round(a/i.width*e.totalFrames)},[e.totalFrames]),c=(0,ei.useCallback)(e=>{t(s(e.clientX))},[s,t]),l=(0,ei.useCallback)(e=>{a(s(e.clientX))},[s]),u=(0,ei.useCallback)(()=>{a(null)},[]);return(0,ti.jsxs)(`div`,{className:`timeline-container`,children:[(0,ti.jsx)(`div`,{className:`timeline-canvas-wrap`,ref:r,onClick:c,onMouseMove:l,onMouseLeave:u,children:(0,ti.jsx)(`canvas`,{ref:n})}),(0,ti.jsxs)(`div`,{className:`timeline-info`,children:[(0,ti.jsxs)(`span`,{children:[e.scenes.filter(e=>!e.removed).length,` scenes`]}),(0,ti.jsx)(`span`,{children:i===null?``:`Frame ${i} (${(t=>{if(e.fps<=0)return`${t}`;let n=t/e.fps;return`${Math.floor(n/60)}:${(n%60).toFixed(1).padStart(4,`0`)}`})(i)})`}),(0,ti.jsx)(`span`,{children:e.totalFrames>0?`${e.totalFrames} frames`:``})]})]})}var ei,ti,ni=o((()=>{ei=l(d()),Jr(),ti=Br()}));function ri(){let{state:e,startAnalysis:t,cancelAnalysis:n,dispatch:r}=Hr(),[i,a]=(0,ii.useState)({threshold:.4,min_scene_len:15,adaptive_threshold:!0,skip_frames:2,downscale_height:480,threaded_pipeline:!0,detect_faces:!1,face_confidence:.5,cluster_distance:.6}),o=(0,ii.useCallback)((e,t)=>{a(n=>({...n,[e]:t}))},[]),s=(0,ii.useCallback)(()=>{t(i)},[i,t]);return(0,z.jsxs)(`div`,{className:`panel-content`,children:[!e.videoInfo?.path&&(0,z.jsx)(`div`,{style:{marginBottom:12},children:(0,z.jsx)(`button`,{className:`btn btn-primary`,style:{width:`100%`},onClick:()=>r({type:`SHOW_FILE_PICKER`,payload:!0}),children:`Open Video`})}),e.videoInfo?.path&&(0,z.jsxs)(`div`,{style:{marginBottom:12,fontSize:11,color:`var(--text-muted)`,wordBreak:`break-all`},children:[(0,z.jsx)(`span`,{style:{cursor:`pointer`,textDecoration:`underline`},onClick:()=>r({type:`SHOW_FILE_PICKER`,payload:!0}),title:`Click to change video`,children:e.videoInfo.filename}),(0,z.jsxs)(`span`,{style:{display:`block`,marginTop:2},children:[e.videoInfo.width,`x`,e.videoInfo.height,` | `,e.videoInfo.fps.toFixed(1),` fps |`,` `,Math.round(e.videoInfo.duration),`s`]})]}),(0,z.jsxs)(`div`,{className:`setting-row`,children:[(0,z.jsxs)(`div`,{className:`setting-label`,children:[(0,z.jsx)(`span`,{children:`Threshold`}),(0,z.jsx)(`span`,{children:i.threshold.toFixed(2)})]}),(0,z.jsx)(`input`,{type:`range`,min:.05,max:1,step:.05,value:i.threshold,onChange:e=>o(`threshold`,parseFloat(e.target.value))})]}),(0,z.jsxs)(`div`,{className:`setting-row`,children:[(0,z.jsxs)(`div`,{className:`setting-label`,children:[(0,z.jsx)(`span`,{children:`Min Scene Length`}),(0,z.jsx)(`span`,{children:i.min_scene_len})]}),(0,z.jsx)(`input`,{type:`range`,min:1,max:120,step:1,value:i.min_scene_len,onChange:e=>o(`min_scene_len`,parseInt(e.target.value))})]}),(0,z.jsxs)(`div`,{className:`checkbox-row`,children:[(0,z.jsx)(`input`,{type:`checkbox`,id:`adaptive`,checked:i.adaptive_threshold,onChange:e=>o(`adaptive_threshold`,e.target.checked)}),(0,z.jsx)(`label`,{htmlFor:`adaptive`,children:`Adaptive Threshold`})]}),(0,z.jsxs)(`div`,{className:`setting-row`,children:[(0,z.jsxs)(`div`,{className:`setting-label`,children:[(0,z.jsx)(`span`,{children:`Skip Frames`}),(0,z.jsx)(`span`,{children:i.skip_frames})]}),(0,z.jsx)(`input`,{type:`range`,min:1,max:10,step:1,value:i.skip_frames,onChange:e=>o(`skip_frames`,parseInt(e.target.value))})]}),(0,z.jsxs)(`div`,{className:`setting-row`,children:[(0,z.jsxs)(`div`,{className:`setting-label`,children:[(0,z.jsx)(`span`,{children:`Downscale Height`}),(0,z.jsx)(`span`,{children:i.downscale_height||`Off`})]}),(0,z.jsx)(`input`,{type:`range`,min:0,max:1080,step:60,value:i.downscale_height,onChange:e=>o(`downscale_height`,parseInt(e.target.value))})]}),(0,z.jsxs)(`div`,{className:`checkbox-row`,children:[(0,z.jsx)(`input`,{type:`checkbox`,id:`threaded`,checked:i.threaded_pipeline,onChange:e=>o(`threaded_pipeline`,e.target.checked)}),(0,z.jsx)(`label`,{htmlFor:`threaded`,children:`Threaded Pipeline`})]}),(0,z.jsx)(`hr`,{style:{border:`none`,borderTop:`1px solid var(--border)`,margin:`12px 0`}}),(0,z.jsxs)(`div`,{className:`checkbox-row`,children:[(0,z.jsx)(`input`,{type:`checkbox`,id:`faces`,checked:i.detect_faces,onChange:e=>o(`detect_faces`,e.target.checked)}),(0,z.jsx)(`label`,{htmlFor:`faces`,children:`Face Detection`})]}),i.detect_faces&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(`div`,{className:`setting-row`,children:[(0,z.jsxs)(`div`,{className:`setting-label`,children:[(0,z.jsx)(`span`,{children:`Face Confidence`}),(0,z.jsx)(`span`,{children:i.face_confidence.toFixed(2)})]}),(0,z.jsx)(`input`,{type:`range`,min:.1,max:1,step:.05,value:i.face_confidence,onChange:e=>o(`face_confidence`,parseFloat(e.target.value))})]}),(0,z.jsxs)(`div`,{className:`setting-row`,children:[(0,z.jsxs)(`div`,{className:`setting-label`,children:[(0,z.jsx)(`span`,{children:`Cluster Distance`}),(0,z.jsx)(`span`,{children:i.cluster_distance.toFixed(2)})]}),(0,z.jsx)(`input`,{type:`range`,min:.1,max:1.5,step:.05,value:i.cluster_distance,onChange:e=>o(`cluster_distance`,parseFloat(e.target.value))})]})]}),(0,z.jsx)(`hr`,{style:{border:`none`,borderTop:`1px solid var(--border)`,margin:`12px 0`}}),e.analyzing?(0,z.jsx)(`button`,{className:`btn btn-danger`,style:{width:`100%`},onClick:n,children:`Cancel`}):(0,z.jsx)(`button`,{className:`btn btn-primary`,style:{width:`100%`},onClick:s,disabled:!e.videoInfo?.path,children:`Analyze`}),e.analyzing&&(0,z.jsxs)(`div`,{style:{marginTop:8},children:[(0,z.jsx)(`div`,{className:`progress-bar`,children:(0,z.jsx)(`div`,{className:`progress-fill`,style:{width:`${e.progress}%`}})}),(0,z.jsxs)(`div`,{className:`progress-text`,children:[e.phase,` - `,e.progress.toFixed(1),`% (`,e.scenesFound,` scenes)`]})]}),!e.analyzing&&e.scenes.length>0&&(0,z.jsxs)(`div`,{style:{marginTop:8,fontSize:11,color:`var(--text-muted)`},children:[e.scenes.filter(e=>!e.removed).length,` scenes detected`]}),e.error&&(0,z.jsx)(`div`,{style:{marginTop:8,padding:`8px 10px`,background:`rgba(248, 81, 73, 0.15)`,border:`1px solid rgba(248, 81, 73, 0.4)`,borderRadius:4,fontSize:11,color:`#f85149`,cursor:`pointer`},onClick:()=>r({type:`SET_ERROR`,payload:null}),title:`Click to dismiss`,children:e.error})]})}var ii,z,ai=o((()=>{ii=l(d()),Jr(),z=Br()}));function oi(){let{state:e,selectAndSeek:t,removeScene:n,restoreScene:r}=Hr(),[i,a]=(0,si.useState)(1),o=(0,si.useCallback)(async(e,t)=>{e.stopPropagation(),await n(t)},[n]),s=(0,si.useCallback)(async(e,t)=>{e.stopPropagation(),await r(t)},[r]);return e.scenes.length===0?(0,ci.jsxs)(`div`,{className:`empty-state`,children:[(0,ci.jsx)(`div`,{children:`No scenes detected`}),(0,ci.jsx)(`div`,{style:{fontSize:11},children:`Run analysis to detect scenes`})]}):(0,ci.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`},children:[(0,ci.jsx)(`div`,{className:`panel-content`,style:{flex:1},children:(0,ci.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(${Math.round(120*i)}px, 1fr))`,gap:8},children:e.scenes.map(n=>(0,ci.jsxs)(`div`,{className:`scene-card${e.selectedScene===n.frame?` active`:``}${n.removed?` removed`:``}`,onClick:()=>t(n.frame),children:[(0,ci.jsx)(`img`,{src:jr(n.frame),alt:n.timecode,loading:`lazy`,style:{aspectRatio:`16/9`,objectFit:`cover`}}),(0,ci.jsxs)(`div`,{className:`scene-card-info`,children:[(0,ci.jsx)(`span`,{className:`timecode`,children:n.timecode}),(0,ci.jsxs)(`span`,{className:`score`,children:[(n.score*100).toFixed(0),`%`]})]}),n.removed?(0,ci.jsx)(`button`,{className:`restore-btn`,onClick:e=>s(e,n.frame),title:`Restore scene`,children:`+`}):(0,ci.jsx)(`button`,{className:`delete-btn`,onClick:e=>o(e,n.frame),title:`Remove scene`,children:`X`})]},n.frame))})}),(0,ci.jsxs)(`div`,{className:`zoom-control`,children:[(0,ci.jsx)(`span`,{children:`Size`}),(0,ci.jsx)(`input`,{type:`range`,min:.5,max:2.5,step:.1,value:i,onChange:e=>a(parseFloat(e.target.value))})]})]})}var si,ci,li=o((()=>{si=l(d()),Jr(),Rr(),ci=Br()}));function ui(e){return mi[e%mi.length]}function di(){let{state:e,selectAndSeek:t}=Hr(),[n,r]=(0,fi.useState)(`grouped`),i=(0,fi.useMemo)(()=>{let t=[];return e.scenes.forEach((e,n)=>{e.removed||e.faces?.forEach((r,i)=>{t.push({sceneIdx:n,faceIdx:i,face:r,scene:e})})}),t},[e.scenes]),a=(0,fi.useMemo)(()=>{let e=new Map;for(let t of i){let n=t.face.character_id;e.has(n)||e.set(n,[]),e.get(n).push(t)}return Array.from(e.entries()).sort((e,t)=>e[0]-t[0])},[i]);return i.length===0?(0,pi.jsxs)(`div`,{className:`empty-state`,children:[(0,pi.jsx)(`div`,{children:`No faces detected`}),(0,pi.jsx)(`div`,{style:{fontSize:11},children:`Enable face detection in settings`})]}):(0,pi.jsxs)(`div`,{className:`panel-content`,children:[(0,pi.jsxs)(`div`,{className:`face-toggle`,children:[(0,pi.jsx)(`button`,{className:n===`grouped`?`active`:``,onClick:()=>r(`grouped`),children:`Grouped`}),(0,pi.jsx)(`button`,{className:n===`all`?`active`:``,onClick:()=>r(`all`),children:`All`})]}),n===`grouped`?a.map(([e,n])=>(0,pi.jsxs)(`div`,{children:[(0,pi.jsxs)(`div`,{className:`face-group-header`,children:[(0,pi.jsx)(`span`,{className:`face-color-dot`,style:{background:ui(e)}}),(0,pi.jsxs)(`span`,{children:[`Character `,e]}),(0,pi.jsxs)(`span`,{style:{color:`var(--text-muted)`,fontWeight:400},children:[`(`,n.length,`)`]})]}),(0,pi.jsx)(`div`,{className:`face-grid`,children:n.map(n=>(0,pi.jsx)(`div`,{className:`face-crop`,style:{borderColor:ui(e)},onClick:()=>t(n.scene.frame),title:`Scene ${n.sceneIdx}, ${n.scene.timecode}`,children:(0,pi.jsx)(`img`,{src:Fr(n.sceneIdx,n.faceIdx),alt:``,loading:`lazy`})},`${n.sceneIdx}-${n.faceIdx}`))})]},e)):(0,pi.jsx)(`div`,{className:`face-grid`,children:i.map(e=>(0,pi.jsx)(`div`,{className:`face-crop`,style:{borderColor:ui(e.face.character_id)},onClick:()=>t(e.scene.frame),title:`Character ${e.face.character_id}, ${e.scene.timecode}`,children:(0,pi.jsx)(`img`,{src:Fr(e.sceneIdx,e.faceIdx),alt:``,loading:`lazy`})},`${e.sceneIdx}-${e.faceIdx}`))})]})}var fi,pi,mi,hi=o((()=>{fi=l(d()),Jr(),Rr(),pi=Br(),mi=[`#58a6ff`,`#f0883e`,`#a371f7`,`#3fb950`,`#f85149`,`#d2a8ff`,`#79c0ff`,`#ffa657`,`#7ee787`,`#ff7b72`,`#d29922`,`#56d4dd`,`#bc8cff`,`#e3b341`,`#db61a2`]}));function gi(e){let t=e.lastIndexOf(`.`);return t<0?!1:xi.has(e.substring(t).toLowerCase())}function _i(e){return e===void 0?``:e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:e<1024*1024*1024?`${(e/(1024*1024)).toFixed(1)} MB`:`${(e/(1024*1024*1024)).toFixed(1)} GB`}function vi(){let{loadVideo:e,dispatch:t}=Hr(),[n,r]=(0,yi.useState)(()=>localStorage.getItem(`lastDir`)||`~`),[i,a]=(0,yi.useState)([]),[o,s]=(0,yi.useState)(``),[c,l]=(0,yi.useState)(``),[u,d]=(0,yi.useState)(``),[f,p]=(0,yi.useState)(()=>localStorage.getItem(`lastVideo`)||``),[m,h]=(0,yi.useState)(!1),g=(0,yi.useCallback)(async e=>{try{d(``);let t=await Ar(e);s(t.path),l(t.parent),a(t.entries.filter(e=>e.type===`dir`||gi(e.name))),localStorage.setItem(`lastDir`,t.path)}catch(e){d(String(e))}},[]);(0,yi.useEffect)(()=>{g(n)},[]);let _=(0,yi.useCallback)(async()=>{if(f.trim()){h(!0),d(``);try{await e(f.trim())}catch(e){d(e instanceof Error?e.message:String(e))}finally{h(!1)}}},[f,e]),v=(0,yi.useCallback)(async t=>{if(t.type===`dir`)g(t.path);else{p(t.path),h(!0),d(``);try{await e(t.path)}catch(e){d(e instanceof Error?e.message:String(e))}finally{h(!1)}}},[g,e]);return(0,bi.jsx)(`div`,{className:`file-picker-overlay`,onClick:()=>t({type:`SHOW_FILE_PICKER`,payload:!1}),children:(0,bi.jsxs)(`div`,{className:`file-picker`,onClick:e=>e.stopPropagation(),children:[(0,bi.jsxs)(`div`,{className:`file-picker-header`,children:[(0,bi.jsx)(`input`,{className:`input`,placeholder:`Path to video file...`,value:f,onChange:e=>p(e.target.value),onKeyDown:(0,yi.useCallback)(e=>{e.key===`Enter`&&_()},[_])}),(0,bi.jsx)(`button`,{className:`btn btn-primary`,onClick:_,disabled:m||!f.trim(),children:`Open`})]}),(0,bi.jsx)(`div`,{className:`file-picker-path`,children:o}),u&&(0,bi.jsx)(`div`,{className:`file-picker-error`,children:u}),(0,bi.jsxs)(`div`,{className:`file-picker-list`,children:[c&&(0,bi.jsxs)(`div`,{className:`file-picker-item`,onClick:()=>g(c),children:[(0,bi.jsx)(`span`,{className:`icon`,children:`..`}),(0,bi.jsx)(`span`,{className:`name`,children:`(parent directory)`})]}),i.map(e=>(0,bi.jsxs)(`div`,{className:`file-picker-item`,onClick:()=>v(e),children:[(0,bi.jsx)(`span`,{className:`icon`,children:e.type===`dir`?`/`:`#`}),(0,bi.jsx)(`span`,{className:`name`,children:e.name}),e.size!==void 0&&(0,bi.jsx)(`span`,{className:`size`,children:_i(e.size)})]},e.path)),i.length===0&&!u&&(0,bi.jsx)(`div`,{style:{padding:`12px`,color:`var(--text-muted)`,textAlign:`center`,fontSize:12},children:`No video files found`})]})]})})}var yi,bi,xi,Si=o((()=>{yi=l(d()),Jr(),Rr(),bi=Br(),xi=new Set([`.mp4`,`.mkv`,`.avi`,`.mov`,`.webm`,`.wmv`,`.flv`,`.m4v`,`.mpg`,`.mpeg`,`.ts`])}));function Ci(){let{state:e,dispatch:t}=Hr();return(0,Ti.useEffect)(()=>{Dr().then(e=>{e.path?(t({type:`SET_VIDEO_INFO`,payload:e}),Mr().then(e=>{t({type:`SET_SCENES`,payload:{scenes:e.scenes,scores:e.all_scores,fps:e.fps,totalFrames:e.total_frames}})}).catch(()=>{})):t({type:`SHOW_FILE_PICKER`,payload:!0})}).catch(()=>{t({type:`SHOW_FILE_PICKER`,payload:!0})})},[t]),(0,Ei.jsxs)(Ei.Fragment,{children:[(0,Ei.jsx)(gr,{className:`dockview-theme-dark`,onReady:(0,Ti.useCallback)(e=>{let t=e.api.addPanel({id:`settings`,component:`settings`,title:`Settings`}),n=e.api.addPanel({id:`video-player`,component:`video-player`,title:`Video`,position:{referencePanel:t,direction:`right`}});e.api.addPanel({id:`timeline`,component:`timeline`,title:`Timeline`,position:{referencePanel:n,direction:`below`}});let r=e.api.addPanel({id:`scenes`,component:`scenes`,title:`Scenes`,position:{referencePanel:n,direction:`right`}});e.api.addPanel({id:`faces`,component:`faces`,title:`Faces`,position:{referencePanel:r,direction:`below`}}),t.api.setSize({width:260}),r.api.setSize({width:240})},[]),components:Di}),e.showFilePicker&&(0,Ei.jsx)(vi,{})]})}function wi(){return(0,Ei.jsx)(Ur,{children:(0,Ei.jsx)(Ci,{})})}var Ti,Ei,Di,Oi=o((()=>{Ti=l(d()),Tr(),Er(),Jr(),Qr(),ni(),ai(),li(),hi(),Si(),Rr(),Ei=Br(),Di={"video-player":Yr,timeline:$r,settings:ri,scenes:oi,faces:di}})),ki=o((()=>{}));s((()=>{var e=l(d()),t=l(_());Oi(),ki();var n=Br();t.createRoot(document.getElementById(`root`)).render((0,n.jsx)(e.StrictMode,{children:(0,n.jsx)(wi,{})}))}))();