<template>
  <h1>Gallery</h1>
  
</template>

<script>
// import api from "../../api/helper";

export default {
  name: 'Gallery',
  created() {
    // This action is in the "images.js" module, btw
    this.$store.dispatch('fetchImgs');
    // Get images from the current user's account
    // api.fetchImgs(this.token);
  }
}
</script>

<style lang="scss" scoped>

</style>