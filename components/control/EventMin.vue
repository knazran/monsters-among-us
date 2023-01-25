<template>
    <div>
      <!-- <HeadingControl :title="titleContent.title" /> -->
  

      <!-- Podcast -->
      <div class="py-4">
        <div class="flex md:flex-row flex-col-reverse">
          <!-- Left Side-->
          <div
            class="
              md:w-1/2
              text-mau-secondary-900
              px-8
              md:mb-0 md:flex md:items-center md:justify-center
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
          <div class="md:w-1/2 lg:px-0 px-8 md:py-0">
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
  
     
    </div>
  </template>
  
  
  <script>
  export default {
    props: {
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
  
  
  