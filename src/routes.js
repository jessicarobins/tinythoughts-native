import React from 'react'
import { SwitchNavigator } from 'vue-native-router'
import AuthLoading from './screens/AuthLoading.vue'

const TopLevelNavigator = SwitchNavigator(
  {
    Auth: AuthLoading,
  },
  {
    initialRouteName: 'Auth',
  }
)

export default TopLevelNavigator

