<template>
  <div>
    <h3 class="text-xl text-mau-primary-700 font-bold tracking-wider">
      {{ title }}
    </h3>
    <p class="py-4 text-lg text-mau-primary-700 font-light">
      {{ description }}
    </p>
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
  },
}
</script>