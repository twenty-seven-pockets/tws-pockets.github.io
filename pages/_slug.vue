<template lang="">
  <div>
    Basic
    <nuxt-content :document="content" />
  </div>
</template>
<script>
export default {
  name : "PageContentWrapper",
  async asyncData({$content, route, store, env, params, query, req, res, redirect, error}) {
    console.log(["Fetching content: ", params])
    return {content : await $content(params.slug).fetch()}
  },
  
}
</script>
<style lang="">
  
</style>