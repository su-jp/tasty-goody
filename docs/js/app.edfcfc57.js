(function(t){function e(e){for(var o,n,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)n=i[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&p.push(s[n][0]),s[n]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],o=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(o=!1)}o&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var o={},s={app:0},r=[];function n(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=o,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(a,o,function(e){return t[e]}.bind(null,o));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/tasty-goody/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0bcd":function(t,e,a){t.exports=a.p+"img/1.49be3d27.jpg"},"0d0a":function(t,e,a){t.exports=a.p+"img/1.85750ac4.jpg"},2412:function(t,e,a){t.exports=a.p+"img/2.4a284f46.jpg"},"2e34":function(t,e,a){},"3a2d":function(t,e,a){t.exports=a.p+"img/sidebar.4430c87a.jpg"},"4a5e":function(t,e,a){t.exports=a.p+"img/1.aaf6611d.jpg"},"4cba":function(t,e,a){t.exports=a.p+"img/1.cc6b5688.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);var o=a("2b0e"),s=a("7496"),r=a("40dc"),n=a("8336"),i=a("a523"),c=a("ce7e"),l=a("132d"),u=a("adda"),d=a("8860"),p=a("da13"),h=a("5d23"),f=a("34c3"),g=a("f6c4"),m=a("f774"),b=a("2fa4"),v=a("2a7f"),y=function(){var t=this,e=t._self._c;return e(s["a"],[e(r["a"],{attrs:{app:"",color:t.appBarColor,flat:"",dark:""}},[e(n["a"],{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",depressed:"",color:"amber"},on:{click:function(e){t.drawer=!t.drawer}}},[e(l["a"],{attrs:{dark:""}},[t._v(" mdi-menu ")])],1),e(v["a"],[t._v(" "+t._s(t.appBarTitle)+" ")]),e(b["a"]),"Dashboard"!==this.$route.name?e(n["a"],{attrs:{icon:"",dark:"",to:"/"}},[e(l["a"],[t._v("mdi-home")])],1):t._e()],1),"GoodyBoard"!==this.$route.name?e(u["a"],{attrs:{src:t.waveHeight}}):t._e(),e(m["a"],{attrs:{app:"",dark:"",src:a("3a2d")},scopedSlots:t._u([{key:"img",fn:function(a){return[e(u["a"],t._b({attrs:{gradient:t.gradient}},"v-img",a,!1))]}},{key:"append",fn:function(){return[e("p",{staticClass:"pl-5 white--text text-caption"},[t._v(" © 2023 su-jp (Sujin Park) ")])]},proxy:!0}]),model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(p["a"],[e(h["a"],[e(h["c"],{staticClass:"text-h6"},[t._v(" Tasty Goody ")]),e(h["b"],[t._v(" 맛있는 건 정말 참을 수 없어 ")])],1)],1),e(c["a"]),e(d["a"],{attrs:{dense:"",nav:""}},t._l(t.items,(function(a){return e(p["a"],{key:a.title,staticClass:"py-1",attrs:{link:"",to:a.to,"active-class":"amber"}},[e(f["a"],[e(l["a"],[t._v(t._s(a.icon))])],1),e(h["a"],[e(h["c"],[t._v(t._s(a.title))])],1)],1)})),1)],1),e(g["a"],{class:t.mainDivClass},[e(i["a"],[e("router-view")],1)],1)],1)},x=[],_={name:"App",data(){return{drawer:!1,gradient:"rgba(0, 0, 0, .4), rgba(0, 0, 0, 0)",items:[{title:"Welcome",icon:"mdi-human-greeting-variant",to:"/"},{title:"Tasty Goody",icon:"mdi-food-fork-drink",to:"/goodyBoard"},{title:"Guest Book",icon:"mdi-book",to:"/guestBook"},{title:"Contact",icon:"mdi-contacts",to:"/contact"}],appBarColor:"transparent",mainDivClass:"pt-0"}},computed:{waveHeight(){let t="https://capsule-render.vercel.app/api?type=wave&color=ffc107&height=";switch(this.$vuetify.breakpoint.name){case"xs":case"sm":return t+"300";case"md":return t+"200";default:return t+"150"}},appBarTitle(){switch(this.$route.path){case"/goodyBoard":return"Tasty Goody";case"/guestBook":return"Guest Book";case"/contact":return"Contact";default:return""}}},mounted(){},created(){this.drawer=this.setDrawer(),this.checkDashboard()},updated(){this.checkDashboard()},methods:{setDrawer(){switch(this.$vuetify.breakpoint.name){case"xs":case"sm":case"md":return!1;default:return!0}},checkDashboard(){"Dashboard"===this.$route.name?(this.appBarColor="transparent",this.mainDivClass="pt-0"):(this.appBarColor="amber",this.mainDivClass="")}}},k=_,j=a("2877"),C=Object(j["a"])(k,y,x,!1,null,null,null),w=C.exports,B=a("8c4f"),D=a("62ad"),O=a("0fd9"),$=function(){var t=this,e=t._self._c;return e(i["a"],{attrs:{fluid:""}},[e(O["a"],[e(D["a"],{attrs:{cols:"12"}},[e("p",{staticClass:"text-lg-h1 text-sm-h2 text-h3 font-weight-black text-center font-italic amber--text"},[t._v(" Tasty Goody ")])])],1),e(O["a"],{staticClass:"py-5",attrs:{justify:"center"}},[e(D["a"],{attrs:{cols:"12",sm:"9",md:"6",xl:"4"}},[e(u["a"],{staticClass:"rounded-circle mx-auto",attrs:{src:a("3a2d")}})],1)],1),e(O["a"],{staticClass:"pt-5"},[e(D["a"],[e("p",{staticClass:"text-lg-h4 text-sm-h5 text-h6 text-center"},[t._v(" 맛있는 건 정말 참을 수 없어 🎵 ")])])],1)],1)},T=[],A={computed:{}},F=A,L=Object(j["a"])(F,$,T,!1,null,null,null),G=L.exports,N=a("b0af"),R=a("99d9"),S=a("5e66"),V=a("3e35"),z=a("169a"),P=a("b73d"),H=a("71d9"),M=function(){var t=this,e=t._self._c;return e(i["a"],{attrs:{fluid:""}},[e(O["a"],{staticClass:"pt-5"},[e(b["a"]),e(D["a"],{attrs:{cols:"auto"}},[e(P["a"],{attrs:{color:"orange",label:""+(t.sortByDesc?"최신순":"오래된순")},on:{click:function(e){return t.sortBy(t.sortByDesc)}},model:{value:t.sortByDesc,callback:function(e){t.sortByDesc=e},expression:"sortByDesc"}})],1)],1),e(O["a"],t._l(t.boardList,(function(o){return e(D["a"],{key:o.id,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[e(z["a"],{attrs:{"max-width":"600"},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:r}){return[e(N["a"],{staticClass:"mx-auto text-center",attrs:{color:"amber lighten-1",dark:"","max-width":"600"}},[e(R["b"],[e(u["a"],{attrs:{src:a("931b")(`./${o.id}/1.jpg`)}})],1),e(R["b"],[e(O["a"],[e(D["a"],{attrs:{cols:"auto"}},[e("div",{staticClass:"text-subtitle3 font-weight-thin text-right"},[t._v(" "+t._s(o.region)+" ")])]),e(b["a"]),e(D["a"],{attrs:{cols:"auto"}},[e("div",{staticClass:"text-subtitle3 font-weight-thin text-right"},[t._v(" "+t._s(o.date)+" ")])])],1),e(O["a"],[e(D["a"],{attrs:{cols:"12"}},[e("div",{staticClass:"text-h5 font-bold white--text"},[t._v(" "+t._s(o.storeName)+" ")])])],1),e(O["a"],[e(D["a"],{attrs:{cols:"12"}},[t._v(" "+t._s(o.goodies)+" ")])],1)],1),e(c["a"]),e(R["a"],{staticClass:"justify-center"},[e(n["a"],t._g(t._b({attrs:{block:"",text:""}},"v-btn",r,!1),s),[t._v(" 자세히 보기 ")])],1)],1)]}},{key:"default",fn:function(s){return[e(N["a"],[e(H["a"],{attrs:{color:"amber",dark:""}},[e(O["a"],{attrs:{align:"center"}},[e(D["a"],{staticClass:"ml-3",attrs:{cols:"8"}},[t._v(" ["+t._s(o.region)+"] "+t._s(o.storeName)+" ")]),e(b["a"]),e(D["a"],{attrs:{cols:"auto"}},[e(n["a"],{attrs:{icon:""},on:{click:function(t){s.value=!1}}},[e(l["a"],[t._v("mdi-close")])],1)],1)],1)],1),e(S["a"],{attrs:{cycle:"",height:"400","hide-delimiter-background":"","show-arrows-on-hover":"","delimiter-icon":"mdi-minus"}},t._l(o.numPhotos,(function(t){return e(V["a"],{key:t},[e(u["a"],{staticClass:"img-cover",attrs:{src:a("e8be")(`./${o.id}/${t}.jpg`)}})],1)})),1),e(R["c"],[t._v(" 🥄 내가 먹은 메뉴 ")]),e(R["b"],[t._v(" "+t._s(o.goodies)+" ")]),e(c["a"]),e(R["c"],[t._v(" 💬 후기 ")]),e(R["b"],[t._v(" "+t._s(o.contents)+" ")])],1)]}}],null,!0)})],1)})),1)],1)},U=[],Z={data(){return{sortByDesc:!0,boardList:[]}},created(){this.$axios.get("https://su-jp.github.io/tasty-goody/boardData/boardList.json").then(t=>this.boardList=t.data.boardList).catch(t=>console.log("fetch error: "+t)).finally(()=>{this.sortBy(this.sortByDesc)})},methods:{sortBy(t){this.boardList.sort((function(e,a){return t?a.id-e.id:e.id-a.id}))}}},q=Z,W=(a("6622"),Object(j["a"])(q,M,U,!1,null,"37d68f32",null)),E=W.exports,X=a("0789"),J=a("4bd4"),Y=a("a797"),I=a("490a"),K=a("8654"),Q=function(){var t=this,e=t._self._c;return e(i["a"],{attrs:{fluid:""}},[e(O["a"],[e(D["a"],{attrs:{cols:"12"}},[e("p",{staticClass:"text-lg-h1 text-sm-h2 text-h3 font-weight-black text-center font-italic amber--text"},[t._v(" Hi, there! ")]),e("p",{staticClass:"text-body-1 text-center amber--text"},[t._v(" Tasty Board에 전하고 싶은 말을 남겨주세요! ")])])],1),t._l(t.guestBookList,(function(a){return e(N["a"],{key:a.id,staticClass:"mt-5"},[e(R["c"],[e(l["a"],{attrs:{left:"",color:"amber"}},[t._v(" mdi-account-edit ")]),e("span",{staticClass:"text-subtitle-1 font-weight-light"},[t._v(t._s(a.name))])],1),e(R["b"],[e("p",{staticClass:"text-body-1"},[t._v(" "+t._s(a.contents)+" ")]),e(O["a"],[e(b["a"]),e(D["a"],{attrs:{cols:"auto"}},[t._v(" "+t._s(a.createdAt)+" ")])],1)],1)],1)})),e(z["a"],{attrs:{"show-overlay":"","max-width":"600"},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:o}){return[e(X["b"],[e(n["a"],t._g(t._b({attrs:{color:"amber",bottom:"",right:"",fixed:"",fab:"",dark:""}},"v-btn",o,!1),a),[e(l["a"],[t._v("mdi-pencil")])],1)],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[[e(N["a"],[e(H["a"],{attrs:{color:"amber",dark:""}},[e(O["a"],{attrs:{align:"center"}},[e(D["a"],{staticClass:"ml-3",attrs:{cols:"8"}},[t._v(" 방명록 작성하기 ")]),e(b["a"]),e(D["a"],{attrs:{cols:"auto"}},[e(n["a"],{attrs:{icon:""},on:{click:t.onCloseDialog}},[e(l["a"],[t._v("mdi-close")])],1)],1)],1)],1),e(R["b"],[e(J["a"],{ref:"form",staticClass:"pt-5"},[e(K["a"],{attrs:{label:"🙋‍♀️이름",required:""},on:{keyup:t.onFormChange},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),e(K["a"],{attrs:{counter:"100",label:"📝내용",required:""},on:{keyup:t.onFormChange},model:{value:t.contents,callback:function(e){t.contents=e},expression:"contents"}}),e(O["a"],[e(b["a"]),e(D["a"],{attrs:{cols:"auto"}},[e(n["a"],{staticClass:"mt-5",attrs:{color:"amber",depressed:"",dark:t.validAll,disabled:!t.validAll},on:{click:t.onClickBtn}},[t._v(" 등록하기 ")])],1)],1)],1)],1)],1),e(Y["a"],{attrs:{value:t.overlay}},[e(I["a"],{attrs:{indeterminate:"",size:"64"}})],1)]],2)],2)},tt=[],et=(a("14d9"),{data:()=>({dialog:!1,validAll:!1,overlay:!1,name:"",contents:"",guestBookList:[]}),created(){this.getGuestBookList()},methods:{async getGuestBookList(){this.guestBookList=[],await this.$axios.get("https://api.github.com/repos/su-jp/tasty-goody/issues/3/comments?per_page=100").then(t=>{for(let e=0;e<t.data.length;e++){let a=JSON.parse(t.data[e].body),o=new Date(t.data[e].created_at),s=o.getFullYear()+"/"+(o.getMonth()+1)+"/"+o.getDate()+" "+o.getHours()+":"+o.getMinutes(),r={id:e,name:a.name,contents:a.contents,createdAt:s,likes:t.data[e].reactions.heart};this.guestBookList.push(r)}}).catch(t=>console.log("error: "+t)).finally(()=>{this.guestBookList.sort((function(t,e){return e.id-t.id}))})},onCloseDialog(){this.dialog=!1,this.$refs.form.reset()},onClickBtn(){this.overlay=!0;let t=`{ "name": "${this.name}", "contents": "${this.contents}" }`;const e="Z2hwX3FmVm9HcWZWeHhRc1hOU05rVlFzT2FsR2s3Z3VXNzNVeTVCTg==";this.$axios({url:"https://api.github.com/repos/su-jp/tasty-goody/issues/3/comments",method:"post",headers:{Authorization:"Basic "+e},data:{body:t}}).then(t=>{alert("방명록이 등록되었습니다. 감사합니다!")}).catch(t=>{console.log("error: "+t),alert("등록에 실패하였습니다. 관리자에게 문의해주세요.")}).finally(()=>{setTimeout(()=>{this.getGuestBookList(),this.overlay=!1,this.onCloseDialog()},1e3)})},onFormChange(){""!==this.name&&""!==this.contents?this.contents.length&&this.contents.length>100?this.validAll=!1:this.validAll=!0:this.validAll=!1}}}),at=et,ot=Object(j["a"])(at,Q,tt,!1,null,null,null),st=ot.exports,rt=function(){var t=this,e=t._self._c;return e(i["a"],{attrs:{fluid:""}},[e(O["a"],[e(D["a"],{attrs:{cols:"4"}},[e("p",{staticClass:"text-lg-h1 text-sm-h2 text-h3 text-center font-weight-black font-italic amber--text"},[t._v(" Tasty"),e("br"),t._v("Goody ")])]),e(b["a"]),e(D["a"],{attrs:{cols:"7"}},[e(J["a"],{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(K["a"],{attrs:{rules:t.nameRules,label:"🙋‍♀️이름",required:""},on:{keyup:t.onFormChange},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),e(K["a"],{attrs:{rules:t.emailRules,label:"📧이메일",required:""},on:{keyup:t.onFormChange},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),e(K["a"],{attrs:{counter:11,rules:t.phoneRules,label:"📞연락처",required:""},on:{keyup:t.onFormChange},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),e(O["a"],[e(b["a"]),e(D["a"],{attrs:{cols:"auto"}},[e(n["a"],{staticClass:"mt-5",attrs:{color:"amber",depressed:"",dark:t.validAll,disabled:!t.validAll},on:{click:t.onClickBtn}},[t._v(" 전송하기 ")])],1)],1)],1)],1)],1),e(Y["a"],{attrs:{value:t.overlay}},[e(I["a"],{attrs:{indeterminate:"",size:"64"}})],1)],1)},nt=[],it={data:()=>({valid:!0,validAll:!1,overlay:!1,name:"",nameRules:[t=>!!t||"이름을 입력해주세요"],email:"",emailRules:[t=>!!t||"이메일을 입력해주세요",t=>/.+@.+\..+/.test(t)||"이메일 형식이 올바르지 않습니다"],phone:"",phoneRules:[t=>!!t||"연락처를 입력해주세요",t=>t&&t.length<=11||"연락처는 11자리까지 입력할 수 있습니다",t=>/^[0-9]*$/.test(t)||"연락처는 숫자만 입력할 수 있습니다"]}),methods:{onClickBtn(){this.overlay=!0;let t=`이름: ${this.name}\n이메일: ${this.email}\n연락처: ${this.phone}`;const e="Z2hwX3FmVm9HcWZWeHhRc1hOU05rVlFzT2FsR2s3Z3VXNzNVeTVCTg==";this.$axios({url:"https://api.github.com/repos/su-jp/tasty-goody/issues/2/comments",method:"post",headers:{Authorization:"Basic "+e},data:{body:t}}).then(t=>{alert("전송 되었습니다. 감사합니다!")}).catch(t=>{console.log("error: "+t),alert("전송에 실패하였습니다. 관리자에게 문의해주세요.")}).finally(()=>{this.overlay=!1,this.$refs.form.reset()})},onFormChange(){this.$refs.form.validate()?this.validAll=!0:this.validAll=!1}}},ct=it,lt=Object(j["a"])(ct,rt,nt,!1,null,null,null),ut=lt.exports;o["a"].use(B["a"]);const dt=[{path:"/",name:"Dashboard",component:G},{path:"/goodyBoard",name:"GoodyBoard",component:E},{path:"/guestBook",name:"GuestBook",component:st},{path:"/contact",name:"Contact",component:ut}],pt=new B["a"]({routes:dt});var ht=pt,ft=a("f309");o["a"].use(ft["a"]);var gt=new ft["a"]({}),mt=a("cee4");o["a"].prototype.$eventBus=new o["a"],o["a"].prototype.$axios=mt["a"],o["a"].config.productionTip=!1,new o["a"]({router:ht,vuetify:gt,axios:mt["a"],render:t=>t(w)}).$mount("#app")},"581b":function(t,e,a){t.exports=a.p+"img/2.e9732178.jpg"},"613e":function(t,e,a){t.exports=a.p+"img/4.fe89dd40.jpg"},6622:function(t,e,a){"use strict";a("2e34")},"7b51":function(t,e,a){t.exports=a.p+"img/2.bc036618.jpg"},"7d49":function(t,e,a){t.exports=a.p+"img/2.54129e79.jpg"},"888d":function(t,e,a){t.exports=a.p+"img/1.14fd20fe.jpg"},"931b":function(t,e,a){var o={"./1/1.jpg":"0d0a","./2/1.jpg":"d326","./3/1.jpg":"9f59","./4/1.jpg":"bb47","./5/1.jpg":"4a5e","./6/1.jpg":"888d","./7/1.jpg":"4cba","./8/1.jpg":"97bb","./9/1.jpg":"0bcd"};function s(t){var e=r(t);return a(e)}function r(t){if(!a.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}s.keys=function(){return Object.keys(o)},s.resolve=r,t.exports=s,s.id="931b"},"97bb":function(t,e,a){t.exports=a.p+"img/1.50bafff7.jpg"},"9c90":function(t,e,a){t.exports=a.p+"img/3.98fe9903.jpg"},"9f59":function(t,e,a){t.exports=a.p+"img/1.d210db83.jpg"},b176:function(t,e,a){t.exports=a.p+"img/2.ef8fee1d.jpg"},bb47:function(t,e,a){t.exports=a.p+"img/1.f39ac5a2.jpg"},c402:function(t,e,a){t.exports=a.p+"img/2.b6ebc2a6.jpg"},cc66:function(t,e,a){t.exports=a.p+"img/3.28329bc3.jpg"},d326:function(t,e,a){t.exports=a.p+"img/1.866b2f74.jpg"},e01e:function(t,e,a){t.exports=a.p+"img/4.c34cd123.jpg"},e8be:function(t,e,a){var o={"./1/1.jpg":"0d0a","./1/2.jpg":"b176","./1/3.jpg":"cc66","./2/1.jpg":"d326","./3/1.jpg":"9f59","./3/2.jpg":"7d49","./4/1.jpg":"bb47","./4/2.jpg":"c402","./5/1.jpg":"4a5e","./6/1.jpg":"888d","./6/2.jpg":"e9dd","./6/3.jpg":"9c90","./6/4.jpg":"e01e","./7/1.jpg":"4cba","./7/2.jpg":"2412","./8/1.jpg":"97bb","./8/2.jpg":"7b51","./9/1.jpg":"0bcd","./9/2.jpg":"581b","./9/3.jpg":"eb1b","./9/4.jpg":"613e"};function s(t){var e=r(t);return a(e)}function r(t){if(!a.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}s.keys=function(){return Object.keys(o)},s.resolve=r,t.exports=s,s.id="e8be"},e9dd:function(t,e,a){t.exports=a.p+"img/2.0034c81b.jpg"},eb1b:function(t,e,a){t.exports=a.p+"img/3.6d8bf077.jpg"}});
//# sourceMappingURL=app.edfcfc57.js.map