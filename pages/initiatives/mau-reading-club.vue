<template>
  <BackgroundWrapper color="green">
    <div class="container mx-auto">
      <PageSection id="reading-club">
        <PageSplitSection :img="content.main_poster">
          <PageTitle
            :title="content.title"
            :description="content.description"
          />
        </PageSplitSection>
        <div class="w-full lg:w-4/5 px-4 my-8 md:mb-20 relative z-10">
          <nuxt-content
            class="prose prose-mau prose-md lg:prose-lg max-w-none"
            :document="content"
          />
        </div>
        <!-- Content -->
      </PageSection>
      <div class="md:fixed md:bottom-0 md:right-0 py-16" style="z-index: -1">
        <img
          class="object-contain h-56 lg:h-72 xl:h-96"
          :src="content.bg_image"
        />
      </div>
    </div>
  </BackgroundWrapper>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    try {
      const content = await $content('initiatives/mau-reading-club').fetch()
      return {
        content,
      }
    } catch (e) {
      error({ message: 'Content not found' })
    }
  },
}
</script>
