<template>
   <div class="relative h-full w-full">
                      <img class="max-h-72" :src="content.link">
                     
              <div class=" absolute w-72  flex items-center px-4 inset-0 mx-auto">
                      <nuxt-content
                class="
                  px-4
                  prose prose-black prose-sm
                  lg:prose-lg

                  max-w-none
                "
                :document="content" 
              /> 

              </div>
           
        </div>

</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    }
   
  },
}
</script>
