(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{367:function(n,e,t){"use strict";var a=t(113),r=t(114);function o(){var n=Object(a.a)(["\n  box-sizing: border-box;\n  height: 25px;\n  line-height: 25px;\n  padding: 0 5px;\n  font-size: 12px;\n  border-radius: 5px;\n  cursor: pointer;\n\n  ","\n"]);return o=function(){return n},n}e.a=r.a.button(o(),function(n){return n.favorited?"\n      color: #fff;\n      background: #07c;\n      border: 1px solid #07c;\n    ":"\n      color: #000;\n      background: #fff;\n      border: 1px solid #ccc;\n    "})},369:function(n,e,t){"use strict";var a=t(1),r=t.n(a),o=t(456),i=t(113);function c(){var n=Object(i.a)(["\n  display: inline-block;\n\n  .link {\n    display: flex;\n    align-items: center;\n    color: #000;\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      .name {\n        text-decoration: underline;\n      }\n    }\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .img {\n    flex-shrink: 0;\n    width: 32px;\n    height: 32px;\n    margin-right: 10px;\n    border-radius: 16px;\n    overflow: hidden;\n\n    img {\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  .con {\n    flex: 1;\n  }\n\n  .name {\n    margin: 0;\n    font-size: 14px;\n  }\n\n  .date {\n    margin: 0;\n    font-size: 11px;\n  }\n"]);return c=function(){return n},n}var l=t(114).a.div(c());e.a=function(n){var e=n.username,t=n.image,a=n.createdAt;return r.a.createElement(l,null,r.a.createElement(o.a,{to:"/@".concat(e),className:"link"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:t||"".concat("/world","/assets/profile-dummy.jpg"),alt:""})),r.a.createElement("div",{className:"con"},r.a.createElement("p",{className:"name"},e),r.a.createElement("p",{className:"date"},new Date(a).toDateString()))))}},370:function(n,e,t){"use strict";var a=t(365),r=t.n(a),o=t(366),i=t(49),c=t(50),l=t(52),s=t(51),u=t(53),p=t(1),f=t.n(p),d=t(466),m=t(34),g=t(9),h=t(35),v=t(115),b=t(367),x=function(n){function e(n){var t;return Object(i.a)(this,e),(t=Object(l.a)(this,Object(s.a)(e).call(this,n))).like=Object(o.a)(r.a.mark(function n(){var e,a,o,i,c;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e=t.state,a=e.slug,o=e.favorited,t.props.user){n.next=4;break}return Object(v.a)(t.props),n.abrupt("return");case 4:return n.prev=4,t.req=g.a.CancelToken.source(),n.next=8,g.a.Articles[o?"unfavorite":"favorite"]({slug:a,source:t.req});case 8:i=n.sent,c=i.data,t.setState(Object(h.a)(function(n){n.favorited=c.article.favorited,n.favoritesCount=c.article.favoritesCount})),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(4),console.log(n.t0);case 16:case"end":return n.stop()}},n,this,[[4,13]])})),t.state={slug:n.slug,favorited:n.favorited,favoritesCount:n.favoritesCount},t}return Object(u.a)(e,n),Object(c.a)(e,[{key:"componentWillUnmount",value:function(){this.req&&this.req.cancel()}},{key:"render",value:function(){var n=this.state,e=n.favorited,t=n.favoritesCount;return f.a.createElement(b.a,{type:"button",onClick:this.like,favorited:e},f.a.createElement("span",{className:"txt"},"\uc88b\uc544\uc694")," ",f.a.createElement("span",{className:"count"},t))}}]),e}(p.Component);x.defaultProps={slug:"",favorited:!1,favoritesCount:0};e.a=Object(d.a)(Object(m.b)(function(n){return{user:n.auth.user,userInfo:n.auth.userInfo}},function(n){return{}})(x))},380:function(n,e,t){"use strict";var a=t(49),r=t(50),o=t(52),i=t(51),c=t(53),l=t(1),s=t.n(l),u=t(456),p=t(466),f=t(17),d=t(34),m=t(117),g=t(369),h=t(370),v=t(382),b=t.n(v),x=t(113),E=t(114);function j(){var n=Object(x.a)(["\n  .pagination {\n    display: flex;\n    justify-content: center;\n    padding: 0;\n  }\n\n  li {\n    margin: 5px;\n    list-style: none;\n  }\n\n  .active {\n    font-weight: bold;\n    color: red;\n  }\n"]);return j=function(){return n},n}var y=E.a.div(j()),O=function(n){var e=n.page,t=void 0===e?1:e,a=n.total,r=void 0===a?1:a,o=n.onChange,i=void 0===o?function(){}:o,c=n.getPageUrl,l=void 0===c?function(){}:c,u=n.countPerPage,p=void 0===u?10:u,f=n.pageLen,d=void 0===f?5:f;return s.a.createElement(y,null,s.a.createElement(b.a,{activePage:t,totalItemsCount:r,onChange:i,itemsCountPerPage:p,pageRangeDisplayed:d,getPageUrl:l,innerClass:"pagination",activeLinkClass:"active",firstPageText:"\ucc98\uc74c",prevPageText:"\uc774\uc804",nextPageText:"\ub2e4\uc74c",lastPageText:"\ub9c8\uc9c0\ub9c9"}))},w=t(367);function k(){var n=Object(x.a)(["\n  padding: 0;\n  border-bottom: 1px solid #ddd;\n\n  p {\n    margin: 0;\n  }\n\n  .article-item {\n    list-style: none;\n    padding: 15px 25px;\n    border-top: 1px solid #ddd;\n    position: relative;\n\n    &:not(:first-child) {\n      margin-top: 10px;\n    }\n\n    .title {\n      font-weight: bold;\n      font-size: 24px;\n      color: #333;\n\n      a {\n        color: inherit;\n        text-decoration: none;\n\n        &:hover,\n        &:focus {\n          text-decoration: underline;\n        }\n      }\n    }\n\n    .info {\n      text-align: right;\n      font-size: 12px;\n      color: #999;\n    }\n\n    ."," {\n      position: absolute;\n      top: 15px;\n      right: 25px;\n    }\n  }\n"]);return k=function(){return n},n}var C=E.a.ul(k(),w.a.styledComponentId),P=function(n){function e(){var n,t;Object(a.a)(this,e);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(t=Object(o.a)(this,(n=Object(i.a)(e)).call.apply(n,[this].concat(c)))).fetch=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=t.props,a=e.articleListActions,r=e.username,o=e.filter;a.fetch({filter:o,param:{username:r,page:n-1}})},t}return Object(c.a)(e,n),Object(r.a)(e,[{key:"componentDidMount",value:function(){this.fetch(parseInt(this.props.page))}},{key:"componentDidUpdate",value:function(n){n.page===this.props.page&&n.filter===this.props.filter||this.fetch(parseInt(this.props.page))}},{key:"componentWillUnmount",value:function(){this.props.articleListActions.reset()}},{key:"render",value:function(){var n=this.props,e=n.useTotal,t=n.page,a=n.countPerPage,r=n.handlePageChange,o=n.getPageUrl,i=n.loading,c=n.articles,l=n.articlesCount,p=Math.ceil(l/a);return i?s.a.createElement("div",null,"Loading..."):s.a.createElement(s.a.Fragment,null,e&&s.a.createElement("p",null,t," / ",p),s.a.createElement(C,null,c.map(function(n,e){return s.a.createElement("li",{key:n.slug,className:"article-item"},s.a.createElement(g.a,{image:n.author.image,username:n.author.username,createdAt:n.createdAt}),s.a.createElement("p",{className:"title"},s.a.createElement(u.a,{to:"/article/".concat(n.slug)},n.title)),s.a.createElement("p",{className:"desc"},n.description),s.a.createElement("div",{className:"info"},s.a.createElement("span",{className:"tag"},"Tag: ",n.tagList.join(", "))),s.a.createElement(h.a,{slug:n.slug,favorited:n.favorited,favoritesCount:n.favoritesCount}))})),s.a.createElement(O,{page:parseInt(t),total:l,onChange:r,countPerPage:a,getPageUrl:o}))}}]),e}(l.Component);P.defaultProps={page:1,countPerPage:10};e.a=Object(p.a)(Object(d.b)(function(n){return{loading:n.articleList.loading,articles:n.articleList.articles,articlesCount:n.articleList.articlesCount}},function(n){return{articleListActions:Object(f.b)(m,n)}})(P))},381:function(n,e,t){"use strict";var a=t(1),r=t.n(a),o=t(113);function i(){var n=Object(o.a)(["\n  display: flex;\n  padding: 0;\n  position: relative;\n\n  &:before {\n    content: '';\n    display: block;\n    height: 1px;\n    background: #222;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n\n  li {\n    list-style: none;\n\n    &:not(:first-child) {\n      margin-left: -1px;\n    }\n\n    &.selected a {\n      font-weight: bold;\n      color: #222;\n      border: 1px solid #222;\n      border-bottom: 1px solid #fff;\n      position: relative;\n    }\n  }\n\n  a {\n    box-sizing: border-box;\n    display: block;\n    min-width: 110px;\n    padding: 10px 20px;\n    color: #999;\n    text-decoration: none;\n    border: 1px solid #ddd;\n    border-bottom: 1px solid #222;\n  }\n\n  .sub {\n    font-size: .7em;\n  }\n"]);return i=function(){return n},n}var c=t(114).a.ul(i());e.a=function(n){return r.a.createElement(c,null,n.children)}},464:function(n,e,t){"use strict";t.r(e);var a=t(49),r=t(50),o=t(52),i=t(51),c=t(53),l=t(1),s=t.n(l),u=t(456),p=t(365),f=t.n(p),d=t(366),m=t(466),g=t(17),h=t(34),v=t(155),b=t(115),x=t(113);function E(){var n=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 50px 20px 30px;\n  background: #ebedee;\n\n  p {\n    margin: 0;\n  }\n\n  .img {\n    width: 110px;\n    height: 110px;\n    margin-bottom: 10px;\n    border-radius: 55px;\n    overflow: hidden;\n\n    img {\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  .username {\n    margin: 0;\n    font-weight: bold;\n    font-size: 26px;\n    color: #222;\n\n    a {\n      color: inherit;\n      text-decoration: none;\n\n      &:hover,\n      &:focus {\n        text-decoration: underline;\n      }\n    }\n  }\n\n  .bio {\n    margin-top: 10px;\n    font-size: 14px;\n    color: #999;\n  }\n\n  .action {\n    width: 100%;\n    margin-top: 20px;\n    padding-top: 20px;\n    text-align: center;\n    border-top: 1px solid #ccc;\n\n    button {\n      padding: 10px 20px;\n    }\n  }\n"]);return E=function(){return n},n}var j=t(114).a.div(E()),y=function(n){function e(){var n,t;Object(a.a)(this,e);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(t=Object(o.a)(this,(n=Object(i.a)(e)).call.apply(n,[this].concat(c)))).follow=function(){var n=Object(d.a)(f.a.mark(function n(e){return f.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t.props.user){n.next=3;break}return Object(b.a)(t.props),n.abrupt("return");case 3:t.props.profileAction[e?"follow":"unfollow"](t.props.username);case 4:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}(),t}return Object(c.a)(e,n),Object(r.a)(e,[{key:"componentDidMount",value:function(){this.props.profileAction.fetch(this.props.username)}},{key:"componentWillUnmount",value:function(){this.props.profileAction.reset()}},{key:"render",value:function(){var n=this,e=this.props,t=e.user,a=e.userInfo,r=e.loading,o=e.profile;if(r)return s.a.createElement("div",null,"Loading...");var i=o.username,c=o.bio,l=o.image,p=o.following,f=i!==a.username,d=f&&!1===p,m=f&&!0===p;return s.a.createElement(j,null,s.a.createElement(u.a,{to:"/@".concat(i)},s.a.createElement("div",{className:"img"},s.a.createElement("img",{src:l||"".concat("/world","/assets/profile-dummy.jpg"),alt:""}))),s.a.createElement("h2",{className:"username"},s.a.createElement(u.a,{to:"/@".concat(i)},i)),s.a.createElement("p",{className:"bio"},c),(d||m||!t)&&s.a.createElement("div",{className:"action"},(d||!t)&&s.a.createElement("button",{type:"button",onClick:function(){n.follow(!0)}},"Follow ",i),m&&s.a.createElement("button",{type:"button",onClick:function(){n.follow(!1)}},"Unfollow ",i)))}}]),e}(l.Component),O=Object(m.a)(Object(h.b)(function(n){return{user:n.auth.user,userInfo:n.auth.userInfo,profile:n.profile.profile}},function(n){return{profileAction:Object(g.b)(v,n)}})(y)),w=t(380),k=t(381),C=function(n){function e(){var n,t;Object(a.a)(this,e);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(t=Object(o.a)(this,(n=Object(i.a)(e)).call.apply(n,[this].concat(c)))).isRoot=function(){return void 0===t.props.match.params.filter},t.getListType=function(){return t.isRoot()||"articles"===t.props.match.params.filter?"articles":"favorites"},t.getPageUrl=function(n){var e=t.props.match.params.username;return"/@".concat(e,"/").concat(t.getListType(),"/").concat(n)},t.handlePageChange=function(n){t.props.history.push(t.getPageUrl(n))},t}return Object(c.a)(e,n),Object(r.a)(e,[{key:"render",value:function(){var n=this.props.match.params,e=n.username,t=this.getListType(),a=this.isRoot()?n.filter:n.page;return s.a.createElement(s.a.Fragment,null,s.a.createElement(O,{username:e}),s.a.createElement(k.a,null,s.a.createElement("li",{className:"articles"===t?"selected":""},s.a.createElement(u.a,{to:"/@".concat(e)},"\ub4f1\ub85d\ud55c \uae00")),s.a.createElement("li",{className:"favorites"===t?"selected":""},s.a.createElement(u.a,{to:"/@".concat(e,"/favorites")},"\uc88b\uc544\ud558\ub294 \uae00"))),s.a.createElement(w.a,{username:e,filter:t,page:a,handlePageChange:this.handlePageChange,getPageUrl:this.getPageUrl,useTotal:!0,countPerPage:5}))}}]),e}(l.Component);e.default=C}}]);