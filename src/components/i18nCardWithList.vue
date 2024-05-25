<template>
  <i18n-card :path="path" :with-markdown="withMarkdown"> 
  <template #prependContent="{i18nBody}">
    <v-card-text>
      <slot name="text" v-bind="{i18nBody}">
      
        <MarkdownContainer v-if="withMarkdown" :markdown-string="i18nBody?.text"/>
        <span v-else>
        {{i18nBody?.text}}
        </span>
      </slot>
    </v-card-text>
    
  </template>
  <template #default="{i18nBody}">
        <v-container >
        <v-row justify="center">
          <v-col cols="auto">
            <ul>
              <li v-for="item in i18nBody?.list" :key="item.id">
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
  inheritAttrs : false,
  name: "i18nCardWitList",
  props : {
    withMarkdown : Boolean,
    path : String,
  }
};
</script>

<style lang="scss" scoped></style>
