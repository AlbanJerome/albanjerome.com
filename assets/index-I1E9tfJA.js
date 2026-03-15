function Jy(r,n){for(var i=0;i<n.length;i++){const a=n[i];if(typeof a!="string"&&!Array.isArray(a)){for(const s in a)if(s!=="default"&&!(s in r)){const c=Object.getOwnPropertyDescriptor(a,s);c&&Object.defineProperty(r,s,c.get?c:{enumerable:!0,get:()=>a[s]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(s){if(s.ep)return;s.ep=!0;const c=i(s);fetch(s.href,c)}})();function ip(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var pc={exports:{}},Qi={},mc={exports:{}},be={};var pf;function Xy(){if(pf)return be;pf=1;var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.iterator;function x(S){return S===null||typeof S!="object"?null:(S=b&&S[b]||S["@@iterator"],typeof S=="function"?S:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,A={};function I(S,z,he){this.props=S,this.context=z,this.refs=A,this.updater=he||E}I.prototype.isReactComponent={},I.prototype.setState=function(S,z){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,z,"setState")},I.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function W(){}W.prototype=I.prototype;function O(S,z,he){this.props=S,this.context=z,this.refs=A,this.updater=he||E}var D=O.prototype=new W;D.constructor=O,N(D,I.prototype),D.isPureReactComponent=!0;var $=Array.isArray,U=Object.prototype.hasOwnProperty,Z={current:null},K={key:!0,ref:!0,__self:!0,__source:!0};function fe(S,z,he){var pe,_e={},Se=null,Ee=null;if(z!=null)for(pe in z.ref!==void 0&&(Ee=z.ref),z.key!==void 0&&(Se=""+z.key),z)U.call(z,pe)&&!K.hasOwnProperty(pe)&&(_e[pe]=z[pe]);var je=arguments.length-2;if(je===1)_e.children=he;else if(1<je){for(var ze=Array(je),st=0;st<je;st++)ze[st]=arguments[st+2];_e.children=ze}if(S&&S.defaultProps)for(pe in je=S.defaultProps,je)_e[pe]===void 0&&(_e[pe]=je[pe]);return{$$typeof:r,type:S,key:Se,ref:Ee,props:_e,_owner:Z.current}}function ke(S,z){return{$$typeof:r,type:S.type,key:z,ref:S.ref,props:S.props,_owner:S._owner}}function ye(S){return typeof S=="object"&&S!==null&&S.$$typeof===r}function Te(S){var z={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(he){return z[he]})}var ie=/\/+/g;function we(S,z){return typeof S=="object"&&S!==null&&S.key!=null?Te(""+S.key):z.toString(36)}function Y(S,z,he,pe,_e){var Se=typeof S;(Se==="undefined"||Se==="boolean")&&(S=null);var Ee=!1;if(S===null)Ee=!0;else switch(Se){case"string":case"number":Ee=!0;break;case"object":switch(S.$$typeof){case r:case n:Ee=!0}}if(Ee)return Ee=S,_e=_e(Ee),S=pe===""?"."+we(Ee,0):pe,$(_e)?(he="",S!=null&&(he=S.replace(ie,"$&/")+"/"),Y(_e,z,he,"",function(st){return st})):_e!=null&&(ye(_e)&&(_e=ke(_e,he+(!_e.key||Ee&&Ee.key===_e.key?"":(""+_e.key).replace(ie,"$&/")+"/")+S)),z.push(_e)),1;if(Ee=0,pe=pe===""?".":pe+":",$(S))for(var je=0;je<S.length;je++){Se=S[je];var ze=pe+we(Se,je);Ee+=Y(Se,z,he,ze,_e)}else if(ze=x(S),typeof ze=="function")for(S=ze.call(S),je=0;!(Se=S.next()).done;)Se=Se.value,ze=pe+we(Se,je++),Ee+=Y(Se,z,he,ze,_e);else if(Se==="object")throw z=String(S),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return Ee}function xe(S,z,he){if(S==null)return S;var pe=[],_e=0;return Y(S,pe,"","",function(Se){return z.call(he,Se,_e++)}),pe}function ce(S){if(S._status===-1){var z=S._result;z=z(),z.then(function(he){(S._status===0||S._status===-1)&&(S._status=1,S._result=he)},function(he){(S._status===0||S._status===-1)&&(S._status=2,S._result=he)}),S._status===-1&&(S._status=0,S._result=z)}if(S._status===1)return S._result.default;throw S._result}var se={current:null},P={transition:null},V={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:P,ReactCurrentOwner:Z};function H(){throw Error("act(...) is not supported in production builds of React.")}return be.Children={map:xe,forEach:function(S,z,he){xe(S,function(){z.apply(this,arguments)},he)},count:function(S){var z=0;return xe(S,function(){z++}),z},toArray:function(S){return xe(S,function(z){return z})||[]},only:function(S){if(!ye(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},be.Component=I,be.Fragment=i,be.Profiler=s,be.PureComponent=O,be.StrictMode=a,be.Suspense=p,be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,be.act=H,be.cloneElement=function(S,z,he){if(S==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+S+".");var pe=N({},S.props),_e=S.key,Se=S.ref,Ee=S._owner;if(z!=null){if(z.ref!==void 0&&(Se=z.ref,Ee=Z.current),z.key!==void 0&&(_e=""+z.key),S.type&&S.type.defaultProps)var je=S.type.defaultProps;for(ze in z)U.call(z,ze)&&!K.hasOwnProperty(ze)&&(pe[ze]=z[ze]===void 0&&je!==void 0?je[ze]:z[ze])}var ze=arguments.length-2;if(ze===1)pe.children=he;else if(1<ze){je=Array(ze);for(var st=0;st<ze;st++)je[st]=arguments[st+2];pe.children=je}return{$$typeof:r,type:S.type,key:_e,ref:Se,props:pe,_owner:Ee}},be.createContext=function(S){return S={$$typeof:d,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},S.Provider={$$typeof:c,_context:S},S.Consumer=S},be.createElement=fe,be.createFactory=function(S){var z=fe.bind(null,S);return z.type=S,z},be.createRef=function(){return{current:null}},be.forwardRef=function(S){return{$$typeof:f,render:S}},be.isValidElement=ye,be.lazy=function(S){return{$$typeof:v,_payload:{_status:-1,_result:S},_init:ce}},be.memo=function(S,z){return{$$typeof:m,type:S,compare:z===void 0?null:z}},be.startTransition=function(S){var z=P.transition;P.transition={};try{S()}finally{P.transition=z}},be.unstable_act=H,be.useCallback=function(S,z){return se.current.useCallback(S,z)},be.useContext=function(S){return se.current.useContext(S)},be.useDebugValue=function(){},be.useDeferredValue=function(S){return se.current.useDeferredValue(S)},be.useEffect=function(S,z){return se.current.useEffect(S,z)},be.useId=function(){return se.current.useId()},be.useImperativeHandle=function(S,z,he){return se.current.useImperativeHandle(S,z,he)},be.useInsertionEffect=function(S,z){return se.current.useInsertionEffect(S,z)},be.useLayoutEffect=function(S,z){return se.current.useLayoutEffect(S,z)},be.useMemo=function(S,z){return se.current.useMemo(S,z)},be.useReducer=function(S,z,he){return se.current.useReducer(S,z,he)},be.useRef=function(S){return se.current.useRef(S)},be.useState=function(S){return se.current.useState(S)},be.useSyncExternalStore=function(S,z,he){return se.current.useSyncExternalStore(S,z,he)},be.useTransition=function(){return se.current.useTransition()},be.version="18.3.1",be}var mf;function is(){return mf||(mf=1,mc.exports=Xy()),mc.exports}var gf;function ev(){if(gf)return Qi;gf=1;var r=is(),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,m){var v,b={},x=null,E=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(E=p.ref);for(v in p)a.call(p,v)&&!c.hasOwnProperty(v)&&(b[v]=p[v]);if(f&&f.defaultProps)for(v in p=f.defaultProps,p)b[v]===void 0&&(b[v]=p[v]);return{$$typeof:n,type:f,key:x,ref:E,props:b,_owner:s.current}}return Qi.Fragment=i,Qi.jsx=d,Qi.jsxs=d,Qi}var yf;function tv(){return yf||(yf=1,pc.exports=ev()),pc.exports}var y=tv(),La={},gc={exports:{}},yt={},yc={exports:{}},vc={};var vf;function nv(){return vf||(vf=1,(function(r){function n(P,V){var H=P.length;P.push(V);e:for(;0<H;){var S=H-1>>>1,z=P[S];if(0<s(z,V))P[S]=V,P[H]=z,H=S;else break e}}function i(P){return P.length===0?null:P[0]}function a(P){if(P.length===0)return null;var V=P[0],H=P.pop();if(H!==V){P[0]=H;e:for(var S=0,z=P.length,he=z>>>1;S<he;){var pe=2*(S+1)-1,_e=P[pe],Se=pe+1,Ee=P[Se];if(0>s(_e,H))Se<z&&0>s(Ee,_e)?(P[S]=Ee,P[Se]=H,S=Se):(P[S]=_e,P[pe]=H,S=pe);else if(Se<z&&0>s(Ee,H))P[S]=Ee,P[Se]=H,S=Se;else break e}}return V}function s(P,V){var H=P.sortIndex-V.sortIndex;return H!==0?H:P.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,f=d.now();r.unstable_now=function(){return d.now()-f}}var p=[],m=[],v=1,b=null,x=3,E=!1,N=!1,A=!1,I=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(P){for(var V=i(m);V!==null;){if(V.callback===null)a(m);else if(V.startTime<=P)a(m),V.sortIndex=V.expirationTime,n(p,V);else break;V=i(m)}}function $(P){if(A=!1,D(P),!N)if(i(p)!==null)N=!0,ce(U);else{var V=i(m);V!==null&&se($,V.startTime-P)}}function U(P,V){N=!1,A&&(A=!1,W(fe),fe=-1),E=!0;var H=x;try{for(D(V),b=i(p);b!==null&&(!(b.expirationTime>V)||P&&!Te());){var S=b.callback;if(typeof S=="function"){b.callback=null,x=b.priorityLevel;var z=S(b.expirationTime<=V);V=r.unstable_now(),typeof z=="function"?b.callback=z:b===i(p)&&a(p),D(V)}else a(p);b=i(p)}if(b!==null)var he=!0;else{var pe=i(m);pe!==null&&se($,pe.startTime-V),he=!1}return he}finally{b=null,x=H,E=!1}}var Z=!1,K=null,fe=-1,ke=5,ye=-1;function Te(){return!(r.unstable_now()-ye<ke)}function ie(){if(K!==null){var P=r.unstable_now();ye=P;var V=!0;try{V=K(!0,P)}finally{V?we():(Z=!1,K=null)}}else Z=!1}var we;if(typeof O=="function")we=function(){O(ie)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,xe=Y.port2;Y.port1.onmessage=ie,we=function(){xe.postMessage(null)}}else we=function(){I(ie,0)};function ce(P){K=P,Z||(Z=!0,we())}function se(P,V){fe=I(function(){P(r.unstable_now())},V)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_continueExecution=function(){N||E||(N=!0,ce(U))},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ke=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_getFirstCallbackNode=function(){return i(p)},r.unstable_next=function(P){switch(x){case 1:case 2:case 3:var V=3;break;default:V=x}var H=x;x=V;try{return P()}finally{x=H}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(P,V){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var H=x;x=P;try{return V()}finally{x=H}},r.unstable_scheduleCallback=function(P,V,H){var S=r.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?S+H:S):H=S,P){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=H+z,P={id:v++,callback:V,priorityLevel:P,startTime:H,expirationTime:z,sortIndex:-1},H>S?(P.sortIndex=H,n(m,P),i(p)===null&&P===i(m)&&(A?(W(fe),fe=-1):A=!0,se($,H-S))):(P.sortIndex=z,n(p,P),N||E||(N=!0,ce(U))),P},r.unstable_shouldYield=Te,r.unstable_wrapCallback=function(P){var V=x;return function(){var H=x;x=V;try{return P.apply(this,arguments)}finally{x=H}}}})(vc)),vc}var wf;function rv(){return wf||(wf=1,yc.exports=nv()),yc.exports}var bf;function iv(){if(bf)return yt;bf=1;var r=is(),n=rv();function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)t+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,s={};function c(e,t){d(e,t),d(e+"Capture",t)}function d(e,t){for(s[e]=t,e=0;e<t.length;e++)a.add(t[e])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},b={};function x(e){return p.call(b,e)?!0:p.call(v,e)?!1:m.test(e)?b[e]=!0:(v[e]=!0,!1)}function E(e,t,o,l){if(o!==null&&o.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function N(e,t,o,l){if(t===null||typeof t>"u"||E(e,t,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function A(e,t,o,l,u,h,g){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=o,this.propertyName=e,this.type=t,this.sanitizeURL=h,this.removeEmptyString=g}var I={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){I[e]=new A(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];I[t]=new A(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){I[e]=new A(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){I[e]=new A(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){I[e]=new A(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){I[e]=new A(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){I[e]=new A(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){I[e]=new A(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){I[e]=new A(e,5,!1,e.toLowerCase(),null,!1,!1)});var W=/[\-:]([a-z])/g;function O(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(W,O);I[t]=new A(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(W,O);I[t]=new A(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(W,O);I[t]=new A(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){I[e]=new A(e,1,!1,e.toLowerCase(),null,!1,!1)}),I.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){I[e]=new A(e,1,!1,e.toLowerCase(),null,!0,!0)});function D(e,t,o,l){var u=I.hasOwnProperty(t)?I[t]:null;(u!==null?u.type!==0:l||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(N(t,o,u,l)&&(o=null),l||u===null?x(t)&&(o===null?e.removeAttribute(t):e.setAttribute(t,""+o)):u.mustUseProperty?e[u.propertyName]=o===null?u.type===3?!1:"":o:(t=u.attributeName,l=u.attributeNamespace,o===null?e.removeAttribute(t):(u=u.type,o=u===3||u===4&&o===!0?"":""+o,l?e.setAttributeNS(l,t,o):e.setAttribute(t,o))))}var $=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),Z=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),fe=Symbol.for("react.strict_mode"),ke=Symbol.for("react.profiler"),ye=Symbol.for("react.provider"),Te=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),we=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),xe=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),se=Symbol.for("react.offscreen"),P=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=P&&e[P]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,S;function z(e){if(S===void 0)try{throw Error()}catch(o){var t=o.stack.trim().match(/\n( *(at )?)/);S=t&&t[1]||""}return`
`+S+e}var he=!1;function pe(e,t){if(!e||he)return"";he=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(R){var l=R}Reflect.construct(e,[],t)}else{try{t.call()}catch(R){l=R}e.call(t.prototype)}else{try{throw Error()}catch(R){l=R}e()}}catch(R){if(R&&l&&typeof R.stack=="string"){for(var u=R.stack.split(`
`),h=l.stack.split(`
`),g=u.length-1,w=h.length-1;1<=g&&0<=w&&u[g]!==h[w];)w--;for(;1<=g&&0<=w;g--,w--)if(u[g]!==h[w]){if(g!==1||w!==1)do if(g--,w--,0>w||u[g]!==h[w]){var k=`
`+u[g].replace(" at new "," at ");return e.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",e.displayName)),k}while(1<=g&&0<=w);break}}}finally{he=!1,Error.prepareStackTrace=o}return(e=e?e.displayName||e.name:"")?z(e):""}function _e(e){switch(e.tag){case 5:return z(e.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return e=pe(e.type,!1),e;case 11:return e=pe(e.type.render,!1),e;case 1:return e=pe(e.type,!0),e;default:return""}}function Se(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case K:return"Fragment";case Z:return"Portal";case ke:return"Profiler";case fe:return"StrictMode";case we:return"Suspense";case Y:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Te:return(e.displayName||"Context")+".Consumer";case ye:return(e._context.displayName||"Context")+".Provider";case ie:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xe:return t=e.displayName||null,t!==null?t:Se(e.type)||"Memo";case ce:t=e._payload,e=e._init;try{return Se(e(t))}catch{}}return null}function Ee(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(t);case 8:return t===fe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function je(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ze(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function st(e){var t=ze(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return u.call(this)},set:function(g){l=""+g,h.call(this,g)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(g){l=""+g},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ar(e){e._valueTracker||(e._valueTracker=st(e))}function Io(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var o=t.getValue(),l="";return e&&(l=ze(e)?e.checked?"true":"false":e.value),e=l,e!==o?(t.setValue(e),!0):!1}function cn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ks(e,t){var o=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??e._wrapperState.initialChecked})}function bu(e,t){var o=t.defaultValue==null?"":t.defaultValue,l=t.checked!=null?t.checked:t.defaultChecked;o=je(t.value!=null?t.value:o),e._wrapperState={initialChecked:l,initialValue:o,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ku(e,t){t=t.checked,t!=null&&D(e,"checked",t,!1)}function xs(e,t){ku(e,t);var o=je(t.value),l=t.type;if(o!=null)l==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ts(e,t.type,o):t.hasOwnProperty("defaultValue")&&Ts(e,t.type,je(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xu(e,t,o){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var l=t.type;if(!(l!=="submit"&&l!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,o||t===e.value||(e.value=t),e.defaultValue=t}o=e.name,o!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,o!==""&&(e.name=o)}function Ts(e,t,o){(t!=="number"||cn(e.ownerDocument)!==e)&&(o==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}var hi=Array.isArray;function Cr(e,t,o,l){if(e=e.options,t){t={};for(var u=0;u<o.length;u++)t["$"+o[u]]=!0;for(o=0;o<e.length;o++)u=t.hasOwnProperty("$"+e[o].value),e[o].selected!==u&&(e[o].selected=u),u&&l&&(e[o].defaultSelected=!0)}else{for(o=""+je(o),t=null,u=0;u<e.length;u++){if(e[u].value===o){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}t!==null||e[u].disabled||(t=e[u])}t!==null&&(t.selected=!0)}}function _s(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(i(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Tu(e,t){var o=t.value;if(o==null){if(o=t.children,t=t.defaultValue,o!=null){if(t!=null)throw Error(i(92));if(hi(o)){if(1<o.length)throw Error(i(93));o=o[0]}t=o}t==null&&(t=""),o=t}e._wrapperState={initialValue:je(o)}}function _u(e,t){var o=je(t.value),l=je(t.defaultValue);o!=null&&(o=""+o,o!==e.value&&(e.value=o),t.defaultValue==null&&e.defaultValue!==o&&(e.defaultValue=o)),l!=null&&(e.defaultValue=""+l)}function Su(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Iu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ss(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Iu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ao,Au=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,o,l,u){MSApp.execUnsafeLocalFunction(function(){return e(t,o,l,u)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ao=Ao||document.createElement("div"),Ao.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ao.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function fi(e,t){if(t){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=t;return}}e.textContent=t}var pi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ng=["Webkit","ms","Moz","O"];Object.keys(pi).forEach(function(e){ng.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pi[t]=pi[e]})});function Cu(e,t,o){return t==null||typeof t=="boolean"||t===""?"":o||typeof t!="number"||t===0||pi.hasOwnProperty(e)&&pi[e]?(""+t).trim():t+"px"}function Eu(e,t){e=e.style;for(var o in t)if(t.hasOwnProperty(o)){var l=o.indexOf("--")===0,u=Cu(o,t[o],l);o==="float"&&(o="cssFloat"),l?e.setProperty(o,u):e[o]=u}}var rg=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Is(e,t){if(t){if(rg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(i(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(t.style!=null&&typeof t.style!="object")throw Error(i(62))}}function As(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cs=null;function Es(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var js=null,Er=null,jr=null;function ju(e){if(e=Wi(e)){if(typeof js!="function")throw Error(i(280));var t=e.stateNode;t&&(t=Ko(t),js(e.stateNode,e.type,t))}}function Nu(e){Er?jr?jr.push(e):jr=[e]:Er=e}function Ru(){if(Er){var e=Er,t=jr;if(jr=Er=null,ju(e),t)for(e=0;e<t.length;e++)ju(t[e])}}function Pu(e,t){return e(t)}function zu(){}var Ns=!1;function Lu(e,t,o){if(Ns)return e(t,o);Ns=!0;try{return Pu(e,t,o)}finally{Ns=!1,(Er!==null||jr!==null)&&(zu(),Ru())}}function mi(e,t){var o=e.stateNode;if(o===null)return null;var l=Ko(o);if(l===null)return null;o=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(i(231,t,typeof o));return o}var Rs=!1;if(f)try{var gi={};Object.defineProperty(gi,"passive",{get:function(){Rs=!0}}),window.addEventListener("test",gi,gi),window.removeEventListener("test",gi,gi)}catch{Rs=!1}function ig(e,t,o,l,u,h,g,w,k){var R=Array.prototype.slice.call(arguments,3);try{t.apply(o,R)}catch(M){this.onError(M)}}var yi=!1,Co=null,Eo=!1,Ps=null,og={onError:function(e){yi=!0,Co=e}};function ag(e,t,o,l,u,h,g,w,k){yi=!1,Co=null,ig.apply(og,arguments)}function sg(e,t,o,l,u,h,g,w,k){if(ag.apply(this,arguments),yi){if(yi){var R=Co;yi=!1,Co=null}else throw Error(i(198));Eo||(Eo=!0,Ps=R)}}function rr(e){var t=e,o=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(o=t.return),e=t.return;while(e)}return t.tag===3?o:null}function Wu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Mu(e){if(rr(e)!==e)throw Error(i(188))}function lg(e){var t=e.alternate;if(!t){if(t=rr(e),t===null)throw Error(i(188));return t!==e?null:e}for(var o=e,l=t;;){var u=o.return;if(u===null)break;var h=u.alternate;if(h===null){if(l=u.return,l!==null){o=l;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===o)return Mu(u),e;if(h===l)return Mu(u),t;h=h.sibling}throw Error(i(188))}if(o.return!==l.return)o=u,l=h;else{for(var g=!1,w=u.child;w;){if(w===o){g=!0,o=u,l=h;break}if(w===l){g=!0,l=u,o=h;break}w=w.sibling}if(!g){for(w=h.child;w;){if(w===o){g=!0,o=h,l=u;break}if(w===l){g=!0,l=h,o=u;break}w=w.sibling}if(!g)throw Error(i(189))}}if(o.alternate!==l)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?e:t}function Ou(e){return e=lg(e),e!==null?Fu(e):null}function Fu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fu(e);if(t!==null)return t;e=e.sibling}return null}var Bu=n.unstable_scheduleCallback,Du=n.unstable_cancelCallback,cg=n.unstable_shouldYield,ug=n.unstable_requestPaint,He=n.unstable_now,dg=n.unstable_getCurrentPriorityLevel,zs=n.unstable_ImmediatePriority,$u=n.unstable_UserBlockingPriority,jo=n.unstable_NormalPriority,hg=n.unstable_LowPriority,qu=n.unstable_IdlePriority,No=null,Zt=null;function fg(e){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(No,e,void 0,(e.current.flags&128)===128)}catch{}}var Pt=Math.clz32?Math.clz32:gg,pg=Math.log,mg=Math.LN2;function gg(e){return e>>>=0,e===0?32:31-(pg(e)/mg|0)|0}var Ro=64,Po=4194304;function vi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zo(e,t){var o=e.pendingLanes;if(o===0)return 0;var l=0,u=e.suspendedLanes,h=e.pingedLanes,g=o&268435455;if(g!==0){var w=g&~u;w!==0?l=vi(w):(h&=g,h!==0&&(l=vi(h)))}else g=o&~u,g!==0?l=vi(g):h!==0&&(l=vi(h));if(l===0)return 0;if(t!==0&&t!==l&&(t&u)===0&&(u=l&-l,h=t&-t,u>=h||u===16&&(h&4194240)!==0))return t;if((l&4)!==0&&(l|=o&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=l;0<t;)o=31-Pt(t),u=1<<o,l|=e[o],t&=~u;return l}function yg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vg(e,t){for(var o=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes;0<h;){var g=31-Pt(h),w=1<<g,k=u[g];k===-1?((w&o)===0||(w&l)!==0)&&(u[g]=yg(w,t)):k<=t&&(e.expiredLanes|=w),h&=~w}}function Ls(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Hu(){var e=Ro;return Ro<<=1,(Ro&4194240)===0&&(Ro=64),e}function Ws(e){for(var t=[],o=0;31>o;o++)t.push(e);return t}function wi(e,t,o){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Pt(t),e[t]=o}function wg(e,t){var o=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<o;){var u=31-Pt(o),h=1<<u;t[u]=0,l[u]=-1,e[u]=-1,o&=~h}}function Ms(e,t){var o=e.entangledLanes|=t;for(e=e.entanglements;o;){var l=31-Pt(o),u=1<<l;u&t|e[l]&t&&(e[l]|=t),o&=~u}}var Pe=0;function Uu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Vu,Os,Gu,Yu,Zu,Fs=!1,Lo=[],In=null,An=null,Cn=null,bi=new Map,ki=new Map,En=[],bg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ku(e,t){switch(e){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":bi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ki.delete(t.pointerId)}}function xi(e,t,o,l,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:t,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[u]},t!==null&&(t=Wi(t),t!==null&&Os(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),e)}function kg(e,t,o,l,u){switch(t){case"focusin":return In=xi(In,e,t,o,l,u),!0;case"dragenter":return An=xi(An,e,t,o,l,u),!0;case"mouseover":return Cn=xi(Cn,e,t,o,l,u),!0;case"pointerover":var h=u.pointerId;return bi.set(h,xi(bi.get(h)||null,e,t,o,l,u)),!0;case"gotpointercapture":return h=u.pointerId,ki.set(h,xi(ki.get(h)||null,e,t,o,l,u)),!0}return!1}function Qu(e){var t=ir(e.target);if(t!==null){var o=rr(t);if(o!==null){if(t=o.tag,t===13){if(t=Wu(o),t!==null){e.blockedOn=t,Zu(e.priority,function(){Gu(o)});return}}else if(t===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var o=Ds(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(o===null){o=e.nativeEvent;var l=new o.constructor(o.type,o);Cs=l,o.target.dispatchEvent(l),Cs=null}else return t=Wi(o),t!==null&&Os(t),e.blockedOn=o,!1;t.shift()}return!0}function Ju(e,t,o){Wo(e)&&o.delete(t)}function xg(){Fs=!1,In!==null&&Wo(In)&&(In=null),An!==null&&Wo(An)&&(An=null),Cn!==null&&Wo(Cn)&&(Cn=null),bi.forEach(Ju),ki.forEach(Ju)}function Ti(e,t){e.blockedOn===t&&(e.blockedOn=null,Fs||(Fs=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,xg)))}function _i(e){function t(u){return Ti(u,e)}if(0<Lo.length){Ti(Lo[0],e);for(var o=1;o<Lo.length;o++){var l=Lo[o];l.blockedOn===e&&(l.blockedOn=null)}}for(In!==null&&Ti(In,e),An!==null&&Ti(An,e),Cn!==null&&Ti(Cn,e),bi.forEach(t),ki.forEach(t),o=0;o<En.length;o++)l=En[o],l.blockedOn===e&&(l.blockedOn=null);for(;0<En.length&&(o=En[0],o.blockedOn===null);)Qu(o),o.blockedOn===null&&En.shift()}var Nr=$.ReactCurrentBatchConfig,Mo=!0;function Tg(e,t,o,l){var u=Pe,h=Nr.transition;Nr.transition=null;try{Pe=1,Bs(e,t,o,l)}finally{Pe=u,Nr.transition=h}}function _g(e,t,o,l){var u=Pe,h=Nr.transition;Nr.transition=null;try{Pe=4,Bs(e,t,o,l)}finally{Pe=u,Nr.transition=h}}function Bs(e,t,o,l){if(Mo){var u=Ds(e,t,o,l);if(u===null)il(e,t,l,Oo,o),Ku(e,l);else if(kg(u,e,t,o,l))l.stopPropagation();else if(Ku(e,l),t&4&&-1<bg.indexOf(e)){for(;u!==null;){var h=Wi(u);if(h!==null&&Vu(h),h=Ds(e,t,o,l),h===null&&il(e,t,l,Oo,o),h===u)break;u=h}u!==null&&l.stopPropagation()}else il(e,t,l,null,o)}}var Oo=null;function Ds(e,t,o,l){if(Oo=null,e=Es(l),e=ir(e),e!==null)if(t=rr(e),t===null)e=null;else if(o=t.tag,o===13){if(e=Wu(t),e!==null)return e;e=null}else if(o===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Oo=e,null}function Xu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dg()){case zs:return 1;case $u:return 4;case jo:case hg:return 16;case qu:return 536870912;default:return 16}default:return 16}}var jn=null,$s=null,Fo=null;function ed(){if(Fo)return Fo;var e,t=$s,o=t.length,l,u="value"in jn?jn.value:jn.textContent,h=u.length;for(e=0;e<o&&t[e]===u[e];e++);var g=o-e;for(l=1;l<=g&&t[o-l]===u[h-l];l++);return Fo=u.slice(e,1<l?1-l:void 0)}function Bo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Do(){return!0}function td(){return!1}function wt(e){function t(o,l,u,h,g){this._reactName=o,this._targetInst=u,this.type=l,this.nativeEvent=h,this.target=g,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(o=e[w],this[w]=o?o(h):h[w]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Do:td,this.isPropagationStopped=td,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Do)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Do)},persist:function(){},isPersistent:Do}),t}var Rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qs=wt(Rr),Si=H({},Rr,{view:0,detail:0}),Sg=wt(Si),Hs,Us,Ii,$o=H({},Si,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ii&&(Ii&&e.type==="mousemove"?(Hs=e.screenX-Ii.screenX,Us=e.screenY-Ii.screenY):Us=Hs=0,Ii=e),Hs)},movementY:function(e){return"movementY"in e?e.movementY:Us}}),nd=wt($o),Ig=H({},$o,{dataTransfer:0}),Ag=wt(Ig),Cg=H({},Si,{relatedTarget:0}),Vs=wt(Cg),Eg=H({},Rr,{animationName:0,elapsedTime:0,pseudoElement:0}),jg=wt(Eg),Ng=H({},Rr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rg=wt(Ng),Pg=H({},Rr,{data:0}),rd=wt(Pg),zg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wg[e])?!!t[e]:!1}function Gs(){return Mg}var Og=H({},Si,{key:function(e){if(e.key){var t=zg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Bo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gs,charCode:function(e){return e.type==="keypress"?Bo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Bo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fg=wt(Og),Bg=H({},$o,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),id=wt(Bg),Dg=H({},Si,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gs}),$g=wt(Dg),qg=H({},Rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hg=wt(qg),Ug=H({},$o,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vg=wt(Ug),Gg=[9,13,27,32],Ys=f&&"CompositionEvent"in window,Ai=null;f&&"documentMode"in document&&(Ai=document.documentMode);var Yg=f&&"TextEvent"in window&&!Ai,od=f&&(!Ys||Ai&&8<Ai&&11>=Ai),ad=" ",sd=!1;function ld(e,t){switch(e){case"keyup":return Gg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pr=!1;function Zg(e,t){switch(e){case"compositionend":return cd(t);case"keypress":return t.which!==32?null:(sd=!0,ad);case"textInput":return e=t.data,e===ad&&sd?null:e;default:return null}}function Kg(e,t){if(Pr)return e==="compositionend"||!Ys&&ld(e,t)?(e=ed(),Fo=$s=jn=null,Pr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return od&&t.locale!=="ko"?null:t.data;default:return null}}var Qg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ud(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qg[e.type]:t==="textarea"}function dd(e,t,o,l){Nu(l),t=Go(t,"onChange"),0<t.length&&(o=new qs("onChange","change",null,o,l),e.push({event:o,listeners:t}))}var Ci=null,Ei=null;function Jg(e){Ed(e,0)}function qo(e){var t=Or(e);if(Io(t))return e}function Xg(e,t){if(e==="change")return t}var hd=!1;if(f){var Zs;if(f){var Ks="oninput"in document;if(!Ks){var fd=document.createElement("div");fd.setAttribute("oninput","return;"),Ks=typeof fd.oninput=="function"}Zs=Ks}else Zs=!1;hd=Zs&&(!document.documentMode||9<document.documentMode)}function pd(){Ci&&(Ci.detachEvent("onpropertychange",md),Ei=Ci=null)}function md(e){if(e.propertyName==="value"&&qo(Ei)){var t=[];dd(t,Ei,e,Es(e)),Lu(Jg,t)}}function ey(e,t,o){e==="focusin"?(pd(),Ci=t,Ei=o,Ci.attachEvent("onpropertychange",md)):e==="focusout"&&pd()}function ty(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qo(Ei)}function ny(e,t){if(e==="click")return qo(t)}function ry(e,t){if(e==="input"||e==="change")return qo(t)}function iy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:iy;function ji(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var o=Object.keys(e),l=Object.keys(t);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var u=o[l];if(!p.call(t,u)||!zt(e[u],t[u]))return!1}return!0}function gd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yd(e,t){var o=gd(e);e=0;for(var l;o;){if(o.nodeType===3){if(l=e+o.textContent.length,e<=t&&l>=t)return{node:o,offset:t-e};e=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=gd(o)}}function vd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wd(){for(var e=window,t=cn();t instanceof e.HTMLIFrameElement;){try{var o=typeof t.contentWindow.location.href=="string"}catch{o=!1}if(o)e=t.contentWindow;else break;t=cn(e.document)}return t}function Qs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function oy(e){var t=wd(),o=e.focusedElem,l=e.selectionRange;if(t!==o&&o&&o.ownerDocument&&vd(o.ownerDocument.documentElement,o)){if(l!==null&&Qs(o)){if(t=l.start,e=l.end,e===void 0&&(e=t),"selectionStart"in o)o.selectionStart=t,o.selectionEnd=Math.min(e,o.value.length);else if(e=(t=o.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var u=o.textContent.length,h=Math.min(l.start,u);l=l.end===void 0?h:Math.min(l.end,u),!e.extend&&h>l&&(u=l,l=h,h=u),u=yd(o,h);var g=yd(o,l);u&&g&&(e.rangeCount!==1||e.anchorNode!==u.node||e.anchorOffset!==u.offset||e.focusNode!==g.node||e.focusOffset!==g.offset)&&(t=t.createRange(),t.setStart(u.node,u.offset),e.removeAllRanges(),h>l?(e.addRange(t),e.extend(g.node,g.offset)):(t.setEnd(g.node,g.offset),e.addRange(t)))}}for(t=[],e=o;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<t.length;o++)e=t[o],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ay=f&&"documentMode"in document&&11>=document.documentMode,zr=null,Js=null,Ni=null,Xs=!1;function bd(e,t,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Xs||zr==null||zr!==cn(l)||(l=zr,"selectionStart"in l&&Qs(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ni&&ji(Ni,l)||(Ni=l,l=Go(Js,"onSelect"),0<l.length&&(t=new qs("onSelect","select",null,t,o),e.push({event:t,listeners:l}),t.target=zr)))}function Ho(e,t){var o={};return o[e.toLowerCase()]=t.toLowerCase(),o["Webkit"+e]="webkit"+t,o["Moz"+e]="moz"+t,o}var Lr={animationend:Ho("Animation","AnimationEnd"),animationiteration:Ho("Animation","AnimationIteration"),animationstart:Ho("Animation","AnimationStart"),transitionend:Ho("Transition","TransitionEnd")},el={},kd={};f&&(kd=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function Uo(e){if(el[e])return el[e];if(!Lr[e])return e;var t=Lr[e],o;for(o in t)if(t.hasOwnProperty(o)&&o in kd)return el[e]=t[o];return e}var xd=Uo("animationend"),Td=Uo("animationiteration"),_d=Uo("animationstart"),Sd=Uo("transitionend"),Id=new Map,Ad="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nn(e,t){Id.set(e,t),c(t,[e])}for(var tl=0;tl<Ad.length;tl++){var nl=Ad[tl],sy=nl.toLowerCase(),ly=nl[0].toUpperCase()+nl.slice(1);Nn(sy,"on"+ly)}Nn(xd,"onAnimationEnd"),Nn(Td,"onAnimationIteration"),Nn(_d,"onAnimationStart"),Nn("dblclick","onDoubleClick"),Nn("focusin","onFocus"),Nn("focusout","onBlur"),Nn(Sd,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ri));function Cd(e,t,o){var l=e.type||"unknown-event";e.currentTarget=o,sg(l,t,void 0,e),e.currentTarget=null}function Ed(e,t){t=(t&4)!==0;for(var o=0;o<e.length;o++){var l=e[o],u=l.event;l=l.listeners;e:{var h=void 0;if(t)for(var g=l.length-1;0<=g;g--){var w=l[g],k=w.instance,R=w.currentTarget;if(w=w.listener,k!==h&&u.isPropagationStopped())break e;Cd(u,w,R),h=k}else for(g=0;g<l.length;g++){if(w=l[g],k=w.instance,R=w.currentTarget,w=w.listener,k!==h&&u.isPropagationStopped())break e;Cd(u,w,R),h=k}}}if(Eo)throw e=Ps,Eo=!1,Ps=null,e}function We(e,t){var o=t[ul];o===void 0&&(o=t[ul]=new Set);var l=e+"__bubble";o.has(l)||(jd(t,e,2,!1),o.add(l))}function rl(e,t,o){var l=0;t&&(l|=4),jd(o,e,l,t)}var Vo="_reactListening"+Math.random().toString(36).slice(2);function Pi(e){if(!e[Vo]){e[Vo]=!0,a.forEach(function(o){o!=="selectionchange"&&(cy.has(o)||rl(o,!1,e),rl(o,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vo]||(t[Vo]=!0,rl("selectionchange",!1,t))}}function jd(e,t,o,l){switch(Xu(t)){case 1:var u=Tg;break;case 4:u=_g;break;default:u=Bs}o=u.bind(null,t,o,e),u=void 0,!Rs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(t,o,{capture:!0,passive:u}):e.addEventListener(t,o,!0):u!==void 0?e.addEventListener(t,o,{passive:u}):e.addEventListener(t,o,!1)}function il(e,t,o,l,u){var h=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var g=l.tag;if(g===3||g===4){var w=l.stateNode.containerInfo;if(w===u||w.nodeType===8&&w.parentNode===u)break;if(g===4)for(g=l.return;g!==null;){var k=g.tag;if((k===3||k===4)&&(k=g.stateNode.containerInfo,k===u||k.nodeType===8&&k.parentNode===u))return;g=g.return}for(;w!==null;){if(g=ir(w),g===null)return;if(k=g.tag,k===5||k===6){l=h=g;continue e}w=w.parentNode}}l=l.return}Lu(function(){var R=h,M=Es(o),F=[];e:{var L=Id.get(e);if(L!==void 0){var Q=qs,ee=e;switch(e){case"keypress":if(Bo(o)===0)break e;case"keydown":case"keyup":Q=Fg;break;case"focusin":ee="focus",Q=Vs;break;case"focusout":ee="blur",Q=Vs;break;case"beforeblur":case"afterblur":Q=Vs;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=nd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=Ag;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=$g;break;case xd:case Td:case _d:Q=jg;break;case Sd:Q=Hg;break;case"scroll":Q=Sg;break;case"wheel":Q=Vg;break;case"copy":case"cut":case"paste":Q=Rg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=id}var te=(t&4)!==0,Ue=!te&&e==="scroll",C=te?L!==null?L+"Capture":null:L;te=[];for(var T=R,j;T!==null;){j=T;var q=j.stateNode;if(j.tag===5&&q!==null&&(j=q,C!==null&&(q=mi(T,C),q!=null&&te.push(zi(T,q,j)))),Ue)break;T=T.return}0<te.length&&(L=new Q(L,ee,null,o,M),F.push({event:L,listeners:te}))}}if((t&7)===0){e:{if(L=e==="mouseover"||e==="pointerover",Q=e==="mouseout"||e==="pointerout",L&&o!==Cs&&(ee=o.relatedTarget||o.fromElement)&&(ir(ee)||ee[un]))break e;if((Q||L)&&(L=M.window===M?M:(L=M.ownerDocument)?L.defaultView||L.parentWindow:window,Q?(ee=o.relatedTarget||o.toElement,Q=R,ee=ee?ir(ee):null,ee!==null&&(Ue=rr(ee),ee!==Ue||ee.tag!==5&&ee.tag!==6)&&(ee=null)):(Q=null,ee=R),Q!==ee)){if(te=nd,q="onMouseLeave",C="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(te=id,q="onPointerLeave",C="onPointerEnter",T="pointer"),Ue=Q==null?L:Or(Q),j=ee==null?L:Or(ee),L=new te(q,T+"leave",Q,o,M),L.target=Ue,L.relatedTarget=j,q=null,ir(M)===R&&(te=new te(C,T+"enter",ee,o,M),te.target=j,te.relatedTarget=Ue,q=te),Ue=q,Q&&ee)t:{for(te=Q,C=ee,T=0,j=te;j;j=Wr(j))T++;for(j=0,q=C;q;q=Wr(q))j++;for(;0<T-j;)te=Wr(te),T--;for(;0<j-T;)C=Wr(C),j--;for(;T--;){if(te===C||C!==null&&te===C.alternate)break t;te=Wr(te),C=Wr(C)}te=null}else te=null;Q!==null&&Nd(F,L,Q,te,!1),ee!==null&&Ue!==null&&Nd(F,Ue,ee,te,!0)}}e:{if(L=R?Or(R):window,Q=L.nodeName&&L.nodeName.toLowerCase(),Q==="select"||Q==="input"&&L.type==="file")var ne=Xg;else if(ud(L))if(hd)ne=ry;else{ne=ty;var oe=ey}else(Q=L.nodeName)&&Q.toLowerCase()==="input"&&(L.type==="checkbox"||L.type==="radio")&&(ne=ny);if(ne&&(ne=ne(e,R))){dd(F,ne,o,M);break e}oe&&oe(e,L,R),e==="focusout"&&(oe=L._wrapperState)&&oe.controlled&&L.type==="number"&&Ts(L,"number",L.value)}switch(oe=R?Or(R):window,e){case"focusin":(ud(oe)||oe.contentEditable==="true")&&(zr=oe,Js=R,Ni=null);break;case"focusout":Ni=Js=zr=null;break;case"mousedown":Xs=!0;break;case"contextmenu":case"mouseup":case"dragend":Xs=!1,bd(F,o,M);break;case"selectionchange":if(ay)break;case"keydown":case"keyup":bd(F,o,M)}var ae;if(Ys)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else Pr?ld(e,o)&&(de="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(de="onCompositionStart");de&&(od&&o.locale!=="ko"&&(Pr||de!=="onCompositionStart"?de==="onCompositionEnd"&&Pr&&(ae=ed()):(jn=M,$s="value"in jn?jn.value:jn.textContent,Pr=!0)),oe=Go(R,de),0<oe.length&&(de=new rd(de,e,null,o,M),F.push({event:de,listeners:oe}),ae?de.data=ae:(ae=cd(o),ae!==null&&(de.data=ae)))),(ae=Yg?Zg(e,o):Kg(e,o))&&(R=Go(R,"onBeforeInput"),0<R.length&&(M=new rd("onBeforeInput","beforeinput",null,o,M),F.push({event:M,listeners:R}),M.data=ae))}Ed(F,t)})}function zi(e,t,o){return{instance:e,listener:t,currentTarget:o}}function Go(e,t){for(var o=t+"Capture",l=[];e!==null;){var u=e,h=u.stateNode;u.tag===5&&h!==null&&(u=h,h=mi(e,o),h!=null&&l.unshift(zi(e,h,u)),h=mi(e,t),h!=null&&l.push(zi(e,h,u))),e=e.return}return l}function Wr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Nd(e,t,o,l,u){for(var h=t._reactName,g=[];o!==null&&o!==l;){var w=o,k=w.alternate,R=w.stateNode;if(k!==null&&k===l)break;w.tag===5&&R!==null&&(w=R,u?(k=mi(o,h),k!=null&&g.unshift(zi(o,k,w))):u||(k=mi(o,h),k!=null&&g.push(zi(o,k,w)))),o=o.return}g.length!==0&&e.push({event:t,listeners:g})}var uy=/\r\n?/g,dy=/\u0000|\uFFFD/g;function Rd(e){return(typeof e=="string"?e:""+e).replace(uy,`
`).replace(dy,"")}function Yo(e,t,o){if(t=Rd(t),Rd(e)!==t&&o)throw Error(i(425))}function Zo(){}var ol=null,al=null;function sl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ll=typeof setTimeout=="function"?setTimeout:void 0,hy=typeof clearTimeout=="function"?clearTimeout:void 0,Pd=typeof Promise=="function"?Promise:void 0,fy=typeof queueMicrotask=="function"?queueMicrotask:typeof Pd<"u"?function(e){return Pd.resolve(null).then(e).catch(py)}:ll;function py(e){setTimeout(function(){throw e})}function cl(e,t){var o=t,l=0;do{var u=o.nextSibling;if(e.removeChild(o),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(l===0){e.removeChild(u),_i(t);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=u}while(o);_i(t)}function Rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function zd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(t===0)return e;t--}else o==="/$"&&t++}e=e.previousSibling}return null}var Mr=Math.random().toString(36).slice(2),Kt="__reactFiber$"+Mr,Li="__reactProps$"+Mr,un="__reactContainer$"+Mr,ul="__reactEvents$"+Mr,my="__reactListeners$"+Mr,gy="__reactHandles$"+Mr;function ir(e){var t=e[Kt];if(t)return t;for(var o=e.parentNode;o;){if(t=o[un]||o[Kt]){if(o=t.alternate,t.child!==null||o!==null&&o.child!==null)for(e=zd(e);e!==null;){if(o=e[Kt])return o;e=zd(e)}return t}e=o,o=e.parentNode}return null}function Wi(e){return e=e[Kt]||e[un],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Or(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function Ko(e){return e[Li]||null}var dl=[],Fr=-1;function Pn(e){return{current:e}}function Me(e){0>Fr||(e.current=dl[Fr],dl[Fr]=null,Fr--)}function Le(e,t){Fr++,dl[Fr]=e.current,e.current=t}var zn={},nt=Pn(zn),ht=Pn(!1),or=zn;function Br(e,t){var o=e.type.contextTypes;if(!o)return zn;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===t)return l.__reactInternalMemoizedMaskedChildContext;var u={},h;for(h in o)u[h]=t[h];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=u),u}function ft(e){return e=e.childContextTypes,e!=null}function Qo(){Me(ht),Me(nt)}function Ld(e,t,o){if(nt.current!==zn)throw Error(i(168));Le(nt,t),Le(ht,o)}function Wd(e,t,o){var l=e.stateNode;if(t=t.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var u in l)if(!(u in t))throw Error(i(108,Ee(e)||"Unknown",u));return H({},o,l)}function Jo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zn,or=nt.current,Le(nt,e),Le(ht,ht.current),!0}function Md(e,t,o){var l=e.stateNode;if(!l)throw Error(i(169));o?(e=Wd(e,t,or),l.__reactInternalMemoizedMergedChildContext=e,Me(ht),Me(nt),Le(nt,e)):Me(ht),Le(ht,o)}var dn=null,Xo=!1,hl=!1;function Od(e){dn===null?dn=[e]:dn.push(e)}function yy(e){Xo=!0,Od(e)}function Ln(){if(!hl&&dn!==null){hl=!0;var e=0,t=Pe;try{var o=dn;for(Pe=1;e<o.length;e++){var l=o[e];do l=l(!0);while(l!==null)}dn=null,Xo=!1}catch(u){throw dn!==null&&(dn=dn.slice(e+1)),Bu(zs,Ln),u}finally{Pe=t,hl=!1}}return null}var Dr=[],$r=0,ea=null,ta=0,It=[],At=0,ar=null,hn=1,fn="";function sr(e,t){Dr[$r++]=ta,Dr[$r++]=ea,ea=e,ta=t}function Fd(e,t,o){It[At++]=hn,It[At++]=fn,It[At++]=ar,ar=e;var l=hn;e=fn;var u=32-Pt(l)-1;l&=~(1<<u),o+=1;var h=32-Pt(t)+u;if(30<h){var g=u-u%5;h=(l&(1<<g)-1).toString(32),l>>=g,u-=g,hn=1<<32-Pt(t)+u|o<<u|l,fn=h+e}else hn=1<<h|o<<u|l,fn=e}function fl(e){e.return!==null&&(sr(e,1),Fd(e,1,0))}function pl(e){for(;e===ea;)ea=Dr[--$r],Dr[$r]=null,ta=Dr[--$r],Dr[$r]=null;for(;e===ar;)ar=It[--At],It[At]=null,fn=It[--At],It[At]=null,hn=It[--At],It[At]=null}var bt=null,kt=null,Fe=!1,Lt=null;function Bd(e,t){var o=Nt(5,null,null,0);o.elementType="DELETED",o.stateNode=t,o.return=e,t=e.deletions,t===null?(e.deletions=[o],e.flags|=16):t.push(o)}function Dd(e,t){switch(e.tag){case 5:var o=e.type;return t=t.nodeType!==1||o.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,bt=e,kt=Rn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,bt=e,kt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(o=ar!==null?{id:hn,overflow:fn}:null,e.memoizedState={dehydrated:t,treeContext:o,retryLane:1073741824},o=Nt(18,null,null,0),o.stateNode=t,o.return=e,e.child=o,bt=e,kt=null,!0):!1;default:return!1}}function ml(e){return(e.mode&1)!==0&&(e.flags&128)===0}function gl(e){if(Fe){var t=kt;if(t){var o=t;if(!Dd(e,t)){if(ml(e))throw Error(i(418));t=Rn(o.nextSibling);var l=bt;t&&Dd(e,t)?Bd(l,o):(e.flags=e.flags&-4097|2,Fe=!1,bt=e)}}else{if(ml(e))throw Error(i(418));e.flags=e.flags&-4097|2,Fe=!1,bt=e}}}function $d(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;bt=e}function na(e){if(e!==bt)return!1;if(!Fe)return $d(e),Fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!sl(e.type,e.memoizedProps)),t&&(t=kt)){if(ml(e))throw qd(),Error(i(418));for(;t;)Bd(e,t),t=Rn(t.nextSibling)}if($d(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"){if(t===0){kt=Rn(e.nextSibling);break e}t--}else o!=="$"&&o!=="$!"&&o!=="$?"||t++}e=e.nextSibling}kt=null}}else kt=bt?Rn(e.stateNode.nextSibling):null;return!0}function qd(){for(var e=kt;e;)e=Rn(e.nextSibling)}function qr(){kt=bt=null,Fe=!1}function yl(e){Lt===null?Lt=[e]:Lt.push(e)}var vy=$.ReactCurrentBatchConfig;function Mi(e,t,o){if(e=o.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(i(309));var l=o.stateNode}if(!l)throw Error(i(147,e));var u=l,h=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===h?t.ref:(t=function(g){var w=u.refs;g===null?delete w[h]:w[h]=g},t._stringRef=h,t)}if(typeof e!="string")throw Error(i(284));if(!o._owner)throw Error(i(290,e))}return e}function ra(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Hd(e){var t=e._init;return t(e._payload)}function Ud(e){function t(C,T){if(e){var j=C.deletions;j===null?(C.deletions=[T],C.flags|=16):j.push(T)}}function o(C,T){if(!e)return null;for(;T!==null;)t(C,T),T=T.sibling;return null}function l(C,T){for(C=new Map;T!==null;)T.key!==null?C.set(T.key,T):C.set(T.index,T),T=T.sibling;return C}function u(C,T){return C=qn(C,T),C.index=0,C.sibling=null,C}function h(C,T,j){return C.index=j,e?(j=C.alternate,j!==null?(j=j.index,j<T?(C.flags|=2,T):j):(C.flags|=2,T)):(C.flags|=1048576,T)}function g(C){return e&&C.alternate===null&&(C.flags|=2),C}function w(C,T,j,q){return T===null||T.tag!==6?(T=lc(j,C.mode,q),T.return=C,T):(T=u(T,j),T.return=C,T)}function k(C,T,j,q){var ne=j.type;return ne===K?M(C,T,j.props.children,q,j.key):T!==null&&(T.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===ce&&Hd(ne)===T.type)?(q=u(T,j.props),q.ref=Mi(C,T,j),q.return=C,q):(q=Aa(j.type,j.key,j.props,null,C.mode,q),q.ref=Mi(C,T,j),q.return=C,q)}function R(C,T,j,q){return T===null||T.tag!==4||T.stateNode.containerInfo!==j.containerInfo||T.stateNode.implementation!==j.implementation?(T=cc(j,C.mode,q),T.return=C,T):(T=u(T,j.children||[]),T.return=C,T)}function M(C,T,j,q,ne){return T===null||T.tag!==7?(T=mr(j,C.mode,q,ne),T.return=C,T):(T=u(T,j),T.return=C,T)}function F(C,T,j){if(typeof T=="string"&&T!==""||typeof T=="number")return T=lc(""+T,C.mode,j),T.return=C,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case U:return j=Aa(T.type,T.key,T.props,null,C.mode,j),j.ref=Mi(C,null,T),j.return=C,j;case Z:return T=cc(T,C.mode,j),T.return=C,T;case ce:var q=T._init;return F(C,q(T._payload),j)}if(hi(T)||V(T))return T=mr(T,C.mode,j,null),T.return=C,T;ra(C,T)}return null}function L(C,T,j,q){var ne=T!==null?T.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return ne!==null?null:w(C,T,""+j,q);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case U:return j.key===ne?k(C,T,j,q):null;case Z:return j.key===ne?R(C,T,j,q):null;case ce:return ne=j._init,L(C,T,ne(j._payload),q)}if(hi(j)||V(j))return ne!==null?null:M(C,T,j,q,null);ra(C,j)}return null}function Q(C,T,j,q,ne){if(typeof q=="string"&&q!==""||typeof q=="number")return C=C.get(j)||null,w(T,C,""+q,ne);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case U:return C=C.get(q.key===null?j:q.key)||null,k(T,C,q,ne);case Z:return C=C.get(q.key===null?j:q.key)||null,R(T,C,q,ne);case ce:var oe=q._init;return Q(C,T,j,oe(q._payload),ne)}if(hi(q)||V(q))return C=C.get(j)||null,M(T,C,q,ne,null);ra(T,q)}return null}function ee(C,T,j,q){for(var ne=null,oe=null,ae=T,de=T=0,Xe=null;ae!==null&&de<j.length;de++){ae.index>de?(Xe=ae,ae=null):Xe=ae.sibling;var Ne=L(C,ae,j[de],q);if(Ne===null){ae===null&&(ae=Xe);break}e&&ae&&Ne.alternate===null&&t(C,ae),T=h(Ne,T,de),oe===null?ne=Ne:oe.sibling=Ne,oe=Ne,ae=Xe}if(de===j.length)return o(C,ae),Fe&&sr(C,de),ne;if(ae===null){for(;de<j.length;de++)ae=F(C,j[de],q),ae!==null&&(T=h(ae,T,de),oe===null?ne=ae:oe.sibling=ae,oe=ae);return Fe&&sr(C,de),ne}for(ae=l(C,ae);de<j.length;de++)Xe=Q(ae,C,de,j[de],q),Xe!==null&&(e&&Xe.alternate!==null&&ae.delete(Xe.key===null?de:Xe.key),T=h(Xe,T,de),oe===null?ne=Xe:oe.sibling=Xe,oe=Xe);return e&&ae.forEach(function(Hn){return t(C,Hn)}),Fe&&sr(C,de),ne}function te(C,T,j,q){var ne=V(j);if(typeof ne!="function")throw Error(i(150));if(j=ne.call(j),j==null)throw Error(i(151));for(var oe=ne=null,ae=T,de=T=0,Xe=null,Ne=j.next();ae!==null&&!Ne.done;de++,Ne=j.next()){ae.index>de?(Xe=ae,ae=null):Xe=ae.sibling;var Hn=L(C,ae,Ne.value,q);if(Hn===null){ae===null&&(ae=Xe);break}e&&ae&&Hn.alternate===null&&t(C,ae),T=h(Hn,T,de),oe===null?ne=Hn:oe.sibling=Hn,oe=Hn,ae=Xe}if(Ne.done)return o(C,ae),Fe&&sr(C,de),ne;if(ae===null){for(;!Ne.done;de++,Ne=j.next())Ne=F(C,Ne.value,q),Ne!==null&&(T=h(Ne,T,de),oe===null?ne=Ne:oe.sibling=Ne,oe=Ne);return Fe&&sr(C,de),ne}for(ae=l(C,ae);!Ne.done;de++,Ne=j.next())Ne=Q(ae,C,de,Ne.value,q),Ne!==null&&(e&&Ne.alternate!==null&&ae.delete(Ne.key===null?de:Ne.key),T=h(Ne,T,de),oe===null?ne=Ne:oe.sibling=Ne,oe=Ne);return e&&ae.forEach(function(Qy){return t(C,Qy)}),Fe&&sr(C,de),ne}function Ue(C,T,j,q){if(typeof j=="object"&&j!==null&&j.type===K&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case U:e:{for(var ne=j.key,oe=T;oe!==null;){if(oe.key===ne){if(ne=j.type,ne===K){if(oe.tag===7){o(C,oe.sibling),T=u(oe,j.props.children),T.return=C,C=T;break e}}else if(oe.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===ce&&Hd(ne)===oe.type){o(C,oe.sibling),T=u(oe,j.props),T.ref=Mi(C,oe,j),T.return=C,C=T;break e}o(C,oe);break}else t(C,oe);oe=oe.sibling}j.type===K?(T=mr(j.props.children,C.mode,q,j.key),T.return=C,C=T):(q=Aa(j.type,j.key,j.props,null,C.mode,q),q.ref=Mi(C,T,j),q.return=C,C=q)}return g(C);case Z:e:{for(oe=j.key;T!==null;){if(T.key===oe)if(T.tag===4&&T.stateNode.containerInfo===j.containerInfo&&T.stateNode.implementation===j.implementation){o(C,T.sibling),T=u(T,j.children||[]),T.return=C,C=T;break e}else{o(C,T);break}else t(C,T);T=T.sibling}T=cc(j,C.mode,q),T.return=C,C=T}return g(C);case ce:return oe=j._init,Ue(C,T,oe(j._payload),q)}if(hi(j))return ee(C,T,j,q);if(V(j))return te(C,T,j,q);ra(C,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,T!==null&&T.tag===6?(o(C,T.sibling),T=u(T,j),T.return=C,C=T):(o(C,T),T=lc(j,C.mode,q),T.return=C,C=T),g(C)):o(C,T)}return Ue}var Hr=Ud(!0),Vd=Ud(!1),ia=Pn(null),oa=null,Ur=null,vl=null;function wl(){vl=Ur=oa=null}function bl(e){var t=ia.current;Me(ia),e._currentValue=t}function kl(e,t,o){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===o)break;e=e.return}}function Vr(e,t){oa=e,vl=Ur=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(pt=!0),e.firstContext=null)}function Ct(e){var t=e._currentValue;if(vl!==e)if(e={context:e,memoizedValue:t,next:null},Ur===null){if(oa===null)throw Error(i(308));Ur=e,oa.dependencies={lanes:0,firstContext:e}}else Ur=Ur.next=e;return t}var lr=null;function xl(e){lr===null?lr=[e]:lr.push(e)}function Gd(e,t,o,l){var u=t.interleaved;return u===null?(o.next=o,xl(t)):(o.next=u.next,u.next=o),t.interleaved=o,pn(e,l)}function pn(e,t){e.lanes|=t;var o=e.alternate;for(o!==null&&(o.lanes|=t),o=e,e=e.return;e!==null;)e.childLanes|=t,o=e.alternate,o!==null&&(o.childLanes|=t),o=e,e=e.return;return o.tag===3?o.stateNode:null}var Wn=!1;function Tl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mn(e,t,o){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ce&2)!==0){var u=l.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),l.pending=t,pn(e,o)}return u=l.interleaved,u===null?(t.next=t,xl(l)):(t.next=u.next,u.next=t),l.interleaved=t,pn(e,o)}function aa(e,t,o){if(t=t.updateQueue,t!==null&&(t=t.shared,(o&4194240)!==0)){var l=t.lanes;l&=e.pendingLanes,o|=l,t.lanes=o,Ms(e,o)}}function Zd(e,t){var o=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var u=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var g={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?u=h=g:h=h.next=g,o=o.next}while(o!==null);h===null?u=h=t:h=h.next=t}else u=h=t;o={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:l.shared,effects:l.effects},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=t:e.next=t,o.lastBaseUpdate=t}function sa(e,t,o,l){var u=e.updateQueue;Wn=!1;var h=u.firstBaseUpdate,g=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var k=w,R=k.next;k.next=null,g===null?h=R:g.next=R,g=k;var M=e.alternate;M!==null&&(M=M.updateQueue,w=M.lastBaseUpdate,w!==g&&(w===null?M.firstBaseUpdate=R:w.next=R,M.lastBaseUpdate=k))}if(h!==null){var F=u.baseState;g=0,M=R=k=null,w=h;do{var L=w.lane,Q=w.eventTime;if((l&L)===L){M!==null&&(M=M.next={eventTime:Q,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var ee=e,te=w;switch(L=t,Q=o,te.tag){case 1:if(ee=te.payload,typeof ee=="function"){F=ee.call(Q,F,L);break e}F=ee;break e;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=te.payload,L=typeof ee=="function"?ee.call(Q,F,L):ee,L==null)break e;F=H({},F,L);break e;case 2:Wn=!0}}w.callback!==null&&w.lane!==0&&(e.flags|=64,L=u.effects,L===null?u.effects=[w]:L.push(w))}else Q={eventTime:Q,lane:L,tag:w.tag,payload:w.payload,callback:w.callback,next:null},M===null?(R=M=Q,k=F):M=M.next=Q,g|=L;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;L=w,w=L.next,L.next=null,u.lastBaseUpdate=L,u.shared.pending=null}}while(!0);if(M===null&&(k=F),u.baseState=k,u.firstBaseUpdate=R,u.lastBaseUpdate=M,t=u.shared.interleaved,t!==null){u=t;do g|=u.lane,u=u.next;while(u!==t)}else h===null&&(u.shared.lanes=0);dr|=g,e.lanes=g,e.memoizedState=F}}function Kd(e,t,o){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var l=e[t],u=l.callback;if(u!==null){if(l.callback=null,l=o,typeof u!="function")throw Error(i(191,u));u.call(l)}}}var Oi={},Qt=Pn(Oi),Fi=Pn(Oi),Bi=Pn(Oi);function cr(e){if(e===Oi)throw Error(i(174));return e}function _l(e,t){switch(Le(Bi,t),Le(Fi,e),Le(Qt,Oi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ss(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ss(t,e)}Me(Qt),Le(Qt,t)}function Gr(){Me(Qt),Me(Fi),Me(Bi)}function Qd(e){cr(Bi.current);var t=cr(Qt.current),o=Ss(t,e.type);t!==o&&(Le(Fi,e),Le(Qt,o))}function Sl(e){Fi.current===e&&(Me(Qt),Me(Fi))}var Be=Pn(0);function la(e){for(var t=e;t!==null;){if(t.tag===13){var o=t.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Il=[];function Al(){for(var e=0;e<Il.length;e++)Il[e]._workInProgressVersionPrimary=null;Il.length=0}var ca=$.ReactCurrentDispatcher,Cl=$.ReactCurrentBatchConfig,ur=0,De=null,Ge=null,Qe=null,ua=!1,Di=!1,$i=0,wy=0;function rt(){throw Error(i(321))}function El(e,t){if(t===null)return!1;for(var o=0;o<t.length&&o<e.length;o++)if(!zt(e[o],t[o]))return!1;return!0}function jl(e,t,o,l,u,h){if(ur=h,De=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ca.current=e===null||e.memoizedState===null?Ty:_y,e=o(l,u),Di){h=0;do{if(Di=!1,$i=0,25<=h)throw Error(i(301));h+=1,Qe=Ge=null,t.updateQueue=null,ca.current=Sy,e=o(l,u)}while(Di)}if(ca.current=fa,t=Ge!==null&&Ge.next!==null,ur=0,Qe=Ge=De=null,ua=!1,t)throw Error(i(300));return e}function Nl(){var e=$i!==0;return $i=0,e}function Jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?De.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Et(){if(Ge===null){var e=De.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var t=Qe===null?De.memoizedState:Qe.next;if(t!==null)Qe=t,Ge=e;else{if(e===null)throw Error(i(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Qe===null?De.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function qi(e,t){return typeof t=="function"?t(e):t}function Rl(e){var t=Et(),o=t.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var l=Ge,u=l.baseQueue,h=o.pending;if(h!==null){if(u!==null){var g=u.next;u.next=h.next,h.next=g}l.baseQueue=u=h,o.pending=null}if(u!==null){h=u.next,l=l.baseState;var w=g=null,k=null,R=h;do{var M=R.lane;if((ur&M)===M)k!==null&&(k=k.next={lane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),l=R.hasEagerState?R.eagerState:e(l,R.action);else{var F={lane:M,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null};k===null?(w=k=F,g=l):k=k.next=F,De.lanes|=M,dr|=M}R=R.next}while(R!==null&&R!==h);k===null?g=l:k.next=w,zt(l,t.memoizedState)||(pt=!0),t.memoizedState=l,t.baseState=g,t.baseQueue=k,o.lastRenderedState=l}if(e=o.interleaved,e!==null){u=e;do h=u.lane,De.lanes|=h,dr|=h,u=u.next;while(u!==e)}else u===null&&(o.lanes=0);return[t.memoizedState,o.dispatch]}function Pl(e){var t=Et(),o=t.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var l=o.dispatch,u=o.pending,h=t.memoizedState;if(u!==null){o.pending=null;var g=u=u.next;do h=e(h,g.action),g=g.next;while(g!==u);zt(h,t.memoizedState)||(pt=!0),t.memoizedState=h,t.baseQueue===null&&(t.baseState=h),o.lastRenderedState=h}return[h,l]}function Jd(){}function Xd(e,t){var o=De,l=Et(),u=t(),h=!zt(l.memoizedState,u);if(h&&(l.memoizedState=u,pt=!0),l=l.queue,zl(nh.bind(null,o,l,e),[e]),l.getSnapshot!==t||h||Qe!==null&&Qe.memoizedState.tag&1){if(o.flags|=2048,Hi(9,th.bind(null,o,l,u,t),void 0,null),Je===null)throw Error(i(349));(ur&30)!==0||eh(o,t,u)}return u}function eh(e,t,o){e.flags|=16384,e={getSnapshot:t,value:o},t=De.updateQueue,t===null?(t={lastEffect:null,stores:null},De.updateQueue=t,t.stores=[e]):(o=t.stores,o===null?t.stores=[e]:o.push(e))}function th(e,t,o,l){t.value=o,t.getSnapshot=l,rh(t)&&ih(e)}function nh(e,t,o){return o(function(){rh(t)&&ih(e)})}function rh(e){var t=e.getSnapshot;e=e.value;try{var o=t();return!zt(e,o)}catch{return!0}}function ih(e){var t=pn(e,1);t!==null&&Ft(t,e,1,-1)}function oh(e){var t=Jt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:e},t.queue=e,e=e.dispatch=xy.bind(null,De,e),[t.memoizedState,e]}function Hi(e,t,o,l){return e={tag:e,create:t,destroy:o,deps:l,next:null},t=De.updateQueue,t===null?(t={lastEffect:null,stores:null},De.updateQueue=t,t.lastEffect=e.next=e):(o=t.lastEffect,o===null?t.lastEffect=e.next=e:(l=o.next,o.next=e,e.next=l,t.lastEffect=e)),e}function ah(){return Et().memoizedState}function da(e,t,o,l){var u=Jt();De.flags|=e,u.memoizedState=Hi(1|t,o,void 0,l===void 0?null:l)}function ha(e,t,o,l){var u=Et();l=l===void 0?null:l;var h=void 0;if(Ge!==null){var g=Ge.memoizedState;if(h=g.destroy,l!==null&&El(l,g.deps)){u.memoizedState=Hi(t,o,h,l);return}}De.flags|=e,u.memoizedState=Hi(1|t,o,h,l)}function sh(e,t){return da(8390656,8,e,t)}function zl(e,t){return ha(2048,8,e,t)}function lh(e,t){return ha(4,2,e,t)}function ch(e,t){return ha(4,4,e,t)}function uh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function dh(e,t,o){return o=o!=null?o.concat([e]):null,ha(4,4,uh.bind(null,t,e),o)}function Ll(){}function hh(e,t){var o=Et();t=t===void 0?null:t;var l=o.memoizedState;return l!==null&&t!==null&&El(t,l[1])?l[0]:(o.memoizedState=[e,t],e)}function fh(e,t){var o=Et();t=t===void 0?null:t;var l=o.memoizedState;return l!==null&&t!==null&&El(t,l[1])?l[0]:(e=e(),o.memoizedState=[e,t],e)}function ph(e,t,o){return(ur&21)===0?(e.baseState&&(e.baseState=!1,pt=!0),e.memoizedState=o):(zt(o,t)||(o=Hu(),De.lanes|=o,dr|=o,e.baseState=!0),t)}function by(e,t){var o=Pe;Pe=o!==0&&4>o?o:4,e(!0);var l=Cl.transition;Cl.transition={};try{e(!1),t()}finally{Pe=o,Cl.transition=l}}function mh(){return Et().memoizedState}function ky(e,t,o){var l=Dn(e);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},gh(e))yh(t,o);else if(o=Gd(e,t,o,l),o!==null){var u=ct();Ft(o,e,l,u),vh(o,t,l)}}function xy(e,t,o){var l=Dn(e),u={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(gh(e))yh(t,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=t.lastRenderedReducer,h!==null))try{var g=t.lastRenderedState,w=h(g,o);if(u.hasEagerState=!0,u.eagerState=w,zt(w,g)){var k=t.interleaved;k===null?(u.next=u,xl(t)):(u.next=k.next,k.next=u),t.interleaved=u;return}}catch{}o=Gd(e,t,u,l),o!==null&&(u=ct(),Ft(o,e,l,u),vh(o,t,l))}}function gh(e){var t=e.alternate;return e===De||t!==null&&t===De}function yh(e,t){Di=ua=!0;var o=e.pending;o===null?t.next=t:(t.next=o.next,o.next=t),e.pending=t}function vh(e,t,o){if((o&4194240)!==0){var l=t.lanes;l&=e.pendingLanes,o|=l,t.lanes=o,Ms(e,o)}}var fa={readContext:Ct,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},Ty={readContext:Ct,useCallback:function(e,t){return Jt().memoizedState=[e,t===void 0?null:t],e},useContext:Ct,useEffect:sh,useImperativeHandle:function(e,t,o){return o=o!=null?o.concat([e]):null,da(4194308,4,uh.bind(null,t,e),o)},useLayoutEffect:function(e,t){return da(4194308,4,e,t)},useInsertionEffect:function(e,t){return da(4,2,e,t)},useMemo:function(e,t){var o=Jt();return t=t===void 0?null:t,e=e(),o.memoizedState=[e,t],e},useReducer:function(e,t,o){var l=Jt();return t=o!==void 0?o(t):t,l.memoizedState=l.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},l.queue=e,e=e.dispatch=ky.bind(null,De,e),[l.memoizedState,e]},useRef:function(e){var t=Jt();return e={current:e},t.memoizedState=e},useState:oh,useDebugValue:Ll,useDeferredValue:function(e){return Jt().memoizedState=e},useTransition:function(){var e=oh(!1),t=e[0];return e=by.bind(null,e[1]),Jt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,o){var l=De,u=Jt();if(Fe){if(o===void 0)throw Error(i(407));o=o()}else{if(o=t(),Je===null)throw Error(i(349));(ur&30)!==0||eh(l,t,o)}u.memoizedState=o;var h={value:o,getSnapshot:t};return u.queue=h,sh(nh.bind(null,l,h,e),[e]),l.flags|=2048,Hi(9,th.bind(null,l,h,o,t),void 0,null),o},useId:function(){var e=Jt(),t=Je.identifierPrefix;if(Fe){var o=fn,l=hn;o=(l&~(1<<32-Pt(l)-1)).toString(32)+o,t=":"+t+"R"+o,o=$i++,0<o&&(t+="H"+o.toString(32)),t+=":"}else o=wy++,t=":"+t+"r"+o.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},_y={readContext:Ct,useCallback:hh,useContext:Ct,useEffect:zl,useImperativeHandle:dh,useInsertionEffect:lh,useLayoutEffect:ch,useMemo:fh,useReducer:Rl,useRef:ah,useState:function(){return Rl(qi)},useDebugValue:Ll,useDeferredValue:function(e){var t=Et();return ph(t,Ge.memoizedState,e)},useTransition:function(){var e=Rl(qi)[0],t=Et().memoizedState;return[e,t]},useMutableSource:Jd,useSyncExternalStore:Xd,useId:mh,unstable_isNewReconciler:!1},Sy={readContext:Ct,useCallback:hh,useContext:Ct,useEffect:zl,useImperativeHandle:dh,useInsertionEffect:lh,useLayoutEffect:ch,useMemo:fh,useReducer:Pl,useRef:ah,useState:function(){return Pl(qi)},useDebugValue:Ll,useDeferredValue:function(e){var t=Et();return Ge===null?t.memoizedState=e:ph(t,Ge.memoizedState,e)},useTransition:function(){var e=Pl(qi)[0],t=Et().memoizedState;return[e,t]},useMutableSource:Jd,useSyncExternalStore:Xd,useId:mh,unstable_isNewReconciler:!1};function Wt(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var o in e)t[o]===void 0&&(t[o]=e[o]);return t}return t}function Wl(e,t,o,l){t=e.memoizedState,o=o(l,t),o=o==null?t:H({},t,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var pa={isMounted:function(e){return(e=e._reactInternals)?rr(e)===e:!1},enqueueSetState:function(e,t,o){e=e._reactInternals;var l=ct(),u=Dn(e),h=mn(l,u);h.payload=t,o!=null&&(h.callback=o),t=Mn(e,h,u),t!==null&&(Ft(t,e,u,l),aa(t,e,u))},enqueueReplaceState:function(e,t,o){e=e._reactInternals;var l=ct(),u=Dn(e),h=mn(l,u);h.tag=1,h.payload=t,o!=null&&(h.callback=o),t=Mn(e,h,u),t!==null&&(Ft(t,e,u,l),aa(t,e,u))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var o=ct(),l=Dn(e),u=mn(o,l);u.tag=2,t!=null&&(u.callback=t),t=Mn(e,u,l),t!==null&&(Ft(t,e,l,o),aa(t,e,l))}};function wh(e,t,o,l,u,h,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,h,g):t.prototype&&t.prototype.isPureReactComponent?!ji(o,l)||!ji(u,h):!0}function bh(e,t,o){var l=!1,u=zn,h=t.contextType;return typeof h=="object"&&h!==null?h=Ct(h):(u=ft(t)?or:nt.current,l=t.contextTypes,h=(l=l!=null)?Br(e,u):zn),t=new t(o,h),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=pa,e.stateNode=t,t._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=u,e.__reactInternalMemoizedMaskedChildContext=h),t}function kh(e,t,o,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(o,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(o,l),t.state!==e&&pa.enqueueReplaceState(t,t.state,null)}function Ml(e,t,o,l){var u=e.stateNode;u.props=o,u.state=e.memoizedState,u.refs={},Tl(e);var h=t.contextType;typeof h=="object"&&h!==null?u.context=Ct(h):(h=ft(t)?or:nt.current,u.context=Br(e,h)),u.state=e.memoizedState,h=t.getDerivedStateFromProps,typeof h=="function"&&(Wl(e,t,h,o),u.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(t=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),t!==u.state&&pa.enqueueReplaceState(u,u.state,null),sa(e,o,u,l),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308)}function Yr(e,t){try{var o="",l=t;do o+=_e(l),l=l.return;while(l);var u=o}catch(h){u=`
Error generating stack: `+h.message+`
`+h.stack}return{value:e,source:t,stack:u,digest:null}}function Ol(e,t,o){return{value:e,source:null,stack:o??null,digest:t??null}}function Fl(e,t){try{console.error(t.value)}catch(o){setTimeout(function(){throw o})}}var Iy=typeof WeakMap=="function"?WeakMap:Map;function xh(e,t,o){o=mn(-1,o),o.tag=3,o.payload={element:null};var l=t.value;return o.callback=function(){ka||(ka=!0,ec=l),Fl(e,t)},o}function Th(e,t,o){o=mn(-1,o),o.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var u=t.value;o.payload=function(){return l(u)},o.callback=function(){Fl(e,t)}}var h=e.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Fl(e,t),typeof l!="function"&&(Fn===null?Fn=new Set([this]):Fn.add(this));var g=t.stack;this.componentDidCatch(t.value,{componentStack:g!==null?g:""})}),o}function _h(e,t,o){var l=e.pingCache;if(l===null){l=e.pingCache=new Iy;var u=new Set;l.set(t,u)}else u=l.get(t),u===void 0&&(u=new Set,l.set(t,u));u.has(o)||(u.add(o),e=By.bind(null,e,t,o),t.then(e,e))}function Sh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ih(e,t,o,l,u){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(t=mn(-1,1),t.tag=2,Mn(o,t,1))),o.lanes|=1),e):(e.flags|=65536,e.lanes=u,e)}var Ay=$.ReactCurrentOwner,pt=!1;function lt(e,t,o,l){t.child=e===null?Vd(t,null,o,l):Hr(t,e.child,o,l)}function Ah(e,t,o,l,u){o=o.render;var h=t.ref;return Vr(t,u),l=jl(e,t,o,l,h,u),o=Nl(),e!==null&&!pt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,gn(e,t,u)):(Fe&&o&&fl(t),t.flags|=1,lt(e,t,l,u),t.child)}function Ch(e,t,o,l,u){if(e===null){var h=o.type;return typeof h=="function"&&!sc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(t.tag=15,t.type=h,Eh(e,t,h,l,u)):(e=Aa(o.type,null,l,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}if(h=e.child,(e.lanes&u)===0){var g=h.memoizedProps;if(o=o.compare,o=o!==null?o:ji,o(g,l)&&e.ref===t.ref)return gn(e,t,u)}return t.flags|=1,e=qn(h,l),e.ref=t.ref,e.return=t,t.child=e}function Eh(e,t,o,l,u){if(e!==null){var h=e.memoizedProps;if(ji(h,l)&&e.ref===t.ref)if(pt=!1,t.pendingProps=l=h,(e.lanes&u)!==0)(e.flags&131072)!==0&&(pt=!0);else return t.lanes=e.lanes,gn(e,t,u)}return Bl(e,t,o,l,u)}function jh(e,t,o){var l=t.pendingProps,u=l.children,h=e!==null?e.memoizedState:null;if(l.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Le(Kr,xt),xt|=o;else{if((o&1073741824)===0)return e=h!==null?h.baseLanes|o:o,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Le(Kr,xt),xt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,Le(Kr,xt),xt|=l}else h!==null?(l=h.baseLanes|o,t.memoizedState=null):l=o,Le(Kr,xt),xt|=l;return lt(e,t,u,o),t.child}function Nh(e,t){var o=t.ref;(e===null&&o!==null||e!==null&&e.ref!==o)&&(t.flags|=512,t.flags|=2097152)}function Bl(e,t,o,l,u){var h=ft(o)?or:nt.current;return h=Br(t,h),Vr(t,u),o=jl(e,t,o,l,h,u),l=Nl(),e!==null&&!pt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,gn(e,t,u)):(Fe&&l&&fl(t),t.flags|=1,lt(e,t,o,u),t.child)}function Rh(e,t,o,l,u){if(ft(o)){var h=!0;Jo(t)}else h=!1;if(Vr(t,u),t.stateNode===null)ga(e,t),bh(t,o,l),Ml(t,o,l,u),l=!0;else if(e===null){var g=t.stateNode,w=t.memoizedProps;g.props=w;var k=g.context,R=o.contextType;typeof R=="object"&&R!==null?R=Ct(R):(R=ft(o)?or:nt.current,R=Br(t,R));var M=o.getDerivedStateFromProps,F=typeof M=="function"||typeof g.getSnapshotBeforeUpdate=="function";F||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w!==l||k!==R)&&kh(t,g,l,R),Wn=!1;var L=t.memoizedState;g.state=L,sa(t,l,g,u),k=t.memoizedState,w!==l||L!==k||ht.current||Wn?(typeof M=="function"&&(Wl(t,o,M,l),k=t.memoizedState),(w=Wn||wh(t,o,w,l,L,k,R))?(F||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(t.flags|=4194308)):(typeof g.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=k),g.props=l,g.state=k,g.context=R,l=w):(typeof g.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{g=t.stateNode,Yd(e,t),w=t.memoizedProps,R=t.type===t.elementType?w:Wt(t.type,w),g.props=R,F=t.pendingProps,L=g.context,k=o.contextType,typeof k=="object"&&k!==null?k=Ct(k):(k=ft(o)?or:nt.current,k=Br(t,k));var Q=o.getDerivedStateFromProps;(M=typeof Q=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w!==F||L!==k)&&kh(t,g,l,k),Wn=!1,L=t.memoizedState,g.state=L,sa(t,l,g,u);var ee=t.memoizedState;w!==F||L!==ee||ht.current||Wn?(typeof Q=="function"&&(Wl(t,o,Q,l),ee=t.memoizedState),(R=Wn||wh(t,o,R,l,L,ee,k)||!1)?(M||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(l,ee,k),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(l,ee,k)),typeof g.componentDidUpdate=="function"&&(t.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof g.componentDidUpdate!="function"||w===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=ee),g.props=l,g.state=ee,g.context=k,l=R):(typeof g.componentDidUpdate!="function"||w===e.memoizedProps&&L===e.memoizedState||(t.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&L===e.memoizedState||(t.flags|=1024),l=!1)}return Dl(e,t,o,l,h,u)}function Dl(e,t,o,l,u,h){Nh(e,t);var g=(t.flags&128)!==0;if(!l&&!g)return u&&Md(t,o,!1),gn(e,t,h);l=t.stateNode,Ay.current=t;var w=g&&typeof o.getDerivedStateFromError!="function"?null:l.render();return t.flags|=1,e!==null&&g?(t.child=Hr(t,e.child,null,h),t.child=Hr(t,null,w,h)):lt(e,t,w,h),t.memoizedState=l.state,u&&Md(t,o,!0),t.child}function Ph(e){var t=e.stateNode;t.pendingContext?Ld(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ld(e,t.context,!1),_l(e,t.containerInfo)}function zh(e,t,o,l,u){return qr(),yl(u),t.flags|=256,lt(e,t,o,l),t.child}var $l={dehydrated:null,treeContext:null,retryLane:0};function ql(e){return{baseLanes:e,cachePool:null,transitions:null}}function Lh(e,t,o){var l=t.pendingProps,u=Be.current,h=!1,g=(t.flags&128)!==0,w;if((w=g)||(w=e!==null&&e.memoizedState===null?!1:(u&2)!==0),w?(h=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(u|=1),Le(Be,u&1),e===null)return gl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(g=l.children,e=l.fallback,h?(l=t.mode,h=t.child,g={mode:"hidden",children:g},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=g):h=Ca(g,l,0,null),e=mr(e,l,o,null),h.return=t,e.return=t,h.sibling=e,t.child=h,t.child.memoizedState=ql(o),t.memoizedState=$l,e):Hl(t,g));if(u=e.memoizedState,u!==null&&(w=u.dehydrated,w!==null))return Cy(e,t,g,l,w,u,o);if(h){h=l.fallback,g=t.mode,u=e.child,w=u.sibling;var k={mode:"hidden",children:l.children};return(g&1)===0&&t.child!==u?(l=t.child,l.childLanes=0,l.pendingProps=k,t.deletions=null):(l=qn(u,k),l.subtreeFlags=u.subtreeFlags&14680064),w!==null?h=qn(w,h):(h=mr(h,g,o,null),h.flags|=2),h.return=t,l.return=t,l.sibling=h,t.child=l,l=h,h=t.child,g=e.child.memoizedState,g=g===null?ql(o):{baseLanes:g.baseLanes|o,cachePool:null,transitions:g.transitions},h.memoizedState=g,h.childLanes=e.childLanes&~o,t.memoizedState=$l,l}return h=e.child,e=h.sibling,l=qn(h,{mode:"visible",children:l.children}),(t.mode&1)===0&&(l.lanes=o),l.return=t,l.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=l,t.memoizedState=null,l}function Hl(e,t){return t=Ca({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ma(e,t,o,l){return l!==null&&yl(l),Hr(t,e.child,null,o),e=Hl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cy(e,t,o,l,u,h,g){if(o)return t.flags&256?(t.flags&=-257,l=Ol(Error(i(422))),ma(e,t,g,l)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(h=l.fallback,u=t.mode,l=Ca({mode:"visible",children:l.children},u,0,null),h=mr(h,u,g,null),h.flags|=2,l.return=t,h.return=t,l.sibling=h,t.child=l,(t.mode&1)!==0&&Hr(t,e.child,null,g),t.child.memoizedState=ql(g),t.memoizedState=$l,h);if((t.mode&1)===0)return ma(e,t,g,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var w=l.dgst;return l=w,h=Error(i(419)),l=Ol(h,l,void 0),ma(e,t,g,l)}if(w=(g&e.childLanes)!==0,pt||w){if(l=Je,l!==null){switch(g&-g){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|g))!==0?0:u,u!==0&&u!==h.retryLane&&(h.retryLane=u,pn(e,u),Ft(l,e,u,-1))}return ac(),l=Ol(Error(i(421))),ma(e,t,g,l)}return u.data==="$?"?(t.flags|=128,t.child=e.child,t=Dy.bind(null,e),u._reactRetry=t,null):(e=h.treeContext,kt=Rn(u.nextSibling),bt=t,Fe=!0,Lt=null,e!==null&&(It[At++]=hn,It[At++]=fn,It[At++]=ar,hn=e.id,fn=e.overflow,ar=t),t=Hl(t,l.children),t.flags|=4096,t)}function Wh(e,t,o){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),kl(e.return,t,o)}function Ul(e,t,o,l,u){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:u}:(h.isBackwards=t,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=u)}function Mh(e,t,o){var l=t.pendingProps,u=l.revealOrder,h=l.tail;if(lt(e,t,l.children,o),l=Be.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wh(e,o,t);else if(e.tag===19)Wh(e,o,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(Le(Be,l),(t.mode&1)===0)t.memoizedState=null;else switch(u){case"forwards":for(o=t.child,u=null;o!==null;)e=o.alternate,e!==null&&la(e)===null&&(u=o),o=o.sibling;o=u,o===null?(u=t.child,t.child=null):(u=o.sibling,o.sibling=null),Ul(t,!1,u,o,h);break;case"backwards":for(o=null,u=t.child,t.child=null;u!==null;){if(e=u.alternate,e!==null&&la(e)===null){t.child=u;break}e=u.sibling,u.sibling=o,o=u,u=e}Ul(t,!0,o,null,h);break;case"together":Ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ga(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gn(e,t,o){if(e!==null&&(t.dependencies=e.dependencies),dr|=t.lanes,(o&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,o=qn(e,e.pendingProps),t.child=o,o.return=t;e.sibling!==null;)e=e.sibling,o=o.sibling=qn(e,e.pendingProps),o.return=t;o.sibling=null}return t.child}function Ey(e,t,o){switch(t.tag){case 3:Ph(t),qr();break;case 5:Qd(t);break;case 1:ft(t.type)&&Jo(t);break;case 4:_l(t,t.stateNode.containerInfo);break;case 10:var l=t.type._context,u=t.memoizedProps.value;Le(ia,l._currentValue),l._currentValue=u;break;case 13:if(l=t.memoizedState,l!==null)return l.dehydrated!==null?(Le(Be,Be.current&1),t.flags|=128,null):(o&t.child.childLanes)!==0?Lh(e,t,o):(Le(Be,Be.current&1),e=gn(e,t,o),e!==null?e.sibling:null);Le(Be,Be.current&1);break;case 19:if(l=(o&t.childLanes)!==0,(e.flags&128)!==0){if(l)return Mh(e,t,o);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Le(Be,Be.current),l)break;return null;case 22:case 23:return t.lanes=0,jh(e,t,o)}return gn(e,t,o)}var Oh,Vl,Fh,Bh;Oh=function(e,t){for(var o=t.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break;for(;o.sibling===null;){if(o.return===null||o.return===t)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Vl=function(){},Fh=function(e,t,o,l){var u=e.memoizedProps;if(u!==l){e=t.stateNode,cr(Qt.current);var h=null;switch(o){case"input":u=ks(e,u),l=ks(e,l),h=[];break;case"select":u=H({},u,{value:void 0}),l=H({},l,{value:void 0}),h=[];break;case"textarea":u=_s(e,u),l=_s(e,l),h=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=Zo)}Is(o,l);var g;o=null;for(R in u)if(!l.hasOwnProperty(R)&&u.hasOwnProperty(R)&&u[R]!=null)if(R==="style"){var w=u[R];for(g in w)w.hasOwnProperty(g)&&(o||(o={}),o[g]="")}else R!=="dangerouslySetInnerHTML"&&R!=="children"&&R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&R!=="autoFocus"&&(s.hasOwnProperty(R)?h||(h=[]):(h=h||[]).push(R,null));for(R in l){var k=l[R];if(w=u?.[R],l.hasOwnProperty(R)&&k!==w&&(k!=null||w!=null))if(R==="style")if(w){for(g in w)!w.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(o||(o={}),o[g]="");for(g in k)k.hasOwnProperty(g)&&w[g]!==k[g]&&(o||(o={}),o[g]=k[g])}else o||(h||(h=[]),h.push(R,o)),o=k;else R==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,w=w?w.__html:void 0,k!=null&&w!==k&&(h=h||[]).push(R,k)):R==="children"?typeof k!="string"&&typeof k!="number"||(h=h||[]).push(R,""+k):R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&(s.hasOwnProperty(R)?(k!=null&&R==="onScroll"&&We("scroll",e),h||w===k||(h=[])):(h=h||[]).push(R,k))}o&&(h=h||[]).push("style",o);var R=h;(t.updateQueue=R)&&(t.flags|=4)}},Bh=function(e,t,o,l){o!==l&&(t.flags|=4)};function Ui(e,t){if(!Fe)switch(e.tailMode){case"hidden":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function it(e){var t=e.alternate!==null&&e.alternate.child===e.child,o=0,l=0;if(t)for(var u=e.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=o,t}function jy(e,t,o){var l=t.pendingProps;switch(pl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(t),null;case 1:return ft(t.type)&&Qo(),it(t),null;case 3:return l=t.stateNode,Gr(),Me(ht),Me(nt),Al(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(na(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Lt!==null&&(rc(Lt),Lt=null))),Vl(e,t),it(t),null;case 5:Sl(t);var u=cr(Bi.current);if(o=t.type,e!==null&&t.stateNode!=null)Fh(e,t,o,l,u),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!l){if(t.stateNode===null)throw Error(i(166));return it(t),null}if(e=cr(Qt.current),na(t)){l=t.stateNode,o=t.type;var h=t.memoizedProps;switch(l[Kt]=t,l[Li]=h,e=(t.mode&1)!==0,o){case"dialog":We("cancel",l),We("close",l);break;case"iframe":case"object":case"embed":We("load",l);break;case"video":case"audio":for(u=0;u<Ri.length;u++)We(Ri[u],l);break;case"source":We("error",l);break;case"img":case"image":case"link":We("error",l),We("load",l);break;case"details":We("toggle",l);break;case"input":bu(l,h),We("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},We("invalid",l);break;case"textarea":Tu(l,h),We("invalid",l)}Is(o,h),u=null;for(var g in h)if(h.hasOwnProperty(g)){var w=h[g];g==="children"?typeof w=="string"?l.textContent!==w&&(h.suppressHydrationWarning!==!0&&Yo(l.textContent,w,e),u=["children",w]):typeof w=="number"&&l.textContent!==""+w&&(h.suppressHydrationWarning!==!0&&Yo(l.textContent,w,e),u=["children",""+w]):s.hasOwnProperty(g)&&w!=null&&g==="onScroll"&&We("scroll",l)}switch(o){case"input":Ar(l),xu(l,h,!0);break;case"textarea":Ar(l),Su(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=Zo)}l=u,t.updateQueue=l,l!==null&&(t.flags|=4)}else{g=u.nodeType===9?u:u.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Iu(o)),e==="http://www.w3.org/1999/xhtml"?o==="script"?(e=g.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=g.createElement(o,{is:l.is}):(e=g.createElement(o),o==="select"&&(g=e,l.multiple?g.multiple=!0:l.size&&(g.size=l.size))):e=g.createElementNS(e,o),e[Kt]=t,e[Li]=l,Oh(e,t,!1,!1),t.stateNode=e;e:{switch(g=As(o,l),o){case"dialog":We("cancel",e),We("close",e),u=l;break;case"iframe":case"object":case"embed":We("load",e),u=l;break;case"video":case"audio":for(u=0;u<Ri.length;u++)We(Ri[u],e);u=l;break;case"source":We("error",e),u=l;break;case"img":case"image":case"link":We("error",e),We("load",e),u=l;break;case"details":We("toggle",e),u=l;break;case"input":bu(e,l),u=ks(e,l),We("invalid",e);break;case"option":u=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},u=H({},l,{value:void 0}),We("invalid",e);break;case"textarea":Tu(e,l),u=_s(e,l),We("invalid",e);break;default:u=l}Is(o,u),w=u;for(h in w)if(w.hasOwnProperty(h)){var k=w[h];h==="style"?Eu(e,k):h==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Au(e,k)):h==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&fi(e,k):typeof k=="number"&&fi(e,""+k):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(s.hasOwnProperty(h)?k!=null&&h==="onScroll"&&We("scroll",e):k!=null&&D(e,h,k,g))}switch(o){case"input":Ar(e),xu(e,l,!1);break;case"textarea":Ar(e),Su(e);break;case"option":l.value!=null&&e.setAttribute("value",""+je(l.value));break;case"select":e.multiple=!!l.multiple,h=l.value,h!=null?Cr(e,!!l.multiple,h,!1):l.defaultValue!=null&&Cr(e,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(e.onclick=Zo)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return it(t),null;case 6:if(e&&t.stateNode!=null)Bh(e,t,e.memoizedProps,l);else{if(typeof l!="string"&&t.stateNode===null)throw Error(i(166));if(o=cr(Bi.current),cr(Qt.current),na(t)){if(l=t.stateNode,o=t.memoizedProps,l[Kt]=t,(h=l.nodeValue!==o)&&(e=bt,e!==null))switch(e.tag){case 3:Yo(l.nodeValue,o,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Yo(l.nodeValue,o,(e.mode&1)!==0)}h&&(t.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[Kt]=t,t.stateNode=l}return it(t),null;case 13:if(Me(Be),l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Fe&&kt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)qd(),qr(),t.flags|=98560,h=!1;else if(h=na(t),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(i(318));if(h=t.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(i(317));h[Kt]=t}else qr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;it(t),h=!1}else Lt!==null&&(rc(Lt),Lt=null),h=!0;if(!h)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=o,t):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Be.current&1)!==0?Ye===0&&(Ye=3):ac())),t.updateQueue!==null&&(t.flags|=4),it(t),null);case 4:return Gr(),Vl(e,t),e===null&&Pi(t.stateNode.containerInfo),it(t),null;case 10:return bl(t.type._context),it(t),null;case 17:return ft(t.type)&&Qo(),it(t),null;case 19:if(Me(Be),h=t.memoizedState,h===null)return it(t),null;if(l=(t.flags&128)!==0,g=h.rendering,g===null)if(l)Ui(h,!1);else{if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(g=la(e),g!==null){for(t.flags|=128,Ui(h,!1),l=g.updateQueue,l!==null&&(t.updateQueue=l,t.flags|=4),t.subtreeFlags=0,l=o,o=t.child;o!==null;)h=o,e=l,h.flags&=14680066,g=h.alternate,g===null?(h.childLanes=0,h.lanes=e,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=g.childLanes,h.lanes=g.lanes,h.child=g.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=g.memoizedProps,h.memoizedState=g.memoizedState,h.updateQueue=g.updateQueue,h.type=g.type,e=g.dependencies,h.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),o=o.sibling;return Le(Be,Be.current&1|2),t.child}e=e.sibling}h.tail!==null&&He()>Qr&&(t.flags|=128,l=!0,Ui(h,!1),t.lanes=4194304)}else{if(!l)if(e=la(g),e!==null){if(t.flags|=128,l=!0,o=e.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),Ui(h,!0),h.tail===null&&h.tailMode==="hidden"&&!g.alternate&&!Fe)return it(t),null}else 2*He()-h.renderingStartTime>Qr&&o!==1073741824&&(t.flags|=128,l=!0,Ui(h,!1),t.lanes=4194304);h.isBackwards?(g.sibling=t.child,t.child=g):(o=h.last,o!==null?o.sibling=g:t.child=g,h.last=g)}return h.tail!==null?(t=h.tail,h.rendering=t,h.tail=t.sibling,h.renderingStartTime=He(),t.sibling=null,o=Be.current,Le(Be,l?o&1|2:o&1),t):(it(t),null);case 22:case 23:return oc(),l=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(t.flags|=8192),l&&(t.mode&1)!==0?(xt&1073741824)!==0&&(it(t),t.subtreeFlags&6&&(t.flags|=8192)):it(t),null;case 24:return null;case 25:return null}throw Error(i(156,t.tag))}function Ny(e,t){switch(pl(t),t.tag){case 1:return ft(t.type)&&Qo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gr(),Me(ht),Me(nt),Al(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Sl(t),null;case 13:if(Me(Be),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));qr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Me(Be),null;case 4:return Gr(),null;case 10:return bl(t.type._context),null;case 22:case 23:return oc(),null;case 24:return null;default:return null}}var ya=!1,ot=!1,Ry=typeof WeakSet=="function"?WeakSet:Set,X=null;function Zr(e,t){var o=e.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){qe(e,t,l)}else o.current=null}function Gl(e,t,o){try{o()}catch(l){qe(e,t,l)}}var Dh=!1;function Py(e,t){if(ol=Mo,e=wd(),Qs(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var u=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var g=0,w=-1,k=-1,R=0,M=0,F=e,L=null;t:for(;;){for(var Q;F!==o||u!==0&&F.nodeType!==3||(w=g+u),F!==h||l!==0&&F.nodeType!==3||(k=g+l),F.nodeType===3&&(g+=F.nodeValue.length),(Q=F.firstChild)!==null;)L=F,F=Q;for(;;){if(F===e)break t;if(L===o&&++R===u&&(w=g),L===h&&++M===l&&(k=g),(Q=F.nextSibling)!==null)break;F=L,L=F.parentNode}F=Q}o=w===-1||k===-1?null:{start:w,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(al={focusedElem:e,selectionRange:o},Mo=!1,X=t;X!==null;)if(t=X,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,X=e;else for(;X!==null;){t=X;try{var ee=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ee!==null){var te=ee.memoizedProps,Ue=ee.memoizedState,C=t.stateNode,T=C.getSnapshotBeforeUpdate(t.elementType===t.type?te:Wt(t.type,te),Ue);C.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var j=t.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(q){qe(t,t.return,q)}if(e=t.sibling,e!==null){e.return=t.return,X=e;break}X=t.return}return ee=Dh,Dh=!1,ee}function Vi(e,t,o){var l=t.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&e)===e){var h=u.destroy;u.destroy=void 0,h!==void 0&&Gl(t,o,h)}u=u.next}while(u!==l)}}function va(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var o=t=t.next;do{if((o.tag&e)===e){var l=o.create;o.destroy=l()}o=o.next}while(o!==t)}}function Yl(e){var t=e.ref;if(t!==null){var o=e.stateNode;e.tag,e=o,typeof t=="function"?t(e):t.current=e}}function $h(e){var t=e.alternate;t!==null&&(e.alternate=null,$h(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Kt],delete t[Li],delete t[ul],delete t[my],delete t[gy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function qh(e){return e.tag===5||e.tag===3||e.tag===4}function Hh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zl(e,t,o){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?o.nodeType===8?o.parentNode.insertBefore(e,t):o.insertBefore(e,t):(o.nodeType===8?(t=o.parentNode,t.insertBefore(e,o)):(t=o,t.appendChild(e)),o=o._reactRootContainer,o!=null||t.onclick!==null||(t.onclick=Zo));else if(l!==4&&(e=e.child,e!==null))for(Zl(e,t,o),e=e.sibling;e!==null;)Zl(e,t,o),e=e.sibling}function Kl(e,t,o){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?o.insertBefore(e,t):o.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(Kl(e,t,o),e=e.sibling;e!==null;)Kl(e,t,o),e=e.sibling}var et=null,Mt=!1;function On(e,t,o){for(o=o.child;o!==null;)Uh(e,t,o),o=o.sibling}function Uh(e,t,o){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(No,o)}catch{}switch(o.tag){case 5:ot||Zr(o,t);case 6:var l=et,u=Mt;et=null,On(e,t,o),et=l,Mt=u,et!==null&&(Mt?(e=et,o=o.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)):et.removeChild(o.stateNode));break;case 18:et!==null&&(Mt?(e=et,o=o.stateNode,e.nodeType===8?cl(e.parentNode,o):e.nodeType===1&&cl(e,o),_i(e)):cl(et,o.stateNode));break;case 4:l=et,u=Mt,et=o.stateNode.containerInfo,Mt=!0,On(e,t,o),et=l,Mt=u;break;case 0:case 11:case 14:case 15:if(!ot&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var h=u,g=h.destroy;h=h.tag,g!==void 0&&((h&2)!==0||(h&4)!==0)&&Gl(o,t,g),u=u.next}while(u!==l)}On(e,t,o);break;case 1:if(!ot&&(Zr(o,t),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(w){qe(o,t,w)}On(e,t,o);break;case 21:On(e,t,o);break;case 22:o.mode&1?(ot=(l=ot)||o.memoizedState!==null,On(e,t,o),ot=l):On(e,t,o);break;default:On(e,t,o)}}function Vh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var o=e.stateNode;o===null&&(o=e.stateNode=new Ry),t.forEach(function(l){var u=$y.bind(null,e,l);o.has(l)||(o.add(l),l.then(u,u))})}}function Ot(e,t){var o=t.deletions;if(o!==null)for(var l=0;l<o.length;l++){var u=o[l];try{var h=e,g=t,w=g;e:for(;w!==null;){switch(w.tag){case 5:et=w.stateNode,Mt=!1;break e;case 3:et=w.stateNode.containerInfo,Mt=!0;break e;case 4:et=w.stateNode.containerInfo,Mt=!0;break e}w=w.return}if(et===null)throw Error(i(160));Uh(h,g,u),et=null,Mt=!1;var k=u.alternate;k!==null&&(k.return=null),u.return=null}catch(R){qe(u,t,R)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gh(t,e),t=t.sibling}function Gh(e,t){var o=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ot(t,e),Xt(e),l&4){try{Vi(3,e,e.return),va(3,e)}catch(te){qe(e,e.return,te)}try{Vi(5,e,e.return)}catch(te){qe(e,e.return,te)}}break;case 1:Ot(t,e),Xt(e),l&512&&o!==null&&Zr(o,o.return);break;case 5:if(Ot(t,e),Xt(e),l&512&&o!==null&&Zr(o,o.return),e.flags&32){var u=e.stateNode;try{fi(u,"")}catch(te){qe(e,e.return,te)}}if(l&4&&(u=e.stateNode,u!=null)){var h=e.memoizedProps,g=o!==null?o.memoizedProps:h,w=e.type,k=e.updateQueue;if(e.updateQueue=null,k!==null)try{w==="input"&&h.type==="radio"&&h.name!=null&&ku(u,h),As(w,g);var R=As(w,h);for(g=0;g<k.length;g+=2){var M=k[g],F=k[g+1];M==="style"?Eu(u,F):M==="dangerouslySetInnerHTML"?Au(u,F):M==="children"?fi(u,F):D(u,M,F,R)}switch(w){case"input":xs(u,h);break;case"textarea":_u(u,h);break;case"select":var L=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!h.multiple;var Q=h.value;Q!=null?Cr(u,!!h.multiple,Q,!1):L!==!!h.multiple&&(h.defaultValue!=null?Cr(u,!!h.multiple,h.defaultValue,!0):Cr(u,!!h.multiple,h.multiple?[]:"",!1))}u[Li]=h}catch(te){qe(e,e.return,te)}}break;case 6:if(Ot(t,e),Xt(e),l&4){if(e.stateNode===null)throw Error(i(162));u=e.stateNode,h=e.memoizedProps;try{u.nodeValue=h}catch(te){qe(e,e.return,te)}}break;case 3:if(Ot(t,e),Xt(e),l&4&&o!==null&&o.memoizedState.isDehydrated)try{_i(t.containerInfo)}catch(te){qe(e,e.return,te)}break;case 4:Ot(t,e),Xt(e);break;case 13:Ot(t,e),Xt(e),u=e.child,u.flags&8192&&(h=u.memoizedState!==null,u.stateNode.isHidden=h,!h||u.alternate!==null&&u.alternate.memoizedState!==null||(Xl=He())),l&4&&Vh(e);break;case 22:if(M=o!==null&&o.memoizedState!==null,e.mode&1?(ot=(R=ot)||M,Ot(t,e),ot=R):Ot(t,e),Xt(e),l&8192){if(R=e.memoizedState!==null,(e.stateNode.isHidden=R)&&!M&&(e.mode&1)!==0)for(X=e,M=e.child;M!==null;){for(F=X=M;X!==null;){switch(L=X,Q=L.child,L.tag){case 0:case 11:case 14:case 15:Vi(4,L,L.return);break;case 1:Zr(L,L.return);var ee=L.stateNode;if(typeof ee.componentWillUnmount=="function"){l=L,o=L.return;try{t=l,ee.props=t.memoizedProps,ee.state=t.memoizedState,ee.componentWillUnmount()}catch(te){qe(l,o,te)}}break;case 5:Zr(L,L.return);break;case 22:if(L.memoizedState!==null){Kh(F);continue}}Q!==null?(Q.return=L,X=Q):Kh(F)}M=M.sibling}e:for(M=null,F=e;;){if(F.tag===5){if(M===null){M=F;try{u=F.stateNode,R?(h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(w=F.stateNode,k=F.memoizedProps.style,g=k!=null&&k.hasOwnProperty("display")?k.display:null,w.style.display=Cu("display",g))}catch(te){qe(e,e.return,te)}}}else if(F.tag===6){if(M===null)try{F.stateNode.nodeValue=R?"":F.memoizedProps}catch(te){qe(e,e.return,te)}}else if((F.tag!==22&&F.tag!==23||F.memoizedState===null||F===e)&&F.child!==null){F.child.return=F,F=F.child;continue}if(F===e)break e;for(;F.sibling===null;){if(F.return===null||F.return===e)break e;M===F&&(M=null),F=F.return}M===F&&(M=null),F.sibling.return=F.return,F=F.sibling}}break;case 19:Ot(t,e),Xt(e),l&4&&Vh(e);break;case 21:break;default:Ot(t,e),Xt(e)}}function Xt(e){var t=e.flags;if(t&2){try{e:{for(var o=e.return;o!==null;){if(qh(o)){var l=o;break e}o=o.return}throw Error(i(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(fi(u,""),l.flags&=-33);var h=Hh(e);Kl(e,h,u);break;case 3:case 4:var g=l.stateNode.containerInfo,w=Hh(e);Zl(e,w,g);break;default:throw Error(i(161))}}catch(k){qe(e,e.return,k)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zy(e,t,o){X=e,Yh(e)}function Yh(e,t,o){for(var l=(e.mode&1)!==0;X!==null;){var u=X,h=u.child;if(u.tag===22&&l){var g=u.memoizedState!==null||ya;if(!g){var w=u.alternate,k=w!==null&&w.memoizedState!==null||ot;w=ya;var R=ot;if(ya=g,(ot=k)&&!R)for(X=u;X!==null;)g=X,k=g.child,g.tag===22&&g.memoizedState!==null?Qh(u):k!==null?(k.return=g,X=k):Qh(u);for(;h!==null;)X=h,Yh(h),h=h.sibling;X=u,ya=w,ot=R}Zh(e)}else(u.subtreeFlags&8772)!==0&&h!==null?(h.return=u,X=h):Zh(e)}}function Zh(e){for(;X!==null;){var t=X;if((t.flags&8772)!==0){var o=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ot||va(5,t);break;case 1:var l=t.stateNode;if(t.flags&4&&!ot)if(o===null)l.componentDidMount();else{var u=t.elementType===t.type?o.memoizedProps:Wt(t.type,o.memoizedProps);l.componentDidUpdate(u,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=t.updateQueue;h!==null&&Kd(t,h,l);break;case 3:var g=t.updateQueue;if(g!==null){if(o=null,t.child!==null)switch(t.child.tag){case 5:o=t.child.stateNode;break;case 1:o=t.child.stateNode}Kd(t,g,o)}break;case 5:var w=t.stateNode;if(o===null&&t.flags&4){o=w;var k=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var R=t.alternate;if(R!==null){var M=R.memoizedState;if(M!==null){var F=M.dehydrated;F!==null&&_i(F)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}ot||t.flags&512&&Yl(t)}catch(L){qe(t,t.return,L)}}if(t===e){X=null;break}if(o=t.sibling,o!==null){o.return=t.return,X=o;break}X=t.return}}function Kh(e){for(;X!==null;){var t=X;if(t===e){X=null;break}var o=t.sibling;if(o!==null){o.return=t.return,X=o;break}X=t.return}}function Qh(e){for(;X!==null;){var t=X;try{switch(t.tag){case 0:case 11:case 15:var o=t.return;try{va(4,t)}catch(k){qe(t,o,k)}break;case 1:var l=t.stateNode;if(typeof l.componentDidMount=="function"){var u=t.return;try{l.componentDidMount()}catch(k){qe(t,u,k)}}var h=t.return;try{Yl(t)}catch(k){qe(t,h,k)}break;case 5:var g=t.return;try{Yl(t)}catch(k){qe(t,g,k)}}}catch(k){qe(t,t.return,k)}if(t===e){X=null;break}var w=t.sibling;if(w!==null){w.return=t.return,X=w;break}X=t.return}}var Ly=Math.ceil,wa=$.ReactCurrentDispatcher,Ql=$.ReactCurrentOwner,jt=$.ReactCurrentBatchConfig,Ce=0,Je=null,Ve=null,tt=0,xt=0,Kr=Pn(0),Ye=0,Gi=null,dr=0,ba=0,Jl=0,Yi=null,mt=null,Xl=0,Qr=1/0,yn=null,ka=!1,ec=null,Fn=null,xa=!1,Bn=null,Ta=0,Zi=0,tc=null,_a=-1,Sa=0;function ct(){return(Ce&6)!==0?He():_a!==-1?_a:_a=He()}function Dn(e){return(e.mode&1)===0?1:(Ce&2)!==0&&tt!==0?tt&-tt:vy.transition!==null?(Sa===0&&(Sa=Hu()),Sa):(e=Pe,e!==0||(e=window.event,e=e===void 0?16:Xu(e.type)),e)}function Ft(e,t,o,l){if(50<Zi)throw Zi=0,tc=null,Error(i(185));wi(e,o,l),((Ce&2)===0||e!==Je)&&(e===Je&&((Ce&2)===0&&(ba|=o),Ye===4&&$n(e,tt)),gt(e,l),o===1&&Ce===0&&(t.mode&1)===0&&(Qr=He()+500,Xo&&Ln()))}function gt(e,t){var o=e.callbackNode;vg(e,t);var l=zo(e,e===Je?tt:0);if(l===0)o!==null&&Du(o),e.callbackNode=null,e.callbackPriority=0;else if(t=l&-l,e.callbackPriority!==t){if(o!=null&&Du(o),t===1)e.tag===0?yy(Xh.bind(null,e)):Od(Xh.bind(null,e)),fy(function(){(Ce&6)===0&&Ln()}),o=null;else{switch(Uu(l)){case 1:o=zs;break;case 4:o=$u;break;case 16:o=jo;break;case 536870912:o=qu;break;default:o=jo}o=lf(o,Jh.bind(null,e))}e.callbackPriority=t,e.callbackNode=o}}function Jh(e,t){if(_a=-1,Sa=0,(Ce&6)!==0)throw Error(i(327));var o=e.callbackNode;if(Jr()&&e.callbackNode!==o)return null;var l=zo(e,e===Je?tt:0);if(l===0)return null;if((l&30)!==0||(l&e.expiredLanes)!==0||t)t=Ia(e,l);else{t=l;var u=Ce;Ce|=2;var h=tf();(Je!==e||tt!==t)&&(yn=null,Qr=He()+500,fr(e,t));do try{Oy();break}catch(w){ef(e,w)}while(!0);wl(),wa.current=h,Ce=u,Ve!==null?t=0:(Je=null,tt=0,t=Ye)}if(t!==0){if(t===2&&(u=Ls(e),u!==0&&(l=u,t=nc(e,u))),t===1)throw o=Gi,fr(e,0),$n(e,l),gt(e,He()),o;if(t===6)$n(e,l);else{if(u=e.current.alternate,(l&30)===0&&!Wy(u)&&(t=Ia(e,l),t===2&&(h=Ls(e),h!==0&&(l=h,t=nc(e,h))),t===1))throw o=Gi,fr(e,0),$n(e,l),gt(e,He()),o;switch(e.finishedWork=u,e.finishedLanes=l,t){case 0:case 1:throw Error(i(345));case 2:pr(e,mt,yn);break;case 3:if($n(e,l),(l&130023424)===l&&(t=Xl+500-He(),10<t)){if(zo(e,0)!==0)break;if(u=e.suspendedLanes,(u&l)!==l){ct(),e.pingedLanes|=e.suspendedLanes&u;break}e.timeoutHandle=ll(pr.bind(null,e,mt,yn),t);break}pr(e,mt,yn);break;case 4:if($n(e,l),(l&4194240)===l)break;for(t=e.eventTimes,u=-1;0<l;){var g=31-Pt(l);h=1<<g,g=t[g],g>u&&(u=g),l&=~h}if(l=u,l=He()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Ly(l/1960))-l,10<l){e.timeoutHandle=ll(pr.bind(null,e,mt,yn),l);break}pr(e,mt,yn);break;case 5:pr(e,mt,yn);break;default:throw Error(i(329))}}}return gt(e,He()),e.callbackNode===o?Jh.bind(null,e):null}function nc(e,t){var o=Yi;return e.current.memoizedState.isDehydrated&&(fr(e,t).flags|=256),e=Ia(e,t),e!==2&&(t=mt,mt=o,t!==null&&rc(t)),e}function rc(e){mt===null?mt=e:mt.push.apply(mt,e)}function Wy(e){for(var t=e;;){if(t.flags&16384){var o=t.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var u=o[l],h=u.getSnapshot;u=u.value;try{if(!zt(h(),u))return!1}catch{return!1}}}if(o=t.child,t.subtreeFlags&16384&&o!==null)o.return=t,t=o;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $n(e,t){for(t&=~Jl,t&=~ba,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var o=31-Pt(t),l=1<<o;e[o]=-1,t&=~l}}function Xh(e){if((Ce&6)!==0)throw Error(i(327));Jr();var t=zo(e,0);if((t&1)===0)return gt(e,He()),null;var o=Ia(e,t);if(e.tag!==0&&o===2){var l=Ls(e);l!==0&&(t=l,o=nc(e,l))}if(o===1)throw o=Gi,fr(e,0),$n(e,t),gt(e,He()),o;if(o===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,pr(e,mt,yn),gt(e,He()),null}function ic(e,t){var o=Ce;Ce|=1;try{return e(t)}finally{Ce=o,Ce===0&&(Qr=He()+500,Xo&&Ln())}}function hr(e){Bn!==null&&Bn.tag===0&&(Ce&6)===0&&Jr();var t=Ce;Ce|=1;var o=jt.transition,l=Pe;try{if(jt.transition=null,Pe=1,e)return e()}finally{Pe=l,jt.transition=o,Ce=t,(Ce&6)===0&&Ln()}}function oc(){xt=Kr.current,Me(Kr)}function fr(e,t){e.finishedWork=null,e.finishedLanes=0;var o=e.timeoutHandle;if(o!==-1&&(e.timeoutHandle=-1,hy(o)),Ve!==null)for(o=Ve.return;o!==null;){var l=o;switch(pl(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Qo();break;case 3:Gr(),Me(ht),Me(nt),Al();break;case 5:Sl(l);break;case 4:Gr();break;case 13:Me(Be);break;case 19:Me(Be);break;case 10:bl(l.type._context);break;case 22:case 23:oc()}o=o.return}if(Je=e,Ve=e=qn(e.current,null),tt=xt=t,Ye=0,Gi=null,Jl=ba=dr=0,mt=Yi=null,lr!==null){for(t=0;t<lr.length;t++)if(o=lr[t],l=o.interleaved,l!==null){o.interleaved=null;var u=l.next,h=o.pending;if(h!==null){var g=h.next;h.next=u,l.next=g}o.pending=l}lr=null}return e}function ef(e,t){do{var o=Ve;try{if(wl(),ca.current=fa,ua){for(var l=De.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}ua=!1}if(ur=0,Qe=Ge=De=null,Di=!1,$i=0,Ql.current=null,o===null||o.return===null){Ye=1,Gi=t,Ve=null;break}e:{var h=e,g=o.return,w=o,k=t;if(t=tt,w.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var R=k,M=w,F=M.tag;if((M.mode&1)===0&&(F===0||F===11||F===15)){var L=M.alternate;L?(M.updateQueue=L.updateQueue,M.memoizedState=L.memoizedState,M.lanes=L.lanes):(M.updateQueue=null,M.memoizedState=null)}var Q=Sh(g);if(Q!==null){Q.flags&=-257,Ih(Q,g,w,h,t),Q.mode&1&&_h(h,R,t),t=Q,k=R;var ee=t.updateQueue;if(ee===null){var te=new Set;te.add(k),t.updateQueue=te}else ee.add(k);break e}else{if((t&1)===0){_h(h,R,t),ac();break e}k=Error(i(426))}}else if(Fe&&w.mode&1){var Ue=Sh(g);if(Ue!==null){(Ue.flags&65536)===0&&(Ue.flags|=256),Ih(Ue,g,w,h,t),yl(Yr(k,w));break e}}h=k=Yr(k,w),Ye!==4&&(Ye=2),Yi===null?Yi=[h]:Yi.push(h),h=g;do{switch(h.tag){case 3:h.flags|=65536,t&=-t,h.lanes|=t;var C=xh(h,k,t);Zd(h,C);break e;case 1:w=k;var T=h.type,j=h.stateNode;if((h.flags&128)===0&&(typeof T.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(Fn===null||!Fn.has(j)))){h.flags|=65536,t&=-t,h.lanes|=t;var q=Th(h,w,t);Zd(h,q);break e}}h=h.return}while(h!==null)}rf(o)}catch(ne){t=ne,Ve===o&&o!==null&&(Ve=o=o.return);continue}break}while(!0)}function tf(){var e=wa.current;return wa.current=fa,e===null?fa:e}function ac(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),Je===null||(dr&268435455)===0&&(ba&268435455)===0||$n(Je,tt)}function Ia(e,t){var o=Ce;Ce|=2;var l=tf();(Je!==e||tt!==t)&&(yn=null,fr(e,t));do try{My();break}catch(u){ef(e,u)}while(!0);if(wl(),Ce=o,wa.current=l,Ve!==null)throw Error(i(261));return Je=null,tt=0,Ye}function My(){for(;Ve!==null;)nf(Ve)}function Oy(){for(;Ve!==null&&!cg();)nf(Ve)}function nf(e){var t=sf(e.alternate,e,xt);e.memoizedProps=e.pendingProps,t===null?rf(e):Ve=t,Ql.current=null}function rf(e){var t=e;do{var o=t.alternate;if(e=t.return,(t.flags&32768)===0){if(o=jy(o,t,xt),o!==null){Ve=o;return}}else{if(o=Ny(o,t),o!==null){o.flags&=32767,Ve=o;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ye=6,Ve=null;return}}if(t=t.sibling,t!==null){Ve=t;return}Ve=t=e}while(t!==null);Ye===0&&(Ye=5)}function pr(e,t,o){var l=Pe,u=jt.transition;try{jt.transition=null,Pe=1,Fy(e,t,o,l)}finally{jt.transition=u,Pe=l}return null}function Fy(e,t,o,l){do Jr();while(Bn!==null);if((Ce&6)!==0)throw Error(i(327));o=e.finishedWork;var u=e.finishedLanes;if(o===null)return null;if(e.finishedWork=null,e.finishedLanes=0,o===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var h=o.lanes|o.childLanes;if(wg(e,h),e===Je&&(Ve=Je=null,tt=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||xa||(xa=!0,lf(jo,function(){return Jr(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=jt.transition,jt.transition=null;var g=Pe;Pe=1;var w=Ce;Ce|=4,Ql.current=null,Py(e,o),Gh(o,e),oy(al),Mo=!!ol,al=ol=null,e.current=o,zy(o),ug(),Ce=w,Pe=g,jt.transition=h}else e.current=o;if(xa&&(xa=!1,Bn=e,Ta=u),h=e.pendingLanes,h===0&&(Fn=null),fg(o.stateNode),gt(e,He()),t!==null)for(l=e.onRecoverableError,o=0;o<t.length;o++)u=t[o],l(u.value,{componentStack:u.stack,digest:u.digest});if(ka)throw ka=!1,e=ec,ec=null,e;return(Ta&1)!==0&&e.tag!==0&&Jr(),h=e.pendingLanes,(h&1)!==0?e===tc?Zi++:(Zi=0,tc=e):Zi=0,Ln(),null}function Jr(){if(Bn!==null){var e=Uu(Ta),t=jt.transition,o=Pe;try{if(jt.transition=null,Pe=16>e?16:e,Bn===null)var l=!1;else{if(e=Bn,Bn=null,Ta=0,(Ce&6)!==0)throw Error(i(331));var u=Ce;for(Ce|=4,X=e.current;X!==null;){var h=X,g=h.child;if((X.flags&16)!==0){var w=h.deletions;if(w!==null){for(var k=0;k<w.length;k++){var R=w[k];for(X=R;X!==null;){var M=X;switch(M.tag){case 0:case 11:case 15:Vi(8,M,h)}var F=M.child;if(F!==null)F.return=M,X=F;else for(;X!==null;){M=X;var L=M.sibling,Q=M.return;if($h(M),M===R){X=null;break}if(L!==null){L.return=Q,X=L;break}X=Q}}}var ee=h.alternate;if(ee!==null){var te=ee.child;if(te!==null){ee.child=null;do{var Ue=te.sibling;te.sibling=null,te=Ue}while(te!==null)}}X=h}}if((h.subtreeFlags&2064)!==0&&g!==null)g.return=h,X=g;else e:for(;X!==null;){if(h=X,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Vi(9,h,h.return)}var C=h.sibling;if(C!==null){C.return=h.return,X=C;break e}X=h.return}}var T=e.current;for(X=T;X!==null;){g=X;var j=g.child;if((g.subtreeFlags&2064)!==0&&j!==null)j.return=g,X=j;else e:for(g=T;X!==null;){if(w=X,(w.flags&2048)!==0)try{switch(w.tag){case 0:case 11:case 15:va(9,w)}}catch(ne){qe(w,w.return,ne)}if(w===g){X=null;break e}var q=w.sibling;if(q!==null){q.return=w.return,X=q;break e}X=w.return}}if(Ce=u,Ln(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(No,e)}catch{}l=!0}return l}finally{Pe=o,jt.transition=t}}return!1}function of(e,t,o){t=Yr(o,t),t=xh(e,t,1),e=Mn(e,t,1),t=ct(),e!==null&&(wi(e,1,t),gt(e,t))}function qe(e,t,o){if(e.tag===3)of(e,e,o);else for(;t!==null;){if(t.tag===3){of(t,e,o);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Fn===null||!Fn.has(l))){e=Yr(o,e),e=Th(t,e,1),t=Mn(t,e,1),e=ct(),t!==null&&(wi(t,1,e),gt(t,e));break}}t=t.return}}function By(e,t,o){var l=e.pingCache;l!==null&&l.delete(t),t=ct(),e.pingedLanes|=e.suspendedLanes&o,Je===e&&(tt&o)===o&&(Ye===4||Ye===3&&(tt&130023424)===tt&&500>He()-Xl?fr(e,0):Jl|=o),gt(e,t)}function af(e,t){t===0&&((e.mode&1)===0?t=1:(t=Po,Po<<=1,(Po&130023424)===0&&(Po=4194304)));var o=ct();e=pn(e,t),e!==null&&(wi(e,t,o),gt(e,o))}function Dy(e){var t=e.memoizedState,o=0;t!==null&&(o=t.retryLane),af(e,o)}function $y(e,t){var o=0;switch(e.tag){case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(o=u.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(i(314))}l!==null&&l.delete(t),af(e,o)}var sf;sf=function(e,t,o){if(e!==null)if(e.memoizedProps!==t.pendingProps||ht.current)pt=!0;else{if((e.lanes&o)===0&&(t.flags&128)===0)return pt=!1,Ey(e,t,o);pt=(e.flags&131072)!==0}else pt=!1,Fe&&(t.flags&1048576)!==0&&Fd(t,ta,t.index);switch(t.lanes=0,t.tag){case 2:var l=t.type;ga(e,t),e=t.pendingProps;var u=Br(t,nt.current);Vr(t,o),u=jl(null,t,l,e,u,o);var h=Nl();return t.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ft(l)?(h=!0,Jo(t)):h=!1,t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Tl(t),u.updater=pa,t.stateNode=u,u._reactInternals=t,Ml(t,l,e,o),t=Dl(null,t,l,!0,h,o)):(t.tag=0,Fe&&h&&fl(t),lt(null,t,u,o),t=t.child),t;case 16:l=t.elementType;e:{switch(ga(e,t),e=t.pendingProps,u=l._init,l=u(l._payload),t.type=l,u=t.tag=Hy(l),e=Wt(l,e),u){case 0:t=Bl(null,t,l,e,o);break e;case 1:t=Rh(null,t,l,e,o);break e;case 11:t=Ah(null,t,l,e,o);break e;case 14:t=Ch(null,t,l,Wt(l.type,e),o);break e}throw Error(i(306,l,""))}return t;case 0:return l=t.type,u=t.pendingProps,u=t.elementType===l?u:Wt(l,u),Bl(e,t,l,u,o);case 1:return l=t.type,u=t.pendingProps,u=t.elementType===l?u:Wt(l,u),Rh(e,t,l,u,o);case 3:e:{if(Ph(t),e===null)throw Error(i(387));l=t.pendingProps,h=t.memoizedState,u=h.element,Yd(e,t),sa(t,l,null,o);var g=t.memoizedState;if(l=g.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},t.updateQueue.baseState=h,t.memoizedState=h,t.flags&256){u=Yr(Error(i(423)),t),t=zh(e,t,l,o,u);break e}else if(l!==u){u=Yr(Error(i(424)),t),t=zh(e,t,l,o,u);break e}else for(kt=Rn(t.stateNode.containerInfo.firstChild),bt=t,Fe=!0,Lt=null,o=Vd(t,null,l,o),t.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(qr(),l===u){t=gn(e,t,o);break e}lt(e,t,l,o)}t=t.child}return t;case 5:return Qd(t),e===null&&gl(t),l=t.type,u=t.pendingProps,h=e!==null?e.memoizedProps:null,g=u.children,sl(l,u)?g=null:h!==null&&sl(l,h)&&(t.flags|=32),Nh(e,t),lt(e,t,g,o),t.child;case 6:return e===null&&gl(t),null;case 13:return Lh(e,t,o);case 4:return _l(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Hr(t,null,l,o):lt(e,t,l,o),t.child;case 11:return l=t.type,u=t.pendingProps,u=t.elementType===l?u:Wt(l,u),Ah(e,t,l,u,o);case 7:return lt(e,t,t.pendingProps,o),t.child;case 8:return lt(e,t,t.pendingProps.children,o),t.child;case 12:return lt(e,t,t.pendingProps.children,o),t.child;case 10:e:{if(l=t.type._context,u=t.pendingProps,h=t.memoizedProps,g=u.value,Le(ia,l._currentValue),l._currentValue=g,h!==null)if(zt(h.value,g)){if(h.children===u.children&&!ht.current){t=gn(e,t,o);break e}}else for(h=t.child,h!==null&&(h.return=t);h!==null;){var w=h.dependencies;if(w!==null){g=h.child;for(var k=w.firstContext;k!==null;){if(k.context===l){if(h.tag===1){k=mn(-1,o&-o),k.tag=2;var R=h.updateQueue;if(R!==null){R=R.shared;var M=R.pending;M===null?k.next=k:(k.next=M.next,M.next=k),R.pending=k}}h.lanes|=o,k=h.alternate,k!==null&&(k.lanes|=o),kl(h.return,o,t),w.lanes|=o;break}k=k.next}}else if(h.tag===10)g=h.type===t.type?null:h.child;else if(h.tag===18){if(g=h.return,g===null)throw Error(i(341));g.lanes|=o,w=g.alternate,w!==null&&(w.lanes|=o),kl(g,o,t),g=h.sibling}else g=h.child;if(g!==null)g.return=h;else for(g=h;g!==null;){if(g===t){g=null;break}if(h=g.sibling,h!==null){h.return=g.return,g=h;break}g=g.return}h=g}lt(e,t,u.children,o),t=t.child}return t;case 9:return u=t.type,l=t.pendingProps.children,Vr(t,o),u=Ct(u),l=l(u),t.flags|=1,lt(e,t,l,o),t.child;case 14:return l=t.type,u=Wt(l,t.pendingProps),u=Wt(l.type,u),Ch(e,t,l,u,o);case 15:return Eh(e,t,t.type,t.pendingProps,o);case 17:return l=t.type,u=t.pendingProps,u=t.elementType===l?u:Wt(l,u),ga(e,t),t.tag=1,ft(l)?(e=!0,Jo(t)):e=!1,Vr(t,o),bh(t,l,u),Ml(t,l,u,o),Dl(null,t,l,!0,e,o);case 19:return Mh(e,t,o);case 22:return jh(e,t,o)}throw Error(i(156,t.tag))};function lf(e,t){return Bu(e,t)}function qy(e,t,o,l){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(e,t,o,l){return new qy(e,t,o,l)}function sc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hy(e){if(typeof e=="function")return sc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ie)return 11;if(e===xe)return 14}return 2}function qn(e,t){var o=e.alternate;return o===null?(o=Nt(e.tag,t,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=t,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&14680064,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,t=e.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function Aa(e,t,o,l,u,h){var g=2;if(l=e,typeof e=="function")sc(e)&&(g=1);else if(typeof e=="string")g=5;else e:switch(e){case K:return mr(o.children,u,h,t);case fe:g=8,u|=8;break;case ke:return e=Nt(12,o,t,u|2),e.elementType=ke,e.lanes=h,e;case we:return e=Nt(13,o,t,u),e.elementType=we,e.lanes=h,e;case Y:return e=Nt(19,o,t,u),e.elementType=Y,e.lanes=h,e;case se:return Ca(o,u,h,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ye:g=10;break e;case Te:g=9;break e;case ie:g=11;break e;case xe:g=14;break e;case ce:g=16,l=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return t=Nt(g,o,t,u),t.elementType=e,t.type=l,t.lanes=h,t}function mr(e,t,o,l){return e=Nt(7,e,l,t),e.lanes=o,e}function Ca(e,t,o,l){return e=Nt(22,e,l,t),e.elementType=se,e.lanes=o,e.stateNode={isHidden:!1},e}function lc(e,t,o){return e=Nt(6,e,null,t),e.lanes=o,e}function cc(e,t,o){return t=Nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=o,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Uy(e,t,o,l,u){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ws(0),this.expirationTimes=Ws(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ws(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function uc(e,t,o,l,u,h,g,w,k){return e=new Uy(e,t,o,w,k),t===1?(t=1,h===!0&&(t|=8)):t=0,h=Nt(3,null,null,t),e.current=h,h.stateNode=e,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tl(h),e}function Vy(e,t,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Z,key:l==null?null:""+l,children:e,containerInfo:t,implementation:o}}function cf(e){if(!e)return zn;e=e._reactInternals;e:{if(rr(e)!==e||e.tag!==1)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ft(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(i(171))}if(e.tag===1){var o=e.type;if(ft(o))return Wd(e,o,t)}return t}function uf(e,t,o,l,u,h,g,w,k){return e=uc(o,l,!0,e,u,h,g,w,k),e.context=cf(null),o=e.current,l=ct(),u=Dn(o),h=mn(l,u),h.callback=t??null,Mn(o,h,u),e.current.lanes=u,wi(e,u,l),gt(e,l),e}function Ea(e,t,o,l){var u=t.current,h=ct(),g=Dn(u);return o=cf(o),t.context===null?t.context=o:t.pendingContext=o,t=mn(h,g),t.payload={element:e},l=l===void 0?null:l,l!==null&&(t.callback=l),e=Mn(u,t,g),e!==null&&(Ft(e,u,g,h),aa(e,u,g)),g}function ja(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function df(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<t?o:t}}function dc(e,t){df(e,t),(e=e.alternate)&&df(e,t)}function Gy(){return null}var hf=typeof reportError=="function"?reportError:function(e){console.error(e)};function hc(e){this._internalRoot=e}Na.prototype.render=hc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));Ea(e,t,null,null)},Na.prototype.unmount=hc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hr(function(){Ea(null,e,null,null)}),t[un]=null}};function Na(e){this._internalRoot=e}Na.prototype.unstable_scheduleHydration=function(e){if(e){var t=Yu();e={blockedOn:null,target:e,priority:t};for(var o=0;o<En.length&&t!==0&&t<En[o].priority;o++);En.splice(o,0,e),o===0&&Qu(e)}};function fc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ra(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ff(){}function Yy(e,t,o,l,u){if(u){if(typeof l=="function"){var h=l;l=function(){var R=ja(g);h.call(R)}}var g=uf(t,l,e,0,null,!1,!1,"",ff);return e._reactRootContainer=g,e[un]=g.current,Pi(e.nodeType===8?e.parentNode:e),hr(),g}for(;u=e.lastChild;)e.removeChild(u);if(typeof l=="function"){var w=l;l=function(){var R=ja(k);w.call(R)}}var k=uc(e,0,!1,null,null,!1,!1,"",ff);return e._reactRootContainer=k,e[un]=k.current,Pi(e.nodeType===8?e.parentNode:e),hr(function(){Ea(t,k,o,l)}),k}function Pa(e,t,o,l,u){var h=o._reactRootContainer;if(h){var g=h;if(typeof u=="function"){var w=u;u=function(){var k=ja(g);w.call(k)}}Ea(t,g,e,u)}else g=Yy(o,t,e,u,l);return ja(g)}Vu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var o=vi(t.pendingLanes);o!==0&&(Ms(t,o|1),gt(t,He()),(Ce&6)===0&&(Qr=He()+500,Ln()))}break;case 13:hr(function(){var l=pn(e,1);if(l!==null){var u=ct();Ft(l,e,1,u)}}),dc(e,1)}},Os=function(e){if(e.tag===13){var t=pn(e,134217728);if(t!==null){var o=ct();Ft(t,e,134217728,o)}dc(e,134217728)}},Gu=function(e){if(e.tag===13){var t=Dn(e),o=pn(e,t);if(o!==null){var l=ct();Ft(o,e,t,l)}dc(e,t)}},Yu=function(){return Pe},Zu=function(e,t){var o=Pe;try{return Pe=e,t()}finally{Pe=o}},js=function(e,t,o){switch(t){case"input":if(xs(e,o),t=o.name,o.type==="radio"&&t!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<o.length;t++){var l=o[t];if(l!==e&&l.form===e.form){var u=Ko(l);if(!u)throw Error(i(90));Io(l),xs(l,u)}}}break;case"textarea":_u(e,o);break;case"select":t=o.value,t!=null&&Cr(e,!!o.multiple,t,!1)}},Pu=ic,zu=hr;var Zy={usingClientEntryPoint:!1,Events:[Wi,Or,Ko,Nu,Ru,ic]},Ki={findFiberByHostInstance:ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ky={bundleType:Ki.bundleType,version:Ki.version,rendererPackageName:Ki.rendererPackageName,rendererConfig:Ki.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ou(e),e===null?null:e.stateNode},findFiberByHostInstance:Ki.findFiberByHostInstance||Gy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var za=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!za.isDisabled&&za.supportsFiber)try{No=za.inject(Ky),Zt=za}catch{}}return yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zy,yt.createPortal=function(e,t){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fc(t))throw Error(i(200));return Vy(e,t,null,o)},yt.createRoot=function(e,t){if(!fc(e))throw Error(i(299));var o=!1,l="",u=hf;return t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=uc(e,1,!1,null,null,o,!1,l,u),e[un]=t.current,Pi(e.nodeType===8?e.parentNode:e),new hc(t)},yt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=Ou(t),e=e===null?null:e.stateNode,e},yt.flushSync=function(e){return hr(e)},yt.hydrate=function(e,t,o){if(!Ra(t))throw Error(i(200));return Pa(null,e,t,!0,o)},yt.hydrateRoot=function(e,t,o){if(!fc(e))throw Error(i(405));var l=o!=null&&o.hydratedSources||null,u=!1,h="",g=hf;if(o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(g=o.onRecoverableError)),t=uf(t,null,e,1,o??null,u,!1,h,g),e[un]=t.current,Pi(e),l)for(e=0;e<l.length;e++)o=l[e],u=o._getVersion,u=u(o._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[o,u]:t.mutableSourceEagerHydrationData.push(o,u);return new Na(t)},yt.render=function(e,t,o){if(!Ra(t))throw Error(i(200));return Pa(null,e,t,!1,o)},yt.unmountComponentAtNode=function(e){if(!Ra(e))throw Error(i(40));return e._reactRootContainer?(hr(function(){Pa(null,null,e,!1,function(){e._reactRootContainer=null,e[un]=null})}),!0):!1},yt.unstable_batchedUpdates=ic,yt.unstable_renderSubtreeIntoContainer=function(e,t,o,l){if(!Ra(o))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return Pa(e,t,o,!1,l)},yt.version="18.3.1-next-f1338f8080-20240426",yt}var kf;function op(){if(kf)return gc.exports;kf=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(n){console.error(n)}}return r(),gc.exports=iv(),gc.exports}var xf;function ov(){if(xf)return La;xf=1;var r=op();return La.createRoot=r.createRoot,La.hydrateRoot=r.hydrateRoot,La}var av=ov();function sv(r,n){if(r instanceof RegExp)return{keys:!1,pattern:r};var i,a,s,c,d=[],f="",p=r.split("/");for(p[0]||p.shift();s=p.shift();)i=s[0],i==="*"?(d.push(i),f+=s[1]==="?"?"(?:/(.*))?":"/(.*)"):i===":"?(a=s.indexOf("?",1),c=s.indexOf(".",1),d.push(s.substring(1,~a?a:~c?c:s.length)),f+=~a&&!~c?"(?:/([^/]+?))?":"/([^/]+?)",~c&&(f+=(~a?"?":"")+"\\"+s.substring(c))):f+="/"+s;return{keys:d,pattern:new RegExp("^"+f+(n?"(?=$|/)":"/?$"),"i")}}var _=is();const Gn=ip(_),lv=Jy({__proto__:null,default:Gn},[_]);var wc={exports:{}},bc={};var Tf;function cv(){if(Tf)return bc;Tf=1;var r=is();function n(b,x){return b===x&&(b!==0||1/b===1/x)||b!==b&&x!==x}var i=typeof Object.is=="function"?Object.is:n,a=r.useState,s=r.useEffect,c=r.useLayoutEffect,d=r.useDebugValue;function f(b,x){var E=x(),N=a({inst:{value:E,getSnapshot:x}}),A=N[0].inst,I=N[1];return c(function(){A.value=E,A.getSnapshot=x,p(A)&&I({inst:A})},[b,E,x]),s(function(){return p(A)&&I({inst:A}),b(function(){p(A)&&I({inst:A})})},[b]),d(E),E}function p(b){var x=b.getSnapshot;b=b.value;try{var E=x();return!i(b,E)}catch{return!0}}function m(b,x){return x()}var v=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?m:f;return bc.useSyncExternalStore=r.useSyncExternalStore!==void 0?r.useSyncExternalStore:v,bc}var _f;function uv(){return _f||(_f=1,wc.exports=cv()),wc.exports}var dv=uv();const hv=lv.useInsertionEffect,fv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",pv=fv?_.useLayoutEffect:_.useEffect,mv=hv||pv,ap=r=>{const n=_.useRef([r,(...i)=>n[0](...i)]).current;return mv(()=>{n[0]=r}),n[1]},gv="popstate",Uc="pushState",Vc="replaceState",yv="hashchange",Sf=[gv,Uc,Vc,yv],vv=r=>{for(const n of Sf)addEventListener(n,r);return()=>{for(const n of Sf)removeEventListener(n,r)}},sp=(r,n)=>dv.useSyncExternalStore(vv,r,n),wv=()=>location.search,bv=({ssrSearch:r=""}={})=>sp(wv,()=>r),If=()=>location.pathname,kv=({ssrPath:r}={})=>sp(If,r?()=>r:If),xv=(r,{replace:n=!1,state:i=null}={})=>history[n?Vc:Uc](i,"",r),Tv=(r={})=>[kv(r),xv],Af=Symbol.for("wouter_v3");if(typeof history<"u"&&typeof window[Af]>"u"){for(const r of[Uc,Vc]){const n=history[r];history[r]=function(){const i=n.apply(this,arguments),a=new Event(r);return a.arguments=arguments,dispatchEvent(a),i}}Object.defineProperty(window,Af,{value:!0})}const _v=(r,n)=>n.toLowerCase().indexOf(r.toLowerCase())?"~"+n:n.slice(r.length)||"/",lp=(r="")=>r==="/"?"":r,Sv=(r,n)=>r[0]==="~"?r.slice(1):lp(n)+r,Iv=(r="",n)=>_v(Cf(lp(r)),Cf(n)),Cf=r=>{try{return decodeURI(r)}catch{return r}},cp={hook:Tv,searchHook:bv,parser:sv,base:"",ssrPath:void 0,ssrSearch:void 0,hrefs:r=>r},up=_.createContext(cp),xo=()=>_.useContext(up),dp={},hp=_.createContext(dp),os=()=>_.useContext(hp),as=r=>{const[n,i]=r.hook(r);return[Iv(r.base,n),ap((a,s)=>i(Sv(a,r.base),s))]},Av=()=>as(xo()),fp=(r,n,i,a)=>{const{pattern:s,keys:c}=n instanceof RegExp?{keys:!1,pattern:n}:r(n||"*",a),d=s.exec(i)||[],[f,...p]=d;return f!==void 0?[!0,(()=>{const m=c!==!1?Object.fromEntries(c.map((b,x)=>[b,p[x]])):d.groups;let v={...p};return m&&Object.assign(v,m),v})(),...a?[f]:[]]:[!1,null]},Cv=({children:r,...n})=>{const i=xo(),a=n.hook?cp:i;let s=a;const[c,d]=n.ssrPath?.split("?")??[];d&&(n.ssrSearch=d,n.ssrPath=c),n.hrefs=n.hrefs??n.hook?.hrefs;let f=_.useRef({}),p=f.current,m=p;for(let v in a){const b=v==="base"?a[v]+(n[v]||""):n[v]||a[v];p===m&&b!==m[v]&&(f.current=m={...m}),m[v]=b,b!==a[v]&&(s=m)}return _.createElement(up.Provider,{value:s,children:r})},Ef=({children:r,component:n},i)=>n?_.createElement(n,{params:i}):typeof r=="function"?r(i):r,Ev=r=>{let n=_.useRef(dp),i=n.current;for(const a in r)r[a]!==i[a]&&(i=r);return Object.keys(r).length===0&&(i=r),n.current=i},Bt=({path:r,nest:n,match:i,...a})=>{const s=xo(),[c]=as(s),[d,f,p]=i??fp(s.parser,r,c,n),m=Ev({...os(),...f});if(!d)return null;const v=p?_.createElement(Cv,{base:p},Ef(a,m)):Ef(a,m);return _.createElement(hp.Provider,{value:m,children:v})},Ke=_.forwardRef((r,n)=>{const i=xo(),[a,s]=as(i),{to:c="",href:d=c,onClick:f,asChild:p,children:m,className:v,replace:b,state:x,...E}=r,N=ap(I=>{I.ctrlKey||I.metaKey||I.altKey||I.shiftKey||I.button!==0||(f?.(I),I.defaultPrevented||(I.preventDefault(),s(d,r)))}),A=i.hrefs(d[0]==="~"?d.slice(1):i.base+d,i);return p&&_.isValidElement(m)?_.cloneElement(m,{onClick:N,href:A}):_.createElement("a",{...E,onClick:N,href:A,className:v?.call?v(a===d):v,children:m,ref:n})}),pp=r=>Array.isArray(r)?r.flatMap(n=>pp(n&&n.type===_.Fragment?n.props.children:n)):[r],jv=({children:r,location:n})=>{const i=xo(),[a]=as(i);for(const s of pp(r)){let c=0;if(_.isValidElement(s)&&(c=fp(i.parser,s.props.path,n||a,s.props.nest))[0])return _.cloneElement(s,{match:c})}return null},Nv=1,Rv=1e6;let kc=0;function Pv(){return kc=(kc+1)%Number.MAX_SAFE_INTEGER,kc.toString()}const xc=new Map,jf=r=>{if(xc.has(r))return;const n=setTimeout(()=>{xc.delete(r),oo({type:"REMOVE_TOAST",toastId:r})},Rv);xc.set(r,n)},zv=(r,n)=>{switch(n.type){case"ADD_TOAST":return{...r,toasts:[n.toast,...r.toasts].slice(0,Nv)};case"UPDATE_TOAST":return{...r,toasts:r.toasts.map(i=>i.id===n.toast.id?{...i,...n.toast}:i)};case"DISMISS_TOAST":{const{toastId:i}=n;return i?jf(i):r.toasts.forEach(a=>{jf(a.id)}),{...r,toasts:r.toasts.map(a=>a.id===i||i===void 0?{...a,open:!1}:a)}}case"REMOVE_TOAST":return n.toastId===void 0?{...r,toasts:[]}:{...r,toasts:r.toasts.filter(i=>i.id!==n.toastId)}}},Ba=[];let Da={toasts:[]};function oo(r){Da=zv(Da,r),Ba.forEach(n=>{n(Da)})}function Lv({...r}){const n=Pv(),i=s=>oo({type:"UPDATE_TOAST",toast:{...s,id:n}}),a=()=>oo({type:"DISMISS_TOAST",toastId:n});return oo({type:"ADD_TOAST",toast:{...r,id:n,open:!0,onOpenChange:s=>{s||a()}}}),{id:n,dismiss:a,update:i}}function Wv(){const[r,n]=_.useState(Da);return _.useEffect(()=>(Ba.push(n),()=>{const i=Ba.indexOf(n);i>-1&&Ba.splice(i,1)}),[r]),{...r,toast:Lv,dismiss:i=>oo({type:"DISMISS_TOAST",toastId:i})}}var ss=op();const Mv=ip(ss);function Ze(r,n,{checkForDefaultPrevented:i=!0}={}){return function(s){if(r?.(s),i===!1||!s.defaultPrevented)return n?.(s)}}function Nf(r,n){if(typeof r=="function")return r(n);r!=null&&(r.current=n)}function mp(...r){return n=>{let i=!1;const a=r.map(s=>{const c=Nf(s,n);return!i&&typeof c=="function"&&(i=!0),c});if(i)return()=>{for(let s=0;s<a.length;s++){const c=a[s];typeof c=="function"?c():Nf(r[s],null)}}}}function Ut(...r){return _.useCallback(mp(...r),r)}function ls(r,n=[]){let i=[];function a(c,d){const f=_.createContext(d),p=i.length;i=[...i,d];const m=b=>{const{scope:x,children:E,...N}=b,A=x?.[r]?.[p]||f,I=_.useMemo(()=>N,Object.values(N));return y.jsx(A.Provider,{value:I,children:E})};m.displayName=c+"Provider";function v(b,x){const E=x?.[r]?.[p]||f,N=_.useContext(E);if(N)return N;if(d!==void 0)return d;throw new Error(`\`${b}\` must be used within \`${c}\``)}return[m,v]}const s=()=>{const c=i.map(d=>_.createContext(d));return function(f){const p=f?.[r]||c;return _.useMemo(()=>({[`__scope${r}`]:{...f,[r]:p}}),[f,p])}};return s.scopeName=r,[a,Ov(s,...n)]}function Ov(...r){const n=r[0];if(r.length===1)return n;const i=()=>{const a=r.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(c){const d=a.reduce((f,{useScope:p,scopeName:m})=>{const b=p(c)[`__scope${m}`];return{...f,...b}},{});return _.useMemo(()=>({[`__scope${n.scopeName}`]:d}),[d])}};return i.scopeName=n.scopeName,i}function Cc(r){const n=Fv(r),i=_.forwardRef((a,s)=>{const{children:c,...d}=a,f=_.Children.toArray(c),p=f.find(Dv);if(p){const m=p.props.children,v=f.map(b=>b===p?_.Children.count(m)>1?_.Children.only(null):_.isValidElement(m)?m.props.children:null:b);return y.jsx(n,{...d,ref:s,children:_.isValidElement(m)?_.cloneElement(m,void 0,v):null})}return y.jsx(n,{...d,ref:s,children:c})});return i.displayName=`${r}.Slot`,i}function Fv(r){const n=_.forwardRef((i,a)=>{const{children:s,...c}=i;if(_.isValidElement(s)){const d=qv(s),f=$v(c,s.props);return s.type!==_.Fragment&&(f.ref=a?mp(a,d):d),_.cloneElement(s,f)}return _.Children.count(s)>1?_.Children.only(null):null});return n.displayName=`${r}.SlotClone`,n}var gp=Symbol("radix.slottable");function Bv(r){const n=({children:i})=>y.jsx(y.Fragment,{children:i});return n.displayName=`${r}.Slottable`,n.__radixId=gp,n}function Dv(r){return _.isValidElement(r)&&typeof r.type=="function"&&"__radixId"in r.type&&r.type.__radixId===gp}function $v(r,n){const i={...n};for(const a in n){const s=r[a],c=n[a];/^on[A-Z]/.test(a)?s&&c?i[a]=(...f)=>{c(...f),s(...f)}:s&&(i[a]=s):a==="style"?i[a]={...s,...c}:a==="className"&&(i[a]=[s,c].filter(Boolean).join(" "))}return{...r,...i}}function qv(r){let n=Object.getOwnPropertyDescriptor(r.props,"ref")?.get,i=n&&"isReactWarning"in n&&n.isReactWarning;return i?r.ref:(n=Object.getOwnPropertyDescriptor(r,"ref")?.get,i=n&&"isReactWarning"in n&&n.isReactWarning,i?r.props.ref:r.props.ref||r.ref)}function Hv(r){const n=r+"CollectionProvider",[i,a]=ls(n),[s,c]=i(n,{collectionRef:{current:null},itemMap:new Map}),d=A=>{const{scope:I,children:W}=A,O=Gn.useRef(null),D=Gn.useRef(new Map).current;return y.jsx(s,{scope:I,itemMap:D,collectionRef:O,children:W})};d.displayName=n;const f=r+"CollectionSlot",p=Cc(f),m=Gn.forwardRef((A,I)=>{const{scope:W,children:O}=A,D=c(f,W),$=Ut(I,D.collectionRef);return y.jsx(p,{ref:$,children:O})});m.displayName=f;const v=r+"CollectionItemSlot",b="data-radix-collection-item",x=Cc(v),E=Gn.forwardRef((A,I)=>{const{scope:W,children:O,...D}=A,$=Gn.useRef(null),U=Ut(I,$),Z=c(v,W);return Gn.useEffect(()=>(Z.itemMap.set($,{ref:$,...D}),()=>{Z.itemMap.delete($)})),y.jsx(x,{[b]:"",ref:U,children:O})});E.displayName=v;function N(A){const I=c(r+"CollectionConsumer",A);return Gn.useCallback(()=>{const O=I.collectionRef.current;if(!O)return[];const D=Array.from(O.querySelectorAll(`[${b}]`));return Array.from(I.itemMap.values()).sort((Z,K)=>D.indexOf(Z.ref.current)-D.indexOf(K.ref.current))},[I.collectionRef,I.itemMap])}return[{Provider:d,Slot:m,ItemSlot:E},N,a]}var Uv=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],vt=Uv.reduce((r,n)=>{const i=Cc(`Primitive.${n}`),a=_.forwardRef((s,c)=>{const{asChild:d,...f}=s,p=d?i:n;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),y.jsx(p,{...f,ref:c})});return a.displayName=`Primitive.${n}`,{...r,[n]:a}},{});function yp(r,n){r&&ss.flushSync(()=>r.dispatchEvent(n))}function nn(r){const n=_.useRef(r);return _.useEffect(()=>{n.current=r}),_.useMemo(()=>(...i)=>n.current?.(...i),[])}function Vv(r,n=globalThis?.document){const i=nn(r);_.useEffect(()=>{const a=s=>{s.key==="Escape"&&i(s)};return n.addEventListener("keydown",a,{capture:!0}),()=>n.removeEventListener("keydown",a,{capture:!0})},[i,n])}var Gv="DismissableLayer",Ec="dismissableLayer.update",Yv="dismissableLayer.pointerDownOutside",Zv="dismissableLayer.focusOutside",Rf,vp=_.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Gc=_.forwardRef((r,n)=>{const{disableOutsidePointerEvents:i=!1,onEscapeKeyDown:a,onPointerDownOutside:s,onFocusOutside:c,onInteractOutside:d,onDismiss:f,...p}=r,m=_.useContext(vp),[v,b]=_.useState(null),x=v?.ownerDocument??globalThis?.document,[,E]=_.useState({}),N=Ut(n,K=>b(K)),A=Array.from(m.layers),[I]=[...m.layersWithOutsidePointerEventsDisabled].slice(-1),W=A.indexOf(I),O=v?A.indexOf(v):-1,D=m.layersWithOutsidePointerEventsDisabled.size>0,$=O>=W,U=Qv(K=>{const fe=K.target,ke=[...m.branches].some(ye=>ye.contains(fe));!$||ke||(s?.(K),d?.(K),K.defaultPrevented||f?.())},x),Z=Jv(K=>{const fe=K.target;[...m.branches].some(ye=>ye.contains(fe))||(c?.(K),d?.(K),K.defaultPrevented||f?.())},x);return Vv(K=>{O===m.layers.size-1&&(a?.(K),!K.defaultPrevented&&f&&(K.preventDefault(),f()))},x),_.useEffect(()=>{if(v)return i&&(m.layersWithOutsidePointerEventsDisabled.size===0&&(Rf=x.body.style.pointerEvents,x.body.style.pointerEvents="none"),m.layersWithOutsidePointerEventsDisabled.add(v)),m.layers.add(v),Pf(),()=>{i&&m.layersWithOutsidePointerEventsDisabled.size===1&&(x.body.style.pointerEvents=Rf)}},[v,x,i,m]),_.useEffect(()=>()=>{v&&(m.layers.delete(v),m.layersWithOutsidePointerEventsDisabled.delete(v),Pf())},[v,m]),_.useEffect(()=>{const K=()=>E({});return document.addEventListener(Ec,K),()=>document.removeEventListener(Ec,K)},[]),y.jsx(vt.div,{...p,ref:N,style:{pointerEvents:D?$?"auto":"none":void 0,...r.style},onFocusCapture:Ze(r.onFocusCapture,Z.onFocusCapture),onBlurCapture:Ze(r.onBlurCapture,Z.onBlurCapture),onPointerDownCapture:Ze(r.onPointerDownCapture,U.onPointerDownCapture)})});Gc.displayName=Gv;var Kv="DismissableLayerBranch",wp=_.forwardRef((r,n)=>{const i=_.useContext(vp),a=_.useRef(null),s=Ut(n,a);return _.useEffect(()=>{const c=a.current;if(c)return i.branches.add(c),()=>{i.branches.delete(c)}},[i.branches]),y.jsx(vt.div,{...r,ref:s})});wp.displayName=Kv;function Qv(r,n=globalThis?.document){const i=nn(r),a=_.useRef(!1),s=_.useRef(()=>{});return _.useEffect(()=>{const c=f=>{if(f.target&&!a.current){let p=function(){bp(Yv,i,m,{discrete:!0})};const m={originalEvent:f};f.pointerType==="touch"?(n.removeEventListener("click",s.current),s.current=p,n.addEventListener("click",s.current,{once:!0})):p()}else n.removeEventListener("click",s.current);a.current=!1},d=window.setTimeout(()=>{n.addEventListener("pointerdown",c)},0);return()=>{window.clearTimeout(d),n.removeEventListener("pointerdown",c),n.removeEventListener("click",s.current)}},[n,i]),{onPointerDownCapture:()=>a.current=!0}}function Jv(r,n=globalThis?.document){const i=nn(r),a=_.useRef(!1);return _.useEffect(()=>{const s=c=>{c.target&&!a.current&&bp(Zv,i,{originalEvent:c},{discrete:!1})};return n.addEventListener("focusin",s),()=>n.removeEventListener("focusin",s)},[n,i]),{onFocusCapture:()=>a.current=!0,onBlurCapture:()=>a.current=!1}}function Pf(){const r=new CustomEvent(Ec);document.dispatchEvent(r)}function bp(r,n,i,{discrete:a}){const s=i.originalEvent.target,c=new CustomEvent(r,{bubbles:!1,cancelable:!0,detail:i});n&&s.addEventListener(r,n,{once:!0}),a?yp(s,c):s.dispatchEvent(c)}var Xv=Gc,ew=wp,wr=globalThis?.document?_.useLayoutEffect:()=>{},tw="Portal",kp=_.forwardRef((r,n)=>{const{container:i,...a}=r,[s,c]=_.useState(!1);wr(()=>c(!0),[]);const d=i||s&&globalThis?.document?.body;return d?Mv.createPortal(y.jsx(vt.div,{...a,ref:n}),d):null});kp.displayName=tw;function nw(r,n){return _.useReducer((i,a)=>n[i][a]??i,r)}var Yc=r=>{const{present:n,children:i}=r,a=rw(n),s=typeof i=="function"?i({present:a.isPresent}):_.Children.only(i),c=Ut(a.ref,iw(s));return typeof i=="function"||a.isPresent?_.cloneElement(s,{ref:c}):null};Yc.displayName="Presence";function rw(r){const[n,i]=_.useState(),a=_.useRef({}),s=_.useRef(r),c=_.useRef("none"),d=r?"mounted":"unmounted",[f,p]=nw(d,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return _.useEffect(()=>{const m=Wa(a.current);c.current=f==="mounted"?m:"none"},[f]),wr(()=>{const m=a.current,v=s.current;if(v!==r){const x=c.current,E=Wa(m);r?p("MOUNT"):E==="none"||m?.display==="none"?p("UNMOUNT"):p(v&&x!==E?"ANIMATION_OUT":"UNMOUNT"),s.current=r}},[r,p]),wr(()=>{if(n){let m;const v=n.ownerDocument.defaultView??window,b=E=>{const A=Wa(a.current).includes(E.animationName);if(E.target===n&&A&&(p("ANIMATION_END"),!s.current)){const I=n.style.animationFillMode;n.style.animationFillMode="forwards",m=v.setTimeout(()=>{n.style.animationFillMode==="forwards"&&(n.style.animationFillMode=I)})}},x=E=>{E.target===n&&(c.current=Wa(a.current))};return n.addEventListener("animationstart",x),n.addEventListener("animationcancel",b),n.addEventListener("animationend",b),()=>{v.clearTimeout(m),n.removeEventListener("animationstart",x),n.removeEventListener("animationcancel",b),n.removeEventListener("animationend",b)}}else p("ANIMATION_END")},[n,p]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:_.useCallback(m=>{m&&(a.current=getComputedStyle(m)),i(m)},[])}}function Wa(r){return r?.animationName||"none"}function iw(r){let n=Object.getOwnPropertyDescriptor(r.props,"ref")?.get,i=n&&"isReactWarning"in n&&n.isReactWarning;return i?r.ref:(n=Object.getOwnPropertyDescriptor(r,"ref")?.get,i=n&&"isReactWarning"in n&&n.isReactWarning,i?r.props.ref:r.props.ref||r.ref)}function ow({prop:r,defaultProp:n,onChange:i=()=>{}}){const[a,s]=aw({defaultProp:n,onChange:i}),c=r!==void 0,d=c?r:a,f=nn(i),p=_.useCallback(m=>{if(c){const b=typeof m=="function"?m(r):m;b!==r&&f(b)}else s(m)},[c,r,s,f]);return[d,p]}function aw({defaultProp:r,onChange:n}){const i=_.useState(r),[a]=i,s=_.useRef(a),c=nn(n);return _.useEffect(()=>{s.current!==a&&(c(a),s.current=a)},[a,s,c]),i}var sw="VisuallyHidden",cs=_.forwardRef((r,n)=>y.jsx(vt.span,{...r,ref:n,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...r.style}}));cs.displayName=sw;var lw=cs,Zc="ToastProvider",[Kc,cw,uw]=Hv("Toast"),[xp]=ls("Toast",[uw]),[dw,us]=xp(Zc),Tp=r=>{const{__scopeToast:n,label:i="Notification",duration:a=5e3,swipeDirection:s="right",swipeThreshold:c=50,children:d}=r,[f,p]=_.useState(null),[m,v]=_.useState(0),b=_.useRef(!1),x=_.useRef(!1);return i.trim()||console.error(`Invalid prop \`label\` supplied to \`${Zc}\`. Expected non-empty \`string\`.`),y.jsx(Kc.Provider,{scope:n,children:y.jsx(dw,{scope:n,label:i,duration:a,swipeDirection:s,swipeThreshold:c,toastCount:m,viewport:f,onViewportChange:p,onToastAdd:_.useCallback(()=>v(E=>E+1),[]),onToastRemove:_.useCallback(()=>v(E=>E-1),[]),isFocusedToastEscapeKeyDownRef:b,isClosePausedRef:x,children:d})})};Tp.displayName=Zc;var _p="ToastViewport",hw=["F8"],jc="toast.viewportPause",Nc="toast.viewportResume",Sp=_.forwardRef((r,n)=>{const{__scopeToast:i,hotkey:a=hw,label:s="Notifications ({hotkey})",...c}=r,d=us(_p,i),f=cw(i),p=_.useRef(null),m=_.useRef(null),v=_.useRef(null),b=_.useRef(null),x=Ut(n,b,d.onViewportChange),E=a.join("+").replace(/Key/g,"").replace(/Digit/g,""),N=d.toastCount>0;_.useEffect(()=>{const I=W=>{a.length!==0&&a.every(D=>W[D]||W.code===D)&&b.current?.focus()};return document.addEventListener("keydown",I),()=>document.removeEventListener("keydown",I)},[a]),_.useEffect(()=>{const I=p.current,W=b.current;if(N&&I&&W){const O=()=>{if(!d.isClosePausedRef.current){const Z=new CustomEvent(jc);W.dispatchEvent(Z),d.isClosePausedRef.current=!0}},D=()=>{if(d.isClosePausedRef.current){const Z=new CustomEvent(Nc);W.dispatchEvent(Z),d.isClosePausedRef.current=!1}},$=Z=>{!I.contains(Z.relatedTarget)&&D()},U=()=>{I.contains(document.activeElement)||D()};return I.addEventListener("focusin",O),I.addEventListener("focusout",$),I.addEventListener("pointermove",O),I.addEventListener("pointerleave",U),window.addEventListener("blur",O),window.addEventListener("focus",D),()=>{I.removeEventListener("focusin",O),I.removeEventListener("focusout",$),I.removeEventListener("pointermove",O),I.removeEventListener("pointerleave",U),window.removeEventListener("blur",O),window.removeEventListener("focus",D)}}},[N,d.isClosePausedRef]);const A=_.useCallback(({tabbingDirection:I})=>{const O=f().map(D=>{const $=D.ref.current,U=[$,...Sw($)];return I==="forwards"?U:U.reverse()});return(I==="forwards"?O.reverse():O).flat()},[f]);return _.useEffect(()=>{const I=b.current;if(I){const W=O=>{const D=O.altKey||O.ctrlKey||O.metaKey;if(O.key==="Tab"&&!D){const U=document.activeElement,Z=O.shiftKey;if(O.target===I&&Z){m.current?.focus();return}const ke=A({tabbingDirection:Z?"backwards":"forwards"}),ye=ke.findIndex(Te=>Te===U);Tc(ke.slice(ye+1))?O.preventDefault():Z?m.current?.focus():v.current?.focus()}};return I.addEventListener("keydown",W),()=>I.removeEventListener("keydown",W)}},[f,A]),y.jsxs(ew,{ref:p,role:"region","aria-label":s.replace("{hotkey}",E),tabIndex:-1,style:{pointerEvents:N?void 0:"none"},children:[N&&y.jsx(Rc,{ref:m,onFocusFromOutsideViewport:()=>{const I=A({tabbingDirection:"forwards"});Tc(I)}}),y.jsx(Kc.Slot,{scope:i,children:y.jsx(vt.ol,{tabIndex:-1,...c,ref:x})}),N&&y.jsx(Rc,{ref:v,onFocusFromOutsideViewport:()=>{const I=A({tabbingDirection:"backwards"});Tc(I)}})]})});Sp.displayName=_p;var Ip="ToastFocusProxy",Rc=_.forwardRef((r,n)=>{const{__scopeToast:i,onFocusFromOutsideViewport:a,...s}=r,c=us(Ip,i);return y.jsx(cs,{"aria-hidden":!0,tabIndex:0,...s,ref:n,style:{position:"fixed"},onFocus:d=>{const f=d.relatedTarget;!c.viewport?.contains(f)&&a()}})});Rc.displayName=Ip;var ds="Toast",fw="toast.swipeStart",pw="toast.swipeMove",mw="toast.swipeCancel",gw="toast.swipeEnd",Ap=_.forwardRef((r,n)=>{const{forceMount:i,open:a,defaultOpen:s,onOpenChange:c,...d}=r,[f=!0,p]=ow({prop:a,defaultProp:s,onChange:c});return y.jsx(Yc,{present:i||f,children:y.jsx(ww,{open:f,...d,ref:n,onClose:()=>p(!1),onPause:nn(r.onPause),onResume:nn(r.onResume),onSwipeStart:Ze(r.onSwipeStart,m=>{m.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:Ze(r.onSwipeMove,m=>{const{x:v,y:b}=m.detail.delta;m.currentTarget.setAttribute("data-swipe","move"),m.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${v}px`),m.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${b}px`)}),onSwipeCancel:Ze(r.onSwipeCancel,m=>{m.currentTarget.setAttribute("data-swipe","cancel"),m.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),m.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),m.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),m.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:Ze(r.onSwipeEnd,m=>{const{x:v,y:b}=m.detail.delta;m.currentTarget.setAttribute("data-swipe","end"),m.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),m.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),m.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${v}px`),m.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${b}px`),p(!1)})})})});Ap.displayName=ds;var[yw,vw]=xp(ds,{onClose(){}}),ww=_.forwardRef((r,n)=>{const{__scopeToast:i,type:a="foreground",duration:s,open:c,onClose:d,onEscapeKeyDown:f,onPause:p,onResume:m,onSwipeStart:v,onSwipeMove:b,onSwipeCancel:x,onSwipeEnd:E,...N}=r,A=us(ds,i),[I,W]=_.useState(null),O=Ut(n,Y=>W(Y)),D=_.useRef(null),$=_.useRef(null),U=s||A.duration,Z=_.useRef(0),K=_.useRef(U),fe=_.useRef(0),{onToastAdd:ke,onToastRemove:ye}=A,Te=nn(()=>{I?.contains(document.activeElement)&&A.viewport?.focus(),d()}),ie=_.useCallback(Y=>{!Y||Y===1/0||(window.clearTimeout(fe.current),Z.current=new Date().getTime(),fe.current=window.setTimeout(Te,Y))},[Te]);_.useEffect(()=>{const Y=A.viewport;if(Y){const xe=()=>{ie(K.current),m?.()},ce=()=>{const se=new Date().getTime()-Z.current;K.current=K.current-se,window.clearTimeout(fe.current),p?.()};return Y.addEventListener(jc,ce),Y.addEventListener(Nc,xe),()=>{Y.removeEventListener(jc,ce),Y.removeEventListener(Nc,xe)}}},[A.viewport,U,p,m,ie]),_.useEffect(()=>{c&&!A.isClosePausedRef.current&&ie(U)},[c,U,A.isClosePausedRef,ie]),_.useEffect(()=>(ke(),()=>ye()),[ke,ye]);const we=_.useMemo(()=>I?zp(I):null,[I]);return A.viewport?y.jsxs(y.Fragment,{children:[we&&y.jsx(bw,{__scopeToast:i,role:"status","aria-live":a==="foreground"?"assertive":"polite","aria-atomic":!0,children:we}),y.jsx(yw,{scope:i,onClose:Te,children:ss.createPortal(y.jsx(Kc.ItemSlot,{scope:i,children:y.jsx(Xv,{asChild:!0,onEscapeKeyDown:Ze(f,()=>{A.isFocusedToastEscapeKeyDownRef.current||Te(),A.isFocusedToastEscapeKeyDownRef.current=!1}),children:y.jsx(vt.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":c?"open":"closed","data-swipe-direction":A.swipeDirection,...N,ref:O,style:{userSelect:"none",touchAction:"none",...r.style},onKeyDown:Ze(r.onKeyDown,Y=>{Y.key==="Escape"&&(f?.(Y.nativeEvent),Y.nativeEvent.defaultPrevented||(A.isFocusedToastEscapeKeyDownRef.current=!0,Te()))}),onPointerDown:Ze(r.onPointerDown,Y=>{Y.button===0&&(D.current={x:Y.clientX,y:Y.clientY})}),onPointerMove:Ze(r.onPointerMove,Y=>{if(!D.current)return;const xe=Y.clientX-D.current.x,ce=Y.clientY-D.current.y,se=!!$.current,P=["left","right"].includes(A.swipeDirection),V=["left","up"].includes(A.swipeDirection)?Math.min:Math.max,H=P?V(0,xe):0,S=P?0:V(0,ce),z=Y.pointerType==="touch"?10:2,he={x:H,y:S},pe={originalEvent:Y,delta:he};se?($.current=he,Ma(pw,b,pe,{discrete:!1})):zf(he,A.swipeDirection,z)?($.current=he,Ma(fw,v,pe,{discrete:!1}),Y.target.setPointerCapture(Y.pointerId)):(Math.abs(xe)>z||Math.abs(ce)>z)&&(D.current=null)}),onPointerUp:Ze(r.onPointerUp,Y=>{const xe=$.current,ce=Y.target;if(ce.hasPointerCapture(Y.pointerId)&&ce.releasePointerCapture(Y.pointerId),$.current=null,D.current=null,xe){const se=Y.currentTarget,P={originalEvent:Y,delta:xe};zf(xe,A.swipeDirection,A.swipeThreshold)?Ma(gw,E,P,{discrete:!0}):Ma(mw,x,P,{discrete:!0}),se.addEventListener("click",V=>V.preventDefault(),{once:!0})}})})})}),A.viewport)})]}):null}),bw=r=>{const{__scopeToast:n,children:i,...a}=r,s=us(ds,n),[c,d]=_.useState(!1),[f,p]=_.useState(!1);return Tw(()=>d(!0)),_.useEffect(()=>{const m=window.setTimeout(()=>p(!0),1e3);return()=>window.clearTimeout(m)},[]),f?null:y.jsx(kp,{asChild:!0,children:y.jsx(cs,{...a,children:c&&y.jsxs(y.Fragment,{children:[s.label," ",i]})})})},kw="ToastTitle",Cp=_.forwardRef((r,n)=>{const{__scopeToast:i,...a}=r;return y.jsx(vt.div,{...a,ref:n})});Cp.displayName=kw;var xw="ToastDescription",Ep=_.forwardRef((r,n)=>{const{__scopeToast:i,...a}=r;return y.jsx(vt.div,{...a,ref:n})});Ep.displayName=xw;var jp="ToastAction",Np=_.forwardRef((r,n)=>{const{altText:i,...a}=r;return i.trim()?y.jsx(Pp,{altText:i,asChild:!0,children:y.jsx(Qc,{...a,ref:n})}):(console.error(`Invalid prop \`altText\` supplied to \`${jp}\`. Expected non-empty \`string\`.`),null)});Np.displayName=jp;var Rp="ToastClose",Qc=_.forwardRef((r,n)=>{const{__scopeToast:i,...a}=r,s=vw(Rp,i);return y.jsx(Pp,{asChild:!0,children:y.jsx(vt.button,{type:"button",...a,ref:n,onClick:Ze(r.onClick,s.onClose)})})});Qc.displayName=Rp;var Pp=_.forwardRef((r,n)=>{const{__scopeToast:i,altText:a,...s}=r;return y.jsx(vt.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":a||void 0,...s,ref:n})});function zp(r){const n=[];return Array.from(r.childNodes).forEach(a=>{if(a.nodeType===a.TEXT_NODE&&a.textContent&&n.push(a.textContent),_w(a)){const s=a.ariaHidden||a.hidden||a.style.display==="none",c=a.dataset.radixToastAnnounceExclude==="";if(!s)if(c){const d=a.dataset.radixToastAnnounceAlt;d&&n.push(d)}else n.push(...zp(a))}}),n}function Ma(r,n,i,{discrete:a}){const s=i.originalEvent.currentTarget,c=new CustomEvent(r,{bubbles:!0,cancelable:!0,detail:i});n&&s.addEventListener(r,n,{once:!0}),a?yp(s,c):s.dispatchEvent(c)}var zf=(r,n,i=0)=>{const a=Math.abs(r.x),s=Math.abs(r.y),c=a>s;return n==="left"||n==="right"?c&&a>i:!c&&s>i};function Tw(r=()=>{}){const n=nn(r);wr(()=>{let i=0,a=0;return i=window.requestAnimationFrame(()=>a=window.requestAnimationFrame(n)),()=>{window.cancelAnimationFrame(i),window.cancelAnimationFrame(a)}},[n])}function _w(r){return r.nodeType===r.ELEMENT_NODE}function Sw(r){const n=[],i=document.createTreeWalker(r,NodeFilter.SHOW_ELEMENT,{acceptNode:a=>{const s=a.tagName==="INPUT"&&a.type==="hidden";return a.disabled||a.hidden||s?NodeFilter.FILTER_SKIP:a.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;i.nextNode();)n.push(i.currentNode);return n}function Tc(r){const n=document.activeElement;return r.some(i=>i===n?!0:(i.focus(),document.activeElement!==n))}var Iw=Tp,Lp=Sp,Wp=Ap,Mp=Cp,Op=Ep,Fp=Np,Bp=Qc;function Dp(r){var n,i,a="";if(typeof r=="string"||typeof r=="number")a+=r;else if(typeof r=="object")if(Array.isArray(r)){var s=r.length;for(n=0;n<s;n++)r[n]&&(i=Dp(r[n]))&&(a&&(a+=" "),a+=i)}else for(i in r)r[i]&&(a&&(a+=" "),a+=i);return a}function $p(){for(var r,n,i=0,a="",s=arguments.length;i<s;i++)(r=arguments[i])&&(n=Dp(r))&&(a&&(a+=" "),a+=n);return a}const Lf=r=>typeof r=="boolean"?`${r}`:r===0?"0":r,Wf=$p,Aw=(r,n)=>i=>{var a;if(n?.variants==null)return Wf(r,i?.class,i?.className);const{variants:s,defaultVariants:c}=n,d=Object.keys(s).map(m=>{const v=i?.[m],b=c?.[m];if(v===null)return null;const x=Lf(v)||Lf(b);return s[m][x]}),f=i&&Object.entries(i).reduce((m,v)=>{let[b,x]=v;return x===void 0||(m[b]=x),m},{}),p=n==null||(a=n.compoundVariants)===null||a===void 0?void 0:a.reduce((m,v)=>{let{class:b,className:x,...E}=v;return Object.entries(E).every(N=>{let[A,I]=N;return Array.isArray(I)?I.includes({...c,...f}[A]):{...c,...f}[A]===I})?[...m,b,x]:m},[]);return Wf(r,d,p,i?.class,i?.className)};const Cw=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),qp=(...r)=>r.filter((n,i,a)=>!!n&&a.indexOf(n)===i).join(" ");var Ew={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const jw=_.forwardRef(({color:r="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:s="",children:c,iconNode:d,...f},p)=>_.createElement("svg",{ref:p,...Ew,width:n,height:n,stroke:r,strokeWidth:a?Number(i)*24/Number(n):i,className:qp("lucide",s),...f},[...d.map(([m,v])=>_.createElement(m,v)),...Array.isArray(c)?c:[c]]));const nr=(r,n)=>{const i=_.forwardRef(({className:a,...s},c)=>_.createElement(jw,{ref:c,iconNode:n,className:qp(`lucide-${Cw(r)}`,a),...s}));return i.displayName=`${r}`,i};const Jc=nr("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);const qa=nr("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);const Nw=nr("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);const Rw=nr("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);const Pw=nr("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);const zw=nr("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);const Lw=nr("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);const Hp=nr("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Xc="-",Ww=r=>{const n=Ow(r),{conflictingClassGroups:i,conflictingClassGroupModifiers:a}=r;return{getClassGroupId:d=>{const f=d.split(Xc);return f[0]===""&&f.length!==1&&f.shift(),Up(f,n)||Mw(d)},getConflictingClassGroupIds:(d,f)=>{const p=i[d]||[];return f&&a[d]?[...p,...a[d]]:p}}},Up=(r,n)=>{if(r.length===0)return n.classGroupId;const i=r[0],a=n.nextPart.get(i),s=a?Up(r.slice(1),a):void 0;if(s)return s;if(n.validators.length===0)return;const c=r.join(Xc);return n.validators.find(({validator:d})=>d(c))?.classGroupId},Mf=/^\[(.+)\]$/,Mw=r=>{if(Mf.test(r)){const n=Mf.exec(r)[1],i=n?.substring(0,n.indexOf(":"));if(i)return"arbitrary.."+i}},Ow=r=>{const{theme:n,prefix:i}=r,a={nextPart:new Map,validators:[]};return Bw(Object.entries(r.classGroups),i).forEach(([c,d])=>{Pc(d,a,c,n)}),a},Pc=(r,n,i,a)=>{r.forEach(s=>{if(typeof s=="string"){const c=s===""?n:Of(n,s);c.classGroupId=i;return}if(typeof s=="function"){if(Fw(s)){Pc(s(a),n,i,a);return}n.validators.push({validator:s,classGroupId:i});return}Object.entries(s).forEach(([c,d])=>{Pc(d,Of(n,c),i,a)})})},Of=(r,n)=>{let i=r;return n.split(Xc).forEach(a=>{i.nextPart.has(a)||i.nextPart.set(a,{nextPart:new Map,validators:[]}),i=i.nextPart.get(a)}),i},Fw=r=>r.isThemeGetter,Bw=(r,n)=>n?r.map(([i,a])=>{const s=a.map(c=>typeof c=="string"?n+c:typeof c=="object"?Object.fromEntries(Object.entries(c).map(([d,f])=>[n+d,f])):c);return[i,s]}):r,Dw=r=>{if(r<1)return{get:()=>{},set:()=>{}};let n=0,i=new Map,a=new Map;const s=(c,d)=>{i.set(c,d),n++,n>r&&(n=0,a=i,i=new Map)};return{get(c){let d=i.get(c);if(d!==void 0)return d;if((d=a.get(c))!==void 0)return s(c,d),d},set(c,d){i.has(c)?i.set(c,d):s(c,d)}}},Vp="!",$w=r=>{const{separator:n,experimentalParseClassName:i}=r,a=n.length===1,s=n[0],c=n.length,d=f=>{const p=[];let m=0,v=0,b;for(let I=0;I<f.length;I++){let W=f[I];if(m===0){if(W===s&&(a||f.slice(I,I+c)===n)){p.push(f.slice(v,I)),v=I+c;continue}if(W==="/"){b=I;continue}}W==="["?m++:W==="]"&&m--}const x=p.length===0?f:f.substring(v),E=x.startsWith(Vp),N=E?x.substring(1):x,A=b&&b>v?b-v:void 0;return{modifiers:p,hasImportantModifier:E,baseClassName:N,maybePostfixModifierPosition:A}};return i?f=>i({className:f,parseClassName:d}):d},qw=r=>{if(r.length<=1)return r;const n=[];let i=[];return r.forEach(a=>{a[0]==="["?(n.push(...i.sort(),a),i=[]):i.push(a)}),n.push(...i.sort()),n},Hw=r=>({cache:Dw(r.cacheSize),parseClassName:$w(r),...Ww(r)}),Uw=/\s+/,Vw=(r,n)=>{const{parseClassName:i,getClassGroupId:a,getConflictingClassGroupIds:s}=n,c=[],d=r.trim().split(Uw);let f="";for(let p=d.length-1;p>=0;p-=1){const m=d[p],{modifiers:v,hasImportantModifier:b,baseClassName:x,maybePostfixModifierPosition:E}=i(m);let N=!!E,A=a(N?x.substring(0,E):x);if(!A){if(!N){f=m+(f.length>0?" "+f:f);continue}if(A=a(x),!A){f=m+(f.length>0?" "+f:f);continue}N=!1}const I=qw(v).join(":"),W=b?I+Vp:I,O=W+A;if(c.includes(O))continue;c.push(O);const D=s(A,N);for(let $=0;$<D.length;++$){const U=D[$];c.push(W+U)}f=m+(f.length>0?" "+f:f)}return f};function Gw(){let r=0,n,i,a="";for(;r<arguments.length;)(n=arguments[r++])&&(i=Gp(n))&&(a&&(a+=" "),a+=i);return a}const Gp=r=>{if(typeof r=="string")return r;let n,i="";for(let a=0;a<r.length;a++)r[a]&&(n=Gp(r[a]))&&(i&&(i+=" "),i+=n);return i};function Yw(r,...n){let i,a,s,c=d;function d(p){const m=n.reduce((v,b)=>b(v),r());return i=Hw(m),a=i.cache.get,s=i.cache.set,c=f,f(p)}function f(p){const m=a(p);if(m)return m;const v=Vw(p,i);return s(p,v),v}return function(){return c(Gw.apply(null,arguments))}}const Oe=r=>{const n=i=>i[r]||[];return n.isThemeGetter=!0,n},Yp=/^\[(?:([a-z-]+):)?(.+)\]$/i,Zw=/^\d+\/\d+$/,Kw=new Set(["px","full","screen"]),Qw=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Jw=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Xw=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,eb=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,tb=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,vn=r=>ti(r)||Kw.has(r)||Zw.test(r),Un=r=>ci(r,"length",cb),ti=r=>!!r&&!Number.isNaN(Number(r)),_c=r=>ci(r,"number",ti),Ji=r=>!!r&&Number.isInteger(Number(r)),nb=r=>r.endsWith("%")&&ti(r.slice(0,-1)),ge=r=>Yp.test(r),Vn=r=>Qw.test(r),rb=new Set(["length","size","percentage"]),ib=r=>ci(r,rb,Zp),ob=r=>ci(r,"position",Zp),ab=new Set(["image","url"]),sb=r=>ci(r,ab,db),lb=r=>ci(r,"",ub),Xi=()=>!0,ci=(r,n,i)=>{const a=Yp.exec(r);return a?a[1]?typeof n=="string"?a[1]===n:n.has(a[1]):i(a[2]):!1},cb=r=>Jw.test(r)&&!Xw.test(r),Zp=()=>!1,ub=r=>eb.test(r),db=r=>tb.test(r),hb=()=>{const r=Oe("colors"),n=Oe("spacing"),i=Oe("blur"),a=Oe("brightness"),s=Oe("borderColor"),c=Oe("borderRadius"),d=Oe("borderSpacing"),f=Oe("borderWidth"),p=Oe("contrast"),m=Oe("grayscale"),v=Oe("hueRotate"),b=Oe("invert"),x=Oe("gap"),E=Oe("gradientColorStops"),N=Oe("gradientColorStopPositions"),A=Oe("inset"),I=Oe("margin"),W=Oe("opacity"),O=Oe("padding"),D=Oe("saturate"),$=Oe("scale"),U=Oe("sepia"),Z=Oe("skew"),K=Oe("space"),fe=Oe("translate"),ke=()=>["auto","contain","none"],ye=()=>["auto","hidden","clip","visible","scroll"],Te=()=>["auto",ge,n],ie=()=>[ge,n],we=()=>["",vn,Un],Y=()=>["auto",ti,ge],xe=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],ce=()=>["solid","dashed","dotted","double","none"],se=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],P=()=>["start","end","center","between","around","evenly","stretch"],V=()=>["","0",ge],H=()=>["auto","avoid","all","avoid-page","page","left","right","column"],S=()=>[ti,ge];return{cacheSize:500,separator:":",theme:{colors:[Xi],spacing:[vn,Un],blur:["none","",Vn,ge],brightness:S(),borderColor:[r],borderRadius:["none","","full",Vn,ge],borderSpacing:ie(),borderWidth:we(),contrast:S(),grayscale:V(),hueRotate:S(),invert:V(),gap:ie(),gradientColorStops:[r],gradientColorStopPositions:[nb,Un],inset:Te(),margin:Te(),opacity:S(),padding:ie(),saturate:S(),scale:S(),sepia:V(),skew:S(),space:ie(),translate:ie()},classGroups:{aspect:[{aspect:["auto","square","video",ge]}],container:["container"],columns:[{columns:[Vn]}],"break-after":[{"break-after":H()}],"break-before":[{"break-before":H()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...xe(),ge]}],overflow:[{overflow:ye()}],"overflow-x":[{"overflow-x":ye()}],"overflow-y":[{"overflow-y":ye()}],overscroll:[{overscroll:ke()}],"overscroll-x":[{"overscroll-x":ke()}],"overscroll-y":[{"overscroll-y":ke()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[A]}],"inset-x":[{"inset-x":[A]}],"inset-y":[{"inset-y":[A]}],start:[{start:[A]}],end:[{end:[A]}],top:[{top:[A]}],right:[{right:[A]}],bottom:[{bottom:[A]}],left:[{left:[A]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Ji,ge]}],basis:[{basis:Te()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",ge]}],grow:[{grow:V()}],shrink:[{shrink:V()}],order:[{order:["first","last","none",Ji,ge]}],"grid-cols":[{"grid-cols":[Xi]}],"col-start-end":[{col:["auto",{span:["full",Ji,ge]},ge]}],"col-start":[{"col-start":Y()}],"col-end":[{"col-end":Y()}],"grid-rows":[{"grid-rows":[Xi]}],"row-start-end":[{row:["auto",{span:[Ji,ge]},ge]}],"row-start":[{"row-start":Y()}],"row-end":[{"row-end":Y()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",ge]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",ge]}],gap:[{gap:[x]}],"gap-x":[{"gap-x":[x]}],"gap-y":[{"gap-y":[x]}],"justify-content":[{justify:["normal",...P()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...P(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...P(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[O]}],px:[{px:[O]}],py:[{py:[O]}],ps:[{ps:[O]}],pe:[{pe:[O]}],pt:[{pt:[O]}],pr:[{pr:[O]}],pb:[{pb:[O]}],pl:[{pl:[O]}],m:[{m:[I]}],mx:[{mx:[I]}],my:[{my:[I]}],ms:[{ms:[I]}],me:[{me:[I]}],mt:[{mt:[I]}],mr:[{mr:[I]}],mb:[{mb:[I]}],ml:[{ml:[I]}],"space-x":[{"space-x":[K]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[K]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",ge,n]}],"min-w":[{"min-w":[ge,n,"min","max","fit"]}],"max-w":[{"max-w":[ge,n,"none","full","min","max","fit","prose",{screen:[Vn]},Vn]}],h:[{h:[ge,n,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[ge,n,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[ge,n,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[ge,n,"auto","min","max","fit"]}],"font-size":[{text:["base",Vn,Un]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",_c]}],"font-family":[{font:[Xi]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",ge]}],"line-clamp":[{"line-clamp":["none",ti,_c]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",vn,ge]}],"list-image":[{"list-image":["none",ge]}],"list-style-type":[{list:["none","disc","decimal",ge]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[r]}],"placeholder-opacity":[{"placeholder-opacity":[W]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[r]}],"text-opacity":[{"text-opacity":[W]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ce(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",vn,Un]}],"underline-offset":[{"underline-offset":["auto",vn,ge]}],"text-decoration-color":[{decoration:[r]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:ie()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ge]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ge]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[W]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...xe(),ob]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",ib]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},sb]}],"bg-color":[{bg:[r]}],"gradient-from-pos":[{from:[N]}],"gradient-via-pos":[{via:[N]}],"gradient-to-pos":[{to:[N]}],"gradient-from":[{from:[E]}],"gradient-via":[{via:[E]}],"gradient-to":[{to:[E]}],rounded:[{rounded:[c]}],"rounded-s":[{"rounded-s":[c]}],"rounded-e":[{"rounded-e":[c]}],"rounded-t":[{"rounded-t":[c]}],"rounded-r":[{"rounded-r":[c]}],"rounded-b":[{"rounded-b":[c]}],"rounded-l":[{"rounded-l":[c]}],"rounded-ss":[{"rounded-ss":[c]}],"rounded-se":[{"rounded-se":[c]}],"rounded-ee":[{"rounded-ee":[c]}],"rounded-es":[{"rounded-es":[c]}],"rounded-tl":[{"rounded-tl":[c]}],"rounded-tr":[{"rounded-tr":[c]}],"rounded-br":[{"rounded-br":[c]}],"rounded-bl":[{"rounded-bl":[c]}],"border-w":[{border:[f]}],"border-w-x":[{"border-x":[f]}],"border-w-y":[{"border-y":[f]}],"border-w-s":[{"border-s":[f]}],"border-w-e":[{"border-e":[f]}],"border-w-t":[{"border-t":[f]}],"border-w-r":[{"border-r":[f]}],"border-w-b":[{"border-b":[f]}],"border-w-l":[{"border-l":[f]}],"border-opacity":[{"border-opacity":[W]}],"border-style":[{border:[...ce(),"hidden"]}],"divide-x":[{"divide-x":[f]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[f]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[W]}],"divide-style":[{divide:ce()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...ce()]}],"outline-offset":[{"outline-offset":[vn,ge]}],"outline-w":[{outline:[vn,Un]}],"outline-color":[{outline:[r]}],"ring-w":[{ring:we()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[r]}],"ring-opacity":[{"ring-opacity":[W]}],"ring-offset-w":[{"ring-offset":[vn,Un]}],"ring-offset-color":[{"ring-offset":[r]}],shadow:[{shadow:["","inner","none",Vn,lb]}],"shadow-color":[{shadow:[Xi]}],opacity:[{opacity:[W]}],"mix-blend":[{"mix-blend":[...se(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":se()}],filter:[{filter:["","none"]}],blur:[{blur:[i]}],brightness:[{brightness:[a]}],contrast:[{contrast:[p]}],"drop-shadow":[{"drop-shadow":["","none",Vn,ge]}],grayscale:[{grayscale:[m]}],"hue-rotate":[{"hue-rotate":[v]}],invert:[{invert:[b]}],saturate:[{saturate:[D]}],sepia:[{sepia:[U]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[i]}],"backdrop-brightness":[{"backdrop-brightness":[a]}],"backdrop-contrast":[{"backdrop-contrast":[p]}],"backdrop-grayscale":[{"backdrop-grayscale":[m]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[v]}],"backdrop-invert":[{"backdrop-invert":[b]}],"backdrop-opacity":[{"backdrop-opacity":[W]}],"backdrop-saturate":[{"backdrop-saturate":[D]}],"backdrop-sepia":[{"backdrop-sepia":[U]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[d]}],"border-spacing-x":[{"border-spacing-x":[d]}],"border-spacing-y":[{"border-spacing-y":[d]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",ge]}],duration:[{duration:S()}],ease:[{ease:["linear","in","out","in-out",ge]}],delay:[{delay:S()}],animate:[{animate:["none","spin","ping","pulse","bounce",ge]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[$]}],"scale-x":[{"scale-x":[$]}],"scale-y":[{"scale-y":[$]}],rotate:[{rotate:[Ji,ge]}],"translate-x":[{"translate-x":[fe]}],"translate-y":[{"translate-y":[fe]}],"skew-x":[{"skew-x":[Z]}],"skew-y":[{"skew-y":[Z]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",ge]}],accent:[{accent:["auto",r]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ge]}],"caret-color":[{caret:[r]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":ie()}],"scroll-mx":[{"scroll-mx":ie()}],"scroll-my":[{"scroll-my":ie()}],"scroll-ms":[{"scroll-ms":ie()}],"scroll-me":[{"scroll-me":ie()}],"scroll-mt":[{"scroll-mt":ie()}],"scroll-mr":[{"scroll-mr":ie()}],"scroll-mb":[{"scroll-mb":ie()}],"scroll-ml":[{"scroll-ml":ie()}],"scroll-p":[{"scroll-p":ie()}],"scroll-px":[{"scroll-px":ie()}],"scroll-py":[{"scroll-py":ie()}],"scroll-ps":[{"scroll-ps":ie()}],"scroll-pe":[{"scroll-pe":ie()}],"scroll-pt":[{"scroll-pt":ie()}],"scroll-pr":[{"scroll-pr":ie()}],"scroll-pb":[{"scroll-pb":ie()}],"scroll-pl":[{"scroll-pl":ie()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ge]}],fill:[{fill:[r,"none"]}],"stroke-w":[{stroke:[vn,Un,_c]}],stroke:[{stroke:[r,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},fb=Yw(hb);function Sr(...r){return fb($p(r))}const pb=Iw,Kp=_.forwardRef(({className:r,...n},i)=>y.jsx(Lp,{ref:i,className:Sr("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",r),...n}));Kp.displayName=Lp.displayName;const mb=Aw("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Qp=_.forwardRef(({className:r,variant:n,...i},a)=>y.jsx(Wp,{ref:a,className:Sr(mb({variant:n}),r),...i}));Qp.displayName=Wp.displayName;const gb=_.forwardRef(({className:r,...n},i)=>y.jsx(Fp,{ref:i,className:Sr("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",r),...n}));gb.displayName=Fp.displayName;const Jp=_.forwardRef(({className:r,...n},i)=>y.jsx(Bp,{ref:i,className:Sr("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",r),"toast-close":"",...n,children:y.jsx(Hp,{className:"h-4 w-4"})}));Jp.displayName=Bp.displayName;const Xp=_.forwardRef(({className:r,...n},i)=>y.jsx(Mp,{ref:i,className:Sr("text-sm font-semibold",r),...n}));Xp.displayName=Mp.displayName;const em=_.forwardRef(({className:r,...n},i)=>y.jsx(Op,{ref:i,className:Sr("text-sm opacity-90",r),...n}));em.displayName=Op.displayName;function yb(){const{toasts:r}=Wv();return y.jsxs(pb,{children:[r.map(function({id:n,title:i,description:a,action:s,...c}){return y.jsxs(Qp,{...c,children:[y.jsxs("div",{className:"grid gap-1",children:[i&&y.jsx(Xp,{children:i}),a&&y.jsx(em,{children:a})]}),s,y.jsx(Jp,{})]},n)}),y.jsx(Kp,{})]})}const vb=["top","right","bottom","left"],Yn=Math.min,Tt=Math.max,Ha=Math.round,Oa=Math.floor,en=r=>({x:r,y:r}),wb={left:"right",right:"left",bottom:"top",top:"bottom"},bb={start:"end",end:"start"};function zc(r,n,i){return Tt(r,Yn(n,i))}function Tn(r,n){return typeof r=="function"?r(n):r}function _n(r){return r.split("-")[0]}function ui(r){return r.split("-")[1]}function eu(r){return r==="x"?"y":"x"}function tu(r){return r==="y"?"height":"width"}function Zn(r){return["top","bottom"].includes(_n(r))?"y":"x"}function nu(r){return eu(Zn(r))}function kb(r,n,i){i===void 0&&(i=!1);const a=ui(r),s=nu(r),c=tu(s);let d=s==="x"?a===(i?"end":"start")?"right":"left":a==="start"?"bottom":"top";return n.reference[c]>n.floating[c]&&(d=Ua(d)),[d,Ua(d)]}function xb(r){const n=Ua(r);return[Lc(r),n,Lc(n)]}function Lc(r){return r.replace(/start|end/g,n=>bb[n])}function Tb(r,n,i){const a=["left","right"],s=["right","left"],c=["top","bottom"],d=["bottom","top"];switch(r){case"top":case"bottom":return i?n?s:a:n?a:s;case"left":case"right":return n?c:d;default:return[]}}function _b(r,n,i,a){const s=ui(r);let c=Tb(_n(r),i==="start",a);return s&&(c=c.map(d=>d+"-"+s),n&&(c=c.concat(c.map(Lc)))),c}function Ua(r){return r.replace(/left|right|bottom|top/g,n=>wb[n])}function Sb(r){return{top:0,right:0,bottom:0,left:0,...r}}function tm(r){return typeof r!="number"?Sb(r):{top:r,right:r,bottom:r,left:r}}function Va(r){const{x:n,y:i,width:a,height:s}=r;return{width:a,height:s,top:i,left:n,right:n+a,bottom:i+s,x:n,y:i}}function Ff(r,n,i){let{reference:a,floating:s}=r;const c=Zn(n),d=nu(n),f=tu(d),p=_n(n),m=c==="y",v=a.x+a.width/2-s.width/2,b=a.y+a.height/2-s.height/2,x=a[f]/2-s[f]/2;let E;switch(p){case"top":E={x:v,y:a.y-s.height};break;case"bottom":E={x:v,y:a.y+a.height};break;case"right":E={x:a.x+a.width,y:b};break;case"left":E={x:a.x-s.width,y:b};break;default:E={x:a.x,y:a.y}}switch(ui(n)){case"start":E[d]-=x*(i&&m?-1:1);break;case"end":E[d]+=x*(i&&m?-1:1);break}return E}const Ib=async(r,n,i)=>{const{placement:a="bottom",strategy:s="absolute",middleware:c=[],platform:d}=i,f=c.filter(Boolean),p=await(d.isRTL==null?void 0:d.isRTL(n));let m=await d.getElementRects({reference:r,floating:n,strategy:s}),{x:v,y:b}=Ff(m,a,p),x=a,E={},N=0;for(let A=0;A<f.length;A++){const{name:I,fn:W}=f[A],{x:O,y:D,data:$,reset:U}=await W({x:v,y:b,initialPlacement:a,placement:x,strategy:s,middlewareData:E,rects:m,platform:d,elements:{reference:r,floating:n}});v=O??v,b=D??b,E={...E,[I]:{...E[I],...$}},U&&N<=50&&(N++,typeof U=="object"&&(U.placement&&(x=U.placement),U.rects&&(m=U.rects===!0?await d.getElementRects({reference:r,floating:n,strategy:s}):U.rects),{x:v,y:b}=Ff(m,x,p)),A=-1)}return{x:v,y:b,placement:x,strategy:s,middlewareData:E}};async function ao(r,n){var i;n===void 0&&(n={});const{x:a,y:s,platform:c,rects:d,elements:f,strategy:p}=r,{boundary:m="clippingAncestors",rootBoundary:v="viewport",elementContext:b="floating",altBoundary:x=!1,padding:E=0}=Tn(n,r),N=tm(E),I=f[x?b==="floating"?"reference":"floating":b],W=Va(await c.getClippingRect({element:(i=await(c.isElement==null?void 0:c.isElement(I)))==null||i?I:I.contextElement||await(c.getDocumentElement==null?void 0:c.getDocumentElement(f.floating)),boundary:m,rootBoundary:v,strategy:p})),O=b==="floating"?{x:a,y:s,width:d.floating.width,height:d.floating.height}:d.reference,D=await(c.getOffsetParent==null?void 0:c.getOffsetParent(f.floating)),$=await(c.isElement==null?void 0:c.isElement(D))?await(c.getScale==null?void 0:c.getScale(D))||{x:1,y:1}:{x:1,y:1},U=Va(c.convertOffsetParentRelativeRectToViewportRelativeRect?await c.convertOffsetParentRelativeRectToViewportRelativeRect({elements:f,rect:O,offsetParent:D,strategy:p}):O);return{top:(W.top-U.top+N.top)/$.y,bottom:(U.bottom-W.bottom+N.bottom)/$.y,left:(W.left-U.left+N.left)/$.x,right:(U.right-W.right+N.right)/$.x}}const Ab=r=>({name:"arrow",options:r,async fn(n){const{x:i,y:a,placement:s,rects:c,platform:d,elements:f,middlewareData:p}=n,{element:m,padding:v=0}=Tn(r,n)||{};if(m==null)return{};const b=tm(v),x={x:i,y:a},E=nu(s),N=tu(E),A=await d.getDimensions(m),I=E==="y",W=I?"top":"left",O=I?"bottom":"right",D=I?"clientHeight":"clientWidth",$=c.reference[N]+c.reference[E]-x[E]-c.floating[N],U=x[E]-c.reference[E],Z=await(d.getOffsetParent==null?void 0:d.getOffsetParent(m));let K=Z?Z[D]:0;(!K||!await(d.isElement==null?void 0:d.isElement(Z)))&&(K=f.floating[D]||c.floating[N]);const fe=$/2-U/2,ke=K/2-A[N]/2-1,ye=Yn(b[W],ke),Te=Yn(b[O],ke),ie=ye,we=K-A[N]-Te,Y=K/2-A[N]/2+fe,xe=zc(ie,Y,we),ce=!p.arrow&&ui(s)!=null&&Y!==xe&&c.reference[N]/2-(Y<ie?ye:Te)-A[N]/2<0,se=ce?Y<ie?Y-ie:Y-we:0;return{[E]:x[E]+se,data:{[E]:xe,centerOffset:Y-xe-se,...ce&&{alignmentOffset:se}},reset:ce}}}),Cb=function(r){return r===void 0&&(r={}),{name:"flip",options:r,async fn(n){var i,a;const{placement:s,middlewareData:c,rects:d,initialPlacement:f,platform:p,elements:m}=n,{mainAxis:v=!0,crossAxis:b=!0,fallbackPlacements:x,fallbackStrategy:E="bestFit",fallbackAxisSideDirection:N="none",flipAlignment:A=!0,...I}=Tn(r,n);if((i=c.arrow)!=null&&i.alignmentOffset)return{};const W=_n(s),O=Zn(f),D=_n(f)===f,$=await(p.isRTL==null?void 0:p.isRTL(m.floating)),U=x||(D||!A?[Ua(f)]:xb(f)),Z=N!=="none";!x&&Z&&U.push(..._b(f,A,N,$));const K=[f,...U],fe=await ao(n,I),ke=[];let ye=((a=c.flip)==null?void 0:a.overflows)||[];if(v&&ke.push(fe[W]),b){const Y=kb(s,d,$);ke.push(fe[Y[0]],fe[Y[1]])}if(ye=[...ye,{placement:s,overflows:ke}],!ke.every(Y=>Y<=0)){var Te,ie;const Y=(((Te=c.flip)==null?void 0:Te.index)||0)+1,xe=K[Y];if(xe)return{data:{index:Y,overflows:ye},reset:{placement:xe}};let ce=(ie=ye.filter(se=>se.overflows[0]<=0).sort((se,P)=>se.overflows[1]-P.overflows[1])[0])==null?void 0:ie.placement;if(!ce)switch(E){case"bestFit":{var we;const se=(we=ye.filter(P=>{if(Z){const V=Zn(P.placement);return V===O||V==="y"}return!0}).map(P=>[P.placement,P.overflows.filter(V=>V>0).reduce((V,H)=>V+H,0)]).sort((P,V)=>P[1]-V[1])[0])==null?void 0:we[0];se&&(ce=se);break}case"initialPlacement":ce=f;break}if(s!==ce)return{reset:{placement:ce}}}return{}}}};function Bf(r,n){return{top:r.top-n.height,right:r.right-n.width,bottom:r.bottom-n.height,left:r.left-n.width}}function Df(r){return vb.some(n=>r[n]>=0)}const Eb=function(r){return r===void 0&&(r={}),{name:"hide",options:r,async fn(n){const{rects:i}=n,{strategy:a="referenceHidden",...s}=Tn(r,n);switch(a){case"referenceHidden":{const c=await ao(n,{...s,elementContext:"reference"}),d=Bf(c,i.reference);return{data:{referenceHiddenOffsets:d,referenceHidden:Df(d)}}}case"escaped":{const c=await ao(n,{...s,altBoundary:!0}),d=Bf(c,i.floating);return{data:{escapedOffsets:d,escaped:Df(d)}}}default:return{}}}}};async function jb(r,n){const{placement:i,platform:a,elements:s}=r,c=await(a.isRTL==null?void 0:a.isRTL(s.floating)),d=_n(i),f=ui(i),p=Zn(i)==="y",m=["left","top"].includes(d)?-1:1,v=c&&p?-1:1,b=Tn(n,r);let{mainAxis:x,crossAxis:E,alignmentAxis:N}=typeof b=="number"?{mainAxis:b,crossAxis:0,alignmentAxis:null}:{mainAxis:b.mainAxis||0,crossAxis:b.crossAxis||0,alignmentAxis:b.alignmentAxis};return f&&typeof N=="number"&&(E=f==="end"?N*-1:N),p?{x:E*v,y:x*m}:{x:x*m,y:E*v}}const Nb=function(r){return r===void 0&&(r=0),{name:"offset",options:r,async fn(n){var i,a;const{x:s,y:c,placement:d,middlewareData:f}=n,p=await jb(n,r);return d===((i=f.offset)==null?void 0:i.placement)&&(a=f.arrow)!=null&&a.alignmentOffset?{}:{x:s+p.x,y:c+p.y,data:{...p,placement:d}}}}},Rb=function(r){return r===void 0&&(r={}),{name:"shift",options:r,async fn(n){const{x:i,y:a,placement:s}=n,{mainAxis:c=!0,crossAxis:d=!1,limiter:f={fn:I=>{let{x:W,y:O}=I;return{x:W,y:O}}},...p}=Tn(r,n),m={x:i,y:a},v=await ao(n,p),b=Zn(_n(s)),x=eu(b);let E=m[x],N=m[b];if(c){const I=x==="y"?"top":"left",W=x==="y"?"bottom":"right",O=E+v[I],D=E-v[W];E=zc(O,E,D)}if(d){const I=b==="y"?"top":"left",W=b==="y"?"bottom":"right",O=N+v[I],D=N-v[W];N=zc(O,N,D)}const A=f.fn({...n,[x]:E,[b]:N});return{...A,data:{x:A.x-i,y:A.y-a,enabled:{[x]:c,[b]:d}}}}}},Pb=function(r){return r===void 0&&(r={}),{options:r,fn(n){const{x:i,y:a,placement:s,rects:c,middlewareData:d}=n,{offset:f=0,mainAxis:p=!0,crossAxis:m=!0}=Tn(r,n),v={x:i,y:a},b=Zn(s),x=eu(b);let E=v[x],N=v[b];const A=Tn(f,n),I=typeof A=="number"?{mainAxis:A,crossAxis:0}:{mainAxis:0,crossAxis:0,...A};if(p){const D=x==="y"?"height":"width",$=c.reference[x]-c.floating[D]+I.mainAxis,U=c.reference[x]+c.reference[D]-I.mainAxis;E<$?E=$:E>U&&(E=U)}if(m){var W,O;const D=x==="y"?"width":"height",$=["top","left"].includes(_n(s)),U=c.reference[b]-c.floating[D]+($&&((W=d.offset)==null?void 0:W[b])||0)+($?0:I.crossAxis),Z=c.reference[b]+c.reference[D]+($?0:((O=d.offset)==null?void 0:O[b])||0)-($?I.crossAxis:0);N<U?N=U:N>Z&&(N=Z)}return{[x]:E,[b]:N}}}},zb=function(r){return r===void 0&&(r={}),{name:"size",options:r,async fn(n){var i,a;const{placement:s,rects:c,platform:d,elements:f}=n,{apply:p=()=>{},...m}=Tn(r,n),v=await ao(n,m),b=_n(s),x=ui(s),E=Zn(s)==="y",{width:N,height:A}=c.floating;let I,W;b==="top"||b==="bottom"?(I=b,W=x===(await(d.isRTL==null?void 0:d.isRTL(f.floating))?"start":"end")?"left":"right"):(W=b,I=x==="end"?"top":"bottom");const O=A-v.top-v.bottom,D=N-v.left-v.right,$=Yn(A-v[I],O),U=Yn(N-v[W],D),Z=!n.middlewareData.shift;let K=$,fe=U;if((i=n.middlewareData.shift)!=null&&i.enabled.x&&(fe=D),(a=n.middlewareData.shift)!=null&&a.enabled.y&&(K=O),Z&&!x){const ye=Tt(v.left,0),Te=Tt(v.right,0),ie=Tt(v.top,0),we=Tt(v.bottom,0);E?fe=N-2*(ye!==0||Te!==0?ye+Te:Tt(v.left,v.right)):K=A-2*(ie!==0||we!==0?ie+we:Tt(v.top,v.bottom))}await p({...n,availableWidth:fe,availableHeight:K});const ke=await d.getDimensions(f.floating);return N!==ke.width||A!==ke.height?{reset:{rects:!0}}:{}}}};function hs(){return typeof window<"u"}function di(r){return nm(r)?(r.nodeName||"").toLowerCase():"#document"}function _t(r){var n;return(r==null||(n=r.ownerDocument)==null?void 0:n.defaultView)||window}function sn(r){var n;return(n=(nm(r)?r.ownerDocument:r.document)||window.document)==null?void 0:n.documentElement}function nm(r){return hs()?r instanceof Node||r instanceof _t(r).Node:!1}function Vt(r){return hs()?r instanceof Element||r instanceof _t(r).Element:!1}function rn(r){return hs()?r instanceof HTMLElement||r instanceof _t(r).HTMLElement:!1}function $f(r){return!hs()||typeof ShadowRoot>"u"?!1:r instanceof ShadowRoot||r instanceof _t(r).ShadowRoot}function To(r){const{overflow:n,overflowX:i,overflowY:a,display:s}=Gt(r);return/auto|scroll|overlay|hidden|clip/.test(n+a+i)&&!["inline","contents"].includes(s)}function Lb(r){return["table","td","th"].includes(di(r))}function fs(r){return[":popover-open",":modal"].some(n=>{try{return r.matches(n)}catch{return!1}})}function ru(r){const n=iu(),i=Vt(r)?Gt(r):r;return["transform","translate","scale","rotate","perspective"].some(a=>i[a]?i[a]!=="none":!1)||(i.containerType?i.containerType!=="normal":!1)||!n&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!n&&(i.filter?i.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(a=>(i.willChange||"").includes(a))||["paint","layout","strict","content"].some(a=>(i.contain||"").includes(a))}function Wb(r){let n=Kn(r);for(;rn(n)&&!ii(n);){if(ru(n))return n;if(fs(n))return null;n=Kn(n)}return null}function iu(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ii(r){return["html","body","#document"].includes(di(r))}function Gt(r){return _t(r).getComputedStyle(r)}function ps(r){return Vt(r)?{scrollLeft:r.scrollLeft,scrollTop:r.scrollTop}:{scrollLeft:r.scrollX,scrollTop:r.scrollY}}function Kn(r){if(di(r)==="html")return r;const n=r.assignedSlot||r.parentNode||$f(r)&&r.host||sn(r);return $f(n)?n.host:n}function rm(r){const n=Kn(r);return ii(n)?r.ownerDocument?r.ownerDocument.body:r.body:rn(n)&&To(n)?n:rm(n)}function so(r,n,i){var a;n===void 0&&(n=[]),i===void 0&&(i=!0);const s=rm(r),c=s===((a=r.ownerDocument)==null?void 0:a.body),d=_t(s);if(c){const f=Wc(d);return n.concat(d,d.visualViewport||[],To(s)?s:[],f&&i?so(f):[])}return n.concat(s,so(s,[],i))}function Wc(r){return r.parent&&Object.getPrototypeOf(r.parent)?r.frameElement:null}function im(r){const n=Gt(r);let i=parseFloat(n.width)||0,a=parseFloat(n.height)||0;const s=rn(r),c=s?r.offsetWidth:i,d=s?r.offsetHeight:a,f=Ha(i)!==c||Ha(a)!==d;return f&&(i=c,a=d),{width:i,height:a,$:f}}function ou(r){return Vt(r)?r:r.contextElement}function ni(r){const n=ou(r);if(!rn(n))return en(1);const i=n.getBoundingClientRect(),{width:a,height:s,$:c}=im(n);let d=(c?Ha(i.width):i.width)/a,f=(c?Ha(i.height):i.height)/s;return(!d||!Number.isFinite(d))&&(d=1),(!f||!Number.isFinite(f))&&(f=1),{x:d,y:f}}const Mb=en(0);function om(r){const n=_t(r);return!iu()||!n.visualViewport?Mb:{x:n.visualViewport.offsetLeft,y:n.visualViewport.offsetTop}}function Ob(r,n,i){return n===void 0&&(n=!1),!i||n&&i!==_t(r)?!1:n}function br(r,n,i,a){n===void 0&&(n=!1),i===void 0&&(i=!1);const s=r.getBoundingClientRect(),c=ou(r);let d=en(1);n&&(a?Vt(a)&&(d=ni(a)):d=ni(r));const f=Ob(c,i,a)?om(c):en(0);let p=(s.left+f.x)/d.x,m=(s.top+f.y)/d.y,v=s.width/d.x,b=s.height/d.y;if(c){const x=_t(c),E=a&&Vt(a)?_t(a):a;let N=x,A=Wc(N);for(;A&&a&&E!==N;){const I=ni(A),W=A.getBoundingClientRect(),O=Gt(A),D=W.left+(A.clientLeft+parseFloat(O.paddingLeft))*I.x,$=W.top+(A.clientTop+parseFloat(O.paddingTop))*I.y;p*=I.x,m*=I.y,v*=I.x,b*=I.y,p+=D,m+=$,N=_t(A),A=Wc(N)}}return Va({width:v,height:b,x:p,y:m})}function au(r,n){const i=ps(r).scrollLeft;return n?n.left+i:br(sn(r)).left+i}function am(r,n,i){i===void 0&&(i=!1);const a=r.getBoundingClientRect(),s=a.left+n.scrollLeft-(i?0:au(r,a)),c=a.top+n.scrollTop;return{x:s,y:c}}function Fb(r){let{elements:n,rect:i,offsetParent:a,strategy:s}=r;const c=s==="fixed",d=sn(a),f=n?fs(n.floating):!1;if(a===d||f&&c)return i;let p={scrollLeft:0,scrollTop:0},m=en(1);const v=en(0),b=rn(a);if((b||!b&&!c)&&((di(a)!=="body"||To(d))&&(p=ps(a)),rn(a))){const E=br(a);m=ni(a),v.x=E.x+a.clientLeft,v.y=E.y+a.clientTop}const x=d&&!b&&!c?am(d,p,!0):en(0);return{width:i.width*m.x,height:i.height*m.y,x:i.x*m.x-p.scrollLeft*m.x+v.x+x.x,y:i.y*m.y-p.scrollTop*m.y+v.y+x.y}}function Bb(r){return Array.from(r.getClientRects())}function Db(r){const n=sn(r),i=ps(r),a=r.ownerDocument.body,s=Tt(n.scrollWidth,n.clientWidth,a.scrollWidth,a.clientWidth),c=Tt(n.scrollHeight,n.clientHeight,a.scrollHeight,a.clientHeight);let d=-i.scrollLeft+au(r);const f=-i.scrollTop;return Gt(a).direction==="rtl"&&(d+=Tt(n.clientWidth,a.clientWidth)-s),{width:s,height:c,x:d,y:f}}function $b(r,n){const i=_t(r),a=sn(r),s=i.visualViewport;let c=a.clientWidth,d=a.clientHeight,f=0,p=0;if(s){c=s.width,d=s.height;const m=iu();(!m||m&&n==="fixed")&&(f=s.offsetLeft,p=s.offsetTop)}return{width:c,height:d,x:f,y:p}}function qb(r,n){const i=br(r,!0,n==="fixed"),a=i.top+r.clientTop,s=i.left+r.clientLeft,c=rn(r)?ni(r):en(1),d=r.clientWidth*c.x,f=r.clientHeight*c.y,p=s*c.x,m=a*c.y;return{width:d,height:f,x:p,y:m}}function qf(r,n,i){let a;if(n==="viewport")a=$b(r,i);else if(n==="document")a=Db(sn(r));else if(Vt(n))a=qb(n,i);else{const s=om(r);a={x:n.x-s.x,y:n.y-s.y,width:n.width,height:n.height}}return Va(a)}function sm(r,n){const i=Kn(r);return i===n||!Vt(i)||ii(i)?!1:Gt(i).position==="fixed"||sm(i,n)}function Hb(r,n){const i=n.get(r);if(i)return i;let a=so(r,[],!1).filter(f=>Vt(f)&&di(f)!=="body"),s=null;const c=Gt(r).position==="fixed";let d=c?Kn(r):r;for(;Vt(d)&&!ii(d);){const f=Gt(d),p=ru(d);!p&&f.position==="fixed"&&(s=null),(c?!p&&!s:!p&&f.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||To(d)&&!p&&sm(r,d))?a=a.filter(v=>v!==d):s=f,d=Kn(d)}return n.set(r,a),a}function Ub(r){let{element:n,boundary:i,rootBoundary:a,strategy:s}=r;const d=[...i==="clippingAncestors"?fs(n)?[]:Hb(n,this._c):[].concat(i),a],f=d[0],p=d.reduce((m,v)=>{const b=qf(n,v,s);return m.top=Tt(b.top,m.top),m.right=Yn(b.right,m.right),m.bottom=Yn(b.bottom,m.bottom),m.left=Tt(b.left,m.left),m},qf(n,f,s));return{width:p.right-p.left,height:p.bottom-p.top,x:p.left,y:p.top}}function Vb(r){const{width:n,height:i}=im(r);return{width:n,height:i}}function Gb(r,n,i){const a=rn(n),s=sn(n),c=i==="fixed",d=br(r,!0,c,n);let f={scrollLeft:0,scrollTop:0};const p=en(0);if(a||!a&&!c)if((di(n)!=="body"||To(s))&&(f=ps(n)),a){const x=br(n,!0,c,n);p.x=x.x+n.clientLeft,p.y=x.y+n.clientTop}else s&&(p.x=au(s));const m=s&&!a&&!c?am(s,f):en(0),v=d.left+f.scrollLeft-p.x-m.x,b=d.top+f.scrollTop-p.y-m.y;return{x:v,y:b,width:d.width,height:d.height}}function Sc(r){return Gt(r).position==="static"}function Hf(r,n){if(!rn(r)||Gt(r).position==="fixed")return null;if(n)return n(r);let i=r.offsetParent;return sn(r)===i&&(i=i.ownerDocument.body),i}function lm(r,n){const i=_t(r);if(fs(r))return i;if(!rn(r)){let s=Kn(r);for(;s&&!ii(s);){if(Vt(s)&&!Sc(s))return s;s=Kn(s)}return i}let a=Hf(r,n);for(;a&&Lb(a)&&Sc(a);)a=Hf(a,n);return a&&ii(a)&&Sc(a)&&!ru(a)?i:a||Wb(r)||i}const Yb=async function(r){const n=this.getOffsetParent||lm,i=this.getDimensions,a=await i(r.floating);return{reference:Gb(r.reference,await n(r.floating),r.strategy),floating:{x:0,y:0,width:a.width,height:a.height}}};function Zb(r){return Gt(r).direction==="rtl"}const Kb={convertOffsetParentRelativeRectToViewportRelativeRect:Fb,getDocumentElement:sn,getClippingRect:Ub,getOffsetParent:lm,getElementRects:Yb,getClientRects:Bb,getDimensions:Vb,getScale:ni,isElement:Vt,isRTL:Zb};function cm(r,n){return r.x===n.x&&r.y===n.y&&r.width===n.width&&r.height===n.height}function Qb(r,n){let i=null,a;const s=sn(r);function c(){var f;clearTimeout(a),(f=i)==null||f.disconnect(),i=null}function d(f,p){f===void 0&&(f=!1),p===void 0&&(p=1),c();const m=r.getBoundingClientRect(),{left:v,top:b,width:x,height:E}=m;if(f||n(),!x||!E)return;const N=Oa(b),A=Oa(s.clientWidth-(v+x)),I=Oa(s.clientHeight-(b+E)),W=Oa(v),D={rootMargin:-N+"px "+-A+"px "+-I+"px "+-W+"px",threshold:Tt(0,Yn(1,p))||1};let $=!0;function U(Z){const K=Z[0].intersectionRatio;if(K!==p){if(!$)return d();K?d(!1,K):a=setTimeout(()=>{d(!1,1e-7)},1e3)}K===1&&!cm(m,r.getBoundingClientRect())&&d(),$=!1}try{i=new IntersectionObserver(U,{...D,root:s.ownerDocument})}catch{i=new IntersectionObserver(U,D)}i.observe(r)}return d(!0),c}function Jb(r,n,i,a){a===void 0&&(a={});const{ancestorScroll:s=!0,ancestorResize:c=!0,elementResize:d=typeof ResizeObserver=="function",layoutShift:f=typeof IntersectionObserver=="function",animationFrame:p=!1}=a,m=ou(r),v=s||c?[...m?so(m):[],...so(n)]:[];v.forEach(W=>{s&&W.addEventListener("scroll",i,{passive:!0}),c&&W.addEventListener("resize",i)});const b=m&&f?Qb(m,i):null;let x=-1,E=null;d&&(E=new ResizeObserver(W=>{let[O]=W;O&&O.target===m&&E&&(E.unobserve(n),cancelAnimationFrame(x),x=requestAnimationFrame(()=>{var D;(D=E)==null||D.observe(n)})),i()}),m&&!p&&E.observe(m),E.observe(n));let N,A=p?br(r):null;p&&I();function I(){const W=br(r);A&&!cm(A,W)&&i(),A=W,N=requestAnimationFrame(I)}return i(),()=>{var W;v.forEach(O=>{s&&O.removeEventListener("scroll",i),c&&O.removeEventListener("resize",i)}),b?.(),(W=E)==null||W.disconnect(),E=null,p&&cancelAnimationFrame(N)}}const Xb=Nb,ek=Rb,tk=Cb,nk=zb,rk=Eb,Uf=Ab,ik=Pb,ok=(r,n,i)=>{const a=new Map,s={platform:Kb,...i},c={...s.platform,_c:a};return Ib(r,n,{...s,platform:c})};var $a=typeof document<"u"?_.useLayoutEffect:_.useEffect;function Ga(r,n){if(r===n)return!0;if(typeof r!=typeof n)return!1;if(typeof r=="function"&&r.toString()===n.toString())return!0;let i,a,s;if(r&&n&&typeof r=="object"){if(Array.isArray(r)){if(i=r.length,i!==n.length)return!1;for(a=i;a--!==0;)if(!Ga(r[a],n[a]))return!1;return!0}if(s=Object.keys(r),i=s.length,i!==Object.keys(n).length)return!1;for(a=i;a--!==0;)if(!{}.hasOwnProperty.call(n,s[a]))return!1;for(a=i;a--!==0;){const c=s[a];if(!(c==="_owner"&&r.$$typeof)&&!Ga(r[c],n[c]))return!1}return!0}return r!==r&&n!==n}function um(r){return typeof window>"u"?1:(r.ownerDocument.defaultView||window).devicePixelRatio||1}function Vf(r,n){const i=um(r);return Math.round(n*i)/i}function Ic(r){const n=_.useRef(r);return $a(()=>{n.current=r}),n}function ak(r){r===void 0&&(r={});const{placement:n="bottom",strategy:i="absolute",middleware:a=[],platform:s,elements:{reference:c,floating:d}={},transform:f=!0,whileElementsMounted:p,open:m}=r,[v,b]=_.useState({x:0,y:0,strategy:i,placement:n,middlewareData:{},isPositioned:!1}),[x,E]=_.useState(a);Ga(x,a)||E(a);const[N,A]=_.useState(null),[I,W]=_.useState(null),O=_.useCallback(P=>{P!==Z.current&&(Z.current=P,A(P))},[]),D=_.useCallback(P=>{P!==K.current&&(K.current=P,W(P))},[]),$=c||N,U=d||I,Z=_.useRef(null),K=_.useRef(null),fe=_.useRef(v),ke=p!=null,ye=Ic(p),Te=Ic(s),ie=Ic(m),we=_.useCallback(()=>{if(!Z.current||!K.current)return;const P={placement:n,strategy:i,middleware:x};Te.current&&(P.platform=Te.current),ok(Z.current,K.current,P).then(V=>{const H={...V,isPositioned:ie.current!==!1};Y.current&&!Ga(fe.current,H)&&(fe.current=H,ss.flushSync(()=>{b(H)}))})},[x,n,i,Te,ie]);$a(()=>{m===!1&&fe.current.isPositioned&&(fe.current.isPositioned=!1,b(P=>({...P,isPositioned:!1})))},[m]);const Y=_.useRef(!1);$a(()=>(Y.current=!0,()=>{Y.current=!1}),[]),$a(()=>{if($&&(Z.current=$),U&&(K.current=U),$&&U){if(ye.current)return ye.current($,U,we);we()}},[$,U,we,ye,ke]);const xe=_.useMemo(()=>({reference:Z,floating:K,setReference:O,setFloating:D}),[O,D]),ce=_.useMemo(()=>({reference:$,floating:U}),[$,U]),se=_.useMemo(()=>{const P={position:i,left:0,top:0};if(!ce.floating)return P;const V=Vf(ce.floating,v.x),H=Vf(ce.floating,v.y);return f?{...P,transform:"translate("+V+"px, "+H+"px)",...um(ce.floating)>=1.5&&{willChange:"transform"}}:{position:i,left:V,top:H}},[i,f,ce.floating,v.x,v.y]);return _.useMemo(()=>({...v,update:we,refs:xe,elements:ce,floatingStyles:se}),[v,we,xe,ce,se])}const sk=r=>{function n(i){return{}.hasOwnProperty.call(i,"current")}return{name:"arrow",options:r,fn(i){const{element:a,padding:s}=typeof r=="function"?r(i):r;return a&&n(a)?a.current!=null?Uf({element:a.current,padding:s}).fn(i):{}:a?Uf({element:a,padding:s}).fn(i):{}}}},lk=(r,n)=>({...Xb(r),options:[r,n]}),ck=(r,n)=>({...ek(r),options:[r,n]}),uk=(r,n)=>({...ik(r),options:[r,n]}),dk=(r,n)=>({...tk(r),options:[r,n]}),hk=(r,n)=>({...nk(r),options:[r,n]}),fk=(r,n)=>({...rk(r),options:[r,n]}),pk=(r,n)=>({...sk(r),options:[r,n]});var mk="Arrow",dm=_.forwardRef((r,n)=>{const{children:i,width:a=10,height:s=5,...c}=r;return y.jsx(vt.svg,{...c,ref:n,width:a,height:s,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:r.asChild?i:y.jsx("polygon",{points:"0,0 30,0 15,10"})})});dm.displayName=mk;var gk=dm;function yk(r){const[n,i]=_.useState(void 0);return wr(()=>{if(r){i({width:r.offsetWidth,height:r.offsetHeight});const a=new ResizeObserver(s=>{if(!Array.isArray(s)||!s.length)return;const c=s[0];let d,f;if("borderBoxSize"in c){const p=c.borderBoxSize,m=Array.isArray(p)?p[0]:p;d=m.inlineSize,f=m.blockSize}else d=r.offsetWidth,f=r.offsetHeight;i({width:d,height:f})});return a.observe(r,{box:"border-box"}),()=>a.unobserve(r)}else i(void 0)},[r]),n}var hm="Popper",[fm,pm]=ls(hm),[P_,mm]=fm(hm),gm="PopperAnchor",ym=_.forwardRef((r,n)=>{const{__scopePopper:i,virtualRef:a,...s}=r,c=mm(gm,i),d=_.useRef(null),f=Ut(n,d);return _.useEffect(()=>{c.onAnchorChange(a?.current||d.current)}),a?null:y.jsx(vt.div,{...s,ref:f})});ym.displayName=gm;var su="PopperContent",[vk,wk]=fm(su),vm=_.forwardRef((r,n)=>{const{__scopePopper:i,side:a="bottom",sideOffset:s=0,align:c="center",alignOffset:d=0,arrowPadding:f=0,avoidCollisions:p=!0,collisionBoundary:m=[],collisionPadding:v=0,sticky:b="partial",hideWhenDetached:x=!1,updatePositionStrategy:E="optimized",onPlaced:N,...A}=r,I=mm(su,i),[W,O]=_.useState(null),D=Ut(n,Ee=>O(Ee)),[$,U]=_.useState(null),Z=yk($),K=Z?.width??0,fe=Z?.height??0,ke=a+(c!=="center"?"-"+c:""),ye=typeof v=="number"?v:{top:0,right:0,bottom:0,left:0,...v},Te=Array.isArray(m)?m:[m],ie=Te.length>0,we={padding:ye,boundary:Te.filter(kk),altBoundary:ie},{refs:Y,floatingStyles:xe,placement:ce,isPositioned:se,middlewareData:P}=ak({strategy:"fixed",placement:ke,whileElementsMounted:(...Ee)=>Jb(...Ee,{animationFrame:E==="always"}),elements:{reference:I.anchor},middleware:[lk({mainAxis:s+fe,alignmentAxis:d}),p&&ck({mainAxis:!0,crossAxis:!1,limiter:b==="partial"?uk():void 0,...we}),p&&dk({...we}),hk({...we,apply:({elements:Ee,rects:je,availableWidth:ze,availableHeight:st})=>{const{width:Ar,height:Io}=je.reference,cn=Ee.floating.style;cn.setProperty("--radix-popper-available-width",`${ze}px`),cn.setProperty("--radix-popper-available-height",`${st}px`),cn.setProperty("--radix-popper-anchor-width",`${Ar}px`),cn.setProperty("--radix-popper-anchor-height",`${Io}px`)}}),$&&pk({element:$,padding:f}),xk({arrowWidth:K,arrowHeight:fe}),x&&fk({strategy:"referenceHidden",...we})]}),[V,H]=km(ce),S=nn(N);wr(()=>{se&&S?.()},[se,S]);const z=P.arrow?.x,he=P.arrow?.y,pe=P.arrow?.centerOffset!==0,[_e,Se]=_.useState();return wr(()=>{W&&Se(window.getComputedStyle(W).zIndex)},[W]),y.jsx("div",{ref:Y.setFloating,"data-radix-popper-content-wrapper":"",style:{...xe,transform:se?xe.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:_e,"--radix-popper-transform-origin":[P.transformOrigin?.x,P.transformOrigin?.y].join(" "),...P.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:r.dir,children:y.jsx(vk,{scope:i,placedSide:V,onArrowChange:U,arrowX:z,arrowY:he,shouldHideArrow:pe,children:y.jsx(vt.div,{"data-side":V,"data-align":H,...A,ref:D,style:{...A.style,animation:se?void 0:"none"}})})})});vm.displayName=su;var wm="PopperArrow",bk={top:"bottom",right:"left",bottom:"top",left:"right"},bm=_.forwardRef(function(n,i){const{__scopePopper:a,...s}=n,c=wk(wm,a),d=bk[c.placedSide];return y.jsx("span",{ref:c.onArrowChange,style:{position:"absolute",left:c.arrowX,top:c.arrowY,[d]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[c.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[c.placedSide],visibility:c.shouldHideArrow?"hidden":void 0},children:y.jsx(gk,{...s,ref:i,style:{...s.style,display:"block"}})})});bm.displayName=wm;function kk(r){return r!==null}var xk=r=>({name:"transformOrigin",options:r,fn(n){const{placement:i,rects:a,middlewareData:s}=n,d=s.arrow?.centerOffset!==0,f=d?0:r.arrowWidth,p=d?0:r.arrowHeight,[m,v]=km(i),b={start:"0%",center:"50%",end:"100%"}[v],x=(s.arrow?.x??0)+f/2,E=(s.arrow?.y??0)+p/2;let N="",A="";return m==="bottom"?(N=d?b:`${x}px`,A=`${-p}px`):m==="top"?(N=d?b:`${x}px`,A=`${a.floating.height+p}px`):m==="right"?(N=`${-p}px`,A=d?b:`${E}px`):m==="left"&&(N=`${a.floating.width+p}px`,A=d?b:`${E}px`),{data:{x:N,y:A}}}});function km(r){const[n,i="center"]=r.split("-");return[n,i]}var Tk=ym,_k=vm,Sk=bm,[ms]=ls("Tooltip",[pm]),lu=pm(),xm="TooltipProvider",Ik=700,Gf="tooltip.open",[Ak,Tm]=ms(xm),_m=r=>{const{__scopeTooltip:n,delayDuration:i=Ik,skipDelayDuration:a=300,disableHoverableContent:s=!1,children:c}=r,d=_.useRef(!0),f=_.useRef(!1),p=_.useRef(0);return _.useEffect(()=>{const m=p.current;return()=>window.clearTimeout(m)},[]),y.jsx(Ak,{scope:n,isOpenDelayedRef:d,delayDuration:i,onOpen:_.useCallback(()=>{window.clearTimeout(p.current),d.current=!1},[]),onClose:_.useCallback(()=>{window.clearTimeout(p.current),p.current=window.setTimeout(()=>d.current=!0,a)},[a]),isPointerInTransitRef:f,onPointerInTransitChange:_.useCallback(m=>{f.current=m},[]),disableHoverableContent:s,children:c})};_m.displayName=xm;var Sm="Tooltip",[z_,gs]=ms(Sm),Mc="TooltipTrigger",Ck=_.forwardRef((r,n)=>{const{__scopeTooltip:i,...a}=r,s=gs(Mc,i),c=Tm(Mc,i),d=lu(i),f=_.useRef(null),p=Ut(n,f,s.onTriggerChange),m=_.useRef(!1),v=_.useRef(!1),b=_.useCallback(()=>m.current=!1,[]);return _.useEffect(()=>()=>document.removeEventListener("pointerup",b),[b]),y.jsx(Tk,{asChild:!0,...d,children:y.jsx(vt.button,{"aria-describedby":s.open?s.contentId:void 0,"data-state":s.stateAttribute,...a,ref:p,onPointerMove:Ze(r.onPointerMove,x=>{x.pointerType!=="touch"&&!v.current&&!c.isPointerInTransitRef.current&&(s.onTriggerEnter(),v.current=!0)}),onPointerLeave:Ze(r.onPointerLeave,()=>{s.onTriggerLeave(),v.current=!1}),onPointerDown:Ze(r.onPointerDown,()=>{s.open&&s.onClose(),m.current=!0,document.addEventListener("pointerup",b,{once:!0})}),onFocus:Ze(r.onFocus,()=>{m.current||s.onOpen()}),onBlur:Ze(r.onBlur,s.onClose),onClick:Ze(r.onClick,s.onClose)})})});Ck.displayName=Mc;var Ek="TooltipPortal",[L_,jk]=ms(Ek,{forceMount:void 0}),oi="TooltipContent",Im=_.forwardRef((r,n)=>{const i=jk(oi,r.__scopeTooltip),{forceMount:a=i.forceMount,side:s="top",...c}=r,d=gs(oi,r.__scopeTooltip);return y.jsx(Yc,{present:a||d.open,children:d.disableHoverableContent?y.jsx(Am,{side:s,...c,ref:n}):y.jsx(Nk,{side:s,...c,ref:n})})}),Nk=_.forwardRef((r,n)=>{const i=gs(oi,r.__scopeTooltip),a=Tm(oi,r.__scopeTooltip),s=_.useRef(null),c=Ut(n,s),[d,f]=_.useState(null),{trigger:p,onClose:m}=i,v=s.current,{onPointerInTransitChange:b}=a,x=_.useCallback(()=>{f(null),b(!1)},[b]),E=_.useCallback((N,A)=>{const I=N.currentTarget,W={x:N.clientX,y:N.clientY},O=Wk(W,I.getBoundingClientRect()),D=Mk(W,O),$=Ok(A.getBoundingClientRect()),U=Bk([...D,...$]);f(U),b(!0)},[b]);return _.useEffect(()=>()=>x(),[x]),_.useEffect(()=>{if(p&&v){const N=I=>E(I,v),A=I=>E(I,p);return p.addEventListener("pointerleave",N),v.addEventListener("pointerleave",A),()=>{p.removeEventListener("pointerleave",N),v.removeEventListener("pointerleave",A)}}},[p,v,E,x]),_.useEffect(()=>{if(d){const N=A=>{const I=A.target,W={x:A.clientX,y:A.clientY},O=p?.contains(I)||v?.contains(I),D=!Fk(W,d);O?x():D&&(x(),m())};return document.addEventListener("pointermove",N),()=>document.removeEventListener("pointermove",N)}},[p,v,d,m,x]),y.jsx(Am,{...r,ref:c})}),[Rk,Pk]=ms(Sm,{isInside:!1}),zk=Bv("TooltipContent"),Am=_.forwardRef((r,n)=>{const{__scopeTooltip:i,children:a,"aria-label":s,onEscapeKeyDown:c,onPointerDownOutside:d,...f}=r,p=gs(oi,i),m=lu(i),{onClose:v}=p;return _.useEffect(()=>(document.addEventListener(Gf,v),()=>document.removeEventListener(Gf,v)),[v]),_.useEffect(()=>{if(p.trigger){const b=x=>{x.target?.contains(p.trigger)&&v()};return window.addEventListener("scroll",b,{capture:!0}),()=>window.removeEventListener("scroll",b,{capture:!0})}},[p.trigger,v]),y.jsx(Gc,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:c,onPointerDownOutside:d,onFocusOutside:b=>b.preventDefault(),onDismiss:v,children:y.jsxs(_k,{"data-state":p.stateAttribute,...m,...f,ref:n,style:{...f.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[y.jsx(zk,{children:a}),y.jsx(Rk,{scope:i,isInside:!0,children:y.jsx(lw,{id:p.contentId,role:"tooltip",children:s||a})})]})})});Im.displayName=oi;var Cm="TooltipArrow",Lk=_.forwardRef((r,n)=>{const{__scopeTooltip:i,...a}=r,s=lu(i);return Pk(Cm,i).isInside?null:y.jsx(Sk,{...s,...a,ref:n})});Lk.displayName=Cm;function Wk(r,n){const i=Math.abs(n.top-r.y),a=Math.abs(n.bottom-r.y),s=Math.abs(n.right-r.x),c=Math.abs(n.left-r.x);switch(Math.min(i,a,s,c)){case c:return"left";case s:return"right";case i:return"top";case a:return"bottom";default:throw new Error("unreachable")}}function Mk(r,n,i=5){const a=[];switch(n){case"top":a.push({x:r.x-i,y:r.y+i},{x:r.x+i,y:r.y+i});break;case"bottom":a.push({x:r.x-i,y:r.y-i},{x:r.x+i,y:r.y-i});break;case"left":a.push({x:r.x+i,y:r.y-i},{x:r.x+i,y:r.y+i});break;case"right":a.push({x:r.x-i,y:r.y-i},{x:r.x-i,y:r.y+i});break}return a}function Ok(r){const{top:n,right:i,bottom:a,left:s}=r;return[{x:s,y:n},{x:i,y:n},{x:i,y:a},{x:s,y:a}]}function Fk(r,n){const{x:i,y:a}=r;let s=!1;for(let c=0,d=n.length-1;c<n.length;d=c++){const f=n[c].x,p=n[c].y,m=n[d].x,v=n[d].y;p>a!=v>a&&i<(m-f)*(a-p)/(v-p)+f&&(s=!s)}return s}function Bk(r){const n=r.slice();return n.sort((i,a)=>i.x<a.x?-1:i.x>a.x?1:i.y<a.y?-1:i.y>a.y?1:0),Dk(n)}function Dk(r){if(r.length<=1)return r.slice();const n=[];for(let a=0;a<r.length;a++){const s=r[a];for(;n.length>=2;){const c=n[n.length-1],d=n[n.length-2];if((c.x-d.x)*(s.y-d.y)>=(c.y-d.y)*(s.x-d.x))n.pop();else break}n.push(s)}n.pop();const i=[];for(let a=r.length-1;a>=0;a--){const s=r[a];for(;i.length>=2;){const c=i[i.length-1],d=i[i.length-2];if((c.x-d.x)*(s.y-d.y)>=(c.y-d.y)*(s.x-d.x))i.pop();else break}i.push(s)}return i.pop(),n.length===1&&i.length===1&&n[0].x===i[0].x&&n[0].y===i[0].y?n:n.concat(i)}var $k=_m,Em=Im;const qk=$k,Hk=_.forwardRef(({className:r,sideOffset:n=4,...i},a)=>y.jsx(Em,{ref:a,sideOffset:n,className:Sr("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",r),...i}));Hk.displayName=Em.displayName;const Yf=[{label:"Home",href:"/"},{label:"Writing",href:"/writing"},{label:"About",href:"/about"},{label:"Contact",href:"/contact"}];function Uk(){const[r]=Av(),[n,i]=_.useState(!1);return y.jsx("header",{className:"sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border",children:y.jsxs("div",{className:"max-w-3xl mx-auto px-6 md:px-8",children:[y.jsxs("div",{className:"flex items-center justify-between h-16",children:[y.jsx(Ke,{href:"/","data-testid":"link-home-logo",children:y.jsx("span",{className:"font-serif text-lg font-bold tracking-tight text-foreground",children:"Alban Jerome"})}),y.jsx("nav",{className:"hidden md:flex items-center gap-8","data-testid":"nav-desktop",children:Yf.map(a=>{const s=a.href==="/"?r==="/":r.startsWith(a.href);return y.jsx(Ke,{href:a.href,"data-testid":`link-nav-${a.label.toLowerCase()}`,children:y.jsx("span",{className:`text-sm tracking-wide transition-colors ${s?"text-foreground font-medium":"text-muted-foreground hover:text-foreground"}`,children:a.label})},a.href)})}),y.jsx("button",{className:"md:hidden p-2 text-muted-foreground",onClick:()=>i(!n),"data-testid":"button-mobile-menu","aria-label":"Toggle menu",children:n?y.jsx(Hp,{className:"w-5 h-5"}):y.jsx(Pw,{className:"w-5 h-5"})})]}),n&&y.jsx("nav",{className:"md:hidden pb-4 border-t border-border pt-4","data-testid":"nav-mobile",children:y.jsx("div",{className:"flex flex-col gap-3",children:Yf.map(a=>{const s=a.href==="/"?r==="/":r.startsWith(a.href);return y.jsx(Ke,{href:a.href,onClick:()=>i(!1),"data-testid":`link-mobile-${a.label.toLowerCase()}`,children:y.jsx("span",{className:`text-sm tracking-wide ${s?"text-foreground font-medium":"text-muted-foreground"}`,children:a.label})},a.href)})})})]})})}function Vk(){return y.jsx("footer",{className:"border-t border-border mt-20",children:y.jsx("div",{className:"max-w-3xl mx-auto px-6 md:px-8 py-10",children:y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsxs("p",{className:"text-xs text-muted-foreground",children:["© ",new Date().getFullYear()," Alban Jerome. All rights reserved."]}),y.jsx("span",{className:"text-xs text-muted-foreground/40",children:"|"}),y.jsx(Ke,{href:"/media","data-testid":"link-footer-media",children:y.jsx("span",{className:"text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2",children:"Media"})})]})})})}function Rt({children:r}){return y.jsxs("div",{className:"min-h-screen flex flex-col bg-background",children:[y.jsx(Uk,{}),y.jsx("main",{className:"flex-1",children:r}),y.jsx(Vk,{})]})}function Gk({size:r="md"}){const n={sm:"w-16 h-16",md:"w-24 h-24",lg:"w-32 h-32"};return y.jsxs("div",{className:`${n[r]} rounded-md border border-border/50 bg-muted dark:bg-[hsl(220,15%,18%)] dark:border-[hsl(220,12%,28%)] flex items-center justify-center overflow-hidden flex-shrink-0`,"data-testid":"img-headshot",children:[y.jsx("img",{src:"/images/Alban Jerome.png",alt:"Alban Jerome",className:"w-full h-full object-cover",onError:i=>{const a=i.target;a.style.display="none";const s=a.parentElement;if(s){const c=s.querySelector("[data-fallback]");c&&(c.style.display="flex")}}}),y.jsx("div",{"data-fallback":!0,className:"hidden items-center justify-center w-full h-full",children:y.jsx(Lw,{className:"w-1/2 h-1/2 text-muted-foreground/50"})})]})}function ln({title:r,description:n,ogTitle:i,ogDescription:a,ogType:s="website",ogImage:c}){_.useEffect(()=>{const d=r==="Alban Jerome"?r:`${r} — Alban Jerome`;document.title=d;const f=(p,m,v=!1)=>{const b=v?"property":"name";let x=document.querySelector(`meta[${b}="${p}"]`);x||(x=document.createElement("meta"),x.setAttribute(b,p),document.head.appendChild(x)),x.setAttribute("content",m)};n&&f("description",n),f("og:title",i||d,!0),(a||n)&&f("og:description",a||n,!0),f("og:type",s,!0),f("og:image",c||"/images/AJ .png",!0)},[r,n,i,a,s,c])}const Yk=`\`\`\`markdown
---
title: Canada’s Capital Problem Isn’t Speed. It’s Judgment.
original_publish_date: 2026-02-06
source: "Substack"
original_url: https://albanjerome.substack.com/p/capital-can-move-faster-than-judgment?triedRedirect=true
status: "current"
---


Canada likes to think of itself as cautious.

*   Prudent banks.
*   Institutional patience.
*   A country that doesn’t rush into extremes.
*   That story used to be true.

Today, Canadian capital moves faster than our collective ability or willingness to decide what it’s actually for. And that mismatch is becoming a structural risk.

But for the first time in a while, there are early signs that the conversation may be shifting.

Not toward speed.

Toward responsibility.

---

#### **We Export Judgment Along With Capital**

Canadian capital is everywhere.

*   Infrastructure across the Southern Hemisphere.
*   Logistics and real assets in emerging markets.
*   Digital and private credit exposure south of the border.

Our institutions are respected. Our capital is disciplined. The returns are real.

What’s less clear is the judgment that connects those returns to domestic outcomes.

As capital accelerated outward, we never fully rebuilt the inward-facing architecture, policy, governance, and ownership logic that tell capital what it ultimately serves.

So we ended up with a strange imbalance:

Globally sophisticated capital.

Domestically unresolved priorities.

---

#### **Stability Is Not the Same as Direction**

Canada feels stable. That’s part of the problem.

Stability can disguise drift.

We rarely force ourselves to answer uncomfortable questions in plain language:

*   What outcomes should globally deployed Canadian capital reinforce at home?
*   Who carries the downside when public or quasi-public capital succeeds abroad but domestic systems strain?
*   How do housing, productivity, mobility, and intergenerational equity fit into the same capital story?

Instead, we rely on professional competence to substitute for intent.

It can’t.

Competence allocates.

Judgment decides.

---

#### **The Structural Risk: Capital Moves. Accountability Thins.**

#### Nothing here broke all at once.

It thinned.

Responsibility didn’t disappear—it diffused.

As capital became more mobile than governance could adapt to, accountability extended across borders and timelines. Talent moved ahead of tax logic. Ownership crossed jurisdictions before succession frameworks were designed to govern it.

Each decision made sense in isolation. Within every lane, actors behaved rationally. Efficiently, even.

But systems don’t fail because individuals make bad decisions.

They fail when incentives stop aligning across time—when no one is structurally responsible for outcomes that arrive later.

That’s where Canada sits now.

Not in crisis…In tension.

---

#### **A Subtle Shift: Change Is Being Talked About Differently**

What’s new is not the diagnosis.

It’s the tone.

There’s a growing recognition—quiet, institutional, and overdue—that capital architecture is now a national question, not just a market one.

That judgment can’t always follow the market.

That strategic assets behave like infrastructure.

That long-term resilience requires choices that markets alone won’t make.

This isn’t a pivot yet.

But it *is* a signal.

---

#### **The Durable Alternative: Judgment as a First-Class Constraint**

Canada doesn’t need to slow capital everywhere.

It needs to slow it down **where judgment matters most**.

That means designing before deploying:

*   Ownership logic before capital leaves the country
*   Governance before liquidity events
*   Domestic continuity before global optionality
*   Accountability before acceleration

Strong systems don’t eliminate friction.

They decide where friction belongs.

---

#### **The Future Implication: Canada’s Advantage Is Still Intact—If Used Deliberately**

Canada still has something rare in a volatile world:

Institutional trust.

Policy credibility.

And, critically, time to correct course without a crisis forcing our hand.

But that advantage only holds if we stop mistaking motion for intelligence.

Capital will always move fast.

The question now is whether judgment is finally being treated as something that must move *first*.

Because when judgment leads, capital becomes a tool.

When it doesn’t, capital becomes the system.

And that distinction will define whether Canada’s next chapter is merely efficient or genuinely durable.
\`\`\`
`,Zk=`\`\`\`markdown
---
title: Global Mobility Isn’t Freedom - It’s Responsibility Without a Manual
original_publish_date: 2026-02-02
source: "Substack"
original_url: https://albanjerome.substack.com/p/global-mobility-isnt-freedom-its
status: "Current"
---



![](https://substack-post-media.s3.amazonaws.com/public/images/7f12c248-8b41-4edc-9ff6-d671a005c49d_6960x4640.jpeg)


Global mobility is often framed as a form of freedom.

The ability to move capital, people, and your operations across borders.

To arbitrage geography.

To escape constraint.

To Leverage opportunity

But in practice, global mobility doesn’t remove responsibility.

It **redistributes it—without clearly assigning ownership**.

That distinction matters more than most people realize.

---

**1. The Messy Reality: Mobility Removes Anchors Before It Adds Structure**

Mobility simplifies the visible layer: people love this

*   Residency options
*   Multiple passports
*   Flexible operating footprints
*   Cross-border holding structures

What it also quietly removes are **anchors: people don’t *always* know this.**

*   Stable tax assumptions
*   Clear jurisdictional ownership
*   Consistent banking relationships
*   Default succession pathways

Most systems are designed for permanence.

Mobility introduces motion into frameworks that assume stillness.

The friction doesn’t disappear.

It appears later, when something is tested.

---

**2. The Gap: Flexibility Is Not the Same as Control**

The appeal of mobility is optionality.

The reality is an obligation that you can’t avoid

Once you operate across borders, you inherit:

*   Multiple definitions of residency
*   Conflicting tax tests
*   Parallel compliance regimes
*   Fragmented regulatory oversight

No single authority sees the full structure. And no single advisor is accountable for its durability.

Flexibility without control feels empowering until decision rights become unclear.

---

**3. The Structural Risk: Fragmented Advice, Integrated Exposure**

Most mobile structures fail quietly.

Not because anyone gave bad advice, but because advice was given **in isolation**.

*   Immigration optimized for status.
*   Tax optimized for efficiency.
*   Legal optimized for entity design.
*   Banks are optimized for risk containment.

Each layer made ***sense in isolation.***

The structure as a whole was never stress-tested. Global mobility magnifies exposure when governance is missing.

What appears elegant under calm conditions often ***will and can*** fail under pressure.

---

**4. The Durable Alternative: Treat Mobility as Infrastructure, Not Lifestyle**

Durable mobility isn’t about moving faster or lighter.

It’s about **owning responsibility across jurisdictions**.

That requires designing mobility the way engineers design systems:

*   Clear decision-making authority
*   Explicit tax residency logic
*   Banking is treated as a core constraint, not an afterthought
*   Succession embedded early
*   Governance that survives personnel and policy changes

Mobility should *reduce* fragility. If it increases it, the structure is misdesigned.

---

**5. The Future Implication: Accountability Is Catching Up to Optionality**

Regulators are coordinating.

Banks are de-risking.

Information asymmetry is shrinking. ***Faster than you realize***

The era of casual global mobility is ending.

What replaces it isn’t restriction—it’s **structural accountability**.

The advantage will belong to those who treat mobility as a governance problem, not a lifestyle upgrade.

---

Global mobility isn’t freedom. It’s a responsibility without a manual.

The real question isn’t ***where*** you can move.

It’s whether your structure knows **who is accountable when something breaks**.


![](https://substack-post-media.s3.amazonaws.com/public/images/105aa66b-e45c-4b02-9fc8-008e7174d6a1_1260x709.png)

\`\`\`
`,Kk=`\`\`\`markdown
---
title: How We Think About Global Mobility
original_publish_date: 2026-02-13
source: "substack"
original_url: https://albanjerome.substack.com/p/how-we-think-about-global-mobility
status: "Current"
---


The story most people tell about global mobility is still personal.

Where should I live? Where are taxes lower? Where is quality of life better?

But that framing is already outdated.

In a digitally connected capital environment, mobility is no longer just about people moving. It’s about capital moving faster than the jurisdictions designed to contain it.

And startups sit at the center of that tension.

---

**The Illusion of Geography**

Many still talk about “ecosystems” as if they are physically bounded.

*   Silicon Valley.
*   Toronto.
*   London.
*   Dubai.
*   Calgary

The narrative suggests capital is local, clustered, and place-bound. Rooted to the ground.

But the reality is different.

Today, a Canadian founder can incorporate in Delaware. Raise from a Singapore-based fund. Hire engineers in Poland. Serve customers in Texas and Macau. And close a growth round from a New York crossover fund.

All before relocating personally, if they ever do.

Geography hasn’t disappeared completely, but the conversation has become layered. The operating company may be based in a single jurisdiction.

The IP is owned by another. The holding structure is somewhere else. The founder’s tax residency is in a different jurisdiction.

That is not chaos…That is architecture.

Unless it is intentional, it becomes a source of fragility.

---

**Capital Now Flows Through Networks, Not Borders**

For decades, capital moved through banks. Now it moves through networks and relationships.

*   Angel networks.
*   Syndicates.
*   Family offices.
*   Cross-border VCs.
*   Secondary markets.

My work is across private capital and cross-border structuring, and I see the consistent pattern is this:

Frankly, Capital doesn’t ask, “Where is this company located?”

It asks:

*   Where is the upside?
*   How clean is the structure?
*   How predictable is governance?
*   How portable is the founder?

In that order.

In a digitally connected world, allocators are less constrained by proximity and more constrained by clarity.

The friction has shifted - no longer distance - It is structural coherence.

---

**Personal Mobility Without Capital Architecture**

Founders often think about mobility emotionally:

*   “I want to move to the U.S.”
*   “I want to relocate to Dubai.”
*   “I want optionality.”

But here’s the structural risk:

If your cap table, IP, grants, and investors are Canadian, your personal relocation does not automatically relocate your capital.

Worse, it can create:

*   Tax mismatches
*   Withholding complications
*   Regulatory exposure
*   Permanent establishment risk
*   Governance ambiguity

Mobility without architecture creates friction that compounds.

It feels like freedom.

It behaves like leakage.

---

**Treat Mobility as Infrastructure**

Mobility should not be reactive. It should be engineered. It can’t be an afterthought.

For founders and families to approach global mobility correctly, they must think in layers:

> **Layer 1: Operating Efficiency**
> 
> Where does revenue actually get generated?
> 
> **Layer 2: Capital Efficiency**
> 
> Where do investors prefer to deploy?
> 
> **Layer 3: Governance Durability**
> 
> Where are decision rights anchored?
> 
> **Layer 4: Intergenerational Continuity**

If this compounds over 10–15 years, where will it ultimately stand? That is how capital becomes portable without becoming unstable.

As someone deploying capital, I see early-stage companies underestimate this. They optimize for velocity — Delaware C-Corp, quick SAFE, rapid scale — without mapping the long-term continuity of ownership.

That’s fine for a sprint.

It’s dangerous for a legacy.

---

**Canada’s Strategic Position in a Connected World**

Canada occupies a unique position in this mobility conversation. It is not the largest capital market.

But it is one of the most trusted jurisdictions.

That matters.

For founders, Canada is often not ONLY a residency anchor but,

*   A credibility bridge
*   A governance stabilizer
*   A platform for U.S. expansion

In a fragmented geopolitical environment, trust compounds. Capital always chases upside, and Families will always chase stability.

The jurisdictions that offer both will become structural launchpads.

Canada has the opportunity to be one of them, if it positions itself not as a subsidy environment, but as a durability environment.

---

**The Future**

In the next decade, Founders will be multi-jurisdictional by default, and many already think this way. Investors will underwrite cross-border structures as normal. Families will demand mobility without losing control.

The winners will not be the most mobile. They will be the most architecturally designed.

Global mobility is not about movement. It is about continuity under movement. If the structure cannot carry the load across borders, it will eventually fracture under its own success.

***And capital, unlike people, never sleeps.***

---

If you’re building across borders, the question isn’t:

“Where should I move?”

It’s:

**Can I move my capital without weakening my future control?**
\`\`\`
`,Qk=`\`\`\`markdown
---
title: Why Optimized Tax Structures Still Break
original_publish_date: 2026-02-09
source: "Substack"
original_url: https://albanjerome.substack.com/p/tax-efficiency-is-a-tactic-continuity
status: "Current"
---

Most families who come apart financially didn’t “get it wrong.”

They followed good advice. They optimized intelligently.

They saved meaningful amounts of tax. And still, the system broke their plans.

Not because the structures were illegal or unsophisticated but because they were built to optimize **outcomes**, not **continuity**.

That distinction rarely appears in planning discussions. But it explains most long-term failures I see.

---

**1. Optimization Solves for Today’s Map**

Tax efficiency is compelling because it’s concrete.

You can model it.

You can benchmark it.

Your accountant or financial advisor can defend it in a memo. and an invoice :)

But tax planning, by nature, is a snapshot. It assumes:

*   Stable decision-makers
*   Predictable residency
*   Static family dynamics

Those assumptions hold until they don’t.

What breaks first isn’t compliance.

It’s **coherence**.

---

**2. Control, Not Capital**

When things get hard, successful family offices don’t argue about tax rates.

They argue about:

*   Who can decide
*   Who bears risk
*   Who is accountable when trade-offs emerge

Most structures answer those questions implicitly rather than deliberately.

That works while the founder is active, aligned, and present.

It becomes fragile the moment authority disperses across siblings, jurisdictions, or generations.

---

**3. Correct Advice in Isolation**

Individually, most planning decisions are rational. But the problem is cumulative. Tax efficiency is planned at pt A, while asset protection is planned elsewhere. A jurisdictional hedge layered on top, like a cherry on top.

Each move had logic, *in isolation*

They have also added **interfaces**—handoffs between people, entities, and rules.

Over time, no one is responsible, and, worse, no one knows how the system behaves *as a system*.

That’s where continuity quietly turns to chaos.

---

**4. Design for Endurance**

The most resilient family offices I’ve worked with don’t start with tax.

They start with questions like:

*   What decisions must never be ambiguous?
*   Where do we want flexibility, and where do we want constraints?
*   How should authority evolve as people and geographies change?

Only once those answers are clear does the optimization discussion begin. Tax efficiency must be a tuning exercise, not the architecture.

---

**5. You Can Optimize a System You Understand**

Most planning fails not because it’s aggressive, but because it’s opaque.

Continuity requires:

*   Fewer moving parts
*   Clear escalation paths
*   Structures that don’t require constant explanation to the next generation

This isn’t about being conservative or patronizing. It’s about being legible over time, over generations.

---

**6. Why This Matters Now**

Mobility, cross-border families, and multi-jurisdictional assets are no longer edge cases. More families are looking at them as part of the strategy. They’re the default. In that environment, the limiting factor isn’t tax law.

It’s whether your capital architecture can survive:

*   Leadership transitions
*   Regulatory change
*   Human complexity

Most aren’t tested until it’s too late, because the focus is on the Tax, not if the structure can survive friction

Families who last don’t look the most optimized on paper.

They look the most **intentional** in how control, responsibility, and flexibility are designed.

That difference is subtle.

And it’s decisive.

---

*I spend most of my time thinking about how capital behaves across borders, generations, and moments of pressure. If this resonates, you’ll know why.*
\`\`\`
`,Jk=`\`\`\`markdown
---
title: The First Governance Question Most Founders Ask Too Late
original_publish_date: 2026-02-04
source: "Substack"
original_url:https://albanjerome.substack.com/p/the-first-governance-question-most
status: "Current"
---

*Written in [year]. Archived as part of my body of work.*

Most founders think governance starts when investors show up.

Boards. Termsheets. Voting rights. Controls.

That’s already too late.

By the time governance becomes a factor to consider, the real decisions have already been locked in quietly, structurally, often by default.

The first governance question isn’t *“Who sits on the board?”*

It’s this:

**Who is this company actually being built for—and who carries the downside when things get hard?**

Most founders don’t ask that early.

They assume alignment will emerge naturally from growth, trust, or shared ambition.

It doesn’t.

---

**1. The Messy Reality: Speed Creates Shape—Whether You Design It or Not**

Early-stage companies move fast because they have to. There is no other way to succeed or even survive.

Cash is scarce. Time is compressed. Decisions are made with incomplete information.

In that environment, governance feels like friction or even fictional. Something to “clean up later.”

But governance isn’t a layer you add later on!

It’s the *shape* that forms when capital, control, and accountability interact.

When founders don’t design it, it still forms—through:

*   Who controls bank accounts
*   Who signs contracts
*   How equity is issued (or promised informally)
*   Which advisors are listened to—and which are ignored
*   Who absorbs risk personally when the company stumbles

By the time revenue grows or investors arrive, those early choices have hardened into load-bearing walls.

That’s when governance suddenly matters—because changing it becomes expensive, political, or impossible.

---

**2. The Gap: Founders Confuse Trust With Structure**

Most governance failures don’t come from bad intent.

They come from misplaced trust in *informality*.

Founders assume:

*   “We’re aligned—we’ll figure it out later.”
*   “Everyone’s taking risks—it’ll balance out.”
*   “Control doesn’t matter if the mission is shared.”

But trust without structure isn’t alignment.

It’s ambiguity with momentum.

And ambiguity always resolves itself in one direction:

toward whoever has legal control, informational leverage, or financial staying power.

When pressure hits—missed payroll, down rounds, cross-border complexity, co-founder exits—that’s when the gap becomes visible.

Not between people.

Between **assumptions and reality**.

---

**3. The Structural Risk: Governance Is Usually Designed for Growth, Not Stress**

Most founders accidentally design governance for the *best-case scenario*.

They assume:

*   Capital keeps flowing
*   Everyone stays aligned
*   The company remains domestic
*   Exits are clean
*   Relationships hold

But durable governance is about the *worst-case* moments:

*   Who can block decisions when survival is on the line?
*   Who bears personal liability when structures fail?
*   What happens when capital crosses borders—but control doesn’t?
*   How are founders protected when early investors gain leverage?
*   What happens if the company must slow down to survive?

If governance doesn’t answer those questions early, it will answer them later—brutally, and without consent.

---

**4. The Durable Alternative: Treat Governance Like Infrastructure, Not Paperwork**

Strong founders don’t “add” governance.

They **architect it**.

They ask early, uncomfortable questions:

*   What decisions must *never* be unilateral?
*   Where does control live—and why?
*   How is downside shared, not just upside?
*   What assumptions break if we scale, relocate, or raise differently than planned?
*   Who is protected when growth stalls?

This isn’t about control for control’s sake.

It’s about continuity.

Governance is the infrastructure that allows a company to survive transitions—capital events, leadership changes, geographic expansion, and generational handoffs.

Without it, growth increases fragility instead of resilience.

---

**5. The Future Implication: Governance Is a Founder’s First Legacy Decision**

Founders like to think legacy begins at exit.

In reality, legacy begins with governance.

It determines:

*   Who benefits from the value created
*   Who absorbs risk when the narrative breaks
*   Whether the company compounds—or fractures—over time
*   Whether success produces continuity or conflict

The founders who build enduring companies aren’t the ones who move fastest.

They’re the ones who understand that **speed without structure doesn’t create freedom—it creates deferred constraint**.

The first governance question always comes due.

The only choice is whether you ask it early

Or

Let the system answer it for you later.
\`\`\`
`,Xk=`\`\`\`markdown
---
title: The Problem With Optimizing Capital Before You Understand Its Load-Bearing Role
original_publish_date: 2026-01-26
source: "LinkedIn"
original_url: https://www.linkedin.com/pulse/problem-optimizing-capital-before-you-understand-its-role-jerome-l73wc
status: "Current"
---

*Written in 2026. Archived as part of my body of work.*


![](https://substack-post-media.s3.amazonaws.com/public/images/d2301570-ce35-4a45-97d8-caa85bc19b3c_4930x4930.jpeg)


The unspoken truth is that most capital strategies fail quietly.

Not because the math was wrong.

Not because the tax rate changed.

But because the capital was optimized before anyone understood what it was actually meant to carry.

We treat capital like fuel.

In reality, its structure.

And when you optimize structure without understanding load, failure isn’t dramatic—it’s delayed.

---

### **The Messy Reality: Capital Is Being Tuned for Speed, Not Stress**

Founders, families, and advisors obsess over efficiency:

*   Lower taxes
*   Faster structures
*   Cleaner entities
*   More optionality

But almost no one asks the prior question:

What pressure will this capital face over time?

Capital doesn’t just fund growth.

It absorbs:

*   Governance friction
*   Cross-border complexity
*   Family dynamics
*   Regulatory stress
*   Liquidity shocks
*   Succession events

When those forces show up, “optimized” capital often buckles.

---

### **The Gap: Financial Optimization vs. Structural Understanding**

Optimization assumes stability.

Load-bearing design assumes stress.

Most capital plans are built on spreadsheets that assume:

*   Predictable cash flows
*   Rational decision-makers
*   Clean exits
*   Cooperative jurisdictions
*   Calm family systems

Real life delivers none of that.

Capital that looks efficient in year one often becomes brittle by year five—precisely when the stakes are highest.

---

### **The Structural Risk: Capital Without Governance Is a Weak Beam**

Capital doesn’t fail first.

Governance fails first.

When capital isn’t anchored to:

*   Clear decision rights
*   Cross-border legal coherence
*   Family authority structures
*   Operational accountability

…it becomes a point of leverage for conflict.

This is where you see:

*   Minority disputes
*   Jurisdictional deadlock
*   Tax “efficiency” turning into compliance drag
*   Liquidity events that fracture families

The structure wasn’t wrong.

It was just never designed to carry weight.

---

### **The Durable Alternative: Design Capital Like Infrastructure**

Durable capital architecture starts by asking different questions:

*   Who controls this capital under stress?
*   Where does authority actually sit across borders?
*   What happens when incentives diverge?
*   How does capital behave during succession, not growth?

Only after those answers are clear does optimization matter.

This is why the best capital structures feel “boring” early on.

They aren’t chasing upside.

They’re quietly reinforcing load-bearing walls.

---

### **The Metaphor That Matters: Capital Is a Building, Not a Vehicle**

You don’t tune a building for speed.

You design it for:

*   Weight
*   Weather
*   Time
*   Occupants
*   Unexpected movement - this is your critical factor

Capital works the same way.

If you optimize it like a race car, it performs beautifully—until the road changes, and it changes often.

If you design it like a building, it stands the test of time long after the excitement fades.

---

### **The Future Implication: Resilience Will Outperform Cleverness**

As cross-border systems fragment and governance friction increases, the winners won’t be those who moved fastest.

They’ll be the ones whose capital:

*   Can absorb pressure
*   Can survive transition
*   Can outlast personalities
*   Can carry legacy, not just returns

Optimization is never-ending. But durability is what compounds


![](https://substack-post-media.s3.amazonaws.com/public/images/83145483-c083-47e5-b63a-6331fd041a67_6016x4016.jpeg)


**And a capital that understands its load-bearing role doesn’t just survive stress—it becomes stronger because of it.**
\`\`\`
`,ex=`\`\`\`markdown
---
title: Why Capital Alone No Longer Creates Advantage
original_publish_date: 2026-01-19
source: "LinkedIn"
original_url: https://www.linkedin.com/pulse/why-capital-alone-longer-creates-advantage-alban-jerome-pa2cc
status: "Current"
---

*Written in 2026. Archived as part of my body of work.*

Private capital has become one of the most powerful forces shaping modern businesses and, in some cases, even governments. From family offices and growth equity funds to long-horizon venture capital, private capital today controls trillions of dollars globally. But capital alone has never been the differentiator.

Governance is.

If capital is fuel, governance is the steering wheel. Without it, even the most well-funded organizations drift, stall, or self-destruct.

We’ve seen this play out repeatedly—both in quiet successes and very public failures.

### Capital Is Easy. Discipline Is Rare.

Over the past decade, cheap money rewarded speed over structure. Valuations became headlines. Governance became an afterthought.

The result? Companies that scaled revenue faster than they scaled decision-making, controls, and accountability.

Contrast that with firms backed by patient private capital—capital that prioritizes:

- Clear ownership structures
- Strong boards with real oversight
- Alignment between founders, investors, and operators
- Long-term incentives instead of short-term optics

These companies don’t always grow the loudest. But they endure.

### The Quiet Power of Governance Done Right

Consider **Berkshire Hathaway**.

It’s often discussed as an investment vehicle, but its true strength is governance architecture. Decentralized operations. Clear capital allocation discipline. Extreme trust paired with extreme accountability. Subsidiaries are empowered—but capital is allocated ruthlessly.

There’s no obsession with quarterly theatrics. The system is designed to compound value over decades, not quarters.

Or look at **Patagonia**.

Its governance structure deliberately removed pressure for short-term exits. By locking purpose into ownership, the company aligned leadership decisions with long-term environmental and brand value. The result wasn’t slower growth—it was more durable growth, protected from incentive drift.

These outcomes weren’t accidental. They were designed.

### When Governance Fails, Capital Accelerates the Damage

On the other end of the spectrum, we’ve seen capital amplify failure when governance is weak.

Theranos is an extreme but instructive case. High-profile investors. Massive capital inflows. Minimal governance scrutiny. A board optimized for optics rather than oversight.

Capital didn’t create the failure but it accelerated it.

Private capital without governance doesn’t de-risk a business. It magnifies its blind spots.

### Family Offices and the Long View

Family offices understand this intuitively.

Unlike institutional funds bound by fund cycles, many family offices think in generations. Governance for them isn’t about compliance—it’s about continuity.

The most successful family-backed enterprises invest early in:

- Succession planning
- Independent boards
- Clear separation between ownership and management
- Defined decision rights across generations

They know that unresolved governance questions don’t disappear. They compound—just like capital, but in the wrong direction.

### Long-Term Value Is Engineered, Not Discovered

What consistently separates enduring companies from fragile ones isn’t intelligence, ambition, or access to capital.

It’s structure.

Strong governance creates:

- Better capital allocation
- Faster recovery from mistakes
- Healthier leadership transitions
- Trust with regulators, partners, and future investors

Private capital has a unique opportunity—and responsibility—to shape these systems early, before scale locks in dysfunction.

Because once complexity sets in, governance debt becomes far harder to unwind than financial debt.

The real question isn’t how much capital a company raises.

It’s whether the systems guiding that capital are built to last.

What do you think matters most in governance when building for the long term?
\`\`\`
`,tx=`\`\`\`markdown
---
title: Why ‘Optionality’ Collapses Without Architecture
original_publish_date: 2026-02-11
source: "Substack"
original_url: https://albanjerome.substack.com/p/why-optionality-collapses-without
status: "Current"
---

*Written in [2026]. Archived as part of my body of work.*

![](https://substack-post-media.s3.amazonaws.com/public/images/6df82890-ba37-41cd-8dd2-51457404f856_1125x750.png)


Optionality is one of those words that sounds intelligent enough to escape scrutiny.

Founders use it. Investors praise it. Advisors sell it.

“Keep your options open.”

“Don’t lock yourself in.”

“Flexibility is valuable.”

*All true. And still, misleading.*

Because in real systems—capital, families, jurisdictions, companies—optionality without architecture doesn’t expand freedom. It quietly destroys it.

Most people don’t lose optionality because they made the wrong choice. They lose it because they postponed structure. They believed that by not committing, they were staying agile. In practice, they were accumulating invisible constraints: tax exposure, governance ambiguity, decision latency, regulatory friction, and human fatigue.

By the time a real option appears—a liquidity event, a relocation window, a generational transition—the system can’t move.

Not because the opportunity isn’t good.

Because the structure can’t carry the load.

---

**Optionality is not freedom. Its capacity**

An option only exists if *it can be* exercised. That sounds obvious, but most planning ignores it, or underplays it

You don’t have the optionality to relocate if:

*   Your entities are jurisdictionally tangled
*   Your income streams are residency-sensitive
*   Your family governance isn’t aligned

You don’t have the optionality to sell if:

*   Control rights are unclear
*   Reporting is inconsistent
*   Key decisions sit with exhausted founders or disengaged siblings

You don’t have the optionality to slow down if:

*   Cash flow depends on your constant presence
*   Risk is concentrated in a single operating entity
*   There is no buffer layer between you and the system

Optionality isn’t a mindset. It’s an engineered condition.

---

**Architecture is what makes options real**

Think of capital like a building.

You can redesign rooms, add floors, change tenants—but only if the load-bearing structure was designed for change.

Most people build beautiful interiors:

*   Tax efficiency
*   Clever deal terms
*   Elegant narratives

But they ignore the foundation:

*   Who decides
*   Who bears the downside
*   What breaks first under stress

Without architecture, every new option adds weight. Eventually, the structure cracks.

That’s when people say, “I had no choice.”

They did. Once. Years ago. When structure still felt optional.

---

**Flexibility without governance becomes fragility**

Here’s the uncomfortable truth:

The more complex your life becomes, the less improvisation you can afford. Cross-border families. Multi-entity businesses. Intergenerational capital. These systems don’t fail because they’re rigid. They fail because authority is vague and responsibility is diffuse.

When a shock arrives—policy change, health issue, war, market drawdown—everyone looks at each other.

Optionality collapses in that moment, not because there were no paths, but because no one was empowered to choose one.

Governance isn’t bureaucracy. It’s decision velocity under stress.

---

**The durable alternative**

Durable optionality is built backwards.

You don’t ask, “What might I want to do someday?” You ask, “What must remain true no matter what happens?”

*   Continuity of control
*   Clarity of decision rights
*   Separation between personal risk and system risk
*   Structures that survive individual absence

From there, optionality emerges naturally—not as a promise, but as a property of the system.

You don’t scramble to adapt.

You rotate the system to meet the moment.

---

**The future implication**

In a world of accelerating policy shifts, demographic transitions, and capital mobility, optionality will be mispriced. People will continue to pay for flexibility in narrative form—slide decks, structures optimized for today, cleverness over coherence.

Those who think like architects will do the opposite. They will invest early in boring things:

*   Governance
*   Redundancy
*   Decision clarity
*   Structural slack

And when change arrives—as it always does—they won’t ask what their options are.

They’ll already know.

Because their system was built to move.
\`\`\`
`,nx=`---
title: Alignment Is Cheaper Than Repair
original_publish_date: 2026-02-20
source: Substack
status: current
theme: Capital
featured: false
---

Most founders think startups die when the bank account hits zero.

They're wrong. By the time you're staring at a dwindling runway, the "death" happened six months ago in a quiet office hours or over a painful WhatsApp thread. Startups don't usually starve; they succumb to structural rot.

Every founder I know has obsessed over "**Product-Market Fit**" but often ignores or is ignorant of "**Alignment-Market Fit**." It's like building Ferraris with cardboard chassis and wondering why the wheels fly off at 100 mph.

If you want to build something that outlasts a seed round, you have to stop treating "alignment" like a soft skill and start treating it like infrastructure. Here are three ways to stop the rot before it starts.

---

Equity is Permanent, but Effort is Variable

A lot of Founders usually split equity based on "vibes" and history. Have you known each other since college? 50/50. You both have big titles? 50/50.

**The reality:** In two years, one founder will be grinding 80-hour weeks while the other is coasting, having a midlife crisis, or simply outgrown by the scale of the company. Static cap tables are resentment machines.

*   **Best Move:** Stop underwriting for friendship and start underwriting for evolution. Use **dynamic vesting** or milestone-based equity triggers.

If your cap table doesn't have a "divorce clause" or a way to recalibrate when roles change, you aren't partners—you're hostages to each other's past versions.

"Go Global" can be a Trap, Not a Win

The "Go Global" pitch deck slide looks sexy. The reality of a surprise $200k tax bill from a foreign jurisdiction because you "hired a guy in Berlin" is not.

Founders who treat international expansion as a sales exercise are in for a structural nightmare. Every new border you cross adds a layer of "friction" (tax leakage, compliance hurdles, transfer pricing) that acts like a hidden tax on your speed.

*   **Best Move:** Don't just "test the market." Align your legal and tax architecture *before* the first hire. If your structure isn't load-bearing for cross-border complexity, the weight of the growth will eventually collapse the entire entity. Expansion without structural alignment isn't scaling; it's just dragging an anchor through more oceans.

Your Investor's Clock is Ticking Faster

Valuation can be a vanity metric if founders brag about it on LinkedIn. But the most expensive money you'll ever take is "fast" money for a "slow" business.

If your investor has a 5-year fund cycle and your business needs 7 years to hit true scale, they will eventually force you to choose between **velocity and durability**. They will push for a premature exit or "burn as ambition" just to hit their internal IRR targets.

*   **Best Move:** Vet your investors on **Time Horizon**, not just their Check Size. Ask what happens when the market dips. Do they value the "upside narrative" more than the "downside protection"?

Remember The "cheapest" capital is the money that lets you keep building your vision, not someone else's exit timeline.

---

Alignment conversations are awkward, uncomfortable, and feel like a buzzkill during the "honeymoon phase" of a startup.

But remember: **Alignment is cheaper than repair.** An awkward conversation today costs you a few hours and a drink, okay, maybe a few :). A repair conversation two years from now costs you the company.
`,rx=`---
title: "Compliance Is Not a Checkbox. It's Infrastructure."
original_publish_date: 2026-02-25
source: Substack
status: current
theme: Cross-border
featured: false
---

Most founders don't fail because of bad products. They fail because of invisible drag. And if you're building across borders, that drag isn't operational.

It's compliance.

Not the dramatic, headline-making kind. You may not make it to the headlines. The slow, compounding kind that erodes optionality, distracts leadership, and quietly taxes growth.

Let's unpack it.

---

**Compliance Is NOT a Checkbox,**

Most early-stage founders see compliance as:

*   A lawyer's problem
*   An accountant's annual task
*   A "we'll fix it before Series A" issue

If you're incorporating in Canada while serving customers in the United States, hiring contractors in India, and raising funds from an investor in the United Kingdom, you are not running a local startup.

You are running a cross-border architecture.

And architecture, ignored early, becomes load-bearing later. The gap isn't knowledge. It's sequencing. A lot of Founders optimize product and fundraising first. They backfill the structure later.

That works—until it doesn't.

---

**Compliance Drag Is Non-Linear**

Compliance drag doesn't show up as a single catastrophic event. It shows up as friction:

*   Delayed closings because your cap table doesn't align across jurisdictions
*   Withholding tax surprises on cross-border dividends
*   Permanent establishment risk because a key employee sits in the wrong country
*   Banking friction when revenue flows don't match your legal footprint
*   Investors discounting valuation due to restructuring risk

Individually, these look manageable. Collectively, they compound.

A founder once told me: "We're growing 40% YoY, but it feels heavier every quarter." That heaviness is structural misalignment. You cannot scale velocity on top of misaligned legal and tax infrastructure without paying for it later—in time, dilution, or both.

And here's the part advisors rarely say clearly:

Cross-border compliance drag increases your effective burn rate. Not because of fees. Because of distraction.

---

**Design Before You Scale**

Durable founders don't treat compliance as a defence.

They treat it as capital architecture.

That means asking earlier:

*   Where will revenue actually accrue?
*   Where will IP sit—and why?
*   Where will key decision-makers reside?
*   Which jurisdictions do we want to have optionality in five years from now?

This is not about aggressive tax engineering. It's about continuity.

If you plan to eventually exit to a U.S. acquirer, structure matters.

If you plan to relocate personally, residency planning matters.

If you plan to build a multi-generational enterprise, governance matters even more.

Think of compliance like plumbing inside a high-rise.

You don't see it.

But once the concrete is poured, it's expensive to move.

---

**Optionality Is the Real Asset**

In a world of:

*   Remote teams
*   Borderless capital
*   Distributed customers

The winners won't be the fastest builders.

They'll be the best architects.

Founders who treat cross-border compliance as:

*   A continuity decision
*   A governance decision
*   A future exit decision

Not just a tax filing obligation.

Because the real risk isn't paying more tax this year.

The real risk is having to unwind your entire structure when an opportunity arises.

And opportunity never waits for cleanup.

---

**A Hard Question for You**

If a strategic buyer approached you tomorrow from another jurisdiction:

Would your current structure accelerate the deal? Or complicate it? Cross-border compliance isn't about fear.

It's about friction.

And friction, left unmanaged, becomes structural drag. The earlier you design for durability, the later the growth feels.
`,ix=`---
title: "Compounding or Corroding? The Three Signals of Structural Breakdown"
original_publish_date: 2026-02-23
source: Substack
status: current
theme: Governance
featured: false
---

Most family enterprises don't collapse.

They stall.

Decisions slow down. Expansion hesitates. Tension increases. Tax bills quietly rise. Nothing explodes, but nothing compounds cleanly either. They implode, they rot.

Structural friction rarely announces itself.

It accumulates. If you're leading or advising a family enterprise, here are three signals to watch and what to do immediately when you see them.

---

1. **Governance Is Still Personality-Driven**

Decisions still rely on the founder's judgment, informal consensus, or private side conversations.

There is no:
* Formal capital allocation framework
* Independent oversight
* Clear separation between ownership and management
* Defined decision rights across generations

It "works" because relationships are still intact.

**The Structural Risk**

As assets grow and generations expand, informality turns into fragility. When governance depends on personalities, succession becomes destabilizing. When decision rights are unclear, capital becomes political.

And politics erodes compounding.

> Do three things immediately:
> 1. **Separate ownership from management.** Even if the same people sit in both roles, define the distinction.
> 2. **Create a written capital allocation policy.** Where does reinvestment stop? Where does liquidity begin?
> 3. **Introduce at least one independent board voice.** Not for optics — for discipline.

Governance is not bureaucracy. It is load-bearing architecture. Design it while trust is high, not after it fractures.

---

2. **Global Family But Domestic Structure**

Children are studying abroad. Assets are being acquired in multiple countries. Family members hold different residencies. But the holding company, estate planning, and tax architecture are still anchored in the founder's original jurisdiction.

**The Structural Risk**

Cross-border mobility without structural redesign creates invisible exposure:
* Double taxation
* Estate complexity
* Regulatory risk
* Liquidity friction during exits
* Currency mismatch

The enterprise becomes international.

The structure does not. Eventually, something triggers a forced restructuring — often during succession or a liquidity event.

That is the most expensive time to redesign architecture.

> You have to treat Geography as Strategy. Before expansion continues, ask:
> * If a next-gen member relocates, what breaks?
> * If a liquidity event happens tomorrow, where does tax leakage occur?
> * If the operating company scales internationally, does the holding structure support it?
> Then:
> 1. Align holding companies with residency reality.
> 2. Stress-test estate planning across jurisdictions.
> 3. Integrate legal, tax, and operational advisors into a unified design conversation.

Cross-border structuring is not about tax minimization. It is about continuity under mobility.

---

3. **Capital Has No Unified Mandate**

Different generations want different risk profiles. That is the nature of humanity. Every Generation defines its own importance. One wants preservation. One wants venture exposure. One wants liquidity.

There is capital but no agreed philosophy. Without a written mandate:
* Investment decisions become emotional.
* Liquidity events trigger tension.
* Portfolio drift increases.
* Advisors receive conflicting instructions.

Capital becomes reactive. And reactive capital, as you will agree, does not compound efficiently.

> Write a Family Capital Charter, not a vision statement.
>
> A framework.
>
> Define:
> * Target return expectations
> * Liquidity buffers
> * Risk segmentation (operating, growth, venture, preservation)
> * Voting thresholds for major allocations
>
> Segment capital intentionally. You do not need identical risk appetites. You need architectural coherence. Capital without mandate fragments families.

Capital with a mandate builds a legacy!

---

Honestly, Structural friction is rarely about competence. It's about complexity outpacing design. If you're leading a family enterprise, ask yourself:
* Is governance formalized — or relationship-driven?
* Is our structure aligned with where the family lives or where it started?
* Does our capital operate under a shared mandate or silent tension?

If any answer feels ambiguous, that's your signal.

Durability is not created during a crisis. It is engineered in advance. Because once friction becomes visible, you're no longer designing for legacy.

You're negotiating damage control. And that is always more expensive.
`,ox=`---
title: Family Day, Founders, and the Missing Quarterback
original_publish_date: 2026-02-17
source: Substack
status: current
theme: Capital
featured: false
---

### Wealth Is a System. Someone Has to Call the Play.

Yesterday was **Family Day** across much of Canada.

For many founders and high-net-worth families, it was a rare pause. No investor calls. No board decks. No tax memos. Just time with the people this is all supposed to be for.

And that's what I feel gets lost in the noise:

The people we build for — our families — experience our lives holistically.

But the people we hire to advise us?

They work in silos.

![](https://substack-post-media.s3.amazonaws.com/public/images/e450937f-486a-488a-8d5e-bfdbd4def021_1125x750.png)

---

**The Optimization Trap**

A good accountant will optimize for taxes, while lawyers optimize structures. Your investment managers will optimize portfolios, just as insurance advisors optimize coverage.
That is their Job! Their expertise, but no one is accountable for the entire field.

And that's where things quietly break, and sometimes not so quietly.

Founders especially feel this. You might be building a venture-backed startup. You might be bootstrapping toward an exit. You might already be in liquidity planning mode. The complexity compounds fast:

*   Corporate structure vs. personal tax exposure
*   Equity compensation vs. estate planning
*   Risk concentration vs. long-term asset allocation
*   Cross-border issues (particularly common between Canada and the U.S.)
*   Family governance vs. operating control

Every advisor has a mandate. But no one has the mandate to integrate.

---

**Startups Scale. Complexity Multiplies.**

In the early days, simplicity masks risk.

You're a heads-down building product. Maybe you just closed a seed round. Maybe your cap table is still clean. Maybe your net worth is 80% (or 110%) tied to one illiquid asset — your company.

No problem, right? That's how wealth gets built.

But as you scale — Series A, B, C… or profitability and dividend flow — your personal financial system often lags years behind your business sophistication.

The company becomes world-class. The family's planning stays reactive.

I've seen founders with:

*   Multi-million dollar liquidity events and no integrated estate structure
*   Cross-border tax exposure that they didn't realize existed
*   Investment portfolios built independently of liquidity timing
*   Insurance coverage is misaligned with real balance sheet risk

None of this is because their advisors are bad.

It's because no one is quarterbacking.

---

**High Net Worth Doesn't Equal High Coordination**

High-net-worth individuals (HNIs) often assume that hiring "good people" solves coordination.

But HNIs typically have:

*   A tax team
*   A corporate lawyer
*   An estate lawyer
*   A portfolio manager
*   A private banker
*   Maybe a family office consultant

Everyone produces great memos. Few sit in the same room. And even fewer are accountable for the integrated outcome.

*   If the tax structure reduces personal income tax but complicates succession, whose problem is that?
*   If the portfolio is optimized for long-term growth but liquidity is needed in 18 months, who recalibrates that?
*   If the founder's risk exposure is 90% correlated to one sector, who challenges that concentration in context?

This is where the metaphor matters.

> Football teams don't win because every player optimizes their own stat line. They win because someone reads the field and calls the play.

Someone has to quarterback.

---

**Family Day Is the Reminder**

I grew up in India. We didn't have a formal family day. Every day was family day. But it is an interesting day for all of us - Family Day has a useful forcing function.

Because when you zoom out, wealth is not a spreadsheet exercise. It's a system designed to serve a family across decades. You have to look at startups that create asymmetric outcomes. Liquidity events that could potentially change identities.

HNIs transition from builders to stewards. But families live in continuity. The kids don't care how clever the corporate structure is. Spouses don't experience wealth in tax tranches.

Legacy isn't built in quarterly optimization. It's built through integrated decision-making.

---

**What a Quarterback Actually Does**

Quarterbacking isn't about replacing specialists.

It's about:

1.  **Setting the integrated objective**
    What are we optimizing for? Exit in 5 years? Multi-generational capital? Philanthropic impact? Geographic flexibility?
2.  **Aligning incentives across advisors**
    Ensuring the tax strategy, estate plan, portfolio allocation, and corporate structure serve the same long-term thesis.
3.  **Managing sequencing risk**
    Timing liquidity, diversification, gifting, and restructuring intelligently — not reactively.
4.  **Stress-testing the whole system**
    What happens if the exit is delayed?
    If valuation compresses?
    If residency changes?
    If a founder burns out?

This role is especially critical in countries such as Canada, where cross-border mobility, U.S. capital markets, and domestic tax complexity intersect.

Founders often build globally but plan locally. That mismatch creates friction later.

---

**The Real Question**

Most advisors are excellent within their lane.

But:

*   Who owns the whole balance sheet?
*   Who integrates business risk with personal risk?
*   Who aligns capital strategy with family values?
*   Who makes sure today's optimization doesn't undermine tomorrow's legacy?

Someone has to. Because families don't live in silos.

And wealth, if it's going to matter, has to work the same way.
`,ax=`---
title: Fast Growth. Fragile Foundations.
original_publish_date: 2026-03-04
source: Substack
status: current
theme: Capital
featured: false
---

Engineering can't replace architecture.

And I'm not talking about constructing a magnificent building—though I suspect this applies there too.

I'm talking about companies.

*   Capital.
*   Governance.
*   Expansion.
*   Education systems.
*   Family enterprises.
*   Entire cross-border lives.

We've become exceptional at engineering, building and growing wealth. We've become careless about architecture. And the cost doesn't show up immediately.

It compounds.

---

![Alban Jerome's post image](https://substackcdn.com/image/fetch/$s_!Qd65!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F158a87ce-9a10-4cb4-9ace-952f95eaf449_500x750.png)

**The Illusion of Progress**

Engineering feels productive. You are actively building… adding more features, getting more hires…entering more markets. You raise more capital and More tools are layered onto the stack.

Honestly, it is a bit exciting work.

From the outside, it looks like momentum. But the truth is, architecture is invisible work.

It asks harder questions:

*   What is this system actually designed to do?
*   What load is it meant to carry?
*   What happens when stress hits it?
*   What is the failure point?

Most founders, boards, and even family enterprises skip this layer. They optimize components without questioning the structure.

That's how you get fast growth sitting on fragile foundations.

---

**Engineering solves problems inside a system. Architecture defines the system itself.**

Engineering asks:

> How do we make this better?

Architecture asks:

> Should this exist in this form at all?

In startups, this shows up as:

*   Hiring faster without clarity on decision rights.
*   Expanding internationally without governance alignment.
*   Adding product lines without capital discipline.

In family enterprises:

*   Creating holding entities without succession clarity.
*   Structuring tax vehicles without intergenerational governance.
*   Deploying capital without defining long-term purpose.

The result?

Brilliant engineering. Undefined direction, or to put it colloquially, roll the dice and hope it lands.

---

**The Structural Risk**

When architecture is weak, engineering accelerates failure. More capital doesn't fix misalignment. It magnifies it. More markets don't fix governance gaps. They multiply them. More technology doesn't fix cultural confusion. It scales it.

Here's the pattern I've seen repeatedly:

1.  Growth outpaces clarity.
2.  Complexity outpaces oversight.
3.  Incentives drift.
4.  Control erodes.
5.  Repair becomes expensive legally, financially, and emotionally.

By the time people notice the cracks, they are already load-bearing fractures. Governance debt is harder to unwind than financial debt. Cross-border misalignment is harder to reverse than poor marketing. And intergenerational conflict is far more expensive than any tax bill.

---

**The Durable Alternative**

If engineering is execution, architecture is continuity.

Here's how you fix it:

> Before expanding:
>
> *   What risk profile is acceptable?
> *   What jurisdictions can the governance structure actually support?
> *   What is the liquidity horizon?
>
> Design for stress, not optimism. If the system cannot withstand a 30% contraction, geopolitical friction, or regulatory change, it is not built. It is assembled.

---

**Separate Ownership, Control, and Management Early**

In founder-led and family enterprises, these layers blur.

> Architecture requires clarity:
>
> *   Who owns?
> *   Who decides?
> *   Who operates?
> *   Who arbitrates conflict?

Ambiguity here feels collaborative until stress arrives.

Then it becomes litigation.

---

**Align Incentives Across Time Horizons**

Engineering optimizes for this quarter or this year. Architecture optimizes for the next generation.

> Compensation plans, board mandates, capital allocation policies - they must reflect long-term continuity, not short-term optics.

If your governance model rewards velocity over resilience, don't be surprised when resilience disappears.

---

**The Future Implication**

The world is becoming more engineered. AI can optimize will dwindly human intervention. Capital can scale very fast. Software can automate.

But none of it replaces architecture.

In fact, the more tools we add, the more architecture matters. Because when velocity increases, structural weakness becomes apparent sooner. The next decade will not punish those who move slowly.

> It will punish those who scale fragile systems.

Durability will outperform speed. Governance will outperform narrative. Continuity will outperform valuation.

---

A well-engineered bridge looks impressive, BUT A well-architected system survives storms no one predicted. The question isn't whether your organization is engineered well.

It's whether it was architected to last. And those are very different conversations.
`,sx=`---
title: The Hidden Cost of Pretending It's Simple
original_publish_date: 2026-02-27
source: Substack
status: current
theme: Capital
featured: false
---

Founders are often taught to fear complexity.

"Keep it simple."

"Focus."

"Do one thing well."

All good advice. Just incomplete. Because complexity isn't what kills startups. Life is complex, and it's not going away.

Unacknowledged complexity does.

---

**The Lie of "Simple"**

Every early-stage product feels simple at first.

*   One customer segment.
*   One problem.
*   One solution.
*   One growth channel.

Then reality arrives. Customers behave differently from what was expected. Use cases diverge from what you expect. Edge cases appear and become more common. Integrations are requested when Regulations change. Your Pricing gets to feel complicated - are you overcharging or undercharging

The team grows, and the system is no longer simple. It was *unobserved*.

Simplicity at the start isn't proof of elegance. It's proof you haven't seen enough yet.

---

**Complexity Is a Feature of Growth**

You have to keep in mind - As your company scales, three things will expand:

1.  **Surface area** — More users, more markets, more use cases.
2.  **Interdependencies** — Teams rely on each other. Systems connect.
3.  **Decision velocity** — More decisions, happening faster.

All part of GROWTH. That's not dysfunction. That's evolution. Trying to "eliminate complexity" at this stage often creates fragility:

*   Over-standardized processes that slow innovation.
*   Artificial constraints that ignore real customer needs.
*   Oversimplified metrics that hide underlying problems.

You can't build a meaningful company without accumulating complexity. The question is whether you see it clearly. While in the early days, you do everything.

But as you grow, you will delegate tasks. And smart founders realize the work isn't tasks - it's systems.

Founders who struggle at scale often stay in task mode:

*   Approving details
*   Fixing isolated issues
*   Making one-off exceptions

But growth requires moving up a level:

*   Designing repeatable decision frameworks
*   Clarifying ownership
*   Reducing hidden dependencies
*   Building feedback loops

You stop solving problems directly and start shaping the environment where problems are solved. That's not adding complexity.

That's acknowledging it.

---

*Not seeing or* unacknowledging *will not make the complexity go away.* Unacknowledged complexity shows up as:

*   "Why does this keep breaking?"
*   "Why are customers confused?"
*   "Why are teams misaligned?"
*   "Why are we constantly firefighting?"

These aren't execution problems. They're modelling problems. When your mental model of the business is simpler than reality, you make confident decisions based on incomplete maps.

And incomplete maps are dangerous at scale.

---

**Complexity Integrators**

Your job isn't to eliminate complexity. You will eventually end up with consultants who do that for you and charge you an arm and a leg for it.

Your job is to:

*   Make it visible.
*   Name it.
*   Design for it.

That means:

*   Documenting assumptions before they become doctrine.
*   Mapping dependencies across product, GTM, and operations.
*   Revisiting org structure as the company evolves.
*   Accepting that edge cases are signals, not annoyances.

Mature founders don't pretend complexity doesn't exist. They architect around it.

---

There are two types of simplicity:

**Naive simplicity:** "We only serve one type of customer."

(But in reality, five distinct personas are emerging.)

**Strategic simplicity:** "We consciously choose to focus on two segments because they share infrastructure and margin profile."

The difference is awareness. Same thing, but the latter helps you scale and grow.

Strategic simplicity is complexity managed. Naive simplicity is complexity ignored.

> And this case - Ignorance is NOT Bliss :)

---

**What to Do This Week**

If you're a founder, ask yourself:

*   Where are we pretending things are simpler than they are?
*   What keeps surprising us?
*   What edge cases are becoming common?
*   Where are decisions bottlenecked because ownership is unclear?

Write the answers down.

Most scaling pain is not from complexity itself — it's from discovering it too late.

---

The companies that endure aren't the ones with the simplest models. They're the ones whose leaders continuously update their mental models as reality evolves.

> Complexity isn't your enemy.
> Blindness is.

And the founder's edge isn't reducing the world to something small. It's seeing the whole thing clearly — and building accordingly.
`,lx=`---
title: "If Your Startup Can't Run Without You, You Don't Have a Company Yet"
original_publish_date: 2026-03-13
source: Substack
status: current
theme: Capital
featured: false
---

Startups love the mythology of the heroic founder. **Jeff Bezos**, Sam Altman, Peter Theil...The charismatic visionary. The relentless operator. The genius product mind who bends reality through sheer will.

But here's the uncomfortable truth most founders only learn after scaling:

**If the company cannot function without you, you haven't built a company.**

**You've built a dependency.** And dependencies do not scale.

They collapse the moment the founder becomes the bottleneck. The real job of a founder is not to run the company forever.

**It's to design systems that survive them.**

![](https://substack-post-media.s3.amazonaws.com/public/images/fe78b735-3986-422e-8551-1affdd8d04a7_1125x750.png)

---

**Founder Dependency Trap**

Most startups begin as extensions of the founder. It the who founder sells. It the who founder hires. It the who founder closes investors. It the who founder resolves product debates. It the who founder holds the culture together.

This is normal in the early stage.

But many companies never graduate beyond this phase. They grow revenue, hire employees, raise capital...yet the operating system of the company is still **one human brain.**

This is where fragility begins...because founders eventually become the constraint.

---

**Growth Exposes Structural Weakness**

The moment a startup begins to scale, hidden structural problems emerge:

*   Decisions slow down
*   Teams escalate everything upward
*   Strategy becomes reactive
*   Execution depends on constant founder intervention. This isn't a talent issue.

It's an architecture problem. The company was built around **the founder's presence**, not around **durable systems**. Think of it like building a skyscraper where the architect must personally hold up the beams.

At small scale, it works. At larger scale, it collapses.

---

> **Uber and the Founder Bottleneck -** In the early days of **Uber**, the company moved with incredible speed under **Travis Kalanick**. Decisions were centralized. The culture was aggressive. The Growth was relentless.
>
> But the same founder-driven intensity that accelerated expansion also created systemic fragility:
>
> *   cultural breakdowns
> *   governance conflicts
> *   operational chaos across global markets
>
> Eventually the board had to intervene. Kalanick stepped down, and Uber had to rebuild governance, culture, and operational systems under **Dara Khosrowshahi**.
>
> The lesson wasn't that founders are the problem. The lesson was simpler: **Uber grew faster than its internal systems matured.** And the founder became the central load-bearing pillar.

---

**The Alternative - Founder as System Designer**

Great founders eventually evolve from operators into architects. Instead of solving every problem themselves, they design **systems that solve problems repeatedly.**

This shift happens across three layers.

> **Layer 1: Decision Architecture**

If every important decision flows through the founder, the company cannot scale. Durable companies build **decision frameworks**:

*   Clear ownership
*   Defined escalation paths
*   Data-driven evaluation systems

Look at **Amazon**...**Jeff Bezos** institutionalized decision frameworks like **Type 1 vs Type 2 decisions**, allowing teams to move fast without constant executive oversight.

The result?

Amazon scaled decision velocity across thousands of teams.

---

> **Layer 2: Cultural Operating System**

Culture cannot depend on founder charisma. If it does, culture evaporates when the founder exits. Instead, durable companies encode culture into:

*   hiring filters
*   incentive systems
*   performance reviews
*   operating principles

Netflix famously built its culture around the **Freedom & Responsibility** framework under **Reed Hastings**. It became an internal operating manual for behavior not just a slogan.

---

> **Layer 3: Institutional Memory**

Young companies rely on conversation. Mature companies rely on **systems of record.** This includes:

*   documented processes
*   shared knowledge systems
*   transparent metrics dashboards

Without institutional memory, companies repeat mistakes every year. With it, organizations compound learning.

---

**The Founder Evolution Curve**

Most successful founders go through three distinct stages.

*   **Stage 1 — Builder:** You create the product, close early customers, and prove demand. Speed matters more than structure.
*   **Stage 2 — Operator:** You hire teams, manage complexity, and drive execution. Leadership replaces individual contribution.
*   **Stage 3 — Architect** Your primary job becomes **designing systems**...governance, incentives, communication structures & decision frameworks

At this stage, the founder is no longer the engine of the company. They are the **designer of the engine.**

![](https://substack-post-media.s3.amazonaws.com/public/images/580e4659-515b-4bd1-beaa-64b57cfbfa50_500x281.png)

---

**The Companies That Truly Survive**

The startups that endure for decades share one common trait: They no longer depend on the founder.

Consider companies like:

*   Apple after **Steve Jobs**
*   Microsoft after **Bill Gates**

These organizations outlived their founders ( in some cases, literally) because systems were eventually built that could operate independently. When companies fail after founders exit, it's rarely because the founder left.

It's because the **systems were never designed to survive them.**

The ultimate test of a founder is not:

*   the valuation they reach
*   the funding they raise
*   or the growth they generate

It's much simpler.

> **If you disappeared for six months, would the company continue to function?**

If the answer is no, the work isn't finished. Because building a startup is not about becoming indispensable. **It's about making yourself progressively unnecessary.** That's when a company stops being a startup.

And starts becoming an institution.
`,cx=`---
title: "Just Because the Market Is There Doesn't Mean You Should Enter It"
original_publish_date: 2026-03-02
source: Substack
status: current
theme: Cross-border
featured: false
---

The most dangerous time to expand internationally is when "the numbers" tell you to.

Your Revenue is growing. Inbound interest is coming from overseas. An investor introduces you to "easy" distribution in another country. Now your TAM slide gets bigger. The story gets more exciting.

And yet—this is exactly when restraint becomes strategic. International expansion is not a growth tactic, well, not always. It's a structural decision that reshapes your company's legal exposure, capital stack, governance burden, and leadership bandwidth.

Here's when not to do it—even if the market is there.

![](https://substackcdn.com/image/fetch/$s_!FiBK!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F21856bc0-da39-48e4-bc29-03c659760b68_1125x750.png)

---

## When Product-Market Fit Is Local, Not Structural

You have traction in your home market. Strong revenue growth. Low churn. Clear ICP. But your product-market fit may be contextual—built on local regulation, culture, pricing power, or distribution mechanics that don't travel well.

International markets magnify weak assumptions.

- Customer acquisition costs shift.
- Regulatory regimes change.
- Payment cycles stretch.
- Hiring quality varies.
- Enforcement environments differ.

If your margins are thin or your retention is fragile, expansion doesn't diversify risk. It exports instability.

> Pressure-test whether your value proposition survives without local advantages:
> - Can pricing hold after currency swings?
> - Does compliance add fixed overhead?
> - Will your CAC double before brand equity compounds?

True cross-border readiness is operational resilience, not enthusiasm. If your foundation isn't load-bearing, international complexity becomes governance debt, hard to unwind and expensive to repair.

---

## Leadership Bandwidth Is Already Stretched

It is common for founders believe expansion is a sales problem. It's not. It's a leadership allocation problem. Every new jurisdiction introduces:

- Legal entities
- Tax exposure
- Transfer pricing questions
- Employment law constraints
- Banking relationships
- Reporting complexity

If your leadership team is already operating at full capacity, global expansion doesn't create leverage. It fractures attention. And attention, NOT capital, is the scarcest resource inside a scaling company.

> You can *always* raise Capital, how do you raise your limited Bandwidth without serious change.

Stabilize the core before exporting it.

- Install second-line leadership.
- Codify decision rights.
- Build financial reporting that withstands the complexities of multi-entity reporting.
- Strengthen board oversight.

Only then does expansion compound value rather than dilute focus. Companies rarely fail loudly abroad. They slowly underperform at home while managing friction overseas.

---

## Capital Can't Absorb the Shock

You may have capital in the bank. But do you have capital structured for cross-border volatility? International expansion will introduce a slew of new factors to consider

- FX exposure
- Repatriation constraints
- Local tax traps
- Compliance penalties
- Slower cash cycles

Working capital requirements increase before revenue stabilizes. If your runway assumes domestic efficiency, expansion compresses it. Capital that once felt abundant becomes thin.

> Model worst-case timelines. Assume regulatory delay. Assume slower hiring. Assume extended receivables.

If the business still survives under conservative scenarios, you may be ready. If not, expansion is financial theatre. Capital misallocation abroad reduces strategic optionality at home—especially during downturns.

---

## Governance Is Still Informal

Many startups scale revenue before they scale governance. International expansion exposes that imbalance. Weak governance in one jurisdiction is manageable, to some extent. Weak governance across multiple jurisdictions becomes a compounding risk.

*Globalizing your bad governance is a nightmare waiting to unfold.*

- Inconsistent contracts
- Unclear ownership structures
- Informal decision-making
- Tax inefficiencies
- Regulatory exposure

Private capital magnifies this. Investors assume cross-border sophistication when they see global footprints. Without governance architecture, that footprint becomes a liability.

> Before expanding:
> - Clarify ownership and cap table implications.
> - Formalize board oversight.
> - Separate operational control from strategic capital allocation.
> - Design cross-border tax architecture intentionally—not reactively.

Global presence without governance is cosmetic. You should ship overseas rather than build overseas. Durable companies design a structure before they scale geography. Governance debt compounds quietly until an exit, audit, or dispute surfaces it at the worst possible moment.

---

International markets are *seductive* because they expand the narrative. But narrative is not continuous. The question is not:

"Is there demand?"

The question is:

"Will this expansion strengthen or weaken the long-term architecture of the company?" The Expansion should:

- Reduce concentration risk
- Increase pricing power
- Strengthen capital resilience
- Improve strategic optionality

If it does not achieve at least two of those, you are expanding for ego, not durability.

---

> **Key Takeaways for Founders**
> 1. **Prove structural resilience before exporting complexity.**
> 2. **Protect leadership bandwidth.**
> 3. **Stress-test your capital under cross-border friction.**
> 4. **Install governance before geography.**

---

Canada has built its strength as a global launchpad not by scaling recklessly, but by pairing market access with institutional stability. The same principle applies to founders.

Not every available market should be entered. Some should be earned later when your architecture can carry the load for a generation, not just a quarter.

Because global presence is impressive.

**But continuity is power.**
`,ux=`\`\`\`markdown
---
title: The Problem With Optimizing Capital Before You Understand Its Load-Bearing Role
original_publish_date: 2026-01-26
source: "LinkedIn"
original_url: https://www.linkedin.com/pulse/problem-optimizing-capital-before-you-understand-its-role-jerome-l73wc
status: "archive"
---

*Written in 2026. Archived as part of my body of work.*

The unspoken truth is that most capital strategies fail quietly.

Not because the math was wrong.

Not because the tax rate changed.

But because the capital was optimized **before anyone understood what it was actually meant to carry**.

We treat capital like fuel.

In reality, its structure.

And when you optimize structure without understanding load, failure isn’t dramatic—it’s delayed.

---

### The Messy Reality: Capital Is Being Tuned for Speed, Not Stress

Founders, families, and advisors obsess over efficiency:

*   Lower taxes
*   Faster structures
*   Cleaner entities
*   More optionality

But almost no one asks the prior question:

**What pressure will this capital face over time?**

Capital doesn’t just fund growth.

It absorbs:

*   Governance friction
*   Cross-border complexity
*   Family dynamics
*   Regulatory stress
*   Liquidity shocks
*   Succession events

When those forces show up, “optimized” capital often buckles.

---

### The Gap: Financial Optimization vs. Structural Understanding

Optimization assumes stability.

Load-bearing design assumes **stress**.

Most capital plans are built on spreadsheets that assume:

*   Predictable cash flows
*   Rational decision-makers
*   Clean exits
*   Cooperative jurisdictions
*   Calm family systems

Real life delivers none of that.

Capital that looks efficient in year one often becomes brittle by year five—precisely when the stakes are highest.

---

### The Structural Risk: Capital Without Governance Is a Weak Beam

Capital doesn’t fail first.

**Governance fails first.**

When capital isn’t anchored to:

*   Clear decision rights
*   Cross-border legal coherence
*   Family authority structures
*   Operational accountability

…it becomes a point of leverage for conflict.

This is where you see:

*   Minority disputes
*   Jurisdictional deadlock
*   Tax “efficiency” turning into compliance drag
*   Liquidity events that fracture families

The structure wasn’t wrong.

It was just never designed to carry weight.

---

### The Durable Alternative: Design Capital Like Infrastructure

Durable capital architecture starts by asking different questions:

*   Who controls this capital under stress?
*   Where does authority actually sit across borders?
*   What happens when incentives diverge?
*   How does capital behave during succession, not growth?

Only after those answers are clear does optimization matter.

This is why the best capital structures feel “boring” early on.

They aren’t chasing upside.

They’re quietly reinforcing load-bearing walls.

---

### The Metaphor That Matters: Capital Is a Building, Not a Vehicle

You don’t tune a building for speed.

You design it for:

*   Weight
*   Weather
*   Time
*   Occupants
*   Unexpected movement - this is your critical factor

Capital works the same way.

If you optimize it like a race car, it performs beautifully—until the road changes, and it changes often.

If you design it like a building, it stands the test of time long after the excitement fades.

---

### The Future Implication: Resilience Will Outperform Cleverness

As cross-border systems fragment and governance friction increases, the winners won’t be those who moved fastest.

They’ll be the ones whose capital:

*   Can absorb pressure
*   Can survive transition
*   Can outlast personalities
*   Can carry legacy, not just returns

Optimization is never-ending. But durability is what compounds


![](https://media.licdn.com/dms/image/v2/D5612AQGCsEElB0PbBQ/article-inline_image-shrink_1500_2232/B56Zv7OxP2IoAU-/0/1769446525064?e=1772064000&v=beta&t=Fcny5ZbtDHWbcX0uN1TU5FUvbKP88rJo-S5Q2lkmOlk)


### And a capital that understands its load-bearing role doesn’t just survive stress—it becomes stronger because of it.
\`\`\``,dx=`---
title: Scaling Across Borders Without Structural Literacy
original_publish_date: 2026-03-14
source: Substack
status: current
theme: Cross-border
featured: false
---

Most founders believe revenue predictability is the first to break down.

It's not.

What breaks first is **structure**.

Not your product. Not your team. Not even capital.

Structure.

And when structure breaks across borders, it doesn't fail loudly. It erodes quietly through misaligned incentives, tax exposure, governance confusion, and decision latency.

By the time founders feel the pain, the fault lines have already hardened. This matters for high-net-worth families.

But it matters more for founders - because they're usually the last to see it.

---

**The Gap: Growth Moves Faster Than Architecture**

All Cross-border expansion is usually driven by opportunity:

- A new U.S. customer base
- A European distribution partner
- A Middle Eastern investor

The operating team moves. The revenue model stretches. Growth follows. But the legal, tax, and governance layers often lag behind. Founders think they are scaling a business.

In reality, they are building a **multi-jurisdictional system** and most systems are not engineered before the load is applied. Cross-border growth is like adding floors to a building before reinforcing the foundation.

It looks impressive.

Until it doesn't.

---

**The Structural Risk: Incentives Drift, Control Fractures**

The first real break rarely shows up on a P&L. It shows up in one of three places:

**A. Ownership Misalignment**

Different share classes across jurisdictions. Convertible instruments layered without tax clarity. Local investors with veto rights that conflict with the global strategy. The cap table becomes a geopolitical map. And maps create borders.

**B. Governance Confusion**

Who controls which entity? Where does IP sit? Who has signing authority in which country? As enterprises expand, decision velocity slows — not because the founder is weaker, but because the system has too many control points.

**C. Tax & Compliance Exposure**

Founders often expand before addressing:

- Permanent establishment risk
- Transfer pricing alignment
- Cross-border dividend leakage
- Withholding and repatriation friction

Revenue grows. Cash flow becomes sticky. Optionality shrinks.

This is where HNIs and family enterprises recognize the danger quickly — because they've seen what cross-border entropy does over decades.

Founders often only see it when liquidity is on the table.

---

**The Durable Alternative: Build Continuity Infrastructure Early**

Cross-border expansion should not be opportunistic. It should be architectural. Durable founders think in layers:

**Layer 1: Capital Architecture**

- Where does long-term control reside?
- Is there a holdco structure designed for succession, relocation, or liquidity?
- Is Canada being used as a global launchpad — or merely as an operating jurisdiction?

**Layer 2: Governance Clarity**

- Board authority is defined.
- Shareholder agreements stress-tested for jurisdictional conflict.
- Decision rights mapped before expansion.

**Layer 3: Cash Flow Sovereignty**

- Where is the value actually accruing?
- Can capital move cleanly between entities?
- Is the structure resilient under audit scrutiny, a downturn, or an acquisition?

This is not tax optimization theatre. It is a continuous design. The founder is not just building a company. They are building a capital organization that must navigate regulatory friction, generational transitions, and geopolitical volatility.

---

![](https://substackcdn.com/image/fetch/$s_!Ky0v!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F27b60342-82fe-4f6f-a0ab-0b1cce58946d_1125x750.png)

**The Future Implication: Cross-Border Complexity Is Compounding**

In the next decade:

- Regulatory fragmentation will increase.
- Tax transparency will tighten.
- National security reviews on capital flows will expand.
- Data localization rules will multiply.

The cost of retrofitting the structure will rise. The founders who win in the long term will not be the fastest expanders. They will be the most structurally literate. They will understand that scaling across borders is not about opening markets.

It's about controlling load-bearing walls before adding weight.

---

**For Founders**

If you're expanding internationally, ask yourself:

- Where does ultimate control sit?
- Could you relocate personally without breaking your enterprise?
- Could you exit cleanly from any one jurisdiction?
- Does your structure protect you — or trap you?

Speed is seductive.

Durability compounds.

---

Enterprises rarely collapse because of ambition. They fracture because no one engineered the system for cross-border stress. The first thing that breaks is not revenue.

It's continuity.

And continuity, once fractured, is expensive to restore.
`,hx=`---
title: Scaling Is a Stress Test, Not a Strategy
original_publish_date: 2026-03-11
source: Substack
status: current
theme: Capital
featured: true
---

Startups love the word "scale" - Scale the product…Scale the team...Scale the revenue. Growth is scaling up!

But in venture ecosystems, scale is often confused with progress. And the fact is scale and progress are not synonyms.

In reality, many companies that appear to be scaling are simply **accelerating structural fragility**. Revenue Growth can hides it. Capital raise can masks it. Your P&L Momentum can even postpones the consequences.

> Until it doesn't.

Let's unpack what that mean - the root of the matter - structural problem.

![image](https://substackcdn.com/image/fetch/$s_!tqjM!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F33e87fdc-b7f6-4d23-806a-49a6c45aca41_500x750.png)

**Startups Scale Faster Than Their Systems**

Most startups begin with **founder-driven execution**. The founder hires the early team. They approves most decisions and carries the culture. They not only holds the institutional knowledge, they are often the institutional knowledge.

This works in the beginning because the company is small and the feedback loops are short. But scale introduces complexity:

* More customers
* More capital
* More employees
* More regulatory exposure
* More operational dependencies

Yet many companies continue to operate with **Stage 1 decision structures inside Stage 3 organizations**. The result:

The company grows faster than the system that governs it. In some cases, the growing pains can be crippling.

---

**Growth Amplifies Weak Systems**

Scale doesn't always solve problems. It **magnifies them**. A weak hiring process becomes a weak leadership bench. Loose financial discipline becomes runaway burn. Founder-centric decision-making becomes a bottleneck across the company. The bucks literally stops at the Top. At early stages, these issues look manageable. At scale, they compound.

The organization begins to experience:

* Decision latency
* Strategic drift
* Internal misalignment
* Operational fragility

From the outside, the company still looks like a success story. From the inside, the structural load is increasing.

---

**Build the Architecture Before the Next Layer**

Founders often think architecture is something you build **after** you reach scale. In reality, it's what allows scale to happen safely. Durable companies invest early in structural layers:

> **Operational Architecture -** Clear decision rights, accountability, and repeatable processes.
>
> **Capital Discipline -** Governance frameworks that align capital deployment with long-term outcomes, not just short-term growth.
>
> **Leadership Infrastructure -** Managers who can operate systems rather than depend on founder proximity.

In buildings, you don't add additional floors without strengthening the load-bearing structure.

![image](https://substackcdn.com/image/fetch/$s_!4DMF!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9d9bbd92-9ca8-4871-a0ea-5618dc1b177f_1030x750.png)

Companies operate the same way. Scale without structure is simply **building higher on a fragile foundation**.

---

**The Next Generation of Winners Will Be Structurally Disciplined**

The venture ecosystem is entering a different phase. Capital is becoming more selective. The Markets is less forgiving and can have a long memory. Execution quality matters more than narrative. In this environment, the companies that endure will not necessarily be the fastest growing.

They will be the ones that built **organizational infrastructure capable of carrying scale**.

Because scale alone is not a strategy.

It's a **stress test**.

And companies that fail that test rarely collapse overnight.

They simply discover — too late — that what looked like growth was actually **deferred risk**.
`,fx=`---
title: "Sophisticated Investors Don't Optimize for Just Returns"
original_publish_date: 2026-03-08
source: Substack
status: current
theme: Capital
featured: false
---

Most founders think sophisticated investors are optimizing for **returns**.

They're not. Returns are the *output*. Every Investor is working on returns.

But Sophisticated investors who optimize for **asymmetric positioning**.

That's a very different game.

If you misunderstand this distinction, you'll misread investor behaviour, misinterpret term sheets, and sometimes chase capital that was never aligned with your company in the first place.

Let's unpack what's really happening beneath the surface.

---

![](https://substackcdn.com/image/fetch/$s_!0Cfs!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2de8713b-7c94-4e45-9cf3-f5d3620c8130_1125x750.png)

**Founders Optimize for Growth. Investors Optimize for Optionality.**

Most founders operate under a simple assumption:

> If we grow fast enough, capital will follow.

And early in the company's life, that's often true. But sophisticated investors are not primarily evaluating **growth curves**. They're evaluating **strategic positioning across possible futures**. What matters to them is not just:

- Revenue growth
- Market size
- Product traction

What matters is **how many credible outcomes remain available** as the company scales. A company growing quickly but locking itself into a narrow path can actually become **less attractive** to certain investors.

Why?

Because optionality is disappearing.

The best investors are constantly asking:

- Could this become a platform?
- Could it consolidate a category?
- Could it become strategically valuable to multiple acquirers?
- Could it survive if capital markets tighten?

Growth is useful.

**Strategic flexibility is priceless.**

---

**The Structural Risk: Founders Confuse Capital With Alignment**

Many founders assume that once a sophisticated investor joins the cap table, alignment is automatic. It rarely is.

Different investors are optimizing for **different structural outcomes**, even when they invest in the same company.

For example:

Some investors optimize for:

> **Fund Power Law**
> They only need one company in the portfolio to return the fund. They are comfortable with extreme risk if the upside is large enough.

Others optimize for:

> **Capital Preservation + Upside**
> They want strong companies that can produce multiple credible liquidity paths.

Others optimize for:

> **Strategic Access**
> The investment is not purely financial. It opens doors to markets, technology, or partnerships.

To a founder, these investors can look identical. The Same check size. The Same level of enthusiasm. Same press release.

But structurally, they are **playing different games**.

If you misunderstand this, you'll spend years trying to satisfy incentives that were never designed to support your company's long-term trajectory.

---

**What Sophisticated Investors Actually Underwrite**

When experienced investors look at a company, they are often evaluating four deeper variables. Not just the product. Not just the team.

But the **architecture of the opportunity**. Can this company scale **without scaling friction at the same rate**?

They look for:

- Distribution leverage
- Platform dynamics
- Network effects
- Market consolidation potential

In other words:

Does growth compound, or does complexity compound?

---

Sophisticated investors map potential exits **years before they happen**.

They ask:

- Who could acquire this company?
- Why would they pay a premium?
- At what scale does this become strategic?

A company with **multiple credible buyers** is far more valuable than one with only a single logical acquirer.

Not because of the exit itself. But because **competition for the asset changes the economics**.

---

This is rarely discussed publicly, but it matters enormously.

Sophisticated investors study:

- Founder decision-making patterns
- Governance structure
- Board dynamics
- Ability to navigate conflict and scale leadership

Why?

Because companies rarely fail from a single catastrophic event. They fail due to **compounding governance friction**. Investors who have been through multiple cycles know this.

---

### Durability Under Stress

The most experienced investors are not just asking:

> "What happens if this works?"

They are asking:

> "What happens if the environment turns against it?"

Can the company survive?

- Capital market freezes
- Regulatory pressure
- Competitive attacks
- Operational shocks

Durability is not glamorous. But sophisticated capital increasingly values **resilience over narrative**.

---

**The Alternative for Founders**

If you're building a startup, the lesson is not: "Chase sophisticated investors."

The lesson is this: **Build a company that sophisticated investors recognize as structurally durable.**

That means focusing on: **Architecture, not just acceleration.** Ask harder questions about your company:

- Are we building leverage, or just scaling effort?
- Are we expanding optionality, or locking ourselves into a narrow path?
- Are we building governance structures that scale with the company?
- Would this business survive if capital disappeared for 24 months?

These questions are rarely urgent. Until suddenly they are.

---

**Capital Is Getting More Selective**

For the last decade, founders could often rely on **abundant capital and optimistic narratives**. That environment is changing. Capital is becoming more disciplined. Investors are becoming more selective. And structural durability is being priced more carefully.

This doesn't mean innovation slows.

It means the companies that win will increasingly be those built with **strategic architecture from the beginning**. Not just momentum.

---

**Sophisticated investors don't optimize for hype.**

They optimize for **positioning across uncertain futures**. Founders who understand that shift stop building companies that merely grow. They start building companies that **compound.** And those are the companies that attract the most durable capital in the world.
`,px=`---
title: Why Brilliant Teams Still Build Inefficient Companies
original_publish_date: 2026-03-09
source: Substack
status: current
theme: Governance
featured: false
---

Startup founders love intelligence, I mean, who doesn't? We celebrate the brilliant engineer. The legendary product mind. The investor who "sees the future."

But when systems become complex — companies, markets, ecosystems — intelligence stops being the primary constraint.

Alignment does.

And founders who miss this distinction eventually build organizations that are very smart… and strangely ineffective.

Let's unpack why.

---

## Intelligence Solves Local Problems

Intelligence is powerful in **bounded systems**. A brilliant engineer can design an elegant algorithm. A sharp marketer can run an effective campaign. A great salesperson can close a large deal. Each of these is a **local optimization problem**.

> Clear inputs.
>
> Defined outcomes.
>
> Short feedback loops.
>
> In these environments, intelligence dominates.

But startups don't stay in bounded systems for long. They evolve into **complex systems**.

---

## Startups Become Coordination Machines

In the early days, intelligence carried the company. Five people in a room. Decisions made instantly. Everyone understands the product. But as the company grows, something changes.

Suddenly, there are:

*   multiple teams
*   overlapping incentives
*   external investors
*   regulatory environments
*   international markets
*   distribution partners

The company is no longer just building a product. It's **coordinating a system**. And coordination is not an intelligence problem.

It's an **alignment problem**.

![Image](https://substackcdn.com/image/fetch/$s_!yitx!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F089a5a8f-34db-4456-bd9a-0556af697f84_500x750.png)

---

## Misaligned Intelligence Creates Chaos

Here's a pattern many founders eventually experience. You hire extremely smart people. The team grows, and talent density increases. Everyone is capable. And yet execution becomes slower.

While Meetings multiply and decisions stall. Roadmaps conflict.

Why?

Because **intelligent people optimize for different goals**. Product optimizes for elegance. Sales optimizes for revenue. Engineering optimizes for scalability.

Finance optimizes for efficiency. Each group is rational. But the system becomes irrational.

Smart individuals can still produce **dumb outcomes** when incentives diverge.

---

## Complexity Magnifies Misalignment

In simple systems, misalignment is visible quickly. In complex systems, it compounds quietly. A product roadmap is slightly misaligned with distribution. A pricing model slightly misaligned with sales incentives. A growth strategy slightly misaligned with regulatory exposure. Each issue seems small. But complexity multiplies interactions. Small misalignments eventually produce:

*   Internal friction
*   Slow decision cycles
*   Strategic drift
*   Organizational politics

Not because people are incompetent. Because the system isn't aligned.

---

## Alignment Reduces Cognitive Load

One of the most underrated benefits of alignment is **speed**. When a company is aligned, People don't need to re-evaluate every decision.

They understand:

*   What the company is optimizing for
*   How tradeoffs should be made
*   Which metrics matter most

This dramatically reduces coordination overhead. Instead of constant negotiation, teams operate with **shared assumptions**. Execution becomes faster. Not because people are smarter.

Because the system is clearer.

![Image](https://substackcdn.com/image/fetch/$s_!yhuA!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fead77f44-d623-4723-927f-0c0e058bd9b2_1127x750.png)

---

## Founders Are Chief Alignment Officers

Many founders assume their primary role is vision, product insight, or fundraising. In reality, one of their most important jobs is **system alignment**. That means aligning four critical layers:

**Incentives**

*   What people are rewarded for.
*   Misaligned incentives create invisible conflicts.

**Strategy**

*   What the company is actually optimizing for.
*   Growth? Profitability? Market dominance?
*   Ambiguity here creates constant friction.

**Decision Authority**

*   Who decides what?
*   Unclear authority structures slow everything down.

**Narrative**

*   The story that explains why the company exists.
*   Narrative alignment ensures people interpret decisions consistently.
*   Without narrative alignment, strategy becomes confusing.

---

## The Test

A simple test reveals whether a company is aligned. Ask five leaders:

**"What does success look like for the company in 24 months?"** If you get five different answers, you don't have an intelligence problem. You have an alignment problem.

And no amount of hiring will fix it.

![Image](https://substackcdn.com/image/fetch/$s_!pTVp!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7d49c478-b41a-4026-a7b9-d9b152446778_1125x750.png)

---

## The Founder's Trap

Early success can hide alignment problems. When a team is small, founders personally handle coordination. However, as the company grows beyond about 20–30 employees, relying on individual personalities for coordination becomes ineffective. Without a conscious alignment system, chaos gradually appears.

Many founders misunderstand this stage, thinking they need more skilled staff. In truth, what they require is **a more effective alignment system**. When alignment is strong, intelligence multiplies. Great people make decisions more quickly.

Teams operate smoothly. Strategy turns into action. The company begins to feel like a **unified system**, not just a bunch of parts. This is when startups start to grow efficiently. Not because they hired smarter people, but because they built a system where intelligence flows in the same direction.

---

## The Real Advantage

In complex systems, intelligence is abundant. Alignment is rare. And that's why companies with slightly less talent but strong alignment often outperform organizations filled with brilliant individuals pulling in different directions.

The real competitive advantage isn't intelligence.

It's **directional coherence**.

When an entire system moves the same way, even imperfect decisions compound into powerful outcomes.

And that's the kind of advantage competitors struggle to replicate.
`,mx=`\`\`\`markdown
---
title: Fuelling the fire
original_publish_date: 2019-09-17
source: "LinkedIn"
original_url: https://www.linkedin.com/pulse/fuelling-fire-alban-jerome
status: "archive"
---

*Written in 2019. Archived as part of my body of work.*

Yesterday was World Ozone day. Didn’t know that was even a thing until Google decided to announce it with a deluge of info early in the morning.

Given my crazy schedule for the day, I joked with the team about doing an article on it and as usual, it fell through the cracks. Running around to start an EV revolution is not easy!

But, the Universe has a funny way of getting in your head.


![](https://media.licdn.com/dms/image/v2/C5112AQF39MVnbMpeYg/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1568660839981?e=1772064000&v=beta&t=XUqY5wIkylqYKefDI2y7R2P7kkai38ypL__If99242A)


I've crossed this message in Cubbon Park Metro station countless times and yet paid little attention to it... you could've put a gun to my head and I wouldn't have recalled it.

We run the world! Humans have dominated the planet, reshaping it for good or bad into *what we want it to be.*

Data is just another tool in humanity's never ending quest to thrive in this world...

A few steps further this pops in to my view...


![](https://media.licdn.com/dms/image/v2/C5112AQGGUiYFsk-QTw/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1568660895602?e=1772064000&v=beta&t=Iyr0VvzBsEsNrcj-YbyqnCGQdUgdIo_BvAT488c6bpw)


This hurt closer to home. While burning fossil fuel has little impact on ozone depletion, it does hurt our wallets harder, fluctuating and rippling across the economy. Why do we, in this age and time, still depend on fossil fuels - a tech that is as primitive as its name?!

We have cleantech today, that is inexpensive with a positive impact on the environment without having to compromise on the quality of life. We don't have it on the roads yet, because it's easier to blame market inertia and customers than change the world.

While world ozone and environment days are a recurring theme to market our espousing of sentiments, what matters is the act of saving the earth by making cleantech available to the masses. Making it an everyday technology

Innovation has to be Revolutionary!

#solutionsnotproblems #simpleenergy #buildingsolutions #electricvehicles #ozone #environment
\`\`\``,gx=`\`\`\`markdown
---
title: "IDEATE, INNOVATE & GENERATE"
original_publish_date: "2016-10-24"
source: "LinkedIn"
original_url: "https://www.linkedin.com/pulse/ideate-innovate-generate-alban-jerome"
status: "archive"
---

*Written in 2016. Archived as part of my body of work.*

> ‘Ideation is not a synonym for innovation, conformity is not its simple antonym, and innovation is not the automatic consequence of “creative thinking.' - Theodore Levitt

To ideate is not merely the faculty or capacity of the mind for forming ideas or the act of the mind by which objects of sense are apprehended and retained as objects of thought, as any dictionary states. It is more than just generating ideas. This contemporaneous Buzzword represents the creative process of generating, developing, and communicating new ideas, where an idea is acknowledged as a basic element of thought, that can be visual, concrete, or abstract. And as such, it is an essential part of the design process, both in education and in practice. Bulb.

Today’s youth are not short of dreams. Some dream of cars, bikes and such thrills and some dream of future and someone special, yet there are some who don’t just dream small dreams for they have no power to move the hearts of men. Aye! Such dreamers don’t just dream they act; they not only believe, but also plan. Such men and women have long in their strides towards fulfillment, left their mark upon both history and society. Their ideas and ideals have pulled man and machine to the present eminence.

Way back in 1642, a 19 year old, trying to find an easy way out of doing some monotonous drudgery developed and built the mechanical adding machine, Blaise Pascal was his name and no school had taught him such craft. When Louis Braille was 15 years old, he developed an ingenious system of reading and writing by means of raised dots. Today, in virtually every language throughout the world, Braille is the standard form of writing and reading, used by the visually challenged.

Rebecca Schroeder from Toledo, Ohio, USA was ten when she became an inventor, obtained a patent for her invention in 1974. She improved upon the idea over the next few years, eventually calling it the Glow-Sheet. The Glo-Sheet is a battery operated photo-luminescent used in many places, it basically acts as low intensity back-light. Photographers used them in their darkrooms, critics found them perfect for taking notes in dark theaters, emergency medical technicians used them in ambulances, doctors use them so they can check the patients' notes in the dark without waking them up and the US Navy and NASA use them extensively.

“Imagination is more important than knowledge” - Albert Einstein; the youth of today are definitely not lacking in their ability to imagine, the level of knowledge, skill and amount of interaction is far greater than that was in the yesteryears. Yet, this raw dynamism has not produced much greatness, nor has this potent treasure been harnessed? Fantasy united with reason, is the mother of the arts and the origin of marvels, yet seldom do the twain meet.

The late Harvard Professor Theodore Levitt was clearly referring to the youths, who are filled with new ideas and a passion to achieve them when he spoke about ideating. And he was right when he said it is not merely innovation, it was something else “entirely”. Nevertheless this “entirely” is seldom found in reality. Lack of means is one of the main reasons for not realizing ideas; another is dearth of financial sustenance and want of information, mainly appropriate techniques of getting things done. The art of turning dreams into reality is a lot more strenuous than envisaging, though not as intricate.

In most cases, any kind of creative spark is more likely to be doused by a torrent of pre-set beliefs than cooled by lack of resources and the support of peers. The conversion of an idea to a product or service involves many elements like the idea, what resources you need, how to procure them, how to overcome shortcomings, Process...Procedure that’s involved, budget requirements; the legal hassles that may arise are some of the major roadblock faced.

Many new ideas thus have to be realized by scavenging funds, materials and information, and of course trying out various techniques. History has proven time after time that this type of foraging is the basis of many products - original prototyping. Innovators like Thomas Alva Edison and George Washington Carver have attained their recognition not by waiting for resources to be brought to them, rather they have gone seeking their resources wither it was funds or some rare piece of hardware or obscure scarp of information. It is this type of quest that ideating youngsters must pursue to obtain the necessities to achieve their goal. Closer home, Inventors like Anadish Kumar Pal or like the late Gopalswamy Doraiswamy Naidu known as the Edison of India have proven that by soliciting resource on their own as they moved from ideating to inventing

Where there's a will there's a way. Seek what you desire and you shall find it. It is not impossible for a person who is acutely tenacious, with enough perseverance, a clear cut desire of what they want, can attain whatever resources that are needed for their endeavour. Rome was never built in day nor can your dreams be attained in one; you’ll have to be patient and persistent as you overcome the inevitable and innumerable hurdles that life is seemingly full of. Remember as you chug along the dreary road of life, every step you have taken in the right direction is vital to the outcome you seek.
\`\`\``,yx=`\`\`\`markdown
---
title: Stone Soup
original_publish_date: "2017-12-07"
source: "LinkedIn"
original_url: "https://www.linkedin.com/pulse/stone-soup-alban-jerome"
status: "archive"
---

*Written in 2017. Archived as part of my body of work.*

In a tiny village, a farmer spotted three soldiers.

Seeing how tired and hungry they looked, he ran back to the village shouting a warning, “Close the doors, and lock the windows! There are three hungry soldiers coming, and they’ll take away all our food.”

Lo and Behold, the soldiers were hungry. When they entered the village, they started knocking on doors, asking for something to eat. The first villager told them that his cupboards were bare, so did the second. The next door didn’t even open.

Finally, one of the starving soldiers said, “I have an idea -- let’s make stone soup!”

With that, he knocked on the next door. He asked for a cauldron and some firewood with an intention of making stone soup.

The villager, although confused, assumed there’s no risk, as it was just a soup from stones! She agreed to help. So, she gave the soldiers a cauldron and some firewood while another villager fetched three rocks and some water.

The soldiers brought the water to a boil and placed three large stones in the pot. News spreads around the town, and the villagers begin to gather. Everyone was very curious to see how the soldiers were going to make soup from stones.

After standing around for a while, another villager asked if he could help. The soldiers asked if he had a few potatoes to spare. It would make the stone soup even better. The villager quickly fetched some potatoes, peeled them and added them to the pot of simmering stones.

Another villager asked how he could help. The soldier, quite pleased, asked for a dozen carrots to make the soup even better. The villager then fetched some carrots. Soon, the entire village joined forces to add poultry, barley, garlic, and leeks to the stone soup.

After a while, one of the soldiers called out, “It’s done!” and shared the soup with everyone to taste and enjoy.

The villagers jauntily relished the soup and exclaimed, “Soup from stones! It tastes fantastic. We had no idea.”

The stones are, of course - passion, the big bold idea; the drive to make it happen. Passion imbues people with focus and drives them to not just work harder but also to work smarter. This you can’t fake.

It’s the carrots, poultry, barley, garlic, leeks and all the little things that the villagers brought in; the bits and pieces that truly made the soup!


![](https://media.licdn.com/dms/image/v2/C4E12AQFBMzWSNchb0A/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1520195509566?e=1772064000&v=beta&t=HNzcNfB7WitFT3AzxPI_38wK8gliTbkHzSHBsWi_eoo)


It’s often easy to look at great ideas by passionate folks and overlook the small steady contribution that the others bring in. It is the latter kind who truly define the flavor of the endeavor. Great leaders know this. They galvanize people behind the idea, the goal, using passion and a simple message to accomplish wonders, like making soup from a stone.

A leader doesn't need to do all the work...have all the answers... all the time. They instead create an environment that encourages people to think, share and grow their own ideas. By their behavior and encouragement, they take their team to higher levels, nurture a culture that inspires others into action, influencing others. Not just show them to get better results, but teach them to be better.

Leaders don’t just get people together, they give them an idea, a reason to get behind. Nurturing a culture of sharing and innovation, make them own the mission, believe in the idea. They just tell the team to 'bring what you've got.’ Knowing when to let the line slack and when to rein in. Showing by example that risks can be taken, mistakes can be made, creativity will be appreciated. Proving leadership is not just about getting results and being successful but being successful as a team and getting results.
\`\`\``,vx=`\`\`\`markdown
---
title: Thinking tools or Thinking Machine 1.0
original_publish_date: 2023-03-07
source: "LinkedIn"
original_url: https://www.linkedin.com/pulse/thinking-tools-machine-10-alban-jerome-0krkc/
status: "archive"
---

*Written in 2023. Archived as part of my body of work.*

In today's fast-paced world, learning, adapting, and solving complex problems are crucial to success. While traditional education and training can provide a strong foundation of knowledge, technology has revolutionized how we approach learning and problem-solving. One of the most significant advancements in this area is the development of cognitive tools.

Cognitive tools are computer-based tools or software that augment human cognitive abilities to solve problems or accomplish tasks more efficiently. These tools use artificial intelligence and machine learning algorithms to enhance our ability to process information, generate insights, and make decisions. From voice assistants like Siri and Alexa to chatbots and language models like GPT-3, cognitive tools are becoming increasingly prevalent every day.

One of the most significant advantages of these cognitive tools is that they can learn and adapt to new situations and environments. This means they can provide personalized support to users based on their needs and preferences. For example, language models like GPT-3 can generate human-like text based on user inputs, allowing them to write more efficiently and effectively. Similarly, chatbots can provide instant customer support and assistance, saving time and resources for businesses.

Another advantage of cognitive tools is that they can process vast amounts of data and information more quickly and accurately than humans. This enables us to identify patterns and insights that may not be apparent to the human eye, leading to better decision-making and problem-solving. For example, machine learning algorithms can analyze large datasets to identify trends and patterns, helping researchers make discoveries and insights.

Despite these benefits, there are concerns about cognitive tools' impact on human intelligence. Excessive reliance on technology could lead to a decline in our ability to think critically and creatively. These cognitive tools could be used to replace human workers, leading to job loss, economic disruption, and possibly even cognitive decline on a biological level.

It is thus essential to approach cognitive tools as a complement to human intelligence rather than a replacement. By working alongside technology, we can leverage its strengths to enhance our cognitive abilities and solve complex problems more effectively. This requires a willingness to learn and adapt to new technologies, as well as a commitment to the ethical and responsible use of cognitive tools.

The evolution of cognitive tools is similar to the evolution of agricultural tools. Just as humans developed plows, sickles, and other agricultural tools to augment their physical abilities and increase productivity, we are now developing cognitive tools to augment our mental abilities and increase efficiency. The difference is that while the evolution of agricultural tools took centuries, the evolution of cognitive tools is happening at an unprecedented pace.

For example, consider how we've moved on from man-driven plows to modern agri-tech. With the help of modern agricultural technologies like tractors, harvesters, and GPS-guided systems, farmers can now produce more food with less effort and resources. These tools have not replaced the farmer but have made their job easier, more efficient, and more productive.

Similarly, cognitive tools are not intended to replace humans but to help them work smarter, faster, and more efficiently. By leveraging the power of artificial intelligence and machine learning, we can enhance our cognitive abilities and solve complex problems more effectively. However, it is crucial to approach cognitive tools with a balanced and ethical perspective, recognizing their potential benefits and risks.

The development of cognitive tools presents both opportunities and challenges. While these tools have the potential to enhance our cognitive abilities and solve complex problems more effectively, it is essential to approach them with caution and responsibility. By working using this technology, we can create a future where technology and human intelligence work together to achieve our goals and aspirations.
\`\`\`
`,wx=`\`\`\`markdown
---
title: "Thinking Tools or Thinking Machine 1.0"
original_publish_date: "2023-12-01"
source: "LinkedIn"
original_url: "https://www.linkedin.com/pulse/thinking-tools-machine-10-alban-jerome-0krkc"
status: "archive"
---

*Written in 2023. Archived as part of my body of work.*

Learning, adapting, and problem-solving are crucial to success in today’s fast-paced world. Technology, especially cognitive tools, has revolutionized our approach to these tasks. Using artificial intelligence and machine learning, these tools augment human cognitive abilities, enhancing our information processing, insight generation, and decision-making. Prominent examples include voice assistants like Siri and Alexa, chatbots, and Large Language Models like ChatGPT.

ChatGPT, in particular, has had a notable impact on the world. ChatGPT, which OpenAI launched a year ago, has impacted nearly every industry. As a sophisticated language model, it has transformed how we interact with technology, offering increasingly human-like conversational interfaces. It was touted as a replacement for software engineers, content writers, lawyers, etc. It aids in writing, coding, information synthesis, and even creative tasks, bridging gaps in human capabilities. 

One key advantage of tools like ChatGPT is their ability to learn and adapt. They offer personalized support, learning from user interactions to provide more tailored responses. For instance, ChatGPT can now produce text that mirrors human writing styles.

However, with these advancements come new world challenges. The ease of access to tools like ChatGPT has led to a rise in academic dishonesty, with students using such tools for essay writing and homework assistance. Who doesn’t want someone else to do their homework, right?

While ChatGPT can generate impressive outputs, it sometimes lacks a nuanced understanding of human emotion and context, leading to potential inaccuracies or biases. This limitation points to the need for careful and ethical use of such technologies. ChatGPT, like other cognitive tools, can amplify societal biases if trained on biased data. This emphasizes the importance of diverse and inclusive training datasets to mitigate such risks. Biases in AI are a whole different conversation. 

The impact of ChatGPT is akin to the evolution of agricultural tools. Just as tools like plows and sickles augment the physical capabilities of farmers, ChatGPT augments mental capabilities, enhancing efficiency and productivity. However, unlike the slow evolution of agricultural tools, the development of cognitive tools like ChatGPT is rapid and ongoing.

For example, consider the shift from traditional farming methods to modern agri-tech. Similarly, ChatGPT signifies a paradigm shift in how we process information and solve problems. It symbolizes transitioning from manual, labour-intensive cognitive processes to more automated, efficient ones. Like how tractors and mechanical irrigation systems revolutionized farming, ChatGPT and similar AI technologies have revolutionized tasks like data analysis, content creation, and problem-solving. There will always be the issue of the reliability of creative outputs, where ideas generated might not always be original or even practical.

As we increasingly rely on tools like ChatGPT, so does the need to maintain and enhance our own cognitive abilities. This situation is comparable to the need for physical fitness in an increasingly automated world. Just as we have gyms to maintain physical health, the concept of “mental gyms” could emerge. These would be spaces where individuals can engage in activities designed to challenge and stimulate their minds, improving cognitive functions and overall brain health. Such mental exercises could include problem-solving games, creative writing, critical thinking activities, and learning new skills, all aimed at keeping the human mind sharp in an AI-assisted world.

While ChatGPT and similar cognitive tools offer immense benefits, they require responsible and ethical usage. They are not replacements but supplements to human intelligence, helping us solve complex problems and enhance our abilities in an ever-evolving technological landscape. These tools should be viewed not as replacements for human intelligence, even as tempting as they might be, but as supplements that enhance our cognitive capabilities. At a time when AI can write essays, compose music, and even mimic human conversation, the temptation to rely solely on these tools is high. This perspective is crucial in ensuring that while we embrace the efficiencies of AI, we also preserve and foster human creativity, critical thinking, and problem-solving skills. The goal is to achieve a balanced symbiosis where technology and human intellect coexist and complement each other, leading to a more efficient and insightful technological landscape.
\`\`\``,bx=`\`\`\`markdown
---
title: A Million Neural Connections and Limitless Possibilities
original_publish_date: 2024-11-26
source: "LinkedIn"
original_url: 
status: "archive"
---

*Written in 2024. Archived as part of my body of work.*

Little minds absorb the world around them with an unmatched openness. It is so fascinating to watch a child’s eyes light up when they discover something new. It’s curiosity at its purest, unfiltered, and boundless.

Harvard University did a study that said 90% of a child’s brain develops, as in the neural connections, by age 5. Neural connections are formed at a rate of 1 million per second, creating the infrastructure for future learning.** That’s right—90%. Think about it**.

A million neural connections are created every second. Every single second! 

Think about what that means. When children are stacking blocks, they’re not just playing—they’re testing out how the balance works. Understanding how the basics of engineering work and problem-solving without even realizing it. When they clap along to a song, they’re laying the groundwork for their brains to grasp how rhythm, memory, and language work. The beauty of biology is that these seemingly simple moments are actually building the pathways that will one day lead to amazing structural innovation and mesmerizing music that moves our very souls.

And yet, it feels like we’re not fully leveraging this incredible growth window. 

We focus so much on academics later in life, but by the time formal schooling begins, we’ve already missed the prime opportunity to nurture creativity, critical thinking, and emotional intelligence. 

But here’s something that often makes me pause: What if we flipped the script?

What if early education wasn’t just about preparing children for school but about fueling their curiosity and igniting a lifelong love of learning? We talk about lifelong learners, and learning is never-ending. But have we truly worked on giving the kids the tools they need to be such? 

I’ve been thinking about this a lot lately. How do we ensure that every child—not just some—has access to an environment where their natural instincts to explore, build, and question are celebrated and amplified?

There’s no one-size-fits-all answer, but I believe the conversation starts here.

What do you think? Are we doing enough to make the most of these critical early years? Or is there a better way? Let’s talk. 👇

#EarlyChildhood #Learning #Curiosity #Education #BrainDevelopment
\`\`\`
`,kx=`\`\`\`md
---
title: "Art or Algorithm"
original_publish_date: "2024-11-12"
source: "LinkedIn"
original_url: "https://www.linkedin.com/pulse/art-algorithm-alban-jerome-tfqoc"
status: "archive"
---

*Written in 2024. Archived as part of my body of work.*

I love diving into technology and exploring the mechanics of how our world works—it’s endlessly fascinating for me…. But every now and then, I come across a piece of art—a painting, a moving piece of music, or an intriguing work of literature. It reminds me there is more to life than just understanding the mechanics of it.

Yes, technology and finance keep the world running, but it’s art that makes it worth living in. Don’t you think?

Feeding the soul is just as important as building the future. Throughout history, art has been humanity's mirror, reflecting our deepest emotions, aspirations, and struggles. From the cave paintings of Lascaux to the masterpieces of the Renaissance to many forms of modern contemporary art.

While it is easy to look at Art as a form of aesthetics, the fact is that it challenges, inspires, and connects us. During times of turmoil, it offers solace. In moments of triumph, it amplifies celebration. Murals and wall graffiti have sparked revolutions. Literature has literally reshaped societies, and music has both unified and divided generations.

It has the power to make us pause, reflect, and feel deeply in ways that data or technology alone cannot.

Lately, I’ve been pondering a question, and I’m sure many of you are too: At what point does AI-generated work become art in its own right, rather than just the output of a complex tool designed by humans?

Take Ai-Da’s ‘AI God,’ for example—a creation that recently sold for over $1 million. It raises fascinating questions about the nature of creativity and what truly inspires art. Is it the algorithm, the data it’s trained on, or the human who built the system and set its parameters?

In a world where technology and creativity are increasingly intertwined, this feels like a conversation we all need to have. What do you think—are we witnessing the rise of a new kind of artist, or is AI just another tool in the hands of human creators? Is AI the new paintbrush? A paintbrush with opinions and ideas of its own?

#AiDa #Art #Intelligence #Robots #Technology
\`\`\``,xx=`\`\`\`markdown
---
title: Cleaning House: Targeted Protein Degradation
original_publish_date: 2024-11-05
source: "LinkedIn"
original_url: https://www.linkedin.com/pulse/cleaning-house-targeted-protein-degradation-alban-jerome-ynkwc
status: "archive"
---

*Written in 2024. Archived as part of my body of work.*

Imagine if we could treat diseases by simply getting rid of the “bad” proteins in our body that are causing the problem. That’s the concept behind **Targeted Protein Degradation (TPD)**. Rather than just blocking these proteins from causing harm temporarily (as most traditional drugs do), TPD focuses on identifying, tagging, and then completely removing these problem proteins from our cells, allowing our body to "clean house" naturally.

Here’s a breakdown of how this exciting technology works, with some easy-to-understand examples:

### How Does TPD Work? A Simple Analogy

Think of TPD as a kind of molecular “garbage disposal” system:

1.  **Identifying the Trash**: Just as you identify which items in your house need to go to the trash, scientists use special molecules called to identify specific proteins in the body that are causing problems—like proteins that help cancer cells grow or contribute to brain disorders.
2.  **Tagging for Disposal**: TPD uses small molecules (like PROTACs or molecular glues) that act as “tags,” sticking to both the problematic protein and a helper molecule called E3 ligase. This E3 ligase acts like a trash collector, tagging the bad protein with a signal saying, “It’s time to go!”
3.  **Taking Out the Trash**: Once tagged, the bad protein is escorted to the cell’s “recycling center,” called the proteasome. This is where the protein gets broken down and disposed of. So instead of sticking around and causing trouble, the problematic protein is actually removed from the body, allowing healthy functions to continue.

### Why is TPD a Big Deal?

*   **Cancer Treatment:** Imagine a car with a stuck accelerator—it just keeps going, and you can’t stop it. This is similar to how some proteins act in cancer cells. Traditional cancer drugs often “block” these proteins, like tapping the brakes to slow the car down. But TPD is like calling a mechanic to remove the damaged accelerator entirely. By completely removing the problematic protein, TPD offers a way to truly “stop” cancer cells from growing.
*   **Brain Diseases:** Some diseases, like Alzheimer’s, involve toxic proteins that build up in the brain over time, disrupting normal brain function. It’s similar to having a leaky faucet that slowly fills up the sink until it overflows. Traditional treatments are like placing a bucket under the leak to manage it. TPD, however, is like fixing the leak itself, removing the toxic protein and preventing buildup in the first place.

### Why should we care?

1.  **Broader Application Across Diseases**: Because TPD targets the removal of specific proteins, it has potential applications in cancer, neurodegenerative diseases like Parkinson’s, and even autoimmune conditions. It’s a versatile solution to a wide array of health issues.
2.  **Rising Demand for Targeted Therapies**: People today want treatments that don’t just mask symptoms but solve the root of the problem. TPD aligns with this demand for more precise, effective treatments, and has the potential to improve quality of life by reducing side effects associated with less targeted therapies.
\`\`\``,Tx=`\`\`\`yaml
---
title: The Future is in Our Minds, Literally!
original_publish_date: 2024-10-31
source: "LinkedIn"
original_url: https://www.linkedin.com/pulse/future-our-minds-literally-alban-jerome-cw6vc
status: "archive"
---

*Written in 2024. Archived as part of my body of work.*

As the world grows increasingly connected, the next new technology that promises to fundamentally change the way we interact with devices is neural headphones. For us at Tacenda Capital, it’s not just about the innovation but about how this technology could genuinely transform lives—improving accessibility, creating seamless user experiences, and opening doors we hadn’t thought possible.

### Consumer-Friendly

Traditionally, Brain-Computer Interfaces (BCIs) have required invasive procedures, limited to the medical field or research labs. Neural headphones, however, offer a non-invasive alternative, giving this incredible technology the accessibility it deserves. Think of it as a shift akin to the arrival of touchscreens in our daily lives—putting powerful tech in the hands of everyone. For those with mobility challenges or physical disabilities, these headphones could be life-changing, providing new ways to interact with devices, restore independence, and bridge communication barriers.

### Redefining Accessibility and Productivity

The applications of neural headphones go beyond novelty. This technology’s potential impact spans several key areas:

*   **Accessibility**: Imagine a world where people facing motor limitations can control their devices simply by thinking. This technology opens the doors to those who have been sidelined by traditional tech, enabling hands-free control and fostering independence. The human impact here is profound; this isn’t just about tech but about leveling the playing field so that more people can experience the full potential of digital life.
*   **Productivity Gains:** In our workspaces, neural headphones could lead to less friction and more flow. Professionals in high-focus fields, like engineering, design, and finance, can reduce interruptions by managing workflows with thought alone, increasing productivity and even reducing physical strain. This isn’t just a tool—it’s a way to streamline processes, free up focus, and make the everyday work experience smoother and more efficient.
*   **Gaming and Entertainment:** Gaming is often a testing ground for tech that eventually makes its way into broader life. With neural headphones, gamers like me, we can connect to their games at a deeply intuitive level, shifting control from external to internal. Beyond just improving experience of play, the immersion offered points to the broader future of entertainment, one where experiences are responsive, personalized, and effortlessly immersive.

### Investment Potential: Why Neural Tech Appeals to us.

As neural technology evolves, the BCI market is projected to grow significantly over the next decade, spurred by trends in wearable tech and enhanced user experiences.

Here’s why we at Tacenda Capital think this is super cool.

1.  **Expanding Market Demand:** The convergence of wearables, augmented reality (AR), and virtual reality (VR) is setting the stage for BCIs to enter mainstream consumer markets. Neural headphones occupy a unique position, standing at the intersection of these high-growth segments. By investing now, we can capture the early momentum and capitalize on the projected growth of these interwoven industries.
2.  **Potential for Mass Adoption:** Neural headphones, by design, lower entry barriers with their non-invasive form, positioning them for potential widespread consumer adoption. This accessibility means that, if priced strategically, they could transition from niche to mainstream, offering a significant return on investment as the technology scales.
3.  **First-Mover Advantage in Consumer BCI**: As the consumer BCI market is still in its infancy, early investment grants a first-mover advantage, positioning us at the cutting edge of a new industry. Being among the initial investors can provide strategic leverage as demand grows and new applications emerge.
4.  **Diverse Applications Across Sectors**: Beyond gaming and personal productivity, the versatility of neural technology creates exciting applications in healthcare, education, and even military sectors. From real-time health monitoring to interactive educational tools, neural headphones could offer a multi-dimensional growth path across various markets, each with distinct revenue streams.

Neural headphones are more than a novel gadget; they represent a fundamental shift in how we interact with technology. By enabling hands-free control through brainwave and muscle sensing, this technology promises to reshape accessibility, productivity, and entertainment.

At Tacenda Capital, we’re driven by the belief that the right technologies can move society forward, and neural headphones align perfectly with this mission.
\`\`\``,_x=`\`\`\`markdown
---
title: Change isn’t coming. It’s already here.
original_publish_date: 2025-02-07
source: "LinkedIn"
original_url: 
status: "archive"
---

*Written in 2025. Archived as part of my body of work.*

I think if you've been following my writing for the last few days, you know that I strongly believe that change in education is undeniable. But the fact is, this is not going to be a one-person act. It's going to take a lot of us—all of us—to drive this transformation. We can't afford to wait, and we can't afford to move in silos. We need to start making changes from one place and build from there.

So I’m calling out to governments, policymakers, technologists, parents, and everyone in the education ecosystem to come work with us to get the change started. At **Karman Line Acceleration (KLA)**, we are committed to driving this transformation, bringing together the brightest minds in education, technology, and entrepreneurship to create learning systems that actually prepare students for the future. If you believe in building a future-proof education system, this is your call to action—let’s work together to make it happen. A change this large is going to take time, and it’s going to take all of us.

1. **What You Can Do Now**

Education reform does not require waiting for a large-scale overhaul. Small, deliberate changes made consistently at the grassroots level will compound into systemic transformation. Parents, schools, and educators all play a critical role in making this happen. Here’s where they can start:

**Parents** should advocate for new learning models, expose children to diverse educational resources, and support independent problem-solving skills at home.

**Educators** should experiment with adaptive teaching methods, incorporate technology into the classroom, and advocate skill-based learning instead of rigid testing.

**Schools** and **administrators** should partner with tech innovators, rethink curriculum priorities, and create an environment where learning extends beyond textbooks.

These changes don’t require permission; they require initiative. The biggest shifts in education will happen from the ground up, not from top-down mandates.

2. **Can Implement Right Away**

One of the best ways parents can prepare their children for the future is by recognizing the gaps they see in their own generation. Consider the skills that many adults struggle with today: negotiation, financial literacy, public speaking, and digital adaptability. Instead of waiting for schools to catch up, parents can proactively introduce these skills to their kids, ensuring they enter adulthood more prepared than their predecessors.

For those wondering where to begin, here are three immediate steps that can help reshape learning today:

*   **Identify and Teach Missing Skills**

    Parents can reflect on the biggest gaps they see among their peers in communication, problem-solving, financial independence, or leadership and ensure their children are exposed to these skills early on.

    *   Teachers can design lessons that bridge the gap between traditional education and essential life skills, incorporating negotiation, resilience, and adaptability into everyday learning.

    Parents can encourage project-based learning at home, such as budgeting exercises, creative problem-solving tasks, and hands-on experiments.

    *   Teachers can replace rote memorization with practical applications—turning math lessons into financial literacy exercises or history classes into critical analysis discussions.

*   **Introduce AI & Digital Learning Tools into Education**

    *   Parents should familiarize children with AI-driven educational platforms that offer personalized learning experiences.
    *   Teachers can integrate AI tools in the classroom to provide individualized learning support, helping students who struggle while challenging advanced learners.

*   **Teach Adaptability & Lifelong Learning**

    *   Parents can model curiosity by learning new skills alongside their children, demonstrating that education doesn’t stop after school.
    *   Teachers should emphasize problem-solving, teamwork, and adaptability, helping students prepare for jobs and industries that don’t exist yet.

3. **Grassroots Adoption Matters**

The bureaucracy surrounding education reform is slow, resistant to change, and often stuck in outdated paradigms. But innovation does not need permission.

**Tech adoption outpaces policy.** AI and automation are already transforming industries, and education needs to keep up. Teachers and parents can introduce new tools without waiting for school boards to approve them.

**History shows that change happens from the bottom up.** Many of the most significant shifts in education, from Montessori methods to homeschooling movements, started outside of traditional institutions before gaining widespread acceptance.

*   **The world isn’t waiting** – Companies are hiring based on skills, not degrees. Creators and entrepreneurs are bypassing traditional career paths altogether. Education must evolve in real-time, not years behind the workforce.

The future of learning isn’t a distant ideal—it’s a choice we make today.

And at KLA, we’re making that choice every day. Change isn’t coming. It’s already here. The only question is: will we lead it, or will we lag behind?
\`\`\`
`,Sx=`\`\`\`markdown
---
title: Join the Future of Learning
original_publish_date: 2025-02-08
source: "LinkedIn"
original_url: 
status: "archive"
---

*Written in 2025. Archived as part of my body of work.*

The world is changing fast. Education is at a crossroads, and those who embrace change today will define the future. The traditional model struggles to keep up, but we don’t have to wait for institutions to catch on. The future of learning isn’t about passive observation; it’s about action. The people who take action now—parents, innovators, technologists, business leaders, and employers—will be the architects of a new education system that works for the next generation.

The question isn’t whether education will change but **who will step up to shape it.**

1.  **Who Are the Trailblazers**

    *   **Parents Who See the Gaps** – You’ve watched your children struggle with an outdated system that doesn’t teach them real-world skills. Instead of waiting for the system to fix itself, take charge. Expose your kids to entrepreneurship, problem-solving, and modern tools outside of school.
    *   **Innovators & Technologists** – You create the tools that shape industries. Why not education? AI, immersive experiences, and adaptive learning models can revolutionize teaching and learning. If there was ever a time to build the future, it’s now.
    *   **Business Leaders & Employers** – The workforce you need tomorrow doesn’t exist today. Schools aren’t teaching the skills that modern jobs demand. It’s time for companies to bridge the gap by partnering with educators, offering apprenticeships, and investing in talent development.
    *   **Educators Who Embrace Change** – You’re on the front lines. You see firsthand what works and what doesn’t. The best educators aren’t just teachers; they’re pioneers, integrating new teaching methods and technologies to equip students for the world ahead.

2.  Through Community, Thought Leadership, and Actionable Partnerships

    *   **Start the Conversations** – Host discussions with parents, teachers, and local leaders. Join LinkedIn conversations, Twitter threads, and live webinars to spread awareness and gather insights.
    *   **Lead by Example** – If you’re a business leader, create internships or mentorship programs. If you’re a teacher, integrate project-based learning. If you’re a parent, encourage your kids to explore beyond textbooks.
    *   **Form Partnerships That Matter** – The best education doesn’t happen in isolation. Schools partnering with businesses, startups collaborating with teachers, and communities supporting hands-on learning can accelerate change faster than any government initiative.

3.  **How We Build This Future Together**

    *   **Educators + Innovators** – Teachers bring the classroom experience; technologists bring the tools. Together, they can design adaptive, personalized learning environments.
    *   **Parents + Business Leaders** – Parents want a better future for their children, and business leaders need a skilled workforce. Why not work together to create meaningful career pathways?
    *   **Global Ideas, Local Impact** – The internet has made learning borderless. The best solutions can come from anywhere in the world. Let’s share, refine, and implement what works at scale.

The future of education isn’t coming—it’s already here. The only question is whether you’ll be part of shaping it. At [Karman-Line Acceleration Program](https://www.linkedin.com/company/kla-program/) , we are not just imagining the future of education—we are building it. Picture a world where learning isn’t confined to outdated textbooks and rigid curriculums but a dynamic, adaptive experience that evolves with each student’s needs. A future where AI-powered learning assistants personalize education at scale, helping every learner unlock their potential, no matter their background. A world where students don’t just memorize information but actively engage in project-based, experiential learning that mirrors real-world challenges.

Imagine a future where four walls don’t define classrooms but extend into digital ecosystems, interactive workspaces, and global collaboration hubs, where students graduate not with outdated degrees but with portfolios of real-world projects, entrepreneurial experience, and a network of mentors who guide them toward success. A future where education is as fast-moving as the industries it feeds into, ensuring that innovation and opportunity are accessible to all.

This is the future **KLA** is working to create. We bring educators, technologists, business leaders, and parents together to develop forward-thinking learning models that prepare students for the real world. We bring educators, technologists, business leaders, and parents together to create forward-thinking learning models that prepare students for the real world. Change doesn’t happen by waiting for permission. It happens when people like **you** decide that the next generation deserves better.

**The movement is growing, and we at KLA** are at the forefront of it.

Join us, collaborate with us, and be part of shaping the future of education.

**Are you in?**
\`\`\``,Ix=`\`\`\`markdown
---
title: Making It Work for Every Student
original_publish_date: 2025-02-07
source: "LinkedIn"
original_url: 
status: "archive"
---

*Written in 2025. Archived as part of my body of work.*

Education is only as powerful as its accessibility, which is one of the reasons why it has been known as a great equalizer for many people. Irrespective of where you start in life, education and learning can help you achieve what you want because it is an empowering tool and experience. And it's not just about wealth or your place in society; it is about you as a person, as an individual. It is a holistic development, which is why often one does not need to justify why education is important. Education has become not just a universal need—it is a universal right. The true potential of hybrid learning, AI-driven education, and experiential learning will only be realized when every student—regardless of their background—has equal access to high-quality resources. Bridging the educational gap isn’t just about innovation but implementation. It’s about ensuring that these advancements don’t remain exclusive to those with privilege but instead become the foundation of an equitable education system.

## 1. Learning Accessible for Everyone

For too long, education has been dictated by zip codes, income levels, and systemic barriers that leave millions of students without the same opportunities as their peers. 

Before we talk about education equity, it's important to acknowledge that a lot of initial costs come with building the necessary technologies—not just AI, but also the many mirrored learning tools, resources, and opportunity creation programs. However, these costs must be viewed as long-term investments, not just for individual communities but for society as a whole. The return on investment in education is immeasurable, leading to economic growth, innovation, and social stability. Additionally, as technology costs decrease over time and offer prolonged use, it makes sense to invest early and invest hard to ensure long-term accessibility and impact.

Technology and AI are game-changers, but only if we implement them in ways that benefit all students, not just the ones who can afford them. The key to education equity lies in:

- **Removing financial barriers** – Making high-quality education available regardless of socio-economic status.
- **Personalized learning** – Giving every student access to tools that meet them where they are.
- **Infrastructure & accessibility** – Ensuring internet access, devices, and digital literacy are available to all learners.
- **Community-driven solutions** – Partnering with local organizations to bring learning opportunities beyond traditional school settings.

Educational equity doesn’t mean every student follows the same path; it means every student has the tools and opportunities to reach their full potential.

## 2. Why Scalable, Personalized Learning Tools Are the Key to Bridging Educational Gaps

For years, the argument against personalized learning has centred on the risk of widening the gap between those who have access to technology and those who do not. Education is supposed to be a great equalizer—it fosters a sense of community and puts everyone on the same playing field. The concern is that technology-driven personalized learning might only benefit those who can afford it, furthering inequality.

But the most understated and important fact we need to remember about education is that the goal isn’t to lift all boats equally at the exact same time—it’s to create equal opportunities. At the end of the day, if it takes time for every community to fully integrate these new learning systems, that should not be a reason to delay the process. Some communities will adapt faster than others, but the solution isn’t to wait until everyone is ready—the solution is to start now, ensuring that as technology advances, we continue working toward broader accessibility and inclusion.

One-size-fits-all education has failed too many students. Personalized learning tools—powered by AI and adaptive technology—allow students to learn at their own pace, receive targeted support, and engage with material in ways that work best for them. Scaling personalized education means:

- **AI-powered tutors** – Providing 24/7 learning support tailored to each student’s needs.
- **Adaptive curriculum** – Adjusting difficulty levels based on student progress.
- **Multimodal learning** – Using video, interactive simulations, and gamification to engage different learning styles.
- **Language & accessibility support** – Breaking down language barriers and providing resources for students with disabilities.

When education adapts to the learner, instead of forcing learners to adapt to the system, we create an inclusive, effective model for all.

## 3. Equalizing the Playing Field

Equalizing the playing field in education requires both leveraging existing tools and innovating new ones to ensure access for all students. The good news is that we are not starting from scratch—there are already numerous initiatives in place, and future advancements will continue to drive equity. Here’s how we can build on what works while embracing emerging solutions:

- **Scholarships & Financial Aid** – Expanding funding for students from low-income backgrounds to access top-tier learning resources.
- **AI-Powered Tutors** – Making high-quality, personalized tutoring available to every student, not just those who can afford private help.
- **Community Learning Hubs** – Transforming libraries, community centers, and local spaces into hybrid learning environments where students can collaborate, receive mentorship, and access cutting-edge technology.
- **Public-Private Partnerships** – Bringing together government, tech companies, and educational institutions to provide free and affordable learning solutions at scale.

True educational equity is built on a foundation of accessibility, personalized support, and community collaboration. It’s about ensuring that students' futures aren’t limited by their circumstances but empowered by the tools and opportunities available to them.

## 4. Building an Educational Model That Works Across Income Levels

The future of education must be built on inclusivity. This means developing a system where:

- **Low-income students have the same access to learning tools as their wealthier peers.**
- **Schools in underserved areas are equipped with AI-driven resources to support teachers and students.**
- **Students in rural and urban areas alike can access high-quality education without relocating.**
- **Education adapts to different needs, whether through online, in-person, or hybrid models.**

Education is not a privilege; it is a right. As we move into an era of rapid technological advancement, we must ensure that these innovations serve everyone, not just a select few. The challenge is introducing new technologies and making them accessible, adaptable, and practical for students from different economic and geographic backgrounds. 

For example, AI-powered tutors are already helping students in remote areas where qualified educators are scarce, offering personalized instruction that adapts to each learner’s pace. Community learning hubs in underserved neighbourhoods provide internet access, mentorship, and shared resources, allowing students without home access to digital tools to stay competitive. Scholarship programs and corporate-funded initiatives are expanding access to high-quality education for students who would otherwise be left behind.

Implementing education equity at scale isn’t just about levelling the playing field—it’s about reimagining learning. It's about building an ecosystem in which no student is disadvantaged by circumstances beyond their control, where technology supports rather than divides, and where learning is accessible to every student everywhere.
\`\`\`
`,Ax=`\`\`\`yaml
title: The Future Is Now
original_publish_date: 2025-02-08
source: "LinkedIn"
original_url: 
status: "archive"
---
*Written in 2025. Archived as part of my body of work.*

The only way to predict the future perfectly is to create it. Education is struggling to keep pace with rapid technological and societal changes. Instead of waiting for institutions to evolve, we are taking the lead. At **Karman Line Acceleration (KLA)**, we are not just imagining the future of learning—we are building it. By uniting educators, technologists, and visionaries, we are designing a system that prepares students for the world ahead, not the one left behind.

We are building an institution where a 10-year-old student starts their day with an AI-powered mentor who guides them through a curriculum tailored to their strengths and interests. There are no rigid subjects or standardized tests—just immersive, hands-on learning. Students who want to operate at a PhD level in specific subjects are free to advance, research, and innovate. Those who need foundational support receive tailored resources and mentorship, ensuring no one is left behind.

In our learning model, students collaborate globally on real-world projects. By afternoon, they are in innovation labs, where those excelling push boundaries while others receive structured guidance. No student is boxed into a one-size-fits-all curriculum. Instead, education evolves with them, empowering them to learn in a way that best suits their growth.

This is not just a vision—it’s what we are actively creating.

### 1. Building a Learning System That Blends Knowledge and Experience

We are creating an institution that integrates both foundational knowledge and hands-on experience.

*   **Virtual and Augmented Reality Classrooms—**In our learning system, students will study historical texts and step into ancient civilizations. Immersive simulations that reinforce theoretical knowledge will demonstrate physics.
*   **Project-Based Learning on a Global Scale** – Students will demonstrate mastery through both assessments and real-world projects—designing cities, tackling climate change, and launching ventures before they graduate.
*   **Lifelong Learning and Skill-Building—**We are designing a system that prepares students not just for a single career but for continuous growth. AI-driven personalization ensures adaptability, creativity, and problem-solving remain at the forefront.

### 2. Designing a Learning System That Uses AI to Empower Educators

At KLA, we are integrating AI into education in ways that enhance personalized instruction and mentorship.

*   **Personalized Learning** – AI will assess strengths and weaknesses in real time, adapting content to provide support or challenges as needed.
*   **Immediate Feedback** – Students will correct mistakes instantly, reinforcing learning more effectively than delayed assessments.
*   **Inclusivity** – AI ensures struggling students receive extra guidance while advanced learners are continuously engaged.

By handling administrative and routine tasks, AI allows educators to focus on mentorship, creativity, and fostering emotional intelligence.

### 3. Shaping a Learning Institution Where Teachers Inspire and Guide

We are building a system where teachers are mentors, fostering deeper engagement and student development.

*   **Deeper Engagement** – Teachers will spend more time on critical thinking, creativity, and emotional intelligence.
*   **Stronger Student Support** – One-on-one mentorship will help struggling learners thrive.
*   **Collaborative Learning** – Educators will foster project-based teamwork that AI alone cannot replicate.

By removing the burden of rote instruction, teachers will inspire curiosity, problem-solving, and lifelong learning.

### 4. Creating a Balanced Learning System That Blends Technology and Human Interaction

At KLA, we are building an education model that ensures AI enhances human connection rather than replaces it.

*   **Interactive Learning** – AI will suggest hands-on activities that complement digital learning.
*   **Enhanced Creativity** – AI will introduce students to diverse perspectives and problem-solving approaches.
*   **Balanced Approach** – Our learning model blends technology with human interaction to create a richer, more meaningful educational experience.

### The Future Is Now

We are leading the charge. **Karman Line Acceleration (KLA)** is not waiting for change—we are driving it. We are building an education system that prepares students for the future, ensuring innovation and opportunity are accessible to all.

The future isn’t something we wait for—it’s something we create. **Are you ready to build it with us?**
`,Cx=`\`\`\`markdown
---
title: Why Schools Need to Change Now
original_publish_date: 2025-02-07
source: "LinkedIn"
original_url: 
status: "archive"
---

*Written in 2025. Archived as part of my body of work.*

We all know the worker economy is dying—and soon, it will die. Working in one job or industry for a lifetime itself has become obsolete. Education has always been a foundation for the future. Still, when the future is changing faster than education can catch up, we need to step back and question if education is genuinely letting people learn skills required for the future. Schools were initially designed to produce factory workers and clerks—structured, predictable roles that thrived in a stable, industrial economy. These jobs have declined for decades as organic automation developments have reshaped every industry. Now, that change is accelerating exponentially, with governments Billions of dollars of funding and promoting the AI race. 

This is a fact, not a fear. We can no longer disagree that the entire education perspective and process must be rewritten to align with this new reality.

### 1. The Future of Work is Changing

You are standing on the precipice of a new age. You’re not a pioneer. You’re not a changemaker. You’re just a regular person trying to figure out what the future holds. How will you make a living? How will you earn capital? We haven’t yet perfected technology to create a post-scarcity world where resources are abundant for all. So, in this rapidly evolving landscape, where does your livelihood come from?

For decades, jobs have been slowly shifting as automation integrated into industries. But now, with AI accelerating at an exponential pace, funded by billions in government and private investments, the change is no longer gradual—it’s happening right now. Entire sectors will transform, new industries will emerge, and traditional career paths will disappear. This is not speculation; this is reality.

What has already changed 

*   **Automation is replacing repetitive work** – Jobs involving predictable, manual, or formulaic tasks are rapidly being phased out. AI and robotics have taken over roles in manufacturing, transportation, customer service, and even entry-level knowledge work. If a job is built on routine, it’s at risk.

*   **Lifelong learning is the new standard** – The idea of mastering one profession and sticking with it for a lifetime is outdated. The future belongs to those who can constantly adapt—learning new tools, shifting between industries, and embracing reinvention as a career necessity.

*   **The gig and creator economies are expanding into new territories** – Traditional employment models are breaking down, giving rise to independent work in areas that previously didn’t exist. AI-generated content, personalized digital services, and niche knowledge-based consulting will form new economic pillars. Young professionals will craft careers not based on corporate hierarchy but on the value they provide to digital and decentralized economies.

### 2. The Skills Kids Need Today

Beyond core subjects like math and science, students today need a vastly different set of skills to thrive in the modern economy. The most valuable skills are no longer just technical abilities but rather a combination of interpersonal, creative, and technological fluency.

Here’s what I think schools should be prioritizing:

*   **Sales & Persuasion—Students** need to know how to influence others effectively when selling a product, pitching an idea, or advocating for themselves in a competitive job market.

*   **Storytelling & Communication** – Every great entrepreneur, leader, and creator understands how to craft compelling narratives. Storytelling isn’t just for writers—it’s essential for branding, marketing, negotiations, and leadership.

*   **Adaptability** and **problem-solving**—In an AI–driven world, success will depend on the ability to pivot quickly, learn new skills, and respond to unexpected challenges.

*   **AI & Technology Fluency—**Understanding how AI works, how to leverage it, and how to work alongside it will be a fundamental skill in nearly every profession.

None of these skills are traditionally taught in schools.

### 3. Future-Proof School Model

Shifting education toward a future-proof model doesn’t mean scrapping everything overnight. It means gradually integrating new methodologies, tools, and mindsets that prepare students for the realities of the modern world. But, hear me out—maybe we do scrap it all and start from scratch.

Seriously, we have centuries of data on learning methodologies, decades of technological advancements, and a global network of educational research. What if we combined the best of all worlds and built a new curriculum, a new learning system that actually serves the needs of today and tomorrow? A system that doesn’t patchwork new subjects into an old framework but reconstructs education from the ground up.

Until we get there, schools can begin transitioning in practical ways.

*   **Redefining Curriculum Priorities** – Schools must incorporate real-world skills like financial literacy, negotiation, digital content creation, and AI application alongside traditional subjects.

*   **Encouraging Entrepreneurial Thinking** – Business-building, creative problem-solving, and risk-taking should be nurtured from an early age through project-based learning and mentorship programs.

*   **Leveraging AI & Adaptive Learning** – Instead of resisting AI, schools should integrate it into classrooms, using it as a tool to provide personalized learning experiences and real-time skill assessment.

*   **Fostering Lifelong Learning Habits:** Students should leave school with knowledge and the ability to continue learning, unlearning, and relearning throughout their careers.

The world is evolving at an unprecedented pace, and education must evolve with it. Every moment we delay is a direct disservice to the next generation, setting them up for irrelevance in a world that will not wait for them to catch up. 

The time for change isn’t in the future—it’s right now.

Without intervention, we risk creating a generation unprepared for the world they’ll inherit.
\`\`\``,Ex=`\`\`\`markdown
---
title: "AI + Human Learning:  It Won’t Replace Teachers!"
original_publish_date: "2025-02-14"
source: "LinkedIn"
original_url: "https://www.linkedin.com/pulse/ai-human-learning-wont-replace-teachers-alban-jerome-vg3sc"
status: "archive"
---

*Written in 2025. Archived as part of my body of work.*

I come from a family of teachers—my mother and many of my aunts—so I’ve seen firsthand the dedication, patience, and passion that go into shaping young minds. My mother used to say teaching was a vocation because you don’t want people who lack love, discipline, and dedication in the profession. It can’t be just another job. One of the most important responsibilities of a teacher is not just to transfer the subject matter into the heads of kids but to mould them, shape them, and provide the support they need to grow into the best versions of themselves. Teaching is more than just delivering information; it’s about mentoring, guiding, and inspiring. The rise of artificial intelligence in education has sparked debates about the future of teaching. Will AI replace human educators? The answer is no. Instead of replacing teachers, AI has the potential to enhance their capabilities, making education more personalized, efficient, and engaging. By blending AI with human instruction, we can create a learning environment that empowers students and educators.

**1. AI the Ultimate Teaching Aid**

AI has evolved beyond just handling administrative tasks—it now works within the learning environment crafted by the teacher. Teaching humans should always remain a human-driven experience, and AI serves as another powerful teaching aid, much like blackboards, slides, or, hopefully, one day, holographic displays. It doesn’t replace teachers but rather supports them by handling routine tasks and enabling more customized instruction. Traditional classrooms often struggle to accommodate different learning paces, leaving some students behind while others feel unchallenged. While AI can certainly manage administrative work, its real impact is in assisting teachers in reaching every student—not just the average learner, but those who are struggling and those who are excelling and feeling disengaged. AI can:

*   Assess students’ strengths and weaknesses instantly.
*   Adapt content in real time, providing additional support or advanced challenges as needed.
*   Offer immediate feedback, helping students correct mistakes and reinforce concepts more effectively.

AI helps ensure students stay engaged, excited, and committed to learning. It provides additional support for students who need extra help while also challenging those who excel and may otherwise feel bored in their current grade level. This adaptive assistance makes the learning experience more dynamic and effective for all students. It ensures that no student is overlooked, providing additional reinforcement where needed and pushing advanced learners to explore beyond the curriculum.

**2. From Gatekeepers to Guides**

We now know AI can teach. Different models and learning programs have validated that point for the last few years. So, what is the role of a teacher now? Teachers in the past were, in many ways, historically speaking, the primary gatekeepers of knowledge, delivering and educating the young. Now, since AI can do that job, the question is, what is the next step in the evolution of teachers as a profession? For me, it's elevating them as guides, as mentors, so they can spend time imparting wisdom, engaging in social skills, helping them critically think, encouraging creativity, and emotional intelligence—skills a machine cannot teach. Sometimes, students struggle for reasons beyond academic skills, and it takes another person to realize this. Not everybody's home is sunshine and rainbows. Kids might deal with their own demons. Sometimes, students struggle for reasons beyond academic challenges. Not every home is filled with support and stability—some children deal with personal battles that impact their learning ability. The teacher's role is now not just to impart knowledge but, wisdom, imparting emotional skills, creating the environment for interpersonal relationships, and having children build a sense of discipline that's innate and not driven by the clock or the calendar. The teacher’s role now is to shape discipline from within, not driven solely by the clock or the calendar.

In this evolved model, educators teacher:

Spend more time engaging with students on critical thinking, creativity, and emotional intelligence.

Provide deeper, one-on-one support for struggling learners.

Foster collaborative and project-based learning experiences that AI alone cannot replicate.

By removing the pressure of being sole knowledge providers, teachers can focus on inspiring and coaching students, helping them develop problem-solving skills and a passion for lifelong learning.

**3. The Screen Dependency Debate**

Let me address the elephant in the room. One of the biggest pushbacks against AI learning is screen dependency, and that's a fair concern. I see it firsthand—my niece and nephews are extremely screen-dependent, much more than I ever was growing up. A lot more than I was, or most of my peers ever were. Back then, the only screen I had was a television. And I may date myself when I say this, but we didn’t have a lot of channels back then. More came along when I was a teenager, but as a young child, television was a shared experience with my parents, who strictly regulated screen time. Instead, they encouraged me to go outside, play, and read books.

Today's children are digital natives. They are introduced to screens at a much younger age, consuming content through multiple devices. But here’s the thing—we are not necessarily bound to screens. AI learning doesn’t mean kids have to be glued to screens. AI can be integrated into education in ways that go far beyond just staring at a screen. It can facilitate experiential learning through interactive games that use physical objects, encourage social skill development, and create complex, scenario-based learning experiences. AI can also introduce students to diverse perspectives by simulating cultural and situational experiences that they might not otherwise encounter, broadening their worldview in an immersive and engaging way. Instead, it can be a tool that enhances interactive and experiential learning.

Today's AI can and do provide insights to educators on how students learn best, allowing for more customized lesson plans. Create hands-on activities that complement digital learning. They can also encourage creative problem-solving by offering diverse perspectives and alternative learning methods.

When used correctly, AI becomes an assistant that strengthens human-led education rather than replacing it. The goal isn’t to create a fully digital classroom but to use AI as a bridge that connects technology with human interaction in meaningful ways.

**Co-Evolution, Not Replacement**

With the evolution of AI agents, the future of AI and human learning will move at an exceptional pace. And I don’t mean sci-fi-like scenarios where kids are tutored at home by robots or droids replace teachers in a classroom. No, no, this is about hybridization—an advanced integration of technology and human innution evolving together. AI can enhance the learning experience by making education more personalized, accessible, and efficient. Still, it cannot replace the emotional intelligence, adaptability, and inspiration human educators bring to the classroom. They say the best way to predict the future is to create it. Maybe that’s what I—or we—should be doing. Creating a world that leverages these incredible technologies to enhance and build upon the decades and centuries of learning models, methodologies, and educational resources we have accumulated as a species and as a civilization.
\`\`\``,jx=`\`\`\`markdown
---
title: "Beyond IQ: Why the 9 Intelligences Matter More Than Grades"
original_publish_date: "2025-02-12"
source: "LinkedIn"
original_url: "https://www.linkedin.com/pulse/beyond-iq-why-9-intelligences-matter-more-than-grades-alban-jerome-dw4lc"
status: "archive"
---

*Written in 2025. Archived as part of my body of work.*

For generations, schools have prioritized IQ and standardized test scores as the primary measures of intelligence and potential. This trend dates back to the early 20th century when intelligence quotient (IQ) tests were first developed to assess cognitive abilities, particularly in linguistic and logical reasoning. However, human intelligence is far more diverse than a single number on a test. Howard Gardner’s theory of Multiple Intelligences, introduced in 1983, suggests that there are at least nine different types of intelligence, all of which contribute to personal and professional success. Here’s why these intelligences matter more than grades:

### 1. Schools - Creating averages

Traditional education systems largely focus on linguistic and logical-mathematical intelligence—the ability to read, write, calculate, and analyze. While these skills are undoubtedly valuable, they represent only a fraction of what makes someone intelligent.

Other intelligences—such as spatial, musical, bodily-kinesthetic, interpersonal, intrapersonal, naturalistic, and existential—are often overlooked in standard curricula. This narrow definition of intelligence leaves many students feeling inadequate simply because their strengths lie outside traditional academic subjects. By broadening how we assess intelligence, we can nurture a more well-rounded generation of thinkers, creators, and problem-solvers.

### 2. The Nine Intelligences

Success in life isn’t just about being book smart—it’s about knowing how to navigate different challenges, work with people, and develop your unique strengths. Each intelligence plays a role in shaping a person’s path:

1.  **Linguistic Intelligence** – If you have a way with words, you might thrive as a writer, lawyer, or speaker. Think about people who tell incredible stories or argue cases in court; their ability to communicate makes them stand out.
2.  **Logical-Mathematical Intelligence** – People who excel in problem-solving, data analysis, and numbers tend to do well in fields like engineering, finance, and science. It’s why mathematicians can crack complex codes or why financial analysts can predict market trends.
3.  **Spatial Intelligence**—Have you ever wondered how architects design incredible buildings or how game designers create immersive worlds? Spatial intelligence helps people visualize and manipulate objects, making careers in design, architecture, and animation a natural fit.
4.  **Musical Intelligence** – Some people just have an ear for rhythm, melody, and sound. Musicians, composers, and producers use this intelligence to craft songs that stick with us for life.
5.  **Bodily-kinesthetic intelligence**—Athletes, dancers, and even surgeons have incredible control over their bodies. Whether a gymnast lands a perfect routine or a surgeon performs delicate procedures, this intelligence is all about movement and precision.
6.  **Interpersonal Intelligence** – The best leaders, counselors, and teachers know how to connect with others. If you’ve ever met someone who just “gets” people and can navigate social situations effortlessly, they’re likely strong in interpersonal intelligence.
7.  **Intrapersonal Intelligence** – Understanding yourself is just as important as understanding others. People with high intrapersonal intelligence often become psychologists, philosophers, or even great novelists because they have deep insight into human emotions and motivation.
8.  **Naturalistic Intelligence** – If you’ve ever met someone who can identify plants on a hike or understands animal behavior instinctively, they might be strong in naturalistic intelligence. This intelligence is key for careers in conservation, agriculture, and environmental science.
9.  **Existential Intelligence** – Some people naturally ask big questions about life, purpose, and the universe. Think about philosophers, theologians, and deep thinkers—those who push society forward by questioning everything.

Understanding these varied intelligences enables students to leverage their strengths meaningfully rather than being judged by a rigid grading system.


![](https://media.licdn.com/dms/image/v2/D5612AQEqjhKP67zvZw/article-inline_image-shrink_1500_2232/B56ZT3BQwwGsAU-/0/1739311093701?e=1772064000&v=beta&t=GLW51VEWcHTgRg-ZF8GTm2NR7Dqk40NlddPhQzplWM4)


### 3. Rethinking Learning

The world is no longer a world of averages. We are moving into an era that values specialization, adaptability, and innovation. If we genuinely embrace these nine intelligences, we can transform education into a system that is smarter, more personalized, and genuinely capable of unlocking human potential.

Instead of forcing students through a one-size-fits-all education model, we should use advanced learning methodologies and AI-driven tools to tailor learning experiences. Personalized education, powered by technology, can provide students with the resources that align with their unique intelligence profiles, allowing them to thrive in their strengths rather than be boxed into limitations.

This isn’t just about helping students do better in school—it’s about creating a system that equips them for the future. By integrating customized learning strategies, we can foster creativity, critical thinking, and real-world problem-solving skills that are vital for success in an increasingly complex world.

### 4. Education for a Post-Scarcity World

As technology advances, we are moving toward a world that could be post-scarcity—one where access to knowledge and opportunity is not limited to only those with privilege. This shift is not just about education; it's about creating pathways beyond mere survival and daily grind. With access to rich learning resources, students can develop skills that lead to innovation, entrepreneurship, and new industries. When we equip students with the right tools—whether AI-driven learning systems, mentorship programs, or hands-on experiential learning—we open doors to opportunities that were once only available to a select few. A future where talent, creativity, and ambition drive success rather than socioeconomic status is within reach, but it starts with making these resources widely accessible. To reach that future, we must ensure that all students, not just those with opportunity, are given access to extraordinary tools that level the playing field.

Imagine a world where every child, regardless of background, has access to AI-powered tutors, immersive learning experiences, and mentorship programs that foster their natural strengths. When we shift our focus from rote memorization to personalized education, we can create a future where intelligence is nurtured in all its forms, allowing every student to excel in their own way.

### Building the Future Through Opportunity

The world is evolving rapidly, and so must our education system. Intelligence isn’t just about memorization and test-taking—it’s about problem-solving, creativity, and human connection. By embracing all nine intelligences, we can move beyond outdated grading systems and create pathways that foster real-world success in a way that empowers each individual.

To build a future of true opportunity, we need to design an education system that recognizes and nurtures talent in all its forms. This means investing in tools, mentorship, and resources that give every student—regardless of background—the ability to develop their strengths and contribute meaningfully to society. Learning must move beyond outdated methods and become an innovation and self-discovery engine.

It’s time to stop simply measuring intelligence and start actively cultivating it.
\`\`\``,Nx=`\`\`\`markdown
---
title: "Beyond Valuations: Metrics That Truly Matter for Startup Success"
original_publish_date: "2025-01-13"
source: "LinkedIn"
original_url: "https://www.linkedin.com/pulse/beyond-valuations-metrics-truly-matter-startup-success-alban-jerome-2wdsc"
status: "archive"
---

*Written in 2025. Archived as part of my body of work.*

Valuations often dominate the conversation in the startup space, with many companies working very hard to showcase a strong valuation as a significant indicator of how successful they are, how much in demand their product is, how valuable their company is, and how cool their technology is. But the fact is, valuation is about raising funds, and while raising funds is one of the most important parts founders need to play to grow their startup. There is much more to the startup space than just valuation and raising funds. It's about building resilient, scalable businesses that deliver consistent real value. Today, I'd like to write about a few of those key metrics that startups should focus on and startups that have thrived by focusing on those metrics 

A .very famous example of this is Theranos. Elizabeth Holmes, who founded the company along with her co-founder Ramesh Balwani, exaggerated its valuation, which, at its peak, was nearly $9 billion. Despite this impressive valuation, the company had no operational success or even validated technology.

To build enduring businesses, startups should focus on metrics that reflect persistence, scalability, and value creation. 

Here are some key metrics that matter:

**Revenue Growth**

Revenue growth is a critical indicator of product acceptance and market fit. Airwallex, a global fintech platform founded in 2015, exemplifies this. Initially focusing on cross-border payments for high-growth startups and marketplaces, Airwallex expanded its services significantly. By October 2023, the company reported an impressive 460% year-over-year revenue growth in the Americas, highlighting its rapid expansion and success beyond its Australian origins.

**Churn Rate**

High customer retention rates signify strong product-market fit and customer satisfaction, while high churn rates can indicate underlying issues. **Dropbox** is a good example. Its freemium model and intuitive user experience enabled it to grow to 500 million registered and 11 million paying users by 2017, with 90% of its revenue generated through self-serve channels.

**Runway & Burn Rate**

Managing runway—the time a startup has before its cash reserves run out—is crucial for survival. Buffer, a social media management platform, adopted a lean operational strategy emphasizing sustainable growth while keeping a low burn rate. This approach allowed Buffer to fund its growth independently and reach significant milestones without heavily relying on external funding.

**Team Growth & Retention**

A stable and motivated team is essential for long-term success. High turnover can lead to operational challenges and cultural instability. **Airbnb** attributes much of its success to its founding team's stability and complementary skill sets. By retaining key talent and fostering a strong, values-driven culture, Airbnb will scale globally, operating in over 220 countries and regions by 2021.

**Fundraising Efficiency**

While raising capital is necessary, the efficiency of fundraising efforts can significantly impact a startup's trajectory. **Stripe**, the global payments processor, exemplifies strategic fundraising. Since its launch in 2009, Stripe has raised substantial capital, including a $600 million funding round in 2021 that valued the company at $95 billion. By building relationships with investors aligned with their vision, Stripe minimized unnecessary dilution and maintained control over its growth strategy.

Valuations may capture headlines, but they don't guarantee success. By focusing on metrics like revenue growth, customer retention, and operational efficiency, startups can build sustainable businesses that stand the test of time.

👉 **What metrics do you believe are critical for measuring startup success?** 

**Let's discuss this in the comments!**

#Startups #Accelerators #SustainableGrowth #MetricsThatMatter #Entrepreneurship #RevenueGrowth #CustomerSuccess #InnovationEconomy #FounderSupport #ImpactDrivenBusiness
\`\`\``,Rx=`\`\`\`markdown
---
title: The Biggest Mistakes Founders Make in Their First Year
original_publish_date: 2025-02-03
source: "LinkedIn"
original_url: https://www.linkedin.com/pulse/biggest-mistakes-founders-make-first-year-alban-jerome-xp81c
status: "archive"
---

*Written in 2025. Archived as part of my body of work.*

Starting a company is an awesome journey, but the first year can be challenging. There's lots of excitement, anxiety, and a whirlwind of emotions associated with it. The highs can be exhilarating, but the lows can be devastating. Acknowledging the emotional rollercoaster is just as important as managing the business itself.

That's why it's crucial to discuss the common mistakes founders make in their first year and how to avoid them.

**1️⃣ Trying to Build the Perfect Product Before Launching**

Many founders get caught in an endless cycle of refining their products without putting them in front of real users. Reality check: Perfection is the enemy of progress. It's very common for great companies to look back at their first iteration of the product—their MVP—and feel a bit embarrassed or awkward. It's often raw, cringy, and laser-focused on solving a single issue rather than being a fully polished product. And that's not a bad thing. Chasing perfection can derail progress significantly. Instead, launch, gather feedback, and iterate. Real-world data beats assumptions every time.

Many founders get caught in an endless cycle of refining their products without putting them in front of real users.

**2️⃣ Not Talking to the Customers**

A great idea means nothing if it doesn't solve a real problem for real people. Too many founders assume they know what their customers want without talking to them. Your perspective is just one—your customers' perspectives are many. Engaging directly with the people facing this problem allows you to test assumptions, validate ideas, and refine your approach much faster.

Understanding your audience goes beyond market research, customer interviews, or any other jargon. It's about genuinely listening. Conversations with real users help pinpoint what actually matters, what features they care about, and what pain points remain unresolved. This direct feedback leads to faster, more accurate product-market fit.

**3️⃣ Scaling Fast and Scaling Soon**

Growth is exciting, but many founders assume that scaling fast and scaling soon are interchangeable—they are not. The key is balance. As a startup, agility is crucial. The ability to iterate quickly, get market validation, hire the right team, and acquire more customers contributes to growth. Scaling up is a natural goal for founders and investors.

However, scaling too soon—without the proper foresight, strategic planning, or experience—can lead to volatile, unpredictable growth that detaches you from steady progress. Premature scaling often results in reckless expansion moves, overhiring, or entering markets before you genuinely understand their demands. This can hurt long-term stability prospects and, in some cases, lead to the sudden failure of the startup.

The takeaway? Scale when you are ready, not just because you can. Thoughtful, measured expansion ensures longevity and resilience.

Growth is exciting, but premature scaling can sink a startup. Focus on nailing your core business before expanding.

**4️⃣ Ignoring Your Runway, Cash Flow, and Avoiding Surprises**

All startups operate within a finite runway. Knowing your financial health—your burn rate, potential revenue, available funding, and fundraising capabilities—is crucial to survival.

A firm grasp of these factors allows founders to properly manage cash flow and avoid financial blind spots that could lead to failure. This is why having a clear economic plan is essential. Your projections—covering expenses, revenue, and fundraising capabilities—provide foresight into your operational milestones and growth trajectory.

Without a clear understanding of how much capital you have, how quickly you are burning through it, and when you need to raise funds, you risk unexpected financial difficulties. Many startups fail not because they run out of money but because they don't anticipate when they will. Avoidable surprises—like sudden cash shortages, underestimated expenses, or over-optimistic revenue projections—can be the difference between survival and shutdown. A lack of financial clarity is one of the biggest reasons startups fail—don't let it be yours.

Running out of money is one of the top reasons startups fail. Founders often underestimate burn rate, overestimate revenue, or spend on non-essential.

**5️⃣ Building a Strong Team: Complementary Strengths, Skills, and Wisdom**

Great visionary leaders make for inspiring stories, but successful startups are built by strong teams. Whether it's co-founders or early hires, the people you bring into your business can make or break your startup. Beyond technical skills, experience and wisdom play a crucial role. A well-rounded team considers different viewpoints, making better strategic decisions and reducing blind spots. Diverse perspectives lead to stronger problem-solving, innovation, and adaptability—key ingredients for a startup's survival. And when tough times come (because they always do), a resilient team will manage challenges, navigate setbacks, and keep moving forward without breaking down due to internal conflicts. A strong team isn't just a collection of skilled individuals—it's a complementary unit where different strengths, experiences, and perspectives come together to drive success. The right co-founders and early hires should bring more than just technical expertise; they should contribute unique insights, industry knowledge, and problem-solving abilities that balance each other out. Build a team that complements your strengths and aligns with your mission.

**6️⃣ Innovate and Market**

A startup exists for two fundamental reasons: Innovation and Marketing. You can build the most groundbreaking product, elegant solution, or revolutionary service, but if nobody knows about it, it might as well not exist. It's not just about creating something innovative; it's about ensuring the world understands its value and why it matters. No matter how brilliant, unique, or problem-solving your idea is, it won't impact if no one knows about it. Innovation alone is not enough—marketing ensures that the world knows your solution and sees its value. Founders must think holistically—while developing their product or innovating a solution, they must simultaneously build a sales and marketing strategy that fuels adoption. Many founders get caught up in perfecting their product, assuming that a great solution will sell itself. It won't. The best startups aren't just technology companies or service providers—they are exceptional at telling their stories, positioning their value, and ensuring they reach the right audience. The ability to market and distribute effectively is just as important as the ability to create. A startup must build brand awareness, educate potential customers, and develop a repeatable process for customer acquisition. Marketing isn't just an afterthought—it's an engine for growth and should evolve in tandem with the product itself. The best startups don't just build great products; they master getting them into the right hands.

**7️⃣ Listening to Customer Feedback: The Key to Growth**

Earlier, we talked about how essential it is to engage with your customers because they bring multiple perspectives. But here's another fact: your customers love to talk back to you. They will give you feedback—sometimes a lot of it. And that's a good thing. When they stop giving feedback, that's when you should be worried. Your customers provide a first-hand perspective of how your product is performing. They will tell you what's working, what's broken, and what could be better. Take all this feedback constructively—filter what is relevant, identify key areas of improvement, and refine your product accordingly.

At the same time, don't take feedback personally. Sometimes, customers vent their frustrations, and it's crucial to separate valuable insights from emotional reactions. The goal is to use feedback as a tool for growth, not a roadblock that derails your vision or growth.

**8️⃣ Wearing Many Hats: The Power of Delegation**

One of the greatest gifts—and burdens—of being a founder is that you will wear multiple hats. One day, you're the CEO, setting the vision and strategy. Next, you're the intern, grabbing coffee and handling the most minor tasks. Some days, you're crunching financials, ensuring every number in your spreadsheet balances. On other days, you're the marketing lead, debating whether blue, red, or green fits your brand best. The reality is you will do it all. However, while this hands-on approach is necessary in the early days, it also comes with the risk of inefficiency and burnout. Learning to delegate is one of the most critical skills a founder can develop. Your startup is your dream, your baby—but bringing in experts and building a capable team doesn't dilute your commitment. Instead, it amplifies your ability to drive the vision forward.

In the first year, especially, you will juggle countless responsibilities while working to expand enough to hire a team. The key? Trust the people you hire. Learn to let go and focus on the areas where you bring the most value.

There's a common leadership mantra: Delegate and Elevate. As a founder, growing your company means growing your leadership skills—dig deep, build a strong team, and give yourself the bandwidth to focus on what truly moves the startup forward.

**9️⃣ Building Relationships: Your Startup Doesn't Exist in a Vacuum**

Your startup will never live in a silo, and as its founder, you are its most prominent champion and biggest advocate. You have to actively seek mentors while building meaningful relationships that can help shape your journey. You are responsible for building relationships and ensuring your startup's name is known in the ecosystem. Your network is your gateway to learning from others' experiences, gaining wisdom from mentors, avoiding costly mistakes, and unlocking new opportunities. A strong network is non-negotiable, even if you're not looking to close a business deal or secure funding. People trust people. No matter how great your social media campaigns are, they can't replace genuine social connections. Talking to the right people, sharing your startup's journey, and continuously engaging with your ecosystem will build credibility, attract allies, and open unexpected doors. If you're not out there advocating for your startup—who else will?

## 🔥 Build Smart, Grow Strong, and Succeed

The first year of a startup is a whirlwind of learning, adapting, and growing. Mistakes and challenges will arise, and uncertainty will be a constant companion. But every setback is an opportunity to refine your approach, strengthen your leadership, and build a more resilient business. The key is to embrace the process, make informed decisions, and surround yourself with the right people. Seek mentors, leverage your network, delegate wisely, and always keep a pulse on your financial health. The startups that thrive are the ones that evolve—by listening, iterating, and staying agile.

Every challenge you overcome, lesson you learn, and relationship you build moves you forward. Stay adaptable, stay focused, and keep pushing toward your vision.

Your success is built one step at a time, and every decision you make shapes your future.

Wishing you the best on your journey—may your startup thrive, your vision inspire, and your hard work lead to incredible success! 🚀

#StartupJourney #FounderWisdom #EntrepreneurMindset #ScalingSmart #LeadershipGrowth #NetworkingForSuccess #InnovateAndMarket #BuildToLast
\`\`\``,Px=`\`\`\`markdown
---
title: Classrooms Full of Data, But No Wisdom
original_publish_date: 2025-04-09
source: "LinkedIn"
original_url: https://www.linkedin.com/pulse/classrooms-full-data-wisdom-alban-jerome-v8psc
status: "archive"
---

*Written in 2025. Archived as part of my body of work.*

*We're mistaking Information for Intelligence!*

Classrooms today are a lot more modern than they were when I was a student. We have smart boards now, not blackboards. Chromebooks instead of notebooks. A lot of students use interactive learning tools like VR.

Our version of interactive learning? Dioramas and brilliant teachers.

And this is great. Technology is a crucial part of education. It opens up possibilities, enhances engagement, and yes, makes certain types of learning a lot more accessible. But if you look a bit deeper—just under the surface—you’ll notice something familiar. A foundation that’s been around for decades, nearly a century. Memorize. Recall. Repeat.

Now, that’s not necessarily evil, and I won’t say it as such. Memory has its place. It builds structure, it sharpens our focus, and in the early years, it strengthens those neural connections we have.

But the issue I feel is that we’re training students to master one thing that AI is already fabulous at—and incredibly fast at: **information retrieval**.

We’ve all used tools today like ChatGPT, Grok, Perplexity… and students should absolutely be encouraged to use them. Not to cheat or shortcut, but to **explore**. To dive into ideas. To roam the vast realms of information available to them in seconds.

I still remember waiting in line to check out books from the school library, just so I could read them. And honestly? The time I spent standing in that queue—just waiting—I could now use to retrieve a hundred times more information than what was in that little book.

That’s the reality we live in. So why are we still anchoring our system to a model that assumes memory equals mastery?

### Neural Pruning.

Before I go strongly into why a *knowledge-retrieval-only learning model* may be harmful, let’s first give memory—and neuroscience—its due.

Research (and there’s tons of it) has shown that early exposure to knowledge, even through plain old memorization, helps strengthen neural pathways. Harvard research has shown that 90% of a child’s brain develops by the age of 5, forming over a million neural connections every second. That’s not a throwaway statistic—it’s biology in motion.

These foundational skills are critical. They set the stage for later intelligence, emotional development, motor control, and problem-solving. What happens to our brains after the age of five is something called **neural pruning**. In simple terms, the brain trims away the connections it doesn’t need or use. It’s the brain’s way of optimizing its resources.

So the years we spend in early childhood and throughout school? That’s the brain making choices—about what to hold on to and what to let go of. And that, in turn, helps define how we process, recall, and apply knowledge as adults.

So let me be clear: *I’m not talking about ditching memory development.*

I’m saying we shouldn’t make it the core basis of how we define intelligence or success.

Because there’s more than one kind of intelligence besides just the ability to recall information. A lot of memory-based learning is centered around facts, figures, and linguistic skills—which falls under what Howard Gardner called linguistic intelligence.

But Gardner identified nine types of intelligence—not one. So why are we still teaching like there’s only one that matters?

The question we need to be asking ourselves today is:

Is knowledge the only form of intelligence we want to encourage in learning?

Because if the answer is no, then our approach to education has some serious catching up to do.

### When Knowledge is Everywhere, What Skills Should We Be Focusing On?

Let’s get practical for a second.

If students today can look up just about *any* piece of information within seconds—thanks to AI tools like ChatGPT, Grok, or *even, like we did in our time, a* Google search—then what are we still asking them to do with all that memorized content?

According to the OECD’s 2020 report on curriculum overload, piling on content with the sole goal of memorization doesn’t make learning richer. It leads to stress, surface-level understanding, and limited critical thinking. The report urges education systems around the world to adopt a “fewer things better” approach—focusing on depth over breadth, and application over recall ([OECD, 2020](https://www.oecd.org/content/dam/oecd/en/publications/reports/2020/11/curriculum-overload_167e276d/3081ceca-en.pdf)).

Backing this up, a 2024 study published in Scientific Reports found that students who learned through problem-based, hands-on, and interactive methods demonstrated significantly better critical thinking skills and deeper conceptual understanding than those who were taught traditionally ([Nature, 2024](https://www.nature.com/articles/s41598-024-75379-0)).

And in *Frontiers in Education*, researchers went one step further: critical thinking doesn’t happen by default. It doesn’t emerge magically from reading a textbook or memorizing definitions. It needs to be taught intentionally—with space to question, reflect, and engage in meaningful application ([Frontiers in Education, 2022](https://www.frontiersin.org/articles/10.3389/feduc.2022.770464/full)).

But critical thinking is just one piece of the puzzle.

In a world where information is available instantly, what we really need to be developing are the human skills—the ones AI can’t replicate (at least not yet):

*   **Creativity**
*   **Empathy**
*   **Curiosity**
*   **Collaboration**

These are the skills we need to develop, because knowledge is now an easily available commodity. What we do with that knowledge is the real skill and power.

### What Should We Be Doing?

With all these incredible tools at our fingertips—AI tutors, research assistants, simulation engines—our schools should be doing more than just *coexisting* with them. They should be leaning into them. Encouraging students to use them. Integrating them meaningfully into the learning process.

We should be training kids to type ridiculously fast—not so they can write essays faster, but so they can *think* faster with AI, *interact* faster with technology, and make the most of these tools that are now part of their everyday lives.

AI tutors like Khanmigo and ChatGPT aren’t threats to education. They’re extensions of it. Tools educators should be using! They can help teachers personalize learning, help students explore different ways of understanding a concept, and bridge the gap between information and actual comprehension.

Because that’s what we really need to teach for the future: not just how to memorize information, but how to understand it, explain it, question it, and use it to create something new.

Maybe education today should be less about reciting information, and more about:

*   **Researching**
*   **Finding and filtering credible information**
*   **Explaining choices**
*   **Justifying answers based on context**

Maybe we should do more project building—get kids creating with their hands, turning theory into tangible outcomes. Maybe they should be outside more, interacting with their communities, learning through exploration, observation, and reflection.

Because the truth is, we won’t build the next generation of thinkers inside a worksheet.

We have to get the kids back into the world - because they’re the ones who will grow up and improve it.

And if we do this right, maybe we won’t just have classrooms full of data anymore....we have oceans of servers for that.

We’ll have schools full of wisdom.
\`\`\``,zx=`\`\`\`markdown
---
title: Education Is a Human Right—But Is It Equally Humanizing?
original_publish_date: 2025-04-12
source: "LinkedIn"
original_url: https://www.linkedin.com/pulse/education-human-rightbut-equally-humanizing-alban-jerome-h7qkc
status: "archive"
---

*Written in 2025. Archived as part of my body of work.*

Education is universally celebrated as a fundamental human right, the bedrock for personal growth and societal progress. Never in history has it been more accessible—centuries ago, literacy was a privilege reserved for monks in monasteries or the elite with private tutors, while illiteracy often left people vulnerable to exploitation.

Today, formal education opens doors to millions, yet a critical question remains: does it humanize everyone equally? While access has expanded, the experience of education often falls short in fostering true belonging, particularly when we consider inclusivity, language barriers, and cultural disconnects.

**Inclusivity: Beyond Open Doors**

Inclusive education isn’t just about letting everyone into the classroom—it’s about ensuring every student feels they belong, can participate fully, and has the chance to thrive. On paper, inclusivity has become a cornerstone of modern education policy, aiming to embrace diversity across race, ethnicity, gender, ability, and socioeconomic status. The goal is clear: reduce discrimination and create equitable learning spaces. But reality tells a different story.

Students with disabilities or neurodivergence often face significant hurdles in mainstream classrooms. Physical access might exist, but without tailored support—like teachers trained in differentiated instruction or resources for assistive technologies—these students can feel sidelined.

Even among neurotypical students, the system tends to cater to the "average," leaving those who need extra help or those who grasp material quickly and crave more challenge feeling disconnected. The bored, fast-tracking student disengages when their curiosity isn’t nurtured, just as the struggling student loses confidence when left behind. True inclusivity means designing education that meets every learner where they are, fostering not just presence but growth and agency.

**Language: A Tool for Connection or Exclusion?**

Language shapes thought, yet in many education systems, it doubles as a gatekeeper. In India, students often study in their native languages—Hindi, Tamil, Bengali, or others—through high school, building strong foundations in their mother tongues. But at university, particularly in fields like engineering or medicine, the medium often switches abruptly to English. Brilliant minds, accustomed to reasoning in one language, find themselves memorizing complex concepts in another, often without grasping their deeper essence.

I’ve heard stories of engineering graduates who, under pressure to “byheart” material, mastered exams but missed the joy of understanding why equations worked or how theories applied. Their thinking framework remained rooted in their native language, yet their education demanded fluency in a foreign one. This disconnect isn’t just academic—it’s dehumanizing. It reduces learning to rote survival rather than fostering curiosity and innovation. A humanizing education would ease this transition, offering bilingual resources, language scaffolding, or even vernacular options in higher education to let students engage deeply with ideas, not just words.

**Cultural Disconnect: Whose Education Is It?**

Formal education often carries the imprint of dominant cultures, from the stories in textbooks to the norms embedded in classroom interactions. For students from marginalized or minority backgrounds, this can create a profound disconnect. When curricula prioritize standardized or Eurocentric perspectives, they risk rendering other histories and experiences invisible. A student who never sees their culture reflected in what they learn may feel like an outsider in their own education, disengaged from a system that seems irrelevant to their reality.

This disconnect isn’t just about content—it’s about meaning. Education humanizes when it connects to students’ lives, sparking curiosity and empowering them to shape their futures. Culturally responsive teaching can bridge this gap, weaving students’ identities into lessons and encouraging dialogue that honors their perspectives. But it requires educators to confront their own biases and curricula to evolve beyond one-size-fits-all models. Without this, education risks becoming a tool of assimilation rather than liberation.

**Reimagining Education for All**

If education is to live up to its promise as a human right, it must do more than grant access—it must humanize every learner equally.

We’ve made strides. Literacy is no longer a luxury reserved for monks or the privileged few. But access alone isn’t enough.

A system that includes you physically but excludes your language, identity, or pace of learning isn’t truly inclusive. It might educate—but does it *elevate*?

Here’s how we can move forward:

*   **🔁 Personalize Learning**

    Every student is wired differently. From neurodivergent learners to those who need acceleration, flexible curricula and adaptive teaching can ensure no one gets left behind—or left waiting.

*   **🗣️ Celebrate Linguistic Diversity**

    Language isn’t just a medium—it’s identity. When we integrate students’ native languages into the classroom, we’re not just teaching *through* them—we’re learning *from* them.

*   **🌍 Center Cultural Relevance**

    Curricula should reflect the world students actually live in. When learners see themselves in what they study, education stops being abstract and starts becoming personal.

*   **🤝 Build Belonging**

    Inclusion is more than a checkbox. It’s a feeling. It shows up in school culture, classroom practices, hallway conversations. Every student should know they *matter* here.

*   **🧰 Empower Educators**

    Our teachers are at the heart of change. Let’s equip them—with the tools to spot bias, adapt instruction, and connect with the lived experiences their students bring.

Education has come a long way from the days when literacy was a privilege for the few, but access alone isn’t enough. To be truly humanizing, it must affirm every student’s worth, speak their language, and reflect their world. As educators, leaders, and advocates, let’s reimagine education as a space where no one feels left behind or left out—a space that doesn’t just teach but transforms.
\`\`\``,Lx=`\`\`\`markdown
---
title: "Education ≠ Learning: Why the Market No Longer Hires Just Degrees"
original_publish_date: 2025-04-14
source: "LinkedIn"
original_url: https://www.linkedin.com/pulse/education-learning-why-market-longer-hires-just-degrees-alban-jerome-zgv3c
status: "archive"
---

*Written in 2025. Archived as part of my body of work.*

We’ve glorified education for so long that we forgot to ask: **what is it really preparing people for?**

For decades, education has been considered the golden ticket to opportunity. You get the degree, and the job follows. The better you score while getting the degree, the more likely your chances are of getting a well-paying job. You tick the boxes, play by the rules, and the path unfolds neatly before you.

*That’s the promise we were sold.*

But somewhere between lecture halls and job interviews, between term projects and company onboarding, the promise started to unravel.

Because here’s the truth, no one really tells you in school:

**Being educated is not the same as being employable.**

And even more crucially, **being educated is not the same as being able to learn.**

### The Degree Illusion

Let’s start here.

A degree is proof that you’ve completed a set of academic requirements. It tells the world that you stuck with something, showed up, passed the exams, and emerged on the other side with a piece of paper and (hopefully) a few new skills.

But that degree is only as good as its context. It reflects knowledge at a moment in time.

And in a world that’s evolving as fast as ours, *that moment expires quickly*.

Today, industries are being redefined in real-time. AI is rewriting job descriptions. Climate tech, fintech, healthtech—all exploding and demanding new, interdisciplinary skillsets. Roles exist now that didn’t even have names five years ago.

In that world, static knowledge—no matter how prestigious the source—isn’t enough.

The job market is no longer asking, *“What do you know?”*

It’s asking, *“How fast can you learn what you don’t?”*

### What Employers Actually Hire For

Ask any startup founder or hiring manager today, and they’ll tell you the same thing: They want people who can think, solve, adapt. People who can navigate ambiguity. People who know *how to learn.*

I’ve worked with enough founders and investors to see this firsthand. Some of the best hires in our portfolio companies weren’t the most academically accomplished. They were the ones who asked good questions. Who didn’t flinch when the roadmap changed. Who could go from whiteboard to execution without needing a playbook.

Contrast that with many fresh grads—smart, ambitious, hardworking—but struggling. Struggling to take initiative without being told. Struggling to handle feedback. Struggling with unstructured problems, fast deadlines, or shifting roles.

Not because they aren’t capable. But because they’ve been educated for a world that no longer exists.

### Education Was Built for Stability. Work Today Is Built on Change.

Let’s not forget where our current education model came from.

Universities were initially designed to produce scholars, then civil servants, then factory workers. The structure was built for a world of predictable systems, long careers in single industries, and slow change.

*Let's be honest, how people still work in the same industry they started in.*

We live in a world where:

*   The average shelf life of a skill is now less than five years.
*   Career paths are nonlinear.
*   Roles are hybrid, cross-functional, and constantly evolving.
*   Startups pivot. Corporate restructuring. Whole industries get disrupted overnight.

And yet, education continues to operate on long cycles, fixed curricula, and the assumption that what you learn at 22 will still be useful at 32. 🙄

### Learning Is a Skill—Not a Side Effect of School

The biggest myth we’ve internalized? That going to school makes you good at learning.

But true learning isn’t about passing exams. It’s not about memorizing theory. It’s not about producing perfect answers to known questions.

It’s about knowing what to do when the answers aren’t obvious.

It’s about navigating grey areas, synthesizing information from diverse sources, applying knowledge in real time, and continuously evolving. That kind of learning happens when you build something. When you ship. When you fail and iterate. When you *experience* the thing, not just study it.

And the irony? Most of this isn’t taught. You’re expected to figure it out on the job—usually after you’ve been hired based on your grades.

### I’ve Seen This Firsthand

Coming from India, I’ve seen how large IT services companies—Infosys, Wipro, Cognizant—deal with this gap at scale. They hire thousands of freshers every year, right off campus. But here’s the thing: **most of them are not industry-ready**.

These companies have had to build internal academies just to train new hires before they can even be deployed on real projects.

We’re talking about months of structured upskilling—basically, doing what universities should’ve done. And still, a significant percentage of these hires don’t make it through. They’re let go not because they aren’t smart, but because they can’t unlearn and relearn fast enough.

So what are they really hiring for?

Not skills. **Potential. Coachability. Learning velocity.**

And even that isn’t always enough.

### So What Do We Do?

We stop pretending education alone is enough.

If we want the next generation of workers, founders, and leaders to thrive in this fast-changing world, we need to rebuild the bridge between education and employability—with learning at the center.

When I think about what makes education actually useful, I think back to my MBA.

All my faculty were active professionals. They weren’t just academics—they were practitioners. My law professor? A former principal of a law school who’d spent years advising on real-world legal issues. The faculty member who taught us operations? He managed operations at a large manufacturing firm, walking into the classroom straight from the plant floor.

Here’s how we start:

**1. Embed real-world exposure into education.**

Internships, apprenticeships, co-ops, shadowing—whatever it takes. Let students get messy with real problems early. The degrees shouldn't be driven around them, not just academics. Learning to operate in ambiguity shouldn’t start after they’ve signed their first employment contract.

**2. Reframe what success looks like.**

Not just grades, but growth. Not just completion, *but curiosity*. Encourage students to try, fail, reflect, and improve. Build systems that reward adaptability.

**3. Involve industry in curriculum design.**

Let the people who are hiring shape what’s being taught. Not once every five years, but continuously. If startups can pivot, schools can too.

**4. Teach how to learn. Explicitly.**

Metacognition, digital literacy, critical thinking, and problem-solving—these should be core competencies. Not “bonus skills.”

**5. Make soft skills foundational.**

Communication. Collaboration. Time management. Empathy. In today’s market, these are *hard* skills. And they’re what employers look for, often before technical ability.

*None of this is about devaluing education.*

**Formal Education is important, but learning is critical.**

It’s about recognizing its limits—and reimagining what comes next.

Because education, in its current form, is no longer enough to guarantee employability. And learning, authentic learning, is the only edge we have in a world that won’t stop changing.

It’s time we stopped measuring how educated someone is, and started asking:

**Can they learn what the market will need tomorrow—even if it doesn’t exist today?**

That’s the kind of talent we need. That’s the kind of system we need to build.
\`\`\``,Wx=`\`\`\`markdown
---
title: The Education System is Failing Founders
original_publish_date: '2025-02-05'
source: "LinkedIn"
original_url: 'https://www.linkedin.com/pulse/education-system-failing-founders-alban-jerome-nbsjc'
status: "archive"
---

*Written in 2025. Archived as part of my body of work.*

And I mean it, and I don't mean that we're not teaching enough science, math, or arts.

The education system has been designed to produce **employees**, not entrepreneurs, for decades. It trains people to follow structured career paths, teaching them to memorize, comply, and execute tasks efficiently—all skills that suited the worker economy of the past.

But today? That system is broken.

Entrepreneurship is no longer a backup plan—it's a core part of the future economy. Yet, most founders who leap later in life find themselves unlearning traditional career skills instead of applying them. At [the Karman-Line Acceleration Program](https://www.linkedin.com/company/kla-program/) and before that, back in Bangalore, I worked with countless entrepreneurs who struggled—not because they lacked intelligence or drive but because they were never given the proper foundation to build and lead. The best founders don't just read market trends—they experiment, adapt, and pivot faster than the competition.

**So why do I believe the Education System Failed the Founders**

*   **Memorization Over Problem-Solving** – Traditional education still rewards **rote learning and information recall**, even though **AI can now retrieve and process information better than humans.** The real skill isn't **what you know** but **how fast you can learn and adapt**.

*   **Teaching People to Follow, Not Lead** – Schools prepare students for **predictable, structured careers** with clear steps. **Entrepreneurship isn't predictable.** Founders need to think **critically, take risks, and make decisions without a roadmap**—skills not taught in traditional classrooms.

*   **No Financial Literacy or Wealth Creation Education** – The system prepares people to **work for money**, not to **make money work for them**. Most founders **don't learn how to raise capital, scale a business, or manage risk** until they are already in the trenches, figuring it out the hard way.

*   **Disconnected from the AI & Tech-Driven Economy:** Business education is still rooted in **old-world corporate structures** instead of preparing people for **the gig economy, automation, and global digital markets**. Today's founders must **relearn everything** to compete in a rapidly changing landscape.

**How Education Must Evolve for the New Economy**

*   **Teach AI Literacy as a Core Skill** – Just as math and reading are essential, **understanding how to use AI, automation, and data** should be mandatory in modern education. The future belongs to those who **can work alongside AI, not compete with it.**

*   **Make Entrepreneurship a Standard Subject** – Whether students go on to **start companies or work within them**, they need to **understand business fundamentals, risk management, and wealth-building**. This should be as standard as history or science.

*   **Encourage Lifelong Learning & Upskilling**—Today's founders can't rely on **a single degree to last a lifetime**. They must be able to **learn, adapt, and pivot** throughout their careers, and the education system should prepare them for this.

*   **Focus on Critical Thinking Over Rote Learning—**Instead of memorizing formulas and dates, students should **develop the ability to solve problems, question assumptions, and think independently.** These skills drive successful companies and economies.

**The Bottom Line? The Future Won't Wait.**

The world has **already changed**—but education **hasn't.** We must **redesign learning** so that future generations (and current entrepreneurs) **are prepared to create, innovate, and lead in a world where AI and automation are the norm.**

We must believe in **building the next generation of founders—not just workers.** But for that to happen, **education needs to evolve.**

📢 **What's one thing you wish you had learned in school that would have prepared you better for today's economy?**

#FutureOfEducation #AIRevolution #Entrepreneurship #LifelongLearning #EducationReform #StartupSuccess #KarmanLineAcceleration
\`\`\``,Mx=`\`\`\`markdown
---
title: The Education System Isn’t Broken—It’s Just Outdated
original_publish_date: 2025-04-02
source: "LinkedIn"
original_url: https://www.linkedin.com/pulse/education-system-isnt-brokenits-just-outdated-alban-jerome-6mxgc
status: "archive"
---

*Written in 2025. Archived as part of my body of work.*

Let’s stop calling the education system “broken.”

Because truthfully—it’s not.

It’s just doing exactly what it was designed to do. And that’s the problem. It is a System Built for a Different Time, a Different World!

To understand where we are, we have to go back to where this all began: Prussia, early 1800s. The Prussian government wasn’t trying to raise philosophers or free thinkers. It built the first mass public education model to serve a very specific purpose:

- Create loyal, rule-following citizens
- Train young minds to respect hierarchy
- Supply the state with disciplined bureaucrats and soldiers

The model was genius—for its time. It had a useful purpose for it. It had structure. Efficiency. Uniformity.

So naturally, when industrialization took off in Europe and North America, other nations adopted it. Not for civic growth —but for the factory floor.

Most industrialized it even further. Schools became assembly lines for the mind, following a near identical model or at least using very similar parts.

- 📚 Standardized curriculum
- 🔔 Fixed schedules
- 🪑 Rows of desks
- 🎯 One-size-fits-all thinking

It worked! It got people ready to work in factories, sit at desks, follow rules, and not ask too many questions. Do ONLY the task at hand.

---

But here’s the part we need to talk about:

**The Worker Economy It Was Built For? It’s Dead....or Dying!**

We no longer need humans to memorize facts, we have ChatGPT and Grok to help. We need humans to *think*. We no longer need people to do repetitive tasks, most of the time. The machines are doing a better job than us.

We need people to *adapt and create*. The world of work has changed. Massively.

We know today’s reality is changing from AI/automation and Creator economies and yet—our education system still looks like it did 50 years ago....I am seeing this painfully. Kids are still training for jobs that don’t exist while most systems are still prioritizing compliance over curiosity. Worse of all we are still using bells/times to tell kids when to switch topics, as if deep thinking should be timed....Just when a child finds their flow… *the bell rings*. Thye need to switch context switch and they have to do a Mental reset, the Attention is fragmented.

We don’t work this way as adults. We don’t live this way so **Why Are We Still Doing This?**

**So why do we train kids this way?**

Studies have shown: flow states and deep work are essential for meaningful learning. But our system is designed to *interrupt* that every 45–60 minutes...*sigh!*

We’re teaching fragmentation instead of synthesis. Routine instead of relevance. Emphasising on obedience instead of originality.

*And then we wonder why kids are disengaged?*

It’s Not About Tech. This isn’t about digitizing textbooks or adding a coding elective.

**This is about rethinking the whole design.**

---

What if school was a place where:

*   Kids explored ideas, subjects in longer blocks of time.
*   Questions mattered more than answers. We reward curiosity, not punish it.
*   Learning didn’t end at 3:30 PM—or at graduation
*   Education wasn’t preparation for life—it *was* life.

We say we want innovators, critical thinkers, and resilient leaders. Then we try to build them in a model designed to produce compliant factory workers.

That’s the disconnect.

**Time for a Reset**

Because the system isn’t broken. It’s just *outdated*. The world changed.

It’s time our education system did too.

What Would You like Change?

I’d love to hear your thoughts—what would *you* change about how we educate the next generation?

Drop your ideas in the comments. Let’s build the future together. 👇

#FutureOfEducation #SystemDesign #WorkerEconomy #EdReform #CuriosityDriven #LifelongLearning #DeepWork #FlowState #HumanPotential #Innovation
\`\`\``,Ox=`\`\`\`markdown
---
title: The Engineer, The Doctor, The Lawyer—and Everyone We’re Leaving Behind
original_publish_date: 2025-04-07
source: "LinkedIn"
original_url: https://www.linkedin.com/pulse/engineer-doctor-lawyerand-everyone-were-leaving-behind-alban-jerome-nuqcf
status: "archive"
---

*Written in 2025. Archived as part of my body of work.*

Over the past few months, I’ve been talking a lot about education—especially the K-12 system. And one of the many reasons I keep coming back to this space is because I’m deeply motivated by how badly it needs to change.

As someone who grew up within the system—and later stepped outside of it—I carry both the baggage 😅 and the perspective. I’m not an educator or a policy maker. I’m just someone who survived it, and that alone gives me a reason to speak. Because if you’ve been through it, you know: it’s not just outdated—it’s restrictive, relentless, and in many ways, still rooted in a worldview that no longer serves the future.

For those who don’t know, I was born and raised in India. And while my parents were never the type to insist I become a doctor or engineer, the *system* certainly did. In school, if you got “good” grades, it was just assumed: **you were meant for one of three things**.

**Engineer. Doctor. Lawyer.....**Full stop.

We weren’t asked “What do you enjoy, learning?” or “What are you curious about?” You were asked, “Which coaching center should you sign up for?” Because the entire ecosystem—from school teachers to extended relatives—was wired around these three options. You’d start preparing in middle school. Sometimes later. Everyone had a plan, and that plan looked eerily the same no matter where you were.

I call them **India’s Holy Trinity of Careers**—not in jest, but because that’s what they are. Sacred. Untouchable. Aspirational. And especially for India’s middle class, they represented the ultimate badge of success.

I use the term deliberately. Because that’s how deeply ingrained these professions are in our psyche. Not just as job choices, but as symbols of success. Respect. Stability. Identity. Even if your parents didn’t push you toward them (and I was lucky they didn’t), *society* would. Friends, uncles, aunties, coaching classes, billboards—everyone had an opinion. And they all pointed in the same direction. *Same intent, just different words*

And to be fair—this wasn’t always about prestige.

For many growing up in **rural India or small towns**, these professions represented something powerful: **a ticket to the big city**, a shot at financial security, a way to give your family a better life. These weren’t just careers—they were escape routes and ladders.

And of course, it’s not that no one took other subjects. Plenty did. India always has artists, teachers, journalists, scientists, economists, social workers, and many more. **There was never truly one single path to success.** But culturally, the **overemphasis** on engineering, medicine, and law created a skewed hierarchy—one that sucked all the attention, resources, and validation into these three funnels. And everything else? It was either “**back-up**” or “**risk**.”

I still remember knowing more than a few people who would take up a BBA or BBM degree—not because they wanted to, but because their engineering seat hadn’t come through yet. And the moment it did? They’d drop the business degree mid-semester and jump to engineering like it was an upgrade. That’s the level of social conditioning we’ve grown up around.

*Now, here’s where we need to have a real conversation.*

While these careers still hold tremendous value and are absolutely vital to society, it became increasingly clear at some point that **this narrow framework is out of sync with the world we live in today**.

Outside the echo chamber?

The world has changed.

The careers creating the most impact—and often the most opportunity—are in fields that didn’t even *exist* when many of us were choosing college majors.

**AI, climate innovation, UX design, creator economy, behavioral science, public policy, product strategy, digital storytelling, neurotech**—these are no longer fringe ideas. They’re the backbone of the emerging economy. They’re solving complex global problems and creating new markets altogether.

Yet our academic and cultural machinery still overwhelmingly steers bright students toward the “holy trinity,” even when demand, interest, and relevance point elsewhere.

According to the All India Survey on Higher Education (AISHE) 2020–21, **over 38% of Indian students are enrolled in science, tech, and engineering fields**. And yet, underemployment, burnout, and job misalignment are widespread.

It’s not a skill problem. It’s a **system design** problem.

Many of the jobs in these traditional sectors are becoming saturated or automated. **Engineering graduates often find themselves underemployed**, not due to a lack of intelligence or effort, but because the skills imparted don’t always match industry needs. And while the prestige of medicine and law remains, the pathways to success in those fields are increasingly narrow and demanding, with uncertain returns, particularly for those who enter without genuine interest.

To its credit, India’s **New Education Policy (NEP) 2020** is a promising step forward. It recognizes the need for flexibility, interdisciplinary thinking, and alternative pathways to success. But culture is sticky. And unless we start changing the stories we tell at home, in schools, and across dinner tables, policy alone won’t move the needle.

What was “safe” 20 years ago may be obsolete 5-10 years from now. And if we don’t prepare young people to thrive in uncertainty—if we don’t give them the tools to learn, unlearn, and pivot—they won’t be equipped for any future, let alone the one we’re moving toward.

So here’s a radical thought:

Let’s stop asking kids what they want to “*become*,” and start asking what they want to **solve**.

Let’s celebrate creative risk the same way we celebrate exam ranks.

Let’s treat coding and clay sculpting with equal curiosity.

Because the truth is—**career safety is an illusion when it’s built on conformity.**

In today’s world, *adaptability* is security. *Originality* is leverage. *Passion* is fuel.

And no child should have to spend the first 20 years of their life preparing for a career they didn’t even choose.

Because the next great innovator, artist, policy maker, or social entrepreneur might not fit the mold—but they might just shape the future.
\`\`\``,Fx=`\`\`\`markdown
---
title: From Confucian to ChatGPTs
original_publish_date: 2025-04-03
source: "LinkedIn"
original_url: https://www.linkedin.com/pulse/from-confucian-chatgpts-alban-jerome-2ggfc
status: "archive"
---

*Written in 2025. Archived as part of my body of work.*

It is quite tempting when we talk about learning and the future of education, to rush towards what's next - *AI tutors, metaverse classrooms, personalized algorithms.*

But we cannot overlook that long before industrialized learning was the norm, we had learning and education systems across the world and they do have certain insights that we can't overlook.

Long before “learning” became synonymous with degrees and diplomas, humans across the world were already building structured systems of education.

And they were doing it intentionally—not just to create workers, but to shape character, build culture, and prepare people for life in all its complexity.

🔹 **The Indian Systems**

When we think of ancient Indian education, the Gurukul system often comes to mind—students living with their guru in forest ashrams, learning scriptures, philosophy, astronomy, and medicine through immersive, oral traditions. But that was just one piece of a far more diverse and layered intellectual landscape. The country is just that massive.

Ancient India was also home to some of the world’s earliest and most renowned universities. Centers like Nalanda, Takshashila, and Vikramashila drew students from across Asia and taught a wide range of subjects—from Buddhist philosophy and grammar to mathematics, logic, and medicine. These were vibrant, international hubs of inquiry, far ahead of their time.

Learning thrived beyond these institutions too. Pathshalas and Tols focused on Sanskrit, logic, and Vedic texts; madrasas introduced Islamic scholarship, science, and philosophy into the mix; and guilds and artisan traditions passed down technical and vocational knowledge through apprenticeship. In India, learning wasn’t confined to one model—it was a living, breathing ecosystem, where oral, textual, and practical knowledge coexisted in deeply contextual ways.

---

🔹 **China – Confucian Education and the Cultivation of the Whole Person**

In ancient China, learning wasn’t just about acquiring knowledge—it was about becoming a better human being. Confucius believed education should shape the mind, the body, and the spirit. His model emphasized cultivating a person into a “junzi”—often translated as a “gentleman” or “noble person”—not by birthright, but by character.

At the heart of Confucian education were the Six Arts:

*   Rites (li) – for moral grounding and social harmony
*   Music (yue) – to refine emotions and foster inner balance
*   Archery (she) – to train composure and precision
*   Charioteering (yu) – to develop strategic focus and control
*   Calligraphy (shu) – to encourage discipline and aesthetic sensitivity
*   Mathematics (shu) – to sharpen logic and order.

To master these was to shape the body and mind in equal measure. But that wasn’t all. Confucian education also emphasized the Four Skills—reading, writing, speaking, and listening—as core to civic life and moral reasoning. The goal wasn’t merely academic excellence; it was to create individuals of integrity, intellect, and empathy, capable of guiding society with wisdom and humility.

Confucius saw education as a lifelong path toward virtue—not a race toward certification.

*The student wasn’t just learning facts, but learning how to live well.*

---

🔹 **Greece – Philosophy and the Formation of the Thinking Citizen**

In ancient Greece, education was not designed to churn out workers—it was meant to shape free, conscious individuals capable of participating in civic life and shaping society. At the heart of this tradition were two of the greatest learning institutions: Plato’s Academy and Aristotle’s Lyceum.

Plato saw education as a way to uncover deeper truths—not through memorization, but through dialogue, dialectics, and contemplation. His Academy trained students to question assumptions, explore the meaning of justice, and wrestle with the nature of reality. Aristotle built on this but added empiricism and classification, encouraging observation of the natural world and logical categorization. His Lyceum laid the groundwork for what we now call the scientific method.

Greek education wasn’t just intellectual—it was ethical and civic. The goal was to develop the student into a person of logos (reason), ethos (character), and pathos (empathy)—someone equipped not only to think deeply, but to contribute meaningfully to the polis, the democratic city-state. In short: to educate was to cultivate the soul of a citizen.

---

🔹 **Rome – Rhetoric and the Art of Influence**

In ancient Rome, education was not just about personal development—it was about public life. To be educated was to be able to lead, to argue, to shape society through words. At its core was the Trivium:

1.  Grammar – the structure of language
2.  Logic – the framework of reasoning
3.  Rhetoric – the power of persuasion

This trio formed the backbone of Roman intellectual training. Students learned to analyze texts, debate ideas, and craft arguments that could move crowds or win court cases. Education prepared them for the forum, not the exam hall. It was about learning to think clearly, speak persuasively, and act decisively.

Roman society placed immense value on oratory—seen as both a civic duty and an art form. A well-educated Roman wasn’t just knowledgeable; they could command attention, challenge authority, and sway public opinion. Education was therefore a political act—training not just minds, but future senators, lawyers, generals, and philosophers.

To learn in Rome was to learn how to **shape the world through language**. *I like the sound of that.*

---

🔹 **Medieval Europe – Faith, Formality, and the Birth of the University**

In medieval Europe, education was deeply entwined with faith and tradition. Monasteries served as the earliest centers of learning, where monks copied manuscripts by hand and studied theology, Latin, and logic. Knowledge here wasn’t seen as something to question—it was something to preserve, and ultimately, to serve the divine.

But this age of faith also laid the groundwork for academic formality. Out of monastic schools emerged the first universities—Bologna, Paris, Oxford—where education became more structured. Think: lectures, disputations, degrees, and even early versions of faculties. The trivium and quadrivium shaped the curriculum, combining language and logic with arithmetic, geometry, music, and astronomy.

This scholastic tradition, while rigid and hierarchical, brought with it a methodical approach to learning—one rooted in questioning, categorization, and disciplined reasoning. It was here that the lecture hall replaced the forest, and the professor took the place of the guru. The model may have evolved over centuries, but the bones of our modern academic system were laid here—in robes, candles, and Latin debates.

---

🔹 **South America – Indigenous Wisdom and the Practice of Freedom**

This is one of the most overlooked chapters in the story of global education—and yet, it may be among the richest. In many Andean and Amazonian communities, learning was never something confined to buildings. It was relational, land-based, and deeply intergenerational.

Elders passed on wisdom through oral storytelling, rituals, music, farming, and direct observation of the natural world. The goal wasn’t to memorize facts but to live in sync with the earth, the seasons, and the community. The forest was a classroom. The land itself was a teacher. Knowledge wasn’t owned or standardized—it was shared, experiential, and sacred.

Even today, many Indigenous cultures across South America continue this tradition—teaching through presence, participation, and purpose. It’s not education for test scores, but education for balance, belonging, and survival.

In postcolonial times, Latin America also gave rise to radical thinkers like Paulo Freire, whose Pedagogy of the Oppressed challenged the very premise of Western schooling. Freire rejected the “banking model” of education, where teachers deposit information into passive students. Instead, he proposed dialogical education—a process where students and teachers co-create meaning through shared experience and critical reflection.

Freire wasn’t just teaching literacy. He was teaching people to read the world—to question power, reclaim their agency, and imagine new possibilities.

> “Education either functions as an instrument which is used to facilitate integration of the younger generation into the logic of the present system… or it becomes the practice of freedom.”
>
> – Paulo Freire

---

🌍 **And there are more…**

*   In **Islamic Golden Age madrasas**, students studied math, medicine, logic, and philosophy under a tradition of intellectual inquiry and memorization.
*   In **African oral traditions**, griots passed down entire histories through storytelling, rhythm, and poetry.
*   In **Indigenous North American cultures**, learning was embedded in seasonal practices, community governance, and stewardship of the land.

---

*Different places. Different geographies. Different times in history.* And yet, through all the variation, one thing remains consistent: learning has always been about transformation.

That’s the common thread running from forest ashrams to Roman forums, from Confucian rites to Amazonian storytelling. Education has never just been about information—it’s been about shaping people. And not just for jobs, but for life.

Today, we’ve scaled education. That’s no small feat. It brought us from the industrial age to the digital age, from chalkboards to AI tutors. We now have micro-degrees, YouTube tutorials, and a million platforms offering knowledge on-demand.

But while we’ve expanded access, have we added depth—especially in those early, formative years?

If we look back—and that’s what I’ve *tried* to do in this article—we see that education has always reflected the needs of the era. Education has defined and has been defined by the needs of the era and the civilization.

It served the moment.

So the real question is: What are the needs of our moment—and our future? And more importantly, what kind of humans are we trying to raise?

*   Do we need better test-takers? Or more empathetic leaders?
*   More coders? Or more problem-solvers?
*   Do we want efficiency? Or resilience?
*   Answers? Or the courage to ask better questions?

As we build the next iteration of learning, let’s not just digitize the past. Let’s design for what’s next.

Let’s take the best of what history has taught us—and use it to shape a future where learning is not just scalable, but soulful, contextual, and human. Especially in the new *Age of Ai.*

#FutureOfLearning #GurukulToGoogle #IndigenousWisdom #Confucius #PauloFreire #GlobalLearning #LearningAsTransformation #LifelongLearning #EdReform #LearningDesign #HumanCenteredEducation #WisdomMatters #EducationAcrossCultures #LatinAmerica #EducationRoots
\`\`\``,Bx=`\`\`\`markdown
---
title: The Hidden Advantage of Generational Wealth in Education
original_publish_date: 2025-02-10
source: "LinkedIn"
original_url: https://www.linkedin.com/pulse/hidden-advantage-generational-wealth-education-alban-jerome-1fw2c
status: "archive"
---

*Written in 2025. Archived as part of my body of work.*

Education is often seen as the great equalizer, but in reality, generational wealth plays a crucial role in determining a child's academic and professional success. From elite schools to mentorship opportunities and specialized learning resources, families with means provide their children with advantages that are often out of reach for lower-income students.

### 1. Elite Advantage

Families with means can send their children to elite private schools, top-tier prep academies, and international institutions with low student-to-teacher ratios and state-of-the-art facilities. These schools offer rigorous academic curricula and extensive extracurricular opportunities, from robotics clubs to international exchange programs, that foster leadership and innovation.

More than just content, elite educational institutions emphasize **learning methodologies and facilities** that nurture a growth-oriented mindset. Their programs are designed not just to teach information but to develop critical thinking, resilience, and adaptability—skills that are highly valued in today’s fast-changing world. Students are encouraged to explore creative problem-solving, interdisciplinary learning, and leadership opportunities, ensuring they graduate with both knowledge and the confidence to apply it effectively.

Beyond formal schooling, families with means invest in private tutoring, but that is not the only advantage. They also benefit from access to specialized training programs, hands-on research opportunities, and experiential learning models that allow children to engage deeply with subjects beyond what traditional schools offer. This exposure provides a direct pipeline to prestigious universities and lucrative career opportunities—advantages that students from lower-income backgrounds often lack.

### 2. The Home Environment: The Silent Catalyst

One of the most overlooked but critical aspects of educational success is the environment that families with means can offer their children. Beyond formal education, the home itself becomes a learning space rich with resources and support systems that foster intellectual curiosity and emotional resilience.

Families with means provide their children with:

*   **A Culture of Learning** – Homes filled with books, discussions on world affairs, and access to stimulating experiences like museums, travel, and cultural events.
*   **Low-Stress Environments** – Financial stability removes stressors related to food security, housing, and medical care, allowing children to focus on learning.
*   **Parental Time and Engagement** – Higher-income parents often have the flexibility to be more involved in their children’s education, whether through direct teaching, attending school functions, or providing additional learning opportunities.
*   **Structured Routines and Expectations—**A well-structured environment with set routines and academic expectations fosters discipline and a mindset geared toward success.
*   **Emotional and Psychological Support—**Access to counseling, coaching, and other mental health resources ensures that children have the tools to manage stress, setbacks, and challenges effectively.

This home environment lays the foundation for all other educational advantages, reinforcing the benefits gained from elite schooling, mentorship, and extracurricular opportunities. Without a stable and enriching home environment, even access to top-tier educational resources may not yield the same results.

### 3. Opportunities That Shape Merit and Skill

Education should not be about wealth, but access to wealth often means access to greater opportunities. The ability to nurture talent is directly linked to exposure, mentorship, and hands-on experience.

When children have access to diverse learning experiences, they are more likely to discover and develop their natural talents. Whether it's access to coding camps, athletic programs, performing arts training, or research labs, these opportunities allow students to enhance their skills and compete based on merit. Without them, talent remains untapped, and potential goes unrealized.

Families with means have long recognized that education is not just about producing workers but about cultivating leaders, innovators, and wealth creators. Many of today’s entrepreneurs, while not always from generational wealth, understand the value of building something greater than themselves. They seek to create opportunities, generate wealth, and foster economic growth rather than simply preparing for a role in the workforce.

### 4. Breaking Barriers: Ensuring Equal Access to Opportunities

The challenge is ensuring that all students, regardless of financial background, have access to skill-building opportunities. This requires:

*   **Investing in Public Learning Initiatives** – Expanding access to extracurricular programs in public schools that allow students to compete and innovate.
*   **Scholarship and Mentorship Programs** – Connecting underprivileged students with professionals who can guide them in their fields of interest.
*   **Technology-Driven Learning** – Leveraging digital tools to provide free or affordable skill development courses that help bridge the opportunity gap.
*   **Encouraging Local and Community-Led Programs** – Strengthening the role of libraries, community centers, and local organizations in providing enrichment opportunities.

At its core, education should empower all students to develop their strengths rather than limit opportunities to those who can afford them.
\`\`\``,Dx=`\`\`\`markdown
---
title: "The Hidden Curriculum -Obedience Over Curiosity"
original_publish_date: "2025-04-05"
source: "LinkedIn"
original_url: "https://www.linkedin.com/pulse/hidden-curriculum-obedience-over-curiosity-alban-jerome-2xrcc"
status: "archive"
---

*Written in 2025. Archived as part of my body of work.*

In many classrooms, there exists a curriculum that’s never written down.

It doesn’t appear in lesson plans. It isn’t tested in exams.

And yet, it shapes students more than most subjects ever will. It is built into the system.

It’s the unspoken training to comply.

Be still. Be quiet. Follow instructions. Stay within the blueprint.

Stick to the script, and you shall be rewarded.

*Now, let’s not throw the baby out with the bathwater—discipline is essential.*

It builds character, forges consistency, and teaches you how to show up, especially on days when motivation is hard to find.

But here’s where it gets tricky:

*We often confuse discipline with obedience—and they are not the same.*

**Discipline is chosen. It’s intentional. It aligns with purpose.**

Obedience, on the other hand, is conditioned. Subconscious. Systemic. Quietly rewarded. Rarely questioned.

No school says, “We’re here to create obedient citizens.” That would sound too rigid—too tyrannical 😅. But look closer, and you’ll see the roots. The modern education system was built during the Prussian era—to create order, train civil servants, prepare citizens for the military, and later, to produce workers for the industrial economy. It rewarded predictability and compliance.

And when obedience becomes the hidden standard, something sacred is sacrificed on its altar:

**Curiosity.**

Because true curiosity is unruly.

It doesn’t wait its turn. It pokes holes in logic.

It asks inconvenient questions… sometimes *all* the time. (I sure did. 😅)

It colors outside the lines—then flips the canvas just to see what happens.

But here’s the irony: everything we celebrate as adults—innovation, creativity, resilience—comes from the very spirit we often stifle in school.

Step into a startup ecosystem and talk to a few founders.

The boldest ones? Rebels with deep discipline and even deeper curiosity.

They execute rigorously but aren’t afraid to break things to build something better.

They challenge not just markets, but paradigms.

That blend—of discipline and defiance—is where the real magic lives.

So maybe the question isn’t whether we should teach obedience.

Maybe it’s whether we’ve gone too far in rewarding quiet compliance at the cost of questioning minds.

Because the future doesn’t belong to those who follow the map.

It belongs to those who **draw it**—and then question it enough to draw it again.

It belongs to those who imagine something better—and have the discipline to build it.
\`\`\``,$x=`\`\`\`markdown
---
title: How Fundraising Distracts Startup Success
original_publish_date: "2025-01-20"
source: "LinkedIn"
original_url: "https://www.linkedin.com/pulse/how-fundraising-distracts-startup-success-alban-jerome-tihic"
status: "archive"
---

*Written in 2025. Archived as part of my body of work.*

In the startup journey, **fundraising is essential**—but how you approach it can either **accelerate growth** or **derail your focus.** For many startups, fundraising feels like a milestone—a badge of honour that validates your idea. But here’s the truth: while raising capital is necessary, it’s also one of the biggest distractions founders face. Mailchimp was entirely bootstrapped without any external funding.

Securing capital is essential, but many founders get caught in the cycle of **pursuing funds relentlessly**, which reduces their ability to develop products, meet customer needs, or grow their businesses. Consequently, **fundraising can** turn into a hindrance instead of a catalyst for success.

**1️⃣Time Away from Building the Product**

Endless investor meetings, pitch decks, and negotiations can distract founders from their core mission: **building a great product**. Every hour spent fundraising is an hour not spent solving customer problems or improving operations.

**2️⃣ Chasing Valuations Over Value Creation**

It is tempting to focus on securing a high valuation, but this often leads startups to **inflate projections** and take shortcuts. High valuations put pressure on startups to meet unrealistic expectations, which can shift the focus from **building sustainable growth** to justifying the numbers.

**3️⃣ Misalignment with Investors**

Taking money from investors who don’t share your vision can create long-term tension. Investors who prioritize quick exits or aggressive scaling can distract founders from their mission.

As the General Partner at Tacenda Capital, I have seen many startups and founders spiral into trying to raise capital without a strong growth plan or sustainable structure. Here are a few things you can do to avoid the common pitfalls.

**✅ Set Clear Goals:**

Raise only as much as you need to hit your next milestones. Avoid overcapitalizing early. Shopify, an e-commerce platform, started with minimal funding, raising only a small seed round in its early days.

**✅ Prioritize Fundraising Efficiency:**

Be strategic. Build relationships with aligned investors and streamline your process so you can get back to growing your business.

**✅ Focus on Fundamentals:**

Keep improving core metrics like revenue, retention, and product-market fit—these will attract better investors anyway.

We often hear about companies raising massive funding rounds to fuel growth and achieve sky-high valuations, but some startups—like WhatsApp and Instagram—took a very different approach.

Rather than chasing multiple funding rounds, they focused on **product excellence** and **user growth**.

WhatsApp raised only $60 million in its entire history, with the majority coming from Sequoia Capital. Instead of raising additional capital or inflating its valuation, WhatsApp concentrated on building a simple, reliable, and ad-free messaging platform.

This laser focus paid off by 2014; WhatsApp had 450 million monthly active users and was acquired by Facebook for $19 billion.

Instagram also steered clear of the pitfalls of over-fundraising. In 2011, they secured a modest $7 million Series A investment from Benchmark Capital. Instead of pursuing additional funding rounds, the team concentrated on expanding its user base and refining the product.

The result? - Within 18 months of launching, Instagram had 30 million users and was acquired by Facebook for $1 billion in 2012.

**✅ Remember:**

*   **Fundraising is a Means, Not an End:** Excessive fundraising can lead to pressure to justify valuations or chase unnecessary growth. Companies like WhatsApp and Instagram prove that **fewer funding rounds don’t limit success.**
*   **Focus on Users, Not Investors:** When the time is right, building a product that resonates with users and solves real problems will naturally attract investors.
*   **Efficiency Is Key:** Lean teams and efficient operations allow startups to maintain control and focus on long-term impact.

👉 **How do you approach fundraising in your startup? Tell me in the comments!**

#Startups #FundraisingEfficiency #MetricsThatMatter #Entrepreneurship #SustainableGrowth #StartupSuccess #VCFunding #FounderFocus #SmartFundraising #InnovationEconomy
\`\`\``,qx=`\`\`\`markdown
---
title: "🚀 Local Roots, Global Reach: How Canadian Innovations Have Changed the World 🇨🇦✨"
original_publish_date: "2025-01-07"
source: "LinkedIn"
original_url: "https://www.linkedin.com/pulse/local-roots-global-reach-how-canadian-innovations-have-alban-jerome-r7gec"
status: "archive"
---

*Written in 2025. Archived as part of my body of work.*

I recently had a fascinating conversation about **technology development in Canada**—and it made me realize something -

**Despite Canada having an impressive track record of groundbreaking innovations kicking off on its soil, many of these breakthroughs aren’t widely recognized as “Made in Canada.”**

While Canada is not often in the Global Spotlight for Technology… It has played a **pivotal role in developing technologies that have reshaped industries worldwide.**

**📞 The Telephone**

Yes, the device that revolutionized global communication was born in Canada. **Alexander Graham Bell** invented the telephone while living in **Brantford, Ontario**—a historic moment that forever changed the world.

**☕ Java Programming Language**

One of the most widely used programming languages globally is **Java**, which was created by **James Gosling**, a computer scientist from **Calgary**. Today, Java powers everything from mobile apps to enterprise systems.

**🎥 IMAX**

The jaw-dropping cinematic experience we all love was invented in **Toronto, Ontario**. **In the 1960s, Graeme Ferguson, Roman Kroitor, and Robert Kerr** developed IMAX technology, today a **global entertainment standard.**

**💉 Insulin**

A medical breakthrough that has saved millions of lives, **insulin** was first successfully purified for medical use at the **University of Toronto** by **Frederick Banting** and **Charles Best.**

**📱 BlackBerry**

Before the era of iPhones and Androids, there was **BlackBerry**—the iconic mobile device that revolutionized business communication. Developed in **Waterloo, Ontario**, it set the stage for today’s smartphone dominance.

**🤖 Deep Learning and Modern AI**

The **AI revolution** owes much to Canadian minds. Researchers like **Yoshua Bengio (Montreal)**, **Geoffrey Hinton (Toronto)**, and **Richard Sutton (Edmonton)** laid the foundation for deep learning. Startups like **Cohere** and **Element AI** continue this legacy on the **global stage.**

These aren’t just Canadian success stories but **cornerstones of global technology and innovation.**

Policies or resources don’t just fuel Canada’s startup success—its people power it. With one of the **highest immigration rates in the world**, Canada has become a **launchpad for entrepreneurial talent from across the globe.**

When immigrant founders come to Canada, they bring:

*   **Global Connections:** Relationships with suppliers, investors, and talent from their home countries.
*   **Cultural Fluency:** An innate understanding of diverse markets and international business practices.
*   **Resilience and Ambition:** A drive to succeed and a commitment to building something meaningful in their new home.

These aren’t just **soft skills**—they’re **strategic advantages** that help Canadian startups scale faster and smarter on the **global stage.**

And this is visible in the number of immigrant-driven startups that have become unicorns in Canada

**🌐 ApplyBoard**

Founded by **Iranian brothers Martin and Meti Basiri** in **Waterloo**, ApplyBoard simplifies the process for **international students applying to universities abroad**. It’s valued at over **$4 billion** and operates in **125+ countries.**

**💼 Wealthsimple**

Founded by **Michael Katchen**, the child of immigrant parents, Wealthsimple has **democratized investing and banking** for millions—not just in Canada but across **international markets.**

**🛒 Lightspeed Commerce**

Founded by **Dax Dasilva**, whose family immigrated from **South Africa**, Lightspeed is now a **global leader in retail and e-commerce software.** Its headquarters are in **Montreal.**

**🛍️ Shopify**

Founded in **Ottawa** by **Tobi Lütke**, a **German immigrant**, Shopify powers **millions of businesses in 175 countries.**

Canada offers a **unique blend of stability, opportunity, and scalability** that few countries can match, making it an ideal foundation for **global businesses:**

*   **Strong Intellectual Property (IP) Laws:** Innovations are protected, fostering confidence for global scaling.
*   **Access to the U.S. Market:** Trade agreements and geographic proximity make Canada an **ideal gateway to North America.**
*   **Supportive Policies:** Programs like the **Startup Visa** remove barriers for founders and attract **top entrepreneurial talent.**
*   **Diverse Market Testing:** Canada’s multicultural society acts as a **microcosm of global markets**, allowing startups to refine products and services before scaling internationally.

But Canada’s strength doesn’t stop at policies and market access—it thrives on a **powerful ecosystem fueled by three key ingredients:**

1.  **A Legacy of World-Changing Innovations**
2.  **A Globally Connected, Diverse Workforce**
3.  **A Stable and Inclusive Environment for Entrepreneurship**

When these factors come together, Canada becomes more than just a great place to start a business—it becomes a **launchpad for building global empires.** From **AI to fintech, cleantech to biotech**, Canadian startups are leading the charge in **solving global problems** while driving **economic growth** at home and abroad.

#Innovation #Entrepreneurship #Canada #Tech #Startups #GlobalGrowth #ImmigrantSuccess #MadeInCanada #TechExport #CanadianInnovation #StartupEcosystem #GlobalEntrepreneurship #DiverseLeadership #BusinessGrowth #ScaleUp #AI #Fintech #Cleantech #Biotech #CanadianStartups #TechLeadership #InnovationEconomy #FutureOfWork #StartupNation #GlobalImpact #EconomicGrowth #TalentMigration #ImmigrantFounders #ExportingInnovation
\`\`\``,Hx=`\`\`\`markdown
---
title: "Standardization Is Killing Creativity"
original_publish_date: "2025-04-11"
source: "LinkedIn"
original_url: "https://www.linkedin.com/pulse/standardization-killing-creativity-alban-jerome-d5dzc"
status: "archive"
---

*Written in 2025. Archived as part of my body of work.*

*Let’s not get nostalgic or romanticize the past.*

The modern education system was never really built to encourage creativity across the board. It was built for compliance—for efficiency. As I’ve said before, it’s a relic of a different age.

And to give credit where it’s due—it did its job well.

This system was immensely useful during the industrial and electronic ages. It helped produce reliable workers who could follow instructions, repeat tasks, and fit neatly into roles that kept factories running and bureaucracies ticking. It scaled literacy in ways previously unimaginable. It democratized access to knowledge. It brought structure during chaotic times.

Standardization brought with it a sense of discipline. It gave early learners patterns and frameworks to latch onto—especially important for building cognitive habits like attention, consistency, and follow-through. Standardization still plays a vital role in creating equitable access—a baseline that ensures every child gets a shot. It brings structure and consistency where chaos would otherwise dominate.

But it cannot be our ONLY story anymore.

**The System Was Never Built for Creativity**

It was never truly designed to nurture critical or creative thinking.

It taught people *what* to do, *how* to do it, and most importantly—*not to question why*.

The leaders and creators who emerged from this system were often anomalies—fringe benefits rather than intended outcomes.

Take Albert Einstein. He didn’t accept that time and space were constants. He visualized time as something flexible—a fabric that could bend and stretch. That insight led to the theory of relativity and fundamentally changed how we understand the universe.

Or consider Steve Jobs. He didn’t follow the playbook. He rewrote it.

Jobs believed that technology and design weren’t separate disciplines. His obsession with fusing aesthetics and functionality wasn’t just personal preference—it became the blueprint for Apple, Pixar, and much of the technology we use today.

These thinkers weren’t products of a standardized model.

They were exceptions who succeeded because they broke the mold, not because they fit into it.

**The Machines Have Arrived—Now What?**

Today, we’re standing at the edge of another massive paradigm shift.

*   AI can now write its own code.
*   Robotics can perform precise surgical tasks.
*   Entire workflows are being automated at an unprecedented rate—faster, better, cheaper.

Routine, repeatable work—the kind standardized education once prepared us for—is being consumed by machines. And they’re not slowing down.

So where does that leave us?

More importantly, where does that leave our children?

**Education Must Evolve—Proactively, Not Reactively**

Here’s the thing: standardization helped us grow. But it can’t help us grow into what comes next. Like every system, it has to evolve. Proactively—not reactively—to match the realities of a world that looks radically different than it did even 10 years ago.

The future belongs to those who can do what machines can’t:

Think laterally. Collaborate creatively. Adapt rapidly.

And that future starts by shifting away from “one-size-fits-all” education to something far more human:

*   Project-Based Learning, which mirrors the messiness of the real world—where students build, iterate, collaborate, and present.
*   Personal Learning Journeys, where students discover how *they* learn best, what ignites their curiosity, and how to apply that interest meaningfully.

These aren’t “nice to haves.”

*They’re survival tools.*

Not Every Learner Is Meant for the Same Path

Not every child learns in the same way, or even wants the same things out of education.

Some are builders. Some are thinkers. Some are explorers. Some are quiet observers who don’t shine on tests but thrive when given space.

When we honor those differences with personal learning journeys, we do more than just educate—we empower. We equip people to lead their own learning, rather than constantly seeking permission to learn.

And that’s the ultimate unlock.

**Creativity Is No Longer a Luxury—It’s a Lifeline**

Creativity is the last true edge in a world where knowledge is a commodity and productivity is automated.

And yet, we’re still running an operating system built for the industrial age.

Still measuring success in grades and test scores.

Still rewarding the ability to memorize more than the courage to imagine.

That has to change.

Let’s stop designing systems to sort students into boxes.

Let’s start building ones that give them the tools to build their own.

Because if we want to create a future that’s more human—not less—it’s going to come from those who dare to color outside the lines.
\`\`\``,Ux=`\`\`\`markdown
---
title: We Teach Algebra, But Not How to File Taxes—Why?
original_publish_date: 2025-04-09
source: "LinkedIn"
original_url: https://www.linkedin.com/pulse/we-teach-algebra-how-file-taxeswhy-alban-jerome-rvmtc
status: "archive"
---

*Written in 2025. Archived as part of my body of work.*

The fact is—at one point—we’ve all solved for X...*(I apologize for any trauma this might bring up).* We’ve all labelled the parts of a cell, memorized the causes of the Industrial Revolution, and traced rivers on blank maps. Say “mitochondria” in any room, and chances are someone will reflexively say, “It’s the powerhouse of the cell.” These lessons stick with us—not just because they’re drilled in, but because they help us make sense of the world around us.

And rightfully so.

Understanding basic math, science, history, and geography helps us become informed citizens. It gives us context. It builds foundational awareness of the world we live in.

But somewhere along the way, we stopped teaching something equally essential: *how to manage money.*

*   We don’t teach enough kids how to budget.
*   We don’t teach them how to credit works.
*   We definitely don’t teach them how to file a basic tax return.

And the idea of understanding investing—how to make your money work for you? That’s not even in the curriculum.

Which is kind of ironic, isn’t it?

For over a century, education has been designed to prepare students for the workforce—to land a job—to earn an income. We spend years training for that. But when it comes to managing that income—making sense of a payslip, avoiding debt traps, building savings—we expect people to just figure it out.

**Financial literacy should be a core high school skill.**

As fundamental as reading, writing, or arithmetic. Because personal finance is not a niche topic, it’s survival. It's the basics.

A few years after I finished college, I found myself working, at that point, with a startup called Dharma Life Sciences.

Like many early-stage ventures, we ran on very lean budgets and great ambition. We couldn’t always hire experienced industry talent. So for many roles, we brought in sharp, brilliant, fresh graduates right out of university.

A couple of the people I hired for my team were these amazing young women—top of their class graduates from some of India’s most respected institutions. They were brilliant, quick thinkers, and exceptionally good at what they did—at least when it came to what they had studied in university.

They hit the ground running. They were confident, capable, and fun to work with. 

Then came tax season.

Around May—India’s financial year-end is in April—they casually asked me,

“How do we file our taxes?”

I smiled, assuming they meant this year’s forms or how to create an account on the Income Tax portal for the first time. I had recently filed my taxes, so I started walking them through changes, talking about deductions, taxable income, and documentation—building on the basics—except that they looked at me blankly. I was speaking Greek or something. 

The fact was they didn’t know what I was talking about. 

They didn’t know any of it. Not names of the forms. The categories. Not what a taxable deduction was or what their “taxable income” even referred to. 

That’s the thing: I had studied it, way back in high school, income tax was part of our maths subject. Not the filing part per se—after all, we didn’t have jobs back then—but the calculation part. We were taught how to break down income structures. What gross income looked like. How House Rent Allowance (HRA) worked. What deductions under various sections mean. How do you calculate taxable income without a calculator? Honestly it was one of the easier sections.

Sure, neither I nor any of my classmates fully grasped what it all meant in real-life terms at the time. I don’t think any of us had a part-time job back then, during school. But when I started earning, it wasn’t entirely foreign. I had a framework, a bit faded in my memory but still a framework to build on. We had the vocabulary. We finally could apply the concepts we had learnt.

And the realization hit me—They hadn’t been introduced to income tax in school. It had never come up in their curriculum—and it showed.

They eventually found help and filed their taxes. 

Over the next few weeks, in quieter moments, I started asking more questions, listening more closely. And what I realized was this: The curriculum had changed—but not for the better.

We’d updated textbooks. Added technology. Refreshed syllabi. But the fundamentals—what we actually consider “core” learning—hadn’t caught up with the real world.

We’re still more obsessed with producing high scorers than building capable, self-sufficient adults.

*This isn’t just an India problem. This is global.*

And it’s long overdue for a fix.

I’ll make a small confession. I don’t have kids. And I’m fully aware that in some parts of the world, personal finance might be included—at least in some form—in high school, hopefully.

But over the last few years, I’ve had the chance to speak with dozens of startup founders building products and platforms aimed at teaching financial literacy to children. And the one thing they all seem to agree on? We’re still not doing enough.

It’s not that the need isn’t there. If anything, today’s parents—especially those raising school-age children—are more vocal than ever about wanting early exposure to money management for their kids.

And yet… Most of them still feel that schools just aren’t prioritizing it.

That gap? It’s troubling. And a bit sad.

Because if education is meant to prepare people for living their life—and we’re so focused on getting them into the workforce—aren’t we doing them a massive disservice by not giving them the tools to manage what they earn?

We’re living in a chaotic world. Inflation, layoffs, rising interest rates, economic uncertainty. Scroll through social media, and you’ll see young people joking—darkly—about how they’ll never afford homes, never build the kind of lives their parents or grandparents had.

And maybe, just maybe, that dark humour is a reflection of something real:

That we’ve systematically undervalued financial knowledge.

That only a privileged few—those in elite schools or specific programs—are getting exposed to it.

And as someone seeing it from the outside, this is what I’m noticing.

Maybe your experience is different—and if it is, I’d genuinely love to hear from you.

Are things changing in your part of the world?

Or are we, collectively, setting up our children to struggle, by not teaching them how to navigate the very system we’re preparing them to enter?

We should be teaching kids, how to track their spending, to budget for rent, groceries, and life. What credit is, and how it can either work *for* or *against* them. How taxes work, and so on early in life

Not when they’re 30 and stressed. But when they’re 16 and curious.

**Financial literacy isn’t a luxury. It’s infrastructure.**

So let’s stop treating it like a side quest and make it a core mission.
\`\`\``,Vx=`\`\`\`markdown
---
title: We’re Not Failing Right!
original_publish_date: "2025-04-10"
source: "LinkedIn"
original_url: "https://www.linkedin.com/pulse/were-failing-right-alban-jerome-bsxqc"
status: "archive"
---

*Written in 2025. Archived as part of my body of work.*

Yes, there is a wrong way to fail!

I was talking to a couple of founders—immigrants like me—and as these things go, we ended up talking about a lot of different stuff. One of the things that came up in the course of the conversation was education—especially the systems and subjects that everybody went through.

What struck us was how eerily similar those systems are, no matter where you’re from. Whether it was India, China, Canada, the U.S.—Different countries, different exams, same story. Whether it’s the *Gaokao* in China, *NEET* in India, SATs in the U.S., or the A-levels in the UK, the pressure is relentless. The goalposts may have different names, but the path is linear.

The formulea is the same, everywhere.

**Get good grades → get into a good college → land a stable job → and for the love of God, don’t screw it up.**

And the pressure? It doesn’t lessen—it evolves. It compounds.

It starts with “do well in school” becomes “secure your future.” As you get older, our responsibilities get heavier, and so does the emotional weight. It’s not just about academic performance anymore—it’s about whether or not you’re *making it*. Further away from school, the safety net less further away.

And here’s the hard truth: most of us never learned how to carry that weight.

### It’s Not the Task That Breaks You. It’s the Stress Around the Task.

Here’s something we all need to say out loud: **failure is sometimes unavoidable**. We all know that. That’s not a flaw in the system—it’s how the systems works. You try, you don’t get it right, you adjust, you grow. That’s healthy failure.

But that’s not what most people....Kids are scared of. They’re not scared of *failing after trying their best*.

They’re scared of *failing before they even begin*.

And that fear? It paralyzes. It drains you before the work even starts. It becomes analysis paralysis, overthinking, hesitation, burnout. You “fail” before you try—not because you’re incapable, but because you’re emotionally tapped out from just *thinking* about the stakes.

### What We Never Got Taught: How to Regulate the Fear

This is where I think the neurodivergent space has a lot to teach us. Kids with ADHD, autism, dyslexia—they’re often taught emotional regulation tools not because they’re fragile, but because they’re navigating systems not built for how their minds work.

But the reality is—those tools should’ve been given to *everyone*. From what I understand, these are the some easiest ones that help building a system of self regualtion.

*   **Naming emotions**: Just saying “I’m overwhelmed” gives your brain something to work with. It calms the storm a little.
*   **Recognizing physical cues**: Tight chest, rapid breathing, fidgeting—your body often knows before your mind does.
*   **Reframing failure**: “This didn’t work *yet*” is a world apart from “I’m a failure.”
*   **Having emotional fallbacks**: Knowing what to say to yourself when things go sideways matters more than any motivational quote.
*   **Scheduled self-check-ins**: Not every moment has to be productive. Some just need to be *reflective*.

At the risk, of being called preachy, i'd like to call them survival skills, beacuse the lack of them is what's quietly breaking people—not the work itself.

### Founders Are Failing—Not Because They Can’t Build, But Because They Can’t Breathe

When I speak with founders, especially immigrants trying to build something in a new country, I see it all the time. These are some of the most resilient, driven people you’ll ever meet. But they’re exhausted. Not from building the product—but from carrying the invisible weight of expectation, pressure, and fear.

Without the right mental tools, they’re set up for burnout—not because they don’t have what it takes, but because the system never taught them how to handle the emotional side of ambition.

Having worked with founders and start-ups for nearly a decade, I can tell you this is problem that started very early in their lifes. We have systems built to teach kids so many subjects - many of which might become redudant soon but not enough on self awareness and emotional regulation. *Basic surival skills*

Which bring me to my point what the system needs to change.

We Need stop pretending stress is just part of the job, starting teaching kids healthy ways to cope.

We normalize fear. Only then can we overcome it—not pretend it doesn’t exist.

We start building education systems—and startup ecosystems—that don’t just teach how to succeed, but how to *fail well, recover, and come back sharper*.

Because the truth is, resilience isn’t about pushing through every wall. It’s about knowing when to pause, when to pivot, and when to be kind to yourself. That’s what sustains momentum.

That’s how we build better future, not just better start-ups.

And honestly?

Better humans too.
\`\`\``,Gx=`\`\`\`markdown
---
title: What Hybrid Learning Will Look Like
original_publish_date: 2025-02-18
source: "LinkedIn"
original_url: https://www.linkedin.com/pulse/what-hybrid-learning-look-like-alban-jerome-bqyqc
status: "archive"
---

*Written in 2025. Archived as part of my body of work.*

Education is evolving, and so is the way we approach learning. Hybrid learning—blending technology with in-person instruction—is no longer a futuristic concept; it’s a necessary evolution in preparing students for the world ahead. But hybrid learning isn’t just about putting lessons online and calling it a day. Done right, it will enhance education by combining the best aspects of technology, community-driven learning, and real-world application.

**1. Why Blended Learning (Tech + In-Person) is the Future**

Education has been in a binary model for decades: in-person instruction or online learning. But in reality, the best learning environments combine the strengths of both. A well-designed hybrid model:

- Personalizes learning experiences through AI-driven insights and adaptive tools.
- Encourages face-to-face collaboration, mentorship, and social skill development.
- Bridges the gap between theoretical knowledge and hands-on, real-world application.
- Provides flexibility for students to learn at their own pace while still being engaged in a structured, supportive environment.

The future of education isn’t about replacing classrooms with screens; it’s about using technology to enhance the classroom experience, making learning more engaging, inclusive, and effective.

**2. Learning Beyond the Classroom**

This is what I envision as the next step in education—an approach that moves beyond conventional classrooms and digital lectures to a model that fully integrates learning into the world around us. In this new world, learning will be deeply embedded in everyday experiences, harnessing the power of community, technology, and real-world application to create more dynamic and practical education. Entrepreneurship and other essential life skills cannot simply be taught within the walls of a classroom or even through a hybrid session. These skills require students to roll up their sleeves, step out into the real world, take risks, engage with actual challenges, and build something from the ground up. Whether it's starting a small business, running a social impact project, or navigating real-world financial literacy, experiential learning will be key to preparing students for life beyond structured education. It’s about fostering an ecosystem where learning is:

**Community-Based:** Learning will not be confined to schools or Zoom calls. Community projects, local business partnerships, and mentorship programs create meaningful opportunities for students to engage with their environment.

- **Project-Driven** – Traditional memorization-based learning doesn’t prepare students for the complexities of real-world problems. Hybrid models will emphasize projects that require critical thinking, teamwork, and creativity—mirroring the collaborative nature of today’s workforce.

**Application-Oriented:** Since knowledge without application is wasted potential, hybrid learning integrates real-world experiences, such as apprenticeships, internships, case studies, and hands-on experiments, to prepare students for life beyond the classroom.

**3. Expanding Learning Horizons**

Hybrid learning isn’t a one-size-fits-all solution—it extends far beyond traditional classrooms, reshaping how we engage with education. As an angel investor and someone who runs a venture fund, I’ve seen plenty of learning management systems emerge over the past few years that use AI to enhance learning. Many of these platforms function as excellent tutors, but the next generation of these systems will go beyond tutoring. They will act as guides, individual learning assistants, lesson planners, project supporters, and even art critics—customizing education in ways we’ve never seen before. This shift means moving beyond book learning and knowledge assessment to actually doing things—engaging in discussions, building projects with their hands, and applying knowledge in real-world settings.

- **STEM (Science, Technology, Engineering, and Math)**: Students learn foundational concepts through interactive AI-driven simulations and online modules, then apply them in hands-on lab experiments, robotics projects, or coding challenges.
- **Humanities (History, Literature, Social Sciences)**: Virtual reality (VR) tours of historical sites, online discussion forums, and AI-assisted research tools allow for deep engagement, while in-person Socratic discussions and community projects bring these subjects to life.
- **Arts & Design**: Digital tools like AI-powered creative software or virtual collaboration platforms give students access to industry-grade resources, while hands-on workshops, performances, and gallery exhibitions allow them to showcase their skills in real life.
- **Business & Entrepreneurship**: Online simulations teach financial modelling and strategy, while real-world internships, business competitions, and mentorship from local entrepreneurs provide students with invaluable practical experience.

**The Future of Hybrid Learning**

Hybrid learning isn’t just a temporary fix—it’s the foundation for the future of education. With AI evolving beyond simple tutoring to become individualized learning assistants, project guides, and creative collaborators, the education landscape is shifting in ways we’ve never seen before. The goal isn’t to replace traditional learning but to redefine it, making it more interactive, personalized, and aligned with how people learn best. By integrating technology with real-world interactions, discussions, and hands-on experiences, we aim to build an education system that teaches and prepares students to think, create, and solve problems in an ever-changing world.
\`\`\``,Yx=`\`\`\`markdown
---
title: What We Don’t Realize About How Kids Learn Best
original_publish_date: 2025-02-08
source: "LinkedIn"
original_url: https://www.linkedin.com/pulse/what-we-dont-realize-how-kids-learn-best-alban-jerome-u1whc
status: "archive"
---

*Written in 2025. Archived as part of my body of work.*

Every parent wants their child to succeed, but many don’t fully understand how kids learn best. Traditional education often emphasizes grades over proper comprehension, but neuroscience and modern research tell a different story.

1. **Neural Development and Learning Styles Matter**

Children’s brains develop at different rates, and their learning styles vary widely. Some kids thrive through hands-on experiences, while others absorb information better through visual or auditory methods. Scientific studies show that during early childhood, synaptic density in the cerebral cortex peaks, allowing for rapid learning and adaptability. Research from Harvard’s Center on the Developing Child emphasizes that early brain plasticity is crucial for building cognitive and emotional skills.

One critical aspect of neural development occurs between the ages of 2 and 3, when neural density is at its highest. During this period, a child’s brain forms an immense number of synaptic connections—up to twice as many as an adult brain—which are later pruned to enhance learning efficiency. This synaptic pruning, a well-documented process in neuroscience, ensures that frequently used neural pathways are strengthened while unused connections fade away, making learning more streamlined.

While neural density declines over time, neuroplasticity remains a lifelong ability. Studies in neurocognitive science indicate that continued mental stimulation can reinforce neural networks, keeping cognitive abilities sharp well into adulthood. Just like physical exercise maintains muscle tone, intellectual challenges—such as problem-solving, language acquisition, and creative tasks—help sustain brain adaptability. Learning should not be confined to the early years but encouraged throughout life, as research from the National Institute on Aging suggests that continued cognitive engagement can delay age-related decline and enhance neuroplasticity. Dynamic, experience-based learning integrates multi-sensory engagement, strengthening cognitive flexibility and problem-solving skills at every developmental stage, which is why learning needs to be lifelong.

**2. It's never 'One-Size-Fits-All' Education**

I hate to make this comparison lightly, but we are using an education system that does not account for individual learning differences. It is about mass-producing employees and workers. After all, it was built initially to supply the workforce to factories and clerks to offices. And given what we know about the myriad combinations of learning styles most students have, are we accounting for it? Are we accounting for all these individual differences that make things so much better?

Most traditional education systems are built around a rigid curriculum that doesn’t account for individual learning differences. This approach can lead to disengagement, frustration, and even anxiety in students who don’t fit the mould. According to research by the National Center for Learning Disabilities, nearly one in five students have learning and attention issues, yet many of these kids are overlooked in standard classrooms. Because traditional education systems have historically been designed to cater to the average student, often neglecting the needs of exceptional learners and those who struggle. 

3. **Rote Learning Vs Creativity and Problem-Solving Abilities**

I'm not ever going to say knowing a lot of things is a bad thing. Being able to absorb and recall large amounts of information is, I believe, still a very required skill. But basing it as the entire foundation for an education system is limiting true human potential. You cannot have people be vast stores of knowledge without giving them the ability to creatively problem-solve and critically think.

And this is just one tiny aspect of intelligence. There are over nine types of intelligence, each of which helps round off an individual's capabilities and helps them find their place in society. From linguistic intelligence to spatial intelligence, from emotional intelligence to bodily-kinesthetic intelligence, a well-rounded education should foster all these aspects rather than just focus on rote memorization. When kids are taught to think analytically and apply knowledge rather than just recall it, they become better equipped to tackle real-world challenges and innovate.

A report from the World Economic Forum highlights that problem-solving, emotional intelligence, and critical thinking are among the top skills needed in the future workforce. True intelligence is not just about remembering information—it’s about understanding how to use that information in meaningful ways to create, adapt, and innovate in a constantly evolving world.

We all should take a moment to reflect on how our own childhoods and perceptions of education have evolved over the decades. We have seen different iterations of the same education system through our younger siblings, cousins, nieces, nephews, and even our own children. Yes, there are more tools available today. We have moved from classrooms providing slates and well-lined notebooks to integrating impressive technologies that enhance learning. But at its core, are our underlying principles still designed to prepare children for a world that no longer exists?

The reality is that we haven’t spent enough time—whether as parents, educators, or policymakers—truly grasping how kids learn best. The world has changed drastically, but our education systems are still anchored in outdated methodologies. We are doing the best we can, and the decades of research worldwide on improving learning methodologies and learning technologies are evidence of this. But at the end of the day, the point that we have to keep in mind is that we haven't really drastically changed things in over a century. We have only made the car go faster. We haven't made the car fly.
\`\`\``,Zx=`\`\`\`markdown
---
title: Why the Current K-12 System Fails to Prepare Kids for the Future
original_publish_date: 2025-02-07
source: "LinkedIn"
original_url: https://www.linkedin.com/pulse/why-current-k-12-system-fails-prepare-kids-future-alban-jerome-rqwnc
status: "archive"
---

*Written in 2025. Archived as part of my body of work.*

Education systems have long been reactive rather than proactive. Instead of equipping students with the tools and skills to create and operate in a better world, they often attempt to adapt to a world that has already been shaped. This outdated approach means that by the time educational reforms catch up, the workforce and societal needs have already evolved further. The modern K-12 system continues to fall short in preparing students for a future that demands critical thinking, adaptability, and innovation. Here’s why:

### 1. Over-reliance on Memorization Instead of Teaching How to Think

The traditional education system rewards students for memorizing facts rather than understanding concepts. Standardized tests reinforce this approach, encouraging rote learning over analytical skills. Rote learning is a skill, but its value is declining in an era where AI and instant access to information put knowledge at our fingertips—and eventually, at a thought. Instead of focusing on the ability to remember large amounts of data, education should prioritize the ability to observe, analyze, and interpret vast amounts of information efficiently.

The world’s top innovators, from Elon Musk to Steve Jobs, attribute their success to their ability to comprehend complex problems, remain curious, and process large volumes of information effectively. Their success was not built on memorization but on their capacity to observe, understand, and synthesize new knowledge. Yet, in many classrooms, students are discouraged from questioning the status quo and are instead expected to conform to rigid curricula. This outdated model fails to prepare them for an economy that increasingly values comprehension, curiosity, and the ability to derive insights from complex data.

### 2. Mismatch Between What Schools Teach vs. What the Workforce Needs

The nature of work itself is evolving at an unprecedented pace. We no longer live in a world where the worker economy will prevail. From Tesla to companies across the globe, human robotics, AI automation, and AI agents are rapidly transforming industries. As businesses integrate AI-driven solutions, the very definition of work is changing. In this drastically different world, what is the goal of a worker? What is the role of a human in an economy where machines can perform repetitive tasks more efficiently?

This shift is akin to a new industrial revolution, where skillsets must massively evolve. Routine and mechanical jobs are being automated, making way for roles that require human creativity, emotional intelligence, strategic thinking, and adaptability. However, our education system is not structured to prepare students for this future. Instead of training students for jobs that may no longer exist in a decade, we must equip them with the ability to navigate change, innovate, and work alongside AI and automation technologies.

How do we want to shape our education system to prepare kids for this transformed world? Schools must prioritize skills AI cannot replicate—critical thinking, problem-solving, creativity, emotional intelligence, and adaptability. Learning must shift from rigid subject-based instruction to interdisciplinary, real-world applications that encourage students to become lifelong learners who can continuously evolve in an ever-changing workforce.

### 3. Outdated Learning Models Fail to Engage Modern Students

I used my first iPad when I was an adult, well after finishing college. Today's children, today’s students, have grown up with technology literally in their hands. They have learned from the most interactive online videos their parents could find. Their brains are wired to adapt and absorb information from screens far more efficiently than most of us who currently dominate leadership roles or senior positions.

As we welcome these children—children brought up with an entirely different appetite for technology, children native to the digital world—have we truly updated our learning models, tools, and subjects not just to enrich but also engage them? Are we asking them to step down into a system and conform to a dying model instead of updating it to help them grow and thrive? If we fail to recognize this gap, we risk alienating students from the very education meant to prepare them for the future.

### 4. The Global Failure of K-12 Education

The failure of K-12 education is not just a North American issue—it is a global challenge. While there are pockets of great learning technologies, experiences, and models, these remain isolated and experimental, limited to fringe groups or select schools. In most parts of the world, traditional schooling methods still dominate, leaving millions of students unprepared for modern realities.

Many education systems are designed around outdated industrial-era principles, emphasizing compliance, rigid assessment structures, and theoretical knowledge with little room for practical application. This leaves students ill-equipped for a rapidly changing world where adaptability, digital literacy, and problem-solving are critical.

Countries that have made strides in education reform, such as Finland and Singapore, have demonstrated that a flexible, student-centred approach is more effective. However, widespread adoption of these methods has been slow. If education is to truly evolve, these innovative practices must become the norm rather than the exception.
\`\`\``,Kx=`\`\`\`markdown
---
title: Why Do Smart Students Struggle With Real-Life Skills?
original_publish_date: 2025-04-04
source: "LinkedIn"
original_url: https://www.linkedin.com/pulse/why-do-smart-students-struggle-real-life-skills-alban-jerome-q0hac
status: "archive"
---

*Written in 2025. Archived as part of my body of work.*

We’ve all met them—or been them!

Brilliant students. Straight-A report card holders. The toppers in academia. The quintessential smart kids.

Kids who could solve complex equations in their sleep. Memorize huge chunks of textbooks over the weekend. Their brains were wired for academic success. And the truth is—many of them do go on to do well. No doubt.

But fast forward a few years… and you start noticing a pattern.

Many of these same brilliant minds struggle with things school never prepared them for. Especially the ones who followed a purely academic path.

Whether it’s holding down a job, communicating with clarity and confidence, managing finances, or just making everyday decisions without spiraling into analysis paralysis (perfectionism, anyone?)—there’s a gap. A big one.

*Why does this happen?*

For the longest time, I assumed it was a simple trade-off. Book smarts or street smarts. One came at the cost of the other.

And honestly? It didn’t seem like a great trade when I was a kid.

But over the years—especially as I’ve worked with founders, engineers, and neuroscience professionals—I’ve come to see a deeper truth. Many of these people are technical geniuses, but they’re completely lost when it comes to certain life skills—things like managing emotional and personal challenges, navigating ambiguity, leading people, and building resilience.

And I think here’s what’s really going on.

### 🧠 School Rewards Intelligence. Life Rewards Execution.

In school, everything is about the right answer.

There’s a syllabus. A grading key. A scorecard. The faculty—and often the entire ecosystem—is designed to teach you that there’s a right answer and a wrong one. You’re given the “right answer” ahead of time in lessons. And the idea is—if you just pay enough attention, and do enough revision, you’ll do well in the exam. Even in subjects where comprehension matters more than just recitation, the system leans toward rote predictability.

But life? Life’s nothing like that.

Yes, you’ll get lessons. Yes, you’ll learn things. And yes, some of that will apply eventually. But—as Steve Jobs famously said—you can only connect the dots looking backward.

When you’re living it, life is completely unscripted.

Unless one of you is secretly on "*The Truman Show*", there is no script here.

Success isn’t about ticking boxes. It’s about trying, flailing around a bit, adjusting to the chaos that is, and then trying again. Succeeding sometimes. Failing often. And learning all the time.

That’s just the nature of it.

The ones who thrive? They’re rarely the ones who got everything right on the first go. That only happens if you are the cheat sheet—and let’s be honest, none of us are.

So what’s often missing from school is the muscle of adaptability.

The ability to pivot fast. Stay grounded and realistic. To move forward even when things get messy. And oftentimes, the mess isn’t even of your own making. You’re just collateral in someone else’s storm—and now you have to clean it up.

That’s life.

And learning to navigate that? That’s what separates survival from success.

### 💬 Communication > Comprehension

Maybe some of the blame lies in how communication and comprehension are taught very early on. Being able to write great essays or answers—essentially recalling an entire textbook near perfectly—doesn’t automatically make someone a great storyteller, negotiator, or team leader.

Now, don’t get me wrong—those foundational skills can evolve into powerful communication. But they often don’t. Because the education system tends to reward explanation over expression. Precision over persuasion. And that’s a problem.

Communication is one of the real drivers of career growth and startup success. But many smart students struggle with it—not because they’re incapable, but because they never had to sell their ideas. Only explain them.

And sometimes? They don’t even develop their own ideas for a long time, because they’re busy reciting the ideas they’ve been taught.

I’ve seen this firsthand with some incredibly sharp, academically driven founders. These are people who can sit for hours and walk you through the intricacies of their science, their technology, and the exact elegance of how their product works.

But when it comes to raising capital? Selling the product? Or even convincing a rockstar hire to take the leap and join them?

That’s where things fall apart.

Because in those moments, being right isn’t enough. You also need to be clear, compelling, confident—and yes, a little charismatic.

And unfortunately, school doesn’t hand out grades for any of those.

### 🧩 Structure builds success—until it builds dependence.

Here’s the other thing, in my personal opinion: the way high achievers often get wired. They thrive in structured environments. Give them a syllabus, a checklist, a timeline with clearly defined outcomes—and they shine. That kind of predictability makes life easier to navigate. It’s how their neural wiring has been reinforced, year after year.

But the moment you take away the structure?

Anxiety starts to creep in. Overthinking shows up. And sometimes, it spirals into full-blown analysis paralysis. That, in my experience, is why many academic toppers struggle with navigating uncertainty. They’ve been calibrated for exams, not unknowns. And life, unfortunately, doesn’t hand out past papers.

Sure, they get hired quickly—early hiring often leans heavily on academic performance. The idea is that young hires can be molded into competent professionals with the right guidance and support.

That’s a great premise. But it’s not a guarantee.

Because real life? It doesn’t follow a script. It’s not even a textbook.

It’s a sandbox.

You’re expected to build your own game. Play well with others. Make and break rules. And sometimes—if global economics has taught us anything, in the recent few weeks—left is suddenly right, and top is now sideways.

Chaos is part of the deal.

And learning how to remain emotionally malleable—to bend without breaking, to stay grounded while the rules shift—is a massively underrated skill.

Especially when you consider what neuroscience tells us: neural plasticity means we can rewire ourselves. We can adapt.

But here’s the catch—if you’ve never been taught the confidence or given the tools to adapt, you’re starting off at a negative grade. Not in intelligence. But in emotional readiness.

And no one’s handing out points for catching up.

### 💥 Real-Life Skills Are Built Through Failure, Not Just Success

Let’s be honest: nobody wants to fail. Not in school. Not in life. That’s natural—and healthy. But somewhere along the way, especially in rigid, performance-focused systems like school, we’ve developed an overly negative association with failure. We attach shame to it. We internalize it.

And that leaves a mark.

I’ve seen some incredibly smart people hesitate to take a shot—not because they lacked the skills or vision, but because they were scared of messing up their perfect record.

But here’s the thing: perfection is a myth.

It always has been.

Progress, on the other hand, is real. And it often comes with process—messy, nonlinear, awkward process. Life doesn’t play nice. It doesn’t play fair. And if there’s one thing I’ve seen across every founder I’ve worked with, advised, or learned from—it’s this:

You don’t win by chasing perfection.

You win by aiming for impact.

You grow by staying in the game long enough to learn the lessons. That’s what builds resilience. That’s what sustains momentum.

And this applies to kids, too. If we teach them these skills early on—adaptability, emotional regulation, risk-taking—it won’t matter if the industry they train for vanishes in five years. It won’t matter if policies shift or markets tank.

They won’t crumble.

They’ll adjust. They’ll pivot. They’ll find a way to not just survive—but thrive.

Because they won’t be waiting for a script.

They’ll be writing their own.


![](https://media.licdn.com/dms/image/v2/D5612AQFvuYT89PEuLQ/article-inline_image-shrink_1500_2232/B56ZYBT98JGsAU-/0/1743778738557?e=1772064000&v=beta&t=2TR4irvgeDqM3Cg6mS5v2uXNl8XSWwR4yJsF6O9LSCQ)


## 🛠 So…what’s the fix?

Maybe we start by rethinking how we define “smart.” It doesn’t hurt to begin there.

Or maybe—again, I’m not claiming to be an expert here—we just need to add more to the current obsession with grades and scores. Skills like curiosity. Storytelling. Creativity. Emotional intelligence.

The truth is, a lot of these can’t be graded the way we grade math tests or science labs. And maybe that means we need a new system altogether. That’s up for debate—and it should be.

But what’s not up for debate is this: we need to create more safe spaces.

At school. At work. In society.

Places where it’s okay to try, to fail, to learn, and to grow without judgment. Because the truth is—life is teaching us every single day. And schooling? That was never supposed to be the end of learning.

Assuming ONLY someone with exceptional grades will automatically succeed in life isn’t just inaccurate—it’s unfair because it’s not just raw intelligence that drives success. It’s adaptable. Fast thinking. Connection. Emotional resilience. And the ability to build strong relationships and navigate chaos with a steady hand.

Those are the skills that move people forward.

And those are the skills that help everyone—not just smart kids, but adults like us—when life throws its inevitable curveballs. And let’s be honest…life throws a lot of curveballs.

But when it does, here’s what I hope you remember:

You’re not alone. You’re not broken. You’re just in a new classroom now.

And just like you once did great in school, you can survive here. You can thrive here. You can grow here.

Because this messy, unpredictable, beautiful world of ours? It may not give you grades, but it does give you chances.

And with the proper support, and the right mindset?

You’ll make something great out of it.
\`\`\``,Qx=`\`\`\`markdown
---
title: "You Got the Bag—Now Don’t Blow It:"
original_publish_date: "2025-01-27"
source: "LinkedIn"
original_url: "https://www.linkedin.com/pulse/you-got-bagnow-dont-blow-alban-jerome-xgawc"
status: "archive"
---

*Written in 2025. Archived as part of my body of work.*

Last week, I discussed how **fundraising can be a game-changer or a game-killer** for startups. The truth is that raising capital is not the finish line—it's just the beginning. The hard part **is spending it wisely.**

Some founders use their funding rounds to build momentum, scale strategically, and drive sustainable growth. Others? They burn through cash too fast, hire aggressively, or chase vanity metrics that do nothing for the bottom line. And when that happens, the same fundraising milestone that should have been a launchpad becomes an **anchor that drags the company down.**

### Common Pitfalls That Kill Startups Post-Fundraising

*   **🔻 Spending Like You've Already Made It**

    Raising money isn't the same as making money. Some founders immediately upgrade to a fancy office, throw company-wide retreats, and expand their teams beyond necessity. **Every dollar should be treated as an investment, not a reward.**

*   **🔻 Hiring Too Fast, Too Soon**

    Yes, growth requires people, but **hiring before truly needing the role** leads to unnecessary burnout. A bloated team without clear roles and measurable impact drains resources instead of driving progress.

*   **🔻 Chasing Growth Instead of Retention**

    Many startups fall into the trap of spending aggressively on marketing and customer acquisition before ensuring strong **retention and lifetime value (LTV)**. If your customers are churning just as fast as they sign up, then it is like pouring water into a leaking bucket.

*   **🔻 Ignoring Runway & Burn Rate**

    Too often, founders act like the next round is guaranteed. **It's not.** Investors want a **disciplined burn rate** and a plan ensuring survival—even if the next round takes longer.

### Moving to Not Giving Investors a Heart Attack

*   **💸 Poor Financial Discipline**

    Investors expect **accountability.** Confidence erodes quickly if a startup burns through cash without showing meaningful traction or ROI.

*   **📉 No Clear Plan for ROI**

    Where is the money going, and how does it lead to profitability? Investors want to see how each dollar spent moves the company toward **sustainable growth.**

*   **🚨 Founder Overconfidence**

    When the money comes in, the founders suddenly feel invincible. However, overestimating success, underestimating challenges, or assuming fundraising is *always* an option can be catastrophic.

### How to Make Fundraising Work for You

*   ✅ **Set Clear Milestones** – Define the key goals your funding should help achieve: customer acquisition, product development, or revenue growth.
*   ✅ **Maintain a Lean Mindset** – Even with millions in the bank, operate like a scrappy startup. Keep expenses tied directly to value creation.
*   ✅ **Prioritize Cash Flow & Profitability** – Focus on building revenue streams that reduce dependency on external capital.
*   ✅ **Raise Only What You Need** – Overfunding can be as dangerous as underfunding. More capital = more expectations and more dilution.

Fundraising can be a powerful tool—but only if you use it wisely. If you're not careful, the very thing that was meant to fuel your startup's success can be why it fails.

**Please tell me how you're doing to ensure your funding works for you, not against you.**

#StartupFunding #VCFunding #SmartSpending #ScalingWisely #FundraisingMistakes #FounderMindset #SustainableGrowth

Also, I'm always happy to connect with founders looking for more than investments—advice and mentorship on raising capital and smartly deploying it.
\`\`\``,Jx=`---
title: "About"
---

I work at the intersection of **capital, governance, cross-border complexity, and the builders who deploy it.**

My professional life has been shaped by situations where structure matters more than narrative—where durability, incentives, and institutional design determine outcomes over time. I am less interested in speed than in **load-bearing decisions**: how capital is organized, how authority is exercised, and how systems behave under stress.

My work spans two interconnected arenas: private wealth and venture builders but the architecture behind them is the same.

On one side, I advise high-net-worth individuals, family offices, and multi-generational enterprises on cross-border capital structuring, governance frameworks, and long-term asset positioning. This is architecture work: aligning legal, tax, investment, and operating layers into integrated structures that can carry generational weight.

For families navigating liquidity events, relocation, enterprise growth, or succession, I act as a strategic quarterback bridging advisors, aligning incentives, and protecting continuity across borders and across generations.

On the other side, I work directly with startups and early-stage companies as an investor, board participant, and strategic advisor. Through venture investing and board-level engagement, I work alongside founders navigating capital formation, cross-market expansion, and institutional pressure.

In those environments, the question is rarely just “how do we grow?”

It is:
**What kind of structure can survive growth?**

How is the cap table built?
Who actually controls the company at scale?
What governance friction will surface at Series B?
Where does cross-border complexity quietly erode execution?

Startups and family enterprises appear different on the surface. In reality, both are systems under capital stress. Both fail when incentives drift. Both compound when alignment is designed early.

Across both contexts, the through-line is consistent: **clarity compounds.**

Poorly aligned incentives eventually surface their weaknesses. Fragile cap tables collapse under stress. Governance shortcuts become strategic liabilities. Conversely, well-designed structures often appear quiet until they are tested. That is when durability reveals itself.

My earlier operating experience across growth, strategy, and international advisory roles continues to shape how I assess risk, execution capability, and structural weakness within businesses and investment frameworks.

I tend to write and think in frameworks rather than predictions. Many of the ideas on this site reflect long-cycle questions:

- How governance actually functions when conditions deteriorate  
- Why capital structure is inseparable from strategy  
- Where cross-border arrangements break down in practice  
- How venture-backed companies misprice structural risk  
- How founders and families differently experience institutional pressure  
- How power, coordination, and incentives shape institutions over time  

This site serves as a **canonical home** for my writing and thinking. Some pieces are current; others are archived to preserve continuity and intellectual lineage. The archive is intentionally left intact context matters.

I am selective about the conversations I engage in, but I am open to thoughtful dialogue around:

- Cross-border capital architecture and continuity planning  
- Venture design, cap table durability, and governance strategy  
- Founder–investor alignment and board-level dynamics  
- Intergenerational planning in entrepreneurial families  
- Institutional capital deployment and structural risk  

If something here resonates, you’re welcome to reach out.

*This site is designed to be quiet, readable, and durable. It is not optimized for frequency or reaction, but for coherence over time.*
`,Xx=`---
title: "Contact"
---

Most conversations I have begin elsewhere and eventually find their way here.

If something on this site connects with work you’re doing whether you are a founder navigating capital formation, an investor evaluating governance risk, or a family enterprise structuring across borders the simplest way to reach me is through LinkedIn or Substack.

**LinkedIn**  
https://www.linkedin.com/in/albanjerome

**Substack**  
https://albanjerome.substack.com

I write regularly in both places.

LinkedIn tends to host shorter, situational observations drawn from current capital environments.  
Substack is where I develop longer-form thinking around governance, venture architecture, cross-border structuring, and institutional durability.

If you reach out, context helps. A short note outlining the structural question you’re facing is far more useful than a general introduction.

I’m not optimizing for volume or speed. I’m interested in conversations that are thoughtful, well-framed, and grounded in operational reality.

*This site is a reference point. Dialogue usually begins elsewhere.*
`,e0=`---
title: Media
---

## Books

**[Code Red: Obsolescence Threshold](https://www.amazon.ca/Code-Red-obsolescence-threshold-version-ebook/dp/B0FWYYM4TZ)**
Available on Amazon

## Papers & Publications

**[Social Networks Influences Vote Banks, Politician-Voter Relationship; Case Study: 'MyBarackObama.com'](/media/social-networks-vote-banks.pdf)**
An examination of how social networking platforms transformed political campaigning and voter engagement, using Barack Obama's 2008 presidential campaign as a case study.

## Media Appearances & Events

*Coming soon.*
`,t0=`---
title: Now
description: Current focus areas
---

## Current Focus

- Researching governance models for cross-border investment vehicles
- Writing a series on capital allocation in emerging markets
- Advising on institutional design for pan-African trade networks
`;function cu(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Ir=cu();function jm(r){Ir=r}var gr={exec:()=>null};function Ae(r,n=""){let i=typeof r=="string"?r:r.source,a={replace:(s,c)=>{let d=typeof c=="string"?c:c.source;return d=d.replace(ut.caret,"$1"),i=i.replace(s,d),a},getRegex:()=>new RegExp(i,n)};return a}var n0=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),ut={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:r=>new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}#`),htmlBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:r=>new RegExp(`^ {0,${Math.min(3,r-1)}}>`)},r0=/^(?:[ \t]*(?:\n|$))+/,i0=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,o0=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,_o=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,a0=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,uu=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Nm=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Rm=Ae(Nm).replace(/bull/g,uu).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),s0=Ae(Nm).replace(/bull/g,uu).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),du=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,l0=/^[^\n]+/,hu=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,c0=Ae(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",hu).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),u0=Ae(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,uu).getRegex(),ys="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",fu=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,d0=Ae("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",fu).replace("tag",ys).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Pm=Ae(du).replace("hr",_o).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ys).getRegex(),h0=Ae(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Pm).getRegex(),pu={blockquote:h0,code:i0,def:c0,fences:o0,heading:a0,hr:_o,html:d0,lheading:Rm,list:u0,newline:r0,paragraph:Pm,table:gr,text:l0},Zf=Ae("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",_o).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ys).getRegex(),f0={...pu,lheading:s0,table:Zf,paragraph:Ae(du).replace("hr",_o).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Zf).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ys).getRegex()},p0={...pu,html:Ae(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",fu).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:gr,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Ae(du).replace("hr",_o).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Rm).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},m0=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,g0=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,zm=/^( {2,}|\\)\n(?!\s*$)/,y0=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,vs=/[\p{P}\p{S}]/u,mu=/[\s\p{P}\p{S}]/u,Lm=/[^\s\p{P}\p{S}]/u,v0=Ae(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,mu).getRegex(),Wm=/(?!~)[\p{P}\p{S}]/u,w0=/(?!~)[\s\p{P}\p{S}]/u,b0=/(?:[^\s\p{P}\p{S}]|~)/u,Mm=/(?![*_])[\p{P}\p{S}]/u,k0=/(?![*_])[\s\p{P}\p{S}]/u,x0=/(?:[^\s\p{P}\p{S}]|[*_])/u,T0=Ae(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",n0?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Om=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,_0=Ae(Om,"u").replace(/punct/g,vs).getRegex(),S0=Ae(Om,"u").replace(/punct/g,Wm).getRegex(),Fm="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",I0=Ae(Fm,"gu").replace(/notPunctSpace/g,Lm).replace(/punctSpace/g,mu).replace(/punct/g,vs).getRegex(),A0=Ae(Fm,"gu").replace(/notPunctSpace/g,b0).replace(/punctSpace/g,w0).replace(/punct/g,Wm).getRegex(),C0=Ae("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Lm).replace(/punctSpace/g,mu).replace(/punct/g,vs).getRegex(),E0=Ae(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,Mm).getRegex(),j0="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",N0=Ae(j0,"gu").replace(/notPunctSpace/g,x0).replace(/punctSpace/g,k0).replace(/punct/g,Mm).getRegex(),R0=Ae(/\\(punct)/,"gu").replace(/punct/g,vs).getRegex(),P0=Ae(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),z0=Ae(fu).replace("(?:-->|$)","-->").getRegex(),L0=Ae("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",z0).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ya=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,W0=Ae(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Ya).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Bm=Ae(/^!?\[(label)\]\[(ref)\]/).replace("label",Ya).replace("ref",hu).getRegex(),Dm=Ae(/^!?\[(ref)\](?:\[\])?/).replace("ref",hu).getRegex(),M0=Ae("reflink|nolink(?!\\()","g").replace("reflink",Bm).replace("nolink",Dm).getRegex(),Kf=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,gu={_backpedal:gr,anyPunctuation:R0,autolink:P0,blockSkip:T0,br:zm,code:g0,del:gr,delLDelim:gr,delRDelim:gr,emStrongLDelim:_0,emStrongRDelimAst:I0,emStrongRDelimUnd:C0,escape:m0,link:W0,nolink:Dm,punctuation:v0,reflink:Bm,reflinkSearch:M0,tag:L0,text:y0,url:gr},O0={...gu,link:Ae(/^!?\[(label)\]\((.*?)\)/).replace("label",Ya).getRegex(),reflink:Ae(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ya).getRegex()},Oc={...gu,emStrongRDelimAst:A0,emStrongLDelim:S0,delLDelim:E0,delRDelim:N0,url:Ae(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Kf).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:Ae(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Kf).getRegex()},F0={...Oc,br:Ae(zm).replace("{2,}","*").getRegex(),text:Ae(Oc.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Fa={normal:pu,gfm:f0,pedantic:p0},eo={normal:gu,gfm:Oc,breaks:F0,pedantic:O0},B0={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Qf=r=>B0[r];function bn(r,n){if(n){if(ut.escapeTest.test(r))return r.replace(ut.escapeReplace,Qf)}else if(ut.escapeTestNoEncode.test(r))return r.replace(ut.escapeReplaceNoEncode,Qf);return r}function Jf(r){try{r=encodeURI(r).replace(ut.percentDecode,"%")}catch{return null}return r}function Xf(r,n){let i=r.replace(ut.findPipe,(c,d,f)=>{let p=!1,m=d;for(;--m>=0&&f[m]==="\\";)p=!p;return p?"|":" |"}),a=i.split(ut.splitPipe),s=0;if(a[0].trim()||a.shift(),a.length>0&&!a.at(-1)?.trim()&&a.pop(),n)if(a.length>n)a.splice(n);else for(;a.length<n;)a.push("");for(;s<a.length;s++)a[s]=a[s].trim().replace(ut.slashPipe,"|");return a}function to(r,n,i){let a=r.length;if(a===0)return"";let s=0;for(;s<a&&r.charAt(a-s-1)===n;)s++;return r.slice(0,a-s)}function D0(r,n){if(r.indexOf(n[1])===-1)return-1;let i=0;for(let a=0;a<r.length;a++)if(r[a]==="\\")a++;else if(r[a]===n[0])i++;else if(r[a]===n[1]&&(i--,i<0))return a;return i>0?-2:-1}function $0(r,n=0){let i=n,a="";for(let s of r)if(s==="	"){let c=4-i%4;a+=" ".repeat(c),i+=c}else a+=s,i++;return a}function ep(r,n,i,a,s){let c=n.href,d=n.title||null,f=r[1].replace(s.other.outputLinkReplace,"$1");a.state.inLink=!0;let p={type:r[0].charAt(0)==="!"?"image":"link",raw:i,href:c,title:d,text:f,tokens:a.inlineTokens(f)};return a.state.inLink=!1,p}function q0(r,n,i){let a=r.match(i.other.indentCodeCompensation);if(a===null)return n;let s=a[1];return n.split(`
`).map(c=>{let d=c.match(i.other.beginningSpace);if(d===null)return c;let[f]=d;return f.length>=s.length?c.slice(s.length):c}).join(`
`)}var Za=class{options;rules;lexer;constructor(r){this.options=r||Ir}space(r){let n=this.rules.block.newline.exec(r);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(r){let n=this.rules.block.code.exec(r);if(n){let i=n[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?i:to(i,`
`)}}}fences(r){let n=this.rules.block.fences.exec(r);if(n){let i=n[0],a=q0(i,n[3]||"",this.rules);return{type:"code",raw:i,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:a}}}heading(r){let n=this.rules.block.heading.exec(r);if(n){let i=n[2].trim();if(this.rules.other.endingHash.test(i)){let a=to(i,"#");(this.options.pedantic||!a||this.rules.other.endingSpaceChar.test(a))&&(i=a.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:i,tokens:this.lexer.inline(i)}}}hr(r){let n=this.rules.block.hr.exec(r);if(n)return{type:"hr",raw:to(n[0],`
`)}}blockquote(r){let n=this.rules.block.blockquote.exec(r);if(n){let i=to(n[0],`
`).split(`
`),a="",s="",c=[];for(;i.length>0;){let d=!1,f=[],p;for(p=0;p<i.length;p++)if(this.rules.other.blockquoteStart.test(i[p]))f.push(i[p]),d=!0;else if(!d)f.push(i[p]);else break;i=i.slice(p);let m=f.join(`
`),v=m.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");a=a?`${a}
${m}`:m,s=s?`${s}
${v}`:v;let b=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(v,c,!0),this.lexer.state.top=b,i.length===0)break;let x=c.at(-1);if(x?.type==="code")break;if(x?.type==="blockquote"){let E=x,N=E.raw+`
`+i.join(`
`),A=this.blockquote(N);c[c.length-1]=A,a=a.substring(0,a.length-E.raw.length)+A.raw,s=s.substring(0,s.length-E.text.length)+A.text;break}else if(x?.type==="list"){let E=x,N=E.raw+`
`+i.join(`
`),A=this.list(N);c[c.length-1]=A,a=a.substring(0,a.length-x.raw.length)+A.raw,s=s.substring(0,s.length-E.raw.length)+A.raw,i=N.substring(c.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:a,tokens:c,text:s}}}list(r){let n=this.rules.block.list.exec(r);if(n){let i=n[1].trim(),a=i.length>1,s={type:"list",raw:"",ordered:a,start:a?+i.slice(0,-1):"",loose:!1,items:[]};i=a?`\\d{1,9}\\${i.slice(-1)}`:`\\${i}`,this.options.pedantic&&(i=a?i:"[*+-]");let c=this.rules.other.listItemRegex(i),d=!1;for(;r;){let p=!1,m="",v="";if(!(n=c.exec(r))||this.rules.block.hr.test(r))break;m=n[0],r=r.substring(m.length);let b=$0(n[2].split(`
`,1)[0],n[1].length),x=r.split(`
`,1)[0],E=!b.trim(),N=0;if(this.options.pedantic?(N=2,v=b.trimStart()):E?N=n[1].length+1:(N=b.search(this.rules.other.nonSpaceChar),N=N>4?1:N,v=b.slice(N),N+=n[1].length),E&&this.rules.other.blankLine.test(x)&&(m+=x+`
`,r=r.substring(x.length+1),p=!0),!p){let A=this.rules.other.nextBulletRegex(N),I=this.rules.other.hrRegex(N),W=this.rules.other.fencesBeginRegex(N),O=this.rules.other.headingBeginRegex(N),D=this.rules.other.htmlBeginRegex(N),$=this.rules.other.blockquoteBeginRegex(N);for(;r;){let U=r.split(`
`,1)[0],Z;if(x=U,this.options.pedantic?(x=x.replace(this.rules.other.listReplaceNesting,"  "),Z=x):Z=x.replace(this.rules.other.tabCharGlobal,"    "),W.test(x)||O.test(x)||D.test(x)||$.test(x)||A.test(x)||I.test(x))break;if(Z.search(this.rules.other.nonSpaceChar)>=N||!x.trim())v+=`
`+Z.slice(N);else{if(E||b.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||W.test(b)||O.test(b)||I.test(b))break;v+=`
`+x}E=!x.trim(),m+=U+`
`,r=r.substring(U.length+1),b=Z.slice(N)}}s.loose||(d?s.loose=!0:this.rules.other.doubleBlankLine.test(m)&&(d=!0)),s.items.push({type:"list_item",raw:m,task:!!this.options.gfm&&this.rules.other.listIsTask.test(v),loose:!1,text:v,tokens:[]}),s.raw+=m}let f=s.items.at(-1);if(f)f.raw=f.raw.trimEnd(),f.text=f.text.trimEnd();else return;s.raw=s.raw.trimEnd();for(let p of s.items){if(this.lexer.state.top=!1,p.tokens=this.lexer.blockTokens(p.text,[]),p.task){if(p.text=p.text.replace(this.rules.other.listReplaceTask,""),p.tokens[0]?.type==="text"||p.tokens[0]?.type==="paragraph"){p.tokens[0].raw=p.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),p.tokens[0].text=p.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let v=this.lexer.inlineQueue.length-1;v>=0;v--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[v].src)){this.lexer.inlineQueue[v].src=this.lexer.inlineQueue[v].src.replace(this.rules.other.listReplaceTask,"");break}}let m=this.rules.other.listTaskCheckbox.exec(p.raw);if(m){let v={type:"checkbox",raw:m[0]+" ",checked:m[0]!=="[ ]"};p.checked=v.checked,s.loose?p.tokens[0]&&["paragraph","text"].includes(p.tokens[0].type)&&"tokens"in p.tokens[0]&&p.tokens[0].tokens?(p.tokens[0].raw=v.raw+p.tokens[0].raw,p.tokens[0].text=v.raw+p.tokens[0].text,p.tokens[0].tokens.unshift(v)):p.tokens.unshift({type:"paragraph",raw:v.raw,text:v.raw,tokens:[v]}):p.tokens.unshift(v)}}if(!s.loose){let m=p.tokens.filter(b=>b.type==="space"),v=m.length>0&&m.some(b=>this.rules.other.anyLine.test(b.raw));s.loose=v}}if(s.loose)for(let p of s.items){p.loose=!0;for(let m of p.tokens)m.type==="text"&&(m.type="paragraph")}return s}}html(r){let n=this.rules.block.html.exec(r);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(r){let n=this.rules.block.def.exec(r);if(n){let i=n[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),a=n[2]?n[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:i,raw:n[0],href:a,title:s}}}table(r){let n=this.rules.block.table.exec(r);if(!n||!this.rules.other.tableDelimiter.test(n[2]))return;let i=Xf(n[1]),a=n[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=n[3]?.trim()?n[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],c={type:"table",raw:n[0],header:[],align:[],rows:[]};if(i.length===a.length){for(let d of a)this.rules.other.tableAlignRight.test(d)?c.align.push("right"):this.rules.other.tableAlignCenter.test(d)?c.align.push("center"):this.rules.other.tableAlignLeft.test(d)?c.align.push("left"):c.align.push(null);for(let d=0;d<i.length;d++)c.header.push({text:i[d],tokens:this.lexer.inline(i[d]),header:!0,align:c.align[d]});for(let d of s)c.rows.push(Xf(d,c.header.length).map((f,p)=>({text:f,tokens:this.lexer.inline(f),header:!1,align:c.align[p]})));return c}}lheading(r){let n=this.rules.block.lheading.exec(r);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(r){let n=this.rules.block.paragraph.exec(r);if(n){let i=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:i,tokens:this.lexer.inline(i)}}}text(r){let n=this.rules.block.text.exec(r);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(r){let n=this.rules.inline.escape.exec(r);if(n)return{type:"escape",raw:n[0],text:n[1]}}tag(r){let n=this.rules.inline.tag.exec(r);if(n)return!this.lexer.state.inLink&&this.rules.other.startATag.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(r){let n=this.rules.inline.link.exec(r);if(n){let i=n[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(i)){if(!this.rules.other.endAngleBracket.test(i))return;let c=to(i.slice(0,-1),"\\");if((i.length-c.length)%2===0)return}else{let c=D0(n[2],"()");if(c===-2)return;if(c>-1){let d=(n[0].indexOf("!")===0?5:4)+n[1].length+c;n[2]=n[2].substring(0,c),n[0]=n[0].substring(0,d).trim(),n[3]=""}}let a=n[2],s="";if(this.options.pedantic){let c=this.rules.other.pedanticHrefTitle.exec(a);c&&(a=c[1],s=c[3])}else s=n[3]?n[3].slice(1,-1):"";return a=a.trim(),this.rules.other.startAngleBracket.test(a)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(i)?a=a.slice(1):a=a.slice(1,-1)),ep(n,{href:a&&a.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer,this.rules)}}reflink(r,n){let i;if((i=this.rules.inline.reflink.exec(r))||(i=this.rules.inline.nolink.exec(r))){let a=(i[2]||i[1]).replace(this.rules.other.multipleSpaceGlobal," "),s=n[a.toLowerCase()];if(!s){let c=i[0].charAt(0);return{type:"text",raw:c,text:c}}return ep(i,s,i[0],this.lexer,this.rules)}}emStrong(r,n,i=""){let a=this.rules.inline.emStrongLDelim.exec(r);if(!(!a||a[3]&&i.match(this.rules.other.unicodeAlphaNumeric))&&(!(a[1]||a[2])||!i||this.rules.inline.punctuation.exec(i))){let s=[...a[0]].length-1,c,d,f=s,p=0,m=a[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(m.lastIndex=0,n=n.slice(-1*r.length+s);(a=m.exec(n))!=null;){if(c=a[1]||a[2]||a[3]||a[4]||a[5]||a[6],!c)continue;if(d=[...c].length,a[3]||a[4]){f+=d;continue}else if((a[5]||a[6])&&s%3&&!((s+d)%3)){p+=d;continue}if(f-=d,f>0)continue;d=Math.min(d,d+f+p);let v=[...a[0]][0].length,b=r.slice(0,s+a.index+v+d);if(Math.min(s,d)%2){let E=b.slice(1,-1);return{type:"em",raw:b,text:E,tokens:this.lexer.inlineTokens(E)}}let x=b.slice(2,-2);return{type:"strong",raw:b,text:x,tokens:this.lexer.inlineTokens(x)}}}}codespan(r){let n=this.rules.inline.code.exec(r);if(n){let i=n[2].replace(this.rules.other.newLineCharGlobal," "),a=this.rules.other.nonSpaceChar.test(i),s=this.rules.other.startingSpaceChar.test(i)&&this.rules.other.endingSpaceChar.test(i);return a&&s&&(i=i.substring(1,i.length-1)),{type:"codespan",raw:n[0],text:i}}}br(r){let n=this.rules.inline.br.exec(r);if(n)return{type:"br",raw:n[0]}}del(r,n,i=""){let a=this.rules.inline.delLDelim.exec(r);if(a&&(!a[1]||!i||this.rules.inline.punctuation.exec(i))){let s=[...a[0]].length-1,c,d,f=s,p=this.rules.inline.delRDelim;for(p.lastIndex=0,n=n.slice(-1*r.length+s);(a=p.exec(n))!=null;){if(c=a[1]||a[2]||a[3]||a[4]||a[5]||a[6],!c||(d=[...c].length,d!==s))continue;if(a[3]||a[4]){f+=d;continue}if(f-=d,f>0)continue;d=Math.min(d,d+f);let m=[...a[0]][0].length,v=r.slice(0,s+a.index+m+d),b=v.slice(s,-s);return{type:"del",raw:v,text:b,tokens:this.lexer.inlineTokens(b)}}}}autolink(r){let n=this.rules.inline.autolink.exec(r);if(n){let i,a;return n[2]==="@"?(i=n[1],a="mailto:"+i):(i=n[1],a=i),{type:"link",raw:n[0],text:i,href:a,tokens:[{type:"text",raw:i,text:i}]}}}url(r){let n;if(n=this.rules.inline.url.exec(r)){let i,a;if(n[2]==="@")i=n[0],a="mailto:"+i;else{let s;do s=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])?.[0]??"";while(s!==n[0]);i=n[0],n[1]==="www."?a="http://"+n[0]:a=n[0]}return{type:"link",raw:n[0],text:i,href:a,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(r){let n=this.rules.inline.text.exec(r);if(n){let i=this.lexer.state.inRawBlock;return{type:"text",raw:n[0],text:n[0],escaped:i}}}},Dt=class Fc{tokens;options;state;inlineQueue;tokenizer;constructor(n){this.tokens=[],this.tokens.links=Object.create(null),this.options=n||Ir,this.options.tokenizer=this.options.tokenizer||new Za,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let i={other:ut,block:Fa.normal,inline:eo.normal};this.options.pedantic?(i.block=Fa.pedantic,i.inline=eo.pedantic):this.options.gfm&&(i.block=Fa.gfm,this.options.breaks?i.inline=eo.breaks:i.inline=eo.gfm),this.tokenizer.rules=i}static get rules(){return{block:Fa,inline:eo}}static lex(n,i){return new Fc(i).lex(n)}static lexInline(n,i){return new Fc(i).inlineTokens(n)}lex(n){n=n.replace(ut.carriageReturn,`
`),this.blockTokens(n,this.tokens);for(let i=0;i<this.inlineQueue.length;i++){let a=this.inlineQueue[i];this.inlineTokens(a.src,a.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(n,i=[],a=!1){for(this.options.pedantic&&(n=n.replace(ut.tabCharGlobal,"    ").replace(ut.spaceLine,""));n;){let s;if(this.options.extensions?.block?.some(d=>(s=d.call({lexer:this},n,i))?(n=n.substring(s.raw.length),i.push(s),!0):!1))continue;if(s=this.tokenizer.space(n)){n=n.substring(s.raw.length);let d=i.at(-1);s.raw.length===1&&d!==void 0?d.raw+=`
`:i.push(s);continue}if(s=this.tokenizer.code(n)){n=n.substring(s.raw.length);let d=i.at(-1);d?.type==="paragraph"||d?.type==="text"?(d.raw+=(d.raw.endsWith(`
`)?"":`
`)+s.raw,d.text+=`
`+s.text,this.inlineQueue.at(-1).src=d.text):i.push(s);continue}if(s=this.tokenizer.fences(n)){n=n.substring(s.raw.length),i.push(s);continue}if(s=this.tokenizer.heading(n)){n=n.substring(s.raw.length),i.push(s);continue}if(s=this.tokenizer.hr(n)){n=n.substring(s.raw.length),i.push(s);continue}if(s=this.tokenizer.blockquote(n)){n=n.substring(s.raw.length),i.push(s);continue}if(s=this.tokenizer.list(n)){n=n.substring(s.raw.length),i.push(s);continue}if(s=this.tokenizer.html(n)){n=n.substring(s.raw.length),i.push(s);continue}if(s=this.tokenizer.def(n)){n=n.substring(s.raw.length);let d=i.at(-1);d?.type==="paragraph"||d?.type==="text"?(d.raw+=(d.raw.endsWith(`
`)?"":`
`)+s.raw,d.text+=`
`+s.raw,this.inlineQueue.at(-1).src=d.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title},i.push(s));continue}if(s=this.tokenizer.table(n)){n=n.substring(s.raw.length),i.push(s);continue}if(s=this.tokenizer.lheading(n)){n=n.substring(s.raw.length),i.push(s);continue}let c=n;if(this.options.extensions?.startBlock){let d=1/0,f=n.slice(1),p;this.options.extensions.startBlock.forEach(m=>{p=m.call({lexer:this},f),typeof p=="number"&&p>=0&&(d=Math.min(d,p))}),d<1/0&&d>=0&&(c=n.substring(0,d+1))}if(this.state.top&&(s=this.tokenizer.paragraph(c))){let d=i.at(-1);a&&d?.type==="paragraph"?(d.raw+=(d.raw.endsWith(`
`)?"":`
`)+s.raw,d.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=d.text):i.push(s),a=c.length!==n.length,n=n.substring(s.raw.length);continue}if(s=this.tokenizer.text(n)){n=n.substring(s.raw.length);let d=i.at(-1);d?.type==="text"?(d.raw+=(d.raw.endsWith(`
`)?"":`
`)+s.raw,d.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=d.text):i.push(s);continue}if(n){let d="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return this.state.top=!0,i}inline(n,i=[]){return this.inlineQueue.push({src:n,tokens:i}),i}inlineTokens(n,i=[]){let a=n,s=null;if(this.tokens.links){let p=Object.keys(this.tokens.links);if(p.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null;)p.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(a))!=null;)a=a.slice(0,s.index)+"++"+a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let c;for(;(s=this.tokenizer.rules.inline.blockSkip.exec(a))!=null;)c=s[2]?s[2].length:0,a=a.slice(0,s.index+c)+"["+"a".repeat(s[0].length-c-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);a=this.options.hooks?.emStrongMask?.call({lexer:this},a)??a;let d=!1,f="";for(;n;){d||(f=""),d=!1;let p;if(this.options.extensions?.inline?.some(v=>(p=v.call({lexer:this},n,i))?(n=n.substring(p.raw.length),i.push(p),!0):!1))continue;if(p=this.tokenizer.escape(n)){n=n.substring(p.raw.length),i.push(p);continue}if(p=this.tokenizer.tag(n)){n=n.substring(p.raw.length),i.push(p);continue}if(p=this.tokenizer.link(n)){n=n.substring(p.raw.length),i.push(p);continue}if(p=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(p.raw.length);let v=i.at(-1);p.type==="text"&&v?.type==="text"?(v.raw+=p.raw,v.text+=p.text):i.push(p);continue}if(p=this.tokenizer.emStrong(n,a,f)){n=n.substring(p.raw.length),i.push(p);continue}if(p=this.tokenizer.codespan(n)){n=n.substring(p.raw.length),i.push(p);continue}if(p=this.tokenizer.br(n)){n=n.substring(p.raw.length),i.push(p);continue}if(p=this.tokenizer.del(n,a,f)){n=n.substring(p.raw.length),i.push(p);continue}if(p=this.tokenizer.autolink(n)){n=n.substring(p.raw.length),i.push(p);continue}if(!this.state.inLink&&(p=this.tokenizer.url(n))){n=n.substring(p.raw.length),i.push(p);continue}let m=n;if(this.options.extensions?.startInline){let v=1/0,b=n.slice(1),x;this.options.extensions.startInline.forEach(E=>{x=E.call({lexer:this},b),typeof x=="number"&&x>=0&&(v=Math.min(v,x))}),v<1/0&&v>=0&&(m=n.substring(0,v+1))}if(p=this.tokenizer.inlineText(m)){n=n.substring(p.raw.length),p.raw.slice(-1)!=="_"&&(f=p.raw.slice(-1)),d=!0;let v=i.at(-1);v?.type==="text"?(v.raw+=p.raw,v.text+=p.text):i.push(p);continue}if(n){let v="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(v);break}else throw new Error(v)}}return i}},Ka=class{options;parser;constructor(r){this.options=r||Ir}space(r){return""}code({text:r,lang:n,escaped:i}){let a=(n||"").match(ut.notSpaceStart)?.[0],s=r.replace(ut.endingNewline,"")+`
`;return a?'<pre><code class="language-'+bn(a)+'">'+(i?s:bn(s,!0))+`</code></pre>
`:"<pre><code>"+(i?s:bn(s,!0))+`</code></pre>
`}blockquote({tokens:r}){return`<blockquote>
${this.parser.parse(r)}</blockquote>
`}html({text:r}){return r}def(r){return""}heading({tokens:r,depth:n}){return`<h${n}>${this.parser.parseInline(r)}</h${n}>
`}hr(r){return`<hr>
`}list(r){let n=r.ordered,i=r.start,a="";for(let d=0;d<r.items.length;d++){let f=r.items[d];a+=this.listitem(f)}let s=n?"ol":"ul",c=n&&i!==1?' start="'+i+'"':"";return"<"+s+c+`>
`+a+"</"+s+`>
`}listitem(r){return`<li>${this.parser.parse(r.tokens)}</li>
`}checkbox({checked:r}){return"<input "+(r?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:r}){return`<p>${this.parser.parseInline(r)}</p>
`}table(r){let n="",i="";for(let s=0;s<r.header.length;s++)i+=this.tablecell(r.header[s]);n+=this.tablerow({text:i});let a="";for(let s=0;s<r.rows.length;s++){let c=r.rows[s];i="";for(let d=0;d<c.length;d++)i+=this.tablecell(c[d]);a+=this.tablerow({text:i})}return a&&(a=`<tbody>${a}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+a+`</table>
`}tablerow({text:r}){return`<tr>
${r}</tr>
`}tablecell(r){let n=this.parser.parseInline(r.tokens),i=r.header?"th":"td";return(r.align?`<${i} align="${r.align}">`:`<${i}>`)+n+`</${i}>
`}strong({tokens:r}){return`<strong>${this.parser.parseInline(r)}</strong>`}em({tokens:r}){return`<em>${this.parser.parseInline(r)}</em>`}codespan({text:r}){return`<code>${bn(r,!0)}</code>`}br(r){return"<br>"}del({tokens:r}){return`<del>${this.parser.parseInline(r)}</del>`}link({href:r,title:n,tokens:i}){let a=this.parser.parseInline(i),s=Jf(r);if(s===null)return a;r=s;let c='<a href="'+r+'"';return n&&(c+=' title="'+bn(n)+'"'),c+=">"+a+"</a>",c}image({href:r,title:n,text:i,tokens:a}){a&&(i=this.parser.parseInline(a,this.parser.textRenderer));let s=Jf(r);if(s===null)return bn(i);r=s;let c=`<img src="${r}" alt="${i}"`;return n&&(c+=` title="${bn(n)}"`),c+=">",c}text(r){return"tokens"in r&&r.tokens?this.parser.parseInline(r.tokens):"escaped"in r&&r.escaped?r.text:bn(r.text)}},yu=class{strong({text:r}){return r}em({text:r}){return r}codespan({text:r}){return r}del({text:r}){return r}html({text:r}){return r}text({text:r}){return r}link({text:r}){return""+r}image({text:r}){return""+r}br(){return""}checkbox({raw:r}){return r}},$t=class Bc{options;renderer;textRenderer;constructor(n){this.options=n||Ir,this.options.renderer=this.options.renderer||new Ka,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new yu}static parse(n,i){return new Bc(i).parse(n)}static parseInline(n,i){return new Bc(i).parseInline(n)}parse(n){let i="";for(let a=0;a<n.length;a++){let s=n[a];if(this.options.extensions?.renderers?.[s.type]){let d=s,f=this.options.extensions.renderers[d.type].call({parser:this},d);if(f!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(d.type)){i+=f||"";continue}}let c=s;switch(c.type){case"space":{i+=this.renderer.space(c);break}case"hr":{i+=this.renderer.hr(c);break}case"heading":{i+=this.renderer.heading(c);break}case"code":{i+=this.renderer.code(c);break}case"table":{i+=this.renderer.table(c);break}case"blockquote":{i+=this.renderer.blockquote(c);break}case"list":{i+=this.renderer.list(c);break}case"checkbox":{i+=this.renderer.checkbox(c);break}case"html":{i+=this.renderer.html(c);break}case"def":{i+=this.renderer.def(c);break}case"paragraph":{i+=this.renderer.paragraph(c);break}case"text":{i+=this.renderer.text(c);break}default:{let d='Token with "'+c.type+'" type was not found.';if(this.options.silent)return console.error(d),"";throw new Error(d)}}}return i}parseInline(n,i=this.renderer){let a="";for(let s=0;s<n.length;s++){let c=n[s];if(this.options.extensions?.renderers?.[c.type]){let f=this.options.extensions.renderers[c.type].call({parser:this},c);if(f!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(c.type)){a+=f||"";continue}}let d=c;switch(d.type){case"escape":{a+=i.text(d);break}case"html":{a+=i.html(d);break}case"link":{a+=i.link(d);break}case"image":{a+=i.image(d);break}case"checkbox":{a+=i.checkbox(d);break}case"strong":{a+=i.strong(d);break}case"em":{a+=i.em(d);break}case"codespan":{a+=i.codespan(d);break}case"br":{a+=i.br(d);break}case"del":{a+=i.del(d);break}case"text":{a+=i.text(d);break}default:{let f='Token with "'+d.type+'" type was not found.';if(this.options.silent)return console.error(f),"";throw new Error(f)}}}return a}},no=class{options;block;constructor(r){this.options=r||Ir}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(r){return r}postprocess(r){return r}processAllTokens(r){return r}emStrongMask(r){return r}provideLexer(){return this.block?Dt.lex:Dt.lexInline}provideParser(){return this.block?$t.parse:$t.parseInline}},H0=class{defaults=cu();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=$t;Renderer=Ka;TextRenderer=yu;Lexer=Dt;Tokenizer=Za;Hooks=no;constructor(...r){this.use(...r)}walkTokens(r,n){let i=[];for(let a of r)switch(i=i.concat(n.call(this,a)),a.type){case"table":{let s=a;for(let c of s.header)i=i.concat(this.walkTokens(c.tokens,n));for(let c of s.rows)for(let d of c)i=i.concat(this.walkTokens(d.tokens,n));break}case"list":{let s=a;i=i.concat(this.walkTokens(s.items,n));break}default:{let s=a;this.defaults.extensions?.childTokens?.[s.type]?this.defaults.extensions.childTokens[s.type].forEach(c=>{let d=s[c].flat(1/0);i=i.concat(this.walkTokens(d,n))}):s.tokens&&(i=i.concat(this.walkTokens(s.tokens,n)))}}return i}use(...r){let n=this.defaults.extensions||{renderers:{},childTokens:{}};return r.forEach(i=>{let a={...i};if(a.async=this.defaults.async||a.async||!1,i.extensions&&(i.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){let c=n.renderers[s.name];c?n.renderers[s.name]=function(...d){let f=s.renderer.apply(this,d);return f===!1&&(f=c.apply(this,d)),f}:n.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let c=n[s.level];c?c.unshift(s.tokenizer):n[s.level]=[s.tokenizer],s.start&&(s.level==="block"?n.startBlock?n.startBlock.push(s.start):n.startBlock=[s.start]:s.level==="inline"&&(n.startInline?n.startInline.push(s.start):n.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(n.childTokens[s.name]=s.childTokens)}),a.extensions=n),i.renderer){let s=this.defaults.renderer||new Ka(this.defaults);for(let c in i.renderer){if(!(c in s))throw new Error(`renderer '${c}' does not exist`);if(["options","parser"].includes(c))continue;let d=c,f=i.renderer[d],p=s[d];s[d]=(...m)=>{let v=f.apply(s,m);return v===!1&&(v=p.apply(s,m)),v||""}}a.renderer=s}if(i.tokenizer){let s=this.defaults.tokenizer||new Za(this.defaults);for(let c in i.tokenizer){if(!(c in s))throw new Error(`tokenizer '${c}' does not exist`);if(["options","rules","lexer"].includes(c))continue;let d=c,f=i.tokenizer[d],p=s[d];s[d]=(...m)=>{let v=f.apply(s,m);return v===!1&&(v=p.apply(s,m)),v}}a.tokenizer=s}if(i.hooks){let s=this.defaults.hooks||new no;for(let c in i.hooks){if(!(c in s))throw new Error(`hook '${c}' does not exist`);if(["options","block"].includes(c))continue;let d=c,f=i.hooks[d],p=s[d];no.passThroughHooks.has(c)?s[d]=m=>{if(this.defaults.async&&no.passThroughHooksRespectAsync.has(c))return(async()=>{let b=await f.call(s,m);return p.call(s,b)})();let v=f.call(s,m);return p.call(s,v)}:s[d]=(...m)=>{if(this.defaults.async)return(async()=>{let b=await f.apply(s,m);return b===!1&&(b=await p.apply(s,m)),b})();let v=f.apply(s,m);return v===!1&&(v=p.apply(s,m)),v}}a.hooks=s}if(i.walkTokens){let s=this.defaults.walkTokens,c=i.walkTokens;a.walkTokens=function(d){let f=[];return f.push(c.call(this,d)),s&&(f=f.concat(s.call(this,d))),f}}this.defaults={...this.defaults,...a}}),this}setOptions(r){return this.defaults={...this.defaults,...r},this}lexer(r,n){return Dt.lex(r,n??this.defaults)}parser(r,n){return $t.parse(r,n??this.defaults)}parseMarkdown(r){return(n,i)=>{let a={...i},s={...this.defaults,...a},c=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&a.async===!1)return c(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(s.hooks&&(s.hooks.options=s,s.hooks.block=r),s.async)return(async()=>{let d=s.hooks?await s.hooks.preprocess(n):n,f=await(s.hooks?await s.hooks.provideLexer():r?Dt.lex:Dt.lexInline)(d,s),p=s.hooks?await s.hooks.processAllTokens(f):f;s.walkTokens&&await Promise.all(this.walkTokens(p,s.walkTokens));let m=await(s.hooks?await s.hooks.provideParser():r?$t.parse:$t.parseInline)(p,s);return s.hooks?await s.hooks.postprocess(m):m})().catch(c);try{s.hooks&&(n=s.hooks.preprocess(n));let d=(s.hooks?s.hooks.provideLexer():r?Dt.lex:Dt.lexInline)(n,s);s.hooks&&(d=s.hooks.processAllTokens(d)),s.walkTokens&&this.walkTokens(d,s.walkTokens);let f=(s.hooks?s.hooks.provideParser():r?$t.parse:$t.parseInline)(d,s);return s.hooks&&(f=s.hooks.postprocess(f)),f}catch(d){return c(d)}}}onError(r,n){return i=>{if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,r){let a="<p>An error occurred:</p><pre>"+bn(i.message+"",!0)+"</pre>";return n?Promise.resolve(a):a}if(n)return Promise.reject(i);throw i}}},kr=new H0;function Re(r,n){return kr.parse(r,n)}Re.options=Re.setOptions=function(r){return kr.setOptions(r),Re.defaults=kr.defaults,jm(Re.defaults),Re};Re.getDefaults=cu;Re.defaults=Ir;Re.use=function(...r){return kr.use(...r),Re.defaults=kr.defaults,jm(Re.defaults),Re};Re.walkTokens=function(r,n){return kr.walkTokens(r,n)};Re.parseInline=kr.parseInline;Re.Parser=$t;Re.parser=$t.parse;Re.Renderer=Ka;Re.TextRenderer=yu;Re.Lexer=Dt;Re.lexer=Dt.lex;Re.Tokenizer=Za;Re.Hooks=no;Re.parse=Re;Re.options;Re.setOptions;Re.use;Re.walkTokens;Re.parseInline;$t.parse;Dt.lex;const U0=Object.assign({"../../../content/writing/2026/Capital-can-move-faster-than-judgment.md":Yk,"../../../content/writing/2026/Global-mobility-isnt-freedom-its.md":Zk,"../../../content/writing/2026/How-we-think-about-global-mobility.md":Kk,"../../../content/writing/2026/Tax-efficiency-is-a-tactic-continuity.md":Qk,"../../../content/writing/2026/The-first-governance-question-most.md":Jk,"../../../content/writing/2026/The-problem-with-optimizing-capital.md":Xk,"../../../content/writing/2026/Why Capital Alone No Longer Creates Advantage.md":ex,"../../../content/writing/2026/Why-optionality-collapses-without.md":tx,"../../../content/writing/2026/alignment-is-cheaper-than-repair.md":nx,"../../../content/writing/2026/compliance-is-not-a-checkbox.md":rx,"../../../content/writing/2026/compounding-or-corroding-structural-breakdown.md":ix,"../../../content/writing/2026/family-day-founders-missing-quarterback.md":ox,"../../../content/writing/2026/fast-growth-fragile-foundations.md":ax,"../../../content/writing/2026/hidden-cost-of-pretending-its-simple.md":sx,"../../../content/writing/2026/if-your-startup-cant-run-without-you.md":lx,"../../../content/writing/2026/just-because-market-is-there.md":cx,"../../../content/writing/2026/problem-optimizing-capital-before-you-understand-its-role-jerome-l73wc.md":ux,"../../../content/writing/2026/scaling-across-borders-without-structural-literacy.md":dx,"../../../content/writing/2026/scaling-is-a-stress-test.md":hx,"../../../content/writing/2026/sophisticated-investors-dont-optimize-for-returns.md":fx,"../../../content/writing/2026/why-brilliant-teams-build-inefficient-companies.md":px,"../../../content/writing/Archive/2019 and pre/fuelling-fire-alban-jerome.md":mx,"../../../content/writing/Archive/2019 and pre/ideate-innovate-generate-alban-jerome.md":gx,"../../../content/writing/Archive/2019 and pre/stone-soup-alban-jerome.md":yx,"../../../content/writing/Archive/2023/Thinking tools or Thinking Machine 1.0.md":vx,"../../../content/writing/Archive/2023/thinking-tools-machine-10-alban-jerome-0krkc.md":wx,"../../../content/writing/Archive/2024/A Million Neural Connections and Limitless Possibilities .md":bx,"../../../content/writing/Archive/2024/art-algorithm-alban-jerome-tfqoc.md":kx,"../../../content/writing/Archive/2024/cleaning-house-targeted-protein-degradation-alban-jerome-ynkwc.md":xx,"../../../content/writing/Archive/2024/future-our-minds-literally-alban-jerome-cw6vc.md":Tx,"../../../content/writing/Archive/2025/Change isn’t coming. It’s already here..md":_x,"../../../content/writing/Archive/2025/Join the Future of Learning.md":Sx,"../../../content/writing/Archive/2025/Making It Work for Every Student.md":Ix,"../../../content/writing/Archive/2025/The Future Is Now.md":Ax,"../../../content/writing/Archive/2025/Why Schools Need to Change Now.md":Cx,"../../../content/writing/Archive/2025/ai-human-learning-wont-replace-teachers-alban-jerome-vg3sc.md":Ex,"../../../content/writing/Archive/2025/beyond-iq-why-9-intelligences-matter-more-than-grades-alban-jerome-dw4lc.md":jx,"../../../content/writing/Archive/2025/beyond-valuations-metrics-truly-matter-startup-success-alban-jerome-2wdsc.md":Nx,"../../../content/writing/Archive/2025/biggest-mistakes-founders-make-first-year-alban-jerome-xp81c.md":Rx,"../../../content/writing/Archive/2025/classrooms-full-data-wisdom-alban-jerome-v8psc.md":Px,"../../../content/writing/Archive/2025/education-human-rightbut-equally-humanizing-alban-jerome-h7qkc.md":zx,"../../../content/writing/Archive/2025/education-learning-why-market-longer-hires-just-degrees-alban-jerome-zgv3c.md":Lx,"../../../content/writing/Archive/2025/education-system-failing-founders-alban-jerome-nbsjc.md":Wx,"../../../content/writing/Archive/2025/education-system-isnt-brokenits-just-outdated-alban-jerome-6mxgc.md":Mx,"../../../content/writing/Archive/2025/engineer-doctor-lawyerand-everyone-were-leaving-behind-alban-jerome-nuqcf.md":Ox,"../../../content/writing/Archive/2025/from-confucian-chatgpts-alban-jerome-2ggfc.md":Fx,"../../../content/writing/Archive/2025/hidden-advantage-generational-wealth-education-alban-jerome-1fw2c.md":Bx,"../../../content/writing/Archive/2025/hidden-curriculum-obedience-over-curiosity-alban-jerome-2xrcc.md":Dx,"../../../content/writing/Archive/2025/how-fundraising-distracts-startup-success-alban-jerome-tihic.md":$x,"../../../content/writing/Archive/2025/local-roots-global-reach-how-canadian-innovations-have-alban-jerome-r7gec.md":qx,"../../../content/writing/Archive/2025/standardization-killing-creativity-alban-jerome-d5dzc.md":Hx,"../../../content/writing/Archive/2025/we-teach-algebra-how-file-taxeswhy-alban-jerome-rvmtc.md":Ux,"../../../content/writing/Archive/2025/were-failing-right-alban-jerome-bsxqc.md":Vx,"../../../content/writing/Archive/2025/what-hybrid-learning-look-like-alban-jerome-bqyqc.md":Gx,"../../../content/writing/Archive/2025/what-we-dont-realize-how-kids-learn-best-alban-jerome-u1whc.md":Yx,"../../../content/writing/Archive/2025/why-current-k-12-system-fails-prepare-kids-future-alban-jerome-rqwnc.md":Zx,"../../../content/writing/Archive/2025/why-do-smart-students-struggle-real-life-skills-alban-jerome-q0hac.md":Kx,"../../../content/writing/Archive/2025/you-got-bagnow-dont-blow-alban-jerome-xgawc.md":Qx}),V0=Object.assign({"../../../content/pages/about.md":Jx,"../../../content/pages/contact.md":Xx,"../../../content/pages/media.md":e0,"../../../content/pages/now.md":t0});function G0(r){let n=r;const i=n.match(/^```(?:markdown|md|yaml|text)?\s*\n/);return i&&(n=n.slice(i[0].length)),n=n.replace(/\n```\s*$/,""),n}function Y0(r){return r.replace(/^(---\n)([\s\S]*?)\n---/m,(n,i,a)=>{const s=a.replace(/^(\w[\w_]*):([\S])/gm,"$1: $2");return i+s+`
---`})}function $m(r){const n=Y0(G0(r)),i=n.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);if(!i)return{data:{},content:n};const a=i[1],s=i[2],c={};for(const d of a.split(`
`)){const f=d.indexOf(":");if(f===-1)continue;const p=d.slice(0,f).trim();let m=d.slice(f+1).trim();(m.startsWith('"')&&m.endsWith('"')||m.startsWith("'")&&m.endsWith("'"))&&(m=m.slice(1,-1)),m==="true"?c[p]=!0:m==="false"?c[p]=!1:c[p]=m}return{data:c,content:s}}function Z0(r){return r.replace(/\.md$/,"").replace(/\s+/g,"-").toLowerCase()}function K0(r){return r.replace(/\.md$/,"").replace(/-alban-jerome.*$/,"").replace(/-/g," ").replace(/\b\w/g,i=>i.toUpperCase()).trim()}function Q0(r){const n=r.toLowerCase();return n.includes("/archive/")||n.includes("/archive\\")?"archive":"current"}function J0(){const r=[];for(const[n,i]of Object.entries(U0))try{const a=n.split("/").pop()||"",{data:s,content:c}=$m(i),d=Re.parse(c,{async:!1}),f=s.date||s.original_publish_date||"",p=s.title||K0(a);r.push({slug:Z0(a),title:p,date:typeof f=="string"?f:String(f),source:s.source||"",original_publish_date:s.original_publish_date||"",original_url:s.original_url||"",status:Q0(n),theme:s.theme||"",featured:s.featured===!0||s.featured==="true",content:c,html:d})}catch(a){console.error(`Error parsing ${n}:`,a)}return r.sort((n,i)=>{const a=n.date?new Date(n.date).getTime():0,s=i.date?new Date(i.date).getTime():0;return isNaN(a)&&isNaN(s)?0:isNaN(a)?1:isNaN(s)?-1:s-a}),r}function X0(){const r=[];for(const[n,i]of Object.entries(V0))try{const s=(n.split("/").pop()||"").replace(/\.md$/,""),{data:c,content:d}=$m(i),f=Re.parse(d,{async:!1});r.push({slug:s,title:c.title||s,description:c.description||"",content:d,html:f})}catch(a){console.error(`Error parsing page ${n}:`,a)}return r}const Qn=J0(),eT=X0();function tT(){return Qn}function qm(r){return Qn.find(n=>n.slug===r)}function nT(){const r=Qn.filter(n=>n.featured);return r.length>0?r.slice(0,5):Qn.filter(n=>n.status==="current").slice(0,5)}function rT(r){return Qn.filter(n=>n.theme.toLowerCase()===r.toLowerCase())}function iT(r){const n=qm(r);if(!n)return[];const i=Qn.filter(a=>a.slug!==r);if(n.theme){const a=i.filter(s=>s.theme===n.theme);if(a.length>0)return a.slice(0,3)}return i.slice(0,3)}function Hm(){const r=Qn.filter(i=>i.status==="archive"),n=new Map;for(const i of r){const a=i.date?new Date(i.date):null;if(!a||isNaN(a.getTime()))continue;const s=a.getFullYear();n.set(s,(n.get(s)||0)+1)}return Array.from(n.entries()).map(([i,a])=>({year:i,count:a})).sort((i,a)=>a.year-i.year)}function oT(r){return Qn.filter(n=>{const i=n.date?new Date(n.date):null;return i&&!isNaN(i.getTime())&&i.getFullYear()===r})}function vu(r){return eT.find(n=>n.slug===r)}function aT(){const r=nT();ln({title:"Alban Jerome",description:"Writing and analysis at the intersection of cross-border capital flows, institutional design, and the networks that connect them.",ogType:"website"});const n=r[0]||null,i=r.slice(1,5),a=s=>{const c=new Date(s);return isNaN(c.getTime())?null:c.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})};return y.jsx(Rt,{children:y.jsxs("div",{className:"max-w-3xl mx-auto px-6 md:px-8",children:[y.jsx("section",{className:"py-14 md:py-20",children:y.jsxs("div",{className:"flex flex-col md:flex-row items-start gap-8",children:[y.jsxs("div",{className:"flex-1",children:[y.jsx("h1",{className:"font-serif text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-4","data-testid":"text-hero-headline",children:"Structure is what satisfies when everything else shifts."}),y.jsx("p",{className:"text-base text-muted-foreground leading-relaxed max-w-lg mb-8","data-testid":"text-hero-subhead",children:"Writing on capital, governance, cross-border complexity, and the systems that carry them."})]}),y.jsx(Gk,{size:"lg"})]})}),y.jsx("div",{className:"w-full h-px bg-border"}),y.jsxs("section",{className:"py-12",children:[y.jsxs("div",{className:"flex items-center justify-between gap-4 mb-8",children:[y.jsx("h2",{className:"font-serif text-lg font-bold text-foreground tracking-tight","data-testid":"text-featured-heading",children:"Featured Writing"}),y.jsx(Ke,{href:"/writing","data-testid":"link-all-writing",children:y.jsxs("span",{className:"text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1",children:["All writing ",y.jsx(qa,{className:"w-3 h-3"})]})})]}),n?y.jsxs("div",{children:[y.jsxs("article",{className:"mb-8","data-testid":"featured-article",children:[y.jsx(Ke,{href:`/writing/${n.slug}`,children:y.jsx("h3",{className:"font-serif text-xl md:text-2xl font-bold tracking-tight text-foreground leading-snug mb-2 hover:text-primary transition-colors cursor-pointer","data-testid":"text-featured-title",children:n.title})}),y.jsxs("div",{className:"flex items-center gap-3 flex-wrap mb-3",children:[n.date&&a(n.date)&&y.jsx("time",{className:"text-xs text-muted-foreground",children:a(n.date)}),n.source&&y.jsxs(y.Fragment,{children:[y.jsx("span",{className:"text-muted-foreground/40 text-xs",children:"|"}),y.jsx("span",{className:"text-xs text-muted-foreground",children:n.source})]})]}),n.content&&y.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed line-clamp-3","data-testid":"text-featured-excerpt",children:sT(n.content)})]}),i.length>0&&y.jsx("div",{className:"border-t border-border pt-6",children:i.map(s=>y.jsx("article",{className:"py-3 group","data-testid":`secondary-post-${s.slug}`,children:y.jsxs("div",{className:"flex items-baseline justify-between gap-4",children:[y.jsx(Ke,{href:`/writing/${s.slug}`,children:y.jsx("h4",{className:"font-serif text-base leading-snug text-foreground group-hover:text-primary transition-colors cursor-pointer","data-testid":`text-post-title-${s.slug}`,children:s.title})}),s.date&&a(s.date)&&y.jsx("time",{className:"text-xs text-muted-foreground whitespace-nowrap flex-shrink-0",children:a(s.date)})]})},s.slug))})]}):y.jsx("p",{className:"text-sm text-muted-foreground py-8","data-testid":"text-no-posts",children:"No posts yet."}),y.jsx("div",{className:"mt-8 pt-6 border-t border-border",children:y.jsx(Ke,{href:"/archive","data-testid":"link-archive-home",children:y.jsxs("span",{className:"text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1",children:["Browse the archive ",y.jsx(qa,{className:"w-3 h-3"})]})})})]})]})})}function sT(r){const i=r.split(`
`).map(a=>a.trim()).filter(a=>a&&!a.startsWith("#")&&!a.startsWith("*Written in")&&!a.startsWith("---")&&!a.startsWith("![")).slice(0,3).join(" ");return i.length>240?i.slice(0,240).replace(/\s+\S*$/,"")+"...":i}function ws({post:r}){const n=r.date?new Date(r.date):null,i=n&&!isNaN(n.getTime())?n.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):null;return y.jsx("article",{className:"group py-5","data-testid":`post-item-${r.slug}`,children:y.jsxs("div",{className:"flex flex-col gap-1.5",children:[y.jsxs("div",{className:"flex items-start justify-between gap-4",children:[y.jsx(Ke,{href:`/writing/${r.slug}`,children:y.jsx("h3",{className:"font-serif text-base md:text-lg leading-snug text-foreground group-hover:text-primary transition-colors cursor-pointer","data-testid":`text-post-title-${r.slug}`,children:r.title})}),y.jsx(Nw,{className:"w-4 h-4 mt-1 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"})]}),y.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[i&&y.jsx("time",{className:"text-xs text-muted-foreground","data-testid":`text-post-date-${r.slug}`,children:i}),r.source&&y.jsxs(y.Fragment,{children:[y.jsx("span",{className:"text-muted-foreground/40 text-xs",children:"|"}),y.jsx("span",{className:"text-xs text-muted-foreground",children:r.source})]}),r.theme&&y.jsxs(y.Fragment,{children:[y.jsx("span",{className:"text-muted-foreground/40 text-xs",children:"|"}),y.jsx(Ke,{href:`/themes/${encodeURIComponent(r.theme)}`,children:y.jsx("span",{className:"text-xs text-accent hover:underline cursor-pointer","data-testid":`link-theme-${r.theme}`,children:r.theme})})]})]})]})})}function lT(){const[r,n]=_.useState(""),i=tT(),a=Hm();ln({title:"Writing",description:"Analysis and commentary on capital, governance, and cross-border networks."});const s=i.filter(d=>d.status==="current"),c=r?s.filter(d=>d.title.toLowerCase().includes(r.toLowerCase())):s;return y.jsx(Rt,{children:y.jsxs("div",{className:"max-w-3xl mx-auto px-6 md:px-8 py-12",children:[y.jsx("h1",{className:"font-serif text-3xl font-bold tracking-tight text-foreground mb-2","data-testid":"text-writing-title",children:"Writing"}),y.jsx("p",{className:"text-sm text-muted-foreground mb-10","data-testid":"text-writing-subtitle",children:"Analysis and commentary on capital, governance, and cross-border networks."}),y.jsxs("div",{className:"relative mb-10",children:[y.jsx(zw,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"}),y.jsx("input",{type:"search",placeholder:"Search by title...",value:r,onChange:d=>n(d.target.value),className:"w-full pl-10 pr-4 py-2.5 text-sm bg-transparent border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-ring placeholder:text-muted-foreground/60","data-testid":"input-search"})]}),y.jsxs("section",{className:"mb-12",children:[y.jsx("h2",{className:"text-xs uppercase tracking-widest text-muted-foreground font-medium mb-1","data-testid":"text-current-label",children:"Current"}),y.jsx("div",{className:"h-px bg-accent/30 mb-4"}),c.length>0?y.jsx("div",{className:"divide-y divide-border",children:c.map(d=>y.jsx(ws,{post:d},d.slug))}):y.jsx("p",{className:"text-sm text-muted-foreground py-6","data-testid":"text-no-results",children:r?"No posts matching your search.":"No current posts."})]}),y.jsxs("section",{children:[y.jsx("h2",{className:"text-xs uppercase tracking-widest text-muted-foreground font-medium mb-1","data-testid":"text-archive-label",children:"Archive"}),y.jsx("div",{className:"h-px bg-accent/30 mb-4"}),a.length>0?y.jsx("div",{className:"flex items-center gap-4 flex-wrap",children:a.map(d=>y.jsx(Ke,{href:`/archive/${d.year}`,"data-testid":`link-archive-year-${d.year}`,children:y.jsxs("span",{className:"text-sm text-muted-foreground hover:text-foreground transition-colors",children:[d.year," ",y.jsxs("span",{className:"text-muted-foreground/50",children:["(",d.count,")"]})]})},d.year))}):y.jsx("p",{className:"text-sm text-muted-foreground",children:"No archived posts."})]})]})})}function yr({html:r}){return y.jsx("div",{className:`prose prose-sm md:prose-base dark:prose-invert max-w-none
        prose-headings:font-serif prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
        prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4
        prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3
        prose-p:text-foreground/85 prose-p:leading-relaxed
        prose-li:text-foreground/85
        prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:font-medium
        prose-strong:text-foreground prose-strong:font-semibold
        prose-blockquote:border-l-accent prose-blockquote:text-muted-foreground prose-blockquote:italic
        prose-hr:border-border
        prose-em:text-muted-foreground
        prose-ol:text-foreground/85 prose-ul:text-foreground/85`,dangerouslySetInnerHTML:{__html:r},"data-testid":"markdown-content"})}function cT(){const r=os(),n=qm(r.slug||""),i=n?iT(r.slug||""):[];if(ln({title:n?.title||"Post",description:n?`${n.title} — ${n.source||"Alban Jerome"}`:"Post not found.",ogType:"article"}),!n)return y.jsx(Rt,{children:y.jsxs("div",{className:"max-w-3xl mx-auto px-6 md:px-8 py-16 text-center",children:[y.jsx("h1",{className:"font-serif text-2xl font-bold text-foreground mb-4","data-testid":"text-post-not-found",children:"Post not found"}),y.jsx(Ke,{href:"/writing","data-testid":"link-back-writing",children:y.jsx("span",{className:"text-sm text-muted-foreground hover:text-foreground transition-colors",children:"Back to writing"})})]})});const a=n.date?new Date(n.date):null,s=a&&!isNaN(a.getTime())?a.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):null,c=n.original_publish_date?new Date(n.original_publish_date):null,d=c&&!isNaN(c.getTime())?c.getFullYear():null;return y.jsx(Rt,{children:y.jsxs("article",{className:"max-w-3xl mx-auto px-6 md:px-8 py-12",children:[y.jsx(Ke,{href:"/writing","data-testid":"link-back-to-writing",children:y.jsxs("span",{className:"text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 mb-8 inline-flex",children:[y.jsx(Jc,{className:"w-3 h-3"})," Writing"]})}),y.jsxs("header",{className:"mb-10",children:[y.jsx("h1",{className:"font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground leading-tight mb-4","data-testid":"text-post-title",children:n.title}),y.jsxs("div",{className:"flex items-center gap-3 flex-wrap text-xs text-muted-foreground",children:[s&&y.jsx("time",{"data-testid":"text-post-date",children:s}),n.source&&y.jsxs(y.Fragment,{children:[y.jsx("span",{className:"text-muted-foreground/40",children:"|"}),y.jsx("span",{children:n.source})]}),n.theme&&y.jsxs(y.Fragment,{children:[y.jsx("span",{className:"text-muted-foreground/40",children:"|"}),y.jsx(Ke,{href:`/themes/${encodeURIComponent(n.theme)}`,children:y.jsx("span",{className:"text-accent hover:underline",children:n.theme})})]})]}),n.original_url&&y.jsxs("a",{href:n.original_url,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 mt-3 text-xs text-primary hover:underline","data-testid":"link-original-url",children:["Read original ",y.jsx(Rw,{className:"w-3 h-3"})]}),n.status==="archive"&&d&&y.jsxs("div",{className:"mt-4 px-3 py-2 border border-border rounded-md bg-muted/50 text-xs text-muted-foreground","data-testid":"text-archive-notice",children:["Archived writing (originally published ",d,")."]})]}),y.jsx("div",{className:"h-px bg-accent/30 mb-10"}),y.jsx(yr,{html:n.html}),i.length>0&&y.jsxs("section",{className:"mt-16 pt-10 border-t border-border",children:[y.jsx("h2",{className:"text-xs uppercase tracking-widest text-muted-foreground font-medium mb-4","data-testid":"text-related-label",children:"Related"}),y.jsx("div",{className:"divide-y divide-border",children:i.map(f=>y.jsx(ws,{post:f},f.slug))})]})]})})}function uT(r){const n=r.split(/(?=<p>|<ul>)/),i=n.findIndex(f=>f.includes("My work spans two interconnected arenas")),a=n.findIndex(f=>f.includes("I tend to write and think in frameworks"));if(i===-1||a===-1)return{opening:r,focus:"",secondary:""};const s=n.slice(0,i).join(""),c=n.slice(i,a).join(""),d=n.slice(a).join("");return{opening:s,focus:c,secondary:d}}function dT(){const r=vu("about");ln({title:"About",description:"About Alban Jerome — capital, governance, and cross-border networks."});const n=r?uT(r.html):null;return y.jsx(Rt,{children:y.jsx("div",{className:"max-w-4xl mx-auto px-6 md:px-8 py-12",children:y.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-[1fr_200px] gap-x-12 gap-y-8",children:[y.jsx("div",{className:"md:col-span-2",children:y.jsx("h1",{className:"font-serif text-3xl font-bold tracking-tight text-foreground","data-testid":"text-about-title",children:"About Me"})}),y.jsx("div",{"data-testid":"section-about-opening",children:n?.opening&&y.jsx(yr,{html:n.opening})}),y.jsx("div",{className:"flex justify-start md:justify-end","data-testid":"img-about-headshot",children:y.jsx("div",{className:"w-40 h-48 md:w-[200px] md:h-[240px] rounded-md border border-border/50 bg-muted dark:bg-[hsl(220,15%,18%)] dark:border-[hsl(220,12%,28%)] overflow-hidden flex-shrink-0",children:y.jsx("img",{src:"/images/Alban Jerome.png",alt:"Alban Jerome",className:"w-full h-full object-cover"})})}),y.jsx("div",{className:"md:col-span-2 border-t border-border pt-8","data-testid":"section-about-focus",children:n?.focus&&y.jsx(yr,{html:n.focus})}),y.jsx("div",{className:"md:col-span-2 border-t border-border pt-8","data-testid":"section-about-secondary",children:n?.secondary&&y.jsx(yr,{html:n.secondary})})]})})})}function hT(){return y.jsx("a",{href:"https://www.linkedin.com/in/albanjerome",target:"_blank",rel:"noopener noreferrer",className:"block","data-testid":"link-linkedin-card",children:y.jsxs("div",{className:"flex items-center gap-5 p-4 border border-border rounded-md hover-elevate transition-colors",children:[y.jsx("div",{className:"w-16 h-16 rounded-md border border-border/50 bg-muted dark:bg-[hsl(220,15%,18%)] dark:border-[hsl(220,12%,28%)] flex items-center justify-center overflow-hidden flex-shrink-0",children:y.jsx("img",{src:"/images/Alban Jerome.png",alt:"Alban Jerome",className:"w-full h-full object-cover"})}),y.jsxs("div",{className:"flex-1 min-w-0",children:[y.jsx("p",{className:"font-serif text-base font-semibold text-foreground","data-testid":"text-linkedin-name",children:"Alban Jerome"}),y.jsxs("p",{className:"text-xs text-muted-foreground mt-0.5",children:["LinkedIn · ",y.jsx("span",{className:"text-muted-foreground/60",children:"linkedin.com/in/albanjerome"})]}),y.jsx("p",{className:"text-xs text-muted-foreground/80 leading-relaxed mt-2","data-testid":"text-linkedin-intent",children:"LinkedIn tends to host shorter, situational observations drawn from current capital environments."})]})]})})}function fT(){return y.jsx("a",{href:"https://albanjerome.substack.com",target:"_blank",rel:"noopener noreferrer",className:"block","data-testid":"link-substack-card",children:y.jsxs("div",{className:"p-6 border border-border rounded-md hover-elevate transition-colors",children:[y.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[y.jsx("div",{className:"w-10 h-10 rounded-md border border-border/50 bg-muted dark:bg-[hsl(220,15%,18%)] dark:border-[hsl(220,12%,28%)] flex items-center justify-center overflow-hidden flex-shrink-0",children:y.jsx("img",{src:"/images/AJ .png",alt:"Alban Jerome — Writing",className:"w-full h-full object-contain"})}),y.jsxs("div",{children:[y.jsx("p",{className:"font-serif text-sm font-semibold text-foreground","data-testid":"text-substack-name",children:"Alban Jerome"}),y.jsxs("p",{className:"text-[11px] text-muted-foreground mt-0.5",children:["Substack · ",y.jsx("span",{className:"text-muted-foreground/60",children:"albanjerome.substack.com"})]})]})]}),y.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed","data-testid":"text-substack-intent",children:"Substack is where I develop longer-form thinking around governance, venture architecture, cross-border structuring, and institutional durability."})]})})}function pT(){const r=vu("contact");ln({title:"Contact",description:"Get in touch with Alban Jerome."});const n=r?mT(r.html):null;return y.jsx(Rt,{children:y.jsxs("div",{className:"max-w-3xl mx-auto px-6 md:px-8 py-12",children:[y.jsx("h1",{className:"font-serif text-3xl font-bold tracking-tight text-foreground mb-10","data-testid":"text-contact-title",children:"Get in touch"}),n&&y.jsxs(y.Fragment,{children:[n.before&&y.jsx(yr,{html:n.before}),y.jsxs("div",{className:"my-8 flex flex-col gap-5",children:[y.jsx(hT,{}),y.jsx(fT,{})]}),n.after&&y.jsx(yr,{html:n.after})]})]})})}function mT(r){const n=/<p><strong>LinkedIn<\/strong>[\s\S]*?<\/p>/i,i=r.match(n);if(!i)return{before:r,after:""};const a=r.indexOf(i[0]);let s=r.slice(0,a),c=r.slice(a+i[0].length);const d=/<p><strong>Substack<\/strong>[\s\S]*?<\/p>/i,f=c.match(d);f&&(c=c.slice(c.indexOf(f[0])+f[0].length));const p=/<p>I write regularly in both places\.<\/p>/i;c=c.replace(p,"");const m=/<p>LinkedIn tends to host shorter[\s\S]*?institutional durability\.<\/p>/i;return c=c.replace(m,""),{before:s.trim(),after:c.trim()}}var Ie;(function(r){r.assertEqual=s=>s;function n(s){}r.assertIs=n;function i(s){throw new Error}r.assertNever=i,r.arrayToEnum=s=>{const c={};for(const d of s)c[d]=d;return c},r.getValidEnumValues=s=>{const c=r.objectKeys(s).filter(f=>typeof s[s[f]]!="number"),d={};for(const f of c)d[f]=s[f];return r.objectValues(d)},r.objectValues=s=>r.objectKeys(s).map(function(c){return s[c]}),r.objectKeys=typeof Object.keys=="function"?s=>Object.keys(s):s=>{const c=[];for(const d in s)Object.prototype.hasOwnProperty.call(s,d)&&c.push(d);return c},r.find=(s,c)=>{for(const d of s)if(c(d))return d},r.isInteger=typeof Number.isInteger=="function"?s=>Number.isInteger(s):s=>typeof s=="number"&&isFinite(s)&&Math.floor(s)===s;function a(s,c=" | "){return s.map(d=>typeof d=="string"?`'${d}'`:d).join(c)}r.joinValues=a,r.jsonStringifyReplacer=(s,c)=>typeof c=="bigint"?c.toString():c})(Ie||(Ie={}));var Dc;(function(r){r.mergeShapes=(n,i)=>({...n,...i})})(Dc||(Dc={}));const J=Ie.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),xn=r=>{switch(typeof r){case"undefined":return J.undefined;case"string":return J.string;case"number":return isNaN(r)?J.nan:J.number;case"boolean":return J.boolean;case"function":return J.function;case"bigint":return J.bigint;case"symbol":return J.symbol;case"object":return Array.isArray(r)?J.array:r===null?J.null:r.then&&typeof r.then=="function"&&r.catch&&typeof r.catch=="function"?J.promise:typeof Map<"u"&&r instanceof Map?J.map:typeof Set<"u"&&r instanceof Set?J.set:typeof Date<"u"&&r instanceof Date?J.date:J.object;default:return J.unknown}},B=Ie.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),gT=r=>JSON.stringify(r,null,2).replace(/"([^"]+)":/g,"$1:");class St extends Error{get errors(){return this.issues}constructor(n){super(),this.issues=[],this.addIssue=a=>{this.issues=[...this.issues,a]},this.addIssues=(a=[])=>{this.issues=[...this.issues,...a]};const i=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,i):this.__proto__=i,this.name="ZodError",this.issues=n}format(n){const i=n||function(c){return c.message},a={_errors:[]},s=c=>{for(const d of c.issues)if(d.code==="invalid_union")d.unionErrors.map(s);else if(d.code==="invalid_return_type")s(d.returnTypeError);else if(d.code==="invalid_arguments")s(d.argumentsError);else if(d.path.length===0)a._errors.push(i(d));else{let f=a,p=0;for(;p<d.path.length;){const m=d.path[p];p===d.path.length-1?(f[m]=f[m]||{_errors:[]},f[m]._errors.push(i(d))):f[m]=f[m]||{_errors:[]},f=f[m],p++}}};return s(this),a}static assert(n){if(!(n instanceof St))throw new Error(`Not a ZodError: ${n}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,Ie.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(n=i=>i.message){const i={},a=[];for(const s of this.issues)s.path.length>0?(i[s.path[0]]=i[s.path[0]]||[],i[s.path[0]].push(n(s))):a.push(n(s));return{formErrors:a,fieldErrors:i}}get formErrors(){return this.flatten()}}St.create=r=>new St(r);const ai=(r,n)=>{let i;switch(r.code){case B.invalid_type:r.received===J.undefined?i="Required":i=`Expected ${r.expected}, received ${r.received}`;break;case B.invalid_literal:i=`Invalid literal value, expected ${JSON.stringify(r.expected,Ie.jsonStringifyReplacer)}`;break;case B.unrecognized_keys:i=`Unrecognized key(s) in object: ${Ie.joinValues(r.keys,", ")}`;break;case B.invalid_union:i="Invalid input";break;case B.invalid_union_discriminator:i=`Invalid discriminator value. Expected ${Ie.joinValues(r.options)}`;break;case B.invalid_enum_value:i=`Invalid enum value. Expected ${Ie.joinValues(r.options)}, received '${r.received}'`;break;case B.invalid_arguments:i="Invalid function arguments";break;case B.invalid_return_type:i="Invalid function return type";break;case B.invalid_date:i="Invalid date";break;case B.invalid_string:typeof r.validation=="object"?"includes"in r.validation?(i=`Invalid input: must include "${r.validation.includes}"`,typeof r.validation.position=="number"&&(i=`${i} at one or more positions greater than or equal to ${r.validation.position}`)):"startsWith"in r.validation?i=`Invalid input: must start with "${r.validation.startsWith}"`:"endsWith"in r.validation?i=`Invalid input: must end with "${r.validation.endsWith}"`:Ie.assertNever(r.validation):r.validation!=="regex"?i=`Invalid ${r.validation}`:i="Invalid";break;case B.too_small:r.type==="array"?i=`Array must contain ${r.exact?"exactly":r.inclusive?"at least":"more than"} ${r.minimum} element(s)`:r.type==="string"?i=`String must contain ${r.exact?"exactly":r.inclusive?"at least":"over"} ${r.minimum} character(s)`:r.type==="number"?i=`Number must be ${r.exact?"exactly equal to ":r.inclusive?"greater than or equal to ":"greater than "}${r.minimum}`:r.type==="date"?i=`Date must be ${r.exact?"exactly equal to ":r.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(r.minimum))}`:i="Invalid input";break;case B.too_big:r.type==="array"?i=`Array must contain ${r.exact?"exactly":r.inclusive?"at most":"less than"} ${r.maximum} element(s)`:r.type==="string"?i=`String must contain ${r.exact?"exactly":r.inclusive?"at most":"under"} ${r.maximum} character(s)`:r.type==="number"?i=`Number must be ${r.exact?"exactly":r.inclusive?"less than or equal to":"less than"} ${r.maximum}`:r.type==="bigint"?i=`BigInt must be ${r.exact?"exactly":r.inclusive?"less than or equal to":"less than"} ${r.maximum}`:r.type==="date"?i=`Date must be ${r.exact?"exactly":r.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(r.maximum))}`:i="Invalid input";break;case B.custom:i="Invalid input";break;case B.invalid_intersection_types:i="Intersection results could not be merged";break;case B.not_multiple_of:i=`Number must be a multiple of ${r.multipleOf}`;break;case B.not_finite:i="Number must be finite";break;default:i=n.defaultError,Ie.assertNever(r)}return{message:i}};let Um=ai;function yT(r){Um=r}function Qa(){return Um}const Ja=r=>{const{data:n,path:i,errorMaps:a,issueData:s}=r,c=[...i,...s.path||[]],d={...s,path:c};if(s.message!==void 0)return{...s,path:c,message:s.message};let f="";const p=a.filter(m=>!!m).slice().reverse();for(const m of p)f=m(d,{data:n,defaultError:f}).message;return{...s,path:c,message:f}},vT=[];function G(r,n){const i=Qa(),a=Ja({issueData:n,data:r.data,path:r.path,errorMaps:[r.common.contextualErrorMap,r.schemaErrorMap,i,i===ai?void 0:ai].filter(s=>!!s)});r.common.issues.push(a)}class at{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(n,i){const a=[];for(const s of i){if(s.status==="aborted")return ue;s.status==="dirty"&&n.dirty(),a.push(s.value)}return{status:n.value,value:a}}static async mergeObjectAsync(n,i){const a=[];for(const s of i){const c=await s.key,d=await s.value;a.push({key:c,value:d})}return at.mergeObjectSync(n,a)}static mergeObjectSync(n,i){const a={};for(const s of i){const{key:c,value:d}=s;if(c.status==="aborted"||d.status==="aborted")return ue;c.status==="dirty"&&n.dirty(),d.status==="dirty"&&n.dirty(),c.value!=="__proto__"&&(typeof d.value<"u"||s.alwaysSet)&&(a[c.value]=d.value)}return{status:n.value,value:a}}}const ue=Object.freeze({status:"aborted"}),ei=r=>({status:"dirty",value:r}),dt=r=>({status:"valid",value:r}),$c=r=>r.status==="aborted",qc=r=>r.status==="dirty",xr=r=>r.status==="valid",lo=r=>typeof Promise<"u"&&r instanceof Promise;function Xa(r,n,i,a){if(typeof n=="function"?r!==n||!0:!n.has(r))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n.get(r)}function Vm(r,n,i,a,s){if(typeof n=="function"?r!==n||!0:!n.has(r))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n.set(r,i),i}var re;(function(r){r.errToObj=n=>typeof n=="string"?{message:n}:n||{},r.toString=n=>typeof n=="string"?n:n?.message})(re||(re={}));var ro,io;class on{constructor(n,i,a,s){this._cachedPath=[],this.parent=n,this.data=i,this._path=a,this._key=s}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const tp=(r,n)=>{if(xr(n))return{success:!0,data:n.value};if(!r.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const i=new St(r.common.issues);return this._error=i,this._error}}};function me(r){if(!r)return{};const{errorMap:n,invalid_type_error:i,required_error:a,description:s}=r;if(n&&(i||a))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return n?{errorMap:n,description:s}:{errorMap:(d,f)=>{var p,m;const{message:v}=r;return d.code==="invalid_enum_value"?{message:v??f.defaultError}:typeof f.data>"u"?{message:(p=v??a)!==null&&p!==void 0?p:f.defaultError}:d.code!=="invalid_type"?{message:f.defaultError}:{message:(m=v??i)!==null&&m!==void 0?m:f.defaultError}},description:s}}class ve{get description(){return this._def.description}_getType(n){return xn(n.data)}_getOrReturnCtx(n,i){return i||{common:n.parent.common,data:n.data,parsedType:xn(n.data),schemaErrorMap:this._def.errorMap,path:n.path,parent:n.parent}}_processInputParams(n){return{status:new at,ctx:{common:n.parent.common,data:n.data,parsedType:xn(n.data),schemaErrorMap:this._def.errorMap,path:n.path,parent:n.parent}}}_parseSync(n){const i=this._parse(n);if(lo(i))throw new Error("Synchronous parse encountered promise.");return i}_parseAsync(n){const i=this._parse(n);return Promise.resolve(i)}parse(n,i){const a=this.safeParse(n,i);if(a.success)return a.data;throw a.error}safeParse(n,i){var a;const s={common:{issues:[],async:(a=i?.async)!==null&&a!==void 0?a:!1,contextualErrorMap:i?.errorMap},path:i?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:n,parsedType:xn(n)},c=this._parseSync({data:n,path:s.path,parent:s});return tp(s,c)}"~validate"(n){var i,a;const s={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:n,parsedType:xn(n)};if(!this["~standard"].async)try{const c=this._parseSync({data:n,path:[],parent:s});return xr(c)?{value:c.value}:{issues:s.common.issues}}catch(c){!((a=(i=c?.message)===null||i===void 0?void 0:i.toLowerCase())===null||a===void 0)&&a.includes("encountered")&&(this["~standard"].async=!0),s.common={issues:[],async:!0}}return this._parseAsync({data:n,path:[],parent:s}).then(c=>xr(c)?{value:c.value}:{issues:s.common.issues})}async parseAsync(n,i){const a=await this.safeParseAsync(n,i);if(a.success)return a.data;throw a.error}async safeParseAsync(n,i){const a={common:{issues:[],contextualErrorMap:i?.errorMap,async:!0},path:i?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:n,parsedType:xn(n)},s=this._parse({data:n,path:a.path,parent:a}),c=await(lo(s)?s:Promise.resolve(s));return tp(a,c)}refine(n,i){const a=s=>typeof i=="string"||typeof i>"u"?{message:i}:typeof i=="function"?i(s):i;return this._refinement((s,c)=>{const d=n(s),f=()=>c.addIssue({code:B.custom,...a(s)});return typeof Promise<"u"&&d instanceof Promise?d.then(p=>p?!0:(f(),!1)):d?!0:(f(),!1)})}refinement(n,i){return this._refinement((a,s)=>n(a)?!0:(s.addIssue(typeof i=="function"?i(a,s):i),!1))}_refinement(n){return new Yt({schema:this,typeName:le.ZodEffects,effect:{type:"refinement",refinement:n}})}superRefine(n){return this._refinement(n)}constructor(n){this.spa=this.safeParseAsync,this._def=n,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:i=>this["~validate"](i)}}optional(){return tn.create(this,this._def)}nullable(){return tr.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Ht.create(this)}promise(){return li.create(this,this._def)}or(n){return fo.create([this,n],this._def)}and(n){return po.create(this,n,this._def)}transform(n){return new Yt({...me(this._def),schema:this,typeName:le.ZodEffects,effect:{type:"transform",transform:n}})}default(n){const i=typeof n=="function"?n:()=>n;return new wo({...me(this._def),innerType:this,defaultValue:i,typeName:le.ZodDefault})}brand(){return new wu({typeName:le.ZodBranded,type:this,...me(this._def)})}catch(n){const i=typeof n=="function"?n:()=>n;return new bo({...me(this._def),innerType:this,catchValue:i,typeName:le.ZodCatch})}describe(n){const i=this.constructor;return new i({...this._def,description:n})}pipe(n){return So.create(this,n)}readonly(){return ko.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const wT=/^c[^\s-]{8,}$/i,bT=/^[0-9a-z]+$/,kT=/^[0-9A-HJKMNP-TV-Z]{26}$/i,xT=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,TT=/^[a-z0-9_-]{21}$/i,_T=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,ST=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,IT=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,AT="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let Ac;const CT=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,ET=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,jT=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,NT=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,RT=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,PT=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,Gm="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",zT=new RegExp(`^${Gm}$`);function Ym(r){let n="([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";return r.precision?n=`${n}\\.\\d{${r.precision}}`:r.precision==null&&(n=`${n}(\\.\\d+)?`),n}function LT(r){return new RegExp(`^${Ym(r)}$`)}function Zm(r){let n=`${Gm}T${Ym(r)}`;const i=[];return i.push(r.local?"Z?":"Z"),r.offset&&i.push("([+-]\\d{2}:?\\d{2})"),n=`${n}(${i.join("|")})`,new RegExp(`^${n}$`)}function WT(r,n){return!!((n==="v4"||!n)&&CT.test(r)||(n==="v6"||!n)&&jT.test(r))}function MT(r,n){if(!_T.test(r))return!1;try{const[i]=r.split("."),a=i.replace(/-/g,"+").replace(/_/g,"/").padEnd(i.length+(4-i.length%4)%4,"="),s=JSON.parse(atob(a));return!(typeof s!="object"||s===null||!s.typ||!s.alg||n&&s.alg!==n)}catch{return!1}}function OT(r,n){return!!((n==="v4"||!n)&&ET.test(r)||(n==="v6"||!n)&&NT.test(r))}class qt extends ve{_parse(n){if(this._def.coerce&&(n.data=String(n.data)),this._getType(n)!==J.string){const c=this._getOrReturnCtx(n);return G(c,{code:B.invalid_type,expected:J.string,received:c.parsedType}),ue}const a=new at;let s;for(const c of this._def.checks)if(c.kind==="min")n.data.length<c.value&&(s=this._getOrReturnCtx(n,s),G(s,{code:B.too_small,minimum:c.value,type:"string",inclusive:!0,exact:!1,message:c.message}),a.dirty());else if(c.kind==="max")n.data.length>c.value&&(s=this._getOrReturnCtx(n,s),G(s,{code:B.too_big,maximum:c.value,type:"string",inclusive:!0,exact:!1,message:c.message}),a.dirty());else if(c.kind==="length"){const d=n.data.length>c.value,f=n.data.length<c.value;(d||f)&&(s=this._getOrReturnCtx(n,s),d?G(s,{code:B.too_big,maximum:c.value,type:"string",inclusive:!0,exact:!0,message:c.message}):f&&G(s,{code:B.too_small,minimum:c.value,type:"string",inclusive:!0,exact:!0,message:c.message}),a.dirty())}else if(c.kind==="email")IT.test(n.data)||(s=this._getOrReturnCtx(n,s),G(s,{validation:"email",code:B.invalid_string,message:c.message}),a.dirty());else if(c.kind==="emoji")Ac||(Ac=new RegExp(AT,"u")),Ac.test(n.data)||(s=this._getOrReturnCtx(n,s),G(s,{validation:"emoji",code:B.invalid_string,message:c.message}),a.dirty());else if(c.kind==="uuid")xT.test(n.data)||(s=this._getOrReturnCtx(n,s),G(s,{validation:"uuid",code:B.invalid_string,message:c.message}),a.dirty());else if(c.kind==="nanoid")TT.test(n.data)||(s=this._getOrReturnCtx(n,s),G(s,{validation:"nanoid",code:B.invalid_string,message:c.message}),a.dirty());else if(c.kind==="cuid")wT.test(n.data)||(s=this._getOrReturnCtx(n,s),G(s,{validation:"cuid",code:B.invalid_string,message:c.message}),a.dirty());else if(c.kind==="cuid2")bT.test(n.data)||(s=this._getOrReturnCtx(n,s),G(s,{validation:"cuid2",code:B.invalid_string,message:c.message}),a.dirty());else if(c.kind==="ulid")kT.test(n.data)||(s=this._getOrReturnCtx(n,s),G(s,{validation:"ulid",code:B.invalid_string,message:c.message}),a.dirty());else if(c.kind==="url")try{new URL(n.data)}catch{s=this._getOrReturnCtx(n,s),G(s,{validation:"url",code:B.invalid_string,message:c.message}),a.dirty()}else c.kind==="regex"?(c.regex.lastIndex=0,c.regex.test(n.data)||(s=this._getOrReturnCtx(n,s),G(s,{validation:"regex",code:B.invalid_string,message:c.message}),a.dirty())):c.kind==="trim"?n.data=n.data.trim():c.kind==="includes"?n.data.includes(c.value,c.position)||(s=this._getOrReturnCtx(n,s),G(s,{code:B.invalid_string,validation:{includes:c.value,position:c.position},message:c.message}),a.dirty()):c.kind==="toLowerCase"?n.data=n.data.toLowerCase():c.kind==="toUpperCase"?n.data=n.data.toUpperCase():c.kind==="startsWith"?n.data.startsWith(c.value)||(s=this._getOrReturnCtx(n,s),G(s,{code:B.invalid_string,validation:{startsWith:c.value},message:c.message}),a.dirty()):c.kind==="endsWith"?n.data.endsWith(c.value)||(s=this._getOrReturnCtx(n,s),G(s,{code:B.invalid_string,validation:{endsWith:c.value},message:c.message}),a.dirty()):c.kind==="datetime"?Zm(c).test(n.data)||(s=this._getOrReturnCtx(n,s),G(s,{code:B.invalid_string,validation:"datetime",message:c.message}),a.dirty()):c.kind==="date"?zT.test(n.data)||(s=this._getOrReturnCtx(n,s),G(s,{code:B.invalid_string,validation:"date",message:c.message}),a.dirty()):c.kind==="time"?LT(c).test(n.data)||(s=this._getOrReturnCtx(n,s),G(s,{code:B.invalid_string,validation:"time",message:c.message}),a.dirty()):c.kind==="duration"?ST.test(n.data)||(s=this._getOrReturnCtx(n,s),G(s,{validation:"duration",code:B.invalid_string,message:c.message}),a.dirty()):c.kind==="ip"?WT(n.data,c.version)||(s=this._getOrReturnCtx(n,s),G(s,{validation:"ip",code:B.invalid_string,message:c.message}),a.dirty()):c.kind==="jwt"?MT(n.data,c.alg)||(s=this._getOrReturnCtx(n,s),G(s,{validation:"jwt",code:B.invalid_string,message:c.message}),a.dirty()):c.kind==="cidr"?OT(n.data,c.version)||(s=this._getOrReturnCtx(n,s),G(s,{validation:"cidr",code:B.invalid_string,message:c.message}),a.dirty()):c.kind==="base64"?RT.test(n.data)||(s=this._getOrReturnCtx(n,s),G(s,{validation:"base64",code:B.invalid_string,message:c.message}),a.dirty()):c.kind==="base64url"?PT.test(n.data)||(s=this._getOrReturnCtx(n,s),G(s,{validation:"base64url",code:B.invalid_string,message:c.message}),a.dirty()):Ie.assertNever(c);return{status:a.value,value:n.data}}_regex(n,i,a){return this.refinement(s=>n.test(s),{validation:i,code:B.invalid_string,...re.errToObj(a)})}_addCheck(n){return new qt({...this._def,checks:[...this._def.checks,n]})}email(n){return this._addCheck({kind:"email",...re.errToObj(n)})}url(n){return this._addCheck({kind:"url",...re.errToObj(n)})}emoji(n){return this._addCheck({kind:"emoji",...re.errToObj(n)})}uuid(n){return this._addCheck({kind:"uuid",...re.errToObj(n)})}nanoid(n){return this._addCheck({kind:"nanoid",...re.errToObj(n)})}cuid(n){return this._addCheck({kind:"cuid",...re.errToObj(n)})}cuid2(n){return this._addCheck({kind:"cuid2",...re.errToObj(n)})}ulid(n){return this._addCheck({kind:"ulid",...re.errToObj(n)})}base64(n){return this._addCheck({kind:"base64",...re.errToObj(n)})}base64url(n){return this._addCheck({kind:"base64url",...re.errToObj(n)})}jwt(n){return this._addCheck({kind:"jwt",...re.errToObj(n)})}ip(n){return this._addCheck({kind:"ip",...re.errToObj(n)})}cidr(n){return this._addCheck({kind:"cidr",...re.errToObj(n)})}datetime(n){var i,a;return typeof n=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:n}):this._addCheck({kind:"datetime",precision:typeof n?.precision>"u"?null:n?.precision,offset:(i=n?.offset)!==null&&i!==void 0?i:!1,local:(a=n?.local)!==null&&a!==void 0?a:!1,...re.errToObj(n?.message)})}date(n){return this._addCheck({kind:"date",message:n})}time(n){return typeof n=="string"?this._addCheck({kind:"time",precision:null,message:n}):this._addCheck({kind:"time",precision:typeof n?.precision>"u"?null:n?.precision,...re.errToObj(n?.message)})}duration(n){return this._addCheck({kind:"duration",...re.errToObj(n)})}regex(n,i){return this._addCheck({kind:"regex",regex:n,...re.errToObj(i)})}includes(n,i){return this._addCheck({kind:"includes",value:n,position:i?.position,...re.errToObj(i?.message)})}startsWith(n,i){return this._addCheck({kind:"startsWith",value:n,...re.errToObj(i)})}endsWith(n,i){return this._addCheck({kind:"endsWith",value:n,...re.errToObj(i)})}min(n,i){return this._addCheck({kind:"min",value:n,...re.errToObj(i)})}max(n,i){return this._addCheck({kind:"max",value:n,...re.errToObj(i)})}length(n,i){return this._addCheck({kind:"length",value:n,...re.errToObj(i)})}nonempty(n){return this.min(1,re.errToObj(n))}trim(){return new qt({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new qt({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new qt({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(n=>n.kind==="datetime")}get isDate(){return!!this._def.checks.find(n=>n.kind==="date")}get isTime(){return!!this._def.checks.find(n=>n.kind==="time")}get isDuration(){return!!this._def.checks.find(n=>n.kind==="duration")}get isEmail(){return!!this._def.checks.find(n=>n.kind==="email")}get isURL(){return!!this._def.checks.find(n=>n.kind==="url")}get isEmoji(){return!!this._def.checks.find(n=>n.kind==="emoji")}get isUUID(){return!!this._def.checks.find(n=>n.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(n=>n.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(n=>n.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(n=>n.kind==="cuid2")}get isULID(){return!!this._def.checks.find(n=>n.kind==="ulid")}get isIP(){return!!this._def.checks.find(n=>n.kind==="ip")}get isCIDR(){return!!this._def.checks.find(n=>n.kind==="cidr")}get isBase64(){return!!this._def.checks.find(n=>n.kind==="base64")}get isBase64url(){return!!this._def.checks.find(n=>n.kind==="base64url")}get minLength(){let n=null;for(const i of this._def.checks)i.kind==="min"&&(n===null||i.value>n)&&(n=i.value);return n}get maxLength(){let n=null;for(const i of this._def.checks)i.kind==="max"&&(n===null||i.value<n)&&(n=i.value);return n}}qt.create=r=>{var n;return new qt({checks:[],typeName:le.ZodString,coerce:(n=r?.coerce)!==null&&n!==void 0?n:!1,...me(r)})};function FT(r,n){const i=(r.toString().split(".")[1]||"").length,a=(n.toString().split(".")[1]||"").length,s=i>a?i:a,c=parseInt(r.toFixed(s).replace(".","")),d=parseInt(n.toFixed(s).replace(".",""));return c%d/Math.pow(10,s)}class Jn extends ve{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(n){if(this._def.coerce&&(n.data=Number(n.data)),this._getType(n)!==J.number){const c=this._getOrReturnCtx(n);return G(c,{code:B.invalid_type,expected:J.number,received:c.parsedType}),ue}let a;const s=new at;for(const c of this._def.checks)c.kind==="int"?Ie.isInteger(n.data)||(a=this._getOrReturnCtx(n,a),G(a,{code:B.invalid_type,expected:"integer",received:"float",message:c.message}),s.dirty()):c.kind==="min"?(c.inclusive?n.data<c.value:n.data<=c.value)&&(a=this._getOrReturnCtx(n,a),G(a,{code:B.too_small,minimum:c.value,type:"number",inclusive:c.inclusive,exact:!1,message:c.message}),s.dirty()):c.kind==="max"?(c.inclusive?n.data>c.value:n.data>=c.value)&&(a=this._getOrReturnCtx(n,a),G(a,{code:B.too_big,maximum:c.value,type:"number",inclusive:c.inclusive,exact:!1,message:c.message}),s.dirty()):c.kind==="multipleOf"?FT(n.data,c.value)!==0&&(a=this._getOrReturnCtx(n,a),G(a,{code:B.not_multiple_of,multipleOf:c.value,message:c.message}),s.dirty()):c.kind==="finite"?Number.isFinite(n.data)||(a=this._getOrReturnCtx(n,a),G(a,{code:B.not_finite,message:c.message}),s.dirty()):Ie.assertNever(c);return{status:s.value,value:n.data}}gte(n,i){return this.setLimit("min",n,!0,re.toString(i))}gt(n,i){return this.setLimit("min",n,!1,re.toString(i))}lte(n,i){return this.setLimit("max",n,!0,re.toString(i))}lt(n,i){return this.setLimit("max",n,!1,re.toString(i))}setLimit(n,i,a,s){return new Jn({...this._def,checks:[...this._def.checks,{kind:n,value:i,inclusive:a,message:re.toString(s)}]})}_addCheck(n){return new Jn({...this._def,checks:[...this._def.checks,n]})}int(n){return this._addCheck({kind:"int",message:re.toString(n)})}positive(n){return this._addCheck({kind:"min",value:0,inclusive:!1,message:re.toString(n)})}negative(n){return this._addCheck({kind:"max",value:0,inclusive:!1,message:re.toString(n)})}nonpositive(n){return this._addCheck({kind:"max",value:0,inclusive:!0,message:re.toString(n)})}nonnegative(n){return this._addCheck({kind:"min",value:0,inclusive:!0,message:re.toString(n)})}multipleOf(n,i){return this._addCheck({kind:"multipleOf",value:n,message:re.toString(i)})}finite(n){return this._addCheck({kind:"finite",message:re.toString(n)})}safe(n){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:re.toString(n)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:re.toString(n)})}get minValue(){let n=null;for(const i of this._def.checks)i.kind==="min"&&(n===null||i.value>n)&&(n=i.value);return n}get maxValue(){let n=null;for(const i of this._def.checks)i.kind==="max"&&(n===null||i.value<n)&&(n=i.value);return n}get isInt(){return!!this._def.checks.find(n=>n.kind==="int"||n.kind==="multipleOf"&&Ie.isInteger(n.value))}get isFinite(){let n=null,i=null;for(const a of this._def.checks){if(a.kind==="finite"||a.kind==="int"||a.kind==="multipleOf")return!0;a.kind==="min"?(i===null||a.value>i)&&(i=a.value):a.kind==="max"&&(n===null||a.value<n)&&(n=a.value)}return Number.isFinite(i)&&Number.isFinite(n)}}Jn.create=r=>new Jn({checks:[],typeName:le.ZodNumber,coerce:r?.coerce||!1,...me(r)});class Xn extends ve{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(n){if(this._def.coerce)try{n.data=BigInt(n.data)}catch{return this._getInvalidInput(n)}if(this._getType(n)!==J.bigint)return this._getInvalidInput(n);let a;const s=new at;for(const c of this._def.checks)c.kind==="min"?(c.inclusive?n.data<c.value:n.data<=c.value)&&(a=this._getOrReturnCtx(n,a),G(a,{code:B.too_small,type:"bigint",minimum:c.value,inclusive:c.inclusive,message:c.message}),s.dirty()):c.kind==="max"?(c.inclusive?n.data>c.value:n.data>=c.value)&&(a=this._getOrReturnCtx(n,a),G(a,{code:B.too_big,type:"bigint",maximum:c.value,inclusive:c.inclusive,message:c.message}),s.dirty()):c.kind==="multipleOf"?n.data%c.value!==BigInt(0)&&(a=this._getOrReturnCtx(n,a),G(a,{code:B.not_multiple_of,multipleOf:c.value,message:c.message}),s.dirty()):Ie.assertNever(c);return{status:s.value,value:n.data}}_getInvalidInput(n){const i=this._getOrReturnCtx(n);return G(i,{code:B.invalid_type,expected:J.bigint,received:i.parsedType}),ue}gte(n,i){return this.setLimit("min",n,!0,re.toString(i))}gt(n,i){return this.setLimit("min",n,!1,re.toString(i))}lte(n,i){return this.setLimit("max",n,!0,re.toString(i))}lt(n,i){return this.setLimit("max",n,!1,re.toString(i))}setLimit(n,i,a,s){return new Xn({...this._def,checks:[...this._def.checks,{kind:n,value:i,inclusive:a,message:re.toString(s)}]})}_addCheck(n){return new Xn({...this._def,checks:[...this._def.checks,n]})}positive(n){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:re.toString(n)})}negative(n){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:re.toString(n)})}nonpositive(n){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:re.toString(n)})}nonnegative(n){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:re.toString(n)})}multipleOf(n,i){return this._addCheck({kind:"multipleOf",value:n,message:re.toString(i)})}get minValue(){let n=null;for(const i of this._def.checks)i.kind==="min"&&(n===null||i.value>n)&&(n=i.value);return n}get maxValue(){let n=null;for(const i of this._def.checks)i.kind==="max"&&(n===null||i.value<n)&&(n=i.value);return n}}Xn.create=r=>{var n;return new Xn({checks:[],typeName:le.ZodBigInt,coerce:(n=r?.coerce)!==null&&n!==void 0?n:!1,...me(r)})};class co extends ve{_parse(n){if(this._def.coerce&&(n.data=!!n.data),this._getType(n)!==J.boolean){const a=this._getOrReturnCtx(n);return G(a,{code:B.invalid_type,expected:J.boolean,received:a.parsedType}),ue}return dt(n.data)}}co.create=r=>new co({typeName:le.ZodBoolean,coerce:r?.coerce||!1,...me(r)});class Tr extends ve{_parse(n){if(this._def.coerce&&(n.data=new Date(n.data)),this._getType(n)!==J.date){const c=this._getOrReturnCtx(n);return G(c,{code:B.invalid_type,expected:J.date,received:c.parsedType}),ue}if(isNaN(n.data.getTime())){const c=this._getOrReturnCtx(n);return G(c,{code:B.invalid_date}),ue}const a=new at;let s;for(const c of this._def.checks)c.kind==="min"?n.data.getTime()<c.value&&(s=this._getOrReturnCtx(n,s),G(s,{code:B.too_small,message:c.message,inclusive:!0,exact:!1,minimum:c.value,type:"date"}),a.dirty()):c.kind==="max"?n.data.getTime()>c.value&&(s=this._getOrReturnCtx(n,s),G(s,{code:B.too_big,message:c.message,inclusive:!0,exact:!1,maximum:c.value,type:"date"}),a.dirty()):Ie.assertNever(c);return{status:a.value,value:new Date(n.data.getTime())}}_addCheck(n){return new Tr({...this._def,checks:[...this._def.checks,n]})}min(n,i){return this._addCheck({kind:"min",value:n.getTime(),message:re.toString(i)})}max(n,i){return this._addCheck({kind:"max",value:n.getTime(),message:re.toString(i)})}get minDate(){let n=null;for(const i of this._def.checks)i.kind==="min"&&(n===null||i.value>n)&&(n=i.value);return n!=null?new Date(n):null}get maxDate(){let n=null;for(const i of this._def.checks)i.kind==="max"&&(n===null||i.value<n)&&(n=i.value);return n!=null?new Date(n):null}}Tr.create=r=>new Tr({checks:[],coerce:r?.coerce||!1,typeName:le.ZodDate,...me(r)});class es extends ve{_parse(n){if(this._getType(n)!==J.symbol){const a=this._getOrReturnCtx(n);return G(a,{code:B.invalid_type,expected:J.symbol,received:a.parsedType}),ue}return dt(n.data)}}es.create=r=>new es({typeName:le.ZodSymbol,...me(r)});class uo extends ve{_parse(n){if(this._getType(n)!==J.undefined){const a=this._getOrReturnCtx(n);return G(a,{code:B.invalid_type,expected:J.undefined,received:a.parsedType}),ue}return dt(n.data)}}uo.create=r=>new uo({typeName:le.ZodUndefined,...me(r)});class ho extends ve{_parse(n){if(this._getType(n)!==J.null){const a=this._getOrReturnCtx(n);return G(a,{code:B.invalid_type,expected:J.null,received:a.parsedType}),ue}return dt(n.data)}}ho.create=r=>new ho({typeName:le.ZodNull,...me(r)});class si extends ve{constructor(){super(...arguments),this._any=!0}_parse(n){return dt(n.data)}}si.create=r=>new si({typeName:le.ZodAny,...me(r)});class vr extends ve{constructor(){super(...arguments),this._unknown=!0}_parse(n){return dt(n.data)}}vr.create=r=>new vr({typeName:le.ZodUnknown,...me(r)});class Sn extends ve{_parse(n){const i=this._getOrReturnCtx(n);return G(i,{code:B.invalid_type,expected:J.never,received:i.parsedType}),ue}}Sn.create=r=>new Sn({typeName:le.ZodNever,...me(r)});class ts extends ve{_parse(n){if(this._getType(n)!==J.undefined){const a=this._getOrReturnCtx(n);return G(a,{code:B.invalid_type,expected:J.void,received:a.parsedType}),ue}return dt(n.data)}}ts.create=r=>new ts({typeName:le.ZodVoid,...me(r)});class Ht extends ve{_parse(n){const{ctx:i,status:a}=this._processInputParams(n),s=this._def;if(i.parsedType!==J.array)return G(i,{code:B.invalid_type,expected:J.array,received:i.parsedType}),ue;if(s.exactLength!==null){const d=i.data.length>s.exactLength.value,f=i.data.length<s.exactLength.value;(d||f)&&(G(i,{code:d?B.too_big:B.too_small,minimum:f?s.exactLength.value:void 0,maximum:d?s.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:s.exactLength.message}),a.dirty())}if(s.minLength!==null&&i.data.length<s.minLength.value&&(G(i,{code:B.too_small,minimum:s.minLength.value,type:"array",inclusive:!0,exact:!1,message:s.minLength.message}),a.dirty()),s.maxLength!==null&&i.data.length>s.maxLength.value&&(G(i,{code:B.too_big,maximum:s.maxLength.value,type:"array",inclusive:!0,exact:!1,message:s.maxLength.message}),a.dirty()),i.common.async)return Promise.all([...i.data].map((d,f)=>s.type._parseAsync(new on(i,d,i.path,f)))).then(d=>at.mergeArray(a,d));const c=[...i.data].map((d,f)=>s.type._parseSync(new on(i,d,i.path,f)));return at.mergeArray(a,c)}get element(){return this._def.type}min(n,i){return new Ht({...this._def,minLength:{value:n,message:re.toString(i)}})}max(n,i){return new Ht({...this._def,maxLength:{value:n,message:re.toString(i)}})}length(n,i){return new Ht({...this._def,exactLength:{value:n,message:re.toString(i)}})}nonempty(n){return this.min(1,n)}}Ht.create=(r,n)=>new Ht({type:r,minLength:null,maxLength:null,exactLength:null,typeName:le.ZodArray,...me(n)});function Xr(r){if(r instanceof $e){const n={};for(const i in r.shape){const a=r.shape[i];n[i]=tn.create(Xr(a))}return new $e({...r._def,shape:()=>n})}else return r instanceof Ht?new Ht({...r._def,type:Xr(r.element)}):r instanceof tn?tn.create(Xr(r.unwrap())):r instanceof tr?tr.create(Xr(r.unwrap())):r instanceof an?an.create(r.items.map(n=>Xr(n))):r}class $e extends ve{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const n=this._def.shape(),i=Ie.objectKeys(n);return this._cached={shape:n,keys:i}}_parse(n){if(this._getType(n)!==J.object){const m=this._getOrReturnCtx(n);return G(m,{code:B.invalid_type,expected:J.object,received:m.parsedType}),ue}const{status:a,ctx:s}=this._processInputParams(n),{shape:c,keys:d}=this._getCached(),f=[];if(!(this._def.catchall instanceof Sn&&this._def.unknownKeys==="strip"))for(const m in s.data)d.includes(m)||f.push(m);const p=[];for(const m of d){const v=c[m],b=s.data[m];p.push({key:{status:"valid",value:m},value:v._parse(new on(s,b,s.path,m)),alwaysSet:m in s.data})}if(this._def.catchall instanceof Sn){const m=this._def.unknownKeys;if(m==="passthrough")for(const v of f)p.push({key:{status:"valid",value:v},value:{status:"valid",value:s.data[v]}});else if(m==="strict")f.length>0&&(G(s,{code:B.unrecognized_keys,keys:f}),a.dirty());else if(m!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const m=this._def.catchall;for(const v of f){const b=s.data[v];p.push({key:{status:"valid",value:v},value:m._parse(new on(s,b,s.path,v)),alwaysSet:v in s.data})}}return s.common.async?Promise.resolve().then(async()=>{const m=[];for(const v of p){const b=await v.key,x=await v.value;m.push({key:b,value:x,alwaysSet:v.alwaysSet})}return m}).then(m=>at.mergeObjectSync(a,m)):at.mergeObjectSync(a,p)}get shape(){return this._def.shape()}strict(n){return re.errToObj,new $e({...this._def,unknownKeys:"strict",...n!==void 0?{errorMap:(i,a)=>{var s,c,d,f;const p=(d=(c=(s=this._def).errorMap)===null||c===void 0?void 0:c.call(s,i,a).message)!==null&&d!==void 0?d:a.defaultError;return i.code==="unrecognized_keys"?{message:(f=re.errToObj(n).message)!==null&&f!==void 0?f:p}:{message:p}}}:{}})}strip(){return new $e({...this._def,unknownKeys:"strip"})}passthrough(){return new $e({...this._def,unknownKeys:"passthrough"})}extend(n){return new $e({...this._def,shape:()=>({...this._def.shape(),...n})})}merge(n){return new $e({unknownKeys:n._def.unknownKeys,catchall:n._def.catchall,shape:()=>({...this._def.shape(),...n._def.shape()}),typeName:le.ZodObject})}setKey(n,i){return this.augment({[n]:i})}catchall(n){return new $e({...this._def,catchall:n})}pick(n){const i={};return Ie.objectKeys(n).forEach(a=>{n[a]&&this.shape[a]&&(i[a]=this.shape[a])}),new $e({...this._def,shape:()=>i})}omit(n){const i={};return Ie.objectKeys(this.shape).forEach(a=>{n[a]||(i[a]=this.shape[a])}),new $e({...this._def,shape:()=>i})}deepPartial(){return Xr(this)}partial(n){const i={};return Ie.objectKeys(this.shape).forEach(a=>{const s=this.shape[a];n&&!n[a]?i[a]=s:i[a]=s.optional()}),new $e({...this._def,shape:()=>i})}required(n){const i={};return Ie.objectKeys(this.shape).forEach(a=>{if(n&&!n[a])i[a]=this.shape[a];else{let c=this.shape[a];for(;c instanceof tn;)c=c._def.innerType;i[a]=c}}),new $e({...this._def,shape:()=>i})}keyof(){return Km(Ie.objectKeys(this.shape))}}$e.create=(r,n)=>new $e({shape:()=>r,unknownKeys:"strip",catchall:Sn.create(),typeName:le.ZodObject,...me(n)});$e.strictCreate=(r,n)=>new $e({shape:()=>r,unknownKeys:"strict",catchall:Sn.create(),typeName:le.ZodObject,...me(n)});$e.lazycreate=(r,n)=>new $e({shape:r,unknownKeys:"strip",catchall:Sn.create(),typeName:le.ZodObject,...me(n)});class fo extends ve{_parse(n){const{ctx:i}=this._processInputParams(n),a=this._def.options;function s(c){for(const f of c)if(f.result.status==="valid")return f.result;for(const f of c)if(f.result.status==="dirty")return i.common.issues.push(...f.ctx.common.issues),f.result;const d=c.map(f=>new St(f.ctx.common.issues));return G(i,{code:B.invalid_union,unionErrors:d}),ue}if(i.common.async)return Promise.all(a.map(async c=>{const d={...i,common:{...i.common,issues:[]},parent:null};return{result:await c._parseAsync({data:i.data,path:i.path,parent:d}),ctx:d}})).then(s);{let c;const d=[];for(const p of a){const m={...i,common:{...i.common,issues:[]},parent:null},v=p._parseSync({data:i.data,path:i.path,parent:m});if(v.status==="valid")return v;v.status==="dirty"&&!c&&(c={result:v,ctx:m}),m.common.issues.length&&d.push(m.common.issues)}if(c)return i.common.issues.push(...c.ctx.common.issues),c.result;const f=d.map(p=>new St(p));return G(i,{code:B.invalid_union,unionErrors:f}),ue}}get options(){return this._def.options}}fo.create=(r,n)=>new fo({options:r,typeName:le.ZodUnion,...me(n)});const kn=r=>r instanceof go?kn(r.schema):r instanceof Yt?kn(r.innerType()):r instanceof yo?[r.value]:r instanceof er?r.options:r instanceof vo?Ie.objectValues(r.enum):r instanceof wo?kn(r._def.innerType):r instanceof uo?[void 0]:r instanceof ho?[null]:r instanceof tn?[void 0,...kn(r.unwrap())]:r instanceof tr?[null,...kn(r.unwrap())]:r instanceof wu||r instanceof ko?kn(r.unwrap()):r instanceof bo?kn(r._def.innerType):[];class bs extends ve{_parse(n){const{ctx:i}=this._processInputParams(n);if(i.parsedType!==J.object)return G(i,{code:B.invalid_type,expected:J.object,received:i.parsedType}),ue;const a=this.discriminator,s=i.data[a],c=this.optionsMap.get(s);return c?i.common.async?c._parseAsync({data:i.data,path:i.path,parent:i}):c._parseSync({data:i.data,path:i.path,parent:i}):(G(i,{code:B.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[a]}),ue)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(n,i,a){const s=new Map;for(const c of i){const d=kn(c.shape[n]);if(!d.length)throw new Error(`A discriminator value for key \`${n}\` could not be extracted from all schema options`);for(const f of d){if(s.has(f))throw new Error(`Discriminator property ${String(n)} has duplicate value ${String(f)}`);s.set(f,c)}}return new bs({typeName:le.ZodDiscriminatedUnion,discriminator:n,options:i,optionsMap:s,...me(a)})}}function Hc(r,n){const i=xn(r),a=xn(n);if(r===n)return{valid:!0,data:r};if(i===J.object&&a===J.object){const s=Ie.objectKeys(n),c=Ie.objectKeys(r).filter(f=>s.indexOf(f)!==-1),d={...r,...n};for(const f of c){const p=Hc(r[f],n[f]);if(!p.valid)return{valid:!1};d[f]=p.data}return{valid:!0,data:d}}else if(i===J.array&&a===J.array){if(r.length!==n.length)return{valid:!1};const s=[];for(let c=0;c<r.length;c++){const d=r[c],f=n[c],p=Hc(d,f);if(!p.valid)return{valid:!1};s.push(p.data)}return{valid:!0,data:s}}else return i===J.date&&a===J.date&&+r==+n?{valid:!0,data:r}:{valid:!1}}class po extends ve{_parse(n){const{status:i,ctx:a}=this._processInputParams(n),s=(c,d)=>{if($c(c)||$c(d))return ue;const f=Hc(c.value,d.value);return f.valid?((qc(c)||qc(d))&&i.dirty(),{status:i.value,value:f.data}):(G(a,{code:B.invalid_intersection_types}),ue)};return a.common.async?Promise.all([this._def.left._parseAsync({data:a.data,path:a.path,parent:a}),this._def.right._parseAsync({data:a.data,path:a.path,parent:a})]).then(([c,d])=>s(c,d)):s(this._def.left._parseSync({data:a.data,path:a.path,parent:a}),this._def.right._parseSync({data:a.data,path:a.path,parent:a}))}}po.create=(r,n,i)=>new po({left:r,right:n,typeName:le.ZodIntersection,...me(i)});class an extends ve{_parse(n){const{status:i,ctx:a}=this._processInputParams(n);if(a.parsedType!==J.array)return G(a,{code:B.invalid_type,expected:J.array,received:a.parsedType}),ue;if(a.data.length<this._def.items.length)return G(a,{code:B.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),ue;!this._def.rest&&a.data.length>this._def.items.length&&(G(a,{code:B.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),i.dirty());const c=[...a.data].map((d,f)=>{const p=this._def.items[f]||this._def.rest;return p?p._parse(new on(a,d,a.path,f)):null}).filter(d=>!!d);return a.common.async?Promise.all(c).then(d=>at.mergeArray(i,d)):at.mergeArray(i,c)}get items(){return this._def.items}rest(n){return new an({...this._def,rest:n})}}an.create=(r,n)=>{if(!Array.isArray(r))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new an({items:r,typeName:le.ZodTuple,rest:null,...me(n)})};class mo extends ve{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(n){const{status:i,ctx:a}=this._processInputParams(n);if(a.parsedType!==J.object)return G(a,{code:B.invalid_type,expected:J.object,received:a.parsedType}),ue;const s=[],c=this._def.keyType,d=this._def.valueType;for(const f in a.data)s.push({key:c._parse(new on(a,f,a.path,f)),value:d._parse(new on(a,a.data[f],a.path,f)),alwaysSet:f in a.data});return a.common.async?at.mergeObjectAsync(i,s):at.mergeObjectSync(i,s)}get element(){return this._def.valueType}static create(n,i,a){return i instanceof ve?new mo({keyType:n,valueType:i,typeName:le.ZodRecord,...me(a)}):new mo({keyType:qt.create(),valueType:n,typeName:le.ZodRecord,...me(i)})}}class ns extends ve{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(n){const{status:i,ctx:a}=this._processInputParams(n);if(a.parsedType!==J.map)return G(a,{code:B.invalid_type,expected:J.map,received:a.parsedType}),ue;const s=this._def.keyType,c=this._def.valueType,d=[...a.data.entries()].map(([f,p],m)=>({key:s._parse(new on(a,f,a.path,[m,"key"])),value:c._parse(new on(a,p,a.path,[m,"value"]))}));if(a.common.async){const f=new Map;return Promise.resolve().then(async()=>{for(const p of d){const m=await p.key,v=await p.value;if(m.status==="aborted"||v.status==="aborted")return ue;(m.status==="dirty"||v.status==="dirty")&&i.dirty(),f.set(m.value,v.value)}return{status:i.value,value:f}})}else{const f=new Map;for(const p of d){const m=p.key,v=p.value;if(m.status==="aborted"||v.status==="aborted")return ue;(m.status==="dirty"||v.status==="dirty")&&i.dirty(),f.set(m.value,v.value)}return{status:i.value,value:f}}}}ns.create=(r,n,i)=>new ns({valueType:n,keyType:r,typeName:le.ZodMap,...me(i)});class _r extends ve{_parse(n){const{status:i,ctx:a}=this._processInputParams(n);if(a.parsedType!==J.set)return G(a,{code:B.invalid_type,expected:J.set,received:a.parsedType}),ue;const s=this._def;s.minSize!==null&&a.data.size<s.minSize.value&&(G(a,{code:B.too_small,minimum:s.minSize.value,type:"set",inclusive:!0,exact:!1,message:s.minSize.message}),i.dirty()),s.maxSize!==null&&a.data.size>s.maxSize.value&&(G(a,{code:B.too_big,maximum:s.maxSize.value,type:"set",inclusive:!0,exact:!1,message:s.maxSize.message}),i.dirty());const c=this._def.valueType;function d(p){const m=new Set;for(const v of p){if(v.status==="aborted")return ue;v.status==="dirty"&&i.dirty(),m.add(v.value)}return{status:i.value,value:m}}const f=[...a.data.values()].map((p,m)=>c._parse(new on(a,p,a.path,m)));return a.common.async?Promise.all(f).then(p=>d(p)):d(f)}min(n,i){return new _r({...this._def,minSize:{value:n,message:re.toString(i)}})}max(n,i){return new _r({...this._def,maxSize:{value:n,message:re.toString(i)}})}size(n,i){return this.min(n,i).max(n,i)}nonempty(n){return this.min(1,n)}}_r.create=(r,n)=>new _r({valueType:r,minSize:null,maxSize:null,typeName:le.ZodSet,...me(n)});class ri extends ve{constructor(){super(...arguments),this.validate=this.implement}_parse(n){const{ctx:i}=this._processInputParams(n);if(i.parsedType!==J.function)return G(i,{code:B.invalid_type,expected:J.function,received:i.parsedType}),ue;function a(f,p){return Ja({data:f,path:i.path,errorMaps:[i.common.contextualErrorMap,i.schemaErrorMap,Qa(),ai].filter(m=>!!m),issueData:{code:B.invalid_arguments,argumentsError:p}})}function s(f,p){return Ja({data:f,path:i.path,errorMaps:[i.common.contextualErrorMap,i.schemaErrorMap,Qa(),ai].filter(m=>!!m),issueData:{code:B.invalid_return_type,returnTypeError:p}})}const c={errorMap:i.common.contextualErrorMap},d=i.data;if(this._def.returns instanceof li){const f=this;return dt(async function(...p){const m=new St([]),v=await f._def.args.parseAsync(p,c).catch(E=>{throw m.addIssue(a(p,E)),m}),b=await Reflect.apply(d,this,v);return await f._def.returns._def.type.parseAsync(b,c).catch(E=>{throw m.addIssue(s(b,E)),m})})}else{const f=this;return dt(function(...p){const m=f._def.args.safeParse(p,c);if(!m.success)throw new St([a(p,m.error)]);const v=Reflect.apply(d,this,m.data),b=f._def.returns.safeParse(v,c);if(!b.success)throw new St([s(v,b.error)]);return b.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...n){return new ri({...this._def,args:an.create(n).rest(vr.create())})}returns(n){return new ri({...this._def,returns:n})}implement(n){return this.parse(n)}strictImplement(n){return this.parse(n)}static create(n,i,a){return new ri({args:n||an.create([]).rest(vr.create()),returns:i||vr.create(),typeName:le.ZodFunction,...me(a)})}}class go extends ve{get schema(){return this._def.getter()}_parse(n){const{ctx:i}=this._processInputParams(n);return this._def.getter()._parse({data:i.data,path:i.path,parent:i})}}go.create=(r,n)=>new go({getter:r,typeName:le.ZodLazy,...me(n)});class yo extends ve{_parse(n){if(n.data!==this._def.value){const i=this._getOrReturnCtx(n);return G(i,{received:i.data,code:B.invalid_literal,expected:this._def.value}),ue}return{status:"valid",value:n.data}}get value(){return this._def.value}}yo.create=(r,n)=>new yo({value:r,typeName:le.ZodLiteral,...me(n)});function Km(r,n){return new er({values:r,typeName:le.ZodEnum,...me(n)})}class er extends ve{constructor(){super(...arguments),ro.set(this,void 0)}_parse(n){if(typeof n.data!="string"){const i=this._getOrReturnCtx(n),a=this._def.values;return G(i,{expected:Ie.joinValues(a),received:i.parsedType,code:B.invalid_type}),ue}if(Xa(this,ro)||Vm(this,ro,new Set(this._def.values)),!Xa(this,ro).has(n.data)){const i=this._getOrReturnCtx(n),a=this._def.values;return G(i,{received:i.data,code:B.invalid_enum_value,options:a}),ue}return dt(n.data)}get options(){return this._def.values}get enum(){const n={};for(const i of this._def.values)n[i]=i;return n}get Values(){const n={};for(const i of this._def.values)n[i]=i;return n}get Enum(){const n={};for(const i of this._def.values)n[i]=i;return n}extract(n,i=this._def){return er.create(n,{...this._def,...i})}exclude(n,i=this._def){return er.create(this.options.filter(a=>!n.includes(a)),{...this._def,...i})}}ro=new WeakMap;er.create=Km;class vo extends ve{constructor(){super(...arguments),io.set(this,void 0)}_parse(n){const i=Ie.getValidEnumValues(this._def.values),a=this._getOrReturnCtx(n);if(a.parsedType!==J.string&&a.parsedType!==J.number){const s=Ie.objectValues(i);return G(a,{expected:Ie.joinValues(s),received:a.parsedType,code:B.invalid_type}),ue}if(Xa(this,io)||Vm(this,io,new Set(Ie.getValidEnumValues(this._def.values))),!Xa(this,io).has(n.data)){const s=Ie.objectValues(i);return G(a,{received:a.data,code:B.invalid_enum_value,options:s}),ue}return dt(n.data)}get enum(){return this._def.values}}io=new WeakMap;vo.create=(r,n)=>new vo({values:r,typeName:le.ZodNativeEnum,...me(n)});class li extends ve{unwrap(){return this._def.type}_parse(n){const{ctx:i}=this._processInputParams(n);if(i.parsedType!==J.promise&&i.common.async===!1)return G(i,{code:B.invalid_type,expected:J.promise,received:i.parsedType}),ue;const a=i.parsedType===J.promise?i.data:Promise.resolve(i.data);return dt(a.then(s=>this._def.type.parseAsync(s,{path:i.path,errorMap:i.common.contextualErrorMap})))}}li.create=(r,n)=>new li({type:r,typeName:le.ZodPromise,...me(n)});class Yt extends ve{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===le.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(n){const{status:i,ctx:a}=this._processInputParams(n),s=this._def.effect||null,c={addIssue:d=>{G(a,d),d.fatal?i.abort():i.dirty()},get path(){return a.path}};if(c.addIssue=c.addIssue.bind(c),s.type==="preprocess"){const d=s.transform(a.data,c);if(a.common.async)return Promise.resolve(d).then(async f=>{if(i.value==="aborted")return ue;const p=await this._def.schema._parseAsync({data:f,path:a.path,parent:a});return p.status==="aborted"?ue:p.status==="dirty"||i.value==="dirty"?ei(p.value):p});{if(i.value==="aborted")return ue;const f=this._def.schema._parseSync({data:d,path:a.path,parent:a});return f.status==="aborted"?ue:f.status==="dirty"||i.value==="dirty"?ei(f.value):f}}if(s.type==="refinement"){const d=f=>{const p=s.refinement(f,c);if(a.common.async)return Promise.resolve(p);if(p instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return f};if(a.common.async===!1){const f=this._def.schema._parseSync({data:a.data,path:a.path,parent:a});return f.status==="aborted"?ue:(f.status==="dirty"&&i.dirty(),d(f.value),{status:i.value,value:f.value})}else return this._def.schema._parseAsync({data:a.data,path:a.path,parent:a}).then(f=>f.status==="aborted"?ue:(f.status==="dirty"&&i.dirty(),d(f.value).then(()=>({status:i.value,value:f.value}))))}if(s.type==="transform")if(a.common.async===!1){const d=this._def.schema._parseSync({data:a.data,path:a.path,parent:a});if(!xr(d))return d;const f=s.transform(d.value,c);if(f instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:i.value,value:f}}else return this._def.schema._parseAsync({data:a.data,path:a.path,parent:a}).then(d=>xr(d)?Promise.resolve(s.transform(d.value,c)).then(f=>({status:i.value,value:f})):d);Ie.assertNever(s)}}Yt.create=(r,n,i)=>new Yt({schema:r,typeName:le.ZodEffects,effect:n,...me(i)});Yt.createWithPreprocess=(r,n,i)=>new Yt({schema:n,effect:{type:"preprocess",transform:r},typeName:le.ZodEffects,...me(i)});class tn extends ve{_parse(n){return this._getType(n)===J.undefined?dt(void 0):this._def.innerType._parse(n)}unwrap(){return this._def.innerType}}tn.create=(r,n)=>new tn({innerType:r,typeName:le.ZodOptional,...me(n)});class tr extends ve{_parse(n){return this._getType(n)===J.null?dt(null):this._def.innerType._parse(n)}unwrap(){return this._def.innerType}}tr.create=(r,n)=>new tr({innerType:r,typeName:le.ZodNullable,...me(n)});class wo extends ve{_parse(n){const{ctx:i}=this._processInputParams(n);let a=i.data;return i.parsedType===J.undefined&&(a=this._def.defaultValue()),this._def.innerType._parse({data:a,path:i.path,parent:i})}removeDefault(){return this._def.innerType}}wo.create=(r,n)=>new wo({innerType:r,typeName:le.ZodDefault,defaultValue:typeof n.default=="function"?n.default:()=>n.default,...me(n)});class bo extends ve{_parse(n){const{ctx:i}=this._processInputParams(n),a={...i,common:{...i.common,issues:[]}},s=this._def.innerType._parse({data:a.data,path:a.path,parent:{...a}});return lo(s)?s.then(c=>({status:"valid",value:c.status==="valid"?c.value:this._def.catchValue({get error(){return new St(a.common.issues)},input:a.data})})):{status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new St(a.common.issues)},input:a.data})}}removeCatch(){return this._def.innerType}}bo.create=(r,n)=>new bo({innerType:r,typeName:le.ZodCatch,catchValue:typeof n.catch=="function"?n.catch:()=>n.catch,...me(n)});class rs extends ve{_parse(n){if(this._getType(n)!==J.nan){const a=this._getOrReturnCtx(n);return G(a,{code:B.invalid_type,expected:J.nan,received:a.parsedType}),ue}return{status:"valid",value:n.data}}}rs.create=r=>new rs({typeName:le.ZodNaN,...me(r)});const BT=Symbol("zod_brand");class wu extends ve{_parse(n){const{ctx:i}=this._processInputParams(n),a=i.data;return this._def.type._parse({data:a,path:i.path,parent:i})}unwrap(){return this._def.type}}class So extends ve{_parse(n){const{status:i,ctx:a}=this._processInputParams(n);if(a.common.async)return(async()=>{const c=await this._def.in._parseAsync({data:a.data,path:a.path,parent:a});return c.status==="aborted"?ue:c.status==="dirty"?(i.dirty(),ei(c.value)):this._def.out._parseAsync({data:c.value,path:a.path,parent:a})})();{const s=this._def.in._parseSync({data:a.data,path:a.path,parent:a});return s.status==="aborted"?ue:s.status==="dirty"?(i.dirty(),{status:"dirty",value:s.value}):this._def.out._parseSync({data:s.value,path:a.path,parent:a})}}static create(n,i){return new So({in:n,out:i,typeName:le.ZodPipeline})}}class ko extends ve{_parse(n){const i=this._def.innerType._parse(n),a=s=>(xr(s)&&(s.value=Object.freeze(s.value)),s);return lo(i)?i.then(s=>a(s)):a(i)}unwrap(){return this._def.innerType}}ko.create=(r,n)=>new ko({innerType:r,typeName:le.ZodReadonly,...me(n)});function np(r,n){const i=typeof r=="function"?r(n):typeof r=="string"?{message:r}:r;return typeof i=="string"?{message:i}:i}function Qm(r,n={},i){return r?si.create().superRefine((a,s)=>{var c,d;const f=r(a);if(f instanceof Promise)return f.then(p=>{var m,v;if(!p){const b=np(n,a),x=(v=(m=b.fatal)!==null&&m!==void 0?m:i)!==null&&v!==void 0?v:!0;s.addIssue({code:"custom",...b,fatal:x})}});if(!f){const p=np(n,a),m=(d=(c=p.fatal)!==null&&c!==void 0?c:i)!==null&&d!==void 0?d:!0;s.addIssue({code:"custom",...p,fatal:m})}}):si.create()}const DT={object:$e.lazycreate};var le;(function(r){r.ZodString="ZodString",r.ZodNumber="ZodNumber",r.ZodNaN="ZodNaN",r.ZodBigInt="ZodBigInt",r.ZodBoolean="ZodBoolean",r.ZodDate="ZodDate",r.ZodSymbol="ZodSymbol",r.ZodUndefined="ZodUndefined",r.ZodNull="ZodNull",r.ZodAny="ZodAny",r.ZodUnknown="ZodUnknown",r.ZodNever="ZodNever",r.ZodVoid="ZodVoid",r.ZodArray="ZodArray",r.ZodObject="ZodObject",r.ZodUnion="ZodUnion",r.ZodDiscriminatedUnion="ZodDiscriminatedUnion",r.ZodIntersection="ZodIntersection",r.ZodTuple="ZodTuple",r.ZodRecord="ZodRecord",r.ZodMap="ZodMap",r.ZodSet="ZodSet",r.ZodFunction="ZodFunction",r.ZodLazy="ZodLazy",r.ZodLiteral="ZodLiteral",r.ZodEnum="ZodEnum",r.ZodEffects="ZodEffects",r.ZodNativeEnum="ZodNativeEnum",r.ZodOptional="ZodOptional",r.ZodNullable="ZodNullable",r.ZodDefault="ZodDefault",r.ZodCatch="ZodCatch",r.ZodPromise="ZodPromise",r.ZodBranded="ZodBranded",r.ZodPipeline="ZodPipeline",r.ZodReadonly="ZodReadonly"})(le||(le={}));const $T=(r,n={message:`Input not instance of ${r.name}`})=>Qm(i=>i instanceof r,n),Jm=qt.create,Xm=Jn.create,qT=rs.create,HT=Xn.create,eg=co.create,UT=Tr.create,VT=es.create,GT=uo.create,YT=ho.create,ZT=si.create,KT=vr.create,QT=Sn.create,JT=ts.create,XT=Ht.create,e_=$e.create,t_=$e.strictCreate,n_=fo.create,r_=bs.create,i_=po.create,o_=an.create,a_=mo.create,s_=ns.create,l_=_r.create,c_=ri.create,u_=go.create,d_=yo.create,h_=er.create,f_=vo.create,p_=li.create,rp=Yt.create,m_=tn.create,g_=tr.create,y_=Yt.createWithPreprocess,v_=So.create,w_=()=>Jm().optional(),b_=()=>Xm().optional(),k_=()=>eg().optional(),x_={string:(r=>qt.create({...r,coerce:!0})),number:(r=>Jn.create({...r,coerce:!0})),boolean:(r=>co.create({...r,coerce:!0})),bigint:(r=>Xn.create({...r,coerce:!0})),date:(r=>Tr.create({...r,coerce:!0}))},T_=ue;var wn=Object.freeze({__proto__:null,defaultErrorMap:ai,setErrorMap:yT,getErrorMap:Qa,makeIssue:Ja,EMPTY_PATH:vT,addIssueToContext:G,ParseStatus:at,INVALID:ue,DIRTY:ei,OK:dt,isAborted:$c,isDirty:qc,isValid:xr,isAsync:lo,get util(){return Ie},get objectUtil(){return Dc},ZodParsedType:J,getParsedType:xn,ZodType:ve,datetimeRegex:Zm,ZodString:qt,ZodNumber:Jn,ZodBigInt:Xn,ZodBoolean:co,ZodDate:Tr,ZodSymbol:es,ZodUndefined:uo,ZodNull:ho,ZodAny:si,ZodUnknown:vr,ZodNever:Sn,ZodVoid:ts,ZodArray:Ht,ZodObject:$e,ZodUnion:fo,ZodDiscriminatedUnion:bs,ZodIntersection:po,ZodTuple:an,ZodRecord:mo,ZodMap:ns,ZodSet:_r,ZodFunction:ri,ZodLazy:go,ZodLiteral:yo,ZodEnum:er,ZodNativeEnum:vo,ZodPromise:li,ZodEffects:Yt,ZodTransformer:Yt,ZodOptional:tn,ZodNullable:tr,ZodDefault:wo,ZodCatch:bo,ZodNaN:rs,BRAND:BT,ZodBranded:wu,ZodPipeline:So,ZodReadonly:ko,custom:Qm,Schema:ve,ZodSchema:ve,late:DT,get ZodFirstPartyTypeKind(){return le},coerce:x_,any:ZT,array:XT,bigint:HT,boolean:eg,date:UT,discriminatedUnion:r_,effect:rp,enum:h_,function:c_,instanceof:$T,intersection:i_,lazy:u_,literal:d_,map:s_,nan:qT,nativeEnum:f_,never:QT,null:YT,nullable:g_,number:Xm,object:e_,oboolean:k_,onumber:b_,optional:m_,ostring:w_,pipeline:v_,preprocess:y_,promise:p_,record:a_,set:l_,strictObject:t_,string:Jm,symbol:VT,transformer:rp,tuple:o_,undefined:GT,union:n_,unknown:KT,void:JT,NEVER:T_,ZodIssueCode:B,quotelessJson:gT,ZodError:St});wn.object({title:wn.string(),date:wn.string(),source:wn.string().optional().default(""),original_publish_date:wn.string().optional().default(""),original_url:wn.string().optional().default(""),status:wn.enum(["current","archive"]).default("current"),theme:wn.string().optional().default(""),featured:wn.boolean().optional().default(!1)});const tg={Capital:"Writing on capital formation, deployment, and the structures that shape how investment flows through emerging and frontier markets.",Governance:"Exploring institutional design, organizational governance, and the frameworks that determine how decisions are made at scale.","Cross-border":"Analysis of trade architecture, regulatory harmonization, and the systems that enable economic activity across national boundaries.",Networks:"How diaspora communities, professional networks, and social infrastructure create pathways for capital, knowledge, and opportunity."},__=Object.entries(tg);function S_(){return ln({title:"Themes",description:"Writing organized by topic — Capital, Governance, Cross-border, Networks."}),y.jsx(Rt,{children:y.jsxs("div",{className:"max-w-3xl mx-auto px-6 md:px-8 py-12",children:[y.jsx("h1",{className:"font-serif text-3xl font-bold tracking-tight text-foreground mb-2","data-testid":"text-themes-title",children:"Themes"}),y.jsx("p",{className:"text-sm text-muted-foreground mb-10","data-testid":"text-themes-subtitle",children:"Writing organized by topic."}),y.jsx("div",{className:"space-y-8",children:__.map(([r,n])=>y.jsx(Ke,{href:`/themes/${encodeURIComponent(r)}`,"data-testid":`link-theme-page-${r.toLowerCase()}`,children:y.jsx("div",{className:"group py-5 border-b border-border last:border-0",children:y.jsxs("div",{className:"flex items-start justify-between gap-4",children:[y.jsxs("div",{children:[y.jsx("h2",{className:"font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2","data-testid":`text-theme-name-${r.toLowerCase()}`,children:r}),y.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed",children:n})]}),y.jsx(qa,{className:"w-4 h-4 mt-1 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"})]})})},r))})]})})}function I_(){const r=os(),n=decodeURIComponent(r.theme||""),i=rT(n),a=tg[n]||"";return ln({title:n||"Theme",description:a||`Writing on ${n}.`}),y.jsx(Rt,{children:y.jsxs("div",{className:"max-w-3xl mx-auto px-6 md:px-8 py-12",children:[y.jsx(Ke,{href:"/themes","data-testid":"link-back-themes",children:y.jsxs("span",{className:"text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 mb-8 inline-flex",children:[y.jsx(Jc,{className:"w-3 h-3"})," Themes"]})}),y.jsx("h1",{className:"font-serif text-3xl font-bold tracking-tight text-foreground mb-3","data-testid":"text-theme-title",children:n}),a&&y.jsx("p",{className:"text-sm text-muted-foreground leading-relaxed mb-10 max-w-lg","data-testid":"text-theme-desc",children:a}),i.length>0?y.jsx("div",{className:"divide-y divide-border",children:i.map(s=>y.jsx(ws,{post:s},s.slug))}):y.jsx("p",{className:"text-sm text-muted-foreground py-6","data-testid":"text-no-theme-posts",children:"No posts for this theme yet."})]})})}function A_(){ln({title:"Archive",description:"Browse past writing by year."});const r=Hm();return y.jsx(Rt,{children:y.jsxs("div",{className:"max-w-3xl mx-auto px-6 md:px-8 py-12",children:[y.jsx("h1",{className:"font-serif text-3xl font-bold tracking-tight text-foreground mb-2","data-testid":"text-archive-title",children:"Archive"}),y.jsx("p",{className:"text-sm text-muted-foreground mb-10","data-testid":"text-archive-subtitle",children:"Browse past writing by year."}),r.length>0?y.jsx("div",{className:"divide-y divide-border",children:r.map(n=>y.jsx(Ke,{href:`/archive/${n.year}`,"data-testid":`link-archive-year-${n.year}`,children:y.jsxs("div",{className:"group flex items-center justify-between py-5",children:[y.jsxs("div",{className:"flex items-baseline gap-3",children:[y.jsx("span",{className:"font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors","data-testid":`text-year-${n.year}`,children:n.year}),y.jsxs("span",{className:"text-xs text-muted-foreground",children:[n.count," ",n.count===1?"post":"posts"]})]}),y.jsx(qa,{className:"w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"})]})},n.year))}):y.jsx("p",{className:"text-sm text-muted-foreground py-6","data-testid":"text-no-archive",children:"No archived posts yet."})]})})}function C_(){const n=os().year,i=parseInt(n||"",10),a=isNaN(i)?[]:oT(i);return ln({title:`Archive ${n}`,description:`Archived writing from ${n}.`}),y.jsx(Rt,{children:y.jsxs("div",{className:"max-w-3xl mx-auto px-6 md:px-8 py-12",children:[y.jsx(Ke,{href:"/archive","data-testid":"link-back-archive",children:y.jsxs("span",{className:"text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 mb-8 inline-flex",children:[y.jsx(Jc,{className:"w-3 h-3"})," Archive"]})}),y.jsx("h1",{className:"font-serif text-3xl font-bold tracking-tight text-foreground mb-2","data-testid":"text-archive-year-title",children:n}),y.jsxs("p",{className:"text-sm text-muted-foreground mb-10",children:["Archived writing from ",n,"."]}),a.length>0?y.jsx("div",{className:"divide-y divide-border",children:a.map(s=>y.jsx(ws,{post:s},s.slug))}):y.jsxs("p",{className:"text-sm text-muted-foreground py-6","data-testid":"text-no-year-posts",children:["No posts from ",n,"."]})]})})}function E_(){const r=vu("media");return ln({title:"Media",description:"Books, papers, media appearances, and events by Alban Jerome."}),y.jsx(Rt,{children:y.jsxs("div",{className:"max-w-3xl mx-auto px-6 md:px-8 py-12","data-testid":"section-media",children:[y.jsx("h1",{className:"font-serif text-3xl font-bold tracking-tight text-foreground mb-10","data-testid":"text-media-title",children:"Media"}),r&&y.jsx(yr,{html:r.html})]})})}function j_(){return y.jsx(Rt,{children:y.jsxs("div",{className:"max-w-3xl mx-auto px-6 md:px-8 py-20 text-center",children:[y.jsx("h1",{className:"font-serif text-4xl font-bold text-foreground mb-4","data-testid":"text-404-title",children:"404"}),y.jsx("p",{className:"text-sm text-muted-foreground mb-8","data-testid":"text-404-message",children:"This page does not exist."}),y.jsx(Ke,{href:"/","data-testid":"link-404-home",children:y.jsx("span",{className:"text-sm text-primary hover:underline",children:"Return home"})})]})})}function N_(){return y.jsxs(jv,{children:[y.jsx(Bt,{path:"/",component:aT}),y.jsx(Bt,{path:"/writing",component:lT}),y.jsx(Bt,{path:"/writing/:slug",component:cT}),y.jsx(Bt,{path:"/about",component:dT}),y.jsx(Bt,{path:"/contact",component:pT}),y.jsx(Bt,{path:"/themes",component:S_}),y.jsx(Bt,{path:"/themes/:theme",component:I_}),y.jsx(Bt,{path:"/archive",component:A_}),y.jsx(Bt,{path:"/archive/:year",component:C_}),y.jsx(Bt,{path:"/media",component:E_}),y.jsx(Bt,{component:j_})]})}function R_(){return y.jsxs(qk,{children:[y.jsx(yb,{}),y.jsx(N_,{})]})}av.createRoot(document.getElementById("root")).render(y.jsx(R_,{}));
