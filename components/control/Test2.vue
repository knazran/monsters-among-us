<template>

  <div class=" sm:min-h-screen  h-screenMobile sm:my-0   py-6">


    <HeadingControl :title="content.title" />

    <div  class=" h-full py-2 md:px-3 px-2">

      <nuxt-content
        class=" px-2
          prose prose-black 
          prose-3xl
        lg:prose-xl
          max-w-none"
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
    },
  },
}
</script>

<style scoped>

</style>


