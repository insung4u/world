(window.webpackJsonp=window.webpackJsonp||[]).push([[5,14],{108:function(t,e,r){"use strict";r.r(e);var n=r(158),a=r(69),o=r(524),i=r.n(o),c=r(525),l=r(90),s=r(0),u=r.n(s),f=r(35),h=r(50),p=r(89),m=r(154),d=r(7),y=r(532),v=r.n(y),g=r(156),b=r(237);e.default=Object(p.a)(g.b,Object(h.d)("form"))(function(t){var e=t.match.params,r=t.history,o=t.t,h=Object(s.useState)(!1),p=Object(l.a)(h,2),y=p[0],g=p[1],w=Object(s.useState)(!1),E=Object(l.a)(w,2),x=E[0],N=E[1],j=Object(s.useState)({}),O=Object(l.a)(j,2),L=O[0],k=O[1],_=Object(s.useState)({slug:"",title:"",description:"",body:"",tag:""}),S=Object(l.a)(_,2),P=S[0],C=S[1],G=P.slug,T=P.title,F=P.description,A=P.body,B=P.tag,I=Object(f.c)(function(t){return t.auth},[]).userInfo,M=Object(s.useRef)(d.a.CancelToken.source()),R=Object(s.useCallback)(function(){var e=Object(c.a)(i.a.mark(function e(n){var a,c,l;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),e.next=4,d.a.Articles.get({slug:n,config:{cancelToken:M.current.token}});case 4:if(a=e.sent,c=a.data,(l=c.article).author.username===I.username){e.next=11;break}return t.alert.error(o("errorModifyAuth")),r.goBack(),e.abrupt("return");case 11:g(!1),C({slug:l.slug,title:l.title,description:l.description,body:l.body,tag:l.tagList.join(", ")}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),e.t0.response&&"404"===e.t0.response.data.status&&r.goBack();case 18:case"end":return e.stop()}},e,null,[[0,15]])}));return function(t){return e.apply(this,arguments)}}(),[r,t.alert,o,I.username]),W=Object(s.useCallback)(function(){M.current.cancel()},[]);Object(s.useEffect)(function(){return e.slug&&R(e.slug),function(){W()}},[R,W,e.slug]);var D=function(t){return function(e){C(Object(a.a)({},P,Object(n.a)({},t,e.target.value)))}};return y?u.a.createElement("div",null):u.a.createElement(b.default,{className:"container"},u.a.createElement(m.Helmet,{title:o(G?"headingModify":"headingWrite")}),u.a.createElement("div",{className:"common-form"},u.a.createElement("h2",{className:"form-title"},o(G?"headingModify":"headingWrite")),u.a.createElement("form",{onSubmit:function(n){var a=B.length?B.split(",").map(function(t){return t.trim()}):[];if(n.preventDefault(),function(){var t={};return v.a.isEmpty(T)&&(t.title=o("validate:emptyTitle")),v.a.isEmpty(F)&&(t.description=o("validate:emptyDescription")),v.a.isEmpty(A)&&(t.body=o("validate:emptyBody")),0===Object.keys(t).length||(k(t),!1)}()){N(!0),k({});var i=e.slug?"update":"create";d.a.Articles[i]({article:{slug:G,title:T,description:F,body:A,tagList:a}}).then(function(t){N(!1),r.push("/article/".concat(t.data.article.slug))}).catch(function(e){t.alert.error(o("errorWrite")),N(!1)})}}},u.a.createElement("fieldset",null,u.a.createElement("div",{className:"form-row"},u.a.createElement("label",null,u.a.createElement("span",{className:"form-head"},o("title")),u.a.createElement("input",{type:"text",placeholder:o("title"),className:"txt large block",disabled:x,value:T,onChange:D("title")})),L.title&&u.a.createElement("p",{className:"input-error"},u.a.createElement("i",{className:"fas fa-times-circle"})," ",L.title)),u.a.createElement("div",{className:"form-row"},u.a.createElement("label",null,u.a.createElement("span",{className:"form-head"},o("description")),u.a.createElement("input",{type:"text",placeholder:o("description"),className:"txt large block",disabled:x,value:F,onChange:D("description")})),L.description&&u.a.createElement("p",{className:"input-error"},u.a.createElement("i",{className:"fas fa-times-circle"})," ",L.description)),u.a.createElement("div",{className:"form-row"},u.a.createElement("label",null,u.a.createElement("span",{className:"form-head"},o("body")),u.a.createElement("textarea",{cols:"60",rows:"10",placeholder:o("body"),className:"txt large block",disabled:x,value:A,onChange:D("body")})),L.body&&u.a.createElement("p",{className:"input-error"},u.a.createElement("i",{className:"fas fa-times-circle"})," ",L.body)),u.a.createElement("div",{className:"form-row"},u.a.createElement("label",null,u.a.createElement("span",{className:"form-head"},o("tag")),u.a.createElement("input",{type:"text",placeholder:o("tag"),className:"txt large block",disabled:x,value:B,onChange:D("tag")}))),x&&u.a.createElement("div",null,o("sending")),u.a.createElement("div",{className:"form-action"},u.a.createElement("button",{type:"submit",className:"btn large primary",disabled:x},o("common:write"))," ",u.a.createElement("button",{type:"button",className:"btn large",disabled:x,onClick:r.goBack},o("common:cancel")))))))})},237:function(t,e,r){"use strict";r.r(e);var n=r(87),a=r(88);function o(){var t=Object(n.a)(["\n"]);return o=function(){return t},t}e.default=a.a.div(o())},524:function(t,e,r){t.exports=r(530)},525:function(t,e,r){"use strict";function n(t,e,r,n,a,o,i){try{var c=t[o](i),l=c.value}catch(s){return void r(s)}c.done?e(l):Promise.resolve(l).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise(function(a,o){var i=t.apply(e,r);function c(t){n(i,a,o,c,l,"next",t)}function l(t){n(i,a,o,c,l,"throw",t)}c(void 0)})}}r.d(e,"a",function(){return a})},530:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(t,e,r,n){var a=e&&e.prototype instanceof d?e:d,o=Object.create(a.prototype),i=new k(n||[]);return o._invoke=function(t,e,r){var n=u;return function(a,o){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===a)throw o;return S()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=j(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===u)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var l=s(t,e,r);if("normal"===l.type){if(n=r.done?p:f,l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=p,r.method="throw",r.arg=l.arg)}}}(t,r,i),o}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=l;var u="suspendedStart",f="suspendedYield",h="executing",p="completed",m={};function d(){}function y(){}function v(){}var g={};g[o]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(_([])));w&&w!==r&&n.call(w,o)&&(g=w);var E=v.prototype=d.prototype=Object.create(g);function x(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function N(t){var e;this._invoke=function(r,a){function o(){return new Promise(function(e,o){!function e(r,a,o,i){var c=s(t[r],t,a);if("throw"!==c.type){var l=c.arg,u=l.value;return u&&"object"===typeof u&&n.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,o,i)},function(t){e("throw",t,o,i)}):Promise.resolve(u).then(function(t){l.value=t,o(l)},function(t){return e("throw",t,o,i)})}i(c.arg)}(r,a,e,o)})}return e=e?e.then(o,o):o()}}function j(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=s(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var o=a.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function _(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:S}}function S(){return{value:e,done:!0}}return y.prototype=E.constructor=v,v.constructor=y,v[c]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},x(N.prototype),N.prototype[i]=function(){return this},t.AsyncIterator=N,t.async=function(e,r,n,a){var o=new N(l(e,r,n,a));return t.isGeneratorFunction(r)?o:o.next().then(function(t){return t.done?t.value:o.next()})},x(E),E[c]="Generator",E[o]=function(){return this},E.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return c.type="throw",c.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:_(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}}}]);