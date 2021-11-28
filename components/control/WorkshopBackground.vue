<template>
  <div class="px-4">

    <HeadingControl :title="content.title" />

    <PageSplitSection :reverse="true" :img="content.image">
        <div class="my-6 md:my-0">
        <ParagraphHighlight :content="content" :isDescription="true"/>
        </div>
        <!-- {{ content.description }} -->
    </PageSplitSection>
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


