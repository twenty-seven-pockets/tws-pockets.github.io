<template>
    <v-card class="bg-cardBackground text-text" align="center">
        <v-card-title primary-title>
            {{$t('company.articles.application.title')}}
        </v-card-title>
        <v-card-text>
            <v-container >
                <v-row>
                    <v-col cols="12">
                        {{$t('company.articles.standards.subtitle')}}
                    </v-col>
                </v-row>
                <v-row >
                    <v-col align="start">
                        <ul>
                            <li  v-for="item in items" :key="item.id">
                                {{ item }}
                            </li>
                        </ul>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
        <v-card-text>
            {{$t('company.articles.standards.footer')}}
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name : "StandardsView",
        computed : {
            items(){
                return new Array(3).fill(0).map((ele,idx) => this.$t(`company.articles.standards.list.${idx}`))
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>