<template>
  <v-container fill-height class='fill-height'>
    <v-row class='fill-height' align="center">
      <v-col >
        <v-card class="error bg-background" flat>
          <v-card-title>
            {{$t('errors.title', {error : 404})}}
          </v-card-title>
          <v-card-text>
            {{ $t("errors.404", {route : $route.fullPath}) }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name : "ErrorView"
  }
</script>

<style lang="css" scoped>
.error {
  min-height: 33vh;
}
</style>