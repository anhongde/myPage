(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"7f7f":function(t,s,e){var a=e("86cc").f,i=Function.prototype,n=/^\s*function ([^ (]*)/,r="name";r in i||e("9e1e")&&a(i,r,{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(t){return""}}})},"9a06":function(t,s,e){},da57:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("H",{attrs:{title:"我的订单",back:!0}}),e("div",{staticClass:"nav"},[e("div",{class:-1==t.navType?"active":"",on:{click:function(s){t.navType=-1}}},[t._v("全部订单")]),e("div",{class:1==t.navType?"active":"",on:{click:function(s){t.navType=1}}},[t._v("待支付订单")]),e("div",{class:10==t.navType?"active":"",on:{click:function(s){t.navType=10}}},[t._v("已支付订单")])]),e("div",{staticStyle:{height:"4.5rem"}}),e("div",{staticClass:"order-list"},t._l(t.orderList,function(s,a){return e("div",{directives:[{name:"show",rawName:"v-show",value:-1==t.navType||1==t.navType&&1==s.status||10==t.navType&&1!=s.status,expression:"navType==-1||(navType==1&&v.status==1)||(navType==10&&v.status!=1)"}],staticClass:"order-box"},[e("div",{staticClass:"t"},[t._v("订单编号："+t._s(s.orderNo))]),e("div",{staticClass:"t2"},[e("div",{staticClass:"kName"},[t._v(t._s(s.expressName))]),e("div",{staticClass:"stName"},[t._v("\n          "+t._s(t.getStName(s.status))+"\n        ")])]),e("div",{staticClass:"dt"},[t._v(t._s(s.savedt))]),e("div",{staticClass:"info"},[e("div",{staticClass:"l"},[e("img",{attrs:{src:s.img?s.img:t.banner,alt:""}})]),e("div",{staticClass:"r"},[e("div",{staticClass:"t"},[t._v("\n            "+t._s(s.title)),e("br"),e("span",{directives:[{name:"show",rawName:"v-show",value:s.expressName,expression:"v.expressName"}]},[t._v(t._s(s.expressName)+"："+t._s(s.expressNo))])]),e("div",{staticClass:"num"},[t._v("\n            ￥"+t._s(s.actualPrice)),e("del",{directives:[{name:"show",rawName:"v-show",value:s.originalPrice,expression:"v.originalPrice"}]},[t._v("￥"+t._s(s.originalPrice))]),e("span",[t._v("x"+t._s(s.num))])])])]),e("div",{staticClass:"add"},[e("i",{staticClass:"iconfont iconweizhi"}),t._v("\n        "+t._s(s.daddress)+"\n        "),e("i",{directives:[{name:"show",rawName:"v-show",value:1==s.status||4==s.status||0==s.status,expression:"v.status==1||v.status==4||v.status==0"}],staticClass:"iconfont iconedit-1-copy"})]),e("div",{staticClass:"price"},[t._v("\n        总价￥"+t._s(s.amount)+"  优惠￥0  "),e("span",[t._v("实付款￥"+t._s(s.amount))])]),e("div",{staticClass:"btn-box"},[e("div",{staticClass:"c-d-btn"},[t._v("删除订单")]),e("div",{staticClass:"c-btn",on:{click:function(s){return t.reBuy()}}},[t._v("再次购买")])])])}),0)],1)},i=[],n=(e("7f7f"),e("f499")),r=e.n(n),o=e("dc0c"),c=e("440a"),d=e("71e4"),u=e.n(d),v={name:"",components:{H:o["a"]},data:function(){return{msg:"",banner:u.a,navType:-1,orderList:[]}},created:function(){this.orderList=localStorage.getItem("tmpOrderList")?JSON.parse(localStorage.getItem("tmpOrderList")):[];var t=localStorage.getItem("byInfo")?JSON.parse(localStorage.getItem("byInfo")):{buyed:0},s=this;c["a"].jqAjax(shenUrl+"mp/syn/list",r()({userId:"owlrR6JcJWjNnURgJW0VrgxXaU2Q"}),"post",function(e){console.log(e),s.orderList=e.data,t&&t.buyed&&(s.orderList.unshift({orderNo:"new_id1234567",status:0,savedt:moment().format("YYYY-MM-DD h:mm:ss"),title:t.p_info.name,actualPrice:t.p_info.price,num:t.num,daddress:t.p_info.add.detailAddress,img:t.p_info.url,amount:t.p_info.price*t.num}),t.buyed=0,localStorage.setItem("tmpOrderList",r()(s.orderList)),localStorage.setItem("byInfo",r()(t)))},function(s){t&&t.buyed&&this.orderList.unshift({orderNo:"new_id1234567",status:0,savedt:moment().format("YYYY-MM-DD h:mm:ss"),title:t.p_info.name,actualPrice:t.p_info.price,num:t.num,daddress:t.p_info.add.detailAddress,img:t.p_info.url,amount:t.p_info.price*t.num}),t.buyed=0,localStorage.setItem("tmpOrderList",r()(this.orderList)),localStorage.setItem("byInfo",r()(t)),console.log(s)})},methods:{getStName:function(t){switch(t){case 0:return"已支付";case 1:return"待支付";case 2:return"退款";case 3:return"交易中";case 4:return"待发货";case 5:return"已发货";case 6:return"已收货";case 7:return"订单取消";case 8:return"申请退款";default:return""}},reBuy:function(){this.$router.push({path:"/p_info"})}}},l=v,m=(e("f931"),e("2877")),p=Object(m["a"])(l,a,i,!1,null,"532dd6e1",null);s["default"]=p.exports},f931:function(t,s,e){"use strict";var a=e("9a06"),i=e.n(a);i.a}}]);