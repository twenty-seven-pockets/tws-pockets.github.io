<template>
  <v-list-item
    exact
    nav
    density="compact"
    :class="listItemClasses"
    justify="space-between"
    :to="$attrs.to"
  >
    <template #prepend>
      <v-icon v-if="!hasCustomIconComponent" :icon="$attrs.icon || $attrs.prependIcon" color="menu-button-icon-color-alternate" />
      <component v-else :is="$attrs.icon || $attrs.prependIcon" class="mr-5"/>
    </template>
    <template #title v-if="!rail">
      {{ $attrs.icon }}
      <span :class="{'text-body-1'  : true, 'text-menu-item-text-color' : !$props.append, 'text-menu-item-text-color-alternate' : $props.append }">
        {{ $t($attrs.title) }}
      </span>
    </template>

    <v-tooltip
      v-if="tooltip"
      activator="parent"
      v-bind="mergeTooltipWithDefaults(tooltip)"
    >
    <markdown-container :markdown-string="tooltip"/>

    
    </v-tooltip>
    <!-- <v-btn v-show="!rail" v-bind="{...$attrs, }"  class="button-color rounded-pill" style="width:85%">{{ $t($attrs.title) }}
        </v-btn> -->
  </v-list-item>
</template>

<script>
export default {
  name: "SidemenuEntry",
  inheritAttrs: false,
  props: {
    rail: Boolean,
    tooltip: [String, Object],
    value: Boolean,
    class: [String, Object, Array],
    hasCustomIconComponent : Boolean,
  },
  emits: ["input"],
  data() {
    return {
      state: this.$props.value,
    };
  },
  methods: {
    mergeTooltipWithDefaults(options) {
      const opts = typeof options == "string" ? { text: options } : options;
      return {
        location: "start top",
        ...opts,
      };
    },
  },
  watch: {
    state(value) {
      this.$emit("update", value);
    },
  },
  computed: {
    miniVariant: {
      set(value) {
        this.state = value;
      },
      get() {
        return this.state && !this.$props.rail;
      },
    },
    listItemClasses() {
      let classes = {
        margin: !this.$props.rail,
        marginRail: this.$props.rail,
        "rounded-xl": false,
      };
      const parseArrayOfClassNames = (arr) =>
        arr.reduce((obj, item) => {
          obj[item] = true;
          return obj;
        }, {});
      if (typeof this.$props.class === "string") {
        return { ...classes, ...parseArrayOfClassNames(this.$props.class.split(" ")) };
      }

      if (Array.isArray(this.$props.class)) {
        return { ...classes, ...parseArrayOfClassNames(this.$props.class) };
      }
      if (typeof this.$props.class == "object") {
        return { ...classes, ...this.$props.class };
      }
      return {
        ...classes,
      };
    },
  },
};
</script>
border-color:--var(menuButtonBorder); background-color:$menuButton;

<style lang="scss" scoped>
// .button-color {
//   left: 0px;
//   right: 0px;
//   margin: auto;
//   padding: auto;
//   border-color: #9b224c;
//   border-width: thin;
// }
.margin {
  margin-left: 15px;
  margin-right: 15px;
}
.marginRail {
  margin-left: 5px;
  margin-right: 5px;
}
// .custom-look {
//   border-color: var(---menuBorderButton);
//   border: 1px solid !important;
//   padding: auto;
//   left: 0px;
//   right: 0px;
// }
</style>
