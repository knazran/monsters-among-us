<template>
  <div class="   px-4 py-2" >
    <HeadingControl :title="content.title" />

    <PageSplitSectionEdited :img="content.image" :img2="content.image2">
      <nuxt-content
        class="  font-body font-medium  prose prose-black prose-3xl lg:prose-xl max-w-none"
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
    }
  },
}
</script>

<style scoped>
#describe {
  font-size: 1.8rem;
}
</style>


