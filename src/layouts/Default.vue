<template>
  <div id="app" dark>
    <Header />
    <slot></slot>
    <Footer v-if="footer !== false" />
    <!--/默认模板-->
  </div>
</template>

<script>
import Header from './partials/Header'
import Footer from './partials/Footer'

export default {
  props: ['footer', 'primary-bg'],
  components: {
    Header,
    Footer,
  },
  computed: {
    mainClass() {
      let classes = []
      if(this.primaryBg) classes.push('main--bg-teritary')
      return classes
    },
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#app main {
  flex: 1;
}
.main--bg-teritary {
  background-color: var(--bg-teritary);
}
</style>
