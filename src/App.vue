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
    if (localStorage.getItem("token")) {
      let token = localStorage.getItem("token");
      this.$store.commit('setToken', token);
      this.$router.push('/gallery');
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
