<template>
     <button @click="showChild = !showChild"> Toggle Child</button>
     <LifeCycleChild v-if="showChild"/>
</template>

<script>
import LifeCycleChild from "./LifeCycleChild.vue"
export default {
    name: 'LifeCycleParent',
    components: {
        LifeCycleChild
    },
    data() {
        return {
            showChild: true,
        }
    },

    beforeCreate() {
        console.log('Parent beforeCreate()');
    },

    created() {
        console.log('Parent created()');
    },
    
    beforeMount() {
        console.log('Parent beforeMount()');
    },

    mounted() {
        console.log('Parent mounted()');
    },

    beforeUpdate() {
        console.log('Parent beforeUpdate()');
    },

    updated() {
        console.log('Parent updated()');
    },

    beforeUnmount() {
        console.log('Parent beforeUnmount()');
    },

    unmounted() {
        console.log('Parent unmounted()');
    },
}
</script>

<style scoped>
</style>