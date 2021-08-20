<template>
  <!-- left timeline -->
  <div
    class="
      flex
      md:justify-between
      md:flex-row-reverse
      flex-col
      items-center
      w-full
      left-timeline
    "
  >
    <div class="order-1 w-5/12"></div>

    <div
      class="
        z-20
        flex
        items-center
        order-1
        bg-mau-purple-700
        shadow-xl
        w-6
        h-6
        rounded-full
      "
    ></div>
    <div
      class="
        mt-6
        z-20
        order-1
        bg-white
        rounded-lg
        md:my-0
        shadow-xl
        md:w-5/12
        w-full
        px-6
        py-4
        border-2 border-mau-purple-500
      "
    >
      <img :src="journey.img" class="w-90 h-90 rounded-lg shadow-md mb-4" />

      <nuxt-content
        class="w-full prose prose-lp prose-sm lg:prose-lg"
        :document="journey"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    journey: {
      type: Object,
      required: true,
    },
  },
}
</script>

