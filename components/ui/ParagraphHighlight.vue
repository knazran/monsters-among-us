<template>
  <div class="relative h-full w-full">
    <img v-if="isSize" class="h-56 mx-auto" :src="content.link" />
    <img v-if="!isSize" class="sm:h-88 h-72 mx-auto" :src="content.link" />

    <div class="absolute w-80 flex items-center inset-0 mx-auto">
      <nuxt-content
        v-if="!isDescription && !isRow"
        class="
          lg:px-2 lg:ml-7
          ml-1
          px-9
          text-black
         text-sm
          text-xs
          font-medium
        "
        :document="content"
      />
      <nuxt-content
        v-if="!isDescription && isRow"
        class="
          px-16
          mt-3
          prose prose-black prose-sm
          lg:prose-base
          max-w-none
          font-medium
        "
        :document="content"
      />
      <p
        v-if="isDescription"
        class="
          px-12
          lg:px-6
         text-sm
         lg:text-base
          font-medium
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
