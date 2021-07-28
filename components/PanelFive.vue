<template>
  <div class="bg-mau-primary-100 xl:h-100 h-102">
    <div class="container mx-auto">
      <div class="flex xl:justify-start justify-center mt-12">
        <p
          class="
            font-medium
            xl:text-6xl
            lg:text-5xl
            text-4xl text-mau-primary-900
            mt-10
            lg:text-left
            text-center
          "
        >
          Advocate with Us!
        </p>
      </div>
      <div class="xl:pr-96 md:ml-6 lg:ml-20 xl:ml-0">
        <p
          class="
            font-thin
            xl:text-3xl
            lg:text-2xl
            text-xl text-mau-primary-700
            mt-1
            lg:text-left
            text-center
            xl:pr-36
            2xl:pr-96
          "
        >
          We are always looking for volunteers, colaborators, and members to
          join the cause
        </p>
      </div>
      <div class="xl:flex xl:flex-row mt-10 xl:ml-0 ml-32">
        <!-- How to use CardsSimpleThumbnail? isButton,isLong,textButton,textTop,textBot -->
        <!-- isButton is required -->
        <CardsSimpleThumbnail
          :isButton="true"
          :isLong="false"
          textButton="Volunteer"
        />
        <CardsSimpleThumbnail
          :isButton="true"
          :isLong="true"
          textButton="Collaborate with MAU"
        />
        <CardsSimpleThumbnail
          :isButton="true"
          :isLong="false"
          textButton="Be a Member"
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