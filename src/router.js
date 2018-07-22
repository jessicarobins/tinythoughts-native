import React from 'react'
import { StackNavigator } from 'vue-native-router'
import Login from './screens/Login.vue'
import NavMenu from './components/NavMenu.vue'

const AppNavigation = StackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        title: 'Login',
      }
    }
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      header: (navigation) => <NavMenu navigation={navigation} />
    }
  }
)

export default AppNavigation
