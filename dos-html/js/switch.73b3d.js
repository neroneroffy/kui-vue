/*! kui-vue v1.7.7 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"+GS5":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={base:'<p>{{checked}}</p>\n<Switch v-model="checked"></Switch>',theme:'<Switch :value="true"></Switch>\n<Switch :value="true" type="success"></Switch>\n<Switch :value="true" type="danger"></Switch>\n<Switch :value="true" type="warning"></Switch>',text:'<Switch :value="false" true-text="是" false-text="否"></Switch>',disabled:'<Switch :value="false" disabled></Switch>\n<Switch :value="true" disabled></Switch>\n<Switch :value="true" disabled true-text="是" false-text="否"></Switch>'};e.default=a},"7Z8s":function(t,e,s){"use strict";s.r(e);var a=s("SqTq"),i=s("QYmw");for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);var d=s("KHd+"),o=Object(d.a)(i.default,a.a,a.b,!1,null,null,null);e.default=o.exports},BybE:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[s("div",{ref:"demo",staticClass:"k-demo-main"},[s("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),s("div",{staticClass:"k-desc"},[s("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),s("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),s("a",{staticClass:"k-code-expan",on:{click:t.toggle}},[s("Icon",{attrs:{type:t.icons}})],1)])]),t._v(" "),s("div",{staticClass:"k-demo-line"}),t._v(" "),s("Collapse",[s("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},i=[];s.d(e,"a",function(){return a}),s.d(e,"b",function(){return i})},C8VU:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,i=s("z7BB"),n=(a=i)&&a.__esModule?a:{default:a};e.default=n.default},QGzR:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(s("+GS5")),i=n(s("C8VU"));function n(t){return t&&t.__esModule?t:{default:t}}e.default={components:{Demo:i.default},data:function(){return{code:a.default,checked:!1}}}},QYmw:function(t,e,s){"use strict";s.r(e);var a=s("QGzR"),i=s.n(a);for(var n in a)"default"!==n&&function(t){s.d(e,t,function(){return a[t]})}(n);e.default=i.a},SqTq:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",[t._v("Switch 开关")]),t._v(" "),s("Alert",[t._v("注意：没有使用 kui-loader 时，必须使用 k-switch 标签。")]),t._v(" "),s("h3",[t._v("代码示例")]),t._v(" "),s("Row",{attrs:{gutter:"8"}},[s("Col",{attrs:{span:"12"}},[s("Demo",{attrs:{title:"基本用法",layout:"vertical"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("span",{staticStyle:{padding:"0 10px",width:"50px",display:"inline-block"}},[t._v(t._s(t.checked))]),t._v(" "),s("k-switch",{model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}})],1),t._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("可使用\n        "),s("code",[t._v("v-model")]),t._v("进行数据双向绑定")]),t._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])]),t._v(" "),s("Demo",{attrs:{title:"主题",layout:"vertical"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("k-switch",{attrs:{value:!0}}),t._v(" "),s("k-switch",{attrs:{value:!0,type:"success"}}),t._v(" "),s("k-switch",{attrs:{value:!0,type:"danger"}}),t._v(" "),s("k-switch",{attrs:{value:!0,type:"warning"}})],1),t._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("设置\n        "),s("code",[t._v("type")]),t._v("属性可改变组件主题")]),t._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.theme))])])],1),t._v(" "),s("Col",{attrs:{span:"12"}},[s("Demo",{attrs:{title:"文字",layout:"vertical"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("k-switch",{attrs:{value:!1,"true-text":"是","false-text":"否"}})],1),t._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过\n        "),s("code",[t._v("true-text")]),t._v("和\n        "),s("code",[t._v("false-text")]),t._v("设置选中和非选中呈现文字")]),t._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.text))])]),t._v(" "),s("Demo",{attrs:{title:"禁用",layout:"vertical"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("k-switch",{attrs:{value:!1,disabled:""}}),t._v(" "),s("k-switch",{attrs:{value:!0,disabled:""}}),t._v(" "),s("k-switch",{attrs:{value:!0,disabled:"","true-text":"是","false-text":"否"}})],1),t._v(" "),s("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过\n        "),s("code",[t._v("disabled")]),t._v("属性设置组件是否被禁用")]),t._v(" "),s("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.disabled))])])],1)],1),t._v(" "),s("h3",[t._v("API")]),t._v(" "),t._m(0)],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"table-border"},[s("table",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("默认值")])]),t._v(" "),s("tr",[s("td",[t._v("value")]),t._v(" "),s("td",[t._v("指定当前是否选中，可以使用 v-model 双向绑定数据")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("disabled")]),t._v(" "),s("td",[t._v("禁用开关 ")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("type")]),t._v(" "),s("td",[t._v("主题颜色 可传入 success，warning，danger，primary ")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("true-text")]),t._v(" "),s("td",[t._v("当value为true时 ，显示的文字")]),t._v(" "),s("td",[t._v("String ")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("false-text")]),t._v(" "),s("td",[t._v("当value为false时 ，显示的文字")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("change")]),t._v(" "),s("td",[t._v("当value 改变时触发,返回true | false")]),t._v(" "),s("td",[t._v("Function")]),t._v(" "),s("td",[t._v("-")])])])])}];s.d(e,"a",function(){return a}),s.d(e,"b",function(){return i})},"U9/v":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(s("YEIV")),i=o(s("cF/K")),n=o(s("Ff65")),d=o(s("7+I9"));function o(t){return t&&t.__esModule?t:{default:t}}e.default={directives:{resize:d.default},components:{Code:i.default,Collapse:n.default},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"code-working":"code"},classes:function(){return["k-demo",(0,a.default)({},"k-demo-"+this.layout,this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?this.domHeight+"px":this.demoHeight+"px"}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:""+this.codeHeight}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}}},sOOp:function(t,e,s){"use strict";s.r(e);var a=s("U9/v"),i=s.n(a);for(var n in a)"default"!==n&&function(t){s.d(e,t,function(){return a[t]})}(n);e.default=i.a},z7BB:function(t,e,s){"use strict";s.r(e);var a=s("BybE"),i=s("sOOp");for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);var d=s("KHd+"),o=Object(d.a)(i.default,a.a,a.b,!1,null,null,null);e.default=o.exports}}]);