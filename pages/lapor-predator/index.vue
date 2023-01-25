<template>
  <div :style="{ backgroundImage: getBackgroundImage }">
    <div class="hidden md:block md:fixed md:bottom-0 md:left-0 py-16">
        <img
          class="object-contain h-56 lg:h-72 xl:h-96"
          :src="aboutContent.bg_image"
        />
      </div>
    <ControlHeroPredator />

    <div class="relative z-10">
      <PageSection id="about-lapor-predator">
        <PageSplitSection>
          <PageTitleAlt
            :title="aboutContent.title"
            :description="aboutContent.description"
          />
        </PageSplitSection>
        <!-- <ControlPurpose :content="aboutContent" /> -->
        <div class="w-full  px-4 my-8 md:mb-20 relative z-10">
          <nuxt-content
            class="w-full prose prose-lp prose-sm lg:prose-lg max-w-none"
            :document="aboutContent"
          />
        </div>
      </PageSection>
      <PageSection id="how-to">
        <PageSplitSection>
          <PageTitleAlt
            :title="content.title"
            :description="content.description"
          />
        </PageSplitSection>
        <div class="flex justify-center items-center relative z-10">
          <div class="w-full lg:w-1/2 h-96">
            <Video
              title="test"
              src="https://www.youtube.com/embed/641nm_sDejU"
            />
          </div>
        </div>

        <div class="w-full  px-4 my-8 md:mb-20 relative z-10">
          <nuxt-content
            class="w-full prose prose-lp prose-sm lg:prose-lg max-w-none"
            :document="content"
          />
        </div>
      </PageSection>
      <PageSection id="our-journey">
        <PageTitleAlt
            title="Our Journey"
          />

        <div class="relative wrap overflow-hidden px-6 my-6 h-full">
          <div
            class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
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

        <!-- <ControlInfographicMin
          :content="infographicContent"
          :bgImage="getBackgroundImage2"
        /> -->
      <!-- <PageSection  id="contact">
        <ControlContact :content="contactContent" />
      </PageSection> -->
      <!-- <PageSection  id="event">
        <ControlEventMin
          :podcastContent="podcastEvent"
        />
      </PageSection>
      <PageSection  id="filter">
      <ControlFilter :content="filterContent" />
    </PageSection> -->

      <PageSection id="our-partners">
        <PageTitleAlt title="Our Partners" />

        <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 my-8">
          <div
            v-for="partner in aboutContent.partners"
            :key="partner.name"
            class="max-h-64 bg-white rounded-lg shadow-lg border-2 border-mau-purple-500 p-4 flex justify-center"
          >
            <img
              class="w-full object-contain rounded-lg"
              :src="partner.image"
            />
          </div>
        </div>
      </PageSection>
    </div>
  </div>
</template>

<script>
import TextureGreen from '~/static/img/textures/texture-green-2.png'
export default {
  async asyncData({ $content, params, error }) {
    try {
      const aboutContent = await $content(
        'lapor-predator/intro-content/about'
      ).fetch()
      const journeyInfo = await $content('lapor-predator/our-journeys')
        .sortBy('id')
        .fetch()
      const infographicContent = await $content(
        'in-control/resources-section'
      ).fetch()
      // const podcastEvent = await $content(
      //   'in-control/event/podcast-event'
      // ).fetch()
      // const contactContent = await $content('in-control/lp-chatbot').fetch()
      // const filterContent = await $content('in-control/ig-filter').fetch()
      const content = await $content('lapor-predator/intro-content/how-to').fetch()

      return {
        aboutContent,
        journeyInfo,
        infographicContent,
        // podcastEvent,
        // contactContent,
        // filterContent,
        content
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
      return `url(${this.bgGreen})`
    },
    getBackgroundImage2() {
      return `url(${this.background})`
    },
  },
}
</script>
