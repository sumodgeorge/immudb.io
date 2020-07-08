(window.webpackJsonp=window.webpackJsonp||[]).push([[8,12],{312:function(t,e,a){"use strict";a.r(e);var o=a(313),i=a(311),n=a(310),s=a(315),r=a(309),l={name:"Layout",components:{Home:o.a,Page:n.a,Sidebar:s.a,Navbar:i.a},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(r.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},c=a(45),u=Object(c.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?a("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),a("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),a("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?a("Home"):a("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=u.exports},379:function(t,e,a){"use strict";a.r(e);a(68),a(46),a(67);var o=a(312),i=a(314),n={name:"BlogPostLayout",extends:o.default,components:{Footer:i.a},methods:{date:function(t){return new Date(t)},thumbnail:function(t){return t.replace(/^\/blog/,"/blog/thumbnail")}}},s=a(45),r=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-container",class:t.pageClasses,attrs:{id:"blog"},on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?a("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),a("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),a("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),a("i-container",{attrs:{id:"blog-post"}},[a("i-row",[a("i-column",[a("h1",{staticClass:"blog-post-title"},[t._v("immudb blog")]),t._v(" "),a("p",{staticClass:"blog-post-excerpt"},[t._v(t._s(t.$description))])])],1)],1),t._v(" "),a("i-container",{staticClass:"_margin-top-4",attrs:{id:"blog-posts"}},[a("i-row",{attrs:{id:"default-layout"}},[t._l(t.$pagination.pages,(function(e){return[a("i-column",{attrs:{lg:"4",md:"6"}},[a("i-card",{staticClass:"blog-entry"},[a("router-link",{staticClass:"blog-entry-image",attrs:{slot:"image",to:e.path},slot:"image"},[a("img",{staticClass:"foreground image -fluid",attrs:{src:t.thumbnail(t.$withBase(e.frontmatter.image)),alt:e.frontmatter.title}}),t._v(" "),a("img",{staticClass:"background image -fluid",attrs:{src:t.thumbnail(t.$withBase("/blog/background.jpg")),alt:e.frontmatter.title}})]),t._v(" "),a("router-link",{staticClass:"blog-entry-title",attrs:{to:e.path}},[a("h2",[t._v(t._s(e.frontmatter.title))])]),t._v(" "),a("p",{staticClass:"blog-entry-meta"},[t._v(t._s(t._f("dateFormat")(t.date(e.frontmatter.date),"MMMM DD, YYYY")))]),t._v(" "),a("p",{staticClass:"blog-entry-description"},[t._v(t._s(e.frontmatter.excerpt))])],1)],1)]}))],2),t._v(" "),a("i-row",[a("i-column",{staticClass:"_text-center"},[t.$pagination.hasPrev||t.$pagination.hasNext?a("ul",{staticClass:"list -inline",attrs:{id:"pagination"}},[t.$pagination.hasPrev?a("li",[a("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("Prev")])],1):t._e(),t._v(" "),t.$pagination.hasNext?a("li",[a("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("Next")])],1):t._e()]):t._e()])],1)],1),t._v(" "),a("Footer")],1)}),[],!1,null,null,null);e.default=r.exports}}]);