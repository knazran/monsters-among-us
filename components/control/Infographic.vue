<template>
  <div class="sm:h-full">
    <HeadingControl :title="content.title" />

    <div class="sm:my-0 imgBg" :style="{ backgroundImage: bgImage }">
      <div class="container px-4 mx-auto py-2 md:py-18 px-2 lg:px-8">
        <div class="flex flex-col my-12 sm:flex-row py-4">
          <!-- Left Side-->
          <div class="lg:w-2/5 sm:w-1/2 text-mau-secondary-900 px-8 mb-8">
            <div class="">
              <slot name="left">
                <div class="flex justify-center">
                  <ParagraphHighlight
                    :content="content"
                    :isSize="true"
                    :isDescription="false"
                    :isRow="true"
                  />
                </div>
              </slot>
            </div>
          </div>
          <!-- End Left Side-->

          <!-- Right Side with List and button -->
          <div class="lg:w-3/5 sm:w-1/2 lg:px-0 px-8 md:py-0 py-8">
            <div class="2xl:pr-12 xl:pr-12">
              <slot name="right">
                <!-- Start Row -->

                <div class="lg:grid hidden grid-cols-3 gap-12 gap-8 md:px-0">
                  <div
                    v-for="partner in content.carousel"
                    :key="partner.name"
                    class=""
                  >
                    <ImageModal :image="partner.image" />
                  </div>
                </div>
                <!-- End Row -->
                <div class="lg:hidden block mx-auto w-full">
                  <ImageCarouselSingle :images="content.carousel" />
                </div>
                <a
                  class="flex justify-center py-5"
                  href="/Knowledge Keeps Us Safe - MAU Lapor Predator Infographic.pdf"
                  download=""
                >
                  <p
                    class="
                      md:px-4
                      px-3
                      font-display font-medium
                      text-yellow-50
                      lg:text-lg
                      text-base
                      hover:underline
                      max-w-none
                    "
                  >
                    Download (All)
                  </p>
                </a>
              </slot>
            </div>
          </div>
          <!--End Right side with Pic -->
        </div>
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


