<template>
    <BackgroundWrapper color="green">
      <PageSection id="reading-club">
        <PageSplitSection img="/img/carousell/through-our-lens.png">
          <PageTitle title="Through Our Lens" description="A mentoring project where we develop child advocates who can protect themselves and their peers from sexual violence against children" />
        </PageSplitSection>
        <div class="w-full lg:w-4/5 px-4 my-8 md:mb-20 relative z-10">
          <nuxt-content
            class="prose prose-mau prose-md lg:prose-lg max-w-none"
            :document="content"
          />
        </div>
      </PageSection>
      <!-- <div class="md:fixed md:bottom-0 md:right-0 py-16" style="z-index: -1">
        <img
          class="object-contain h-56 lg:h-72 xl:h-96"
          :src="content.bg_image"
        />
      </div> -->
    </BackgroundWrapper>
  </template>
  
  <script>
  export default {
    async asyncData({ $content, params, error }) {
      try {
        const content = await $content('initiatives/through-our-lens').fetch()
        return {
          content,
        }
      } catch (e) {
        error({ message: 'Content not found' })
      }
    },
  }
  </script>
  
  