<template>
  <v-card flat class="text-productText">
    <v-card-title>
      {{$t("productIdea")}}
    </v-card-title>
    <v-card-text >
      {{$t('productIdeaDescription')}}
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name : "ProductIdeaView"
    
  }
</script>

<style lang="scss" scoped>

</style>