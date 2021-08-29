<template>
  <div class="pt-4">
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
    <div class="w-full" :style="{ backgroundImage: getBackgroundImage }">
      <PageSection id="milestone">
        <div class="py-6">
          <PageTitle :title="timelineContent.title" />
        </div>
        <vue-horizontal class="horizontal" responsive scroll :button="false">
          <section
            class="relative sm:px-48 mx-24 px-2"
            v-for="(info, index) in timelineContent.milestone"
            :key="info.title"
          >
            <div
              class="
                relative
                md:mx-44
                mx-56
                z-20
                bg-mau-primary-700
                w-16
                h-6
                rounded-md
              "
            >
              <p class="text-center text-white">{{ info.year }}</p>
            </div>

            <div
              v-if="index < 4"
              class="
                timeline
                z-0
                border-opacity-100 border-mau-primary-400 border
                absolute
                top-3
                md:left-0
                left-12
              "
            ></div>

            <HorizontalTimelines :blurb="info.blurb" :image="info.image" />
          </section>
        </vue-horizontal>
      </PageSection>
    </div>
  </div>
</template>

<script>
import VueHorizontal from 'vue-horizontal'
import TextureBeige from '~/static/img/textures/texture-beige-2.png'
export default {
  components: {
    VueHorizontal,
  },
  data: function () {
    return {
      bgGreen: TextureBeige,
    }
  },
  computed: {
    getBackgroundImage() {
      return `url(${this.bgGreen})`
    },
  },
  async asyncData({ $content, params, error }) {
    //
    try {
      const missionContent = await $content('about-us/mission').fetch()
      const storyContent = await $content('about-us/story').fetch()
      const commitmentContent = await $content('about-us/commitment').fetch()
      const timelineContent = await $content('about-us/milestone').fetch()
      const journeyInfo = await $content('lapor-predator/our-journeys')
        .sortBy('id')
        .fetch()
      return {
        missionContent,
        storyContent,
        commitmentContent,
        timelineContent,
        journeyInfo,
      }
    } catch (e) {
      error({ message: 'Content not found' })
    }
  }, //
}
</script>
!-- Content Design -->
<style scoped>
@media (min-width: 480px) {
  .timeline {
    width: 28rem !important;
  }
}
@media (min-width: 0px) {
  .timeline {
    width: 100rem !important;
  }
}
</style>