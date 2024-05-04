<template>

<v-container>
        <v-row>
            <v-col cols="12">
                <standards/>
                
            </v-col>
            <v-col col="12">
                <certificates/>
            </v-col>
            </v-row>
            </v-container>
</template>

<script>
import Certificates from './certificates.vue';
import Standards from './standards.vue';

    export default {
    name: "CertificationsIndex",
    
    components: { Standards, Certificates }
}
</script>

<style lang="scss" scoped>

</style>