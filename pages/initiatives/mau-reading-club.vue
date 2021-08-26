<template>
  <div class="container mx-auto ">
    <PageSection id="reading-club">
         
        <!-- Content -->
        <nuxt-content class="prose prose-md lg:prose-lg max-w-none" :document="content" />
    

    </PageSection>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    try {
      const content = await $content('initiatives/mau-reading-club').fetch()
      return {
        content,
      }
    } catch (e) {
      error({ message: 'Content not found' })
    }
  },

}
</script>

