<template>
  <div class="bg-mau-primary-50 h-full">
    <div class="container mx-auto py-8 px-4 lg:px-8">
      <p
        class="
          font-medium
          xl:text-4xl
          lg:text-2xl
          text-2xl text-mau-primary-700
          text-center
        "
      >
        As Featured In
      </p>
      <div class="xl:flex xl:flex-row mt-10 xl:ml-0 xl:mt-20 container">
        <!-- How to use CardsSimpleThumbnail? isButton,isLong,textButton,textTop,textBot -->
        <!-- isButton:true==button,false==text isLong(forbutton):true==forlongbuttontext,false==forshortbuttontext-->
        <!-- isButton is required -->
        <img
          class="
            object-cover
            2xl:w-96
            2xl:h-80
            border-2
            h-72
            w-72
            lg:mx-96
            md:mx-56
            rounded-md
            sm:mx-40
            mx-32
            xl:mx-40
          "
          src="../static/test.jpg"
          alt="Profile image"
        />

        <img
          class="
            object-cover
            2xl:w-96
            2xl:h-80
            border-2
            h-72
            w-72
            lg:mx-96
            md:mx-56
            sm:mx-40
            rounded-md
            mx-32
            mt-10
            xl:mx-48
            xl:mt-0
          "
          src="../static/test2.jpg"
          alt="Profile image"
        />
      </div>
    </div>
  </div>
</template>
