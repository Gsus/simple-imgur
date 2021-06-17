<template>
  <div>
    <h1>THIS IS THE UPLOAD FORM</h1>
    <!-- Pass the .files property (which contains the images to be uploaded) rightaway instead of the whole event -->
    <input 
      type="file" 
      @change="uploadImgs($event.target.files)"
      accept="image/*"
      multiple
    >
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: 'UploadForm',
  methods: mapActions(['uploadImgs'])
}
</script>

<style lang="scss" scoped>

</style>