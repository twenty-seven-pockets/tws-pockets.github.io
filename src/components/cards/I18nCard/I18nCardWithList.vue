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
        <v-row justify="center">
          <v-col cols="auto">
            <ul>
              <li v-for="item in i18nBody?.list" :key="item.id" class="py-1">
                {{ item }}
              </li>
            </ul>
          </v-col>
        </v-row>
      </template>
  </i18n-card>
</template>
<script>
export default {
  inheritAttrs : false,
  name: "I18nCardWitList",
  props : {
    withMarkdown : {type : Boolean, default : true},
    path : String,
  }
};
</script>

<style lang="scss" scoped></style>
