(window.webpackJsonp=window.webpackJsonp||[]).push([[8,19],{113:function(e,a,t){"use strict";t.r(a);var n=t(161),r=t(19),l=t(90),s=t(0),c=t.n(s),m=t(21),i=t(50),o=t(49),u=t(71),d=t(157),p=t(534),f=t.n(p),b=t(55),E=t(538),h=t(251);a.default=Object(u.a)(E.a,Object(i.b)(function(e){return{user:e.auth.user,userInfo:e.auth.userInfo,loading:e.auth.loading,error:e.auth.error}},function(e){return{authActions:Object(m.b)(b,e)}}),Object(o.d)("profileEdit"))(function(e){var a=e.loading,t=e.error,m=e.userInfo,i=e.authActions,o=e.history,u=e.t,p=Object(s.useState)({}),b=Object(l.a)(p,2),E=b[0],g=b[1],N=Object(s.useState)({image:m.image,username:m.username,bio:m.bio,email:m.email,password:""}),v=Object(l.a)(N,2),w=v[0],y=v[1],j=w.image,O=w.username,k=w.bio,x=w.email,C=w.password;Object(s.useEffect)(function(){return function(){i.resetAuth()}},[m]);var L=function(e){return function(a){y(Object(r.a)({},w,Object(n.a)({},e,a.target.value)))}};return c.a.createElement(h.default,{className:"container"},c.a.createElement(d.Helmet,{title:"".concat(u("heading")," - ").concat(u("common:siteName"))}),c.a.createElement("div",{className:"common-form"},c.a.createElement("h2",{className:"form-title"},u("heading")),c.a.createElement("form",{onSubmit:function(a){if(g({}),function(){var e={};return f.a.isEmpty(O)?e.username=u("validate:emptyUsername"):f.a.isLength(O,{min:1,max:20})||(e.username=u("validate:lengthUsername")),f.a.isEmpty(x)?e.email=u("validate:emptyEmail"):f.a.isEmail(x)||(e.email=u("validate:notEmail")),f.a.isEmpty(C)||f.a.isLength(C,{min:8})||(e.password=u("validate:lengthPassword")),0===Object.keys(e).length||(g(e),!1)}()){var t={image:j,username:O,bio:k,email:x};""!==C&&(t.password=C),i.update({user:t}).then(function(a){e.pushBack()})}a.preventDefault()}},c.a.createElement("fieldset",null,c.a.createElement("div",{className:"form-row"},c.a.createElement("label",null,c.a.createElement("span",{className:"form-head"},u("image")),c.a.createElement("input",{type:"text",placeholder:u("imageURL"),className:"txt large block",disabled:a,value:j,onChange:L("image")})),E.image&&c.a.createElement("p",{className:"input-error"},c.a.createElement("i",{className:"fas fa-times-circle"})," ",E.image)),c.a.createElement("div",{className:"form-row"},c.a.createElement("label",null,c.a.createElement("span",{className:"form-head"},u("username")),c.a.createElement("input",{type:"text",placeholder:u("username"),className:"txt large block",disabled:a,value:O,onChange:L("username")})),E.username&&c.a.createElement("p",{className:"input-error"},c.a.createElement("i",{className:"fas fa-times-circle"})," ",E.username)),c.a.createElement("div",{className:"form-row"},c.a.createElement("label",null,c.a.createElement("span",{className:"form-head"},u("bio")),c.a.createElement("textarea",{cols:"60",rows:"10",placeholder:u("bio"),className:"txt large block",disabled:a,value:k,onChange:L("bio")})),E.bio&&c.a.createElement("p",{className:"input-error"},c.a.createElement("i",{className:"fas fa-times-circle"})," ",E.bio)),c.a.createElement("div",{className:"form-row"},c.a.createElement("label",null,c.a.createElement("span",{className:"form-head"},u("email")),c.a.createElement("input",{type:"text",placeholder:u("email"),className:"txt large block",disabled:a,value:x,onChange:L("email")})),E.email&&c.a.createElement("p",{className:"input-error"},c.a.createElement("i",{className:"fas fa-times-circle"})," ",E.email)),c.a.createElement("div",{className:"form-row"},c.a.createElement("label",null,c.a.createElement("span",{className:"form-head"},u("newPassword")),c.a.createElement("input",{type:"password",placeholder:u("newPassword"),className:"txt large block",disabled:a,value:C,onChange:L("password")})),E.password&&c.a.createElement("p",{className:"input-error"},c.a.createElement("i",{className:"fas fa-times-circle"})," ",E.password)),a&&c.a.createElement("div",null,u("sending")),t.length>0&&t.map(function(e){return c.a.createElement("p",{className:"input-error",key:e},c.a.createElement("i",{className:"fas fa-times-circle"})," ",e)}),c.a.createElement("div",{className:"form-action"},c.a.createElement("button",{type:"submit",className:"btn large primary",disabled:a},u("common:modify"))," ",c.a.createElement("button",{type:"button",className:"btn large",disabled:a,onClick:o.goBack},u("common:cancel")))))))})},251:function(e,a,t){"use strict";t.r(a);var n=t(87),r=t(88);function l(){var e=Object(n.a)(["\n"]);return l=function(){return e},e}a.default=r.a.div(l())},538:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(150),s=t(164);a.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return Object(s.withLastLocation)(Object(l.a)(function(a){return r.a.createElement(e,Object.assign({},a,{pushBack:function(){var e=a.lastLocation,t=a.history;return e?t.push(e.pathname):t.goBack(),e}}))}))}}}]);