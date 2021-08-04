<template>
   <!-- Instruction for CardsAdvancedThumbnail-->
                    <!-- props:title,isLarge,content,title,author,date,isBlog-->
                    <!-- title, isLarge,isBlog are required -->
                    <!-- isBlog for Tab 4 -->
                    <!-- if isLarge, required title,author,date,content-->
    <div class="rounded-xl overflow-hidden shadow-lg ml-12"  :class="isBlog ? 'max-w-lg' : 'max-w-xs'">
      <img class="object-cover h-56 w-full " :src=img />
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
      isBlog: {
      type: Boolean,
      required: false,
    
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
    },
    img:{
      type:String,
      default:"https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_2240,c_limit/phonepicutres-TA.jpg"
    
    }
  },
}
</script>