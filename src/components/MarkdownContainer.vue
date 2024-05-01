<template>
    <div >
        {{ markdown }}
    </div>
</template>

<script>
    export default {
        name : "MarkdownContainer",
        props : {
            markdownString : {
                type : String,
                default : "# asd"
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>