<template>
  
  <v-btn
                variant="outlined"
                :color="isHovering ? mouseoncolor: mouseoffcolor"
                @mouseenter="isHovering = true"
                @mouseleave="isHovering = false"
              >
                {{ isHovering ? mouseonlabel  : mouseofflabel }}
              </v-btn>
</template>

<script>
  export default {
    name : "HoverButton",
    props: {
      mouseonlabel: {
         type : String,
         default : "",
         required : false,
      // validator: (prop) => {
      //     return true
      // }
      },
      mouseoncolor: {
         type : String,
         default : "",
         required : false,
      // validator: (prop) => {
      //     return true
      // }
      },
      mouseoffcolor : {
         type : String,
         default : "action-button-color",
         required : false,

      },
      mouseofflabel: {
         type : String,
         default : "",
         required : false,
      // validator: (prop) => {
      //     return true
      // }
      },
    },data() {
    return {
      isHovering: false,
    };
  },
  }
</script>

<style lang="scss" scoped>

</style>