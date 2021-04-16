(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{536:function(t,a,e){"use strict";e.r(a);var n=e(10),s=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"developer-jumpstart-for-immudb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#developer-jumpstart-for-immudb"}},[t._v("#")]),t._v(" Developer Jumpstart for immudb")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://slack.vchain.us/",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/badge/join%20slack-%23immutability-brightgreen.svg",alt:"Slack"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://groups.google.com/group/immudb",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/badge/discuss-immudb%40googlegroups.com-blue.svg",alt:"Discuss at immudb@googlegroups.com"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://github.com/codenotary/immudb/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/github/license/codenotary/immudb4j",alt:"License"}}),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("p",[t._v("This guide helps developers quickly start with CodeNotary's immudb database and client. It guides you from start to finish with code samples in Node.js, Java, Python, Go, and .Net. After completing the guide, you will have the basic concepts necessary to begin using immudb within your organization.")]),t._v(" "),e("p",[t._v("Note: If you're using another development language, please read up on our "),e("a",{attrs:{href:"https://docs.immudb.io/master/immugw/",target:"_blank",rel:"noopener noreferrer"}},[t._v("immugw"),e("OutboundLink")],1),t._v(" option.")]),t._v(" "),e("p",[t._v("This section is not yet ready for immudb 0.9. We are working on it in order to improve it and we are close to deliver. Stay tuned!")]),t._v(" "),e("h3",{attrs:{id:"get-the-docker-image"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-the-docker-image"}},[t._v("#")]),t._v(" Get the Docker Image")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Pull the immudb Docker Image from "),e("a",{attrs:{href:"https://hub.docker.com/r/codenotary/immudb",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker Hub"),e("OutboundLink")],1),t._v(". Below are the commands when using a Linux shell.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("docker pull codenotary/immudb:latest\n")])])])]),t._v(" "),e("li",[e("p",[t._v("You can run immudb in a container using the code that follows.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("docker run -it -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3322")]),t._v(":3322 -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9497")]),t._v(":9497 --name immudb codenotary/immudb:latest\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Your immudb should now be up and running. Check your container logs to verify this.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("docker logs immudb\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Skip down to the section about "),e("a",{attrs:{href:"#creating-an-immudb-client-instance-in-your-chosen-programming-language"}},[t._v("Creating an immudb client instance in your chosen programming language")]),t._v(".")])])]),t._v(" "),e("h3",{attrs:{id:"download-the-installer-for-the-latest-release"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#download-the-installer-for-the-latest-release"}},[t._v("#")]),t._v(" Download the installer for the latest release")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Download the latest release from our "),e("a",{attrs:{href:"https://github.com/codenotary/immudb/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("Run immudb. Linux shell commands are shown below.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("./immudb       "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Runs immudb in the foreground")]),t._v("\n./immudb -d    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Runs immudb in the background")]),t._v("\n")])])]),e("ul",[e("li",[t._v("immudb also runs as a service which is explained in this "),e("a",{attrs:{href:"https://github.com/codenotary/immudb",target:"_blank",rel:"noopener noreferrer"}},[t._v("Readme"),e("OutboundLink")],1),t._v(" to use this method).")])])]),t._v(" "),e("li",[e("p",[t._v("To stop immudb, find the process "),e("code",[t._v("ps -ax | grep immudb")]),t._v(" and then "),e("code",[t._v("kill -15 <pid>")]),t._v(". Alternatively, the Windows PowerShell commands are "),e("code",[t._v("Get-Process immudb* | Stop-Process")]),t._v(".")])]),t._v(" "),e("li",[e("p",[t._v("Continue with the section that follows.")])])]),t._v(" "),e("h2",{attrs:{id:"creating-an-immudb-client"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-immudb-client"}},[t._v("#")]),t._v(" Creating an immudb client")]),t._v(" "),e("h3",{attrs:{id:"integration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#integration"}},[t._v("#")]),t._v(" Integration")]),t._v(" "),e("p",[t._v("Integrate the immudb Client into your application using the official Software Development Kits (SDKs).")]),t._v(" "),e("Tabs",{attrs:{type:"border-card"}},[e("Tab",{attrs:{label:"Go"}},[e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Make sure your project is using Go Modules")]),t._v("\ngo mod init app\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Install immudb sdk")]),t._v("\ngo get -u github.com/codenotary/immudb\n")])])]),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Then import the package")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/codenotary/immudb/pkg/client"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),e("Tab",{attrs:{label:"Java"}},[e("p",[t._v("Just include immudb4j as a dependency in your project:")]),t._v(" "),e("p",[t._v("if using "),e("code",[t._v("Maven")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("io.codenotary"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("immudb4j"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0.2.0"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("if using "),e("code",[t._v("Gradle")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-groovy extra-class"},[e("pre",{pre:!0,attrs:{class:"language-groovy"}},[e("code",[t._v("    compile "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'io.codenotary:immudb4j:0.2.0'")]),t._v("\n")])])]),e("p",[e("a",{attrs:{href:"https://github.com/codenotary/immudb4j",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java SDK repository"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("immudb4j is currently hosted on both "),e("a",{attrs:{href:"https://search.maven.org/artifact/io.codenotary/immudb4j",target:"_blank",rel:"noopener noreferrer"}},[t._v("Maven Central"),e("OutboundLink")],1),t._v(" and "),e("a",{attrs:{href:"https://docs.github.com/en/packages",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github Packages"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("Tab",{attrs:{label:"Python"}},[e("p",[t._v("Install the package using pip:")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("    pip3 "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" immudb-py\n")])])]),e("p",[t._v("Then import the client as follows:")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" immudb "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ImmudbClient\n")])])]),e("p",[e("em",[t._v("Note")]),t._v(": immudb-py need "),e("code",[t._v("grpcio")]),t._v(" module from google. On Alpine linux, you need\nthese packages in order to correctly build (and install) grpcio:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("linux-headers")])]),t._v(" "),e("li",[e("code",[t._v("python3-dev")])]),t._v(" "),e("li",[e("code",[t._v("g++")])])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/codenotary/immudb-py",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python SDK repository"),e("OutboundLink")],1)])]),t._v(" "),e("Tab",{attrs:{label:"Node.js"}},[e("p",[t._v("Include the immudb-node as a dependency in your project.")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" immudbClient "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'immudb-node'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[e("a",{attrs:{href:"https://github.com/codenotary/immudb-node",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js SDK repository"),e("OutboundLink")],1)])]),t._v(" "),e("Tab",{attrs:{label:".Net"}},[e("p",[t._v("Use Microsoft's "),e("a",{attrs:{href:"https://www.nuget.org/packages/Immudb4DotNet/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NuGet"),e("OutboundLink")],1),t._v(" package manager to get immudb4DotNet.")]),t._v(" "),e("p",[t._v("Creating a Client.")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Using the default configuration.")]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" client "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("CodeNotary"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ImmuDb"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ImmuClient")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[t._v('The immudb implements IDisposable, so you can wrap it with "using".')]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" client "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("CodeNotary"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ImmuDb"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ImmuClient")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3322")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/codenotary/immudb4dotnet",target:"_blank",rel:"noopener noreferrer"}},[t._v(".Net SDK repository"),e("OutboundLink")],1)])]),t._v(" "),e("Tab",{attrs:{label:"Others"}},[e("p",[t._v("If you're using another language, then read up on our "),e("a",{attrs:{href:"https://docs.immudb.io/master/immugw/",target:"_blank",rel:"noopener noreferrer"}},[t._v("immugw"),e("OutboundLink")],1),t._v(" option.")])])],1),t._v(" "),e("h3",{attrs:{id:"connection-and-authentication"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connection-and-authentication"}},[t._v("#")]),t._v(" Connection and authentication")]),t._v(" "),e("p",[t._v("Immudb run on 3323 default port. Here we connecting a client with default options and\nauthenticating using default username and password.\nIt's possible to modify defaults on immudb server config folder inside "),e("code",[t._v("immudb.toml")])]),t._v(" "),e("Tabs",{attrs:{type:"border-card"}},[e("Tab",{attrs:{label:"Go"}},[e("p",[t._v("Login method return a token needed in all interactions with the server.")]),t._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[t._v("client"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" c"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewImmuClient")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("client"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("DefaultOptions")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    log"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fatal")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nctx "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Background")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// login with default username and password and storing a token")]),t._v("\nlr "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" client"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Login")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("byte")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("`immudb`")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("byte")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("`immudb`")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    log"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fatal")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// set up an authenticated context that will be required in future operations")]),t._v("\nmd "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" metadata"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Pairs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"authorization"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Token"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nctx "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" metadata"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewOutgoingContext")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Background")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" md"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),e("Tab",{attrs:{label:"Java"}},[e("p",[t._v("This feature is not yet supported or not documented.\nDo you want to make a feature request or help out? Open an issue on "),e("a",{attrs:{href:"https://github.com/codenotary/immudb4j/issues/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("java sdk github project"),e("OutboundLink")],1)])]),t._v(" "),e("Tab",{attrs:{label:"Python"}},[e("p",[t._v("This feature is not yet supported or not documented.\nDo you want to make a feature request or help out? Open an issue on "),e("a",{attrs:{href:"https://github.com/codenotary/immudb-py/issues/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("java sdk github project"),e("OutboundLink")],1)])]),t._v(" "),e("Tab",{attrs:{label:"Node.js"}},[e("p",[t._v("This feature is not yet supported or not documented.\nDo you want to make a feature request or help out? Open an issue on "),e("a",{attrs:{href:"https://github.com/codenotary/immudb-node/issues/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("java sdk github project"),e("OutboundLink")],1)])]),t._v(" "),e("Tab",{attrs:{label:".Net"}},[e("p",[t._v("This feature is not yet supported or not documented.\nDo you want to make a feature request or help out? Open an issue on "),e("a",{attrs:{href:"https://github.com/codenotary/immudb4dotnet/issues/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("java sdk github project"),e("OutboundLink")],1)])]),t._v(" "),e("Tab",{attrs:{label:"Others"}},[e("p",[t._v("If you're using another development language, please read up on our "),e("a",{attrs:{href:"https://docs.immudb.io/master/immugw/",target:"_blank",rel:"noopener noreferrer"}},[t._v("immugw"),e("OutboundLink")],1),t._v(" option.")])])],1),t._v(" "),e("h3",{attrs:{id:"tamperproof-read-and-write"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tamperproof-read-and-write"}},[t._v("#")]),t._v(" Tamperproof read and write")]),t._v(" "),e("Tabs",{attrs:{type:"border-card"}},[e("p",[t._v("You can write with built-in cryptographic verification. The client implements the mathematical validations, while your application uses a traditional read or write function.")]),t._v(" "),e("Tab",{attrs:{label:"Go"}},[e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[t._v("    vtx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" client"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("VerifiedSet")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("byte")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("`hello`")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("byte")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("`immutable world`")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v("  err "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tlog"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fatal")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tfmt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"Set and verified key '%s' with value '%s' at tx %d\\n\"")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("byte")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("`hello`")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("byte")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("`immutable world`")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vtx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\tventry"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" client"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("VerifiedGet")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("byte")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("`hello`")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v("  err "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tlog"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fatal")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tfmt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"Sucessfully verified key '%s' with value '%s' at tx %d\\n\"")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ventry"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Key"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ventry"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ventry"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Tx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),e("Tab",{attrs:{label:"Java"}},[e("p",[t._v("This feature is not yet supported or not documented.\nDo you want to make a feature request or help out? Open an issue on "),e("a",{attrs:{href:"https://github.com/codenotary/immudb4j/issues/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java sdk github project"),e("OutboundLink")],1)])]),t._v(" "),e("Tab",{attrs:{label:"Python"}},[e("p",[t._v("This feature is not yet supported or not documented.\nDo you want to make a feature request or help out? Open an issue on "),e("a",{attrs:{href:"https://github.com/codenotary/immudb-py/issues/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python sdk github project"),e("OutboundLink")],1)])]),t._v(" "),e("Tab",{attrs:{label:"Node.js"}},[e("p",[t._v("This feature is not yet supported or not documented.\nDo you want to make a feature request or help out? Open an issue on "),e("a",{attrs:{href:"https://github.com/codenotary/immudb-node/issues/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js sdk github project"),e("OutboundLink")],1)])]),t._v(" "),e("Tab",{attrs:{label:".Net"}},[e("p",[t._v("This feature is not yet supported or not documented.\nDo you want to make a feature request or help out? Open an issue on "),e("a",{attrs:{href:"https://github.com/codenotary/immudb4dotnet/issues/new",target:"_blank",rel:"noopener noreferrer"}},[t._v(".Net sdk github project"),e("OutboundLink")],1)])]),t._v(" "),e("Tab",{attrs:{label:"Others"}},[e("p",[t._v("If you're using another development language, please read up on our "),e("a",{attrs:{href:"https://docs.immudb.io/master/immugw/",target:"_blank",rel:"noopener noreferrer"}},[t._v("immugw"),e("OutboundLink")],1),t._v(" option.")])])],1),t._v(" "),e("h3",{attrs:{id:"to-get-going-quickly"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#to-get-going-quickly"}},[t._v("#")]),t._v(" To get going quickly:")]),t._v(" "),e("ul",[e("li",[t._v("Get the "),e("a",{attrs:{href:"https://github.com/codenotary/immudb-client-examples",target:"_blank",rel:"noopener noreferrer"}},[t._v("immudb-client-example code"),e("OutboundLink")],1),t._v(". "),e("code",[t._v("Note: Only Golang SDK is currently upgraded for immudb 0.9.0")])]),t._v(" "),e("li",[t._v("Learn about the basic coding you will use to interact with your immudb client and database. This guide goes from start to finish, in creating a new client instance, writing and reading data, and much more.\nTake a look at the "),e("a",{attrs:{href:"/master/sdks-api"}},[t._v("SDKs api")]),t._v(" page.")])]),t._v(" "),e("h2",{attrs:{id:"conclusion"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[t._v("#")]),t._v(" Conclusion")]),t._v(" "),e("p",[t._v("Congratulations for completing the development quick start guide. You've been guided through the essentials you need to know to begin using CodeNotary's immudb solution.")]),t._v(" "),e("p",[t._v("You now have:")]),t._v(" "),e("ul",[e("li",[t._v("An immudb database server and are familiar with basic authentication.")]),t._v(" "),e("li",[t._v("An immudb client.")]),t._v(" "),e("li",[t._v("A new immudb database.")]),t._v(" "),e("li",[t._v("An instance of the immudb client running.")]),t._v(" "),e("li",[t._v("Gone through reading and writing data with and without cryptographic verification.")])]),t._v(" "),e("p",[t._v("We've only scratched the surface of immudb's capabilities. Here are some additional resources you might find helpful:")]),t._v(" "),e("ul",[e("li",[t._v("Learn more through our "),e("a",{attrs:{href:"https://docs.immudb.io/master/",target:"_blank",rel:"noopener noreferrer"}},[t._v("documentation"),e("OutboundLink")],1),t._v(".\n"),e("ul",[e("li",[t._v("Learn more about the immudb "),e("a",{attrs:{href:"https://docs.immudb.io/master/sdks-api.html#contents",target:"_blank",rel:"noopener noreferrer"}},[t._v("SDKs"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("li",[t._v("Try out "),e("a",{attrs:{href:"https://docs.immudb.io/master/immuadmin/",target:"_blank",rel:"noopener noreferrer"}},[t._v("immuadmin"),e("OutboundLink")],1)])])]),t._v(" "),e("li",[t._v("Follow CodeNotary's "),e("a",{attrs:{href:"https://codenotary.io/blog",target:"_blank",rel:"noopener noreferrer"}},[t._v("blog"),e("OutboundLink")],1),t._v(" for more immudb articles and release announcements.")]),t._v(" "),e("li",[t._v("Additional technical background on immudb and its performance, see the "),e("a",{attrs:{href:"https://github.com/codenotary/immudb/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Readme"),e("OutboundLink")],1),t._v(" within CodeNotary's immudb GitHub Project.\n"),e("img",{attrs:{align:"center",src:"https://codenotary.io/images/word-tree.png"}})])])],1)}),[],!1,null,null,null);a.default=s.exports}}]);