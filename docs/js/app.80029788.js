(function(t){function e(e){for(var i,r,a=e[0],u=e[1],c=e[2],h=0,f=[];h<a.length;h++)r=a[h],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},o={app:0},s=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/typing/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"12d5":function(t,e,n){"use strict";var i=n("c772"),o=n.n(i);o.a},"2f31":function(t,e,n){},"3adf":function(t,e,n){"use strict";var i=n("7a8b"),o=n.n(i);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/typing"}},[t._v("Typing")]),n("router-link",{attrs:{to:"/result"}},[t._v("Result")])],1),n("div",{staticClass:"content-wrapper"},[n("router-view")],1),n("Footer")],1)},s=[],r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("strong",[t._v("Typing Game")]),t._v(" by "),n("span",[t._v("Kono")])])}],u={data:function(){return{}}},c=u,l=(n("3adf"),n("2877")),h=Object(l["a"])(c,r,a,!1,null,"acaca742",null),f=h.exports,d={components:{Footer:f}},p=d,v=(n("5c0b"),Object(l["a"])(p,o,s,!1,null,null,null)),m=v.exports,_=n("8c4f"),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",[t._v(" Typing ")]),n("router-link",{staticClass:"start-btn",attrs:{to:"/typing"}},[t._v("Start")])],1)},g=[],b={name:"Home",components:{}},w=b,x=(n("12d5"),Object(l["a"])(w,y,g,!1,null,"702be3ae",null)),T=x.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"typing-wrapper"},[t.text?n("div",{staticClass:"count-text"},[t._v(" "+t._s(t.text)+" ")]):t._e(),t.timeText?n("div",[t._v(" "+t._s(t.timeText)+" ")]):t._e(),t.typeText?n("div",{staticClass:"type-text"},[t._v(" "+t._s(t.typeText)+" ")]):t._e(),t.resultBool?n("Result"):t._e()],1)},q=[],O=(n("b680"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" result ")])}),k=[],C={data:function(){return{}}},L=C,E=Object(l["a"])(L,O,k,!1,null,null,null),P=E.exports,S={components:{Result:P},data:function(){return{text:"スペースを押して開始",typeText:"",timeText:"",timeLimit:2e4,interval:1e3,count:2,startTime:"",timeLeft:"",loc:0,q_ind:0,s_ind:0,array:[],resultBool:!1,correct:"",incorrect:"",question:["apple","note","kouno","sand","game","apex","css","html"]}},methods:{startCountdown:function(){var t=setTimeout(function(){this.startCountdown()}.bind(this),this.interval);if(this.count>0)this.text=this.count,this.count--,console.log(this.count);else if(this.count<=0){this.text="",this.startTime=Date.now(),console.log(this.startTime),clearTimeout(t),this.startTimer(),console.log("owari"),this.showQuestion();var e=this.judgeKey();this.keydownWord(e)}},startTimer:function(){this.timeLeft=this.timeLimit+this.startTime-Date.now();var t=setTimeout(function(){this.startTimer()}.bind(this),30);this.timeLeft<=50&&(this.timeLeft=0,this.resultBool=!0,console.log(this.timeLeft),clearTimeout(t),console.log(this.correct),console.log(this.incorrect)),this.timeText=(this.timeLeft/1e3).toFixed(2),console.log(this.timeText)},judgeKey:function(){var t=this;window.addEventListener("keydown",(function(e){return t.keydownWord(e.key)}))},keydownWord:function(t){this.resultBool||(t==this.question[this.q_ind][this.s_ind]?(this.array[this.s_ind]=t,this.s_ind++,this.correct++,console.log(this.array),this.updateText(),this.array.length==this.question[this.q_ind].length&&(this.array=[],this.q_ind++,this.s_ind=0,this.showQuestion(),console.log("ght"))):this.incorrect++)},updateText:function(){for(var t="",e=0;e<this.s_ind;e++)t+="_";this.typeText=t+this.typeText.substring(this.s_ind),console.log(this.typeText)},showQuestion:function(){console.log(this.q_ind),this.q_ind==this.question.length&&(this.q_ind=0),this.typeText=this.question[this.q_ind]},shuffle:function(t){for(var e=t.length-1;e>0;e--){var n=Math.floor(Math.random()*(e+1)),i=[t[e],t[n]];t[n]=i[0],t[e]=i[1]}return t}},created:function(){var t=this,e=0;window.addEventListener("keydown",(function(n){" "==n.key&&(e+=1,1==e?(t.startTime=Date.now(),t.startCountdown()):console.log(e))})),this.question=this.shuffle(this.question),console.log(this.question)}},$=S,M=(n("6fe8"),Object(l["a"])($,j,q,!1,null,"3a1f0b7c",null)),B=M.exports;i["a"].use(_["a"]);var R=[{path:"/",name:"Home",component:T},{path:"/typing",name:"Typing",component:B},{path:"/result",name:"Result",component:P}],D=new _["a"]({mode:"history",base:"/typing/",routes:R}),F=D,H=n("2f62");i["a"].use(H["a"]);var K=new H["a"].Store({state:{},mutations:{},actions:{},modules:{}});i["a"].config.productionTip=!1,new i["a"]({router:F,store:K,render:function(t){return t(m)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var i=n("9c0c"),o=n.n(i);o.a},"6fe8":function(t,e,n){"use strict";var i=n("2f31"),o=n.n(i);o.a},"7a8b":function(t,e,n){},"9c0c":function(t,e,n){},c772:function(t,e,n){}});
//# sourceMappingURL=app.80029788.js.map