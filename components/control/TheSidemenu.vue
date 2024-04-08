<template>
  <v-navigation-drawer  app permament>

    <v-list>

      <component
         v-for="({title, icon, subtitle, children, to}, index) in $props.items"
         :key="index"
         :is="children?.length > 0?'VListGroup':'VListItem'"
         v-bind="{title,icon,subtitle,to}" ref="listItem">
        <v-list-item-title v-if="!(children?.length > 0)">{{ title }}</v-list-item-title>
        <v-list-item-icon v-if="!(children?.length > 0)"><v-icon>{{icon}}</v-icon></v-list-item-icon>
        <template #activator="{attrs, on}" v-if="children?.length > 0">
          <v-list-item v-bind="attrs" v-on="on">
            <v-list-item-title >{{ title }}</v-list-item-title>
            <v-list-item-icon ><v-icon>{{icon}}</v-icon></v-list-item-icon>
          </v-list-item>
        </template>
      </component>
    </v-list>
    <template #append>
      <v-row justify='center'>
        <v-col cols="10">
          <v-divider/>
        </v-col>
      </v-row>
      <v-row class="pt-0 mt-0" justify='center'>
        <v-col  class="pt-0 mt-0" align="center">
          <v-btn width="100%" icon tile large to="/impressum"><v-icon>mdi-information</v-icon></v-btn>
        </v-col>
      </v-row>
    </template>
  </v-navigation-drawer>
</template>

<script>
import {VListGroup, VListItem} from 'vuetify/lib/components'

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      state: true,
    }
  },
  components : {
    VListGroup, VListItem
  }

}
</script>

<style lang="scss" scoped></style>
