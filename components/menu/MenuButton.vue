<template>
    <button
      class="w-full hover:bg-mau-primary-500 hover:border-t-2 hover:border-b-2 hover:border-mau-primary-800 py-4 text-md lg:text-lg text-white px-4 md:px-6 text-left"
      @click="goToLink"
    >
      {{ text }}
    </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
  methods: {
    goToLink() {
      this.$router.push({ path: this.to })
      this.$store.commit('toggleOverlayMenu')
    },
  },
}
</script>