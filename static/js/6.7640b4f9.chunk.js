(window.webpackJsonp=window.webpackJsonp||[]).push([[6,18],{132:function(e,a,t){"use strict";t.r(a);var n=t(55),r=t(106),c=t(0),l=t.n(c),s=t(534),m=t(43),i=t(62),o=t(174),u=t(546),b=t.n(u),f=t(22),d=t(551),p=t(535),E=t(254);a.default=Object(s.hot)(function(e){var a=e.history,t=Object(i.c)("profileEdit").t,s=Object(d.a)(),u=Object(m.c)(function(e){return e.auth}),g=u.userInfo,v=u.loading,j=u.error,O=Object(m.b)(),N=Object(c.useState)({}),h=Object(r.a)(N,2),w=h[0],y=h[1],k=Object(p.a)({image:g.image,username:g.username,bio:g.bio,email:g.email,password:""}),x=k.form,C=k.bindInput,L=x.image,I=x.username,S=x.bio,U=x.email,P=x.password;Object(c.useEffect)(function(){return function(){O(f.j())}},[O,g]);var B=v||"test@naver.com"===U;return l.a.createElement(E.default,{className:"container"},l.a.createElement(o.Helmet,{title:t("heading")}),l.a.createElement("div",{className:"common-form"},l.a.createElement("h2",{className:"form-title"},t("heading")),l.a.createElement("form",{onSubmit:function(e){if(y({}),function(){var e={};return b.a.isEmpty(I)?e.username=t("validate:emptyUsername"):b.a.isLength(I,{min:1,max:20})||(e.username=t("validate:lengthUsername")),b.a.isEmpty(U)?e.email=t("validate:emptyEmail"):b.a.isEmail(U)||(e.email=t("validate:notEmail")),b.a.isEmpty(P)||b.a.isLength(P,{min:8})||(e.password=t("validate:lengthPassword")),0===Object.keys(e).length||(y(e),!1)}()){var r=Object(n.a)({image:L,bio:S,email:U},I!==g.username&&{username:I},""!==P&&{password:P});O(f.k({user:r,onSuccess:function(){void 0===r.username?s():a.push("/@".concat(r.username))}}))}e.preventDefault()}},l.a.createElement("fieldset",null,l.a.createElement("div",{className:"form-row"},l.a.createElement("label",null,l.a.createElement("span",{className:"form-head"},t("image")),l.a.createElement("input",Object.assign({type:"text"},C("image"),{placeholder:t("imageURL"),className:"txt large block",disabled:B}))),w.image&&l.a.createElement("p",{className:"input-error"},l.a.createElement("i",{className:"fas fa-times-circle"})," ",w.image)),l.a.createElement("div",{className:"form-row"},l.a.createElement("label",null,l.a.createElement("span",{className:"form-head"},t("username")),l.a.createElement("input",Object.assign({type:"text"},C("username"),{placeholder:t("username"),className:"txt large block",disabled:B}))),w.username&&l.a.createElement("p",{className:"input-error"},l.a.createElement("i",{className:"fas fa-times-circle"})," ",w.username)),l.a.createElement("div",{className:"form-row"},l.a.createElement("label",null,l.a.createElement("span",{className:"form-head"},t("bio")),l.a.createElement("textarea",Object.assign({cols:"60",rows:"10"},C("bio"),{placeholder:t("bio"),className:"txt large block",disabled:B}))),w.bio&&l.a.createElement("p",{className:"input-error"},l.a.createElement("i",{className:"fas fa-times-circle"})," ",w.bio)),l.a.createElement("div",{className:"form-row"},l.a.createElement("label",null,l.a.createElement("span",{className:"form-head"},t("email")),l.a.createElement("input",Object.assign({type:"text"},C("email"),{placeholder:t("email"),className:"txt large block",disabled:B}))),w.email&&l.a.createElement("p",{className:"input-error"},l.a.createElement("i",{className:"fas fa-times-circle"})," ",w.email)),l.a.createElement("div",{className:"form-row"},l.a.createElement("label",null,l.a.createElement("span",{className:"form-head"},t("newPassword")),l.a.createElement("input",Object.assign({type:"password"},C("password"),{placeholder:t("newPassword"),className:"txt large block",disabled:B}))),w.password&&l.a.createElement("p",{className:"input-error"},l.a.createElement("i",{className:"fas fa-times-circle"})," ",w.password)),B&&l.a.createElement("div",null,t("demoUserMsg")),v&&l.a.createElement("div",null,t("sending")),j.length>0&&j.map(function(e){return l.a.createElement("p",{className:"input-error",key:e},l.a.createElement("i",{className:"fas fa-times-circle"})," ",e)}),l.a.createElement("div",{className:"form-action"},l.a.createElement("button",{type:"submit",className:"btn large primary",disabled:B},t("common:modify"))," ",l.a.createElement("button",{type:"button",className:"btn large",disabled:v,onClick:a.goBack},t("common:cancel")))))))})},254:function(e,a,t){"use strict";t.r(a);var n=t(104),r=t(105);function c(){var e=Object(n.a)(["\n"]);return c=function(){return e},e}a.default=r.a.div(c())},535:function(e,a,t){"use strict";var n=t(175),r=t(55),c=t(106),l=t(0);a.a=function(e){var a=Object(l.useState)(e),t=Object(c.a)(a,2),s=t[0],m=t[1],i=Object(l.useCallback)(function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];if("string"!==typeof a[0])m(function(e){return Object(r.a)({},e,a[0])});else{var c=a[0],l=a[1];m(function(e){return Object(r.a)({},e,Object(n.a)({},c,l))})}},[]),o=Object(l.useCallback)(function(e,a){var t;return function(){var n=this,r=arguments;clearTimeout(t),t=setTimeout(function(){return e.apply(n,r)},a)}}(function(e,a){m(function(t){return Object(r.a)({},t,Object(n.a)({},e,a))})},250),[]),u=Object(l.useCallback)(function(e){var a=e.target,t=a.name,c=a.value;m(function(e){return Object(r.a)({},e,Object(n.a)({},t,c))})},[]),b=Object(l.useCallback)(function(e){var a=e.target,t=a.name,n=a.value;o(t,n)},[o]),f=Object(l.useCallback)(function(e,a){var t;return t={name:e},Object(n.a)(t,a?"defaultValue":"value",s[e]),Object(n.a)(t,"onChange",a?b:u),t},[u,b,s]);return{form:s,setForm:m,setField:i,changeInput:u,bindInput:f}}},551:function(e,a,t){"use strict";var n=t(178),r=t(133);a.a=function(){var e=Object(n.useLastLocation)();return function(){e?r.history.push(e.pathname):r.history.goBack()}}}}]);