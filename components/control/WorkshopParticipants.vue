<template>
  <div class="py-5 px-4">
    <div class="flex justify-center mt-6">
      <TextHighlight :title="content.title1" />
    </div>
    <div class="flex justify-center">
      <div
        class="
          w-full
          sm:px-4
          px-6
          mb-8
          py-6
          grid
          sm:grid-cols-3
          grid-cols-2 grid-flow-row
          gap-10
          auto-rows-auto
        "
      >
        <ul
          class="
            list-outside
            font-body font-medium
            list-disc
            lg:text-xl
            md:text-lg
            text-base
          "
          v-for="participant in content.participants"
          :key="participant.name"
        >
          <li class="">
            <div class="font-medium">{{ participant.name }}</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex justify-center px-5 mt-6">
      <TextHighlight :title="content.title2" />
    </div>
    <div class="w-full py-6">
      <div class="mx-auto">
        <ImageCarouselSingle :images="content.carousel2" />
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


