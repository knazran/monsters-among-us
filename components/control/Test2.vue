<template>

  <div class="h-screen sm:my-0 my-12 mb-56">


    <HeadingControl :title="content.title" />

    <div  class="w-full h-full md:px-3 px-2">

      <nuxt-content
        class="md:px-4 px-3 prose prose-black prose-xs lg:prose-lg max-w-none"
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

</style>


