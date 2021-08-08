<template>
  <PageSection id="blog-posts">
    <p
      class="
        font-medium
        xl:text-4xl
        text-2xl text-mau-primary-700
        my-6
        md:text-left
        text-center
      "
    >
      Gotta Read This!
    </p>
    <div class="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 py-8">
      <!-- Need to add text -->
      <div v-for="post of posts" :key="post.slug">
        <NuxtLink :to="`blog/${post.slug}`">
          <CardsAdvancedThumbnail
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
