# Overriding App.vue

`App.vue`它是套在所有的页面和模板外面的组件，可以理解为是一个超级布局，默认是没有这个文件的，如果有这个文件，它会替换index.html中的${app}部分. 你可以在 `<router-view>`外加一个组件`<transition>`，实现动画效果.

*提示: 添加`App.vue`文件后，需要重启 t `gridsome develop` .*

## 添加全局metadata

默认 `App.vue` 组件插入 `siteName` 和 `siteDescription` 作为全局metadata. 如果你自定义`App.vue`组件，得自已手动加入:

```html
<template>
  <router-view />
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$static.metadata.siteDescription
        }
      ]
    }
  }
}
</script>
```

## 所有页面共享一个布局

Having a layout component that is shared across all your pages is very useful. The following example wraps a layout component around `<router-view>`. The layout will not be re-rendered when you navigate between pages.

```html
<template>
  <MainLayout>
    <router-view />
  </MainLayout>
</template>

<script>
import MainLayout from '~/layouts/Main.vue'

export default {
  components: {
    MainLayout
  }
}
</script>
```

## 页面动画transitions

A custom `App.vue` file can also be used to have transition effects for your pages and templates.

```html
<template>
  <transition>
    <router-view />
  </transition>
</template>
```

[Read more about route transitions](https://router.vuejs.org/guide/advanced/transitions.html)
