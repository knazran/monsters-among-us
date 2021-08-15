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
          <!--header-->
          <div
            class="
              flex
              items-start
              justify-between
              p-5
              border-b border-solid border-blueGray-200
              rounded-t
            "
          >
            <h3 class="text-3xl font-semibold">Profile</h3>
            <button
              class="
                p-1
                ml-auto
                bg-transparent
                border-0
                text-black
                opacity-5
                float-right
                text-3xl
                leading-none
                font-semibold
                outline-none
                focus:outline-none
              "
              v-on:click="toggleModal()"
            >
              <span
                class="
                  bg-transparent
                  text-black
                  opacity-5
                  h-6
                  w-6
                  text-2xl
                  block
                  outline-none
                  focus:outline-none
                "
              >
                ×
              </span>
            </button>
          </div>
          <!--body-->
          <div class="relative p-6 flex-auto">
            <p class="my-4 text-blueGray-500 text-lg leading-relaxed">
              {{ description }}
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