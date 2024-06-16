"use strict";(self["webpackChunkKussy"]=self["webpackChunkKussy"]||[]).push([[482],{5453:function(n,t,e){e.d(t,{A:function(){return _}});var o=e(5551),a=e(6768),l=e(4232),i=e(6548),d=e(1606),s=e(5832),r=e(697),u=e(3813),c=e(6756),y=e(5526);const k={key:1},p={key:1},B={key:1},g={key:1},h={key:1};function f(n,t,e,f,b,w){const v=o.A;return(0,a.uX)(),(0,a.Wv)(i.J,{class:"px-5"},{default:(0,a.k6)((()=>[(0,a.RG)(n.$slots,"body",(0,l._B)((0,a.Ng)({i18nBody:b.i18nBody})),(()=>[(0,a.RG)(n.$slots,"title",(0,l._B)((0,a.Ng)({i18nBody:b.i18nBody})),(()=>[b.i18nBody.title?.length>0?((0,a.uX)(),(0,a.Wv)(d.r,{key:0,align:"center"},{default:(0,a.k6)((()=>[e.withMarkdown?((0,a.uX)(),(0,a.Wv)(v,{key:0,"markdown-string":b.i18nBody.title},null,8,["markdown-string"])):((0,a.uX)(),(0,a.CE)("span",k,(0,l.v_)(b.i18nBody.title),1))])),_:1})):(0,a.Q3)("",!0)])),(0,a.RG)(n.$slots,"subtitle",(0,l._B)((0,a.Ng)({i18nBody:b.i18nBody})),(()=>[b.i18nBody.subtitle?.length>0?((0,a.uX)(),(0,a.Wv)(s.Z,{key:0},{default:(0,a.k6)((()=>[e.withMarkdown?((0,a.uX)(),(0,a.Wv)(v,{key:0,"markdown-string":b.i18nBody.subtitle},null,8,["markdown-string"])):((0,a.uX)(),(0,a.CE)("span",p,(0,l.v_)(b.i18nBody.subtitle),1))])),_:1})):(0,a.Q3)("",!0)])),(0,a.RG)(n.$slots,"prependContent",(0,l._B)((0,a.Ng)({i18nBody:b.i18nBody})),(()=>[b.i18nBody.prepend?.length>0?((0,a.uX)(),(0,a.Wv)(r.O,{key:0,align:"center",class:"text-card-text-color"},{default:(0,a.k6)((()=>[(0,a.bF)(u.I,null,{default:(0,a.k6)((()=>[e.withMarkdown?((0,a.uX)(),(0,a.Wv)(v,{key:0,"markdown-string":b.i18nBody.prepend},null,8,["markdown-string"])):((0,a.uX)(),(0,a.CE)("span",B,(0,l.v_)(b.i18nBody.prepend),1))])),_:1})])),_:1})):(0,a.Q3)("",!0)])),(0,a.bF)(r.O,{align:"center",class:"text-card-text-color"},{default:(0,a.k6)((()=>[(0,a.bF)(u.I,null,{default:(0,a.k6)((()=>[(0,a.bF)(c.L,null,{default:(0,a.k6)((()=>[(0,a.bF)(y.B,null,{default:(0,a.k6)((()=>[(0,a.RG)(n.$slots,"default",(0,l._B)((0,a.Ng)({i18nBody:b.i18nBody})),(()=>[e.withMarkdown?((0,a.uX)(),(0,a.Wv)(v,{key:0,"markdown-string":b.i18nBody.text},null,8,["markdown-string"])):((0,a.uX)(),(0,a.CE)("span",g,(0,l.v_)(b.i18nBody.text),1))]))])),_:3})])),_:3})])),_:3})])),_:3}),(0,a.RG)(n.$slots,"appendContent",(0,l._B)((0,a.Ng)({i18nBody:b.i18nBody}))),n.$slots?.footer||b.i18nBody.footer?.length>0||b.i18nBody.append?.length>0?((0,a.uX)(),(0,a.Wv)(r.O,{key:0,class:"text-card-text-color"},{default:(0,a.k6)((()=>[(0,a.RG)(n.$slots,"footer",(0,l._B)((0,a.Ng)({i18nBody:b.i18nBody})),(()=>[e.withMarkdown?((0,a.uX)(),(0,a.Wv)(v,{key:0,"markdown-string":b.i18nBody.footer||b.i18nBody.append},null,8,["markdown-string"])):((0,a.uX)(),(0,a.CE)("span",h,(0,l.v_)(b.i18nBody.footer||b.i18nBody.append),1))]))])),_:3})):(0,a.Q3)("",!0)])),(0,a.RG)(n.$slots,"actions")])),_:3})}var b=e(8001),w={name:"I18nCard",props:{path:{type:String,required:!0,default:""},withMarkdown:{type:Boolean,default:!0}},data(){return{i18nBody:{}}},computed:{locale(){return this.$i18n.locale},messages(){return(0,b.d)()}},watch:{locale(){this.updateI18nObject()}},methods:{updateI18nObject(n){const t=n||this.i18nPath,e=this.messages;console.debug(`Checking for i18n Value ${t}`,{local:e[this.$i18n.locale]?.company?.pages[t],fallbacklLocale:e[this.$i18n.fallbackLocale]?.company?.pages[t],global:e[this.$i18n.locale][`${t}`],fallbackGlobal:e[this.$i18n.fallbackLocale][t]}),this.i18nBody=e[this.$i18n.locale]?.company?.pages[t]||e[this.$i18n.fallbackLocale]?.company?.pages[t]||e[this.$i18n.locale][`${t}`]||e[this.$i18n.fallbackLocale][t]||`${t}`}},beforeMount(){this.updateI18nObject()}},v=e(1241);const $=(0,v.A)(w,[["render",f]]);var _=$},5673:function(n,t,e){e.r(t),e.d(t,{default:function(){return r}});var o=e(5453),a=e(6768);function l(n,t,e,l,i,d){const s=o.A;return(0,a.uX)(),(0,a.Wv)(s,{path:n.i18nPath},null,8,["path"])}var i={name:"SourcePage"},d=e(1241);const s=(0,d.A)(i,[["render",l]]);var r=s}}]);
//# sourceMappingURL=page-conservation-source.b1bf35d7.js.map