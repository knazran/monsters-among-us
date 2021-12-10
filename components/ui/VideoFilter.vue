<template>
  <div class=" mx-auto ">
    <iframe
     width="200" height="350"
      style="background-color: #FFFFFF"
      :src="src"
      :title="title"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture "
      frameBorder="0"
      allowFullScreen
    >
    Browser not compatible.
    </iframe>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>
