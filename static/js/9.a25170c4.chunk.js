(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{453:function(n,e,t){"use strict";var a=t(80),r=t(81);function i(){var n=Object(a.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding-top: ",";\n\n  &:empty {\n    display: none;\n  }\n\n  a {\n    display: block;\n    height: ",";\n    line-height: ",";\n    margin: 0 4px 4px 0;\n    padding: 0 10px;\n    font-weight: 300;\n    font-size: ",";\n    color: #97a1a7;\n    text-decoration: none;\n    word-wrap: break-word;\n    background: #fff;\n    border: 1px solid #cfd3d6;\n    border-radius: ",";\n    transition: all .2s;\n\n    &:hover,\n    &:focus {\n      color: #374047;\n      border-color: #97a1a7;\n    }\n\n    &.selected {\n      color: #07c;\n      border-color: #07c;\n    }\n  }\n"]);return i=function(){return n},n}e.a=r.a.ul(i(),function(n){return n.small&&"4px"},function(n){return n.small?"16px":"22px"},function(n){return n.small?"14px":"20px"},function(n){return n.small?"11px":"12px"},function(n){return n.small?"8px":"10px"})},456:function(n,e,t){"use strict";var a=t(80),r=t(81);function i(){var n=Object(a.a)(["\n  display: flex;\n  align-items: center;\n\n  .link {\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      .name {\n        text-decoration: underline;\n      }\n    }\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .img {\n    flex-shrink: 0;\n    width: 24px;\n    height: 24px;\n    border-radius: 16px;\n    overflow: hidden;\n\n    img {\n      width: 100%;\n      height: 100%;\n      vertical-align: top;\n    }\n  }\n\n  .con {\n    flex: 1;\n  }\n\n  .name {\n    margin-left: 10px;\n    font-size: 13px;\n  }\n\n  .date {\n    margin-left: 10px;\n    font-size: 11px;\n    color: inherit;\n    opacity: .6;\n  }\n"]);return i=function(){return n},n}e.a=r.a.div(i())},457:function(n,e,t){"use strict";var a=t(80),r=t(81);function i(){var n=Object(a.a)(["\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 25px;\n  padding: 0 5px;\n  font-size: 12px;\n  border: 1px solid #07c;\n  border-radius: 5px;\n  cursor: pointer;\n\n  ","\n\n  .txt {\n    position: absolute;\n    left: -9999px;\n  }\n\n  .count {\n    margin-left: 5px;\n  }\n\n  .loading {\n    animation: spin 1s infinite linear;\n  }\n\n  @keyframes spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"]);return i=function(){return n},n}e.a=r.a.button(i(),function(n){return n.favorited?"\n      color: #fff;\n      background: #07c;\n\n      i {\n        color: #fff;\n      }\n    ":"\n      color: #07c;\n      background: #fff;\n\n      i {\n        color: #07c;\n      }\n    "})},459:function(n,e,t){"use strict";var a=t(0),r=t.n(a),i=t(546),o=t(453);e.a=function(n){var e=n.tags,t=n.currentTag,a=n.small;return r.a.createElement(o.a,{small:a},e.map(function(n){return r.a.createElement("li",{key:n},r.a.createElement(i.a,{to:"/tag/".concat(n),className:n===t?"selected":""},n))}))}},460:function(n,e,t){"use strict";var a=t(0),r=t.n(a),i=t(546),o=t(456);e.a=function(n){var e=n.username,t=n.image,a=n.createdAt;return r.a.createElement(o.a,null,r.a.createElement(i.a,{to:"/@".concat(e),className:"link"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:t||"".concat("/world","/assets/profile-dummy.jpg"),alt:""})),r.a.createElement("p",{className:"name"},e)),r.a.createElement("p",{className:"date"},new Date(a).toDateString()))}},461:function(n,e,t){"use strict";var a=t(454),r=t.n(a),i=t(455),o=t(44),c=t(45),l=t(48),s=t(46),p=t(49),u=t(0),f=t.n(u),d=t(552),m=t(50),g=t(47),h=t(67),x=t(7),b=t(18),v=t(136),E=t(457),y=function(n){function e(n){var t;return Object(o.a)(this,e),(t=Object(l.a)(this,Object(s.a)(e).call(this,n))).like=Object(i.a)(r.a.mark(function n(){var e,a,i,o,c;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e=t.state,a=e.slug,i=e.favorited,t.props.user){n.next=4;break}return Object(v.a)(t.props),n.abrupt("return");case 4:return n.prev=4,t.setState(Object(b.a)(function(n){n.loading=!0})),t.req=x.a.CancelToken.source(),n.next=9,x.a.Articles[i?"unfavorite":"favorite"]({slug:a,config:{cancelToken:t.req.token}});case 9:o=n.sent,c=o.data,t.setState(Object(b.a)(function(n){n.loading=!1,n.favorited=c.article.favorited,n.favoritesCount=c.article.favoritesCount})),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(4),console.log(n.t0);case 17:case"end":return n.stop()}},n,this,[[4,14]])})),t.state={slug:n.slug,favorited:n.favorited,favoritesCount:n.favoritesCount},t}return Object(p.a)(e,n),Object(c.a)(e,[{key:"componentWillUnmount",value:function(){this.req&&this.req.cancel()}},{key:"render",value:function(){var n=this.props.t,e=this.state,t=e.loading,a=e.favorited,r=e.favoritesCount;return f.a.createElement(E.a,{type:"button",onClick:this.like,favorited:a},t?f.a.createElement("i",{className:"fas fa-spinner loading"}):f.a.createElement(f.a.Fragment,null,f.a.createElement("i",{className:"fas fa-heart"}),f.a.createElement("span",{className:"txt"},n("like.actionText"))," ",f.a.createElement("span",{className:"count"},r)))}}]),e}(u.Component);y.defaultProps={loading:!1,slug:"",favorited:!1,favoritesCount:0};e.a=Object(h.a)(d.a,Object(m.b)(function(n){return{user:n.auth.user,userInfo:n.auth.userInfo}},function(n){return{}}),Object(g.d)("components"))(y)},467:function(n,e,t){"use strict";var a=t(44),r=t(45),i=t(48),o=t(46),c=t(49),l=t(142),s=t(0),p=t.n(s),u=t(546),f=t(552),d=t(25),m=t(50),g=t(67),h=t(140),x=t(138),b=t.n(x),v=t(460),E=t(461),y=t(47),w=t(473),j=t.n(w),k=t(80),O=t(81);function P(){var n=Object(k.a)(["\n  margin-top: 30px;\n\n  .pagination {\n    display: flex;\n    justify-content: center;\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    flex-shrink: 0;\n    text-align: center;\n    font-size: 14px;\n    color: #7f8a93;\n    background: #ebedee;\n    list-style: none;\n    transition: all .2s;\n\n    &:not(:first-child) {\n      border-left: 1px solid #cfd3d6;\n    }\n\n    &:first-child {\n      border-radius: 5px 0 0 5px;\n    }\n\n    &:last-child {\n      border-radius: 0 5px 5px 0;\n    }\n\n    &.active {\n      font-weight: 500;\n      color: #fff;\n      background: #07c;\n    }\n    \n    &:not(.active) {\n      &:hover,\n      &:focus {\n        color: #374047;\n        background: #dee1e3;\n      }\n    }\n  }\n\n  a {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-sizing: border-box;\n    min-width: 36px;\n    height: 36px;\n    padding: 0 5px;\n    color: inherit;\n    text-decoration: none;\n  }\n\n  .txt {\n    display: block;\n    width: 100%;\n    height: 100%;\n    font-size: 0;\n  }\n\n  @media screen and (max-width: 768px) {\n    a {\n      min-width: 30px;\n      height: 30px;\n    }\n  }\n"]);return P=function(){return n},n}var C=O.a.div(P()),N=function(n){var e=n.page,t=void 0===e?1:e,a=n.total,r=void 0===a?1:a,i=n.onChange,o=void 0===i?function(){}:i,c=n.getPageUrl,l=void 0===c?function(){}:c,s=n.countPerPage,u=void 0===s?10:s,f=n.pageLen,d=void 0===f?5:f;return p.a.createElement(y.b,{ns:"components"},function(n){return p.a.createElement(C,null,p.a.createElement(j.a,{activePage:t,totalItemsCount:r,onChange:o,itemsCountPerPage:u,pageRangeDisplayed:d,getPageUrl:l,innerClass:"pagination",activeLinkClass:"active",firstPageText:p.a.createElement("span",{className:"fas fa-angle-double-left"},p.a.createElement("span",{className:"txt"},n("pagination.first"))),prevPageText:p.a.createElement("span",{className:"fas fa-angle-left"},p.a.createElement("span",{className:"txt"},n("pagination.prev"))),nextPageText:p.a.createElement("span",{className:"fas fa-angle-right"},p.a.createElement("span",{className:"txt"},n("pagination.next"))),lastPageText:p.a.createElement("span",{className:"fas fa-angle-double-right"},p.a.createElement("span",{className:"txt"},n("pagination.last")))}))})},A=t(459),z=t(456),L=t(453),T=t(457);function U(){var n=Object(k.a)(["\n  padding: 0;\n  border-bottom: 1px solid #ddd;\n\n  .article-item {\n    list-style: none;\n    padding: 22px 0 17px 20px;\n    border-top: 1px solid #ddd;\n    position: relative;\n  }\n\n  .title {\n    padding-right: 60px;\n    line-height: 1.3;\n    font-weight: 500;\n    font-size: 22px;\n    color: #07c;\n    word-wrap: break-word;\n\n    a {\n      color: inherit;\n      text-decoration: none;\n\n      &:hover,\n      &:focus {\n        text-decoration: underline;\n      }\n    }\n  }\n\n  .desc {\n    margin-top: 4px;\n    word-wrap: break-word;\n    font-size: 14px;\n    color: #374047;\n  }\n\n  .info {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    margin-top: 15px;\n  }\n\n  "," {\n    justify-content: flex-end;\n    margin-left: 10px;\n    margin-right: -4px;\n  }\n\n  "," {\n    flex-shrink: 0;\n  }\n\n  "," {\n    position: absolute;\n    top: 23px;\n    right: 0;\n  }\n\n  @media screen and (max-width: 768px) {\n    .article-item {\n      padding: 15px 0 12px 0;\n    }\n\n    .title {\n      font-size: 18px;\n    }\n\n    .desc {\n      font-size: 13px;\n    }\n\n    .info {\n      display: block;\n      margin-top: 15px;\n    }\n\n    "," {\n      justify-content: flex-start;\n      margin-top: 10px;\n      margin-left: 0;\n      margin-right: 0;\n    }\n\n    "," {\n      top: 17px;\n    }\n  }\n"]);return U=function(){return n},n}function I(){var n=Object(k.a)(["\n  > div {\n    padding: 22px 20px 17px;\n    border-top: 1px solid #ddd;\n  }\n"]);return I=function(){return n},n}function D(){var n=Object(k.a)(["\n  margin-bottom: 10px;\n"]);return D=function(){return n},n}var q=O.a.p(D()),R=O.a.div(I()),M=O.a.ul(U(),L.a,z.a,T.a,L.a,T.a),S=function(){return p.a.createElement(R,null,Object(l.a)(Array(5).keys()).map(function(n){return p.a.createElement(b.a,{key:n,showLoadingAnimation:!0,type:"media",ready:!1,rows:4,color:"#E0E0E0"},p.a.createElement("div",null))}))},W=function(n){function e(){var n,t;Object(a.a)(this,e);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(n=Object(o.a)(e)).call.apply(n,[this].concat(c)))).fetch=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=t.props,a=e.articleListActions,r=e.username,i=e.filter,o=e.tag;a.fetch({filter:i,param:{username:r,page:n-1,tag:o},useCache:"POP"===t.props.history.action})},t}return Object(c.a)(e,n),Object(r.a)(e,[{key:"componentDidMount",value:function(){this.fetch(parseInt(this.props.page))}},{key:"componentDidUpdate",value:function(n){n.page===this.props.page&&n.filter===this.props.filter&&n.tag===this.props.tag||this.fetch(parseInt(this.props.page))}},{key:"componentWillUnmount",value:function(){this.props.articleListActions.reset()}},{key:"render",value:function(){var n=this.props,e=n.useTotal,t=n.page,a=n.countPerPage,r=n.handlePageChange,i=n.getPageUrl,o=n.loading,c=n.articles,l=n.articlesCount,s=n.tag,f=Math.ceil(l/a);return p.a.createElement(p.a.Fragment,null,e&&p.a.createElement(q,null,t," / ",f),p.a.createElement(b.a,{ready:!o,customPlaceholder:p.a.createElement(S,null)},p.a.createElement(M,null,c.map(function(n,e){return p.a.createElement("li",{key:n.slug,className:"article-item"},p.a.createElement("p",{className:"title"},p.a.createElement(u.a,{to:"/article/".concat(n.slug)},n.title)),p.a.createElement("p",{className:"desc"},n.description),p.a.createElement("div",{className:"info"},p.a.createElement(v.a,{image:n.author.image,username:n.author.username,createdAt:n.createdAt}),p.a.createElement(A.a,{tags:n.tagList,currentTag:s,small:!0})),p.a.createElement(E.a,{slug:n.slug,favorited:n.favorited,favoritesCount:n.favoritesCount}))}))),p.a.createElement(N,{page:parseInt(t),total:l,onChange:r,countPerPage:a,getPageUrl:i}))}}]),e}(s.Component);W.defaultProps={page:1,countPerPage:10};e.a=Object(g.a)(f.a,Object(m.b)(function(n){return{loading:n.articleList.loading,articles:n.articleList.articles,articlesCount:n.articleList.articlesCount}},function(n){return{articleListActions:Object(d.b)(h,n)}}))(W)},472:function(n,e,t){"use strict";var a=t(0),r=t.n(a),i=t(80);function o(){var n=Object(i.a)(["\n  display: flex;\n  margin-bottom: 20px;\n  padding: 0;\n  position: relative;\n\n  &:before {\n    content: '';\n    display: block;\n    height: 1px;\n    background: #004d84;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n\n  li {\n    list-style: none;\n\n    &:not(:first-child) {\n      margin-left: -1px;\n    }\n\n    &.selected a {\n      font-weight: 500;\n      color: #00365d;\n      border: 1px solid #004d84;\n      border-bottom: 1px solid #fff;\n      position: relative;\n    }\n  }\n\n  a {\n    box-sizing: border-box;\n    display: block;\n    min-width: 110px;\n    padding: 10px 20px;\n    text-align: center;\n    color: #97a1a7;\n    text-decoration: none;\n    border: 1px solid #bec4c8;\n    border-bottom: 1px solid #004d84;\n  }\n\n  .sub {\n    font-size: .7em;\n  }\n\n  @media screen and (max-width: 768px) {\n    a {\n      padding: 8px 15px;\n    }\n  }\n"]);return o=function(){return n},n}var c=t(81).a.ul(o());e.a=function(n){return r.a.createElement(c,null,n.children)}},551:function(n,e,t){"use strict";t.r(e);var a=t(44),r=t(45),i=t(48),o=t(46),c=t(49),l=t(0),s=t.n(l),p=t(546),u=t(47),f=t(67),d=t(135),m=t(454),g=t.n(m),h=t(455),x=t(552),b=t(25),v=t(50),E=t(183),y=t(136),w=t(80),j=t(81);function k(){var n=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 50px 20px 30px;\n  background: #ebedee;\n\n  p {\n    margin: 0;\n  }\n\n  .img {\n    width: 110px;\n    height: 110px;\n    margin-bottom: 10px;\n    border-radius: 55px;\n    overflow: hidden;\n\n    img {\n      width: 100%;\n      height: 100%;\n      vertical-align: top;\n    }\n  }\n\n  .username {\n    margin: 0;\n    font-weight: 500;\n    font-size: 26px;\n    color: #222;\n\n    a {\n      color: inherit;\n      text-decoration: none;\n\n      &:hover,\n      &:focus {\n        text-decoration: underline;\n      }\n    }\n  }\n\n  .bio {\n    margin-top: 10px;\n    font-size: 14px;\n    color: #999;\n  }\n\n  .action {\n    width: 100%;\n    margin-top: 20px;\n    padding-top: 20px;\n    text-align: center;\n    border-top: 1px solid #ccc;\n  }\n\n  @media screen and (max-width: 768px) {\n    padding: 40px 15px 20px;\n\n    .img {\n      width: 90px;\n      height: 90px;\n      border-radius: 45px;\n    }\n\n    .username {\n      font-size: 20px;\n    }\n\n    .bio {\n      font-size: 13px;\n    }\n  }\n"]);return k=function(){return n},n}var O=j.a.div(k()),P=function(n){function e(){var n,t;Object(a.a)(this,e);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(n=Object(o.a)(e)).call.apply(n,[this].concat(c)))).follow=function(){var n=Object(h.a)(g.a.mark(function n(e){return g.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t.props.user){n.next=3;break}return Object(y.a)(t.props),n.abrupt("return");case 3:t.props.profileAction[e?"follow":"unfollow"](t.props.username);case 4:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}(),t}return Object(c.a)(e,n),Object(r.a)(e,[{key:"componentDidMount",value:function(){this.props.profileAction.fetch(this.props.username)}},{key:"componentDidUpdate",value:function(n){n.username!==this.props.username&&this.props.profileAction.fetch(this.props.username)}},{key:"componentWillUnmount",value:function(){this.props.profileAction.reset()}},{key:"render",value:function(){var n=this,e=this.props,t=e.user,a=e.userInfo,r=e.loading,i=e.profile,o=e.history,c=e.t;if(r)return s.a.createElement("div",null,"Loading...");var l=i.username,u=i.bio,f=i.image,d=i.following,m=void 0!==l&&l===a.username,g=!m&&!1===d,h=!m&&!0===d;return s.a.createElement(O,null,s.a.createElement(p.a,{to:"/@".concat(l)},s.a.createElement("div",{className:"img"},s.a.createElement("img",{src:f||"".concat("/world","/assets/profile-dummy.jpg"),alt:""}))),s.a.createElement("h2",{className:"username"},s.a.createElement(p.a,{to:"/@".concat(l)},l)),s.a.createElement("p",{className:"bio"},u),l&&s.a.createElement("div",{className:"action"},(g||!t)&&s.a.createElement("button",{type:"button",className:"btn light",onClick:function(){n.follow(!0)}},c("profileInfo.follow")," ",l),h&&s.a.createElement("button",{type:"button",className:"btn light",onClick:function(){n.follow(!1)}},c("profileInfo.unfollow")," ",l),m&&s.a.createElement("button",{type:"button",className:"btn light",onClick:function(){o.push("/profile")}},c("profileInfo.profile"))))}}]),e}(l.Component),C=Object(f.a)(x.a,Object(v.b)(function(n){return{user:n.auth.user,userInfo:n.auth.userInfo,profile:n.profile.profile}},function(n){return{profileAction:Object(b.b)(E,n)}}),Object(u.d)("components"))(P),N=t(467),A=t(472);function z(){var n=Object(w.a)(["\n"]);return z=function(){return n},n}var L=j.a.div(z()),T=function(n){function e(){var n,t;Object(a.a)(this,e);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(n=Object(o.a)(e)).call.apply(n,[this].concat(c)))).isRoot=function(){return void 0===t.props.match.params.filter},t.getListType=function(){return t.isRoot()||"articles"===t.props.match.params.filter?"articles":"favorites"},t.getPageUrl=function(n){var e=t.props.match.params.username;return"/@".concat(e,"/").concat(t.getListType(),"/").concat(n)},t.handlePageChange=function(n){t.props.history.push(t.getPageUrl(n))},t}return Object(c.a)(e,n),Object(r.a)(e,[{key:"render",value:function(){var n=this.props,e=n.match.params,t=n.t,a=e.username,r=this.getListType(),i=this.isRoot()?e.filter:e.page;return s.a.createElement(L,null,s.a.createElement(d.Helmet,null,s.a.createElement("title",null,"@",a," - ",t("common:siteName"))),s.a.createElement(C,{username:a}),s.a.createElement("div",{className:"container"},s.a.createElement(A.a,null,s.a.createElement("li",{className:"articles"===r?"selected":""},s.a.createElement(p.a,{to:"/@".concat(a)},t("myArticles"))),s.a.createElement("li",{className:"favorites"===r?"selected":""},s.a.createElement(p.a,{to:"/@".concat(a,"/favorites")},t("favoritedArticles")))),s.a.createElement(N.a,{username:a,filter:r,page:i,handlePageChange:this.handlePageChange,getPageUrl:this.getPageUrl,useTotal:!0,countPerPage:5})))}}]),e}(l.Component);e.default=Object(f.a)(Object(u.d)("profile"))(T)}}]);