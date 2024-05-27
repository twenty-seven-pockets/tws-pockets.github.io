<template>
  <div v-html="markdownToHtml" ></div>
</template>

<script>
import markdownit from "markdown-it";

// Simple Markdown Container that receives a markdown string,
// parses the markdown using markdownit

export default {
  name: "MarkdownContainer",
  props: {
    markdownString: {
      type: String,
      default: "",
    },
  },

  computed: {
    md() {
      return markdownit({ html: true, linkify: true });
    },
    markdownToHtml() {
      return this.md.render(this.markdownString);
    },
  },
};
</script>

<style lang="scss" scoped></style>
