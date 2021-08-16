<template>
  <div class="sm:flex">
    <div class="flex justify-center sm:justify-start w-full sm:w-2/5 lg:w-1/5">
      <!-- <img
        class="h-full rounded-l object-cover max-h-96"
        src="https://picsum.photos/500"
      /> -->
      <img
        class="
          w-full
          object-cover
          rounded-xl
          shadow-lg
          drop-shadow-xl
          border-2 border-mau-primary-700
          max-w-96
        "
        :src="image"
      />
    </div>
    <div class="w-full sm:w-3/5 lg:w-4/5 px-6 py-4 sm:py-0">
      <div>
        <h4 class="text-xl md:text-xl text-mau-primary-700 font-semibold">
          {{ name }}
        </h4>
        <p class="text-sm sm:text-md text-mau-primary-500 font-light mb-6">
          {{ title }}
        </p>
        <p class="text-md text-mau-primary-500 font-light mb-6">
          {{ blurb }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    blurb: {
      type: String,
      required: true,
    },
  },
}
</script>
