(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{29:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(14),i=n.n(c),o=n(5),s=(n(29),n(11)),u=n.n(s),d=n(1),l={setFilter:Object(d.createAction)("contacts/setFilter")},j=n(2);var b=Object(o.c)((function(e){return{filter:e.filter}}),(function(e){return{setFilter:function(t){return e(l.setFilter(t))}}}))((function(e){var t=e.filter,n=e.setFilter,r=u.a.generate();return Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:r,children:"Find contacts by name"}),Object(j.jsx)("input",{id:r,type:"text",name:"filter",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Casnumbermore d'Artagnan \u0438 \u0442. \u043f.",onChange:function(e){return n(e.currentTarget.value)}})]})})),h=n(10),p=n(9),O=n.n(p),f=n(18),m=n(7),x=Object(f.a)({reducerPath:"contactsApi",baseQuery:Object(m.d)({baseUrl:"https://619294dfd3ae6d0017da81e7.mockapi.io/api/v1"}),tagTypes:["Contacts"],endpoints:function(e){return{getContacts:e.query({query:function(){return"/contacts"},providesTags:["Contacts"]}),addContact:e.mutation({query:function(e){return{url:"/contacts",method:"POST",body:{name:e.name,phone:e.phone}}},invalidatesTags:["Contacts"]}),deleteContact:e.mutation({query:function(e){return{url:"/contacts/".concat(e),method:"DELETE"}},invalidatesTags:["Contacts"]})}}}),g=x.useGetContactsQuery,v=x.useAddContactMutation,C=x.useDeleteContactMutation;var F=function(){var e=Object(r.useState)(""),t=Object(h.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),i=Object(h.a)(c,2),o=i[0],s=i[1],d=Object(r.useRef)(u.a.generate()),l=Object(r.useRef)(u.a.generate()),b=v(),p=Object(h.a)(b,2),f=p[0],m=p[1].isLoading;return Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f({name:n,phone:o}),a(""),s("")},children:[Object(j.jsxs)("div",{className:"input-wrapper",children:[Object(j.jsx)("label",{htmlFor:d,children:"Name"}),Object(j.jsx)("input",{id:d,type:"text",name:"name",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Casnumbermore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:function(e){a(e.currentTarget.value)}})]}),Object(j.jsxs)("div",{className:"input-wrapper",children:[" ",Object(j.jsx)("label",{htmlFor:l,children:"Number"}),Object(j.jsx)("input",{id:l,type:"tel",name:"number",value:o,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:function(e){s(e.currentTarget.value)}})]}),Object(j.jsx)("button",{type:"submit",disabled:m,children:m?Object(j.jsx)(O.a,{type:"TailSpin",color:"#00BFFF",height:20,width:85}):"Add contact"})]})};function y(e){var t=e.el,n=C(),r=Object(h.a)(n,2),a=r[0],c=r[1].isLoading;return Object(j.jsxs)("p",{children:[t.name,": ",t.phone,Object(j.jsx)("button",{type:"button","data-id":t.id,onClick:function(){a(t.id)},disabled:c,children:c?Object(j.jsx)(O.a,{type:"TailSpin",color:"#00BFFF",height:15,width:45}):"Delete"})]})}var A=Object(o.c)((function(e){return{filter:e.filter}}),(function(e){return{setFilter:function(t){return e(l.setFilter(t))}}}))((function(e){var t=e.filter,n=g(),r=n.data,a=n.isLoading;return Object(j.jsxs)("div",{children:[a&&Object(j.jsx)(O.a,{type:"TailSpin",color:"#00BFFF",height:100,width:100}),r&&r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return Object(j.jsx)(y,{el:e},e.id)}))]})}));var w,T=function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(F,{}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(b,{}),Object(j.jsx)(A,{})]})},S=n(12),z=Object(d.createReducer)("",Object(S.a)({},l.setFilter,(function(e,t){return t.payload}))),k=n(19),L=Object(d.configureStore)({reducer:(w={},Object(S.a)(w,x.reducerPath,x.reducer),Object(S.a)(w,"filter",z),w),middleware:function(e){return e().concat(x.middleware)}});Object(k.setupListeners)(L.dispatch),i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(o.a,{store:L,children:Object(j.jsx)(T,{})})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.44f010b8.chunk.js.map