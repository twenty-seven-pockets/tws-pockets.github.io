<template>
  <!-- <v-fab
    class="menuButton"
    :style="{ position: 'fixed', top: '0px', left: '50%' }"
    tile
    @click="rail = !rail"
  >
    <v-icon>mdi-drag-vertical</v-icon>
  </v-fab> -->
  <v-navigation-drawer
    :rail="rail"
    location="start"
    :permanent="!$vuetify.display.mobile"
    :temporary="$vuetify.display.mobile"
    class="bg-menuBackground pa-0 ma-0"
    appabsolute
  >
    <div class="main-container  fill-height"  fill-height>
      <v-row class="main noMarginOrPadding">
        <v-col cols="12" class="noMarginOrPadding" >
          <v-row class="header noMarginOrPadding">
        <v-col cols="12" class="header">
        <slot name="header">
          <v-row v-if="$slots.header" class="sidemenu__header ma-0 pa-0">
            <v-col> </v-col>
          </v-row>
        </slot>
          </v-col></v-row>
          <v-row class="prepend-list ma-0 pa-0"  v-if="itemsToPrepend?.length > 0"
            ><v-col  class="pa-0 ma-0"
              ><slot name="prepend" v-bind="{ items: itemsToPrepend }">
                <v-list
                  :opened="lists.prepend"
                  collapse-icon="mdi-chevron-up"
                  expand-icon="mdi-chevron-down"
                  class="bg-menuBackground pa-0 ma-0"
                  ><sidemenu-entry
                    v-for="item in itemsToPrepend"
                    :key="item.id"
                    v-bind="item"
                  /> </v-list></slot></v-col
          ></v-row>
          <v-row class="main-list noMarginOrPadding my-5"
            ><v-col class="noPadding">
              <slot name="default" v-bind="{ items: itemsInDefault }">
                <v-list
                  :opened="lists.default"
                  collapse-icon="mdi-chevron-up"
                  expand-icon="mdi-chevron-down"
                  class="bg-menuBackground"
                  ><sidemenu-entry
                    v-for="item in itemsInDefault"
                    :key="item.id"
                    v-bind="item"
                  />
                </v-list> </slot></v-col
          ></v-row>
        </v-col>
      </v-row>
      <v-row></v-row>
      <v-row class="append ma-0 pa-0">
        <v-col cols="12" class="fill-height ma-0 pa-0">
          <v-row class="appended-list ma-0 pa-0">
            <v-col class="pa-0 ma-0">
              <slot name="append" v-bind="{ items: itemsToAppend }">
                <v-list
                  :opened="lists.append"
                  collapse-icon="mdi-chevron-up"
                  expand-icon="mdi-chevron-down"
                  class="bg-menuBackground"
                  ><sidemenu-entry
                    v-for="item in itemsToAppend"
                    :key="item.id"
                    v-bind="item"
                  />
                </v-list>
              </slot>
            </v-col>
          </v-row>
          <v-row class="footer">
            <v-col class="pa-0 ma-0" v-for="item in itemsInFooter" :key="item.id">
              <v-btn
                width="100%"
                :to="item.to"
                icon
                tile
                flat
                color="menuBackground"
                :size="item.size"
              >
                <v-icon :color="item.color" :size="item.size">{{ item.icon }}</v-icon>
                <v-tooltip
                  v-if="item?.tooltip"
                  v-bind="mergeTooltipOptionsWithFooterTooltipOptions(item.tooltip)"
                  activator="parent"
                />
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <!-- <v-col class="fill-height main-container"  fill-height> -->
    <!-- <v-row class="header">
        <slot name="header">
          <v-row v-if="$slots.header" class="sidemenu__header">
            <v-col> </v-col>
          </v-row>
        </slot>
      </v-row>
      <v-row class="main">
        <div class="prepend">
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
        </div>
        <div class="default">
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
        </div>
      </v-row> -->
    <!-- </v-col> -->
    <!-- <v-row class="footer">
        
        <div class='append'>
        <slot name="append" v-bind="{items : itemsToAppend}">
        
          <v-list
              :opened="lists.append"
              collapse-icon="mdi-chevron-up"
              expand-icon="mdi-chevron-down"
              ><sidemenu-entry
                v-for="item in itemsToAppend"
                :key="item.id"
                v-bind="item"
              />
              </v-list>
        </slot>
        </div>
        <div>
        <v-col class="pa-0 ma-0" v-for="item in itemsInFooter" :key="item.id">
                <v-btn
                  width="100%"
                  :to="item.to"
                  icon
                  tile
                  flat
                  color="menuBackground"
                  :size="item.size"
                >
                  <v-icon :color="item.color" :size="item.size">{{ item.icon }}</v-icon>
                  <v-tooltip
                    v-if="item?.tooltip"
                    v-bind="mergeTooltipOptionsWithFooterTooltipOptions(item.tooltip)"
                    activator="parent"
                  />
                </v-btn> </v-col
            >
        </div>
      </v-row> -->
  </v-navigation-drawer>
</template>
<script>
// import SidemenuEntry from "./SidemenuEntry.vue";
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
      rail: false,
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
    // SidemenuEntry,
  },
};
</script>

<style lang="scss" scoped>
.append {
  width: 100%;
  display: flex;
  align-items: end;
}
.main {
  width: 100%;
  display: flex;
  padding:0px;
  margin:0px;
  flex-direction: column;
  
}
.main-container {
  display: flex;
  width: 100%;
  align-self: flex-end;
  height:95%;
  flex-direction: column;
}
.noPadding {

  padding: 0px !important;
}
.noMarginOrPadding {
  margin: 0px !important;
  padding: 0px !important;
}
</style>
