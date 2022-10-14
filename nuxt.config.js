import axios from 'axios'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  ssr: false,
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Monsters Among Us',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Monsters Among Us (MAU) is a non-profit organisation that combats systemic violence against children in Malaysia through youth-led child rights advocacy.',
      },
      { hid: 'keywords', name: 'keywords', content: 'ngo, malaysia, child sexual abuse, advocacy, awareness, child rights' },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Monsters Among Us'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Monsters Among Us (MAU) is a non-profit organisation that combats systemic violence against children in Malaysia through youth-led child rights advocacy.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/static/mau-logo.png'
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'Monsters Among Us'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Monsters Among Us'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Monsters Among Us (MAU) is a non-profit organisation that combats systemic violence against children in Malaysia through youth-led child rights advocacy.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/static/mau-logo.png'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: '/static/mau-logo.png'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Monsters Among Us'
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap'
      },
      {rel:"preconnect", href:"https://fonts.gstatic.com/" },

      {
      rel:'stylesheet',
      href:'https://fonts.cdnfonts.com/css/coco-gothic'
      },
      { rel:'stylesheet',
        href:'https://fonts.cdnfonts.com/css/hk-groteks'
        },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/node_modules/vue-slick-carousel/dist/vue-slick-carousel.css',
    '~/node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css',

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [ 

    { src: '~/plugins/vue-scroll-reveal', ssr: false }

],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,
  components: {
    dirs: [
      '~/components',
      '~/components/menu',
      '~/components/ui',
      '~/components/cards',
      '~/components/button',
      '~/components/homepage',
    ],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',

    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-vite',
    '@nuxtjs/imagemin',
    '@nuxtjs/google-gtag'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},
  generate: {
    async routes($content) {
      {
        const posts = await $content('blog').sortBy('date', 'desc').fetch()
        return posts.map(blog => {
          return 'blog/' + blog.slug
        })
      }
    }
  },

  'google-gtag': {
    // Options
    id: 'G-K6RMNE6D1K',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isDev, isClient }) {
      // ..
      config.module.rules.push({
        test: /\.js$/,
        loader: require.resolve('@open-wc/webpack-import-meta-loader'),
      })
      // Sets webpack's mode to development if `isDev` is true.
      if (isDev) {
        config.mode = 'development'
      }
    },
  },
}
