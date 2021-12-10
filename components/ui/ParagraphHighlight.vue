<template>
  <div class="relative h-full w-full">
    <img v-if="isSize" class="sm:h-80 h-72 mx-auto" :src="content.link" />
    <img v-if="!isSize" class="sm:h-96 h-80 mx-auto" :src="content.link" />

    <div class="absolute sm:w-80  w-56 flex items-center inset-0 mx-auto">
      <nuxt-content
        v-if="!isDescription && !isRow"
        class="
          lg:top-3
          md:top-4
          sm:top-1
          top-3
          lg:left-6
          md:left-2
          font-body font-medium
          lg:px-0 lg:mt-2
          md:px-7
          sm:px-0
          px-1
          md:ml-6
          ml-8
          lg:ml-8
          text-black
          md:text-sm
          lg:text-lg
          sm:text-base
          text-xs
        "
        :document="content"
      />
      <nuxt-content
        v-if="!isDescription && isRow"
        class="
        top-4
          font-body font-medium
          lg:left-3
          lg:px-2 lg:mt-1
          lg:mr-0
          sm:px-12
          sm:mr-8
          lg:ml-6
          px-3
          md:ml-1
          ml-4
          text-black
          lg:text-lg
          sm:text-base
          text-xs
          max-w-none
        "
        :document="content"
      />
      <p
        v-if="isDescription"
        class="
          font-body font-medium
          px-8
          ml-2
          lg:px-6
          text-xs
          lg:text-lg
          sm:text-base
        "
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
