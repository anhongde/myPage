(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28943b8c"],{8837:function(t,n,i){"use strict";var s=i("9bbd"),o=i.n(s);o.a},"9bbd":function(t,n,i){},e6c6:function(t,n,i){"use strict";i.r(n);var s=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"info"},[i("div",{staticClass:"title"},[t._v("下单")]),i("div",{staticClass:"add"},[i("div",{staticClass:"title"},[t._v("收件人    1580000000")]),i("span",[t._v(t._s(t.p_info.add))]),i("span",[t._v("[默认收获地址]")]),t._v(" \n      "),i("i",{staticClass:"iconfont iconedit-1-copy",on:{click:function(n){return t.toChoseAdd()}}})]),i("div",{staticClass:"p-info"},[i("p",[t._v(t._s(t.p_info.name))]),i("img",{attrs:{src:t.p_info.url,alt:""}}),i("p",[t._v("￥"+t._s(t.p_info.price)+"x"+t._s(t.num))])]),i("div",[t._v("运费：0")]),i("div",[t._v("共"+t._s(t.num)+"件，小计"+t._s(t.p_info.price*t.num)+"元")]),i("div",{staticClass:"btn",on:{click:function(n){return t.buy()}}},[t._v("去支付")])])},o=[],a=i("f499"),e=i.n(a),c=(i("cadf"),i("551c"),i("f751"),i("097d"),{name:"",components:{},data:function(){return{p_info:{id:1,name:"海参",des:"鲜嫩可口有营养",url:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=5173111,939484135&fm=26&gp=0.jpg",price:150,add:""},num:1}},created:function(){var t=JSON.parse(localStorage.getItem("byInfo"));this.p_info=t.p_info,this.num=t.num,this.p_info.add=localStorage.getItem("chosedAdd")?localStorage.getItem("chosedAdd"):"北京市朝阳区望京..."},methods:{buy:function(){localStorage.setItem("byInfo",e()({p_info:this.p_info,num:this.num,buyed:1})),this.$router.push({path:"/by"})},toChoseAdd:function(){this.$router.push({path:"/add_list"})}}}),d=c,u=(i("8837"),i("2877")),p=Object(u["a"])(d,s,o,!1,null,"d135aea6",null);n["default"]=p.exports}}]);