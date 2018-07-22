<template>
    <app-navigation />
</template>

<script>
import Vue from 'vue-native-core'
import Vuex from 'vuex'
import { VueNativeBase } from 'native-base'

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
    NavMenu
  },
};
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
