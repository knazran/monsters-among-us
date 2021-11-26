<template>
  <div
    :style="{ backgroundImage: getBackgroundImage }"
    style="background-size: cover"
  >
    <div
      class="
        min-h-screen
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

       <ControlTest2 :content="content1" />
        <ControlMeetOurSupporters :content="supporter" />
      <ControlTest3 :content="content2" :bgImage="getBackgroundImage2" />
      <PageSection>
        <ControlTest4 :content="content3" />
      </PageSection>
      <PageSection>
        <ControlTest5
          :igContent="igEvent"
          :timelineContent="timelineEvent"
          :titleContent="event"
          :podcastContent="podcastEvent"
          :liveContent="liveEvent"
        />
      </PageSection>
      <PageSection>
        <ControlTest6 :content="content5" />
      </PageSection>
      <PageSection>
        <ControlTest7 :content="content6" />
      </PageSection>
      <ControlTest8 :content="content6" :bgImage="getBackgroundImage3" />
      <PageSection>
        <ControlTest9 :content="content7" />
      </PageSection>
      <PageSection id="our-partners">
        <ControlTest10 :content="content8" />
      </PageSection>
        <ControlTest11 :content="content9" :bgImage="getBackgroundImage4"/>

      <!-- <TextHighlight title="IG Live" /> -->
    </div>
  </div>
</template>

<script>
import Radial from '~/static/img/textures/radial.png'
import Background from '~/static/img/in-control/resources_bg.jpg'
import GreenBg from '~/static/img/textures/texture-green-2.png'
import Background2 from '~/static/img/in-control/resources_bg2.jpg'


export default {
  data() {
    return {
      bgGreen: Radial,
      background: Background,
      background2: Background2,

      bgGreenTexture: GreenBg,
    }
  },
  async asyncData({ $content, params, error }) {
    try {
      const content1 = await $content('in-control/the-issue').fetch()
      const content2 = await $content('in-control/resources-section').fetch()

      const content3 = await $content('in-control/lp-chatbot').fetch()
      const igEvent = await $content('in-control/event/ig-event').fetch()

      const content5 = await $content('in-control/predator-workshop').fetch()
      const content6 = await $content('in-control/background').fetch()
      const content7 = await $content(
        'in-control/background-participants'
      ).fetch()
      const content8 = await $content(
        'lapor-predator/intro-content/about'
      ).fetch()
      const content9 = await $content('in-control/ig-filter').fetch()

      const podcastEvent = await $content(
        'in-control/event/podcast-event'
      ).fetch()
      const event = await $content('in-control/event/event').fetch()
      const timelineEvent = await $content(
        'in-control/event/timeline-event'
      ).fetch()
           const liveEvent = await $content(
        'in-control/event/title-event'
      ).fetch()
        const supporter = await $content(
        'in-control/meet-our-supporters'
      ).fetch()

      return {
        content1,
        content2,
        content3,
        igEvent,
        content5,
        content6,
        content7,
        content8,
        content9,
        podcastEvent,
        event,
        liveEvent,
        timelineEvent,
        supporter
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
    getBackgroundImage3() {
      return `url(${this.bgGreenTexture})`
    },
      getBackgroundImage4() {
      return `url(${this.background2})`
    },
  },
}
</script>

<style scoped>
</style>