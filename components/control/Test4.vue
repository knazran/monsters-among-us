<template>
  <div class="h-screen py-12">
    <HeadingControl :title="content.title" />

    <PageSplitSectionEdited  :img="content.image">
      <nuxt-content
        class="md:px-4 px-3 prose prose-black prose-md lg:prose-lg max-w-none"
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


