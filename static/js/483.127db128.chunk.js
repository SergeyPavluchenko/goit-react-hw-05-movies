"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[483],{197:function(n,e,t){t.d(e,{Hg:function(){return u},XT:function(){return p},nl:function(){return f},tx:function(){return h},zv:function(){return x}});var r=t(5861),a=t(4687),o=t.n(a),c=t(3263);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="79c27b95cee402d8dc106d8509c1b5f2";function u(){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)(o().mark((function n(){var e,t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/day?api_key=".concat(s));case 2:return e=n.sent,t=e.data,r=t.results,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?api_key=".concat(s,"&language=en-US&page=1&query=").concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},1275:function(n,e,t){t.d(e,{Z:function(){return h}});var r,a,o,c,s=t(7689),u=t(168),i=t(6444),p=t(1087),l=i.ZP.ul(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  gap: 15px 15px;\n"]))),f=(0,i.ZP)(p.OL)(a||(a=(0,u.Z)(["\n  width: 100%;\n  flex-basis: calc(100% / 4 - 26px);\n  padding: 5px;\n  color: black;\n  font-size: 18px;\n  border-radius: 5px;\n  text-decoration: none;\n  border: 2px;\n  margin-top: 5px;\n"]))),d=i.ZP.img(o||(o=(0,u.Z)(["\n  display: 'block';\n  width: 240px;\n  height: 360px;\n  border-radius: 5px;\n  margin-left: 50px;\n\n  &:hover {\n    transform: scale(1.03);\n    transition: 250ms;\n  }\n"]))),x=i.ZP.h3(c||(c=(0,u.Z)(["\n  margin-bottom: 30px;\n  margin-top: 30px;\n  font-size: 15px;\n  text-align: center;\n  color: orange;\n"]))),g=t(184),h=function(n){var e=n.movies,t=s.TH;return(0,g.jsx)(l,{children:e&&e.map((function(n){var e=n.id,r=n.poster_path,a=n.title;return(0,g.jsxs)(f,{to:"/movies/".concat(e),state:{from:t},children:[(0,g.jsx)(d,{src:"https://image.tmdb.org/t/p/w500/".concat(r),alt:a}),(0,g.jsx)(x,{children:a})]},e)}))})}},9483:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,a,o,c=t(5861),s=t(9439),u=t(4687),i=t.n(u),p=t(2791),l=t(1087),f=t(7689),d=t(9e3),x=t(197),g=t(1275),h=t(168),m=t(6444),v=m.ZP.form(r||(r=(0,h.Z)(["\n  padding-top: 30px;\n  padding-bottom: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),Z=m.ZP.input(a||(a=(0,h.Z)(["\n  margin: 0;\n  padding: 10px;\n  min-width: 300px;\n  height: 40px;\n  background-color: #fbf9fa3f;\n  color: #000;\n  font-size: 20px;\n  border-radius: 5px 0 0 5px;\n"]))),y=m.ZP.button(o||(o=(0,h.Z)(["\n  height: 40px;\n  width: 57px;\n  background-color: #fbf9fa3f;\n  border-radius: 0 5px 5px 0;\n  cursor: pointer;\n  margin-left: -2px;\n"]))),b=t(184),w=function(){var n=(0,p.useState)(""),e=(0,s.Z)(n,2),t=e[0],r=e[1],a=(0,p.useState)([]),o=(0,s.Z)(a,2),u=o[0],h=o[1],m=(0,p.useState)(null),w=(0,s.Z)(m,2),k=w[0],j=w[1],_=(0,l.lr)({}),S=(0,s.Z)(_,2),P=S[0],T=S[1],C=(0,f.TH)();console.log(P);var U=P.get("query");return console.log(U),(0,p.useEffect)((function(){U||console.log("nety")}),[U]),(0,p.useEffect)((function(){if(""!==t){var n=function(){var n=(0,c.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,x.XT)(t);case 3:e=n.sent,console.log(e),h(e),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),j(n.t0.message),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}else if(U){var e=function(){var n=(0,c.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,x.XT)(U);case 3:e=n.sent,console.log(e),h(e),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),j(n.t0.message),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();e()}}),[t,U]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(v,{onSubmit:function(n){n.preventDefault(),r(n.currentTarget.elements.searchQuery.value.toLowerCase().trim()),T({query:n.currentTarget.elements.searchQuery.value.toLowerCase().trim()})},children:[(0,b.jsx)(Z,{name:"searchQuery",type:"text",autoComplete:"on",autoFocus:!0,placeholder:"Search..."}),(0,b.jsx)(y,{type:"submit",children:(0,b.jsx)("div",{children:(0,b.jsx)(d.Vph,{})})})]}),k?(0,b.jsxs)("p",{children:["No results found for `",t,"`"]}):(0,b.jsx)(g.Z,{movies:u,location:C})]})}}}]);
//# sourceMappingURL=483.127db128.chunk.js.map