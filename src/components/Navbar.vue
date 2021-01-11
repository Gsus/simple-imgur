<template>
  <nav id="#navbar">
    <ul>
      <li v-if="!token">
        <router-link to="/login">Login
        </router-link>
      </li>
      <li v-else @click="logout">
        <a href="#">Logout</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    token() {
      return this.$store.state.auth.token;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/'); 
    }
  }
}
</script>

<style scoped>

</style>
