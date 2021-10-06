(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{544:function(a,t,s){"use strict";s.r(t);var e=s(11),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"curl-examples-0-8-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#curl-examples-0-8-1"}},[a._v("#")]),a._v(" Curl Examples 0.8.1")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#write-transactions-without-verification"}},[a._v("Write transactions without verification")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#write-transactions-with-verification"}},[a._v("Write transactions with verification")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#add-reference-to-existing-entries"}},[a._v("Add reference to existing entries")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#add-secondary-index"}},[a._v("Add secondary index")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#read-entries-without-verification"}},[a._v("Read entries without verification")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#read-entries-with-verification"}},[a._v("Read entries with verification")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#scan-entries"}},[a._v("Scan entries")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#count-entries"}},[a._v("Count entries")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#get-current-root"}},[a._v("Get current root")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#check-consistency"}},[a._v("Check consistency")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#check-inclusion"}},[a._v("Check inclusion")])])]),a._v(" "),s("p",[a._v("The following code snippets explain how to work with 'immugw' (REST proxy for immudb) using 'curl'.\nimmugw HTTP API key/value are base64 encoded.")]),a._v(" "),s("p",[s("strong",[a._v("important: all get and safeget functions return base64-encoded keys and values, while all set and get functions expect base64-encoded inputs")])]),a._v(" "),s("h2",{attrs:{id:"login-you-can-either-create-another-user-with-immuadmin-or-user-the-built-in-immudb-user-default-pw-immudb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#login-you-can-either-create-another-user-with-immuadmin-or-user-the-built-in-immudb-user-default-pw-immudb"}},[a._v("#")]),a._v(" Login: you can either create another user with immuadmin or user the built-in immudb user (default pw: immudb)")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" --location --request POST "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'http://immugw:3323/v1/immurestproxy/login'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--header "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Content-Type: application/json'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--data-raw "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'{\n    "user": "\'')]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" -n immudb "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" base64"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'",\n    "password": "\'')]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" -n TWdn4TK0ACq8amSeYBW"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("9E9h3S0am?G"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" base64"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'\"\n    }\n}'")]),a._v("\n")])])]),s("h2",{attrs:{id:"write-transactions-without-verification"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#write-transactions-without-verification"}},[a._v("#")]),a._v(" Write transactions without verification")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" --location --request POST "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'http://immugw:3323/v1/immurestproxy/item'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--header "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Content-Type: application/json'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--header "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Authorization: Bearer {{token}}'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--data-raw "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'{\n    "key": "\'')]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" -n client:Ms. Noelia Jaskolski "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" base64"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'",\n    "value": "\'')]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" -n Visa "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1514284849020756")]),a._v(" 09/21 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" base64"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'\"\n    }\n}'")]),a._v("\n")])])]),s("h2",{attrs:{id:"write-transactions-with-verification"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#write-transactions-with-verification"}},[a._v("#")]),a._v(" Write transactions with verification")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" --location --request POST "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'http://immugw:3323/v1/immurestproxy/item/safe'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--header "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Content-Type: application/json'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--header "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Authorization: Bearer {{token}}'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--data-raw "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'{\n    "kv": {\n         "key": "\'')]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" -n client:Ms. Maci Schuppe "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" base64"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'",\n    "value": "\'')]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" -n MasterCard "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2232703813463070")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v("/19 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" base64"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'\"\n         }\n}'")]),a._v("\n")])])]),s("h2",{attrs:{id:"add-reference-to-existing-entries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-reference-to-existing-entries"}},[a._v("#")]),a._v(" Add reference to existing entries")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" --location --request POST "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'http://immugw:3323/v1/immurestproxy/safe/reference'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--header "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Content-Type: application/json'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--header "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Authorization: Bearer {{token}}'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--data-raw "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'{\n    "ro": {\n        "reference":  "\'')]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" -n reference:Ms. Maci Schuppe "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" base64"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'",\n         "key": "\'')]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" -n client:Ms. Maci Schuppe "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" base64"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'\"\n    }\n}'")]),a._v("\n")])])]),s("h2",{attrs:{id:"add-secondary-index"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-secondary-index"}},[a._v("#")]),a._v(" Add secondary index")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" --location --request POST "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'http://immugw:3323/v1/immurestproxy/safe/zadd'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--header "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Content-Type: application/json'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--header "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Authorization: Bearer {{token}}'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--data-raw "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'{\n    "zopts": {\n        "set":  "\'')]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" -n SetOfClientsThatAreWomen "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" base64"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'",\n        "score": 1.0,\n        "key": "\'')]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" -n client:Ms. Noelia Jaskolski "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" base64"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'\"\n    }\n}'")]),a._v("\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" --location --request POST "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'http://immugw:3323/v1/immurestproxy/safe/zadd'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--header "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Content-Type: application/json'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--header "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Authorization: Bearer {{token}}'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--data-raw "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'{\n    "zopts": {\n        "set":  "\'')]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" -n SetOfClientsThatAreWomen "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" base64"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'",\n        "score": 3.0,\n        "key": "\'')]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" -n client:Ms. Maci Schuppe "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" base64"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'\"\n    }\n}'")]),a._v("\n")])])]),s("h2",{attrs:{id:"read-entries-without-verification"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#read-entries-without-verification"}},[a._v("#")]),a._v(" Read entries without verification")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" --location --request GET "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'http://immugw:3323/v1/immurestproxy/item/index/1'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--header "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Authorization: Bearer {{token}}'")]),a._v("\n")])])]),s("h2",{attrs:{id:"read-entries-with-verification"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#read-entries-with-verification"}},[a._v("#")]),a._v(" Read entries with verification")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" --location --request POST "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'http://immugw:3323/v1/immurestproxy/item/safe/get'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--header "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Content-Type: application/json'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--header "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Authorization: Bearer {{token}}'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--data-raw "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'{\n         "key": "\'')]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" -n client:Ms. Noelia Jaskolski "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" base64"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'\"\n}'")]),a._v("\n")])])]),s("h2",{attrs:{id:"scan-entries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scan-entries"}},[a._v("#")]),a._v(" Scan entries")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" --request POST "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --url http://immugw:3323/v1/immurestproxy/item/scan "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --header "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'content-type: application/json'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --data "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'{\n  "prefix": "\'')]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" -n client:Ms. Noelia Jaskolski "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" base64"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'",\n  "offset": "\'')]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" -n client:Ms. Maci Schuppe "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" base64"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'",\n  "limit": "2",\n  "reverse": true,\n  "deep": true\n}\'')]),a._v("\n")])])]),s("h2",{attrs:{id:"count-entries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#count-entries"}},[a._v("#")]),a._v(" Count  entries")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" --request GET "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --url http://immugw:3323/v1/immurestproxy/item/count/Y2xpZW50Mg"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v("\n")])])]),s("h2",{attrs:{id:"get-current-root"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-current-root"}},[a._v("#")]),a._v(" Get current root")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" --location --request GET "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'http://immugw:3323/v1/immurestproxy/root'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --header "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Authorization: Bearer {{token}}'")]),a._v("\n\n")])])]),s("h3",{attrs:{id:"add-a-new-entry-after-getting-current-root"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-a-new-entry-after-getting-current-root"}},[a._v("#")]),a._v(" Add a new entry after getting current root")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" --location --request POST "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'http://immugw:3323/v1/immurestproxy/item'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--header "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Content-Type: application/json'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--header "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Authorization: Bearer {{token}}'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--data-raw "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'{\n    "key": "\'')]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" -n client:Mr. Valentin Padurean "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" base64"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'",\n    "value": "\'')]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" -n MasterCard "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2232703813463070")]),a._v(" 01/24 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" base64"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'\",\n}'")]),a._v("\n")])])]),s("h2",{attrs:{id:"check-consistency"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#check-consistency"}},[a._v("#")]),a._v(" Check consistency")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" --request GET "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --url http://immuwg:3323/v1/immurestproxy/consistencyproof/33\n")])])]),s("h2",{attrs:{id:"check-inclusion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#check-inclusion"}},[a._v("#")]),a._v(" Check inclusion")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" --request GET "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --url http://immugw:3323/v1/immurestproxy/inclusionproof/33\n")])])]),s("h2",{attrs:{id:"license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[a._v("#")]),a._v(" License")]),a._v(" "),s("p",[a._v("immugw is "),s("a",{attrs:{href:"https://github.com/codenotary/immudb/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[a._v("Apache v2.0 License"),s("OutboundLink")],1),a._v(".")])])}),[],!1,null,null,null);t.default=n.exports}}]);