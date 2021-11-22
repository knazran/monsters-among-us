<template>
  <div class="container">
    <HeadingControl :title="content.title" />
    <div class="flex justify-center">
      <p>{{ content.description }}</p>
    </div>
    <div class="py-4">
      <NuxtLink :to="content.link">
        <div class="flex transform justify-center scale-75 hover:scale-100">
          <SimpleThumbnailCard :is-button="false" :image="content.image" />
        </div>
      </NuxtLink>
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
#describe {
  font-size: 1.8rem;
}
</style>


