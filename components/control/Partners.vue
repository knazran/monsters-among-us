<template>
  <div class="max-h-screen py-4">

    <HeadingControl title="Partners and Sponsors
" />


    <div
      class="
      
        grid
        sm:grid-cols-3
        gap-12
        gap-8
        sm:px-0
        px-6
        py-6
        grid-cols-2
      
       items-center
      "
    >
      <div
        v-for="partner in content.partners"
        :key="partner.name"
        class="
        sm:h-40
        sm:h-40
          lg:h-56
          h-32
          w-32
          lg:w-56
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


