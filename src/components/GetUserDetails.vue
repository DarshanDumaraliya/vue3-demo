<template>
    <div>
        <div class="header">
            <div style="text-align: left;">
                <h1> User Details </h1>
            </div>
            <div style="text-align: right;">
                <button @click="getUser(1)">1</button>
                <button @click="getUser(2)">2</button>
            </div>
        </div>
        <UserDetailsTable :userDetails="userDetails" :show="page" />
    </div>
</template>

<script>
import UserDetailsTable from "@/components/tables/UserDetailsTable.vue"
import axios from "axios"

export default {
    name: 'GetUserDetails',
    components: {
        UserDetailsTable
    },

    data() {
        return {
            userName: 'Demo project',
            userDetails: [],
            page: 1
        };
    },

    // lifeCycle method 
    mounted() {
        this.getUser(this.page);
    },

    methods: {
        // get user API call
        async getUser(page) {
            let result = await axios.get(`https://reqres.in/api/users?page=${page}`);
            console.log('result ', result)
            this.userDetails = result?.data?.data
        }
    },
};
</script>

<style scoped>
div {
    background-color: white;
    margin: auto;
    color: black;
    width: 98%;
    height: 90%;
}
.header {
    display: flex;
}
button {
    padding: 5px 8px;
    margin: 5px;
}
</style>