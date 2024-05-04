v-bind:title="$t(title)" 
<template>
    <v-list-item v-if="!hasChildren"  nav density="compact"  
    >
    <v-btn v-bind="{...$attrs}"  class="button-color">{{ $t(title) }}
        <v-tooltip v-if="tooltip" activator="parent" v-bind="mergeTooltipWithDefaults(tooltip)">
        </v-tooltip> 
        </v-btn>
    </v-list-item>
    <v-list-group v-else v-model="state">
        <template #activator="{ props }">
            <v-list-item v-bind="{...props, ...$attrs, value : title}" nav density="compact" :title="$t(title)">
                <v-tooltip v-if="tooltip" activator="parent" v-bind="mergeTooltipWithDefaults(tooltip)">
                </v-tooltip>
               
            </v-list-item>
        </template>
        <v-list-item v-for="{tooltip, ...child} in children" :key="child.id" v-bind="child" :title="$t(child.title)">

            <v-tooltip v-if="tooltip" activator="parent" v-bind="mergeTooltipWithDefaults(tooltip)" />
        </v-list-item>
    </v-list-group>

</template>

<script>
export default {
    name: "SidemenuEntry",
    inheritAttrs : false,
    props: {
        children: Array,
        title : String,
        rail  : Boolean,
        tooltip: [String, Object],
        value : Boolean

    },
    emits : ['input'],
    data(){return {
        state : this.$props.value,
    }},
    methods: {
        mergeTooltipWithDefaults(options) {
            const opts = (typeof options == 'string') ? { text: options } : options
            return {
                location: "start top",
                ...opts
            }

        }
    },
    watch : {
        'state'(value){
            this.$emit('update',value)
        }
    },
    computed: {
        miniVariant : {
            set(value) {this.state = value},
            get(){return this.state && !this.$props.rail }
        },
        hasChildren() {
            return this.$props.children?.length > 0
        },
    }

}
</script>
border-color:--var(menuButtonBorder);
background-color:$menuButton;

<style lang="css" scoped>
.button-color {
    width : 100%;
}

</style>