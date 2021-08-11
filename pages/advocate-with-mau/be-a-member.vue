<template>
  <div class="mx-auto container px-4">
    <PageSplitSection :reverse="false" id="advocate-mau" :img="contents.image">
      <PageTitle :title="contents.title" :description="contents.description" />
    </PageSplitSection>
    <div class="w-full px-8 my-8">
      <nuxt-content
        class="w-full prose prose-sm lg:prose-lg xl:prose-xl text-justify"
        :document="contents"
      />
    </div>
    <PageSplitSection id="advocate-mau" :img="contents.image">
      <PageTitle :title="contents.title" :description="contents.description" />
    </PageSplitSection>
    <div class="px-4">
      <ImageCarousel :images="contents.carousel" />
    </div>
    <div class="w-full px-8 my-8">
      <nuxt-content
        class="w-full prose prose-sm lg:prose-lg xl:prose-xl text-center"
        :document="contents"
      />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const contents = await $content('advocate-with-mau/be-a-member').fetch()
    return {
      contents,
    }
  },
}
</script>

<style scoped>
</style>
