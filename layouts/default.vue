<template>
  <div>
    <div
      v-if="showOverlayMenu"
      class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      aria-hidden="true"
    ></div>
    <NavHeader />
    <Nuxt />
  </div>
</template>

<script>
export default {
  computed: {
    showOverlayMenu() {
      return this.$store.state.overlayMenu
    },
  },
}
</script>