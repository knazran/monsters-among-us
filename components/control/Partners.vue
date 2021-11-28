<template>
  <div class="min-h-screen">

    <HeadingControl title="Partners and Sponsors
" />


    <div
      class="
      
        grid
        sm:grid-cols-3
        gap-12
        gap-8
        px-4
        py-6
        grid-cols-2
      
       items-center
      "
    >
      <div
        v-for="partner in content.partners"
        :key="partner.name"
        class="
          sm:h-56
          h-48
          w-48
          sm:w-56
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


