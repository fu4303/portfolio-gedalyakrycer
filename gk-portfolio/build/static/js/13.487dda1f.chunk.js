(this["webpackJsonpgk-portfolio"]=this["webpackJsonpgk-portfolio"]||[]).push([[13],{122:function(e,a,t){},131:function(e,a,t){"use strict";t.r(a);var n=t(110),c=t.n(n),r=t(126),l=t(112),m=t(11),o=t(0),s=t.n(o),i=t(123),u=t(118),b=t.n(u),d=t(57),f=t.n(d),p=t(119),g=t.n(p),E=t(20),y=t(21),v=t(22),N=(t(122),t(3)),j=t(14);N.a.registerPlugin(j.a),a.default=function(){var e=Object(o.useState)(""),a=Object(m.a)(e,2),t=a[0],n=a[1],u=Object(o.useState)(!1),d=Object(m.a)(u,2),p=d[0],O=d[1],h=Object(o.useState)({}),_=Object(m.a)(h,2),x=_[0],k=_[1],S=Object(o.useState)({}),w=Object(m.a)(S,2),A=w[0],R=w[1],T=Object(o.useState)(!1),Z=Object(m.a)(T,2),F=Z[0],M=Z[1],q=Object(o.useState)(!1),C=Object(m.a)(q,2),J=C[0],V=C[1],I=Object(o.useState)(""),L=Object(m.a)(I,2),P=L[0],Q=L[1],z=Object(o.useState)(!1),G=Object(m.a)(z,2),Y=G[0],$=G[1],B=Object(o.useState)(""),D=Object(m.a)(B,2),H=D[0],K=D[1],U=Object(o.useState)(!1),W=Object(m.a)(U,2),X=W[0],ee=W[1],ae=Object(o.useRef)(null);Object(o.useEffect)((function(){H&&function(){var e=Object(l.a)(c.a.mark((function e(a,t){var l,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=Object(r.a)(Object(r.a)({},a),{},{"g-recaptcha-response":t}),m={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:g.a.stringify(l),url:"/"},e.prev=2,e.next=5,f()(m);case 5:V(!0),A(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),n(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(a,t){return e.apply(this,arguments)}}()(x,H)}),[A,x,H]);var te=function(){console.log("error..."),Q(!0)},ne=function(){console.log("expired..."),console.log("resetting..."),le()},ce=function(e){console.log("verified..."),K(e),ee(!0),O(!1)},re=function(e){P&&Q(!1),e&&(V(!1),n(!1),e()),le()},le=function(){var e=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("resetting..."),e.next=3,ae.current.reset();case 3:ee(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),me=Object(o.useRef)(null);return Object(o.useEffect)((function(){j.a.saveStyles(me.current),N.a.timeline({scrollTrigger:{trigger:me.current,toggleActions:"play none none reverse",start:"top 70%",end:"-=50"}}).fromTo(me.current,{y:50},{y:-15})}),[]),s.a.createElement("section",null,s.a.createElement(E.a,{id:"contact"},s.a.createElement("h2",{className:"contact__title",ref:me},"Email"),s.a.createElement(y.a,{className:"justify-content-md-center g_negative-margin"},s.a.createElement(v.a,{className:"white-color",lg:8},s.a.createElement("div",{className:"contact__form-bg"},s.a.createElement(i.d,{initialValues:{"bot-field":"","form-name":"contact",email:"",name:"",message:""},validate:function(e){var a={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(a.email="Invalid email address"):a.email="Required",e.name||(a.name="Required"),e.message||(a.message="Required"),a},onSubmit:function(e){$(!0),k(Object(r.a)({},e)),O(!0),ae.current.execute()}},(function(e){var a=e.resetForm;return s.a.createElement(i.c,{"data-netlify":"true","data-netlify-honeypot":"bot-field","data-netlify-recaptcha":"true",className:"d-flex flex-column",name:"contact",noValidate:!0},s.a.createElement(i.b,{type:"hidden",name:"form-name"}),s.a.createElement(i.b,{type:"hidden",name:"bot-field"}),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"col-form-label col-form-label-lg",htmlFor:"name"},"Name"),s.a.createElement(i.b,{className:"form-control form-control-lg",name:"name",type:"text"}),s.a.createElement(i.a,{className:"invalid-feedback",name:"name",component:"div"})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"col-form-label col-form-label-lg",htmlFor:"email"},"Email"),s.a.createElement(i.b,{className:"form-control form-control-lg",name:"email",type:"email"}),s.a.createElement(i.a,{className:"invalid-feedback",name:"email",component:"div"})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"col-form-label col-form-label-lg",htmlFor:"message"},"Message"),s.a.createElement(i.b,{className:"form-control form-control-lg",name:"message",component:"textarea"}),s.a.createElement(i.a,{className:"invalid-feedback",name:"message",component:"div"})),s.a.createElement(b.a,{ref:ae,sitekey:"6LdZTMMZAAAAAGJy0j2AyImgkQ33Mv4juhtQElid","data-netlify-recaptcha":"true",onError:te,onExpire:ne,onVerify:ce,onLoad:function(){return function(e){console.log("loaded..."),M(!0),R(e)}((function(){return a}))},size:"invisible"}),s.a.createElement("div",{className:"m-2 col-form-label col-form-label-lg hidden"},s.a.createElement("span",{className:"badge badge-".concat(F?"success":"primary"," mx-2 p-2")},"loaded"),s.a.createElement("span",{className:"badge badge-".concat(X?"success":"primary"," mx-2 p-2")},"verified"),p&&s.a.createElement("span",{className:"badge badge-primary mx-2 p-2"},"executing"),P&&s.a.createElement("span",{className:"badge badge-primary mx-2 p-2"},"error"),P&&s.a.createElement("button",{className:"btn btn-link text-dark",onClick:function(){return re(a)}},"reset")),function(e,a){return t?s.a.createElement("button",{className:"contact__submit-btn mt-3",type:"submit",disabled:!0},"Error"):J?s.a.createElement("button",{className:"contact__submit-btn mt-3",type:"submit",disabled:!0},"Submitted"):s.a.createElement("button",{className:"contact__submit-btn mt-3",type:"submit",disabled:a||e},"Submit")}(Y,p),t?s.a.createElement("div",{className:"text-primary m-1"},t):null,(J||t)&&s.a.createElement("button",{className:"contact__reset-btn",onClick:function(){return re(a)}},"Send A New Email"))}))))),s.a.createElement("div",{className:"contact__email-container"},s.a.createElement("h2",{className:"contact__or-title"},"or"),s.a.createElement("div",{className:"contact__email-txt"},s.a.createElement("p",{className:"g__body-lg"},"You can email me at"),s.a.createElement("p",null,s.a.createElement("a",{href:"mailto:gedalya@krycer.com",className:"g__body-lg"},"gedalya@krycer.com"))))))}}}]);
//# sourceMappingURL=13.487dda1f.chunk.js.map