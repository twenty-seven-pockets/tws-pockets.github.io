<template>
  <!-- <markdown-content :content-path="path">
      <template #default="{page, render}"> -->
  <v-card class="bg-card-background text-card-text-color mt-5" align="center" >
    <v-card-title>
      <v-row justify="center" align="center">
        <v-col cols="12" class="text-h4">
          <span v-html="render(title)" ></span>
        </v-col>
        <v-col cols="12">
          <component
            v-if="customIcon"
            :is="customIcon"
            v-bind="{
              width: '15%',
              height: 'auto',
              ...$props.iconProps,
            }"
          />
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text>
      <div v-html="render(body)" />
      <!-- <vue-markdown :source="body"/> -->
    </v-card-text>
    <slot name="append"></slot>
  </v-card>
  <!-- </template>
    </markdown-content> -->
</template>

<script>
// Simple Markdown Container that receives a markdown string,
// parses the markdown using markdownit
import MarkdownIt from "markdown-it";
import implicitFigures from 'markdown-it-image-figures'

export default {
  name: "MarkdownCardWithIcon",
  props: {
    path: {
      type: String,
      required: true,
    },
    customIcon: {
      type: String,
      required: false,
    },
    iconProps: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },
  data() {
    return {
      // page : {},
    };
  },
  computed: {
    md() {
      const md = new MarkdownIt({ linkify: true, html: true });
      md.renderer.rules.image = (tokens, idx, options, env, self) => {
        const token = tokens[idx];
        const srcIndex = token.attrIndex('src');
        const src = token.attrs[srcIndex][1];
        
        console.log('asd', {src})
        const resolvedSrc = require(`@/assets/${src}`);
        token.attrSet('src', resolvedSrc);
        token.attrSet('width','50%' );
        return self.renderToken(tokens, idx, options);
      };
      md.use(implicitFigures);
      md.renderer.rules.bullet_list_open = function (tokens, idx, options, env, self) {
        return (
          "<div class='v-card-text' ><div class='v-row' ><div class='v-col v-col-auto' style='margin:auto;'>" +
          self.renderToken(tokens, idx, options)
        );
      };
      md.renderer.rules.bullet_list_close = function (tokens, idx, options, env, self) {
        return "</div></div></div>" + self.renderToken(tokens, idx, options);
      };
      md.renderer.rules.paragraph_open = function (tokens, idx, options, env, self) {
        // if (tokens[idx].tag === "h1") {;
        tokens[idx].attrJoin("class", "my-4");
        // }
        return self.renderToken(tokens, idx, options);
      };
      return md;
    },
    page() {
      return this.$content(this.$props.path);
    },
    markdown() {
      return this.page.content.trim();
    },
    title() {
      return (this.markdown.match(/^#+ .*/) || [""])[0].replace("#", "").trim();
    },
    body() {
      return this.markdown.replace(this.title, "");
    },
  },
  methods: {
    render(value) {
      return this.md.render(value);
    },
  },
};
</script>


<style>
ul li {
  text-align: start;
}
</style>