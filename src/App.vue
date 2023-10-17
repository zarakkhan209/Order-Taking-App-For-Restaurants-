<template>

  <div class="bg-red-400">
   <NavBar/>
   <router-view></router-view>
   <FooterOne/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterOne from './components/FooterOne.vue';


export default {
  name: 'App',
  components: {
    NavBar,
    FooterOne
}
}
</script>
