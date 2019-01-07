(window.webpackJsonp=window.webpackJsonp||[]).push([[8,20],{103:function(e,a,t){"use strict";t.r(a);var n=t(46),r=t(47),s=t(50),l=t(48),i=t(51),m=t(0),c=t.n(m),o=t(27),u=t(52),p=t(49),d=t(68),h=t(143),f=t(20),b=t(69),E=t(487),g=t.n(E),v=t(226),N=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),m=0;m<r;m++)i[m]=arguments[m];return(t=Object(s.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(i)))).state={image:"",username:"",bio:"",email:"",password:"",errors:{}},t.submitHandle=function(e){var a=t.props.authActions,n=t.state,r=n.image,s=n.username,l=n.bio,i=n.email,m=n.password;if(t.setState(Object(f.a)(function(e){e.errors={}})),t.validate()){var c={image:r,username:s,bio:l,email:i};""!==m&&(c.password=m),a.update({user:c}).then(function(e){t.props.history.goBack()})}e.preventDefault()},t.changeInput=function(e){return function(a){var n=a.target.value;t.setState(Object(f.a)(function(a){a[e]=n}))}},t}return Object(i.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.userInfo;Object.keys(e).length&&this.setState(Object(f.a)(function(a){a.image=e.image,a.username=e.username,a.bio=e.bio,a.email=e.email}))}},{key:"componentWillUnmount",value:function(){this.props.authActions.resetAuth()}},{key:"validate",value:function(){var e={},a=this.props.t,t=this.state,n=t.username,r=t.email,s=t.password;return g.a.isEmpty(n)?e.username=a("validate:emptyUsername"):g.a.isLength(n,{min:1,max:20})||(e.username=a("validate:lengthUsername")),g.a.isEmpty(r)?e.email=a("validate:emptyEmail"):g.a.isEmail(r)||(e.email=a("validate:notEmail")),g.a.isEmpty(s)||g.a.isLength(s,{min:8})||(e.password=a("validate:lengthPassword")),0===Object.keys(e).length||(this.setState(Object(f.a)(function(a){a.errors=e})),!1)}},{key:"render",value:function(){var e=this.props,a=e.loading,t=e.history,n=e.error,r=e.t,s=this.state,l=s.image,i=s.username,m=s.bio,o=s.email,u=s.password,p=s.errors;return c.a.createElement(v.default,{className:"container"},c.a.createElement(h.Helmet,null,c.a.createElement("title",null,r("heading")," - ",r("common:siteName"))),c.a.createElement("div",{className:"common-form"},c.a.createElement("h2",{className:"form-title"},r("heading")),c.a.createElement("form",{onSubmit:this.submitHandle},c.a.createElement("fieldset",null,c.a.createElement("div",{className:"form-row"},c.a.createElement("label",null,c.a.createElement("span",{className:"form-head"},r("image")),c.a.createElement("input",{type:"text",placeholder:r("imageURL"),className:"txt large block",disabled:a,value:l,onChange:this.changeInput("image")})),p.image&&c.a.createElement("p",{className:"input-error"},c.a.createElement("i",{className:"fas fa-times-circle"})," ",p.image)),c.a.createElement("div",{className:"form-row"},c.a.createElement("label",null,c.a.createElement("span",{className:"form-head"},r("username")),c.a.createElement("input",{type:"text",placeholder:r("username"),className:"txt large block",disabled:a,value:i,onChange:this.changeInput("username")})),p.username&&c.a.createElement("p",{className:"input-error"},c.a.createElement("i",{className:"fas fa-times-circle"})," ",p.username)),c.a.createElement("div",{className:"form-row"},c.a.createElement("label",null,c.a.createElement("span",{className:"form-head"},r("bio")),c.a.createElement("textarea",{cols:"60",rows:"10",placeholder:r("bio"),className:"txt large block",disabled:a,value:m,onChange:this.changeInput("bio")})),p.bio&&c.a.createElement("p",{className:"input-error"},c.a.createElement("i",{className:"fas fa-times-circle"})," ",p.bio)),c.a.createElement("div",{className:"form-row"},c.a.createElement("label",null,c.a.createElement("span",{className:"form-head"},r("email")),c.a.createElement("input",{type:"text",placeholder:r("email"),className:"txt large block",disabled:a,value:o,onChange:this.changeInput("email")})),p.email&&c.a.createElement("p",{className:"input-error"},c.a.createElement("i",{className:"fas fa-times-circle"})," ",p.email)),c.a.createElement("div",{className:"form-row"},c.a.createElement("label",null,c.a.createElement("span",{className:"form-head"},r("newPassword")),c.a.createElement("input",{type:"password",placeholder:r("newPassword"),className:"txt large block",disabled:a,value:u,onChange:this.changeInput("password")})),p.password&&c.a.createElement("p",{className:"input-error"},c.a.createElement("i",{className:"fas fa-times-circle"})," ",p.password)),a&&c.a.createElement("div",null,r("sending")),n.length>0&&n.map(function(e){return c.a.createElement("p",{className:"input-error",key:e},c.a.createElement("i",{className:"fas fa-times-circle"})," ",e)}),c.a.createElement("div",{className:"form-action"},c.a.createElement("button",{type:"submit",className:"btn large primary",disabled:a},r("common:modify"))," ",c.a.createElement("button",{type:"button",className:"btn large",disabled:a,onClick:t.goBack},r("common:cancel")))))))}}]),a}(m.Component);a.default=Object(d.a)(Object(u.b)(function(e){return{user:e.auth.user,userInfo:e.auth.userInfo,loading:e.auth.loading,error:e.auth.error}},function(e){return{authActions:Object(o.b)(b,e)}}),Object(p.d)("profileEdit"))(N)},226:function(e,a,t){"use strict";t.r(a);var n=t(81),r=t(82);function s(){var e=Object(n.a)(["\n"]);return s=function(){return e},e}a.default=r.a.div(s())}}]);