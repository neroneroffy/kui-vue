/*! kui-vue v1.7.7 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{OsxW:function(e,n,t){"use strict";t.r(n);var u=t("X4Ai"),r=t("fZTk");for(var o in r)"default"!==o&&function(e){t.d(n,e,function(){return r[e]})}(o);var a=t("KHd+"),v=Object(a.a)(r.default,u.a,u.b,!1,null,null,null);n.default=v.exports},WvJ5:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var u={install:"npm i kui-loader --save-dev",webconfig:"module: {\n    rules: [\n        {\n          test: /.vue$/,\n          use: [\n            {\n              loader: 'vue-loader',\n              options: { }\n            },\n            {\n              loader: 'kui-loader',\n              options: { prefix: false }\n            }\n          ]\n        }\n    ]\n}"};n.default=u},X4Ai:function(e,n,t){"use strict";var u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("KUI-Loader")]),e._v(" "),t("h3",[e._v("用途")]),e._v(" "),t("p",[e._v("在vue 里面，自定义组件名称是无法和 原生的html组件 重名的， 在vue1.x 版本有这个限制，但是在vue2.x 以后，有虚拟DOM ，所以可以使用原生组件来命名自定义组件，但是有大小写区分(template/render模式)")]),e._v(" "),t("h3",[e._v("使用方法")]),e._v(" "),t("h4",[e._v("安装")]),e._v(" "),t("p",[e._v("通过 npm 安装 kui-loader")]),e._v(" "),t("Code",{attrs:{lang:"js"}},[e._v(e._s(e.code.install))]),e._v(" "),t("h4",[e._v("配置")]),e._v(" "),t("p",[e._v("配置 webpack，修改 vue-loader 的配置，如下：")]),e._v(" "),t("Code",{attrs:{lang:"js"}},[e._v(e._s(e.code.webconfig))]),e._v(" "),t("h4",[e._v("说明")]),e._v(" "),t("p",[e._v("可以直接写 <Switch> 标签；")]),e._v(" "),t("p",[e._v("参数 prefix 设置为 true 后，所有 kui 组件标签名都可以使用前缀 k-")])],1)},r=[];t.d(n,"a",function(){return u}),t.d(n,"b",function(){return r})},Xubj:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var u=o(t("WvJ5")),r=o(t("cF/K"));function o(e){return e&&e.__esModule?e:{default:e}}n.default={components:{Code:r.default},data:function(){return{code:u.default}}}},fZTk:function(e,n,t){"use strict";t.r(n);var u=t("Xubj"),r=t.n(u);for(var o in u)"default"!==o&&function(e){t.d(n,e,function(){return u[e]})}(o);n.default=r.a}}]);