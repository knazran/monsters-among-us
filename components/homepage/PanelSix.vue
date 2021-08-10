<template>
  <div class="bg-mau-secondary-100 h-full">
    <div class="container mx-auto py-8 px-4 lg:px-8">
      <!-- TOP -->

      <div class="mx-auto flex md:flex-row md:my-8 flex-col-reverse">
        <!-- Left -->

        <div
          class="
            md:w-3/5
            flex flex-col
            items-center
            md:flex-row
            space-y-4
            md:space-y-0 md:space-x-8
            md:items-stretch
            md:px-8
          "
        >
          <AdvancedThumbnailCard title="MAU Rocks" :is-large="false" />

          <AdvancedThumbnailCard title="MAU Part 1 Intro" :is-large="false" />
        </div>
        <!-- End LEft -->
        <!-- Right -->

        <div
          class="
            w-full
            flex flex-col
            items-center
            md:items-start
            md:w-2/5
            md:px-8
            mb-8
          "
        >
          <p
            class="
              font-medium
              text-3xl text-mau-primary-900
            "
          >
            What's
          </p>
          <p
            class="
              font-medium
              text-3xl text-mau-primary-900
            "
          >
            Happening?
          </p>
          <div class="mt-6">
            <button
              class="
                rounded-xl
                bg-mau-primary-700
                text-center text-white
                2xl:w-64
                xl:w-52
                w-64
                py-2
              "
            >
              See More
            </button>
          </div>
        </div>
      </div>
      <!-- End Right -->
      <!-- End TOP -->
      <!-- BOT -->
      <div class="mx-auto mt-12 lg:mt-24">
        <div class="md:flex md:justify-center mb-8">
          <p
            class="
              text-center
              font-semibold
              lg:text-3xl
              text-2xl text-mau-primary-700
            "
          >
            Gotta Read This!
          </p>
        </div>
        <div
          class="
            w-full
            flex flex-col
            items-center
            justify-center
            md:flex-row
            space-y-4
            md:space-y-0 md:space-x-8
            md:items-stretch
            md:px-8
          "
        >
          <AdvancedThumbnailCard
            title="MAU Part 1 Intro"
            :is-large="true"
            author="Admin"
            date="17/10/2020"
            content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
          />
          <AdvancedThumbnailCard
            title="MAU Part 1 Intro"
            :is-large="true"
            author="Admin"
            date="17/10/2020"
            content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
          />
          <AdvancedThumbnailCard
            title="MAU Part 1 Intro"
            :is-large="true"
            author="Admin"
            date="17/10/2020"
            content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
          />
        </div>
      </div>
      <!-- END BOT -->
    </div>
  </div>
</template>