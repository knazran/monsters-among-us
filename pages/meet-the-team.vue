<template>
  <div>
    <!-- <PageHero title="Meet The Team" description="" bg-image="kid-hero.jpg" /> -->

    <PageSection id="board-members">
      <h2 class="text-2xl md:text-3xl text-mau-primary-700 font-semibold my-6 text-center md:text-left">
        MAU Mainboard
      </h2>
      <div class="grid grid-cols-1 gap-8 my-12">
        <TeamMemberCard v-for="member in boardMembers" :key="member.name" :name="member.name" :title="member.title" :image="member.image" :blurb="member.blurb"/>
      </div>
      <h2 class="text-2xl md:text-3xl text-mau-primary-700 font-semibold mb-6 text-center md:text-left">
        Lapor Predator Members
      </h2>
      <div class="grid grid-cols-1 gap-8 my-12">
        <TeamMemberCard v-for="member in lpMembers" :key="member.name" :name="member.name" :title="member.title" :image="member.image" :blurb="member.blurb"/>
      </div>
    </PageSection>
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

