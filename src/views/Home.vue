<template>
    <div id="main" class="home">
        <SlideShow :slides="slides" />

        <section id="services" class="container">
              <BasicSection  :banner="services.img" :header="services.header" :listData="services.servicesList" :content="services.brief"/>
        </section>
    </div>
</template>

<script>
import SlideShow from "@/components/SlideShow.vue"
import BasicSection from "@/views/BasicSection.vue"

export default {
  name: 'Home',
  components: {
      SlideShow,
      BasicSection
  },
  props: {

  },

  data(){
      return {
          slides: [],
          services: {}
      }
  },

  created() {
      console.log("Home mounted!!")
       this.$axios
            .get('./data/slides.json')
            .then(response=> {
                this.slides = response.data;
            });

            this.$axios
            .get('./data/services.json')
            .then(response=> {
                this.services = response.data;
                console.log(this.services)
            });
  },
}
</script>

