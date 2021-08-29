<template>
  <button
    class="
      rounded-lg
      bg-mau-secondary-900
      text-center text-white
      2xl:w-96
      xl:w-72
      w-64
      py-2
      glow-button
    "
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: String,
  },
}
</script>

<style scoped>
.glow-button {
  color: rgba(255, 255, 255, 1);
  box-shadow: 0 0px 40px rgb(247, 159, 27);
}
</style>