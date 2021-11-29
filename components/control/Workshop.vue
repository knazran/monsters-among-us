<template>
  <div class="container px-4">
    <HeadingControl :title="content.title" />
    <div
      class="
        py-4
        px-4
        text-center
        flex
        justify-center
        text-lg
        lg:text-xl
        font-body font-medium
      "
    >
      <p>{{ content.description }}</p>
    </div>
    <div class="py-6">
      <div class="flex justify-center">
        <div class="transform h-72 rounded-full scale-100 hover:scale-105">
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


