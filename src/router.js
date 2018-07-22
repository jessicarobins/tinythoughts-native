import React from 'react'
import { StackNavigator, SwitchNavigator } from 'vue-native-router'
import Home from './screens/Home.vue'
import Login from './screens/Login.vue'
import NavMenu from './components/NavMenu.vue'

const AppStack = StackNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
      }
    },
  },
  {
    navigationOptions: {
      header: (navigation) => <NavMenu navigation={navigation} />
    }
  }
);

const AuthStack = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
    }
  }
});

const AppNavigation = SwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'App',
  }
)

export default AppNavigation
