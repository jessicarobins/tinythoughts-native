<template>
  <style-wrapper v-if="isAppReady">
    <app-navigation />
  </style-wrapper>
</template>

<script>
import Vue from 'vue-native-core'
import Vuex from 'vuex'
import { VueNativeBase } from 'native-base'
import { AppLoading, Font } from 'expo'

import NavMenu from './src/components/NavMenu.vue'
import StyleWrapper from './src/components/StyleWrapper'
import AppNavigation from './src/routes'
import store from './src/store'

Vue.use(VueNativeBase)
Vue.use(Vuex)
Vue.prototype.$store = store

export default {
  name: 'App',
  components: {
    AppLoading,
    AppNavigation,
    NavMenu,
    StyleWrapper
  },
  data() {
    return {
      isAppReady: false
    }
  },
  mounted() {
    this.loadFonts()
  },
  methods: {
    async loadFonts() {
      try {
        this.isAppReady = false
        await Font.loadAsync({
          SpecialElite: require('./src/assets/fonts/SpecialElite-Regular.ttf'),
        })
      } catch (error) {
        console.log('some error occurred loading fonts', error)
      } finally {
        this.isAppReady = true
      }
    }
  }
}
</script>

<style>

</style>
