<template>
  <div class="h-full container mx-auto py-4 px-4">
    <HeadingControl :title="content.title" />

    <div class="h-full py-4 md:px-3 px-2">
      <nuxt-content
        class="
          font-body font-medium
          px-2
          prose prose-black prose-lg
          lg:prose-xl
          max-w-none
        "
        :document="content"
      />
      <!-- <div class="sm:hidden block">
        <ParagraphHighlightBox :content="content" />
      </div>
      <nuxt-content
        class="
          sm:block
          hidden
          font-body font-medium
          px-2
          prose prose-black prose-lg
          lg:prose-xl
          max-w-none
        "
        :document="content"
      />
      <div class="sm:hidden block">
        <ParagraphHighlightBox :content="content" />
      </div> -->
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


