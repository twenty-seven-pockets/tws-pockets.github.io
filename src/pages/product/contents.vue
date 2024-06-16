<template>
  <i18n-card :path="i18nPath" align="" style="text-align:center;">
  <template #default="{i18nBody}">
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12">
  <MarkdownContainer align="center" :markdown-string="i18nBody.text"/>
  </v-col>
  </v-row>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-data-table
            class="bg-cardBackground"
            :items-per-page="-1"
            :items="i18nBody.table.items"
            :headers="i18nBody.table.headers"
  
          >
            <template #bottom></template>
          </v-data-table>
        </v-col>
        </v-row>
    </v-container>
  </template>
    <!-- <template #default="{i18nBody}">
      <v-row justify="center">
        <v-col cols="auto">
         {{i18nBody.disclaimer}}
        </v-col>
      </v-row>
    </template> -->
  </i18n-card>
</template>

<script>
export default {
  name: "ContentsPage",
 
};
</script>

<style lang="scss" scoped></style>
