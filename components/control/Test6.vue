<template>
  <div class="container px-5">

    <HeadingControl :title="content.title" />
    <div class="flex justify-center">
      <p>{{ content.description }}</p>
    </div>
    <div class="py-4">
        <div class="flex justify-center ">
          <div class="transform  scale-100 hover:scale-105">
                  <NuxtLink :to="content.link">

          <SimpleThumbnailCard :is-button="false" :image="content.image" />
                </NuxtLink>

          </div>
        </div>
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


