<template>
  <BackgroundWrapper color='green'>
    <PageSection id="catch-em-predator">
      <PageSplitSection :img="content.main_poster">
        <PageTitle
          :title="content.title"
          :description="content.description"
        />
      </PageSplitSection>
      <div class="w-full lg:w-4/5 px-4 my-8 md:mb-20 relative z-10">
        <nuxt-content class="w-full prose prose-mau prose-sm lg:prose-lg max-w-none" :document="content" />
      </div>
    </PageSection>
    <div class="md:fixed md:bottom-0 md:right-0 px-8 py-16" style="z-index:-1">
      <img class='object-contain h-56 lg:h-72 xl:h-96' :src="content.bg_image">
    </div>
  </BackgroundWrapper>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    try {
      const content = await $content('initiatives/catch-em-predator').fetch()
      return {
        content,
      }
    } catch (e) {
      error({ message: 'Content not found' })
    }
  },
}
</script>
