(this["webpackJsonpmy-social-network"]=this["webpackJsonpmy-social-network"]||[]).push([[4],{294:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__3Lv2g",dialogsItems:"Dialogs_dialogsItems__10Yma",active:"Dialogs_active__3iX4t",dialog:"Dialogs_dialog__15gyS",messages:"Dialogs_messages__15pYv",message:"Dialogs_message__1E_Cd"}},299:function(e,a,t){"use strict";t.r(a);var s=t(126),n=t(0),i=t.n(n),o=t(294),c=t.n(o),l=t(18),m=function(e){return i.a.createElement("div",{className:c.a.dialog+" "+c.a.active},i.a.createElement(l.b,{to:"/dialogs/"+e.id},e.name))},r=function(e){return i.a.createElement("div",{className:c.a.message},e.message)},g=t(91),d=t(127),u=t(34),_=t(12),b=Object(u.a)(50),f=Object(d.a)({form:"dialogAddMessageForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement(g.a,{component:_.b,name:"newMessageText",placeholder:"Enter your message",validate:[u.c,b]}),i.a.createElement("button",null,"add message"))})),E=t(8),v=t(10),p=t(55),h=t(5),j=["isAuth"],O=function(e){return{isAuth:e.auth.isAuth}};var k;a.default=Object(v.d)(Object(E.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{onSendMessage:function(a){e(Object(s.a)(a))}}})))((k=function(e){var a=e.dialogsPage.dialogs.map((function(e){return i.a.createElement(m,{key:e.id,name:e.name,id:e.id})})),t=e.dialogsPage.messages.map((function(e){return i.a.createElement(r,{key:e.id,message:e.message,id:e.id})}));return i.a.createElement("div",{className:c.a.dialogs},i.a.createElement("div",{className:c.a.dialogsItems},a),i.a.createElement("div",{className:c.a.messages},t),i.a.createElement(f,{onSubmit:function(a){e.onSendMessage(a.newMessageText)}}))},Object(E.b)(O)((function(e){var a=e.isAuth,t=Object(p.a)(e,j);return a?i.a.createElement(k,t):i.a.createElement(h.a,{to:"/login"})}))))}}]);
//# sourceMappingURL=4.65677855.chunk.js.map