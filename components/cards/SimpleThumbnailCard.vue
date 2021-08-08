<template>
  <div class="w-72 flex flex-col items-center justify-between">
      <!-- <div class="self-center"> -->
      <div class="w-full rounded shadow">
        <img
          :src="image"
          alt="..."
          class=" object-cover w-full border-none"
        />
      </div>

      <div v-if="!isButton" class="my-3 font-bold">
        <p class="text-center">{{ textTop }}</p>
      </div>
      <div v-if="!isButton">
        <p class="text-center font-thin">{{ textBot }}</p>
      </div>

      <div v-if="isButton" class="mt-8">
        <AccentButtonCustom :long="isLong" :text="textButton" />
      </div>

  </div>
</template>

<script>
export default {
  props: {
    isButton: {
      type: Boolean,
      required: true,
    },
    isLong: {
      type: Boolean,
    },
    textButton: {
      type: String,
    },
    textTop: {
      type: String,
    },
    textBot: {
      type: String,
    },
    image: {
      type: String,
      default: "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-1-800x800.jpg"
    }
  },
  computed: {
    sectionImage() {
      // const imgUrl = new URL(`../assets/img/${this.img}`, import.meta.url)
      // return imgUrl
      return "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-1-800x800.jpg"
    },
  },
}
</script>