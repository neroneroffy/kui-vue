webpackJsonp([1],{384:function(t,e,i){var l=i(0),n=i(441),o=i(443),s=l(n,o,!1,null,null,null);t.exports=s.exports},441:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{nav:[{title:"开始",child:[{title:"安装",link:"/install"},{title:"快速上手",link:"/start"},{title:"更新日志",link:"/log"},{title:"kyui-loader",link:"/kyui-loader"}]},{title:"基础组件",child:[{title:"按钮",sub:"Button",link:"/button"},{title:"输入框",sub:"Input",link:"/input"},{title:"多选框",sub:"Checkbox",link:"/checkbox"},{title:"单选框",sub:"Radio",link:"/radio"},{title:"开关",sub:"Switch",link:"/switch"},{title:"下拉框",sub:"Select",link:"/select"},{title:"布局",sub:"Layout",link:"/layout"},{title:"日期",sub:"datePicker",link:"/datepicker"},{title:"表格",sub:"Table",link:"/table"},{title:"分页",sub:"Page",link:"/page"},{title:"对话框",sub:"Modal",link:"/modal"},{title:"颜色",sub:"ColorPicker",link:"/colorpicker"},{title:"表单",sub:"Form",link:"/form"}]},{title:"其他",child:[{title:"github",link:""},{title:"支持作者",link:"/sponsor"},{title:"关于",link:"/index"}]}],logo:i(442)}},methods:{},created:function(){console.log(this.$route.path),this.nav.forEach(function(t){return t.child.forEach(function(t){return t.selected=!1})})}}},442:function(t,e,i){t.exports=i.p+"img/logo.png?65b281a"},443:function(t,e){var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"body"},[i("header",[i("img",{attrs:{src:t.logo}}),t._v("VUE KUI 使用文档\n  ")]),i("section",{staticClass:"main"},[i("Row",[i("Col",{attrs:{span:"4"}},[i("nav",{staticClass:"nav"},[i("menu",t._l(t.nav,function(e,l){return i("li",{key:l},[i("em"),i("h5",[t._v(t._s(e.title))]),t._l(e.child,function(e,l){return i("a",{key:l,class:{active:t.$route.path==e.link},attrs:{href:"#"+e.link}},[t._v(t._s(e.title)+"\n              "),i("span",[t._v(t._s(e.sub))])])})],2)}))])]),i("Col",{attrs:{span:"20"}},[i("div",{staticClass:"content"},[i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("router-view")],1)],1)])],1)],1),t._m(0,!1,!1)])},l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",[i("p",[t._v("Copyright ©2009-2018 "),i("a",{attrs:{href:"http://www.chuchur.com"}},[t._v("禅境花园")]),t._v(" by chuchur 粤ICP备17111365号 ")])])}];t.exports={render:i,staticRenderFns:l}}});