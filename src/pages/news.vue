<template>
        <i18n-card :path="i18nPath" with-markdown class="fill-height">
          <template #default="{ i18nBody }">
            <v-data-iterator :items="i18nBody.list" :search="search" class="my-5">
              <template #header v-if="i18nBody.list?.length > 0">
                <v-row justify="center" align="center">
                  <v-col cols="10">
                    <v-text-field
                      prepend-inner-icon="mdi-magnify"
                      v-model="search"
                      hide-details
                      :placeholder="i18nBody.placeholder"
                    />
                  </v-col>
                  <!-- </v-row><v-row justify="center">
                  <v-col >
                  <fluent-megaphone-loud20-filled height="auto" width="15%"/>
                  </v-col>
                 -->
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
                        <v-col cols="auto" align="center">
                          <component v-if="item.raw.icon?.length > 0"  :is="item.raw.icon" height="33%" width="33%"/>
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
