<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-md-8 login-box">
                <div class="col-lg-12 login-title">
                    Login
                </div>

                <div class="col-lg-12 login-form">

                    <div class="form-group">
                        <label class="form-control-label">USERNAME</label> &nbsp;&nbsp;
                        <input type="text" class="form-control" v-model="userName" @keyup="validateInput"
                            @blur="validateInput">
                    </div>

                    <div class="form-group">
                        <label class="form-control-label">PASSWORD</label>&nbsp;&nbsp;
                        <input type="password" class="form-control" v-model="password" @keyup="validatePassInput"
                            @blur="validatePassInput">
                    </div>

                    <div class="col-lg-12 loginbttm">
                        <div class="col-lg-6 login-text">
                            {{ error }}
                        </div>
                        <div class="col-lg-6 login-button">
                            <button type="submit" class="btn btn-outline-primary" @click="onsubmit">LOGIN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import useFormValidation from "@/core/FormFieldValidation"

export default {
    // set the component name
    name: 'LoginPage',

    setup() {
        // form control name 
        const userName = ref('');
        const password = ref('');

        //  get validation function from the 
        const { error, validationField, validationPassword } = useFormValidation();

        // username validate 
        const validateInput = () => {
            validationField("userName", userName.value);
        };

        // password validate
        const validatePassInput = () => {
            validationPassword("password", password.value);
        };

        // click on submit button
        function onsubmit() {
            if (!userName.value) {
                return validationField("userName", userName.value);
            }
            if (!password.value) {
                return validationPassword("password", password.value);
            }
            console.log('userName', userName.value)
            console.log('password ', password.value);
        }

        return {
            userName,
            password,
            onsubmit,
            error,
            validateInput,
            validatePassInput
        }
    }
}
</script>

<style>
body {
    background: #222D32;
    font-family: 'Roboto', sans-serif;
}

.login-box {
    margin-top: 250px !important;
    margin: auto;
    padding: 50px;
    height: 300px;
    width: 300px;
    background: #1A2226;
    text-align: center;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.login-key {
    height: 100px;
    font-size: 80px;
    line-height: 100px;
    background: -webkit-linear-gradient(#27EF9F, #0DB8DE);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.login-title {
    text-align: center;
    font-size: 30px;
    letter-spacing: 2px;
    font-weight: bold;
    color: #ECF0F5;
}

.login-form {
    margin-top: 25px;
    text-align: center;
}

input[type=text] {
    background-color: #1A2226;
    border: none;
    border-bottom: 2px solid #0DB8DE;
    border-top: 0px;
    border-radius: 0px;
    font-weight: bold;
    outline: 0;
    margin-bottom: 20px;
    padding-left: 0px;
    color: #ECF0F5;
}

input[type=password] {
    background-color: #1A2226;
    border: none;
    border-bottom: 2px solid #0DB8DE;
    border-top: 0px;
    border-radius: 0px;
    font-weight: bold;
    outline: 0;
    padding-left: 0px;
    margin-bottom: 20px;
    color: #ECF0F5;
}

.form-group {
    margin: 0px;
    margin-top: 50px;
    outline: 0px;
}

.form-control:focus {
    border-color: inherit;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-bottom: 2px solid #0DB8DE;
    outline: 0;
    background-color: #1A2226;
    color: #ECF0F5;
}

input:focus {
    outline: none;
    box-shadow: 0 0 0;
}

label {
    margin-bottom: 0px;
}

.form-control-label {
    font-size: 15px;
    color: #6C6C6C;
    font-weight: bold;
    letter-spacing: 1px;
}

.btn-outline-primary {
    border-color: #0DB8DE;
    color: #0DB8DE;
    border-radius: 10px;
    font-weight: bold;
    letter-spacing: 4px;
    font-size: 15px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.btn-outline-primary:hover {
    background-color: #0DB8DE;
    right: 0px;
    color: black;
}

.login-button {
    padding-right: 0px;
    text-align: center;
    margin-top: 60px;
}

.login-text {
    text-align: center;
    padding-left: 0px;
    color: red;
}

.loginbttm {
    padding: 0px;
}
</style>