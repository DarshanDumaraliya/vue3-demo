<template>
    <div>
        <table class="user-details-table">
            <tr>
                <th> Sr No.</th>
                <th> Image </th>
                <th> First Name</th>
                <th> Last Name</th>
                <th> Email </th>
            </tr>

            <tr v-for="item in userDetails" :key="item.id">
                <!-- <ng-container v-for="item in userDetails" :key="item.id"> -->
                    <td>{{ item.id }}</td>
                    <td>
                        <img :src="item.avatar" alt="Vue logo">
                    </td>
                    <td>{{ item.first_name }}</td>
                    <td>{{ item.last_name }}</td>
                    <td>{{ item.email }}</td>
                <!-- </ng-container> -->
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'UserDetailsTable',
    props: {
        userDetails: Array,
        show: Number
    },
    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style scoped>
div {
    background-color: rgb(201, 237, 238);
    color: black;
}

.user-details-table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

.user-details-table td,
.user-details-table th {
    border: 1px solid #ddd;
    padding: 8px;
}

.user-details-table tr:nth-child(even) {
    background-color: #f2f2f2;
}

.user-details-table tr:hover {
    background-color: #ddd;
}

.user-details-table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04AA6D;
    color: white;
}

img {
    height: 50px;
    width: 50px;
    border-radius: 40px;
}
</style>