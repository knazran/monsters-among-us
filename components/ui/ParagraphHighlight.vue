<template>
  <div class="relative h-full w-full">
    <img v-if="isSize" class="sm:h-80 h-72 mx-auto" :src="content.link" />
    <img v-if="!isSize" class="sm:h-96 h-80 mx-auto" :src="content.link" />

    <div class="absolute sm:w-80 w-56 flex items-center inset-0 mx-auto">
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
          2xs:px-0
          3xs:px-6
          md:ml-4
          2xs:ml-8
          3xs:ml-2
          lg:ml-8
          text-black
          md:text-sm
          lg:text-lg
          sm:text-base
          2xs:text-xs
          3xs:text-2xs
        "
        :document="content"
      />
      <nuxt-content
        v-if="!isDescription && isRow"
        class="
          sm:w-3/4
          md:w-full
          top-4
          font-body font-medium
          lg:left-4 lg:px-8 lg:mt-1 lg:mx-5
          sm:px-6 sm:flex sm:justify-center
          2xs:px-3
          3xs:px-12
          md:ml-1
          2xs:ml-4
          3xs:ml-0
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
          2xs:px-8
          3xs:px-12
          2xs:ml-2
          3xs:ml-0
          lg:px-6
          text-xs
          lg:text-lg
          sm:text-base
          2xs:text-xs
          3xs:text-2xs
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
