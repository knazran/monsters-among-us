<template>
  <!-- right timeline -->
  <div class="my-5 w-full md:mx-1 mx-16 ">
    <div class="w-96 flex justify-center items-center">
      <div
        class="
          w-96
          rounded-20
          cursor-pointer
          shadow-lg
          overflow-hidden
          hover:shadow-xl
          transform
          hover:scale-105
          duration-500
        "
      >
        <img class="h-64 w-full object-cover rounded-t-20" :src="image" alt="" />
        <div class="h-96 p-4 bg-mau-primary-100">
          <h1 class="mt-4 font-normal text-justify text-base text-mau-primary-700">{{ blurb }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blurb: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
}
</script>




  