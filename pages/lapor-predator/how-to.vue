<template>
  <BackgroundWrapper color="green">
    <div class="min-h-screen">
      <PageSection id="about-lapor-predator">
        <PageSplitSection>
          <PageTitleAlt
            :title="content.title"
            :description="content.description"
          />
        </PageSplitSection>
        <div class="flex justify-center items-center">
          <div class="w-full lg:w-1/2 h-96">
            <Video
              title="test"
              src="https://www.youtube.com/embed/641nm_sDejU"
            />
          </div>
        </div>

        <div class="w-full lg:w-4/5 px-4 my-8 md:mb-20 relative z-10">
          <nuxt-content
            class="w-full prose prose-lp prose-sm lg:prose-lg max-w-none"
            :document="content"
          />
        </div>
      </PageSection>
      <div class="md:relative w-full flex justify-center">
        <img
          class="
            md:absolute md:bottom-0 md:right-0
            object-contain
            h-56
            lg:h-72
            xl:h-96
          "
          :src="content.bg_image"
        />
      </div>
    </div>
  </BackgroundWrapper>
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
      return `url(${this.bgGreen})`
    },
  },
}
</script>
