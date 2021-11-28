<template>
  <div class="h-88" :style="{ backgroundImage: bgImage }">
    <div class="flex h-80 justify-center items-center container px-4">
      <nuxt-content
        class="
          md:px-16
          font-body font-medium
          px-2
          prose prose-black prose-3xl
          lg:prose-xl
          max-w-none
        "
        :document="content"
      />
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
    bgImage: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
#describe {
  font-size: 1.8rem;
}
</style>


