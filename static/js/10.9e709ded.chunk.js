(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{246:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),o=t(35),r=t(52),i=t(175),c=t(42),s=t(61),d=t(541),u=t(542);n.default=Object(r.k)(function(e){var n=e.match,t=n.params,r=n.url,f=e.history,b=Object(s.c)("home").t,p=Object(i.b)(),m=Object(c.c)(function(e){return e.auth},[]).user,g="/"===r,x=Object(a.useCallback)(function(){return(g||"feed"===r.split("/")[1])&&m?"feed":"all"},[g,r,m]),h=Object(a.useCallback)(function(e){return"/".concat("feed"===x()?"feed":"articles","/").concat(e)},[x]),k=Object(a.useCallback)(function(e){f.push(h(e))},[h,f]),E=x(),w=g?t.filter:t.page;return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,null,m?l.a.createElement("li",{className:"feed"===E?"selected":""},l.a.createElement(o.Link,{to:"/feed"},b("myfeed"))):l.a.createElement("li",null,l.a.createElement(o.Link,{to:"/feed",onClick:function(e){e.preventDefault(),p.show(b("loginMsg"))}},b("myfeed"),l.a.createElement("span",{className:"sub"},"(",b("needLogin"),")"))),l.a.createElement("li",{className:"all"===E?"selected":""},l.a.createElement(o.Link,{to:"/articles"},b("globalfeed")))),l.a.createElement(d.a,{filter:E,page:w,handlePageChange:k,getPageUrl:h,useTotal:!0}))})},542:function(e,n,t){"use strict";var a=t(0),l=t.n(a),o=t(103);function r(){var e=Object(o.a)(["\n  display: flex;\n  margin-bottom: 20px;\n  padding: 0;\n  position: relative;\n\n  &:before {\n    content: '';\n    display: block;\n    height: 1px;\n    background: #004d84;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n\n  li {\n    list-style: none;\n\n    &:not(:first-child) {\n      margin-left: -1px;\n    }\n\n    &.selected a {\n      font-weight: 500;\n      color: #00365d;\n      border: 1px solid #004d84;\n      border-bottom: 1px solid #fff;\n      position: relative;\n    }\n  }\n\n  a {\n    box-sizing: border-box;\n    display: block;\n    min-width: 110px;\n    padding: 10px 20px;\n    text-align: center;\n    color: #97a1a7;\n    text-decoration: none;\n    border: 1px solid #bec4c8;\n    border-bottom: 1px solid #004d84;\n  }\n\n  .sub {\n    font-size: .7em;\n  }\n\n  @media screen and (max-width: 768px) {\n    a {\n      padding: 8px 15px;\n    }\n  }\n"]);return r=function(){return e},e}var i=t(104).a.ul(r());n.a=l.a.memo(function(e){return l.a.createElement(i,null,e.children)})}}]);