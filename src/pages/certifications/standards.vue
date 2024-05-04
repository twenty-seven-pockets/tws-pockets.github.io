<template>
  <i18n-card-with-list :path="i18nPath"/>
</template>

<script>
    export default {
        name : "StandardsView",
        computed : {
            items(){
                return new Array(3).fill(0).map((ele,idx) => this.$t(`company.articles.standards.list.${idx}`))
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>