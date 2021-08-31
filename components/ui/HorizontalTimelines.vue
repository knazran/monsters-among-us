<template>
  <!-- right timeline -->
  <div class="my-5 w-full md:mx-1 mx-2 cursor-default">
    <div class="sm:w-96 w-64 sm:-mx-40 mx-9">
      <div
        class="
          sm:w-96
          w-80
          cursor-default
          rounded-20x
          cursor-pointer
          shadow-lg
          overflow-hidden
          hover:shadow-xl
          transform
          hover:scale-104
          duration-500
        "
      >
        <img
          class="sm:h-64 h-56 cursor-default w-full object-cover rounded-t-20"
          :src="image"
          alt=""
        />
        <div class="cursor-default sm:h-96 h-88 p-4 bg-mau-primary-100">
          <h1
            class="mt-4 font-normal text-justify sm:text-base text-sm text-mau-primary-700"
          >
            {{ blurb }}
          </h1>
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




  