<template>
  <vue-markdown :source="markdownString"  :options="options" class="markdown-container"></vue-markdown>
  <!-- <div v-html="markdownToHtml" class="markdown-container"/> -->
</template>

<script>
import markdownit from "markdown-it";
import VueMarkdown from 'vue-markdown-render'


// Simple Markdown Container that receives a markdown string,
// parses the markdown using markdownit

export default {
  name: "MarkdownContainer",
  components : {VueMarkdown},
  props: {
    markdownString: {
      type: String,
      default: "",
    },
  },

  computed: {
    options(){return {
        breaks : true,
        linkify : true,
        typography : true
    }},
    plugins(){return {

    }},
    md() {
      return markdownit({ html: false, linkify: true , breaks : true});
    },
    markdownToHtml() {
      return this.md.render(this.markdownString);
    },
  },
};
</script>

<style lang="css" scoped>
.markdown-container  * {
  
  padding-top:5px !important;
  padding-bottom:5px !important;
}
</style>
