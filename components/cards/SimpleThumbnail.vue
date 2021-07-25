<template>
  <!-- How to use CardsSimpleThumbnail? isButton,isLong,textButton,textTop,textBot -->
   <!-- isButton:true==button,false==text isLong(forbutton):true==forlongbuttontext,false==forshortbuttontext-->
   <!-- isButton is required and need to fill textButton-->
   <!-- if !isButton, need to fill up texttop and textBot-->
  <div class="container mx-auto mb-12">
    <div class="flex flex-col  pr-32">
      <div class="self-center">
          <div class="xl:pl-2 sm:pl-12 pl-6">
            <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-1-800x800.jpg" alt="..." class="shadow object-cover  rounded 2xl:w-64 2xl:h-64 xl:w-56 xl:h-56 w-48 h-48 border-none" />
          </div>
          <!-- text -->
          <div v-if="!isButton" class="my-3 font-bold">
              <p class=" text-center ">{{ textTop }}</p>
          </div>
          <div v-if="!isButton">
              <p class="text-center font-thin "> {{ textBot }} </p>
          </div>
            <!-- End Text -->
            <!-- Button -->

          <div v-if="isButton" class="mt-8  ">
              <AccentButtonCustom :long="isLong" :text="textButton" />
              <!-- <AccentButtonCustom :long=true text="Collaborate with MAU"/>
              <AccentButtonCustom :long=false text="Be a Member"/> -->
          </div>
            <!-- End Button -->


      </div>
      <!--Content Thumbnail-->
            <!-- Text -->
          
       <!--End Content Thumbnail-->

    </div>
  </div>
</template>

<script>
export default {
  props: {
    isButton: {
      type: Boolean,
      required:true
    },
    isLong: {
      type: Boolean

    },
    textButton: {
        type: String
    },
    textTop:{
      type:String
    },
    textBot:{
      type:String
    }
  },
  computed: {
    sectionImage() {
      const imgUrl = new URL(`../assets/img/${this.img}`, import.meta.url)
      return imgUrl
    },
  },
}
</script>