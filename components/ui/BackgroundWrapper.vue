<template>
  <div :style="{ backgroundImage: getBackgroundImage}">
    <slot></slot>
  </div>
</template>

<script>
import TextureBeige from '~/static/img/textures/texture-beige-2.png'
import TextureGreen from '~/static/img/textures/texture-green-2.png'
import TextureRadial from '~/static/img/textures/radial.png'

export default {
  props: {
    color: {
      type: String,
      default: 'beige',
    },
  },
  data() {
    return {
      bgBeige: TextureBeige,
      bgGreen: TextureGreen,
      bgRadial: TextureRadial,

    }
  },
  computed: {
    getBackgroundImage() {
        if (this.color === 'beige') {
            return `url(${this.bgBeige})`
        }
        if (this.color === 'green') {
            return `url(${this.bgGreen})`
        }
         if (this.color === 'radial') {
            return `url(${this.bgGreen})`
        }
        else {
            return `url(${this.bgBeige})`
        }
      
    },
  },
}
</script>
