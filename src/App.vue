<template>
  <div>
    <h1>Simple Imgur</h1>
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>

</style>
