<template>
  <div>
      <h2 class="text-xl md:text-2xl text-mau-primary-700 font-semibold mb-6">
       {{title}}
      </h2>
      <div >
        <p class="text-justify text-lg md:text-xl text-mau-primary-700 font-light"> 
          {{ text }}
        </p>
      </div>
        
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
     
    },
    text: {
        type: String
    }
  }
//   computed: {
//     sectionImage() {
//       const imgUrl = new URL(`../assets/img/${this.img}`, import.meta.url)
//       return imgUrl
//     },
//   },
}
</script>