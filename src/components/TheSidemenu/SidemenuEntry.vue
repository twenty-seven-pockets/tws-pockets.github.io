<template>
  <v-list-item
    exact
    nav
    density="compact"
    :class="{
      'custom-look': true,
      'bg-menuButton': true,
      margin: !$props.rail,
      marginRail: $props.rail,
      'rounded-xl': true,
    }"
    active-color="menuButtonActivated"
    base-color="menuButtonBorder"
    justify="space-between"
    border="xl"
    :to="$attrs.to"
  >
    <template #prepend>
      
        <v-icon :icon="$attrs.icon || $attrs.prependIcon" />
      
    </template>
    <template #title v-if="!rail">
    <span class="text-body-1 ">
      {{ $t($attrs.title) }}
    </span>
    </template>

    <v-tooltip
      v-if="tooltip"
      activator="parent"
      v-bind="mergeTooltipWithDefaults(tooltip)"
    >
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
    hasChildren() {
      return this.$props.children?.length > 0;
    },
  },
};
</script>
border-color:--var(menuButtonBorder); background-color:$menuButton;

<style lang="scss" scoped>
.button-color {
  left: 0px;
  right: 0px;
  margin: auto;
  padding: auto;
  border-color: #9b224c;
  border-width: thin;
}
.margin {
  margin-left: 15px;
  margin-right: 15px;
}
.marginRail {
  margin-left: 5px;
  margin-right: 5px;
}
.custom-look {
  border-color: var(---menuBorderButton);
  border: 1px solid !important;
  padding: auto;
  left:0px;
  right:0px;
}
</style>
