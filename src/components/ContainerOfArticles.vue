<template>
  <v-container>
    <v-row>
      
      <v-col cols="12" v-for="(name, index) in articles" :key="index">
        <v-card >
          <v-card-title>
            {{$t(`articles.${category}.${name}.title`)}}
          </v-card-title>
          <v-card-text>
            {{$t(`articles.${category}.${name}.text`)}}
            
          </v-card-text>
      
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name : "ContainerOfArticles",
    props : {
      category : String
    },
    computed : {
      articles(){return this.$store.getters[`articles`](this.$props.category)}
    }
  }
</script>

<style lang="scss" scoped>

</style>