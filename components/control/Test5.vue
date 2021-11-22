<template>
  <div>

    <HeadingControl :title="content.title" />
    <div class="flex justify-center py-5">
    <TextHighlight :title="content.title" />
    </div>
    <div>
    <PageSplitSection :reverse="true" :img="content.carousel[0].image">
      <p
        class="
          md:px-4
          px-3
          prose prose-black prose-md
          lg:prose-lg
          md:py-0
          py-4
          max-w-none
        "
      >
        {{ content.title }}
      </p>
    </PageSplitSection>
    </div>
    <div class="py-4">
     <PageSplitSection :reverse="true" :img="content.carousel[0].image">
      <p
        class="
          md:px-4
          px-3
          prose prose-black prose-md
          lg:prose-lg
          md:py-0
          py-4
          max-w-none
        "
      >
        {{ content.title }}
      </p>
    </PageSplitSection>

        <div class="flex flex-col md:flex-row py-4">
      <!-- Left Side-->
      <div class="md:w-1/2 text-mau-secondary-900 px-8 mb-8">
        <div class="">
          <slot name="left">
            <div class="flex justify-center">
              <nuxt-content
                class="
                  md:px-4
                  px-3
                  prose prose-black prose-md
                  lg:prose-lg
                  max-w-none
                "
                :document="content"
              />
            </div>
          </slot>
        </div>
      </div>
      <!-- End Left Side-->

      <!-- Right Side with List and button -->
      <div class="md:w-1/2 lg:px-0 px-8 md:py-0 py-8">
        <div class="2xl:pr-12 xl:pr-12">
          <slot name="right">
            <div class="xl:grid hidden xl:grid-cols-3 gap-12 px-0 my-2 px-6">
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
            </div>
            <div class="xl:hidden block w-full">
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
  <!-- New Line -->
    <div class="w-full" >

      <PageSection id="milestone">
        <div class="w-full" >
          <div class="py-12">
            <PageTitle :title="timelineContent.title" />
          </div>
          <vue-horizontal class="horizontal" responsive :button="true">
            <div
              v-for="(info, index) in timelineContent.milestone"
              :key="info.title"
              class="sm:px-48 mx-24 px-2 cursor-default"
            >
              <button
                class="
                  cursor-default
                  relative
                  z-50
                  bg-mau-primary-700
                  rounded-md
                  py-1
                  px-4
                  left-40
                  sm:left-0
                "
              >
                <p class="text-center text-white text-lg">{{ info.year }}</p>
              </button>

              <div
                v-if="index < 4"
                class="
                  cursor-default
                  timeline
                  z-0
                  border-opacity-100 border-mau-primary-400 border
                  absolute
                  top-3
                  md:left-0
                  left-10
                "
              ></div>

              <HorizontalTimelines :blurb="info.blurb" :image="info.image" />
            </div>
          </vue-horizontal>
        </div>
      </PageSection>
      </div>
    </div>

</template>


<script>
import VueHorizontal from 'vue-horizontal'

export default {
    components: {
    VueHorizontal,
  },

  props: {
    content: {
      type: Object,
      required: true,
    },
    timelineContent: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
@media (min-width: 480px) {
  .timeline {
    width: 28rem !important;
  }
}
@media (min-width: 0px) {
  .timeline {
    width: 100rem !important;
  }
}
</style>


