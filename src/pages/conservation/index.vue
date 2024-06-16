<template>
  <v-container align="center" class="fill-height">
    <v-row justify="center">
      <v-col>
        <packaging />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <sourcing />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <production />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <enviroment />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import enviroment from "./enviroment";
import sourcing from "./source.vue";
import production from "./production";
import packaging from "./packaging";
export default {
  name: "SustainabilityView",
  components: { enviroment, production, packaging, sourcing },
};
</script>

<style lang="scss" scoped></style>
