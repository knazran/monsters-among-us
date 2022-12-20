<template>
  <div class="text-mau-primary-700 flex flex-col">
    <div class=" container mx-auto flex mt-5 md:my-18">
      <div class="w-2/3 sm:px-2 md:px-6 mb-4 md:mb-0">
        <NuxtLink :to="`blog/${slug}`">
          <div class="font-bold hover:underline text-base md:text-xl mb-2">
            {{ title }}
          </div>
        </NuxtLink>

        <div
          class="md:block hidden font-normal cursor-default text-xs md:text-base mb-4"
        >
          {{ description }}
        </div>

        <!-- Tags -->
        <div class="cursor-default mb-4  flex flex-row">
          <div v-for="(topic, index) of keyword" :key="index">
            <div
              class="text-3xs sm:text-xs inline-flex items-center font-bold uppercase md:px-3 px-1 md:mr-2 mr-1 py-1 bg-gray-300 opacity-70 text-mau-primary-700 rounded-full"
            >
              {{ topic }}
            </div>
          </div>
        </div>

        <div class="cursor-default flex flex-row">
          <div
            class="font-base py-1 text-mau-secondary-950 text-xs md:text-sm sm:mb-2"
          >
            By: {{ author }} ({{ formattedPublishedDate }})
          </div>
        </div>
      </div>
      <div class="w-1/3 mb-6 flex flex-col">
        <NuxtLink :to="`blog/${slug}`">
          <img
            v-if="img !== ''"
            class="object-cover px-2 h-20 lg:h-40 w-20 sm:h-32 sm:w-full"
            alt="/img/2-yic_campaign_2-.png"
            :src="img"
          />
        </NuxtLink>
      </div>
    
    </div>
    <div class=" opacity-40 mx-auto container border-b-2  lg:ml-6 border-gray-400 "></div>
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
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    keyword: {
      type: Array,
    },
    slug: {
      type: String,
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
<style>
.font-tags {
  font-size: 8px;
}
</style>
