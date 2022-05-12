<template>
  <div class="relative w-full">
    <img class="h-96 w-80 mx-auto" :src="content.link" />

    <div class="absolute inset-0 h-full py-6 xs:px-24">
      <ImageCarouselSingle :images="content.purpose" :isText="true" />
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
