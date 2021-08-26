<template>
  <div>
    <PageSection id="reading-club">
      <PageSplitSection :img="content.main_poster">
        <PageTitle :title="content.title" :description="content.description" />
      </PageSplitSection>
 <div class="py-8 px-8">
        <nuxt-content
          class="prose prose-md lg:prose-lg max-w-none"
          :document="content"
        />
      </div>
  
    </PageSection>
  </div>
</template>

<script>
export default {
   async asyncData({ $content, params, error }) {
    try {
      const content = await $content('initiatives/colour-with-mau').fetch()
      return {
        content,
      }
    } catch (e) {
      error({ message: 'Content not found' })
    }
  },
}

</script>

