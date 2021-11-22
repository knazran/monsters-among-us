<template>

  <div class="h-80 " :style="{ backgroundImage: bgImage }">

    <div class="flex h-80 justify-center items-center">
      <nuxt-content
        class="
          md:px-12
          px-3
          prose prose-black prose-md
          lg:prose-lg
          md:py-0
          py-4
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
    bgImage:{
        type: String,
        default:""
    }
  },
}
</script>

<style scoped>
#describe {
  font-size: 1.8rem;
}
</style>


