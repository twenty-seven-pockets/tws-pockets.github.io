<template>
        <v-card class="bg-cardBackground" elevation="10">
          <v-card-title>
            {{ $t("company.articles.gruender.title") }}
          </v-card-title>
          <v-card-text align="start">
            <v-row>
              <v-col><p>

                {{ $t("company.articles.gruender.paragraph1") }}
              </p>
              <p>
                {{ $t("company.articles.gruender.paragraph2") }}

              </p>
              </v-col>
              <v-col>
                <!-- <v-img
                  class="founder-imgs"
                  src="@/assets/founder-henrik.jpg"
                  >
                ></v-img -->
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
</template>

<script>
export default {
  name: "OurStoryView",
  
};
</script>

<style lang="css" scoped>
.founder-imgs {
  max-height: 33dvh;
}
</style>
