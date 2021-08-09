<template>
  <div class="mx-auto container px-4">
    <PageSplitSection id="advocate-mau" :img="contents.image">
      <SplitSectionText
        :title="contents.title"
        :text="contents.description"
      />
    </PageSplitSection>
    <div class="px-4">
      <ImageCarousel  :images="contents.carousel"/>
    </div>
     <div class="w-full my-8">
        <nuxt-content class="w-full prose prose-sm lg:prose-lg xl:prose-xl text-center " :document="contents" />
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
}</script>

<style scoped>
</style>
