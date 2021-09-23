<template>
    <div id="main" class="home">
        <Slider :slides="slides" />
        <section id="services" class="container">
               <!-- Section heading -->
               <div class="section-heading">
                  <h2>High Quality Day Care</h2>
                  <!-- divider -->
                  <div class="hr"></div>
               </div>
           </section>
    </div>
</template>

<script>
import Slider from "@/components/slider.vue"
export default {
  name: 'Home',
  components: {
      Slider
  },
  props: {

  },

  data(){
      return {
          slides: []
      }
  },

  created() {
      console.log("Home mounted!!")
       this.$axios
            .get('./data/slides.json')
            .then(response=> {
                this.slides = response.data;
            });
  },
}
</script>