<template>
  <BackgroundWrapper color="beige">
    <div class="py-4">
      <PageSection id="advocate">
        <!-- Volunteers & Vacancies -->
        <div class="mb-8 lg:mb-20 xl:mb-36">
          <PageSplitSection id="vacancies" :img="volunteersContent.thumbnail">
            <PageTitle :title="volunteersContent.title" />
            <div class="w-full my-8">
              <nuxt-content
                class="
                  w-full
                  prose prose-mau
                  lg:prose-lg
                  max-w-none
                  text-justify
                "
                :document="volunteersContent"
              />
            </div>
          </PageSplitSection>
        </div>

        <!-- Collaborate With Us -->
        <div class="mb-8 lg:mb-20 xl:mb-36">
          <PageSplitSection :reverse="true" :img="collaborateContent.image">
            <PageTitle
              :title="collaborateContent.title"
              :description="collaborateContent.description"
            />
            <div id="collaborate" class="w-full my-8">
              <nuxt-content
                class="
                  w-full
                  prose prose-mau
                  lg:prose-lg
                  max-w-none
                  text-justify
                "
                :document="collaborateContent"
              />
            </div>
          </PageSplitSection>
        </div>

        <!-- Be a member -->
        <div class="mb-8 lg:mb-20 xl:mb-36">
          <PageSplitSection id="vacancies" :img="beMemberContent.image">
            <PageTitle :title="beMemberContent.title" />
            <div class="w-full my-8">
              <nuxt-content
                class="
                  w-full
                  prose prose-mau
                  lg:prose-lg
                  max-w-none
                  text-justify
                "
                :document="beMemberContent"
              />
              <div class="py-4 -mx-2 flex md:justify-start justify-center">
                <a href="bit.ly/sayamaujoinmau "
                  ><AccentButton text="Be A Member"
                /></a>
              </div>
            </div>
          </PageSplitSection>

          <div class="px-4">
            <ImageCarousel :images="beMemberContent.carousel" />
          </div>
        </div>
      </PageSection>
    </div>
  </BackgroundWrapper>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    //
    try {
      const beMemberContent = await $content(
        'advocate-with-mau/editable/be-a-member'
      ).fetch()
      const collaborateContent = await $content(
        'advocate-with-mau/editable/collaborate-with-us'
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
