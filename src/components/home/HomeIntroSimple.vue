<template>
  <Section class="intro" dots="true">
    <div class="container text-center ">

        <h1 class="intro__title">
          <span>基于Vue.js开发的Jamstack框架</span>
        </h1>

        <p class="intro__lead lead post mb">
          使用Gridsome构建静态网站和应用，不但容易，且 <g-link to="/docs/fast-by-default/">速度快</g-link> 🚀
        </p>

        <p class="intro__links">
          <g-link  to="/docs/" class="button primary button--large">
            <span>入门</span>
          </g-link>
        </p>

        <p class="intro__info">
          <span>Open-source MIT Licensed. </span>
          <a href="//github.com/gridsome/gridsome" target="_blank" rel="noopener noreferrer">
            <span>GitHub (v{{ $static.metadata.gridsomeVersion }})</span>
          </a>
        </p>
    </div>
  </Section>
</template>

<static-query>
query {
  metadata {
    gridsomeVersion
  }
}
</static-query>

<style lang="scss">
.intro {
  padding: calc(2% + var(--space)) 0;

  &__title {
    font-size: 3rem;
    font-weight: 600;
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 850px) {
      & {
        font-size: 2rem;
      }
    }
  }

  &__lead {
    max-width: 650px;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.3rem;

    @media screen and (max-width: 850px) {
      & {
        font-size: 1rem;
      }
    }
  }

  &__info {
    font-size: .9rem;
  }

  &__keywords {
    position: relative;
    display: block;
  }
}
</style>
