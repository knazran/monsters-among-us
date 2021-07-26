<template>
  <div
    class="
      rounded-md
      shadow-lg
      drop-shadow-xl
      border border-mau-primary-200
      flex
    "
  >
    <div class="w-2/5">
      <img
        class="h-full rounded-l object-cover max-h-80"
        src="https://picsum.photos/500"
      />
    </div>
    <div class="w-3/5 px-6 py-4">
      <div>
        <h4 class="text-lg md:text-xl text-mau-primary-700 font-semibold">
          {{ name }}
        </h4>
        <p class="text-sm text-mau-primary-500 font-light mb-6">{{ title }}</p>
        <p class="text-sm text-mau-primary-500 font-light mb-6">
          {{ blurb }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    blurb: {
      type: String,
      required: true,
    },
  },
}
</script>