<template>
  <div>
    <h1>Handling token... Please wait </h1>
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
      this.finalizeLogin();
      this.$router.push('gallery');
    }
  }
}
</script>

<style lang="scss" scoped>

</style>