<template>
  <div>
    <h1>Simple Imgur</h1>
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'App',
  components: {
    Navbar
  },
  created() {
    // If there's a token in local storage...
    if (localStorage.getItem("imgur_token")) {
      // Get token from local storage
      let token = localStorage.getItem("imgur_token");
      // Put it in our state
      this.$store.commit('setToken', token);
    }
  },
  mounted() {
    // If there isn't a token in local storage... go to Home, where you can login
    if (!localStorage.getItem("imgur_token") && this.$router.currentRoute.path !== '/') {
      this.$router.push('/');
    }
  }
}
</script>

<style>
body {
  background: #333;
  color: #ccc;
}

a {
  /* text-decoration: none; */
  color: inherit;
}
</style>
