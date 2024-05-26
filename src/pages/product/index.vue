<template>
  <v-container align="center">
    <v-row>
      <v-col>

        <idea/>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <contents/>

      </v-col>
    </v-row>

    <v-col cols="12" justify='center' align='center'>

      
    </v-col>
  </v-container>
</template>

<script>
import contents from './contents'
import idea from './idea'
  export default {
    name : "ProductIndexView",
    components : {contents,idea}
    
  }
</script>

<style lang="scss" scoped>

</style>