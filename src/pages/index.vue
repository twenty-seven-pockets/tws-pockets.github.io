<template>
  <v-card
    align="center"
    flat
    class="bg-background pt-2"
  >
    <v-card-title class="my-5"
      >
      <v-row align="center">
        
        <v-col cols="6" align="end">
          <v-row>

            <v-spacer/>
            <v-img src="@/assets/logo.png" max-width="150px"/>
          </v-row>
        </v-col>
        <v-col cols="auto" class="text-h1 border-t-lg border-b-lg my-5 border-logoBorder" align="start">
          {{ $t("company.names.0") }}a
        </v-col>
             </v-row>
            </v-card-title>
    <v-card-subtitle
    class="my-5"
      ><span class="text-h3">{{
        $t("company.slogans.0")
      }}</span></v-card-subtitle
    >
    <v-card-title align="center" class="my-5"
      ><v-btn
        size="x-large"
        to="/experiences"
        color="secondaryButtonIconColor"
        append-icon="mdi-arrow-right"
        >{{ $t("company.slogans.1") }}</v-btn
      >
    </v-card-title>
    <v-card-subtitle class="my-5"
      ><span class="text-h3">
        {{ $t("company.slogans.2") }}</span
      ></v-card-subtitle
    >
    <v-card-text>
      <v-row>
        <v-col>
          <v-img
            src="@/assets/product-logo.jpg"
            max-height="33vh"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "LandingPage",
  computed: {
    companyName() {
      return process.env.VUE_APP_COMPANY_NAME;
    },
  },
};
</script>

<style lang="scss" scoped></style>
