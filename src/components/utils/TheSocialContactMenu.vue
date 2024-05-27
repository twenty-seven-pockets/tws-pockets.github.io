<template><v-fab
  location="bottom end"
  class="social-button ma-4"
  icon
  color="secondaryButtonIconColor"
>
  <v-tooltip activator="parent">$t("Follow us on...")</v-tooltip>
  <v-icon> mdi-share </v-icon>
  <v-speed-dial activator="parent">
    <v-btn
      icon
      color="secondaryButtonIconColor"
      href="https://twitter.com/Kussy_Lips"
      target="_blank"
      ><v-icon>mdi-twitter</v-icon></v-btn
    >
    <v-btn
      icon
      color="secondaryButtonIconColor"
      href="https://twitter.com/Kussy_Lips"
      target="_blank"
      ><v-icon>mdi-facebook</v-icon></v-btn
    >
    <v-btn
      icon
      color="secondaryButtonIconColor"
      href="https://instagram.com/Kussy_Lips"
      target="_blank"
      ><v-icon>mdi-instagram</v-icon></v-btn
    >
  </v-speed-dial>
</v-fab>
</template>

<script>
  export default {
    name : "TheSocialContactMenu"
    
  }
</script>

<style lang="scss" scoped>
.social-button {
  position: fixed;
  bottom: 0px;
  right: 0px;
  z-index: 999;
}

</style>