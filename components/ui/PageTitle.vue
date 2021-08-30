<template>
  <div class="flex flex-col items-center md:items-start">
    <h3
      class="
        text-3xl
        2xl:text-4xl
        text-mau-primary-700
        font-semibold
        tracking-wider
        text-center
        md:text-left
      "
    >
      {{ title }}
    </h3>
    <p
      class="
        text-lg text-mau-primary-600
        mb-4
        font-light
        text-center
        md:text-left
      "
    >
      {{ description }}
    </p>
    <div
      v-if="center"
      class="rounded-full mx-20 bg-mau-secondary-900 w-24 h-1"
    ></div>

    <div v-else class="rounded-full bg-mau-secondary-900 w-24 h-1"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    center: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
