(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{445:function(n,t,e){n.exports=e(454)},446:function(n,t,e){"use strict";function r(n,t,e,r,a,o,i){try{var c=n[o](i),s=c.value}catch(l){return void e(l)}c.done?t(s):Promise.resolve(s).then(r,a)}function a(n){return function(){var t=this,e=arguments;return new Promise(function(a,o){var i=n.apply(t,e);function c(n){r(i,a,o,c,s,"next",n)}function s(n){r(i,a,o,c,s,"throw",n)}c(void 0)})}}e.d(t,"a",function(){return a})},447:function(n,t,e){"use strict";var r=e(79),a=e(80);function o(){var n=Object(r.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding-top: ",";\n\n  &:empty {\n    display: none;\n  }\n\n  a {\n    display: block;\n    height: ",";\n    line-height: ",";\n    margin: 0 4px 4px 0;\n    padding: 0 10px;\n    font-weight: 300;\n    font-size: ",";\n    color: #97a1a7;\n    text-decoration: none;\n    word-wrap: break-word;\n    background: #fff;\n    border: 1px solid #cfd3d6;\n    border-radius: ",";\n    transition: all .2s;\n\n    &:hover,\n    &:focus {\n      color: #374047;\n      border-color: #97a1a7;\n    }\n\n    &.selected {\n      color: #07c;\n      border-color: #07c;\n    }\n  }\n"]);return o=function(){return n},n}t.a=a.a.ul(o(),function(n){return n.small&&"4px"},function(n){return n.small?"16px":"22px"},function(n){return n.small?"14px":"20px"},function(n){return n.small?"11px":"12px"},function(n){return n.small?"8px":"10px"})},448:function(n,t,e){"use strict";var r=e(79),a=e(80);function o(){var n=Object(r.a)(["\n  display: flex;\n  align-items: center;\n\n  .link {\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      .name {\n        text-decoration: underline;\n      }\n    }\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .img {\n    flex-shrink: 0;\n    width: 24px;\n    height: 24px;\n    border-radius: 16px;\n    overflow: hidden;\n\n    img {\n      width: 100%;\n      height: 100%;\n      vertical-align: top;\n    }\n  }\n\n  .con {\n    flex: 1;\n  }\n\n  .name {\n    margin-left: 10px;\n    font-size: 13px;\n  }\n\n  .date {\n    margin-left: 10px;\n    font-size: 11px;\n    color: inherit;\n    opacity: .6;\n  }\n"]);return o=function(){return n},n}t.a=a.a.div(o())},449:function(n,t,e){"use strict";var r=e(79),a=e(80);function o(){var n=Object(r.a)(["\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 25px;\n  padding: 0 5px;\n  font-size: 12px;\n  border: 1px solid #07c;\n  border-radius: 5px;\n  cursor: pointer;\n\n  ","\n\n  .txt {\n    position: absolute;\n    left: -9999px;\n  }\n\n  .count {\n    margin-left: 5px;\n  }\n\n  .loading {\n    animation: spin 1s infinite linear;\n  }\n\n  @keyframes spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"]);return o=function(){return n},n}t.a=a.a.button(o(),function(n){return n.favorited?"\n      color: #fff;\n      background: #07c;\n\n      i {\n        color: #fff;\n      }\n    ":"\n      color: #07c;\n      background: #fff;\n\n      i {\n        color: #07c;\n      }\n    "})},451:function(n,t,e){"use strict";var r=e(0),a=e.n(r),o=e(539),i=e(447);t.a=function(n){var t=n.tags,e=n.currentTag,r=n.small;return a.a.createElement(i.a,{small:r},t.map(function(n){return a.a.createElement("li",{key:n},a.a.createElement(o.a,{to:"/tag/".concat(n),className:n===e?"selected":""},n))}))}},452:function(n,t,e){"use strict";var r=e(0),a=e.n(r),o=e(539),i=e(448);t.a=function(n){var t=n.username,e=n.image,r=n.createdAt;return a.a.createElement(i.a,null,a.a.createElement(o.a,{to:"/@".concat(t),className:"link"},a.a.createElement("div",{className:"img"},a.a.createElement("img",{src:e||"".concat("/world","/assets/profile-dummy.jpg"),alt:""})),a.a.createElement("p",{className:"name"},t)),a.a.createElement("p",{className:"date"},new Date(r).toDateString()))}},453:function(n,t,e){"use strict";var r=e(445),a=e.n(r),o=e(446),i=e(44),c=e(45),s=e(48),l=e(46),u=e(49),p=e(0),f=e.n(p),m=e(544),d=e(50),h=e(47),g=e(66),x=e(8),b=e(18),v=e(135),y=e(449),w=function(n){function t(n){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(l.a)(t).call(this,n))).like=Object(o.a)(a.a.mark(function n(){var t,r,o,i,c;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.state,r=t.slug,o=t.favorited,e.props.user){n.next=4;break}return Object(v.a)(e.props),n.abrupt("return");case 4:return n.prev=4,e.setState(Object(b.a)(function(n){n.loading=!0})),e.req=x.a.CancelToken.source(),n.next=9,x.a.Articles[o?"unfavorite":"favorite"]({slug:r,config:{cancelToken:e.req.token}});case 9:i=n.sent,c=i.data,e.setState(Object(b.a)(function(n){n.loading=!1,n.favorited=c.article.favorited,n.favoritesCount=c.article.favoritesCount})),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(4),console.log(n.t0);case 17:case"end":return n.stop()}},n,this,[[4,14]])})),e.state={slug:n.slug,favorited:n.favorited,favoritesCount:n.favoritesCount},e}return Object(u.a)(t,n),Object(c.a)(t,[{key:"componentWillUnmount",value:function(){this.req&&this.req.cancel()}},{key:"render",value:function(){var n=this.props.t,t=this.state,e=t.loading,r=t.favorited,a=t.favoritesCount;return f.a.createElement(y.a,{type:"button",onClick:this.like,favorited:r},e?f.a.createElement("i",{className:"fas fa-spinner loading"}):f.a.createElement(f.a.Fragment,null,f.a.createElement("i",{className:"fas fa-heart"}),f.a.createElement("span",{className:"txt"},n("like.actionText"))," ",f.a.createElement("span",{className:"count"},a)))}}]),t}(p.Component);w.defaultProps={loading:!1,slug:"",favorited:!1,favoritesCount:0};t.a=Object(g.a)(m.a,Object(d.b)(function(n){return{user:n.auth.user,userInfo:n.auth.userInfo}},function(n){return{}}),Object(h.d)("components"))(w)},454:function(n,t,e){var r=function(){return this||"object"===typeof self&&self}()||Function("return this")(),a=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=a&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,n.exports=e(455),a)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(i){r.regeneratorRuntime=void 0}},455:function(n,t){!function(t){"use strict";var e,r=Object.prototype,a=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag",l="object"===typeof n,u=t.regeneratorRuntime;if(u)l&&(n.exports=u);else{(u=t.regeneratorRuntime=l?n.exports:{}).wrap=y;var p="suspendedStart",f="suspendedYield",m="executing",d="completed",h={},g={};g[i]=function(){return this};var x=Object.getPrototypeOf,b=x&&x(x(_([])));b&&b!==r&&a.call(b,i)&&(g=b);var v=k.prototype=E.prototype=Object.create(g);j.prototype=v.constructor=k,k.constructor=j,k[s]=j.displayName="GeneratorFunction",u.isGeneratorFunction=function(n){var t="function"===typeof n&&n.constructor;return!!t&&(t===j||"GeneratorFunction"===(t.displayName||t.name))},u.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,k):(n.__proto__=k,s in n||(n[s]="GeneratorFunction")),n.prototype=Object.create(v),n},u.awrap=function(n){return{__await:n}},O(N.prototype),N.prototype[c]=function(){return this},u.AsyncIterator=N,u.async=function(n,t,e,r){var a=new N(y(n,t,e,r));return u.isGeneratorFunction(t)?a:a.next().then(function(n){return n.done?n.value:a.next()})},O(v),v[s]="Generator",v[i]=function(){return this},v.toString=function(){return"[object Generator]"},u.keys=function(n){var t=[];for(var e in n)t.push(e);return t.reverse(),function e(){for(;t.length;){var r=t.pop();if(r in n)return e.value=r,e.done=!1,e}return e.done=!0,e}},u.values=_,A.prototype={constructor:A,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!n)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=e)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var t=this;function r(r,a){return c.type="throw",c.arg=n,t.next=r,a&&(t.method="next",t.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),l=a.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(n,t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===n||"continue"===n)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=n,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),h},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.finallyLoc===n)return this.complete(e.completion,e.afterLoc),C(e),h}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc===n){var r=e.completion;if("throw"===r.type){var a=r.arg;C(e)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(n,t,r){return this.delegate={iterator:_(n),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=e),h}}}function y(n,t,e,r){var a=t&&t.prototype instanceof E?t:E,o=Object.create(a.prototype),i=new A(r||[]);return o._invoke=function(n,t,e){var r=p;return function(a,o){if(r===m)throw new Error("Generator is already running");if(r===d){if("throw"===a)throw o;return S()}for(e.method=a,e.arg=o;;){var i=e.delegate;if(i){var c=L(i,e);if(c){if(c===h)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===p)throw r=d,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=m;var s=w(n,t,e);if("normal"===s.type){if(r=e.done?d:f,s.arg===h)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(r=d,e.method="throw",e.arg=s.arg)}}}(n,e,i),o}function w(n,t,e){try{return{type:"normal",arg:n.call(t,e)}}catch(r){return{type:"throw",arg:r}}}function E(){}function j(){}function k(){}function O(n){["next","throw","return"].forEach(function(t){n[t]=function(n){return this._invoke(t,n)}})}function N(n){var t;this._invoke=function(e,r){function o(){return new Promise(function(t,o){!function t(e,r,o,i){var c=w(n[e],n,r);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"===typeof l&&a.call(l,"__await")?Promise.resolve(l.__await).then(function(n){t("next",n,o,i)},function(n){t("throw",n,o,i)}):Promise.resolve(l).then(function(n){s.value=n,o(s)},function(n){return t("throw",n,o,i)})}i(c.arg)}(e,r,t,o)})}return t=t?t.then(o,o):o()}}function L(n,t){var r=n.iterator[t.method];if(r===e){if(t.delegate=null,"throw"===t.method){if(n.iterator.return&&(t.method="return",t.arg=e,L(n,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var a=w(r,n.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,h;var o=a.arg;return o?o.done?(t[n.resultName]=o.value,t.next=n.nextLoc,"return"!==t.method&&(t.method="next",t.arg=e),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function z(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function C(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function A(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(z,this),this.reset(!0)}function _(n){if(n){var t=n[i];if(t)return t.call(n);if("function"===typeof n.next)return n;if(!isNaN(n.length)){var r=-1,o=function t(){for(;++r<n.length;)if(a.call(n,r))return t.value=n[r],t.done=!1,t;return t.value=e,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:e,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},542:function(n,t,e){"use strict";e.r(t);var r=e(445),a=e.n(r),o=e(446),i=e(44),c=e(45),s=e(48),l=e(46),u=e(49),p=e(0),f=e.n(p),m=e(50),d=e(25),h=e(47),g=e(66),x=e(134),b=e(138),v=e(8),y=e(136),w=e(137),E=e.n(w),j=e(452),k=e(453),O=e(539),N=e(544),L=e(18),z=e(79),C=e(80);function A(){var n=Object(z.a)(["\n  box-sizing: border-box;\n  margin-bottom: 30px;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  overflow: hidden;\n\n  .comment-txt {\n    textarea {\n      box-sizing: border-box;\n      display: block;\n      width: 100%;\n      height: 80px;\n      padding: 15px;\n      font-size: 16px;\n      color: #5f6e78;\n      border: 0;\n      border-radius: 0;\n      resize: none;\n    }\n  }\n\n  .action {\n    padding: 10px;\n    background: #ebedee;\n  }\n\n  @media screen and (max-width: 768px) {\n    .comment-txt {\n      textarea {\n        font-size: 14px;\n      }\n    }\n  }\n"]);return A=function(){return n},n}function _(){var n=Object(z.a)(["\n  box-sizing: border-box;\n  margin-bottom: 30px;\n  padding: 20px;\n  text-align: center;\n  font-size: 16px;\n  color: #374047;\n  background: #f8f9f9;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n\n  a {\n    color: #07c;\n  }\n"]);return _=function(){return n},n}var S=C.a.div(_()),I=C.a.form(A()),D=function(n){function t(){var n,e;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=Object(s.a)(this,(n=Object(l.a)(t)).call.apply(n,[this].concat(a)))).state={comment:"",loading:!1},e.submitHandle=function(n){var t=e.props,r=t.articleActions,a=t.slug,o=t.t,i=e.state.comment;if(n.preventDefault(),""===i.trim())return e.props.alert.show(o("validate:emptyBody")),void e.refs.comment.focus();e.setState(Object(L.a)(function(n){n.loading=!0})),r.createComment({slug:a,comment:{body:i.trim()}}).then(function(n){e.setState(Object(L.a)(function(n){n.loading=!1,n.comment=""}))}).catch(function(n){e.props.alert.error(o("comment.errorWrite")),e.setState(Object(L.a)(function(n){n.loading=!1}))})},e.changeInput=function(n){return function(t){var r=t.target.value;e.setState(Object(L.a)(function(t){t[n]=r}))}},e}return Object(u.a)(t,n),Object(c.a)(t,[{key:"render",value:function(){var n=this.props,t=n.user,e=n.t,r=this.state.loading;return t?f.a.createElement(I,{onSubmit:this.submitHandle},f.a.createElement("div",{className:"comment-txt"},f.a.createElement("textarea",{ref:"comment",rows:"10",cols:"40",placeholder:e("comment.placeHolder"),value:this.state.comment,onChange:this.changeInput("comment"),disabled:r})),f.a.createElement("div",{className:"action"},f.a.createElement("button",{type:"submit",className:"btn light"},e("comment.submit")))):f.a.createElement(S,{className:"login-msg"},f.a.createElement("i",{className:"fas fa-info-circle"})," ",f.a.createElement(h.c,{i18nKey:"comment.loginMsg"},"\ub313\uae00\uc744 \ub0a8\uae30\ub824\uba74 ",f.a.createElement(O.a,{to:"/login"},"\ub85c\uadf8\uc778"),"\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."))}}]),t}(p.Component),P=Object(g.a)(N.a,y.b,Object(m.b)(function(n){return{user:n.auth.user,userInfo:n.auth.userInfo,loading:n.article.loading,article:n.article.article,comments:n.article.comments}},function(n){return{articleActions:Object(d.b)(b,n)}}),Object(h.d)("components"))(D);function T(){var n=Object(z.a)(["\n  li {\n    position: relative;\n\n    &:not(:first-child) {\n      margin-top: 20px;\n    }\n\n    &:not(.no-item) {\n      display: flex;\n    }\n  }\n\n  .no-item {\n    padding: 40px 0;\n    text-align: center;\n    font-size: 16px;\n    color: #7f8a93;\n  }\n\n  .img {\n    flex-shrink: 0;\n    width: 24px;\n    height: 24px;\n    margin-right: 15px;\n    border-radius: 16px;\n    position: relative;\n    top: 35px;\n    overflow: hidden;\n\n    img {\n      width: 100%;\n      height: 100%;\n      vertical-align: top;\n    }\n  }\n\n  .wrap {\n    width: calc(100% - 39px);\n  }\n\n  .info {\n    height: 25px;\n    padding-left: 10px;\n    position: relative;\n  }\n\n  .name {\n    font-size: 13px;\n    color: #374047;\n  }\n\n  .date {\n    margin-left: 10px;\n    font-size: 11px;\n    color: inherit;\n    opacity: .6;\n  }\n\n  .del {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 30px;\n    height: 30px;\n    color: #7f8a93;\n    background: transparent;\n    border: 0;\n    position: absolute;\n    right: 6px;\n    bottom: 6px;\n    z-index: 1;\n  }\n\n  .content {\n    padding: 10px 50px 10px 10px;\n    font-size: 16px;\n    color: #5f6e78;\n    word-wrap: break-word;\n    background: #fff;\n    border: 1px solid #ddd;\n    border-radius: 5px;\n    position: relative;\n\n    &:before {\n      content: '';\n      position: absolute;\n      left: 0;\n      top: 21px;\n      width: 0;\n      height: 0;\n      border: 8px solid transparent;\n      border-right-color: #ddd;\n      border-left: 0;\n      margin-top: -8px;\n      margin-left: -8px;\n    }\n\n    &:after {\n      content: '';\n      position: absolute;\n      left: 0;\n      top: 21px;\n      width: 0;\n      height: 0;\n      border: 8px solid transparent;\n      border-right-color: #fff;\n      border-left: 0;\n      margin-top: -8px;\n      margin-left: -7px;\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    .del {\n      top: -5px;\n      right: 0;\n      bottom: auto;\n    }\n\n    .content {\n      padding-right: 10px;\n      font-size: 14px;\n    }\n  }\n"]);return T=function(){return n},n}var R=C.a.ul(T()),F=function(n){var t=n.slug,e=n.comments,r=n.deleteComment;return f.a.createElement(h.b,{ns:"components"},function(n){return f.a.createElement(R,null,e.length?e.map(function(e){return f.a.createElement("li",{key:e.id},f.a.createElement(O.a,{to:"/@".concat(e.author.username),className:"img"},f.a.createElement("img",{src:e.author.image?e.author.image:"".concat("/world","/assets/profile-dummy.jpg"),alt:""})),f.a.createElement("div",{className:"wrap"},f.a.createElement("div",{className:"info"},f.a.createElement(O.a,{to:"/@".concat(e.author.username),className:"name"},e.author.username),f.a.createElement("span",{className:"date"},new Date(e.createdAt).toDateString())),f.a.createElement("button",{type:"button",className:"del",onClick:function(){r(t,e.id)}},f.a.createElement("i",{className:"far fa-trash-alt"})," ",f.a.createElement("span",{className:"hide"},n("common:delete"))),f.a.createElement("div",{className:"content"},e.body)))}):f.a.createElement("li",{className:"no-item"},n("comment.noItem")))})},G=e(451),H=e(135),q=e(447);function B(){var n=Object(z.a)(["\n  .comment-title {\n    margin-top: 30px;\n    margin-bottom: 10px;\n    padding: 0 5px;\n    font-weight: 500;\n    font-size: 20px;\n    color: #374047;\n  }\n"]);return B=function(){return n},n}function M(){var n=Object(z.a)(["\n  padding-bottom: 30px;\n  border-bottom: 1px solid #dee1e3;\n\n  > .body {\n    min-height: 150px;\n    line-height: 1.8;\n    font-size: 16px;\n    color: #374047;\n    word-wrap: break-word;\n\n    p, ul, dl {\n      &:not(:first-child) { margin: 20px 0 10px; }\n    }\n\n    h1, h2, h3, h4, h5, h6 {\n      font-weight: 500;\n    }\n  }\n\n  "," {\n    margin-top: 30px;\n  }\n\n  @media screen and (max-width: 768px) {\n    > .body {\n      font-size: 14px;\n\n      p, ul, dl {\n        &:not(:first-child) { margin: 12px 0 6px; }\n      }\n    }\n  }\n"]);return M=function(){return n},n}function W(){var n=Object(z.a)(["\n  color: #fff;\n  background: #97a1a7;\n\n  .wrap {\n    box-sizing: border-box;\n    max-width: 1200px;\n    margin: 0 auto;\n    padding: 20px 5% 10px;\n  }\n\n  .subject {\n    line-height: 1.3;\n    font-weight: 500;\n    font-size: 32px;\n    word-wrap: break-word;\n  }\n\n  .desc {\n    font-size: 16px;\n    word-wrap: break-word;\n  }\n\n  .info {\n    display: flex;\n    align-items: center;\n    margin-top: 20px;\n    padding-top: 10px;\n    border-top: 1px solid #bec4c8;\n\n    > div {\n      margin-right: 20px;\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    .wrap {\n      padding: 20px 5% 20px;\n    }\n\n    .subject {\n      font-size: 24px;\n    }\n\n    .desc {\n      font-size: 14px;\n    }\n  }\n"]);return W=function(){return n},n}var J=C.a.div(W()),U=C.a.div(M(),q.a),Y=C.a.div(B()),K=function(n){function t(){var n,e;Object(i.a)(this,t);for(var r=arguments.length,c=new Array(r),u=0;u<r;u++)c[u]=arguments[u];return(e=Object(s.a)(this,(n=Object(l.a)(t)).call.apply(n,[this].concat(c)))).delete=Object(o.a)(a.a.mark(function n(){var t,r,o,i;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.props.match.params,r=t.slug,o=t.t,i=e.props.history,!window.confirm(o("confirmDelete"))){n.next=12;break}return n.prev=3,n.next=6,v.a.Articles.delete({slug:r});case 6:i.goBack(),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(3),"not owned by user"===n.t0.response.data.errors.article[0]?e.props.alert.error(o("canAuthorDelete")):e.props.alert.error(o("errorDelete"));case 12:case"end":return n.stop()}},n,this,[[3,9]])})),e.deleteComment=function(){var n=Object(o.a)(a.a.mark(function n(t,r){var o,i,c,s;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(o=e.props,i=o.user,c=o.articleActions,s=o.t,i){n.next=4;break}return Object(H.a)(e.props),n.abrupt("return");case 4:if(!window.confirm(s("components:comment.confirmDelete"))){n.next=14;break}return n.prev=5,n.next=8,v.a.Comments.delete({slug:t,commentId:r});case 8:c.deleteComment(r),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(5),e.props.alert.error(s("components:comment.errorDelete"));case 14:case"end":return n.stop()}},n,this,[[5,11]])}));return function(t,e){return n.apply(this,arguments)}}(),e}return Object(u.a)(t,n),Object(c.a)(t,[{key:"componentDidMount",value:function(){var n=this.props.articleActions;n.reset(),n.fetch(this.props.match.params.slug)}},{key:"componentWillUnmount",value:function(){this.props.articleActions.reset()}},{key:"render",value:function(){var n=this.props,t=n.history,e=n.article,r=n.comments,a=n.t;return e?f.a.createElement(Y,null,f.a.createElement(x.Helmet,null,f.a.createElement("title",null,e.title," - ",a("common:siteName"))),f.a.createElement(J,null,f.a.createElement("div",{className:"wrap"},f.a.createElement("h2",{className:"subject"},e.title),f.a.createElement("p",{className:"desc"},e.description),f.a.createElement("div",{className:"info"},f.a.createElement(j.a,{image:e.author.image,username:e.author.username,createdAt:e.createdAt}),f.a.createElement(k.a,{slug:e.slug,favorited:e.favorited,favoritesCount:e.favoritesCount})))),f.a.createElement("div",{className:"container"},f.a.createElement(U,null,f.a.createElement("div",{className:"body",dangerouslySetInnerHTML:{__html:e.body}}),f.a.createElement(G.a,{tags:e.tagList})),f.a.createElement("div",{className:"page-foot"},f.a.createElement("button",{type:"button",className:"btn",onClick:function(){return t.push("/form/".concat(e.slug))}},a("common:modify"))," ",f.a.createElement("button",{type:"button",className:"btn",onClick:this.delete},a("common:delete"))," ",f.a.createElement("button",{type:"button",className:"btn",onClick:t.goBack},a("common:list"))),f.a.createElement("h3",{className:"comment-title"},a("components:comment.heading")),f.a.createElement(P,{slug:e.slug}),f.a.createElement(F,{slug:e.slug,comments:r,deleteComment:this.deleteComment}))):f.a.createElement("div",{className:"page-loading"},f.a.createElement(E.a,{showLoadingAnimation:!0,type:"text",ready:!1,rows:20,color:"#E0E0E0"},f.a.createElement("div",null)))}}]),t}(p.Component);t.default=Object(g.a)(y.b,Object(m.b)(function(n){return{user:n.auth.user,userInfo:n.auth.userInfo,loading:n.article.loading,article:n.article.article,comments:n.article.comments}},function(n){return{articleActions:Object(d.b)(b,n)}}),Object(h.d)("article"))(K)}}]);