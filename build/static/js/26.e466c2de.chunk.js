(this["webpackJsonprwa-projekt"]=this["webpackJsonprwa-projekt"]||[]).push([[26],{570:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return p}));i(0);var a=i(19),r=i(386),n=i(420),c=i(147),s=i(414),d=i(483),o=i(417),l=i(442),h=i(23),j=i(1);function p(){var e=Object(a.f)(),t={status:"",data:[]};return Object(j.jsxs)(r.a,{direction:"column",spacing:8,sx:{width:"100%"},children:[Object(j.jsx)(r.a,{direction:"column",alignItems:"flex-start",justifyContent:"flex-start",spacing:2,children:Object(j.jsxs)(r.a,{direction:"row",spacing:4,children:[Object(j.jsxs)(r.a,{direction:"column",justifyContent:"space-between",sx:{width:320,height:260,p:4,bgcolor:"grey.200",borderRadius:4},children:[Object(j.jsxs)(n.a,{children:[Object(j.jsx)(n.a,{sx:{bgcolor:"primary.main",width:40,height:40,display:"grid",placeItems:"center",borderRadius:2,mb:2},children:Object(j.jsx)(h.t,{size:"1.5em",color:"#fff"})}),Object(j.jsxs)(c.a,{variant:"h6",sx:{opacity:.75},children:["Korisnici (","loading"===t.status?"...":t.data.length,")"]})]}),Object(j.jsx)(c.a,{variant:"subtitle2",sx:{opacity:.75},children:"Broj korisnika koji upravljaju ovom aplikacijom"})]}),Object(j.jsx)(s.a,{variant:"outlined",onClick:function(){e("add",{state:{update:!1}})},sx:{width:320,height:260,p:4,border:"2px dashed",borderColor:"grey.200",borderRadius:4,display:"grid",placeItems:"center"},children:Object(j.jsx)(h.r,{size:"3em"})})]})}),Object(j.jsxs)(r.a,{direction:"column",spacing:4,children:[Object(j.jsx)(c.a,{variant:"h6",children:"Dodani korisnici"}),"loading"===t.status?Object(j.jsx)(d.a,{}):t.data.length?Object(j.jsx)("div",{style:{height:"calc(".concat(t.data.length+2," * 52px + 8px)"),width:"100%"},children:Object(j.jsx)(l.a,{rows:t.data,columns:u,pageSize:9,rowsPerPageOptions:[9],disableSelectionOnClick:!0,onRowClick:function(t){return function(t){e("/admin/workers/".concat(t.id),{state:{update:!0}})}(t)}})}):Object(j.jsx)(c.a,{variant:"subtitle2",sx:{fontWeight:300},children:"Trenutno nema dodanih korisnika"})]})]})}var u=[{field:"id",headerName:"ID",width:80},{field:"avatar",headerName:"Photo",width:100,renderCell:function(e){return Object(j.jsx)(o.a,{src:e.row.avatar,sx:{width:"36px !important",height:"36px !important"}})}},{field:"price",headerName:"Cijena",width:160},{field:"time_needed",headerName:"Vrijeme potrebno",width:160},{field:"name",headerName:"Ime",minWidth:120,flex:1}]}}]);
//# sourceMappingURL=26.e466c2de.chunk.js.map