<template>
  <i18n-card-with-list :path="i18nPath">
  <template #subtitle="{i18nBody}">
  <markdown-container :markdown-string="i18nBody.subtitle"/>
  </template>
    
  </i18n-card-with-list>
</template>

<script>
export default {
  name: "LocationPage",
};
</script>

<style lang="scss" scoped></style>
