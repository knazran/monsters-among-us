<template>
  <div class="relative h-full w-full">
    <img v-if="isSize" class="sm:min-h-56 h-48 mx-auto" :src="content.link" />
    <img v-if="!isSize" class="sm:h-96 h-80 mx-auto" :src="content.link" />

    <div class="absolute sm:w-80 w-56  flex items-center inset-0 mx-auto">
      <nuxt-content
        v-if="!isDescription && !isRow"
        class="
        top-1
          font-body font-medium
          lg:px-1
          lg:mt-2
          md:px-3
          sm:px-7
          px-1
          ml-4
          text-black
          lg:text-base
          text-xs
        "
        :document="content"
      />
      <nuxt-content
        v-if="!isDescription && isRow"
        class="
          font-body font-medium
          lg:px-2 lg:mt-1
          sm:px-4
          px-3
          ml-4
          text-black
          lg:text-base
          text-xs
          max-w-none
        "
        :document="content"
      />
      <p
        v-if="isDescription"
        class="font-body font-medium px-8 ml-2 lg:px-6 text-xs lg:text-base"
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
