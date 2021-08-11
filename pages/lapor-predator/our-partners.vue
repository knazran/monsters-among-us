<template>
  <div class="bg-mau-purple-300 min-h-screen">
    <PageSection id="about-lapor-predator">
      <PageSplitSection>
        <PageTitleAlt
          :title="content.title"
          :description="content.description"
        />
      </PageSplitSection>

      <div class="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-8">
        <div v-for="partner in content.partners" :key='partner.name' class='bg-white rounded-lg shadow-lg border-2 border-mau-purple-500 p-4 flex justify-center'>
          <img class="w-full object-contain min-h-0 h-72 rounded-lg" :src="partner.image" />
        </div>
      </div>
    </PageSection>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    try {
      const content = await $content('lapor-predator/our-partners').fetch()
      return {
        content,
      }
    } catch (e) {
      error({ message: 'Content not found' })
    }
  },
}
</script>

