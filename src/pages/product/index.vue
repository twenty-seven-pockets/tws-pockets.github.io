<template>
  <v-container align="center">
    <v-row>
      <v-col>

        <markdown-card-with-icon path="product/idea" custom-icon="ProductIdeaCardIcon"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <markdown-card-with-icon path="product/content" custom-icon="ProductContentCardIcon"/>

      </v-col>
    </v-row>

  </v-container>
</template>

<script>
  export default {
    name : "ProductIndexView",
    
  }
</script>

<style lang="scss" scoped>

</style>