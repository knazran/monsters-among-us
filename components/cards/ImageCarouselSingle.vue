<template>
  <div class="md:py-0">
    <VueSlickCarousel v-if="!isText" v-bind="settings">
      <div class="sm:block hidden" v-for="specificImage in images" :key="specificImage.image">
        <div><img class="w-full px-2" :src="specificImage.image" /></div>
      </div>
    </VueSlickCarousel>
    <VueSlickCarousel v-if="isText"  v-bind="settings">
      <div  class="h-full" v-for="(purpose,index) in images" :key="purpose.description">
        <div class="px-4 font-display font-medium justify-center text-center flex">
          <p>{{purpose.description}}</p>
        </div>
        <div class="flex  justify-center ">
        <p v-if="index==0">Slide to read more</p>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'MyComponent',
  components: { VueSlickCarousel },
  props: {
    images: {
      type: Array,
    },
    isText:{
      type:Boolean,
      defaulf:false
    }
  },
  data: function () {
    return {
      settings: {
        dots: true,
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        initialSlide: 0,
        
      },
    }
  },
}
</script>

<style scoped>
.slick-list {
  margin: 0 -5px;
}
.slick-slide > div {
  padding: 0 5px;
}
</style>