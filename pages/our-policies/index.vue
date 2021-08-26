<template>
  <div class="my-4">
    <PageSection id="policy">
      <PageTitle title="Our Policies" />
      <div class="grid py-4 md:grid-cols-2 gap-5">
        <!-- Need to add text -->
        <div class="py-2" v-for="policy of policies" :key="policy.slug">
          <NuxtLink :to="`our-policies/${policy.slug}`">
            <ImageThumbnail :title="policy.title" :img="policy.image" />
          </NuxtLink>
        </div>
      </div>
    </PageSection>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const policies = await $content('our-policies').sortBy('id').fetch()
    return {
      policies,
    }
  },
}
</script>
