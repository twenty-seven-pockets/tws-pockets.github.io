<template>
  <i18n-card
    :path="i18nPath"
    align="center"
    flat
    class="bg-background pt-2"
  >
    <template #body="{i18nBody}">
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
          {{ i18nBody.title }}
        </v-col>
             </v-row>
            </v-card-title>
    <v-card-subtitle
    class="my-5"
      ><span class="text-h3">{{
        i18nBody.slogans?.wholeBody
        
      }}</span></v-card-subtitle
    >
    <v-card-title align="center" class="my-5"
      ><v-btn
        size="x-large"
        :to="{name : 'together'}"
        color="secondaryButtonIconColor"
        append-icon="mdi-arrow-right"
        rounded="xl"
        >
          {{ i18nBody.slogans?.together }}</v-btn
      >
    </v-card-title>
    <v-card-subtitle class="my-5"
      ><span class="text-h3">
        
        {{ i18nBody.slogans?.kissLips }}</span
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
  </template>
  </i18n-card>
</template>

<script>


export default {
  name: "IndexPage",

};
</script>

<style lang="scss" scoped></style>
