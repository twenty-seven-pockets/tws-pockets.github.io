<template>
  <i18n-card :path="i18nPath">
    <template #default="{ i18nBody }">
      <v-row>
        <v-col
          ><p>
            <MarkdownContainer :markdown-string="i18nBody.paragraph1" />
          </p>
          <p>
            <MarkdownContainer :markdown-string="i18nBody.paragraph2" />
          </p>
        </v-col>
      </v-row>
    </template>
    <template #actions>
      <v-card-title>
        <v-row class="pb-5">
          <v-spacer />
          <v-col>
            <v-btn
              size="large"
              color="action-button-color"
              append-icon="mdi-arrow-right"
              rounded="xl"
              :to="{ name: 'additional' }"
              >{{ $t("ui.buttons.goToAdditional") }}</v-btn
            >
          </v-col>
          <v-spacer />
        </v-row>
      </v-card-title>
    </template>
  </i18n-card>
</template>

<script>
export default {
  name: "IntroductionPage",
};
</script>

<style lang="scss" scoped></style>
