<template>
  <div>
    <h1>Handling token... Please wait </h1>
    <h2>{{ token }}</h2>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: 'AuthHandler',
  computed: {
    token() {
      return this.$store.state.auth.token;
    }
  },
  methods: mapActions(['finalizeLogin', 'login']),
  created() {
    if (window.location.hash === "") {
      this.login();
    } else {
      // Passing current url which has the actual token to be used
      console.log(window.location.hash);
      this.finalizeLogin();
      this.$router.push('gallery');
    }
  }
}
</script>

<style lang="scss" scoped>

</style>