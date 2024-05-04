<template>
    <i18n-card :path="i18nPath">
      <template #default="{i18nBody}">

            <v-row>
              <v-col><p>

      {{ i18nBody.paragraph1 }}
              </p>
              <p>
      {{ i18nBody.paragraph2 }}

              </p>
              </v-col>
              <v-col>
              </v-col>
            </v-row>
      </template>
    </i18n-card>
      
</template>

<script>
import i18nCard from '@/components/i18nCard.vue';
// The i18nBody variable is provided by the i18n mixin in the mixins folder
export default {
  components: { i18nCard },
  name: "FoundersPage",
  
};
</script>

<style lang="css" scoped>
.founder-imgs {
  max-height: 33dvh;
}
</style>
