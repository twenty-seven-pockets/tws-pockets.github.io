<template lang="">
  <div>
    <v-list>
      <v-list-item v-for="(project, index) in projects" :key="index">
        
        <ProjectPreviewComponent v-bind="project"/>
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
import ProjectPreviewComponent from '@/components/portfolio/ProjectPreviewComponent.vue'
export default {
  components : {ProjectPreviewComponent},
  async asyncData({$content, isDev, route, store, env, params, query, req, res, redirect, error}) {
      return {projects : await $content('portfolio').only(['title','description','updatedAt','tags', 'slug']).fetch()}
  },
  data() {
    return {
      projects : {}
    }
  },
  
}
</script>
<style lang="">
  
</style>