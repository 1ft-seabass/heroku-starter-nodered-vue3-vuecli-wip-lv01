(function(t){function e(e){for(var r,c,a=e[0],l=e[1],s=e[2],p=0,f=[];p<a.length;p++)c=a[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},i=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={class:"container"};function i(t,e,n,i,c,a){var l=Object(r["g"])("NodeRED");return Object(r["f"])(),Object(r["b"])("div",o,[Object(r["e"])(l)])}var c={class:"row"},a={class:"row"},l={class:"col-sm"},s=Object(r["d"])('<div class="row"><div class="col-sm"><ul class="list-group"><li class="list-group-item">An item</li><li class="list-group-item">A second item</li><li class="list-group-item">A third item</li><li class="list-group-item">A fourth item</li><li class="list-group-item">And a fifth one</li></ul></div></div>',1);function u(t,e,n,o,i,u){return Object(r["f"])(),Object(r["b"])("div",c,[Object(r["c"])("div",a,[Object(r["c"])("div",l,[Object(r["c"])("h1",null,Object(r["h"])(i.infoTitle),1),Object(r["c"])("h3",null,Object(r["h"])(i.timeStamp),1)])]),s])}var p=n("1da1"),f=(n("96cf"),n("bc3a")),d=n.n(f),m={name:"NodeRED",props:{msg:String},data:function(){return{infoTitle:"Node-RED INDEX",timeStamp:0}},methods:{getTimestamp:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(){var e,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="/api1",n="//localhost:18801","localhost:8080"==window.location.host&&(e=n+e),console.log("urlTimeStampAPI ",e),t.next=6,d.a.get(e);case 6:r=t.sent,console.log(r),this.timeStamp=r.data.timestamp;case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){this.getTimestamp()}};m.render=u;var b=m,h={name:"App",components:{NodeRED:b}};n("57f0");h.render=i;var v=h;n("7b17"),n("f9e3");Object(r["a"])(v).mount("#app")},"57f0":function(t,e,n){"use strict";n("ad12")},ad12:function(t,e,n){}});
//# sourceMappingURL=app.c5cd8048.js.map