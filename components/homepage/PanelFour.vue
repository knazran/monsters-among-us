<template>
  <div class="bg-mau-primary-50 h-full">
    <div class="container mx-auto py-8 lg:py-12 px-4 lg:px-8">
      <p
        class="
          font-semibold
          underline
          2xl:text-4xl
          xl:text-3xl
          lg:text-2xl
          text-2xl text-mau-primary-700
          xl:text-left
          text-center
        "
      >
        Our Initiatives
      </p>
      <div
        class="
          mt-10
          space-y-12
          md:space-y-0 md:space-x-8
          items-stretch
          grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 py-8
        "
      >
        <NuxtLink
          v-for="initiative in initiatives"
          :key="initiative.title"
          class="flex justify-center hover:shadow-2xl hover:border hover:border-mau-primary-400"
          :to="initiative.link"
        >
          <SimpleThumbnailCard
            :is-button="false"
            :text-top="initiative.title"
            :text-bot="initiative.preview"
            :image="initiative.logo"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      initiatives: [],
    }
  },
  async fetch() {
    const initiatives = await this.$content('initiatives').sortBy('order').fetch()
    this.initiatives = initiatives
  },
}
</script>

<style scoped>
#describe {
  font-size: 1.8rem;
}
</style>
