<template>
  <div>
    <div v-if="isLoggedIn">
      <h1>Gallery</h1>

      <img v-for="img in allImgs" :key="img.id" :src="img.link" :alt="img.name">
    </div>
    <h1 v-else>Welcome! Please login</h1>
  </div>
  
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'Gallery',
  computed: mapGetters(['isLoggedIn', 'allImgs']),
  created() {
    // This action is in the "images.js" module, btw.
    // Get images from the current user's account (if logged in)
    if (this.isLoggedIn) this.$store.dispatch('fetchImgs');
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 480px;
  height: auto;
}
</style>