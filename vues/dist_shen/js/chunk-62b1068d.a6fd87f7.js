(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62b1068d"],{3529:function(t,e,s){},ac6a:function(t,e,s){for(var n=s("cadf"),i=s("0d58"),a=s("2aba"),d=s("7726"),c=s("32e9"),r=s("84f2"),o=s("2b4c"),l=o("iterator"),u=o("toStringTag"),f=r.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},g=i(p),h=0;h<g.length;h++){var m,v=g[h],L=p[v],A=d[v],y=A&&A.prototype;if(y&&(y[l]||c(y,l,f),y[u]||c(y,u,v),r[v]=f,L))for(m in n)y[m]||a(y,m,n[m],!0)}},b6c2:function(t,e,s){"use strict";var n=s("3529"),i=s.n(n);i.a},defc:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"adds"},[s("H",{attrs:{title:"收货地址",back:!0}}),t._l(t.adds,function(e,n){return s("div",{staticClass:"addsBox",on:{click:function(t){}}},[s("div",{staticClass:"line"}),s("div",{staticClass:"l"},[s("div",[t._v(t._s(e.consignee)+"  "+t._s(e.phone))]),s("div",[t._v(t._s(e.province+" "+e.city+" "+e.county+" "+e.address))])]),s("section",{staticClass:"f"},[s("div",[s("div",{staticClass:"i-b",on:{click:function(s){return t.toEdit(e)}}},[s("i",{staticClass:"iconfont iconedit-1-copy"}),t._v("编辑\n        ")]),t._m(0,!0)]),s("el-checkbox",{on:{change:function(s){return t.defaultAddressClick(e)}},model:{value:e.defaultAddress,callback:function(s){t.$set(e,"defaultAddress",s)},expression:"v.defaultAddress"}},[t._v(t._s(e.defaultAddress?"已设为默认":"设为默认"))])],1)])}),s("div",{staticStyle:{width:"100%","text-align":"center","margin-top":"3rem"},on:{click:function(e){return t.toAddAdd()}}},[s("div",{staticClass:"addAdd c-btn"},[t._v("添加新地址")])])],2)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"i-b"},[s("i",{staticClass:"iconfont iconshanchu"}),t._v("删除\n        ")])}],a=(s("ac6a"),s("28a5"),s("f499")),d=s.n(a),c=s("dc0c"),r=s("440a"),o={name:"",components:{H:c["a"]},data:function(){return{adds:[]}},created:function(){this.init()},methods:{init:function(){var t=this;r["a"].jqAjax(shenUrl+"mp/address/list",d()({userId:localStorage.getItem("ticket").split(",")[1]}),"post",function(e){console.log(e),t.adds=e.data,t.adds.forEach(function(e,s){e.defaultAddress?t.adds[s].defaultAddress=!1:t.adds[s].defaultAddress=!0})},function(e){t.adds=[{searchValue:null,createBy:null,createTime:null,updateBy:null,updateTime:null,remark:null,params:{},id:1,province:"110000",city:"110100",county:"110101",address:"测试路112号楼",defaultAddress:!0,userId:"owlrR6JcJWjNnURgJW0VrgxXaU2Q",phone:"13287656756",consignee:"张三",gmtCreate:"2020-09-11",gmtUpdate:"2020-09-11",detailAddress:"河北省 沧州市 青县 曹寺镇王召庄村2组18号"},{searchValue:null,createBy:null,createTime:null,updateBy:null,updateTime:null,remark:null,params:{},id:2,province:"110000",city:"110100",county:"110101",address:"测试路112号楼",defaultAddress:!1,userId:"owlrR6JcJWjNnURgJW0VrgxXaU2Q",phone:"13287656756",consignee:"李四",gmtCreate:"2020-09-11",gmtUpdate:"2020-09-11",detailAddress:"北京市 北京市 朝阳区 望京soho1101"}]})},toAddAdd:function(){this.$router.push({path:"/new_add"})},toEdit:function(t){this.$router.push({path:"/new_add",query:{v:d()(t)}})},defaultAddressClick:function(t){console.log("设置默认",t);var e=this;r["a"].jqAjax(shenUrl+"mp/address",d()({id:t.id,userId:localStorage.getItem("ticket").split(",")[1],province:t.province,city:t.city,county:t.county,address:t.address,consignee:t.consignee,phone:t.phone,defaultAddress:t.defaultAddress?0:1}),"PUT",function(t){200==t.code?e.init():e.$message.warning(t.msg),console.log(t)},function(t){console.log(t)})}}},l=o,u=(s("b6c2"),s("2877")),f=Object(u["a"])(l,n,i,!1,null,"2e7bcfa6",null);e["default"]=f.exports}}]);