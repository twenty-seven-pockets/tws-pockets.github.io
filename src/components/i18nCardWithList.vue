<template>
  <i18n-card>
    <template #default="{ i18nBody }">
      <v-container>
        <v-row justify='center'>
          <v-col cols="auto">
            <ul>
              <li
                v-for="item in i18nBody.list"
                :key="item.id"
              >
                {{ item }}
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </i18n-card>
</template>
<script>
import i18nCard from "./i18nCard.vue";
export default {
  components: { i18nCard },
  name: "i18nCardWitList",
};
</script>

<style lang="scss" scoped></style>
