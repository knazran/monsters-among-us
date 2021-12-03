<template>
  <div>
    <HeadingControl :title="content.title1" />

    <div
      class="max-h-screen sm:my-0 imgBg"
      :style="{ backgroundImage: bgImage }"
    >
      <div class="flex flex-col md:flex-row py-4 px-6">
        <!-- Left Side-->
        <div class="md:w-3/5 mb-2">
          <div class="">
            <slot name="left">
              <div class="flex mt-4 justify-center">
                <div>
                  <img
                    :src="content.image"
                    alt="..."
                    class="object-scale-down w-full border-none rounded h-72"
                  />
                </div>
                <div class="px-5">
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
        <div class="md:w-2/5 lg:px-0 px-8 md:py-0 py-5">
          <div class="2xl:pr-12 xl:pr-12">
            <slot name="right">
              <div class="w-full md:my-8">
                <ImageCarouselSingle :images="content.carousel2" />
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
export default {
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
</style>


