(this["webpackJsonprwa-projekt"]=this["webpackJsonprwa-projekt"]||[]).push([[6],{323:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));r(0);var o=r(17),n=r(140),a=r(316),c=r(121),i=r(336),l=r(330),s=r(1);function u(){var e=Object(o.f)(),t=Object(n.a)();return t.breadcrumbs?Object(s.jsxs)(a.a,{sx:{mb:4},children:[Object(s.jsx)(c.a,{sx:{mb:.5},variant:"h5",children:t.title}),Object(s.jsx)("div",{role:"presentation",children:Object(s.jsxs)(i.a,{separator:">","aria-label":"breadcrumb",children:[Object(s.jsx)(l.a,{underline:"hover",color:"inherit",onClick:function(){return e("/dashboard")},sx:{cursor:"pointer"},children:"Dashboard"}),Object(s.jsx)(c.a,{color:"text.primary",children:t.title})]})})]}):null}},330:function(e,t,r){"use strict";var o=r(10),n=r(3),a=r(4),c=r(2),i=r(0),l=(r(14),r(7)),s=r(100),u=r(9),d=r(98),b=r(8),p=r(6),j=r(11),m=r(76),f=r(19),O=r(121),h=r(88),v=r(99);function x(e){return Object(h.a)("MuiLink",e)}var g=Object(v.a)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),y=r(1),k=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],C={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},w=Object(p.a)(O.a,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["underline".concat(Object(b.a)(r.underline))],"button"===r.component&&t.button]}})((function(e){var t=e.theme,r=e.ownerState,o=Object(u.b)(t,"palette.".concat(function(e){return C[e]||e}(r.color)))||r.color;return Object(c.a)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==o?Object(d.a)(o,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===r.component&&Object(n.a)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(g.focusVisible),{outline:"auto"}))})),S=i.forwardRef((function(e,t){var r=Object(j.a)({props:e,name:"MuiLink"}),n=r.className,u=r.color,d=void 0===u?"primary":u,p=r.component,O=void 0===p?"a":p,h=r.onBlur,v=r.onFocus,g=r.TypographyClasses,C=r.underline,S=void 0===C?"always":C,R=r.variant,B=void 0===R?"inherit":R,M=Object(a.a)(r,k),N=Object(m.a)(),A=N.isFocusVisibleRef,D=N.onBlur,L=N.onFocus,V=N.ref,z=i.useState(!1),T=Object(o.a)(z,2),F=T[0],I=T[1],H=Object(f.a)(t,V),W=Object(c.a)({},r,{color:d,component:O,focusVisible:F,underline:S,variant:B}),J=function(e){var t=e.classes,r=e.component,o=e.focusVisible,n=e.underline,a={root:["root","underline".concat(Object(b.a)(n)),"button"===r&&"button",o&&"focusVisible"]};return Object(s.a)(a,x,t)}(W);return Object(y.jsx)(w,Object(c.a)({className:Object(l.default)(J.root,n),classes:g,color:d,component:O,onBlur:function(e){D(e),!1===A.current&&I(!1),h&&h(e)},onFocus:function(e){L(e),!0===A.current&&I(!0),v&&v(e)},ref:H,ownerState:W,variant:B},M))}));t.a=S},336:function(e,t,r){"use strict";var o=r(35),n=r(10),a=r(3),c=r(2),i=r(4),l=r(0),s=(r(101),r(14),r(7)),u=r(100),d=r(6),b=r(11),p=r(121),j=r(98),m=r(55),f=r(1),O=Object(m.a)(Object(f.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),h=r(232),v=Object(d.a)(h.a,{skipSx:!0})((function(e){var t=e.theme;return Object(c.a)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":Object(c.a)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":Object(c.a)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:Object(j.c)(t.palette.grey[200],.12)}:{backgroundColor:Object(j.c)(t.palette.grey[600],.12)})})})),x=Object(d.a)(O)({width:24,height:16});var g=function(e){var t=e;return Object(f.jsx)("li",{children:Object(f.jsx)(v,Object(c.a)({focusRipple:!0},e,{ownerState:t,children:Object(f.jsx)(x,{ownerState:t})}))})},y=r(88),k=r(99);function C(e){return Object(y.a)("MuiBreadcrumbs",e)}var w=Object(k.a)("MuiBreadcrumbs",["root","ol","li","separator"]),S=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],R=Object(d.a)(p.a,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[Object(a.a)({},"& .".concat(w.li),t.li),t.root]}})({}),B=Object(d.a)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),M=Object(d.a)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function N(e,t,r,o){return e.reduce((function(n,a,c){return c<e.length-1?n=n.concat(a,Object(f.jsx)(M,{"aria-hidden":!0,className:t,ownerState:o,children:r},"separator-".concat(c))):n.push(a),n}),[])}var A=l.forwardRef((function(e,t){var r=Object(b.a)({props:e,name:"MuiBreadcrumbs"}),a=r.children,d=r.className,p=r.component,j=void 0===p?"nav":p,m=r.expandText,O=void 0===m?"Show path":m,h=r.itemsAfterCollapse,v=void 0===h?1:h,x=r.itemsBeforeCollapse,y=void 0===x?1:x,k=r.maxItems,w=void 0===k?8:k,M=r.separator,A=void 0===M?"/":M,D=Object(i.a)(r,S),L=l.useState(!1),V=Object(n.a)(L,2),z=V[0],T=V[1],F=Object(c.a)({},r,{component:j,expanded:z,expandText:O,itemsAfterCollapse:v,itemsBeforeCollapse:y,maxItems:w,separator:A}),I=function(e){var t=e.classes;return Object(u.a)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},C,t)}(F),H=l.useRef(null),W=l.Children.toArray(a).filter((function(e){return l.isValidElement(e)})).map((function(e,t){return Object(f.jsx)("li",{className:I.li,children:e},"child-".concat(t))}));return Object(f.jsx)(R,Object(c.a)({ref:t,component:j,color:"text.secondary",className:Object(s.default)(I.root,d),ownerState:F},D,{children:Object(f.jsx)(B,{className:I.ol,ref:H,ownerState:F,children:N(z||w&&W.length<=w?W:function(e){return y+v>=e.length?e:[].concat(Object(o.a)(e.slice(0,y)),[Object(f.jsx)(g,{"aria-label":O,onClick:function(){T(!0);var e=H.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],Object(o.a)(e.slice(e.length-v,e.length)))}(W),I.separator,A,F)})}))}));t.a=A},460:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return l}));r(0);var o=r(17),n=r(50),a=r(310),c=r(323),i=r(1);function l(){var e=Object(o.f)(),t=Object(n.e)();return Object(i.jsxs)("div",{children:[Object(i.jsx)(c.a,{}),"Admin panel - Back office",Object(i.jsx)(a.a,{onClick:function(){e("/dashboard")},children:"Go to application"}),Object(i.jsx)(a.a,{onClick:function(){t.logout()},children:"Logout"})]})}}}]);
//# sourceMappingURL=6.de6571da.chunk.js.map