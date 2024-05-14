<template>
  <div v-html="markdownToHtml" ></div>
</template>

<script>
import markdownit from "markdown-it";

export default {
  name: "MarkdownContainer",
  props: {
    markdownString: {
      type: String,
      default: "# asd",
    },
  },

  computed: {
    md() {
      return markdownit({ html: true, linkify: true });
    },
    render() {
      return this.md.render;
    },
    markdownToHtml() {
      return this.md.render(this.markdownString);
    },
  },
};
</script>

<style lang="scss" scoped></style>
