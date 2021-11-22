<template>
  <div class="flex flex-col md:flex-row py-4">
    <!-- Left Side-->
    <div class="md:w-1/2 text-mau-secondary-900 px-8 mb-8">
      <div class="">
        <slot name="left">
          <div class="flex justify-center">
            <TextHighlight :title="content.title1" />
          </div>
          <div class="w-full">
            <ImageCarouselSingle :images="content.carousel" />
          </div>
        </slot>
      </div>
    </div>
    <!-- End Left Side-->

    <!-- Right Side with List and button -->
    <div class="md:w-1/2 lg:px-0 px-8 md:py-0 py-8">
      <div class="2xl:pr-12 xl:pr-12">
        <slot name="right">
          <div class="flex justify-center">
            <TextHighlight :title="content.title2" />
          </div>
          <div class="w-full">
            <ImageCarouselSingle :images="content.carousel2" />
          </div>
        </slot>
      </div>
    </div>
    <!--End Right side with Pic -->
  </div>
</template>


<script>
export default {
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
</style>


