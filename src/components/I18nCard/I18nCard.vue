<template>
  <v-card  >

  <!-- Wraps the entire content of the card, except for the actions  -->
    <slot name="body" v-bind="{i18nBody}">
    <slot name="title" v-bind="{i18nBody}"> 
    <v-card-title v-if="i18nBody.title?.length > 0" align="center">
    
      <MarkdownContainer v-if="withMarkdown" :markdown-string="i18nBody.title"/>
        <span v-else>
     {{ i18nBody.title }}
        
        </span>
    </v-card-title>
     </slot>
      <slot name="subtitle" v-bind="{i18nBody}">
    <v-card-subtitle v-if="i18nBody.subtitle?.length > 0">
      
      <MarkdownContainer v-if="withMarkdown" :markdown-string="i18nBody.subtitle"/>
        <span v-else>
        {{i18nBody.subtitle}}
        </span>
    </v-card-subtitle>
      </slot>
    <slot name="prependContent" v-bind="{i18nBody}" />
    <v-card-text>
      <slot name="default" v-bind="{i18nBody}">
        <MarkdownContainer v-if="withMarkdown" :markdown-string="i18nBody.text"/>
        <span v-else>
        {{i18nBody.text}}
        </span>
      </slot>
    </v-card-text>
    <slot name="appendContent" v-bind="{i18nBody}"/>
    <v-card-text v-if="$slots?.footer || i18nBody.footer?.length > 0">
      <slot name="footer" v-bind="{i18nBody}">
        <MarkdownContainer v-if="withMarkdown" :markdown-string="i18nBody.footer"/>
        <span v-else>
        {{i18nBody.footer}}
        </span>
      </slot>
    </v-card-text>
    </slot>
    <!-- Slot to add card actions  -->
      <slot name="actions">
    </slot>
  </v-card>
</template>
<script>
import {loadLocaleMessages} from '@/plugins/i18n'
/**
 * Workaround Component which returns the JSON object of the corresponding i18n path. 
 * Use the default slot to access the i18n Object
 * Use withMarkdown to wrap content in a markdown parser see MarkdownContainer
 * 
 * Not that efficient, loads ALL messages from the js file in plugins 
 * 
 */
  export default {
    name : "I18nCard",
  props : {
    path : {
      type : String,
      required : true,
      default : ""
    },
    withMarkdown : Boolean,
  },
  data() {
    return {
      i18nBody: {}
    }
  },
  computed: {
    locale(){return this.$i18n.locale},
    messages(){
      return loadLocaleMessages();
    }
  },
  watch : {
    'locale'(){
      this.updateI18nObject();
    }
  },
  methods: {
    updateI18nObject(path){
      const p = path || this.i18nPath;
      const msgs = this.messages;
      console.debug("i18nObject", {
        path,
        locale : this.$i18n.locale,
        localeMsgs: msgs[this.$i18n.locale],
        msgs
      })
      // return the value of the current locale and page
      // if all fails, return the key as string 
      this.i18nBody = msgs[this.$i18n.locale]?.company?.pages[p] 
      // otherwise return the fallback locale 
      || msgs[this.$i18n.fallbackLocale]?.company?.pages[p]
      // try the path in absolute 
      || msgs[this.$i18n.locale][`${p}`] 
      // try the path in absolute in fallback locale 
      || msgs[this.$i18n.fallbackLocale][p]
      || `${p}`
    },  
  },
  beforeMount(){
    this.updateI18nObject();
  }

  }
</script>

<style lang="scss" scoped>

</style>