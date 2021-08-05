<template>
  <div class="container mx-auto md:flex my-8 md:my-18">
    <ul class="text-justify text-lg md:text-xl text-mau-primary-700 font-normal">
    <li><p>
      We provide volunteering and job opportunities with different levels of
      workload and challenges, and we promise there is something for everyone.
      If this sounds like a great opportunity to you, hop on board to join us,
      and we shall work together soon.
    </p></li>
    <br>
    <li><p>
      No postings available currently. But if you are interested to join us,  <a href="bit.ly/sayamaujoinmau" class="underline text-mau-primary-700 hover:text-blue-800 visited:text-purple-600 cursor-pointer"> be
      a member</a>
    </p></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: 'kid-hero.jpg',
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    sectionImage() {
      const imgUrl = new URL(`../assets/img/${this.img}`, import.meta.url)
      return imgUrl
    },
  },
}
</script>