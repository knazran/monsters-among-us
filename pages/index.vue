<template>
  <div class="overflow-x-hidden">

    <MainHero />
    <PanelTwo />
    <PanelThree />
    <PanelFour />
    <PanelFive />
    <PanelSix />
    <PanelSeven />
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
}
</script>
