<template>
  <v-card flat class="bg-background" align="center">
    <v-card-title>{{$t("faq")}}</v-card-title>
    <v-card-text>
      <v-data-iterator :search="search" :items="questions" :placeholder="$t('search')">
        <template #header>
          <v-row justify="center">
            <v-col v-bind="{md : 6}">
              <v-text-field prepend-inner-icon="mdi-magnify" v-model="search"/>
            </v-col>
          </v-row>
        </template>
        <template #default="{items}">
          <v-row>
            <v-col v-for="(item, index) in items" :key="index">
              <v-card  flat class="bg-background">
                
                <v-card-title>{{ $t(`faqs.${item.raw}.title`) }}</v-card-title>
                <v-card-text>{{ $t(`faqs.${item.raw}.text`) }}</v-card-text>
              </v-card>
              </v-col>
          </v-row>
        </template>
      </v-data-iterator>
    </v-card-text>
    </v-card>
</template>

<script>
  export default {
    name : "FAQView",
    computed: {
      questions(){return this.$store.getters['faqs']}
    },
  }
</script>

<style lang="scss" scoped>

</style>