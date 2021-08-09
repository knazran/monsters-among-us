<template>
  <div>
    <PageSection id="catch-em-predator">
      <PageSplitSection :img="content.main_poster">
        <PageTitle
          title="Catch Em' Predator"
          description="Something something something"
        />
      </PageSplitSection>
      <!-- <p
        class="
          font-normal
          md:text-xl
          text-lg text-mau-primary-700
          my-4
          py-6
          text-justify
        "
      > -->
      <div class="w-full px-2">
        <nuxt-content class="w-full prose prose-sm lg:prose-lg xl:prose-xl" :document="content" />
      </div>
        
      <!-- </p> -->
    </PageSection>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    try {
      const content = await $content('initiatives/catch-em-predator').fetch()
      console.log(content)
      return {
        content,
      }
    } catch (e) {
      error({ message: 'Blog Post not found' })
    }
  },
}
</script>
