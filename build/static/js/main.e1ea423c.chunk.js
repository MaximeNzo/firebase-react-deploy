(this["webpackJsonpfirebase-connection"]=this["webpackJsonpfirebase-connection"]||[]).push([[0],{59:function(e,t,a){},60:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(10),r=a.n(s),c=(a(59),a(43)),o=a(44),u=a(45),d=a(49),b=a(48),p=(a(60),a(35)),l=(a(61),a(73),a(46));a.n(l).a.config({silent:!0}),p.a.initializeApp({apiKey:"AIzaSyBB6SeLk8rz4_qBd9OAI8Tp8oTgaiJz9Ds",authDomain:"kpi-managment.firebaseapp.com",databaseURL:"https://kpi-managment-default-rtdb.europe-west1.firebasedatabase.app",projectId:"kpi-managment",storageBucket:"kpi-managment.appspot.com",messagingSenderId:"680664081780",appId:"1:680664081780:web:efa5b0b3b1b30f57c27821",measurementId:"G-T5YR70S5CX"});p.a;var m=p.a.firestore(),j=a(103),g=a(107),h=a(108),f=a(15),k=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={task:"",user:""},e.updateInput=function(t){e.setState(Object(c.a)({},t.target.name,t.target.value))},e.addTask=function(t){t.preventDefault(),m.collection("test").add({task:e.state.task,user:e.state.user}),e.setState({task:"",user:""})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.task,a=e.user;return Object(f.jsx)(j.a,{maxWidth:"sm",marginTop:"auto",marginBottom:"auto",children:Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)("form",{onSubmit:this.addTask,children:[Object(f.jsx)("div",{style:{margin:"1rem"},children:Object(f.jsx)(g.a,{id:"outlined-basic",label:"Task",variant:"outlined",name:"task",onChange:this.updateInput,value:t})}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{style:{margin:"1rem"},children:Object(f.jsx)(g.a,{id:"outlined-basic",label:"User",variant:"outlined",name:"user",onChange:this.updateInput,value:a})}),Object(f.jsx)("br",{}),Object(f.jsx)(h.a,{variant:"contained",color:"primary",type:"submit",children:"Submit"})]})})})}}]),a}(i.a.Component),v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,110)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),s(e),r(e)}))};r.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root")),v()}},[[72,1,2]]]);
//# sourceMappingURL=main.e1ea423c.chunk.js.map