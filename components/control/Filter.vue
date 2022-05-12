<template>
  <div class="h-full py-4 mb-2">
    <HeadingControl :title="content.title" />
    <div
      class="
        text-center
        flex
        justify-center
        lg:text-xl
        md:text-lg
        text-base
        font-body font-medium
      "
    >
      <p>{{ content.description }}</p>
    </div>

    <div
      class="
        md:grid md:grid-cols-3
        hidden
        gap-12 gap-8
        sm:px-0
        px-6
        py-6
        grid-cols-2
        place-items-center
        items-center
      "
    >
      <div v-for="video in content.media" :key="video.description">
        <VideoFilter
          class="md:block hidden"
          title="test"
          :src="video.video_link"
        />
        <div class="flex justify-center my-3">
          <a :href="video.link">
            <button
              class="
                rounded-full
                bg-mau-primary-700
                text-center text-white
                lg:w-48
                w-40
                h-10
                py-2
                transform
                hover:scale-105
                font-body font-medium
                text-sm
                md:block
                hidden
              "
            >
              {{ video.description }}
            </button>
          </a>
        </div>
      </div>
    </div>
    <!-- Mobile -->

    <div class="md:hidden block w-full px-12 py-6">
      <VueSlickCarousel v-bind="settings">
        <div
          class="flex flex-col"
          v-for="video in content.media"
          :key="video.link"
        >
          <div class="flex justify-center">
            <VideoFilter title="test" :src="video.video_link" />
          </div>
          <div class="flex justify-center my-3">
            <a :href="video.link">
              <button
                class="
                  rounded-full
                  bg-mau-primary-700
                  text-center text-white
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
                "
              >
                {{ video.description }}
              </button>
            </a>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
    <!-- Mobile -->
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
      type: Object,
      required: true,
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
#describe {
  font-size: 1.8rem;
}
.slick-list {
  margin: 0 -5px;
}
.slick-slide > div {
  padding: 0 5px;
}
</style>


