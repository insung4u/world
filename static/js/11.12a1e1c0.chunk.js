(window.webpackJsonp=window.webpackJsonp||[]).push([[11,16],{238:function(n,e,t){"use strict";t.r(e),t.d(e,"Top",function(){return l}),t.d(e,"TagTitle",function(){return s});var a=t(87),r=t(88);function i(){var n=Object(a.a)(["\n  .container {\n    display: flex;\n  }\n\n  .body {\n    flex: 1;\n  }\n\n  .side {\n    flex-shrink: 0;\n    box-sizing: border-box;\n    width: 240px;\n    margin-left: 20px;\n    background: #f8f9f9;\n  }\n\n  .tag-area {\n    padding: 15px;\n    position: sticky;\n    top: 0;\n\n    .title {\n      margin-bottom: 10px;\n      font-weight: 500;\n      font-size: 16px;\n      color: #7f8a93;\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    .container {\n      display: block;\n    }\n\n    .side {\n      width: auto;\n      margin-top: 50px;\n      margin-left: 0;\n    }\n  }\n"]);return i=function(){return n},n}function o(){var n=Object(a.a)(["\n  margin-bottom: 25px;\n  font-weight: 500;\n  font-size: 30px;\n  color: #97a1a7;\n  letter-spacing: -.04em;\n\n  span {\n    margin-left: 5px;\n    color: #374047;\n  }\n\n  @media screen and (max-width: 768px) {\n    margin-bottom: 20px;\n    font-size: 24px;\n  }\n"]);return o=function(){return n},n}function c(){var n=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 130px;\n  color: #fff;\n  background: #07c;\n  box-shadow: inset 0 -7px 17px 0 rgba(0,0,0,.15);\n  overflow: hidden;\n\n  &.init {\n    .copy {\n      letter-spacing: -.04em;\n      opacity: 1;\n      transition: letter-spacing 4s;\n    }\n  }\n\n  .copy {\n    font-weight: 500;\n    font-size: 144px;\n    color: #4a9eda;\n    white-space: nowrap;\n    letter-spacing: .4em;\n    opacity: .3;\n    position: relative;\n    bottom: -26px;\n  }\n\n  @supports (-webkit-text-stroke: 1px) {\n    .copy {\n      color: transparent;\n      -webkit-text-stroke: 1px #7db9e5;\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    height: 100px;\n\n    .copy {\n      font-size: 120px;\n    }\n\n    .hello {\n      position: absolute;\n      left: -9999px;\n    }\n  }\n"]);return c=function(){return n},n}var l=r.a.div(c()),s=r.a.h2(o());e.default=r.a.div(i())},243:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(214),o=t(526),c=t(238);e.default=Object(i.a)(function(n){var e=n.history,t=n.match.params,i=t.tag,l=t.page,s=Object(a.useCallback)(function(n){return"/tag/".concat(i,"/").concat(n)},[i]),p=Object(a.useCallback)(function(n){e.push(s(n))},[s,e]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.TagTitle,null,"Tag ",r.a.createElement("span",null,"#",i)),r.a.createElement(o.a,{filter:"tag",tag:i,page:l,handlePageChange:p,getPageUrl:s,useTotal:!0}))})},518:function(n,e,t){"use strict";var a=t(87),r=t(88);function i(){var n=Object(a.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding-top: ",";\n\n  &:empty {\n    display: none;\n  }\n\n  a {\n    display: block;\n    height: ",";\n    line-height: ",";\n    margin: 0 4px 4px 0;\n    padding: 0 10px;\n    font-weight: 300;\n    font-size: ",";\n    color: #97a1a7;\n    text-decoration: none;\n    word-wrap: break-word;\n    background: #fff;\n    border: 1px solid #cfd3d6;\n    border-radius: ",";\n    transition: all .2s;\n\n    &:hover,\n    &:focus {\n      color: #374047;\n      border-color: #97a1a7;\n    }\n\n    &.selected {\n      color: #07c;\n      border-color: #07c;\n    }\n  }\n"]);return i=function(){return n},n}e.a=r.a.ul(i(),function(n){return n.small&&"4px"},function(n){return n.small?"16px":"22px"},function(n){return n.small?"14px":"20px"},function(n){return n.small?"11px":"12px"},function(n){return n.small?"8px":"10px"})},519:function(n,e,t){"use strict";var a=t(87),r=t(88);function i(){var n=Object(a.a)(["\n  display: flex;\n  align-items: center;\n\n  .link {\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      .name {\n        text-decoration: underline;\n      }\n    }\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .img {\n    flex-shrink: 0;\n    width: 24px;\n    height: 24px;\n    border-radius: 16px;\n    overflow: hidden;\n\n    img {\n      width: 100%;\n      height: 100%;\n      vertical-align: top;\n    }\n  }\n\n  .con {\n    flex: 1;\n  }\n\n  .name {\n    margin-left: 10px;\n    font-size: 13px;\n  }\n\n  .date {\n    margin-left: 10px;\n    font-size: 11px;\n    color: inherit;\n    opacity: .6;\n  }\n"]);return i=function(){return n},n}e.a=r.a.div(i())},520:function(n,e,t){"use strict";var a=t(87),r=t(88);function i(){var n=Object(a.a)(["\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 25px;\n  padding: 0 5px;\n  font-size: 12px;\n  border: 1px solid #07c;\n  border-radius: 5px;\n  cursor: pointer;\n\n  ","\n\n  .txt {\n    position: absolute;\n    left: -9999px;\n  }\n\n  .count {\n    margin-left: 5px;\n  }\n\n  .loading {\n    animation: spin 1s infinite linear;\n  }\n\n  @keyframes spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"]);return i=function(){return n},n}e.a=r.a.button(i(),function(n){return n.favorited?"\n      color: #fff;\n      background: #07c;\n\n      i {\n        color: #fff;\n      }\n    ":"\n      color: #07c;\n      background: #fff;\n\n      i {\n        color: #07c;\n      }\n    "})},521:function(n,e,t){"use strict";var a=t(0),r=t.n(a),i=t(84),o=t(518);e.a=function(n){var e=n.tags,t=n.currentTag,a=n.small;return r.a.createElement(o.a,{small:a},e.map(function(n){return r.a.createElement("li",{key:n},r.a.createElement(i.a,{to:"/tag/".concat(n),className:n===t?"selected":""},n))}))}},524:function(n,e,t){"use strict";var a=t(0),r=t.n(a),i=t(84),o=t(519);e.a=function(n){var e=n.username,t=n.image,a=n.createdAt;return r.a.createElement(o.a,null,r.a.createElement(i.a,{to:"/@".concat(e),className:"link"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:t||"".concat("/world","/assets/profile-dummy.jpg"),alt:""})),r.a.createElement("p",{className:"name"},e)),r.a.createElement("p",{className:"date"},new Date(a).toDateString()))}},525:function(n,e,t){"use strict";var a=t(522),r=t.n(a),i=t(523),o=t(90),c=t(0),l=t.n(c),s=t(214),p=t(33),u=t(48),f=t(9),d=t(157),g=t(520),m=function(n){var e=n.slug,t=Object(u.c)("components").t,a=Object(p.c)(function(n){return n.auth},[]).user,s=Object(c.useState)(!1),m=Object(o.a)(s,2),x=m[0],b=m[1],h=Object(c.useState)(null),v=Object(o.a)(h,2),E=v[0],w=v[1],y=Object(c.useState)(n.favorited),k=Object(o.a)(y,2),j=k[0],O=k[1],P=Object(c.useState)(n.favoritesCount),N=Object(o.a)(P,2),C=N[0],z=N[1];Object(c.useEffect)(function(){return function(){E&&E.cancel()}},[E]);var T=function(){var t=Object(i.a)(r.a.mark(function t(){var i,o,c;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a){t.next=3;break}return Object(d.a)(n),t.abrupt("return");case 3:return t.prev=3,i=f.a.CancelToken.source(),w(i),b(!0),t.next=9,f.a.Articles[j?"unfavorite":"favorite"]({slug:e,config:{cancelToken:i.token}});case 9:o=t.sent,c=o.data,b(!1),O(c.article.favorited),z(c.article.favoritesCount),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(3),console.log(t.t0);case 19:case"end":return t.stop()}},t,null,[[3,16]])}));return function(){return t.apply(this,arguments)}}();return l.a.createElement(g.a,{type:"button",onClick:T,favorited:j},x?l.a.createElement("i",{className:"fas fa-spinner loading"}):l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fas fa-heart"}),l.a.createElement("span",{className:"txt"},t("like.actionText"))," ",l.a.createElement("span",{className:"count"},C)))};m.defaultProps={slug:"",favorited:!1,favoritesCount:0},e.a=Object(s.a)(m)},526:function(n,e,t){"use strict";var a=t(162),r=t(0),i=t.n(r),o=t(84),c=t(214),l=t(33),s=t(161),p=t(159),u=t.n(p),f=t(524),d=t(525),g=t(48),m=t(533),x=t.n(m),b=t(87),h=t(88);function v(){var n=Object(b.a)(["\n  margin-top: 30px;\n\n  .pagination {\n    display: flex;\n    justify-content: center;\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    flex-shrink: 0;\n    text-align: center;\n    font-size: 14px;\n    color: #7f8a93;\n    background: #ebedee;\n    list-style: none;\n    transition: all .2s;\n\n    &:not(:first-child) {\n      border-left: 1px solid #cfd3d6;\n    }\n\n    &:first-child {\n      border-radius: 5px 0 0 5px;\n    }\n\n    &:last-child {\n      border-radius: 0 5px 5px 0;\n    }\n\n    &.active {\n      font-weight: 500;\n      color: #fff;\n      background: #07c;\n    }\n    \n    &:not(.active) {\n      &:hover,\n      &:focus {\n        color: #374047;\n        background: #dee1e3;\n      }\n    }\n  }\n\n  a {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-sizing: border-box;\n    min-width: 36px;\n    height: 36px;\n    padding: 0 5px;\n    color: inherit;\n    text-decoration: none;\n  }\n\n  .txt {\n    display: block;\n    width: 100%;\n    height: 100%;\n    font-size: 0;\n  }\n\n  @media screen and (max-width: 768px) {\n    a {\n      min-width: 30px;\n      height: 30px;\n    }\n  }\n"]);return v=function(){return n},n}var E=h.a.div(v()),w=function(n){var e=n.page,t=void 0===e?1:e,a=n.total,r=void 0===a?1:a,o=n.onChange,c=void 0===o?function(){}:o,l=n.getPageUrl,s=void 0===l?function(){}:l,p=n.countPerPage,u=void 0===p?10:p,f=n.pageLen,d=void 0===f?5:f,m=Object(g.c)("components").t;return i.a.createElement(E,null,i.a.createElement(x.a,{activePage:t,totalItemsCount:r,onChange:c,itemsCountPerPage:u,pageRangeDisplayed:d,getPageUrl:s,innerClass:"pagination",activeLinkClass:"active",firstPageText:i.a.createElement("span",{className:"fas fa-angle-double-left"},i.a.createElement("span",{className:"txt"},m("pagination.first"))),prevPageText:i.a.createElement("span",{className:"fas fa-angle-left"},i.a.createElement("span",{className:"txt"},m("pagination.prev"))),nextPageText:i.a.createElement("span",{className:"fas fa-angle-right"},i.a.createElement("span",{className:"txt"},m("pagination.next"))),lastPageText:i.a.createElement("span",{className:"fas fa-angle-double-right"},i.a.createElement("span",{className:"txt"},m("pagination.last")))}))},y=t(521),k=t(519),j=t(518),O=t(520);function P(){var n=Object(b.a)(["\n  padding: 0;\n  border-bottom: 1px solid #ddd;\n\n  .article-item {\n    list-style: none;\n    padding: 22px 0 17px 20px;\n    border-top: 1px solid #ddd;\n    position: relative;\n  }\n\n  .title {\n    padding-right: 60px;\n    line-height: 1.3;\n    font-weight: 500;\n    font-size: 22px;\n    color: #07c;\n    word-wrap: break-word;\n\n    a {\n      color: inherit;\n      text-decoration: none;\n\n      &:hover,\n      &:focus {\n        text-decoration: underline;\n      }\n    }\n  }\n\n  .desc {\n    margin-top: 4px;\n    word-wrap: break-word;\n    font-size: 14px;\n    color: #374047;\n  }\n\n  .info {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    margin-top: 15px;\n  }\n\n  "," {\n    justify-content: flex-end;\n    margin-left: 10px;\n    margin-right: -4px;\n  }\n\n  "," {\n    flex-shrink: 0;\n  }\n\n  "," {\n    position: absolute;\n    top: 23px;\n    right: 0;\n  }\n\n  @media screen and (max-width: 768px) {\n    .article-item {\n      padding: 15px 0 12px 0;\n    }\n\n    .title {\n      font-size: 18px;\n    }\n\n    .desc {\n      font-size: 13px;\n    }\n\n    .info {\n      display: block;\n      margin-top: 15px;\n    }\n\n    "," {\n      justify-content: flex-start;\n      margin-top: 10px;\n      margin-left: 0;\n      margin-right: 0;\n    }\n\n    "," {\n      top: 17px;\n    }\n  }\n"]);return P=function(){return n},n}function N(){var n=Object(b.a)(["\n  > div {\n    padding: 22px 20px 17px;\n    border-top: 1px solid #ddd;\n  }\n"]);return N=function(){return n},n}function C(){var n=Object(b.a)(["\n  margin-bottom: 10px;\n"]);return C=function(){return n},n}var z=h.a.p(C()),T=h.a.div(N()),A=h.a.ul(P(),j.a,k.a,O.a,j.a,O.a),L=function(){return i.a.createElement(T,null,Object(a.a)(Array(5).keys()).map(function(n){return i.a.createElement(u.a,{key:n,showLoadingAnimation:!0,type:"media",ready:!1,rows:4,color:"#E0E0E0"},i.a.createElement("div",null))}))},S=function(n){var e=n.username,t=n.filter,a=n.tag,c=n.useTotal,p=n.page,g=void 0===p?1:p,m=n.countPerPage,x=n.handlePageChange,b=n.getPageUrl,h=Object(l.c)(function(n){return n.articleList},[]),v=h.loading,E=h.articles,k=h.articlesCount,j=Object(l.b)(s,[]),O=Object(r.useCallback)(function(){j.fetch({filter:t,param:{username:e,page:parseInt(g)-1,tag:a}})},[j,t,g,a,e]);Object(r.useEffect)(function(){return O(),function(){j.reset()}},[j,O]);var P=Math.ceil(k/m);return i.a.createElement(i.a.Fragment,null,c&&i.a.createElement(z,null,g," / ",P),i.a.createElement(u.a,{ready:!v,customPlaceholder:i.a.createElement(L,null)},i.a.createElement(A,null,E.map(function(n,e){return i.a.createElement("li",{key:n.slug,className:"article-item"},i.a.createElement("p",{className:"title"},i.a.createElement(o.a,{to:"/article/".concat(n.slug)},n.title)),i.a.createElement("p",{className:"desc"},n.description),i.a.createElement("div",{className:"info"},i.a.createElement(f.a,{image:n.author.image,username:n.author.username,createdAt:n.createdAt}),i.a.createElement(y.a,{tags:n.tagList,currentTag:a,small:!0})),i.a.createElement(d.a,{slug:n.slug,favorited:n.favorited,favoritesCount:n.favoritesCount}))}))),i.a.createElement(w,{page:parseInt(g),total:k,onChange:x,countPerPage:m,getPageUrl:b}))};S.defaultProps={page:1,countPerPage:10};e.a=Object(c.a)(S)}}]);