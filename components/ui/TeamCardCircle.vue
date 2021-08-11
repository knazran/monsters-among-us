<template>
  <div class="flex flex-col items-center">
    <!-- Overlay -->
    <div
      class="
        relative
        overflow-hidden
        transition
        duration-300
        transform
        rounded
        shadow-lg
        lg:hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      <img class="object-cover h-80 w-80 mb-2 shadow" :src="img" alt="Person" />
      <div
        class="
          absolute
          cursor-pointer
          inset-0
          flex flex-col
          justify-center
          px-3
          py-4
          text-center
          transition-opacity
          duration-300
          bg-black bg-opacity-75
          opacity-0
          hover:opacity-100
        "
      >
        <h6 class="mb-4 tracking-wide text-left text-gray-400">
          {{ description }}
        </h6>
      </div>
    </div>
    <!-- End Overlay -->
    <div class="flex flex-col items-center my-4">
      <p class="text-lg font-bold">{{ name }}</p>
      <p class="text-sm text-gray-800">{{ title }}</p>
    </div>
  </div>
  <!-- </div> -->
</template>
<script>
export default {
  props: {
    name: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    img: {
      type: String,
    },
  },
}
</script>
<style scoped>
h6 {
  font-size: 0.72rem;
  line-height: 0.8rem;
}
</style>

