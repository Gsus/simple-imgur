<template>
  <nav id="#navbar">
    <ul>
      <li v-if="!isLoggedIn">
        <router-link to="/login">Login
        </router-link>
      </li>
      <div v-else>
        <li @click="logout">
          <a href="#">Logout</a>
        </li>
        <li>
          <router-link to="/">Gallery
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
import { mapGetters } from "vuex";

export default {
  name: 'Navbar',
  computed: mapGetters(['isLoggedIn']),
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
