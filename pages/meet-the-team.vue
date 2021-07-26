<template>
  <div>
    <PageHero title="Meet The Team" description="" bg-image="kid-hero.jpg" />

    <PageSection id="board-members">
      <h2 class="text-xl md:text-2xl text-mau-primary-700 font-semibold mb-6">
        MAU Mainboard
      </h2>
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-8 my-12">
        <TeamMemberCard v-for="member in boardMembers" :key="member.name" :name="member.name" :title="member.title" :blurb="member.text"/>
      </div>
    </PageSection>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const meetTheTeamData = await $content('meet-the-team').fetch()
    const boardMembers = meetTheTeamData[0].board_members

    return {
      boardMembers,
    }
  },
}
</script>

