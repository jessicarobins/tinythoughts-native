<template>
  <root>
    <style-wrapper v-if="isAppReady">
      <app-navigation />
    </style-wrapper>
    <view
      v-else
      :style="{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }">
      <image
        :source="logo"
        resizeMode="contain"
        :style="{ width: '100%', height: 200 }" />
    </view>
  </root>
</template>

<script>
import Vue from 'vue-native-core'
import Vuex from 'vuex'
import { Root, VueNativeBase } from 'native-base'
import { AppLoading, Font } from 'expo'

import logo from './src/assets/images/notebook.png'
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
    Root,
    StyleWrapper
  },
  data() {
    return {
      isAppReady: false,
      logo
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
          Roboto: require('native-base/Fonts/Roboto.ttf'),
          Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
          SpecialElite: require('./src/assets/fonts/SpecialElite-Regular.ttf'),
        })
      } catch (error) {
        console.log('some error occurred loading fonts', error)
      }

      this.isAppReady = true
    }
  }
}
</script>

<style>

</style>
