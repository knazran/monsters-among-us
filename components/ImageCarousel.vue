<template>
  <div class="pb-24 md:px-16 px-12 md:mr-8">
    <VueSlickCarousel v-bind="settings">
      <div><img class="w-full px-2" src="../assets/img/kid-hero.jpg" /></div>
      <div><img class="w-full px-2" src="../assets/img/together.jpg" /></div>
      <div><img class="w-full px-2" src="../assets/img/forum.jpg" /></div>
      <div><img class="w-full px-2" src="../assets/img/discuss.jpg" /></div>
      <div><img class="w-full px-2" src="../assets/img/activity.jpg" /></div>
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
  data: function () {
    return {
      settings: {
        dots: true,
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 500,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
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