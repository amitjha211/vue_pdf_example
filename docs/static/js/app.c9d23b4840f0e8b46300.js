webpackJsonp([1],{"4jPk":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s=n("Zrlr"),r=n.n(s),i=n("wxAW"),o=n.n(i),l=function(){function t(){r()(this,t),this.sLink="amit jha",this._pdf=null,this._canvas=null,this.currentPage=1,this.totalPages=0,this.error=!1,this.pages=[],this.busy=!1,this.progressPer=0}return o()(t,[{key:"setCanvas",value:function(t){this._canvas=t}},{key:"onFileLoad",value:function(){}},{key:"fillPagesInfo",value:function(){for(var t=0;t<this.totalPages;t++){var e={pageNumber:t+1};this.pages.push(e)}}},{key:"viewPage",value:function(){var t=this;this.busy=!0,this._pdf.getPage(this.currentPage).then(function(e){var n=e.getViewport(1.5),a=t._canvas.getContext("2d");t._canvas.height=n.height,t._canvas.width=n.width;var s={canvasContext:a,viewport:n};e.render(s),t.busy=!1})}},{key:"viewPageByIndex",value:function(t){this.currentPage=t,this.viewPage()}},{key:"loadPDF",value:function(){var t=this;PDFJS.getDocument({url:this.sLink},!1,null,function(e){t.progressPer=e.loaded/e.total*100,t.onFileLoad&&t.onFileLoad()}).then(function(e){t._pdf=e,t.totalPages=t._pdf.numPages,t.fillPagesInfo(),t.viewPage(),$.isFunction(t.onFileLoad)&&t.onFileLoad()}).catch(function(t){alert(t)})}},{key:"setPDFLink",value:function(t){this.sLink=t}},{key:"reset",value:function(){this.currentPage=1,this.viewPage()}},{key:"next",value:function(){this.currentPage>=this.totalPages?alert("You are on the last page !"):(this.currentPage+=1,this.viewPage())}},{key:"previous",value:function(){1!=this.currentPage?(this.currentPage-=1,this.viewPage()):alert("You are on the first page !")}}]),t}(),u={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App",viewer:new l}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links ")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),n("br"),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var v=n("VU/8")(u,c,!1,function(t){n("4jPk")},"data-v-6dd9d980",null).exports,h={name:"pdfContainer",props:{viewer:l},data:function(){return{}},mounted:function(){this.viewer.setCanvas(document.getElementById("the-canvas"))}},d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12",staticStyle:{"text-align":"center","background-color":"darkgray","padding-top":"5px"}},[e("canvas",{staticClass:"pdfViewer",attrs:{id:"the-canvas"}})])])}]},f=n("VU/8")(h,d,!1,null,null,null).exports,p={name:"pdfTopMenu",props:{viewer:l},data:function(){}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row",staticStyle:{border:"1px solid",padding:"3px"}},[n("div",{staticClass:"col-md-12"},[n("table",[n("tr",[n("td",[t._v("\r\n                    Pages : \r\n                ")]),t._v(" "),n("td",[n("span",{staticClass:"badge badge-primary",domProps:{textContent:t._s(t.viewer.totalPages)}},[t._v("0")])]),t._v(" "),n("td",[t._v("\r\n                     "),n("button",{staticClass:"btn btn-default btn-xs",on:{click:function(e){return t.viewer.reset()}}},[t._v("Reset")])]),t._v(" "),n("td",[t._v("\r\n                     \r\n                ")]),t._v(" "),n("td",[n("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.viewer.previous()}}},[n("i",{staticClass:"fa fa-arrow-left"})]),t._v("\r\n                     "),n("span",{staticClass:"badge badger-danger",domProps:{textContent:t._s(t.viewer.currentPage)}}),t._v(" \r\n                    "),n("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.viewer.next()}}},[n("i",{staticClass:"fa fa-arrow-right"})])])]),t._v(" "),t._m(0)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td")])}]},g={name:"pdfViewer",components:{pdfContainer:f,pdfTopMenu:n("VU/8")(p,_,!1,null,null,null).exports},props:{link:String},data:function(){return{viewer:new l(this.link)}},methods:{test1:function(){this.viewer.loadPDF()}},mounted:function(){this.viewer.setPDFLink(this.link),this.viewer.loadPDF()}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("pdfTopMenu",{attrs:{viewer:this.viewer}}),this._v(" "),e("pdfContainer",{attrs:{viewer:this.viewer}})],1)])},staticRenderFns:[]};var w={name:"App",components:{HelloWorld:v,pdfViewer:n("VU/8")(g,m,!1,function(t){n("zDTn")},"data-v-069c274e",null).exports}},P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row",attrs:{id:"app"}},[e("div",{staticClass:"col-md-2"}),this._v(" "),e("div",{staticClass:"col-md-10"},[e("pdfViewer",{attrs:{link:"static/assembly64.pdf"}})],1)])},staticRenderFns:[]},k=n("VU/8")(w,P,!1,null,null,null).exports;a.a.config.productionTip=!1,new a.a({el:"#app",components:{App:k},template:"<App/>"})},zDTn:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c9d23b4840f0e8b46300.js.map