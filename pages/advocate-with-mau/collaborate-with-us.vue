<template>
  <div class="mx-auto container">
    <PageSplitSection :reverse="false" id="advocate-mau" :img="contents.image">
      <PageTitle :title="contents.title" :description="contents.description" />
    </PageSplitSection>
    <div class="w-full px-8 my-12">
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
      'advocate-with-mau/collaborate-with-us'
    ).fetch()
    return {
      contents,
    }
  },
}
</script>
  
}
</script>

<style scoped>
</style>
