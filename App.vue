<template>
  <nb-container>
    <nav-menu />
    <app-navigation />
  </nb-container>
</template>

<script>
import Vue from 'vue-native-core';
import { VueNativeBase } from 'native-base';
import Vuex from 'vuex'

import AppNavigation from './src/router'
import NavMenu from './src/components/NavMenu.vue'

Vue.use(VueNativeBase)
Vue.use(Vuex)

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
