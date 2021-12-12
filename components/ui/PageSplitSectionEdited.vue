<template>
  <div class="container h-full mx-auto md:flex md:items-center">
    <div class="w-full md:w-1/2  px-6 md:mb-0">
      <slot name="default"></slot>
    </div>
    <div class="w-full md:w-1/2 xl:px-6 md:py-12 py-2 justify-center flex flex-row">
      <img
        v-if="img2 !== ''"
        class=" object-contain  h-36 sm:h-48 lg:h-64 rounded-lg"
        :src="img2"
      />
       <img
        v-if="img !== ''"
        class=" object-contain   h-28 sm:h-36 lg:h-48 rounded-lg"
        :src="img"
      />
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: '',
    },
    img2: {
      type: String,
      default: '',
    }
  },
  computed: {
    sectionImage() {
      const imgUrl = new URL(`../../static/img/${this.img}`, import.meta.url)
      return imgUrl
    },
  },
}
</script>