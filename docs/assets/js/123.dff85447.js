(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{546:function(e,t,a){"use strict";a.r(t);var n=a(10),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"quickstart-with-immudb-and-immuclient"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quickstart-with-immudb-and-immuclient"}},[e._v("#")]),e._v(" Quickstart with immudb and immuclient")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("To learn interactively and to get started with immudb from the command line and with programming languages, visit the immudb Playground at "),a("a",{attrs:{href:"https://play.codenotary.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://play.codenotary.com"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"getting-immudb-running"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-immudb-running"}},[e._v("#")]),e._v(" Getting immudb running")]),e._v(" "),a("p",[e._v("You may download the immudb binary from "),a("a",{attrs:{href:"https://github.com/codenotary/immudb/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[e._v("the latest releases on Github"),a("OutboundLink")],1),e._v(". Once you have downloaded immudb, rename it to "),a("code",[e._v("immudb")]),e._v(", make sure to mark it as executable, then run it. The following example shows how to obtain v0.9.2 for linux amd64:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://github.com/vchain-us/immudb/releases/download/v0.9.2/immudb-v0.9.2-linux-amd64\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" immudb-v0.9.2-linux-amd64 immudb\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" +x immudb\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# run immudb in the foreground to see all output")]),e._v("\n./immudb\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# or run immudb in the background")]),e._v("\n./immudb -d\n")])])]),a("p",[e._v("Alternatively, you may use Docker to run immudb in a ready-to-use container:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("docker run -d --net "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("host")]),e._v(" -it --rm --name immudb codenotary/immudb:latest\n")])])]),a("h2",{attrs:{id:"connecting-with-immuclient"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connecting-with-immuclient"}},[e._v("#")]),e._v(" Connecting with immuclient")]),e._v(" "),a("p",[e._v("You may download the immuclient binary from "),a("a",{attrs:{href:"https://github.com/codenotary/immudb/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[e._v("the latest releases on Github"),a("OutboundLink")],1),e._v(". Once you have downloaded immuclient, rename it to "),a("code",[e._v("immuclient")]),e._v(", make sure to mark it as executable, then run it. The following example shows how to obtain v0.9.2 for linux amd64:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://github.com/vchain-us/immudb/releases/download/v0.9.2/immuclient-v0.9.2-linux-amd64\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" immuclient-v0.9.2-linux-amd64 immuclient\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" +x immuclient\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# start the interactive shell")]),e._v("\n./immuclient\n")])])]),a("p",[e._v("Alternatively, you may use Docker to run immuclient in a ready-to-use container:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("docker run -it --rm --net "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("host")]),e._v(" --name immuclient codenotary/immuclient:latest\n")])])]),a("h2",{attrs:{id:"basic-operations-with-immuclient"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations-with-immuclient"}},[e._v("#")]),e._v(" Basic operations with immuclient")]),e._v(" "),a("p",[e._v("Before any operations can be run by immuclient, it is necessary to authenticate against the running immudb server.")]),e._v(" "),a("p",[e._v("When immudb is first run, it is ready to use immediately with the default database and credentials:")]),e._v(" "),a("ul",[a("li",[e._v("Database name: defaultdb")]),e._v(" "),a("li",[e._v("User: immudb")]),e._v(" "),a("li",[e._v("Password: immudb")]),e._v(" "),a("li",[e._v("Port: 3322")])]),e._v(" "),a("p",[e._v("Running "),a("code",[e._v("login immudb")]),e._v(" from within immuclient will use the default database name and port. All you need to supply is the user and password:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("immuclient> login immudb\nPassword: immudb\n")])])]),a("p",[e._v("While immudb supports "),a("code",[e._v("set")]),e._v(" and "),a("code",[e._v("get")]),e._v(" for key-value storing and retrieving, its immutability means that we can verify the integrity of the underlying Merkle tree. To do this, we use the "),a("code",[e._v("safeset")]),e._v(" and "),a("code",[e._v("safeget")]),e._v(" commands. Let's try setting a value of "),a("code",[e._v("100")]),e._v(" for the key "),a("code",[e._v("balance")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("immuclient> safeset balance 100\n")])])]),a("p",[e._v("Then, we can immediately overwrite the key "),a("code",[e._v("balance")]),e._v(" with a value of "),a("code",[e._v("9001")]),e._v(" instead:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("immuclient> safeset balance 9001\n")])])]),a("p",[e._v("If we try to retrieve the current value of key "),a("code",[e._v("balance")]),e._v(", we should get "),a("code",[e._v("9001")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("immuclient> safeget balance\n")])])]),a("p",[e._v("Note that at each step so far, the "),a("code",[e._v("verified")]),e._v(" flag is set to true. This ensures that the Merkle tree remains consistent for each transaction.")]),e._v(" "),a("p",[e._v("We can show the history of transactions for key "),a("code",[e._v("balance")]),e._v(" using the "),a("code",[e._v("history")]),e._v(" command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("immuclient> history balance\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);