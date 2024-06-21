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
  v-model="state"
    :rail="rail"
    location="start"
    :permanent="!$vuetify.display.mobile"
    :temporary="$vuetify.display.mobile"
    class="bg-menuBackground pa-0 ma-0"
    app 
  >
    <!-- <v-btn class="button noPadding noMarginOrPadding" variant="outlined"  ><v-icon icon="mdi-drag-vertical"/></v-btn> -->
    <div class="main-container  fill-height"  fill-height>
      <v-row class="main noMarginOrPadding">
        <v-col cols="12" class="noMarginOrPadding" >
          <v-row class="header noMarginOrPadding">
        <v-col cols="12" class="noMarginOrPadding header" >
        <slot name="header" v-bind="{rail}">
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
                    :rail="rail"
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
                    :rail="rail"
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
                  :rail="rail"
                  ><sidemenu-entry
                    v-for="item in itemsToAppend"
                    :key="item.id"
                    v-bind="item"
                    :rail="rail"
                  />
                </v-list>
              </slot>
            </v-col>
          </v-row>
          <v-row class="footer">
            <v-col class="pa-0 ma-0" v-for="item in itemsInFooter" :key="item.id">
              <v-btn
                :to="item.to"
                icon
                tile
                flat
                :size="item.size"
              
              >
                <v-icon    color="blue" :size="item.size" >{{ item.icon }}</v-icon>
                <v-tooltip
                  v-if="item?.tooltip"
                  v-bind="mergeTooltipOptionsWithFooterTooltipOptions(item.tooltip)"
                  activator="parent"
                />
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
    <v-btn   icon  variant="plain"  @click="rail = !rail"   :class="{'drag-handle': true} "><v-icon size="x-large" class="drag-icon" icon='mdi-drag-vertical-variant'/></v-btn>
    <div class="branch" v-if="!$vuetify.display.mobile">
    <v-img src="@/assets/plant1_1000.png" />
    </div>
      </v-row>
    </div></v-navigation-drawer>
  
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
      state : true,
      lists: {
        default: [],
        prepend: [],
        append: [],
      },
    };
  },
  watch : {
    state(value){
      if (value) {
        this.rail = !value;

      }
      
    }
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

.drag-icon i {
  

}
.drag-handle {
  position:fixed;
  top:50%;
  border-radius: 0;
  left:100%;
}

.drag-handle-when-rail {
  left:0px;
}

.noPadding {

  padding: 0px !important;
}
.noMarginOrPadding {
  margin: 0px !important;
  padding: 0px !important;
}
.branch {
  position:absolute;
  left:100%;
  padding-left: 0px;
  margin-left: 0px;
  bottom:15%;
  width:15vw;
  height:auto;  
  z-index: 9999;

}
</style>
