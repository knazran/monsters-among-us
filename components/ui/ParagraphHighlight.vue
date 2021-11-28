<template>
  <div class="relative h-full w-full">
    <img v-if="isSize" class="sm:min-h-56 h-64 mx-auto" :src="content.link" />
    <img v-if="!isSize" class="sm:h-96 h-80 mx-auto" :src="content.link" />

    <div class="absolute w-80 flex items-center inset-0 mx-auto">
      <nuxt-content
        v-if="!isDescription && !isRow"
        class="
          font-body font-medium
          lg:px-1
          lg:mt-2
          sm:px-6
          px-3
          ml-1
          text-black
          lg:text-lg
          text-sm
        "
        :document="content"
      />
      <nuxt-content
        v-if="!isDescription && isRow"
        class="
          font-body font-medium
          lg:px-8 lg:mt-1
          sm:px-8
          px-8
          text-black
          lg:text-lg
          text-sm
          max-w-none
        "
        :document="content"
      />
      <p
        v-if="isDescription"
        class="font-body font-medium px-12 lg:px-6 text-sm lg:text-base"
      >
        {{ content.description }}
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
    isDescription: {
      type: Boolean,
      default: false,
    },
    isSize: {
      type: Boolean,
      default: false,
    },
    isRow: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
