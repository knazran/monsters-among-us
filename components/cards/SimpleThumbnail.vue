<template>
  <!-- How to use CardsSimpleThumbnail? isButton,isLong,textButton,textTop,textBot -->
  <!-- isButton:true==button,false==text isLong(forbutton):true==forlongbuttontext,false==forshortbuttontext-->
  <!-- isButton is required and need to fill textButton-->
  <!-- if !isButton, need to fill up texttop and textBot-->
  <div class="w-72 flex flex-col">
      <!-- <div class="self-center"> -->
      <div class="">
        <img
          src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-1-800x800.jpg"
          alt="..."
          class="shadow object-cover rounded w-full border-none"
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
  },
  computed: {
    sectionImage() {
      const imgUrl = new URL(`../assets/img/${this.img}`, import.meta.url)
      return imgUrl
    },
  },
}
</script>