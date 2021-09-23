<template>
     <!-- Section heading -->
    <div class="section-heading">
        <h2>{{title}}</h2>
        <!-- divider -->
        <div class="hr" :style="{'::after': icon}"></div>
    </div>
</template>

<script>
export default{
    name: "SectionHeading",

    props: {
          title: String,
          icon: {
                type: String,
                default: "f101" //Visit flat icons file for icon options 
                } 
    },

    methods: {
    applyCSS() {
      let cssRule = ".section-heading .hr::after {content:" +  '"\\'+this.icon+'"';
      let style = document.createElement("style");
      style.type = "text/css";
      //append the style node as child of current component
      this.$el.appendChild(style);
      style.innerHTML = cssRule;
    }
  },

  mounted: function() {
    this.applyCSS();
},

beforeUpdate: function() {
    this.applyCSS();
}
}
</script>


