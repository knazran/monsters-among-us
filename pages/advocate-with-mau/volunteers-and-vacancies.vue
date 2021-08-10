<template>
  <div class="mx-auto container">
    <PageSplitSection id="advocate-mau" :img="contents.thumbnail">
      <PageTitle :title="contents.title" :description="contents.description" />
    </PageSplitSection>
    <div class="w-full px-6 my-12">
      <nuxt-content
        class="w-full prose prose-sm lg:prose-lg xl:prose-xl text-justify"
        :document="contents"
      />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const contents = await $content(
      'advocate-with-mau/editable/volunteers-and-vacancies'
    ).fetch()
    return {
      contents,
    }
  },
}
</script>

<style scoped>
</style>
