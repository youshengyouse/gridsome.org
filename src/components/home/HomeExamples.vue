<template>
	<Section dots="true">
		<h2 class="container text-center">
      A better way to build websites & apps
    </h2>
    <p class="lead text-center container-md">
    	不论何种数据源，使用 Gridsome 构建现代网站都非常容易快速.
    </p>

		<div class="home-examples mb-x2">
			<Examples />
		</div>

    <p class="home-links text-center ">
      <g-link  to="/docs/" class="button primary button--large">
        入门
      </g-link>
    </p>
	</Section>
</template>

<script>
import Examples from '~/components/Examples.vue'
export default {
	components: {
		Examples
	}
}
</script>

<style>
.home-examples {
	margin: 0 auto;
	max-width: 960px;
}
</style>
