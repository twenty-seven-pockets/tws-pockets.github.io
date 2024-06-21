<template>
  <v-container class="fill-height">
    <v-row class="fill-height">
      <v-col>
        <i18n-card :path="i18nPath" with-markdown class="fill-height">
          <template #default="{ i18nBody }">
            <v-data-iterator :items="i18nBody.list" :search="search" class="my-5">
              <template #header v-if="i18nBody.list?.length > 0">
                <v-row justify="center">
                  <v-col cols="8">
                    <v-text-field
                      prepend-inner-icon="mdi-magnify"
                      v-model="search"
                      :placeholder="i18nBody.placeholder"
                    />
                  </v-col>
                </v-row>
              </template>
              <template #default="{ items }">
                <v-row v-for="(item, index) in items" :key="index">
                  <v-col cols="12">
                    <v-card >
                      <!-- :to="`/news/${index}`" -->
                      <v-card-title primary-title class="text-card-title-color">
                        {{ item.raw.title }}
                      </v-card-title>
                      <v-card-text align="center" class="text-card-text-color">
                      <v-container >
                        <v-row justify="center" >
                        <v-col cols="auto" align="start">
                          <markdown-content :input-string="item.raw.text" />
                        </v-col></v-row>
                      </v-container>
                      </v-card-text>
                    </v-card> </v-col
                ></v-row>
              </template>

              <template #[`no-data`]>
                <v-row justify="center">
                  {{ i18nBody.noData }}
                </v-row>
              </template>
            </v-data-iterator>
          </template>
        </i18n-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "NewsPage",
  data() {
    return {
      search: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>
