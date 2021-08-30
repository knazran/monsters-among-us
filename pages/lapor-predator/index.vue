<template>
  <div :style="{ backgroundImage: getBackgroundImage}">
    <PageSection id="about-lapor-predator">
      <PageSplitSection :img="aboutContent.main_poster">
        <PageTitleAlt
          :title="aboutContent.title"
          :description="aboutContent.description"
        />
      </PageSplitSection>
      <div class="w-full px-4 mb-8 md:mb-20 relative z-10">
        <nuxt-content
          class="
            w-full
            prose prose-lp prose-sm
            lg:prose-lg
            xl:prose-xl
            max-w-none
          "
          :document="aboutContent"
        />
      </div>
      <div class="w-full flex justify-center md:justify-start md:transform md:-translate-y-20" >
        <img class='object-contain w-full md:w-1/2' :src="aboutContent.bg_image">
      </div>
    </PageSection>
    <PageSection id="our-journey">
      <PageTitleAlt title="Our Journey" />
      <div class="relative wrap overflow-hidden px-6 my-6 h-full">
        <div
          class="
            border-2-2
            absolute
            border-opacity-20 border-gray-700
            h-full
            border
          "
          style="left: 50%"
        ></div>
        <div v-for="(info, index) in journeyInfo" :key="info.title">
          <div v-if="index % 2 == 0">
            <RightTimeline :journey="info" />
          </div>
          <div v-else>
            <LeftTimeline :journey="info" />
          </div>
        </div>
      </div>
    </PageSection>
    <PageSection id="our-partners">
      <PageTitleAlt title="Our Partners" />

      <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 my-8">
        <div
          v-for="partner in aboutContent.partners"
          :key="partner.name"
          class="
          max-h-64
            bg-white
            rounded-lg
            shadow-lg
            border-2 border-mau-purple-500
            p-4
            flex
            justify-center
          "
        >
          <img
            class="w-full object-contain rounded-lg"
            :src="partner.image"
          />
        </div>
      </div>
    </PageSection>
  </div>
</template>

<script>
import TextureGreen from '~/static/img/textures/texture-green-2.png'
export default {
  async asyncData({ $content, params, error }) {
    try {
      const aboutContent = await $content('lapor-predator/about').fetch()
      const journeyContent = await $content(
        'lapor-predator/our-journey'
      ).fetch()
      const journeyInfo = await $content('lapor-predator/our-journeys')
        .sortBy('id')
        .fetch()

      return {
        aboutContent,
        journeyContent,
        journeyInfo,
      }
    } catch (e) {
      error({ message: 'Content not found' })
    }
  },
  data() {
    return {
      posts: [],
      bgGreen: TextureGreen,
    }
  },
  computed: {
    getBackgroundImage() {
      return `url(${this.bgGreen})`;
    },
  },
}
</script>
