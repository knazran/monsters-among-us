<template>
   <!-- Instruction for CardsAdvancedThumbnail-->
                    <!-- props:title,isLarge,content,title,author,date-->
                    <!-- title, isLarge are required -->
                    <!-- if isLarge, required title,author,date,content-->
    <div class="rounded-xl overflow-hidden max-w-xs shadow-lg ml-12">
      <img class="max-w-full" src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-1-800x800.jpg" alt="River">
      <div class="px-6 py-4">
        <div class="font-medium text-xl mb-2">{{title}}</div>
        <div v-if="!isLarge" class="font-bold text-xl xl:my-48 my-24"></div>

        <p v-if="isLarge" class="text-gray-700 text-base">
            {{content}}
        </p>
      </div>
      <div v-if="isLarge" class="px-6 pt-4 pb-2 flex justify-between">
       <span class="inline-block font-base  py-1 text-sm text-mau-secondary-950 mr-2 mb-2">{{author}}</span>
        <span class="inline-block font-base  py-1 text-sm text-mau-secondary-950 mr-2 mb-2">{{date}}</span>
       
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
     content: {
      type: String
    
    },
    author: {
      type: String
    
    },
    date: {
      type: String,
    
    },
    isLarge:{
      type:Boolean,
      required:true
    }
  },
}
</script>