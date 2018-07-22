import React, { Component } from 'react'
import { StackNavigator, SwitchNavigator } from 'vue-native-router'
import router from './router'
import AuthLoading from './screens/AuthLoading.vue'
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

const TopLevelNavigator = SwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
    AuthLoading,
  },
  {
    initialRouteName: 'AuthLoading',
  }
)

class AppNavigation extends Component {
  setNavigator(navigatorRef) {
    console.log('setting navigatorRef')
    router.setTopLevelNavigator(navigatorRef)
  }

  render() {
    return (
      <TopLevelNavigator
        ref={this.setNavigator}
      />
    );
  }
}

export default AppNavigation
