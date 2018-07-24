import React from 'react'
import { createSwitchNavigator } from 'react-navigation'
import AuthLoading from './screens/AuthLoading.vue'

const TopLevelNavigator = createSwitchNavigator(
  {
    Auth: AuthLoading,
  },
  {
    initialRouteName: 'Auth',
  }
)

export default TopLevelNavigator

