(this["webpackJsonpcrud-simple-udemy"]=this["webpackJsonpcrud-simple-udemy"]||[]).push([[0],{14:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(7),s=n.n(r),i=(n(14),n(9)),l=n(2),o=n(8),b=n.n(o),u=n(0);var d=function(){var e=c.a.useState(),t=Object(l.a)(e,2),n=t[0],a=t[1],r=c.a.useState([]),s=Object(l.a)(r,2),o=s[0],d=s[1],j=c.a.useState(!1),m=Object(l.a)(j,2),h=m[0],O=m[1],x=c.a.useState(""),g=Object(l.a)(x,2),f=g[0],p=g[1],v=c.a.useState(null),N=Object(l.a)(v,2),E=N[0],S=N[1];return Object(u.jsxs)("div",{className:"container mt-5",children:[Object(u.jsx)("h1",{className:"text-center",children:"CRUD Simple"}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"col-8",children:[Object(u.jsx)("h4",{className:"text-center",children:"Lista de tareas"}),Object(u.jsx)("ul",{className:"list-group",children:0===o.length?Object(u.jsx)("li",{className:"list-group-item",children:"NO HAY TAREAS"}):o.map((function(e){return Object(u.jsxs)("li",{className:"list-group-item",children:[Object(u.jsx)("span",{className:"lead",children:e.nombreTarea}),Object(u.jsx)("button",{className:"btn btn-danger btn-sm float-rigth mx-2",onClick:function(){return function(e){var t=o.filter((function(t){return t.id!==e}));d(t)}(e.id)},children:"Eliminar"}),Object(u.jsx)("button",{className:"btn btn-warning btn-sm float-rigth",onClick:function(){return function(e){console.log(e),O(!0),a(e.nombreTarea),p(e.id)}(e)},children:"Editar"})]},e.id)}))})]}),Object(u.jsxs)("div",{className:"col-4",children:[Object(u.jsx)("h4",{className:"text-center",children:h?"Editar tarea":"Agregar tarea"}),Object(u.jsxs)("form",{onSubmit:h?function(e){if(e.preventDefault(),!n.trim())return console.log("Elemento vacio"),void S("Escriba algo por favor");var t=o.map((function(e){return e.id===f?{id:f,nombreTarea:n}:e}));d(t),O(!1),a(""),p(""),S(null)}:function(e){if(e.preventDefault(),!n.trim())return console.log("Elemento vacio"),void S("Escriba algo por favor");console.log(n),d([].concat(Object(i.a)(o),[{id:b.a.generate(),nombreTarea:n}])),a(""),S(null)},children:[E?Object(u.jsx)("span",{className:"text-danger",children:E}):null,Object(u.jsx)("input",{type:"text",className:"form-control mb-2",placeholder:"Ingrese tarea",onChange:function(e){return a(e.target.value)},value:n}),h?Object(u.jsx)("button",{className:"btn btn-warning btn-block",type:"submit",children:"Editar"}):Object(u.jsx)("button",{className:"btn btn-dark btn-block",type:"submit",children:"Agregar"})]})]})]})]})};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.cbe1c18c.chunk.js.map