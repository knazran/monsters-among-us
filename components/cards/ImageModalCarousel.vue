<template>
  <div class="">
    <img
      class="
       w-full 
       
      "
      :src="image"
      alt="Poster"
      v-on:click="toggleModal()"
    />
    <!-- Show modal -->
    <div
      v-if="showModal"
      v-on:click="toggleModal()"
      class="
      my-4
        cursor-pointer
        align-middle
        overflow-x-hidden overflow-y-auto
        fixed
        inset-0
        z-50
        outline-none
        focus:outline-none
        justify-center
        items-center
        flex
        px-12
      "
    >
      <div class="relative w-auto my-6 mx-auto max-w-6xl">
        <!--content-->
        <div
          class="
            border-0
            rounded-lg
            shadow-lg
            relative
            flex flex-col
            w-full
            bg-white
            outline-none
            focus:outline-none
          "
        >
          <!--body-->
          <!-- <div class="relative p-6 flex-auto">
              <p class="my-4 text-xs leading-relaxed">
                <strong>Bio: </strong> {{ description }}
              </p>
            </div> -->
          <img class=" object-cover rounded-sm max-h-screen" :src="image" />
          <!--end body -->
        </div>
        <!--end content-->
      </div>
    </div>

    <!-- Show modal -->
  

    <div v-if="showModal" class="opacity-50 absolute min-h-screen  inset-0 z-40 bg-black"></div>
  </div>
</template>
     <script>
export default {
  data() {
    return {
      showModal: false,
    }
  },
  props: {
    image: {
      type: String,
    },
  },

  methods: {
    toggleModal: function () {
      this.showModal = !this.showModal
      if (this.showModal) {
        document.body.style.overflow = 'hidden'
      }
      if (!this.showModal) {
        document.body.style.overflow = 'visible'
      }
    },
  },
}
</script>
<style>
</style>