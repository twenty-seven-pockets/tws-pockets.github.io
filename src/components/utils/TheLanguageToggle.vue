<template>
  <v-btn-toggle
    mandatory
    v-model="$i18n.locale"
    density="compact"
    color="languageButton"
    :class="(absolute)?'languageButton':''"
  >
    <v-btn
      v-for="(lang, i) in languages"
      :key="`Lang${i}`"
      :value="lang"
      variant="text"
      size="small"
      density="compact"
    >
      {{ lang }}
    </v-btn>
  </v-btn-toggle>
</template>

<script>
  export default {
    name : "TheLanguageToggle",
    props: {
      absolute : {
        type : Boolean,
        default : true,
      },
      modelValue: {
        type: String,
        required : false,
      },
    },
    computed: {

    languages() {
      return this.$i18n.availableLocales;
    }, locale: {
      get() {
        return this.$i18n.locale;
      },
      set(val) {
        this.$i18n.locale = val;
      },
    },
    },
    watch: {
      locale(newValue) {
        this.$emit('update:modelValue', newValue)
        
      }
    },
    beforeMount() {
      if (this.$props.modelValue) {
        this.locale = this.$props.modelValue
      }
    },
    
  }
</script>

<style lang="css" scoped>

.languageButton {
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 999;
}
</style>