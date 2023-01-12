<template>
    <div>
        <button @click="componentName = 'WelcomePage'"> Home </button>
        <button @click="componentName = 'LoginPage'"> Login </button>
        <button @click="componentName = 'GetUserDetails'">User Details</button>
        <hr>
        <component :is="componentName"> </component>
    </div>
</template>

<script>
// import LifeCycleParent from './LifeCycleParent.vue';
// import HeaderTheme from '@/Theme/Header.theme.vue';
import LoginPage from './LoginPage.vue';
import GetUserDetails from './GetUserDetails.vue';
import WelcomePage from "./WelcomePage.vue"

export default {
    name: "HomePage",
    data() {
        return {
            componentName: 'WelcomePage',
        };
    },
    components: {
        LoginPage,
        GetUserDetails,
        WelcomePage
    }
}
</script>

<style scoped>
button {
    background-color: #ade9af;
    border: none;
    color: black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}
</style>