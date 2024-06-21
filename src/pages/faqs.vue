<template>
  <i18n-card :path="i18nPath">
    <template #default="{i18nBody}">
    <v-data-iterator :search="search" :items="i18nBody.list"  
              class='my-5'>
        <template #header v-if="i18nBody.list?.length > 0">
          <v-row justify="center">
            <v-col v-bind="{md : 10}">
              <v-text-field prepend-inner-icon="mdi-magnify" :placeholder="i18nBody.placeholder" v-model="search"/>
            </v-col>
          </v-row>
        </template>
        <template #default="{items}">
          <v-row>
            <v-col v-for="(item, index) in items" :key="index">
              <v-card  >
                
                <v-card-title class="text-card-title-color">{{ item.raw.title }}</v-card-title>
                <v-card-text align="start" class="text-card-text-color">{{ item.raw.text }}</v-card-text>
              </v-card>
              </v-col>
          </v-row>
        </template>
        <template #[`no-data`]>
          {{i18nBody.noData}}
        </template>
      </v-data-iterator>

</template>
  </i18n-card>
</template>

<script>

  export default {
    name : "FaqsView",
    data() {
      return {
        search : ""
      }
    },
    methods : {
      // might need that later 
      // customFilter(a,needle,item){
      //   const title = this.$t(`faqs.${item.raw}.title`);
      //   const text = this.$t(`faqs.${item.raw}.text`);
      //   return title.includes(needle) ||  text.includes(needle)
      // }
    }
  }
</script>

<style lang="scss" scoped>

</style>