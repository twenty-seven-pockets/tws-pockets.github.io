"use strict";(self["webpackChunkKussy"]=self["webpackChunkKussy"]||[]).push([[469,575,407],{9551:function(t,n,e){e.d(n,{A:function(){return v}});var a=e(6768),i=e(4232),l=e(4593),o=e(1606),u=e(5832),r=e(697);function s(t,n,e,s,d,c){return(0,a.uX)(),(0,a.Wv)(l.J,{class:"bg-cardBackground text-text",align:"center"},{default:(0,a.k6)((()=>[(0,a.RG)(t.$slots,"body",(0,i._B)((0,a.Ng)({i18nBody:c.i18nBody})),(()=>[c.i18nBody.title?.length>0?((0,a.uX)(),(0,a.Wv)(o.r,{key:0},{default:(0,a.k6)((()=>[(0,a.RG)(t.$slots,"title",(0,i._B)((0,a.Ng)({i18nBody:c.i18nBody})),(()=>[(0,a.eW)((0,i.v_)(c.i18nBody.title),1)]))])),_:3})):(0,a.Q3)("",!0),c.i18nBody.subtitle?.length>0?((0,a.uX)(),(0,a.Wv)(u.Z,{key:1},{default:(0,a.k6)((()=>[(0,a.RG)(t.$slots,"subtitle",(0,i._B)((0,a.Ng)({i18nBody:c.i18nBody})),(()=>[(0,a.eW)((0,i.v_)(c.i18nBody.subtitle),1)]))])),_:3})):(0,a.Q3)("",!0),(0,a.bF)(r.O,null,{default:(0,a.k6)((()=>[(0,a.RG)(t.$slots,"default",(0,i._B)((0,a.Ng)({i18nBody:c.i18nBody})),(()=>[(0,a.eW)((0,i.v_)(c.i18nBody.text),1)]))])),_:3}),t.$slots?.footer||c.i18nBody.footer?.length>0?((0,a.uX)(),(0,a.Wv)(r.O,{key:2},{default:(0,a.k6)((()=>[(0,a.RG)(t.$slots,"footer",(0,i._B)((0,a.Ng)({i18nBody:c.i18nBody})),(()=>[(0,a.eW)((0,i.v_)(c.i18nBody.footer),1)]))])),_:3})):(0,a.Q3)("",!0)]))])),_:3})}var d=e(8001),c={name:"i18nCard",props:{path:{type:String,required:!0,default:""}},computed:{i18nBody(){return this.i18nObject()},messages(){return(0,d.d)()}},methods:{i18nObject(t){const n=t||this.i18nPath,e=this.messages;return console.debug("i18nObject",{path:t,locale:this.$i18n.locale,localeMsgs:e[this.$i18n.locale],msgs:e}),e[this.$i18n.locale]?.company?.pages[n]||e[this.$i18n.fallbackLocale]?.company?.pages[n]||e[this.$i18n.locale][`${n}`]||e[this.$i18n.fallbackLocale][n]||`${n}`}}},f=e(1241);const y=(0,f.A)(c,[["render",s]]);var v=y},6369:function(t,n,e){e.d(n,{A:function(){return y}});var a=e(9551),i=e(6768),l=e(4232),o=e(3813),u=e(6756),r=e(5526);function s(t,n,e,s,d,c){const f=a.A;return(0,i.uX)(),(0,i.Wv)(f,null,{default:(0,i.k6)((({i18nBody:t})=>[(0,i.bF)(o.I,null,{default:(0,i.k6)((()=>[(0,i.bF)(u.L,{justify:"center"},{default:(0,i.k6)((()=>[(0,i.bF)(r.B,{cols:"auto"},{default:(0,i.k6)((()=>[(0,i.Lk)("ul",null,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(t.list,(t=>((0,i.uX)(),(0,i.CE)("li",{key:t.id},(0,l.v_)(t),1)))),128))])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:1})}var d={components:{i18nCard:a.A},name:"i18nCardWitList"},c=e(1241);const f=(0,c.A)(d,[["render",s]]);var y=f},6482:function(t,n,e){e.r(n),e.d(n,{default:function(){return s}});var a=e(6369),i=e(6768);function l(t,n,e,l,o,u){const r=a.A;return(0,i.uX)(),(0,i.Wv)(r,{path:t.i18nPath},null,8,["path"])}var o={name:"CertificatesPage"},u=e(1241);const r=(0,u.A)(o,[["render",l]]);var s=r},1932:function(t,n,e){e.r(n),e.d(n,{default:function(){return y}});var a=e(6768),i=e(3813),l=e(6756),o=e(5526);function u(t,n,e,u,r,s){const d=(0,a.g2)("standards"),c=(0,a.g2)("certificates");return(0,a.uX)(),(0,a.Wv)(i.I,null,{default:(0,a.k6)((()=>[(0,a.bF)(l.L,null,{default:(0,a.k6)((()=>[(0,a.bF)(o.B,{cols:"12"},{default:(0,a.k6)((()=>[(0,a.bF)(d)])),_:1}),(0,a.bF)(o.B,{col:"12"},{default:(0,a.k6)((()=>[(0,a.bF)(c)])),_:1})])),_:1})])),_:1})}var r=e(6482),s=e(4149),d={name:"CertificationsIndex",components:{Standards:s["default"],Certificates:r["default"]}},c=e(1241);const f=(0,c.A)(d,[["render",u]]);var y=f},4149:function(t,n,e){e.r(n),e.d(n,{default:function(){return s}});var a=e(6369),i=e(6768);function l(t,n,e,l,o,u){const r=a.A;return(0,i.uX)(),(0,i.Wv)(r,{path:t.i18nPath},null,8,["path"])}var o={name:"StandardsView",computed:{items(){return new Array(3).fill(0).map(((t,n)=>this.$t(`company.articles.standards.list.${n}`)))}}},u=e(1241);const r=(0,u.A)(o,[["render",l]]);var s=r}}]);
//# sourceMappingURL=page-certifications-index.43bfd971.js.map