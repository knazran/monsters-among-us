<template>
  <div class="flex flex-col items-center justify-between h-full">
    <!-- <div class="self-center"> -->
    <div class="w-full">
      <img
       v-if="!isWorkshop" 
        :src="image"
        alt="..."
        class="object-scale-down w-full border-none rounded h-72 "
      />
      <img
       v-if="isWorkshop" 
        :src="image"
        alt="..."
        class="object-scale-down w-full border-none rounded h-48 sm:h-72 "
      />
    </div>
    

    <div v-if="!isButton" class="my-4 flex-grow">
      <p class="text-center text-mau-primary-700 text-xl font-bold mb-2">
        {{ textTop }}
      </p>
      <p class="text-center font-light text-mau-primary-600 text-lg">
        {{ textBot }}
      </p>
    </div>
    

    <div v-if="isButton" class="">
      <AccentButtonCustom :long="isLong" :text="textButton" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isWorkshop:{
      type:Boolean,
      default:false
    },
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
      default:
        'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-1-800x800.jpg',
    },
  },
}
</script>