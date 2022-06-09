<script >
import { RouterLink, RouterView } from 'vue-router'
import Navigation from "@/components/Navigation.vue";
import Header from "@/components/Header.vue";



export default {
  components: {RouterView, Navigation, Header}
}
</script>

<template>

  <Navigation/>
  <Header/>

  <div class="container-fluid  bg-opacity-10" style="background-color: darkgrey">
    <RouterView/>
    <footer/>
  </div>
  <footer class=" text-center text-lg-start" style="background-color: #a9a9a9">
    <!-- Copyright -->
    <div class="text-center p-3" style="">
      © 2022
      <a class="text-dark" href="https://localhost:3001/">Úžasný e-shop</a>
    </div>
    <!-- Copyright -->
  </footer>
</template>

<style>

</style>
