<template>
  <BackgroundWrapper color="beige">
    <div class="py-12">
<<<<<<< Updated upstream
      <div class="md:py-4 relative z-10">
        <PageSection id="blog-posts">
          <PageTitle title="Gotta Read This!" />
          <div
            class="
              grid
              md:grid-cols-2
              xl:grid-cols-3
              2xl:grid-cols-4
              gap-8
              py-8
            "
          >
            <!-- Need to add text -->
            <div v-for="post of posts" :key="post.slug">
              <NuxtLink :to="`blog/${post.slug}`">
                <AdvancedThumbnailCard
                  :is-large="true"
                  :is-blog="true"
                  :author="post.author"
                  :date="post.date"
                  :title="post.title"
                  :img="post.image"
                  :content="post"
                />
              </NuxtLink>
            </div>
          </div>
        </PageSection>
      </div>
      <div class="md:fixed md:bottom-0 md:right-0">
        <img class="object-contain h-56 lg:h-72 xl:h-96 2xl:h-100" :src="bgBlog" />
=======
      <PageTitle class="px-6 sm:px-12 lg:px-36 " title="Blog" />

             <!-- Button Small-->
             <div class=" lg:hidden block container sm:px-2 mx-auto" id="blog-posts">
          <div class="mt-4 ">
            <button @click="setTopics('All')" :class="buttonProperties('All')">
              <p class="text-black font-light text-xs md:text-base">All</p>
            </button>
            <button
              @click="setTopics('General')"
              :class="buttonProperties('General')"
            >
              <p class="text-black font-light text-xs md:text-base">General</p>
            </button>
            <button @click="setTopics('Law')" :class="buttonProperties('Law')">
              <p class="text-black font-light text-xs md:text-base">Law</p>
            </button>
            <button
              @click="setTopics('Harassment')"
              :class="buttonProperties('Harassment')"
            >
              <p class="text-black font-light text-xs md:text-base">
                Harassment
              </p>
            </button>
            <button
              @click="setTopics('Abuse')"
              :class="buttonProperties('Abuse')"
            >
              <p class="text-black font-light text-xs md:text-base">Abuse</p>
            </button>
            <button
              @click="setTopics('Awareness')"
              :class="buttonProperties('Awareness')"
            >
              <p class="text-black font-light text-xs md:text-base">
                Awareness
              </p>
            </button>
            <button
              @click="setTopics('Equality')"
              :class="buttonProperties('Equality')"
            >
              <p class="text-black font-light text-xs md:text-base">Equality</p>
            </button>
            <button
              @click="setTopics('Gender')"
              :class="buttonProperties('Gender')"
            >
              <p class="text-black font-light text-xs md:text-base">Gender</p>
            </button>
            <button
              @click="setTopics('Survivor')"
              :class="buttonProperties('Survivor')"
            >
              <p class="text-black font-light text-xs md:text-base">Survivor</p>
            </button>
          </div>
        </div>

                <!-- Button-->

      <div class="lg:py-4 lg:px-24 lg:flex lg:relative  z-10">
        <div class="lg:w-2/3  lg:overflow-auto px-6">
          <!-- Need to add text -->
          <div v-for="post of postsFiltered" :key="post.slug">
            <!-- <NuxtLink :to="`blog/${post.slug}`"> -->
            <div class="">
              <AdvancedThumbnailList
                :is-large="true"
                :is-blog="true"
                :author="post.author"
                :date="post.date"
                :title="post.title"
                :img="post.image"
                :content="post"
                :description="post.description"
                :keyword="post.keyword"
                :slug="post.slug"
              />
            </div>
          </div>
        </div>
        <!-- Button-->
        <div class="lg:block lg:fixed right-0 top-50 flex hidden lg:w-1/3 px-6 sm:px-24" id="blog-posts">
          <p class="font-semibold px-4">Topics:</p>
          <div class="  flex-row  space-y-2 py-4 ">
            <button @click="setTopics('All')" :class="buttonProperties('All')">
              <p class="text-black font-light text-xs md:text-base">All</p>
            </button>
            <button
              @click="setTopics('General')"
              :class="buttonProperties('General')"
            >
              <p class="text-black font-light text-xs md:text-base">General</p>
            </button>
            <button @click="setTopics('Law')" :class="buttonProperties('Law')">
              <p class="text-black font-light text-xs md:text-base">Law</p>
            </button>
            <button
              @click="setTopics('Harassment')"
              :class="buttonProperties('Harassment')"
            >
              <p class="text-black font-light text-xs md:text-base">
                Harassment
              </p>
            </button>
            <button
              @click="setTopics('Abuse')"
              :class="buttonProperties('Abuse')"
            >
              <p class="text-black font-light text-xs md:text-base">Abuse</p>
            </button>
            <button
              @click="setTopics('Awareness')"
              :class="buttonProperties('Awareness')"
            >
              <p class="text-black font-light text-xs md:text-base">
                Awareness
              </p>
            </button>
            <button
              @click="setTopics('Equality')"
              :class="buttonProperties('Equality')"
            >
              <p class="text-black font-light text-xs md:text-base">Equality</p>
            </button>
            <button
              @click="setTopics('Gender')"
              :class="buttonProperties('Gender')"
            >
              <p class="text-black font-light text-xs md:text-base">Gender</p>
            </button>
            <button
              @click="setTopics('Survivor')"
              :class="buttonProperties('Survivor')"
            >
              <p class="text-black font-light text-xs md:text-base">Survivor</p>
            </button>
          </div>
        </div>

                <!-- Button-->

      </div>
      <div class="lg:block hidden lg:fixed lg:-bottom-12 lg:right-0">
        <img
          class="object-contain h-56 lg:h-72 xl:h-96 2xl:h-100"
          :src="bgBlog"
        />
>>>>>>> Stashed changes
      </div>
    </div>
  </BackgroundWrapper>
</template>

<script>
import bgBlog from '~/static/img/img_bg/gotta_read_this_bg.png'
export default {
  async asyncData({ $content }) {
    const posts = await $content('blog').sortBy('date', 'desc').fetch()
<<<<<<< Updated upstream
    console.log("posts ",posts)
=======
    console.log('postss ', posts)
>>>>>>> Stashed changes
    return {
      posts,
    }
  },
  data() {
    return {
      bgBlog,
<<<<<<< Updated upstream
    }
=======
      selectedTopic: 'All',
    }
  },
  methods: {
    setTopics(topic) {
      this.selectedTopic = topic
      console.log(this.selectedTopic)
      window.scrollTo(0,0);
    },
    buttonProperties(topic) {
      if (this.selectedTopic === topic) {
        return ' mx-1 bg-gray-300 active:bg-violet-100 focus:outline-none focus:ring focus:ring-violet-100 hover:bg-gray-200 text-white font-bold py-2 px-4 rounded-lg'
      } else {
        return ' mx-1 hover:bg-gray-300 text-white font-bold py-2 px-4  focus:outline-none rounded-lg	 '
      }
    },
  },
  computed: {
    postsFiltered() {
      if (this.selectedTopic === 'All') {
        return this.posts
      } else if (this.selectedTopic !== 'All') {
        // return this.posts.filter(p => p.keyword.includes(this.selectedTopic));

        return this.posts.filter((p) =>
          JSON.parse(JSON.stringify(p.keyword)).includes(this.selectedTopic)
        )
        // if(this.posts[i].keyword!==undefined){
        //   console.log( JSON.parse(JSON.stringify(this.posts[i].keyword)).includes(this.selectedTopic))

        // }
      }
      // return this.posts.data.filter(p => p.topic === this.selectedTopic);
    },
>>>>>>> Stashed changes
  },
}
</script>
