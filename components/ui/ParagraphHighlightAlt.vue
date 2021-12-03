<template>
  <div class="relative h-full w-full">
    <img v-if="!isLarger" class="h-16 mx-auto" :src="content.link_heading" />
    <img v-if="isLarger" class="h-20 mx-auto" :src="content.link_heading" />


    <div class="absolute  flex justify-center items-center inset-0 mx-auto">
      <p class="px-6 text-lg text-black lg:text-xl font-body font-bold">
        {{ content.title }}
      </p>
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
    isLarger: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
