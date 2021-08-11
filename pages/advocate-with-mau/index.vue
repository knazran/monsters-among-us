<template>
  <div class="mx-auto container px-4">
    <!-- Volunteers & Vacancies -->
    <PageSplitSection id="advocate-mau" :img="volunteersContent.thumbnail">
      <PageTitle
        :title="volunteersContent.title"
        :description="volunteersContent.description"
      />
    </PageSplitSection>
    <div class="w-full px-8 my-8">
      <nuxt-content
        class="w-full prose prose-sm prose-mau lg:prose-lg xl:prose-xl text-justify"
        :document="volunteersContent"
      />
    </div>
    <!-- Collaborate With Us -->
    <PageSplitSection
      :reverse="true"
      id="advocate-mau"
      :img="collaborateContent.image"
    >
      <PageTitle
        :title="collaborateContent.title"
        :description="collaborateContent.description"
      />
    </PageSplitSection>
    <div class="w-full px-8 my-8">
      <nuxt-content
        class="w-full prose prose-sm prose-mau lg:prose-lg xl:prose-xl text-justify"
        :document="collaborateContent"
      />
    </div>
    <!-- Be a member -->
    <PageSplitSection id="advocate-mau" :img="beMemberContent.image">
      <PageTitle
        :title="beMemberContent.title"
        :description="beMemberContent.description"
      />
    </PageSplitSection>
    <div class="px-4">
      <ImageCarousel :images="beMemberContent.carousel" />
    </div>
    <div class="w-full px-8 my-8">
      <nuxt-content
        class="w-full prose prose-sm prose-mau lg:prose-lg xl:prose-xl text-center"
        :document="beMemberContent"
      />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    //
    try {
      const beMemberContent = await $content(
        'advocate-with-mau/be-a-member'
      ).fetch()
      const collaborateContent = await $content(
        'advocate-with-mau/collaborate-with-us'
      ).fetch()
      const volunteersContent = await $content(
        'advocate-with-mau/editable/volunteers-and-vacancies'
      ).fetch()
      return {
        beMemberContent,
        collaborateContent,
        volunteersContent,
      }
    } catch (e) {
      error({ message: 'Content not found' })
    }
  }, //
}
</script>

<style scoped>
</style>
