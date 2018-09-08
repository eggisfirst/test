<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import Vue from 'vue'


export default {
  name: 'App'
}
</script>

<style>

</style>
