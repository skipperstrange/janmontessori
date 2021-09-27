<template>
  <div id="app">
     <!-- Preloader </Preloader> --> 
    <div id="preloader">
      <div class="spinner">
         <div class="bounce1"></div>
         <div class="bounce2"></div>
         <div class="bounce3"></div>
      </div>
   </div>
   <!-- /Preloader ends --> 
  <Header />
    <router-view></router-view>
  <Footer :clientInfo="clientInfo" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import '@/assets/css/style.css'


export default {
  name: 'App',
  components: {
    Header,
    Footer
  },

  data(){
    return {
          clientInfo: {},
    }
  },

  created(){
        this.$axios
        .get('./data/client-info.json')
        .then(response=> {
            this.clientInfo = response.data;
        });
  }
}
</script>

<style>

</style>
