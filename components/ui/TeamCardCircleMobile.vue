<template>
  <div class="">
    <img
      class="
        object-cover
        h-96
        w-96
        mb-2
        shadow
        cursor-pointer
        border-2 border-mau-primary-700
        rounded-md
      "
      :src="img"
      alt="Person"
      v-on:click="toggleModal()"
    />
    <!-- Show modal -->
    <div
      v-if="showModal"
      v-on:click="toggleModal()"
      class="
        cursor-pointer
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
          <div class="relative p-6 flex-auto">
            <p class="my-4 text-blueGray-500 text-sm leading-relaxed">
              <strong>Bio: </strong> {{ description }}
            </p>
          </div>
          <!--end body -->
        </div>
        <!--end content-->
      </div>
    </div>

    <!-- Show modal -->
    <div class="flex flex-col items-center my-4">
      <p class="text-lg font-bold">{{ name }}</p>
      <p class="text-sm text-gray-800">{{ title }}</p>
    </div>

    <div v-if="showModal" class="opacity-50 fixed inset-0 z-40 bg-black"></div>
  </div>
  <!-- </div> -->
</template>
<script>
export default {
  data() {
    return {
      showModal: false,
    }
  },
  props: {
    name: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    img: {
      type: String,
    },
  },
  methods: {
    toggleModal: function () {
      this.showModal = !this.showModal
    },
  },
  //  watch: {
  //   showModal: function() {
  //     if(this.showModal){
  //       document.documentElement.style.overflow = 'hidden'
  //       return
  //     }

  //     document.documentElement.style.overflow = 'auto'
  //   }
  // }
}
</script>
<style scoped>
h6 {
  font-size: 0.9rem;
  line-height: 1rem;
}
</style>