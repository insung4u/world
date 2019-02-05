(window.webpackJsonp=window.webpackJsonp||[]).push([[4,11,12,13,14,15],{109:function(n,e,t){"use strict";t.r(e);var a=t(70),r=t(71),i=t(73),o=t(72),c=t(74),l=t(0),s=t.n(l),u=t(609),p=t(607),f=t(49),d=t(69),m=t(153),g=t(104),h=t(237),x=t(235),b=t(234),v=t(236),j=t(231),E=function(n){function e(){return Object(a.a)(this,e),Object(i.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(c.a)(e,n),Object(r.a)(e,[{key:"render",value:function(){var n=this.props.t;return s.a.createElement(j.default,null,s.a.createElement(m.Helmet,null,s.a.createElement("title",null,"Home - ",n("common:siteName"))),s.a.createElement(h.default,null),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"body"},s.a.createElement(u.a,null,s.a.createElement(p.a,{path:"/articles/:page?",component:b.default}),s.a.createElement(p.a,{path:"/feed/:page?",component:Object(g.a)(b.default)}),s.a.createElement(p.a,{path:"/tag/:tag/:page?",component:v.default}),s.a.createElement(p.a,{component:b.default}))),s.a.createElement("div",{className:"side"},s.a.createElement(x.default,null))))}}]),e}(l.Component);e.default=Object(d.a)(Object(f.d)("home"))(E)},231:function(n,e,t){"use strict";t.r(e),t.d(e,"Top",function(){return l}),t.d(e,"TagTitle",function(){return s});var a=t(87),r=t(88);function i(){var n=Object(a.a)(["\n  .container {\n    display: flex;\n  }\n\n  .body {\n    flex: 1;\n  }\n\n  .side {\n    flex-shrink: 0;\n    box-sizing: border-box;\n    width: 240px;\n    margin-left: 20px;\n    background: #f8f9f9;\n  }\n\n  .tag-area {\n    padding: 15px;\n    position: sticky;\n    top: 0;\n\n    .title {\n      margin-bottom: 10px;\n      font-weight: 500;\n      font-size: 16px;\n      color: #7f8a93;\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    .container {\n      display: block;\n    }\n\n    .side {\n      width: auto;\n      margin-top: 50px;\n      margin-left: 0;\n    }\n  }\n"]);return i=function(){return n},n}function o(){var n=Object(a.a)(["\n  margin-bottom: 25px;\n  font-weight: 500;\n  font-size: 30px;\n  color: #97a1a7;\n  letter-spacing: -.04em;\n\n  span {\n    margin-left: 5px;\n    color: #374047;\n  }\n\n  @media screen and (max-width: 768px) {\n    margin-bottom: 20px;\n    font-size: 24px;\n  }\n"]);return o=function(){return n},n}function c(){var n=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 130px;\n  color: #fff;\n  background: #07c;\n  box-shadow: inset 0 -7px 17px 0 rgba(0,0,0,.15);\n  overflow: hidden;\n\n  &.init {\n    .copy {\n      letter-spacing: -.04em;\n      opacity: 1;\n      transition: letter-spacing 4s;\n    }\n  }\n\n  .copy {\n    font-weight: 500;\n    font-size: 144px;\n    color: #4a9eda;\n    white-space: nowrap;\n    letter-spacing: .4em;\n    opacity: .3;\n    position: relative;\n    bottom: -26px;\n  }\n\n  @supports (-webkit-text-stroke: 1px) {\n    .copy {\n      color: transparent;\n      -webkit-text-stroke: 1px #7db9e5;\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    height: 100px;\n\n    .copy {\n      font-size: 120px;\n    }\n\n    .hello {\n      position: absolute;\n      left: -9999px;\n    }\n  }\n"]);return c=function(){return n},n}var l=r.a.div(c()),s=r.a.h2(o());e.default=r.a.div(i())},234:function(n,e,t){"use strict";t.r(e);var a=t(70),r=t(71),i=t(73),o=t(72),c=t(74),l=t(0),s=t.n(l),u=t(606),p=t(610),f=t(156),d=t(50),m=t(49),g=t(69),h=t(518),x=t(522),b=function(n){function e(){var n,t;Object(a.a)(this,e);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(n=Object(o.a)(e)).call.apply(n,[this].concat(c)))).isRoot=function(){return"/"===t.props.match.url},t.getListType=function(){return(t.isRoot()||"feed"===t.props.match.url.split("/")[1])&&t.props.user?"feed":"all"},t.getPageUrl=function(n){return"/".concat("feed"===t.getListType()?"feed":"articles","/").concat(n)},t.handlePageChange=function(n){t.props.history.push(t.getPageUrl(n))},t}return Object(c.a)(e,n),Object(r.a)(e,[{key:"render",value:function(){var n=this,e=this.props,t=e.user,a=e.match.params,r=e.t,i=this.getListType(),o=this.isRoot()?a.filter:a.page;return s.a.createElement(s.a.Fragment,null,s.a.createElement(x.a,null,t?s.a.createElement("li",{className:"feed"===i?"selected":""},s.a.createElement(u.a,{to:"/feed"},r("myfeed"))):s.a.createElement("li",null,s.a.createElement(u.a,{to:"/feed",onClick:function(e){e.preventDefault(),n.props.alert.show(r("loginMsg"))}},r("myfeed"),s.a.createElement("span",{className:"sub"},"(",r("needLogin"),")"))),s.a.createElement("li",{className:"all"===i?"selected":""},s.a.createElement(u.a,{to:"/articles"},r("globalfeed")))),s.a.createElement(h.a,{filter:i,page:o,handlePageChange:this.handlePageChange,getPageUrl:this.getPageUrl,useTotal:!0}))}}]),e}(l.Component);e.default=Object(g.a)(p.a,f.b,Object(d.b)(function(n){return{user:n.auth.user}},function(n){return{}}),Object(m.d)("home"))(b)},235:function(n,e,t){"use strict";t.r(e);var a=t(70),r=t(71),i=t(73),o=t(72),c=t(74),l=t(0),s=t.n(l),u=t(50),p=t(27),f=t(49),d=t(69),m=t(161),g=t(513),h=function(n){function e(){return Object(a.a)(this,e),Object(i.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(c.a)(e,n),Object(r.a)(e,[{key:"componentDidMount",value:function(){this.props.tagsActions.fetch()}},{key:"render",value:function(){var n=this.props,e=n.tags,t=n.t;return s.a.createElement("div",{className:"tag-area"},s.a.createElement("h2",{className:"title"},t("hotTag")),s.a.createElement(g.a,{tags:e}))}}]),e}(l.Component);e.default=Object(d.a)(Object(u.b)(function(n){return{tags:n.tags.tags}},function(n){return{tagsActions:Object(p.b)(m,n)}}),Object(f.d)("home"))(h)},236:function(n,e,t){"use strict";t.r(e);var a=t(70),r=t(71),i=t(73),o=t(72),c=t(74),l=t(0),s=t.n(l),u=t(610),p=t(49),f=t(69),d=t(518),m=t(231),g=function(n){function e(){var n,t;Object(a.a)(this,e);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(n=Object(o.a)(e)).call.apply(n,[this].concat(c)))).handlePageChange=function(n){t.props.history.push("/tag/".concat(t.props.match.params.tag,"/").concat(n))},t}return Object(c.a)(e,n),Object(r.a)(e,[{key:"render",value:function(){var n=this.props.match.params,e=n.tag,t=n.page;return s.a.createElement(s.a.Fragment,null,s.a.createElement(m.TagTitle,null,"Tag ",s.a.createElement("span",null,"#",e)),s.a.createElement(d.a,{filter:"tag",tag:e,page:t,handlePageChange:this.handlePageChange,getPageUrl:this.getPageUrl,useTotal:!0}))}}]),e}(l.Component);e.default=Object(f.a)(u.a,Object(p.d)("home"))(g)},237:function(n,e,t){"use strict";t.r(e);var a=t(70),r=t(71),i=t(73),o=t(72),c=t(74),l=t(0),s=t.n(l),u=t(49),p=t(69),f=t(231),d=function(n){function e(){var n,t;Object(a.a)(this,e);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(n=Object(o.a)(e)).call.apply(n,[this].concat(c)))).state={init:!1},t}return Object(c.a)(e,n),Object(r.a)(e,[{key:"componentDidMount",value:function(){var n=this;setTimeout(function(){n.setState(function(){return{init:!0}})},10)}},{key:"render",value:function(){var n=this.state.init;return s.a.createElement(f.Top,{className:"home-head ".concat(n?"init":"")},s.a.createElement("p",{className:"copy"},s.a.createElement("span",{className:"hello"},"Hello")," World"))}}]),e}(l.Component);e.default=Object(p.a)(Object(u.d)("home"))(d)},510:function(n,e,t){"use strict";var a=t(87),r=t(88);function i(){var n=Object(a.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding-top: ",";\n\n  &:empty {\n    display: none;\n  }\n\n  a {\n    display: block;\n    height: ",";\n    line-height: ",";\n    margin: 0 4px 4px 0;\n    padding: 0 10px;\n    font-weight: 300;\n    font-size: ",";\n    color: #97a1a7;\n    text-decoration: none;\n    word-wrap: break-word;\n    background: #fff;\n    border: 1px solid #cfd3d6;\n    border-radius: ",";\n    transition: all .2s;\n\n    &:hover,\n    &:focus {\n      color: #374047;\n      border-color: #97a1a7;\n    }\n\n    &.selected {\n      color: #07c;\n      border-color: #07c;\n    }\n  }\n"]);return i=function(){return n},n}e.a=r.a.ul(i(),function(n){return n.small&&"4px"},function(n){return n.small?"16px":"22px"},function(n){return n.small?"14px":"20px"},function(n){return n.small?"11px":"12px"},function(n){return n.small?"8px":"10px"})},511:function(n,e,t){"use strict";var a=t(87),r=t(88);function i(){var n=Object(a.a)(["\n  display: flex;\n  align-items: center;\n\n  .link {\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      .name {\n        text-decoration: underline;\n      }\n    }\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .img {\n    flex-shrink: 0;\n    width: 24px;\n    height: 24px;\n    border-radius: 16px;\n    overflow: hidden;\n\n    img {\n      width: 100%;\n      height: 100%;\n      vertical-align: top;\n    }\n  }\n\n  .con {\n    flex: 1;\n  }\n\n  .name {\n    margin-left: 10px;\n    font-size: 13px;\n  }\n\n  .date {\n    margin-left: 10px;\n    font-size: 11px;\n    color: inherit;\n    opacity: .6;\n  }\n"]);return i=function(){return n},n}e.a=r.a.div(i())},512:function(n,e,t){"use strict";var a=t(87),r=t(88);function i(){var n=Object(a.a)(["\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 25px;\n  padding: 0 5px;\n  font-size: 12px;\n  border: 1px solid #07c;\n  border-radius: 5px;\n  cursor: pointer;\n\n  ","\n\n  .txt {\n    position: absolute;\n    left: -9999px;\n  }\n\n  .count {\n    margin-left: 5px;\n  }\n\n  .loading {\n    animation: spin 1s infinite linear;\n  }\n\n  @keyframes spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"]);return i=function(){return n},n}e.a=r.a.button(i(),function(n){return n.favorited?"\n      color: #fff;\n      background: #07c;\n\n      i {\n        color: #fff;\n      }\n    ":"\n      color: #07c;\n      background: #fff;\n\n      i {\n        color: #07c;\n      }\n    "})},513:function(n,e,t){"use strict";var a=t(0),r=t.n(a),i=t(606),o=t(510);e.a=function(n){var e=n.tags,t=n.currentTag,a=n.small;return r.a.createElement(o.a,{small:a},e.map(function(n){return r.a.createElement("li",{key:n},r.a.createElement(i.a,{to:"/tag/".concat(n),className:n===t?"selected":""},n))}))}},516:function(n,e,t){"use strict";var a=t(0),r=t.n(a),i=t(606),o=t(511);e.a=function(n){var e=n.username,t=n.image,a=n.createdAt;return r.a.createElement(o.a,null,r.a.createElement(i.a,{to:"/@".concat(e),className:"link"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:t||"".concat("/world","/assets/profile-dummy.jpg"),alt:""})),r.a.createElement("p",{className:"name"},e)),r.a.createElement("p",{className:"date"},new Date(a).toDateString()))}},517:function(n,e,t){"use strict";var a=t(514),r=t.n(a),i=t(515),o=t(155),c=t(0),l=t.n(c),s=t(610),u=t(50),p=t(49),f=t(69),d=t(7),m=t(154),g=t(512),h=function(n){var e=n.t,t=n.user,a=n.slug,s=Object(c.useState)(!1),u=Object(o.a)(s,2),p=u[0],f=u[1],h=Object(c.useState)(null),x=Object(o.a)(h,2),b=x[0],v=x[1],j=Object(c.useState)(n.favorited),E=Object(o.a)(j,2),y=E[0],O=E[1],w=Object(c.useState)(n.favoritesCount),k=Object(o.a)(w,2),P=k[0],N=k[1];Object(c.useEffect)(function(){return function(){b&&b.cancel()}});var C=function(){var e=Object(i.a)(r.a.mark(function e(){var i,o,c;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=3;break}return Object(m.a)(n),e.abrupt("return");case 3:return e.prev=3,i=d.a.CancelToken.source(),v(i),f(!0),e.next=9,d.a.Articles[y?"unfavorite":"favorite"]({slug:a,config:{cancelToken:i.token}});case 9:o=e.sent,c=o.data,f(!1),O(c.article.favorited),N(c.article.favoritesCount),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(3),console.log(e.t0);case 19:case"end":return e.stop()}},e,this,[[3,16]])}));return function(){return e.apply(this,arguments)}}();return l.a.createElement(g.a,{type:"button",onClick:C,favorited:y},p?l.a.createElement("i",{className:"fas fa-spinner loading"}):l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fas fa-heart"}),l.a.createElement("span",{className:"txt"},e("like.actionText"))," ",l.a.createElement("span",{className:"count"},P)))};h.defaultProps={slug:"",favorited:!1,favoritesCount:0};e.a=Object(f.a)(s.a,Object(u.b)(function(n){return{user:n.auth.user,userInfo:n.auth.userInfo}},function(n){return{}}),Object(p.d)("components"))(h)},518:function(n,e,t){"use strict";var a=t(70),r=t(71),i=t(73),o=t(72),c=t(74),l=t(159),s=t(0),u=t.n(s),p=t(606),f=t(610),d=t(27),m=t(50),g=t(69),h=t(158),x=t(157),b=t.n(x),v=t(516),j=t(517),E=t(49),y=t(526),O=t.n(y),w=t(87),k=t(88);function P(){var n=Object(w.a)(["\n  margin-top: 30px;\n\n  .pagination {\n    display: flex;\n    justify-content: center;\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    flex-shrink: 0;\n    text-align: center;\n    font-size: 14px;\n    color: #7f8a93;\n    background: #ebedee;\n    list-style: none;\n    transition: all .2s;\n\n    &:not(:first-child) {\n      border-left: 1px solid #cfd3d6;\n    }\n\n    &:first-child {\n      border-radius: 5px 0 0 5px;\n    }\n\n    &:last-child {\n      border-radius: 0 5px 5px 0;\n    }\n\n    &.active {\n      font-weight: 500;\n      color: #fff;\n      background: #07c;\n    }\n    \n    &:not(.active) {\n      &:hover,\n      &:focus {\n        color: #374047;\n        background: #dee1e3;\n      }\n    }\n  }\n\n  a {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-sizing: border-box;\n    min-width: 36px;\n    height: 36px;\n    padding: 0 5px;\n    color: inherit;\n    text-decoration: none;\n  }\n\n  .txt {\n    display: block;\n    width: 100%;\n    height: 100%;\n    font-size: 0;\n  }\n\n  @media screen and (max-width: 768px) {\n    a {\n      min-width: 30px;\n      height: 30px;\n    }\n  }\n"]);return P=function(){return n},n}var N=k.a.div(P()),C=function(n){var e=n.page,t=void 0===e?1:e,a=n.total,r=void 0===a?1:a,i=n.onChange,o=void 0===i?function(){}:i,c=n.getPageUrl,l=void 0===c?function(){}:c,s=n.countPerPage,p=void 0===s?10:s,f=n.pageLen,d=void 0===f?5:f;return u.a.createElement(E.b,{ns:"components"},function(n){return u.a.createElement(N,null,u.a.createElement(O.a,{activePage:t,totalItemsCount:r,onChange:o,itemsCountPerPage:p,pageRangeDisplayed:d,getPageUrl:l,innerClass:"pagination",activeLinkClass:"active",firstPageText:u.a.createElement("span",{className:"fas fa-angle-double-left"},u.a.createElement("span",{className:"txt"},n("pagination.first"))),prevPageText:u.a.createElement("span",{className:"fas fa-angle-left"},u.a.createElement("span",{className:"txt"},n("pagination.prev"))),nextPageText:u.a.createElement("span",{className:"fas fa-angle-right"},u.a.createElement("span",{className:"txt"},n("pagination.next"))),lastPageText:u.a.createElement("span",{className:"fas fa-angle-double-right"},u.a.createElement("span",{className:"txt"},n("pagination.last")))}))})},T=t(513),z=t(511),A=t(510),L=t(512);function U(){var n=Object(w.a)(["\n  padding: 0;\n  border-bottom: 1px solid #ddd;\n\n  .article-item {\n    list-style: none;\n    padding: 22px 0 17px 20px;\n    border-top: 1px solid #ddd;\n    position: relative;\n  }\n\n  .title {\n    padding-right: 60px;\n    line-height: 1.3;\n    font-weight: 500;\n    font-size: 22px;\n    color: #07c;\n    word-wrap: break-word;\n\n    a {\n      color: inherit;\n      text-decoration: none;\n\n      &:hover,\n      &:focus {\n        text-decoration: underline;\n      }\n    }\n  }\n\n  .desc {\n    margin-top: 4px;\n    word-wrap: break-word;\n    font-size: 14px;\n    color: #374047;\n  }\n\n  .info {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    margin-top: 15px;\n  }\n\n  "," {\n    justify-content: flex-end;\n    margin-left: 10px;\n    margin-right: -4px;\n  }\n\n  "," {\n    flex-shrink: 0;\n  }\n\n  "," {\n    position: absolute;\n    top: 23px;\n    right: 0;\n  }\n\n  @media screen and (max-width: 768px) {\n    .article-item {\n      padding: 15px 0 12px 0;\n    }\n\n    .title {\n      font-size: 18px;\n    }\n\n    .desc {\n      font-size: 13px;\n    }\n\n    .info {\n      display: block;\n      margin-top: 15px;\n    }\n\n    "," {\n      justify-content: flex-start;\n      margin-top: 10px;\n      margin-left: 0;\n      margin-right: 0;\n    }\n\n    "," {\n      top: 17px;\n    }\n  }\n"]);return U=function(){return n},n}function D(){var n=Object(w.a)(["\n  > div {\n    padding: 22px 20px 17px;\n    border-top: 1px solid #ddd;\n  }\n"]);return D=function(){return n},n}function I(){var n=Object(w.a)(["\n  margin-bottom: 10px;\n"]);return I=function(){return n},n}var S=k.a.p(I()),M=k.a.div(D()),F=k.a.ul(U(),A.a,z.a,L.a,A.a,L.a),R=function(){return u.a.createElement(M,null,Object(l.a)(Array(5).keys()).map(function(n){return u.a.createElement(b.a,{key:n,showLoadingAnimation:!0,type:"media",ready:!1,rows:4,color:"#E0E0E0"},u.a.createElement("div",null))}))},H=function(n){function e(){var n,t;Object(a.a)(this,e);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(n=Object(o.a)(e)).call.apply(n,[this].concat(c)))).fetch=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=t.props,a=e.articleListActions,r=e.username,i=e.filter,o=e.tag;a.fetch({filter:i,param:{username:r,page:n-1,tag:o}})},t}return Object(c.a)(e,n),Object(r.a)(e,[{key:"componentDidMount",value:function(){this.fetch(parseInt(this.props.page))}},{key:"componentDidUpdate",value:function(n){n.page===this.props.page&&n.filter===this.props.filter&&n.tag===this.props.tag||this.fetch(parseInt(this.props.page))}},{key:"componentWillUnmount",value:function(){this.props.articleListActions.reset()}},{key:"render",value:function(){var n=this.props,e=n.useTotal,t=n.page,a=n.countPerPage,r=n.handlePageChange,i=n.getPageUrl,o=n.loading,c=n.articles,l=n.articlesCount,s=n.tag,f=Math.ceil(l/a);return u.a.createElement(u.a.Fragment,null,e&&u.a.createElement(S,null,t," / ",f),u.a.createElement(b.a,{ready:!o,customPlaceholder:u.a.createElement(R,null)},u.a.createElement(F,null,c.map(function(n,e){return u.a.createElement("li",{key:n.slug,className:"article-item"},u.a.createElement("p",{className:"title"},u.a.createElement(p.a,{to:"/article/".concat(n.slug)},n.title)),u.a.createElement("p",{className:"desc"},n.description),u.a.createElement("div",{className:"info"},u.a.createElement(v.a,{image:n.author.image,username:n.author.username,createdAt:n.createdAt}),u.a.createElement(T.a,{tags:n.tagList,currentTag:s,small:!0})),u.a.createElement(j.a,{slug:n.slug,favorited:n.favorited,favoritesCount:n.favoritesCount}))}))),u.a.createElement(C,{page:parseInt(t),total:l,onChange:r,countPerPage:a,getPageUrl:i}))}}]),e}(s.Component);H.defaultProps={page:1,countPerPage:10};e.a=Object(g.a)(f.a,Object(m.b)(function(n){return{loading:n.articleList.loading,articles:n.articleList.articles,articlesCount:n.articleList.articlesCount}},function(n){return{articleListActions:Object(d.b)(h,n)}}))(H)},522:function(n,e,t){"use strict";var a=t(0),r=t.n(a),i=t(87);function o(){var n=Object(i.a)(["\n  display: flex;\n  margin-bottom: 20px;\n  padding: 0;\n  position: relative;\n\n  &:before {\n    content: '';\n    display: block;\n    height: 1px;\n    background: #004d84;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n\n  li {\n    list-style: none;\n\n    &:not(:first-child) {\n      margin-left: -1px;\n    }\n\n    &.selected a {\n      font-weight: 500;\n      color: #00365d;\n      border: 1px solid #004d84;\n      border-bottom: 1px solid #fff;\n      position: relative;\n    }\n  }\n\n  a {\n    box-sizing: border-box;\n    display: block;\n    min-width: 110px;\n    padding: 10px 20px;\n    text-align: center;\n    color: #97a1a7;\n    text-decoration: none;\n    border: 1px solid #bec4c8;\n    border-bottom: 1px solid #004d84;\n  }\n\n  .sub {\n    font-size: .7em;\n  }\n\n  @media screen and (max-width: 768px) {\n    a {\n      padding: 8px 15px;\n    }\n  }\n"]);return o=function(){return n},n}var c=t(88).a.ul(o());e.a=function(n){return r.a.createElement(c,null,n.children)}}}]);