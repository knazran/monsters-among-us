<template>
  <!-- isDesktop == True -->
  <div>
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
        h-96
        w-96
        border-2 border-mau-primary-700
        rounded-md
      "
    >
      <img class="object-cover h-96 w-96 mb-2 shadow" :src="img" alt="Person" />
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
  <!-- End True -->
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
  font-size: 0.9rem;
  line-height: 1rem;
}
</style>

