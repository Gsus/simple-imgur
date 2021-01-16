<template>
  <nav id="#navbar">
    <ul>
      <li v-if="!token">
        <router-link to="/login">Login
        </router-link>
      </li>
      <div v-else>
        <li @click="logout">
          <a href="#">Logout</a>
        </li>
        <li>
          <router-link to="/gallery">Gallery
          </router-link>
        </li>
        <li>
          <router-link to="/upload">Upload form
          </router-link>
        </li>
      </div>
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
