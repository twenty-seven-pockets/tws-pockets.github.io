<template>
    <figure>
    <v-img  :src="require(src)" />
    <figcaption align="center">{{name}} {{ src }}</figcaption>
    </figure>
</template>

<script>
  export default {
    name : "FoundPicture",
    inheritAttrs: false,
    props : {
      name: {
         type : String,
         required : true,
      // validator: (prop) => {
      //     return true
      // }
      },
    },
      data() {
        return {
          src : "/src/assets/founder.png"
        }
      },
      computed : {
        // img (){
        //   const name = 'founder.png';
        //   return require(`@/assets/${name}`)}
      }
  }
</script>

<style lang="scss" scoped>

</style>