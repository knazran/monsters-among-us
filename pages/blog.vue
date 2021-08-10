<template>
  <div class="my-4">
    <PageSection id="blog-posts">
      <PageTitle title="Gotta Read This!" />
      <div
        class="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 py-8"
      >
        <!-- Need to add text -->
        <div v-for="post of posts" :key="post.slug">
          <NuxtLink :to="`blog/${post.slug}`">
            <AdvancedThumbnailCard
              :is-large="true"
              :is-blog="true"
              :author="post.author"
              :date="post.date"
              :title="post.title"
              :img="post.image"
            />
          </NuxtLink>
        </div>
      </div>
    </PageSection>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content('blog').fetch()
    return {
      posts,
    }
  },
}
</script>
