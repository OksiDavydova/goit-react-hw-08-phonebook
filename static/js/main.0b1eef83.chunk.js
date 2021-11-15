(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{13:function(e,t,n){e.exports={filter_overlay:"Filter_filter_overlay__2P3a8",filter_label:"Filter_filter_label__2nMPP",filter_input:"Filter_filter_input__3YrMX"}},21:function(e,t,n){e.exports={container:"Container_container__oynRB"}},22:function(e,t,n){e.exports={hero_title:"Title_hero_title__13lVf"}},23:function(e,t,n){e.exports={section_title:"SectionTitle_section_title__1Mav2"}},25:function(e,t,n){e.exports={message_notification:"Notification_message_notification__24rJ5"}},32:function(e,t,n){},33:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),i=n.n(r),s=(n(32),n(33),n(21)),o=n.n(s),l=n(1);function b(e){var t=e.children;return Object(l.jsx)("div",{className:o.a.container,children:t})}var u=n(22),j=n.n(u);function m(e){var t=e.title;return Object(l.jsx)("h1",{className:j.a.hero_title,children:t})}m.defaultProps={title:"Phonebook"};var _=n(23),d=n.n(_);function f(e){var t=e.sectionTitle;return Object(l.jsx)("h2",{className:d.a.section_title,children:t})}f.defaultProps={title:"Contacts"};var O=n(19),h=n(12),p=n.n(h),x=n(6),v=n.n(x),C=n(3),g=n(4),N=Object(g.b)("ADD/contact"),y=Object(g.b)("DELETE/contact"),F=Object(g.b)("FILTER_CHANGE/contact"),k=function(e){return e.items},w=function(e){return e.filter},L=function(e){var t=k(e),n=w(e).toLowerCase();return w?t.filter((function(e){return e.name.toLowerCase().includes(n)})):t};var A=function(){var e=Object(C.c)(k),t=Object(C.b)(),n=Object(a.useState)(""),c=Object(O.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)(""),o=Object(O.a)(s,2),b=o[0],u=o[1],j=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":i(a);break;case"number":u(a)}},m=function(){i(""),u("")},_=p.a.generate(),d=p.a.generate();return Object(l.jsx)("div",{className:v.a.form_overlay,children:Object(l.jsxs)("form",{onSubmit:function(n){n.preventDefault();var a={id:p.a.generate(),name:r,number:b},c=r.toLowerCase();e.find((function(e){return e.name.toLowerCase()===c}))?alert("".concat(r," is already in contacts list")):e.find((function(e){return e.number===b}))?alert("".concat(b," is already in contacts list")):(t(N(a)),m())},className:v.a.form,children:[Object(l.jsxs)("label",{htmlFor:_,className:v.a.label,children:["Name:",Object(l.jsx)("input",{type:"text",className:v.a.input,onChange:j,value:r,name:"name",id:_,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(l.jsxs)("label",{htmlFor:d,className:v.a.label,children:["Number:",Object(l.jsx)("input",{type:"tel",className:v.a.input,onChange:j,value:b,name:"number",id:d,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{type:"submit",className:v.a.btn_submit,children:"Add contact"})]})})},T=n(8),P=n.n(T),E=n(18),M=n(16),S=n.n(M),z=n(25),D=n.n(z);function q(e){var t=e.message;return Object(l.jsx)("p",{className:D.a.message_notification,children:t})}function B(){var e=Object(C.c)(L),t=Object(C.b)();return Object(l.jsx)(l.Fragment,{children:e.length>0?Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("ul",{className:P.a.contacts_list,children:e.map((function(e){var n=e.id,a=e.name,c=e.number;return Object(l.jsxs)("li",{className:P.a.list_item,children:[Object(l.jsx)("p",{children:a}),Object(l.jsxs)("a",{href:"tel:{number}",className:P.a.link_to_call,children:[Object(l.jsx)(E.a,{}),c]}),Object(l.jsxs)("button",{type:"button",className:P.a.btn_delete,onClick:function(){return t(y(n))},children:["Delete ",Object(l.jsx)(E.b,{})]})]},n)}))})}):Object(l.jsx)(q,{})})}q.defaultProps={message:"No contacts "},q.propType={message:S.a.string.isRequired};var J=n(13),R=n.n(J);function H(){var e=Object(C.c)(w),t=Object(C.b)();return Object(l.jsx)("div",{className:R.a.filter_overlay,children:Object(l.jsxs)("label",{className:R.a.filter_label,children:["Find contacts by name:",Object(l.jsx)("input",{type:"text",value:e,onChange:function(e){var n=e.target;return t(F(n.value.trim()))},className:R.a.filter_input})]})})}var Z,I=function(){return Object(l.jsxs)(b,{children:[Object(l.jsx)(m,{title:"Phonebook"}),Object(l.jsx)(A,{}),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(f,{sectionTitle:"Contacts"}),Object(l.jsx)(H,{}),Object(l.jsx)(B,{})]})]})},G=n(5),K=n(26),U=n.n(K),V=n(14),X=n(20),Y=n(2),$=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],Q={items:Object(X.a)($),filter:""},W=Object(g.c)(Q.items,(Z={},Object(V.a)(Z,N,(function(e,t){var n=t.payload;return[].concat(Object(X.a)(e),[n])})),Object(V.a)(Z,y,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),Z)),ee=Object(g.c)(Q.filter,Object(V.a)({},F,(function(e,t){return t.payload}))),te=Object(Y.b)({items:W,filter:ee}),ne={key:"contacts/items",storage:U.a,blacklist:["filter"]},ae=Object(G.g)(ne,te),ce=Object(g.a)({reducer:ae,devTools:!1,middleware:function(e){return e({serializableCheck:{ignoredActions:[G.a,G.f,G.b,G.c,G.d,G.e]}})}}),re=Object(G.h)(ce),ie=n(27);i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(C.a,{store:ce,children:Object(l.jsx)(ie.a,{loading:null,persistor:re,children:Object(l.jsx)(I,{})})})}),document.getElementById("root"))},6:function(e,t,n){e.exports={form_overlay:"ContactForm_form_overlay__3cTwS",form:"ContactForm_form__2w2h4",input:"ContactForm_input__1fxqH",label:"ContactForm_label__245MF",btn_submit:"ContactForm_btn_submit__nz6t1"}},8:function(e,t,n){e.exports={btn_delete:"ContactList_btn_delete__3M620",contacts_list:"ContactList_contacts_list__3C491",list_item:"ContactList_list_item__1UBri",link_to_call:"ContactList_link_to_call__2FLCT"}}},[[50,1,2]]]);
//# sourceMappingURL=main.0b1eef83.chunk.js.map