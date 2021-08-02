<template>
  <div class="bg-mau-secondary-100 h-106 xl:h-104">
    <div class="container mx-auto">
      <!-- TOP -->

      <div class="mx-auto flex xl:flex-row flex-col-reverse">
        <!-- Left -->

        <div
          class="
            xl:flex xl:flex-row
            xl:mt-64
            w-full
            xl:w-3/5
            mb-4
            lg:mb-0
            xl:pr-36
            xl:ml-10
            md:ml-8
            sm:ml-2
            ml-4
            xl:mt-0
            mt-12
          "
        >
            <div
              class="
                mb-12
                mx-48xl:mb-0
                xl:ml-0
                lg:ml-80
                md:ml-40
                sm:ml-28
                ml-12
              "
            >
              <CardsAdvancedThumbnail title="MAU Rocks" :isLarge="false" />
            </div>
            <div class="mb-12 xl:mb-0 xl:ml-0 lg:ml-80 md:ml-40 sm:ml-28 ml-12">
              <CardsAdvancedThumbnail
                title="MAU Part 1 Intro"
                :isLarge="false"
              />
            </div>
        </div>
        <!-- End LEft -->
        <!-- Right -->

        <div
          class="
            lg:w-2/5
            p-6
            lg:p-12
            lg:flex lg:flex-col
            xl:ml-0
            lg:ml-96
            md:ml-64
            sm:ml-48
            ml-32
          "
        >
          <slot>
            <p
              class="
                font-medium
                xl:text-6xl
                lg:text-5xl
                text-4xl text-mau-primary-900
                pr-36
              "
            >
              What's
            </p>
            <p
              class="
                font-medium
                xl:text-6xl
                lg:text-5xl
                text-4xl text-mau-primary-900
              "
            >
              Happening?
            </p>
            <div class="-ml-3 mt-6">
              <button
                class="
                  rounded-xl
                  bg-mau-primary-700
                  text-center text-white
                  2xl:w-64
                  xl:w-52
                  w-64
                  xl:ml-5
                  xl:mt-0
                  mt-3
                  py-2
                "
              >
                See More
              </button>
            </div>
          </slot>
        </div>
      </div>
      <!-- End Right -->
      <!-- End TOP -->
      <!-- BOT -->
      <div class="container">
        <div class="md:flex md:justify-center sm:ml-56 ml-32">
          <p
            class="
              font-light
              xl:text-5xl
              lg:text-5xl
              text-4xl text-mau-primary-700
              md:pr-36
            "
          >
            Gotta Read This!
          </p>
        </div>
        <div
          class="xl:flex xl:flex-row w-full mb-4 md:mb-0 mt-12 xl:ml-0 lg:ml-6"
        >
          <!-- Instruction for CardsAdvancedThumbnail-->
          <!-- props:title,isLarge,content,title,author,date-->
          <!-- title, isLarge are required -->
          <!-- if isLarge, required title,author,date,content-->
          <slot>
            <div class="xl:my-8 xl:mx-6 lg:ml-80 md:ml-56 sm:mx-32 mx-12">
              <CardsAdvancedThumbnail
                title="MAU Part 1 Intro"
                :isLarge="true"
                author="Admin"
                date="17/10/2020"
                content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
              />
            </div>
            <div class="my-8 xl:mx-6 md:ml-56 lg:ml-80 sm:mx-32 mx-12">
              <CardsAdvancedThumbnail
                title="MAU Part 1 Intro"
                :isLarge="true"
                author="Admin"
                date="17/10/2020"
                content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
              />
            </div>
            <div class="my-8 xl:mx-6 md:ml-56 lg:ml-80 sm:mx-32 mx-12">
              <CardsAdvancedThumbnail
                title="MAU Part 1 Intro"
                :isLarge="true"
                author="Admin"
                date="17/10/2020"
                content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
              />
            </div>
          </slot>
        </div>
      </div>
      <!-- END BOT -->
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