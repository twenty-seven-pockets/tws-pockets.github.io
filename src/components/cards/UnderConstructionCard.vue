<template>
  <v-container
    fill-height
    class="fill-height"
  >
    <v-row
      class="fill-height"
      align="center"
    >
      <v-col>
        <v-card
          class="error  pa-2 fill-height"
          elevation="10"
        >
          <v-container>
            <v-row justify='space-between' class='flex-column'>
              <v-col>

              <v-card-title class="mb-4">
                {{ $t("errors.title", { error: "Navigations" }) }}
              </v-card-title>
              </v-col>
              <v-col>

              <v-card-text>
                {{ $t("errors.underConstruction", { route: $route.fullPath }) }}
              </v-card-text>
              </v-col>
              <v-col>

              <v-card-actions >
                <v-row justify="end">

                <v-btn :to="{ name: 'index' }" prepend-icon="mdi-arrow-left" size="x-large" class='rounded-xl px-10' variant="text">
                  {{ $t("errors.goBack") }}
                </v-btn>
                </v-row>
              </v-card-actions>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ErrorView",
};
</script>

<style lang="css" scoped>
.error {
  min-height: 33vh;
}
</style>
