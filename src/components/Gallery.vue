<template>
  <h1>Gallery</h1>
  
</template>

<script>
import helper from "../../api/helper";

export default {
  name: 'Gallery',
  data() {
    return {
      token: this.$store.state.auth.token
    } 
  },
  created() {
    // Get images from the current user's account
    helper.getImgs(this.token);
  }
}
</script>

<style lang="scss" scoped>

</style>