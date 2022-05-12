<template>
  <!-- isDesktop -->
  <div class="px-2">
    <div class="hidden md:block">
      <!-- Overlay -->
      <div
        class="
          relative
          overflow-hidden
          transition
          duration-300
          transform
          rounded
          shadow-lg
          bg-white
          lg:hover:-translate-y-2 lg:h-96 lg:w-96
          sm:h-72 sm:w-72
          h-40
          w-40
          border-2 border-mau-primary-700
          rounded-md
        "
      >
        <img
          class="
            object-contain
            lg:h-96 lg:w-96
            sm:h-72 sm:w-72
            h-40
            w-40
            mb-2
            shadow
          "
          :src="img"
          alt="Person"
        />
        <div
          class="
            absolute
            cursor-pointer
            inset-0
            flex flex-col
            justify-center
            px-3
            py-4
            text-center
            transition-opacity
            duration-300
            bg-mau-primary-700 bg-opacity-95
            opacity-0
            hover:opacity-100
          "
        >
          <h6
            class="
              text-black
              font-body
              mb-4
              overflow-y-scroll
              sm:text-xs
              lg:text-base
              tracking-wide
              text-left text-white
            "
          >
            {{ description }}
          </h6>
        </div>
      </div>

      <!-- End Overlay -->
      <!--Name & Title -->
      <div class="my-4 lg:w-96 sm:w-72 w-40">
        <p class="text-xl text-center font-body font-semibold">
          {{ name }}
        </p>
      </div>
      <!--Name & Title -->
    </div>
    <!-- End isDesktop -->
    <!-- Not isDesktop -->

    <div class="block md:hidden">
      <img
        class="
          object-contain
          bg-white
          sm:h-40 sm:w-40
          2xs:h-32
          2xs:w-32
          3xs:h-24
                    3xs:w-24

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
            <div class="relative p-6 flex-auto">
              <p class="my-4 text-xs leading-relaxed">
                <strong>Bio: </strong> {{ description }}
              </p>
            </div>
            <!--end body -->
          </div>
          <!--end content-->
        </div>
      </div>

      <!-- Show modal -->
      <div class="flex flex-col items-center my-4 2xs:w-32 3xs:w-24">
        <p class="3xs:text-2xs 2xs:text-xs font-body font-medium text-center font-semibold">
          {{ name }}
        </p>
      </div>

      <div
        v-if="showModal"
        class="opacity-50 fixed inset-0 z-32 bg-black"
      ></div>
    </div>
    <!-- End Not isDesktop -->
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
    name: {
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
<style scoped>
/* h6 {
  font-size: 0.8rem;
  line-height: 1.2rem;
} */
</style>

