(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78a8f53e"],{"03d2":function(t,e,s){},"16e7":function(t,e,s){},"4c53":function(t,e,s){"use strict";var n=s("23e7"),o=s("857a"),r=s("af03");n({target:"String",proto:!0,forced:r("sub")},{sub:function(){return o(this,"sub","","")}})},"5d2c":function(t,e,s){"use strict";var n=s("16e7"),o=s.n(n);o.a},6607:function(t,e,s){t.exports=s.p+"static/img/brand-white.0b2fb245.png"},"80f1":function(t,e,s){"use strict";var n=s("03d2"),o=s.n(n);o.a},"857a":function(t,e,s){var n=s("1d80"),o=/"/g;t.exports=function(t,e,s,r){var i=String(n(t)),a="<"+e;return""!==s&&(a+=" "+s+'="'+String(r).replace(o,"&quot;")+'"'),a+">"+i+"</"+e+">"}},a135:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-container"},[n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:t.loginForm,rules:t.loginRules,autocomplete:"on","label-position":"left"}},[n("div",{staticStyle:{width:"100%","text-align":"center"}},[n("img",{staticClass:"brand",attrs:{src:s("6607")}})]),n("div",{staticClass:"title-container"},[n("h3",{staticClass:"title"},[t._v(t._s(t.$t("lbl.account_login")))])]),n("el-form-item",{attrs:{prop:"username"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"user"}})],1),n("el-input",{ref:"username",attrs:{placeholder:t.$t("lbl.username"),name:"username",type:"text",tabindex:"1",autocomplete:"on"},model:{value:t.loginForm.username,callback:function(e){t.$set(t.loginForm,"username",e)},expression:"loginForm.username"}})],1),n("el-tooltip",{attrs:{content:t.$t("lbl.caps_lock_on"),placement:"right",manual:""},model:{value:t.capsTooltip,callback:function(e){t.capsTooltip=e},expression:"capsTooltip"}},[n("el-form-item",{attrs:{prop:"password"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"password"}})],1),n("el-input",{key:t.passwordType,ref:"password",attrs:{type:t.passwordType,placeholder:t.$t("lbl.password"),name:"password",tabindex:"2",autocomplete:"on"},on:{blur:function(e){t.capsTooltip=!1}},nativeOn:{keyup:[function(e){return t.checkCapslock(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleLogin(e)}]},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}}),n("span",{staticClass:"show-pwd",on:{click:t.showPwd}},[n("svg-icon",{attrs:{"icon-class":"password"===t.passwordType?"eye":"eye-open"}})],1)],1)],1),n("div",{ref:"comments",staticStyle:{width:"100%","text-align":"left",color:"#f56c6c","font-size":"12px",heigth:"25px"}}),n("div",{staticStyle:{width:"100%","text-align":"center"}},[n("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.handleLogin(e)}}},[t._v(t._s(t.$t("lbl.login")))])],1),n("div",{staticStyle:{position:"relative"}},[n("div",{staticClass:"tips"},[n("a",{on:{click:function(e){t.showDialog=!0}}},[t._v(t._s(t.$t("lbl.forgot_password")))]),t._v(" | "+t._s(t.$t("lbl.not_a_member"))+" "),n("a",{staticClass:"text-custom",attrs:{href:"#"},on:{click:function(e){return t.$router.push({path:"/register"})}}},[n("b",[t._v(t._s(t.$t("lbl.sign_up")))])])])])],1)],1)},o=[],r=(s("4c53"),s("61f7")),i={name:"Login",data:function(){var t=this,e=function(e,s,n){Object(r["b"])(s)?n():n(new Error(t.$t("err.invalid_username")))};return{registerActive:!1,forceLoginActive:!1,logo:"./assets/images/banch-gray.png",loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur"}]},passwordType:"password",capsTooltip:!1,loading:!1,showDialog:!1,redirect:void 0,otherQuery:{}}},watch:{$route:{handler:function(t){var e=t.query;e&&(this.redirect=e.redirect,this.otherQuery="",e.sub&&(this.otherQuery=JSON.parse(decodeURI(e.sub))))},immediate:!0}},mounted:function(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()},methods:{checkCapslock:function(t){var e=t.key;this.capsTooltip=e&&1===e.length&&e>="A"&&e<="Z"},showPwd:function(){var t=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){t.$refs.password.focus()}))},handleLogin:function(){var t=this;this.$refs.comments.innerHTML="",this.$refs.loginForm.validate((function(e){if(!e)return!1;t.loading=!0,t.$store.dispatch("user/login",t.loginForm).then((function(){t.$router.push({path:t.redirect||"/",query:t.otherQuery}),t.loading=!1})).catch((function(e){t.$refs.comments.innerHTML=t.$t("err.invalid_username_password"),t.$refs.username.focus(),t.loading=!1}))}))}}},a=i,c=(s("80f1"),s("5d2c"),s("2877")),l=Object(c["a"])(a,n,o,!1,null,"969fdf10",null);e["default"]=l.exports},af03:function(t,e,s){var n=s("d039");t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}}}]);