<template>
  <v-container
    align="center"
    class="fill-height bg-background"
  >
        <v-row>
            <v-col cols="12">
                <sourcing />
            </v-col>
        </v-row>
    <v-row justify="center">
      <v-col cols="8" v-bind="{cols : 10, xl: 8, md : 10}">
        <production />
      </v-col>
      <v-col v-bind="{cols : 10, xl: 8, md : 10}">
        <enviroment />
      </v-col>
      <v-col v-bind="{cols : 10, xl: 8, md : 10}">
        <packaging />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import enviroment from "./enviroment";
import sourcing from './source.vue'
import production from "./production";
import packaging from "./packaging";
export default {
  name: "SustainabilityView",
  components: { enviroment, production, packaging, sourcing },
};
</script>

<style lang="scss" scoped></style>
