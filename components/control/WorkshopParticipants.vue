<template>
<div class="py-5">
  <div class="flex justify-center"> 
  <TextHighlight :title="content.title1" />
  </div>
  <div class="flex justify-center">
  <div class =" m-8 p-12 grid sm:grid-cols-3 grid-cols-2
                     grid-flow-row gap-6 auto-rows-auto">
  <ul class="class='list-outside list-disc ml-6" v-for="participant in content.participants" :key="participant.name">
       <li class="">

        <div class="font-medium">{{ participant.name }}</div>
        </li>
      </ul>

  </div>
   
    <!-- Left Side-->
    <!-- <div class="md:w-1/2 text-mau-secondary-900 px-8 mb-8">
      <div class="">
        <slot name="left">
          <div class="flex justify-center">
            <TextHighlight :title="content.title1" />
          </div>
          <div class="w-full">
            <ImageCarouselSingle :images="content.carousel" />
          </div>
        </slot>
      </div>
    </div> -->
    <!-- End Left Side-->

    <!-- Right Side with List and button -->
    <!-- <div class="md:w-1/2 px-8 md:py-0 py-8">
      <div class=" ">
        <slot name="right">
          <div class="flex justify-center">
            <TextHighlight :title="content.title2" />
          </div>
          <div class="w-full">
            <ImageCarouselSingle :images="content.carousel2" />
          </div>
        </slot>
      </div>
    </div> -->
    <!--End Right side with Pic -->
  <!-- </div> -->
  </div>
  <div class="flex justify-center px-5">
            <TextHighlight :title="content.title2" />
          </div>
          <div class="w-full">
            <ImageCarouselSingle :images="content.carousel2" />
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
  },
}
</script>

<style scoped>
#describe {
  font-size: 1.8rem;
}
</style>


