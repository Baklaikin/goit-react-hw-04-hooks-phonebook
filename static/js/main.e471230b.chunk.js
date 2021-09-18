(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,function(e,t,n){e.exports={form:"PhoneForm_form__2Wh2K",formInput:"PhoneForm_formInput__15A0j",formLabel:"PhoneForm_formLabel__3oB3w",addToContacts:"PhoneForm_addToContacts__3j8A_"}},,,,function(e,t,n){e.exports={list:"ContactList_list__3W076",item:"ContactList_item__3vwxu",deleteBtn:"ContactList_deleteBtn__3guxW"}},,function(e,t,n){e.exports={findForm:"FilterContacts_findForm__35k-H",findFormLabel:"FilterContacts_findFormLabel__2rKx6"}},,,function(e,t,n){e.exports={container:"MainContainer_container__1yEVa"}},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(10),o=n.n(c),i=(n(16),n(9)),s=n(3),u=n(2),m=n.n(u),l=n(0);var b=function(e){var t=e.onSubmit,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],o=r[1],i=Object(a.useState)(""),u=Object(s.a)(i,2),b=u[0],d=u[1],f=function(e){var t=e.currentTarget.value;switch(e.currentTarget.name){case"name":o(t);break;case"number":d(t);break;default:return}},j=function(){o(""),d("")};return Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({name:c,number:b}),j()},className:m.a.form,children:[Object(l.jsxs)("label",{className:m.a.formLabel,children:["Name",Object(l.jsx)("input",{className:m.a.formInput,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:c,onChange:f})]}),Object(l.jsxs)("label",{className:m.a.formLabel,children:["Number",Object(l.jsx)("input",{className:m.a.formInput,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:b,onChange:f})]}),Object(l.jsx)("button",{className:m.a.addToContacts,type:"submit",children:"Add to contacts"})]})},d=n(8),f=n.n(d);var j=function(e){var t=e.onSubmit,n=e.value;return Object(l.jsx)("form",{className:f.a.findForm,children:Object(l.jsxs)("label",{className:f.a.findFormLabel,children:["Find contacts by name",Object(l.jsx)("input",{type:"text",name:"filter",value:n,onChange:t})]})})},h=n(6),O=n.n(h),x=function(e){var t=e.contacts,n=e.filter,a=e.onDeleteItem,r=t.filter((function(e){return e.name.toLowerCase().trim().includes(n.toLowerCase().trim())}));return Object(l.jsx)("ul",{className:O.a.list,children:r.map((function(e){var t=e.id,n=e.name,r=e.number;return Object(l.jsxs)("li",{className:O.a.item,children:[n,": ",r,Object(l.jsx)("button",{className:O.a.deleteBtn,type:"button",name:"delete",onClick:function(){return a(t)},children:"Delete"})]},t)}))})},_=n(11),p=n.n(_);var v=function(e){var t=e.children;return Object(l.jsx)("div",{className:p.a.container,children:t})},C=n(21);n(18);var g=function(){var e=Object(a.useState)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),o=Object(s.a)(c,2),u=o[0],m=o[1];return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("contacts"));null!==e&&r((function(t){return Object(i.a)(e)}))}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(v,{children:[Object(l.jsx)("h1",{children:"Phonebook"}),Object(l.jsx)(b,{onSubmit:function(e){n.find((function(t){return t.name.toLowerCase().trim()===e.name.toLowerCase().trim()}))?alert("".concat(e.name," is already in contacts")):r((function(t){var a={id:Object(C.a)(),name:e.name,number:e.number};return[].concat(Object(i.a)(n),[a])}))}}),Object(l.jsx)("h2",{children:"Contacts:"}),Object(l.jsx)(j,{value:u,onSubmit:function(e){return m(e.target.value)}}),Object(l.jsx)(x,{contacts:n,filter:u,onDeleteItem:function(e){r((function(){return n.filter((function(t){return t.id!==e}))}))}})]})})};o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.e471230b.chunk.js.map