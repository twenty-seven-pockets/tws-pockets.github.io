<template>
  <v-navigation-drawer
    location="start"
    :permanent="!$vuetify.display.mobile"
    :temporary="$vuetify.display.mobile"
    
    :rail="rail"
    @mousehover="rail = !rail"
    
    
    class="bg-menuBackground"
  >
    <v-row
      class="header-and-main flex-column fill-height ma-0 pa-0"
      justify="space-between"
    >
      <v-col 
        class="px-0 pt-0 fill-height"
      >
        <slot name="header">
          <v-row
            v-if="$slots.header"
            class="sidemenu__header"
          >
            <v-col> </v-col>
          </v-row>
        </slot>
        <v-row
          class="pt-0 mt-0 sidemenu__prepend"
          v-if="$slots.prepend || itemsToPrepend?.length > 0"
        >
          <v-col class="pt-0 mt-0">
            <v-list
              :opened="lists.prepend"
              collapse-icon="mdi-chevron-up"
              expand-icon="mdi-chevron-down"
              ><sidemenu-entry
                v-for="item in itemsToPrepend"
                :key="item.id"
                v-bind="item"
              />
            </v-list>
          </v-col>
        </v-row>
        <v-row class="sidemenu__default">
          <v-col class="pt-0 mt-0">
            <v-list
              :opened="lists.default"
              collapse-icon="mdi-chevron-up"
              expand-icon="mdi-chevron-down"
              ><sidemenu-entry
                v-for="item in itemsInDefault"
                :key="item.id"
                v-bind="item"
              />
            </v-list>
          </v-col>
        </v-row>
      </v-col>
      <v-col 
      class="pa-0 ma-0 fill-height"
      
      > 
      <!-- <v-row>
        <v-col>
          <router-link :to="'/'">

              <v-img src="@/assets/logo.png"/>
          </router-link>

            </v-col>
          </v-row> -->
        <v-row
          class="sidemenu__footer pa-0 ma-0"
          justify="center"
        >
          <v-col
            class="pa-0 ma-0"
            v-for="item in itemsInFooter"
            :key="item.id"
          >
            <v-btn
              width="100%"
              :to="item.to"
              icon tile flat
              color="menuBackground"
              :size="item.size"
            >
              <v-icon :color="item.color" :size="item.size">{{ item.icon }}</v-icon>
              <v-tooltip
                v-if="item?.tooltip"
                v-bind="
                  mergeTooltipOptionsWithFooterTooltipOptions(item.tooltip)
                "
                activator="parent"
              />
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-navigation-drawer>
</template>
<script>
import SidemenuEntry from "./SidemenuEntry.vue";
export default {
  name: "TheSidemenu",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      rail : false,
      lists: {
        default: [],
        prepend: [],
        append: [],
      },
    };
  },
  methods: {
    mergeTooltipOptionsWithDefaultTooltipOptions(opts) {
      const options = typeof opts == "object" ? opts : { text: opts };

      return {
        location: "start top",
        ...options,
      };
    },
    mergeTooltipOptionsWithFooterTooltipOptions(opts) {
      const options = typeof opts == "object" ? opts : { text: opts };

      return {
        location: "top start",
        ...options,
      };
    },
  },
  computed: {
    itemsToPrepend() {
      return this.$props.items.filter(({ prepend }) => prepend);
    },
    itemsInDefault() {
      return this.$props.items.filter(
        ({ prepend, append, footer }) => !prepend && !append && !footer
      );
    },
    itemsToAppend() {
      return this.$props.items.filter(({ append }) => append);
    },
    itemsInFooter() {
      return this.$props.items.filter(({ footer }) => footer);
    },
  },
  components: {
    SidemenuEntry,
  },
};
</script>

<style lang="scss" scoped></style>
