<template>

    <div class="App">
      <HeaderNav />
      <div class="vertical-center">
        <div class="inner-block">
          <router-view />
        </div>
      </div>
    </div>

</template>

<script>
import HeaderNav from '@/components/HeaderNav.vue'
import axios from 'axios'


export default { 
  async created() {
    const response = await axios.get('user');
    this.$store.dispatch('user', response.data);
  },
  components: {
    HeaderNav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
