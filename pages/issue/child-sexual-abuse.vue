<template>
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
        difficult to read and may affect you. If you are a survivor, please make
        sure you take care of yourself and ensure you have someone you can talk
        to.
      </p>
      <PageSplitSection>
        <PageTitle :title="content.title" />
      </PageSplitSection>
      
      <div class="flex flex-col md:flex-row py-4">
        <!-- Left Side-->
        <div class="md:w-1/2 2xl:w-2/5 text-mau-secondary-900 px-6 mb-8">
          <div class="md:pr-20">
            <p class="font-medium lg:text-4xl text-3xl text-left">
              {{ fiveFacts.title }}
            </p>
          </div>
        </div>
        <!-- End Left Side-->

        <!-- Right Side with List and button -->
        <div class="md:w-1/2 2xl:w-1/2 lg:px-0 px-5">
          <div class="2xl:pr-12 xl:pr-20">
            <nuxt-content
              class="prose prose-mau prose-md lg:prose-xl max-w-none"
              :document="fiveFacts"
            />
          </div>
        </div>
        <!--End Right side with Pic -->
      </div>

      <!-- Content -->
      <div class="py-8 px-8 xl:w-4/5">
        <nuxt-content
          class="prose prose-mau prose-md lg:prose-lg max-w-none"
          :document="content"
        />
      </div>
      
    </PageSection>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    try {
      const content = await $content('issue/child-sexual-abuse/index').fetch()
      const fiveFacts = await $content('issue/child-sexual-abuse/five-facts').fetch()
      console.log(content)
      return {
        content,
        fiveFacts
      }
    } catch (e) {
      error({ message: 'Content not found' })
    }
  },
}
</script>
