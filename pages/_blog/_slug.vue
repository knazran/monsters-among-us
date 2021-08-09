<template>
  <div class="container mx-auto">
    <div class="px-12 md:px-24 lg:px-56 my-5">
      <!-- Title -->
      <p
        class="
          font-medium
          md:text-6xl
          text-5xl text-mau-primary-700
          my-1
          -mx-1
          md:text-left
          text-center
        "
      >
        {{ post.title }}
      </p>
      <!-- Author -->
      <p
        class="
          font-light
          text-md text-mau-primary-700
          mt-1
          md:text-left
          text-center
        "
      >
        By: {{ post.author }}
      </p>
      <!-- Date -->
      <p
        class="
          font-light
          text-md text-mau-primary-700
          md:mt-1 md:text-left
          text-center
        "
      >
        {{ post.date }}
      </p>
      <!-- Image -->

      <img :src="post.image" class="my-5" />

      <!-- Content -->
      <nuxt-content class="prose prose-sm lg:prose-lg xl:prose-xl" :document="post" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post
    try {
      post = await $content('blog', params.slug).fetch()
    } catch (e) {
      error({ message: 'Blog Post not found' })
    }

    return {
      post,
    }
  },
}
</script>
