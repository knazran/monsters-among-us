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
      <PageSection>
        <ControlHero />
      </PageSection>

      <ControlPurpose :content="purposeContent" />
      <ControlMeetOurSupporters :content="supporter" />
      <ControlInfographic
        :content="infographicContent"
        :bgImage="getBackgroundImage2"
      />
      <PageSection>
        <ControlContact :content="contactContent" />
      </PageSection>
      <PageSection>
        <ControlEvent
          :igContent="igEvent"
          :timelineContent="timelineEvent"
          :titleContent="event"
          :podcastContent="podcastEvent"
          :liveContent="liveEvent"
        />
      </PageSection>
      <PageSection>
        <ControlWorkshop :content="workshopContent" />
      </PageSection>
      <PageSection>
        <ControlWorkshopBackground :content="workshopBackgroundContent" />
      </PageSection>
      <ControlWorkshopBackground
        :content="workshopBackgroundContent"
        :bgImage="getBackgroundImage3"
      />
      <PageSection>
        <ControlWorkshopParticipants :content="workshopParticipants" />
      </PageSection>
      <PageSection>
        <ControlPartners :content="partnersContent" />
      </PageSection>
      <!-- <ControlTest11 :content="filterContent" :bgImage="getBackgroundImage4" /> -->

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
      const purposeContent = await $content('in-control/the-purpose').fetch()
      const infographicContent = await $content(
        'in-control/resources-section'
      ).fetch()
      const contactContent = await $content('in-control/lp-chatbot').fetch()
      const igEvent = await $content('in-control/event/ig-event').fetch()
      const workshopContent = await $content(
        'in-control/predator-workshop'
      ).fetch()
      const workshopBackgroundContent = await $content(
        'in-control/background'
      ).fetch()
      const workshopParticipants = await $content(
        'in-control/background-participants'
      ).fetch()
      const partnersContent = await $content(
        'in-control/in-control-partners'
      ).fetch()
      const filterContent = await $content('in-control/ig-filter').fetch()

      const podcastEvent = await $content(
        'in-control/event/podcast-event'
      ).fetch()
      const event = await $content('in-control/event/event').fetch()
      const timelineEvent = await $content(
        'in-control/event/timeline-event'
      ).fetch()
      const liveEvent = await $content('in-control/event/title-event').fetch()
      const supporter = await $content('in-control/meet-our-supporters').fetch()

      return {
        purposeContent,
        infographicContent,
        contactContent,
        igEvent,
        workshopContent,
        workshopBackgroundContent,
        workshopParticipants,
        partnersContent,
        filterContent,
        podcastEvent,
        event,
        liveEvent,
        timelineEvent,
        supporter,
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