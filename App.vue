<template>
  <style-wrapper>
    <app-navigation />
  </style-wrapper>
</template>

<script>
import Vue from 'vue-native-core'
import Vuex from 'vuex'
import { VueNativeBase } from 'native-base'
import StyleWrapper from './src/components/StyleWrapper'

import AppNavigation from './src/router'
import NavMenu from './src/components/NavMenu.vue'
import store from './src/store'

Vue.use(VueNativeBase)
Vue.use(Vuex)
Vue.prototype.$store = store

export default {
  name: 'App',
  components: {
    AppNavigation,
    NavMenu,
    StyleWrapper
  },
}
</script>

<style>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: blue;
}
</style>
