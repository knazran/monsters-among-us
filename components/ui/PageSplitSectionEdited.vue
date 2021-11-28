<template>
  <div class="container h-full mx-auto md:flex md:items-center my-8 md:my-18">
    <div class="w-full md:w-1/2  px-6 mb-4 md:mb-0">
      <slot name="default"></slot>
    </div>
    <div class="w-full md:w-1/2 xl:px-6 py-12 justify-center flex flex-row">
      <img
        v-if="img2 !== ''"
        class=" object-contain  h-36 lg:h-64 rounded-lg"
        :src="img2"
      />
       <img
        v-if="img !== ''"
        class=" object-contain   h-28 lg:h-48 rounded-lg"
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