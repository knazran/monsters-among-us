<template>
  <div class="mt-20 md:mt-2">
    <HeadingControl :title="content.title1" />

    <div
      class=" min-h-screen  sm:my-0 imgBg  "
      :style="{ backgroundImage: bgImage }"
    >
      <div class=" flex flex-col min-h-screen items-center xl:flex-row md:px-20  ">
        <!-- Left Side-->
        <div class="xl:w-3/5 py-12 px-6">
          <div class="">
            <slot name="left">
              <div class="flex mt-4 justify-center">
                <div>
                  <img
                    :src="content.image"
                    alt="..."
                    class="object-scale-down w-full border-none rounded md:h-80 h-72"
                  />
                </div>
                <div class="px-5 flex items-center">
                  <nuxt-content
                    class="font-bold prose-md lg:prose-lg max-w-none"
                    :document="content"
                  />
                </div>
              </div>
            </slot>
          </div>
        </div>
        <!-- End Left Side-->

        <!-- Right Side with List and button -->
        <div class=" xl:w-2/5 w-full lg:px-40 xl:px-0 px-8  sm:px-24 md:px-24 sm:py-6 ">
          <div class="">
            <slot name="right">
              <div class="w-full md:block hidden">
                <collage
                  :images="content.carousel2"
                  height="400px"
                >
                </collage>
                <div class="flex justify-center">
                <p >Download</p>
                </div>
              </div>
               <div class="w-full md:hidden block">
                <collage
                  :images="content.carousel2"
                  height="200px"
                >
                </collage>
                 <div class="flex justify-center">
                <a href="/Desktop-Mobile Wallpapers YIC.zip"><p class="text-display">Download All Here!</p></a>
                </div>
              </div>
            </slot>
          </div>
        </div>
        <!--End Right side with Pic -->
      </div>
    </div>
  </div>
</template>


<script>
import Collage from 'vue-collage';

export default {
  components: {
    Collage,
  },
  props: {
    content: {
      type: Object,
      required: true,
    },
    bgImage: {
      type: String,
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
.vc-slideshow{
  position:static;
}
</style>


