<template>
  <div class="h-88 py-8 " :style="{ backgroundImage: bgImage }">
    <div class="flex h-80 justify-center items-center px-6 sm:px-24">
      <nuxt-content
        class="
        
          text-justify
          font-body font-medium
          px-2
          
         lg:text-2xl
         text-base
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


