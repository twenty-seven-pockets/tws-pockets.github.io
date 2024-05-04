<template>
        <v-card class="bg-cardBackground text-text">
          <v-card-title>
            {{ $t("company.articles.unternehmensgeist.title") }}
          </v-card-title>
          <v-card-text>
            {{ $t("company.articles.unternehmensgeist.text") }}
          </v-card-text>
        </v-card>
</template>

<script>
export default {
  name: "UnternehmensgeistView,",
  
};
</script>

<style lang="css" scoped>
.founder-imgs {
  max-height: 33dvh;
}
</style>
