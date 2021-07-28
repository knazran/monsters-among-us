<template>
  <div class="bg-mau-primary-100 h-full">
    <div class="container mx-auto py-8 px-4 lg:px-8">
        <h3
          class="
            font-medium
            xl:text-6xl
            lg:text-5xl
            text-4xl text-mau-primary-900
            lg:text-left
            text-center
          "
        >
          Advocate with Us!
        </h3>
        <h4
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
        </h4>
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