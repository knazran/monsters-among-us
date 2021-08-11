<template>
  <!-- Instruction for AdvancedThumbnailCard-->
  <!-- props:title,isLarge,content,title,author,date,isBlog,img-->
  <!-- title, isLarge,isBlog are required -->
  <!-- isBlog for Tab 4 -->
  <!-- if isLarge, required title,author,date,content-->
  <div
    class="flex flex-col rounded-xl overflow-hidden shadow-lg h-full bg-white"
    :class="isBlog ? 'max-w-lg' : 'max-w-xs'"
  >
    <img class="object-cover h-72 w-full" :src="img" />
    <div class="p-6 flex-grow">
      <div class="font-medium xl:text-xl text-base mb-2">
        {{ title }}
      </div>
      <div v-if="!isLarge" class="font-bold text-xl xl:my-48 my-24"></div>

      <div
        v-if="isLarge"
        class="
          text-gray-700
          xl:text-base
          text-sm
          overflow-clip overflow-hidden
          h-36
        "
      >
        <nuxt-content :document="content" />
      </div>
    </div>
    <!-- Need to edit -->
    <div v-if="isLarge" class="px-6 pt-4 pb-2 flex justify-between">
      <span
        class="
          inline-block
          font-base
          py-1
          xl:text-sm
          text-mau-secondary-950 text-xs
          mb-2
          md:h-10 md:w-24
          lg:w-full
        "
        >{{ author }}</span
      >
      <span
        class="
          inline-block
          font-base
          py-1
          lg:visible
          md:invisible
          visible
          xl:text-sm
          text-xs text-mau-secondary-950
          px-2
          mb-2
        "
        >{{ formattedPublishedDate }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    isBlog: {
      type: Boolean,
      required: false,
    },
    content: {
      type: Object,
    },
    author: {
      type: String,
    },
    date: {
      type: String,
    },
    isLarge: {
      type: Boolean,
      required: true,
    },
    img: {
      type: String,
      default:
        'https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_2240,c_limit/phonepicutres-TA.jpg',
    },
  },
  computed: {
    formattedPublishedDate() {
      const dateString = Date.parse(this.date)
      const today = new Date(dateString)

      return today.toLocaleDateString('en-GB')
    },
  },
}
</script>
