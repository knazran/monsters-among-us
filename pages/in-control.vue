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
        overflow-x-hidden
      "
    >
      <!-- Element-specific configuration options can be passed like this -->
      <ControlHero />

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
      <ControlWorkshopBackground2
        :content="workshopBackgroundContent"
        :bgImage="getBackgroundImage3"
      />
      <PageSection>
        <ControlWorkshopParticipants :content="workshopParticipants" />
      </PageSection>
      <ControlPartners
        :content="partnersContent"
        :bgImage="getBackgroundImage4"
      />
      <ControlFilter :content="filterContent" />

      <ControlWallpaper :content="wallpaperContent" />

      <!-- <TextHighlight title="IG Live" /> -->
    </div>
  </div>
</template>

<script>
import Radial from '~/static/img/textures/radial.png'
import Background from '~/static/img/in-control/resources_bg.png'
import GreenBg from '~/static/img/textures/texture-green-2.png'
import TextureBeige from '~/static/img/textures/texture-beige-2.png'

export default {
  data() {
    return {
      bgGreen: Radial,
      background: Background,
      bgGreenTexture: GreenBg,
      bgBeige: TextureBeige,
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
        'in-control/partners/index'
      ).fetch()
      const filterContent = await $content('in-control/ig-filter').fetch()

      const podcastEvent = await $content(
        'in-control/event/podcast-event'
      ).fetch()
      const event = await $content('in-control/event/event').fetch()
      const timelineEvent = await $content('in-control/schedule/index').fetch()
      const liveEvent = await $content('in-control/event/title-event').fetch()
      const supporter = await $content('in-control/meet-our-supporters').fetch()
      const wallpaperContent = await $content('in-control/wallpaper').fetch()

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
        wallpaperContent,
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
      return `url(${this.bgBeige})`
    },
  },
}
</script>

<style scoped>
</style>