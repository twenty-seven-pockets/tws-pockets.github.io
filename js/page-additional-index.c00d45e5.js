(self["webpackChunkKussy"]=self["webpackChunkKussy"]||[]).push([[103],{338:function(t,n,e){"use strict";e.d(n,{A:function(){return v}});var r=e(6768),i=e(4232),a=e(6548),s=e(1606),o=e(697),c=e(6756),l=e(5526);const p=["innerHTML"],u=["innerHTML"];function d(t,n,e,d,g,f){return(0,r.uX)(),(0,r.Wv)(a.J,{class:"bg-card-background text-card-text-color mt-5",align:"center"},{default:(0,r.k6)((()=>[(0,r.bF)(s.r,null,{default:(0,r.k6)((()=>[(0,r.bF)(c.L,{justify:"center",align:"center"},{default:(0,r.k6)((()=>[(0,r.bF)(l.B,{cols:"12",class:"text-h4"},{default:(0,r.k6)((()=>[(0,r.Lk)("span",{innerHTML:f.render(f.title)},null,8,p)])),_:1}),(0,r.bF)(l.B,{cols:"12"},{default:(0,r.k6)((()=>[e.customIcon?((0,r.uX)(),(0,r.Wv)((0,r.$y)(e.customIcon),(0,i._B)((0,r.v6)({key:0},{width:"15%",height:"auto",...t.$props.iconProps})),null,16)):(0,r.Q3)("",!0)])),_:1})])),_:1})])),_:1}),(0,r.bF)(o.O,null,{default:(0,r.k6)((()=>[(0,r.Lk)("div",{innerHTML:f.render(f.body)},null,8,u)])),_:1}),(0,r.RG)(t.$slots,"append")])),_:3})}var g=e(642);e(4114),e(3375),e(9225),e(3972),e(9209),e(5714),e(7561),e(6197);const f=new Set([!0,!1,"alt","title"]);function h(t,n){return(Array.isArray(t)?t:[]).filter((([t])=>t!==n))}function m(t,n){t&&t.attrs&&(t.attrs=h(t.attrs,n))}function _(t,n){if(!f.has(t))throw new TypeError(`figcaption must be one of: ${[...f]}.`);if("alt"===t)return n.content;const e=n.attrs.find((([t])=>"title"===t));return Array.isArray(e)&&e[1]?(m(n,"title"),e[1]):void 0}function k(t,n){n=n||{},t.core.ruler.before("linkify","image_figures",(function(e){let r=1;for(let i=1,a=e.tokens.length;i<a-1;++i){const s=e.tokens[i];if("inline"!==s.type)continue;if(!s.children||1!==s.children.length&&3!==s.children.length)continue;if(1===s.children.length&&"image"!==s.children[0].type)continue;if(3===s.children.length){const[t,n,e]=s.children;if("link_open"!==t.type||"image"!==n.type||"link_close"!==e.type)continue}if(0!==i&&"paragraph_open"!==e.tokens[i-1].type)continue;if(i!==a-1&&"paragraph_close"!==e.tokens[i+1].type)continue;const o=e.tokens[i-1];let c;if(o.type="figure_open",o.tag="figure",e.tokens[i+1].type="figure_close",e.tokens[i+1].tag="figure",n.dataType&&e.tokens[i-1].attrPush(["data-type","image"]),n.link&&1===s.children.length){[c]=s.children;const t=new e.Token("link_open","a",1);t.attrPush(["href",c.attrGet("src")]),s.children.unshift(t),s.children.push(new e.Token("link_close","a",-1))}if(c=1===s.children.length?s.children[0]:s.children[1],n.figcaption){const r=_(n.figcaption,c);if(r){const[n]=t.parseInline(r,e.env);s.children.push(new e.Token("figcaption_open","figcaption",1)),s.children.push(...n.children),s.children.push(new e.Token("figcaption_close","figcaption",-1)),c.attrs&&(c.attrs=h(c.attrs,"title"))}}if(n.copyAttrs&&c.attrs){const t=!0===n.copyAttrs?"":n.copyAttrs;o.attrs=c.attrs.filter((([n])=>n.match(t))).map((t=>Array.from(t)))}if(n.tabindex&&(e.tokens[i-1].attrPush(["tabindex",r]),r++),n.lazy&&(c.attrs.some((([t])=>"loading"===t))||c.attrs.push(["loading","lazy"])),n.async&&(c.attrs.some((([t])=>"decoding"===t))||c.attrs.push(["decoding","async"])),n.classes&&"string"==typeof n.classes){let t=!1;for(let e=0,r=c.attrs.length;e<r&&!t;e++){const r=c.attrs[e];"class"===r[0]&&(r[1]=`${r[1]} ${n.classes}`,t=!0)}t||c.attrs.push(["class",n.classes])}if(n.removeSrc){const t=c.attrs.find((([t])=>"src"===t));c.attrs.push(["data-src",t[1]]),m(c,"src")}}}))}var b={name:"MarkdownCardWithIcon",props:{path:{type:String,required:!0},customIcon:{type:String,required:!1},iconProps:{type:Object,required:!1,default:()=>({})}},data(){return{}},computed:{md(){const t=new g.A({linkify:!0,html:!0});return t.renderer.rules.image=(t,n,r,i,a)=>{const s=t[n],o=s.attrIndex("src"),c=s.attrs[o][1];console.log("asd",{src:c});const l=e(290)(`./${c}`);return s.attrSet("src",l),s.attrSet("width","50%"),a.renderToken(t,n,r)},t.use(k),t.renderer.rules.bullet_list_open=function(t,n,e,r,i){return"<div class='v-card-text' ><div class='v-row' ><div class='v-col v-col-auto' style='margin:auto;'>"+i.renderToken(t,n,e)},t.renderer.rules.bullet_list_close=function(t,n,e,r,i){return"</div></div></div>"+i.renderToken(t,n,e)},t.renderer.rules.paragraph_open=function(t,n,e,r,i){return t[n].attrJoin("class","my-4"),i.renderToken(t,n,e)},t},page(){return this.$content(this.$props.path)},markdown(){return this.page.content.trim()},title(){return(this.markdown.match(/^#+ .*/)||[""])[0].replace("#","").trim()},body(){return this.markdown.replace(this.title,"")}},methods:{render(t){return this.md.render(t)}}},y=e(1241);const w=(0,y.A)(b,[["render",d]]);var v=w},5630:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return d}});var r=e(338),i=e(6768),a=e(6756),s=e(5526);const o={align:"center"};function c(t,n,e,c,l,p){const u=r.A;return(0,i.uX)(),(0,i.CE)("div",o,[(0,i.bF)(a.L,null,{default:(0,i.k6)((()=>[(0,i.bF)(s.B,{cols:"12"},{default:(0,i.k6)((()=>[(0,i.bF)(u,{path:"additional/application","custom-icon":"AdditionalApplicationCardIcon"})])),_:1}),(0,i.bF)(a.L),(0,i.bF)(s.B,{cols:"12"},{default:(0,i.k6)((()=>[(0,i.bF)(u,{path:"additional/toxicity","custom-icon":"AdditionalToxicityCardIcon"})])),_:1})])),_:1}),(0,i.bF)(a.L,null,{default:(0,i.k6)((()=>[(0,i.bF)(s.B,{cols:"12"},{default:(0,i.k6)((()=>[(0,i.bF)(u,{path:"additional/storage","custom-icon":"AdditionalStorageCardIcon"})])),_:1})])),_:1}),(0,i.bF)(a.L,null,{default:(0,i.k6)((()=>[(0,i.bF)(s.B,{cols:"12"},{default:(0,i.k6)((()=>[(0,i.bF)(u,{path:"additional/safespaces","custom-icon":"AdditionalSafespacesCardIcon"})])),_:1})])),_:1})])}var l={name:"AdditionalView"},p=e(1241);const u=(0,p.A)(l,[["render",c]]);var d=u},290:function(t,n,e){var r={"./logos/logo-with-large-name.png":2483,"./logos/logo.png":6918,"./logos/name-with-second-line.png":6929,"./logos/name.png":6250,"./pictures/founders/Henrik Weiss.png":9269,"./pictures/teasers/packaging.png":9983,"./plant1PNG/1000/plant1_1000.png":7482,"./plant1PNG/1000/plant1w_1000.png":3913,"./plant1PNG/250/plant1_250.png":3955,"./plant1PNG/250/plant1w_250.png":273,"./plant1PNG/500/plant1_500.png":2496,"./plant1PNG/500/plant1w_500.png":9725,"./plant2PNG/1000/plant2_1000.png":8732,"./plant2PNG/1000/plant2w_1000.png":1491,"./plant2PNG/2000/plant2_2000.png":8384,"./plant2PNG/2000/plant2w_2000.png":7513,"./plant2PNG/500/plant2_500.png":276,"./plant2PNG/500/plant2w_500.png":289,"./ui/branches/left.png":9319,"./ui/branches/right.png":3480};function i(t){var n=a(t);return e(n)}function a(t){if(!e.o(r,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return r[t]}i.keys=function(){return Object.keys(r)},i.resolve=a,t.exports=i,i.id=290},2483:function(t,n,e){"use strict";t.exports=e.p+"img/logo-with-large-name.b04b3b1c.png"},6918:function(t,n,e){"use strict";t.exports=e.p+"img/logo.87cdd841.png"},6250:function(t,n,e){"use strict";t.exports=e.p+"img/name.78246397.png"},9983:function(t,n,e){"use strict";t.exports=e.p+"img/packaging.03b2ecb0.png"},7482:function(t,n,e){"use strict";t.exports=e.p+"img/plant1_1000.0d4df275.png"},3913:function(t,n,e){"use strict";t.exports=e.p+"img/plant1w_1000.cc3aa6a4.png"},3955:function(t,n,e){"use strict";t.exports=e.p+"img/plant1_250.6a009b85.png"},273:function(t,n,e){"use strict";t.exports=e.p+"img/plant1w_250.f73bdc1d.png"},2496:function(t,n,e){"use strict";t.exports=e.p+"img/plant1_500.cab1b223.png"},9725:function(t,n,e){"use strict";t.exports=e.p+"img/plant1w_500.0c54a5bb.png"},8732:function(t,n,e){"use strict";t.exports=e.p+"img/plant2_1000.3694a247.png"},1491:function(t,n,e){"use strict";t.exports=e.p+"img/plant2w_1000.81a5a53a.png"},8384:function(t,n,e){"use strict";t.exports=e.p+"img/plant2_2000.6a487a70.png"},7513:function(t,n,e){"use strict";t.exports=e.p+"img/plant2w_2000.4d5ee986.png"},276:function(t,n,e){"use strict";t.exports=e.p+"img/plant2_500.12e7811a.png"},289:function(t,n,e){"use strict";t.exports=e.p+"img/plant2w_500.ecf79d9a.png"},3480:function(t,n,e){"use strict";t.exports=e.p+"img/right.993d5111.png"}}]);
//# sourceMappingURL=page-additional-index.c00d45e5.js.map