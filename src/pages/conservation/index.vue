<template>
  <v-container align="center" class="fill-height">
    <v-row justify="center">
      <v-col>
      <!-- <markdown-content content-path="conservation"/> -->
      <markdown-card-with-icon path="sustainibility/index" />
         <!-- <sourcing /> -->
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <!-- <enviroment /> -->
        <markdown-card-with-icon path="sustainibility/source" custom-icon="SustainibilitySourceCardIcon"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <!-- <enviroment /> -->
        <markdown-card-with-icon path="sustainibility/enviroment" custom-icon="SustainibilityEnviromentCardIcon"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <markdown-card-with-icon path="sustainibility/packaging" custom-icon="SustainibilityPackagingCardIcon"/>

        <!-- <packaging />  -->
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <markdown-card-with-icon path="sustainibility/production"/>

        <!-- <packaging />  -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import enviroment from "./enviroment";
// import sourcing from "./source.vue";
// import packaging from "./packaging";
export default {
  name: "SustainabilityView",
  // components: { enviroment, packaging, sourcing },
};
</script>

<style lang="scss" scoped></style>
