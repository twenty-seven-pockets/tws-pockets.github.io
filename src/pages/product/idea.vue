<template>
  <v-card flat class="bg-cardBackground text-text">
    <v-card-title align="center">
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