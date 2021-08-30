<template>
  <!-- right timeline -->
  <div
    class="
      my-4
      flex
      md:flex-row
      md:justify-between
      flex-col
      items-center
      w-full
      right-timeline
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
    <!--Card-->
    <div
      class="
        z-20
        order-1
        my-3
        md:my-0
        rounded-20
        shadow-xl
        md:w-5/12
        w-full
        bg-mau-purple-300
        border-mau-purple-500 border-2
      "
    >
      <img :src="journey.img" class="w-full h-64 rounded-t-20 shadow-md object-cover" />
      <div class="px-6 py-8 ">
        <nuxt-content
        class="w-full prose prose-lp prose-sm lg:prose-md"
        :document="journey"
      />
      </div>
      
    </div>
        <!--Card-->

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




  