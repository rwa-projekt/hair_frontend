(this["webpackJsonprwa-projekt"]=this["webpackJsonprwa-projekt"]||[]).push([[8],{323:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));r(0);var o=r(17),n=r(140),a=r(316),c=r(121),i=r(336),l=r(330),s=r(1);function u(){var e=Object(o.f)(),t=Object(n.a)();return t.breadcrumbs?Object(s.jsxs)(a.a,{sx:{mb:4},children:[Object(s.jsx)(c.a,{sx:{mb:.5},variant:"h5",children:t.title}),Object(s.jsx)("div",{role:"presentation",children:Object(s.jsxs)(i.a,{separator:">","aria-label":"breadcrumb",children:[Object(s.jsx)(l.a,{underline:"hover",color:"inherit",onClick:function(){return e("/dashboard")},sx:{cursor:"pointer"},children:"Dashboard"}),Object(s.jsx)(c.a,{color:"text.primary",children:t.title})]})})]}):null}},330:function(e,t,r){"use strict";var o=r(10),n=r(3),a=r(4),c=r(2),i=r(0),l=(r(14),r(7)),s=r(100),u=r(9),d=r(98),b=r(8),p=r(6),j=r(11),m=r(76),f=r(19),O=r(121),h=r(88),v=r(99);function x(e){return Object(h.a)("MuiLink",e)}var g=Object(v.a)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),y=r(1),C=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],k={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},w=Object(p.a)(O.a,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["underline".concat(Object(b.a)(r.underline))],"button"===r.component&&t.button]}})((function(e){var t=e.theme,r=e.ownerState,o=Object(u.b)(t,"palette.".concat(function(e){return k[e]||e}(r.color)))||r.color;return Object(c.a)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==o?Object(d.a)(o,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===r.component&&Object(n.a)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(g.focusVisible),{outline:"auto"}))})),S=i.forwardRef((function(e,t){var r=Object(j.a)({props:e,name:"MuiLink"}),n=r.className,u=r.color,d=void 0===u?"primary":u,p=r.component,O=void 0===p?"a":p,h=r.onBlur,v=r.onFocus,g=r.TypographyClasses,k=r.underline,S=void 0===k?"always":k,R=r.variant,B=void 0===R?"inherit":R,M=Object(a.a)(r,C),N=Object(m.a)(),A=N.isFocusVisibleRef,D=N.onBlur,V=N.onFocus,z=N.ref,H=i.useState(!1),L=Object(o.a)(H,2),T=L[0],F=L[1],I=Object(f.a)(t,z),W=Object(c.a)({},r,{color:d,component:O,focusVisible:T,underline:S,variant:B}),J=function(e){var t=e.classes,r=e.component,o=e.focusVisible,n=e.underline,a={root:["root","underline".concat(Object(b.a)(n)),"button"===r&&"button",o&&"focusVisible"]};return Object(s.a)(a,x,t)}(W);return Object(y.jsx)(w,Object(c.a)({className:Object(l.default)(J.root,n),classes:g,color:d,component:O,onBlur:function(e){D(e),!1===A.current&&F(!1),h&&h(e)},onFocus:function(e){V(e),!0===A.current&&F(!0),v&&v(e)},ref:I,ownerState:W,variant:B},M))}));t.a=S},336:function(e,t,r){"use strict";var o=r(35),n=r(10),a=r(3),c=r(2),i=r(4),l=r(0),s=(r(101),r(14),r(7)),u=r(100),d=r(6),b=r(11),p=r(121),j=r(98),m=r(55),f=r(1),O=Object(m.a)(Object(f.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),h=r(232),v=Object(d.a)(h.a,{skipSx:!0})((function(e){var t=e.theme;return Object(c.a)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":Object(c.a)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":Object(c.a)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:Object(j.c)(t.palette.grey[200],.12)}:{backgroundColor:Object(j.c)(t.palette.grey[600],.12)})})})),x=Object(d.a)(O)({width:24,height:16});var g=function(e){var t=e;return Object(f.jsx)("li",{children:Object(f.jsx)(v,Object(c.a)({focusRipple:!0},e,{ownerState:t,children:Object(f.jsx)(x,{ownerState:t})}))})},y=r(88),C=r(99);function k(e){return Object(y.a)("MuiBreadcrumbs",e)}var w=Object(C.a)("MuiBreadcrumbs",["root","ol","li","separator"]),S=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],R=Object(d.a)(p.a,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[Object(a.a)({},"& .".concat(w.li),t.li),t.root]}})({}),B=Object(d.a)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),M=Object(d.a)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function N(e,t,r,o){return e.reduce((function(n,a,c){return c<e.length-1?n=n.concat(a,Object(f.jsx)(M,{"aria-hidden":!0,className:t,ownerState:o,children:r},"separator-".concat(c))):n.push(a),n}),[])}var A=l.forwardRef((function(e,t){var r=Object(b.a)({props:e,name:"MuiBreadcrumbs"}),a=r.children,d=r.className,p=r.component,j=void 0===p?"nav":p,m=r.expandText,O=void 0===m?"Show path":m,h=r.itemsAfterCollapse,v=void 0===h?1:h,x=r.itemsBeforeCollapse,y=void 0===x?1:x,C=r.maxItems,w=void 0===C?8:C,M=r.separator,A=void 0===M?"/":M,D=Object(i.a)(r,S),V=l.useState(!1),z=Object(n.a)(V,2),H=z[0],L=z[1],T=Object(c.a)({},r,{component:j,expanded:H,expandText:O,itemsAfterCollapse:v,itemsBeforeCollapse:y,maxItems:w,separator:A}),F=function(e){var t=e.classes;return Object(u.a)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},k,t)}(T),I=l.useRef(null),W=l.Children.toArray(a).filter((function(e){return l.isValidElement(e)})).map((function(e,t){return Object(f.jsx)("li",{className:F.li,children:e},"child-".concat(t))}));return Object(f.jsx)(R,Object(c.a)({ref:t,component:j,color:"text.secondary",className:Object(s.default)(F.root,d),ownerState:T},D,{children:Object(f.jsx)(B,{className:F.ol,ref:I,ownerState:T,children:N(H||w&&W.length<=w?W:function(e){return y+v>=e.length?e:[].concat(Object(o.a)(e.slice(0,y)),[Object(f.jsx)(g,{"aria-label":O,onClick:function(){L(!0);var e=I.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],Object(o.a)(e.slice(e.length-v,e.length)))}(W),F.separator,A,T)})}))}));t.a=A},451:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return a}));r(0);var o=r(323),n=r(1);function a(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(o.a,{}),Object(n.jsx)("div",{children:"Scroll test"}),Object(n.jsx)("div",{style:{minHeight:500,backgroundColor:"#dadada"}}),Object(n.jsx)("div",{style:{minHeight:500,backgroundColor:"#aeaeae"}}),Object(n.jsx)("div",{style:{minHeight:500,backgroundColor:"#dadada"}})]})}}}]);
//# sourceMappingURL=8.25433101.chunk.js.map