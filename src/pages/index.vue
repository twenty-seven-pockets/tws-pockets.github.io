<template>
  <!-- <v-container class="bg-red">
  <v-row justify="center" align="center">
  <v-col  align="center" > -->
  <ribbon-component :text="$t('company.comingSoon')">
    <i18n-card :path="i18nPath" align="center" flat class="fill-height">
      <template #body="{ i18nBody }">
        <v-card-title>
          <v-row align="center" justify="center" class="logo-container">
            <v-col cols="12" align="center">
              <v-img src="@/assets/logo-long.svg" max-height="20vh" />
            </v-col>
          </v-row>
        </v-card-title>
        <v-card-title align="center" class="spacer-card">
          <v-btn
            size="x-large"
            :to="{ name: 'together' }"
            color="action-button-color"
            rounded="xl"
          >
            <template #append>
            <MingcuteArrowRightFill color="white"/></template>
            {{ i18nBody.slogans?.together }}</v-btn
          >
        </v-card-title>
        <v-card-subtitle class="text-card-subtitle-color"
          ><h3>
            <i> &bdquo;{{ i18nBody.slogans?.kissLips }}&rdquo;</i>
          </h3></v-card-subtitle
        >
        <v-card-text>
          <v-spacer />
          <div>
            <figure>
              <v-img src="@/assets/verpackung.png" height="50vh" />
              <figcaption align="center" style="opacity: 0.3; font-weight: bold">
                {{ $t("company.productTeaserDisclaimer") }}
              </figcaption>
            </figure>
          </div>
          <v-spacer />
        </v-card-text>
        <v-card class="footer-card rounded-xl text-card-text-color">
          <v-card-text>
            {{ i18nBody.footer }}
          </v-card-text>
          <v-card-subtitle class="footer">
            <b>{{ i18nBody.footer2 }}</b></v-card-subtitle
          >
        </v-card>
      </template>
      <template #actions>
        <v-card-actions>
          <v-row>
            <v-spacer />
            <v-col>
              <v-btn :to="'/product'" color="action-button-color">{{
                $t("company.pages./index.productButton")
              }}</v-btn>
            </v-col>
            <v-spacer />
          </v-row>
        </v-card-actions>
      </template>
    </i18n-card>
  </ribbon-component>
  <!-- </v-col>
  </v-row>
  </v-container> -->
</template>

<script>
export default {
  name: "IndexPage",
};
</script>

<style lang="css" scoped>
.product-card-background {
  /* background:#ea95b2; */
}
.logo-container {
  margin-top: 5vh;
}
.spacer-card {
  margin-top: 5vh;
  margin-bottom: 5vh;
}
.footer-card {
  width: 80%;
  margin: auto;
  margin-top: 2vh;
}
.footer {
  margin-bottom: 1vh;
}
</style>
