webpackJsonp([5],{335:function(t,e,s){"use strict";function i(t){n||s(364)}Object.defineProperty(e,"__esModule",{value:!0});var a=s(349),r=s(366),n=!1,o=s(196),l=i,c=o(a.a,r.a,!1,l,null,null);c.options.__file="src\\components\\goods\\goodslist.vue",e.default=c.exports},345:function(t,e,s){function i(t){for(var e=0;e<t.length;e++){var s=t[e],i=d[s.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](s.parts[a]);for(;a<s.parts.length;a++)i.parts.push(r(s.parts[a]));i.parts.length>s.parts.length&&(i.parts.length=s.parts.length)}else{for(var n=[],a=0;a<s.parts.length;a++)n.push(r(s.parts[a]));d[s.id]={id:s.id,refs:1,parts:n}}}}function a(){var t=document.createElement("style");return t.type="text/css",u.appendChild(t),t}function r(t){var e,s,i=document.querySelector("style["+h+'~="'+t.id+'"]');if(i){if(p)return _;i.parentNode.removeChild(i)}if(m){var r=f++;i=v||(v=a()),e=n.bind(null,i,r,!1),s=n.bind(null,i,r,!0)}else i=a(),e=o.bind(null,i),s=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else s()}}function n(t,e,s,i){var a=s?"":i.css;if(t.styleSheet)t.styleSheet.cssText=C(e,a);else{var r=document.createTextNode(a),n=t.childNodes;n[e]&&t.removeChild(n[e]),n.length?t.insertBefore(r,n[e]):t.appendChild(r)}}function o(t,e){var s=e.css,i=e.media,a=e.sourceMap;if(i&&t.setAttribute("media",i),g.ssrId&&t.setAttribute(h,e.id),a&&(s+="\n/*# sourceURL="+a.sources[0]+" */",s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=s;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(s))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=s(346),d={},u=l&&(document.head||document.getElementsByTagName("head")[0]),v=null,f=0,p=!1,_=function(){},g=null,h="data-vue-ssr-id",m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,s,a){p=s,g=a||{};var r=c(t,e);return i(r),function(e){for(var s=[],a=0;a<r.length;a++){var n=r[a],o=d[n.id];o.refs--,s.push(o)}e?(r=c(t,e),i(r)):r=[];for(var a=0;a<s.length;a++){var o=s[a];if(0===o.refs){for(var l=0;l<o.parts.length;l++)o.parts[l]();delete d[o.id]}}}};var C=function(){var t=[];return function(e,s){return t[e]=s,t.filter(Boolean).join("\n")}}()},346:function(t,e){t.exports=function(t,e){for(var s=[],i={},a=0;a<e.length;a++){var r=e[a],n=r[0],o=r[1],l=r[2],c=r[3],d={id:t+":"+a,css:o,media:l,sourceMap:c};i[n]?i[n].parts.push(d):s.push(i[n]={id:n,parts:[d]})}return s}},349:function(t,e,s){"use strict";e.a={data:function(){return{goodsData:{},goodsgroupList:[]}},created:function(){this.getGoodsData(),this.getGoodsGroupListData()},methods:{getGoodsData:function(){var t=this;this.$axios.get("site/goods/gettopdata/goods").then(function(e){t.goodsData=e.data.message})},getGoodsGroupListData:function(){var t=this;this.$axios.get("site/goods/getgoodsgroup").then(function(e){t.goodsgroupList=e.data.message})}}}},364:function(t,e,s){var i=s(365);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s(345)("1e9d4c70",i,!1,{})},365:function(t,e,s){e=t.exports=s(332)(!1),e.push([t.i,"\n.el-carousel__container {\n  height: 341px;\n}\n.el-carousel__item img {\n  width: 100%;\n  height: 100%;\n}\n",""])},366:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),t._v(" "),s("div",{staticClass:"section"},[s("div",{staticClass:"wrapper"},[s("div",{staticClass:"wrap-box"},[s("div",{staticClass:"left-220",staticStyle:{margin:"0px"}},[s("div",{staticClass:"banner-nav"},[s("ul",t._l(t.goodsData.catelist,function(e){return s("li",{key:e.id},[s("h3",[s("i",{staticClass:"iconfont icon-arrow-right"}),t._v(" "),s("span",[t._v(t._s(e.title))]),t._v(" "),s("p",t._l(e.subcates,function(e){return s("span",{key:e.id},[t._v("\n                                            "+t._s(e.title)+" \n                                        ")])}))]),t._v(" "),s("div",{staticClass:"item-box"},[s("dl",[s("dt",[s("a",{attrs:{href:"/goods/40.html"}},[t._v(t._s(e.title))])]),t._v(" "),s("dd",t._l(e.subcates,function(e){return s("a",{key:e.id,attrs:{href:"/goods/43.html"}},[t._v(t._s(e.title))])}))])])])}))])]),t._v(" "),s("div",{staticClass:"left-705"},[s("div",{staticClass:"banner-img"},[s("div",{staticClass:"focus-box",attrs:{id:"focus-box"}},[s("el-carousel",{attrs:{interval:5e3,arrow:"always"}},t._l(t.goodsData.sliderlist,function(t){return s("el-carousel-item",{key:t.id},[s("img",{attrs:{src:t.img_url,alt:""}})])}))],1)])]),t._v(" "),s("div",{staticClass:"left-220"},[s("ul",{staticClass:"side-img-list"},t._l(t.goodsData.toplist,function(e,i){return s("li",{key:e.id},[s("div",{staticClass:"img-box"},[s("label",[t._v(t._s(i+1))]),t._v(" "),s("img",{attrs:{src:e.img_url}})]),t._v(" "),s("div",{staticClass:"txt-box"},[s("a",{attrs:{href:"/goods/show-98.html"}},[t._v(t._s(e.title))]),t._v(" "),s("span",[t._v(t._s(t._f("dateFmt")(e.add_time)))])])])}))])])])]),t._v(" "),t._l(t.goodsgroupList,function(e){return s("div",{key:e.level1cateid,staticClass:"section"},[s("div",{staticClass:"main-tit"},[s("h2",[t._v(t._s(e.catetitle))]),t._v(" "),s("p",[t._l(e.level2catelist,function(e){return s("a",{key:e.subcateid,attrs:{href:"/goods/43.html"}},[t._v(t._s(e.subcatetitle))])}),t._v(" "),t._m(1,!0)],2)]),t._v(" "),s("div",{staticClass:"wrapper clearfix"},[s("div",{staticClass:"wrap-box"},[s("ul",{staticClass:"img-list"},t._l(e.datas,function(e){return s("li",{key:e.artID},[s("router-link",{attrs:{to:"/site/goodsinfo/"+e.artID}},[s("div",{staticClass:"img-box"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.img_url,expression:"subitem.img_url"}]})]),t._v(" "),s("div",{staticClass:"info"},[s("h3",[t._v(t._s(e.artTitle))]),t._v(" "),s("p",{staticClass:"price"},[s("b",[t._v(t._s(e.sell_price))]),t._v("元")]),t._v(" "),s("p",[s("strong",[t._v("库存 "+t._s(e.stock_quantity))]),t._v(" "),s("span",[t._v("市场价：\n                                        "),s("s",[t._v(t._s(e.market_price))])])])])])],1)}))])])])})],2)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section"},[s("div",{staticClass:"location"},[s("span",[t._v("当前位置：")]),t._v(" "),s("a",{staticClass:"router-link-active",attrs:{href:"#/"}},[t._v("首页")]),t._v(" >\n            "),s("a",{staticClass:"router-link-exact-active router-link-active",attrs:{href:"#/site/goodslist"}},[t._v("购物商城")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{href:"/goods/40.html"}},[t._v("更多\n                    "),s("i",[t._v("+")])])}];i._withStripped=!0;var r={render:i,staticRenderFns:a};e.a=r}});