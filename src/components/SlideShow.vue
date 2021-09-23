<template>
<div>
    <div id="layerslider"  v-if="slides" >
        <!-- Slide -->
         <div v-for="(slide, index) in slides" :key="index" class="ls-slide" data-ls="transition2d:48;timeshift:-2000;">
            <img :src="slide.img" class="ls-bg"  alt="Slide background"/>
            <!-- Text -->
            <div class="ls-l header-text" data-ls="offsetxin:0;durationin:2000;delayin:200;easingin:easeInOutExpo;rotatexin:100;scalexin:0.8;scaleyin:0.8;transformoriginin:50% 50% -150;offsetxout:0;durationout:500;rotatexout:-20;scalexout:0.8;scaleyout:0.8;transformoriginout:50% 50% -150;">
               <h1>{{slide.title}}</h1>
               <p class="subtitle hidden-xs">{{slide.subtitle}} </p>
               <!-- Button -->
               <div class="page-scroll hidden-xs">
                  <a class="btn" :href="slide.link.href">{{slide.link.title}}</a>
               </div>
            </div>
         </div>
    </div>

</div>
</template>

<script>
export default{
    name: "SlideShow",

    props: {
          slides: []
    }
}
</script>

<style scoped>
/* ===========================
 Main Slider
============================ */

#layerslider {
    padding-top: 60px;
    width: 100% !important;
    height: 750px!important;
}
.ls-bottom-nav-wrapper {
    margin-top: -40px!important;
    z-index: 99!important;
}
.ls-fullwidth .ls-nav-prev, .ls-fullwidth .ls-nav-next {
    z-index: 100!important;
}
/* Slider text boxes  */

.header-text {
    padding: 30px !important;
    text-align: center;
    max-width: 50%;
    border-radius: 50px 25px;
    left: 25%!important;
    right: 25%!important;
    top: 50%!important;
}

/************ min width 1900px *************/

@media (min-width: 1900px) {
    /* Slider */
    
    #layerslider {
        height: 900px!important;
    }
}
/************ min width 1500px *************/


/************ max width 1300px *************/

@media (max-width: 1300px) {
    /* Slider */
    
    .header-text {
        padding: 30px !important;
        text-align: center;
        max-width: 50%;
        border-radius: 50px 25px;
        left: 25%!important;
        right: 25%!important;
        top: 20%!important;
    }
    #layerslider {
        height: 600px!important;
    }
}

@media (max-width: 991px){
     #layerslider {
        height: 470px!important;
        padding-top: 45px;
    }
    .header-text h1 {
        font-size: 44px;
        line-height: 44px;
        margin-top: 0px;
    }
    .header-text {
        max-width: 450px;
        top: 15% !important;
    }
    .ls-bottom-nav-wrapper {
        margin-top: -20px!important;
    }
}

@media (max-width: 767px) {
    #layerslider {
        height: 350px!important;
    }
    .header-text {
        padding: 10px 0 10px!important;
        min-width: 99%;
        margin: 0 auto !important;
        left: 0% !important;
        top: 60% !important;
    }
    .header-text h1 {
        font-size: 30px;
        line-height: 34px;
        margin: 0px;
    }
    .ls-nav-prev,
    .ls-nav-next {
        display: none !important;
    }
    .ls-bottom-nav-wrapper {
        margin-top: 0px!important;
    }
}

@media (max-width: 640px) {
    #layerslider {
        height: 320px!important;
    }
}

@media (max-width: 480px) {
     #layerslider {
        height: 230px!important;
    }
    .header-text h1 {
        font-size: 26px!important;
        line-height: 24px;
        margin: 0px;
    }
    .ls-bottom-nav-wrapper {
        display: none;
    }
}

@media (max-width: 340px) {
    #layerslider {
        height: 190px!important;
    }
}
</style>

