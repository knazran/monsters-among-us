<template>
  <div class="h-screen sm:my-0 my-12 mt-72 imgBg box" :style="{ backgroundImage: bgImage }"  > 
    <div class="container mx-auto py-2 md:py-18 px-2 sm:px-6 lg:px-8">
    <HeadingControl :title="content.title" />

    <div class="flex flex-col md:flex-row py-4">
      <!-- Left Side-->
      <div class="md:w-1/2 text-mau-secondary-900 px-8 mb-8">
        <div class="">
          <slot name="left">
            <div class="flex justify-center">
              <ParagraphHighlight :content="content" />
              <!-- <nuxt-content
                class="
                  md:px-4
                  px-3
                  prose prose-black prose-md
                  lg:prose-lg
                  max-w-none
                "
                :document="content" 
              /> !-->
            </div>
          </slot>
        </div>
      </div>
      <!-- End Left Side-->

      <!-- Right Side with List and button -->
      <div class="md:w-1/2 lg:px-0 px-8 md:py-0 py-8">
        <div class="2xl:pr-12 xl:pr-12">
          <slot name="right">
            <!-- <div class="xl:grid hidden xl:grid-cols-3 gap-12 px-0 my-2 px-6">
              <NuxtLink
                v-for="carousel in content.carousel"
                :key="carousel.name"
                class="
                  max-h-64
                  bg-white
                  rounded-lg
                  shadow-lg
                  border-2 border-mau-purple-500
                  p-4
                  flex
                  justify-center
                "
                :to="carousel.image"
              >
                <img
                  class="w-full object-contain rounded-lg"
                  :src="carousel.image"
                />
              </NuxtLink>
            </div> -->
            <div class=" mx-auto lg:w-96 w-80">
              <ImageCarouselSingle :images="content.carousel" />
            </div>
            <NuxtLink class="flex justify-center py-5" to="/home">
              <p
                class="
                  md:px-4
                  px-3
                  prose prose-black prose-md
                  lg:prose-lg
                  hover:underline
                  max-w-none
                "
              >
                Download All
              </p>
            </NuxtLink>
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
.imgBg{
   background-size: cover; 
   height:100%;
   
   
   
}

</style>


