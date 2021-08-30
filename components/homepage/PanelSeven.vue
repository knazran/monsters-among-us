<template>
  <div class="bg-mau-primary-50 h-full">
    <div class="container mx-auto py-8 lg:py-16 px-4 lg:px-8">
      <PageTitle title="As Featured In" />
      <!-- <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-5 mt-10 gap-8"> -->
      <div class="flex flex-wrap flex-shrink-0 mt-8 spaces-x-8 justify-center">
        <div v-for="feature of features" :key="feature.name" class="hover:shadow-lg p-4 flex justify-center rounded-md w-1/2 md:w-1/3 lg:w-1/5 2xl:w-1/6">
          <a :href="feature.link" target="_blank">
            <img :src=feature.image class="h-16 object-contain">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [],
    }
  },
  async fetch() {
    const data = await this.$content('as-featured-in').fetch()
    console.log(data)
    this.features = data[0].features
  },
}

</script>