<template>
    <div align="center" >
        <v-row>
            <v-col cols="12">
            <markdown-card-with-icon path="additional/application" custom-icon="AdditionalApplicationCardIcon"/>
            <!-- <markdown-content content-path="additional"/> -->
                 <!-- <Application/> -->
            </v-col>
        <v-row>
        </v-row>
            <v-col cols="12">
                <!-- <Tolerance/> -->
                <markdown-card-with-icon path="additional/toxicity" custom-icon="AdditionalToxicityCardIcon"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <!-- <Storage/> -->
                <markdown-card-with-icon path="additional/storage" custom-icon="AdditionalStorageCardIcon"/>
            </v-col>
        
        </v-row>
        <v-row>
            <v-col cols="12">
                <!-- <SafeSpace/>  -->
                <markdown-card-with-icon path="additional/safespaces" custom-icon="AdditionalSafespacesCardIcon"/>
            </v-col>
        
        </v-row>
    </div>
</template>

<script>
// import Application from './application.vue';
// import SafeSpace from './safe-space.vue';
// import Storage from './storage.vue';
// import Tolerance from './tolerance.vue';

    export default {
        name : "AdditionalView",
    // components: { Tolerance, Storage, Application, SafeSpace,  }
}
</script>

<style lang="scss" scoped>

</style>