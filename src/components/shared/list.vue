<template>
     <!-- List-->
     <div>
    <li class="my-li" v-for="(listItem, index) in listItems" :key="index">{{listItem.text}}</li>
     </div>
</template>

<script>
export default{
    name: "List",

    props: {
          listItems: [],
          icon: {
                type: String,
                default: "f126" //Visit flat icons file for icon options 
                } 
    },

    methods: {
    applyCSS() {
      let cssRule = "ul.custom li.my-li:before{content:" +  '"\\'+this.icon+'"';
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


