(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{163:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("目前已适配：")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),a("p",[t._v("不仅如此，还有一些其他功能：")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),a("p",[t._v("拿以下 api 地址举例：")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),a("p",[a("router-link",{attrs:{to:"./detail-config.html"}},[t._v("更多配置请点击这里查看")])],1),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("小程序端建议使用 "),a("a",{attrs:{href:"https://tuateam.github.io/tua-mp/tua-mp-cli/",target:"_blank",rel:"noopener noreferrer"}},[t._v("@tua-mp/cli"),a("OutboundLink")],1),t._v(" 一键生成 api。")]),t._v(" "),t._m(22)]),t._v(" "),a("p",[a("router-link",{attrs:{to:"./../config/"}},[t._v("配置的详细说明点这里")])],1)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍","aria-hidden":"true"}},[this._v("#")]),this._v(" 介绍")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"tua-api-是什么？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tua-api-是什么？","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v("tua-api")]),this._v(" 是什么？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("tua-api")]),this._v(" 是一个针对发起 api 请求提供辅助功能的库。采用 ES6+ 语法，将全部 api 使用 Promise 包裹，并采用 jest 进行了完整的单元测试。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("web 端："),s("code",[this._v("tua-api")])]),this._v(" "),s("li",[this._v("小程序端："),s("code",[this._v("tua-api/dist/mp")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"tua-api-能干什么？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tua-api-能干什么？","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v("tua-api")]),this._v(" 能干什么？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("tua-api")]),this._v(" 能实现统一管理 api 配置（例如一般放在 "),s("code",[this._v("src/apis/")]),this._v(" 下）。经过处理后，业务侧代码只需要这样写即可：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" fooApi "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'@/apis/'")]),t._v("\n\nfooApi\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("bar")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'1'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'2'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 发起请求，a、b 是请求参数")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("then")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("       "),a("span",{attrs:{class:"token comment"}},[t._v("// 收到响应")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("catch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),a("span",{attrs:{class:"token comment"}},[t._v("// 处理错误")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("参数校验")]),this._v(" "),s("li",[this._v("默认参数")]),this._v(" "),s("li",[this._v("中间件（koa 风格）")]),this._v(" "),s("li",[this._v("...")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 甚至可以更进一步和 tua-storage 配合使用")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" TuaStorage "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'tua-storage'")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" storage "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("TuaStorage")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fetchParam "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    key"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fooApi"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bar"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    syncParams"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'a'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'b'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 过期时间，默认值为实例化时的值，以秒为单位")]),t._v("\n    expires"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 是否直接调用同步函数更新数据，默认为 false")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 适用于需要强制更新数据的场景，例如小程序中的下拉刷新")]),t._v("\n    isForceUpdate"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nstorage\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("load")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fetchParam"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("then")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("catch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"怎么写-api-配置？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#怎么写-api-配置？","aria-hidden":"true"}},[this._v("#")]),this._v(" 怎么写 "),s("code",[this._v("api")]),this._v(" 配置？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("https://example-base.com/foo/bar/something/create")]),this._v(" "),s("li",[this._v("https://example-base.com/foo/bar/something/modify")]),this._v(" "),s("li",[this._v("https://example-base.com/foo/bar/something/delete")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"地址结构划分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#地址结构划分","aria-hidden":"true"}},[this._v("#")]),this._v(" 地址结构划分")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("以上地址，一般将其分为"),s("code",[this._v("3")]),this._v("部分：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("host: "),a("code",[t._v("https://example-base.com/foo/bar/")])]),t._v(" "),a("li",[t._v("prefix: "),a("code",[t._v("something")])]),t._v(" "),a("li",[t._v("pathList: "),a("code",[t._v("[ 'create', 'modify', 'delete' ]")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"文件结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件结构","aria-hidden":"true"}},[this._v("#")]),this._v(" 文件结构")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("api/")]),this._v(" 一般是这样的文件结构：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v(".\n└── apis\n    ├── prefix-1.js\n    ├── prefix-2.js\n    ├── something.js // <-- 以上的 api 地址会放在这里\n    └── index.js\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"基础配置内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础配置内容","aria-hidden":"true"}},[this._v("#")]),this._v(" 基础配置内容")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// src/apis/something.js")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 请求的公用服务器地址。")]),t._v("\n    host"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'http://example-base.com/foo/bar/'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 请求的中间路径，建议与文件同名，以便后期维护。")]),t._v("\n    prefix"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'something'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 接口地址数组")]),t._v("\n    pathList"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'create'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'modify'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'delete'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"配置导出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置导出","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置导出")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("最后来看一下 "),s("code",[this._v("apis/index.js")]),this._v(" 该怎么写：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" TuaApi "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'tua-api'")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 小程序用 dist/mp")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 初始化")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tuaApi "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("TuaApi")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 使用中间件")]),t._v("\ntuaApi\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("use")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// 请求发起前")]),t._v("\n        console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'before: '")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("next")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// 响应返回后")]),t._v("\n        console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'after: '")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 链式调用")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("use")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("...")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fakeGet "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" tuaApi"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getApi")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'./fake-get'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fakePost "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" tuaApi"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getApi")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'./fake-post'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ tuamp add api "),s("span",{attrs:{class:"token operator"}},[this._v("<")]),this._v("api-name"),s("span",{attrs:{class:"token operator"}},[this._v(">")]),this._v("\n")])])])}],!1,null,null,null);e.options.__file="README.md";s.default=e.exports}}]);