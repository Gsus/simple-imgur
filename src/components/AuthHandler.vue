<template>
  <div>
    <h1>Handling token... Please wait </h1>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: 'AuthHandler',
  methods: mapActions(['finalizeLogin', 'login']),
  created() {
    if (window.location.hash === "") {
      this.login();
    } else {
      this.finalizeLogin();
      this.$router.push('/');
    }
  }
}
</script>

<style lang="scss" scoped>

</style>