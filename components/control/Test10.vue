<template>
  <div class="">
    <HeadingControl :title="content.title" />

    <div
      class="
        grid
        md:grid-cols-3
        xl:grid-cols-5
        md:gap-12
        gap-8
        md:px-0
        my-8
        px-6
      "
    >
      <div
        v-for="partner in content.partners"
        :key="partner.name"
        class="
          h-56
          w-56
          bg-white
          rounded-full
          items-center
          p-4
          flex
          justify-center
        "
      >
        <img
          class="w-full object-contain rounded-full h-36 w-36"
          :src="partner.image"
        />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
#describe {
  font-size: 1.8rem;
}
</style>


