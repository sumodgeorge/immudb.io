(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{593:function(a,t,s){"use strict";s.r(t);var e=s(11),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"immugw"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#immugw"}},[a._v("#")]),a._v(" immugw")]),a._v(" "),s("p",[a._v("immugw is the intelligent REST proxy that connects to immudb and provides a RESTful interface for applications. We recommend running immudb and immugw on separate machines to enhance security\nimmugw can be found in a different "),s("a",{attrs:{href:"https://github.com/codenotary/immugw",target:"_blank",rel:"noopener noreferrer"}},[a._v("repository"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[a._v("#")]),a._v(" Contents")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#latest-binaries"}},[a._v("Latest binaries")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#build"}},[a._v("Build")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#docker"}},[a._v("Docker")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#run-immugw"}},[a._v("Run immugw")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#configuration"}},[a._v("Configuration")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#immuadmin"}},[a._v("immuadmin")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#immugw-service"}},[a._v("immugw service")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#use-immugw"}},[a._v("Use immugw")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#api"}},[a._v("API")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#auditor"}},[a._v("Auditor")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#license"}},[a._v("License")])])]),a._v(" "),s("h2",{attrs:{id:"latest-binaries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#latest-binaries"}},[a._v("#")]),a._v(" Latest binaries")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/codenotary/immugw/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[a._v("Get the latest builds"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"build"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build"}},[a._v("#")]),a._v(" Build")]),a._v(" "),s("p",[a._v("clone the immugw repository locally")]),a._v(" "),s("p",[a._v("'git clone https://github.com/codenotary/immugw.git'")]),a._v(" "),s("h3",{attrs:{id:"linux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[a._v("#")]),a._v(" Linux")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOOS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("linux "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOARCH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("amd64 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" immugw-static\n")])])]),s("h3",{attrs:{id:"macos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[a._v("#")]),a._v(" MacOS")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOOS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("darwin "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOARCH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("amd64 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" immugw-static\n")])])]),s("h3",{attrs:{id:"windows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[a._v("#")]),a._v(" Windows")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOOS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("windows "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOARCH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("amd64 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" immugw-static\n")])])]),s("h2",{attrs:{id:"docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[a._v("#")]),a._v(" Docker")]),a._v(" "),s("h3",{attrs:{id:"build-your-own-docker-container-image"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-your-own-docker-container-image"}},[a._v("#")]),a._v(" build your own Docker container image")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("docker build -t myown/immugw:latest -f Dockerfile "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])])]),s("h3",{attrs:{id:"run-immugw-in-a-container"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-immugw-in-a-container"}},[a._v("#")]),a._v(" run immugw in a container")]),a._v(" "),s("p",[a._v("Make sure to point to the immudb system using the environment variable IMMUGW_IMMUDB_ADDRESS")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker run -it -d -p 3323:3323 --name immugw --env IMMUGW_IMMUDB_ADDRESS=immudb codenotary/immugw:latest\n")])])]),s("h2",{attrs:{id:"run-immugw"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-immugw"}},[a._v("#")]),a._v(" Run immugw")]),a._v(" "),s("p",[a._v("Simply run "),s("code",[a._v("./immugw -d")]),a._v(" to start immugw on the same machine as immudb (test or dev environment) or pointing to the remote immudb system "),s("code",[a._v('./immugw --immudb-address "immudb-server"')]),a._v(".")]),a._v(" "),s("p",[a._v("If you want to stop immugw în that case you need to find the process "),s("code",[a._v("ps -ax | grep immugw")]),a._v(" and then "),s("code",[a._v("kill -15 <pid>")]),a._v(". Windows PowerShell would be "),s("code",[a._v("Get-Process immugw* | Stop-Process")]),a._v(".")]),a._v(" "),s("h2",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[a._v("#")]),a._v(" Configuration")]),a._v(" "),s("p",[a._v("immugw can be configured using environment variables, flags or a config file.")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("immugw --help")]),a._v(" shows you all available flags and environment variables.")]),a._v(" "),s("li",[s("code",[a._v("/etc/immudb/immugw.toml")]),a._v(" is used as a default configuration file")])]),a._v(" "),s("h3",{attrs:{id:"environment-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#environment-variables"}},[a._v("#")]),a._v(" Environment variables")]),a._v(" "),s("p",[a._v("The environment variables are the most popular way to configure Docker container:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUGW_ADDRESS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0")]),a._v(".0.0\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUGW_PORT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3323")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUGW_IMMUDB_ADDRESS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUGW_IMMUDB_PORT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3322")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUGW_DIR")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(".\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUGW_PIDFILE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUGW_LOGFILE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUGW_DETACHED")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("false\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUGW_MTLS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("false\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUGW_SERVERNAME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("localhost\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUGW_AUDIT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("false\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUGW_AUDIT_INTERVAL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("5m\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUGW_AUDIT_USERNAME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("immugwauditor\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUGW_AUDIT_PASSWORD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUGW_PKEY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("./tools/mtls/4_client/private/localhost.key.pem\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUGW_CERTIFICATE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("./tools/mtls/4_client/certs/localhost.cert.pem\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUGW_CLIENTCAS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("./tools/mtls/2_intermediate/certs/ca-chain.cert.pem\n")])])]),s("h2",{attrs:{id:"immuadmin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#immuadmin"}},[a._v("#")]),a._v(" immuadmin")]),a._v(" "),s("p",[a._v("immuadmin can be used to install and manage the immugw service for Windows and Linux. immuadmin is part of the immugw repository.\n'git clone https://github.com/codenotary/immudb.git'")]),a._v(" "),s("h3",{attrs:{id:"linux-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-2"}},[a._v("#")]),a._v(" Linux")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOOS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("linux "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOARCH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("amd64 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" immuadmin-static\n")])])]),s("h3",{attrs:{id:"windows-by-component"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows-by-component"}},[a._v("#")]),a._v(" Windows (by component)")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOOS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("windows "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOARCH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("amd64 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" immuadmin-static\n")])])]),s("h2",{attrs:{id:"immugw-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#immugw-service"}},[a._v("#")]),a._v(" immugw service")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# install immugw service\n./immugw service install\n\n# check current immugw service status\n./immugw service status\n\n# stop immugw service\n./immugw service stop\n\n# start immugw service\n./immugw service start\n")])])]),s("p",[a._v("The linux service is using the following defaults:")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("File or configuration")]),a._v(" "),s("th",[a._v("location")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("all configuration files")]),a._v(" "),s("td",[a._v("/etc/immudb")])]),a._v(" "),s("tr",[s("td",[a._v("pid file")]),a._v(" "),s("td",[a._v("/var/lib/immudb/immugw.pid")])]),a._v(" "),s("tr",[s("td",[a._v("log files")]),a._v(" "),s("td",[a._v("/var/log/immudb")])])])]),a._v(" "),s("h2",{attrs:{id:"use-immugw"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-immugw"}},[a._v("#")]),a._v(" Use immugw")]),a._v(" "),s("p",[s("code",[a._v("immugw help")]),a._v(" is a good starting point")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("immu gateway: a smart REST proxy "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" immudb - the lightweight, high-speed immutable database "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" systems and applications.\nIt exposes all gRPC methods with a REST interface "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("while")]),a._v(" wrapping all SAFE endpoints with a verification service.\n\nEnvironment variables:\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUGW_ADDRESS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUGW_PORT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3323")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUGW_IMMUDB_ADDRESS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUGW_IMMUDB_PORT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3322")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUGW_DIR")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(".\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUGW_PIDFILE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUGW_LOGFILE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUGW_DETACHED")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("false\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUGW_MTLS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("false\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUGW_SERVERNAME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("localhost\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUGW_PKEY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("./tools/mtls/4_client/private/localhost.key.pem\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUGW_CERTIFICATE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("./tools/mtls/4_client/certs/localhost.cert.pem\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUGW_CLIENTCAS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("./tools/mtls/2_intermediate/certs/ca-chain.cert.pem\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUGW_AUDIT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"false"')]),a._v("\n  IMMUGW_AUDIT_INTERVAL "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"5m"')]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUGW_AUDIT_USERNAME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUGW_AUDIT_PASSWORD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v("\n\nUsage:\n  immugw "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  immugw "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("command"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\nAvailable Commands:\n  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("help")]),a._v("        Help about any "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("command")]),a._v("\n  version     Show the immugw version\n\nFlags:\n  -a, --address string            immugw "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("host")]),a._v(" address "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("default "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"127.0.0.1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n      --audit                     "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" audit mode "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("continuously fetches latest root from server, checks consistency against a "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("local")]),a._v(" root and saves the latest root locally"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n      --audit-interval duration   interval at "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("which")]),a._v(" audit should run "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("default 5m0s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n      --audit-password string     immudb password used to login during audit\n      --audit-username string     immudb username used to login during audit "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("default "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"immugwauditor"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n      --certificate string        server certificate "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" path "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("default "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"./tools/mtls/4_client/certs/localhost.cert.pem"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n      --clientcas string          clients certificates list. Aka certificate authority "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("default "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"./tools/mtls/2_intermediate/certs/ca-chain.cert.pem"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n      --config string             config "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("default path are configs or "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$HOME")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" Default filename is immugw.toml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  -d, --detached                  run immudb "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" background\n      --dir string                program files folder "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("default "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  -h, --help                      "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("help")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" immugw\n  -k, --immudb-address string     immudb "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("host")]),a._v(" address "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("default "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"127.0.0.1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  -j, --immudb-port int           immudb port number "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("default "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3322")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n      --logfile string            log path with filename. E.g. /tmp/immugw/immugw.log\n  -m, --mtls                      "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" mutual tls\n      --pidfile string            pid path with filename. E.g. /var/run/immugw.pid\n      --pkey string               server private key path "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("default "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"./tools/mtls/4_client/private/localhost.key.pem"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  -p, --port int                  immugw port number "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("default "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3323")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n      --servername string         used to verify the "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("hostname")]),a._v(" on the returned certificates "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("default "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"localhost"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\nUse "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"immugw [command] --help"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("more")]),a._v(" information about a command.\n")])])]),s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[a._v("#")]),a._v(" API")]),a._v(" "),s("h3",{attrs:{id:"immugw-restful-api-reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#immugw-restful-api-reference"}},[a._v("#")]),a._v(" immugw RESTful API reference")]),a._v(" "),s("p",[a._v("You can find the swagger schema here:")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/codenotary/immugw/blob/master/pkg/api/gw.schema.swagger.json",target:"_blank",rel:"noopener noreferrer"}},[a._v("swagger immugw"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("If you want to run the Swagger UI, simply run the following Docker command after you cloned this repo:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("docker run -d -it -p "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8081")]),a._v(":8080 --name swagger-immugw -v "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${"),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PWD")]),a._v("}")]),a._v("/pkg/api/gw.schema.swagger.json:/openapi.json -e "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("SWAGGER_JSON")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/openapi.json  swaggerapi/swagger-ui\n")])])]),s("h3",{attrs:{id:"curl-examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#curl-examples"}},[a._v("#")]),a._v(" Curl examples")]),a._v(" "),s("p",[s("RouterLink",{attrs:{to:"/0.9.2/immugw/curl.html"}},[a._v("Curl code snippets")])],1),a._v(" "),s("h2",{attrs:{id:"auditor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#auditor"}},[a._v("#")]),a._v(" Auditor")]),a._v(" "),s("p",[a._v("Auditors make sure that the data consistency is guaranteed inside immudb. They do a random key value verification and an interval-based Merkle-tree consistency check (5 minutes default). The immugw and the immuclient provide auditor functionality that runs as a daemon process. It is recommended to run immugw and immuclient on different machines than immudb, so any tampering on the immudb server is automatically detected.")]),a._v(" "),s("p",[a._v("The results of the auditors are provided by a Prometheus end point.")]),a._v(" "),s("h3",{attrs:{id:"immugw-auditor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#immugw-auditor"}},[a._v("#")]),a._v(" immugw auditor")]),a._v(" "),s("p",[a._v("Start interactive:\n"),s("code",[a._v("immugw --audit")])]),a._v(" "),s("p",[a._v("Service configuration:\nTo enable auditor, you need to edit /etc/immudb/immugw.toml and add the following section:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("audit "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# false is default")]),a._v("\naudit-interval "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"5m"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('# suffixes: "s", "m", "h", examples: 10s, 5m 1h')]),a._v("\naudit-username "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# when immudb authentication is enabled, use read-only user credentials here")]),a._v("\naudit-password "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# and the password")]),a._v("\n")])])]),s("p",[a._v("Restart the immugw service afterwards - "),s("code",[a._v("immuadmin service immugw restart")])]),a._v(" "),s("p",[s("strong",[a._v("immugw Port: 9476 - http://immugw-auditor:9476/metrics")])]),a._v(" "),s("p",[a._v("example output:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# HELP immugw_audit_curr_root_per_server Current root index used for the latest audit.")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# TYPE immugw_audit_curr_root_per_server gauge")]),a._v("\nimmugw_audit_curr_root_per_server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("server_address"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"127.0.0.1:3322"')]),a._v(",server_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"br8eugq036tfln0ct6o0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# HELP immugw_audit_prev_root_per_server Previous root index used for the latest audit.")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# TYPE immugw_audit_prev_root_per_server gauge")]),a._v("\nimmugw_audit_prev_root_per_server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("server_address"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"127.0.0.1:3322"')]),a._v(",server_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"br8eugq036tfln0ct6o0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# HELP immugw_audit_result_per_server Latest audit result (1 = ok, 0 = tampered).")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# TYPE immugw_audit_result_per_server gauge")]),a._v("\nimmugw_audit_result_per_server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("server_address"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"127.0.0.1:3322"')]),a._v(",server_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"br8eugq036tfln0ct6o0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# HELP immugw_audit_run_at_per_server Timestamp in unix seconds at which latest audit run.")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# TYPE immugw_audit_run_at_per_server gauge")]),a._v("\nimmugw_audit_run_at_per_server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("server_address"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"127.0.0.1:3322"')]),a._v(",server_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"br8eugq036tfln0ct6o0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(".590757033502689e+09\n")])])]),s("h2",{attrs:{id:"license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[a._v("#")]),a._v(" License")]),a._v(" "),s("p",[a._v("immugw is "),s("a",{attrs:{href:"https://github.com/codenotary/immugw/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[a._v("Apache v2.0 License"),s("OutboundLink")],1),a._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);