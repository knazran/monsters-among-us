<template>
  <div class="container mx-auto">
    <div class="px-4 my-4 flex flex-col items-center">
      <!-- Image -->
      <div
        class="mx-auto rounded-lg flex justify-center w-full xl:h-96 2xl:h-99"
      >
        <img :src="policy.image" class="my-5 object-cover w-full h-full" />
      </div>

      <div
        class="
          my-2
          md:my-4
          px-4
          pb-8
          md:py-4
          md:px-12
          bg-white
          md:w-4/5
          border
          rounded-lg
          shadow
          md:transform
          md:-translate-y-32
        "
      >
        <div class="mb-8">
          <!-- Title -->
          <p class="font-semibold text-3xl my-1 text-left">
            {{ policy.title }}
          </p>
        </div>

        <nuxt-content
          class=" prose prose-md lg:prose-lg max-w-none"
          :document="policy"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let policy
    try {
      policy = await $content('our-policies', params.slug).fetch()
    } catch (e) {
      error({ message: 'Blog policy not found' })
      console.log('Failure')
    }

    return {
      policy,
    }
  },
}
</script>
