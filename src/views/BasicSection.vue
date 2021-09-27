<template>
    <div>
      <section-header :title="header"  />
       <div v-if="banner" class="col-md-5">
                  <img :src="imgSrc" class="img-responsive img-curved center-block" alt=""/>
       </div>
      <div class="col-md-12 col-md-7 res-margin">
                  <h3 v-if="header">{{header}}</h3>
                  <p>
                    {{content}}
                  </p>
                  <!-- Custom List -->
                  <ul class="custom no-margin">
                    <List :listItems="listData" icon="f122"/>
                  </ul>
               </div>
      
    </div>
</template>

<script>
import SectionHeader from "@/components/shared/section-header.vue"
import List from "@/components/shared/list.vue"

export default {
  name: 'BasicSection',
  components: {
      SectionHeader,
      List
  },

  data(){
    return{
      imgSrc: String
    }
  },

  props: {banner: String ,content: String, listData: [], header: String},

  beforeUpdate(){
    if(this.banner){
      this.imgSrc = this.banner
    }
  }
}
</script>
