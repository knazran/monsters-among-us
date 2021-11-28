<template>
  <div class="sm:min-h-screen max-h-screen py-2 m:py-12 px-4">
    <HeadingControl :title="content.title" />

    <PageSplitSectionEdited :img="content.image" :img2="content.image2">
      <nuxt-content
        class="px-3  font-body font-medium  px-2 prose prose-black prose-3xl lg:prose-xl max-w-none"
        :document="content"
      />
    </PageSplitSectionEdited>
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


