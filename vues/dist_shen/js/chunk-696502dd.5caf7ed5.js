(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-696502dd"],{"1c94":function(e,t,s){},"2c57":function(e,t,s){"use strict";var d=s("1c94"),a=s.n(d);a.a},ec9a:function(e,t,s){"use strict";s.r(t);var d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"adds"},[s("H",{attrs:{title:"收货地址",back:!0}}),e._l(e.adds,function(t,d){return s("div",{staticClass:"addsBox"},[s("div",{staticClass:"use"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.id!=e.nowUseId,expression:"v.id!=nowUseId"}],staticClass:"c-d-btn",on:{click:function(s){return e.use(t)}}},[e._v("使用")]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.id==e.nowUseId,expression:"v.id==nowUseId"}]},[s("i",{staticClass:"iconfont iconduigou",staticStyle:{color:"#FD9033"}})])]),s("div",{staticClass:"line"}),s("div",{staticClass:"l"},[s("div",[e._v(e._s(t.consignee)+"  "+e._s(t.phone))]),s("div",[e._v(e._s(t.detailAddress))])]),s("section",{staticClass:"f"},[s("el-checkbox",{on:{change:function(s){return e.defaultAddressClick(t.id)}},model:{value:t.defaultAddress,callback:function(s){e.$set(t,"defaultAddress",s)},expression:"v.defaultAddress"}},[e._v(e._s(t.defaultAddress?"已设为默认":"设为默认"))])],1)])}),s("div",{staticStyle:{width:"100%","text-align":"center","margin-top":"3rem"},on:{click:function(t){return e.toAddAdd()}}},[s("div",{staticClass:"addAdd c-btn"},[e._v("添加新地址")])])],2)},a=[],n=s("f499"),i=s.n(n),c=s("dc0c"),r=s("440a"),l={name:"",components:{H:c["a"]},data:function(){return{adds:[],nowUseId:""}},created:function(){var e=localStorage.getItem("chosedAdd");e&&(this.nowUseId=JSON.parse(e).id);var t=this;r["a"].jqAjax(shenUrl+"mp/address/list/{userid:owlrR6JcJWjNnURgJW0VrgxXaU2Q}","","get",function(e){console.log(e)},function(e){t.adds=[{searchValue:null,createBy:null,createTime:null,updateBy:null,updateTime:null,remark:null,params:{},id:1,province:"110000",city:"110100",county:"110101",address:"测试路112号楼",defaultAddress:!0,userId:"owlrR6JcJWjNnURgJW0VrgxXaU2Q",phone:"13287656756",consignee:"张三",gmtCreate:"2020-09-11",gmtUpdate:"2020-09-11",detailAddress:"河北省 沧州市 青县 XXXXXX1"},{searchValue:null,createBy:null,createTime:null,updateBy:null,updateTime:null,remark:null,params:{},id:2,province:"110000",city:"110100",county:"110101",address:"测试路112号楼",defaultAddress:!1,userId:"owlrR6JcJWjNnURgJW0VrgxXaU2Q",phone:"13287656756",consignee:"李四",gmtCreate:"2020-09-11",gmtUpdate:"2020-09-11",detailAddress:"北京市 北京市 朝阳区 XXXXXX2"}]})},methods:{use:function(e){localStorage.setItem("chosedAdd",i()(e)),this.$router.push({path:"/d_order"})},toAddAdd:function(){this.$router.push({path:"/new_add"})},toEdit:function(e){this.$router.push({path:"/new_add",query:{v:i()(e)}})},defaultAddressClick:function(e){console.log("设置默认",e)}}},o=l,u=(s("2c57"),s("2877")),v=Object(u["a"])(o,d,a,!1,null,"6fff17b4",null);t["default"]=v.exports}}]);