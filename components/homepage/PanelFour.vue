<template>
  <div class="bg-mau-primary-50 h-full">
    <div class="container mx-auto py-8 px-4 lg:px-8">
      <p
        class="
          font-medium
          xl:text-4xl
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
          flex flex-col
          md:flex-row
          md:justify-between
          mt-10
          space-y-12
          md:space-y-0 md:space-x-8
          items-stretch
        "
      >
        <SimpleThumbnailCard
          v-for="initiative in initiatives"
          :key="initiative.title"
          :is-button="false"
          :text-top="initiative.title"
          :text-bot="initiative.description"
          :image="initiative.image"
        />
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
    const data = await this.$content('initiatives').fetch()
    this.initiatives = data[0].initiatives
  },
}
</script>

<style scoped>
#describe {
  font-size: 1.8rem;
}
</style>