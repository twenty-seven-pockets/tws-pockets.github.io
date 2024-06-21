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
          <v-card-title class="text-black"><v-row class="py-5"><v-spacer/><v-col>
          {{i18nBody.subtitle}}
          </v-col><v-spacer/></v-row>
          </v-card-title>
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
