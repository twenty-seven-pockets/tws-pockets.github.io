<template lang="">
  <v-card>
    <v-card-title>
      <v-row justify="start" align="center">
        <v-col cols="auto">
          <GoBackInHistoryButton/>
        </v-col>
        <v-col>
          {{content.title}}
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text>
      <nuxt-content :document="content"/>

    </v-card-text>
  </v-card>

</template>
<script>
import GoBackInHistoryButton from '@/components/control/GoBackInHistoryButton.vue'
export default {
  name : "ProjectPage",
  components:{GoBackInHistoryButton},
  async asyncData({$content, isDev, route, store, env, params, query, req, res, redirect, error}) {
    console.log(params.slug)
    return {content : await $content(`portfolio/${params.slug}`).fetch()}
  },
  
}
</script>
<style lang="">
  
</style>