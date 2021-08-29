<template>
  <div class="my-4">
    <PageSection id="about-us">
      <PageSplitSection :reverse="true" img="/img/about-us/About_Mission.jpg">
        <div class="py-4 md:py-0">
          <PageTitle :title="missionContent.title" />
        </div>
      </PageSplitSection>
      <div class="px-4 md:px-0 grid md:grid-cols-2 xl:grid-cols-3 gap-8 py-4">
        <PointsPanel
          v-for="point in missionContent.points"
          :key="point.about"
          :title="point.about"
          :description="point.blurb"
        />
      </div>
      <PageTitle :title="storyContent.title" />
      <div class="w-full px-4 md:px-0 mb-8 md:mb-20">
        <nuxt-content
          class="
            w-full
            prose prose-lp prose-lg
            xl:prose-xl
            max-w-none
            text-mau-primary-700
          "
          :document="storyContent"
        />
      </div>
      <PageSplitSection :img="commitmentContent.image">
        <div class="py-4 md:py-0">
          <PageTitle :title="commitmentContent.title" />
        </div>
        <div class="w-full mb-8 md:mb-20">
          <nuxt-content
            class="
              w-full
              prose prose-lg
              xl:prose-xl
              max-w-none
              text-mau-primary-700
            "
            :document="commitmentContent"
          />
        </div>
      </PageSplitSection>
    </PageSection>
  </div>
</template>

<script>
// import { VueHorizontalTimeline } from "vue-horizontal-timeline";

export default {
  //     components: {
  //     VueHorizontalTimeline,
  //   },
  data: function () {
    return {
      items: [],
    }
  },
  async asyncData({ $content, params, error }) {
    //
    try {
      const missionContent = await $content('about-us/mission').fetch()
      const storyContent = await $content('about-us/story').fetch()
      const commitmentContent = await $content('about-us/commitment').fetch()
      const timelineContent = await $content('about-us/milestone').fetch()

      return {
        missionContent,
        storyContent,
        commitmentContent,
        timelineContent,
      }
    } catch (e) {
      error({ message: 'Content not found' })
    }
  }, //
}
</script>
<style scoped>
li {
  color: #458189;
}
</style>