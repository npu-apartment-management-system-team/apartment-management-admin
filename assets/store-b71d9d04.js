import{a as commonjsGlobal,g as getDefaultExportFromCjs}from"./classnames-4ba1ba1a.js";var assign=make_assign(),create$1=make_create(),trim$1=make_trim(),Global$5=typeof window<"u"?window:commonjsGlobal,util$6={assign,create:create$1,trim:trim$1,bind:bind$1,slice:slice$1,each:each$7,map,pluck:pluck$1,isList:isList$1,isFunction:isFunction$1,isObject:isObject$1,Global:Global$5};function make_assign(){return Object.assign?Object.assign:function(r,t,n,o){for(var u=1;u<arguments.length;u++)each$7(Object(arguments[u]),function(l,i){r[i]=l});return r}}function make_create(){if(Object.create)return function(r,t,n,o){var u=slice$1(arguments,1);return assign.apply(this,[Object.create(r)].concat(u))};{let e=function(){};return function(t,n,o,u){var l=slice$1(arguments,1);return e.prototype=t,assign.apply(this,[new e].concat(l))}}}function make_trim(){return String.prototype.trim?function(r){return String.prototype.trim.call(r)}:function(r){return r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}}function bind$1(e,r){return function(){return r.apply(e,Array.prototype.slice.call(arguments,0))}}function slice$1(e,r){return Array.prototype.slice.call(e,r||0)}function each$7(e,r){pluck$1(e,function(t,n){return r(t,n),!1})}function map(e,r){var t=isList$1(e)?[]:{};return pluck$1(e,function(n,o){return t[o]=r(n,o),!1}),t}function pluck$1(e,r){if(isList$1(e)){for(var t=0;t<e.length;t++)if(r(e[t],t))return e[t]}else for(var n in e)if(e.hasOwnProperty(n)&&r(e[n],n))return e[n]}function isList$1(e){return e!=null&&typeof e!="function"&&typeof e.length=="number"}function isFunction$1(e){return e&&{}.toString.call(e)==="[object Function]"}function isObject$1(e){return e&&{}.toString.call(e)==="[object Object]"}var util$5=util$6,slice=util$5.slice,pluck=util$5.pluck,each$6=util$5.each,bind=util$5.bind,create=util$5.create,isList=util$5.isList,isFunction=util$5.isFunction,isObject=util$5.isObject,storeEngine={createStore},storeAPI={version:"2.0.12",enabled:!1,get:function(e,r){var t=this.storage.read(this._namespacePrefix+e);return this._deserialize(t,r)},set:function(e,r){return r===void 0?this.remove(e):(this.storage.write(this._namespacePrefix+e,this._serialize(r)),r)},remove:function(e){this.storage.remove(this._namespacePrefix+e)},each:function(e){var r=this;this.storage.each(function(t,n){e.call(r,r._deserialize(t),(n||"").replace(r._namespaceRegexp,""))})},clearAll:function(){this.storage.clearAll()},hasNamespace:function(e){return this._namespacePrefix=="__storejs_"+e+"_"},createStore:function(){return createStore.apply(this,arguments)},addPlugin:function(e){this._addPlugin(e)},namespace:function(e){return createStore(this.storage,this.plugins,e)}};function _warn(){var e=typeof console>"u"?null:console;if(e){var r=e.warn?e.warn:e.log;r.apply(e,arguments)}}function createStore(e,r,t){t||(t=""),e&&!isList(e)&&(e=[e]),r&&!isList(r)&&(r=[r]);var n=t?"__storejs_"+t+"_":"",o=t?new RegExp("^"+n):null,u=/^[a-zA-Z0-9_\-]*$/;if(!u.test(t))throw new Error("store.js namespaces can only have alphanumerics + underscores and dashes");var l={_namespacePrefix:n,_namespaceRegexp:o,_testStorage:function(a){try{var s="__storejs__test__";a.write(s,s);var c=a.read(s)===s;return a.remove(s),c}catch{return!1}},_assignPluginFnProp:function(a,s){var c=this[s];this[s]=function(){var g=slice(arguments,0),p=this;function m(){if(c)return each$6(arguments,function(h,$){g[$]=h}),c.apply(p,g)}var d=[m].concat(g);return a.apply(p,d)}},_serialize:function(a){return JSON.stringify(a)},_deserialize:function(a,s){if(!a)return s;var c="";try{c=JSON.parse(a)}catch{c=a}return c!==void 0?c:s},_addStorage:function(a){this.enabled||this._testStorage(a)&&(this.storage=a,this.enabled=!0)},_addPlugin:function(a){var s=this;if(isList(a)){each$6(a,function(g){s._addPlugin(g)});return}var c=pluck(this.plugins,function(g){return a===g});if(!c){if(this.plugins.push(a),!isFunction(a))throw new Error("Plugins must be function values that return objects");var v=a.call(this);if(!isObject(v))throw new Error("Plugins must return an object of function properties");each$6(v,function(g,p){if(!isFunction(g))throw new Error("Bad plugin property: "+p+" from plugin "+a.name+". Plugins should only return functions.");s._assignPluginFnProp(g,p)})}},addStorage:function(a){_warn("store.addStorage(storage) is deprecated. Use createStore([storages])"),this._addStorage(a)}},i=create(l,storeAPI,{plugins:[]});return i.raw={},each$6(i,function(a,s){isFunction(a)&&(i.raw[s]=bind(i,a))}),each$6(e,function(a){i._addStorage(a)}),each$6(r,function(a){i._addPlugin(a)}),i}var util$4=util$6,Global$4=util$4.Global,localStorage_1={name:"localStorage",read:read$5,write:write$5,each:each$5,remove:remove$5,clearAll:clearAll$5};function localStorage(){return Global$4.localStorage}function read$5(e){return localStorage().getItem(e)}function write$5(e,r){return localStorage().setItem(e,r)}function each$5(e){for(var r=localStorage().length-1;r>=0;r--){var t=localStorage().key(r);e(read$5(t),t)}}function remove$5(e){return localStorage().removeItem(e)}function clearAll$5(){return localStorage().clear()}var util$3=util$6,Global$3=util$3.Global,oldFFGlobalStorage={name:"oldFF-globalStorage",read:read$4,write:write$4,each:each$4,remove:remove$4,clearAll:clearAll$4},globalStorage=Global$3.globalStorage;function read$4(e){return globalStorage[e]}function write$4(e,r){globalStorage[e]=r}function each$4(e){for(var r=globalStorage.length-1;r>=0;r--){var t=globalStorage.key(r);e(globalStorage[t],t)}}function remove$4(e){return globalStorage.removeItem(e)}function clearAll$4(){each$4(function(e,r){delete globalStorage[e]})}var util$2=util$6,Global$2=util$2.Global,oldIEUserDataStorage={name:"oldIE-userDataStorage",write:write$3,read:read$3,each:each$3,remove:remove$3,clearAll:clearAll$3},storageName="storejs",doc$1=Global$2.document,_withStorageEl=_makeIEStorageElFunction(),disable=(Global$2.navigator?Global$2.navigator.userAgent:"").match(/ (MSIE 8|MSIE 9|MSIE 10)\./);function write$3(e,r){if(!disable){var t=fixKey(e);_withStorageEl(function(n){n.setAttribute(t,r),n.save(storageName)})}}function read$3(e){if(!disable){var r=fixKey(e),t=null;return _withStorageEl(function(n){t=n.getAttribute(r)}),t}}function each$3(e){_withStorageEl(function(r){for(var t=r.XMLDocument.documentElement.attributes,n=t.length-1;n>=0;n--){var o=t[n];e(r.getAttribute(o.name),o.name)}})}function remove$3(e){var r=fixKey(e);_withStorageEl(function(t){t.removeAttribute(r),t.save(storageName)})}function clearAll$3(){_withStorageEl(function(e){var r=e.XMLDocument.documentElement.attributes;e.load(storageName);for(var t=r.length-1;t>=0;t--)e.removeAttribute(r[t].name);e.save(storageName)})}var forbiddenCharsRegex=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g");function fixKey(e){return e.replace(/^\d/,"___$&").replace(forbiddenCharsRegex,"___")}function _makeIEStorageElFunction(){if(!doc$1||!doc$1.documentElement||!doc$1.documentElement.addBehavior)return null;var e="script",r,t,n;try{t=new ActiveXObject("htmlfile"),t.open(),t.write("<"+e+">document.w=window</"+e+'><iframe src="/favicon.ico"></iframe>'),t.close(),r=t.w.frames[0].document,n=r.createElement("div")}catch{n=doc$1.createElement("div"),r=doc$1.body}return function(o){var u=[].slice.call(arguments,0);u.unshift(n),r.appendChild(n),n.addBehavior("#default#userData"),n.load(storageName),o.apply(this,u),r.removeChild(n)}}var util$1=util$6,Global$1=util$1.Global,trim=util$1.trim,cookieStorage={name:"cookieStorage",read:read$2,write:write$2,each:each$2,remove:remove$2,clearAll:clearAll$2},doc=Global$1.document;function read$2(e){if(!e||!_has(e))return null;var r="(?:^|.*;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*";return unescape(doc.cookie.replace(new RegExp(r),"$1"))}function each$2(e){for(var r=doc.cookie.split(/; ?/g),t=r.length-1;t>=0;t--)if(trim(r[t])){var n=r[t].split("="),o=unescape(n[0]),u=unescape(n[1]);e(u,o)}}function write$2(e,r){e&&(doc.cookie=escape(e)+"="+escape(r)+"; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/")}function remove$2(e){!e||!_has(e)||(doc.cookie=escape(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/")}function clearAll$2(){each$2(function(e,r){remove$2(r)})}function _has(e){return new RegExp("(?:^|;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(doc.cookie)}var util=util$6,Global=util.Global,sessionStorage_1={name:"sessionStorage",read:read$1,write:write$1,each:each$1,remove:remove$1,clearAll:clearAll$1};function sessionStorage(){return Global.sessionStorage}function read$1(e){return sessionStorage().getItem(e)}function write$1(e,r){return sessionStorage().setItem(e,r)}function each$1(e){for(var r=sessionStorage().length-1;r>=0;r--){var t=sessionStorage().key(r);e(read$1(t),t)}}function remove$1(e){return sessionStorage().removeItem(e)}function clearAll$1(){return sessionStorage().clear()}var memoryStorage_1={name:"memoryStorage",read,write,each,remove,clearAll},memoryStorage={};function read(e){return memoryStorage[e]}function write(e,r){memoryStorage[e]=r}function each(e){for(var r in memoryStorage)memoryStorage.hasOwnProperty(r)&&e(memoryStorage[r],r)}function remove(e){delete memoryStorage[e]}function clearAll(e){memoryStorage={}}var all=[localStorage_1,oldFFGlobalStorage,oldIEUserDataStorage,cookieStorage,sessionStorage_1,memoryStorage_1],json2$1={},hasRequiredJson2;function requireJson2(){return hasRequiredJson2||(hasRequiredJson2=1,typeof JSON!="object"&&(JSON={}),function(){var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;function f(e){return e<10?"0"+e:e}function this_value(){return this.valueOf()}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value);var gap,indent,meta,rep;function quote(e){return rx_escapable.lastIndex=0,rx_escapable.test(e)?'"'+e.replace(rx_escapable,function(r){var t=meta[r];return typeof t=="string"?t:"\\u"+("0000"+r.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,r){var t,n,o,u,l=gap,i,a=r[e];switch(a&&typeof a=="object"&&typeof a.toJSON=="function"&&(a=a.toJSON(e)),typeof rep=="function"&&(a=rep.call(r,e,a)),typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a)return"null";if(gap+=indent,i=[],Object.prototype.toString.apply(a)==="[object Array]"){for(u=a.length,t=0;t<u;t+=1)i[t]=str(t,a)||"null";return o=i.length===0?"[]":gap?`[
`+gap+i.join(`,
`+gap)+`
`+l+"]":"["+i.join(",")+"]",gap=l,o}if(rep&&typeof rep=="object")for(u=rep.length,t=0;t<u;t+=1)typeof rep[t]=="string"&&(n=rep[t],o=str(n,a),o&&i.push(quote(n)+(gap?": ":":")+o));else for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(o=str(n,a),o&&i.push(quote(n)+(gap?": ":":")+o));return o=i.length===0?"{}":gap?`{
`+gap+i.join(`,
`+gap)+`
`+l+"}":"{"+i.join(",")+"}",gap=l,o}}typeof JSON.stringify!="function"&&(meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(e,r,t){var n;if(gap="",indent="",typeof t=="number")for(n=0;n<t;n+=1)indent+=" ";else typeof t=="string"&&(indent=t);if(rep=r,r&&typeof r!="function"&&(typeof r!="object"||typeof r.length!="number"))throw new Error("JSON.stringify");return str("",{"":e})}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){var j;function walk(e,r){var t,n,o=e[r];if(o&&typeof o=="object")for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n=walk(o,t),n!==void 0?o[t]=n:delete o[t]);return reviver.call(e,r,o)}if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}()),json2$1}var json2=json2Plugin;function json2Plugin(){return requireJson2(),{}}var engine=storeEngine,storages=all,plugins=[json2],store_legacy=engine.createStore(storages,plugins);const store=getDefaultExportFromCjs(store_legacy);export{store as s};
