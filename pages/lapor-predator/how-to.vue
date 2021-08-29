<template>
  <div class="min-h-screen" :style="{ backgroundImage: getBackgroundImage}">
    <PageSection id="about-lapor-predator">
      <PageSplitSection>
        <PageTitleAlt
          :title="content.title"
          :description="content.description"
        />
        <!-- <template #media>
          <div class="w-full h-96">
            <Video title='test' src="https://www.youtube.com/embed/641nm_sDejU"/>
          </div>
        </template> -->
      </PageSplitSection>
      <div class="flex justify-center items-center">
        <div class="w-full lg:w-1/2 h-96">
          <Video title="test" src="https://www.youtube.com/embed/641nm_sDejU" />
        </div>
      </div>

      <div class="w-full lg:w-4/5 px-4 my-8 md:mb-20">
        <nuxt-content
          class="w-full prose prose-lp prose-sm lg:prose-lg max-w-none"
          :document="content"
        />
      </div>
    </PageSection>
  </div>
</template>

<script>
import TextureGreen from '~/static/img/textures/texture-green-2.png'
export default {
  async asyncData({ $content, params, error }) {
    try {
      const content = await $content('lapor-predator/how-to').fetch()
      return {
        content,
      }
    } catch (e) {
      error({ message: 'Content not found' })
    }
  },
  data() {
    return {
      bgGreen: TextureGreen,
    }
  },
  computed: {
    getBackgroundImage() {
      return `url(${this.bgGreen})`;
    },
  },
}
</script>
