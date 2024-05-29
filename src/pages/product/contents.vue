<template>
  <i18n-card :path="i18nPath">
    <!-- <template #default="{i18nBody}">
      <v-row justify="center">
        <v-col cols="auto">
         {{i18nBody.disclaimer}}
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-data-table
            class="text-text bg-cardBackground"
            :items-per-page="-1"
            :items="i18nBody.table.items"
            :headers="i18nBody.table.headers"
            :style="{'width' : '50%'}"
  
          >
            <template #bottom></template>
          </v-data-table>
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
