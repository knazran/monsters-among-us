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

    <PageSection id="about-lapor-predator">
      <PageTitleAlt
        :title="journeyContent.title"
        :description="journeyContent.description"
      />
      <div class="w-full px-4 my-8 md:mb-20">
        <nuxt-content
          class="w-full prose prose-lp prose-sm lg:prose-lg"
          :document="journeyContent"
        />
      </div>
    </PageSection>
    <PageSection id="about-lapor-predator">
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
      return {
        aboutContent,
        journeyContent,
      }
    } catch (e) {
      error({ message: 'Content not found' })
    }
  },
}
</script>
