(window.webpackJsonp=window.webpackJsonp||[]).push([[6,18],{131:function(e,a,t){"use strict";t.r(a);var n=t(53),r=t(105),s=t(0),l=t.n(s),c=t(533),m=t(42),i=t(61),o=t(173),u=t(545),b=t.n(u),d=t(18),f=t(550),p=t(534),E=t(253);a.default=Object(c.hot)(function(e){var a=e.history,t=Object(i.c)("profileEdit").t,c=Object(f.a)(),u=Object(m.c)(function(e){return e.auth},[]),g=u.userInfo,N=u.loading,h=u.error,v=Object(m.b)(),j=Object(s.useState)({}),O=Object(r.a)(j,2),w=O[0],y=O[1],k=Object(p.a)({image:g.image,username:g.username,bio:g.bio,email:g.email,password:""}),x=k.form,C=k.bindInput,L=x.image,I=x.username,S=x.bio,P=x.email,U=x.password;Object(s.useEffect)(function(){return function(){v(d.s())}},[v,g]);return l.a.createElement(E.default,{className:"container"},l.a.createElement(o.Helmet,{title:t("heading")}),l.a.createElement("div",{className:"common-form"},l.a.createElement("h2",{className:"form-title"},t("heading")),l.a.createElement("form",{onSubmit:function(e){if(y({}),function(){var e={};return b.a.isEmpty(I)?e.username=t("validate:emptyUsername"):b.a.isLength(I,{min:1,max:20})||(e.username=t("validate:lengthUsername")),b.a.isEmpty(P)?e.email=t("validate:emptyEmail"):b.a.isEmail(P)||(e.email=t("validate:notEmail")),b.a.isEmpty(U)||b.a.isLength(U,{min:8})||(e.password=t("validate:lengthPassword")),0===Object.keys(e).length||(y(e),!1)}()){var r=Object(n.a)({image:L,bio:S,email:P},I!==g.username&&{username:I},""!==U&&{password:U});v(d.t({user:r,onSuccess:function(){void 0===r.username?c():a.push("/@".concat(r.username))}}))}e.preventDefault()}},l.a.createElement("fieldset",null,l.a.createElement("div",{className:"form-row"},l.a.createElement("label",null,l.a.createElement("span",{className:"form-head"},t("image")),l.a.createElement("input",Object.assign({type:"text"},C("image"),{placeholder:t("imageURL"),className:"txt large block",disabled:N}))),w.image&&l.a.createElement("p",{className:"input-error"},l.a.createElement("i",{className:"fas fa-times-circle"})," ",w.image)),l.a.createElement("div",{className:"form-row"},l.a.createElement("label",null,l.a.createElement("span",{className:"form-head"},t("username")),l.a.createElement("input",Object.assign({type:"text"},C("username"),{placeholder:t("username"),className:"txt large block",disabled:N}))),w.username&&l.a.createElement("p",{className:"input-error"},l.a.createElement("i",{className:"fas fa-times-circle"})," ",w.username)),l.a.createElement("div",{className:"form-row"},l.a.createElement("label",null,l.a.createElement("span",{className:"form-head"},t("bio")),l.a.createElement("textarea",Object.assign({cols:"60",rows:"10"},C("bio"),{placeholder:t("bio"),className:"txt large block",disabled:N}))),w.bio&&l.a.createElement("p",{className:"input-error"},l.a.createElement("i",{className:"fas fa-times-circle"})," ",w.bio)),l.a.createElement("div",{className:"form-row"},l.a.createElement("label",null,l.a.createElement("span",{className:"form-head"},t("email")),l.a.createElement("input",Object.assign({type:"text"},C("email"),{placeholder:t("email"),className:"txt large block",disabled:N}))),w.email&&l.a.createElement("p",{className:"input-error"},l.a.createElement("i",{className:"fas fa-times-circle"})," ",w.email)),l.a.createElement("div",{className:"form-row"},l.a.createElement("label",null,l.a.createElement("span",{className:"form-head"},t("newPassword")),l.a.createElement("input",Object.assign({type:"password"},C("password"),{placeholder:t("newPassword"),className:"txt large block",disabled:N}))),w.password&&l.a.createElement("p",{className:"input-error"},l.a.createElement("i",{className:"fas fa-times-circle"})," ",w.password)),N&&l.a.createElement("div",null,t("sending")),h.length>0&&h.map(function(e){return l.a.createElement("p",{className:"input-error",key:e},l.a.createElement("i",{className:"fas fa-times-circle"})," ",e)}),l.a.createElement("div",{className:"form-action"},l.a.createElement("button",{type:"submit",className:"btn large primary",disabled:N},t("common:modify"))," ",l.a.createElement("button",{type:"button",className:"btn large",disabled:N,onClick:a.goBack},t("common:cancel")))))))})},253:function(e,a,t){"use strict";t.r(a);var n=t(103),r=t(104);function s(){var e=Object(n.a)(["\n"]);return s=function(){return e},e}a.default=r.a.div(s())},534:function(e,a,t){"use strict";var n=t(174),r=t(53),s=t(105),l=t(0);a.a=function(e){var a=Object(l.useState)(e),t=Object(s.a)(a,2),c=t[0],m=t[1],i=Object(l.useCallback)(function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];if("string"!==typeof a[0])m(function(e){return Object(r.a)({},e,a[0])});else{var s=a[0],l=a[1];m(function(e){return Object(r.a)({},e,Object(n.a)({},s,l))})}},[]),o=Object(l.useCallback)(function(e){var a=e.target,t=a.name,s=a.value;m(function(e){return Object(r.a)({},e,Object(n.a)({},t,s))})},[]),u=Object(l.useCallback)(function(e){return{name:e,value:c[e],onChange:o}},[o,c]);return{form:c,setForm:m,setField:i,changeInput:o,bindInput:u}}},550:function(e,a,t){"use strict";var n=t(177),r=t(132);a.a=function(){var e=Object(n.useLastLocation)();return function(){e?r.history.push(e.pathname):r.history.goBack()}}}}]);