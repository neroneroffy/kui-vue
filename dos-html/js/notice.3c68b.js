/*! kui-vue v1.7.7 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"+slQ":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=c(n("iPgR")),i=c(n("cF/K")),s=c(n("C8VU"));function c(t){return t&&t.__esModule?t:{default:t}}e.default={components:{Demo:s.default,Code:i.default},data:function(){return{code:o.default}},methods:{info:function(){this.$Notice.open({title:"通知的标题",content:"通知的描述",duration:5})},notice:function(t){this.$Notice[t]({title:"通知的标题",content:"通知的描述",duration:5})}}}},"2J9/":function(t,e,n){"use strict";n.r(e);var o=n("SzT7"),i=n("LH1O");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);var c=n("KHd+"),r=Object(c.a)(i.default,o.a,o.b,!1,null,null,null);e.default=r.exports},BybE:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[n("div",{ref:"demo",staticClass:"k-demo-main"},[n("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),n("div",{staticClass:"k-desc"},[n("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),n("a",{staticClass:"k-code-expan",on:{click:t.toggle}},[n("Icon",{attrs:{type:t.icons}})],1)])]),t._v(" "),n("div",{staticClass:"k-demo-line"}),t._v(" "),n("Collapse",[n("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},C8VU:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,i=n("z7BB"),s=(o=i)&&o.__esModule?o:{default:o};e.default=s.default},LH1O:function(t,e,n){"use strict";n.r(e);var o=n("+slQ"),i=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);e.default=i.a},SzT7:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Notice 通知提醒")]),t._v(" "),n("h3",[t._v("代码示例")]),t._v(" "),n("Demo",{attrs:{title:"基础用法"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Button",{attrs:{type:"primary"},on:{click:t.info}},[t._v("普通提示 ")])],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("code",[t._v("Notice")]),t._v("的基本用法")]),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])]),t._v(" "),n("Demo",{attrs:{title:"带图标的提醒"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Button",{attrs:{type:"primary"},on:{click:function(e){t.notice("info")}}},[t._v("消息提示 ")]),t._v(" "),n("Button",{attrs:{type:"warning"},on:{click:function(e){t.notice("warning")}}},[t._v("警告提示 ")]),t._v(" "),n("Button",{attrs:{type:"success"},on:{click:function(e){t.notice("success")}}},[t._v("成功提示 ")]),t._v(" "),n("Button",{attrs:{type:"danger"},on:{click:function(e){t.notice("error")}}},[t._v("错误提示 ")])],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过调用不同的方法，可展示不同的类型")]),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.withIcon))])]),t._v(" "),n("h3",[t._v("API")]),t._v(" "),n("Alert",[t._v("组件提供了一些静态方法，使用方式如下")]),t._v(" "),n("Code",{attrs:{lang:"javascript"}},[t._v(t._s(t.code.static))]),t._v(" "),n("Alert",[t._v("另外提供了全局配置和全局销毁的方法：")]),t._v(" "),n("Code",{attrs:{lang:"js"}},[t._v(t._s(t.code.destory))]),t._v(" "),n("p",[t._v("参数 options 为对象，具体说明如下：")]),t._v(" "),t._m(0)],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-border"},[n("table",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])]),t._v(" "),n("tr",[n("td",[t._v("title")]),t._v(" "),n("td",[t._v("通知提醒的标题 ")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("content")]),t._v(" "),n("td",[t._v("提示内容")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("duration")]),t._v(" "),n("td",[t._v("自动关闭的延时，单位秒，不关闭可以写 0")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("3")])]),t._v(" "),n("tr",[n("td",[t._v("onClose")]),t._v(" "),n("td",[t._v("关闭时的回调")]),t._v(" "),n("td",[t._v("Function")]),t._v(" "),n("td",[t._v("-")])])])])}];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},"U9/v":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("YEIV")),i=r(n("cF/K")),s=r(n("Ff65")),c=r(n("7+I9"));function r(t){return t&&t.__esModule?t:{default:t}}e.default={directives:{resize:c.default},components:{Code:i.default,Collapse:s.default},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"code-working":"code"},classes:function(){return["k-demo",(0,o.default)({},"k-demo-"+this.layout,this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?this.domHeight+"px":this.demoHeight+"px"}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:""+this.codeHeight}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}}},iPgR:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={base:'<Button @click="info" type="primary">普通提示 </Button>\n<script>\n  info() {\n    this.$Notice.open({\n      title: "通知的标题",\n      content: "通知的描述",\n      duration: 5\n    });\n  }\n<\/script>',withIcon:'<Button @click="notice(\'info\')" type="primary">消息提示 </Button>\n<Button @click="notice(\'warning\')" type="warning">警告提示 </Button>\n<Button @click="notice(\'success\')" type="success">成功提示 </Button>\n<Button @click="notice(\'error\')" type="danger">错误提示 </Button>\n<script>\n  notice(type) {\n    this.$Notice[type]({\n      title: "通知的标题",\n      content: "通知的描述",\n      duration: 5\n    });\n  }\n<\/script>',static:"this.$Notice.info(options)\nthis.$Notice.success(options)\nthis.$Notice.warning(options)\nthis.$Notice.error(options)",destory:"this.$Notice.open(options)\nthis.$Notice.destroy()"};e.default=o},sOOp:function(t,e,n){"use strict";n.r(e);var o=n("U9/v"),i=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);e.default=i.a},z7BB:function(t,e,n){"use strict";n.r(e);var o=n("BybE"),i=n("sOOp");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);var c=n("KHd+"),r=Object(c.a)(i.default,o.a,o.b,!1,null,null,null);e.default=r.exports}}]);