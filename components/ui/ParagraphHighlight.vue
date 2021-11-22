<template>
   <div class="relative h-full w-full">
                      <img class="h-72" :src="content.link">
                     
              <div class=" absolute w-80  flex items-center inset-0 mx-auto">
                    <nuxt-content v-if="!isDescription"
                class="
                  px-4
           prose prose-black prose-md 
           prose-md

                  lg:prose-lg

                  max-w-none
                "
                :document="content" 
              /> 
                <p v-if="isDescription"
                class="
                  px-4
           prose prose-black prose-md 
           prose-md

                  lg:prose-lg

                  max-w-none
                "
              > {{content.description}}
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
      default: false
    }
   
  },
}
</script>
