(this["webpackJsonprwa-projekt"]=this["webpackJsonprwa-projekt"]||[]).push([[19],{436:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return b}));n(0);var i=n(19),r=n(178),a=n(420),c=n(147),s=n(457),o=n(445),l=n(1);function d(){var e=Object(i.f)(),t=Object(r.a)();return t.breadcrumbs?Object(l.jsxs)(a.a,{sx:{mb:4},children:[Object(l.jsx)(c.a,{sx:{mb:.5},variant:"h5",children:t.title}),Object(l.jsx)("div",{role:"presentation",children:Object(l.jsxs)(s.a,{separator:">","aria-label":"breadcrumb",children:[Object(l.jsx)(o.a,{underline:"hover",color:"inherit",onClick:function(){return e("/dashboard")},sx:{cursor:"pointer"},children:"Dashboard"}),Object(l.jsx)(c.a,{color:"text.primary",children:t.title})]})})]}):null}function b(){var e,t=Object(i.f)(),n=Object(i.e)(),d=Object(r.b)();if(!d.breadcrumbs)return null;var b="/".concat(d.url),j=n.pathname===b,u=d.children.find((function(e){return""===e.path})).name,x=(null===(e=d.children.find((function(e){return n.pathname=="".concat(b,"/").concat(e.path)})))||void 0===e?void 0:e.name)||d.children.find((function(e){return"*"===e.path})).name;return Object(l.jsxs)(a.a,{sx:{mb:4},children:[Object(l.jsx)(c.a,{sx:{mb:.5},variant:"h5",children:d.title}),Object(l.jsx)("div",{role:"presentation",children:Object(l.jsxs)(s.a,{separator:">","aria-label":"breadcrumb",children:[Object(l.jsx)(o.a,{underline:"hover",color:"inherit",onClick:function(){return t("/admin/dashboard")},sx:{cursor:"pointer"},children:"Dashboard"}),j?Object(l.jsx)(c.a,{children:u}):Object(l.jsx)(o.a,{underline:"hover",color:"inherit",onClick:function(){return t(b)},sx:{cursor:"pointer"},children:u}),!j&&Object(l.jsx)(c.a,{color:"text.primary",children:x})]})})]})}},440:function(e,t,n){"use strict";var i=n(0),r=n(470),a=n(148),c=n(426),s=n(23),o=n(1);function l(){if(Object(a.a)())return null;var e=Object(i.useContext)(r.VisibilityContext),t=e.isFirstItemVisible,n=e.scrollPrev;return Object(o.jsx)(b,{disabled:t,onClick:function(){return n()},right:32,children:Object(o.jsx)(s.b,{})})}function d(){if(Object(a.a)())return null;var e=Object(i.useContext)(r.VisibilityContext),t=e.isLastItemVisible,n=e.scrollNext;return Object(o.jsx)(b,{disabled:t,onClick:function(){return n()},right:0,children:Object(o.jsx)(s.c,{})})}function b(e){var t=e.children,n=e.disabled,i=e.onClick,r=e.right;return Object(o.jsx)(c.a,{disabled:n,onClick:i,size:"small",sx:{cursor:"pointer",height:"max-content",position:"absolute",top:-16,opacity:n&&.25,right:r},children:t})}t.a=function(e){var t=e.children;return Object(o.jsx)(r.ScrollMenu,{LeftArrow:l,RightArrow:d,wrapperClassName:"scrollmenu-wrapper",itemClassName:"scrollmenu-item",scrollContainerClassName:"scrollmenu-container",children:t})}},579:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Q})),n.d(t,"useAppointments",(function(){return Z}));var i=n(9),r=n(10),a=n(0),c=n.n(a),s=n(43),o=n(56),l=n(55),d=n.n(l),b=n(19),j=n(148),u=n(386),x=n(414),h=n(427),m=n(557),p=n(420),O=n(147),f=n(591),v=n(483),g=n(592),y=n(436),w=n(29),C=n(82),k=n(416),S=n(417),z=n(440),I=n(1);function D(){var e=Object(j.a)(),t=Object(w.b)(),n=Object(w.c)((function(e){return e.HAIRSTYLES.hairstyles})),i=Z(),r=i.setService,c=i.serviceSelected;return Object(a.useEffect)((function(){t({type:C.a})}),[]),"loading"===n.status?Object(I.jsx)(v.a,{}):Object(I.jsx)("div",{id:"appointments-services",style:{width:"100%"},children:Object(I.jsxs)(p.a,{sx:{width:"100%"},children:[e&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(p.a,{sx:{height:12}}),Object(I.jsx)(O.a,{variant:"caption",sx:{height:40,pl:1},children:"Usluge"}),Object(I.jsx)(p.a,{sx:{height:12}})]}),Object(I.jsx)(z.a,{children:n.data.map((function(e,t){var n=c(e.id);return Object(I.jsx)(_,{itemId:t,id:t,item:e,selected:n,onClick:function(){return r(e)}},t)}))})]})})}function _(e){var t=e.item,n=e.selected,i=e.onClick;return Object(I.jsx)(k.a,{variant:n?"contained":"outlined",color:n?"secondary":"default",onClick:i,label:Object(I.jsxs)(u.a,{direction:"row",alignItems:"center",spacing:2,children:[Object(I.jsx)(S.a,{src:t.avatar,sx:{mr:"4px !important",width:"40px !important",height:"40px !important",fontSize:"18px !important"}}),Object(I.jsxs)(u.a,{direction:"column",justifyContent:"space-between",alignItems:"flex-start",children:[Object(I.jsx)(O.a,{variant:"subtitle1",sx:{fontWeight:600},children:t.name}),Object(I.jsxs)(u.a,{direction:"row",alignItems:"center",spacing:1,children:[Object(I.jsxs)(O.a,{variant:"body1",children:[t.price," KM,"]}),Object(I.jsxs)(O.a,{variant:"body1",children:[t.time_needed," min."]})]})]})]}),sx:{mb:"12px !important",ml:"0px !important",mr:"12px !important",px:1,py:4,pr:4,boxSizing:"border-box !important",fontSize:14}})}var T=n(149),Y=n.n(T),A=n(520),E=n(526),F=n(582),R=n(342),M=n(571),W=n(555),U=n(572),V=n(573),B=["9:00","9:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30"];function N(){var e=Object(s.e)().user,t=Object(j.a)(),n=Z(),c=n.barber,l=n.setDate,b=n.setTime,x=n.timeSelected,h=Object(a.useState)(new Date),m=Object(r.a)(h,2),f=m[0],v=m[1],g=Object(a.useState)([]),y=Object(r.a)(g,2),w=y[0],C=y[1];function S(e){v(e);var t=Y()(e).format("YYYY-MM-DD");l(t),b("")}function D(){c&&d.a.get("".concat(Object(o.a)(),"barber_booking/orders/busy/?barber=").concat(null===c||void 0===c?void 0:c.id,"&date=").concat(Y()(f).format("YYYY-MM-DD")),{headers:{Authorization:"Token "+e.data.token}}).then((function(e){console.log("Response => ",e),C(e.data)})).catch((function(e){console.log("Error => ",e),C([])}))}Object(a.useEffect)((function(){l(Y()(f).format("YYYY-MM-DD")),D()}),[]),Object(a.useEffect)((function(){D()}),[f,c]);var _=function(){var e=w.map((function(e){return t=e.start_datetime,Y()(t).format("h:mm");var t}));return B.filter((function(t){return!e.includes(t)})).concat(e.filter((function(e){return!B.includes(e)})))}(),T=_.map((function(e,n){var i=x(e)?"primary":"default";return Object(I.jsx)(k.a,{itemId:n,id:n,label:e,variant:"contained",color:i,onClick:function(){b(e)},sx:{mb:"12px !important",ml:"0px !important",mr:"12px !important",px:t?.5:2.5,py:t?2.25:3,boxSizing:"border-box !important",fontSize:14}},n)})),N=t?Object(I.jsxs)(p.a,{sx:{width:"100%"},children:[Object(I.jsx)(O.a,{variant:"caption",sx:{height:40,pl:1},children:"Termini"}),Object(I.jsx)(p.a,{sx:{height:12}}),Object(I.jsx)(z.a,{children:T})]}):Object(I.jsx)(I.Fragment,{children:T});return Object(I.jsxs)(u.a,{direction:t?"column":"row",alignItems:"flex-start",justifyContent:"space-between",sx:{width:"100%",height:"100%"},children:[Object(I.jsxs)(p.a,{sx:{width:"100%",height:"100%",position:"relative"},children:[Object(I.jsx)(W.b,{dateAdapter:M.a,locale:E.a,children:t?Object(I.jsx)(V.a,{orientation:"landscape",openTo:"day",views:["day"],date:f,shouldDisableDate:A.a,minDate:new Date,showToolbar:!0,toolbarTitle:"Izaberite datum",onChange:function(e){return S(e)},renderInput:function(e){return Object(I.jsx)(F.a,Object(i.a)({},e))}}):Object(I.jsx)(U.a,{orientation:"landscape",openTo:"day",views:["day"],date:f,shouldDisableDate:A.a,minDate:new Date,showToolbar:!0,toolbarTitle:"Izaberite datum",onChange:function(e){return S(e)},renderInput:function(e){return Object(I.jsx)(F.a,Object(i.a)({},e))}})}),!t&&Object(I.jsx)(R.a,{elevation:0,sx:{width:80,height:80,position:"absolute",bottom:0,left:0}})]}),Object(I.jsx)(u.a,{direction:"row",alignItems:"flex-start",justifyContent:"flex-start",spacing:2,flexWrap:t?"nowrap":"wrap",sx:{width:t?"100%":"65%",height:"max-content"},children:null===c?Object(I.jsxs)(u.a,{direction:"column",alignItems:"center",justifyContent:"center",spacing:1,sx:{width:"100%",height:t?"100%":240},children:[!t&&Object(I.jsx)(O.a,{variant:"h6",children:"Termini"}),Object(I.jsx)(O.a,{variant:"caption",sx:{opacity:.5,maxWidth:t?"100%":200,textAlign:t?"left":"center"},children:"Izaberite frizera da biste vidjeli slobodne termine."})]}):_.length?N:Object(I.jsxs)(u.a,{direction:"column",alignItems:"center",justifyContent:"center",spacing:1,sx:{width:"100%",height:t?"100%":240},children:[!t&&Object(I.jsx)(O.a,{variant:"h6",children:"Termini"}),Object(I.jsxs)(O.a,{variant:"caption",sx:{opacity:.5,maxWidth:t?"100%":200,textAlign:t?"left":"center"},children:["Izgleda da ",c.name||"Frizer"," nema slobodnih termina u "," ","srijeda"===Y()(f).format("dddd")?"srijedu":Y()(f).format("dddd"),"."]})]})})]})}var P=n(47);function J(){var e,t=Object(w.b)(),n=Object(w.c)((function(e){return e.BARBERS.barbers})),i=Z(),r=i.setBarber,c=i.barberSelected;return Object(a.useEffect)((function(){t({type:P.a})}),[]),"loading"===n.status?Object(I.jsx)(v.a,{}):Object(I.jsx)("div",{id:"appointments-barbers",style:{width:"100%"},children:Object(I.jsx)(p.a,{sx:{width:"100%"},children:Object(I.jsx)(z.a,{children:(null===(e=n.data)||void 0===e?void 0:e.length)?n.data.map((function(e,t){var n=c(e.id);return Object(I.jsx)(K,{itemId:t,id:t,item:e,selected:n,onClick:function(){return r(e)}},t)})):Object(I.jsx)(O.a,{variant:"caption",sx:{opacity:.5},children:"Izgleda da trenutno nema dostupnih frizera..."})})})})}function K(e){var t=e.item,n=e.selected,i=e.onClick,r=Object(j.a)();return Object(I.jsx)(k.a,{label:t.name||"Frizer",variant:n?"contained":"outlined",color:n?"secondary":"default",onClick:i,avatar:Object(I.jsx)(S.a,{sx:{mr:r?"0px !important":"4px !important",width:r?"20px !important":"40px !important",height:r?"20px !important":"40px !important",fontSize:r?"10px !important":"18px !important"},children:""===t.name?"F":t.name[0].toUpperCase()}),sx:{mb:"12px !important",ml:"0px !important",mr:"12px !important",px:r?.5:2,py:r?2.25:4,boxSizing:"border-box !important",fontSize:14}})}function L(){var e=Z().checkout;return Object(I.jsxs)(u.a,{direction:"row",flexWrap:"wrap",sx:{width:"100%",position:"relative"},children:[Object(I.jsx)(H,{label:"Datum i vrijeme",value:Y()("".concat(e.date," ").concat(e.time)).calendar()}),Object(I.jsx)(H,{label:"Frizer",value:e.barber}),Object(I.jsx)(H,{label:"Cijena",value:"".concat(e.price," KM")}),Object(I.jsx)(H,{label:"Vrijeme potrebno",value:"".concat(e.time_needed," min.")}),Object(I.jsx)(H,{label:"Usluge",value:e.services,fullWidth:!0})]})}var H=function(e){var t=e.label,n=void 0===t?"":t,i=e.value,r=void 0===i?"-":i,a=e.fullWidth,c=void 0!==a&&a;return Object(I.jsxs)(u.a,{direction:"column",align:"flex-start",sx:{width:c?"100%":"50%",mb:6},children:[Object(I.jsx)(O.a,{variant:"body2",sx:{opacity:.75},children:n}),Object(I.jsx)(O.a,{variant:"h6",children:r})]})},q=n(23);function G(){var e=Object(b.f)(),t=Z(),n=t.loading,i=t.status,a=t.setStatus,s=t.canSubmit,o=t.submit,l=Object(j.a)(),d=c.a.useState(!1),w=Object(r.a)(d,2),C=w[0],k=w[1];function S(){k(!0)}function z(){k(!1)}function _(){setTimeout((function(){k(!1),e("/dashboard"),a("")}),1500)}return Object(I.jsxs)(u.a,{direction:"column",alignItems:"flex-start",spacing:l?0:4,children:[Object(I.jsxs)(u.a,{sx:{width:"100%"},direction:"row",alignItems:"center",justifyContent:"space-between",children:[Object(I.jsx)(y.b,{}),l?s?Object(I.jsx)(x.a,{onClick:S,variant:"outlined",disableElevation:!0,size:"large",sx:{borderRadius:"100px !important",width:40,height:40,padding:0,minWidth:0,mb:4},children:Object(I.jsx)(q.g,{})}):Object(I.jsx)(x.a,{disabled:!0,variant:"text",disableElevation:!0,size:"large",sx:{mb:4},children:Object(I.jsx)(q.l,{})}):Object(I.jsx)(x.a,{onClick:S,variant:s?"contained":"text",disabled:!s,disableElevation:!0,size:"large",sx:{borderRadius:"8px !important"},children:s?"Rezerviraj":"Unesite podatke"})]}),Object(I.jsx)(J,{}),Object(I.jsx)(N,{}),Object(I.jsx)(D,{}),Object(I.jsxs)(h.a,{onClose:z,open:C,fullScreen:l,sx:{width:l?"100vw":"auto"},children:[Object(I.jsx)(m.a,{children:Object(I.jsxs)(u.a,{direction:"column",alignItems:"center",justifyContent:"center",spacing:1,sx:{py:3},children:[Object(I.jsx)(p.a,{sx:{width:80,height:80,display:"grid",placeItems:"center",borderRadius:60,bgcolor:"#69c5332b",border:"1px solid #69c53377"},children:Object(I.jsx)(q.g,{size:"1.75em",style:{color:"#47931b"}})}),"success"!==i&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(O.a,{variant:"h5",children:"Rezervacija"}),Object(I.jsx)(O.a,{variant:"body1",sx:{opacity:.75},children:"error"===i?"Pogre\u0161ka":"Jeste li sigurni da \u017eelite potvrditi rezervaciju?"})]})]})}),Object(I.jsx)(f.a,{sx:{display:"grid",placeItems:"center",width:l?"100%":600,height:l?"100%":"auto",px:4,transition:"250ms ease"},children:"success"===i?Object(I.jsx)(O.a,{variant:"h6",sx:{textAlign:"center"},children:"Uspje\u0161no ste rezervirali termin!"}):"error"===i?Object(I.jsx)(O.a,{variant:"h6",sx:{textAlign:"center"},children:"Do\u0161lo je do pogre\u0161ke pri rezerviranju termina..."}):n?Object(I.jsx)(v.a,{}):Object(I.jsx)(L,{})}),Object(I.jsx)(g.a,{sx:{p:2},children:"success"!==i&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(x.a,{onClick:z,autoFocus:!0,children:"Odustani"}),Object(I.jsx)(x.a,{onClick:function(){o(_)},children:"Potvrdi"})]})})]})]})}function Q(){var e,t,n,c,l=Object(s.e)().user,b={date:"",time:"",client:l.data.account.id,barber:null,hair_style:null},j=Object(a.useState)(b),u=Object(r.a)(j,2),x=u[0],h=u[1],m={date:x.date,time:x.time,client:l.data.account.name||"Korisnik",barber:null===(e=x.barber)||void 0===e?void 0:e.name,price:null===(t=x.hair_style)||void 0===t?void 0:t.price,time_needed:null===(n=x.hair_style)||void 0===n?void 0:n.time_needed,services:null===(c=x.hair_style)||void 0===c?void 0:c.name},p=""!==x.date&&""!==x.time&&null!==x.client&&null!==x.barber&&null!==x.hair_style,O=Object(a.useState)(!1),f=Object(r.a)(O,2),v=f[0],g=f[1],y=Object(a.useState)(""),w=Object(r.a)(y,2),C=w[0],k=w[1];var S={form:x,checkout:m,canSubmit:p,loading:v,status:C,setStatus:k,barber:x.barber,serviceSelected:function(e){var t;return(null===(t=x.hair_style)||void 0===t?void 0:t.id)===e},barberSelected:function(e){var t;return(null===(t=x.barber)||void 0===t?void 0:t.id)===e},timeSelected:function(e){return x.time===e},setForm:h,setDate:function(e){h((function(t){return Object(i.a)(Object(i.a)({},t),{},{date:e})}))},setTime:function(e){h((function(t){return Object(i.a)(Object(i.a)({},t),{},{time:e})}))},setService:function(e){h((function(t){return Object(i.a)(Object(i.a)({},t),{},{hair_style:e})}))},setBarber:function(e){h((function(t){return Object(i.a)(Object(i.a)({},t),{},{barber:e})}))},submit:function(e){var t=x.date,n=x.time,i=x.client,r=x.barber,a=x.hair_style,c={start_datetime:"".concat(t," ").concat(n,"+01:00"),client:i,order_items:[{hair_style:a.id,barber:r.id}]};g(!0),d.a.post("".concat(Object(o.a)(),"barber_booking/orders/"),c,{headers:{Authorization:"Token "+l.data.token}}).then((function(t){console.log("Response => ",t),k("success"),e(),g(!1)})).catch((function(e){console.log("Error => ",e),k("error"),g(!1)}))}};return Object(I.jsx)(X.Provider,{value:S,children:Object(I.jsx)(G,{})})}var X=Object(a.createContext)(null);function Z(){return Object(a.useContext)(X)}}}]);
//# sourceMappingURL=19.af59a4e8.chunk.js.map