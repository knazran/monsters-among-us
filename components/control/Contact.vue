<template>
  <div class=" max-h-screen py-2 m:py-12 px-4">
    <HeadingControl :title="content.title" />

    <PageSplitSectionEdited :img="content.image" :img2="content.image2">
      <nuxt-content
        class="  font-body font-medium  lg:text-2xl
        md:text-xl
         text-base max-w-none"
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


