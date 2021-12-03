<template>
  <div>
    <HeadingControl :title="titleContent.title" />
    <div class="flex px-6 justify-center py-5">
      <p class="px-6 text-center lg:text-2xl
        md:text-xl
         text-base font-body font-medium">
        {{ titleContent.description }}
      </p>
    </div>
    <div class="py-4">
      <div class="flex flex-col md:flex-row -py-4">
        <!-- Left Side-->
        <div class="md:w-1/2 text-mau-secondary-900 px-8 md:mb-8">
          <div class="">
            <slot name="left">
              <div class="py-3">
                <ParagraphHighlightAlt :content="igContent" />
              </div>
              <div
                style="
                  width: 100%;
                  height: 0;
                  padding-bottom: 100%;
                  position: relative;
                "
              >
                <iframe
                  src="https://giphy.com/embed/l2dr7ckgYNdnJHRdYh"
                  width="100%"
                  height="100%"
                  style="position: absolute"
                  frameBorder="0"
                  class="giphy-embed"
                  allowFullScreen
                ></iframe>
              </div>
            </slot>
            <div class="md:hidden md:my-0 my-4">
              <ParagraphHighlight
                :content="igContent"
                :isDescription="false"
                :isSize="false"
              />
            </div>
          </div>
        </div>
        <!-- End Left Side-->

        <!-- Right Side with List and button -->
        <div
          class="
            md:block
            hidden
            md:w-1/2
            lg:px-0
            px-8
            md:py-0
            py-8
            md:flex md:items-center md:justify-center
          "
        >
          <div class="2xl:pr-12 xl:pr-12">
            <slot name="right">
              <div class="md:my-0 my-4">
                <ParagraphHighlight
                  :content="igContent"
                  :isDescription="false"
                  :isSize="false"
                />
              </div>
            </slot>
          </div>
        </div>
        <!--End Right side with Pic -->
      </div>
    </div>

    <!-- Podcast -->
    <div class="py-4">
      <div class="flex md:flex-row py-4 flex-col-reverse">
        <!-- Left Side-->
        <div
          class="
            md:w-1/2
            text-mau-secondary-900
            px-8
            md:mb-8 md:flex md:items-center md:justify-center
          "
        >
          <div class="">
            <slot name="left">
              <div class="flex justify-center">
                <div class="my-4">
                  <ParagraphHighlight
                    :content="podcastContent"
                    :isDescription="false"
                    :isSize="false"
                  />
                </div>
              </div>
            </slot>
          </div>
        </div>
        <!-- End Left Side-->

        <!-- Right Side with List and button -->
        <div class="md:w-1/2 lg:px-0 px-8 md:py-0 py-8">
          <div class="2xl:pr-12 xl:pr-12">
            <slot name="right">
              <div class="py-3">
                <ParagraphHighlightAlt :content="podcastContent" />
              </div>
              <iframe
                src="https://open.spotify.com/embed/show/7svEuJevquU3hwOU3pEB1U?utm_source=generator&theme=0"
                width="100%"
                height="232"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              ></iframe>
              <div class="py-4 flex justify-center">
                <a href="https://linktr.ee/YoureInControl_Podcast">
                  <button
                    class="
                      rounded-xl
                      bg-mau-primary-700
                      text-center text-white
                      2xl:w-56
                      xl:w-48
                      w-40
                      h-10
                      py-2
                      bottom-4
                      right-4
                      md:bottom-12 md:right-12
                      transform
                      hover:scale-105
                      font-body font-thin
                      text-sm
                    "
                  >
                    Listen here!
                  </button>
                </a>
              </div>
            </slot>
          </div>
        </div>
        <!--End Right side with Pic -->
      </div>
    </div>
    <!-- FB live -->
    <!-- New Line -->
    <div class="py-4">
      <div class="flex flex-col md:flex-row py-4">
        <!-- Left Side-->
        <div class="md:w-1/2 text-mau-secondary-900 px-8 md:mb-8">
          <div class="">
            <slot name="left">
              <div class="py-3">
                <ParagraphHighlightAlt
                  :content="liveContent"
                  :isLarger="true"
                />
              </div>
              <div
                style="
                  width: 100%;
                  height: 0;
                  padding-bottom: 100%;
                  position: relative;
                "
              >
                <iframe
                  src="https://giphy.com/embed/2sPA7Baytpmj1ca1y0"
                  width="100%"
                  height="100%"
                  style="position: absolute"
                  frameBorder="0"
                  class="giphy-embed"
                  allowFullScreen
                ></iframe>
              </div>
            </slot>
            <div class="md:hidden block md:my-0 my-4">
              <ParagraphHighlight
                :content="liveContent"
                :isDescription="false"
                :isSize="false"
              />
            </div>
          </div>
        </div>
        <!-- End Left Side-->

        <!-- Right Side with List and button -->
        <div
          class="
            md:w-1/2
            lg:px-0
            px-8
            md:py-0
            md:flex md:items-center md:justify-center
          "
        >
          <div class="2xl:pr-12 xl:pr-12">
            <slot name="right">
              <div class="md:block hidden md:my-0 my-4">
                <ParagraphHighlight
                  :content="liveContent"
                  :isDescription="false"
                  :isSize="false"
                />
              </div>
            </slot>
          </div>
        </div>
        <!--End Right side with Pic -->
      </div>
    </div>

    <!-- BUTTON -->
    <div class="flex flex-col">
      <!-- <div class="flex justify-center">
        <NuxtLink to="/in-control">
          <button
            class="
              rounded-xl
              bg-mau-primary-700
              text-center text-white
              2xl:w-64
              xl:w-56
              w-48
              h-12
              py-2
              bottom-4
              right-4
              md:bottom-12 md:right-12
              transform
              hover:scale-105
              md:text-lg
              text-base
              font-body font-thin
            "
          >
            Read More
          </button>
        </NuxtLink>
      </div> -->
      <div class="flex justify-center py-1">
        <p
          class="
            px-4
            prose prose-black prose-md prose-md
            lg:prose-lg
            max-w-none
            font-body font-medium
          "
        >
          Stream the file on these platforms:
        </p>
      </div>

      <!-- Social Media -->
      <div
        id="social-media"
        class="
          flex
          justify-center
          space-x-1
          mb-4
          md:mb-0
          mx-4
          items-start
          md:items-center
        "
      >
        <a href="https://www.facebook.com/MonstersAmongUsMY" target="_blank">
          <iconify-icon
            class="sample rotation-90"
            :icon="icons.facebook"
            height="48"
            :style="{ color: 'white' }"
          />
        </a>
        <a href="https://www.instagram.com/monstersamongus_my" target="_blank">
          <iconify-icon
            :icon="icons.instagram"
            height="48"
            :style="{ color: 'white' }"
          />
        </a>
        <a href="https://twitter.com/mau17_my" target="_blank">
          <iconify-icon
            :icon="icons.twitter"
            height="48"
            :style="{ color: 'white' }"
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UCvw1lAGU1waLvbyc2UHlJOA"
          target="_blank"
        >
          <iconify-icon
            :icon="icons.youtube"
            height="48"
            :style="{ color: 'white' }"
          />
        </a>
      </div>
      <!-- Social Media -->
    </div>

    <div class="w-full sm:py-4">
      <PageSection id="milestone">
        <div class="w-full">
          <div class="py-12">
            <div>
              <ParagraphHighlightAlt :content="timelineContent" />
            </div>
          </div>
          <vue-horizontal class="horizontal" responsive :button="true">
            <div
              v-for="(info, index) in timelineContent.milestone"
              :key="info.title"
              class="sm:px-48 mx-24 px-2 cursor-default"
            >
              <button
                class="
                  cursor-default
                  relative
                  z-50
                  bg-mau-primary-700
                  rounded-full
                  h-3
                  w-3
                  flex
                  items-center
                  justify-center
                  left-40
                  sm:left-0
                  my-2
                  -mx-8
                "
              ></button>

              <div
                v-if="index < 4"
                class="
                  cursor-default
                  timeline
                  z-0
                  border-opacity-100 border-mau-primary-400 border
                  absolute
                  top-3
                  md:left-0
                  left-10
                "
              ></div>

              <HorizontalTimelineText
                :date="info.date"
                :type="info.type"
                :title="info.description"
                :platform="info.platform"
                :image="info.image"
              />
            </div>
          </vue-horizontal>
        </div>
      </PageSection>
    </div>
  </div>
</template>


<script>
import IconifyIcon from '@iconify/vue'
import menu from '@iconify-icons/mdi/menu'
import facebook from '@iconify-icons/mdi/facebook'
import youtube from '@iconify-icons/mdi/youtube'
import twitter from '@iconify-icons/mdi/twitter'
import instagram from '@iconify-icons/mdi/instagram'
import VueHorizontal from 'vue-horizontal'

export default {
  data() {
    return {
      icons: {
        menu,
        facebook,
        youtube,
        twitter,
        instagram,
      },
    }
  },
  components: {
    VueHorizontal,
    IconifyIcon,
  },

  props: {
    titleContent: {
      type: Object,
      required: true,
    },
    liveContent: {
      type: Object,
      required: true,
    },
    timelineContent: {
      type: Object,
      required: true,
    },
    igContent: {
      type: Object,
      required: true,
    },
    podcastContent: {
      type: Object,
      required: true,
    },
  },
}
</script>

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


