<template>
  
  <v-main class="main-container fill-height">
    <v-row justify="space-between" class="fill-height">
       <v-col cols="2" class="left-branch" >
        <!-- <v-img src="@/assets/plant1PNG/500/plant1_500.png" /> -->
      </v-col> 
      <v-col :cols="$vuetify.display.mobile?10:7">
        <router-view />
      </v-col>
      <v-col cols="2"  v-if="!$vuetify.display.mobile" class="pr-0 mr-0">
        <div class="branch"  >
        <v-img src="@/assets/plant2_1000.png" class="right-branch" />
        </div>
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
  top: 2vh;
  right:0;
  width: 15vw;
  max-height: 100%;
  position: fixed;
}
</style>
