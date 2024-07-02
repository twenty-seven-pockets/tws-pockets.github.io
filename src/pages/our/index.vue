<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <markdown-card-with-icon
            path="our/spirit"
            custom-icon="OurSpiritCardIcon"
            flat
          />
          <v-card-text>
            <v-row justify="center"
              ><v-col cols="auto">
                <v-btn
                  size="x-large"
                  :to="{ name: 'together' }"
                  color="action-button-color"
                  rounded="xl"
                >
                  <template #append> <MingcuteArrowRightFill color="white" /></template>
                  {{ $t("ui.buttons.goToConservation") }}</v-btn
                >
              </v-col></v-row
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-text>
            <v-row align="center">
              <v-col>
                <markdown-content content-path="our/founders" />
              </v-col>

              <v-col :cols="$vuetify.display.mobile ? '12' : '6'">
                <v-container>
                  <henrik-founder-card />
                </v-container>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <markdown-card-with-icon
            path="our/cooperations"
            custom-icon="OurCooperationsCardIcon"
            flat
          />
          <v-card-text>
          <v-container>
            <v-row justify="space-around"  align="start" class="fill-height" >
              <v-col class="" cols="6">
                <markdown-card-with-icon
                  path="our/cooperations/packaging"
                  class="fill-height"
                />
              </v-col>
              <v-col class=" fill-height" cols="6">
                <markdown-card-with-icon
                  path="our/cooperations/product"
                  class="fill-height"
                />
              </v-col>
            </v-row>
            <v-row class="pb-5">
              <v-col cols="6">
                <markdown-card-with-icon
                  path="our/cooperations/pictures"
                  class="fill-height"
                />
              </v-col>
              <v-col cols="6">
                <markdown-card-with-icon
                  path="our/cooperations/logos"
                  class="fill-height"
                />
              </v-col>
            </v-row>
          </v-container>
          
          </v-card-text>
        </v-card> </v-col
    ></v-row>
  </v-container>
</template>

<script>
// import spirit from "./spirit.vue";
// import cooperations from "./cooperations.vue";
// import founders from "./founders.vue";

export default {
  name: "IndexPage",
  // components: { cooperations, founders, spirit },
};
</script>

<style lang="css" scoped>
.founder-imgs {
  max-height: 33dvh;
}
</style>
