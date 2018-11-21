(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{358:function(e,n,t){"use strict";var a=t(1),r=t.n(a),i=t(373),o=t(111);function c(){var e=Object(o.a)(["\n  display: inline-block;\n\n  .link {\n    display: flex;\n    align-items: center;\n    color: #000;\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      .name {\n        text-decoration: underline;\n      }\n    }\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .img {\n    flex-shrink: 0;\n    width: 32px;\n    height: 32px;\n    margin-right: 10px;\n    border-radius: 16px;\n    background: #ccc;\n  }\n\n  .con {\n    flex: 1;\n  }\n\n  .name {\n    margin: 0;\n    font-size: 14px;\n  }\n\n  .date {\n    margin: 0;\n    font-size: 11px;\n  }\n"]);return c=function(){return e},e}var l=t(112).a.div(c());n.a=function(e){return r.a.createElement(l,null,r.a.createElement(i.a,{to:"/@".concat(e.username),className:"link"},r.a.createElement("img",{src:e.image,alt:"",className:"img"}),r.a.createElement("div",{className:"con"},r.a.createElement("p",{className:"name"},e.username),r.a.createElement("p",{className:"date"},new Date(e.createdAt).toDateString()))))}},359:function(e,n,t){"use strict";var a=t(354),r=t.n(a),i=t(360),o=t(355),c=t(50),l=t(51),s=t(53),u=t(49),p=t(52),m=t(1),g=t(34),f=t(110),d=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).state={done:!1,data:null},t}return Object(p.a)(n,e),Object(l.a)(n,[{key:"componentWillUnmount",value:function(){this.source.cancel()}},{key:"initialize",value:function(){var e=Object(o.a)(r.a.mark(function e(n){var t,a,o,c,l;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.api,a=void 0===t?function(){}:t,o=n.param,e.prev=1,this.source=g.a.CancelToken.source(),e.next=5,a(Object(i.a)({},o,{source:this.source}));case 5:c=e.sent,l=c.data,this.setState(Object(f.a)(function(e){e.done=!0,e.data=l})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}},e,this,[[1,10]])}));return function(n){return e.apply(this,arguments)}}()},{key:"render",value:function(){return null}}]),n}(m.Component);n.a=d},361:function(e,n,t){"use strict";var a=t(50),r=t(51),i=t(114),o=t(53),c=t(52),l=t(49),s=t(364),u=t(1),p=t.n(u),m=t(373),g=t(33),f=t(110),d=t(34),h=t(359),v=t(358),b=t(362),x=t.n(b),y=t(111),j=t(112);function E(){var e=Object(y.a)(["\n  .pagination {\n    display: flex;\n    justify-content: center;\n    padding: 0;\n  }\n\n  li {\n    margin: 5px;\n    list-style: none;\n  }\n\n  .active {\n    font-weight: bold;\n    color: red;\n  }\n"]);return E=function(){return e},e}var O=j.a.div(E()),w=function(e){var n=e.page,t=void 0===n?1:n,a=e.total,r=void 0===a?1:a,i=e.onChange,o=void 0===i?function(){}:i,c=e.getPageUrl,l=void 0===c?function(){}:c,s=e.countPerPage,u=void 0===s?10:s,m=e.pageLen,g=void 0===m?5:m;return p.a.createElement(O,null,p.a.createElement(x.a,{activePage:t,totalItemsCount:r,onChange:o,itemsCountPerPage:u,pageRangeDisplayed:g,getPageUrl:l,innerClass:"pagination",activeLinkClass:"active",firstPageText:"\ucc98\uc74c",prevPageText:"\uc774\uc804",nextPageText:"\ub2e4\uc74c",lastPageText:"\ub9c8\uc9c0\ub9c9"}))};function P(){var e=Object(y.a)(["\n  padding: 0;\n  border-bottom: 1px solid #ddd;\n\n  p {\n    margin: 0;\n  }\n\n  .article-item {\n    list-style: none;\n    padding: 15px 25px;\n    border-top: 1px solid #ddd;\n\n    &:not(:first-child) {\n      margin-top: 10px;\n    }\n\n    .title {\n      font-weight: bold;\n      font-size: 24px;\n      color: #333;\n\n      a {\n        color: inherit;\n        text-decoration: none;\n\n        &:hover,\n        &:focus {\n          text-decoration: underline;\n        }\n      }\n    }\n\n    .info {\n      text-align: right;\n      font-size: 12px;\n      color: #999;\n    }\n  }\n"]);return P=function(){return e},e}var k=j.a.ul(P()),N=function(e){function n(){var e,t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),u=0;u<r;u++)c[u]=arguments[u];return(t=Object(o.a)(this,(e=Object(l.a)(n)).call.apply(e,[this].concat(c)))).state={page:1},t.initialize=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;t.setState(Object(f.a)(function(n){n.page=e}));var a=t.props,r=a.username,o=a.filter;Object(s.a)(Object(l.a)(n.prototype),"initialize",Object(i.a)(t)).call(Object(i.a)(t),{api:d.a.Articles[o?{articles:"byAuthor",favorites:"favoritedBy"}[o]:"all"],param:{username:r,page:e-1}})},t}return Object(c.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){this.initialize(parseInt(this.props.page))}},{key:"componentDidUpdate",value:function(e){e.page===this.props.page&&e.filter===this.props.filter||this.initialize(parseInt(this.props.page))}},{key:"render",value:function(){var e=this.props,n=e.useTotal,t=e.countPerPage,a=e.handlePageChange,r=e.getPageUrl,i=this.state,o=i.done,c=i.page,l=i.data;if(!o)return p.a.createElement("div",null,"Loading...");var s=l.articlesCount,u=l.articles,g=Math.ceil(s/t);return p.a.createElement(p.a.Fragment,null,n&&p.a.createElement("p",null,c," / ",g),p.a.createElement(k,null,u.map(function(e){return p.a.createElement("li",{key:e.slug,className:"article-item"},p.a.createElement(v.a,{image:e.author.image,username:e.author.username,createdAt:e.createdAt}),p.a.createElement("p",{className:"title"},p.a.createElement(m.a,{to:"/article/".concat(e.slug)},e.title)),p.a.createElement("p",{className:"desc"},e.description),p.a.createElement("div",{className:"info"},p.a.createElement("span",{className:"tag"},"Tag: ",e.tagList.join(", "))))})),p.a.createElement(w,{page:c,total:s,onChange:a,countPerPage:t,getPageUrl:r}))}}]),n}(h.a);N.defaultProps={page:1,countPerPage:10};n.a=Object(g.b)(function(e){return{user:e.auth.user,userInfo:e.auth.userInfo}},function(e){return{}})(N)},381:function(e,n,t){"use strict";t.r(n);var a=t(50),r=t(51),i=t(53),o=t(49),c=t(52),l=t(1),s=t.n(l),u=t(373),p=t(354),m=t.n(p),g=t(355),f=t(33),d=t(34),h=t(359),v=t(111);function b(){var e=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 50px 20px 30px;\n  background: #ebedee;\n\n  p {\n    margin: 0;\n  }\n\n  .img {\n    width: 110px;\n    height: 110px;\n    margin-bottom: 10px;\n    border-radius: 55px;\n    background: #ccc;\n  }\n\n  .username {\n    margin: 0;\n    font-weight: bold;\n    font-size: 26px;\n    color: #222;\n\n    a {\n      color: inherit;\n      text-decoration: none;\n\n      &:hover,\n      &:focus {\n        text-decoration: underline;\n      }\n    }\n  }\n\n  .bio {\n    margin-top: 10px;\n    font-size: 14px;\n    color: #999;\n  }\n\n  .action {\n    width: 100%;\n    margin-top: 20px;\n    padding-top: 20px;\n    text-align: center;\n    border-top: 1px solid #ccc;\n\n    button {\n      padding: 10px 20px;\n    }\n  }\n"]);return b=function(){return e},e}var x=t(112).a.div(b()),y=function(e){function n(){var e,t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(o.a)(n)).call.apply(e,[this].concat(c)))).follow=Object(g.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.followAction(!1);case 1:case"end":return e.stop()}},e,this)})),t.unfollow=Object(g.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.followAction(!0);case 1:case"end":return e.stop()}},e,this)})),t}return Object(c.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){this.initialize({api:d.a.Profile.get,param:{username:this.props.username}})}},{key:"render",value:function(){var e=this.props,n=e.user,t=e.userInfo,a=this.state,r=a.done,i=a.data;if(!r)return s.a.createElement("div",null,"Loading...");var o=i.profile,c=o.username,l=o.bio,p=o.image,m=o.following,g=c!==t.username,f=g&&!1===m,d=g&&!0===m;return s.a.createElement(x,null,s.a.createElement(u.a,{to:"/@".concat(c)},s.a.createElement("img",{src:p,alt:"",className:"img"})),s.a.createElement("h2",{className:"username"},s.a.createElement(u.a,{to:"/@".concat(c)},c)),s.a.createElement("p",{className:"bio"},l),(f||d||!n)&&s.a.createElement("div",{className:"action"},(f||!n)&&s.a.createElement("button",{type:"button",onClick:this.follow},"Follow ",c),d&&s.a.createElement("button",{type:"button",onClick:this.unfollow},"Unfollow ",c)))}}]),n}(h.a),j=Object(f.b)(function(e){return{user:e.auth.user,userInfo:e.auth.userInfo}},function(e){return{}})(y),E=t(361),O=function(e){function n(){var e,t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(o.a)(n)).call.apply(e,[this].concat(c)))).getListType=function(){var e=t.props.match.params.filter;return void 0===e||!isNaN(parseInt(e))?"articles":"favorites"},t.getPageUrl=function(e){var n=t.props.match.params.username,a=t.getListType()?"":"favorites/";return"/@".concat(n,"/").concat(a).concat(e)},t.handlePageChange=function(e){t.props.history.push(t.getPageUrl(e))},t}return Object(c.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){var e=this.props,n=e.history,t=e.location,a=e.match.params,r=a.username,i=this.getListType(),o="articles"===i?a.filter:a.page;return s.a.createElement(s.a.Fragment,null,s.a.createElement(j,{history:n,location:t,username:r}),s.a.createElement("ul",{className:"tab-block"},s.a.createElement("li",{className:"articles"===i?"selected":""},s.a.createElement(u.a,{to:"/@".concat(r)},"\ub0b4\uac00 \ub4f1\ub85d\ud55c \uae00")),s.a.createElement("li",{className:"favorites"===i?"selected":""},s.a.createElement(u.a,{to:"/@".concat(r,"/favorites")},"\uc990\uaca8\ucc3e\ub294 \uae00"))),s.a.createElement(E.a,{username:r,filter:i,page:o,handlePageChange:this.handlePageChange,getPageUrl:this.getPageUrl,history:n,useTotal:!0,countPerPage:5}))}}]),n}(l.Component);n.default=O}}]);