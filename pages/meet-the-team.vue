<template>
  <BackgroundWrapper>
    <div class="container mx-auto">
      <div class="md:fixed w-full flex justify-center py-16">
        <img
          class="
            md:transform md:translate-x-16 md:absolute md:top-0 md:left-0
            object-contain
            h-56
            lg:h-72
            xl:h-96
          "
          :src="meetTheTeamData[0].bg_image_1"
        />
      </div>
      <div class="px-4 py-8 md:px-24 lg:px-8 relative z-10">
        <!-- <PageHero title="Meet The Team" description="" bg-image="kid-hero.jpg" /> -->

        <div>
          <h2
            class="
              text-2xl
              md:text-3xl
              text-mau-primary-700
              font-semibold
              mt-12
              sm:mb-18
              mb-12
              text-center
            "
          >
            MAU Mainboard
          </h2>
        </div>

        <div
          class="
            grid
            gap-10
            mx-auto
            2xl:max-w-screen-2xl
            xl:max-w-screen-xl
            lg:max-w-screen-lg
            max-w-screen-md
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          <TeamCardCircle
            v-for="member in boardMembers"
            :key="member.name"
            :name="member.name"
            :title="member.title"
            :img="member.image"
            :description="member.blurb"
          />
        </div>
        <h2
          class="
            text-2xl
            md:text-3xl
            sm:my-18
            my-12
            text-mau-primary-700
            font-semibold
            text-center
          "
        >
          Lapor Predator Members
        </h2>
        <div
          class="
            grid
            gap-10
            mx-auto
            2xl:max-w-screen-2xl
            xl:max-w-screen-xl
            lg:max-w-screen-lg lg:grid-cols-2
            xl:grid-cols-3
          "
        >
          <TeamCardCircle
            v-for="member in lpMembers"
            :key="member.name"
            :name="member.name"
            :title="member.title"
            :img="member.image"
            :description="member.blurb"
          />
        </div>
      </div>
      <!-- <div class="md:relative w-full flex justify-center py-16" >
      <img class='md:transform md:translate-x-16 md:absolute md:bottom-0 md:right-0 object-contain h-56 lg:h-72 xl:h-96' :src="meetTheTeamData[0].bg_image_2">
    </div> -->
    </div>
  </BackgroundWrapper>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const meetTheTeamData = await $content('meet-the-team').fetch()
    const boardMembers = meetTheTeamData[0].board_members
    const lpMembers = meetTheTeamData[0].lapor_predator_members

    return {
      meetTheTeamData,
      boardMembers,
      lpMembers,
    }
  },
}
</script>
