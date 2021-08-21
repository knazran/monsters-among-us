<template>
  <div class="bg-mau-purple-300">
    <PageSection id="about-lapor-predator">
      <PageSplitSection :img="aboutContent.main_poster">
        <PageTitleAlt
          :title="aboutContent.title"
          :description="aboutContent.description"
        />
      </PageSplitSection>
      <div class="w-full px-4 mb-8 md:mb-20">
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

      <div class="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-8 my-8">
        <div
          v-for="partner in aboutContent.partners"
          :key="partner.name"
          class="
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
            class="w-full object-contain min-h-0 h-72 rounded-lg"
            :src="partner.image"
          />
        </div>
      </div>
    </PageSection>
  </div>
</template>

<script>
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
      console.log(journeyInfo[0])

      return {
        aboutContent,
        journeyContent,
        journeyInfo,
      }
    } catch (e) {
      error({ message: 'Content not found' })
    }
  },
}
</script>
