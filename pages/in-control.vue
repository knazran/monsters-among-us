<template>
  <div
    :style="{ backgroundImage: getBackgroundImage }"
    style="background-size: cover"
  >
    <div
      class="
        min-h-screen
        py-12
        bg-scroll
        rotate-180
        lg:bg-contain
        bg-no-repeat
        lg:bg-right
        bg-top
      "
    >

    <!-- Element-specific configuration options can be passed like this -->
   
      <ControlTest />

      <PageSection>
        <ControlTest2 :content="content1" />
      </PageSection>

        <ControlTest3 :content="content2" :bgImage="getBackgroundImage2"/>
      <PageSection>
        <ControlTest4 :content="content3" />
      </PageSection>
      <PageSection>
        <ControlTest5 :content="content2" :timelineContent="timelineContent" />
      </PageSection>
      <PageSection>
        <ControlTest6 :content="content5" />
      </PageSection>
      <PageSection>
        <ControlTest7 :content="content6" />
      </PageSection>
      <PageSection>
        <ControlTest8 :content="content6" />
      </PageSection>
      <PageSection>
        <ControlTest9 :content="content7" />
      </PageSection>
      <PageSection id="our-partners">
        <ControlTest10 :content="content8" />
      </PageSection>
      <PageSection id="our-partners">
        <ControlTest11 :content="content9" />
      </PageSection>

      <!-- <TextHighlight title="IG Live" /> -->
    </div>
  </div>
</template>

<script>
import Radial from '~/static/img/textures/radial.png'
  import Background from '~/static/img/in-control/Advocate.png'


export default {

  data() {
    return {
      bgGreen: Radial,
      background:Background
    }
  },
  async asyncData({ $content, params, error }) {
    try {
      const content1 = await $content('in-control/the-issue').fetch()
      const content2 = await $content('in-control/resources-section').fetch()

      const content3 = await $content('in-control/lp-chatbot').fetch()
      const content5 = await $content('in-control/predator-workshop').fetch()
      const content6 = await $content('in-control/background').fetch()
      const content7 = await $content(
        'in-control/background-participants'
      ).fetch()
      const content8 = await $content(
        'lapor-predator/intro-content/about'
      ).fetch()
      const content9 = await $content('in-control/ig-filter').fetch()

      const timeline = await $content('about-us/milestone').fetch()
      const timelineContent = timeline[0]

      return {
        content1,
        content2,
        content3,
        content5,
        content6,
        content7,
        content8,
        content9,
        timelineContent,
      }
    } catch (e) {
      error({ message: 'Content not found' })
    }
  },
  computed: {
    getBackgroundImage() {
      return `url(${this.bgGreen})`
    },
     getBackgroundImage2() {
      return `url(${this.background})`
    },
  },
}
</script>

<style scoped>

</style>