"use strict";(self["webpackChunkKussy"]=self["webpackChunkKussy"]||[]).push([[575],{6687:function(t,n,e){e.d(n,{A:function(){return _}});var o=e(360),a=e(6768),r=e(4232),l=e(6548),i=e(1606),s=e(5832),d=e(697),u=e(3813),c=e(6756),k=e(5526);const p={key:1},y={key:1},f={key:1},h={key:1},w={key:1};function g(t,n,e,g,B,m){const b=o.A;return(0,a.uX)(),(0,a.Wv)(l.J,{class:"px-5"},{default:(0,a.k6)((()=>[(0,a.RG)(t.$slots,"body",(0,r._B)((0,a.Ng)({i18nBody:B.i18nBody})),(()=>[(0,a.RG)(t.$slots,"title",(0,r._B)((0,a.Ng)({i18nBody:B.i18nBody})),(()=>[B.i18nBody.title?.length>0?((0,a.uX)(),(0,a.Wv)(i.r,{key:0,align:"center",class:"text-card-title-color"},{default:(0,a.k6)((()=>[e.withMarkdown?((0,a.uX)(),(0,a.Wv)(b,{key:0,"markdown-string":B.i18nBody.title},null,8,["markdown-string"])):((0,a.uX)(),(0,a.CE)("span",p,(0,r.v_)(B.i18nBody.title),1))])),_:1})):(0,a.Q3)("",!0)])),(0,a.RG)(t.$slots,"subtitle",(0,r._B)((0,a.Ng)({i18nBody:B.i18nBody})),(()=>[B.i18nBody.subtitle?.length>0?((0,a.uX)(),(0,a.Wv)(s.Z,{key:0,class:"text-card-subtitle-color text-lg",style:{"white-space":"normal","word-wrap":"break-word"}},{default:(0,a.k6)((()=>[e.withMarkdown?((0,a.uX)(),(0,a.Wv)(b,{key:0,"markdown-string":B.i18nBody.subtitle},null,8,["markdown-string"])):((0,a.uX)(),(0,a.CE)("span",y,(0,r.v_)(B.i18nBody.subtitle),1))])),_:1})):(0,a.Q3)("",!0)])),(0,a.RG)(t.$slots,"prependContent",(0,r._B)((0,a.Ng)({i18nBody:B.i18nBody})),(()=>[B.i18nBody.prepend?.length>0?((0,a.uX)(),(0,a.Wv)(d.O,{key:0,align:"center",class:"text-card-text-color"},{default:(0,a.k6)((()=>[(0,a.bF)(u.I,null,{default:(0,a.k6)((()=>[e.withMarkdown?((0,a.uX)(),(0,a.Wv)(b,{key:0,"markdown-string":B.i18nBody.prepend},null,8,["markdown-string"])):((0,a.uX)(),(0,a.CE)("span",f,(0,r.v_)(B.i18nBody.prepend),1))])),_:1})])),_:1})):(0,a.Q3)("",!0)])),(0,a.bF)(d.O,{align:"center",class:"text-card-text-color"},{default:(0,a.k6)((()=>[(0,a.bF)(u.I,null,{default:(0,a.k6)((()=>[(0,a.bF)(c.L,null,{default:(0,a.k6)((()=>[(0,a.bF)(k.B,null,{default:(0,a.k6)((()=>[(0,a.RG)(t.$slots,"default",(0,r._B)((0,a.Ng)({i18nBody:B.i18nBody})),(()=>[e.withMarkdown?((0,a.uX)(),(0,a.Wv)(b,{key:0,"markdown-string":B.i18nBody.text},null,8,["markdown-string"])):((0,a.uX)(),(0,a.CE)("span",h,(0,r.v_)(B.i18nBody.text),1))]))])),_:3})])),_:3})])),_:3})])),_:3}),(0,a.RG)(t.$slots,"appendContent",(0,r._B)((0,a.Ng)({i18nBody:B.i18nBody}))),t.$slots?.footer||B.i18nBody.footer?.length>0||B.i18nBody.append?.length>0?((0,a.uX)(),(0,a.Wv)(d.O,{key:0,class:"text-card-text-color"},{default:(0,a.k6)((()=>[(0,a.RG)(t.$slots,"footer",(0,r._B)((0,a.Ng)({i18nBody:B.i18nBody})),(()=>[e.withMarkdown?((0,a.uX)(),(0,a.Wv)(b,{key:0,"markdown-string":B.i18nBody.footer||B.i18nBody.append},null,8,["markdown-string"])):((0,a.uX)(),(0,a.CE)("span",w,(0,r.v_)(B.i18nBody.footer||B.i18nBody.append),1))]))])),_:3})):(0,a.Q3)("",!0)])),(0,a.RG)(t.$slots,"actions")])),_:3})}var B=e(8001),m={name:"I18nCard",props:{path:{type:String,required:!0,default:""},withMarkdown:{type:Boolean,default:!0}},data(){return{i18nBody:{}}},computed:{locale(){return this.$i18n.locale},messages(){return(0,B.d)()}},watch:{locale(){this.updateI18nObject()}},methods:{updateI18nObject(t){const n=t||this.i18nPath,e=this.messages;console.debug(`Checking for i18n Value ${n}`,{local:e[this.$i18n.locale]?.company?.pages[n],fallbacklLocale:e[this.$i18n.fallbackLocale]?.company?.pages[n],global:e[this.$i18n.locale][`${n}`],fallbackGlobal:e[this.$i18n.fallbackLocale][n]}),this.i18nBody=e[this.$i18n.locale]?.company?.pages[n]||e[this.$i18n.fallbackLocale]?.company?.pages[n]||e[this.$i18n.locale][`${n}`]||e[this.$i18n.fallbackLocale][n]||`${n}`}},beforeMount(){this.updateI18nObject()}},b=e(1241);const v=(0,b.A)(m,[["render",g]]);var _=v},3938:function(t,n,e){e.d(n,{A:function(){return f}});var o=e(6687),a=e(360),r=e(6768),l=e(4232),i=e(697),s=e(6756),d=e(5526);const u={key:1};function c(t,n,e,c,k,p){const y=a.A,f=o.A;return(0,r.uX)(),(0,r.Wv)(f,{path:e.path,"with-markdown":e.withMarkdown},{prependContent:(0,r.k6)((({i18nBody:n})=>[(0,r.bF)(i.O,{class:"card-text-text-color"},{default:(0,r.k6)((()=>[(0,r.RG)(t.$slots,"text",(0,l._B)((0,r.Ng)({i18nBody:n})),(()=>[e.withMarkdown?((0,r.uX)(),(0,r.Wv)(y,{key:0,"markdown-string":n?.text},null,8,["markdown-string"])):((0,r.uX)(),(0,r.CE)("span",u,(0,l.v_)(n?.text),1))]))])),_:2},1024)])),default:(0,r.k6)((({i18nBody:t})=>[(0,r.bF)(s.L,{justify:"center"},{default:(0,r.k6)((()=>[(0,r.bF)(d.B,{cols:"auto"},{default:(0,r.k6)((()=>[(0,r.Lk)("ul",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(t?.list,(t=>((0,r.uX)(),(0,r.CE)("li",{key:t.id,class:"py-1"},(0,l.v_)(t),1)))),128))])])),_:2},1024)])),_:2},1024)])),_:3},8,["path","with-markdown"])}var k={name:"I18nCardWitList",props:{withMarkdown:{type:Boolean,default:!0},path:String}},p=e(1241);const y=(0,p.A)(k,[["render",c]]);var f=y},360:function(t,n,e){e.d(n,{A:function(){return u}});var o=e(6768);function a(t,n,e,a,r,l){const i=(0,o.g2)("vue-markdown");return(0,o.uX)(),(0,o.Wv)(i,{source:e.markdownString,options:l.options,class:"markdown-container"},null,8,["source","options"])}var r=e(642),l=e(1221),i={name:"MarkdownContainer",components:{VueMarkdown:l.A},props:{markdownString:{type:String,default:""}},computed:{options(){return{breaks:!0,linkify:!0,typography:!0}},plugins(){return{}},md(){return(0,r.A)({html:!1,linkify:!0,breaks:!0})},markdownToHtml(){return this.md.render(this.markdownString)}}},s=e(1241);const d=(0,s.A)(i,[["render",a],["__scopeId","data-v-f9b31bf8"]]);var u=d},4126:function(t,n,e){e.r(n),e.d(n,{default:function(){return u}});var o=e(3938),a=e(6336),r=e(6768);function l(t,n,e,l,i,s){const d=a.A,u=o.A;return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(d,{"content-path":"certifications/certificates"}),(0,r.bF)(u,{path:t.i18nPath},null,8,["path"])],64)}var i={name:"CertificatesPage"},s=e(1241);const d=(0,s.A)(i,[["render",l]]);var u=d}}]);
//# sourceMappingURL=page-certifications-certificates.c2a982d3.js.map