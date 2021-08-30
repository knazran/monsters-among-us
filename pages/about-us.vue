<template>
  <div class="overflow-hidden pt-4 md:pt-8">
    <PageSection id="about-us">
      <PageSplitSection img="/img/about-us/About_Mission.jpg">
        <PageTitle title="About Monsters Among Us (MAU)" />
      </PageSplitSection>
      <div class="w-full px-4 my-12">
        <PageTitle :title="missionContent.title" />
        <div
          class="px-4 md:px-0 grid md:grid-cols-2 gap-8 my-12"
        >
          <PointsPanel
            v-for="point in missionContent.points"
            :key="point.about"
            :title="point.about"
            :description="point.blurb"
          />
        </div>
        <PageTitle :title="strategiesContent.title" />
         <div
          class="px-4 md:px-0 grid lg:grid-cols-5 md:grid-cols-3 gap-8 my-12"
        >
          <SimpleThumbnailCard
            v-for="strategy in strategiesContent.points"
            :key="strategy.about"
            :is-button="false"
            :text-top="strategy.about"
            :image="strategy.image"

          />
        </div>
        <PageTitle :title="storyContent.title" />
        <div class="w-full px-4 md:px-0 mb-8 md:mb-20">
          <nuxt-content
            class="w-full prose prose-mau prose-md lg:prose-lg max-w-none"
            :document="storyContent"
          />
        </div>
      </div>
      <PageSplitSection :reverse='true' :img="commitmentContent.image">
        <PageTitle :title="commitmentContent.title" />
        <div class="w-full mb-8 md:mb-20">
          <nuxt-content
            class="w-full prose prose-mau prose-md lg:prose-lg max-w-none"
            :document="commitmentContent"
          />
        </div>
      </PageSplitSection>
    </PageSection>

    <div class="w-full" :style="{ backgroundImage: getBackgroundImage }">
      <PageSection id="milestone">
        <div class="w-full" :style="{ backgroundImage: getBackgroundImage }">
          <div class="py-12">
          <PageTitle :title="timelineContent.title" />
        </div>
        <vue-horizontal class="horizontal" responsive :button="true">
          <div
            v-for="(info, index) in timelineContent.milestone"
            :key="info.title"
            class=" sm:px-48 mx-24 px-2"
          > 
            <button
              class="
              relative
              
           
                z-50
                bg-mau-primary-700
                rounded-md
                py-1
                px-4
              "
            >
              <p class="text-center text-white text-lg">{{ info.year }}</p>
            </button>

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
          </div>
        </vue-horizontal>
        </div>
        
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
  async asyncData({ $content, params, error }) {
    //
    try {
      const missionContent = await $content('about-us/mission').fetch()
      const storyContent = await $content('about-us/story').fetch()
      const commitmentContent = await $content('about-us/commitment').fetch()
      const timelineContent = await $content('about-us/milestone').fetch()
      const strategiesContent = await $content('about-us/strategies').fetch()

      const journeyInfo = await $content('lapor-predator/our-journeys')
        .sortBy('id')
        .fetch()
      return {
        missionContent,
        storyContent,
        commitmentContent,
        timelineContent,
        journeyInfo,
        strategiesContent
      }
    } catch (e) {
      error({ message: 'Content not found' })
    }
  },
  data () {
    return {
      bgGreen: TextureBeige,
    }
  },
  computed: {
    getBackgroundImage() {
      return `url(${this.bgGreen})`
    },
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
