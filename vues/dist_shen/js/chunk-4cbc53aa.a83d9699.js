(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4cbc53aa"],{4132:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("H",{attrs:{title:"商品详情",back:!0}}),n("div",{staticClass:"info"},[n("img",{attrs:{src:e.p_info.url}}),n("div",{staticClass:"info-box"},[n("div",{staticClass:"t"},[n("span",{staticStyle:{color:"#FFD802"}},[e._v(e._s(e.p_info.name))])]),n("div",{staticClass:"p"},[e._v("￥"+e._s(e.p_info.price))])]),n("div",{staticStyle:{position:"relative",width:"100%","overflow-x":"hidden"}},[n("img",{staticStyle:{width:"108%","margin-left":"-4%"},attrs:{src:e.long}})]),n("div",{staticClass:"btn-box"},[n("div",{staticClass:"c-btn by-btn rg-btn",on:{click:function(t){e.popShow=!0,e.buyType=1}}},[e._v("立即认购")]),n("div",{staticClass:"c-btn by-btn gm-btn",on:{click:function(t){e.popShow=!0,e.buyType=0}}},[e._v("立即购买")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.popShow,expression:"popShow"}],staticClass:"by-box",on:{click:function(t){e.popShow=!1}}},[n("div",{on:{click:function(e){e.stopPropagation()}}},[n("div",{staticClass:"l"},[n("img",{attrs:{src:e.p_info.url}})]),n("div",{staticClass:"r"},[n("div",[e._v(e._s(e.p_info.name))]),n("div",{staticStyle:{color:"#FD9034"}},[e._v("￥"+e._s(e.p_info.price))])]),n("br"),n("div",{staticStyle:{width:"33rem","margin-top":".4rem","border-top":"1px solid #999999","padding-top":"1rem"}},[n("span",[e._v("温馨提示：尊敬的"+e._s(e.getLevelName(e.userInfo.level.level))+",您已经购买了"+e._s(e.userInfo.level.buyNum)+"件商品,您即将享受以下优惠：")]),n("br"),n("span",{directives:[{name:"show",rawName:"v-show",value:2!=e.userInfo.level.level,expression:"userInfo.level.level!=2"}]},[e._v("成为"+e._s(e.getLevelName(e.userInfo.level.level+1))+"，商品价格￥"+e._s(e.getLevelPr(e.userInfo.level.level+1))+"，需再购买"+e._s(e.userInfo.level.levelNum)+"件\n          "),n("i",{staticClass:"iconfont iconwenhao",staticStyle:{color:"#FE9034"},on:{click:function(t){return e.toShuoming()}}})]),n("br"),n("span",{directives:[{name:"show",rawName:"v-show",value:0==e.userInfo.level.level,expression:"userInfo.level.level==0"}]},[e._v("成为"+e._s(e.getLevelName(e.userInfo.level.level+2))+"，商品价格￥"+e._s(e.getLevelPr(e.userInfo.level.level+2))+"，需再购买"+e._s(60-e.userInfo.level.buyNum)+"件\n          "),n("i",{staticClass:"iconfont iconwenhao",staticStyle:{color:"#FE9034"},on:{click:function(t){return e.toShuoming()}}})]),n("br"),n("br"),n("span",{staticStyle:{color:"#FE9034"}},[e._v("当前价格：￥"+e._s(e.getLevelPr(e.userInfo.level.level)))]),n("br"),e._v("\n          购买数量\n\n          "),n("div",{staticStyle:{display:"inline-block","margin-left":"14rem"}},[n("div",{staticStyle:{width:"6.4rem",height:"2.4rem",position:"absolute","z-index":"99","background-color":"rgba(0,0,0,0)",right:"12.3rem"}}),n("el-input-number",{attrs:{size:"mini",min:1,max:100,label:"购买件数"},on:{change:e.handleChange},model:{value:e.num,callback:function(t){e.num=t},expression:"num"}})],1)]),n("br"),n("div",{staticStyle:{"text-align":"center",width:"32rem"}},[n("div",{staticClass:"addAdd c-btn",on:{click:function(t){return e.downOrder()}}},[e._v(e._s(1==e.buyType?"立即认购":"立即购买"))])])])])])],1)},o=[],l=n("f499"),s=n.n(l),r=(n("28a5"),n("cadf"),n("551c"),n("f751"),n("097d"),n("dc0c")),a=n("71e4"),c=n.n(a),u=n("706e"),v=n.n(u),p=n("440a"),f={name:"",components:{H:r["a"]},data:function(){return{p_info:{id:1,name:"海参",des:"鲜嫩可口有营养",url:c.a,price:150},num:1,long:v.a,buyType:0,popShow:!1,userInfo:{level:{},info:{}}}},created:function(){var e=p["a"].GetRequest().ticket;localStorage.setItem("ticket",e);var t=this;p["a"].jqAjax(shenUrl+"mp/syn/howCanPromotion/".concat(e.split(",")[1],"/1"),"","get",function(e){console.log(e),200==e.code&&e.data?t.userInfo.level=e.data:(t.userInfo.level={levelNum:5,buyNum:30,level:1,levelName:"普通用户"},t.$alert(e.msg,"系统提示",{confirmButtonText:"确定"}))},function(e){t.userInfo.level={levelNum:5,buyNum:30,level:1,levelName:"普通用户"}});var n=JSON.parse(localStorage.getItem("indexCheckPInfo"));this.p_info=n},methods:{handleChange:function(e){console.log(e),0==this.userInfo.level.level?e>=this.userInfo.level.levelNum&&e<60-this.userInfo.level.buyNum?this.p_info.price=this.p_info.dlrp:e>=60-this.userInfo.level.buyNum?this.p_info.price=this.p_info.hhrp:this.p_info.price=this.p_info.originalPrice:1==this.userInfo.level.level?e>=60-this.userInfo.level.buyNum?this.p_info.price=this.p_info.hhrp:this.p_info.price=this.p_info.dlrp:2==this.userInfo.level.level&&(this.p_info.price=this.p_info.hhrp)},downOrder:function(){localStorage.setItem("byInfo",s()({p_info:this.p_info,num:this.num})),this.$router.push({path:"/d_order",query:{buyType:this.buyType}})},getLevelName:function(e){return 0==e?"客户":1==e?"代理人":2==e?"合伙人":void 0},getLevelPr:function(e){return 0==e?this.p_info.price:1==e?this.p_info.dlrp:2==e?this.p_info.hhrp:void 0},toShuoming:function(){this.$router.push({path:"/shuoming"})}}},h=f,d=(n("e9d1"),n("2877")),m=Object(d["a"])(h,i,o,!1,null,"7b9d3b46",null);t["default"]=m.exports},"706e":function(e,t,n){e.exports=n.p+"img/long.6b3339b3.png"},b4fb:function(e,t,n){},e9d1:function(e,t,n){"use strict";var i=n("b4fb"),o=n.n(i);o.a}}]);