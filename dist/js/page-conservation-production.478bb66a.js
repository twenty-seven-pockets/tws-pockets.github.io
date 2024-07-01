"use strict";(self["webpackChunkKussy"]=self["webpackChunkKussy"]||[]).push([[180],{6687:function(n,t,e){e.d(t,{A:function(){return _}});var o=e(360),a=e(6768),l=e(4232),r=e(6548),i=e(1606),s=e(5832),d=e(697),u=e(3813),c=e(6756),k=e(5526);const y={key:1},p={key:1},g={key:1},f={key:1},B={key:1};function h(n,t,e,h,w,m){const b=o.A;return(0,a.uX)(),(0,a.Wv)(r.J,{class:"px-5"},{default:(0,a.k6)((()=>[(0,a.RG)(n.$slots,"body",(0,l._B)((0,a.Ng)({i18nBody:w.i18nBody})),(()=>[(0,a.RG)(n.$slots,"title",(0,l._B)((0,a.Ng)({i18nBody:w.i18nBody})),(()=>[w.i18nBody.title?.length>0?((0,a.uX)(),(0,a.Wv)(i.r,{key:0,align:"center",class:"text-card-title-color"},{default:(0,a.k6)((()=>[e.withMarkdown?((0,a.uX)(),(0,a.Wv)(b,{key:0,"markdown-string":w.i18nBody.title},null,8,["markdown-string"])):((0,a.uX)(),(0,a.CE)("span",y,(0,l.v_)(w.i18nBody.title),1))])),_:1})):(0,a.Q3)("",!0)])),(0,a.RG)(n.$slots,"subtitle",(0,l._B)((0,a.Ng)({i18nBody:w.i18nBody})),(()=>[w.i18nBody.subtitle?.length>0?((0,a.uX)(),(0,a.Wv)(s.Z,{key:0,class:"text-card-subtitle-color text-lg",style:{"white-space":"normal","word-wrap":"break-word"}},{default:(0,a.k6)((()=>[e.withMarkdown?((0,a.uX)(),(0,a.Wv)(b,{key:0,"markdown-string":w.i18nBody.subtitle},null,8,["markdown-string"])):((0,a.uX)(),(0,a.CE)("span",p,(0,l.v_)(w.i18nBody.subtitle),1))])),_:1})):(0,a.Q3)("",!0)])),(0,a.RG)(n.$slots,"prependContent",(0,l._B)((0,a.Ng)({i18nBody:w.i18nBody})),(()=>[w.i18nBody.prepend?.length>0?((0,a.uX)(),(0,a.Wv)(d.O,{key:0,align:"center",class:"text-card-text-color"},{default:(0,a.k6)((()=>[(0,a.bF)(u.I,null,{default:(0,a.k6)((()=>[e.withMarkdown?((0,a.uX)(),(0,a.Wv)(b,{key:0,"markdown-string":w.i18nBody.prepend},null,8,["markdown-string"])):((0,a.uX)(),(0,a.CE)("span",g,(0,l.v_)(w.i18nBody.prepend),1))])),_:1})])),_:1})):(0,a.Q3)("",!0)])),(0,a.bF)(d.O,{align:"center",class:"text-card-text-color"},{default:(0,a.k6)((()=>[(0,a.bF)(u.I,null,{default:(0,a.k6)((()=>[(0,a.bF)(c.L,null,{default:(0,a.k6)((()=>[(0,a.bF)(k.B,null,{default:(0,a.k6)((()=>[(0,a.RG)(n.$slots,"default",(0,l._B)((0,a.Ng)({i18nBody:w.i18nBody})),(()=>[e.withMarkdown?((0,a.uX)(),(0,a.Wv)(b,{key:0,"markdown-string":w.i18nBody.text},null,8,["markdown-string"])):((0,a.uX)(),(0,a.CE)("span",f,(0,l.v_)(w.i18nBody.text),1))]))])),_:3})])),_:3})])),_:3})])),_:3}),(0,a.RG)(n.$slots,"appendContent",(0,l._B)((0,a.Ng)({i18nBody:w.i18nBody}))),n.$slots?.footer||w.i18nBody.footer?.length>0||w.i18nBody.append?.length>0?((0,a.uX)(),(0,a.Wv)(d.O,{key:0,class:"text-card-text-color"},{default:(0,a.k6)((()=>[(0,a.RG)(n.$slots,"footer",(0,l._B)((0,a.Ng)({i18nBody:w.i18nBody})),(()=>[e.withMarkdown?((0,a.uX)(),(0,a.Wv)(b,{key:0,"markdown-string":w.i18nBody.footer||w.i18nBody.append},null,8,["markdown-string"])):((0,a.uX)(),(0,a.CE)("span",B,(0,l.v_)(w.i18nBody.footer||w.i18nBody.append),1))]))])),_:3})):(0,a.Q3)("",!0)])),(0,a.RG)(n.$slots,"actions")])),_:3})}var w=e(8001),m={name:"I18nCard",props:{path:{type:String,required:!0,default:""},withMarkdown:{type:Boolean,default:!0}},data(){return{i18nBody:{}}},computed:{locale(){return this.$i18n.locale},messages(){return(0,w.d)()}},watch:{locale(){this.updateI18nObject()}},methods:{updateI18nObject(n){const t=n||this.i18nPath,e=this.messages;console.debug(`Checking for i18n Value ${t}`,{local:e[this.$i18n.locale]?.company?.pages[t],fallbacklLocale:e[this.$i18n.fallbackLocale]?.company?.pages[t],global:e[this.$i18n.locale][`${t}`],fallbackGlobal:e[this.$i18n.fallbackLocale][t]}),this.i18nBody=e[this.$i18n.locale]?.company?.pages[t]||e[this.$i18n.fallbackLocale]?.company?.pages[t]||e[this.$i18n.locale][`${t}`]||e[this.$i18n.fallbackLocale][t]||`${t}`}},beforeMount(){this.updateI18nObject()}},b=e(1241);const v=(0,b.A)(m,[["render",h]]);var _=v},360:function(n,t,e){e.d(t,{A:function(){return u}});var o=e(6768);function a(n,t,e,a,l,r){const i=(0,o.g2)("vue-markdown");return(0,o.uX)(),(0,o.Wv)(i,{source:e.markdownString,options:r.options,class:"markdown-container"},null,8,["source","options"])}var l=e(642),r=e(1221),i={name:"MarkdownContainer",components:{VueMarkdown:r.A},props:{markdownString:{type:String,default:""}},computed:{options(){return{breaks:!0,linkify:!0,typography:!0}},plugins(){return{}},md(){return(0,l.A)({html:!1,linkify:!0,breaks:!0})},markdownToHtml(){return this.md.render(this.markdownString)}}},s=e(1241);const d=(0,s.A)(i,[["render",a],["__scopeId","data-v-f9b31bf8"]]);var u=d},3033:function(n,t,e){e.r(t),e.d(t,{default:function(){return d}});var o=e(6687),a=e(6768);function l(n,t,e,l,r,i){const s=o.A;return(0,a.uX)(),(0,a.Wv)(s,{path:n.i18nPath},null,8,["path"])}var r={name:"ProductionPage"},i=e(1241);const s=(0,i.A)(r,[["render",l]]);var d=s}}]);
//# sourceMappingURL=page-conservation-production.478bb66a.js.map