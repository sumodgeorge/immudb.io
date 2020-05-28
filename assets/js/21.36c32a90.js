(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{371:function(t,s,a){"use strict";a.r(s);var e=a(43),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("section",{staticClass:"section",attrs:{"aria-labelledby":"main-title"}},[a("div",{staticClass:"features"},[a("div",{staticClass:"feature"},[a("img",{attrs:{src:t.$withBase("/features/immutable2.svg"),alt:"Immutable"}}),t._v(" "),a("h2",[t._v("Immutable")]),t._v(" "),a("p",[t._v("Any kind of key-value. Clients can choose how to structure data.")]),t._v(" "),a("p",[a("strong",[t._v("No data mutation APIs")]),t._v(" are provided.")]),t._v(" "),a("p",[t._v("Data is never overwritten, so multiple versions of the same key co-exist and are verfiable.")])]),t._v(" "),a("div",{staticClass:"feature"},[a("img",{attrs:{src:t.$withBase("/features/auditable3.svg"),alt:"Auditable"}}),t._v(" "),a("h2",[t._v("Auditable")]),t._v(" "),a("p",[t._v("Tamper-evident history system.")]),t._v(" "),a("p",[t._v("Clients and auditors want "),a("strong",[t._v("cryptographic proof")]),t._v("  of data inclusion and historical consistency in real time.")]),t._v(" "),a("p",[t._v("If tampered, clients and auditors will notice that and take actions.")])]),t._v(" "),a("div",{staticClass:"feature"},[a("img",{attrs:{src:t.$withBase("/features/secure2.svg"),alt:"Secure"}}),t._v(" "),a("h2",[t._v("Secure")]),t._v(" "),a("p",[t._v("Data ownership is verifiable by clients and auditors.")]),t._v(" "),a("p",[t._v("Sign your data using "),a("strong",[t._v("Public-Key Cryptography")]),t._v(".")]),t._v(" "),a("p",[t._v("Keys additions and revocations is immutably stored into the database")])])])]),t._v(" "),a("section",{staticClass:"section _text-center _padding-top-0",attrs:{id:"easy-setup-section"}},[a("h2",[t._v("Easy setup")]),t._v(" "),a("p",[t._v("\n        Build Docker images based on the Dockerfiles in the GitHub repository\n        for the most common architectures or use the prebuild ones on Dockerhub for Linux.\n    ")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker run -it -d -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3322")]),t._v(":3322 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9497")]),t._v(":9497 --name immudb codenotary/immudb:latest\n")])])])]),t._v(" "),a("div",{staticClass:"section-wrapper -primary",attrs:{id:"video-section"}},[a("section",{staticClass:"section"},[a("div",{staticClass:"section-center"},[a("h2",{attrs:{id:"why-immudb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-immudb"}},[t._v("#")]),t._v(" Why immudb?")]),t._v(" "),a("p",[t._v("immudb has been developed with performance, scalability and versatility in mind. The user feedback has shown that they love the very high throughput and being able to store hashes as well as data. They see it as a great alternative to using a blockchain or ledger service.")])]),t._v(" "),a("div",{staticClass:"video-features"},[a("div",{staticClass:"video"},[a("div",{staticClass:"_embed _embed-16by9"},[a("iframe",{attrs:{width:"560",height:"315",frameborder:"0",src:"https://www.youtube.com/embed/rQ4iZAM14m0?controls=0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])]),t._v(" "),a("ul",[a("li",[a("font-awesome-icon",{attrs:{icon:"check-circle"}}),t._v("\n                    Easy setup\n                ")],1),t._v(" "),a("li",[a("font-awesome-icon",{attrs:{icon:"check-circle"}}),t._v("\n                    Fast and reliable immutable database\n                ")],1),t._v(" "),a("li",[a("font-awesome-icon",{attrs:{icon:"check-circle"}}),t._v("\n                    Secure REST API gateway\n                ")],1),t._v(" "),a("li",[a("font-awesome-icon",{attrs:{icon:"check-circle"}}),t._v("\n                    Powerful, easy to use admin\n                ")],1),t._v(" "),a("li",[a("font-awesome-icon",{attrs:{icon:"check-circle"}}),t._v("\n                    Open source\n                ")],1)])])])]),t._v(" "),a("div",{staticClass:"section-wrapper",attrs:{id:"code-examples"}},[a("section",{staticClass:"section"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column _padding-right-2"},[a("img",{attrs:{src:t.$withBase("/features/real-world.svg"),alt:"Immudb - Made for the real world"}}),t._v(" "),a("h2",{attrs:{id:"made-for-the-real-world"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#made-for-the-real-world"}},[t._v("#")]),t._v(" Made for the real world")]),t._v(" "),a("p",[t._v("immudb is an indispensable asset when it comes to tamper-proof data:")]),t._v(" "),a("ul",[a("li",[t._v("Store every update to sensitive database fields (credit card or bank account data) of an existing application database")]),t._v(" "),a("li",[t._v("Store CI/CD recipes to build and deployment pipelines")]),t._v(" "),a("li",[t._v("Store public certificates")]),t._v(" "),a("li",[t._v("Store tamper-proof log streams (i. e. audit logs)")])])]),t._v(" "),a("div",{staticClass:"column terminal-column"},[a("terminal",{attrs:{title:"immudb"}},[a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Store any key, value auditproof and tamperproof")]),t._v("\nkey2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("byte")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myClient"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("byte")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Visa 6679499384784022 11/23"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nverifiedIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SafeSet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"   SafeSet - add and verify entry:"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" verifiedIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])],1)])]),t._v(" "),a("section",{staticClass:"section"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column terminal-column"},[a("terminal",{attrs:{title:"immudb"}},[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install immugw service")]),t._v("\n./immuadmin "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" immugw "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# check current immugw service status")]),t._v("\n./immuadmin "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" immugw status\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# stop immugw service")]),t._v("\n./immuadmin "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" immugw stop\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# start immugw service")]),t._v("\n./immuadmin "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" immugw start\n")])])])])],1),t._v(" "),a("div",{staticClass:"column _padding-left-2"},[a("img",{attrs:{src:t.$withBase("/features/intuitive-setup4.svg"),alt:"immudb - intuitive setup"}}),t._v(" "),a("h2",{attrs:{id:"intuitive-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#intuitive-setup"}},[t._v("#")]),t._v(" Intuitive setup")]),t._v(" "),a("p",[t._v("immudb is build with simplicity in mind:")]),t._v(" "),a("ul",[a("li",[t._v("Use the prebuild binaries or Docker container images for a fast start")]),t._v(" "),a("li",[t._v("Install, manage and run immudb and immugw as services (use 'immuadmin service')")]),t._v(" "),a("li",[t._v("Simple make command integration if you want to build the applications yourself")]),t._v(" "),a("li",[t._v("RESTful interfaces and easy to use clients")]),t._v(" "),a("li",[t._v("Combine with any existing application")])])])])]),t._v(" "),a("section",{staticClass:"section"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column _padding-right-2"},[a("img",{attrs:{src:t.$withBase("/features/consistency-check2.svg"),alt:"Immudb - Made for the real world"}}),t._v(" "),a("h2",{attrs:{id:"consistency-check-built-in"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consistency-check-built-in"}},[t._v("#")]),t._v(" Consistency check built-in")]),t._v(" "),a("p",[t._v("immudb architecture has built-in verification and audit functionality:")]),t._v(" "),a("ul",[a("li",[t._v("immudb server is continuously checking disk/memory consistency")]),t._v(" "),a("li",[t._v("immugw is continuously checking the data consistency and integrity")]),t._v(" "),a("li",[t._v("immuclient has built-in data consistency and integrity checks")]),t._v(" "),a("li",[t._v("API's provide data ownership proof, verification and integrity functions")])])]),t._v(" "),a("div",{staticClass:"column terminal-column"},[a("terminal",{attrs:{title:"immudb"}},[a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// built-in verification for every entry")]),t._v("\nverifiedItem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SafeGet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"   SafeGet - fetch and verify entry:"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" verifiedItem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])],1)])])]),t._v(" "),a("div",{staticClass:"section-wrapper"},[a("section",{staticClass:"section",attrs:{id:"usedby"}},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("img",{attrs:{src:t.$withBase("/logos/codenotary.png"),width:"150",alt:"Immudb - Written records per ms"}})])])])]),t._v(" "),a("div",{staticClass:"section-wrapper -gray-10",attrs:{id:"performance"}},[a("section",{staticClass:"section"},[a("div",{staticClass:"section-center"},[a("h2",{attrs:{id:"unmatched-performance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unmatched-performance"}},[t._v("#")]),t._v(" Unmatched performance")]),t._v(" "),a("p",[t._v("Immudb is often compared to Amazon QLDB. We compared the performance using a simple demo application to write data (without using any unfair optimization).")])]),t._v(" "),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("img",{attrs:{src:t.$withBase("/benchmark/throughput_read.png"),alt:"Immudb - Throughput read"}})]),t._v(" "),a("div",{staticClass:"column"},[a("img",{attrs:{src:t.$withBase("/benchmark/throughput_write.png"),alt:"Immudb - Throughput write"}})])]),t._v(" "),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("img",{attrs:{src:t.$withBase("/benchmark/exectime.png"),alt:"Immudb - Written records per ms"}})]),t._v(" "),a("div",{staticClass:"column"},[a("img",{attrs:{src:t.$withBase("/benchmark/query_bm.png"),alt:"Immudb - Queried records per ms"}})])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);