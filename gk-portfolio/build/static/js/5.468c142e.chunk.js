(this["webpackJsonpgk-portfolio"]=this["webpackJsonpgk-portfolio"]||[]).push([[5],{136:function(e,t,s){"use strict";s.r(t);var n=s(26);var a=s(35);function c(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=s(20),o=s(0),r=s.n(o);s(95),s(96);var l=function(e){var t=e.name,s=e.link,n=e.svg,a=e.type,c=Object(o.useState)("hello"),l=Object(i.a)(c,2),g=l[0],m=l[1];return Object(o.useEffect)((function(){m("dev"===a?"tech-btn__btn--dev":"design"===a?"tech-btn__btn--design":"tech-btn__btn--learn")}),[a]),r.a.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"tech-btn__btn ".concat(g)},r.a.createElement("img",{src:n,alt:t,className:"tech-btn__icon"}),t)};s(97);var g=function(e){var t=e.handleDevFilter,s=e.handleDesignFilter,n=e.handleLearnFilter,a=e.devFilterActive,c=e.designFilterActive,i=e.learnFilterActive;return r.a.createElement("div",{className:"tech-filter__container"},r.a.createElement("div",{className:"tech-filter__nav"},r.a.createElement("button",{className:"tech-filter__nav-dev ".concat(a?"tech-filter__nav-dev--active":null),onClick:t},"Coding"),r.a.createElement("button",{className:"tech-filter__nav-design ".concat(c?"tech-filter__nav-design--active":null),onClick:s},"Design"),r.a.createElement("button",{className:"tech-filter__nav-learn ".concat(i?"tech-filter__nav-learn--active":null),onClick:n},"Learning")))},m=s(31),h=s(32),y=s(33),v=s(98),p=s(9),d=s(19);p.a.registerPlugin(d.a);t.default=function(){var e=Object(o.useState)(v),t=Object(i.a)(e,2),s=t[0],n=t[1],a=Object(o.useState)(!1),u=Object(i.a)(a,2),b=u[0],f=u[1],k=Object(o.useState)(!1),w=Object(i.a)(k,2),_=w[0],j=w[1],E=Object(o.useState)(!1),S=Object(i.a)(E,2),A=S[0],G=S[1],O=function(e){switch(e){case"dev":f(!0),j(!1),G(!1);break;case"design":f(!1),j(!0),G(!1);break;case"learn":f(!1),j(!1),G(!0);break;default:f(!1),j(!1),G(!1)}},K=Object(o.useRef)(null),N=Object(o.useRef)(null);return d.a.saveStyles("h2, .skills__intro-text, .skills__tech-container"),Object(o.useEffect)((function(){var e=p.a.timeline();d.a.matchMedia({"(min-width: 768px)":function(){return e.from(K.current,{duration:1,autoAlpha:0,y:50,ease:"expo.out",scrollTrigger:{trigger:K.current,toggleActions:"play none none none",start:"top bottom",end:"-=50",scrub:!0}}),e.from(N.current,{duration:1,autoAlpha:0,y:-30,ease:"power4.out",scrollTrigger:{trigger:N.current,toggleActions:"play none none none",start:"top bottom",end:"-=50",scrub:!0}}),function(){e.kill()}}})}),[]),r.a.createElement("section",null,r.a.createElement(m.a,{className:"g__about-sections"},r.a.createElement("h2",{ref:K},"Skills"),r.a.createElement(h.a,{className:"justify-content-md-center g_negative-margin"},r.a.createElement(y.a,{lg:8},r.a.createElement("p",{className:"skills__intro-text g__body-lg",ref:N},"These are some of the tools I use on projects or currently learning."))),r.a.createElement(h.a,{className:"justify-content-md-center"},r.a.createElement(y.a,{lg:12,className:"skills__tech-container"},r.a.createElement(g,{devFilterActive:b,designFilterActive:_,learnFilterActive:A,handleDevFilter:function(){!1===b?(O("dev"),n(c(v).filter((function(e){return e.type.includes("dev")})))):(n(v),f(!1))},handleDesignFilter:function(){!1===_?(O("design"),n(c(v).filter((function(e){return e.type.includes("design")})))):(n(v),j(!1))},handleLearnFilter:function(){!1===A?(O("learn"),n(c(v).filter((function(e){return e.type.includes("learn")})))):(n(v),G(!1))}}),r.a.createElement("div",{className:"skills__tech-btn-container"},s.map((function(e){return r.a.createElement(l,{key:e.name,name:e.name,link:e.link,svg:e.svg,type:e.type})})))))))}},95:function(e,t,s){},96:function(e,t,s){},97:function(e,t,s){},98:function(e){e.exports=JSON.parse('[{"name":"HTML","link":"https://www.trust4leaders.com/","svg":"/assets/images/tech-icons/html-tech-icon.svg","type":"dev"},{"name":"CSS","link":"https://github.com/NinaRocket/DRIVERkick","svg":"/assets/images/tech-icons/css-tech-icon.svg","type":"dev"},{"name":"SASS","link":"https://www.trust4leaders.com/","svg":"/assets/images/tech-icons/sass-tech-icon.svg","type":"dev"},{"name":"CSS Grids","link":"https://github.com/GedalyaKrycer/css-grids-wes-bos","svg":"/assets/images/tech-icons/css-grids-tech-icon.svg","type":"dev"},{"name":"Bootstrap","link":"https://www.trust4leaders.com/","svg":"/assets/images/tech-icons/bootstrap-tech-icon.svg","type":"dev"},{"name":"Bulma","link":"https://github.com/GedalyaKrycer/weather-forecaster","svg":"/assets/images/tech-icons/bulma-tech-icon.svg","type":"dev"},{"name":"React.js","link":"https://github.com/GedalyaKrycer/digibit-employee-directory","svg":"/assets/images/tech-icons/react-tech-icon.svg","type":"dev"},{"name":"JavaScript","link":"https://github.com/GedalyaKrycer/hw-10-employee-summary","svg":"/assets/images/tech-icons/js-tech-icon.svg","type":"dev"},{"name":"jQuery","link":"https://github.com/dpayton92/Vegg_In_Place_Survival_Kit","svg":"/assets/images/tech-icons/jquery-tech-icon.svg","type":"dev"},{"name":"GSAP 3","link":"https://github.com/GedalyaKrycer/gedalyakrycer.github.io","svg":"/assets/images/tech-icons/gsap3-tech-icon.svg","type":"dev"},{"name":"Node.js","link":"https://github.com/GedalyaKrycer/hw-10-employee-summary","svg":"/assets/images/tech-icons/node-tech-icon.svg","type":"dev"},{"name":"API","link":"https://github.com/GedalyaKrycer/weather-forecaster","svg":"/assets/images/tech-icons/api-tech-icon.svg","type":"dev"},{"name":"Axios","link":"https://github.com/GedalyaKrycer/weather-forecaster","svg":"/assets/images/tech-icons/axios-tech-icon.svg","type":"dev"},{"name":"JSON","link":"https://github.com/GedalyaKrycer/digibit-employee-directory","svg":"/assets/images/tech-icons/json-tech-icon.svg","type":"dev"},{"name":"Git (GitHub)","link":"https://github.com/GedalyaKrycer","svg":"/assets/images/tech-icons/git-tech-icon.svg","type":"dev"},{"name":"Visual Studio Code","link":"https://github.com/GedalyaKrycer","svg":"/assets/images/tech-icons/vs-code-tech-icon.svg","type":"dev"},{"name":"Google Search Console","link":"https://github.com/GedalyaKrycer/gedalyakrycer.github.io","svg":"/assets/images/tech-icons/search-console-tech-icon.svg","type":"dev"},{"name":"Google Analytics","link":"https://github.com/GedalyaKrycer/gedalyakrycer.github.io","svg":"/assets/images/tech-icons/analytics-tech-icon.svg","type":"dev"},{"name":"Netlify","link":"https://github.com/GedalyaKrycer/gedalyakrycer.github.io","svg":"/assets/images/tech-icons/netlify-tech-icon.svg","type":"dev"},{"name":"WP Engine","link":"https://github.com/GedalyaKrycer","svg":"/assets/images/tech-icons/wp-engine-tech-icon.svg","type":"dev"},{"name":"Trello","link":"https://github.com/GedalyaKrycer","svg":"/assets/images/tech-icons/trello-tech-icon.svg","type":"design"},{"name":"Figma","link":"https://www.figma.com/file/EHbfwBaOA1QPQggMB3rZby/A-Team-%E2%80%94-Car-Maintainence-Tracker?node-id=448%3A435","svg":"/assets/images/tech-icons/figma-tech-icon.svg","type":"design"},{"name":"Sketch","link":"https://gedalya.myportfolio.com/web-design-variety","svg":"/assets/images/tech-icons/sketch-tech-icon.svg","type":"design"},{"name":"Adobe XD","link":"https://gedalya.myportfolio.com/web-design-variety","svg":"/assets/images/tech-icons/xd-tech-icon.svg","type":"design"},{"name":"Premier Pro","link":"https://gedalya.myportfolio.com/motion-graphics","svg":"/assets/images/tech-icons/pr-tech-icon.svg","type":"design"},{"name":"After Effects","link":"https://gedalya.myportfolio.com/motion-graphics","svg":"/assets/images/tech-icons/ae-tech-icon.svg","type":"design"},{"name":"Photoshop","link":"https://gedalya.myportfolio.com/poster-variety","svg":"/assets/images/tech-icons/ps-tech-icon.svg","type":"design"},{"name":"Illustrator","link":"https://gedalya.myportfolio.com/logo-variety","svg":"/assets/images/tech-icons/ai-tech-icon.svg","type":"design"},{"name":"InDesign","link":"https://gedalya.myportfolio.com/print-variety","svg":"/assets/images/tech-icons/id-tech-icon.svg","type":"design"},{"name":"Lightroom","link":"https://gedalya.myportfolio.com/photography","svg":"/assets/images/tech-icons/lr-tech-icon.svg","type":"design"},{"name":"Wordpress","link":"https://www.youtube.com/playlist?list=PLriKzYyLb28nUFbe0Y9d-19uVkOnhYxFE","svg":"/assets/images/tech-icons/wp-tech-icon.svg","type":"learning"},{"name":"Express","link":"https://www.udemy.com/course/mern-stack-front-to-back/","svg":"/assets/images/tech-icons/code-tech-icon.svg","type":"learning"},{"name":"Mongoose","link":"https://www.udemy.com/course/mern-stack-front-to-back/","svg":"/assets/images/tech-icons/code-tech-icon.svg","type":"learning"},{"name":"Compass","link":"https://www.udemy.com/course/mern-stack-front-to-back/","svg":"/assets/images/tech-icons/compass-tech-icon.svg","type":"learning"},{"name":"MongoDB","link":"https://www.udemy.com/course/mern-stack-front-to-back/","svg":"/assets/images/tech-icons/compass-tech-icon.svg","type":"learning"},{"name":"Postman","link":"https://www.udemy.com/course/mern-stack-front-to-back/","svg":"/assets/images/tech-icons/postman-tech-icon.svg","type":"learning"},{"name":"Mailchimp","link":"https://www.youtube.com/playlist?list=PLR_ZJO3q73HalAe5sRs7ByjHvptmbflsL","svg":"/assets/images/tech-icons/mailchimp-tech-icon.svg","type":"learning"}]')}}]);
//# sourceMappingURL=5.468c142e.chunk.js.map