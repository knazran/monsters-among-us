<template>
  <div class="bg-mau-primary-50 h-full">
    <div class="container mx-auto py-8 px-4 lg:px-8">
      <p
        class="
          font-medium
          xl:text-4xl
          lg:text-2xl
          text-2xl text-mau-primary-700
          xl:text-left
          text-center
        "
      >
        Our Initiatives
      </p>
      <div class="flex flex-col items-center md:flex-row md:items-start md:justify-between mt-10 space-y-12 md:space-y-0 md:space-x-8">
        <!-- How to use CardsSimpleThumbnail? isButton,isLong,textButton,textTop,textBot -->
        <!-- isButton:true==button,false==text isLong(forbutton):true==forlongbuttontext,false==forshortbuttontext-->
        <!-- isButton is required -->
        <CardsSimpleThumbnail
          :is-button="false"
          text-top="Lapor Predator"
          text-bot="Lapor with us Lorem Ipsum One two three"
        />
        <CardsSimpleThumbnail
          :is-button="false"
          text-top="Catch Em Predator"
          text-bot="Lapor with us Lorem Ipsum One two three"
        />
        <CardsSimpleThumbnail
          :is-button="false"
          text-top="Color With MAU"
          text-bot="Lapor with us Lorem Ipsum One two three"
        />
        <CardsSimpleThumbnail
          :is-button="false"
          text-top="Mau Reading Club"
          text-bot="Lapor with us Lorem Ipsum One two three"
        />
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
#describe {
  font-size: 1.8rem;
}
</style>