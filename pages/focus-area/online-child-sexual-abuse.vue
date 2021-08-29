<template>
  <BackgroundWrapper color="beige">
    <div class="container mx-auto">
      <PageSection id="child-sexual-abuse">
        <p
          class="
            py-4
            text-sm text-mau-secondary-900
            font-light
            italic
            text-center
          "
        >
          Trigger Warning: Please be aware that the following information may be
          difficult to read and may affect you. If you are a survivor, please
          make sure you take care of yourself and ensure you have someone you
          can talk to.
        </p>
        <PageSplitSection>
          <PageTitle :title="content.title" />
        </PageSplitSection>

        <TextSplitSection>
          <template #left>
            <h2 class="font-medium lg:text-4xl text-3xl text-left">
              {{ fiveFacts.title }}
            </h2>
          </template>
          <template #right>
            <nuxt-content
              class="prose prose-mau prose-md lg:prose-lg max-w-none"
              :document="fiveFacts"
            />
          </template>
        </TextSplitSection>

        <!-- Content -->
        <div class="flex flex-col-reverse md:flex-row md:py-12">
          <div
            class="px-4 md:px-8 w-full md:w-3/4 lg:w-4/5"
            style="scroll-padding-top: 100px"
          >
            <nuxt-content
              class="prose prose-mau prose-md max-w-none"
              :document="content"
            />
          </div>
          <div class="w-full md:w-1/4 lg:w-1/5 my-8 px-4">
            <ul class="px-4 py-2 rounded-md border flex-grow-0">
              <li
                v-for="link of tableOfContent"
                :key="link.id"
                class="hover:underline"
                :class="{
                  'text-mau-primary-700 font-semibold py-4 text-sm md:text-md border-b px-2 last:border-b-0':
                    link.depth === 2,
                  hidden: link.depth === 3,
                }"
              >
                <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </PageSection>
    </div>
  </BackgroundWrapper>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    try {
      const content = await $content(
        'issue/online-child-sexual-abuse/index'
      ).fetch()
      const fiveFacts = await $content(
        'issue/online-child-sexual-abuse/five-facts'
      ).fetch()

      const tableOfContent = content.toc.filter((item) => {
        return item.depth === 2
      })

      return {
        content,
        fiveFacts,
        tableOfContent,
      }
    } catch (e) {
      error({ message: 'Content not found' })
    }
  },
}
</script>

<style scoped>
h2 {
  scroll-margin-top: 150px;
}
</style>
