(this["webpackJsonprwa-projekt"]=this["webpackJsonprwa-projekt"]||[]).push([[21],{436:function(e,t,r){"use strict";r.d(t,"b",(function(){return d})),r.d(t,"a",(function(){return j}));r(0);var n=r(19),c=r(178),i=r(420),a=r(147),s=r(457),o=r(445),b=r(1);function d(){var e=Object(n.f)(),t=Object(c.a)();return t.breadcrumbs?Object(b.jsxs)(i.a,{sx:{mb:4},children:[Object(b.jsx)(a.a,{sx:{mb:.5},variant:"h5",children:t.title}),Object(b.jsx)("div",{role:"presentation",children:Object(b.jsxs)(s.a,{separator:">","aria-label":"breadcrumb",children:[Object(b.jsx)(o.a,{underline:"hover",color:"inherit",onClick:function(){return e("/dashboard")},sx:{cursor:"pointer"},children:"Dashboard"}),Object(b.jsx)(a.a,{color:"text.primary",children:t.title})]})})]}):null}function j(){var e,t=Object(n.f)(),r=Object(n.e)(),d=Object(c.b)();if(!d.breadcrumbs)return null;var j="/".concat(d.url),l=r.pathname===j,u=d.children.find((function(e){return""===e.path})).name,h=(null===(e=d.children.find((function(e){return r.pathname=="".concat(j,"/").concat(e.path)})))||void 0===e?void 0:e.name)||d.children.find((function(e){return"*"===e.path})).name;return Object(b.jsxs)(i.a,{sx:{mb:4},children:[Object(b.jsx)(a.a,{sx:{mb:.5},variant:"h5",children:d.title}),Object(b.jsx)("div",{role:"presentation",children:Object(b.jsxs)(s.a,{separator:">","aria-label":"breadcrumb",children:[Object(b.jsx)(o.a,{underline:"hover",color:"inherit",onClick:function(){return t("/admin/dashboard")},sx:{cursor:"pointer"},children:"Dashboard"}),l?Object(b.jsx)(a.a,{children:u}):Object(b.jsx)(o.a,{underline:"hover",color:"inherit",onClick:function(){return t(j)},sx:{cursor:"pointer"},children:u}),!l&&Object(b.jsx)(a.a,{color:"text.primary",children:h})]})})]})}},593:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return x}));var n=r(0),c=r(148),i=r(29),a=r(386),s=r(416),o=r(484),b=r(436),d=r(420),j=r(147),l=r(1);function u(e){var t=e.item,r=Object(c.c)();return Object(l.jsx)(d.a,{sx:{width:r?"100%":"33.3%",mb:4},children:Object(l.jsxs)(a.a,{direction:"column",sx:{maxWidth:"100%",px:r?0:2},children:[Object(l.jsx)("img",{src:t.avatar,style:{width:"100%",aspectRatio:"1/1",objectFit:"cover",borderRadius:16}}),Object(l.jsxs)(a.a,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{mt:2,width:"100%"},children:[Object(l.jsxs)(a.a,{direction:"column",sx:{width:"100%"},children:[Object(l.jsx)(j.a,{variant:"subtitle1",sx:{fontWeight:600,maxWidth:"100%"},children:t.name}),Object(l.jsxs)(j.a,{variant:"subtitle2",sx:{fontWeight:300},children:[t.price," KM"]})]}),Object(l.jsx)(s.a,{sx:{width:"max-content"},label:"".concat(t.time_needed," min."),variant:"outlined",color:"secondary"})]})]})})}var h=r(82);function x(){var e=Object(i.b)(),t=(Object(c.c)(),Object(c.b)(),Object(i.c)((function(e){return e.HAIRSTYLES.hairstyles})));return Object(n.useEffect)((function(){e({type:h.a})}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)(b.b,{}),Object(l.jsx)(a.a,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{mb:4},children:Object(l.jsx)(a.a,{direction:"row",alignItems:"center",spacing:1,children:Object(l.jsx)(s.a,{label:"Sve usluge",variant:"filled"})})}),"loading"===t.status?Object(l.jsx)(o.a,{}):Object(l.jsx)(a.a,{direction:"row",flexWrap:"wrap",sx:{width:"100%"},children:t.data.map((function(e,t){return Object(l.jsx)(u,{item:e},t)}))})]})}}}]);
//# sourceMappingURL=21.4ac28cd5.chunk.js.map