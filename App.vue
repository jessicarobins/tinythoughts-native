<template>
  <root>
    <style-wrapper>
      <app-navigation />
    </style-wrapper>
  </root>
</template>

<script>
import Vue from 'vue-native-core'
import Vuex from 'vuex'
import { Root, VueNativeBase } from 'native-base'

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
    AppNavigation,
    NavMenu,
    Root,
    StyleWrapper
  },
}
</script>
