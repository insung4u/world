(window.webpackJsonp=window.webpackJsonp||[]).push([[4,11,12,13,14,15],{110:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(149),o=t(142),c=t(48),l=t(70),s=t(157),u=t(107),f=t(247),p=t(245),d=t(244),m=t(246),g=t(241);e.default=Object(l.a)(Object(c.d)("home"))(function(n){var e=n.t;return r.a.createElement(g.default,null,r.a.createElement(s.Helmet,{title:"Home - ".concat(e("common:siteName"))}),r.a.createElement(f.default,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"body"},r.a.createElement(i.a,null,r.a.createElement(o.a,{path:"/articles/:page?",component:d.default}),r.a.createElement(o.a,{path:"/feed/:page?",component:Object(u.a)(d.default)}),r.a.createElement(o.a,{path:"/tag/:tag/:page?",component:m.default}),r.a.createElement(o.a,{component:d.default}))),r.a.createElement("div",{className:"side"},r.a.createElement(p.default,null))))})},241:function(n,e,t){"use strict";t.r(e),t.d(e,"Top",function(){return l}),t.d(e,"TagTitle",function(){return s});var a=t(87),r=t(88);function i(){var n=Object(a.a)(["\n  .container {\n    display: flex;\n  }\n\n  .body {\n    flex: 1;\n  }\n\n  .side {\n    flex-shrink: 0;\n    box-sizing: border-box;\n    width: 240px;\n    margin-left: 20px;\n    background: #f8f9f9;\n  }\n\n  .tag-area {\n    padding: 15px;\n    position: sticky;\n    top: 0;\n\n    .title {\n      margin-bottom: 10px;\n      font-weight: 500;\n      font-size: 16px;\n      color: #7f8a93;\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    .container {\n      display: block;\n    }\n\n    .side {\n      width: auto;\n      margin-top: 50px;\n      margin-left: 0;\n    }\n  }\n"]);return i=function(){return n},n}function o(){var n=Object(a.a)(["\n  margin-bottom: 25px;\n  font-weight: 500;\n  font-size: 30px;\n  color: #97a1a7;\n  letter-spacing: -.04em;\n\n  span {\n    margin-left: 5px;\n    color: #374047;\n  }\n\n  @media screen and (max-width: 768px) {\n    margin-bottom: 20px;\n    font-size: 24px;\n  }\n"]);return o=function(){return n},n}function c(){var n=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 130px;\n  color: #fff;\n  background: #07c;\n  box-shadow: inset 0 -7px 17px 0 rgba(0,0,0,.15);\n  overflow: hidden;\n\n  &.init {\n    .copy {\n      letter-spacing: -.04em;\n      opacity: 1;\n      transition: letter-spacing 4s;\n    }\n  }\n\n  .copy {\n    font-weight: 500;\n    font-size: 144px;\n    color: #4a9eda;\n    white-space: nowrap;\n    letter-spacing: .4em;\n    opacity: .3;\n    position: relative;\n    bottom: -26px;\n  }\n\n  @supports (-webkit-text-stroke: 1px) {\n    .copy {\n      color: transparent;\n      -webkit-text-stroke: 1px #7db9e5;\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    height: 100px;\n\n    .copy {\n      font-size: 120px;\n    }\n\n    .hello {\n      position: absolute;\n      left: -9999px;\n    }\n  }\n"]);return c=function(){return n},n}var l=r.a.div(c()),s=r.a.h2(o());e.default=r.a.div(i())},244:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(141),o=t(150),c=t(159),l=t(49),s=t(48),u=t(70),f=t(529),p=t(533);e.default=Object(u.a)(o.a,c.b,Object(l.b)(function(n){return{user:n.auth.user}},function(n){return{}}),Object(s.d)("home"))(function(n){var e=n.user,t=n.match,a=t.params,o=t.url,c=n.history,l=n.t,s="/"===o,u=function(){return(s||"feed"===o.split("/")[1])&&e?"feed":"all"},d=function(n){return"/".concat("feed"===u()?"feed":"articles","/").concat(n)},m=u(),g=s?a.filter:a.page;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null,e?r.a.createElement("li",{className:"feed"===m?"selected":""},r.a.createElement(i.a,{to:"/feed"},l("myfeed"))):r.a.createElement("li",null,r.a.createElement(i.a,{to:"/feed",onClick:function(e){e.preventDefault(),n.alert.show(l("loginMsg"))}},l("myfeed"),r.a.createElement("span",{className:"sub"},"(",l("needLogin"),")"))),r.a.createElement("li",{className:"all"===m?"selected":""},r.a.createElement(i.a,{to:"/articles"},l("globalfeed")))),r.a.createElement(f.a,{filter:m,page:g,handlePageChange:function(n){c.push(d(n))},getPageUrl:d,useTotal:!0}))})},245:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(49),o=t(20),c=t(48),l=t(70),s=t(166),u=t(524);e.default=Object(l.a)(Object(i.b)(function(n){return{tags:n.tags.tags}},function(n){return{tagsActions:Object(o.b)(s,n)}}),Object(c.d)("home"))(function(n){var e=n.tags,t=n.tagsActions,i=n.t;return Object(a.useEffect)(function(){t.fetch()},[]),r.a.createElement("div",{className:"tag-area"},r.a.createElement("h2",{className:"title"},i("hotTag")),r.a.createElement(u.a,{tags:e}))})},246:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(150),o=t(48),c=t(70),l=t(529),s=t(241);e.default=Object(c.a)(i.a,Object(o.d)("home"))(function(n){var e=n.history,t=n.match.params,a=t.tag,i=t.page,o=function(n){return"/tag/".concat(t.tag,"/").concat(n)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.TagTitle,null,"Tag ",r.a.createElement("span",null,"#",a)),r.a.createElement(l.a,{filter:"tag",tag:a,page:i,handlePageChange:function(n){e.push(o(n))},getPageUrl:o,useTotal:!0}))})},247:function(n,e,t){"use strict";t.r(e);var a=t(90),r=t(0),i=t.n(r),o=t(48),c=t(70),l=t(241);e.default=Object(c.a)(Object(o.d)("home"))(function(){var n=Object(r.useState)(!1),e=Object(a.a)(n,2),t=e[0],o=e[1];return Object(r.useEffect)(function(){var n=setTimeout(function(){o(!0)},10);return function(){clearTimeout(n)}},[]),i.a.createElement(l.Top,{className:"home-head ".concat(t?"init":"")},i.a.createElement("p",{className:"copy"},i.a.createElement("span",{className:"hello"},"Hello")," World"))})},521:function(n,e,t){"use strict";var a=t(87),r=t(88);function i(){var n=Object(a.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding-top: ",";\n\n  &:empty {\n    display: none;\n  }\n\n  a {\n    display: block;\n    height: ",";\n    line-height: ",";\n    margin: 0 4px 4px 0;\n    padding: 0 10px;\n    font-weight: 300;\n    font-size: ",";\n    color: #97a1a7;\n    text-decoration: none;\n    word-wrap: break-word;\n    background: #fff;\n    border: 1px solid #cfd3d6;\n    border-radius: ",";\n    transition: all .2s;\n\n    &:hover,\n    &:focus {\n      color: #374047;\n      border-color: #97a1a7;\n    }\n\n    &.selected {\n      color: #07c;\n      border-color: #07c;\n    }\n  }\n"]);return i=function(){return n},n}e.a=r.a.ul(i(),function(n){return n.small&&"4px"},function(n){return n.small?"16px":"22px"},function(n){return n.small?"14px":"20px"},function(n){return n.small?"11px":"12px"},function(n){return n.small?"8px":"10px"})},522:function(n,e,t){"use strict";var a=t(87),r=t(88);function i(){var n=Object(a.a)(["\n  display: flex;\n  align-items: center;\n\n  .link {\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      .name {\n        text-decoration: underline;\n      }\n    }\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .img {\n    flex-shrink: 0;\n    width: 24px;\n    height: 24px;\n    border-radius: 16px;\n    overflow: hidden;\n\n    img {\n      width: 100%;\n      height: 100%;\n      vertical-align: top;\n    }\n  }\n\n  .con {\n    flex: 1;\n  }\n\n  .name {\n    margin-left: 10px;\n    font-size: 13px;\n  }\n\n  .date {\n    margin-left: 10px;\n    font-size: 11px;\n    color: inherit;\n    opacity: .6;\n  }\n"]);return i=function(){return n},n}e.a=r.a.div(i())},523:function(n,e,t){"use strict";var a=t(87),r=t(88);function i(){var n=Object(a.a)(["\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 25px;\n  padding: 0 5px;\n  font-size: 12px;\n  border: 1px solid #07c;\n  border-radius: 5px;\n  cursor: pointer;\n\n  ","\n\n  .txt {\n    position: absolute;\n    left: -9999px;\n  }\n\n  .count {\n    margin-left: 5px;\n  }\n\n  .loading {\n    animation: spin 1s infinite linear;\n  }\n\n  @keyframes spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"]);return i=function(){return n},n}e.a=r.a.button(i(),function(n){return n.favorited?"\n      color: #fff;\n      background: #07c;\n\n      i {\n        color: #fff;\n      }\n    ":"\n      color: #07c;\n      background: #fff;\n\n      i {\n        color: #07c;\n      }\n    "})},524:function(n,e,t){"use strict";var a=t(0),r=t.n(a),i=t(141),o=t(521);e.a=function(n){var e=n.tags,t=n.currentTag,a=n.small;return r.a.createElement(o.a,{small:a},e.map(function(n){return r.a.createElement("li",{key:n},r.a.createElement(i.a,{to:"/tag/".concat(n),className:n===t?"selected":""},n))}))}},527:function(n,e,t){"use strict";var a=t(0),r=t.n(a),i=t(141),o=t(522);e.a=function(n){var e=n.username,t=n.image,a=n.createdAt;return r.a.createElement(o.a,null,r.a.createElement(i.a,{to:"/@".concat(e),className:"link"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:t||"".concat("/world","/assets/profile-dummy.jpg"),alt:""})),r.a.createElement("p",{className:"name"},e)),r.a.createElement("p",{className:"date"},new Date(a).toDateString()))}},528:function(n,e,t){"use strict";var a=t(525),r=t.n(a),i=t(526),o=t(90),c=t(0),l=t.n(c),s=t(150),u=t(49),f=t(48),p=t(70),d=t(7),m=t(158),g=t(523),x=function(n){var e=n.t,t=n.user,a=n.slug,s=Object(c.useState)(!1),u=Object(o.a)(s,2),f=u[0],p=u[1],x=Object(c.useState)(null),b=Object(o.a)(x,2),h=b[0],v=b[1],E=Object(c.useState)(n.favorited),j=Object(o.a)(E,2),y=j[0],w=j[1],O=Object(c.useState)(n.favoritesCount),k=Object(o.a)(O,2),N=k[0],P=k[1];Object(c.useEffect)(function(){return function(){h&&h.cancel()}},[]);var T=function(){var e=Object(i.a)(r.a.mark(function e(){var i,o,c;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=3;break}return Object(m.a)(n),e.abrupt("return");case 3:return e.prev=3,i=d.a.CancelToken.source(),v(i),p(!0),e.next=9,d.a.Articles[y?"unfavorite":"favorite"]({slug:a,config:{cancelToken:i.token}});case 9:o=e.sent,c=o.data,p(!1),w(c.article.favorited),P(c.article.favoritesCount),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(3),console.log(e.t0);case 19:case"end":return e.stop()}},e,this,[[3,16]])}));return function(){return e.apply(this,arguments)}}();return l.a.createElement(g.a,{type:"button",onClick:T,favorited:y},f?l.a.createElement("i",{className:"fas fa-spinner loading"}):l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fas fa-heart"}),l.a.createElement("span",{className:"txt"},e("like.actionText"))," ",l.a.createElement("span",{className:"count"},N)))};x.defaultProps={slug:"",favorited:!1,favoritesCount:0};e.a=Object(p.a)(s.a,Object(u.b)(function(n){return{user:n.auth.user,userInfo:n.auth.userInfo}},function(n){return{}}),Object(f.d)("components"))(x)},529:function(n,e,t){"use strict";var a=t(163),r=t(0),i=t.n(r),o=t(141),c=t(150),l=t(20),s=t(49),u=t(70),f=t(162),p=t(160),d=t.n(p),m=t(527),g=t(528),x=t(48),b=t(537),h=t.n(b),v=t(87),E=t(88);function j(){var n=Object(v.a)(["\n  margin-top: 30px;\n\n  .pagination {\n    display: flex;\n    justify-content: center;\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    flex-shrink: 0;\n    text-align: center;\n    font-size: 14px;\n    color: #7f8a93;\n    background: #ebedee;\n    list-style: none;\n    transition: all .2s;\n\n    &:not(:first-child) {\n      border-left: 1px solid #cfd3d6;\n    }\n\n    &:first-child {\n      border-radius: 5px 0 0 5px;\n    }\n\n    &:last-child {\n      border-radius: 0 5px 5px 0;\n    }\n\n    &.active {\n      font-weight: 500;\n      color: #fff;\n      background: #07c;\n    }\n    \n    &:not(.active) {\n      &:hover,\n      &:focus {\n        color: #374047;\n        background: #dee1e3;\n      }\n    }\n  }\n\n  a {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-sizing: border-box;\n    min-width: 36px;\n    height: 36px;\n    padding: 0 5px;\n    color: inherit;\n    text-decoration: none;\n  }\n\n  .txt {\n    display: block;\n    width: 100%;\n    height: 100%;\n    font-size: 0;\n  }\n\n  @media screen and (max-width: 768px) {\n    a {\n      min-width: 30px;\n      height: 30px;\n    }\n  }\n"]);return j=function(){return n},n}var y=E.a.div(j()),w=function(n){var e=n.page,t=void 0===e?1:e,a=n.total,r=void 0===a?1:a,o=n.onChange,c=void 0===o?function(){}:o,l=n.getPageUrl,s=void 0===l?function(){}:l,u=n.countPerPage,f=void 0===u?10:u,p=n.pageLen,d=void 0===p?5:p;return i.a.createElement(x.b,{ns:"components"},function(n){return i.a.createElement(y,null,i.a.createElement(h.a,{activePage:t,totalItemsCount:r,onChange:c,itemsCountPerPage:f,pageRangeDisplayed:d,getPageUrl:s,innerClass:"pagination",activeLinkClass:"active",firstPageText:i.a.createElement("span",{className:"fas fa-angle-double-left"},i.a.createElement("span",{className:"txt"},n("pagination.first"))),prevPageText:i.a.createElement("span",{className:"fas fa-angle-left"},i.a.createElement("span",{className:"txt"},n("pagination.prev"))),nextPageText:i.a.createElement("span",{className:"fas fa-angle-right"},i.a.createElement("span",{className:"txt"},n("pagination.next"))),lastPageText:i.a.createElement("span",{className:"fas fa-angle-double-right"},i.a.createElement("span",{className:"txt"},n("pagination.last")))}))})},O=t(524),k=t(522),N=t(521),P=t(523);function T(){var n=Object(v.a)(["\n  padding: 0;\n  border-bottom: 1px solid #ddd;\n\n  .article-item {\n    list-style: none;\n    padding: 22px 0 17px 20px;\n    border-top: 1px solid #ddd;\n    position: relative;\n  }\n\n  .title {\n    padding-right: 60px;\n    line-height: 1.3;\n    font-weight: 500;\n    font-size: 22px;\n    color: #07c;\n    word-wrap: break-word;\n\n    a {\n      color: inherit;\n      text-decoration: none;\n\n      &:hover,\n      &:focus {\n        text-decoration: underline;\n      }\n    }\n  }\n\n  .desc {\n    margin-top: 4px;\n    word-wrap: break-word;\n    font-size: 14px;\n    color: #374047;\n  }\n\n  .info {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    margin-top: 15px;\n  }\n\n  "," {\n    justify-content: flex-end;\n    margin-left: 10px;\n    margin-right: -4px;\n  }\n\n  "," {\n    flex-shrink: 0;\n  }\n\n  "," {\n    position: absolute;\n    top: 23px;\n    right: 0;\n  }\n\n  @media screen and (max-width: 768px) {\n    .article-item {\n      padding: 15px 0 12px 0;\n    }\n\n    .title {\n      font-size: 18px;\n    }\n\n    .desc {\n      font-size: 13px;\n    }\n\n    .info {\n      display: block;\n      margin-top: 15px;\n    }\n\n    "," {\n      justify-content: flex-start;\n      margin-top: 10px;\n      margin-left: 0;\n      margin-right: 0;\n    }\n\n    "," {\n      top: 17px;\n    }\n  }\n"]);return T=function(){return n},n}function C(){var n=Object(v.a)(["\n  > div {\n    padding: 22px 20px 17px;\n    border-top: 1px solid #ddd;\n  }\n"]);return C=function(){return n},n}function z(){var n=Object(v.a)(["\n  margin-bottom: 10px;\n"]);return z=function(){return n},n}var A=E.a.p(z()),L=E.a.div(C()),S=E.a.ul(T(),N.a,k.a,P.a,N.a,P.a),U=function(){return i.a.createElement(L,null,Object(a.a)(Array(5).keys()).map(function(n){return i.a.createElement(d.a,{key:n,showLoadingAnimation:!0,type:"media",ready:!1,rows:4,color:"#E0E0E0"},i.a.createElement("div",null))}))},I=function(n){var e=n.articleListActions,t=n.username,a=n.filter,c=n.tag,l=n.useTotal,s=n.page,u=n.countPerPage,f=n.handlePageChange,p=n.getPageUrl,x=n.loading,b=n.articles,h=n.articlesCount;Object(r.useEffect)(function(){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;e.fetch({filter:a,param:{username:t,page:n-1,tag:c}})}(parseInt(s)),function(){e.reset()}},[s,a,c]);var v=Math.ceil(h/u);return i.a.createElement(i.a.Fragment,null,l&&i.a.createElement(A,null,s," / ",v),i.a.createElement(d.a,{ready:!x,customPlaceholder:i.a.createElement(U,null)},i.a.createElement(S,null,b.map(function(n,e){return i.a.createElement("li",{key:n.slug,className:"article-item"},i.a.createElement("p",{className:"title"},i.a.createElement(o.a,{to:"/article/".concat(n.slug)},n.title)),i.a.createElement("p",{className:"desc"},n.description),i.a.createElement("div",{className:"info"},i.a.createElement(m.a,{image:n.author.image,username:n.author.username,createdAt:n.createdAt}),i.a.createElement(O.a,{tags:n.tagList,currentTag:c,small:!0})),i.a.createElement(g.a,{slug:n.slug,favorited:n.favorited,favoritesCount:n.favoritesCount}))}))),i.a.createElement(w,{page:parseInt(s),total:h,onChange:f,countPerPage:u,getPageUrl:p}))};I.defaultProps={page:1,countPerPage:10};e.a=Object(u.a)(c.a,Object(s.b)(function(n){return{loading:n.articleList.loading,articles:n.articleList.articles,articlesCount:n.articleList.articlesCount}},function(n){return{articleListActions:Object(l.b)(f,n)}}))(I)},533:function(n,e,t){"use strict";var a=t(0),r=t.n(a),i=t(87);function o(){var n=Object(i.a)(["\n  display: flex;\n  margin-bottom: 20px;\n  padding: 0;\n  position: relative;\n\n  &:before {\n    content: '';\n    display: block;\n    height: 1px;\n    background: #004d84;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n\n  li {\n    list-style: none;\n\n    &:not(:first-child) {\n      margin-left: -1px;\n    }\n\n    &.selected a {\n      font-weight: 500;\n      color: #00365d;\n      border: 1px solid #004d84;\n      border-bottom: 1px solid #fff;\n      position: relative;\n    }\n  }\n\n  a {\n    box-sizing: border-box;\n    display: block;\n    min-width: 110px;\n    padding: 10px 20px;\n    text-align: center;\n    color: #97a1a7;\n    text-decoration: none;\n    border: 1px solid #bec4c8;\n    border-bottom: 1px solid #004d84;\n  }\n\n  .sub {\n    font-size: .7em;\n  }\n\n  @media screen and (max-width: 768px) {\n    a {\n      padding: 8px 15px;\n    }\n  }\n"]);return o=function(){return n},n}var c=t(88).a.ul(o());e.a=function(n){return r.a.createElement(c,null,n.children)}}}]);