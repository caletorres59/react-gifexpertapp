(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(7),a=n.n(c),i=n(2),u=n(9),s=n(0),o=function(e){var t=e.setCategories,n=Object(r.useState)(""),c=Object(i.a)(n,2),a=c[0],o=c[1];return Object(s.jsx)("form",{onSubmit:function(e){e.preventDefault(),a.trim().length>2&&(t((function(e){return[a].concat(Object(u.a)(e))})),o(""))},children:Object(s.jsx)("input",{type:"text",placeholder:"A\xf1adir un elemento",value:a,onChange:function(e){o(e.target.value)}})})},j=function(e){var t=e.gif,n=t.title,r=t.url;return Object(s.jsxs)("li",{className:"card animate__animated animate__bounce animate__delay-2s",children:[Object(s.jsx)("h4",{children:n}),Object(s.jsx)("img",{src:r,alt:n})]})},l=n(6),d=n.n(l),p=n(8),f=function(){var e=Object(p.a)(d.a.mark((function e(t){var n,r,c,a,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?limit=10&q=".concat(encodeURI(t),"&api_key=1XPLimuUpv8FyhMpf9SIZD1Spvhpgw4Y"),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,a=c.data,i=a.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.category,n=function(e){var t=Object(r.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){f(e).then((function(e){setTimeout((function(){a({data:e,loading:!1})}),3e3)}))}),[e]),c}(t),c=n.data,a=n.loading;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:t}),a&&Object(s.jsx)("p",{children:"Cargando"}),Object(s.jsx)("ul",{className:"list-gifts",children:c.map((function(e){return Object(s.jsx)(j,{gif:e},e.id)}))})]})},h=function(){var e=Object(r.useState)(["One Punch"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{children:"Gif Expert App"}),Object(s.jsx)(o,{setCategories:c}),Object(s.jsx)("ol",{children:n.map((function(e){return Object(s.jsx)(b,{category:e},e)}))})]})};n(16);a.a.render(Object(s.jsx)(h,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.d20408a0.chunk.js.map