<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <Application/>
            </v-col>
            <v-col cols="12">
                <Tolerance/>
            </v-col>
            <v-col cols="12">
                <Storage/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Application from './application.vue';
import Storage from './storage.vue';
import Tolerance from './tolerance.vue';

    export default {
        name : "AdditionalView",
    components: { Tolerance, Storage, Application }
}
</script>

<style lang="scss" scoped>

</style>