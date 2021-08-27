<template>
  <div class="bg-mau-primary-50 h-full">
    <div class="container mx-auto py-8 px-4 lg:px-8">
      <p
        class="
          font-semibold
          underline
          2xl:text-4xl
          xl:text-3xl
          lg:text-2xl
          text-2xl 
          text-mau-primary-700
          xl:text-left
          text-center
        "
      >
        As Featured In
      </p>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 mt-10 gap-8">
        <div v-for="feature of features" :key="feature.name" class="hover:shadow-lg p-4">
          <a :href="feature.link" target="_blank">
            <img :src=feature.image class="h-36 object-contain">
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