(this["webpackJsonpgk-portfolio"]=this["webpackJsonpgk-portfolio"]||[]).push([[6],{108:function(e,t,a){},109:function(e,t,a){},137:function(e,t,a){"use strict";a.r(t);var n=a(11),l=a(0),r=a.n(l),i=(a(108),a(20)),c=a(3),o=a(55);a(109);var s=function(e){var t=e.oldContentAvailable,a=e.newContentAvailable,n=e.nextPage,l=e.prevPage;return r.a.createElement("div",{className:"articlePagination"},r.a.createElement("button",{"aria-label":"Pagination Button Previous",className:"ap__btn",onClick:l,disabled:!a},r.a.createElement("svg",{className:"ap__icon",viewBox:"0 0 7 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M4.02401 7.46477L3.67718 7.87146C3.53032 8.04366 3.29285 8.04366 3.14755 7.87146L0.110388 4.31204C-0.0364704 4.13984 -0.0364704 3.86138 0.110388 3.69102L3.14755 0.12976C3.29441 -0.0424404 3.53188 -0.0424404 3.67718 0.12976L4.02401 0.536447C4.17243 0.710479 4.16931 0.994427 4.01776 1.1648L2.13516 3.26784L6.62529 3.26784C6.83308 3.26784 7.00024 3.46386 7.00024 3.7075V4.29372C7.00024 4.53736 6.83308 4.73338 6.62529 4.73338L2.13516 4.73338L4.01776 6.83642C4.17087 7.00679 4.174 7.29074 4.02401 7.46477Z"}))),r.a.createElement("button",{"aria-label":"Pagination Button Next",className:"ap__btn",onClick:n,disabled:!t},r.a.createElement("svg",{className:"ap__icon",viewBox:"0 0 7 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M2.97647 0.536447L3.32331 0.129761C3.47017 -0.0424398 3.70764 -0.0424398 3.85294 0.129761L6.8901 3.68918C7.03696 3.86138 7.03696 4.13984 6.8901 4.31021L3.85294 7.87146C3.70608 8.04366 3.46861 8.04366 3.32331 7.87146L2.97647 7.46477C2.82805 7.29074 2.83118 7.00679 2.98272 6.83642L4.86533 4.73338L0.375202 4.73338C0.167413 4.73338 0.000244141 4.53736 0.000244141 4.29372L0.000244141 3.7075C0.000244141 3.46386 0.167413 3.26784 0.375202 3.26784L4.86533 3.26784L2.98272 1.1648C2.82962 0.994428 2.82649 0.71048 2.97647 0.536447Z"}))))},u=a(57),m=a.n(u);t.default=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),a=t[0],u=t[1],p=Object(l.useState)(null),b=Object(n.a)(p,2),g=b[0],f=b[1],v=Object(l.useState)(1),d=Object(n.a)(v,2),h=d[0],C=d[1],E=Object(l.useState)(!0),L=Object(n.a)(E,2),_=L[0],w=L[1],y=Object(l.useState)(!1),x=Object(n.a)(y,2),j=x[0],N=x[1],k=Object(l.useRef)(null);Object(l.useEffect)((function(){c.a.fromTo(k.current,{autoAlpha:0,y:50},{autoAlpha:1,y:0,ease:"expo",delay:1})}),[]),Object(l.useEffect)((function(){O(),N(h>1)}),[h]),Object(l.useEffect)((function(){0===a.length?w(!1):w(!0)}),[a]);var O=function(){m.a.get("https://dev.to/api/articles?username=gedalyakrycer&per_page=9&page=".concat(h)).then((function(e){u(e.data)})).catch((function(e){console.log(e),f(e)}))};return r.a.createElement("section",{ref:k,className:"mainThumbnailContainer"},r.a.createElement(i.a,null,g?r.a.createElement("p",null,g):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mtc__row"},0===a.length?r.a.createElement("div",{className:"mtc__article-end"},r.a.createElement("h3",null,"Thank you for reading!"),r.a.createElement("p",null,"This is the end of the available articles. You can cycle back below for more recent ones.")):null,a&&a.map((function(e){var t=new Date(e.published_at),a=t.getDate(),n=t.getMonth()+1,l=t.getFullYear().toString().split("").slice(2,4).join("");return r.a.createElement(o.a,{key:e.id,url:e.url,img:e.cover_image,title:e.title,reactions:e.positive_reactions_count,tag:e.tag_list.slice(0,1),date:"".concat(n,"/").concat(a,"/").concat(l)})})))),r.a.createElement(s,{oldContentAvailable:_,newContentAvailable:j,nextPage:function(){C((function(e){return e+1}))},prevPage:function(){C((function(e){return e-1}))}})))}},55:function(e,t,a){"use strict";var n=a(11),l=a(0),r=a.n(l),i=(a(56),function(e){var t=e.url,a=e.img,i=e.title,c=e.reactions,o=e.tag,s=e.date,u=Object(l.useState)(!1),m=Object(n.a)(u,2),p=m[0],b=m[1],g={width:"100%",height:"100%",backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0) 66.51%, rgba(0, 0, 0, 0.31) 100%), url(".concat(a,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",transform:p?"scale(1.1)":"scale(1)",opacity:p?1:0,position:"absolute",top:0,left:0,right:0,zIndex:1,cursor:"pointer",transition:"all 0.5s cubic-bezier(.8,.02,.52,1)"},f={opacity:p?0:1,transform:p?"scale(1.1)":"scale(1)",color:"white",fontWeight:500,lineHeight:"22px",position:"absolute",top:p?20:15,left:18,right:18,zIndex:2,transition:"all 0.5s cubic-bezier(.8,.02,.52,1)"},v={display:"flex",visibility:p?"visible":"hidden",alignItems:"center",position:"absolute",left:12,top:5},d={fontSize:12,color:"var(--nav-filter-links)",margin:0,fontWeight:"bold",opacity:p?0:1,transform:p?"translateX(5px)":"translateX(0)",transition:"all 0.5s cubic-bezier(.8,.02,.52,1)"},h={opacity:p?1:0,transform:p?"translateX(5px)":"translateX(0)",color:"var(--primary-blue)",margin:"0 8px 0 0",lineHeight:"19px",transition:"all 0.5s cubic-bezier(.8,.02,.52,1)"},C={opacity:p?1:0,transform:p?"translateX(5px)":"translateX(0)",width:7,height:6,fill:"var(--primary-blue)",transition:"all 0.7s cubic-bezier(.8,.02,.52,1)"};return r.a.createElement("a",{href:t,onMouseEnter:function(){return b((function(e){return!e}))},onMouseLeave:function(){return b((function(e){return!e}))},className:"articleThumbnail",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"at__main-section"},r.a.createElement("h4",{style:f},i),r.a.createElement("div",{style:g})),r.a.createElement("div",{className:"at__meta-section"},r.a.createElement("div",{className:"at__meta-left-group"},r.a.createElement("p",{style:d},"#",o),r.a.createElement("div",{style:v},r.a.createElement("h5",{style:h},"Read article"),r.a.createElement("svg",{style:C,viewBox:"0 0 7 6",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M0.680062 0.921049L0.637741 0.388228C0.619822 0.162619 0.787741 -0.00530041 1.01225 0.0137238L5.67673 0.383019C5.90234 0.400939 6.09924 0.597834 6.11586 0.822147L6.48645 5.48793C6.50437 5.71354 6.33645 5.88146 6.11195 5.86244L5.57913 5.82012C5.35112 5.80201 5.15255 5.59901 5.13924 5.37139L4.98336 2.55311L1.80836 5.72811C1.66143 5.87503 1.40462 5.85464 1.23234 5.68235L0.817824 5.26784C0.645541 5.09555 0.625143 4.83874 0.772073 4.69181L3.94707 1.51682L1.12879 1.36094C0.900058 1.34873 0.697067 1.15016 0.680062 0.921049Z"})))),r.a.createElement("div",{className:"at__reaction-wrapper"},r.a.createElement("p",{className:"at__reaction-text"},c),r.a.createElement("svg",{className:"at__reaction-icon",viewBox:"0 0 11 11",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M9.84843 1.22128C8.60664 0.136749 6.68808 0.299651 5.5 1.55601C4.31191 0.299651 2.39336 0.134517 1.15156 1.22128C-0.46406 2.63384 -0.227732 4.93678 0.92383 6.15743L4.69219 10.1452C4.90703 10.3728 5.19492 10.5 5.5 10.5C5.80723 10.5 6.09297 10.375 6.30781 10.1474L10.0762 6.15966C11.2256 4.93901 11.4662 2.63607 9.84843 1.22128V1.22128ZM9.3414 5.4054L5.57305 9.39316C5.52148 9.44671 5.47851 9.44671 5.42695 9.39316L1.65859 5.4054C0.874416 4.57527 0.715432 3.00427 1.81543 2.04248C2.65117 1.31277 3.94023 1.42211 4.74805 2.27679L5.5 3.07345L6.25195 2.27679C7.06406 1.41765 8.35312 1.31277 9.18457 2.04025C10.2824 3.00204 10.1191 4.58197 9.3414 5.4054V5.4054Z"}))),r.a.createElement("p",{className:"at__publish-data"},s)))});t.a=r.a.memo(i)},56:function(e,t,a){}}]);
//# sourceMappingURL=6.0581c225.chunk.js.map