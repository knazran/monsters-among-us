<template>
  <div>
    <PageSection id="catch-em-predator">
      <PageSplitSection :img="content.main_poster">
        <PageTitle
          :title="content.title"
          :description="content.description"
        />
      </PageSplitSection>
      <div class="w-full px-4 mb-8 md:mb-20">
        <nuxt-content class="w-full prose prose-sm lg:prose-lg xl:prose-xl" :document="content" />
      </div>
    </PageSection>
  </div>
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
