<template>
  <v-card flat  class="text-productText">
    <v-card-title>
      {{ $t("contents.card.title") }}
    </v-card-title>
    <v-card>
          <v-data-table
            class="text-productText"
            :items-per-page="-1"
            :items="items"
            :headers="headers"
            :style="{'width' : '50%'}"
          >
            <template #bottom></template>
          </v-data-table>
  
    </v-card>

  </v-card>
</template>

<script>
export default {
  name: "ContentsView",
  computed: {
    items() {
      return [
        { name: this.$t("Sheabutter"), value: "%" },
        { name: this.$t("Aloe Vera Gel"), value: " 20% (Rein, ohne Zusätze)" },
        { name: this.$t("Agavendicksaft"), value: " 5% " },
        { name: this.$t("Glycerin"), value: "5%" },
        { name: this.$t("Maisstärke"), value: " 3%" },
        { name: this.$t("Carnaubawachs"), value: " 5%" },
        { name: this.$t("Carotinoide"), value: " 1%" },
        { name: this.$t("Zitronensäure"), value: "0,2% " },
        { name: this.$t("Vitamin E-Öl"), value: "1%" },
        { name: this.$t("Apfelextrakt Bio."), value: " 5%" },
        { name: this.$t("Erdbeerpulver Bio ."), value: "4,8%" },
      ];
    },
    headers() {
      return [
        {
          value: "value",
          title: this.$t("contents.table.headers.value.title"),
          align : "end",
        },
        {
          value: "name",
          title: this.$t("contents.table.headers.name.title"),
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped></style>
