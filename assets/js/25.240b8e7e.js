(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{184:function(t,n,a){"use strict";a.r(n);var s=a(0),e=Object(s.a)({},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("If you need to manage local data, you can do so with "),a("a",{attrs:{href:"https://github.com/apollographql/apollo-link-state",target:"_blank",rel:"noopener noreferrer"}},[t._v("apollo-link-state"),a("OutboundLink")],1),t._v(" and the "),a("code",[t._v("@client")]),t._v(" directive:")]),t._v(" "),t._m(1),a("p",[a("a",{attrs:{href:"https://codesandbox.io/s/zqqj82396p",target:"_blank",rel:"noopener noreferrer"}},[t._v("Example project"),a("OutboundLink")],1),t._v(" (thx @chriswingler)\n"),a("a",{attrs:{href:"https://codesandbox.io/s/x2jr96r8pp",target:"_blank",rel:"noopener noreferrer"}},[t._v("Todo App"),a("OutboundLink")],1),t._v(" (thx @NikkitaFTW)")]),t._v(" "),a("hr")])},[function(){var t=this.$createElement,n=this._self._c||t;return n("h1",{attrs:{id:"local-state"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#local-state","aria-hidden":"true"}},[this._v("#")]),this._v(" Local state")])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  apollo"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    hello"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gql"),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`\n      query {\n        hello @client {\n          msg\n        }\n      }\n    `")])]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("mounted")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// mutate the hello message")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$apollo\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("mutate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        mutation"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gql"),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`\n          mutation($msg: String!) {\n            updateHello(message: $msg) @client\n          }\n        `")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        variables"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          msg"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'hello from link-state!'")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="local-state.md";n.default=e.exports}}]);