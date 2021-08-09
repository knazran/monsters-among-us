<template>
  <div>
    <h2 class="prose prose-sm lg:prose-lg xl:prose-2xl  text-mau-primary-700 font-semibold mb-6">
      {{ title }}
    </h2>
    <div>
      <p
        class="text-justify prose prose-sm lg:prose-lg xl:prose-xl  text-mau-primary-700 font-light"
      >
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    text: {
      type: String,
    },
  }
}
</script>