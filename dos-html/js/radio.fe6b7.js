/*! kui-vue v1.7.5 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"2A6t":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=d(a("r7e0")),n=d(a("C8VU"));function d(t){return t&&t.__esModule?t:{default:t}}e.default={components:{Demo:n.default},data:function(){return{code:o.default,checked:!0,data:"苹果🍎"}},methods:{change:function(t){console.log(t)}}}},BybE:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[a("div",{ref:"demo",staticClass:"k-demo-main"},[a("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),a("div",{staticClass:"k-desc"},[a("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),a("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),a("a",{staticClass:"k-code-expan",on:{click:t.toggle}},[a("Icon",{attrs:{type:t.icons}})],1)])]),t._v(" "),a("div",{staticClass:"k-demo-line"}),t._v(" "),a("Collapse",[a("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},n=[];a.d(e,"a",function(){return o}),a.d(e,"b",function(){return n})},C8VU:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,n=a("z7BB"),d=(o=n)&&o.__esModule?o:{default:o};e.default=d.default},DlhJ:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("Radio 单选框")]),t._v(" "),a("h3",[t._v("代码示例")]),t._v(" "),a("Row",{attrs:{gutter:"8"}},[a("Col",{attrs:{span:"12"}},[a("Demo",{attrs:{title:"基础",layout:"vertical"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("span",[t._v(t._s(t.checked))]),t._v(" "),a("Radio",{on:{change:t.change},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("测试")]),t._v(" "),a("Button",{staticStyle:{margin:"0"},attrs:{mini:""},on:{click:function(e){t.checked=!t.checked}}},[t._v("Click me")])],1),t._v(" "),a("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("单独使用可使用\n        "),a("code",[t._v("v-model")]),t._v("双向绑定数据")]),t._v(" "),a("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])])],1),t._v(" "),a("Col",{attrs:{span:"12"}},[a("Demo",{attrs:{title:"禁用",layout:"vertical"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("Radio",{attrs:{label:"葡萄🍇",disabled:"",value:!0}}),t._v(" "),a("Radio",{attrs:{label:"梨子🍐",disabled:""}})],1),t._v(" "),a("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过\n        "),a("code",[t._v("disabled")]),t._v("设置组件是否被禁用")]),t._v(" "),a("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.disabled))])])],1)],1),t._v(" "),a("Demo",{attrs:{title:"组合使用"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("p",[t._v(t._s(t.data))]),t._v(" "),a("RadioGroup",{on:{change:t.change},model:{value:t.data,callback:function(e){t.data=e},expression:"data"}},[a("Radio",{attrs:{label:"苹果🍎"}}),t._v(" "),a("Radio",{attrs:{label:"橘子🍊"}}),t._v(" "),a("Radio",{attrs:{label:"香蕉🍌"}}),t._v(" "),a("Radio",{attrs:{label:"栗子🌰"}}),t._v(" "),a("Radio",{attrs:{label:"葡萄🍇"}}),t._v(" "),a("Radio",{attrs:{label:"梨子🍐",disabled:""}})],1),t._v(" "),a("Button",{on:{click:function(e){t.data=""}}},[t._v("清除")]),t._v(" "),a("Button",{on:{click:function(e){t.data="苹果🍎"}}},[t._v("选中苹果")])],1),t._v(" "),a("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("结合\n      "),a("code",[t._v("RadioGroup")]),t._v("可以组合使用")]),t._v(" "),a("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.group))])]),t._v(" "),a("h3",[t._v("Radio API")]),t._v(" "),t._m(0),t._v(" "),a("h3",[t._v("RadioGroup API")]),t._v(" "),t._m(1)],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table-border"},[a("table",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")])]),t._v(" "),a("tr",[a("td",[t._v("value")]),t._v(" "),a("td",[t._v("只在单独使用时有效。可以使用 v-model 双向绑定数据")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("label")]),t._v(" "),a("td",[t._v("只在组合使用时有效。指定当前选项的 value 值，组合会自动判断当前选择的项目")]),t._v(" "),a("td",[t._v(" String | Number")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("disabled")]),t._v(" "),a("td",[t._v("是否禁用当前项")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("change")]),t._v(" "),a("td",[t._v("在选项状态发生改变时触发，返回当前状态")]),t._v(" "),a("td",[t._v("Function")]),t._v(" "),a("td",[t._v("-")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table-border"},[a("table",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")])]),t._v(" "),a("tr",[a("td",[t._v("value")]),t._v(" "),a("td",[t._v("只在单独使用时有效。可以使用 v-model 双向绑定数据")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("change")]),t._v(" "),a("td",[t._v("在选项状态发生改变时触发，返回当前选中的项")]),t._v(" "),a("td",[t._v("Function")]),t._v(" "),a("td",[t._v("-")])])])])}];a.d(e,"a",function(){return o}),a.d(e,"b",function(){return n})},JiyS:function(t,e,a){"use strict";a.r(e);var o=a("2A6t"),n=a.n(o);for(var d in o)"default"!==d&&function(t){a.d(e,t,function(){return o[t]})}(d);e.default=n.a},PfxS:function(t,e,a){"use strict";a.r(e);var o=a("DlhJ"),n=a("JiyS");for(var d in n)"default"!==d&&function(t){a.d(e,t,function(){return n[t]})}(d);var i=a("KHd+"),l=Object(i.a)(n.default,o.a,o.b,!1,null,null,null);e.default=l.exports},"U9/v":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=l(a("YEIV")),n=l(a("cF/K")),d=l(a("Ff65")),i=l(a("7+I9"));function l(t){return t&&t.__esModule?t:{default:t}}e.default={directives:{resize:i.default},components:{Code:n.default,Collapse:d.default},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"code-working":"code"},classes:function(){return["k-demo",(0,o.default)({},"k-demo-"+this.layout,this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?this.domHeight+"px":this.demoHeight+"px"}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:""+this.codeHeight}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}}},r7e0:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={base:'<p>{{checked}}</p>\n<Radio v-model="checked" @change="change">测试</Radio>\n<Button @click="checked=!checked">Click me</Button>',disabled:'<Radio label="葡萄🍇" disabled :value="true"></Radio>\n<Radio label="梨子🍐" disabled></Radio>',group:'<p>{{data}}</p>\n<RadioGroup v-model="data" @change="change">\n  <Radio label="苹果🍎"></Radio>\n  <Radio label="橘子🍊"></Radio>\n  <Radio label="香蕉🍌"></Radio>\n  <Radio label="栗子🌰"></Radio>\n  <Radio label="葡萄🍇"></Radio>\n  <Radio label="梨子🍐" disabled></Radio>\n</RadioGroup>\n<Button @click="data=\'\'">清除</Button>\n<Button @click="data=\'苹果🍎\'">选中苹果</Button>\ndata() {\n    return {\n      checked:true,\n      data: "苹果🍎",\n    };\n  },\n  methods: {\n    change(v) {\n      console.log(v);\n    }\n  }'};e.default=o},sOOp:function(t,e,a){"use strict";a.r(e);var o=a("U9/v"),n=a.n(o);for(var d in o)"default"!==d&&function(t){a.d(e,t,function(){return o[t]})}(d);e.default=n.a},z7BB:function(t,e,a){"use strict";a.r(e);var o=a("BybE"),n=a("sOOp");for(var d in n)"default"!==d&&function(t){a.d(e,t,function(){return n[t]})}(d);var i=a("KHd+"),l=Object(i.a)(n.default,o.a,o.b,!1,null,null,null);e.default=l.exports}}]);