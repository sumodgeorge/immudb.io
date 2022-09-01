(window.webpackJsonp=window.webpackJsonp||[]).push([[489],{999:function(e,a,t){"use strict";t.r(a);var s=t(14),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"replication"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#replication"}},[e._v("#")]),e._v(" Replication")]),e._v(" "),t("WrappedSection",[t("h3",{attrs:{id:"replication-strategy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#replication-strategy"}},[e._v("#")]),e._v(" Replication strategy")]),e._v(" "),t("p",[e._v("immudb includes support for replication by means of a follower approach. A database can be created or configured either to be a master or a replica of another database.")]),e._v(" "),t("div",{staticClass:"wrapped-picture"},[t("p",[t("img",{attrs:{src:"/immudb/replication-servers.jpg",alt:"replication using grpc clients"}})])]),e._v(" "),t("p",[e._v("During replication, master databases have a passive role. The grpc endpoint "),t("code",[e._v("ExportTx")]),e._v(" is used by replicas to fetch unseen committed transactions from the master.")]),e._v(" "),t("p",[e._v("Replicas are read only and any direct write operation will be rejected. Using replicas allow to distribute query loads.")]),e._v(" "),t("div",{staticClass:"wrapped-picture"},[t("p",[t("img",{attrs:{src:"/immudb/replication-comm.jpg",alt:"replicator fetches committed txs via grpc calls and replicate them using in-process method invocations"}})])])]),e._v(" "),t("WrappedSection",[t("h3",{attrs:{id:"replication-and-users"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#replication-and-users"}},[e._v("#")]),e._v(" Replication and users")]),e._v(" "),t("p",[e._v("As shown in the diagram above, the replicator fetches committed transaction from the master via grpc calls. Internally, the replicator instantiates an immudb client (using the official golang SDK) and fetches unseen committed transactions from the master. In order to do so, the replicator requires valid user credentials with admin permissions, otherwise the master will reject any request.")])]),e._v(" "),t("WrappedSection",[t("h3",{attrs:{id:"creating-a-replica"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-replica"}},[e._v("#")]),e._v(" Creating a replica")]),e._v(" "),t("p",[e._v("Creating a replica of an existent database using immuadmin is super easy:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ ./immuadmin login immudb\nPassword:\nlogged "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v("\n$ ./immuadmin database create --replication-enabled"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true --replication-follower-username"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("immudb --replication-follower-password"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("immudb --replication-master-database"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("defaultdb replicadb\ndatabase "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'replicadb'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("replica: true"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" successfully created\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("Display all database creation flags with")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ ./immuadmin "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("help")]),e._v(" database create \n")])])])]),e._v(" "),t("h3",{attrs:{id:"creating-a-second-immudb-instance-to-replicate-systemdb-and-defaultdb-behaves-similarly"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-second-immudb-instance-to-replicate-systemdb-and-defaultdb-behaves-similarly"}},[e._v("#")]),e._v(" Creating a second immudb instance to replicate systemdb and defaultdb behaves similarly")]),e._v(" "),t("p",[e._v("Start immudb with enabled replication:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ ./immudb --replication-enabled"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true --replication-follower-password"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("immudb  --replication-follower-username"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("immudb --replication-master-address"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("127.0")]),e._v(".0.1\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("Display all replication flags")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ ./immudb --help\n")])])])])]),e._v(" "),t("WrappedSection",[t("h3",{attrs:{id:"multiple-replicas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#multiple-replicas"}},[e._v("#")]),e._v(" Multiple replicas")]),e._v(" "),t("p",[e._v("It's possible to create multiple replicas of a database. Each replica works independently of the others.")]),e._v(" "),t("div",{staticClass:"wrapped-picture"},[t("p",[t("img",{attrs:{src:"/immudb/replication-multiple.jpg",alt:"multiple replicas of the same master database"}})])]),e._v(" "),t("p",[e._v("Given the master database acts in passive mode, there are no special steps needed in order to create more replicas. Thus, by repeating the same steps to create the first replica it's possible to configure new ones.")])]),e._v(" "),t("WrappedSection",[t("h3",{attrs:{id:"replica-of-a-replica"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#replica-of-a-replica"}},[e._v("#")]),e._v(" Replica of a replica")]),e._v(" "),t("p",[e._v("In case many replicas are needed or the master database is under heavy load, it's possible to delegate the creation of replicas to an existent replica. This way, the master database is not affected by the total number of replicas being created.")]),e._v(" "),t("div",{staticClass:"wrapped-picture"},[t("p",[t("img",{attrs:{src:"/immudb/replication-chain.jpg",alt:"a replica indirectly following the master"}})])])]),e._v(" "),t("WrappedSection",[t("h3",{attrs:{id:"external-replicator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#external-replicator"}},[e._v("#")]),e._v(" External replicator")]),e._v(" "),t("p",[e._v("By creating a database as a replica but with disabled replication, no replicator is created for the database and an external process could be used to replicate committed transactions from the master. The grpc endpoint "),t("code",[e._v("ReplicateTx")]),e._v(" may be used to externally replicate a transaction.")])]),e._v(" "),t("WrappedSection",[t("h3",{attrs:{id:"heterogeneous-settings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#heterogeneous-settings"}},[e._v("#")]),e._v(" Heterogeneous settings")]),e._v(" "),t("p",[e._v("Replication is configured per database. Thus, the same immudb server may hold several master and replica databases at the same time.")]),e._v(" "),t("div",{staticClass:"wrapped-picture"},[t("img",{attrs:{src:"/immudb/replication-server.jpg",width:"300",alt:"a single immudb server can hold multiple master and replica databases"}})])]),e._v(" "),t("WrappedSection",[t("h3",{attrs:{id:"replicator-tool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#replicator-tool"}},[e._v("#")]),e._v(" Replicator tool")]),e._v(" "),t("p",[e._v("You may need to keep a copy of every database on one immudb instance on another, so that when a new database is created\non the main instance, a replicated database is created on the replica.")]),e._v(" "),t("p",[e._v("In that case you can use the "),t("a",{attrs:{href:"https://github.com/codenotary/immudb-tools/tree/main/replicator",target:"_blank",rel:"noopener noreferrer"}},[e._v("replicator tool"),t("OutboundLink")],1),e._v(", part of the\n"),t("a",{attrs:{href:"https://github.com/codenotary/immudb-tools",target:"_blank",rel:"noopener noreferrer"}},[e._v("immudb tools"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("This tool connects to two immudb instances, one main instance and a replica. Periodically, scans the list of databases\npresent on the main instance and it compares that with the list of databases present on the replica. If it finds any new\ndatabases that are missing on the replicas, it will recreate it on the replica and it will configure it to start following\nits counterpart on the main.")]),e._v(" "),t("p",[e._v("If necessary (usually it is) it will also create the replication user on the main instance for the new database(s).")]),e._v(" "),t("p",[e._v("Using this tool you won't need to manually configure replicated databases on replica instance(s).")]),e._v(" "),t("p",[e._v("You can have more information about this tool on its "),t("a",{attrs:{href:"https://github.com/codenotary/immudb-tools/tree/main/replicator",target:"_blank",rel:"noopener noreferrer"}},[e._v("README page"),t("OutboundLink")],1),e._v(".")])])],1)}),[],!1,null,null,null);a.default=r.exports}}]);