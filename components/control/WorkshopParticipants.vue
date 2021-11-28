<template>
  <div class="py-5 px-4">
    <div class="flex justify-center">
      <TextHighlight :title="content.title1" />
    </div>
    <div class="flex justify-center">
      <div
        class="
        w-full
        px-4
          mb-8
          py-6
          grid
          sm:grid-cols-3
          grid-cols-2 grid-flow-row
          gap-6
          auto-rows-auto
        "
      >
        <ul
          class="class=list-outside font-body font-medium list-disc"
          v-for="participant in content.participants"
          :key="participant.name"
        >
          <li class="">
            <div class="font-medium">{{ participant.name }}</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex justify-center px-5">
      <TextHighlight :title="content.title2" />
    </div>
    <div class="w-full py-6">
      <ImageCarouselSingle :images="content.carousel2" />
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


