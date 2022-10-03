(window.webpackJsonp=window.webpackJsonp||[]).push([[286],{644:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"streams"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#streams"}},[t._v("#")]),t._v(" Streams")]),t._v(" "),s("p",[t._v("Immudb provides stream capabilities.\nInternally it uses “delimited” messages technique, every chunk has a trailer that describe the length of the message. In this way the receiver can recompose chunk by chunk the original payload.\nStream methods accepts a "),s("code",[t._v("readers")]),t._v(" as a part of input and output arguments. In this way the large value is decomposed in small chunks that are streamed over the wire.\nClient don't need to allocate the entire value when sending and can read the received one progressively.\nFor example a client could send a large file much greater than available ram memory.")]),t._v(" "),s("blockquote",[s("p",[t._v("At the moment "),s("code",[t._v("immudb")]),t._v(" is not yet able to write the data without allocating the entire received object, but in the next release it will be possible a complete communication without allocations.\nThe maximum size of a transaction sent with streams is temporarily limited to a payload of 32M.")])]),t._v(" "),s("p",[t._v("Supported stream method now available in the SDK are:")]),t._v(" "),s("CustomList",{staticClass:"no-horizontal-padding",attrs:{size:"wide"}},[s("ul",[s("li",[t._v("StreamSet")]),t._v(" "),s("li",[t._v("StreamGet")]),t._v(" "),s("li",[t._v("StreamVerifiedSet")]),t._v(" "),s("li",[t._v("StreamVerifiedGet")]),t._v(" "),s("li",[t._v("StreamScan")]),t._v(" "),s("li",[t._v("StreamZScan")]),t._v(" "),s("li",[t._v("StreamHistory")]),t._v(" "),s("li",[t._v("StreamExecAll")])])]),t._v(" "),s("Tabs",{attrs:{type:"border-card"}},[s("Tab",{attrs:{label:"Go"}},[s("p",[t._v("Here an example on how to send a large file and a regular key value to immudb.")]),t._v(" "),s("p",[t._v("It's possible to specify the chunk size of the stream with "),s("code",[t._v("WithStreamChunkSize()")]),t._v(" method.")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bytes"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"context"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"log"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"os"')]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/codenotary/immudb/pkg/api/schema"')]),t._v("\n\timmudb "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/codenotary/immudb/pkg/client"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/codenotary/immudb/pkg/stream"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\topts "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" immudb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("DefaultOptions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithAddress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithPort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3322")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\tclient "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" immudb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithOptions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("opts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\terr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("OpenSession")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\tcontext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("TODO")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("byte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("`immudb`")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("byte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("`immudb`")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"defaultdb"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tlog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fatal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defer")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CloseSession")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("TODO")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\tmyFileName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main.go"')]),t._v("\n\tkey1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("byte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tval1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("byte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"val1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myFileName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tlog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fatal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defer")]),t._v(" f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Close")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tstats"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Stat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myFileName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tlog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fatal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\tkv1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("stream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("KeyValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("stream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ValueSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tContent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bytes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewBuffer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("stream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ValueSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tContent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bytes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewBuffer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tkv2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("stream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("KeyValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("stream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ValueSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tContent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bytes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewBuffer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("byte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myFileName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myFileName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("stream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ValueSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tContent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stats"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\tkvs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("stream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("KeyValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("kv1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" kv2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("StreamSet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("TODO")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" kvs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tlog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fatal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tentry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("StreamGet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\tcontext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("TODO")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("schema"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("KeyRequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("byte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myFileName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tlog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fatal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"returned key %s"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" entry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("Tab",{attrs:{label:"Java"}},[s("p",[t._v("Streams is not supported yet in this language SDK.\nDo you want to make a feature request or help out? Open an issue on "),s("a",{attrs:{href:"https://github.com/codenotary/immudb4j/issues/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java sdk github project"),s("OutboundLink")],1)])]),t._v(" "),s("Tab",{attrs:{label:"Python"}},[s("p",[t._v("Streams is not supported yet in this language SDK.\nDo you want to make a feature request or help out? Open an issue on "),s("a",{attrs:{href:"https://github.com/codenotary/immudb-py/issues/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python sdk github project"),s("OutboundLink")],1)])]),t._v(" "),s("Tab",{attrs:{label:"Node.js"}},[s("p",[t._v("Streams is not supported yet in this language SDK.\nDo you want to make a feature request or help out? Open an issue on "),s("a",{attrs:{href:"https://github.com/codenotary/immudb-node/issues/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js sdk github project"),s("OutboundLink")],1)])]),t._v(" "),s("Tab",{attrs:{label:".Net"}},[s("p",[t._v("Streams is not supported yet in this language SDK.\nDo you want to make a feature request or help out? Open an issue on "),s("a",{attrs:{href:"https://github.com/codenotary/immudb4dotnet/issues/new",target:"_blank",rel:"noopener noreferrer"}},[t._v(".Net sdk github project"),s("OutboundLink")],1)])]),t._v(" "),s("Tab",{attrs:{label:"Others"}},[s("p",[t._v("If you're using another development language, please refer to the "),s("RouterLink",{attrs:{to:"/master/immugw/"}},[t._v("immugw")]),t._v(" option.")],1)])],1),t._v(" "),s("h3",{attrs:{id:"chunked-reading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chunked-reading"}},[t._v("#")]),t._v(" Chunked reading")]),t._v(" "),s("p",[t._v("It's possible to read returned value chunk by chunk if needed. This grant to the clients capabilities to handle data coming from immudb  chunk by chunk")]),t._v(" "),s("Tabs",{attrs:{type:"border-card"}},[s("Tab",{attrs:{label:"Go"}},[s("p",[t._v("To read chunk by chunk the inner gRPC protobuffer client is needed.\nThen it's possible to use "),s("code",[t._v("kvStreamReceiver")]),t._v(" to retrieve the key and a value reader. Such reader will fill provided byte array with received data and will return the number of read bytes or error.\nIf no message is present it returns 0 and io.EOF. If the message is complete it returns 0 and nil, in that case successive calls to Read will returns a new message.")]),t._v(" "),s("blockquote",[s("p",[t._v("There are several receivers available (zStreamReceiver, vEntryStreamReceiver, execAllStreamReceiver) and also a primitive receiver MsgReceiver. The last one can be used to receive a simple row []byte message without additional logics.\n<<< @/src/code-examples/go/develop-kv-streams-chunked-reading/main.go")])])]),t._v(" "),s("Tab",{attrs:{label:"Java"}},[s("p",[t._v("Streams is not supported yet in this language SDK.\nDo you want to make a feature request or help out? Open an issue on "),s("a",{attrs:{href:"https://github.com/codenotary/immudb4j/issues/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java sdk github project"),s("OutboundLink")],1)])]),t._v(" "),s("Tab",{attrs:{label:"Python"}},[s("p",[t._v("Streams is not supported yet in this language SDK.\nDo you want to make a feature request or help out? Open an issue on "),s("a",{attrs:{href:"https://github.com/codenotary/immudb-py/issues/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python sdk github project"),s("OutboundLink")],1)])]),t._v(" "),s("Tab",{attrs:{label:"Node.js"}},[s("p",[t._v("Streams is not supported yet in this language SDK.\nDo you want to make a feature request or help out? Open an issue on "),s("a",{attrs:{href:"https://github.com/codenotary/immudb-node/issues/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js sdk github project"),s("OutboundLink")],1)])]),t._v(" "),s("Tab",{attrs:{label:".Net"}},[s("p",[t._v("Streams is not supported yet in this language SDK.\nDo you want to make a feature request or help out? Open an issue on "),s("a",{attrs:{href:"https://github.com/codenotary/immudb4dotnet/issues/new",target:"_blank",rel:"noopener noreferrer"}},[t._v(".Net sdk github project"),s("OutboundLink")],1)])]),t._v(" "),s("Tab",{attrs:{label:"Others"}},[s("p",[t._v("If you're using another development language, please refer to the "),s("RouterLink",{attrs:{to:"/master/immugw/"}},[t._v("immugw")]),t._v(" option.")],1)])],1)],1)}),[],!1,null,null,null);a.default=e.exports}}]);