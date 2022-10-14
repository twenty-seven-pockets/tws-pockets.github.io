<template lang="">
  <v-container fluid>

    <v-card>
      <v-card-title>
        {{title}}
      </v-card-title>
      <v-card-subtitle>
        <v-row>
          <v-col >
            <v-chip v-for="(tag, index) in tags" :key="index" class="mr-2">{{tag}}</v-chip>
          </v-col>
          <v-spacer/>
          <v-col cols="auto" align="end">
            
          {{updatedAt}}
        </v-col>
      </v-row>
    </v-card-subtitle>
    <v-card-text>
      {{description}}
    </v-card-text>
    <v-card-actions>
      <v-spacer/>
      <v-btn nuxt-link :to="`portfolio/${slug}`">Learn more...</v-btn>
    </v-card-actions>
  </v-card>
</v-container>
</template>
<script>
export default {
  props : ['title','description','tags','updatedAt', 'slug'],
  
  
}
</script>
<style lang="">
  
</style>