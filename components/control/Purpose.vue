<template>
  <div class="h-full container mx-auto  py-8 lg:py-16 px-4 ">
    <HeadingControl :title="content.title" />

    <div class="h-full py-6 md:px-3 px-2">
      <nuxt-content
        class=" font-body font-medium  px-2 prose prose-black prose-3xl lg:prose-xl max-w-none"
        :document="content"
      />
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
  },
}
</script>

<style scoped>
.heightMin {
  min-height: 90vh;
}
</style>


