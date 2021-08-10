<template>
  <div class="bg-mau-purple-300">
    <PageSection id="about-lapor-predator">
      <PageSplitSection :img="content.main_poster">
        <PageTitleAlt
          :title="content.title"
          :description="content.description"
        />
      </PageSplitSection>
      <div class="w-full px-4 mb-8 md:mb-20">
        <nuxt-content class="w-full prose prose-lp prose-sm lg:prose-lg xl:prose-xl" :document="content" />
      </div>
    </PageSection>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    try {
      const content = await $content('lapor-predator/how-to').fetch()
      return {
        content,
      }
    } catch (e) {
      error({ message: 'Content not found' })
    }
  },
}
</script>

