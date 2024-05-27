<template>
  <v-main class="main-container">
    <v-row justify="space-between" class="bg-cardBackground fill-height">
      <v-col
        cols="2"
        style="min-width: 100px; max-height: 85vh; align-content: end"
        class="fill-height"
      >
        <v-img src="@/assets/plant1PNG/500/plant1_500.png" />
      </v-col>
      <v-col cols="7" class="fill-height bg-cardBackground main-col" align="center">
        <router-view />
      </v-col>
      <v-col
        cols="2"
        style="padding-top: 20vh; min-width: 100px; max-height: 100%; position: relative"
      >
        <!-- <div class="branch"> -->
        <v-img src="@/assets/plant2PNG/500/plant2_500.png" class="" />
        <!-- </div> -->
      </v-col>
    </v-row>
  </v-main>
</template>

TODO Vertically Centered Layout Create a layout for singular vertically centered
components such as the errorview
<script>
export default {
  name: "VerticallyCenteredLayout",
};
</script>

<style lang="css" scoped>
.languageButton {
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 999;
}
.social-button {
  position: fixed;
  bottom: 0px;
  right: 0px;
  z-index: 999;
}
.main-container {
  background-color: antiquewhite;
  padding-top: 0px;
  padding-bottom: 0px;
  margin: 0px;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  position: absolute;
}
.main-col {
  align-content: center;
}
.fill-height {
  height: 100%;
}
</style>
