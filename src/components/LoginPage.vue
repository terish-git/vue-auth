<template>
    <div class="vue-tempalte">
        <form @submit.prevent="handleSubmit">
            <h3>Sign In</h3>

            <div class="form-group">
                <label>Email address</label>
                <input type="text" v-model="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" v-model="password" class="form-control form-control-lg" />
            </div>

            <div class="form-group" style="margin-top: 10%;">
                <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>
            </div>

        </form>
    </div>
</template>
 
<script>
import axios from 'axios'
export default {
    data() {
        return {
            email: '',
            password: '',

        }
    },
    methods: {
        async handleSubmit() {
            axios.post('login',
                {
                    email: this.email,
                    password: this.password,
                    error: false,
                    errorMsg: 'An error occurred, please try again'
                })
                .then((res) => {
                    localStorage.setItem('token', res.data.data.token)
                    this.email = ''
                    this.password = ''
                    this.$store.dispatch('user', res.data.data.user);
                    this.$router.push('/');

                })
                .catch((err) => {
                    console.log(err)
                    this.error = true
                    this.password = ''
                })
            //
        }
    }
};
</script>