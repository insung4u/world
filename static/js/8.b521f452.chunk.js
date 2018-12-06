(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{394:function(t,e,n){t.exports=n(403)},395:function(t,e,n){"use strict";function r(t,e,n,r,a,o,i){try{var c=t[o](i),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(r,a)}function a(t){return function(){var e=this,n=arguments;return new Promise(function(a,o){var i=t.apply(e,n);function c(t){r(i,a,o,c,s,"next",t)}function s(t){r(i,a,o,c,s,"throw",t)}c(void 0)})}}n.d(e,"a",function(){return a})},396:function(t,e,n){"use strict";var r=n(116),a=n(117);function o(){var t=Object(r.a)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  &:empty {\n    display: none;\n  }\n\n  li {\n    height: 22px;\n    line-height: 20px;\n    margin: 0 4px 4px 0;\n    padding: 0 10px;\n    font-weight: 300;\n    font-size: 12px;\n    color: #97a1a7;\n    word-wrap: break-word;\n    background: #fff;\n    border: 1px solid #cfd3d6;\n    border-radius: 10px;\n  }\n"]);return o=function(){return t},t}e.a=a.a.ul(o())},397:function(t,e,n){"use strict";var r=n(116),a=n(117);function o(){var t=Object(r.a)(["\n  display: flex;\n  align-items: center;\n\n  .link {\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      .name {\n        text-decoration: underline;\n      }\n    }\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .img {\n    flex-shrink: 0;\n    width: 24px;\n    height: 24px;\n    border-radius: 16px;\n    overflow: hidden;\n\n    img {\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  .con {\n    flex: 1;\n  }\n\n  .name {\n    margin-left: 10px;\n    font-size: 13px;\n  }\n\n  .date {\n    margin-left: 10px;\n    font-size: 11px;\n    color: inherit;\n    opacity: .6;\n  }\n"]);return o=function(){return t},t}e.a=a.a.div(o())},398:function(t,e,n){"use strict";var r=n(116),a=n(117);function o(){var t=Object(r.a)(["\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 25px;\n  padding: 0 5px;\n  font-size: 12px;\n  border: 1px solid #07c;\n  border-radius: 5px;\n  cursor: pointer;\n\n  ","\n\n  .txt {\n    position: absolute;\n    left: -9999px;\n  }\n\n  .count {\n    margin-left: 5px;\n  }\n\n  .loading {\n    animation: spin 1s infinite linear;\n  }\n\n  @keyframes spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"]);return o=function(){return t},t}e.a=a.a.button(o(),function(t){return t.favorited?"\n      color: #fff;\n      background: #07c;\n\n      i {\n        color: #fff;\n      }\n    ":"\n      color: #07c;\n      background: #fff;\n\n      i {\n        color: #07c;\n      }\n    "})},400:function(t,e,n){"use strict";var r=n(0),a=n.n(r),o=n(488),i=n(397);e.a=function(t){var e=t.username,n=t.image,r=t.createdAt;return a.a.createElement(i.a,null,a.a.createElement(o.a,{to:"/@".concat(e),className:"link"},a.a.createElement("div",{className:"img"},a.a.createElement("img",{src:n||"".concat("/world","/assets/profile-dummy.jpg"),alt:""})),a.a.createElement("p",{className:"name"},e)),a.a.createElement("p",{className:"date"},new Date(r).toDateString()))}},401:function(t,e,n){"use strict";var r=n(0),a=n.n(r),o=n(396);e.a=function(t){var e=t.tags;return a.a.createElement(o.a,null,e.map(function(t){return a.a.createElement("li",{key:t},t)}))}},402:function(t,e,n){"use strict";var r=n(394),a=n.n(r),o=n(395),i=n(50),c=n(51),s=n(53),u=n(52),l=n(54),f=n(0),p=n.n(f),d=n(498),m=n(36),h=n(8),g=n(15),v=n(118),b=n(398),x=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).like=Object(o.a)(a.a.mark(function t(){var e,r,o,i,c;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=n.state,r=e.slug,o=e.favorited,n.props.user){t.next=4;break}return Object(v.a)(n.props),t.abrupt("return");case 4:return t.prev=4,n.setState(Object(g.a)(function(t){t.loading=!0})),n.req=h.a.CancelToken.source(),t.next=9,h.a.Articles[o?"unfavorite":"favorite"]({slug:r,source:n.req});case 9:i=t.sent,c=i.data,n.setState(Object(g.a)(function(t){t.loading=!1,t.favorited=c.article.favorited,t.favoritesCount=c.article.favoritesCount})),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(4),console.log(t.t0);case 17:case"end":return t.stop()}},t,this,[[4,14]])})),n.state={slug:t.slug,favorited:t.favorited,favoritesCount:t.favoritesCount},n}return Object(l.a)(e,t),Object(c.a)(e,[{key:"componentWillUnmount",value:function(){this.req&&this.req.cancel()}},{key:"render",value:function(){var t=this.state,e=t.loading,n=t.favorited,r=t.favoritesCount;return p.a.createElement(b.a,{type:"button",onClick:this.like,favorited:n},e?p.a.createElement("i",{className:"fas fa-spinner loading"}):p.a.createElement(p.a.Fragment,null,p.a.createElement("i",{className:"fas fa-heart"}),p.a.createElement("span",{className:"txt"},"\uc88b\uc544\uc694")," ",p.a.createElement("span",{className:"count"},r)))}}]),e}(f.Component);x.defaultProps={loading:!1,slug:"",favorited:!1,favoritesCount:0};e.a=Object(d.a)(Object(m.b)(function(t){return{user:t.auth.user,userInfo:t.auth.userInfo}},function(t){return{}})(x))},403:function(t,e,n){var r=function(){return this||"object"===typeof self&&self}()||Function("return this")(),a=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=a&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n(404),a)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(i){r.regeneratorRuntime=void 0}},404:function(t,e){!function(e){"use strict";var n,r=Object.prototype,a=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{(l=e.regeneratorRuntime=u?t.exports:{}).wrap=y;var f="suspendedStart",p="suspendedYield",d="executing",m="completed",h={},g={};g[i]=function(){return this};var v=Object.getPrototypeOf,b=v&&v(v(S([])));b&&b!==r&&a.call(b,i)&&(g=b);var x=k.prototype=E.prototype=Object.create(g);j.prototype=x.constructor=k,k.constructor=j,k[s]=j.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===j||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(x),t},l.awrap=function(t){return{__await:t}},O(N.prototype),N.prototype[c]=function(){return this},l.AsyncIterator=N,l.async=function(t,e,n,r){var a=new N(y(t,e,n,r));return l.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},O(x),x[s]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=S,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(A),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,a){return c.type="throw",c.arg=t,e.next=r,a&&(e.method="next",e.arg=n),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),A(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;A(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),h}}}function y(t,e,n,r){var a=e&&e.prototype instanceof E?e:E,o=Object.create(a.prototype),i=new _(r||[]);return o._invoke=function(t,e,n){var r=f;return function(a,o){if(r===d)throw new Error("Generator is already running");if(r===m){if("throw"===a)throw o;return z()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=L(i,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var s=w(t,e,n);if("normal"===s.type){if(r=n.done?m:p,s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=m,n.method="throw",n.arg=s.arg)}}}(t,n,i),o}function w(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function E(){}function j(){}function k(){}function O(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function N(t){var e;this._invoke=function(n,r){function o(){return new Promise(function(e,o){!function e(n,r,o,i){var c=w(t[n],t,r);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"===typeof u&&a.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,o,i)},function(t){e("throw",t,o,i)}):Promise.resolve(u).then(function(t){s.value=t,o(s)},function(t){return e("throw",t,o,i)})}i(c.arg)}(n,r,e,o)})}return e=e?e.then(o,o):o()}}function L(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,L(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var a=w(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,h;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function S(t){if(t){var e=t[i];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:z}}function z(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},495:function(t,e,n){"use strict";n.r(e);var r=n(394),a=n.n(r),o=n(395),i=n(50),c=n(51),s=n(53),u=n(52),l=n(54),f=n(0),p=n.n(f),d=n(36),m=n(18),h=n(121),g=n(8),v=n(119),b=n.n(v),x=n(400),y=n(402),w=n(488),E=n(498),j=n(15),k=n(116),O=n(117);function N(){var t=Object(k.a)(["\n  box-sizing: border-box;\n  margin-bottom: 20px;\n  border: 1px solid #ddd;\n\n  .comment-txt {\n    textarea {\n      box-sizing: border-box;\n      display: block;\n      width: 100%;\n      height: 80px;\n      padding: 10px;\n      border: 0;\n      border-radius: 0;\n      resize: none;\n    }\n  }\n\n  .action {\n    padding: 10px;\n    background: #ebedee;\n  }\n"]);return N=function(){return t},t}var L=O.a.form(N()),C=function(t){function e(){var t,n;Object(i.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={comment:"",loading:!1},n.submitHandle=function(t){var e=n.props,r=e.articleActions,a=e.slug,o=n.state.comment;if(t.preventDefault(),""===o)return alert("\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"),void n.refs.comment.focus();n.setState(Object(j.a)(function(t){t.loading=!0})),r.createComment({slug:a,comment:{body:o}}).then(function(t){n.setState(Object(j.a)(function(t){t.loading=!1,t.comment=""}))}).catch(function(t){alert("\ub313\uae00 \ub4f1\ub85d\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")})},n.changeInput=function(t){return function(e){var r=e.target.value;n.setState(Object(j.a)(function(e){e[t]=r}))}},n}return Object(l.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.props.user,e=this.state.loading;return t?p.a.createElement(L,{onSubmit:this.submitHandle},p.a.createElement("div",{className:"comment-txt"},p.a.createElement("textarea",{ref:"comment",rows:"10",cols:"40",placeholder:"\ub313\uae00\uc744 \uc785\ub825\ud558\uc138\uc694",value:this.state.comment,onChange:this.changeInput("comment"),disabled:e})),p.a.createElement("div",{className:"action"},p.a.createElement("button",{type:"submit",className:"btn light"},"\ub4f1\ub85d"))):p.a.createElement("div",null,"\ub313\uae00\uc744 \ub0a8\uae30\ub824\uba74 ",p.a.createElement(w.a,{to:"/login"},"\ub85c\uadf8\uc778"),"\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.")}}]),e}(f.Component),A=Object(E.a)(Object(d.b)(function(t){return{user:t.auth.user,userInfo:t.auth.userInfo,loading:t.article.loading,article:t.article.article,comments:t.article.comments}},function(t){return{articleActions:Object(m.b)(h,t)}})(C));function _(){var t=Object(k.a)(["\n  padding: 0;\n\n  li {\n    list-style: none;\n    border: 1px solid #ddd;\n\n    &:not(:first-child) {\n      margin-top: 10px;\n    }\n  }\n\n  .no-item {\n    padding: 20px 10px;\n  }\n\n  .info {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 5px 10px;\n    background: #ededed;\n  }\n\n  .content {\n    padding: 10px;\n    background: #fff;\n    border-top: 1px solid #ddd;\n  }\n"]);return _=function(){return t},t}var S=O.a.ul(_()),z=function(t){var e=t.slug,n=t.comments,r=t.deleteComment;return p.a.createElement(S,null,n.length?n.map(function(t){return p.a.createElement("li",{key:t.id},p.a.createElement("div",{className:"info"},p.a.createElement(x.a,{image:t.author.image,username:t.author.username,createdAt:t.createdAt}),p.a.createElement("button",{type:"button",className:"btn light small",onClick:function(){r(e,t.id)}},"\uc0ad\uc81c")),p.a.createElement("div",{className:"content"},t.body))}):p.a.createElement("li",{className:"no-item"},"\ub4f1\ub85d\ub41c \ub313\uae00\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."))},I=n(401),P=n(118),R=n(396);function F(){var t=Object(k.a)(["\n  .comment-title {\n    margin-top: 30px;\n    margin-bottom: 10px;\n    padding: 0 5px;\n    font-weight: 500;\n    font-size: 20px;\n    color: #374047;\n  }\n"]);return F=function(){return t},t}function G(){var t=Object(k.a)(["\n  padding-bottom: 30px;\n  border-bottom: 1px solid #dee1e3;\n\n  > .body {\n    min-height: 150px;\n    line-height: 1.8;\n    font-size: 16px;\n    color: #374047;\n    word-wrap: break-word;\n\n    p, ul, dl {\n      &:not(:first-child) { margin: 20px 0 10px; }\n    }\n\n    h1, h2, h3, h4, h5, h6 {\n      font-weight: 500;\n    }\n  }\n\n  "," {\n    margin-top: 30px;\n  }\n"]);return G=function(){return t},t}function T(){var t=Object(k.a)(["\n  color: #fff;\n  background: #97a1a7;\n\n  .wrap {\n    box-sizing: border-box;\n    max-width: 1100px;\n    margin: 0 auto;\n    padding: 20px 5% 10px;\n  }\n\n  .subject {\n    line-height: 1.3;\n    font-weight: 500;\n    font-size: 32px;\n    word-wrap: break-word;\n  }\n\n  .desc {\n    font-size: 16px;\n    word-wrap: break-word;\n  }\n\n  .info {\n    display: flex;\n    align-items: center;\n    margin-top: 20px;\n    padding-top: 10px;\n    border-top: 1px solid #bec4c8;\n\n    > div {\n      margin-right: 20px;\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    .wrap {\n      padding: 20px 5% 20px;\n    }\n  }\n"]);return T=function(){return t},t}var q=O.a.div(T()),D=O.a.div(G(),R.a),H=O.a.div(F()),B=function(t){function e(){var t,n;Object(i.a)(this,e);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(c)))).delete=Object(o.a)(a.a.mark(function t(){var e,r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=n.props.match.params.slug,r=n.props.history,!window.confirm("\uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){t.next=12;break}return t.prev=3,t.next=6,g.a.Articles.delete({slug:e});case 6:r.goBack(),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(3),"not owned by user"===t.t0.response.data.errors.article[0]?alert("\uc791\uc131\uc790\ub9cc \uc0ad\uc81c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."):alert("\uc0ad\uc81c\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.");case 12:case"end":return t.stop()}},t,this,[[3,9]])})),n.deleteComment=function(){var t=Object(o.a)(a.a.mark(function t(e,r){var o,i,c;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(o=n.props,i=o.user,c=o.articleActions,i){t.next=4;break}return Object(P.a)(n.props),t.abrupt("return");case 4:if(!window.confirm("\ub313\uae00\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){t.next=14;break}return t.prev=5,t.next=8,g.a.Comments.delete({slug:e,commentId:r});case 8:c.deleteComment(r),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(5),alert("\uc0ad\uc81c\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.");case 14:case"end":return t.stop()}},t,this,[[5,11]])}));return function(e,n){return t.apply(this,arguments)}}(),n}return Object(l.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this.props.articleActions;t.reset(),t.fetch(this.props.match.params.slug)}},{key:"componentWillUnmount",value:function(){this.props.articleActions.reset()}},{key:"render",value:function(){var t=this.props,e=t.history,n=t.article,r=t.comments;return n?p.a.createElement(H,null,p.a.createElement(q,null,p.a.createElement("div",{className:"wrap"},p.a.createElement("h2",{className:"subject"},n.title),p.a.createElement("p",{className:"desc"},n.description),p.a.createElement("div",{className:"info"},p.a.createElement(x.a,{image:n.author.image,username:n.author.username,createdAt:n.createdAt}),p.a.createElement(y.a,{slug:n.slug,favorited:n.favorited,favoritesCount:n.favoritesCount})))),p.a.createElement("div",{className:"container"},p.a.createElement(D,null,p.a.createElement("div",{className:"body",dangerouslySetInnerHTML:{__html:n.body}}),p.a.createElement(I.a,{tags:n.tagList})),p.a.createElement("div",{className:"page-foot"},p.a.createElement("button",{type:"button",className:"btn",onClick:function(){return e.push("/form/".concat(n.slug))}},"\uc218\uc815")," ",p.a.createElement("button",{type:"button",className:"btn",onClick:this.delete},"\uc0ad\uc81c")," ",p.a.createElement("button",{type:"button",className:"btn",onClick:e.goBack},"\ubaa9\ub85d")),p.a.createElement("h3",{className:"comment-title"},"\ub313\uae00"),p.a.createElement(A,{slug:n.slug}),p.a.createElement(z,{slug:n.slug,comments:r,deleteComment:this.deleteComment}))):p.a.createElement("div",{className:"page-loading"},p.a.createElement(b.a,{showLoadingAnimation:!0,type:"text",ready:!1,rows:20,color:"#E0E0E0"},p.a.createElement("div",null)))}}]),e}(f.Component);e.default=Object(d.b)(function(t){return{user:t.auth.user,userInfo:t.auth.userInfo,loading:t.article.loading,article:t.article.article,comments:t.article.comments}},function(t){return{articleActions:Object(m.b)(h,t)}})(B)}}]);