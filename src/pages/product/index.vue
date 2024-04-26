<template>
  <v-container >
    <v-col cols="12" justify='center' align='center'>

      <idea/>
      <contents/>
      
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