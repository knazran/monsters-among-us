<template>
  <div class="my-4">
    <PageSection id="policy">
      <PageSplitSection>
        <PageTitle title="Our policies" />
      </PageSplitSection>
      <div class="grid py-4 px-12 md:grid-cols-2 gap-6">
        <!-- Need to add text -->
        <div v-for="policy of policies" :key="policy.slug" class="py-2 px-12">
          <NuxtLink :to="`our-policies/${policy.slug}`">
            <AdvancedThumbnailCard
              :is-large="false"
              :title="policy.title"
              :img="policy.image"
            />
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
