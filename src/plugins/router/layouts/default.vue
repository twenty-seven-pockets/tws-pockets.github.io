<template>
  
  <v-main class="main-container fill-height">
    <v-row justify="space-between" class="fill-height">
      <v-col cols="2" class="left-branch">
        <v-img src="@/assets/plant1PNG/500/plant1_500.png" />
      </v-col>
      <v-col cols="7">
        <router-view />
      </v-col>
      <v-col cols="2" class="right-branch">
        <!-- <div class="branch"> -->
        <v-img src="@/assets/plant2PNG/500/plant2_500.png" class="" />
        <!-- </div> -->
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      largeImageIsFading: false,
    };
  },
};
</script>

<style lang="css" scoped>
.main-col {
  overflow-y: scroll;
  height: 100%;
}
.left-branch {
  min-width: 100px;
  max-height: 85vh;
  align-content: end;
}
.right-branch {
  padding-top: 20vh;
  min-width: 100px;
  max-height: 100%;
  position: relative;
}
</style>
