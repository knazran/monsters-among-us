<template>
  <div class="">
    <HeadingControl :title="content.title" />

    <PageSplitSection :reverse="true" :img="content.image">
      <p
        class="
          md:px-4
          px-3
          prose prose-black prose-md
          lg:prose-lg
          md:py-0
          py-4
          max-w-none
        "
      >
        {{ content.description }}
      </p>
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


