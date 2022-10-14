<template lang="">
    <v-switch v-model="darkTheme" :title="$t('themeChanger')"/>
</template>
<script>
export default {
  computed: {
    darkTheme : {
      get(){return this.$vuetify.theme.isDark },
      set(newVal){this.$vuetify.theme.isDark = newVal}
    }
  }
  
}
</script>
<style lang="">
  
</style>