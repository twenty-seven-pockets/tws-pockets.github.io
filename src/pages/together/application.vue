<template>
  <i18n-card :path="i18nPath">
  <template #subtitle="{}"><span/>
  </template>
    <template #default="{ i18nBody }">
      <v-row>
        <v-col
          ><p>
          <MarkdownContainer :markdown-string="i18nBody.paragraph1"/>
          </p>
          <p>
          <MarkdownContainer :markdown-string="i18nBody.paragraph2"/>
          </p>
          <v-card-subtitle>{{i18nBody.subtitle}}</v-card-subtitle>
          <p>
          <MarkdownContainer :markdown-string="i18nBody.paragraph3"/>
          </p>
        </v-col>
      </v-row>
    </template>
    
  </i18n-card>
</template>

<script>

export default {
  name: "ApplicationPage",
};
</script>

<style lang="scss" scoped></style>
