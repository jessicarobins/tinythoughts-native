<template>
  <nb-container>
    <nb-spinner v-if="userIsLoading" />
    <app v-if="encryptionKey && !userIsLoading" />
    <auth v-if="!encryptionKey && !userIsLoading" />
  </nb-container>
</template>

<script>
import React from 'react'
import { mapGetters } from 'vuex'
import {
  createDrawerNavigator,
  createStackNavigator,
} from 'react-navigation'
import Home from './Home.vue'
import Login from './Login.vue'
import NavMenu from '../components/NavMenu.vue'
import SidebarDrawer from '../components/SidebarDrawer.vue'

const Drawer = createDrawerNavigator(
  {
    Home
  },
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SidebarDrawer {...props} />
  }
)

const AppStack = createStackNavigator({
  Drawer: Drawer,
}, {
  navigationOptions: {
    header: (props) => <NavMenu {...props} />
  }
})

const AuthStack = createStackNavigator({
  Login: Login,
}, {
  headerMode: 'none'
});

export default {
  name: 'AuthLoading',
  props: ['navigation'],
  components: {
    App: AppStack,
    Auth: AuthStack,
  },
  computed: {
    ...mapGetters([
      'encryptionKey',
      'isAuthenticated',
      'userIsLoading'
    ]),
  },
};
</script>

<style>

</style>
