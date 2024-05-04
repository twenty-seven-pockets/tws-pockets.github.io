<template>
  <v-container grid-list-xs align="center">
    <v-row>
      <v-col> <spirit /> </v-col
    ></v-row>
    <v-row>
      <v-col>
        <founders />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <cooperations />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import spirit from "./spirit.vue";
import cooperations from "./cooperations.vue";
import founders from "./founders.vue";

export default {
  name: "IndexPage",
  components: { cooperations, founders, spirit },
};
</script>

<style lang="css" scoped>
.founder-imgs {
  max-height: 33dvh;
}
</style>
