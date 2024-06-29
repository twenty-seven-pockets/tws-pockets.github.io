<template>
    <slot name="default" v-bind="{page, render}">
    <div v-html="page.html" class="text-card-text-color markdown-content-loader"  align="center"/>
    </slot>
</template>

<script>
import MarkdownIt from "markdown-it";
export default {
  name: "MarkdownContent",
  props: {
    contentPath: {
      type: String,
      required: false,
      // validator: (prop) => {
      //     return true
      // }
    },
    alignCenter : Boolean,
    inputString: {
      type: String,
      default: "",
      required: false,
    },
    options: {
       type : Object,
       default : ()=>({'skip-first-heading' : false}),
       required : false,
    // validator: (prop) => {
    //     return true
    // }
    },
  },
  data() {
    return {
      page: {
        path: null,
        content: "",
        html: "",
        md: null,
      },
    };
  },
  computed: {
    path(){return this.$props.contentPath.split('#')[0]}
    // md() {
    //   return new MarkdownIt();
    // },
  },
  watch: {
    "$i18n.locale"() {
      console.log("Refreshing HTML");
      this.refreshContent();
    },
    "page.content"(value) {
      this.render(value)
    },
  },
  methods: {
    refreshPath() {},
    refreshContent() {
      if (this.$props.inputString) {
        this.page.path = null;
        this.page.content = this.$props.inputString;
        return;
      }

      this.page = this.$content(
        this.path || this.$router.currentRoute.fullPath
      );
    },
    createRenderer() {
      const md = new MarkdownIt({
        linkify : true,
        html : true,
      });
      md.renderer.rules.heading_open = function (tokens, idx, options, env, self) {
        console.log("Opening Heading", { token: tokens[idx] });
        if (tokens[idx].tag === "h1") {
          //
          // create a new vcard component
          tokens[idx].tag = "div";
          tokens[idx].attrJoin("class", "v-card");
          let html =  '<div class="v-card bg-card-background text-card-text-color mt-5"><div class="v-card-title">';
            return (idx > 0) ? `</div>${html}` : html;

        }
        return self.renderToken(tokens, idx, options);
      };

      md.renderer.rules.heading_close = function (tokens, idx, options, env, self) {
        console.log("Closing Heading", { token: tokens[idx].tag });
        if (tokens[idx].tag === 'h1') {
          return "</div>";
        }
        return self.renderToken(tokens,idx,options)
      };
      md.renderer.rules.bullet_list_open = function (tokens, idx, options, env, self) {
        return "<div class='v-card-text '  ><div class='v-row align-center' justify='center'><div class='v-col v-col-auto' style='margin:auto'>" + self.renderToken(tokens,idx,options)
      }
      md.renderer.rules.bullet_list_close = function (tokens, idx, options, env, self) {
        return "</div></div></div>" + self.renderToken(tokens,idx,options)
      }
      md.renderer.rules.paragraph_open = function (tokens, idx, options, env, self) {
        // if (tokens[idx].tag === "h1") {
        tokens[idx].tag = "div";
        
        tokens[idx].attrJoin("class", "v-card-text");
        // }
        return self.renderToken(tokens, idx, options);
      };
      md.renderer.rules.paragraph_close = function (tokens, idx, options, env, self) {
        // if (tokens[idx].tag === "h1") {
        tokens[idx].tag = "div";
        tokens[idx].attrJoin("class", "v-card-text");
        // }
        return self.renderToken(tokens, idx, options);
      };
      this.md = md;
      return md;
    },
    render(value){
      
      this.page.html = this.md.render(`${value || this.page.content}`);
      return this.page.html;
    }
  },
  beforeMount() {
    this.createRenderer();
    this.refreshContent();
  },
};
</script>

<style lang="css" >
.markdown-content-loader ul {
  text-align:start;
  
}
</style>
