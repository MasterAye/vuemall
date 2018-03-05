webpackJsonp([8],{343:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(357),i=e(395),r=e(196),n=r(s.a,i.a,!1,null,null,null);n.options.__file="src\\components\\vip\\myOrder.vue",a.default=n.exports},357:function(t,a,e){"use strict";a.a={data:function(){return{myOrderData:{},pageIndex:1,pageSize:10}},created:function(){this.getMyOrderData()},methods:{getMyOrderData:function(){var t=this,a="site/validate/order/userorderlist?pageIndex="+this.pageIndex+"&pageSize="+this.pageSize;this.$axios.get(a).then(function(a){t.myOrderData=a.data})},handleSizeChange:function(t){this.pageSize=t,this.getMyOrderData()},handleCurrentChange:function(t){this.pageIndex=t,this.getMyOrderData()}}}},395:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"el-row"},[e("div",{staticClass:"el-col el-col-24"},[e("div",{staticClass:"comp"},[e("div",{staticClass:"tmpl routeanimate"},[t._m(0),t._v(" "),e("div",{staticClass:"section clearfix"},[t._m(1),t._v(" "),e("div",{staticClass:"right-auto"},[e("div",{staticClass:"bg-wrap",staticStyle:{"min-height":"765px"}},[t._m(2),t._v(" "),e("div",{staticClass:"table-wrap"},[e("table",{staticClass:"ftable",attrs:{width:"100%",border:"0",cellspacing:"0",cellpadding:"0"}},[e("tbody",[t._m(3),t._v(" "),t._l(t.myOrderData.message,function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(a.order_no))]),t._v(" "),e("td",{attrs:{align:"left"}},[t._v(t._s(a.accept_name))]),t._v(" "),e("td",{attrs:{align:"left"}},[e("strong",{staticStyle:{color:"red"}},[t._v("￥"+t._s(a.order_amount))]),t._v(" "),e("br"),t._v(" "+t._s(a.paymentTitle)+"\n                                            ")]),t._v(" "),e("td",{attrs:{align:"left"}},[t._v(t._s(t._f("dateFmt")(a.add_time,"YYYY-MM-DD HH:mm:ss")))]),t._v(" "),e("td",{attrs:{align:"left"}},[t._v("\n                                                "+t._s(a.statusName)+"\n                                            ")]),t._v(" "),e("td",{attrs:{align:"left"}},[e("router-link",{attrs:{to:"/site/orderInfo/"+a.id}},[t._v("查看订单")]),t._v(" "),e("br"),t._v(" "),1==a.status?e("router-link",{attrs:{to:"/site/payOrder/"+a.id}},[t._v("|去付款")]):t._e(),t._v(" "),e("br"),t._v(" "),e("a",{attrs:{href:"javascript:void(0)"}},[t._v("|取消")]),t._v(" "),e("br")],1)])})],2)]),t._v(" "),e("div",{staticClass:"page-foot"},[e("el-pagination",{attrs:{"current-page":t.pageIndex,"page-sizes":[10,20,30,100],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.myOrderData.totalcount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])])])])])])])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"section"},[e("div",{staticClass:"location"},[e("span",[t._v("当前位置：")]),t._v(" "),e("a",{attrs:{href:"/index.html"}},[t._v("首页")]),t._v(" >\n                        "),e("a",{attrs:{href:"#/site/member/center"}},[t._v("会员中心")]),t._v(">\n                        "),e("a",{staticClass:"router-link-exact-active ",attrs:{href:"#/site/member/orderlist"}},[t._v("我的订单")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"left-260"},[e("div",{staticClass:"bg-wrap"},[e("div",{staticClass:"avatar-box"},[e("a",{staticClass:"img-box",attrs:{href:"/user/center/avatar.html"}},[e("i",{staticClass:"iconfont icon-user-full"})]),t._v(" "),e("h3",[t._v("\n\n                                    ivanyb\n\n                                ")]),t._v(" "),e("p",[e("b",[t._v("注册会员")])])]),t._v(" "),e("div",{staticClass:"center-nav"},[e("ul",[e("li",[e("h2",[e("i",{staticClass:"iconfont icon-order"}),t._v(" "),e("span",[t._v("订单管理")])]),t._v(" "),e("div",{staticClass:"list"},[e("p",[e("a",{staticClass:"router-link-exact-active ",attrs:{href:"#/site/member/orderlist"}},[e("i",{staticClass:"iconfont icon-arrow-right"}),t._v("交易订单")])])])]),t._v(" "),e("li",[e("h2",[e("i",{staticClass:"iconfont icon-user"}),t._v(" "),e("span",[t._v("账户管理")])]),t._v(" "),e("div",{staticClass:"list"},[e("p",[e("a",{attrs:{href:"#/site/member/center"}},[e("i",{staticClass:"iconfont icon-arrow-right"}),t._v("账户资料")])]),t._v(" "),e("p",[e("a",{attrs:{href:"#/site/member/center"}},[e("i",{attrs:{"clrouter-linkss":"iconfont icon-router-linkrrow-right"}}),t._v("头像设置")])]),t._v(" "),e("p",[e("a",{attrs:{href:"#/site/member/center"}},[e("i",{staticClass:"iconfont icon-arrow-right"}),t._v("修改密码")])]),t._v(" "),e("p",[e("a",{attrs:{href:"javascript:void(0)"}},[e("i",{staticClass:"iconfont icon-arrow-right"}),t._v("退出登录")])])])])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"sub-tit"},[e("ul",[e("li",{staticClass:"selected"},[e("a",{attrs:{href:"/user/order-list.html"}},[t._v("交易订单")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("th",{attrs:{width:"16%",align:"left"}},[t._v("订单号")]),t._v(" "),e("th",{attrs:{width:"10%"}},[t._v("姓名")]),t._v(" "),e("th",{attrs:{width:"12%"}},[t._v("订单金额")]),t._v(" "),e("th",{attrs:{width:"11%"}},[t._v("下单时间")]),t._v(" "),e("th",{attrs:{width:"10%"}},[t._v("状态")]),t._v(" "),e("th",{attrs:{width:"12%"}},[t._v("操作")])])}];s._withStripped=!0;var r={render:s,staticRenderFns:i};a.a=r}});