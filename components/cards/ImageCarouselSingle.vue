<template>
  <div class="md:py-0">
    <VueSlickCarousel v-if="!isText" v-bind="settings">
      <div
        class="sm:block hidden"
        v-for="specificImage in images"
        :key="specificImage.image"
      >
        <div>
          <a :href="specificImage.image">
            <img
              class="
                w-full
                cursor-pointer
                transform
                scale-100
                hover:scale-105
                px-2
              "
              :src="specificImage.image"
          /></a>
        </div>
      </div>
    </VueSlickCarousel>
    <VueSlickCarousel v-if="isText" v-bind="settings">
      <div
        class="h-full"
        v-for="(purpose, index) in images"
        :key="purpose.description"
      >
        <div
          class="
            px-6
            font-medium
            justify-center
            3xs:text-xs
            2xs:text-sm
            flex
            items-center
          "
        >
          <p class="text-justify">{{ purpose.description }}</p>
        </div>
        <div v-if="index == 0">
          <div class="flex justify-center">
            <p><strong>Slide to read more </strong></p>
          </div>
          <div class="flex justify-center items-center py-12">
            <img class="h-40" :src="purpose.image" />
          </div>
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
    isText: {
      type: Boolean,
      defaulf: false,
    },
  },
  data: function () {
    return {
      settings: {
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