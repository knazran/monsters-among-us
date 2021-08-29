<template>
<div class="py-12 bg-scroll lg:bg-fill bg-no-repeat lg:bg-right bg-top" style="background-image: url(img//img_bg/gotta_read_this_bg.png)">
  <div class="md:py-4 py-12">
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
              :content="post"
            />
          </NuxtLink>
        </div>
      </div>
    </PageSection>
  </div>
</div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content('blog').sortBy('date', 'desc').fetch()
    return {
      posts,
    }
  },
}
</script>
