(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{207:function(t,a,s){"use strict";s.r(a);var n=s(0),o=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[s("em",[s("a",{attrs:{href:"https://github.com/Akryum/apollo-server-example/blob/master/schema.js#L21",target:"_blank",rel:"noopener noreferrer"}},[t._v("Here"),s("OutboundLink")],1),t._v(" is a simple example for the server.")])]),t._v(" "),s("p",[t._v("Sometimes\nyour dataset is so large that you want to load it chunk by chunk.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("Example:")]),t._v(" "),t._m(3)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"pagination-with-fetchmore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pagination-with-fetchmore","aria-hidden":"true"}},[this._v("#")]),this._v(" Pagination with "),a("code",[this._v("fetchMore")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Use the "),a("code",[this._v("fetchMore()")]),this._v(" method on a Smart Query to load more data.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Don't forget to include the "),s("code",[t._v("__typename")]),t._v(" to the new result.")]),t._v(" "),s("p",[t._v("Don't change the returned initial variables when using "),s("code",[t._v("variables()")]),t._v(", or data of list would be lost.")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Pagination"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tag-list"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("v-if")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tagsPage"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tag-list-item"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("v-for")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tag in tagsPage.tags"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        {{ tag.id }} - {{ tag.label }} - {{ tag.type }}\n      "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("actions"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("v-if")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("showMoreEnabled"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("@click")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("showMore"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Show more"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token script language-javascript"}},[t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" gql "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'graphql-tag'")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pageSize "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("10")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'app'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  data"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    page"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    showMoreEnabled"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  apollo"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// Pages")]),t._v("\n    tagsPage"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token comment"}},[t._v("// GraphQL Query")]),t._v("\n      query"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gql"),s("span",{attrs:{class:"token template-string"}},[s("span",{attrs:{class:"token string"}},[t._v("`query tagsPage ($page: Int!, $pageSize: Int!) {\n        tagsPage(page: $page, size: $pageSize) {\n          tags {\n            id\n            label\n            type\n          }\n          hasMore\n        }\n      }`")])]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{attrs:{class:"token comment"}},[t._v("// Initial variables")]),t._v("\n      variables"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        page"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        pageSize"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token function"}},[t._v("showMore")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("page "),s("span",{attrs:{class:"token operator"}},[t._v("++")]),t._v("\n      "),s("span",{attrs:{class:"token comment"}},[t._v("// Fetch more data and transform the original result")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$apollo"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queries"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tagsPage"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("fetchMore")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// New variables")]),t._v("\n        variables"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          page"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("page"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          pageSize"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// Transform the previous result with new data")]),t._v("\n        updateQuery"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("previousResult"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" fetchMoreResult "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" newTags "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" fetchMoreResult"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tagsPage"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tags\n          "),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hasMore "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" fetchMoreResult"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tagsPage"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hasMore\n\n          "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("showMoreEnabled "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" hasMore\n\n          "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            tagsPage"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              __typename"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" previousResult"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tagsPage"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__typename"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),s("span",{attrs:{class:"token comment"}},[t._v("// Merging the tag list")]),t._v("\n              tags"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("previousResult"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tagsPage"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tags"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("newTags"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              hasMore"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])}],!1,null,null,null);o.options.__file="pagination.md";a.default=o.exports}}]);