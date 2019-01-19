(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(27)},17:function(e,t,a){},19:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),o=a.n(l),i=(a(17),a(2)),c=a(3),s=a(6),m=a(4),u=a(5),d=(a(19),a(10)),h=a.n(d),v=(a(25),a(11)),p=a(1),b=function(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-input",id:e.name,name:e.name,type:e.type,value:e.value,onChange:e.handleChange,placeholder:e.placeholder}))},g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={value:"",textareaValue:"",name:"",email:"",textarea:""},a.handleChange=a.handleChange.bind(Object(p.a)(Object(p.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){var t=e.target.name;this.setState(Object(v.a)({},t,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t={name:this.state.name,phone:this.state.email,address:this.state.textarea};fetch("/submitform",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},mode:"cors",body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"divForm"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h4",null,"CONTACT"),r.a.createElement(b,{type:"text",title:"Name",name:"name",value:this.state.name,placeholder:"Name",handleChange:this.handleChange}),r.a.createElement(b,{type:"email",title:"email",name:"email",value:this.state.email,placeholder:"Email",handleChange:this.handleChange}),r.a.createElement("textarea",{title:"textarea",name:"textarea",value:this.state.textarea,placeholder:" Message",onChange:this.handleChange,rows:"6"},"  "),r.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(r.a.Component),E=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={projects:[{id:"1",title:"Mums Organiser",description:"A website designed for young mums",img:"mumsorganiser",hover:!1,tools:{Frontend:"vue.js",Backend:"node.js",Database:"firebase"}},{id:"2",title:"Some Brand",description:"A website blabla bla",hover:!1,tools:{Frontend:"angular.js",Backend:"php",Database:"mysql"}}]},e.handleMouseEnter=e.handleMouseEnter.bind(Object(p.a)(Object(p.a)(e))),e.handleMouseLeave=e.handleMouseLeave.bind(Object(p.a)(Object(p.a)(e))),e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleMouseEnter",value:function(e){e.persist(),console.log("mouse over",e,e.target),this.setState(function(t){return t.projects.map(function(t){return console.log(t.id,e.target.id),t.id===e.target.id&&(t.hover=!0),t})})}},{key:"handleMouseLeave",value:function(e){e.persist(),console.log("mouse leave",e,e.target),this.setState(function(t){return t.projects.map(function(t){return console.log(t.id,e.target.id),t.id===e.target.id&&(t.hover=!1),t})})}},{key:"content",value:function(e){if(!e.hover)return r.a.createElement("div",null,r.a.createElement("img",{src:"/"+e.img+".jpg",id:e.id,alt:e.img}),r.a.createElement("h5",null,e.title),r.a.createElement("p",null,e.description));if(e.hover){var t=Object.keys(e.tools).map(function(t){return r.a.createElement("div",{className:"hoveredCardDiv"},r.a.createElement("p",null,t)," ",e.tools[t]," ")});return t.unshift(r.a.createElement("h3",null,"TECHNOLOGIES USED")),t}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"cards"},this.state.projects.map(function(t){return r.a.createElement("div",{className:t.hover?"hoveredCard card":"card",id:t.id,key:t.id,onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave},e.content(t))}))}}]),t}(r.a.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:""},r.a.createElement("div",{id:"mycontainer",className:"mycontainer"},r.a.createElement("div",{className:"row"},r.a.createElement("h1",null,"My name is Olga Kokhanova, I'm a web developer based in St.Petersburg, Russia.")),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"none"},r.a.createElement("polygon",{fill:"white",points:"0,100 100,0 100,100"})),r.a.createElement("div",{className:"btn"},r.a.createElement("a",{href:"#container2"},"Learn more"))),r.a.createElement("div",{className:"mycontainer",id:"container2"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"block"}," ",r.a.createElement("h2",null,"MY PROJECTS")),r.a.createElement(h.a,{animateIn:"fadeInUp",animateOnce:!0},r.a.createElement(E,null)))),r.a.createElement("div",{className:"mycontainer",id:"container3"},r.a.createElement(g,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,2,1]]]);
//# sourceMappingURL=main.1c256bc7.chunk.js.map