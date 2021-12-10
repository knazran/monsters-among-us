<template>
  <div class="max-h-screen md:py-0 px-24">
 
     <VueSlickCarousel v-bind="settings"> 
      <div   v-for="video in content.media"
        :key="video.link"
        >
        <VideoFilter
         class="  md:block
                      hidden"
              title="test"
              :src="video.video_link"
            />
          <!-- Normal -->
            <div class="flex justify-center my-3">
                          <a :href="video.link">

            <button class='   rounded-full
                      bg-mau-primary-700
                      text-center text-white
                      2xl:w-56
                      xl:w-40
                      w-40
                      h-10
                      py-2
                      bottom-4
                      right-4
                      md:bottom-12 md:right-12
                      transform
                      hover:scale-105
                      font-body font-medium
                      text-sm
                        md:block
                      hidden
                '>
              {{video.description}}
            </button>
            </a>
            
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
    content: {
      type: Array,
    },
  
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