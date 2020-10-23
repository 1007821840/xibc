<template>
  <div id="app">
    <keep-alive>
    <router-view/>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>

<script>
  import MainTabBar from '@/components/content/mainTabbar/MainTabBar'

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
@import "./assets/base.css";
  body {  
  width: 100vw;  
  overflow: hidden;  
  padding-left: calc(100vw - 100%);  
}  


</style>
