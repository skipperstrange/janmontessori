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
    name: "SectionHeader",

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

<style>

/* Sections heading */

.section-heading {
    margin-bottom: 5rem;
    text-align: center;
    position: relative;
}
.section-heading h2 {
    text-align: center;
    margin-bottom: 20px;
}
.section-heading .hr {
    border-top: 1px dotted;
    text-align: center;
    max-width: 150px;
    margin-top: 50px;
    margin: 0 auto;
}
.section-heading .hr:after {
    content: "\f101"; /* Icon that changes when icon value of component changes. Visit flat icons file for icon options */
    font-family: Flaticon;
    display: inline-block;
    position: relative;
    top: -25px;
    padding: 0 10px;
    font-size: 38px;
}
.section-heading .hr.light,
.section-heading .hr.light:after {
    color: #fff;
}

 /* Space between sections */
    
    .section-heading {
        margin-bottom: 2rem;
    }
</style>


