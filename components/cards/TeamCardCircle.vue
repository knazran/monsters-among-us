<template>
  <!-- isDesktop -->
  <div>
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
          lg:hover:-translate-y-2
          h-96
          w-96
          border-2 border-mau-primary-700
          rounded-md
        "
      >
        <img
          class="object-cover h-96 w-96 mb-2 shadow"
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
            bg-black bg-opacity-75
            opacity-0
            hover:opacity-100
          "
        >
          <h6 class="mb-4 tracking-wide text-left text-gray-400">
            {{ description }}
          </h6>
        </div>
      </div>

      <!-- End Overlay -->
      <!--Name & Title -->
      <div class="flex flex-col items-center my-4">
        <h4 class="text-xl md:text-xl text-mau-primary-700 font-semibold">
          {{ name }}
        </h4>
        <p class="text-sm sm:text-md text-mau-primary-500 font-light mb-6">
          {{ title }}
        </p>
      </div>
      <!--Name & Title -->
    </div>
    <!-- End isDesktop -->
    <!-- Not isDesktop -->
    <div class="block md:hidden">
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
      <div class="flex flex-col items-center my-4">
        <p class="text-lg font-bold">{{ name }}</p>
        <p class="text-sm text-gray-800">{{ title }}</p>
      </div>

      <div
        v-if="showModal"
        class="opacity-50 fixed inset-0 z-40 bg-black"
      ></div>
    </div>
    <!-- End Not isDesktop -->
  </div>
</template>
<script>
export default {
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
}
</script>
<style scoped>
h6 {
  font-size: 0.9rem;
  line-height: 1rem;
}
</style>

