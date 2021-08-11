<template>
  <div class="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 ">
    <!-- <PageHero title="Meet The Team" description="" bg-image="kid-hero.jpg" /> -->

      <h2 class="text-2xl md:text-3xl text-mau-primary-700 font-semibold mt-12 sm:mb-24  mb-12 text-center ">
        MAU Mainboard
      </h2>
      <div class="grid gap-10 mx-auto xl:max-w-screen-2xl lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-4">
        <TeamCardCircle v-for="member in boardMembers" :key="member.name" :name="member.name" :title="member.title" :img="member.image" :description="member.blurb"/>
      </div>
      <h2 class="text-2xl md:text-3xl sm:my-24 my-12 text-mau-primary-700 font-semibold  text-center ">
        Lapor Predator Members
      </h2>
      <div class="grid gap-10 mx-auto xl:max-w-screen-2xl lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-4">
        <TeamCardCircle v-for="member in lpMembers" :key="member.name" :name="member.name" :title="member.title" :img="member.image" :description="member.blurb"/>
      </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const meetTheTeamData = await $content('meet-the-team').fetch()
    const boardMembers = meetTheTeamData[0].board_members
    const lpMembers = meetTheTeamData[0].lapor_predator_members

    return {
      boardMembers,
      lpMembers
    }
  },
}
</script>

