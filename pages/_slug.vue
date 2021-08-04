<template>
  <div>
    <!-- Component props: title, author,date ,img, content -->
    <PagePost
      :title="post.title"
      :author="post.author"
      :date="post.date"
      :content="post"
      :img="post.image"
    />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post
    try {
      post = await $content('blog', params.slug).fetch()
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: 'Blog Post not found' })
    }

    return {
      post,
    }
  },
}
</script>