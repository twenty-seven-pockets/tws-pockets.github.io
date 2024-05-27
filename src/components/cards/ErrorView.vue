<template>
        <v-card
          class="error pa-2 "
          elevation="10"
        >

              <v-card-title class="mb-4">
                {{ $t("errors.title", { error}) }}
              </v-card-title>

              <v-card-text>
              <!-- Display Error message based on code -->
                {{ $t(`errors.${code}`, { route: $route.fullPath }) }}
              </v-card-text>
              <v-card-actions >
                <v-spacer/>
                <!-- go back to home button -->
                <v-btn :to="{ name: 'index' }" prepend-icon="mdi-arrow-left" size="x-large" class='rounded-xl px-10' variant="text">
                  {{ $t("errors.goBack") }}
                </v-btn>
                <v-spacer/>
              </v-card-actions>
              </v-card>
</template>

<script>
export default {
  name: "ErrorView",
  layout : "VerticallyCenteredLayout",
  props : {
		/** The code of the Error
		 */
    error : {
      type : [String, Number],
      default : "404"
    }
  }
};
</script>

<style lang="css" scoped>
.error {
  min-height: 33vh;
}
</style>

<docs lang="md">
  Basic Error Display for wrong or forbidden routes.

  ## Example 
  ```jsx
    <error-view :code="404"/>
  ```

</docs>
