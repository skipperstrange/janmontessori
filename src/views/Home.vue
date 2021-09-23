<template>
    <div id="main" class="home">
        <SlideShow :slides="slides" />
        <section id="services" class="container">
              <section-heading title="High Quality Day Care"  />
        </section>
    </div>
</template>

<script>
import SlideShow from "@/components/SlideShow.vue"
import SectionHeading from "@/components/shared/section-heading"

export default {
  name: 'Home',
  components: {
      SlideShow,
      SectionHeading
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

