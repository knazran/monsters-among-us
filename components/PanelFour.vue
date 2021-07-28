<template>
  <div class="bg-mau-primary-50 xl:h-99 h-103">
    <div class="container mx-auto">
      <p
        class="
          font-medium
          xl:text-6xl
          lg:text-5xl
          text-4xl text-mau-primary-700
          mt-10
          xl:text-left
          text-center
        "
      >
        Our Initiatives
      </p>
      <div class="xl:flex xl:flex-row mt-10 xl:ml-0 ml-32">
        <!-- How to use CardsSimpleThumbnail? isButton,isLong,textButton,textTop,textBot -->
        <!-- isButton:true==button,false==text isLong(forbutton):true==forlongbuttontext,false==forshortbuttontext-->
        <!-- isButton is required -->
        <CardsSimpleThumbnail
          :isButton="false"
          textTop="Lapor Predator"
          textBot="Lapor with us Lorem Ipsum One two three"
        />
        <CardsSimpleThumbnail
          :isButton="false"
          textTop="Catch Em Predator"
          textBot="Lapor with us Lorem Ipsum One two three"
        />
        <CardsSimpleThumbnail
          :isButton="false"
          textTop="Color With MAU"
          textBot="Lapor with us Lorem Ipsum One two three"
        />
        <CardsSimpleThumbnail
          :isButton="false"
          textTop="Mau Reading Club"
          textBot="Lapor with us Lorem Ipsum One two three"
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