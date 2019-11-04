<template>
  <div id="app">

    <Navbar />
    <Buttons/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Buttons from '@/components/Buttons'
export default {
  name: 'App',
  components:{
    Navbar,
    Buttons
  }
}
</script>

<style>
.container {
  margin-top: 4rem;
  padding: 2rem;
  border: 2px solid black;
}
</style>
