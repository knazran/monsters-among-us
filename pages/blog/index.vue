<template>
  <BackgroundWrapper color='beige'>
    <div class="py-12">
      <div class="md:py-4 relative z-10">
        <div class="px-6 sm:px-24 lg:px-36" id="blog-posts">
          <PageTitle title="Blog" />
          <div class="py-4 lg:space-x-4 ">
                    <button @click="setTopics('All')" :class='buttonProperties("All")'>
                      <p class="text-black font-light text-xs md:text-base"> All</p>

                      
                    </button>
                    <button  @click="setTopics('General')" :class='buttonProperties("General")'>
                      <p class="text-black font-light text-xs md:text-base">General</p>
                    </button>
                    <button  @click="setTopics('Law')" :class='buttonProperties("Law")'>
                      <p class="text-black font-light text-xs md:text-base"> Law</p>
                    </button>
                    <button  @click="setTopics('Harassment')" :class='buttonProperties("Harassment")'>
                      <p class="text-black font-light text-xs md:text-base"> Harassment</p>
                    </button>
                    <button  @click="setTopics('Abuse')" :class='buttonProperties("Abuse")'>
                      <p class="text-black font-light text-xs md:text-base">Abuse</p>
                    </button>
                    <button  @click="setTopics('Awareness')" :class='buttonProperties("Awareness")'>
                      <p class="text-black font-light text-xs md:text-base">Awareness</p>
                    </button>
                    <button  @click="setTopics('Equality')" :class='buttonProperties("Equality")'>
                      <p class="text-black font-light text-xs md:text-base">Equality</p>
                    </button>
                    <button  @click="setTopics('Gender')" :class='buttonProperties("Gender")'>
                      <p class="text-black font-light text-xs md:text-base">Gender</p>
                    </button>
                    <button  @click="setTopics('Survivor')" :class='buttonProperties("Survivor")'>
                      <p class="text-black font-light text-xs md:text-base">Survivor</p>
                    </button>
            </div>    
        </div>


          <div
            class="
             
                  
                  lg:px-36
                  sm:px-24
                  px-6
            "
          >
         
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
      </div>
      <div class="md:block hidden md:fixed md:bottom-0 md:right-0">
        <img class="object-contain h-56 lg:h-72 xl:h-96 2xl:h-100" :src="bgBlog" />
      </div>
    </div>
  </BackgroundWrapper>
</template>

<script>
import bgBlog from '~/static/img/img_bg/gotta_read_this_bg.png'
export default {
  async asyncData({ $content }) {
    const posts = await $content('blog').sortBy('date', 'desc').fetch()
    console.log("postss ",posts)
    return {
      posts,
    }
  },
  data() {
    return {
      bgBlog,
      selectedTopic: "All",

    }
  },
  methods: {
  setTopics(topic) {
    this.selectedTopic=topic
    console.log(this.selectedTopic)
  },
  buttonProperties(topic){
    if (this.selectedTopic===topic)
    {
      return ' bg-gray-300 active:bg-violet-100 focus:outline-none focus:ring focus:ring-violet-100 hover:bg-gray-200 text-white font-bold py-2 px-4 rounded-lg'
    }
    else {
      return ' hover:bg-gray-300 text-white font-bold py-2 px-4  focus:outline-none rounded-lg	 '

    }
  }
  
},
computed: {
  postsFiltered() {
    if (this.selectedTopic==="All"){return this.posts}
    else if(this.selectedTopic!=="All"){
      // return this.posts.filter(p => p.keyword.includes(this.selectedTopic));
     
        return this.posts.filter(p => JSON.parse(JSON.stringify(p.keyword)).includes(this.selectedTopic));
        // if(this.posts[i].keyword!==undefined){
        //   console.log( JSON.parse(JSON.stringify(this.posts[i].keyword)).includes(this.selectedTopic))

        // }

    }
    // return this.posts.data.filter(p => p.topic === this.selectedTopic);
  },
 
  
}
}
</script>
