(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{150:function(e,n,t){"use strict";n.a=function(e){return e.history.push({pathname:"/login",state:{prevLocation:e.location.pathname,loginMsg:"\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4"}}),null}},159:function(e,n,t){e.exports=t(352)},352:function(e,n,t){"use strict";t.r(n);t(160);var a=t(1),r=t.n(a),o=t(75),c=t.n(o),u=t(379),l=t(74),i=t(33),s=t(21),m=t(60),d=Object(s.c)({auth:m.default}),f=t(153),p=t(158),h=Object(p.a)({promiseTypeSuffixes:["PENDING","SUCCESS","FAILURE"]}),E=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,g=Object(s.e)(d,E(Object(s.a)(f.a,h))),b=t(48),O=t(49),v=t(51),j=t(50),w=t(52),I=t(381),y=t(371),k=t(380),S=t(36),T=t(150),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=function(n){function t(e){var n;return Object(b.a)(this,t),n=Object(v.a)(this,Object(j.a)(t).call(this,e)),e.user||Object(T.a)(e),n}return Object(w.a)(t,n),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement(e,this.props)}}]),t}(a.Component);return Object(i.b)(function(e){return{user:e.auth.user,userInfo:e.auth.userInfo}},function(e){return{authActions:Object(s.b)(m,e)}})(n)},G=t(370),L=t(110);function C(){var e=Object(L.a)(["\n  ul {\n    display: flex;\n    padding: 0;\n  }\n\n  li {\n    list-style: none;\n    margin-right: 30px;\n  }\n"]);return C=function(){return e},e}var N=t(111).a.header(C()),R=function(e){function n(){return Object(b.a)(this,n),Object(v.a)(this,Object(j.a)(n).apply(this,arguments))}return Object(w.a)(n,e),Object(O.a)(n,[{key:"render",value:function(){var e=this.props.user;return r.a.createElement(N,null,r.a.createElement("h1",null,"World"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(G.a,{to:"/"},"Home")),e?r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(G.a,{to:"/form"},"\uae00\ub4f1\ub85d")),r.a.createElement("li",null,r.a.createElement(G.a,{to:"/Logout"},"\ub85c\uadf8\uc544\uc6c3"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(G.a,{to:"/login"},"\ub85c\uadf8\uc778")),r.a.createElement("li",null,r.a.createElement(G.a,{to:"/join"},"\ud68c\uc6d0\uac00\uc785")))))}}]),n}(a.Component),_=Object(i.b)(function(e){return{user:e.auth.user}},function(e){return{}})(R),U=t(38),x=t.n(U),P=function(){return r.a.createElement("div",null,"Loading...")},F=x()({loader:function(){return Promise.all([t.e(10),t.e(1)]).then(t.bind(null,378))},loading:P}),D=x()({loader:function(){return t.e(2).then(t.bind(null,372))},loading:P}),z=x()({loader:function(){return t.e(3).then(t.bind(null,373))},loading:P}),J=x()({loader:function(){return t.e(4).then(t.bind(null,374))},loading:P}),M=x()({loader:function(){return t.e(5).then(t.bind(null,375))},loading:P}),X=x()({loader:function(){return Promise.all([t.e(9),t.e(6)]).then(t.bind(null,376))},loading:P}),B=x()({loader:function(){return t.e(7).then(t.bind(null,377))},loading:P}),H=function(e){function n(e){var t;Object(b.a)(this,n),t=Object(v.a)(this,Object(j.a)(n).call(this,e));var a=localStorage.getItem("jwt");return a&&(S.a.setToken(a),e.authActions.init()),t}return Object(w.a)(n,e),Object(O.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null),r.a.createElement("hr",null),r.a.createElement(I.a,null,r.a.createElement(y.a,{exact:!0,path:"/",component:F}),r.a.createElement(y.a,{path:"/articles/:page",component:F}),r.a.createElement(y.a,{exact:!0,path:"/login",component:D}),r.a.createElement(y.a,{exact:!0,path:"/logout",component:z}),r.a.createElement(y.a,{exact:!0,path:"/join",component:J}),r.a.createElement(y.a,{path:"/article/:slug",component:X}),r.a.createElement(y.a,{exact:!0,path:"/form",component:A(M)}),r.a.createElement(y.a,{path:"/form/:slug",component:A(M)}),r.a.createElement(y.a,{path:"/@:username",component:B}),r.a.createElement(y.a,{component:F})))}}]),n}(a.Component),V=Object(k.a)(Object(i.b)(function(e){return{user:e.auth.user}},function(e){return{authActions:Object(s.b)(m,e)}})(H)),W=Object(l.a)({basename:"/world"});c.a.render(r.a.createElement(i.a,{store:g},r.a.createElement(u.a,{history:W},r.a.createElement(V,null))),document.getElementById("root"))},36:function(e,n,t){"use strict";var a=t(37),r=t.n(a),o=r.a.CancelToken,c="https://conduit.productionready.io/api",u=function(e,n){return r.a.delete("".concat(c).concat(e),n?{cancelToken:n.token}:{})},l=function(e,n){return r.a.get("".concat(c).concat(e),n?{cancelToken:n.token}:{})},i=function(e,n,t){return r.a.put("".concat(c).concat(e),n,t?{cancelToken:t.token}:{})},s=function(e,n,t){return r.a.post("".concat(c).concat(e),n,t?{cancelToken:t.token}:{})},m={current:function(){return l("/user")},login:function(e){var n=e.email,t=e.password,a=e.source;return s("/users/login",{user:{email:n,password:t}},a)},register:function(e){var n=e.username,t=e.email,a=e.password,r=e.source;return s("/users",{user:{username:n,email:t,password:a}},r)},save:function(e){var n=e.user,t=e.source;return i("/user",{user:n},t)}},d=function(e,n){return"limit=".concat(e,"&offset=").concat(n?n*e:0)},f={all:function(e){var n=e.page,t=e.source;return l("/articles?".concat(d(10,n)),t)},byAuthor:function(e){var n=e.author,t=e.page,a=e.source;return l("/articles?author=".concat(encodeURIComponent(n),"&").concat(d(5,t)),a)},create:function(e){var n=e.article,t=e.source;return s("/articles",{article:n},t)},update:function(e){var n=e.article,t=e.source;return i("/articles/".concat(n.slug),{article:n},t)},delete:function(e){var n=e.slug,t=e.source;return u("/articles/".concat(n),t)},get:function(e){var n=e.slug,t=e.source;return l("/articles/".concat(n),t)}},p={follow:function(e){var n=e.username,t=e.source;return s("/profiles/".concat(n,"/follow"),t)},get:function(e){var n=e.username,t=e.source;return l("/profiles/".concat(n),t)},unfollow:function(e){var n=e.username,t=e.source;return u("/profiles/".concat(n,"/follow"),t)}};n.a={CancelToken:o,setToken:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e?(window.localStorage.setItem("jwt",e),r.a.defaults.headers.common.Authorization="Token ".concat(e)):(window.localStorage.removeItem("jwt"),delete r.a.defaults.headers.common.Authorization)},Auth:m,Articles:f,Profile:p}},60:function(e,n,t){"use strict";t.r(n),t.d(n,"init",function(){return o}),t.d(n,"login",function(){return c}),t.d(n,"logout",function(){return u}),t.d(n,"register",function(){return l});var a=t(109),r=t(36),o=function(){return{type:"LOGIN",payload:r.a.Auth.current()}},c=function(e){var n=e.email,t=e.password;return{type:"LOGIN",payload:r.a.Auth.login({email:n,password:t})}},u=function(){return{type:"LOGOUT"}},l=function(e){var n=e.username,t=e.email,a=e.password;return{type:"REGISTER",payload:r.a.Auth.register({username:n,email:t,password:a})}},i={user:localStorage.getItem("jwt")||null,userInfo:{},loading:!1,error:[]};n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,n=arguments.length>1?arguments[1]:void 0;return Object(a.a)(e,function(t){switch(n.type){case"LOGIN_PENDING":case"REGISTER_PENDING":return void(t.loading=!0);case"LOGIN_SUCCESS":case"REGISTER_SUCCESS":var a=n.payload.data.user.token;return r.a.setToken(a),t.user=a,t.userInfo=n.payload.data.user,t.loading=!1,void(t.error=[]);case"LOGIN_FAILURE":case"REGISTER_FAILURE":var o=n.payload.response.data.errors,c=Object.keys(o).map(function(e){return"".concat(e," ").concat(o[e].join(", "))});return t.loading=!1,void(t.error=c);case"LOGOUT":return r.a.setToken(null),t.user=null,void(t.userInfo={});default:return e}})}}},[[159,11,8]]]);