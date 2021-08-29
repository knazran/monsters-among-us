<template>
  <div class="mx-auto container px-4">
    <!-- Volunteers & Vacancies -->
    <div class="mb-8 lg:mb-20 xl:mb-36">
      <PageSplitSection id="vacancies" :img="volunteersContent.thumbnail">
        <PageTitle :title="volunteersContent.title" />
      </PageSplitSection>
      <div class="w-full md:w-4/5 px-8 my-8">
        <nuxt-content
          class="w-full prose prose-mau lg:prose-lg max-w-none text-justify"
          :document="volunteersContent"
        />
      </div>
    </div>

    <!-- Collaborate With Us -->
    <div class="mb-8 lg:mb-20 xl:mb-36">
      <PageSplitSection :reverse="true" :img="collaborateContent.image">
        <PageTitle
          :title="collaborateContent.title"
          :description="collaborateContent.description"
        />
      </PageSplitSection>
      <div id="collaborate" class="w-full md:w-4/5 px-8 my-8">
        <nuxt-content
          class="w-full prose prose-mau lg:prose-lg max-w-none text-justify"
          :document="collaborateContent"
        />
      </div>
    </div>

    <!-- Be a member -->
    <div class="mb-8 lg:mb-20 xl:mb-36">
      <PageSplitSection id="vacancies" :img="beMemberContent.image">
        <PageTitle :title="beMemberContent.title" />
      </PageSplitSection>
      <div class="w-full md:w-4/5 px-8 my-8">
        <nuxt-content
          class="w-full prose prose-mau lg:prose-lg max-w-none text-justify"
          :document="beMemberContent"
        />
      </div>
      <div class="px-4">
      <ImageCarousel :images="beMemberContent.carousel" />
    </div>
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

<style scoped></style>
