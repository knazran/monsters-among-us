<template>
  <div class="bg-mau-purple-300 min-h-screen">
    <PageSection id="about-lapor-predator">
      <PageSplitSection>
        <PageTitleAlt
          :title="content.title"
          :description="content.description"
        />
        <template #media>
          <div class="w-full h-96">
            <Video title='test' src="https://www.youtube.com/embed/641nm_sDejU"/>
          </div>
        </template>
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

