<template>
  <section class="bg-mau-primary-50 h-full my-2">
    <div class="container mx-auto">
      <p
        class="
          font-medium
          xl:text-4xl
          text-2xl text-mau-primary-700
          my-5
          lg:mx-28
          md:mx-24
          md:text-left
          text-center
        "
      >
        Gotta Read This!
      </p>
      <div
        class="
          grid
          md:grid-cols-2
          2xl:grid-cols-3
          px-36
          -mx-24
         gap-1
        "
      >
      <!-- Need to add text -->
        <div class="py-5 lg:px-12 md:px-6 mx-6" v-for="post of posts" :key="post.slug">
          <NuxtLink :to="post.slug">
            <CardsAdvancedThumbnail
              :isLarge="true"
              :isBlog="true"
              :author="post.author"
              :date="post.date"
              :title="post.title"
              :img="post.image"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content('blog').fetch()
    //const boardMembers = meetTheTeamData[0].board_members
    console.log(typeof(posts))
    return {
      posts,
    }
  },
}
</script>