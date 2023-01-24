<template>
  <div>
    <h3 v-if="user">Welcome, {{ user.name }}...</h3>
    <h3 v-if="!user">Please Login to access</h3>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
        ...mapGetters(['user'])
    },
};
</script>

<style >

</style>
