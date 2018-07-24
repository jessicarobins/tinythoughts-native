import React, { Component } from 'react'
import {
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation'
import AuthLoading from './screens/AuthLoading'
import Home from './screens/Home.vue'
import Login from './screens/Login.vue'
import LoginSignup from './screens/LoginSignup.vue'
import NavMenu from './components/NavMenu.vue'
import SidebarDrawer from './components/SidebarDrawer.vue'
import router from './router'

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
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login'
    }
  },
  LoginSignup,
}, {
  initialRouteName: 'LoginSignup',
  headerMode: 'screen',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#fff',
      borderBottomWidth: 0
    },
    headerTintColor: '#7957D5'
  }
});

const TopLevelNavigator = createSwitchNavigator(
  {
    AuthLoading,
    App: AppStack,
    Auth: AuthStack,
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

