<template>
  <i18n-card :path="i18nPath">
    <template #default="{ i18nBody }">
      <v-data-iterator :search="search" :items="i18nBody.list" class="my-5">
        <template #header v-if="i18nBody.list?.length > 0">
          <v-row justify="center" align="center">
            <v-col v-bind="{ md: 10 }">
              <v-text-field
                prepend-inner-icon="mdi-magnify"
                hide-details
                :placeholder="i18nBody.placeholder"
                v-model="search"
              />
            </v-col>
            </v-row>
            <v-row>
            <v-col>
              <FAQCardIcon width="15%" height="auto" />
            </v-col>
          </v-row>
        </template>
        <template #default="{ items }">
          <v-row>
            <v-col v-for="(item, index) in items" :key="index">
              <v-card>
                <v-card-title class="text-card-title-color">{{
                  item.raw.title
                }}</v-card-title>
                <v-card-text align="start" class="text-card-text-color">
                  <markdown-content :input-string="item.raw.text" />
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </template>
        <template #[`no-data`]>
          {{ i18nBody.noData }}
        </template>
      </v-data-iterator>
    </template>
  </i18n-card>
</template>

<script>
import FAQCardIcon from "@/components/utils/icons/FAQCardIcon.vue";

export default {
  name: "FaqsView",
  components: { FAQCardIcon },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    // might need that later
    // customFilter(a,needle,item){
    //   const title = this.$t(`faqs.${item.raw}.title`);
    //   const text = this.$t(`faqs.${item.raw}.text`);
    //   return title.includes(needle) ||  text.includes(needle)
    // }
  },
};
</script>

<style lang="scss" scoped></style>
