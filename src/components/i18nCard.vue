<template>
  <v-card class="bg-cardBackground text-text" align="center">
    <slot name="body" v-bind="{i18nBody}">

    <v-card-title v-if="i18nBody.title?.length > 0">
     <slot name="title" v-bind="{i18nBody}"> {{ i18nBody.title }}</slot>
    </v-card-title>
    <v-card-subtitle v-if="i18nBody.subtitle?.length > 0">
      <slot name="subtitle" v-bind="{i18nBody}">{{ i18nBody.subtitle }}</slot>
    </v-card-subtitle>
    <v-card-text>
      <slot name="default" v-bind="{i18nBody}">

      {{ i18nBody.text }}
      </slot>
    </v-card-text>
    <v-card-text v-if="$slots?.footer || i18nBody.footer?.length > 0">
      <slot name="footer" v-bind="{i18nBody}">
        {{i18nBody.footer}}
      </slot>
    </v-card-text>
    </slot>
  </v-card>
</template>
<script>
import {loadLocaleMessages} from '@/plugins/i18n'
  export default {
    name : "i18nCard",
  props : {
    path : {
      type : String,
      required : true,
      default : ""
    }
  },
  computed: {
    i18nBody(){
      return this.i18nObject();
    },
    messages(){
      return loadLocaleMessages();
    }
  },
  methods: {
    i18nObject(path){
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
      return msgs[this.$i18n.locale]?.company?.pages[p] 
      // otherwise return the fallback locale 
      || msgs[this.$i18n.fallbackLocale]?.company?.pages[p]
      // try the path in absolute 
      || msgs[this.$i18n.locale][`${p}`] 
      // try the path in absolute in fallback locale 
      || msgs[this.$i18n.fallbackLocale][p]
      || `${p}`
    },  
  },

  }
</script>

<style lang="scss" scoped>

</style>