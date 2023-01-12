<template>
    <h1>Child components</h1>
</template>

<script>
export default { 
    name: 'LifeCycleChild',
    
    beforeCreate() {
        console.log('child beforeCreate()');
    },

    created() {
        console.log('Child created()');
    },

    beforeMount() {
        console.log('child beforeMount()');
    },

    mounted() {
        console.log('Child mounted()');
    },

    beforeUpdate() {
        console.log('child beforeUpdate()');
    },

    updated() {
        console.log('Child updated()');
    },

    beforeUnmount() {
        console.log('child beforeUnmount()');
    },

    unmounted() {
        console.log('Child unmounted()');
    },
}
</script>

<style scoped>
</style>