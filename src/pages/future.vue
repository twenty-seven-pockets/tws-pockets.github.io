<template>
  <v-container>
    <v-row>
      
      <v-col cols="12" v-for="(name, index) in articles" :key="index">
        <v-card >
          <v-card-title>
            {{$t(`articles.future.${name}.title`)}}
          </v-card-title>
          <v-card-text>
            {{$t(`articles.future.${name}.text`)}}
            
          </v-card-text>
      
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name : "FutureView",
    computed : {
      articles(){return this.$store.getters['articles/future']}
    }
  }
</script>

<style lang="scss" scoped>

</style>