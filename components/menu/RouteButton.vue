<template>
     <button
              class="
                transform
                hover:scale-105
                rounded-xl
                bg-mau-primary-700
                text-center text-white
                2xl:w-64
                xl:w-52
                w-64
                xl:ml-4
                xl:mt-0
                mt-3
                py-2
              "
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
    //   this.$store.commit('toggleOverlayMenu')
    },
  },
}
</script>