<template>
  <v-card class="rounded-xl pl-2 pt-2" :to="href?href:null">
    <v-card-title primary-title>
      {{name}}
    </v-card-title>
    <v-card-text>
      <v-container v-if="logo.length + slogan.length > 0 ">
        <v-img :src='logo' :title='logoAltText'/>
        <span>{{slogan}}</span>
        
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
/**
 * 
 * Display a Partner with this card.
 * 
 * 
 * 
 */
  export default {
    props: {
      name: {
        type: String,
        default: ""
      },
      slogan: {
        type: String,
        default: ""
      },
      logo: {
        type: String,
        default: ""
      },
      logoAltText: {
        type: String,
        default: ""
      },
      href : {
        type : String,
        required : false
      }
    },
    
  }
</script>

<style lang="scss" scoped>

</style>