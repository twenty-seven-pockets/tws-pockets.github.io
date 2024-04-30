<template>
  <v-container
    grid-list-xs
    align="center"
  >
    <v-row>
      <v-col>
        <v-card class="bg-surface">
          <v-card-title>
            {{ $t("company.spirit.title") }}
          </v-card-title>
          <v-card-text>
            {{ $t("company.spirit.text") }}
          </v-card-text>
        </v-card>
      </v-col></v-row
    >
    <v-row>
      <v-col>
        <v-card class="bg-secondary">
          <v-card-title>
            {{ $t("company.founders.title") }}
          </v-card-title>
          <v-card-text align="start">
            <v-row>
              <v-col>
                {{ $t("company.founders.text") }}
              </v-col>
              <v-col>
                <v-img
                  class="founder-imgs"
                  src="@/assets/founder-henrik.jpg"
                ></v-img
              ></v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="bg-secondary">
          <v-card-title>
            {{ $t("company.cooperation.title") }}
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "OurStoryView",
  computed: {
    partners() {
      return this.$store.getters["partners"];
    },
  },
};
</script>

<style lang="css" scoped>
.founder-imgs {
  max-height: 33dvh;
}
</style>
