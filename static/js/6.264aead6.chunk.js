(window.webpackJsonp=window.webpackJsonp||[]).push([[6,18],{121:function(e,a,t){"use strict";t.r(a);var n=t(45),r=t(96),l=t(0),s=t.n(l),c=t(528),m=t(35),i=t(52),o=t(163),u=t(541),b=t.n(u),f=t(81),d=t(546),p=t(529),E=t(248);a.default=Object(c.hot)(function(e){var a=e.history,t=Object(i.c)("profileEdit").t,c=Object(d.a)(),u=Object(m.c)(function(e){return e.auth},[]),g=u.userInfo,h=u.loading,N=u.error,v=Object(m.b)(),j=Object(l.useState)({}),O=Object(r.a)(j,2),w=O[0],y=O[1],k=Object(p.a)({image:g.image,username:g.username,bio:g.bio,email:g.email,password:""}),x=k.form,C=k.bindInput,L=x.image,I=x.username,P=x.bio,S=x.email,U=x.password;Object(l.useEffect)(function(){return function(){v(f.f())}},[v,g]);return s.a.createElement(E.default,{className:"container"},s.a.createElement(o.Helmet,{title:t("heading")}),s.a.createElement("div",{className:"common-form"},s.a.createElement("h2",{className:"form-title"},t("heading")),s.a.createElement("form",{onSubmit:function(e){if(y({}),function(){var e={};return b.a.isEmpty(I)?e.username=t("validate:emptyUsername"):b.a.isLength(I,{min:1,max:20})||(e.username=t("validate:lengthUsername")),b.a.isEmpty(S)?e.email=t("validate:emptyEmail"):b.a.isEmail(S)||(e.email=t("validate:notEmail")),b.a.isEmpty(U)||b.a.isLength(U,{min:8})||(e.password=t("validate:lengthPassword")),0===Object.keys(e).length||(y(e),!1)}()){var r=Object(n.a)({image:L,bio:P,email:S},I!==g.username&&{username:I},""!==U&&{password:U});v(f.g({user:r})).then(function(){void 0===r.username?c():a.push("/@".concat(r.username))}).catch(console.log)}e.preventDefault()}},s.a.createElement("fieldset",null,s.a.createElement("div",{className:"form-row"},s.a.createElement("label",null,s.a.createElement("span",{className:"form-head"},t("image")),s.a.createElement("input",Object.assign({type:"text"},C("image"),{placeholder:t("imageURL"),className:"txt large block",disabled:h}))),w.image&&s.a.createElement("p",{className:"input-error"},s.a.createElement("i",{className:"fas fa-times-circle"})," ",w.image)),s.a.createElement("div",{className:"form-row"},s.a.createElement("label",null,s.a.createElement("span",{className:"form-head"},t("username")),s.a.createElement("input",Object.assign({type:"text"},C("username"),{placeholder:t("username"),className:"txt large block",disabled:h}))),w.username&&s.a.createElement("p",{className:"input-error"},s.a.createElement("i",{className:"fas fa-times-circle"})," ",w.username)),s.a.createElement("div",{className:"form-row"},s.a.createElement("label",null,s.a.createElement("span",{className:"form-head"},t("bio")),s.a.createElement("textarea",Object.assign({cols:"60",rows:"10"},C("bio"),{placeholder:t("bio"),className:"txt large block",disabled:h}))),w.bio&&s.a.createElement("p",{className:"input-error"},s.a.createElement("i",{className:"fas fa-times-circle"})," ",w.bio)),s.a.createElement("div",{className:"form-row"},s.a.createElement("label",null,s.a.createElement("span",{className:"form-head"},t("email")),s.a.createElement("input",Object.assign({type:"text"},C("email"),{placeholder:t("email"),className:"txt large block",disabled:h}))),w.email&&s.a.createElement("p",{className:"input-error"},s.a.createElement("i",{className:"fas fa-times-circle"})," ",w.email)),s.a.createElement("div",{className:"form-row"},s.a.createElement("label",null,s.a.createElement("span",{className:"form-head"},t("newPassword")),s.a.createElement("input",Object.assign({type:"password"},C("password"),{placeholder:t("newPassword"),className:"txt large block",disabled:h}))),w.password&&s.a.createElement("p",{className:"input-error"},s.a.createElement("i",{className:"fas fa-times-circle"})," ",w.password)),h&&s.a.createElement("div",null,t("sending")),N.length>0&&N.map(function(e){return s.a.createElement("p",{className:"input-error",key:e},s.a.createElement("i",{className:"fas fa-times-circle"})," ",e)}),s.a.createElement("div",{className:"form-action"},s.a.createElement("button",{type:"submit",className:"btn large primary",disabled:h},t("common:modify"))," ",s.a.createElement("button",{type:"button",className:"btn large",disabled:h,onClick:a.goBack},t("common:cancel")))))))})},248:function(e,a,t){"use strict";t.r(a);var n=t(94),r=t(95);function l(){var e=Object(n.a)(["\n"]);return l=function(){return e},e}a.default=r.a.div(l())},529:function(e,a,t){"use strict";var n=t(164),r=t(45),l=t(96),s=t(0);a.a=function(e){var a=Object(s.useState)(e),t=Object(l.a)(a,2),c=t[0],m=t[1],i=Object(s.useCallback)(function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];if("string"!==typeof a[0])m(function(e){return Object(r.a)({},e,a[0])});else{var l=a[0],s=a[1];m(function(e){return Object(r.a)({},e,Object(n.a)({},l,s))})}},[]),o=Object(s.useCallback)(function(e){var a=e.target,t=a.name,l=a.value;m(function(e){return Object(r.a)({},e,Object(n.a)({},t,l))})},[]),u=Object(s.useCallback)(function(e){return{name:e,value:c[e],onChange:o}},[o,c]);return{form:c,setForm:m,setField:i,changeInput:o,bindInput:u}}},546:function(e,a,t){"use strict";var n=t(169),r=t(122);a.a=function(){var e=Object(n.useLastLocation)();return function(){e?r.history.push(e.pathname):r.history.goBack()}}}}]);