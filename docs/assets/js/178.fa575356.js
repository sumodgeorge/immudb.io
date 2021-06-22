(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{611:function(a,e,t){"use strict";t.r(e);var s=t(10),i=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"planning"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#planning"}},[a._v("#")]),a._v(" Planning")]),a._v(" "),t("WrappedSection",[t("p",[a._v("Before running a database in production, it is important to plan:")]),a._v(" "),t("ul",[t("li",[a._v("Computing resources")]),a._v(" "),t("li",[a._v("Disk space")]),a._v(" "),t("li",[a._v("Configuration")]),a._v(" "),t("li",[a._v("Backups")]),a._v(" "),t("li",[a._v("Health Monitoring")])]),a._v(" "),t("h3",{attrs:{id:"computing-resources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#computing-resources"}},[a._v("#")]),a._v(" Computing Resources")]),a._v(" "),t("p",[a._v("immudb was designed to have a stable memory/CPU footprint.")]),a._v(" "),t("p",[a._v("Memory is pre-allocated based on specified maximum concurrency, maximum number of entries per transaction, cache sizes, etc.")]),a._v(" "),t("p",[a._v("With the default settings, it's possible to stress immudb and memory usage should stay around 1.5GB (assuming low-sized values). Otherwise, memory will be needed to maintain the values within a transaction during commit time.")]),a._v(" "),t("h3",{attrs:{id:"disk-space-and-data-location"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disk-space-and-data-location"}},[a._v("#")]),a._v(" Disk space and data location")]),a._v(" "),t("p",[a._v("immudb is an immutable database, this means all history is preserved and therefore disk usage is higher than a normal database.")]),a._v(" "),t("p",[a._v("Data is stored in the directory specified by the "),t("code",[a._v("dir")]),a._v(" option.")])])],1)}),[],!1,null,null,null);e.default=i.exports}}]);