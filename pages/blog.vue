<template>
<div class="my-12 " >
  <div class="md:py-4 my-12 relative z-10">
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
  <div class="md:fixed md:bottom-0 md:right-0 py-16" style="z-index:-1">
      <img class='object-contain h-56 lg:h-72 xl:h-96' :src="bgBlog">
    </div>
</div>
</template>

<script>
import bgBlog from '~/static/img/img_bg/gotta_read_this_bg.png';
export default {
  async asyncData({ $content }) {
    const posts = await $content('blog').sortBy('date', 'desc').fetch()
    return {
      posts,
    }
  },
  data(){
    return {
      bgBlog
    }
  }
}
</script>
