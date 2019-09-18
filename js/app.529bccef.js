(function(t){function e(e){for(var r,s,l=e[0],i=e[1],c=e[2],p=0,f=[];p<l.length;p++)s=l[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,l=1;l<n.length;l++){var i=n[l];0!==a[i]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vuejs/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=i;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},3078:function(t,e,n){"use strict";var r=n("5fbd"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("b-navbar",{staticClass:"fixed-top",attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[n("b-navbar-brand",[n("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),n("b-navbar-nav",[n("b-nav-item-dropdown",{attrs:{text:"My project",right:""}},[n("b-dropdown-item",[n("router-link",{attrs:{to:"/ToDo"}},[t._v("To-do list")])],1)],1),n("b-nav-item",{attrs:{href:"#",disabled:""}},[t._v("Disabled")])],1)],1),n("router-view")],1)},o=[],s={name:"app"},l=s,i=(n("034f"),n("2877")),c=Object(i["a"])(l,a,o,!1,null,null,null),u=c.exports,p=n("8c4f"),f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",[t._v("Home")])])}],b={name:"Home"},m=b,v=Object(i["a"])(m,f,d,!1,null,"73167d84",null),h=v.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("b-row",{attrs:{"align-h":"center"}},[n("b-col",{attrs:{cols:"6"}},[n("h1",[t._v("My TODO list")])])],1),n("b-row",{attrs:{"align-h":"center"}},[n("b-col",{attrs:{cols:"6"}},[n("b-input-group",[n("b-form-input",{attrs:{placeholder:"What needs to be done?"},model:{value:t.newTask,callback:function(e){t.newTask=e},expression:"newTask"}}),n("b-input-group-append",[n("b-btn",{attrs:{variant:"primary"},on:{click:t.addTask}},[t._v("Add")])],1)],1)],1)],1),n("br"),n("b-row",{attrs:{"align-h":"center"}},[n("b-col",{attrs:{cols:"6"}},[n("transition-group",{attrs:{name:"list-complete",tag:"b-list-group"}},t._l(t.tasks,(function(e,r){return n("TaskItem",{key:e,staticClass:"list-complete-item",attrs:{task:e},on:{remove:function(e){return t.removeTask(r)}}})})),1)],1)],1)],1)},g=[],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-list-group-item",[n("b-row",{attrs:{"align-v":"center"}},[n("b-col",[n("b-form-checkbox",{staticClass:"float-left",model:{value:t.task.completed,callback:function(e){t.$set(t.task,"completed",e)},expression:"task.completed"}},[t._v(" "+t._s(t.task.title))])],1),n("b-col",[n("b-btn",{staticClass:"float-right",attrs:{variant:"danger"},on:{click:t.removeTask}},[n("icon",{attrs:{name:"times"}})],1)],1)],1)],1)},T=[],_={name:"TaskItem",props:["task"],methods:{removeTask:function(){this.$emit("remove")}}},y=_,O=Object(i["a"])(y,w,T,!1,null,"c2255d66",null),j=O.exports,x={name:"TaskList",components:{TaskItem:j},data:function(){return{tasks:[{title:"TO",completed:!0},{title:"DO",completed:!0},{title:"LIST",completed:!0}],newTask:""}},methods:{addTask:function(){this.newTask&&(this.tasks.push({title:this.newTask,completed:!1}),this.newTask="")},removeTask:function(t){this.tasks.splice(t,1)}}},$=x,P=(n("3078"),Object(i["a"])($,k,g,!1,null,"ff2a45b6",null)),M=P.exports,S=[{path:"/",component:h},{path:"/ToDo",component:M}],C=S,D=n("0874"),E=(n("d06d"),n("5f5b"));n("f9e3"),n("2dd8");r["default"].use(E["a"]),r["default"].component("icon",D["a"]),r["default"].config.productionTip=!1,r["default"].use(p["a"]);var I=new p["a"]({routes:C});new r["default"]({router:I,render:function(t){return t(u)}}).$mount("#app")},"5fbd":function(t,e,n){},"64a9":function(t,e,n){}});
//# sourceMappingURL=app.529bccef.js.map