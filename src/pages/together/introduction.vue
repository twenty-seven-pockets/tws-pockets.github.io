<template>
  <i18n-card :path="i18nPath">
    <template #default="{ i18nBody }">
      <v-row>
        <v-col
          ><p>
          <MarkdownContainer :markdown-string="i18nBody.paragraph1"/>
          </p>
          <p>
          <MarkdownContainer :markdown-string="i18nBody.paragraph2 "/>
          </p>
        </v-col>
      </v-row>
    </template>
    <template #actions>
    <v-spacer/>
          <v-btn
            tile
            text
            append-icon="mdi-arrow-right"
            :to="{ name: 'additional' }"
            >{{ $t("company.words.additional") }}</v-btn
          >
    <v-spacer/>
      </template
    >
  </i18n-card>
</template>

<script>
export default {
  name: "IntroductionPage",
};
</script>

<style lang="scss" scoped></style>
