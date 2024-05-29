<template>
  <i18n-card :path="i18nPath" with-markdown>
    <template #appendContent="{i18nBody}">
      <v-row>
        <v-col cols="auto" v-for="(partner, index) in i18nBody.partners" :key="index">
          <partner-card v-bind="partner" />
        </v-col>
      </v-row>

    </template>
  </i18n-card>
</template>

<script>
export default {
  name: "CooperationsPage",
  
};
</script>

<style lang="scss" scoped></style>
