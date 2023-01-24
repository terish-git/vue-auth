<template>
    <div>
        <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
            <div class="container">
                <router-link class="navbar-brand float-left"  to="/"> Vue App </router-link>

                <ul class="nav navbar-nav navbar-nav mr-auto" v-if="user">
                    <li class="nav-item ">
                        <router-link class="btn btn-outline-primary"  to="/products">Products</router-link>
                    </li>
                </ul>

                <ul class="nav navbar-nav flex-row float-right mr-auto" v-if="!user">
                    <li class="nav-item ">
                        <router-link class="btn btn-outline-primary" to="/login">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="btn btn-outline-primary" to="/register">Register</router-link>
                    </li>
                </ul>
                <ul class="nav navbar-nav flex-row float-right" v-if="user">
                    <li class="nav-item ">
                        <a href="javascript:void(0)" @click="logout" class="btn btn-outline-primary" to="/login">Logout</a>
                    </li>
                    
                </ul>
            </div>
        </nav>
    </div>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'HeaderNav',
    methods: {
      logout (){
        localStorage.removeItem('token');
        this.$store.dispatch('user', null);
        this.$router.push('/')
      }
    },
    computed: {
        ...mapGetters(['user'])
    },
};

  
</script>