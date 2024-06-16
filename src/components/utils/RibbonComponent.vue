
<template>
  <div class="ribbon-container">
      <span class="github-fork-ribbon"  :data-ribbon="text" :title="text"/>
      <slot/>
  </div>
</template>

<script>
  export default {
    props : {
      right : {
        type : Boolean,
        default : true,
      },
       text : String,
    },
    computed: {
      ribbonClasses () {return {
        'ribbon' : true,
        'shift-right' : this.right,

      }}
    },
  }
</script>
<style>
.ribbon-container {
  position:relative;
}
</style>

