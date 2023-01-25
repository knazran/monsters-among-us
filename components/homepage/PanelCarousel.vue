<template>

  <div class="md:py-12 py-8" :style="{ backgroundImage: getBackgroundImage }">
        <VueSlickCarousel :autoplay="true" :arrows="true" :dots="true">
          <div>
            <PageSplitSectionCarousell :img="dh.image">
              <PageTitle title="DH Launch" />
              <nuxt-content
                class="block font-body font-medium px-2 py-4 prose prose-black prose-lg lg:prose-xl max-w-none"
                :document="dh"
              />
            </PageSplitSectionCarousell>
          </div>
          <div>
            <PageSplitSectionCarousell :img="chatbot.image" :reverse="true">
              <PageTitle title="Chatbot is Under Construction" />
              <nuxt-content
                class="block font-body font-medium px-2 py-4 prose prose-black prose-lg lg:prose-xl max-w-none"
                :document="chatbot"
              />
            </PageSplitSectionCarousell>
          </div>
          <div>
            <PageSplitSectionCarousell :img="lens.image">
              <PageTitle title="Through Our Lens" />
              <nuxt-content
                class="block font-body font-medium px-2 py-4 prose prose-black prose-lg lg:prose-xl max-w-none"
                :document="lens"
              />
              <RouteButton text="Read More" to="/initiatives/through-our-lens"></RouteButton>
            </PageSplitSectionCarousell>
          </div>
        </VueSlickCarousel>
  
      
    </div>
  </template>
  
  <script>
import TextureGreen from '~/static/img/textures/texture-green-2.png'
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  
  export default {
    components: {
      VueSlickCarousel,
    },
    data() {
    return {
      dh: [],
      chatbot: [],
      lens: [],
      bgGreen: TextureGreen,

    }
  },
  async fetch() {
    const dh = await this.$content('carousell/dh').fetch()
    this.dh = dh
    const chatbot = await this.$content('carousell/chatbot').fetch()
    this.chatbot = chatbot
    const lens = await this.$content('carousell/through-our-lens').fetch()
    this.lens = lens
  },
    computed: {
      getBackgroundImage() {
        return `url(${this.bgGreen})`
      },
    }, //
  }
  </script>
  !-- Content Design -->
  <style scoped>
  @media (min-width: 480px) {
    .timeline {
      width: 28rem !important;
    }
  }
  @media (min-width: 0px) {
    .timeline {
      width: 100rem !important;
    }
  }
  </style>
  