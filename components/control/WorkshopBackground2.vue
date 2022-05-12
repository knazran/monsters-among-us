<template>
  <div class="relative h-96 py-8 " :style="{ backgroundImage: bgImage }">
    <PageSection>
      <div class="flex h-80 justify-center items-center">
        <nuxt-content
          class="
            text-justify
            font-body font-medium
            px-2
            lg:text-xl
            md:text-lg
            2xs:text-base
            3xs:text-xs
            max-w-none
            z-50
          "
          :document="content"
        />
      </div>
      <img
        class="absolute left-4 lg:-bottom-16  sm:-bottom-12 -bottom-8 z-30 lg:h-80 sm:h-72 h-48 rounded-lg"
        :src="content.image2"
      />
    </PageSection>
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


