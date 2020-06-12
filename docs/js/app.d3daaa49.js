(function(t){function e(e){for(var i,s,c=e[0],a=e[1],u=e[2],h=0,f=[];h<c.length;h++)s=c[h],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,c=1;c<n.length;c++){var a=n[c];0!==r[a]&&(i=!1)}i&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},r={app:0},o=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/typing/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=a;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"12d5":function(t,e,n){"use strict";var i=n("c772"),r=n.n(i);r.a},"28e4":function(t,e,n){},"3adf":function(t,e,n){"use strict";var i=n("7a8b"),r=n.n(i);r.a},4690:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"content-wrapper"},[n("router-view")],1),n("Footer")],1)},o=[],s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("strong",[t._v("Typing Game")]),t._v(" by "),n("span",[t._v("Kono")])])}],a={data:function(){return{}}},u=a,l=(n("3adf"),n("2877")),h=Object(l["a"])(u,s,c,!1,null,"acaca742",null),f=h.exports,p={components:{Footer:f}},d=p,v=(n("5c0b"),Object(l["a"])(d,r,o,!1,null,null,null)),m=v.exports,_=n("8c4f"),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",[t._v(" Typing ")]),n("router-link",{staticClass:"start-btn",attrs:{to:"/typing"}},[t._v("Start")])],1)},g=[],b={name:"Home",components:{}},w=b,x=(n("12d5"),Object(l["a"])(w,y,g,!1,null,"702be3ae",null)),T=x.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"typing-wrapper"},[t.text?n("div",{staticClass:"count-text"},[t._v(" "+t._s(t.text)+" ")]):t._e(),t.timeText?n("div",[t._v(" "+t._s(t.timeText)+" ")]):t._e(),n("div",{staticClass:"type-text-wrapper"},[t.typeText?n("div",{staticClass:"type-text",class:{red:t.isActive}},[t._v(" "+t._s(t.typeText)+" ")]):t._e(),t.resultBool?n("Result",{attrs:{correct:t.correct,incorrect:t.incorrect}}):t._e()],1)])},j=[],q=(n("b680"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"result-wrapper"},[n("div",{staticClass:"score-wrapper"},[n("p",[t._v("正解数:"+t._s(t.correct))]),n("p",[t._v("不正解数:"+t._s(t.incorrect))]),n("p",[t._v("正解率:"+t._s(t.correctRate)+"%")])]),n("div",{staticClass:"link-btn-wrapper"},[n("router-link",{staticClass:"link-btn",attrs:{to:"/"}},[t._v("Home")]),n("a",{staticClass:"link-btn",on:{click:function(e){return t.reset()}}},[t._v("Restart")])],1)])}),C=[],O=(n("a9e3"),{data:function(){return{}},props:{correct:[String,Number],incorrect:[String,Number]},computed:{correctRate:function(){return 100*(this.correct/(this.correct+this.incorrect)).toFixed(2)}},methods:{reset:function(){this.$router.go({path:this.$router.currentRoute.path,force:!0})}}}),L=O,S=(n("9793"),Object(l["a"])(L,q,C,!1,null,"30f4cd40",null)),$=S.exports,E={components:{Result:$},data:function(){return{text:"スペースを押して開始",typeText:"",timeText:"",timeLimit:1e4,interval:1e3,count:2,startTime:"",timeLeft:"",loc:0,q_ind:0,s_ind:0,array:[],resultBool:!1,correct:"",incorrect:"",question:["apple","note","kouno","sand","game","apex","css","html"],isActive:!1}},methods:{startCountdown:function(){var t=setTimeout(function(){this.startCountdown()}.bind(this),this.interval);if(this.count>0)this.text=this.count,this.count--,console.log(this.count);else if(this.count<=0){this.text="",this.startTime=Date.now(),console.log(this.startTime),clearTimeout(t),this.startTimer(),console.log("owari"),this.showQuestion();var e=this.judgeKey();if("undefined"===typeof e)return;this.keydownWord(e)}},startTimer:function(){this.timeLeft=this.timeLimit+this.startTime-Date.now();var t=setTimeout(function(){this.startTimer()}.bind(this),30);this.timeLeft<=50&&(this.timeLeft=0,this.resultBool=!0,this.typeText=!1,console.log(this.timeLeft),clearTimeout(t),console.log(this.correct),console.log(this.incorrect)),this.timeText=(this.timeLeft/1e3).toFixed(2),console.log(this.timeText)},judgeKey:function(){var t=this;window.addEventListener("keydown",(function(e){return t.keydownWord(e.key)}))},keydownWord:function(t){this.resultBool||(this.isActive=!1,t==this.question[this.q_ind][this.s_ind]?(this.array[this.s_ind]=t,this.s_ind++,this.correct++,console.log(this.array),this.updateText(),this.array.length==this.question[this.q_ind].length&&(this.array=[],this.q_ind++,this.s_ind=0,this.showQuestion(),console.log("ght"))):(this.incorrect++,this.isActive=!0,console.log(t)))},updateText:function(){for(var t="",e=0;e<this.s_ind;e++)t+="_";this.typeText=t+this.typeText.substring(this.s_ind),console.log(this.typeText)},showQuestion:function(){console.log(this.q_ind),this.q_ind==this.question.length&&(this.q_ind=0),this.typeText=this.question[this.q_ind]},shuffle:function(t){for(var e=t.length-1;e>0;e--){var n=Math.floor(Math.random()*(e+1)),i=[t[e],t[n]];t[n]=i[0],t[e]=i[1]}return t}},created:function(){var t=this,e=0;window.addEventListener("keydown",(function(n){" "==n.key&&(e+=1,1==e?(t.startTime=Date.now(),t.startCountdown()):console.log(e))})),this.question=this.shuffle(this.question),console.log(this.question)}},P=E,R=(n("ecf9"),Object(l["a"])(P,k,j,!1,null,"7770f318",null)),M=R.exports;i["a"].use(_["a"]);var A=[{path:"/",name:"Home",component:T},{path:"/typing",name:"Typing",component:M},{path:"/result",name:"Result",component:$}],B=new _["a"]({mode:"history",base:"/typing/",routes:A}),F=B,D=n("2f62");i["a"].use(D["a"]);var H=new D["a"].Store({state:{},mutations:{},actions:{},modules:{}});i["a"].config.productionTip=!1,new i["a"]({router:F,store:H,render:function(t){return t(m)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var i=n("9c0c"),r=n.n(i);r.a},"7a8b":function(t,e,n){},9793:function(t,e,n){"use strict";var i=n("4690"),r=n.n(i);r.a},"9c0c":function(t,e,n){},c772:function(t,e,n){},ecf9:function(t,e,n){"use strict";var i=n("28e4"),r=n.n(i);r.a}});
//# sourceMappingURL=app.d3daaa49.js.map