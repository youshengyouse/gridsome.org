<template>
  <transition>
    <router-view></router-view>   
  </transition>
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

}
</script>

<style>

</style>