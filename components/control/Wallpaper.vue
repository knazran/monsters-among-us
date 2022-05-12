<template>
  <div class="h-full mt-4 md:mt-2">
    <div class="flex flex-col items-center md:flex-row md:px-20">
      <!-- Left Side-->
      <div class="md:w-1/2 px-6">
        <div class="">
          <slot name="left">
            <div
              class="
                text-center
                flex
                justify-center
                lg:text-xl
                md:text-lg
                text-base
                font-body font-medium
                py-4
              "
            >
              <p>{{ content.title_sticker }}</p>
            </div>
            <div class="flex justify-center">
              <div>
                <img
                  :src="content.image_sticker"
                  alt="..."
                  class="
                    object-scale-down
                    w-full
                    border-none
                    rounded
                    md:h-80
                    h-72
                    w-96
                  "
                />
              </div>
            </div>
            <div class="flex justify-center py-4">
              <a :href="content.link_sticker">
                <button
                  class="
                    rounded-lg
                    bg-mau-secondary-900
                    text-center text-white
                    xl:w-52
                    w-48
                    py-1
                    mx-2
                    text-sm
                    xl:text-base
                    hover:font-bold
                    transform
                    motion-safe:hover:scale-110
                    hover:bg-mau-secondary-950
                  "
                >
                  Download All Here!
                </button></a
              >
            </div>
          </slot>
        </div>
      </div>
      <!-- End Left Side-->

      <!-- Right Side with List and button -->
      <div class="md:w-1/2 w-full lg:px-24 md:px-6 px-10">
        <div class="">
          <slot name="right">
            <div
              class="
                text-center
                flex
                justify-center
                lg:text-xl
                md:text-lg
                text-base
                font-body font-medium
                py-4
              "
            >
              <p>{{ content.title_wallpaper }}</p>
            </div>

            <div class="w-full">
              <collage :images="content.carousel" height="20rem"> </collage>
              <div class="flex justify-center py-6">
                <a href="/Desktop-Mobile Wallpapers.zip">
                  <button
                    class="
                      rounded-lg
                      bg-mau-secondary-900
                      text-center text-white
                      xl:w-52
                      w-48
                      py-1
                      mx-2
                      text-sm
                      xl:text-base
                      hover:font-bold
                      transform
                      motion-safe:hover:scale-110
                      hover:bg-mau-secondary-950
                    "
                  >
                    Download All Here!
                  </button></a
                >
              </div>
            </div>
          </slot>
        </div>
      </div>
      <!--End Right side with Pic -->
    </div>
  </div>
</template>


<script>
import Collage from 'vue-collage'

export default {
  components: {
    Collage,
  },
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
#describe {
  font-size: 1.8rem;
}
.imgBg {
  background-size: cover;
  height: 100%;
  background-position: center;
}
.vc-slideshow {
  position: static;
}
</style>


