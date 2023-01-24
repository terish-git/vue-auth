<template>
    <div class="vue-tempalte">
        <div v-if="errors" class="bg-red-500 text-white py-2 px-4 pr-0 rounded font-bold mb-4 shadow-lg">
  <div v-for="(v, k) in errors" :key="k">
    <p v-for="error in v" :key="error" class="text-sm">
      {{ error }}
    </p>
  </div>
</div>


        <form @submit.prevent="handleSubmit">
            <h3>Sign Up</h3>

            <div class="form-group">
                <label>Full Name</label>
                <input type="text" v-model="name" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Email address</label>
                <input type="text" v-model="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" v-model="password" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Confirm Password</label>
                <input type="password" v-model="c_password" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>

            <p class="forgot-password text-right">
                Already registered
                <router-link :to="{ name: 'login' }">sign in?</router-link>
            </p>
        </form>
    </div>
</template>
 
<script>
import axios from 'axios'
export default {
    name: 'RegisterPage',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            c_password: '',
            errors: null,
        }
    },
    methods: {
        async handleSubmit() {
            // await axios.post('register', {
            //     name: this.name,
            //     email: this.email,
            //     password: this.password,
            //     c_password: this.c_password,
            // });
            // this.$router.push('/login');

            await axios.post('register', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    c_password: this.c_password,
                })
                .then(data => {
                    this.$router.push('/login');
                    console.log(data)
                })
                .catch(e => {
                    this.errors = e.data.errors;
                });


        }
    }
}
</script>