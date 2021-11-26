<template>
  <div class="flex justify-center py-4">
    <h3 class="effect 2xl:text-7xl	 xl:text-5xl  text-4xl text-center font-display font-bold text-mau-primary-950">
      {{ title }}
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
<style scoped>
.effect {
  text-shadow: -4px 2px rgba(247, 240, 108, 0.64);
}
</style>
