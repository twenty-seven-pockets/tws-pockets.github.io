<template>
    
    <v-card class="bg-cardBackground">
          <v-card-title>
            {{ $t("company.articles.kooperation.title") }}
          </v-card-title>
          <v-card-text align="start">
            <v-row>
              <v-col
              cols="auto"
                v-for="(partner, index) in partners"
                :key="index"
              >
                <v-card
                  elevation=10
                  class="bg-secondary"
                >
                  <v-card-title primary-title>
                    <v-row>
                      <v-col>
                        {{ partner.name }}
                      </v-col>
                      <v-col v-if="partner.logo?.length > 0">
                        <v-img :src="partner.logo" />
                      </v-col>
                    </v-row>
                  </v-card-title>
                  <v-card-text>
                    {{ partner.text }}
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
</template>

<script>
    export default {
        name : "CooperationsView",
        computed: {
    partners() {
      return this.$store.getters["partners"];
    },
  },
    }
</script>

<style lang="scss" scoped>

</style>