<template>
  <div>

  </div>
</template>

<script>
  export default {
    name : "MultipleCards",
    computed : {
      text(){
        return this.$t(`company.pages['${this.$route.fullPath}']`)
      }
    }
    
  }
</script>

<style lang="scss" scoped>

</style>