"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[161],{8161:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(9439),a=n(4554),o=n(346),i=n(6151),c=n(2791),s=n(9434),l=n(1513),d={selectLoading:function(e){return e.contacts.loading},selectFilter:function(e){return e.contacts.filter},selectAllContacts:function(e){return e.contacts.items},selectStatusFilter:function(e){return e.filter}},u=n(5206),x=n(184),p=function(){var e=(0,s.I0)(),t=(0,c.useState)(""),n=(0,r.Z)(t,2),p=n[0],h=n[1],f=(0,c.useState)(""),m=(0,r.Z)(f,2),b=m[0],v=m[1],g=(0,s.v9)(d.selectAllContacts),j=function(e){var t=e.target,n=t.name,r=t.value;"name"===n&&h(r),"number"===n&&v(r)};return(0,x.jsxs)(a.Z,{component:"form",onSubmit:function(t){if(t.preventDefault(),g.find((function(e){return e.name.toLowerCase()===p.toLowerCase()||e.number===b})))return u.Am.info("".concat(p," or phone:").concat(b," is alredy in contact"),{autoClose:3e3});e((0,l.uK)({name:p,number:b})),u.Am.success("Contact ".concat(p," created!")),h(""),v("")},autoComplete:"off",sx:{maxWidth:"260px",margin:"auto",padding:"16px",border:"1px solid #2a2a2a",borderRadius:"4px","&:hover":{boxShadow:"-1px 15px 30px -12px black"}},children:[(0,x.jsx)(o.Z,{margin:"none",fullWidth:!0,required:!0,label:"Name",variant:"outlined",type:"text",name:"name",value:p,onChange:j,inputProps:{pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"},helperText:"Jacob Mercer"}),(0,x.jsx)(o.Z,{margin:"normal",fullWidth:!0,required:!0,label:"Number",variant:"outlined",type:"tel",name:"number",value:b,onChange:j,inputProps:{pattern:"[+][0-9]{3}-[0-9]{3}-[0-9]{4}"},helperText:"+123-456-7890"}),(0,x.jsx)(i.Z,{type:"submit",variant:"contained",sx:{width:80,color:"white",background:"#3f51b5",fontWeight:600,"&:hover":{backgroundColor:"#303f9f"}},children:"add"})]})},h=n(1413),f=n(890),m=n(7247),b=n(501),v=n(2716),g=function(e){var t=e.number,n=e.name,r=e.id,o=(0,s.v9)(d.selectLoading),c=(0,s.I0)();return(0,x.jsxs)(a.Z,{component:"li",sx:{display:"inline",marginBottom:"5px",padding:"8px 12px",border:"1px solid rgba(33, 33, 33, 0.2)",borderRadius:"4px","&:hover":{boxShadow:"-1px 15px 30px -12px black"}},children:[(0,x.jsxs)(f.Z,{sx:{display:"flex",textAlign:"start",fontWeight:"bold"},children:[(0,x.jsx)(b.Z,{}),n+":"]}),(0,x.jsxs)(a.Z,{component:"div",sx:{display:"flex",alignItems:"center",justifyContent:"space-between",fontWeight:"bold"},children:[(0,x.jsxs)(f.Z,{children:[(0,x.jsx)(v.Z,{}),t]}),(0,x.jsx)(i.Z,{type:"button",onClick:function(){c((0,l.GK)(r)),u.Am.success("Contact deleted!")},disabled:o,sx:{padding:0,minWidth:"24px"},children:o?(0,x.jsx)(m.Z,{sx:{color:"#3f51b5",background:"white","&:hover":{color:"white",background:"#303f9f",borderRadius:50}}}):(0,x.jsx)(m.Z,{sx:{color:"#303f9f",background:"white",borderRadius:50}})})]})]})},j=function(){var e=(0,s.v9)(d.selectAllContacts),t=(0,s.v9)(d.selectStatusFilter),n=function(){var n=t.toLowerCase().trim();return n?e.filter((function(e){return e.name.toLowerCase().includes(n)})):e};return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(a.Z,{component:"ul",maxWidth:"xs",sx:{display:"flex",flexDirection:"column",maxWidth:"260px",margin:"auto",marginBottom:"20px",padding:"16px",border:"1px solid #2a2a2a",borderRadius:"4px"},children:0===n().length?(0,x.jsx)("p",{children:"Yoy don't have any contact"}):n().map((function(e){return(0,x.jsx)(g,(0,h.Z)({},e),e.id)}))})})},Z=n(7491),C=function(){var e=(0,s.v9)(d.selectStatusFilter),t=(0,s.I0)();return(0,x.jsx)(a.Z,{sx:{maxWidth:"260px",margin:"auto",padding:"12px"},children:(0,x.jsx)(o.Z,{margin:"none",label:"Find contacts by name",variant:"outlined",type:"text",value:e,onChange:function(e){return t((0,Z.z)(e.target.value))}})})},w=n(266),k=function(e){var t=e.title,n=e.children;return(0,x.jsxs)(w.Z,{maxWidth:"xs",sx:{marginTop:6,textAlign:"center",minWidth:280,border:"1px solid grey",borderRadius:"25px",background:"white",boxShadow:"-1px 15px 30px -12px black",zIndex:9999},children:[t&&(0,x.jsx)(f.Z,{sx:{fontWeight:700,padding:"20px",textTransform:"uppercase",fontSize:24,color:"#5c6368"},children:t}),n]})},y=function(){var e=(0,s.I0)();return(0,c.useEffect)((function(){e((0,l.yF)())}),[e]),(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(k,{title:"Phonebook",children:[(0,x.jsx)(p,{}),(0,x.jsx)(C,{}),(0,x.jsx)(j,{})]})})}},7247:function(e,t,n){var r=n(4836);t.Z=void 0;var a=r(n(5649)),o=n(184),i=(0,a.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=i},501:function(e,t,n){var r=n(4836);t.Z=void 0;var a=r(n(5649)),o=n(184),i=(0,a.default)((0,o.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");t.Z=i},2716:function(e,t,n){var r=n(4836);t.Z=void 0;var a=r(n(5649)),o=n(184),i=(0,a.default)((0,o.jsx)("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"}),"Phone");t.Z=i}}]);
//# sourceMappingURL=161.a3ba5ee6.chunk.js.map