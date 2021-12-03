<template>
  <div class="relative  w-full">
    <img  class="h-96   mx-auto" :src="content.link" />

    <div class="absolute inset-0 h-full py-6 md:px-3 px-2">
      <ImageCarouselSingle  :images="content.purpose" :isText=true />

      <!-- <nuxt-content
        class="
          font-body font-medium
          lg:px-1
          lg:mt-2
          sm:px-6
          px-5
          ml-4
          text-black
          lg:text-lg
          text-sm
        "
        :document="content"
      /> -->
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
    isDescription: {
      type: Boolean,
      default: false,
    },
    isSize: {
      type: Boolean,
      default: false,
    },
    isRow: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
