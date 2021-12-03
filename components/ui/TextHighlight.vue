<template>
  <div class="relative h-full w-full">
    <img class="h-20 mx-auto" src="~/static/img/in-control/blue-h.png" />

    <div class="absolute flex justify-center items-center inset-0 mx-auto">
      <p class="px-6 text-lg text-white lg:text-2xl font-body font-bold">
        {{ title }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
