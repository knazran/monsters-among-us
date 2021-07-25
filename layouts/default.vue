<template>
  <div>
    <transition name="fade">
      <div
        v-if="showOverlayMenu"
        class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>
    </transition>
    <SlideOverMenu/>
    <NavHeader />
    <PanelOne />
    <PanelTwo />
     <PanelThree />
     <PanelFour />
      <PanelFive />
      <PanelSix />
      <PanelSeven />


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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>